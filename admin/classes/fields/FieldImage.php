<?php

defined('ABSPATH') || die();

class FieldImage extends FieldType {

    protected $type = 'image';

    public function field_settings_for_type() {
        return array(
            'label' => false,
            'default' => false,
            'description' => false,
            'required' => false,
            'image' => true,
            'field_alignment' => true,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'image' => 0,
            'field_alignment' => 'left',
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        if (isset($field['image'])) {
            $image = wp_get_attachment_image_src($field['image'], 'full');
            $image = isset($image[0]) ? $image[0] : '';
        }
        $image_class = $image ? ' hf-hidden' : '';

        $html = '<div class="hf-image-preview-front hf-field-image-' . esc_attr($field['id']) . '">';
        $html .= '<div class="hf-no-image-field' . $image_class . '">' . esc_html__('Image Field - No Image', 'hash-form') . '</div>';
        if ($image) {
            $html .= '<img src="' . esc_attr($image) . '"/>';
        }
        $html .= '</div>';
        return $html;
    }

}
