<?php

defined('ABSPATH') || die();

class FieldRangeSlider extends FieldType {

    protected $type = 'range_slider';

    public function field_settings_for_type() {
        return array(
            'description' => false,
            'label_position' => false,
            'range' => true
        );
    }

    public function validate($args) {
        $errors = array();

        if (!is_numeric($args['value']) && '' !== $args['value'])
            $errors['field' . $args['id']] = HashFields::get_error_msg($this->field, 'invalid');

        if ($args['value'] != '') {
            $minnum = HashFields::get_option($this->field, 'minnum');
            $maxnum = HashFields::get_option($this->field, 'maxnum');
            if ($maxnum !== '' && $minnum !== '') {
                $value = (float) $args['value'];
                if ($value < $minnum) {
                    $errors['field' . $args['id']] = __('Please select a higher number', 'hash-form');
                } elseif ($value > $maxnum) {
                    $errors['field' . $args['id']] = __('Please select a lower number', 'hash-form');
                }
            }
            $this->validate_step($errors, $args);
        }
        return $errors;
    }

    private function validate_step(&$errors, $args) {
        if (isset($errors['field' . $args['id']]))
            return;
        $step = HashFields::get_option($this->field, 'step');
        if (!$step || !is_numeric($step))
            return;
        $result = $this->check_value_is_valid_with_step($args['value'], $step);
        if (!$result)
            return;
        $errors['field' . $args['id']] = sprintf(__('Please enter a valid value. Two nearest valid values are %1$s and %2$s', 'hash-form'), floatval($result[0]), floatval($result[1]));
    }

    private function check_value_is_valid_with_step($value, $step) {
        $decimals = max(HashHelper::count_decimals($value), HashHelper::count_decimals($step));
        $pow = pow(10, $decimals);
        $value = intval($pow * $value);
        $step = intval($pow * $step);
        $div = $value / $step;
        if (is_int($div))
            return 0;
        $div = floor($div);
        return array($div * $step / $pow, ( $div + 1 ) * $step / $pow);
    }

    public function sanitize_value(&$value) {
        if (!is_numeric($value))
            $value = (float) $value;
        return $value;
    }

    protected function input_html() {
        $field = $this->get_field();
        $html = '<div class="hashform-range-slider-container">';
        $html .= '<div class="hashform-range-slider-wrap">';
        $html .= '<div class="hashform-range-slider"></div>';
        $html .= '<input class="hashform-range-input-selector" type="number" ' . $this->field_attrs() . '>';
        $html .= '</div>';
        $html .= '</div>';

        return $html;
    }

}
