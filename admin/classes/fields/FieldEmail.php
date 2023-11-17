<?php

defined('ABSPATH') || die();

class FieldEmail extends FieldType {

    protected $type = 'email';

    protected function field_settings_for_type() {
        return array(
            'clear_on_focus' => true,
            'invalid' => true,
        );
    }

    public function validate($args) {
        $errors = isset($args['errors']) ? $args['errors'] : array();
        if ($args['value'] != '' && !is_email($args['value']))
            $errors['field' . $args['id']] = HashFields::get_error_msg($this->field, 'invalid');
        return $errors;
    }

    public function sanitize_value(&$value) {
        return HashHelper::sanitize_value('sanitize_email', $value);
    }

    public function input_html() {
        $html = '<input type="email" ' . $this->field_attrs() . '/>';
        return $html;
    }

}
