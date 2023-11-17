<?php

defined('ABSPATH') || die();

class FieldDate extends FieldType {

    protected $type = 'date';

    protected function field_settings_for_type() {
        return array(
            'clear_on_focus' => true,
            'invalid' => true,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'format' => 'MM dd, yy'
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        $html = '<input type="text" data-format="' . esc_attr($field['date_format']) . '" ' . $this->field_attrs() . ' autocomplete="off"/>';
        return $html;
    }

}
