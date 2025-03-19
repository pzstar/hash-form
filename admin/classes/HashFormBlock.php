<?php

defined('ABSPATH') || die();

class HashFormBlock {

    public function __construct() {
        add_action('init', array($this, 'register_block'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));

        // Load translation files
        add_action('plugins_loaded', array($this, 'load_textdomain'), 99);
        add_action('enqueue_block_editor_assets', array($this, 'block_localization'));
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

                    "formColumnGap" => ["type" => "string"],
                    "formColumnGapUnit" => ["type" => "string", "enum" => ['px', 'em', 'rem'], "default" => 'px'],

                    "formRowGap" => ["type" => "string"],
                    "formRowGapUnit" => ["type" => "string", "enum" => ['px', 'em', 'rem'], "default" => 'px'],

                    "labelTypoFamily" => ["type" => "string"],
                    "labelTypoWeight" => ["type" => "string"],
                    "labelTypoTextTransform" => ["type" => "string"],
                    "labelTypoTextDecoration" => ["type" => "string"],
                    "labelTypoFontSizeSm" => ["type" => "string"],
                    "labelTypoFontSizeMd" => ["type" => "string"],
                    "labelTypoFontSize" => ["type" => "string"],
                    "labelTypoFontSizeUnit" => ["type" => "string", "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "labelTypoLetterSpacingSm" => ["type" => "string"],
                    "labelTypoLetterSpacingMd" => ["type" => "string"],
                    "labelTypoLetterSpacing" => ["type" => "string"],
                    "labelTypoLetterSpacingUnit" => ["type" => "string", "enum" => ['px', 'em', '%'], "default" => "px"],
                    "labelTypoLineHeightSm" => ["type" => 'string'],
                    "labelTypoLineHeightMd" => ["type" => "string"],
                    "labelTypoLineHeight" => ["type" => "string"],
                    "labelTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "labelTypoFontColor" => ["type" => 'string'],
                    "labelRequiredColor" => ["type" => 'string'],

                    "labelSpacingTop" => ["type" => 'string'],
                    "labelSpacingLeft" => ["type" => 'string'],
                    "labelSpacingRight" => ["type" => 'string'],
                    "labelSpacingBottom" => ["type" => 'string'],
                    "labelSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "descTypoFamily" => ["type" => 'string'],
                    "descTypoWeight" => ["type" => 'string'],
                    "descTypoTextTransform" => ["type" => 'string'],
                    "descTypoTextDecoration" => ["type" => 'string'],
                    "descTypoFontSizeSm" => ["type" => 'string'],
                    "descTypoFontSizeMd" => ["type" => 'string'],
                    "descTypoFontSize" => ["type" => 'string'],
                    "descTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "descTypoLetterSpacingSm" => ["type" => 'string'],
                    "descTypoLetterSpacingMd" => ["type" => 'string'],
                    "descTypoLetterSpacing" => ["type" => 'string'],
                    "descTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "descTypoLineHeightSm" => ["type" => 'string'],
                    "descTypoLineHeightMd" => ["type" => 'string'],
                    "descTypoLineHeight" => ["type" => 'string'],
                    "descTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "descTypoFontColor" => ["type" => 'string'],

                    "descSpacingTop" => ["type" => 'string'],
                    "descSpacingLeft" => ["type" => 'string'],
                    "descSpacingRight" => ["type" => 'string'],
                    "descSpacingBottom" => ["type" => 'string'],
                    "descSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "fieldTypoFamily" => ["type" => 'string'],
                    "fieldTypoWeight" => ["type" => 'string'],
                    "fieldTypoTextTransform" => ["type" => 'string'],
                    "fieldTypoTextDecoration" => ["type" => 'string'],
                    "fieldTypoFontSizeSm" => ["type" => 'string'],
                    "fieldTypoFontSizeMd" => ["type" => 'string'],
                    "fieldTypoFontSize" => ["type" => 'string'],
                    "fieldTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "fieldTypoLetterSpacingSm" => ["type" => 'string'],
                    "fieldTypoLetterSpacingMd" => ["type" => 'string'],
                    "fieldTypoLetterSpacing" => ["type" => 'string'],
                    "fieldTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "fieldTypoLineHeightSm" => ["type" => 'string'],
                    "fieldTypoLineHeightMd" => ["type" => 'string'],
                    "fieldTypoLineHeight" => ["type" => 'string'],
                    "fieldTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "fieldColorNormal" => ["type" => 'string'],
                    "fieldBgColorNormal" => ["type" => 'string'],

                    "fieldShadowNormalX" => ["type" => 'string'],
                    "fieldShadowNormalY" => ["type" => 'string'],
                    "fieldShadowNormalBlur" => ["type" => 'string'],
                    "fieldShadowNormalSpread" => ["type" => 'string'],
                    "fieldShadowNormalColor" => ["type" => 'string'],
                    "fieldShadowNormalInset" => ["type" => 'string'],

                    "fieldBorder" => ["type" => 'string'],

                    "fieldBorderTop" => ["type" => 'string'],
                    "fieldBorderLeft" => ["type" => 'string'],
                    "fieldBorderRight" => ["type" => 'string'],
                    "fieldBorderBottom" => ["type" => 'string'],
                    "fieldBorderUnit" => ["type" => 'string', "enum" => ['px', 'em', 'rem', 'vw'], "default" => 'px'],

                    "fieldBorderColorNormal" => ["type" => 'string'],

                    "fieldColorFocus" => ["type" => 'string'],
                    "fieldBgColorFocus" => ["type" => 'string'],
                    "fieldShadowFocusX" => ["type" => 'string'],
                    "fieldShadowFocusY" => ["type" => 'string'],
                    "fieldShadowFocusBlur" => ["type" => 'string'],
                    "fieldShadowFocusSpread" => ["type" => 'string'],
                    "fieldShadowFocusColor" => ["type" => 'string'],
                    "fieldShadowFocusInset" => ["type" => 'string'],

                    "fieldBorderFocusColor" => ["type" => 'string'],

                    "fieldBorderRadiusTop" => ["type" => 'string'],
                    "fieldBorderRadiusLeft" => ["type" => 'string'],
                    "fieldBorderRadiusRight" => ["type" => 'string'],
                    "fieldBorderRadiusBottom" => ["type" => 'string'],
                    "fieldBorderRadiusUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "fieldPaddingTop" => ["type" => 'string'],
                    "fieldPaddingLeft" => ["type" => 'string'],
                    "fieldPaddingRight" => ["type" => 'string'],
                    "fieldPaddingBottom" => ["type" => 'string'],
                    "fieldPaddingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "uploadTypoFamily" => ["type" => 'string'],
                    "uploadTypoWeight" => ["type" => 'string'],
                    "uploadTypoTextTransform" => ["type" => 'string'],
                    "uploadTypoTextDecoration" => ["type" => 'string'],
                    "uploadTypoFontSizeSm" => ["type" => 'string'],
                    "uploadTypoFontSizeMd" => ["type" => 'string'],
                    "uploadTypoFontSize" => ["type" => 'string'],
                    "uploadTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "uploadTypoLetterSpacingSm" => ["type" => 'string'],
                    "uploadTypoLetterSpacingMd" => ["type" => 'string'],
                    "uploadTypoLetterSpacing" => ["type" => 'string'],
                    "uploadTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "uploadTypoLineHeightSm" => ["type" => 'string'],
                    "uploadTypoLineHeightMd" => ["type" => 'string'],
                    "uploadTypoLineHeight" => ["type" => 'string'],
                    "uploadTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "uploadColor" => ["type" => 'string'],
                    "uploadBgColor" => ["type" => 'string'],

                    "uploadShadowX" => ["type" => 'string'],
                    "uploadShadowY" => ["type" => 'string'],
                    "uploadShadowBlur" => ["type" => 'string'],
                    "uploadShadowSpread" => ["type" => 'string'],
                    "uploadShadowColor" => ["type" => 'string'],
                    "uploadShadowInset" => ["type" => 'string'],

                    "uploadBorder" => ["type" => 'string'],
                    "uploadBorderWidthTop" => ["type" => 'string'],
                    "uploadBorderWidthLeft" => ["type" => 'string'],
                    "uploadBorderWidthRight" => ["type" => 'string'],
                    "uploadBorderWidthBottom" => ["type" => 'string'],
                    "uploadBorderWidthUnit" => ["type" => 'string', "enum" => ['px', 'em', 'rem', 'vw'], "default" => 'px'],

                    "uploadBorderColor" => ["type" => 'string'],

                    "uploadColorHover" => ["type" => 'string'],
                    "uploadBgColorHover" => ["type" => 'string'],

                    "uploadShadowHoverX" => ["type" => 'string'],
                    "uploadShadowHoverY" => ["type" => 'string'],
                    "uploadShadowHoverBlur" => ["type" => 'string'],
                    "uploadShadowHoverSpread" => ["type" => 'string'],
                    "uploadShadowHoverColor" => ["type" => 'string'],
                    "uploadShadowHoverInset" => ["type" => 'string'],

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

                    "buttonTypoFamily" => ["type" => 'string'],
                    "buttonTypoWeight" => ["type" => 'string'],
                    "buttonTypoTextTransform" => ["type" => 'string'],
                    "buttonTypoTextDecoration" => ["type" => 'string'],
                    "buttonTypoFontSizeSm" => ["type" => 'string'],
                    "buttonTypoFontSizeMd" => ["type" => 'string'],
                    "buttonTypoFontSize" => ["type" => 'string'],
                    "buttonTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "buttonTypoLetterSpacingSm" => ["type" => 'string'],
                    "buttonTypoLetterSpacingMd" => ["type" => 'string'],
                    "buttonTypoLetterSpacing" => ["type" => 'string'],
                    "buttonTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "buttonTypoLineHeightSm" => ["type" => 'string'],
                    "buttonTypoLineHeightMd" => ["type" => 'string'],
                    "buttonTypoLineHeight" => ["type" => 'string'],
                    "buttonTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "buttonColor" => ["type" => 'string'],
                    "buttonBgColor" => ["type" => 'string'],

                    "buttonShadowX" => ["type" => 'string'],
                    "buttonShadowY" => ["type" => 'string'],
                    "buttonShadowBlur" => ["type" => 'string'],
                    "buttonShadowSpread" => ["type" => 'string'],
                    "buttonShadowColor" => ["type" => 'string'],
                    "buttonShadowInset" => ["type" => 'string'],

                    "buttonBorder" => ["type" => 'string'],
                    "buttonBorderTop" => ["type" => 'string'],
                    "buttonBorderLeft" => ["type" => 'string'],
                    "buttonBorderRight" => ["type" => 'string'],
                    "buttonBorderBottom" => ["type" => 'string'],
                    "buttonBorderUnit" => ["type" => 'string', "enum" => ['px', 'em', 'rem', 'vw'], "default" => 'px'],
                    "buttonBorderColor" => ["type" => 'string'],

                    "buttonColorHover" => ["type" => 'string'],
                    "buttonBgColorHover" => ["type" => 'string'],

                    "buttonShadowHoverX" => ["type" => 'string'],
                    "buttonShadowHoverY" => ["type" => 'string'],
                    "buttonShadowHoverBlur" => ["type" => 'string'],
                    "buttonShadowHoverSpread" => ["type" => 'string'],
                    "buttonShadowHoverColor" => ["type" => 'string'],
                    "buttonShadowHoverInset" => ["type" => 'string'],

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

                    "validationTypoFamily" => ["type" => 'string'],
                    "validationTypoWeight" => ["type" => 'string'],
                    "validationTypoTextTransform" => ["type" => 'string'],
                    "validationTypoTextDecoration" => ["type" => 'string'],
                    "validationTypoFontSizeSm" => ["type" => 'string'],
                    "validationTypoFontSizeMd" => ["type" => 'string'],
                    "validationTypoFontSize" => ["type" => 'string'],
                    "validationTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "validationTypoLetterSpacingSm" => ["type" => 'string'],
                    "validationTypoLetterSpacingMd" => ["type" => 'string'],
                    "validationTypoLetterSpacing" => ["type" => 'string'],
                    "validationTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "validationTypoLineHeightSm" => ["type" => 'string'],
                    "validationTypoLineHeightMd" => ["type" => 'string'],
                    "validationTypoLineHeight" => ["type" => 'string'],
                    "validationTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "validationTypoFontColor" => ["type" => 'string'],
                    "validationTextAlign" => ["type" => 'string'],

                    "formTitleTypoFamily" => ["type" => 'string'],
                    "formTitleTypoWeight" => ["type" => 'string'],
                    "formTitleTypoTextTransform" => ["type" => 'string'],
                    "formTitleTypoTextDecoration" => ["type" => 'string'],
                    "formTitleTypoFontSizeSm" => ["type" => 'string'],
                    "formTitleTypoFontSizeMd" => ["type" => 'string'],
                    "formTitleTypoFontSize" => ["type" => 'string'],
                    "formTitleTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formTitleTypoLetterSpacingSm" => ["type" => 'string'],
                    "formTitleTypoLetterSpacingMd" => ["type" => 'string'],
                    "formTitleTypoLetterSpacing" => ["type" => 'string'],
                    "formTitleTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formTitleTypoLineHeightSm" => ["type" => 'string'],
                    "formTitleTypoLineHeightMd" => ["type" => 'string'],
                    "formTitleTypoLineHeight" => ["type" => 'string'],
                    "formTitleTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "formTitleTypoFontColor" => ["type" => 'string'],

                    "formTitleSpacingTop" => ["type" => 'string'],
                    "formTitleSpacingLeft" => ["type" => 'string'],
                    "formTitleSpacingRight" => ["type" => 'string'],
                    "formTitleSpacingBottom" => ["type" => 'string'],
                    "formTitleSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "formDescTypoFamily" => ["type" => 'string'],
                    "formDescTypoWeight" => ["type" => 'string'],
                    "formDescTypoTextTransform" => ["type" => 'string'],
                    "formDescTypoTextDecoration" => ["type" => 'string'],
                    "formDescTypoFontSizeSm" => ["type" => 'string'],
                    "formDescTypoFontSizeMd" => ["type" => 'string'],
                    "formDescTypoFontSize" => ["type" => 'string'],
                    "formDescTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formDescTypoLetterSpacingSm" => ["type" => 'string'],
                    "formDescTypoLetterSpacingMd" => ["type" => 'string'],
                    "formDescTypoLetterSpacing" => ["type" => 'string'],
                    "formDescTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "formDescTypoLineHeightSm" => ["type" => 'string'],
                    "formDescTypoLineHeightMd" => ["type" => 'string'],
                    "formDescTypoLineHeight" => ["type" => 'string'],
                    "formDescTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "formDescTypoFontColor" => ["type" => 'string'],
                    "formDescSpacingTop" => ["type" => 'string'],
                    "formDescSpacingLeft" => ["type" => 'string'],
                    "formDescSpacingRight" => ["type" => 'string'],
                    "formDescSpacingBottom" => ["type" => 'string'],
                    "formDescSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "headingTypoFamily" => ["type" => 'string'],
                    "headingTypoWeight" => ["type" => 'string'],
                    "headingTypoTextTransform" => ["type" => 'string'],
                    "headingTypoTextDecoration" => ["type" => 'string'],
                    "headingTypoFontSizeSm" => ["type" => 'string'],
                    "headingTypoFontSizeMd" => ["type" => 'string'],
                    "headingTypoFontSize" => ["type" => 'string'],
                    "headingTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "headingTypoLetterSpacingSm" => ["type" => 'string'],
                    "headingTypoLetterSpacingMd" => ["type" => 'string'],
                    "headingTypoLetterSpacing" => ["type" => 'string'],
                    "headingTypoLetterSpacingUnit" => ["type" => 'string'],
                    "headingTypoLineHeightSm" => ["type" => 'string'],
                    "headingTypoLineHeightMd" => ["type" => 'string'],
                    "headingTypoLineHeight" => ["type" => 'string'],
                    "headingTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "headingTypoFontColor" => ["type" => 'string'],

                    "paragraphTypoFamily" => ["type" => 'string'],
                    "paragraphTypoWeight" => ["type" => 'string'],
                    "paragraphTypoTextTransform" => ["type" => 'string'],
                    "paragraphTypoTextDecoration" => ["type" => 'string'],
                    "paragraphTypoFontSizeSm" => ["type" => 'string'],
                    "paragraphTypoFontSizeMd" => ["type" => 'string'],
                    "paragraphTypoFontSize" => ["type" => 'string'],
                    "paragraphTypoFontSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "paragraphTypoLetterSpacingSm" => ["type" => 'string'],
                    "paragraphTypoLetterSpacingMd" => ["type" => 'string'],
                    "paragraphTypoLetterSpacing" => ["type" => 'string'],
                    "paragraphTypoLetterSpacingUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],
                    "paragraphTypoLineHeightSm" => ["type" => 'string'],
                    "paragraphTypoLineHeightMd" => ["type" => 'string'],
                    "paragraphTypoLineHeight" => ["type" => 'string'],
                    "paragraphTypoLineHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "paragraphTypoFontColor" => ["type" => 'string'],
                    "dividerColor" => ["type" => 'string'],
                    "starSize" => ["type" => 'string'],
                    "starSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "starColor" => ["type" => 'string'],
                    "starColorActive" => ["type" => 'string'],

                    "rangeHeight" => ["type" => 'string'],
                    "rangeHeightUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "rangeHandleSize" => ["type" => 'string'],
                    "rangeHandleSizeUnit" => ["type" => 'string', "enum" => ['px', 'em', '%'], "default" => 'px'],

                    "rangeColor" => ["type" => 'string'],
                    "rangeColorActive" => ["type" => 'string'],
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

    public function load_textdomain() {
        load_plugin_textdomain('hash-form', false, HASHFORM_PATH . 'languages');
    }

    // Enqueue localization data for our blocks.
    public function block_localization() {
        if (function_exists('wp_set_script_translations')) {
            wp_set_script_translations('hfb-blocks', 'hash-form', HASHFORM_PATH . 'languages');
        }
    }

}

new HashFormBlock();
