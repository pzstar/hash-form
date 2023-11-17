<?php

defined('ABSPATH') || die();

class HashValidate {

    public static function validate($values) {
        $errors = array();
        self::sanitize_entries($values);

        if (!isset($values['form_id']) || !isset($values['item_meta'])) {
            $errors['form'] = __('There was a problem with your submission. Please try again.', 'hash-form');
            return $errors;
        }

        if (HashHelper::is_admin_page() && is_user_logged_in() && (!isset($values['hashform_submit_entry_' . $values['form_id']]) || !wp_verify_nonce($values['hashform_submit_entry_' . $values['form_id']], 'hashform_submit_entry_nonce') )) {
            $errors['form'] = __('Nounce Error', 'hash-form');
        }

        $fields = HashFields::get_form_fields($values['form_id']);

        foreach ($fields as $field) {
            self::validate_field($field, $errors, $values);
        }

        return $errors;
    }

    public static function validate_field($field, &$errors, $values) {
        $field_id = $field->id;
        if ($field->type == 'captcha') {
            $value = isset($values['g-recaptcha-response']) ? $values['g-recaptcha-response'] : '';
        } else {
            $value = isset($values['item_meta'][$field_id]) ? $values['item_meta'][$field_id] : '';
        }

        if (!is_array($value)) {
            $value = trim($value);

            if ($field->required == '1' && empty($value)) {
                $errors['field' . $field_id] = HashFields::get_error_msg($field, 'blank');
            }
        }

        self::validate_field_types($errors, $field, $value);
    }

    public static function validate_field_types(&$errors, $field, $value) {
        $field_obj = HashFields::get_field_object($field);
        $args['errors'] = $errors;
        $args['value'] = $value;
        $args['id'] = $field->id;

        $new_errors = $field_obj->validate($args);

        if (!empty($new_errors)) {
            $errors = array_merge($errors, $new_errors);
        }
    }

    public static function before_insert_entry_in_database($values) {
        $new_values = self::get_entry_data($values);
        $values = self::sanitize_entries($values);
        return $new_values;
    }

    public static function sanitize_entries($values) {
        $sanitize_method = array(
            'hashform_action' => 'sanitize_title',
            'form_id' => 'absint',
            'form_key' => 'sanitize_title',
            'ip' => 'sanitize_title',
            'delivery_status' => 'rest_sanitize_boolean',
            'ip' => 'sanitize_title',
            'user_id' => 'absint',
            'status' => 'sanitize_title',
            'g-recaptcha-response' => 'sanitize_title'
        );
        return self::sanitize_request($sanitize_method, $values);
    }

    public static function sanitize_request($sanitize_method, $values) {
        $temp_values = $values;
        foreach ($temp_values as $k => $val) {
            if (isset($sanitize_method[$k])) {
                $values[$k] = call_user_func($sanitize_method[$k], $val);
            }
        }

        return $values;
    }

    public static function get_entry_data($values) {
        global $wpdb;
        $new_values = array(
            'ip' => HashHelper::get_ip(),
            'delivery_status' => 1,
            'form_id' => isset($values['form_id']) ? $values['form_id'] : '',
            'created_at' => current_time('mysql'),
            'user_id' => self::get_entry_user_id($values),
            'status' => 'published'
        );
        return $new_values;
    }

    private static function get_entry_user_id($values) {
        $current_user_id = get_current_user_id();
        $user_id = $current_user_id ? $current_user_id : 0;
        return $user_id;
    }

    public function sanitize_status($value) {
        $status = array('published', 'trash');
        if (in_array($value, $status)) {
            return $value;
        }
        return 'published';
    }

}
