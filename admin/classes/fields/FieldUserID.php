<?php

defined('ABSPATH') || die();

class FieldUserID extends FieldType {

    protected $type = 'user_id';

    public function field_settings_for_type() {
        return array(
            'max_width' => false,
            'default' => false,
            'css' => false,
            'description' => false,
            'required' => false,
            'label' => false
        );
    }

    public function get_user_id() {
        $user_ID = get_current_user_id();
        return $user_ID;
    }

    public function set_value_before_save($value) {
        $user_ID = $this->get_user_id();
        return $user_ID;
    }

    protected function input_html() {
        if (is_admin() && !HashHelper::is_preview_page()) {
            $html = '<label class="hf-editor-field-label">';
            $html .= '<span class="hf-editor-field-label-text">' . esc_html__('User ID', 'hash-form') . '</span>';
            $html .= '</label>';
            $html .= '<input type="text" value="' . esc_attr__('User ID fields will not show in your form.', 'hash-form') . '" disabled />';
        } else {
            $html = '<input type="hidden" name="' . esc_attr($this->html_name()) . '" value=' . esc_attr($this->get_user_id()) . ' />';
        }
        return $html;
    }

}
