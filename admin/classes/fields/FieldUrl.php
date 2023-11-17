<?php

defined('ABSPATH') || die();

class FieldUrl extends FieldType {

    protected $type = 'url';

    protected function field_settings_for_type() {
        return array(
            'size' => true,
            'clear_on_focus' => true,
            'invalid' => true,
        );
    }

    public function validate($args) {
        $errors = array();

        $value = $args['value'];
        if (trim($value) == 'http://' || empty($value)) {
            $value = '';
        } else {
            $value = esc_url_raw($value);
            $value = preg_match('/^(https?|ftps?|mailto|news|feed|telnet):/is', $value) ? $value : 'http://' . $value;
        }

        if (!empty($value) && !preg_match('/^http(s)?:\/\/(?:localhost|(?:[\da-z\.-]+\.[\da-z\.-]+))/i', $value)) {
            $errors['field' . $args['id']] = HashFields::get_error_msg($this->field, 'invalid');
        }

        return $errors;
    }

    public function sanitize_value(&$value) {
        return HashHelper::sanitize_value('esc_url_raw', $value);
    }

    protected function input_html() {
        $field_type = $this->type;
        $html = '<input type="' . esc_attr($field_type) . '" ' . $this->field_attrs() . '/>';
        return $html;
    }

}
