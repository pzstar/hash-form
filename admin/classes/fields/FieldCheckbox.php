<?php

defined('ABSPATH') || die();

class FieldCheckbox extends FieldType {

    protected $type = 'checkbox';

    public function field_settings_for_type() {
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
        $default = $field['default_value'] ? $field['default_value'] : array();

        $html = '<div class="hf-choice-container">';
        foreach ($options as $option_key => $option) {
            $html .= '<div class="hf-choice hf-checkbox">';
            $checked = in_array($option['label'], $default) ? ' checked' : '';
            $html .= '<label for="' . esc_attr($this->html_id('-' . $option_key)) . '">';
            $html .= '<input type="checkbox" id="' . esc_attr($this->html_id('-' . $option_key)) . '" name="' . $this->html_name() . '[]" value="' . $option['label'] . '"' . $checked . '/>';
            $html .= esc_html($option['label']);
            $html .= '</label>';
            $html .= '</div>';
        }
        $html .= '</div>';

        return $html;
    }

}
