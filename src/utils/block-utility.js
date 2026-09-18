import {v4 as uuidv4} from 'uuid';

import {isEqual} from 'lodash';
import {dispatch, select} from '@wordpress/data';


/**
 * Block ids in use, per block name, to prevent duplicates on create, duplicate and copy.
 * @type {Object.<string, Set.<string>>}
 */
const localIDs = {};

/**
 * Generate an id from the block's client id, falling back to a random uuid when that id is taken.
 * @param {string} idPrefix The prefix used for generating the block id
 * @param {string} clientId The block's client id provided by WordPress
 * @param {Set.<string>} idsList The ids list for the current type of block
 * @returns {string} Unique id.
 */
const generateUniqIdInstance = (idPrefix, clientId, idsList) => {
	const instanceId = `${idPrefix}${clientId.substr(0, 8)}`;
	if (idsList.has(instanceId)) {
		let newInstanceId = `${idPrefix}${uuidv4().substr(0, 8)}`;
		while (idsList.has(newInstanceId)) {
			newInstanceId = `${idPrefix}${uuidv4().substr(0, 8)}`;
		}
		return newInstanceId;
	}
	return instanceId;
};

/**
 * Generate the id prefix based on the name of the block
 * @param {string} name Name of the block
 * @returns {string}
 */
const generatePrefix = (name) => {
	return `wp-block-${name.replace('/', '-')}-`;
};

/**
 * Args for addBlockId().
 * @typedef {Object} AddBlockIdProps
 * @property {Object} attributes The block's attributes provided by WordPress
 * @property {function} setAttributes The block's attributes update function provided by WordPress
 * @property {string} name The block's name provided by WordPress
 * @property {string} clientId The block's client id provided by WordPress
 * @property {Object} defaultAttributes The default attributes of the block.
 * @property {(string|undefined)} idPrefix (Optional) The prefix used for generating the block id
 */


/**
 * Give the block a unique id, regenerating it when the block is a duplicate or copy.
 * @param {AddBlockIdProps} args Block data.
 * @return {Function} Removes the id from the tracking list.
 * @external addBlockId
 */
export const addBlockId = (args) => {

	const {attributes, setAttributes, clientId, idPrefix, name, defaultAttributes} = args;

	if (attributes === undefined || setAttributes === undefined) {
		return (savedId) => {
			localIDs[name]?.delete(savedId);
		};
	}

	localIDs[name] ??= new Set();

	const prefix = idPrefix || generatePrefix(name);

	const instanceId = generateUniqIdInstance(prefix, clientId, localIDs[name]);
	const idIsAlreadyUsed = attributes.id && localIDs[name].has(attributes.id);

	if (attributes.id === undefined) {
		setAttributes({id: instanceId});
		localIDs[name].add(instanceId);
	} else if (idIsAlreadyUsed) {
		// A copy of an existing block: give it a new id.
		setAttributes({id: instanceId});
		localIDs[name].add(instanceId);
	} else {
		localIDs[name].add(attributes.id);
	}

	const deleteBlockIdFromRegister = (savedId) => {
		if (attributes.id !== undefined && !idIsAlreadyUsed) {
			localIDs[name].delete(attributes?.id || savedId);
		} else {
			localIDs[name].delete(instanceId || savedId);
		}
	};

	return deleteBlockIdFromRegister;
};


const getBlock = select('core/block-editor').getBlock;
const updateBlockAttributes = dispatch('core/block-editor').updateBlockAttributes;

/**
 * A `setAttributes` equivalent bound to a client id.
 * @param {*} clientId The block's client id provided by WordPress
 * @returns {Function} Function that mimics `setAttributes`
 */
const updateAttrs = (clientId) => (attr) => {
	updateBlockAttributes(clientId, attr);
};

/**
 * Block data read from the block editor store.
 * @typedef {Object} BlockData
 * @property {Object} attributes The block's attributes provided by WordPress
 * @property {function} setAttributes The block's attributes update function provided by WordPress
 * @property {string} name The block's name provided by WordPress
 */


/**
 * Extract the attributes, setAttributes, and the name of the block using the data api
 * @param {string} clientId The block's client id provided by WordPress
 * @returns {BlockData}
 */
const extractBlockData = (clientId) => {
	const block = getBlock(clientId);
	return {attributes: block?.attributes, name: block?.name};
};

/**
 * Generate the id attribute for the given block. Wrapper around {@link addBlockId}.
 * @param {string} clientId The block's client id provided by WordPress
 * @param {Object} defaultAttributes The default attributes of the block.
 * @return {Function} Removes the id from the tracking list.
 * @example
 * import defaultAttributes from './attributes'
 * const Block = ({ cliendId }) => {
 * 		useEffect(() => {
 * 			const unsubscribe = blockInit(clientId, defaultAttributes);
 * 			return () => unsubscribe( attributes.id );
 * 		}, [ attributes.id ])
 * }
 */
export const blockInit = (clientId, defaultAttributes) => {
	return addBlockId({
		clientId,
		defaultAttributes,
		setAttributes: updateAttrs(clientId),
		...extractBlockData(clientId)
	});
};
