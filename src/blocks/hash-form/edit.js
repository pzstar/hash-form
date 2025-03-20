import {__} from '@wordpress/i18n';
import {RawHTML, useState} from '@wordpress/element';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import {format, dateI18n, getSettings} from '@wordpress/date';
import {
    useBlockProps,
    InspectorControls,
    RichText,
    store as blockEditorStore
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    Button,
    Placeholder
} from '@wordpress/components';
import classnames from 'classnames';
import TypographyControl from '../../controls/typography';
import GoogleFontLoad from '../../utils/googlefontload';
import ColorControl from '../../controls/color';
import Tabs from '../../utils/tabs';
import SelectControl from '../../controls/select';
import DimensionControl from '../../controls/dimension';
import ButtonGroupControl from '../../controls/buttongroup';
import RangeSliderControl from '../../controls/rangeslider';
import BorderControl from '../../controls/border';
import BoxShadowControl from '../../controls/boxshadow';
import ToggleControl from '../../controls/toggle';
import {getStyleVars} from '../../utils/helper';
import {LayoutIcon, StyleIcon, AdvancedIcon, HashFormIcon} from '../../utils/svgicons';
import {applyFilters} from '@wordpress/hooks';
import ServerSideRender from '@wordpress/server-side-render';
import {useEffect} from '@wordpress/element';

