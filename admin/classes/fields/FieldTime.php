<?php

defined('ABSPATH') || die();

class FieldTime extends FieldType {

    protected $type = 'time';

    protected function field_settings_for_type() {
        return array(
            'clear_on_focus' => true,
            'invalid' => true,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'step' => '60',
            'min_time' => '00:00',
            'max_time' => '23:59',
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        $step = intval($field['step']);
        $step = $step ? $step : 60;
        $html = '<input type="text" class="hf-timepicker" data-step="' . abs($step) . '" data-min-time="' . esc_attr($field['min_time']) . '" data-max-time="' . esc_attr($field['max_time']) . '" ' . $this->field_attrs() . '>';
        return $html;
    }

    protected function prepare_esc_value() {
        $field = $this->get_field();
        $value = isset($field['default_value']) ? $field['default_value'] : '';
        if (is_array($value)) {
            $value = implode(', ', $value);
        }

        if (strpos($value, '&lt;') !== false)
            $value = htmlentities($value);

        if(!$value)
            return $value;

        $time_value = explode(":", $value);
        $hour = intval($time_value[0]) % 24;
        $ampm = ($hour < 12 ? "am" : "pm");
        $hour = $hour % 12;
        $hour = $hour ? $hour : 12;
        $minute = $time_value[1];
        return $hour . ':' . $minute . $ampm;
    }

}
