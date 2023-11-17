<?php
defined('ABSPATH') || die();

class HashBuilder {

    public function __construct() {
        add_action('init', array($this, 'session_init'));

        add_action('admin_menu', array($this, 'add_menu'), 1);
        add_filter('set-screen-option', array($this, 'set_screen_option'), 10, 3);

        add_action('wp_ajax_hashform_update_form', array($this, 'update_form'));
        add_action('wp_ajax_hashform_create_form', array($this, 'create_form'));
        add_action('wp_ajax_hashform_save_form_settings', array($this, 'save_form_settings'));
        add_action('wp_ajax_hashform_save_form_style', array($this, 'save_form_style'));
        add_action('wp_ajax_hashform_add_more_condition_block', array($this, 'add_more_condition_block'));
        add_action('admin_footer', array($this, 'init_overlay_html'));
    }

    public function session_init() {
        if (!session_id() && !headers_sent()) {
            session_start(); //starts session if already not started
            session_write_close();
        }
    }

    public function add_menu() {
        global $hashform_listing_page;
        add_menu_page('Hash Form', 'Hash Form', 'manage_options', 'hashform', array($this, 'route'), 'dashicons-format-aside', 29);
        $hashform_listing_page = add_submenu_page('hashform', esc_html__('Forms', 'hash-form'), esc_html__('Forms', 'hash-form'), 'manage_options', 'hashform', array($this, 'route'));
        add_action("load-$hashform_listing_page", array($this, 'listing_page_screen_options'));
    }

    public function route() {
        $action_key = isset($_GET['hashform_action']) ? 'hashform_action' : 'action';
        $action = htmlspecialchars_decode(HashHelper::get_var($action_key, 'sanitize_text_field', ''));

        if (isset($_GET['delete_all'])) {
            $action = 'delete_all';
        }

        switch ($action) {
            case 'edit':
            case 'trash':
            case 'destroy':
            case 'untrash':
            case 'delete_all':
            case 'duplicate':
            case 'settings':
            case 'style':
                return self::$action();

            default:

                if (strpos($action, 'bulk_') === 0) {
                    self::bulk_actions();
                    return;
                }

                self::display_forms_list();
                return;
        }
    }

    public static function display_message($message, $class) {
        if ('' !== trim($message)) {
            echo '<div id="message" class="' . esc_attr($class) . ' notice is-dismissible">';
            echo '<p>' . wp_kses_post($message) . '</p>';
            echo '</div>';
        }
    }

    public static function display_forms_list($message = '', $class = 'updated') {
        ?>
        <div class="hf-content">
            <div class="hf-form-list-wrap wrap">
                <div class="hf-add-new-form">
                    <a href="#" class="button hf-trigger-modal"><?php echo esc_html__('Add New', 'hash-form'); ?></a>
                </div>

                <?php
                self::display_message($message, $class);
                $form_table = new HashFormListing();
                $form_status = HashHelper::get_var('status', 'sanitize_title', 'published');
                $form_table->views();
                ?>
                <form id="posts-filter" method="get">
                    <input type="hidden" name="page" value="<?php echo esc_attr(HashHelper::get_var('page', 'sanitize_title')); ?>" />
                    <input type="hidden" name="status" value="<?php echo esc_attr($form_status); ?>" />
                    <?php
                    $form_table->prepare_items();
                    $form_table->search_box('Search', 'search');
                    $form_table->display();
                    ?>
                </form>
            </div>
        </div>
        <?php
    }

    public function create_form() {
        if (!current_user_can('manage_options'))
            return;

        check_ajax_referer('hashform_ajax', 'nonce');

        $name = HashHelper::get_post('name');
        $new_values = array(
            'name' => $name,
            'description' => '',
            'form_key' => $name,
            'options' => array(
                'submit_value' => __('Submit', 'hash-form'),
                'show_description' => 'on',
                'show_title' => 'on',
            ),
            'settings' => self::default_form_values($name)
        );
        $form_id = self::create($new_values);
        $response = array('redirect' => admin_url('admin.php?page=hashform&hashform_action=edit&id=' . $form_id));
        echo wp_json_encode($response);
        wp_die();
    }

