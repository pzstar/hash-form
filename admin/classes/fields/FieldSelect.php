<?php

defined('ABSPATH') || die();

class FieldSelect extends FieldType {

    protected $type = 'select';

    protected function field_settings_for_type() {
        return array(
            'clear_on_focus' => true,
            'default' => false,
            'auto_width' => true
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'auto_width' => 'off'
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        $options = $field['options'] ? $field['options'] : array();
        $default = $field['default_value'] ? $field['default_value'] : '';

        $html = '<select ' . $this->field_attrs() . '>';
        $placeholder = trim($field['placeholder']);
        if ($placeholder) {
            $html .= '<option value="">' . esc_html($placeholder) . '</option>';
        }
        foreach ($options as $option) {
            $checked = ($option['label'] == $default) ? 'selected' : '';
            $html .= '<option value="' . esc_attr($option['label']) . '" ' . $checked . '>' . esc_html($option['label']) . '</option>';
        }
        $html .= '</select>';

        return $html;
    }

}
