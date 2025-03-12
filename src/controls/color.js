import {__} from '@wordpress/i18n';
import {Tooltip, Dropdown, ColorPicker} from '@wordpress/components';
import {ClearIcon} from '../utils/svgicons';
const ColorControl = ({label, value, setValue, enableAlpha}) => {
    const onChangeHandler = (e) => {
        setValue(e.hex);
    }
    const onClearHandler = (e) => {
        setValue(undefined);
    }

    return <>
        <div className="hf-field hf-field-color">
            {label && (<label>{label}</label>)}
            <div className="hf-components-dropdown">
                <Tooltip text={__('Clear', 'hash-form')}>
                    <div
                        className="hf-reset-field"
                        onClick={onClearHandler}
                    >
                        <span className="hf-clear-field" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <Dropdown
                    position="top right"
                    contentClassName="hf-popover-style"
                    renderToggle={(function ({isOpen, onToggle}) {
                        return <>
                            <span className="hf-color-picker-container">
                                <button
                                    className="hf-color-picker"
                                    isPrimary={!0}
                                    onClick={onToggle}
                                    aria-expanded={isOpen}
                                    style={value && {
                                        backgroundColor: value,
                                        borderColor: value
                                    }}
                                >
                                </button>
                            </span>
                        </>;
                    })}
                    renderContent={(function () {
                        return <span>
                            {enableAlpha ? (
                                <ColorPicker
                                    color={value ? value : ''}
                                    onChangeComplete={onChangeHandler}
                                    enableAlpha
                                />
                            ) : (
                                <ColorPicker
                                    color={value ? value : ''}
                                    onChangeComplete={onChangeHandler}
                                    disableAlpha
                                />
                            )
                            }
                        </span>;
                    })}
                />
            </div>
        </div>

    </>;
}

export default ColorControl;