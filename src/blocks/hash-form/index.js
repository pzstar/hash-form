/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import {HashFormIcon} from '../../utils/svgicons';

import {__} from '@wordpress/i18n';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('hash-form/form-selector', {
    icon: <HashFormIcon />,
    supports: {
        "html": false
    },
    category: "widgets",
    title: __("Hash Form", 'hash-form'),
    description: __("Select and display one of your forms.", 'hash-form'),
    keywords: ["form", "contact"],
    /**
     * @see ./edit.js
     */
    edit: Edit,
    /**
     * @see ./save.js
     */
    save,
});
