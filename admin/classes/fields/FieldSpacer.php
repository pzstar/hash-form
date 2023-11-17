<?php

defined('ABSPATH') || die();

class FieldSpacer extends FieldType {

    protected $type = 'spacer';

    public function field_settings_for_type() {
        return array(
            'name' => false,
            'valuee' => false,
            'label' => false,
            'default' => false,
            'description' => false,
            'label_position' => false,
            'required' => false,
            'max_width' => false,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'spacer_height' => '50',
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        $html = '<div id="field_change_height_' . esc_attr($this->field_id) . '" style="height:' . $field['spacer_height'] . 'px"' . $this->field_attrs() . '></div>';
        return $html;
    }

}
