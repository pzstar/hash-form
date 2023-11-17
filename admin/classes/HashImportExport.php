<?php

defined('ABSPATH') || die();

class HashImportExport {

    public function __construct() {
        // Process a settings export that generates a .json file of the form settings
        add_action('admin_init', array($this, 'process_settings_export'));
        // Process a settings import from a json file
        add_action('admin_init', array($this, 'process_settings_import'));
    }

    public function process_settings_export() {
        if (empty($_POST['hashform_imex_action']) || 'export_form' != $_POST['hashform_imex_action'] || empty($_POST['hashform_form_id']))
            return;

        if (!wp_verify_nonce($_POST['hashform_imex_export_nonce'], 'hashform_imex_export_nonce'))
            return;
        $id = absint($_POST['hashform_form_id']);
        global $wpdb;

        $query = $wpdb->prepare("SELECT * FROM {$wpdb->prefix}hashform_forms WHERE id=%d", $id);
        $forms = $wpdb->get_results($query);

        foreach ($forms as $form) {
            $exdat['form_key'] = $form->form_key ? $form->form_key : '';
            $exdat['options'] = $form->options ? unserialize($form->options) : [];
            $exdat['status'] = $form->status ? $form->status : 'published';
            $exdat['settings'] = $form->settings ? unserialize($form->settings) : [];
            $exdat['styles'] = $form->styles ? unserialize($form->styles) : [];
            $exdat['created_at'] = $form->created_at ? $form->created_at : '';
            $fields = HashFields::get_form_fields($form->id);
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

        if (empty($_POST['hashform_imex_action']) || 'import_form' != $_POST['hashform_imex_action'] || empty($_POST['hashform_form_id']))
            return;

        if (!wp_verify_nonce($_POST['hashform_imex_import_nonce'], 'hashform_imex_import_nonce'))
            return;
        global $wpdb;

        $filename = $_FILES['hashform_import_file']['name'];
        $extension = explode('.', $filename);
        $extension = end($extension);

        if ($extension != 'json') {
            wp_die(__('Please upload a valid .json file'));
        }

        $hashform_import_file = $_FILES['hashform_import_file']['tmp_name'];

        if (empty($hashform_import_file)) {
            wp_die(__('Please upload a file to import'));
        }

        // Retrieve the settings from the file and convert the json object to an array.
        $imdat = json_decode(file_get_contents($hashform_import_file), true);

        $form = array(
            'options' => serialize($imdat['options']),
            'status' => (string) $imdat['status'],
            'settings' => serialize($imdat['settings']),
            'styles' => serialize($imdat['styles']),
            'created_at' => gmdate('Y-m-d H:i:s', strtotime((string) $imdat['created_at'])),
        );
        if (empty($imdat['created_at'])) {
            $form['created_at'] = current_time('mysql');
        }
        $form_id = wp_unslash($_POST['hashform_form_id']);
        $wpdb->update($wpdb->prefix . 'hashform_forms', $form, array('id' => $form_id));
        $wpdb->query($wpdb->prepare('DELETE FROM ' . $wpdb->prefix . 'hashform_fields WHERE form_id=%d', $form_id));

        foreach ($imdat['field'] as $field) {
            HashFields::create_row(array(
                'name' => (string) $field['name'],
                'description' => (string) $field['description'],
                'type' => (string) $field['type'],
                'default_value' => $field['default_value'],
                'options' => serialize($field['options']),
                'field_order' => (int) $field['field_order'],
                'form_id' => (int) $form_id,
                'required' => (int) $field['required'],
                'field_options' => serialize($field['field_options']),
                '_nounce' => wp_create_nonce('hashform_ajax')
            ));
        }

        $_SESSION['hashform_message'] = __('Settings Imported Successfully', 'hash-form');
    }

}

new HashImportExport();
