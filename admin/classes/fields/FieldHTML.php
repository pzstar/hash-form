<?php
defined('ABSPATH') || die();

class FieldHTML extends FieldType {

    protected $type = 'html';

    public function field_settings_for_type() {
        return array(
            'default' => false,
            'required' => false,
            'label' => false,
            'description' => false,
            'field_alignment' => true,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'field_alignment' => 'left',
        );
    }

    public function show_primary_options() {
        $field = $this->get_field();
        ?>
        <div class="hf-form-row">
            <label><?php esc_html_e('Content', 'hash-form'); ?></label>
            <div class="hf-form-text-editor">
                <?php
                $args = array(
                    'textarea_name' => 'field_options[description_' . absint($field['id']) . ']',
                    'textarea_rows' => 8,
                );
                $html_id = 'hf-field-desc_' . absint($field['id']);
                wp_editor($field['description'], $html_id, $args);
                ?>
            </div>
        </div>
        <?php
    }

    public function input_html() {
        $field = $this->get_field();
        $html = '<div class="hf-custom-html-field">';
        if (is_admin() && !HashHelper::is_preview_page()) {
            $html .= '<div class="hf-custom-html-preview">';
            $html .= esc_html__('Custom HTML - No Preview Available', 'hash-form');
            $html .= '</div>';
        } else {
            $html .= wpautop($field['description']);
        }
        $html .= '</div>';

        return $html;
    }

}
