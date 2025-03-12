import {__} from '@wordpress/i18n';
import {TextControl as TxtControl} from '@wordpress/components';

const TextControl = ({label, value, setValue}) => {
    return <>
        <div className="hf-field hf-field-text hf-display-inline">
            {label && (<label>{label}</label>)}
            <div class="hf-field-child">
                <TxtControl
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    </>;
}

export default TextControl;