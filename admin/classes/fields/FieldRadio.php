<?php

defined('ABSPATH') || die();

class FieldRadio extends FieldType {

    protected $type = 'radio';

    protected function field_settings_for_type() {
        return array(
            'default' => false,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'options_layout' => 'inline',
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        $options = $field['options'] ? $field['options'] : array();
        $default = $field['default_value'] ? $field['default_value'] : '';

        $html = '<div class="hf-choice-container">';
        foreach ($options as $option_key => $option) {
            $label = isset($option['label']) ? $option['label'] : $option;
            $checked = ($label == $default) ? ' checked' : '';
            $html .= '<div class="hf-choice hf-checkbox">';
            $html .= '<label for="' . esc_attr($this->html_id('-' . $option_key)) . '">';
            $html .= '<input type="radio" id="' . esc_attr($this->html_id('-' . $option_key)) . '" name="' . $this->html_name() . '[]" value="' . $label . '"' . $checked . '/>';
            $html .= esc_html($label);
            $html .= '</label>';
            $html .= '</div>';
        }
        $html .= '</div>';

        return $html;
    }

}
