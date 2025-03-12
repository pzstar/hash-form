import {__} from '@wordpress/i18n';
import {Tooltip, TextControl, Dropdown, Dashicon} from '@wordpress/components';
import ColorControl from './color';
import AdvancedRadio from './advancedradio';
import {ClearIcon} from '../utils/svgicons';

const BoxShadowControl = ({
    label,
    valueHorizontal,
    setValueHorizontal,
    valueVertical,
    setValueVertical,
    valueBlur,
    setValueBlur,
    valueSpread,
    setValueSpread,
    valueColor,
    setValueColor,
    valueInset,
    setValueInset
}) => {
    return <>
        <div className="hf-field hf-field-boxshadow">
            <label>{__("Box Shadow", 'hash-form')}</label>
            <div className="hf-components-dropdown">
                <Tooltip text={__('Clear', 'hash-form')}>
                    <div className="hf-reset-field"
                        onClick={(e) => {
                            setValueHorizontal('');
                            setValueVertical('');
                            setValueBlur('');
                            setValueSpread('');
                            setValueColor(undefined);
                            setValueInset('');
                        }}>
                        <span className="hf-clear-field" role="button">
                            <ClearIcon />
                        </span>
                    </div>
                </Tooltip>
                <Dropdown
                    position="top right"
                    contentClassName="hf-popover-style"
                    renderToggle={({isOpen, onToggle}) => (
                        <button
                            className="hf-shadow-setttings hf-setting-button"
                            isPrimary={!0}
                            onClick={onToggle}
                            aria-expanded={isOpen}
                        >
                            <Dashicon size="15" icon="admin-tools" />
                        </button>
                    )}
                    renderContent={() =>
                        <>
                            <div className="hf-field hf-boxshadow">
                                <TextControl
                                    label={__('X', 'hash-form')}
                                    type={"number"}
                                    value={valueHorizontal}
                                    onChange={(e) => setValueHorizontal(e)}
                                />
                                <TextControl
                                    label={__('Y', 'hash-form')}
                                    type={"number"}
                                    value={valueVertical}
                                    onChange={(e) => setValueVertical(e)}
                                />
                                <TextControl
                                    label={__('Blur', 'hash-form')}
                                    type={"number"}
                                    value={valueBlur}
                                    onChange={(e) => setValueBlur(e)}
                                />
                                <TextControl
                                    label={__('Spread', 'hash-form')}
                                    type={"number"}
                                    value={valueSpread}
                                    onChange={(e) => setValueSpread(e)}
                                />
                            </div>

                            <ColorControl
                                label={__("Color", 'hash-form')}
                                value={valueColor}
                                setValue={value => setValueColor(value)}
                                enableAlpha
                            />

                            <AdvancedRadio
                                label={__("Inset", 'hash-form')}
                                value={valueInset}
                                setValue={((e) => setValueInset(e))}
                                options={[
                                    {label: esc_html__("Inset"), value: "inset", title: esc_html__("Inset")},
                                    {label: esc_html__("Outset"), value: "", title: esc_html__("Outset")}
                                ]}
                            />
                        </>
                    }
                />
            </div>
        </div>
    </>;
}

export default BoxShadowControl;