    public static function create($values) {
        global $wpdb;
        $new_values = array(
            'form_key' => HashHelper::get_unique_key('hashform_forms', 'form_key'),
            'name' => $values['name'],
            'description' => $values['description'],
            'status' => isset($values['status']) ? $values['status'] : 'published',
            'created_at' => isset($values['created_at']) ? $values['created_at'] : current_time('mysql'),
            'options' => isset($values['options']) && is_array($values['options']) ? serialize($values['options']) : null,
            'settings' => isset($values['settings']) && is_array($values['settings']) ? serialize($values['settings']) : null,
            'styles' => isset($values['styles']) && is_array($values['styles']) ? serialize($values['styles']) : null
        );
        $wpdb->insert($wpdb->prefix . 'hashform_forms', $new_values);
        $id = $wpdb->insert_id;
        return $id;
    }

    public function update_form() {
        if (!current_user_can('manage_options'))
            return;

        check_ajax_referer('hashform_ajax', 'nonce');

        $fields_array = $settings_array = array();

        $fields = isset($_POST['hashform_fields']) ? htmlspecialchars_decode(nl2br(str_replace('&quot;', '"', wp_unslash($_POST['hashform_fields'])))) : '';
        if ($fields) {
            $fields_array = HashHelper::parse_json_array($fields);
        }

        $settings = isset($_POST['hashform_settings']) ? htmlspecialchars_decode(nl2br(str_replace('&quot;', '"', wp_unslash($_POST['hashform_settings'])))) : '';
        if ($settings) {
            $settings_array = HashHelper::parse_json_array($settings);
        }

        self::update($fields_array, $settings_array);
    }

    public static function update($fields_values, $settings_values) {
        $id = isset($fields_values['id']) ? absint($fields_values['id']) : '';

        self::update_form_settings($id, $settings_values);
        self::update_form_fields($id, $fields_values);

        $message = '<span class="mdi mdi-check-circle"></span>' . __('Form was successfully updated.', 'hash-form');

        if (defined('DOING_AJAX')) {
            wp_die(wp_kses($message, array('a' => array(), 'span' => array())));
        }
    }

    public static function update_form_settings($id, $args) {
        global $wpdb;
        $name = $args['title'];
        $description = $args['description'];

        $args['show_title'] = isset($args['show_title']) ? $args['show_title'] : 'off';
        $args['show_description'] = isset($args['show_description']) ? $args['show_description'] : 'off';

        $query_results = $wpdb->update($wpdb->prefix . 'hashform_forms', array(
            'name' => $name,
            'description' => $description,
            'options' => maybe_serialize($args)
                ), array('id' => $id));
        return $query_results;
    }

    public static function update_form_fields($id, $values) {
        global $wpdb;
        $all_fields = HashFields::get_form_fields($id);

        foreach ($all_fields as $fid) {
            if ($fid->id && ( isset($values['hf-form-submitted']) && in_array($fid->id, $values['hf-form-submitted']) )) {
                $values['edited'][] = $fid->id;
            }
            $field_array[$fid->id] = $fid;
        }

        if (isset($values['edited'])) {
            foreach ($values['edited'] as $field_id) {
                if (isset($field_array[$field_id])) {
                    $field = $field_array[$field_id];
                } else {
                    $field = HashFields::get_field_vars($field_id);
                }
                if (!$field)
                    continue;

                //updating the fields
                $field_obj = HashFields::get_field_object($field);
                $update_options = $field_obj->get_default_field_options();
                foreach ($update_options as $opt => $default) {
                    $field->field_options[$opt] = isset($values['field_options'][$opt . '_' . $field_id]) ? $values['field_options'][$opt . '_' . $field_id] : $default;
                }

                $new_field = array(
                    'field_options' => $field->field_options,
                    'default_value' => isset($values['default_value_' . $field_id]) ? $values['default_value_' . $field_id] : '',
                );

                $field_cols = array(
                    'field_order' => 0,
                    'field_key' => '',
                    'required' => false,
                    'type' => '',
                    'description' => '',
                    'options' => '',
                    'name' => '',
                );

                foreach ($field_cols as $col => $default) {
                    $default = ( $default === '' ) ? $field->{$col} : $default;
                    $new_field[$col] = isset($values['field_options'][$col . '_' . $field->id]) ? $values['field_options'][$col . '_' . $field->id] : $default;
                }

                if (is_array($new_field['options']) && isset($new_field['options']['000']))
                    unset($new_field['options']['000']);

                self::update_fields($field_id, $new_field);
            }
        }
    }

