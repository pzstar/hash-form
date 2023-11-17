<?php

defined('ABSPATH') || die();

class FieldHeading extends FieldType {

    protected $type = 'heading';

    public function field_settings_for_type() {
        return array(
            'label' => false,
            'default' => false,
            'description' => false,
            'label_position' => false,
            'required' => false,
            'content' => true,
            'field_alignment' => true,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'heading_type' => 'h1',
            'content' => 'Heading',
            'text_alignment' => 'left',
            'field_alignment' => 'left',
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        $heading = isset($field['heading_type']) ? $field['heading_type'] : 'h1';
        $content = isset($field['content']) ? $field['content'] : '';

        $html = '<' . esc_attr($heading) . ' class="hf-heading-field" id="hf-field-' . esc_attr($field['id']) . '">';
        $html .= esc_html($content);
        $html .= '</' . esc_attr($heading) . '>';
        return $html;
    }

}