export default function Edit(props) {
    const {attributes, setAttributes} = props;
    const [activeTab, setActiveTab] = useState('layout');
    const {
        id,
        hfStyle,

        formId,
        enableCustomStyle,

        formColumnGap,
        formColumnGapUnit = 'px',

        formRowGap,
        formRowGapUnit = 'px',

        labelTypoFamily,
        labelTypoWeight,
        labelTypoTextTransform,
        labelTypoTextDecoration,
        labelTypoFontSizeSm,
        labelTypoFontSizeMd,
        labelTypoFontSize,
        labelTypoFontSizeUnit,
        labelTypoLetterSpacingSm,
        labelTypoLetterSpacingMd,
        labelTypoLetterSpacing,
        labelTypoLetterSpacingUnit,
        labelTypoLineHeightSm,
        labelTypoLineHeightMd,
        labelTypoLineHeight,
        labelTypoLineHeightUnit,

        labelTypoFontColor,
        labelRequiredColor,

        labelSpacingTop,
        labelSpacingLeft,
        labelSpacingRight,
        labelSpacingBottom,
        labelSpacingUnit,

        descTypoFamily,
        descTypoWeight,
        descTypoTextTransform,
        descTypoTextDecoration,
        descTypoFontSizeSm,
        descTypoFontSizeMd,
        descTypoFontSize,
        descTypoFontSizeUnit,
        descTypoLetterSpacingSm,
        descTypoLetterSpacingMd,
        descTypoLetterSpacing,
        descTypoLetterSpacingUnit,
        descTypoLineHeightSm,
        descTypoLineHeightMd,
        descTypoLineHeight,
        descTypoLineHeightUnit,

        descTypoFontColor,

        descSpacingTop,
        descSpacingLeft,
        descSpacingRight,
        descSpacingBottom,
        descSpacingUnit,

        fieldTypoFamily,
        fieldTypoWeight,
        fieldTypoTextTransform,
        fieldTypoTextDecoration,
        fieldTypoFontSizeSm,
        fieldTypoFontSizeMd,
        fieldTypoFontSize,
        fieldTypoFontSizeUnit,
        fieldTypoLetterSpacingSm,
        fieldTypoLetterSpacingMd,
        fieldTypoLetterSpacing,
        fieldTypoLetterSpacingUnit,
        fieldTypoLineHeightSm,
        fieldTypoLineHeightMd,
        fieldTypoLineHeight,
        fieldTypoLineHeightUnit,

        fieldColorNormal,
        fieldBgColorNormal,

        fieldShadowNormalX,
        fieldShadowNormalY,
        fieldShadowNormalBlur,
        fieldShadowNormalSpread,
        fieldShadowNormalColor,
        fieldShadowNormalInset,

        fieldBorder,

        fieldBorderTop,
        fieldBorderLeft,
        fieldBorderRight,
        fieldBorderBottom,
        fieldBorderUnit,

        fieldBorderColorNormal,

        fieldColorNormalFocus,
        fieldBgColorNormalFocus,
        fieldShadowFocusHorizontal,
        fieldShadowFocusVertical,
        fieldShadowFocusBlur,
        fieldShadowFocusSpread,
        fieldShadowFocusColor,
        fieldShadowFocusInset,

        fieldBorderFocusColor,

        fieldBorderRadiusTop,
        fieldBorderRadiusLeft,
        fieldBorderRadiusRight,
        fieldBorderRadiusBottom,
        fieldBorderRadiusUnit,

        fieldPaddingTop,
        fieldPaddingLeft,
        fieldPaddingRight,
        fieldPaddingBottom,
        fieldPaddingUnit,

        uploadTypoFamily,
        uploadTypoWeight,
        uploadTypoTextTransform,
        uploadTypoTextDecoration,
        uploadTypoFontSizeSm,
        uploadTypoFontSizeMd,
        uploadTypoFontSize,
        uploadTypoFontSizeUnit,
        uploadTypoLetterSpacingSm,
        uploadTypoLetterSpacingMd,
        uploadTypoLetterSpacing,
        uploadTypoLetterSpacingUnit,
        uploadTypoLineHeightSm,
        uploadTypoLineHeightMd,
        uploadTypoLineHeight,
        uploadTypoLineHeightUnit,

        uploadColor,
        uploadBgColor,

        uploadShadowHorizontal,
        uploadShadowVertical,
        uploadShadowBlur,
        uploadShadowSpread,
        uploadShadowColor,
        uploadShadowInset,

        uploadBorder,
        uploadBorderWidthTop,
        uploadBorderWidthLeft,
        uploadBorderWidthRight,
        uploadBorderWidthBottom,
        uploadBorderWidthUnit,

        uploadBorderColor,

        uploadColorHover,
        uploadBgColorHover,

        uploadShadowHoverHorizontal,
        uploadShadowHoverVertical,
        uploadShadowHoverBlur,
        uploadShadowHoverSpread,
        uploadShadowHoverColor,
        uploadShadowHoverInset,

        uploadBorderHover,
        uploadBorderHoverColor,

        uploadBorderRadiusTop,
        uploadBorderRadiusLeft,
        uploadBorderRadiusRight,
        uploadBorderRadiusBottom,
        uploadBorderRadiusUnit,

        uploadPaddingTop,
        uploadPaddingLeft,
        uploadPaddingRight,
        uploadPaddingBottom,
        uploadPaddingUnit,

        buttonTypoFamily,
        buttonTypoWeight,
        buttonTypoTextTransform,
        buttonTypoTextDecoration,
        buttonTypoFontSizeSm,
        buttonTypoFontSizeMd,
        buttonTypoFontSize,
        buttonTypoFontSizeUnit,
        buttonTypoLetterSpacingSm,
        buttonTypoLetterSpacingMd,
        buttonTypoLetterSpacing,
        buttonTypoLetterSpacingUnit,
        buttonTypoLineHeightSm,
        buttonTypoLineHeightMd,
        buttonTypoLineHeight,
        buttonTypoLineHeightUnit,

        buttonColorNormal,
        buttonBgColorNormal,

        buttonShadowX,
        buttonShadowY,
        buttonShadowBlur,
        buttonShadowSpread,
        buttonShadowColor,
        buttonShadowInset,

        buttonBorder,
        buttonBorderTop,
        buttonBorderLeft,
        buttonBorderRight,
        buttonBorderBottom,
        buttonBorderUnit,
        buttonBorderColor,

        buttonColorHover,
        buttonBgColorHover,

        buttonShadowHoverX,
        buttonShadowHoverY,
        buttonShadowHoverBlur,
        buttonShadowHoverSpread,
        buttonShadowHoverColor,
        buttonShadowHoverInset,

        buttonBorderHoverColor,

        buttonBorderRadiusTop,
        buttonBorderRadiusLeft,
        buttonBorderRadiusRight,
        buttonBorderRadiusBottom,
        buttonBorderRadiusUnit,

        buttonPaddingTop,
        buttonPaddingLeft,
        buttonPaddingRight,
        buttonPaddingBottom,
        buttonPaddingUnit,

        validationTypoFamily,
        validationTypoWeight,
        validationTypoTextTransform,
        validationTypoTextDecoration,
        validationTypoFontSizeSm,
        validationTypoFontSizeMd,
        validationTypoFontSize,
        validationTypoFontSizeUnit,
        validationTypoLetterSpacingSm,
        validationTypoLetterSpacingMd,
        validationTypoLetterSpacing,
        validationTypoLetterSpacingUnit,
        validationTypoLineHeightSm,
        validationTypoLineHeightMd,
        validationTypoLineHeight,
        validationTypoLineHeightUnit,

        validationTypoFontColor,
        validationTextAlign,

        formTitleTypoFamily,
        formTitleTypoWeight,
        formTitleTypoTextTransform,
        formTitleTypoTextDecoration,
        formTitleTypoFontSizeSm,
        formTitleTypoFontSizeMd,
        formTitleTypoFontSize,
        formTitleTypoFontSizeUnit,
        formTitleTypoLetterSpacingSm,
        formTitleTypoLetterSpacingMd,
        formTitleTypoLetterSpacing,
        formTitleTypoLetterSpacingUnit,
        formTitleTypoLineHeightSm,
        formTitleTypoLineHeightMd,
        formTitleTypoLineHeight,
        formTitleTypoLineHeightUnit,

        formTitleTypoFontColor,

        formTitleSpacingTop,
        formTitleSpacingLeft,
        formTitleSpacingRight,
        formTitleSpacingBottom,
        formTitleSpacingUnit,

        formDescTypoFamily,
        formDescTypoWeight,
        formDescTypoTextTransform,
        formDescTypoTextDecoration,
        formDescTypoFontSizeSm,
        formDescTypoFontSizeMd,
        formDescTypoFontSize,
        formDescTypoFontSizeUnit,
        formDescTypoLetterSpacingSm,
        formDescTypoLetterSpacingMd,
        formDescTypoLetterSpacing,
        formDescTypoLetterSpacingUnit,
        formDescTypoLineHeightSm,
        formDescTypoLineHeightMd,
        formDescTypoLineHeight,
        formDescTypoLineHeightUnit,

        formDescTypoFontColor,
        formDescSpacingTop,
        formDescSpacingLeft,
        formDescSpacingRight,
        formDescSpacingBottom,
        formDescSpacingUnit,

        headingTypoFamily,
        headingTypoWeight,
        headingTypoTextTransform,
        headingTypoTextDecoration,
        headingTypoFontSizeSm,
        headingTypoFontSizeMd,
        headingTypoFontSize,
        headingTypoFontSizeUnit,
        headingTypoLetterSpacingSm,
        headingTypoLetterSpacingMd,
        headingTypoLetterSpacing,
        headingTypoLetterSpacingUnit,
        headingTypoLineHeightSm,
        headingTypoLineHeightMd,
        headingTypoLineHeight,
        headingTypoLineHeightUnit,

        headingTypoFontColor,

        paragraphTypoFamily,
        paragraphTypoWeight,
        paragraphTypoTextTransform,
        paragraphTypoTextDecoration,
        paragraphTypoFontSizeSm,
        paragraphTypoFontSizeMd,
        paragraphTypoFontSize,
        paragraphTypoFontSizeUnit,
        paragraphTypoLetterSpacingSm,
        paragraphTypoLetterSpacingMd,
        paragraphTypoLetterSpacing,
        paragraphTypoLetterSpacingUnit,
        paragraphTypoLineHeightSm,
        paragraphTypoLineHeightMd,
        paragraphTypoLineHeight,
        paragraphTypoLineHeightUnit,

        paragraphTypoFontColor,
        dividerColor,
        starSize,
        starSizeUnit,

        starColor,
        starColorActive,

        rangeHeight,
        rangeHeightUnit,

        rangeHandleSize,
        rangeHandleSizeUnit,

        rangeColor,
        rangeColorActive,
        rangeHandleColor,
    } = attributes;


    setAttributes({id: useBlockProps()['id']});

    const stylesCSS = `#${id} {
        ${enableCustomStyle && getStyleVars(attributes, {
        responsiveSliderUnits: [],
        normal: ['labelTypoFontColor', 'labelRequiredColor', 'descTypoFontColor', 'fieldBorder', 'fieldColorNormal', 'fieldBgColorNormal', 'fieldBorderColorNormal', 'fieldColorNormalFocus', 'fieldBgColorNormalFocus', 'fieldBorderFocusColor', 'uploadColor', 'uploadBorderColor', 'uploadBgColor', 'uploadColorHover', 'uploadBgColorHover', 'buttonColorNormal', 'buttonBgColorNormal', 'buttonColorHover', 'buttonBgColorHover', 'validationTypoFontColor', 'validationTextAlign', 'formTitleTypoFontColor', 'formDescTypoFontColor', 'headingTypoFontColor', 'paragraphTypoFontColor', 'dividerColor', 'starColor', 'starColorActive', 'rangeColor', 'rangeColorActive', 'rangeHandleColor'],
        normalUnit: ['formColumnGap', 'formRowGap', 'starSize', 'rangeHeight', 'rangeHandleSize'],
        dimension: ['labelSpacing', 'descSpacing', 'fieldBorder', 'fieldBorderRadius', 'fieldPadding', 'uploadBorderRadius', 'uploadPadding', 'buttonBorder', 'buttonBorderRadius', 'buttonPadding', 'formTitleSpacing', 'formDescSpacing'],
        responsiveBorder: ['uploadBorderHover',  'buttonBorderHover'],
        responsiveTypography: ['labelTypo', 'descTypo', 'fieldTypo', 'uploadTypo', 'buttonTypo', 'validationTypo', 'formTitleTypo', 'formDescTypo', 'headingTypo', 'paragraphTypo'],
        boxShadow: ['fieldShadowNormal', 'fieldShadowFocus', 'buttonShadow', 'buttonShadowHover', 'uploadShadowHover']
    })}
    }`
    setAttributes({hfStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "")});

    const formOptions = [{label: __('Select a Form', 'hash-form'), value: ''}, ...Object.entries(hash_form_block_data.forms).map(value => ({
        value: value[0],
        label: value[1]
    }))];

    const selectForm = (value) => {
        setAttributes({formId: value});
    }

    return (
        <>
            <style jsx>
                {applyFilters('hashform.editorcss', hfStyle, props)}
            </style>
            {labelTypoFamily && (labelTypoFamily != 'Default') && <GoogleFontLoad family={labelTypoFamily} weight={labelTypoWeight.replace("italic", "i")} />}
            {descTypoFamily && (descTypoFamily != 'Default') && <GoogleFontLoad family={descTypoFamily} weight={descTypoWeight.replace("italic", "i")} />}
            {fieldTypoFamily && (fieldTypoFamily != 'Default') && <GoogleFontLoad family={fieldTypoFamily} weight={fieldTypoWeight.replace("italic", "i")} />}
            {uploadTypoFamily && (uploadTypoFamily != 'Default') && <GoogleFontLoad family={uploadTypoFamily} weight={uploadTypoWeight.replace("italic", "i")} />}
            {buttonTypoFamily && (buttonTypoFamily != 'Default') && <GoogleFontLoad family={buttonTypoFamily} weight={buttonTypoWeight.replace("italic", "i")} />}
            {validationTypoFamily && (validationTypoFamily != 'Default') && <GoogleFontLoad family={validationTypoFamily} weight={validationTypoWeight.replace("italic", "i")} />}
            {formTitleTypoFamily && (formTitleTypoFamily != 'Default') && <GoogleFontLoad family={formTitleTypoFamily} weight={formTitleTypoWeight.replace("italic", "i")} />}
            {formDescTypoFamily && (formDescTypoFamily != 'Default') && <GoogleFontLoad family={formDescTypoFamily} weight={formDescTypoWeight.replace("italic", "i")} />}
            {headingTypoFamily && (headingTypoFamily != 'Default') && <GoogleFontLoad family={headingTypoFamily} weight={headingTypoWeight.replace("italic", "i")} />}
            {paragraphTypoFamily && (paragraphTypoFamily != 'Default') && <GoogleFontLoad family={paragraphTypoFamily} weight={paragraphTypoWeight.replace("italic", "i")} />}

            <InspectorControls>
                <div className="hf-head-panel-tabs">
                    <div className="hf-panel-tabs-wrap">
                        <Button
                            className={classnames('hf-panel-tab', {'active-tab': 'layout' === activeTab})}
                            onClick={() => setActiveTab('layout')}
                        >
                            <span className="dashicons">
                                <LayoutIcon />
                            </span>
                            {__('Layout', 'hash-form')}
                        </Button>

                        <Button
                            className={classnames('hf-panel-tab', {'active-tab': 'style' === activeTab})}
                            onClick={() => setActiveTab('style')}
                        >
                            <span className="dashicons">
                                <StyleIcon />
                            </span>
                            {__('Style', 'hash-form')}
                        </Button>

                        <Button
                            className={classnames('hf-panel-tab', {'active-tab': 'advanced' === activeTab})}
                            onClick={() => setActiveTab('advanced')}
                        >
                            <span className="dashicons">
                                <AdvancedIcon />
                            </span>
                            {__('Advanced', 'hash-form')}
                        </Button>
                    </div>
                    <div className="hf-panel-tab-field">
                        {'layout' === activeTab && (
                            <>
                                <PanelBody
                                    title={__('Form Settings', 'hash-form')}
                                    initialOpen={false}>
                                    <SelectControl
                                        label={__('Form', 'hash-form')}
                                        value={formId}
                                        options={formOptions}
                                        onChange={selectForm}
                                    />
                                    <p>{__('To Create New Form', 'hash-form')} <a target="_blank" href={hash_form_block_data.create_form_link}>{__('Click Here', 'hash-form')}</a></p>
                                </PanelBody>
                            </>
                        ) || 'style' === activeTab && (
                            <>
                                <PanelBody
                                    title={__('Custom Style', 'hash-form')}
                                    initialOpen={false}>
                                    <ToggleControl
                                        label={__('Enable Custom Style', 'hash-form')}
                                        checked={enableCustomStyle}
                                        onChange={(newValue) => setAttributes({enableCustomStyle: !enableCustomStyle})}
                                    />
                                </PanelBody>
                                {enableCustomStyle && <>
                                    <PanelBody
                                        title={__('Form', 'hash-form')}
                                        initialOpen={false}>
                                        <RangeSliderControl
                                            label={__('Column Gap', 'hash-form')}
                                            value={formColumnGap}
                                            setValue={(formColumnGap) => setAttributes({formColumnGap})}
                                            unit={formColumnGapUnit}
                                            setUnit={(formColumnGapUnit) => setAttributes({formColumnGapUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                        <RangeSliderControl
                                            label={__('Row Gap', 'hash-form')}
                                            value={formRowGap}
                                            setValue={(formRowGap) => setAttributes({formRowGap})}
                                            unit={formRowGapUnit}
                                            setUnit={(formRowGapUnit) => setAttributes({formRowGapUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Label', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={labelTypoFamily}
                                            setValueFamily={value => setAttributes({labelTypoFamily: value})}
                                            valueWeight={labelTypoWeight}
                                            setValueWeight={value => setAttributes({labelTypoWeight: value})}
                                            valueTextTransform={labelTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({labelTypoTextTransform: value})}
                                            valueTextDecoration={labelTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({labelTypoTextDecoration: value})}
                                            valueFontSizeSm={labelTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({labelTypoFontSizeSm: value})}
                                            valueFontSizeMd={labelTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({labelTypoFontSizeMd: value})}
                                            valueFontSize={labelTypoFontSize}
                                            setValueFontSize={value => setAttributes({labelTypoFontSize: value})}
                                            valueFontSizeUnit={labelTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({labelTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={labelTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({labelTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={labelTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({labelTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={labelTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({labelTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={labelTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({labelTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={labelTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({labelTypoLineHeightSm: value})}
                                            valueLineHeightMd={labelTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({labelTypoLineHeightMd: value})}
                                            valueLineHeight={labelTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({labelTypoLineHeight: value})}
                                            valueLineHeightUnit={labelTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({labelTypoLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={labelTypoFontColor}
                                            setValue={value => setAttributes({labelTypoFontColor: value})}
                                        />
                                        <ColorControl
                                            label={__('Required Color', 'smart-blocks')}
                                            enableAlpha
                                            value={labelRequiredColor}
                                            setValue={value => setAttributes({labelRequiredColor: value})}
                                        />
                                        <DimensionControl
                                            label={__('Spacing', 'smart-blocks')}
                                            dimensionTop={labelSpacingTop}
                                            setDimensionTop={value => setAttributes({labelSpacingTop: value})}
                                            dimensionLeft={labelSpacingLeft}
                                            setDimensionLeft={value => setAttributes({labelSpacingLeft: value})}
                                            dimensionRight={labelSpacingRight}
                                            setDimensionRight={value => setAttributes({labelSpacingRight: value})}
                                            dimensionBottom={labelSpacingBottom}
                                            setDimensionBottom={value => setAttributes({labelSpacingBottom: value})}
                                            unit={labelSpacingUnit}
                                            setUnit={value => setAttributes({labelSpacingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Description', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={descTypoFamily}
                                            setValueFamily={value => setAttributes({descTypoFamily: value})}
                                            valueWeight={descTypoWeight}
                                            setValueWeight={value => setAttributes({descTypoWeight: value})}
                                            valueTextTransform={descTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({descTypoTextTransform: value})}
                                            valueTextDecoration={descTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({descTypoTextDecoration: value})}
                                            valueFontSizeSm={descTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({descTypoFontSizeSm: value})}
                                            valueFontSizeMd={descTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({descTypoFontSizeMd: value})}
                                            valueFontSize={descTypoFontSize}
                                            setValueFontSize={value => setAttributes({descTypoFontSize: value})}
                                            valueFontSizeUnit={descTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({descTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={descTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({descTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={descTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({descTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={descTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({descTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={descTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({descTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={descTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({descTypoLineHeightSm: value})}
                                            valueLineHeightMd={descTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({descTypoLineHeightMd: value})}
                                            valueLineHeight={descTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({descTypoLineHeight: value})}
                                            valueLineHeightUnit={descTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({descTypoLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={descTypoFontColor}
                                            setValue={value => setAttributes({descTypoFontColor: value})}
                                        />
                                        <DimensionControl
                                            label={__('Spacing', 'smart-blocks')}
                                            dimensionTop={descSpacingTop}
                                            setDimensionTop={value => setAttributes({descSpacingTop: value})}
                                            dimensionLeft={descSpacingLeft}
                                            setDimensionLeft={value => setAttributes({descSpacingLeft: value})}
                                            dimensionRight={descSpacingRight}
                                            setDimensionRight={value => setAttributes({descSpacingRight: value})}
                                            dimensionBottom={descSpacingBottom}
                                            setDimensionBottom={value => setAttributes({descSpacingBottom: value})}
                                            unit={descSpacingUnit}
                                            setUnit={value => setAttributes({descSpacingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Fields', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={fieldTypoFamily}
                                            setValueFamily={value => setAttributes({fieldTypoFamily: value})}
                                            valueWeight={fieldTypoWeight}
                                            setValueWeight={value => setAttributes({fieldTypoWeight: value})}
                                            valueTextTransform={fieldTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({fieldTypoTextTransform: value})}
                                            valueTextDecoration={fieldTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({fieldTypoTextDecoration: value})}
                                            valueFontSizeSm={fieldTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({fieldTypoFontSizeSm: value})}
                                            valueFontSizeMd={fieldTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({fieldTypoFontSizeMd: value})}
                                            valueFontSize={fieldTypoFontSize}
                                            setValueFontSize={value => setAttributes({fieldTypoFontSize: value})}
                                            valueFontSizeUnit={fieldTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({fieldTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={fieldTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({fieldTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={fieldTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({fieldTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={fieldTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({fieldTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={fieldTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({fieldTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={fieldTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({fieldTypoLineHeightSm: value})}
                                            valueLineHeightMd={fieldTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({fieldTypoLineHeightMd: value})}
                                            valueLineHeight={fieldTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({fieldTypoLineHeight: value})}
                                            valueLineHeightUnit={fieldTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({fieldTypoLineHeightUnit: value})}
                                        />
                                        <Tabs>
                                            <div tabTitle={__("Normal", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldColorNormal}
                                                    setValue={value => setAttributes({fieldColorNormal: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldBgColorNormal}
                                                    setValue={value => setAttributes({fieldBgColorNormal: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={fieldShadowNormalX}
                                                    setValueHorizontal={(fieldShadowNormalX) => setAttributes({fieldShadowNormalX})}
                                                    valueVertical={fieldShadowNormalY}
                                                    setValueVertical={(fieldShadowNormalY) => setAttributes({fieldShadowNormalY})}
                                                    valueBlur={fieldShadowNormalBlur}
                                                    setValueBlur={(fieldShadowNormalBlur) => setAttributes({fieldShadowNormalBlur})}
                                                    valueSpread={fieldShadowNormalSpread}
                                                    setValueSpread={(fieldShadowNormalSpread) => setAttributes({fieldShadowNormalSpread})}
                                                    valueColor={fieldShadowNormalColor}
                                                    setValueColor={(fieldShadowNormalColor) => setAttributes({fieldShadowNormalColor})}
                                                    valueInset={fieldShadowNormalInset}
                                                    setValueInset={(fieldShadowNormalInset) => setAttributes({fieldShadowNormalInset})}
                                                />
                                                <BorderControl
                                                    value={fieldBorder}
                                                    setValue={(fieldBorder) => setAttributes({fieldBorder})}
                                                />
                                                {fieldBorder && (
                                                    <>
                                                        <DimensionControl
                                                            label={__('Border Width', 'smart-blocks-pro')}
                                                            units={['px', 'em', 'rem', 'vw']}
                                                            responsive={!1}
                                                            dimensionTop={fieldBorderTop}
                                                            setDimensionTop={value => setAttributes({fieldBorderTop: value})}

                                                            dimensionLeft={fieldBorderLeft}
                                                            setDimensionLeft={value => setAttributes({fieldBorderLeft: value})}

                                                            dimensionRight={fieldBorderRight}
                                                            setDimensionRight={value => setAttributes({fieldBorderRight: value})}

                                                            dimensionBottom={fieldBorderBottom}
                                                            setDimensionBottom={value => setAttributes({fieldBorderBottom: value})}

                                                            unit={fieldBorderUnit}
                                                            setUnit={value => setAttributes({fieldBorderUnit: value})}
                                                        />
                                                        <ColorControl
                                                            label={__('Border Color', 'smart-blocks-pro')}
                                                            enableAlpha
                                                            value={fieldBorderColorNormal}
                                                            setValue={(fieldBorderColorNormal) => setAttributes({fieldBorderColorNormal})}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                            <div tabTitle={__("Focus", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldColorNormalFocus}
                                                    setValue={value => setAttributes({fieldColorNormalFocus: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldBgColorNormalFocus}
                                                    setValue={value => setAttributes({fieldBgColorNormalFocus: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={fieldShadowFocusHorizontal}
                                                    setValueHorizontal={(fieldShadowFocusHorizontal) => setAttributes({fieldShadowFocusHorizontal})}
                                                    valueVertical={fieldShadowFocusVertical}
                                                    setValueVertical={(fieldShadowFocusVertical) => setAttributes({fieldShadowFocusVertical})}
                                                    valueBlur={fieldShadowFocusBlur}
                                                    setValueBlur={(fieldShadowFocusBlur) => setAttributes({fieldShadowFocusBlur})}
                                                    valueSpread={fieldShadowFocusSpread}
                                                    setValueSpread={(fieldShadowFocusSpread) => setAttributes({fieldShadowFocusSpread})}
                                                    valueColor={fieldShadowFocusColor}
                                                    setValueColor={(fieldShadowFocusColor) => setAttributes({fieldShadowFocusColor})}
                                                    valueInset={fieldShadowFocusInset}
                                                    setValueInset={(fieldShadowFocusInset) => setAttributes({fieldShadowFocusInset})}
                                                />
                                                <ColorControl
                                                    label={__('Border Color', 'smart-blocks-pro')}
                                                    enableAlpha
                                                    value={fieldBorderFocusColor}
                                                    setValue={(fieldBorderFocusColor) => setAttributes({fieldBorderFocusColor})}
                                                />
                                            </div>
                                        </Tabs>
                                        <DimensionControl
                                            label={__('Border Radius', 'smart-blocks')}
                                            dimensionTop={fieldBorderRadiusTop}
                                            setDimensionTop={value => setAttributes({fieldBorderRadiusTop: value})}
                                            dimensionLeft={fieldBorderRadiusLeft}
                                            setDimensionLeft={value => setAttributes({fieldBorderRadiusLeft: value})}
                                            dimensionRight={fieldBorderRadiusRight}
                                            setDimensionRight={value => setAttributes({fieldBorderRadiusRight: value})}
                                            dimensionBottom={fieldBorderRadiusBottom}
                                            setDimensionBottom={value => setAttributes({fieldBorderRadiusBottom: value})}
                                            unit={fieldBorderRadiusUnit}
                                            setUnit={value => setAttributes({fieldBorderRadiusUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                        <DimensionControl
                                            label={__('Padding', 'smart-blocks')}
                                            dimensionTop={fieldPaddingTop}
                                            setDimensionTop={value => setAttributes({fieldPaddingTop: value})}
                                            dimensionLeft={fieldPaddingLeft}
                                            setDimensionLeft={value => setAttributes({fieldPaddingLeft: value})}
                                            dimensionRight={fieldPaddingRight}
                                            setDimensionRight={value => setAttributes({fieldPaddingRight: value})}
                                            dimensionBottom={fieldPaddingBottom}
                                            setDimensionBottom={value => setAttributes({fieldPaddingBottom: value})}
                                            unit={fieldPaddingUnit}
                                            setUnit={value => setAttributes({fieldPaddingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Upload Button', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={uploadTypoFamily}
                                            setValueFamily={value => setAttributes({uploadTypoFamily: value})}
                                            valueWeight={uploadTypoWeight}
                                            setValueWeight={value => setAttributes({uploadTypoWeight: value})}
                                            valueTextTransform={uploadTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({uploadTypoTextTransform: value})}
                                            valueTextDecoration={uploadTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({uploadTypoTextDecoration: value})}
                                            valueFontSizeSm={uploadTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({uploadTypoFontSizeSm: value})}
                                            valueFontSizeMd={uploadTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({uploadTypoFontSizeMd: value})}
                                            valueFontSize={uploadTypoFontSize}
                                            setValueFontSize={value => setAttributes({uploadTypoFontSize: value})}
                                            valueFontSizeUnit={uploadTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({uploadTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={uploadTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({uploadTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={uploadTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({uploadTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={uploadTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({uploadTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={uploadTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({uploadTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={uploadTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({uploadTypoLineHeightSm: value})}
                                            valueLineHeightMd={uploadTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({uploadTypoLineHeightMd: value})}
                                            valueLineHeight={uploadTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({uploadTypoLineHeight: value})}
                                            valueLineHeightUnit={uploadTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({uploadTypoLineHeightUnit: value})}
                                        />
                                        <Tabs>
                                            <div tabTitle={__("Normal", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={uploadColor}
                                                    setValue={value => setAttributes({uploadColor: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={uploadBgColor}
                                                    setValue={value => setAttributes({uploadBgColor: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={uploadShadowHorizontal}
                                                    setValueHorizontal={(uploadShadowHorizontal) => setAttributes({uploadShadowHorizontal})}
                                                    valueVertical={uploadShadowVertical}
                                                    setValueVertical={(uploadShadowVertical) => setAttributes({uploadShadowVertical})}
                                                    valueBlur={uploadShadowBlur}
                                                    setValueBlur={(uploadShadowBlur) => setAttributes({uploadShadowBlur})}
                                                    valueSpread={uploadShadowSpread}
                                                    setValueSpread={(uploadShadowSpread) => setAttributes({uploadShadowSpread})}
                                                    valueColor={uploadShadowColor}
                                                    setValueColor={(uploadShadowColor) => setAttributes({uploadShadowColor})}
                                                    valueInset={uploadShadowInset}
                                                    setValueInset={(uploadShadowInset) => setAttributes({uploadShadowInset})}
                                                />
                                                <BorderControl
                                                    value={uploadBorder}
                                                    setValue={(uploadBorder) => setAttributes({uploadBorder})}
                                                />
                                                {uploadBorder && (
                                                    <>
                                                        <DimensionControl
                                                            label={__('Border Width', 'smart-blocks-pro')}
                                                            units={['px', 'em', 'rem', 'vw']}
                                                            responsive={!0}
                                                            dimensionTop={uploadBorderWidthTop}
                                                            setDimensionTop={value => setAttributes({uploadBorderWidthTop: value})}

                                                            dimensionLeft={uploadBorderWidthLeft}
                                                            setDimensionLeft={value => setAttributes({uploadBorderWidthLeft: value})}

                                                            dimensionRight={uploadBorderWidthRight}
                                                            setDimensionRight={value => setAttributes({uploadBorderWidthRight: value})}

                                                            dimensionBottom={uploadBorderWidthBottom}
                                                            setDimensionBottom={value => setAttributes({uploadBorderWidthBottom: value})}

                                                            unit={uploadBorderWidthUnit}
                                                            setUnit={value => setAttributes({uploadBorderWidthUnit: value})}
                                                        />
                                                        <ColorControl
                                                            label={__('Border Color', 'smart-blocks-pro')}
                                                            enableAlpha
                                                            value={uploadBorderColor}
                                                            setValue={(uploadBorderColor) => setAttributes({uploadBorderColor})}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                            <div tabTitle={__("Hover", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={uploadColorHover}
                                                    setValue={value => setAttributes({uploadColorHover: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={uploadBgColorHover}
                                                    setValue={value => setAttributes({uploadBgColorHover: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={uploadShadowHoverHorizontal}
                                                    setValueHorizontal={(uploadShadowHoverHorizontal) => setAttributes({uploadShadowHoverHorizontal})}
                                                    valueVertical={uploadShadowHoverVertical}
                                                    setValueVertical={(uploadShadowHoverVertical) => setAttributes({uploadShadowHoverVertical})}
                                                    valueBlur={uploadShadowHoverBlur}
                                                    setValueBlur={(uploadShadowHoverBlur) => setAttributes({uploadShadowHoverBlur})}
                                                    valueSpread={uploadShadowHoverSpread}
                                                    setValueSpread={(uploadShadowHoverSpread) => setAttributes({uploadShadowHoverSpread})}
                                                    valueColor={uploadShadowHoverColor}
                                                    setValueColor={(uploadShadowHoverColor) => setAttributes({uploadShadowHoverColor})}
                                                    valueInset={uploadShadowHoverInset}
                                                    setValueInset={(uploadShadowHoverInset) => setAttributes({uploadShadowHoverInset})}
                                                />
                                                <BorderControl
                                                    value={uploadBorderHover}
                                                    setValue={(uploadBorderHover) => setAttributes({uploadBorderHover})}
                                                />
                                                <ColorControl
                                                    label={__('Border Color', 'smart-blocks-pro')}
                                                    enableAlpha
                                                    value={uploadBorderHoverColor}
                                                    setValue={(uploadBorderHoverColor) => setAttributes({uploadBorderHoverColor})}
                                                />
                                            </div>
                                        </Tabs>
                                        <DimensionControl
                                            label={__('Border Radius', 'smart-blocks')}
                                            dimensionTop={uploadBorderRadiusTop}
                                            setDimensionTop={value => setAttributes({uploadBorderRadiusTop: value})}
                                            dimensionLeft={uploadBorderRadiusLeft}
                                            setDimensionLeft={value => setAttributes({uploadBorderRadiusLeft: value})}
                                            dimensionRight={uploadBorderRadiusRight}
                                            setDimensionRight={value => setAttributes({uploadBorderRadiusRight: value})}
                                            dimensionBottom={uploadBorderRadiusBottom}
                                            setDimensionBottom={value => setAttributes({uploadBorderRadiusBottom: value})}
                                            unit={uploadBorderRadiusUnit}
                                            setUnit={value => setAttributes({uploadBorderRadiusUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                        <DimensionControl
                                            label={__('Padding', 'smart-blocks')}
                                            dimensionTop={uploadPaddingTop}
                                            setDimensionTop={value => setAttributes({uploadPaddingTop: value})}
                                            dimensionLeft={uploadPaddingLeft}
                                            setDimensionLeft={value => setAttributes({uploadPaddingLeft: value})}
                                            dimensionRight={uploadPaddingRight}
                                            setDimensionRight={value => setAttributes({uploadPaddingRight: value})}
                                            dimensionBottom={uploadPaddingBottom}
                                            setDimensionBottom={value => setAttributes({uploadPaddingBottom: value})}
                                            unit={uploadPaddingUnit}
                                            setUnit={value => setAttributes({uploadPaddingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Submit Button', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={buttonTypoFamily}
                                            setValueFamily={value => setAttributes({buttonTypoFamily: value})}
                                            valueWeight={buttonTypoWeight}
                                            setValueWeight={value => setAttributes({buttonTypoWeight: value})}
                                            valueTextTransform={buttonTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({buttonTypoTextTransform: value})}
                                            valueTextDecoration={buttonTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({buttonTypoTextDecoration: value})}
                                            valueFontSizeSm={buttonTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({buttonTypoFontSizeSm: value})}
                                            valueFontSizeMd={buttonTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({buttonTypoFontSizeMd: value})}
                                            valueFontSize={buttonTypoFontSize}
                                            setValueFontSize={value => setAttributes({buttonTypoFontSize: value})}
                                            valueFontSizeUnit={buttonTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({buttonTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={buttonTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({buttonTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={buttonTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({buttonTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={buttonTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({buttonTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={buttonTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({buttonTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={buttonTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({buttonTypoLineHeightSm: value})}
                                            valueLineHeightMd={buttonTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({buttonTypoLineHeightMd: value})}
                                            valueLineHeight={buttonTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({buttonTypoLineHeight: value})}
                                            valueLineHeightUnit={buttonTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({buttonTypoLineHeightUnit: value})}
                                        />
                                        <Tabs>
                                            <div tabTitle={__("Normal", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={buttonColorNormal}
                                                    setValue={value => setAttributes({buttonColorNormal: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={buttonBgColorNormal}
                                                    setValue={value => setAttributes({buttonBgColorNormal: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={buttonShadowX}
                                                    setValueHorizontal={(buttonShadowX) => setAttributes({buttonShadowX})}
                                                    valueVertical={buttonShadowY}
                                                    setValueVertical={(buttonShadowY) => setAttributes({buttonShadowY})}
                                                    valueBlur={buttonShadowBlur}
                                                    setValueBlur={(buttonShadowBlur) => setAttributes({buttonShadowBlur})}
                                                    valueSpread={buttonShadowSpread}
                                                    setValueSpread={(buttonShadowSpread) => setAttributes({buttonShadowSpread})}
                                                    valueColor={buttonShadowColor}
                                                    setValueColor={(buttonShadowColor) => setAttributes({buttonShadowColor})}
                                                    valueInset={buttonShadowInset}
                                                    setValueInset={(buttonShadowInset) => setAttributes({buttonShadowInset})}
                                                />
                                                <BorderControl
                                                    value={buttonBorder}
                                                    setValue={(buttonBorder) => setAttributes({buttonBorder})}
                                                />
                                                {buttonBorder && (
                                                    <>
                                                        <DimensionControl
                                                            label={__('Border Width', 'smart-blocks-pro')}
                                                            units={['px', 'em', 'rem', 'vw']}
                                                            responsive={!1}
                                                            dimensionTop={buttonBorderTop}
                                                            setDimensionTop={value => setAttributes({buttonBorderTop: value})}

                                                            dimensionLeft={buttonBorderLeft}
                                                            setDimensionLeft={value => setAttributes({buttonBorderLeft: value})}

                                                            dimensionRight={buttonBorderRight}
                                                            setDimensionRight={value => setAttributes({buttonBorderRight: value})}

                                                            dimensionBottom={buttonBorderBottom}
                                                            setDimensionBottom={value => setAttributes({buttonBorderBottom: value})}

                                                            unit={buttonBorderUnit}
                                                            setUnit={value => setAttributes({buttonBorderUnit: value})}
                                                        />
                                                        <ColorControl
                                                            label={__('Border Color', 'smart-blocks-pro')}
                                                            enableAlpha
                                                            value={buttonBorderColor}
                                                            setValue={(buttonBorderColor) => setAttributes({buttonBorderColor})}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                            <div tabTitle={__("Hover", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={buttonColorHover}
                                                    setValue={value => setAttributes({buttonColorHover: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={buttonBgColorHover}
                                                    setValue={value => setAttributes({buttonBgColorHover: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={buttonShadowHoverX}
                                                    setValueHorizontal={(buttonShadowHoverX) => setAttributes({buttonShadowHoverX})}
                                                    valueVertical={buttonShadowHoverY}
                                                    setValueVertical={(buttonShadowHoverY) => setAttributes({buttonShadowHoverY})}
                                                    valueBlur={buttonShadowHoverBlur}
                                                    setValueBlur={(buttonShadowHoverBlur) => setAttributes({buttonShadowHoverBlur})}
                                                    valueSpread={buttonShadowHoverSpread}
                                                    setValueSpread={(buttonShadowHoverSpread) => setAttributes({buttonShadowHoverSpread})}
                                                    valueColor={buttonShadowHoverColor}
                                                    setValueColor={(buttonShadowHoverColor) => setAttributes({buttonShadowHoverColor})}
                                                    valueInset={buttonShadowHoverInset}
                                                    setValueInset={(buttonShadowHoverInset) => setAttributes({buttonShadowHoverInset})}
                                                />
                                                {buttonBorder && (
                                                    <>
                                                        <ColorControl
                                                            label={__('Border Color', 'smart-blocks-pro')}
                                                            enableAlpha
                                                            value={buttonBorderHoverColor}
                                                            setValue={(buttonBorderHoverColor) => setAttributes({buttonBorderHoverColor})}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                        </Tabs>
                                        <DimensionControl
                                            label={__('Border Radius', 'smart-blocks')}
                                            dimensionTop={buttonBorderRadiusTop}
                                            setDimensionTop={value => setAttributes({buttonBorderRadiusTop: value})}
                                            dimensionLeft={buttonBorderRadiusLeft}
                                            setDimensionLeft={value => setAttributes({buttonBorderRadiusLeft: value})}
                                            dimensionRight={buttonBorderRadiusRight}
                                            setDimensionRight={value => setAttributes({buttonBorderRadiusRight: value})}
                                            dimensionBottom={buttonBorderRadiusBottom}
                                            setDimensionBottom={value => setAttributes({buttonBorderRadiusBottom: value})}
                                            unit={buttonBorderRadiusUnit}
                                            setUnit={value => setAttributes({buttonBorderRadiusUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                        <DimensionControl
                                            label={__('Padding', 'smart-blocks')}
                                            dimensionTop={buttonPaddingTop}
                                            setDimensionTop={value => setAttributes({buttonPaddingTop: value})}
                                            dimensionLeft={buttonPaddingLeft}
                                            setDimensionLeft={value => setAttributes({buttonPaddingLeft: value})}
                                            dimensionRight={buttonPaddingRight}
                                            setDimensionRight={value => setAttributes({buttonPaddingRight: value})}
                                            dimensionBottom={buttonPaddingBottom}
                                            setDimensionBottom={value => setAttributes({buttonPaddingBottom: value})}
                                            unit={buttonPaddingUnit}
                                            setUnit={value => setAttributes({buttonPaddingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Validation Text', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={validationTypoFamily}
                                            setValueFamily={value => setAttributes({validationTypoFamily: value})}
                                            valueWeight={validationTypoWeight}
                                            setValueWeight={value => setAttributes({validationTypoWeight: value})}
                                            valueTextTransform={validationTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({validationTypoTextTransform: value})}
                                            valueTextDecoration={validationTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({validationTypoTextDecoration: value})}
                                            valueFontSizeSm={validationTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({validationTypoFontSizeSm: value})}
                                            valueFontSizeMd={validationTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({validationTypoFontSizeMd: value})}
                                            valueFontSize={validationTypoFontSize}
                                            setValueFontSize={value => setAttributes({validationTypoFontSize: value})}
                                            valueFontSizeUnit={validationTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({validationTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={validationTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({validationTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={validationTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({validationTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={validationTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({validationTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={validationTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({validationTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={validationTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({validationTypoLineHeightSm: value})}
                                            valueLineHeightMd={validationTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({validationTypoLineHeightMd: value})}
                                            valueLineHeight={validationTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({validationTypoLineHeight: value})}
                                            valueLineHeightUnit={validationTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({validationTypoLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={validationTypoFontColor}
                                            setValue={value => setAttributes({validationTypoFontColor: value})}
                                        />
                                        <ButtonGroupControl
                                            label={__('Text Alignment', 'smart-blocks-pro')}
                                            options={[
                                                {
                                                    value: 'left',
                                                    icon: <i class="sbi-text-align-left"></i>,
                                                    label: __('Left', 'smart-blocks-pro')
                                                },
                                                {
                                                    value: 'center',
                                                    icon: <i class="sbi-text-align-center"></i>,
                                                    label: __('Center', 'smart-blocks-pro')
                                                },
                                                {
                                                    value: 'right',
                                                    icon: <i class="sbi-text-align-right"></i>,
                                                    label: __('Right', 'smart-blocks-pro')
                                                }
                                            ]}
                                            value={validationTextAlign}
                                            setValue={(value) => setAttributes({validationTextAlign: value})}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Form Title', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={formTitleTypoFamily}
                                            setValueFamily={value => setAttributes({formTitleTypoFamily: value})}
                                            valueWeight={formTitleTypoWeight}
                                            setValueWeight={value => setAttributes({formTitleTypoWeight: value})}
                                            valueTextTransform={formTitleTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({formTitleTypoTextTransform: value})}
                                            valueTextDecoration={formTitleTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({formTitleTypoTextDecoration: value})}
                                            valueFontSizeSm={formTitleTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({formTitleTypoFontSizeSm: value})}
                                            valueFontSizeMd={formTitleTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({formTitleTypoFontSizeMd: value})}
                                            valueFontSize={formTitleTypoFontSize}
                                            setValueFontSize={value => setAttributes({formTitleTypoFontSize: value})}
                                            valueFontSizeUnit={formTitleTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({formTitleTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={formTitleTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({formTitleTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={formTitleTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({formTitleTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={formTitleTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({formTitleTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={formTitleTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({formTitleTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={formTitleTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({formTitleTypoLineHeightSm: value})}
                                            valueLineHeightMd={formTitleTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({formTitleTypoLineHeightMd: value})}
                                            valueLineHeight={formTitleTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({formTitleTypoLineHeight: value})}
                                            valueLineHeightUnit={formTitleTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({formTitleTypoLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={formTitleTypoFontColor}
                                            setValue={value => setAttributes({formTitleTypoFontColor: value})}
                                        />
                                        <DimensionControl
                                            label={__('Spacing', 'smart-blocks')}
                                            dimensionTop={formTitleSpacingTop}
                                            setDimensionTop={value => setAttributes({formTitleSpacingTop: value})}
                                            dimensionLeft={formTitleSpacingLeft}
                                            setDimensionLeft={value => setAttributes({formTitleSpacingLeft: value})}
                                            dimensionRight={formTitleSpacingRight}
                                            setDimensionRight={value => setAttributes({formTitleSpacingRight: value})}
                                            dimensionBottom={formTitleSpacingBottom}
                                            setDimensionBottom={value => setAttributes({formTitleSpacingBottom: value})}
                                            unit={formTitleSpacingUnit}
                                            setUnit={value => setAttributes({formTitleSpacingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Form Description', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={formDescTypoFamily}
                                            setValueFamily={value => setAttributes({formDescTypoFamily: value})}
                                            valueWeight={formDescTypoWeight}
                                            setValueWeight={value => setAttributes({formDescTypoWeight: value})}
                                            valueTextTransform={formDescTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({formDescTypoTextTransform: value})}
                                            valueTextDecoration={formDescTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({formDescTypoTextDecoration: value})}
                                            valueFontSizeSm={formDescTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({formDescTypoFontSizeSm: value})}
                                            valueFontSizeMd={formDescTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({formDescTypoFontSizeMd: value})}
                                            valueFontSize={formDescTypoFontSize}
                                            setValueFontSize={value => setAttributes({formDescTypoFontSize: value})}
                                            valueFontSizeUnit={formDescTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({formDescTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={formDescTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({formDescTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={formDescTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({formDescTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={formDescTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({formDescTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={formDescTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({formDescTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={formDescTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({formDescTypoLineHeightSm: value})}
                                            valueLineHeightMd={formDescTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({formDescTypoLineHeightMd: value})}
                                            valueLineHeight={formDescTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({formDescTypoLineHeight: value})}
                                            valueLineHeightUnit={formDescTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({formDescTypoLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={formDescTypoFontColor}
                                            setValue={value => setAttributes({formDescTypoFontColor: value})}
                                        />
                                        <DimensionControl
                                            label={__('Spacing', 'smart-blocks')}
                                            dimensionTop={formDescSpacingTop}
                                            setDimensionTop={value => setAttributes({formDescSpacingTop: value})}
                                            dimensionLeft={formDescSpacingLeft}
                                            setDimensionLeft={value => setAttributes({formDescSpacingLeft: value})}
                                            dimensionRight={formDescSpacingRight}
                                            setDimensionRight={value => setAttributes({formDescSpacingRight: value})}
                                            dimensionBottom={formDescSpacingBottom}
                                            setDimensionBottom={value => setAttributes({formDescSpacingBottom: value})}
                                            unit={formDescSpacingUnit}
                                            setUnit={value => setAttributes({formDescSpacingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Heading', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={headingTypoFamily}
                                            setValueFamily={value => setAttributes({headingTypoFamily: value})}
                                            valueWeight={headingTypoWeight}
                                            setValueWeight={value => setAttributes({headingTypoWeight: value})}
                                            valueTextTransform={headingTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({headingTypoTextTransform: value})}
                                            valueTextDecoration={headingTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({headingTypoTextDecoration: value})}
                                            valueFontSizeSm={headingTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({headingTypoFontSizeSm: value})}
                                            valueFontSizeMd={headingTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({headingTypoFontSizeMd: value})}
                                            valueFontSize={headingTypoFontSize}
                                            setValueFontSize={value => setAttributes({headingTypoFontSize: value})}
                                            valueFontSizeUnit={headingTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({headingTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={headingTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({headingTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={headingTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({headingTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={headingTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({headingTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={headingTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({headingTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={headingTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({headingTypoLineHeightSm: value})}
                                            valueLineHeightMd={headingTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({headingTypoLineHeightMd: value})}
                                            valueLineHeight={headingTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({headingTypoLineHeight: value})}
                                            valueLineHeightUnit={headingTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({headingTypoLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headingTypoFontColor}
                                            setValue={value => setAttributes({headingTypoFontColor: value})}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Paragraph', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={paragraphTypoFamily}
                                            setValueFamily={value => setAttributes({paragraphTypoFamily: value})}
                                            valueWeight={paragraphTypoWeight}
                                            setValueWeight={value => setAttributes({paragraphTypoWeight: value})}
                                            valueTextTransform={paragraphTypoTextTransform}
                                            setValueTextTransform={value => setAttributes({paragraphTypoTextTransform: value})}
                                            valueTextDecoration={paragraphTypoTextDecoration}
                                            setValueTextDecoration={value => setAttributes({paragraphTypoTextDecoration: value})}
                                            valueFontSizeSm={paragraphTypoFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({paragraphTypoFontSizeSm: value})}
                                            valueFontSizeMd={paragraphTypoFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({paragraphTypoFontSizeMd: value})}
                                            valueFontSize={paragraphTypoFontSize}
                                            setValueFontSize={value => setAttributes({paragraphTypoFontSize: value})}
                                            valueFontSizeUnit={paragraphTypoFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({paragraphTypoFontSizeUnit: value})}
                                            valueLetterSpacingSm={paragraphTypoLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({paragraphTypoLetterSpacingSm: value})}
                                            valueLetterSpacingMd={paragraphTypoLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({paragraphTypoLetterSpacingMd: value})}
                                            valueLetterSpacing={paragraphTypoLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({paragraphTypoLetterSpacing: value})}
                                            valueLetterSpacingUnit={paragraphTypoLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({paragraphTypoLetterSpacingUnit: value})}
                                            valueLineHeightSm={paragraphTypoLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({paragraphTypoLineHeightSm: value})}
                                            valueLineHeightMd={paragraphTypoLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({paragraphTypoLineHeightMd: value})}
                                            valueLineHeight={paragraphTypoLineHeight}
                                            setValueLineHeight={value => setAttributes({paragraphTypoLineHeight: value})}
                                            valueLineHeightUnit={paragraphTypoLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({paragraphTypoLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={paragraphTypoFontColor}
                                            setValue={value => setAttributes({paragraphTypoFontColor: value})}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Divider', 'hash-form')}
                                        initialOpen={false}>
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={dividerColor}
                                            setValue={value => setAttributes({dividerColor: value})}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Star', 'hash-form')}
                                        initialOpen={false}>
                                        <RangeSliderControl
                                            label={__('Size', 'hash-form')}
                                            value={starSize}
                                            setValue={(starSize) => setAttributes({starSize})}
                                            unit={starSizeUnit}
                                            setUnit={(starSizeUnit) => setAttributes({starSizeUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={starColor}
                                            setValue={value => setAttributes({starColor: value})}
                                        />
                                        <ColorControl
                                            label={__('Color (Active)', 'smart-blocks')}
                                            enableAlpha
                                            value={starColorActive}
                                            setValue={value => setAttributes({starColorActive: value})}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Range Slider', 'hash-form')}
                                        initialOpen={false}>
                                        <RangeSliderControl
                                            label={__('Height', 'hash-form')}
                                            value={rangeHeight}
                                            setValue={(rangeHeight) => setAttributes({rangeHeight})}
                                            unit={rangeHeightUnit}
                                            setUnit={(rangeHeightUnit) => setAttributes({rangeHeightUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                        <RangeSliderControl
                                            label={__('Handle Size', 'hash-form')}
                                            value={rangeHandleSize}
                                            setValue={(rangeHandleSize) => setAttributes({rangeHandleSize})}
                                            unit={rangeHandleSizeUnit}
                                            setUnit={(rangeHandleSizeUnit) => setAttributes({rangeHandleSizeUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                        <ColorControl
                                            label={__('Bar Color', 'smart-blocks')}
                                            enableAlpha
                                            value={rangeColor}
                                            setValue={value => setAttributes({rangeColor: value})}
                                        />
                                        <ColorControl
                                            label={__('Color (Active)', 'smart-blocks')}
                                            enableAlpha
                                            value={rangeColorActive}
                                            setValue={value => setAttributes({rangeColorActive: value})}
                                        />
                                        <ColorControl
                                            label={__('Handle Color', 'smart-blocks')}
                                            enableAlpha
                                            value={rangeHandleColor}
                                            setValue={value => setAttributes({rangeHandleColor: value})}
                                        />
                                    </PanelBody>
                                </>}
                            </>
                        ) || 'advanced' === activeTab && (
                            <>
                            </>
                        )}
                    </div>
                </div>
            </InspectorControls>
            <div {...useBlockProps({
                className: "wp-block-hash-form",
                id: id
            })}>
                {formId ? <ServerSideRender
                    key="hash-form-selector-server-side-renderer"
                    block="hash-form/form-selector"
                    attributes={attributes}
                /> : <Placeholder
                    key="hash-form-selector-wrap"
                    icon={HashFormIcon}
                    instructions={__('Hash Form', 'hash-form')}
                    className="hash-form-gutenberg-form-selector-wrap">
                    <SelectControl
                        key="hash-form-selector-select-control"
                        value={formId}
                        options={formOptions}
                        onChange={selectForm}
                    />
                </Placeholder>}
            </div>
        </>
    );
}