    public static function update_fields($id, $values) {
        global $wpdb;
        $id = absint($id);

        if (isset($values['required']))
            $values['required'] = (int) $values['required'];

        $values['field_options'] = serialize($values['field_options']);
        $values['options'] = serialize($values['options']);
        $values['default_value'] = serialize($values['default_value']);

        $query_results = $wpdb->update($wpdb->prefix . 'hashform_fields', $values, array('id' => $id));

        return $query_results;
    }

    public static function edit() {
        require( HASH_FORM_PATH . '/admin/forms/build/edit.php' );
    }

    public static function settings() {
        require HASH_FORM_PATH . 'admin/forms/settings/settings.php';
    }

    public static function style() {
        require HASH_FORM_PATH . '/admin/forms/style/style.php';
    }

    public function listing_page_screen_options() {

        global $hashform_listing_page;

        $screen = get_current_screen();

        // get out of here if we are not on our settings page
        if (!is_object($screen) || $screen->id != $hashform_listing_page)
            return;

        $args = array(
            'label' => __('Forms per page', 'hash-form'),
            'default' => 10,
            'option' => 'forms_per_page'
        );
        add_screen_option('per_page', $args);

        new HashFormListing();
    }

    public function set_screen_option($status, $option, $value) {
        if ('forms_per_page' == $option)
            return $value;
    }

    public static function trash() {
        self::change_form_status('trash');
    }

    public static function untrash() {
        self::change_form_status('untrash');
    }

    public static function change_form_status($status) {
        $available_status = array(
            'untrash' => array('new_status' => 'published'),
            'trash' => array('new_status' => 'trash'),
        );

        if (!isset($available_status[$status])) {
            return;
        }

        $id = HashHelper::get_var('id', 'absint');
        check_admin_referer($status . '_form_' . $id);

        $count = 0;
        if (self::set_status($id, $available_status[$status]['new_status'])) {
            $count++;
        }

        $available_status['untrash']['message'] = sprintf(_n('%1$s form restored from the Trash.', '%1$s forms restored from the Trash.', $count, 'hash-form'), $count);
        $available_status['trash']['message'] = sprintf(_n('%1$s form moved to the Trash. %2$sUndo%3$s', '%1$s forms moved to the Trash. %2$sUndo%3$s', $count, 'hash-form'), $count, '<a href="' . esc_url(wp_nonce_url('?page=hashform&hashform_action=untrash&id=' . $id, 'untrash_form_' . $id)) . '">', '</a>');
        $message = $available_status[$status]['message'];

        self::display_forms_list($message);
    }

    public static function set_status($id, $status) {
        $statuses = array('published', 'trash');
        if (!in_array($status, $statuses))
            return false;

        global $wpdb;

        if (is_array($id)) {
            $id = implode(', ', $id);
            $query_results = $wpdb->query($wpdb->prepare("UPDATE {$wpdb->prefix}hashform_forms SET status=%s WHERE id IN ({$id})", $status));
        } else {
            $query_results = $wpdb->update($wpdb->prefix . 'hashform_forms', array('status' => $status), array('id' => $id));
        }

        return $query_results;
    }

