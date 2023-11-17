<?php

defined('ABSPATH') || die();

class FieldParagraph extends FieldType {

    protected $type = 'paragraph';

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
            'content' => 'Paragraph',
            'text_alignment' => 'left',
            'field_alignment' => 'left',
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        return '<div class="hf-paragraph-field" id="hf-field-' . $field['id'] . '">' . $field['content'] . '</div>';
    }

}
