import {registerBlockType} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import {HashFormIcon} from '../../utils/svgicons';

import {__} from '@wordpress/i18n';

registerBlockType('hash-form/form-selector', {
    icon: <HashFormIcon />,
    supports: {
        "html": false
    },
    category: "widgets",
    title: __("Hash Form", 'hash-form'),
    description: __("Select and display one of your forms.", 'hash-form'),
    keywords: ["form", "contact"],
    edit: Edit,
    save,
});
