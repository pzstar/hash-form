<?php
defined('ABSPATH') || die();

class FieldStar extends FieldType {

    protected $type = 'star';
    protected $array_allowed = false;

    public function field_settings_for_type() {
        return array(
            'default' => false,
            'max_width' => false,
        );
    }

    public function show_primary_options() {
        $field = $this->get_field();
        ?>
        <div class="hf-form-row">
            <label>
                <?php esc_html_e('Maximum Rating', 'hash-form'); ?>
            </label>
            <input type="number" name="field_options[maxnum_<?php echo absint($field['id']); ?>]" value="<?php echo esc_attr($field['maxnum']); ?>" min="1" max="50" step="1" data-changestars="hf-field-star-<?php echo esc_attr($field['id']); ?>"/>
            <input type="hidden" name="field_options[minnum_<?php echo absint($field['id']); ?>]"/>
        </div>
        <?php
    }

    public function sanitize_value(&$value) {
        return HashHelper::sanitize_value('intval', $value);
    }

    protected function input_html() {
        $field = $this->get_field();
        $max = isset($field['maxnum']) ? $field['maxnum'] : 5;
        $field['options'] = range(1, $max);

        $html = '<div class="hashform-star-group" id="hf-field-star-' . esc_attr($field['id']) . '">';
        foreach ($field['options'] as $opt_key => $opt) {
            $html .= '<label class="hf-star-rating">';
            $html .= '<input type="radio" name="' . esc_attr($this->html_name()) . '" value="' . esc_attr($opt) . '"/>';
            $html .= '<span class="mdi mdi-star-outline"></span>';
            $html .= '</label>';
        }
        $html .= '</div>';
        return $html;
    }

}
