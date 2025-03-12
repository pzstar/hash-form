<?php

defined('ABSPATH') || die();

class HashFormBlock {

    public function __construct() {
        add_action('init', array($this, 'register_block'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
    }

    public function register_block() {
        $asset_file = include(HASHFORM_PATH . 'build/index.asset.php');
        $all_forms = HashFormHelper::get_all_forms_list_options();
        unset($all_forms['']);

        wp_register_style('hfb-style', HASHFORM_URL . 'css/form-block.css', array('wp-edit-blocks'), HASHFORM_VERSION);
        wp_register_style('hfb-editor', HASHFORM_URL . 'css/editor.css', array(), HASHFORM_VERSION);
        wp_register_script('hfb-blocks', HASHFORM_URL . 'build/index.js', $asset_file['dependencies'], $asset_file['version']);
        wp_localize_script('hfb-blocks', 'hash_form_block_data', array(
            'forms' => $all_forms,
            'create_form_link' => esc_url(add_query_arg('page', 'hashform', admin_url('admin.php')))
        ));

        register_block_type(
            'hash-form/form-selector', array(
                'api_version' => 2,
                'editor_script' => 'hfb-blocks',
                'editor_style' => 'hfb-editor',
                'style' => 'hfb-style',
                'attributes' => [
                    "id" => ["type" => "string"],
                    "sbStyle" => ["type" => "string"],
                    "formId" => ["type" => "string"],

                    "enableCustomStyle" => ["type" => "boolean"],

                    "columnGap" => ["type" => "string"],
                    "columnGapUnit" => ["type" => "string", "enum" => ['px', 'em', 'rem'], "default" => 'px'],

                    "rowGap" => ["type" => "string"],
                    "rowGapUnit" => ["type" => "string", "enum" => ['px', 'em', 'rem'], "default" => 'px'],

                    "labelTypographyFamily" => ["type" => "string"],
                    "labelTypographyWeight" => ["type" => "string"],
                    "labelTypographyTextTransform" => ["type" => "string"],
                    "labelTypographyTextDecoration" => ["type" => "string"],
                    "labelTypographyFontSizeSm" => ["type" => "string"],
                    "labelTypographyFontSizeMd" => ["type" => "string"],
                    "labelTypographyFontSize" => ["type" => "string"],
                    "labelTypographyFontSizeUnit" => ["type" => "string", "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "labelTypographyLetterSpacingSm" => ["type" => "string"],
                    "labelTypographyLetterSpacingMd" => ["type" => "string"],
                    "labelTypographyLetterSpacing" => ["type" => "string"],
                    "labelTypographyLetterSpacingUnit" => ["type" => "string", "enum" => ['px', 'em', '%'], "default" => "px"],
                    "labelTypographyLineHeightSm" => ["type" => 'string'],
                    "labelTypographyLineHeightMd" => ["type" => "string"],
                    "labelTypographyLineHeight" => ["type" => "string"],
                    "labelTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "labelColor" => ["type" => 'string'],
                    "requiredColor" => ["type" => 'string'],

                    "labelSpacingTop" => ["type" => 'string'],
                    "labelSpacingLeft" => ["type" => 'string'],
                    "labelSpacingRight" => ["type" => 'string'],
                    "labelSpacingBottom" => ["type" => 'string'],
                    "labelSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "descriptionTypographyFamily" => ["type" => 'string'],
                    "descriptionTypographyWeight" => ["type" => 'string'],
                    "descriptionTypographyTextTransform" => ["type" => 'string'],
                    "descriptionTypographyTextDecoration" => ["type" => 'string'],
                    "descriptionTypographyFontSizeSm" => ["type" => 'string'],
                    "descriptionTypographyFontSizeMd" => ["type" => 'string'],
                    "descriptionTypographyFontSize" => ["type" => 'string'],
                    "descriptionTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "descriptionTypographyLetterSpacingSm" => ["type" => 'string'],
                    "descriptionTypographyLetterSpacingMd" => ["type" => 'string'],
                    "descriptionTypographyLetterSpacing" => ["type" => 'string'],
                    "descriptionTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "descriptionTypographyLineHeightSm" => ["type" => 'string'],
                    "descriptionTypographyLineHeightMd" => ["type" => 'string'],
                    "descriptionTypographyLineHeight" => ["type" => 'string'],
                    "descriptionTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "descriptionColor" => ["type" => 'string'],

                    "descriptionSpacingTop" => ["type" => 'string'],
                    "descriptionSpacingLeft" => ["type" => 'string'],
                    "descriptionSpacingRight" => ["type" => 'string'],
                    "descriptionSpacingBottom" => ["type" => 'string'],
                    "descriptionSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "fieldsTypographyFamily" => ["type" => 'string'],
                    "fieldsTypographyWeight" => ["type" => 'string'],
                    "fieldsTypographyTextTransform" => ["type" => 'string'],
                    "fieldsTypographyTextDecoration" => ["type" => 'string'],
                    "fieldsTypographyFontSizeSm" => ["type" => 'string'],
                    "fieldsTypographyFontSizeMd" => ["type" => 'string'],
                    "fieldsTypographyFontSize" => ["type" => 'string'],
                    "fieldsTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "fieldsTypographyLetterSpacingSm" => ["type" => 'string'],
                    "fieldsTypographyLetterSpacingMd" => ["type" => 'string'],
                    "fieldsTypographyLetterSpacing" => ["type" => 'string'],
                    "fieldsTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "fieldsTypographyLineHeightSm" => ["type" => 'string'],
                    "fieldsTypographyLineHeightMd" => ["type" => 'string'],
                    "fieldsTypographyLineHeight" => ["type" => 'string'],
                    "fieldsTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "fieldsColor" => ["type" => 'string'],
                    "fieldsBgColor" => ["type" => 'string'],

                    "fieldsBoxShadowHorizontal" => ["type" => 'string'],
                    "fieldsBoxShadowVertical" => ["type" => 'string'],
                    "fieldsBoxShadowBlur" => ["type" => 'string'],
                    "fieldsBoxShadowSpread" => ["type" => 'string'],
                    "fieldsBoxShadowColor" => ["type" => 'string'],
                    "fieldsBoxShadowInset" => ["type" => 'string'],

                    "fieldsBorder" => ["type" => 'string'],

                    "fieldsBorderWidthTop" => ["type" => 'string'],
                    "fieldsBorderWidthMdTop" => ["type" => 'string'],
                    "fieldsBorderWidthSmTop" => ["type" => 'string'],
                    "fieldsBorderWidthLeft" => ["type" => 'string'],
                    "fieldsBorderWidthMdLeft" => ["type" => 'string'],
                    "fieldsBorderWidthSmLeft" => ["type" => 'string'],
                    "fieldsBorderWidthRight" => ["type" => 'string'],
                    "fieldsBorderWidthMdRight" => ["type" => 'string'],
                    "fieldsBorderWidthSmRight" => ["type" => 'string'],
                    "fieldsBorderWidthBottom" => ["type" => 'string'],
                    "fieldsBorderWidthMdBottom" => ["type" => 'string'],
                    "fieldsBorderWidthSmBottom" => ["type" => 'string'],
                    "fieldsBorderWidthUnit" => ["type" => 'string', "enum" => ['px', 'em', 'rem', 'vw'], "default" => 'px'],

                    "fieldsBorderColor" => ["type" => 'string'],

                    "fieldsColorFocus" => ["type" => 'string'],
                    "fieldsBgColorFocus" => ["type" => 'string'],
                    "fieldsBoxShadowFocusHorizontal" => ["type" => 'string'],
                    "fieldsBoxShadowFocusVertical" => ["type" => 'string'],
                    "fieldsBoxShadowFocusBlur" => ["type" => 'string'],
                    "fieldsBoxShadowFocusSpread" => ["type" => 'string'],
                    "fieldsBoxShadowFocusColor" => ["type" => 'string'],
                    "fieldsBoxShadowFocusInset" => ["type" => 'string'],

                    "fieldsBorderFocus" => ["type" => 'string'],
                    "fieldsBorderFocusWidthTop" => ["type" => 'string'],
                    "fieldsBorderFocusWidthMdTop" => ["type" => 'string'],
                    "fieldsBorderFocusWidthSmTop" => ["type" => 'string'],
                    "fieldsBorderFocusWidthLeft" => ["type" => 'string'],
                    "fieldsBorderFocusWidthMdLeft" => ["type" => 'string'],
                    "fieldsBorderFocusWidthSmLeft" => ["type" => 'string'],
                    "fieldsBorderFocusWidthRight" => ["type" => 'string'],
                    "fieldsBorderFocusWidthMdRight" => ["type" => 'string'],
                    "fieldsBorderFocusWidthSmRight" => ["type" => 'string'],
                    "fieldsBorderFocusWidthBottom" => ["type" => 'string'],
                    "fieldsBorderFocusWidthMdBottom" => ["type" => 'string'],
                    "fieldsBorderFocusWidthSmBottom" => ["type" => 'string'],
                    "fieldsBorderFocusWidthUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "fieldsBorderFocusColor" => ["type" => 'string'],

                    "fieldsBorderRadiusTop" => ["type" => 'string'],
                    "fieldsBorderRadiusLeft" => ["type" => 'string'],
                    "fieldsBorderRadiusRight" => ["type" => 'string'],
                    "fieldsBorderRadiusBottom" => ["type" => 'string'],
                    "fieldsBorderRadiusUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "fieldsPaddingTop" => ["type" => 'string'],
                    "fieldsPaddingLeft" => ["type" => 'string'],
                    "fieldsPaddingRight" => ["type" => 'string'],
                    "fieldsPaddingBottom" => ["type" => 'string'],
                    "fieldsPaddingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "uploadTypographyFamily" => ["type" => 'string'],
                    "uploadTypographyWeight" => ["type" => 'string'],
                    "uploadTypographyTextTransform" => ["type" => 'string'],
                    "uploadTypographyTextDecoration" => ["type" => 'string'],
                    "uploadTypographyFontSizeSm" => ["type" => 'string'],
                    "uploadTypographyFontSizeMd" => ["type" => 'string'],
                    "uploadTypographyFontSize" => ["type" => 'string'],
                    "uploadTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "uploadTypographyLetterSpacingSm" => ["type" => 'string'],
                    "uploadTypographyLetterSpacingMd" => ["type" => 'string'],
                    "uploadTypographyLetterSpacing" => ["type" => 'string'],
                    "uploadTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "uploadTypographyLineHeightSm" => ["type" => 'string'],
                    "uploadTypographyLineHeightMd" => ["type" => 'string'],
                    "uploadTypographyLineHeight" => ["type" => 'string'],
                    "uploadTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "uploadColor" => ["type" => 'string'],
                    "uploadBgColor" => ["type" => 'string'],

                    "uploadBoxShadowHorizontal" => ["type" => 'string'],
                    "uploadBoxShadowVertical" => ["type" => 'string'],
                    "uploadBoxShadowBlur" => ["type" => 'string'],
                    "uploadBoxShadowSpread" => ["type" => 'string'],
                    "uploadBoxShadowColor" => ["type" => 'string'],
                    "uploadBoxShadowInset" => ["type" => 'string'],

                    "uploadBorder" => ["type" => 'string'],
                    "uploadBorderWidthTop" => ["type" => 'string'],
                    "uploadBorderWidthMdTop" => ["type" => 'string'],
                    "uploadBorderWidthSmTop" => ["type" => 'string'],
                    "uploadBorderWidthLeft" => ["type" => 'string'],
                    "uploadBorderWidthMdLeft" => ["type" => 'string'],
                    "uploadBorderWidthSmLeft" => ["type" => 'string'],
                    "uploadBorderWidthRight" => ["type" => 'string'],
                    "uploadBorderWidthMdRight" => ["type" => 'string'],
                    "uploadBorderWidthSmRight" => ["type" => 'string'],
                    "uploadBorderWidthBottom" => ["type" => 'string'],
                    "uploadBorderWidthMdBottom" => ["type" => 'string'],
                    "uploadBorderWidthSmBottom" => ["type" => 'string'],
                    "uploadBorderWidthUnit" => ["type" => 'string', "enum" => ['px', 'em', 'rem', 'vw'], "default" => 'px'],

                    "uploadBorderColor" => ["type" => 'string'],

                    "uploadColorHover" => ["type" => 'string'],
                    "uploadBgColorHover" => ["type" => 'string'],

                    "uploadBoxShadowHoverHorizontal" => ["type" => 'string'],
                    "uploadBoxShadowHoverVertical" => ["type" => 'string'],
                    "uploadBoxShadowHoverBlur" => ["type" => 'string'],
                    "uploadBoxShadowHoverSpread" => ["type" => 'string'],
                    "uploadBoxShadowHoverColor" => ["type" => 'string'],
                    "uploadBoxShadowHoverInset" => ["type" => 'string'],

                    "uploadBorderHover" => ["type" => 'string'],
                    "uploadBorderHoverWidthTop" => ["type" => 'string'],
                    "uploadBorderHoverWidthMdTop" => ["type" => 'string'],
                    "uploadBorderHoverWidthSmTop" => ["type" => 'string'],
                    "uploadBorderHoverWidthLeft" => ["type" => 'string'],
                    "uploadBorderHoverWidthMdLeft" => ["type" => 'string'],
                    "uploadBorderHoverWidthSmLeft" => ["type" => 'string'],
                    "uploadBorderHoverWidthRight" => ["type" => 'string'],
                    "uploadBorderHoverWidthMdRight" => ["type" => 'string'],
                    "uploadBorderHoverWidthSmRight" => ["type" => 'string'],
                    "uploadBorderHoverWidthBottom" => ["type" => 'string'],
                    "uploadBorderHoverWidthMdBottom" => ["type" => 'string'],
                    "uploadBorderHoverWidthSmBottom" => ["type" => 'string'],
                    "uploadBorderHoverWidthUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "uploadBorderHoverColor" => ["type" => 'string'],

                    "uploadBorderRadiusTop" => ["type" => 'string'],
                    "uploadBorderRadiusLeft" => ["type" => 'string'],
                    "uploadBorderRadiusRight" => ["type" => 'string'],
                    "uploadBorderRadiusBottom" => ["type" => 'string'],
                    "uploadBorderRadiusUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "uploadPaddingTop" => ["type" => 'string'],
                    "uploadPaddingLeft" => ["type" => 'string'],
                    "uploadPaddingRight" => ["type" => 'string'],
                    "uploadPaddingBottom" => ["type" => 'string'],
                    "uploadPaddingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "buttonTypographyFamily" => ["type" => 'string'],
                    "buttonTypographyWeight" => ["type" => 'string'],
                    "buttonTypographyTextTransform" => ["type" => 'string'],
                    "buttonTypographyTextDecoration" => ["type" => 'string'],
                    "buttonTypographyFontSizeSm" => ["type" => 'string'],
                    "buttonTypographyFontSizeMd" => ["type" => 'string'],
                    "buttonTypographyFontSize" => ["type" => 'string'],
                    "buttonTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "buttonTypographyLetterSpacingSm" => ["type" => 'string'],
                    "buttonTypographyLetterSpacingMd" => ["type" => 'string'],
                    "buttonTypographyLetterSpacing" => ["type" => 'string'],
                    "buttonTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "buttonTypographyLineHeightSm" => ["type" => 'string'],
                    "buttonTypographyLineHeightMd" => ["type" => 'string'],
                    "buttonTypographyLineHeight" => ["type" => 'string'],
                    "buttonTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "buttonColor" => ["type" => 'string'],
                    "buttonBgColor" => ["type" => 'string'],

                    "buttonBoxShadowHorizontal" => ["type" => 'string'],
                    "buttonBoxShadowVertical" => ["type" => 'string'],
                    "buttonBoxShadowBlur" => ["type" => 'string'],
                    "buttonBoxShadowSpread" => ["type" => 'string'],
                    "buttonBoxShadowColor" => ["type" => 'string'],
                    "buttonBoxShadowInset" => ["type" => 'string'],

                    "buttonBorder" => ["type" => 'string'],
                    "buttonBorderWidthTop" => ["type" => 'string'],
                    "buttonBorderWidthMdTop" => ["type" => 'string'],
                    "buttonBorderWidthSmTop" => ["type" => 'string'],
                    "buttonBorderWidthLeft" => ["type" => 'string'],
                    "buttonBorderWidthMdLeft" => ["type" => 'string'],
                    "buttonBorderWidthSmLeft" => ["type" => 'string'],
                    "buttonBorderWidthRight" => ["type" => 'string'],
                    "buttonBorderWidthMdRight" => ["type" => 'string'],
                    "buttonBorderWidthSmRight" => ["type" => 'string'],
                    "buttonBorderWidthBottom" => ["type" => 'string'],
                    "buttonBorderWidthMdBottom" => ["type" => 'string'],
                    "buttonBorderWidthSmBottom" => ["type" => 'string'],
                    "buttonBorderWidthUnit" => ["type" => 'string', "enum" => ['px', 'em', 'rem', 'vw'], "default" => 'px'],
                    "buttonBorderColor" => ["type" => 'string'],

                    "buttonColorHover" => ["type" => 'string'],
                    "buttonBgColorHover" => ["type" => 'string'],

                    "buttonBoxShadowHoverHorizontal" => ["type" => 'string'],
                    "buttonBoxShadowHoverVertical" => ["type" => 'string'],
                    "buttonBoxShadowHoverBlur" => ["type" => 'string'],
                    "buttonBoxShadowHoverSpread" => ["type" => 'string'],
                    "buttonBoxShadowHoverColor" => ["type" => 'string'],
                    "buttonBoxShadowHoverInset" => ["type" => 'string'],

                    "buttonBorderHover" => ["type" => 'string'],

                    "buttonBorderHoverWidthTop" => ["type" => 'string'],
                    "buttonBorderHoverWidthMdTop" => ["type" => 'string'],
                    "buttonBorderHoverWidthSmTop" => ["type" => 'string'],
                    "buttonBorderHoverWidthLeft" => ["type" => 'string'],
                    "buttonBorderHoverWidthMdLeft" => ["type" => 'string'],
                    "buttonBorderHoverWidthSmLeft" => ["type" => 'string'],
                    "buttonBorderHoverWidthRight" => ["type" => 'string'],
                    "buttonBorderHoverWidthMdRight" => ["type" => 'string'],
                    "buttonBorderHoverWidthSmRight" => ["type" => 'string'],
                    "buttonBorderHoverWidthBottom" => ["type" => 'string'],
                    "buttonBorderHoverWidthMdBottom" => ["type" => 'string'],
                    "buttonBorderHoverWidthSmBottom" => ["type" => 'string'],
                    "buttonBorderHoverWidthUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "buttonBorderHoverColor" => ["type" => 'string'],

                    "buttonBorderRadiusTop" => ["type" => 'string'],
                    "buttonBorderRadiusLeft" => ["type" => 'string'],
                    "buttonBorderRadiusRight" => ["type" => 'string'],
                    "buttonBorderRadiusBottom" => ["type" => 'string'],
                    "buttonBorderRadiusUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "buttonPaddingTop" => ["type" => 'string'],
                    "buttonPaddingLeft" => ["type" => 'string'],
                    "buttonPaddingRight" => ["type" => 'string'],
                    "buttonPaddingBottom" => ["type" => 'string'],
                    "buttonPaddingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "validationTypographyFamily" => ["type" => 'string'],
                    "validationTypographyWeight" => ["type" => 'string'],
                    "validationTypographyTextTransform" => ["type" => 'string'],
                    "validationTypographyTextDecoration" => ["type" => 'string'],
                    "validationTypographyFontSizeSm" => ["type" => 'string'],
                    "validationTypographyFontSizeMd" => ["type" => 'string'],
                    "validationTypographyFontSize" => ["type" => 'string'],
                    "validationTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "validationTypographyLetterSpacingSm" => ["type" => 'string'],
                    "validationTypographyLetterSpacingMd" => ["type" => 'string'],
                    "validationTypographyLetterSpacing" => ["type" => 'string'],
                    "validationTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "validationTypographyLineHeightSm" => ["type" => 'string'],
                    "validationTypographyLineHeightMd" => ["type" => 'string'],
                    "validationTypographyLineHeight" => ["type" => 'string'],
                    "validationTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "validationColor" => ["type" => 'string'],
                    "validationTextAlignment" => ["type" => 'string'],

                    "formTitleTypographyFamily" => ["type" => 'string'],
                    "formTitleTypographyWeight" => ["type" => 'string'],
                    "formTitleTypographyTextTransform" => ["type" => 'string'],
                    "formTitleTypographyTextDecoration" => ["type" => 'string'],
                    "formTitleTypographyFontSizeSm" => ["type" => 'string'],
                    "formTitleTypographyFontSizeMd" => ["type" => 'string'],
                    "formTitleTypographyFontSize" => ["type" => 'string'],
                    "formTitleTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formTitleTypographyLetterSpacingSm" => ["type" => 'string'],
                    "formTitleTypographyLetterSpacingMd" => ["type" => 'string'],
                    "formTitleTypographyLetterSpacing" => ["type" => 'string'],
                    "formTitleTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formTitleTypographyLineHeightSm" => ["type" => 'string'],
                    "formTitleTypographyLineHeightMd" => ["type" => 'string'],
                    "formTitleTypographyLineHeight" => ["type" => 'string'],
                    "formTitleTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "formTitleColor" => ["type" => 'string'],

                    "formTitleSpacingTop" => ["type" => 'string'],
                    "formTitleSpacingLeft" => ["type" => 'string'],
                    "formTitleSpacingRight" => ["type" => 'string'],
                    "formTitleSpacingBottom" => ["type" => 'string'],
                    "formTitleSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "formDescTypographyFamily" => ["type" => 'string'],
                    "formDescTypographyWeight" => ["type" => 'string'],
                    "formDescTypographyTextTransform" => ["type" => 'string'],
                    "formDescTypographyTextDecoration" => ["type" => 'string'],
                    "formDescTypographyFontSizeSm" => ["type" => 'string'],
                    "formDescTypographyFontSizeMd" => ["type" => 'string'],
                    "formDescTypographyFontSize" => ["type" => 'string'],
                    "formDescTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formDescTypographyLetterSpacingSm" => ["type" => 'string'],
                    "formDescTypographyLetterSpacingMd" => ["type" => 'string'],
                    "formDescTypographyLetterSpacing" => ["type" => 'string'],
                    "formDescTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formDescTypographyLineHeightSm" => ["type" => 'string'],
                    "formDescTypographyLineHeightMd" => ["type" => 'string'],
                    "formDescTypographyLineHeight" => ["type" => 'string'],
                    "formDescTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "formDescColor" => ["type" => 'string'],
                    "formDescSpacingTop" => ["type" => 'string'],
                    "formDescSpacingLeft" => ["type" => 'string'],
                    "formDescSpacingRight" => ["type" => 'string'],
                    "formDescSpacingBottom" => ["type" => 'string'],
                    "formDescSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "headingTypographyFamily" => ["type" => 'string'],
                    "headingTypographyWeight" => ["type" => 'string'],
                    "headingTypographyTextTransform" => ["type" => 'string'],
                    "headingTypographyTextDecoration" => ["type" => 'string'],
                    "headingTypographyFontSizeSm" => ["type" => 'string'],
                    "headingTypographyFontSizeMd" => ["type" => 'string'],
                    "headingTypographyFontSize" => ["type" => 'string'],
                    "headingTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "headingTypographyLetterSpacingSm" => ["type" => 'string'],
                    "headingTypographyLetterSpacingMd" => ["type" => 'string'],
                    "headingTypographyLetterSpacing" => ["type" => 'string'],
                    "headingTypographyLetterSpacingUnit" => ["type" => 'string'],
                    "headingTypographyLineHeightSm" => ["type" => 'string'],
                    "headingTypographyLineHeightMd" => ["type" => 'string'],
                    "headingTypographyLineHeight" => ["type" => 'string'],
                    "headingTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "headingColor" => ["type" => 'string'],

                    "paragraphTypographyFamily" => ["type" => 'string'],
                    "paragraphTypographyWeight" => ["type" => 'string'],
                    "paragraphTypographyTextTransform" => ["type" => 'string'],
                    "paragraphTypographyTextDecoration" => ["type" => 'string'],
                    "paragraphTypographyFontSizeSm" => ["type" => 'string'],
                    "paragraphTypographyFontSizeMd" => ["type" => 'string'],
                    "paragraphTypographyFontSize" => ["type" => 'string'],
                    "paragraphTypographyFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "paragraphTypographyLetterSpacingSm" => ["type" => 'string'],
                    "paragraphTypographyLetterSpacingMd" => ["type" => 'string'],
                    "paragraphTypographyLetterSpacing" => ["type" => 'string'],
                    "paragraphTypographyLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "paragraphTypographyLineHeightSm" => ["type" => 'string'],
                    "paragraphTypographyLineHeightMd" => ["type" => 'string'],
                    "paragraphTypographyLineHeight" => ["type" => 'string'],
                    "paragraphTypographyLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "paragraphColor" => ["type" => 'string'],
                    "dividerColor" => ["type" => 'string'],
                    "starSize" => ["type" => 'string'],
                    "starSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "starColor" => ["type" => 'string'],
                    "starColorActive" => ["type" => 'string'],

                    "rangeSliderHeight" => ["type" => 'string'],
                    "rangeSliderHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "rangeSliderHandleSize" => ["type" => 'string'],
                    "rangeSliderHandleSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "rangeSliderBarColor" => ["type" => 'string'],
                    "rangeSliderBarColorActive" => ["type" => 'string'],
                    "rangeHandleColor" => ["type" => 'string'],
                ],
                'script' => 'hfb-script',
                'render_callback' => array($this, 'get_form_html')
            )
        );
    }

    public function enqueue_block_editor_assets() {
    }

    public function get_form_html($attr) {
        $form_id = !empty($attr['formId']) ? absint($attr['formId']) : 0;
        if (empty($form_id)) {
            return '';
        }

        ob_start();
        HashFormPreview::show_form($form_id);
        return ob_get_clean();
    }

}

new HashFormBlock();
