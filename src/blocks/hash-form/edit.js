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

export default function Edit(props) {
    const {attributes, setAttributes} = props;
    const [activeTab, setActiveTab] = useState('layout');
    const {
        id,
        hfStyle,

        formId,
        enableCustomStyle,

        columnGap,
        columnGapUnit,

        rowGap,
        rowGapUnit,

        labelTypographyFamily,
        labelTypographyWeight,
        labelTypographyTextTransform,
        labelTypographyTextDecoration,
        labelTypographyFontSizeSm,
        labelTypographyFontSizeMd,
        labelTypographyFontSize,
        labelTypographyFontSizeUnit,
        labelTypographyLetterSpacingSm,
        labelTypographyLetterSpacingMd,
        labelTypographyLetterSpacing,
        labelTypographyLetterSpacingUnit,
        labelTypographyLineHeightSm,
        labelTypographyLineHeightMd,
        labelTypographyLineHeight,
        labelTypographyLineHeightUnit,

        labelColor,
        requiredColor,

        labelSpacingTop,
        labelSpacingLeft,
        labelSpacingRight,
        labelSpacingBottom,
        labelSpacingUnit,

        descriptionTypographyFamily,
        descriptionTypographyWeight,
        descriptionTypographyTextTransform,
        descriptionTypographyTextDecoration,
        descriptionTypographyFontSizeSm,
        descriptionTypographyFontSizeMd,
        descriptionTypographyFontSize,
        descriptionTypographyFontSizeUnit,
        descriptionTypographyLetterSpacingSm,
        descriptionTypographyLetterSpacingMd,
        descriptionTypographyLetterSpacing,
        descriptionTypographyLetterSpacingUnit,
        descriptionTypographyLineHeightSm,
        descriptionTypographyLineHeightMd,
        descriptionTypographyLineHeight,
        descriptionTypographyLineHeightUnit,

        descriptionColor,

        descriptionSpacingTop,
        descriptionSpacingLeft,
        descriptionSpacingRight,
        descriptionSpacingBottom,
        descriptionSpacingUnit,

        fieldsTypographyFamily,
        fieldsTypographyWeight,
        fieldsTypographyTextTransform,
        fieldsTypographyTextDecoration,
        fieldsTypographyFontSizeSm,
        fieldsTypographyFontSizeMd,
        fieldsTypographyFontSize,
        fieldsTypographyFontSizeUnit,
        fieldsTypographyLetterSpacingSm,
        fieldsTypographyLetterSpacingMd,
        fieldsTypographyLetterSpacing,
        fieldsTypographyLetterSpacingUnit,
        fieldsTypographyLineHeightSm,
        fieldsTypographyLineHeightMd,
        fieldsTypographyLineHeight,
        fieldsTypographyLineHeightUnit,

        fieldsColor,
        fieldsBgColor,

        fieldsBoxShadowHorizontal,
        fieldsBoxShadowVertical,
        fieldsBoxShadowBlur,
        fieldsBoxShadowSpread,
        fieldsBoxShadowColor,
        fieldsBoxShadowInset,

        fieldsBorder,

        fieldsBorderWidthTop,
        fieldsBorderWidthMdTop,
        fieldsBorderWidthSmTop,
        fieldsBorderWidthLeft,
        fieldsBorderWidthMdLeft,
        fieldsBorderWidthSmLeft,
        fieldsBorderWidthRight,
        fieldsBorderWidthMdRight,
        fieldsBorderWidthSmRight,
        fieldsBorderWidthBottom,
        fieldsBorderWidthMdBottom,
        fieldsBorderWidthSmBottom,
        fieldsBorderWidthUnit,

        fieldsBorderColor,

        fieldsColorFocus,
        fieldsBgColorFocus,
        fieldsBoxShadowFocusHorizontal,
        fieldsBoxShadowFocusVertical,
        fieldsBoxShadowFocusBlur,
        fieldsBoxShadowFocusSpread,
        fieldsBoxShadowFocusColor,
        fieldsBoxShadowFocusInset,

        fieldsBorderFocus,
        fieldsBorderFocusWidthTop,
        fieldsBorderFocusWidthMdTop,
        fieldsBorderFocusWidthSmTop,
        fieldsBorderFocusWidthLeft,
        fieldsBorderFocusWidthMdLeft,
        fieldsBorderFocusWidthSmLeft,
        fieldsBorderFocusWidthRight,
        fieldsBorderFocusWidthMdRight,
        fieldsBorderFocusWidthSmRight,
        fieldsBorderFocusWidthBottom,
        fieldsBorderFocusWidthMdBottom,
        fieldsBorderFocusWidthSmBottom,
        fieldsBorderFocusWidthUnit,

        fieldsBorderFocusColor,

        fieldsBorderRadiusTop,
        fieldsBorderRadiusLeft,
        fieldsBorderRadiusRight,
        fieldsBorderRadiusBottom,
        fieldsBorderRadiusUnit,

        fieldsPaddingTop,
        fieldsPaddingLeft,
        fieldsPaddingRight,
        fieldsPaddingBottom,
        fieldsPaddingUnit,

        uploadTypographyFamily,
        uploadTypographyWeight,
        uploadTypographyTextTransform,
        uploadTypographyTextDecoration,
        uploadTypographyFontSizeSm,
        uploadTypographyFontSizeMd,
        uploadTypographyFontSize,
        uploadTypographyFontSizeUnit,
        uploadTypographyLetterSpacingSm,
        uploadTypographyLetterSpacingMd,
        uploadTypographyLetterSpacing,
        uploadTypographyLetterSpacingUnit,
        uploadTypographyLineHeightSm,
        uploadTypographyLineHeightMd,
        uploadTypographyLineHeight,
        uploadTypographyLineHeightUnit,

        uploadColor,
        uploadBgColor,

        uploadBoxShadowHorizontal,
        uploadBoxShadowVertical,
        uploadBoxShadowBlur,
        uploadBoxShadowSpread,
        uploadBoxShadowColor,
        uploadBoxShadowInset,

        uploadBorder,
        uploadBorderWidthTop,
        uploadBorderWidthMdTop,
        uploadBorderWidthSmTop,
        uploadBorderWidthLeft,
        uploadBorderWidthMdLeft,
        uploadBorderWidthSmLeft,
        uploadBorderWidthRight,
        uploadBorderWidthMdRight,
        uploadBorderWidthSmRight,
        uploadBorderWidthBottom,
        uploadBorderWidthMdBottom,
        uploadBorderWidthSmBottom,
        uploadBorderWidthUnit,

        uploadBorderColor,

        uploadColorHover,
        uploadBgColorHover,

        uploadBoxShadowHoverHorizontal,
        uploadBoxShadowHoverVertical,
        uploadBoxShadowHoverBlur,
        uploadBoxShadowHoverSpread,
        uploadBoxShadowHoverColor,
        uploadBoxShadowHoverInset,

        uploadBorderHover,
        uploadBorderHoverWidthTop,
        uploadBorderHoverWidthMdTop,
        uploadBorderHoverWidthSmTop,
        uploadBorderHoverWidthLeft,
        uploadBorderHoverWidthMdLeft,
        uploadBorderHoverWidthSmLeft,
        uploadBorderHoverWidthRight,
        uploadBorderHoverWidthMdRight,
        uploadBorderHoverWidthSmRight,
        uploadBorderHoverWidthBottom,
        uploadBorderHoverWidthMdBottom,
        uploadBorderHoverWidthSmBottom,
        uploadBorderHoverWidthUnit,
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

        buttonTypographyFamily,
        buttonTypographyWeight,
        buttonTypographyTextTransform,
        buttonTypographyTextDecoration,
        buttonTypographyFontSizeSm,
        buttonTypographyFontSizeMd,
        buttonTypographyFontSize,
        buttonTypographyFontSizeUnit,
        buttonTypographyLetterSpacingSm,
        buttonTypographyLetterSpacingMd,
        buttonTypographyLetterSpacing,
        buttonTypographyLetterSpacingUnit,
        buttonTypographyLineHeightSm,
        buttonTypographyLineHeightMd,
        buttonTypographyLineHeight,
        buttonTypographyLineHeightUnit,

        buttonColor,
        buttonBgColor,

        buttonBoxShadowHorizontal,
        buttonBoxShadowVertical,
        buttonBoxShadowBlur,
        buttonBoxShadowSpread,
        buttonBoxShadowColor,
        buttonBoxShadowInset,

        buttonBorder,
        buttonBorderWidthTop,
        buttonBorderWidthMdTop,
        buttonBorderWidthSmTop,
        buttonBorderWidthLeft,
        buttonBorderWidthMdLeft,
        buttonBorderWidthSmLeft,
        buttonBorderWidthRight,
        buttonBorderWidthMdRight,
        buttonBorderWidthSmRight,
        buttonBorderWidthBottom,
        buttonBorderWidthMdBottom,
        buttonBorderWidthSmBottom,
        buttonBorderWidthUnit,
        buttonBorderColor,

        buttonColorHover,
        buttonBgColorHover,

        buttonBoxShadowHoverHorizontal,
        buttonBoxShadowHoverVertical,
        buttonBoxShadowHoverBlur,
        buttonBoxShadowHoverSpread,
        buttonBoxShadowHoverColor,
        buttonBoxShadowHoverInset,

        buttonBorderHover,

        buttonBorderHoverWidthTop,
        buttonBorderHoverWidthMdTop,
        buttonBorderHoverWidthSmTop,
        buttonBorderHoverWidthLeft,
        buttonBorderHoverWidthMdLeft,
        buttonBorderHoverWidthSmLeft,
        buttonBorderHoverWidthRight,
        buttonBorderHoverWidthMdRight,
        buttonBorderHoverWidthSmRight,
        buttonBorderHoverWidthBottom,
        buttonBorderHoverWidthMdBottom,
        buttonBorderHoverWidthSmBottom,
        buttonBorderHoverWidthUnit,
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

        validationTypographyFamily,
        validationTypographyWeight,
        validationTypographyTextTransform,
        validationTypographyTextDecoration,
        validationTypographyFontSizeSm,
        validationTypographyFontSizeMd,
        validationTypographyFontSize,
        validationTypographyFontSizeUnit,
        validationTypographyLetterSpacingSm,
        validationTypographyLetterSpacingMd,
        validationTypographyLetterSpacing,
        validationTypographyLetterSpacingUnit,
        validationTypographyLineHeightSm,
        validationTypographyLineHeightMd,
        validationTypographyLineHeight,
        validationTypographyLineHeightUnit,

        validationColor,
        validationTextAlignment,

        formTitleTypographyFamily,
        formTitleTypographyWeight,
        formTitleTypographyTextTransform,
        formTitleTypographyTextDecoration,
        formTitleTypographyFontSizeSm,
        formTitleTypographyFontSizeMd,
        formTitleTypographyFontSize,
        formTitleTypographyFontSizeUnit,
        formTitleTypographyLetterSpacingSm,
        formTitleTypographyLetterSpacingMd,
        formTitleTypographyLetterSpacing,
        formTitleTypographyLetterSpacingUnit,
        formTitleTypographyLineHeightSm,
        formTitleTypographyLineHeightMd,
        formTitleTypographyLineHeight,
        formTitleTypographyLineHeightUnit,

        formTitleColor,

        formTitleSpacingTop,
        formTitleSpacingLeft,
        formTitleSpacingRight,
        formTitleSpacingBottom,
        formTitleSpacingUnit,

        formDescTypographyFamily,
        formDescTypographyWeight,
        formDescTypographyTextTransform,
        formDescTypographyTextDecoration,
        formDescTypographyFontSizeSm,
        formDescTypographyFontSizeMd,
        formDescTypographyFontSize,
        formDescTypographyFontSizeUnit,
        formDescTypographyLetterSpacingSm,
        formDescTypographyLetterSpacingMd,
        formDescTypographyLetterSpacing,
        formDescTypographyLetterSpacingUnit,
        formDescTypographyLineHeightSm,
        formDescTypographyLineHeightMd,
        formDescTypographyLineHeight,
        formDescTypographyLineHeightUnit,

        formDescColor,
        formDescSpacingTop,
        formDescSpacingLeft,
        formDescSpacingRight,
        formDescSpacingBottom,
        formDescSpacingUnit,

        headingTypographyFamily,
        headingTypographyWeight,
        headingTypographyTextTransform,
        headingTypographyTextDecoration,
        headingTypographyFontSizeSm,
        headingTypographyFontSizeMd,
        headingTypographyFontSize,
        headingTypographyFontSizeUnit,
        headingTypographyLetterSpacingSm,
        headingTypographyLetterSpacingMd,
        headingTypographyLetterSpacing,
        headingTypographyLetterSpacingUnit,
        headingTypographyLineHeightSm,
        headingTypographyLineHeightMd,
        headingTypographyLineHeight,
        headingTypographyLineHeightUnit,

        headingColor,

        paragraphTypographyFamily,
        paragraphTypographyWeight,
        paragraphTypographyTextTransform,
        paragraphTypographyTextDecoration,
        paragraphTypographyFontSizeSm,
        paragraphTypographyFontSizeMd,
        paragraphTypographyFontSize,
        paragraphTypographyFontSizeUnit,
        paragraphTypographyLetterSpacingSm,
        paragraphTypographyLetterSpacingMd,
        paragraphTypographyLetterSpacing,
        paragraphTypographyLetterSpacingUnit,
        paragraphTypographyLineHeightSm,
        paragraphTypographyLineHeightMd,
        paragraphTypographyLineHeight,
        paragraphTypographyLineHeightUnit,

        paragraphColor,
        dividerColor,
        starSize,
        starSizeUnit,

        starColor,
        starColorActive,

        rangeSliderHeight,
        rangeSliderHeightUnit,

        rangeSliderHandleSize,
        rangeSliderHandleSizeUnit,

        rangeSliderBarColor,
        rangeSliderBarColorActive,
        rangeHandleColor,
    } = attributes;

    setAttributes({id: useBlockProps()['id']});

    const stylesCSS = `#${id} {
        ${enableCustomStyle && getStyleVars(attributes, {
            responsiveSliderUnits: [],
            normal: ['labelColor', 'requiredColor', 'descriptionColor', 'fieldsColor', 'fieldsBgColor', 'fieldsColorFocus', 'fieldsBgColorFocus', 'uploadColor', 'uploadBorderColor', 'uploadBgColor', 'uploadColorHover', 'uploadBgColorHover', 'buttonColor', 'buttonBgColor', 'buttonColorHover', 'buttonBgColorHover', 'validationColor', 'validationTextAlignment', 'formTitleColor', 'formDescColor', 'headingColor', 'paragraphColor', 'dividerColor', 'starColor', 'starColorActive', 'rangeSliderBarColor', 'rangeSliderBarColorActive', 'rangeHandleColor'],
            normalUnit: ['columnGap', 'rowGap', 'starSize', 'rangeSliderHeight', 'rangeSliderHandleSize'],
            dimension: ['labelSpacing', 'descriptionSpacing', 'fieldsBorderRadius', 'fieldsPadding', 'uploadBorderRadius', 'uploadPadding', 'buttonBorderRadius', 'buttonPadding', 'formTitleSpacing', 'formDescSpacing'],
            responsiveBorder: ['fieldsBorder', 'fieldsBorderFocus', 'uploadBorderHover', 'buttonBorder', 'buttonBorderHover'],
            responsiveTypography: ['labelTypography', 'descriptionTypography', 'fieldsTypography', 'uploadTypography', 'buttonTypography', 'validationTypography', 'formTitleTypography', 'formDescTypography', 'headingTypography', 'paragraphTypography'],
            boxShadow: ['fieldsBoxShadow', 'fieldsBoxShadowFocus', 'buttonBoxShadow', 'buttonBoxShadowHover', 'uploadBoxShadowHover']
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
            {labelTypographyFamily && (labelTypographyFamily != 'Default') && <GoogleFontLoad family={labelTypographyFamily} weight={labelTypographyWeight.replace("italic", "i")} />}
            {descriptionTypographyFamily && (descriptionTypographyFamily != 'Default') && <GoogleFontLoad family={descriptionTypographyFamily} weight={descriptionTypographyWeight.replace("italic", "i")} />}
            {fieldsTypographyFamily && (fieldsTypographyFamily != 'Default') && <GoogleFontLoad family={fieldsTypographyFamily} weight={fieldsTypographyWeight.replace("italic", "i")} />}
            {uploadTypographyFamily && (uploadTypographyFamily != 'Default') && <GoogleFontLoad family={uploadTypographyFamily} weight={uploadTypographyWeight.replace("italic", "i")} />}
            {buttonTypographyFamily && (buttonTypographyFamily != 'Default') && <GoogleFontLoad family={buttonTypographyFamily} weight={buttonTypographyWeight.replace("italic", "i")} />}
            {validationTypographyFamily && (validationTypographyFamily != 'Default') && <GoogleFontLoad family={validationTypographyFamily} weight={validationTypographyWeight.replace("italic", "i")} />}
            {formTitleTypographyFamily && (formTitleTypographyFamily != 'Default') && <GoogleFontLoad family={formTitleTypographyFamily} weight={formTitleTypographyWeight.replace("italic", "i")} />}
            {formDescTypographyFamily && (formDescTypographyFamily != 'Default') && <GoogleFontLoad family={formDescTypographyFamily} weight={formDescTypographyWeight.replace("italic", "i")} />}
            {headingTypographyFamily && (headingTypographyFamily != 'Default') && <GoogleFontLoad family={headingTypographyFamily} weight={headingTypographyWeight.replace("italic", "i")} />}
            {paragraphTypographyFamily && (paragraphTypographyFamily != 'Default') && <GoogleFontLoad family={paragraphTypographyFamily} weight={paragraphTypographyWeight.replace("italic", "i")} />}

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
                    <div className="hf-panel-tab-fields">
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
                                            value={columnGap}
                                            setValue={(columnGap) => setAttributes({columnGap})}
                                            unit={columnGapUnit}
                                            setUnit={(columnGapUnit) => setAttributes({columnGapUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                        <RangeSliderControl
                                            label={__('Row Gap', 'hash-form')}
                                            value={rowGap}
                                            setValue={(rowGap) => setAttributes({rowGap})}
                                            unit={rowGapUnit}
                                            setUnit={(rowGapUnit) => setAttributes({rowGapUnit})}
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
                                            valueFamily={labelTypographyFamily}
                                            setValueFamily={value => setAttributes({labelTypographyFamily: value})}
                                            valueWeight={labelTypographyWeight}
                                            setValueWeight={value => setAttributes({labelTypographyWeight: value})}
                                            valueTextTransform={labelTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({labelTypographyTextTransform: value})}
                                            valueTextDecoration={labelTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({labelTypographyTextDecoration: value})}
                                            valueFontSizeSm={labelTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({labelTypographyFontSizeSm: value})}
                                            valueFontSizeMd={labelTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({labelTypographyFontSizeMd: value})}
                                            valueFontSize={labelTypographyFontSize}
                                            setValueFontSize={value => setAttributes({labelTypographyFontSize: value})}
                                            valueFontSizeUnit={labelTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({labelTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={labelTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({labelTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={labelTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({labelTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={labelTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({labelTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={labelTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({labelTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={labelTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({labelTypographyLineHeightSm: value})}
                                            valueLineHeightMd={labelTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({labelTypographyLineHeightMd: value})}
                                            valueLineHeight={labelTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({labelTypographyLineHeight: value})}
                                            valueLineHeightUnit={labelTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({labelTypographyLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={labelColor}
                                            setValue={value => setAttributes({labelColor: value})}
                                        />
                                        <ColorControl
                                            label={__('Required Color', 'smart-blocks')}
                                            enableAlpha
                                            value={requiredColor}
                                            setValue={value => setAttributes({requiredColor: value})}
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
                                            valueFamily={descriptionTypographyFamily}
                                            setValueFamily={value => setAttributes({descriptionTypographyFamily: value})}
                                            valueWeight={descriptionTypographyWeight}
                                            setValueWeight={value => setAttributes({descriptionTypographyWeight: value})}
                                            valueTextTransform={descriptionTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({descriptionTypographyTextTransform: value})}
                                            valueTextDecoration={descriptionTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({descriptionTypographyTextDecoration: value})}
                                            valueFontSizeSm={descriptionTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({descriptionTypographyFontSizeSm: value})}
                                            valueFontSizeMd={descriptionTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({descriptionTypographyFontSizeMd: value})}
                                            valueFontSize={descriptionTypographyFontSize}
                                            setValueFontSize={value => setAttributes({descriptionTypographyFontSize: value})}
                                            valueFontSizeUnit={descriptionTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({descriptionTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={descriptionTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({descriptionTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={descriptionTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({descriptionTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={descriptionTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({descriptionTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={descriptionTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({descriptionTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={descriptionTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({descriptionTypographyLineHeightSm: value})}
                                            valueLineHeightMd={descriptionTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({descriptionTypographyLineHeightMd: value})}
                                            valueLineHeight={descriptionTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({descriptionTypographyLineHeight: value})}
                                            valueLineHeightUnit={descriptionTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({descriptionTypographyLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={descriptionColor}
                                            setValue={value => setAttributes({descriptionColor: value})}
                                        />
                                        <DimensionControl
                                            label={__('Spacing', 'smart-blocks')}
                                            dimensionTop={descriptionSpacingTop}
                                            setDimensionTop={value => setAttributes({descriptionSpacingTop: value})}
                                            dimensionLeft={descriptionSpacingLeft}
                                            setDimensionLeft={value => setAttributes({descriptionSpacingLeft: value})}
                                            dimensionRight={descriptionSpacingRight}
                                            setDimensionRight={value => setAttributes({descriptionSpacingRight: value})}
                                            dimensionBottom={descriptionSpacingBottom}
                                            setDimensionBottom={value => setAttributes({descriptionSpacingBottom: value})}
                                            unit={descriptionSpacingUnit}
                                            setUnit={value => setAttributes({descriptionSpacingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Fields', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={fieldsTypographyFamily}
                                            setValueFamily={value => setAttributes({fieldsTypographyFamily: value})}
                                            valueWeight={fieldsTypographyWeight}
                                            setValueWeight={value => setAttributes({fieldsTypographyWeight: value})}
                                            valueTextTransform={fieldsTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({fieldsTypographyTextTransform: value})}
                                            valueTextDecoration={fieldsTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({fieldsTypographyTextDecoration: value})}
                                            valueFontSizeSm={fieldsTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({fieldsTypographyFontSizeSm: value})}
                                            valueFontSizeMd={fieldsTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({fieldsTypographyFontSizeMd: value})}
                                            valueFontSize={fieldsTypographyFontSize}
                                            setValueFontSize={value => setAttributes({fieldsTypographyFontSize: value})}
                                            valueFontSizeUnit={fieldsTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({fieldsTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={fieldsTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({fieldsTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={fieldsTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({fieldsTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={fieldsTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({fieldsTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={fieldsTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({fieldsTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={fieldsTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({fieldsTypographyLineHeightSm: value})}
                                            valueLineHeightMd={fieldsTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({fieldsTypographyLineHeightMd: value})}
                                            valueLineHeight={fieldsTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({fieldsTypographyLineHeight: value})}
                                            valueLineHeightUnit={fieldsTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({fieldsTypographyLineHeightUnit: value})}
                                        />
                                        <Tabs>
                                            <div tabTitle={__("Normal", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldsColor}
                                                    setValue={value => setAttributes({fieldsColor: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldsBgColor}
                                                    setValue={value => setAttributes({fieldsBgColor: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={fieldsBoxShadowHorizontal}
                                                    setValueHorizontal={(fieldsBoxShadowHorizontal) => setAttributes({fieldsBoxShadowHorizontal})}
                                                    valueVertical={fieldsBoxShadowVertical}
                                                    setValueVertical={(fieldsBoxShadowVertical) => setAttributes({fieldsBoxShadowVertical})}
                                                    valueBlur={fieldsBoxShadowBlur}
                                                    setValueBlur={(fieldsBoxShadowBlur) => setAttributes({fieldsBoxShadowBlur})}
                                                    valueSpread={fieldsBoxShadowSpread}
                                                    setValueSpread={(fieldsBoxShadowSpread) => setAttributes({fieldsBoxShadowSpread})}
                                                    valueColor={fieldsBoxShadowColor}
                                                    setValueColor={(fieldsBoxShadowColor) => setAttributes({fieldsBoxShadowColor})}
                                                    valueInset={fieldsBoxShadowInset}
                                                    setValueInset={(fieldsBoxShadowInset) => setAttributes({fieldsBoxShadowInset})}
                                                />
                                                <BorderControl
                                                    value={fieldsBorder}
                                                    setValue={(fieldsBorder) => setAttributes({fieldsBorder})}
                                                />
                                                {fieldsBorder && (
                                                    <>
                                                        <DimensionControl
                                                            label={__('Border Width', 'smart-blocks-pro')}
                                                            units={['px', 'em', 'rem', 'vw']}
                                                            responsive={!0}
                                                            dimensionTop={fieldsBorderWidthTop}
                                                            setDimensionTop={value => setAttributes({fieldsBorderWidthTop: value})}
                                                            dimensionMdTop={fieldsBorderWidthMdTop}
                                                            setDimensionMdTop={value => setAttributes({fieldsBorderWidthMdTop: value})}
                                                            dimensionSmTop={fieldsBorderWidthSmTop}
                                                            setDimensionSmTop={value => setAttributes({fieldsBorderWidthSmTop: value})}
                
                                                            dimensionLeft={fieldsBorderWidthLeft}
                                                            setDimensionLeft={value => setAttributes({fieldsBorderWidthLeft: value})}
                                                            dimensionMdLeft={fieldsBorderWidthMdLeft}
                                                            setDimensionMdLeft={value => setAttributes({fieldsBorderWidthMdLeft: value})}
                                                            dimensionSmLeft={fieldsBorderWidthSmLeft}
                                                            setDimensionSmLeft={value => setAttributes({fieldsBorderWidthSmLeft: value})}
                
                                                            dimensionRight={fieldsBorderWidthRight}
                                                            setDimensionRight={value => setAttributes({fieldsBorderWidthRight: value})}
                                                            dimensionMdRight={fieldsBorderWidthMdRight}
                                                            setDimensionMdRight={value => setAttributes({fieldsBorderWidthMdRight: value})}
                                                            dimensionSmRight={fieldsBorderWidthSmRight}
                                                            setDimensionSmRight={value => setAttributes({fieldsBorderWidthSmRight: value})}
                
                                                            dimensionBottom={fieldsBorderWidthBottom}
                                                            setDimensionBottom={value => setAttributes({fieldsBorderWidthBottom: value})}
                                                            dimensionMdBottom={fieldsBorderWidthMdBottom}
                                                            setDimensionMdBottom={value => setAttributes({fieldsBorderWidthMdBottom: value})}
                                                            dimensionSmBottom={fieldsBorderWidthSmBottom}
                                                            setDimensionSmBottom={value => setAttributes({fieldsBorderWidthSmBottom: value})}
                
                                                            unit={fieldsBorderWidthUnit}
                                                            setUnit={value => setAttributes({fieldsBorderWidthUnit: value})}
                                                        />
                                                        <ColorControl
                                                            label={__('Border Color', 'smart-blocks-pro')}
                                                            enableAlpha
                                                            value={fieldsBorderColor}
                                                            setValue={(fieldsBorderColor) => setAttributes({fieldsBorderColor})}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                            <div tabTitle={__("Focus", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldsColorFocus}
                                                    setValue={value => setAttributes({fieldsColorFocus: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={fieldsBgColorFocus}
                                                    setValue={value => setAttributes({fieldsBgColorFocus: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={fieldsBoxShadowFocusHorizontal}
                                                    setValueHorizontal={(fieldsBoxShadowFocusHorizontal) => setAttributes({fieldsBoxShadowFocusHorizontal})}
                                                    valueVertical={fieldsBoxShadowFocusVertical}
                                                    setValueVertical={(fieldsBoxShadowFocusVertical) => setAttributes({fieldsBoxShadowFocusVertical})}
                                                    valueBlur={fieldsBoxShadowFocusBlur}
                                                    setValueBlur={(fieldsBoxShadowFocusBlur) => setAttributes({fieldsBoxShadowFocusBlur})}
                                                    valueSpread={fieldsBoxShadowFocusSpread}
                                                    setValueSpread={(fieldsBoxShadowFocusSpread) => setAttributes({fieldsBoxShadowFocusSpread})}
                                                    valueColor={fieldsBoxShadowFocusColor}
                                                    setValueColor={(fieldsBoxShadowFocusColor) => setAttributes({fieldsBoxShadowFocusColor})}
                                                    valueInset={fieldsBoxShadowFocusInset}
                                                    setValueInset={(fieldsBoxShadowFocusInset) => setAttributes({fieldsBoxShadowFocusInset})}
                                                />
                                                <BorderControl
                                                    value={fieldsBorderFocus}
                                                    setValue={(fieldsBorderFocus) => setAttributes({fieldsBorderFocus})}
                                                />
                                                {fieldsBorderFocus && (
                                                    <>
                                                        <DimensionControl
                                                            label={__('Border Width', 'smart-blocks-pro')}
                                                            units={['px', 'em', 'rem', 'vw']}
                                                            responsive={!0}
                                                            dimensionTop={fieldsBorderFocusWidthTop}
                                                            setDimensionTop={value => setAttributes({fieldsBorderFocusWidthTop: value})}
                                                            dimensionMdTop={fieldsBorderFocusWidthMdTop}
                                                            setDimensionMdTop={value => setAttributes({fieldsBorderFocusWidthMdTop: value})}
                                                            dimensionSmTop={fieldsBorderFocusWidthSmTop}
                                                            setDimensionSmTop={value => setAttributes({fieldsBorderFocusWidthSmTop: value})}
                
                                                            dimensionLeft={fieldsBorderFocusWidthLeft}
                                                            setDimensionLeft={value => setAttributes({fieldsBorderFocusWidthLeft: value})}
                                                            dimensionMdLeft={fieldsBorderFocusWidthMdLeft}
                                                            setDimensionMdLeft={value => setAttributes({fieldsBorderFocusWidthMdLeft: value})}
                                                            dimensionSmLeft={fieldsBorderFocusWidthSmLeft}
                                                            setDimensionSmLeft={value => setAttributes({fieldsBorderFocusWidthSmLeft: value})}
                
                                                            dimensionRight={fieldsBorderFocusWidthRight}
                                                            setDimensionRight={value => setAttributes({fieldsBorderFocusWidthRight: value})}
                                                            dimensionMdRight={fieldsBorderFocusWidthMdRight}
                                                            setDimensionMdRight={value => setAttributes({fieldsBorderFocusWidthMdRight: value})}
                                                            dimensionSmRight={fieldsBorderFocusWidthSmRight}
                                                            setDimensionSmRight={value => setAttributes({fieldsBorderFocusWidthSmRight: value})}
                
                                                            dimensionBottom={fieldsBorderFocusWidthBottom}
                                                            setDimensionBottom={value => setAttributes({fieldsBorderFocusWidthBottom: value})}
                                                            dimensionMdBottom={fieldsBorderFocusWidthMdBottom}
                                                            setDimensionMdBottom={value => setAttributes({fieldsBorderFocusWidthMdBottom: value})}
                                                            dimensionSmBottom={fieldsBorderFocusWidthSmBottom}
                                                            setDimensionSmBottom={value => setAttributes({fieldsBorderFocusWidthSmBottom: value})}
                
                                                            unit={fieldsBorderFocusWidthUnit}
                                                            setUnit={value => setAttributes({fieldsBorderFocusWidthUnit: value})}
                                                        />
                                                        <ColorControl
                                                            label={__('Border Color', 'smart-blocks-pro')}
                                                            enableAlpha
                                                            value={fieldsBorderFocusColor}
                                                            setValue={(fieldsBorderFocusColor) => setAttributes({fieldsBorderFocusColor})}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                        </Tabs>
                                        <DimensionControl
                                            label={__('Border Radius', 'smart-blocks')}
                                            dimensionTop={fieldsBorderRadiusTop}
                                            setDimensionTop={value => setAttributes({fieldsBorderRadiusTop: value})}
                                            dimensionLeft={fieldsBorderRadiusLeft}
                                            setDimensionLeft={value => setAttributes({fieldsBorderRadiusLeft: value})}
                                            dimensionRight={fieldsBorderRadiusRight}
                                            setDimensionRight={value => setAttributes({fieldsBorderRadiusRight: value})}
                                            dimensionBottom={fieldsBorderRadiusBottom}
                                            setDimensionBottom={value => setAttributes({fieldsBorderRadiusBottom: value})}
                                            unit={fieldsBorderRadiusUnit}
                                            setUnit={value => setAttributes({fieldsBorderRadiusUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                        <DimensionControl
                                            label={__('Padding', 'smart-blocks')}
                                            dimensionTop={fieldsPaddingTop}
                                            setDimensionTop={value => setAttributes({fieldsPaddingTop: value})}
                                            dimensionLeft={fieldsPaddingLeft}
                                            setDimensionLeft={value => setAttributes({fieldsPaddingLeft: value})}
                                            dimensionRight={fieldsPaddingRight}
                                            setDimensionRight={value => setAttributes({fieldsPaddingRight: value})}
                                            dimensionBottom={fieldsPaddingBottom}
                                            setDimensionBottom={value => setAttributes({fieldsPaddingBottom: value})}
                                            unit={fieldsPaddingUnit}
                                            setUnit={value => setAttributes({fieldsPaddingUnit: value})}
                                            units={['px', 'em', '%']}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Upload Button', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={uploadTypographyFamily}
                                            setValueFamily={value => setAttributes({uploadTypographyFamily: value})}
                                            valueWeight={uploadTypographyWeight}
                                            setValueWeight={value => setAttributes({uploadTypographyWeight: value})}
                                            valueTextTransform={uploadTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({uploadTypographyTextTransform: value})}
                                            valueTextDecoration={uploadTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({uploadTypographyTextDecoration: value})}
                                            valueFontSizeSm={uploadTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({uploadTypographyFontSizeSm: value})}
                                            valueFontSizeMd={uploadTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({uploadTypographyFontSizeMd: value})}
                                            valueFontSize={uploadTypographyFontSize}
                                            setValueFontSize={value => setAttributes({uploadTypographyFontSize: value})}
                                            valueFontSizeUnit={uploadTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({uploadTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={uploadTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({uploadTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={uploadTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({uploadTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={uploadTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({uploadTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={uploadTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({uploadTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={uploadTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({uploadTypographyLineHeightSm: value})}
                                            valueLineHeightMd={uploadTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({uploadTypographyLineHeightMd: value})}
                                            valueLineHeight={uploadTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({uploadTypographyLineHeight: value})}
                                            valueLineHeightUnit={uploadTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({uploadTypographyLineHeightUnit: value})}
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
                                                    valueHorizontal={uploadBoxShadowHorizontal}
                                                    setValueHorizontal={(uploadBoxShadowHorizontal) => setAttributes({uploadBoxShadowHorizontal})}
                                                    valueVertical={uploadBoxShadowVertical}
                                                    setValueVertical={(uploadBoxShadowVertical) => setAttributes({uploadBoxShadowVertical})}
                                                    valueBlur={uploadBoxShadowBlur}
                                                    setValueBlur={(uploadBoxShadowBlur) => setAttributes({uploadBoxShadowBlur})}
                                                    valueSpread={uploadBoxShadowSpread}
                                                    setValueSpread={(uploadBoxShadowSpread) => setAttributes({uploadBoxShadowSpread})}
                                                    valueColor={uploadBoxShadowColor}
                                                    setValueColor={(uploadBoxShadowColor) => setAttributes({uploadBoxShadowColor})}
                                                    valueInset={uploadBoxShadowInset}
                                                    setValueInset={(uploadBoxShadowInset) => setAttributes({uploadBoxShadowInset})}
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
                                                            dimensionMdTop={uploadBorderWidthMdTop}
                                                            setDimensionMdTop={value => setAttributes({uploadBorderWidthMdTop: value})}
                                                            dimensionSmTop={uploadBorderWidthSmTop}
                                                            setDimensionSmTop={value => setAttributes({uploadBorderWidthSmTop: value})}
                
                                                            dimensionLeft={uploadBorderWidthLeft}
                                                            setDimensionLeft={value => setAttributes({uploadBorderWidthLeft: value})}
                                                            dimensionMdLeft={uploadBorderWidthMdLeft}
                                                            setDimensionMdLeft={value => setAttributes({uploadBorderWidthMdLeft: value})}
                                                            dimensionSmLeft={uploadBorderWidthSmLeft}
                                                            setDimensionSmLeft={value => setAttributes({uploadBorderWidthSmLeft: value})}
                
                                                            dimensionRight={uploadBorderWidthRight}
                                                            setDimensionRight={value => setAttributes({uploadBorderWidthRight: value})}
                                                            dimensionMdRight={uploadBorderWidthMdRight}
                                                            setDimensionMdRight={value => setAttributes({uploadBorderWidthMdRight: value})}
                                                            dimensionSmRight={uploadBorderWidthSmRight}
                                                            setDimensionSmRight={value => setAttributes({uploadBorderWidthSmRight: value})}
                
                                                            dimensionBottom={uploadBorderWidthBottom}
                                                            setDimensionBottom={value => setAttributes({uploadBorderWidthBottom: value})}
                                                            dimensionMdBottom={uploadBorderWidthMdBottom}
                                                            setDimensionMdBottom={value => setAttributes({uploadBorderWidthMdBottom: value})}
                                                            dimensionSmBottom={uploadBorderWidthSmBottom}
                                                            setDimensionSmBottom={value => setAttributes({uploadBorderWidthSmBottom: value})}
                
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
                                                    valueHorizontal={uploadBoxShadowHoverHorizontal}
                                                    setValueHorizontal={(uploadBoxShadowHoverHorizontal) => setAttributes({uploadBoxShadowHoverHorizontal})}
                                                    valueVertical={uploadBoxShadowHoverVertical}
                                                    setValueVertical={(uploadBoxShadowHoverVertical) => setAttributes({uploadBoxShadowHoverVertical})}
                                                    valueBlur={uploadBoxShadowHoverBlur}
                                                    setValueBlur={(uploadBoxShadowHoverBlur) => setAttributes({uploadBoxShadowHoverBlur})}
                                                    valueSpread={uploadBoxShadowHoverSpread}
                                                    setValueSpread={(uploadBoxShadowHoverSpread) => setAttributes({uploadBoxShadowHoverSpread})}
                                                    valueColor={uploadBoxShadowHoverColor}
                                                    setValueColor={(uploadBoxShadowHoverColor) => setAttributes({uploadBoxShadowHoverColor})}
                                                    valueInset={uploadBoxShadowHoverInset}
                                                    setValueInset={(uploadBoxShadowHoverInset) => setAttributes({uploadBoxShadowHoverInset})}
                                                />
                                                <BorderControl
                                                    value={uploadBorderHover}
                                                    setValue={(uploadBorderHover) => setAttributes({uploadBorderHover})}
                                                />
                                                {uploadBorderHover && <>
                                                    <DimensionControl
                                                        label={__('Border Width', 'smart-blocks-pro')}
                                                        units={['px', 'em', 'rem', 'vw']}
                                                        responsive={!0}
                                                        dimensionTop={uploadBorderHoverWidthTop}
                                                        setDimensionTop={value => setAttributes({uploadBorderHoverWidthTop: value})}
                                                        dimensionMdTop={uploadBorderHoverWidthMdTop}
                                                        setDimensionMdTop={value => setAttributes({uploadBorderHoverWidthMdTop: value})}
                                                        dimensionSmTop={uploadBorderHoverWidthSmTop}
                                                        setDimensionSmTop={value => setAttributes({uploadBorderHoverWidthSmTop: value})}
            
                                                        dimensionLeft={uploadBorderHoverWidthLeft}
                                                        setDimensionLeft={value => setAttributes({uploadBorderHoverWidthLeft: value})}
                                                        dimensionMdLeft={uploadBorderHoverWidthMdLeft}
                                                        setDimensionMdLeft={value => setAttributes({uploadBorderHoverWidthMdLeft: value})}
                                                        dimensionSmLeft={uploadBorderHoverWidthSmLeft}
                                                        setDimensionSmLeft={value => setAttributes({uploadBorderHoverWidthSmLeft: value})}
            
                                                        dimensionRight={uploadBorderHoverWidthRight}
                                                        setDimensionRight={value => setAttributes({uploadBorderHoverWidthRight: value})}
                                                        dimensionMdRight={uploadBorderHoverWidthMdRight}
                                                        setDimensionMdRight={value => setAttributes({uploadBorderHoverWidthMdRight: value})}
                                                        dimensionSmRight={uploadBorderHoverWidthSmRight}
                                                        setDimensionSmRight={value => setAttributes({uploadBorderHoverWidthSmRight: value})}
            
                                                        dimensionBottom={uploadBorderHoverWidthBottom}
                                                        setDimensionBottom={value => setAttributes({uploadBorderHoverWidthBottom: value})}
                                                        dimensionMdBottom={uploadBorderHoverWidthMdBottom}
                                                        setDimensionMdBottom={value => setAttributes({uploadBorderHoverWidthMdBottom: value})}
                                                        dimensionSmBottom={uploadBorderHoverWidthSmBottom}
                                                        setDimensionSmBottom={value => setAttributes({uploadBorderHoverWidthSmBottom: value})}
            
                                                        unit={uploadBorderHoverWidthUnit}
                                                        setUnit={value => setAttributes({uploadBorderHoverWidthUnit: value})}
                                                    />
                                                    <ColorControl
                                                        label={__('Border Color', 'smart-blocks-pro')}
                                                        enableAlpha
                                                        value={uploadBorderHoverColor}
                                                        setValue={(uploadBorderHoverColor) => setAttributes({uploadBorderHoverColor})}
                                                    />
                                                </>}
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
                                            valueFamily={buttonTypographyFamily}
                                            setValueFamily={value => setAttributes({buttonTypographyFamily: value})}
                                            valueWeight={buttonTypographyWeight}
                                            setValueWeight={value => setAttributes({buttonTypographyWeight: value})}
                                            valueTextTransform={buttonTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({buttonTypographyTextTransform: value})}
                                            valueTextDecoration={buttonTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({buttonTypographyTextDecoration: value})}
                                            valueFontSizeSm={buttonTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({buttonTypographyFontSizeSm: value})}
                                            valueFontSizeMd={buttonTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({buttonTypographyFontSizeMd: value})}
                                            valueFontSize={buttonTypographyFontSize}
                                            setValueFontSize={value => setAttributes({buttonTypographyFontSize: value})}
                                            valueFontSizeUnit={buttonTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({buttonTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={buttonTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({buttonTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={buttonTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({buttonTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={buttonTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({buttonTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={buttonTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({buttonTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={buttonTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({buttonTypographyLineHeightSm: value})}
                                            valueLineHeightMd={buttonTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({buttonTypographyLineHeightMd: value})}
                                            valueLineHeight={buttonTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({buttonTypographyLineHeight: value})}
                                            valueLineHeightUnit={buttonTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({buttonTypographyLineHeightUnit: value})}
                                        />
                                        <Tabs>
                                            <div tabTitle={__("Normal", 'smart-blocks')}>
                                                <ColorControl
                                                    label={__('Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={buttonColor}
                                                    setValue={value => setAttributes({buttonColor: value})}
                                                />
                                                <ColorControl
                                                    label={__('Background Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={buttonBgColor}
                                                    setValue={value => setAttributes({buttonBgColor: value})}
                                                />
                                                <BoxShadowControl
                                                    valueHorizontal={buttonBoxShadowHorizontal}
                                                    setValueHorizontal={(buttonBoxShadowHorizontal) => setAttributes({buttonBoxShadowHorizontal})}
                                                    valueVertical={buttonBoxShadowVertical}
                                                    setValueVertical={(buttonBoxShadowVertical) => setAttributes({buttonBoxShadowVertical})}
                                                    valueBlur={buttonBoxShadowBlur}
                                                    setValueBlur={(buttonBoxShadowBlur) => setAttributes({buttonBoxShadowBlur})}
                                                    valueSpread={buttonBoxShadowSpread}
                                                    setValueSpread={(buttonBoxShadowSpread) => setAttributes({buttonBoxShadowSpread})}
                                                    valueColor={buttonBoxShadowColor}
                                                    setValueColor={(buttonBoxShadowColor) => setAttributes({buttonBoxShadowColor})}
                                                    valueInset={buttonBoxShadowInset}
                                                    setValueInset={(buttonBoxShadowInset) => setAttributes({buttonBoxShadowInset})}
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
                                                            responsive={!0}
                                                            dimensionTop={buttonBorderWidthTop}
                                                            setDimensionTop={value => setAttributes({buttonBorderWidthTop: value})}
                                                            dimensionMdTop={buttonBorderWidthMdTop}
                                                            setDimensionMdTop={value => setAttributes({buttonBorderWidthMdTop: value})}
                                                            dimensionSmTop={buttonBorderWidthSmTop}
                                                            setDimensionSmTop={value => setAttributes({buttonBorderWidthSmTop: value})}
                
                                                            dimensionLeft={buttonBorderWidthLeft}
                                                            setDimensionLeft={value => setAttributes({buttonBorderWidthLeft: value})}
                                                            dimensionMdLeft={buttonBorderWidthMdLeft}
                                                            setDimensionMdLeft={value => setAttributes({buttonBorderWidthMdLeft: value})}
                                                            dimensionSmLeft={buttonBorderWidthSmLeft}
                                                            setDimensionSmLeft={value => setAttributes({buttonBorderWidthSmLeft: value})}
                
                                                            dimensionRight={buttonBorderWidthRight}
                                                            setDimensionRight={value => setAttributes({buttonBorderWidthRight: value})}
                                                            dimensionMdRight={buttonBorderWidthMdRight}
                                                            setDimensionMdRight={value => setAttributes({buttonBorderWidthMdRight: value})}
                                                            dimensionSmRight={buttonBorderWidthSmRight}
                                                            setDimensionSmRight={value => setAttributes({buttonBorderWidthSmRight: value})}
                
                                                            dimensionBottom={buttonBorderWidthBottom}
                                                            setDimensionBottom={value => setAttributes({buttonBorderWidthBottom: value})}
                                                            dimensionMdBottom={buttonBorderWidthMdBottom}
                                                            setDimensionMdBottom={value => setAttributes({buttonBorderWidthMdBottom: value})}
                                                            dimensionSmBottom={buttonBorderWidthSmBottom}
                                                            setDimensionSmBottom={value => setAttributes({buttonBorderWidthSmBottom: value})}
                
                                                            unit={buttonBorderWidthUnit}
                                                            setUnit={value => setAttributes({buttonBorderWidthUnit: value})}
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
                                                    valueHorizontal={buttonBoxShadowHoverHorizontal}
                                                    setValueHorizontal={(buttonBoxShadowHoverHorizontal) => setAttributes({buttonBoxShadowHoverHorizontal})}
                                                    valueVertical={buttonBoxShadowHoverVertical}
                                                    setValueVertical={(buttonBoxShadowHoverVertical) => setAttributes({buttonBoxShadowHoverVertical})}
                                                    valueBlur={buttonBoxShadowHoverBlur}
                                                    setValueBlur={(buttonBoxShadowHoverBlur) => setAttributes({buttonBoxShadowHoverBlur})}
                                                    valueSpread={buttonBoxShadowHoverSpread}
                                                    setValueSpread={(buttonBoxShadowHoverSpread) => setAttributes({buttonBoxShadowHoverSpread})}
                                                    valueColor={buttonBoxShadowHoverColor}
                                                    setValueColor={(buttonBoxShadowHoverColor) => setAttributes({buttonBoxShadowHoverColor})}
                                                    valueInset={buttonBoxShadowHoverInset}
                                                    setValueInset={(buttonBoxShadowHoverInset) => setAttributes({buttonBoxShadowHoverInset})}
                                                />
                                                <BorderControl
                                                    value={uploadBorderHover}
                                                    setValue={(buttonBorderHover) => setAttributes({buttonBorderHover})}
                                                />
                                                {buttonBorderHover && <>
                                                    <DimensionControl
                                                        label={__('Border Width', 'smart-blocks-pro')}
                                                        units={['px', 'em', 'rem', 'vw']}
                                                        responsive={!0}
                                                        dimensionTop={buttonBorderHoverWidthTop}
                                                        setDimensionTop={value => setAttributes({buttonBorderHoverWidthTop: value})}
                                                        dimensionMdTop={buttonBorderHoverWidthMdTop}
                                                        setDimensionMdTop={value => setAttributes({buttonBorderHoverWidthMdTop: value})}
                                                        dimensionSmTop={buttonBorderHoverWidthSmTop}
                                                        setDimensionSmTop={value => setAttributes({buttonBorderHoverWidthSmTop: value})}
            
                                                        dimensionLeft={buttonBorderHoverWidthLeft}
                                                        setDimensionLeft={value => setAttributes({buttonBorderHoverWidthLeft: value})}
                                                        dimensionMdLeft={buttonBorderHoverWidthMdLeft}
                                                        setDimensionMdLeft={value => setAttributes({buttonBorderHoverWidthMdLeft: value})}
                                                        dimensionSmLeft={buttonBorderHoverWidthSmLeft}
                                                        setDimensionSmLeft={value => setAttributes({buttonBorderHoverWidthSmLeft: value})}
            
                                                        dimensionRight={buttonBorderHoverWidthRight}
                                                        setDimensionRight={value => setAttributes({buttonBorderHoverWidthRight: value})}
                                                        dimensionMdRight={buttonBorderHoverWidthMdRight}
                                                        setDimensionMdRight={value => setAttributes({buttonBorderHoverWidthMdRight: value})}
                                                        dimensionSmRight={buttonBorderHoverWidthSmRight}
                                                        setDimensionSmRight={value => setAttributes({buttonBorderHoverWidthSmRight: value})}
            
                                                        dimensionBottom={buttonBorderHoverWidthBottom}
                                                        setDimensionBottom={value => setAttributes({buttonBorderHoverWidthBottom: value})}
                                                        dimensionMdBottom={buttonBorderHoverWidthMdBottom}
                                                        setDimensionMdBottom={value => setAttributes({buttonBorderHoverWidthMdBottom: value})}
                                                        dimensionSmBottom={buttonBorderHoverWidthSmBottom}
                                                        setDimensionSmBottom={value => setAttributes({buttonBorderHoverWidthSmBottom: value})}
            
                                                        unit={buttonBorderHoverWidthUnit}
                                                        setUnit={value => setAttributes({buttonBorderHoverWidthUnit: value})}
                                                    />
                                                    <ColorControl
                                                        label={__('Border Color', 'smart-blocks-pro')}
                                                        enableAlpha
                                                        value={buttonBorderHoverColor}
                                                        setValue={(buttonBorderHoverColor) => setAttributes({buttonBorderHoverColor})}
                                                    />
                                                </>}
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
                                            valueFamily={validationTypographyFamily}
                                            setValueFamily={value => setAttributes({validationTypographyFamily: value})}
                                            valueWeight={validationTypographyWeight}
                                            setValueWeight={value => setAttributes({validationTypographyWeight: value})}
                                            valueTextTransform={validationTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({validationTypographyTextTransform: value})}
                                            valueTextDecoration={validationTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({validationTypographyTextDecoration: value})}
                                            valueFontSizeSm={validationTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({validationTypographyFontSizeSm: value})}
                                            valueFontSizeMd={validationTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({validationTypographyFontSizeMd: value})}
                                            valueFontSize={validationTypographyFontSize}
                                            setValueFontSize={value => setAttributes({validationTypographyFontSize: value})}
                                            valueFontSizeUnit={validationTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({validationTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={validationTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({validationTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={validationTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({validationTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={validationTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({validationTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={validationTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({validationTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={validationTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({validationTypographyLineHeightSm: value})}
                                            valueLineHeightMd={validationTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({validationTypographyLineHeightMd: value})}
                                            valueLineHeight={validationTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({validationTypographyLineHeight: value})}
                                            valueLineHeightUnit={validationTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({validationTypographyLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={validationColor}
                                            setValue={value => setAttributes({validationColor: value})}
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
                                            value={validationTextAlignment}
                                            setValue={(value) => setAttributes({validationTextAlignment: value})}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Form Title', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={formTitleTypographyFamily}
                                            setValueFamily={value => setAttributes({formTitleTypographyFamily: value})}
                                            valueWeight={formTitleTypographyWeight}
                                            setValueWeight={value => setAttributes({formTitleTypographyWeight: value})}
                                            valueTextTransform={formTitleTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({formTitleTypographyTextTransform: value})}
                                            valueTextDecoration={formTitleTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({formTitleTypographyTextDecoration: value})}
                                            valueFontSizeSm={formTitleTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({formTitleTypographyFontSizeSm: value})}
                                            valueFontSizeMd={formTitleTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({formTitleTypographyFontSizeMd: value})}
                                            valueFontSize={formTitleTypographyFontSize}
                                            setValueFontSize={value => setAttributes({formTitleTypographyFontSize: value})}
                                            valueFontSizeUnit={formTitleTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({formTitleTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={formTitleTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({formTitleTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={formTitleTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({formTitleTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={formTitleTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({formTitleTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={formTitleTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({formTitleTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={formTitleTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({formTitleTypographyLineHeightSm: value})}
                                            valueLineHeightMd={formTitleTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({formTitleTypographyLineHeightMd: value})}
                                            valueLineHeight={formTitleTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({formTitleTypographyLineHeight: value})}
                                            valueLineHeightUnit={formTitleTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({formTitleTypographyLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={formTitleColor}
                                            setValue={value => setAttributes({formTitleColor: value})}
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
                                            valueFamily={formDescTypographyFamily}
                                            setValueFamily={value => setAttributes({formDescTypographyFamily: value})}
                                            valueWeight={formDescTypographyWeight}
                                            setValueWeight={value => setAttributes({formDescTypographyWeight: value})}
                                            valueTextTransform={formDescTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({formDescTypographyTextTransform: value})}
                                            valueTextDecoration={formDescTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({formDescTypographyTextDecoration: value})}
                                            valueFontSizeSm={formDescTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({formDescTypographyFontSizeSm: value})}
                                            valueFontSizeMd={formDescTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({formDescTypographyFontSizeMd: value})}
                                            valueFontSize={formDescTypographyFontSize}
                                            setValueFontSize={value => setAttributes({formDescTypographyFontSize: value})}
                                            valueFontSizeUnit={formDescTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({formDescTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={formDescTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({formDescTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={formDescTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({formDescTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={formDescTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({formDescTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={formDescTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({formDescTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={formDescTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({formDescTypographyLineHeightSm: value})}
                                            valueLineHeightMd={formDescTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({formDescTypographyLineHeightMd: value})}
                                            valueLineHeight={formDescTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({formDescTypographyLineHeight: value})}
                                            valueLineHeightUnit={formDescTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({formDescTypographyLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={formDescColor}
                                            setValue={value => setAttributes({formDescColor: value})}
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
                                            valueFamily={headingTypographyFamily}
                                            setValueFamily={value => setAttributes({headingTypographyFamily: value})}
                                            valueWeight={headingTypographyWeight}
                                            setValueWeight={value => setAttributes({headingTypographyWeight: value})}
                                            valueTextTransform={headingTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({headingTypographyTextTransform: value})}
                                            valueTextDecoration={headingTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({headingTypographyTextDecoration: value})}
                                            valueFontSizeSm={headingTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({headingTypographyFontSizeSm: value})}
                                            valueFontSizeMd={headingTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({headingTypographyFontSizeMd: value})}
                                            valueFontSize={headingTypographyFontSize}
                                            setValueFontSize={value => setAttributes({headingTypographyFontSize: value})}
                                            valueFontSizeUnit={headingTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({headingTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={headingTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({headingTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={headingTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({headingTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={headingTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({headingTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={headingTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({headingTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={headingTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({headingTypographyLineHeightSm: value})}
                                            valueLineHeightMd={headingTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({headingTypographyLineHeightMd: value})}
                                            valueLineHeight={headingTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({headingTypographyLineHeight: value})}
                                            valueLineHeightUnit={headingTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({headingTypographyLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={headingColor}
                                            setValue={value => setAttributes({headingColor: value})}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__('Paragraph', 'hash-form')}
                                        initialOpen={false}>
                                        <TypographyControl
                                            label={__('Typography', 'smart-blocks-pro')}
                                            valueFamily={paragraphTypographyFamily}
                                            setValueFamily={value => setAttributes({paragraphTypographyFamily: value})}
                                            valueWeight={paragraphTypographyWeight}
                                            setValueWeight={value => setAttributes({paragraphTypographyWeight: value})}
                                            valueTextTransform={paragraphTypographyTextTransform}
                                            setValueTextTransform={value => setAttributes({paragraphTypographyTextTransform: value})}
                                            valueTextDecoration={paragraphTypographyTextDecoration}
                                            setValueTextDecoration={value => setAttributes({paragraphTypographyTextDecoration: value})}
                                            valueFontSizeSm={paragraphTypographyFontSizeSm}
                                            setValueFontSizeSm={value => setAttributes({paragraphTypographyFontSizeSm: value})}
                                            valueFontSizeMd={paragraphTypographyFontSizeMd}
                                            setValueFontSizeMd={value => setAttributes({paragraphTypographyFontSizeMd: value})}
                                            valueFontSize={paragraphTypographyFontSize}
                                            setValueFontSize={value => setAttributes({paragraphTypographyFontSize: value})}
                                            valueFontSizeUnit={paragraphTypographyFontSizeUnit}
                                            setValueFontSizeUnit={value => setAttributes({paragraphTypographyFontSizeUnit: value})}
                                            valueLetterSpacingSm={paragraphTypographyLetterSpacingSm}
                                            setValueLetterSpacingSm={value => setAttributes({paragraphTypographyLetterSpacingSm: value})}
                                            valueLetterSpacingMd={paragraphTypographyLetterSpacingMd}
                                            setValueLetterSpacingMd={value => setAttributes({paragraphTypographyLetterSpacingMd: value})}
                                            valueLetterSpacing={paragraphTypographyLetterSpacing}
                                            setValueLetterSpacing={value => setAttributes({paragraphTypographyLetterSpacing: value})}
                                            valueLetterSpacingUnit={paragraphTypographyLetterSpacingUnit}
                                            setValueLetterSpacingUnit={value => setAttributes({paragraphTypographyLetterSpacingUnit: value})}
                                            valueLineHeightSm={paragraphTypographyLineHeightSm}
                                            setValueLineHeightSm={value => setAttributes({paragraphTypographyLineHeightSm: value})}
                                            valueLineHeightMd={paragraphTypographyLineHeightMd}
                                            setValueLineHeightMd={value => setAttributes({paragraphTypographyLineHeightMd: value})}
                                            valueLineHeight={paragraphTypographyLineHeight}
                                            setValueLineHeight={value => setAttributes({paragraphTypographyLineHeight: value})}
                                            valueLineHeightUnit={paragraphTypographyLineHeightUnit}
                                            setValueLineHeightUnit={value => setAttributes({paragraphTypographyLineHeightUnit: value})}
                                        />
                                        <ColorControl
                                            label={__('Color', 'smart-blocks')}
                                            enableAlpha
                                            value={paragraphColor}
                                            setValue={value => setAttributes({paragraphColor: value})}
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
                                            value={rangeSliderHeight}
                                            setValue={(rangeSliderHeight) => setAttributes({rangeSliderHeight})}
                                            unit={rangeSliderHeightUnit}
                                            setUnit={(rangeSliderHeightUnit) => setAttributes({rangeSliderHeightUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                        <RangeSliderControl
                                            label={__('Handle Size', 'hash-form')}
                                            value={rangeSliderHandleSize}
                                            setValue={(rangeSliderHandleSize) => setAttributes({rangeSliderHandleSize})}
                                            unit={rangeSliderHandleSizeUnit}
                                            setUnit={(rangeSliderHandleSizeUnit) => setAttributes({rangeSliderHandleSizeUnit})}
                                            units={['px', 'em', 'rem']}
                                            min={10}
                                            max={80}
                                            useUnit={!0}
                                        />
                                        <ColorControl
                                            label={__('Bar Color', 'smart-blocks')}
                                            enableAlpha
                                            value={rangeSliderBarColor}
                                            setValue={value => setAttributes({rangeSliderBarColor: value})}
                                        />
                                        <ColorControl
                                            label={__('Color (Active)', 'smart-blocks')}
                                            enableAlpha
                                            value={rangeSliderBarColorActive}
                                            setValue={value => setAttributes({rangeSliderBarColorActive: value})}
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
                className: "wp-block-hash-form"
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