    public static function delete_all() {
        $count = self::delete();
        $message = sprintf(_n('%1$s form permanently deleted.', '%1$s forms permanently deleted.', $count, 'hash-form'), $count);
        self::display_forms_list($message);
    }

    public static function delete() {
        global $wpdb;
        $count = 0;
        $trash_forms = $wpdb->get_results("SELECT id FROM {$wpdb->prefix}hashform_forms WHERE status='trash'");
        if (!$trash_forms) {
            return 0;
        }

        foreach ($trash_forms as $form) {
            self::destroy_form($form->id);
            $count ++;
        }
        return $count;
    }

    public static function destroy() {
        $id = HashHelper::get_var('id', 'absint');
        check_admin_referer('destroy_form_' . $id);
        $count = 0;
        if (self::destroy_form($id)) {
            $count ++;
        }
        $message = sprintf(_n('%1$s Form Permanently Deleted', '%1$s Forms Permanently Deleted', $count, 'hash-form'), $count);
        self::display_forms_list($message);
    }

    public static function bulk_actions() {
        $message = self::process_bulk_actions();
        self::display_forms_list($message);
    }

    public static function process_bulk_actions() {
        if (!$_REQUEST)
            return;

        $bulkaction = HashHelper::get_var('action', 'sanitize_text_field');


        if ($bulkaction == - 1) {
            $bulkaction = HashHelper::get_var('action2', 'sanitize_title');
        }

        if (!empty($bulkaction) && strpos($bulkaction, 'bulk_') === 0) {
            $bulkaction = str_replace('bulk_', '', $bulkaction);
        }

        $ids = HashHelper::get_var('form_id', 'sanitize_text_field');

        if (empty($ids)) {
            $error = __('No forms were specified', 'hash-form');
            return $error;
        }

        if (!is_array($ids)) {
            $ids = explode(',', $ids);
        }

        switch ($bulkaction) {
            case 'delete':
                $message = self::bulk_destroy($ids);
                break;
            case 'trash':
                $message = self::bulk_trash($ids);
                break;
            case 'untrash':
                $message = self::bulk_untrash($ids);
        }

        if (isset($message) && !empty($message)) {
            return $message;
        }
    }

    public static function bulk_trash($ids) {
        $count = self::set_status($ids, 'trash');
        if (!$count) {
            return '';
        }
        return sprintf(_n('%1$s form moved to the Trash. %2$sUndo%3$s', '%1$s forms moved to the Trash. %2$sUndo%3$s', $count, 'hash-form'), $count, '<a href="' . esc_url(wp_nonce_url('?page=hashform&action=bulk_untrash&status=published&form_id=' . implode(',', $ids), 'bulk-toplevel_page_hashform')) . '">', '</a>');
    }

    public static function bulk_untrash($ids) {
        $count = self::set_status($ids, 'published');
        if (!$count) {
            return '';
        }
        return sprintf(_n('%1$s form restored from the Trash.', '%1$s forms restored from the Trash.', $count, 'hash-form'), $count);
    }

    public static function bulk_destroy($ids) {
        $count = 0;
        foreach ($ids as $id) {
            $form = self::destroy_form($id);
            if ($form) {
                $count ++;
            }
        }
        $message = sprintf(_n('%1$s form permanently deleted.', '%1$s forms permanently deleted.', $count, 'hash-form'), $count);
        return $message;
    }

    public static function destroy_form($id) {
        global $wpdb;
        $form = self::get_form_vars($id);
        if (!$form) {
            return false;
        }
        $id = $form->id;
        $entries = $wpdb->get_col($wpdb->prepare("SELECT id FROM {$wpdb->prefix}hashform_entries WHERE form_id=%d", $id));

        foreach ($entries as $entry_id) {
            HashEntry::destroy_entry($entry_id);
        }

        $wpdb->query($wpdb->prepare('DELETE hfi FROM ' . $wpdb->prefix . 'hashform_fields AS hfi LEFT JOIN ' . $wpdb->prefix . 'hashform_forms hfm ON (hfi.form_id = hfm.id) WHERE hfi.form_id=%d', $id));

        $results = $wpdb->query($wpdb->prepare('DELETE FROM ' . $wpdb->prefix . 'hashform_forms WHERE id=%d', $id));
        return $results;
    }

