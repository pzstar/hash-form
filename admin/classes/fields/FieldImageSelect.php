<?php

defined('ABSPATH') || die();

class FieldImageSelect extends FieldType {

    protected $type = 'image_select';

    protected function field_settings_for_type() {
        return array(
            'default' => false,
            'image_max_width' => false,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'image_options' => 0,
            'image_size' => '',
            'select_option_type' => 'radio',
            'options_layout' => 'inline',
            'image_max_width' => '',
            'image_max_width_unit' => '%',
        );
    }

    private function get_url($image_id) {
        $image_id = (int) $image_id;
        $src = wp_get_attachment_image_src($image_id, 'full');
        $url = is_array($src) ? $src[0] : '';
        if (!$url) {
            $url = wp_get_attachment_image_url($image_id);
        }
        return $url ? $url : '';
    }

    protected function input_html() {
        $field = $this->get_field();

        $options = $field['options'] ? $field['options'] : array();
        $default = $field['default_value'] ? $field['default_value'] : array();
        $field_type = $field['select_option_type'];

        $html = '<div class="hf-choice-container">';
        foreach ($options as $option_key => $option) {
            $checked = in_array($option['label'], $default) ? ' checked' : '';
            $html .= '<div class="hf-choice hf-' . esc_attr($field_type) . '">';
            $html .= '<label for="' . esc_attr($this->html_id('-' . $option_key)) . '">';
            $html .= '<input type="' . esc_attr($field_type) . '" name="' . $this->html_name() . '[]" id="' . esc_attr($this->html_id('-' . $option_key)) . '" value="' . esc_attr($option['label']) . '" ' . $checked . '>';
            $html .= '<div class="hf-field-is-container hf-field-is-has-label">';
            $html .= '<div class="hf-field-is-image">';
            $html .= '<span class="hf-field-is-checked mdi-check-circle"></span>';
            if (isset($option['image']) && $option['image']) {
                $html .= '<img src="' . esc_url($this->get_url($option['image'])) . '" alt="' . esc_attr($option['label']) . '">';
            }
            $html .= '</div>';
            $html .= '<div class="hf-field-is-label">' . esc_html($option['label']) . '</div>';
            $html .= '</div>';
            $html .= '</label>';
            $html .= '</div>';
        }
        $html .= '</div>';

        return $html;
    }

}
