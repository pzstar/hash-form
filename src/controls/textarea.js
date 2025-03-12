import {__} from '@wordpress/i18n';
import {TextareaControl as TxtareaControl} from '@wordpress/components';

const TextareaControl = ({label, value, setValue}) => {
    return <>
        <div className="hf-field hf-field-textarea">
            {label && (<label className="hf-label">{label}</label>)}
            <div class="hf-field-child">
                <TxtareaControl
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    </>;
}

export default TextareaControl;