    public static function duplicate() {
        global $wpdb;
        $message = '';
        $nonce = HashHelper::get_var('_wpnonce');

        if (!wp_verify_nonce($nonce)) {
            wp_die(esc_html__('Error ! Refresh the page and try again.', 'hash-form'));
        }
        $id = HashHelper::get_var('id', 'absint');
        $values = self::get_form_vars($id);

        if (!$values)
            return false;

        $new_values = array(
            'form_key' => HashHelper::get_unique_key('hashform_forms', 'form_key'),
            'name' => $values->name . ' - Copy',
            'description' => $values->description,
            'status' => $values->status ? $values->status : 'published',
            'created_at' => current_time('mysql'),
            'options' => serialize($values->options),
            'settings' => serialize($values->settings)
        );

        $query_results = $wpdb->insert($wpdb->prefix . 'hashform_forms', $new_values);

        if ($query_results) {
            $form_id = $wpdb->insert_id;
            HashFields::duplicate_fields($id, $form_id);
        }

        if ($form_id) {
            $message = __('Form was Successfully Copied', 'hash-form');
            $class = 'updated';
        } else {
            $message = __('Error! Form Can not be Copied', 'hash-form');
            $class = 'error';
        }

        self::display_forms_list($message, $class);
    }

    public static function default_form_values($name = '') {
        return array(
            'email_to' => '[admin_email]',
            'email_from' => '[admin_email]',
            'reply_to_email' => '',
            'email_from_name' => get_bloginfo('name'),
            'email_subject' => __('New Entry: ', 'hash-form') . $name,
            'email_message' => '#form_details',
            'enable_ar' => 'off',
            'from_ar' => '[admin_email]',
            'from_ar_name' => get_bloginfo('name'),
            'reply_to_ar' => '',
            'email_subject_ar' => __('Entry Submitted: ', 'hash-form') . $name,
            'email_message_ar' => 'Thank you for sending email. We will get back to you as soon as posible.',
            'confirmation_type' => 'show_message',
            'confirmation_message' => __('Form Submitted Successfully', 'hash-form'),
            'error_message' => __('Sorry, An error Occurred! Your form cannot be submitted.', 'hash-form'),
            'show_page_id' => '',
            'redirect_url_page' => '',
        );
    }

    public static function get_admin_header($atts = array()) {
        $class = isset($atts['class']) ? $atts['class'] : '';
        $form = $atts['form'];
        $form_title = $form->name;
        ?>
        <div id="hf-header" class="<?php echo esc_attr($class); ?>">
            <h4><span class="mdi mdi-form-select"></span><?php echo esc_html($form_title); ?></h4>
            <?php
            self::get_form_nav($form);
            ?>
            <button class="hashform-ajax-udpate-button" type="button" id="hf-update-button" ><span class="mdi mdi-check-circle-outline"></span><?php esc_html_e('Update', 'hash-form'); ?></button>
            <button class="hf-embed-button" type="button"><span class="mdi mdi-code-brackets"></span><?php esc_html_e('Embed', 'hash-form'); ?></button>
            <div class="hf-preview-button"><a href="<?php echo esc_url(admin_url('admin-ajax.php?action=hashform_preview&form=' . $form->id)); ?>" target="_blank"><span class="mdi mdi-eye-outline"></span><?php esc_html_e('Preview', 'hash-form'); ?></a></div>

            <div class="hashform-close">
                <a href="<?php echo esc_url(admin_url('admin.php?page=hashform')); ?>" aria-label="<?php esc_attr_e('Close', 'hash-form'); ?>">
                    <span class="mdi mdi-window-close"></span>
                </a>
            </div>
        </div>
        <?php
    }

