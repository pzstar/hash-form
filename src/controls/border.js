import {__} from '@wordpress/i18n';
import {Tooltip} from '@wordpress/components';
import {ClearIcon} from '../utils/svgicons';

const BorderControl = ({label, value, setValue}) => {
    const borderStyles = [
        ["solid", __("Solid", 'hash-form')],
        ["dotted", __("Dotted", 'hash-form')],
        ["dashed", __("Dashed", 'hash-form')],
        ["double", __("Double", 'hash-form')]
    ];
    const onClearHandler = (e) => {
        setValue('');
    }
    return <>
        <div className="hf-field hf-field-border">
            <label>{__('Border', 'hash-form')}</label>
            <div className="hf-field-button-list">
                <Tooltip text={__('Clear', 'hash-form')}>
                    <div className="hf-reset-field"
                        onClick={onClearHandler}>
                        <span className="hf-clear-field" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <div className="hf-field-button-wrap">
                    {borderStyles.map((style, index) => (
                        <Tooltip
                            text={style[1]}
                            key={index}>
                            <button
                                className={`${value && value == style[0] ? "active" : ""} hf-button`}
                                onClick={() => {setValue(style[0])}}
                            >
                                <span className={`hf-field-border-type hf-field-border-type-${style[0]}`} />
                            </button>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div >
    </>
}
export default BorderControl;