<?php

defined('ABSPATH') || die();

class FieldText extends FieldType {

    protected $type = 'text';

    protected function field_settings_for_type() {
        return array(
            'clear_on_focus' => true,
            'invalid' => true,
            'format' => true,
            'max' => true
        );
    }

    public function validate($args) {
        $errors = array();

        $pattern = self::format($this->field);
        $max_length = intval(HashFields::get_option($this->field, 'max'));

        if (!preg_match($pattern, $args['value'])) {
            $errors['field' . $args['id']] = HashFields::get_error_msg($this->field, 'invalid');
        }

        if ($max_length && strlen($args['value']) > $max_length) {
            $errors['field' . $args['id']] = HashFields::get_error_msg($this->field, 'max_char');
        }
        return $errors;
    }

    public static function format($field) {
        $pattern = HashFields::get_option($field, 'format');
        $pattern = '/' . $pattern . '/';
        return $pattern;
    }

    protected function input_html() {
        $html = '<input type="text" ' . $this->field_attrs() . '/>';
        return $html;
    }

}