    public static function get_form_nav($form) {
        if (!$form) {
            return;
        }
        $id = $form->id;
        $nav_items = self::get_form_nav_items($id);
        ?>
        <ul class="hf-main-nav">
            <?php foreach ($nav_items as $nav_item) { ?>
                <li>
                    <a href="<?php echo esc_url($nav_item['link']); ?>" <?php
                    echo self::highlight_current_page($nav_item['page'], $nav_item['current']);
                    ?>>
                           <?php echo esc_html($nav_item['label']); ?>
                    </a>
                </li>
            <?php } ?>
        </ul>
        <?php
    }

    public static function get_form_nav_items($id) {
        $nav_items = array(
            array(
                'link' => admin_url('admin.php?page=hashform&hashform_action=edit&id=' . absint($id)),
                'label' => __('Build', 'hash-form'),
                'current' => array('edit', 'new', 'duplicate'),
                'page' => 'hashform'
            ),
            array(
                'link' => admin_url('admin.php?page=hashform&hashform_action=settings&id=' . absint($id)),
                'label' => __('Settings', 'hash-form'),
                'current' => array('settings'),
                'page' => 'hashform'
            ),
            array(
                'link' => admin_url('admin.php?page=hashform&hashform_action=style&id=' . absint($id)),
                'label' => __('Style', 'hash-form'),
                'current' => array('style'),
                'page' => 'hashform'
            ),
            array(
                'link' => admin_url('admin.php?page=hashform-entries&form_id=' . absint($id)),
                'label' => __('Entries', 'hash-form'),
                'current' => array(),
                'page' => 'hashform-entries'
            ),
        );
        return $nav_items;
    }

    public static function highlight_current_page($page, $action = array()) {
        $current_page = HashHelper::get_var('page');
        $hashform_action = HashHelper::get_var('hashform_action');

        if (($page == $current_page) && (!empty($hashform_action) && in_array($hashform_action, $action)))
            return ' class="hf-active-nav"';
    }

