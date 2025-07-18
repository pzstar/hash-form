<?php
defined('ABSPATH') || die();

class HashFormFieldTextarea extends HashFormFieldType {

    protected $type = 'textarea';

    protected function field_settings_for_type() {
        return array(
            'value' => false,
            'clear_on_focus' => true
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'rows' => '10',
        );
    }

    public function sanitize_value(&$value) {
        return HashFormHelper::sanitize_value('esc_textarea', $value);
    }

    protected function input_html() {
        $field = $this->get_field();
        $value = $this->prepare_esc_value();
        ?>
        <textarea <?php $this->field_attrs(); ?> rows="<?php echo isset($field['rows']) ? absint($field['rows']) : 10; ?>"><?php echo esc_textarea(apply_filters('hf_translate_string', $value, 'Hash Form', HashFormBuilder::get_form_title($field['form_id']) . ' - ' . $field['id'] . ' - ' . 'Field Default')); ?></textarea>
        <?php
    }

}
