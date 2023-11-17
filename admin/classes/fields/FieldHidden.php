<?php

defined('ABSPATH') || die();

class FieldHidden extends FieldType {

    protected $type = 'hidden';

    public function field_settings_for_type() {
        return array(
            'max_width' => false,
            'css' => false,
            'description' => false,
            'required' => false,
            'label' => false
        );
    }

    public function set_value_before_save($value) {
        $val = $this->get_field();
        return $val->default_value;
    }

    protected function input_html() {
        if (is_admin() && !HashHelper::is_preview_page()) {
            $html = '<label class="hf-editor-field-label">';
            $html .= '<span class="hf-editor-field-label-text">' . esc_html__('Hidden', 'hash-form') . '</span>';
            $html .= '</label>';
            $html .= '<input type="text" ' . $this->field_attrs() . ' />';
            $html .= '<p class="howto">';
            $html .= esc_html__('Note: This field will not show in the form. Enter the value to be hidden.', 'hash-form');
            $html .= '</p>';
        } else {
            $html = '<input type="hidden" ' . $this->field_attrs() . ' />';
        }

        return $html;
    }

}
