<?php

defined('ABSPATH') || die();

class FieldTextarea extends FieldType {

    protected $type = 'textarea';

    protected function field_settings_for_type() {
        return array(
            'value' => false,
            'size' => true,
            'clear_on_focus' => true
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'rows' => '10',
        );
    }

    public function sanitize_value(&$value) {
        return wp_kses_post($value);
    }

    protected function input_html() {
        $field = $this->get_field();
        $value = $this->prepare_esc_value();
        $html = '<textarea id="field_change_rows_' . esc_attr($this->field_id) . '" ' . $this->field_attrs() . ' rows="' . $field['rows'] . '">' . esc_textarea($value) . '</textarea>';
        return $html;
    }

}
