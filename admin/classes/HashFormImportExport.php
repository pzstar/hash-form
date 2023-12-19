<?php

defined('ABSPATH') || die();

class HashFormImportExport {

    public function __construct() {
        // Process a settings export that generates a .json file of the form settings
        add_action('admin_init', array($this, 'process_settings_export'));
        // Process a settings import from a json file
        add_action('admin_init', array($this, 'process_settings_import'));
    }

    public function process_settings_export() {
        $id = HashFormHelper::get_post('hashform_form_id', 'absint');

        if ('export_form' != HashFormHelper::get_post('hashform_imex_action') || !$id)
            return;

        if (!wp_verify_nonce(HashFormHelper::get_post('hashform_imex_export_nonce'), 'hashform_imex_export_nonce'))
            return;

        global $wpdb;

        $query = $wpdb->prepare("SELECT * FROM {$wpdb->base_prefix}hashform_forms WHERE id=%d", $id);
        $forms = $wpdb->get_results($query);

        foreach ($forms as $form) {
            $exdat['form_key'] = $form->form_key ? $form->form_key : '';
            $exdat['options'] = $form->options ? unserialize($form->options) : [];
            $exdat['status'] = $form->status ? $form->status : 'published';
            $exdat['settings'] = $form->settings ? unserialize($form->settings) : [];
            $exdat['styles'] = $form->styles ? unserialize($form->styles) : [];
            $exdat['created_at'] = $form->created_at ? $form->created_at : '';
            $fields = HashFormFields::get_form_fields($form->id);
            $exfield = array();
            foreach ($fields as $field) {
                $efield = array();
                $efield['name'] = $field->name;
                $efield['description'] = $field->description;
                $efield['type'] = $field->type;
                $efield['default_value'] = $field->default_value;
                $efield['options'] = $field->options;
                $efield['field_order'] = absint($field->field_order);
                $efield['required'] = absint($field->required);
                $efield['field_options'] = $field->field_options;
                $exfield[] = $efield;
            }
            $exdat['field'] = $exfield;

            ignore_user_abort(true);

            nocache_headers();
            header('Content-Type: application/json; charset=utf-8');
            header('Content-Disposition: attachment; filename=hf-' . $id . '-' . date('m-d-Y') . '.json');
            header("Expires: 0");

            echo wp_json_encode($exdat);
            exit;
        }
    }

    public function process_settings_import() {
        if (!current_user_can('manage_options'))
            return;

        $form_id = HashFormHelper::get_post('hashform_form_id', 'absint');

        if ('import_form' != HashFormHelper::get_post('hashform_imex_action') || !$form_id)
            return;

        if (!wp_verify_nonce(HashFormHelper::get_post('hashform_imex_import_nonce'), 'hashform_imex_import_nonce'))
            return;

        global $wpdb;

        $filename = sanitize_text_field(wp_unslash($_FILES['hashform_import_file']['name']));
        $extension = explode('.', $filename);
        $extension = end($extension);

        if ($extension != 'json') {
            wp_die(esc_html__('Please upload a valid .json file'));
        }

        $hashform_import_file = sanitize_text_field($_FILES['hashform_import_file']['tmp_name']);

        if (empty($hashform_import_file)) {
            wp_die(esc_html__('Please upload a file to import'));
        }

        // Retrieve the settings from the file and convert the json object to an array.
        $imdat = json_decode(file_get_contents($hashform_import_file), true);

        $options = HashFormHelper::recursive_parse_args($imdat['options'], HashFormHelper::get_form_options_default());
        $options = HashFormHelper::sanitize_array($options, HashFormHelper::get_form_options_sanitize_rules());

        $settings = HashFormHelper::recursive_parse_args($imdat['settings'], HashFormHelper::get_form_settings_default());
        $settings = HashFormHelper::sanitize_array($settings, HashFormHelper::get_form_settings_sanitize_rules());

        $styles = HashFormHelper::recursive_parse_args($imdat['styles'], array('form_style' => 'default-style', 'form_style_template' => ''));
        $styles = HashFormHelper::sanitize_array($styles, HashFormHelper::get_form_styles_sanitize_rules());

        $form = array(
            'options' => serialize($options),
            'status' => esc_html($imdat['status']),
            'settings' => serialize($settings),
            'styles' => serialize($styles),
            'created_at' => gmdate('Y-m-d H:i:s', strtotime(esc_html($imdat['created_at']))),
        );

        if (empty($imdat['created_at'])) {
            $form['created_at'] = current_time('mysql');
        }

        $wpdb->update($wpdb->base_prefix . 'hashform_forms', $form, array('id' => $form_id));
        $query = $wpdb->prepare("DELETE FROM {$wpdb->base_prefix}hashform_fields WHERE form_id=%d", $form_id);
        $wpdb->query($query);

        foreach ($imdat['field'] as $field) {
            HashFormFields::create_row(array(
                'name' => $field['name'],
                'description' => $field['description'],
                'type' => $field['type'],
                'default_value' => $field['default_value'],
                'options' => $field['options'],
                'field_order' => $field['field_order'],
                'form_id' => absint($form_id),
                'required' => $field['required'],
                'field_options' => $field['field_options']
            ));
        }

        $_SESSION['hashform_message'] = esc_html__('Settings Imported Successfully', 'hash-form');
    }

}

new HashFormImportExport();
