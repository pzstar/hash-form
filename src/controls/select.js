import {__} from '@wordpress/i18n';
const SelectControl = ({label, options, value, onChange, inline = !0}) => {
    const onChangeHandler = (e) => {
        onChange(e.target.value);
    }
    return <>
        <div className={`hf-field ${inline ? 'hf-field-select hf-display-inline' : ''}`}>
            {label && (<label className={`${inline ? '' : 'hf-label'}`}>{label}</label>)}
            <div class="hf-input-fields">
                <div class="hf-popup-select">
                    <select
                        value={value}
                        onChange={onChangeHandler}>
                        {options && options.map((obj, i) => {
                            return <option value={obj.value} key={obj.value}>{obj.label}</option>
                        }
                        )}
                    </select>
                </div>
            </div>
        </div>
    </>;
}

export default SelectControl;