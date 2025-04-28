import {__} from '@wordpress/i18n';
import ResponsiveDropdown from '../utils/responsivedropdown';
import {useSelect} from '@wordpress/data';
import {useState, useEffect} from '@wordpress/element';

const RangeSliderControl = ({
    label,
    min,
    max,
    steps,
    useUnit,
    responsive,

    value,
    setValue,
    valueSm,
    setValueSm,
    valueMd,
    setValueMd,
    units,
    unit,
    setUnit
}) => {
    const allUnits = units ? units : ["px", "em", "%"];

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const [stepsVal, setStepsVal] = useState(steps);

    const getView = useSelect(select => {
        const {getView} = select('hash-form/data');
        const {__experimentalGetPreviewDeviceType} = select('core/edit-post') ? select('core/edit-post') : false;
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
    }, []);
    const calcMinVal = (unt) => {
        let ret;
        switch (unt) {
            case 'em':
                ret = 0;
                break;
            case 'rem':
                ret = 0;
                break;
            case 'vh':
                ret = 0;
                break;
            case 'vw':
                ret = 0;
                break;
            case '%':
                ret = 0;
                break;
            default:
                ret = min;
                break;
        }
        return ret;
    }

    const calcMaxVal = (unt) => {
        let ret;
        switch (unt) {
            case 'em':
                ret = 10;
                break;
            case 'rem':
                ret = 10;
                break;
            case 'vh':
                ret = 100;
                break;
            case 'vw':
                ret = 100;
                break;
            case '%':
                ret = 100;
                break;
            default:
                ret = max;
                break;
        }
        return ret;
    }

    const calcStepsVal = (unt) => {
        let ret;
        switch (unt) {
            case 'em':
                ret = 0.1;
                break;
            case 'rem':
                ret = 0.1;
                break;
            case '%':
                ret = 1;
                break;
            default:
                ret = steps;
                break;
        }
        return ret;
    }

    useEffect(() => {
        setMinVal(calcMinVal(unit));
        setMaxVal(calcMaxVal(unit));
        setStepsVal(calcStepsVal(unit));
    }, [unit])

    return <div className={`hf-field hf-field-range ${responsive ? 'hf-responsive' : ''}`}>
        <div className="hf-label">
            {label && (<label htmlFor="input">{label}</label>)}
            {responsive && (<ResponsiveDropdown />)}
            {useUnit && (
                <div class="hf-unit-btn-group">
                    {allUnits.map((unt, index) => {
                        return <button
                            className={`${unit === unt ? "active" : ""}`}
                            value={unt}
                            onClick={(e) => {
                                setUnit(e.target.value);
                                setValue('');
                                responsive && setValueSm('');
                                responsive && setValueMd('');
                            }}
                        >{unt}
                        </button>
                    })}
                </div>
            )}
        </div>
        <div className="hf-input-fields">
            {responsive ? <>
                {getView == 'Mobile' && (
                    <div className="hf-input-range">
                        <input type="range"
                            min={minVal}
                            max={maxVal}
                            value={valueSm}
                            step={stepsVal}
                            onChange={(e) => {setValueSm(e.target.value)}}
                        />
                        <input type="number"
                            step={stepsVal}
                            onChange={(e) => {setValueSm(e.target.value)}}
                            value={valueSm}
                        />
                    </div>
                )}
                {getView == 'Tablet' && (
                    <div className="hf-input-range">
                        <input type="range"
                            min={minVal}
                            max={maxVal}
                            value={valueMd}
                            step={stepsVal}
                            onChange={(e) => {setValueMd(e.target.value)}}
                        />
                        <input type="number"
                            step={stepsVal}
                            onChange={(e) => {setValueMd(e.target.value)}}
                            value={valueMd}
                        />
                    </div>
                )}
                {getView == 'Desktop' && (
                    <div className="hf-input-range">
                        <input type="range"
                            min={minVal}
                            max={maxVal}
                            value={value}
                            step={stepsVal}
                            onChange={(e) => {setValue(e.target.value)}}
                        />
                        <input type="number"
                            step={stepsVal}
                            onChange={(e) => {setValue(e.target.value)}}
                            value={value}
                        />
                    </div>
                )}
            </> : <div className="hf-input-range">
                <input type="range"
                    min={minVal}
                    max={maxVal}
                    value={value}
                    step={stepsVal}
                    onChange={(e) => {setValue(e.target.value)}}
                />
                <input type="number"
                    step={stepsVal}
                    onChange={(e) => {setValue(e.target.value)}}
                    value={value}
                />
            </div>
            }
        </div>
    </div>
}

export default RangeSliderControl;