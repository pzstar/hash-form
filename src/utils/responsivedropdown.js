/**
 * External dependencies
 */
import classnames from 'classnames';
import {DesktopIcon, TabletIcon, PhoneIcon} from './svgicons';

/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {useSelect, useDispatch} from '@wordpress/data';

const ResponsiveDropdown = ({label, className, children}) => {
    const getView = useSelect(select => {
        const {getView} = select('hash-form/data');
        const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    });

    const {updateView} = useDispatch('hash-form/data');
    const {__experimentalSetPreviewDeviceType} = useDispatch('core/edit-post') ? useDispatch('core/edit-post') : false;
    const setView = __experimentalSetPreviewDeviceType ? __experimentalSetPreviewDeviceType : updateView;

    return (
        <div className="hf-device active-md">
            <button
                title={__('Desktop', 'hash-form')}
                className={`hf-device-desktop ${getView === 'Desktop' ? " active" : ""}`}
                onClick={() => {setView('Desktop')}}
            >
                <DesktopIcon />
            </button>
            <button
                title={__('Tablet', 'hash-form')}
                className={`hf-device-tablet ${getView === 'Tablet' ? " active" : ""}`}
                onClick={() => {setView('Tablet')}}
            >
                <TabletIcon />
            </button>
            <button
                title={__('Phone', 'hash-form')}
                className={`hf-device-mobile ${getView === 'Mobile' ? " active" : ""}`}
                onClick={() => {setView('Mobile')}}
            >
                <PhoneIcon />
            </button>
        </div>
    );
};

export default ResponsiveDropdown;