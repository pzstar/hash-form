'use strict';

const {createElement} = wp.element;
const {registerBlockType} = wp.blocks;
const {InspectorControls} = wp.blockEditor;
const {serverSideRender: ServerSideRender} = wp;
const {PanelBody, SelectControl, ToggleControl,TextControl,RadioControl, Placeholder} = wp.components;

const HashFormIcon = <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="48.000000pt" height="53.000000pt" viewBox="0 0 48.000000 53.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M62 458 c-7 -7 -12 -18 -12 -26 0 -7 -4 -11 -9 -8 -4 3 -7 -7 -5 -22 6 -52 6 -247 -1 -264 -4 -11 0 -20 15 -28 11 -6 18 -15 15 -19 -2 -5 1 -14 9 -20 11 -9 18 -8 32 6 22 22 72 26 101 7 31 -19 74 -14 102 14 20 20 25 21 40 9 9 -8 23 -17 31 -20 9 -3 10 -6 3 -6 -7 -1 -13 -6 -13 -11 0 -7 6 -7 19 -1 10 6 22 7 26 3 5 -4 5 -2 2 4 -4 7 2 14 12 17 12 3 22 -1 25 -9 7 -19 26 -18 26 1 0 8 -5 15 -11 15 -6 0 -9 6 -6 12 18 50 20 63 6 51 -11 -9 -14 -6 -15 18 -1 15 2 27 5 25 3 -2 6 45 6 104 0 59 -3 106 -7 104 -4 -3 -4 -12 -1 -21 4 -10 2 -14 -5 -9 -13 8 -12 46 1 46 6 0 -2 9 -16 20 -14 11 -33 20 -44 20 -22 -1 -74 -29 -54 -30 8 0 12 -2 9 -5 -9 -9 -38 7 -38 21 0 10 -15 14 -60 14 -48 0 -63 -4 -80 -22 l-20 -22 -16 22 c-17 24 -53 29 -72 10z m58 -182 l0 -173 -25 5 -25 4 0 162 c0 90 3 166 7 169 3 4 15 7 25 7 17 0 18 -12 18 -174z m180 98 c0 -41 4 -73 8 -70 4 2 9 -9 10 -25 2 -20 -1 -28 -8 -24 -6 4 -9 13 -6 20 8 21 -16 35 -61 35 -30 0 -45 -5 -49 -15 -8 -19 -31 -20 -31 -1 0 8 6 12 14 9 10 -4 13 12 13 71 l0 76 55 0 55 0 0 -76z m118 -95 l2 -167 -25 -4 -25 -5 0 174 0 174 23 -3 c22 -3 22 -5 25 -169z m-118 -99 l0 -70 -55 0 -55 0 0 70 0 70 55 0 55 0 0 -70z"/>
</g>
</svg>;

registerBlockType('hash-form/form-selector', {
	title: hash_form_block_data.i18n.title,
	icon: HashFormIcon,
	category: 'widgets',
	keywords: hash_form_block_data.i18n.form_keywords,
	description: hash_form_block_data.i18n.description,
	attributes: {
		formId: {
			type: 'string',
		},
	},

	edit(props) {
		const {attributes: {formId = '', displayTitle = false, displayDescription = false}, setAttributes} = props;
		const formOptions = Object.entries(hash_form_block_data.forms).map(value => ({
			value: value[0],
			label: value[1]
		}));
		let jsx;

		formOptions.unshift({
			value: '',
			label: hash_form_block_data.i18n.form_select
		});

		function selectForm(value) {
			setAttributes({formId: value});
		}

		function toggleDisplayTitle(value) {
			setAttributes({displayTitle: value});
		}

		function toggleDisplayDescription(value) {
			setAttributes({displayDescription: value});
		}

		jsx = [
			<InspectorControls key="hash-form-selector-inspector-controls">
				<PanelBody title={hash_form_block_data.i18n.form_settings}>
					<SelectControl
						label={hash_form_block_data.i18n.form_selected}
						value={formId}
						options={formOptions}
						onChange={selectForm}
					/>
				</PanelBody>
			</InspectorControls>
		];

		if (formId) {
			jsx.push(
				<ServerSideRender
					key="hash-form-selector-server-side-renderer"
					block="hash-form/form-selector"
					attributes={props.attributes}
				/>
			);
		} else {
			jsx.push(
				<Placeholder
					key="hash-form-selector-wrap"
					icon={HashFormIcon}
					instructions={hash_form_block_data.i18n.title}
					className="hash-form-gutenberg-form-selector-wrap">
					<SelectControl
						key="hash-form-selector-select-control"
						value={formId}
						options={formOptions}
						onChange={selectForm}
					/>
				</Placeholder>
			);
		}
		return jsx;
	},
	save() {
		return null;
	},
});