    public static function get_all_forms() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hashform_forms';
        $results = $wpdb->get_results("SELECT * FROM {$table_name}");
        return $results;
    }

    public static function get_form_vars($id) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'hashform_forms';

        $results = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$table_name} WHERE id=%d", $id));

        if (!$results)
            return;

        foreach ($results as $key => $value) {
            $results->$key = maybe_unserialize($value);
        }

        return $results;
    }

    public function init_overlay_html() {
        $plugin_path = HASH_FORM_PATH;
        if (HashHelper::is_form_listing_page()) {
            include $plugin_path . 'admin/forms/new-form-overlay.php';
        }
        if (HashHelper::is_form_builder_page()) {
            include $plugin_path . 'admin/forms/shortcode-overlay.php';
        }
    }

    public function save_form_settings() {
        if (!current_user_can('manage_options'))
            return;

        $json_vars = htmlspecialchars_decode(nl2br(str_replace('&quot;', '"', wp_unslash($_POST['hashform_compact_fields']))));
        $vars = HashHelper::parse_json_array($json_vars);
        $email_to_array = array();
        foreach ($vars['email_to'] as $row) {
            $email_to_val = trim($row);
            if ($email_to_val) {
                $email_to_array[] = $email_to_val;
            }
        }
        $vars['email_to'] = implode(',', $email_to_array);
        $id = isset($vars['id']) ? absint($vars['id']) : HashHelper::get_var('id', 'absint');
        unset($vars['id'], $vars['process_form'], $vars['_wp_http_referer']);

        self::update_settings($id, $vars);
        $message = '<span class="mdi mdi-check-circle"></span>' . __('Form was successfully updated.', 'hash-form');
        wp_die(wp_kses_post($message));
    }

    public function save_form_style() {
        if (!current_user_can('manage_options'))
            return;

        $json_vars = htmlspecialchars_decode(nl2br(str_replace('&quot;', '"', wp_unslash($_POST['hashform_compact_fields']))));
        $vars = HashHelper::parse_json_array($json_vars);
        $id = isset($vars['id']) ? absint($vars['id']) : HashHelper::get_var('id', 'absint');

        self::update_style($id, $vars);
        $message = '<span class="mdi mdi-check-circle"></span>' . __('Form was successfully updated.', 'hash-form');
        wp_die(wp_kses_post($message));
    }

    public static function update_settings($id, $values) {
        global $wpdb;
        $new_values = array('settings' => serialize($values));
        if (!empty($new_values)) {
            $query_results = $wpdb->update($wpdb->prefix . 'hashform_forms', $new_values, array('id' => $id));
        }
        return $query_results;
    }

    public static function update_style($id, $value) {
        global $wpdb;
        $form_template = $value['form_style_template'];
        unset($value['id'], $value['form_style_template']);
        $new_values = array(
            'template_id' => $form_template,
            'styles' => serialize($value)
        );
        if (!empty($new_values)) {
            $query_results = $wpdb->update($wpdb->prefix . 'hashform_forms', $new_values, array('id' => $id));
        }
        return $query_results;
    }


    public function add_more_condition_block() {
        $form_id = HashHelper::get_post('form_id', 'absint', 0);
        $fields = HashFields::get_form_fields($form_id);
        ?>
        <div class="hf-condition-repeater-block">
            <select name="condition_action[]" required>
                <option value="show">Show</option>
                <option value="hide">Hide</option>
            </select>
            <select name="compare_from[]" required>
                <option value="">Select Field</option>
                <?php
                foreach ($fields as $field) {
                    if (!($field->type == 'heading' || $field->type == 'paragraph' || $field->type == 'separator' || $field->type == 'spacer' || $field->type == 'image' || $field->type == 'captcha')) {
                        ?>
                        <option value="<?php echo esc_attr($field->id); ?>"><?php echo esc_html($field->name) . ' (ID: ' . esc_attr($field->id) . ')'; ?></option>
                        <?php
                    }
                }
                ?>
            </select>
            <span class="hf-condition-seperator">if</span>
            <select name="compare_to[]" required>
                <option value="">Select Field</option>
                <?php
                foreach ($fields as $field) {
                    if (!($field->type == 'heading' || $field->type == 'paragraph' || $field->type == 'separator' || $field->type == 'spacer' || $field->type == 'image' || $field->type == 'captcha' || $field->type == 'name' || $field->type == 'address')) {
                        ?>
                        <option value="<?php echo esc_attr($field->id); ?>"><?php echo esc_html($field->name) . ' (ID: ' . esc_attr($field->id) . ')'; ?></option>
                        <?php
                    }
                }
                ?>
            </select>
            <select name="compare_condition[]" required>
                <option value="equal">Equals to</option>
                <option value="not_equal">Not Equals to</option>
                <option value="greater_than">Greater Than</option>
                <option value="greater_than_or_equal">Greater Than Or Equals to</option>
                <option value="less_than">Less Than</option>
                <option value="less_than_or_equal">Less Than Or Equals to</option>
                <option value="is_like">Is Like</option>
                <option value="is_not_like">Is Not Like</option>
            </select>
            <input type="text" name="compare_value[]" required/>
            <span class="hf-condition-remove mdi mdi-close"></span>
        </div>
        <?php
        die();
    }

    public static function get_show_hide_conditions($id) {
        $form = HashBuilder::get_form_vars($id);
        $settings = $form->settings ? $form->settings : array();
        $conditions = array();
        if(isset($settings['condition_action']) && $settings['condition_action']) {
            foreach($settings['condition_action'] as $key=>$row) {
                $condition = array(
                    'condition_action' => $settings['condition_action'][$key],
                    'compare_from' => $settings['compare_from'][$key],
                    'compare_to' => $settings['compare_to'][$key],
                    'compare_condition' => $settings['compare_condition'][$key],
                    'compare_value' => $settings['compare_value'][$key],
                );
                $conditions[] = $condition;
            }
        }
        return $conditions;
    }

}

new HashBuilder();
