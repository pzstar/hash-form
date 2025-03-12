import {Tooltip} from '@wordpress/components';

const AdvancedRadio = ({options, value, setValue, label}) => {
    return <div className="hf-field hf-field-radio-advanced">
        {label && (<label>{label}</label>)}
        <div className="hf-field-button-wrap">
            {options.map(function (option, key) {
                return <Tooltip text={option.title || option.value}>
                    <button
                        className={`${value == option.value ? "active" : ""} hf-button`}
                        key={key}
                        onClick={() => setValue(option.value)}>
                        {option.icon ? <i className={option.icon} /> : option.svg ? <span className={"hf-option-svg"}>{option.svg}</span> : option.label}
                    </button>
                </Tooltip>;
            })}
        </div>
    </div>
}

export default AdvancedRadio;