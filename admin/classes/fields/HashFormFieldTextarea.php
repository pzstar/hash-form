<?php
defined('ABSPATH') || die();

class HashFormFieldTextarea extends HashFormFieldType {

    protected $type = 'textarea';

    protected function field_settings_for_type() {
        return array(
            'value' => false,
            'size' => true,
            'clear_on_focus' => true
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'rows' => '10',
        );
    }

    public function sanitize_value(&$value) {
        return wp_kses_post($value);
    }

    protected function input_html() {
        $field = $this->get_field();
        $value = $this->prepare_esc_value();
        ?>
        <textarea id="field_change_rows_<?php echo esc_attr($this->field_id); ?>" <?php $this->field_attrs(); ?> rows="<?php echo absint($field['rows']); ?>"><?php echo esc_textarea($value); ?></textarea>
        <?php
    }

}
