<?php
defined('ABSPATH') || die();

class FieldName extends FieldType {

    protected $type = 'name';

    protected function field_settings_for_type() {
        return array(
            'default' => false
        );
    }

    protected function sub_fields() {
        $field = $this->get_field();
        $name_layout = HashFields::get_option($field, 'name_layout');
        return array(
            'full' => array(
                'type' => 'text',
                'label' => __('', 'hash-form'),
                'optional' => $name_layout !== 'full',
            ),
            'first' => array(
                'type' => 'text',
                'label' => __('First', 'hash-form'),
                'optional' => $name_layout === 'full',
            ),
            'middle' => array(
                'type' => 'text',
                'label' => __('Middle', 'hash-form'),
                'optional' => true,
            ),
            'last' => array(
                'type' => 'text',
                'label' => __('Last', 'hash-form'),
                'optional' => $name_layout === 'full',
            ),
        );
    }

    protected function show_after_default() {
        $sub_fields = $this->sub_fields();
        foreach ($sub_fields as $name => $sub_field) {
            $this->single_field($name, $sub_field);
        }
    }

    protected function single_field($name, $sub_field) {
        $field = $this->get_field();
        $field_id = $field['id'];
        $field_key = $field['field_key'];
        $label = $sub_field['label'];
        $type = $sub_field['type'];
        $desc = $field['desc'][$name];
        $placeholder = isset($field['placeholder'][$name]) ? $field['placeholder'][$name] : '';
        $value = isset($field['default_value'][$name]) ? $field['default_value'][$name] : '';
        ?>
        <div class="hf-form-row hf-sub-field-<?php echo esc_attr($name); ?>" data-sub-field-name="<?php echo esc_attr($name); ?>" data-field-id="<?php echo esc_attr($field_id); ?>">
            <div class="hf-sub-field-label">
                <?php echo esc_html($label); ?>
            </div>

            <div class="hf-grid-container">
                <div class="hf-form-row hf-grid-2">
                    <input type="text" name="default_value_<?php echo esc_attr($field_id); ?>[<?php echo esc_attr($name); ?>]" value="<?php echo esc_attr($value); ?>" data-changeme="hf-field-<?php echo esc_attr($field_key); ?>-<?php echo esc_attr($name); ?>" data-changeatt="value">
                    <label class="hf-field-desc"><?php echo esc_html__('Default Value', 'hash-form'); ?></label>
                </div>
                <div class="hf-form-row hf-grid-2">
                    <input type="text" name="field_options[placeholder_<?php echo esc_attr($field_id); ?>][<?php echo esc_attr($name); ?>]" value="<?php echo esc_attr($placeholder); ?>" data-changeme="hf-field-<?php echo esc_attr($field_key); ?>-<?php echo esc_attr($name); ?>" data-changeatt="placeholder">
                    <label class="hf-field-desc"><?php echo esc_html__('Placeholder', 'hash-form'); ?></label>
                </div>
                <div class="hf-form-row hf-grid-2">
                    <input type="text" name="field_options[desc_<?php echo esc_attr($field_id); ?>][<?php echo esc_attr($name); ?>]" value="<?php echo esc_html($desc); ?>" data-changeme="hf-subfield-desc-<?php echo esc_attr($name); ?>-<?php echo esc_attr($field_id); ?>">
                    <label class="hf-field-desc"><?php echo esc_html__('Description', 'hash-form'); ?></label>
                </div>
            </div>
        </div>
        <?php
    }

    public function show_primary_options() {
        $field = $this->get_field();
        $field_id = $field['id'];
        $name_layout = HashFields::get_option($field, 'name_layout');
        ?>
        <div class="hf-form-row">
            <label><?php esc_html_e('Name layout', 'hash-form'); ?></label>
            <select name="field_options[name_layout_<?php echo esc_attr($field_id); ?>]" data-field-id="<?php echo intval($field_id); ?>" data-changeme="hf-grouped-field-<?php echo intval($field_id); ?>" data-changeatt="data-name-layout">
                <option value="full" <?php selected($name_layout, 'full'); ?>><?php esc_html_e('Full Name', 'hash-form'); ?></option>
                <option value="first_last" <?php selected($name_layout, 'first_last'); ?>><?php esc_html_e('First Last', 'hash-form'); ?></option>
                <option value="last_first" <?php selected($name_layout, 'last_first'); ?>><?php esc_html_e('Last First', 'hash-form'); ?></option>
                <option value="first_middle_last" <?php selected($name_layout, 'first_middle_last'); ?>><?php esc_html_e('First Middle Last', 'hash-form'); ?></option>
            </select>
        </div>
        <?php
    }

    protected function extra_field_default_opts() {
        $sub_fields = $this->sub_fields();
        $field_options = array();
        foreach ($sub_fields as $name => $fields) {
            $field_options['desc'][$name] = $fields['label'];
        }
        $field_options['name_layout'] = 'first_last';
        return $field_options;
    }

    public function sanitize_value(&$value) {
        $value = maybe_unserialize($value);
        $value = HashHelper::sanitize_value('sanitize_text_field', $value);
        $value = maybe_serialize($value);
        return $value;
    }

    public function validate($args) {
        $errors = isset($args['errors']) ? $args['errors'] : array();
        $field = $this->get_field();

        if ($field->required == '1') {
            $sub_fields = $this->sub_fields();

            foreach ($sub_fields as $name => $sub_field) {
                if (isset($args['value'][$name]) && empty($args['value'][$name]) && !$sub_field['optional']) {
                    $errors['field' . $args['id']] = HashFields::get_error_msg($this->field, 'blank');
                }
            }
        }

        return $errors;
    }

    protected function input_html() {
        $field = $this->get_field();
        $field_id = $field['id'];
        $field_key = $field['field_key'];
        $name_layout = $field['name_layout'];
        $display = explode('_', $name_layout);

        $html = '<div class="hf-grouped-field" id="hf-grouped-field-' . esc_attr($field_id) . '" data-name-layout="' . esc_attr($name_layout) . '">';
        $sub_fields = $this->sub_fields();

        foreach ($sub_fields as $name => $sub_field) {
            if (!is_admin() && !in_array($name, $display)) {
                continue;
            }

            $value = isset($field['default_value'][$name]) ? $field['default_value'][$name] : '';
            $placeholder = isset($field['placeholder'][$name]) ? $field['placeholder'][$name] : '';
            $label = isset($field['desc'][$name]) ? $field['desc'][$name] : '';

            $html .= '<div id="hf-subfield-container-' . esc_attr($name) . '-' . esc_attr($field_id) . '" class="hf-subfield-element hf-subfield-element-' . esc_attr($name) . '" data-sub-field-name="' . esc_attr($name) . '">';
            $html .= '<input type="text" id="hf-field-' . esc_attr($field_key) . '-' . esc_attr($name) . '" value="' . esc_attr($value) . '" name="' . $this->html_name() . '[' . esc_attr($name) . ']" placeholder="' . esc_attr($placeholder) . '" >';
            if (!empty($label)) {
                $html .= '<div class="hf-field-desc" id="hf-subfield-desc-' . esc_attr($name) . '-' . esc_attr($field_id) . '">' . esc_attr($label) . '</div>';
            }
            $html .= '</div>';
        }
        $html .= '</div>';

        return $html;
    }

}
