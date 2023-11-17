<?php

defined('ABSPATH') || die();

class HashLoader {

    public function __construct() {
        add_action('init', array($this, 'load_plugin_textdomain'));
        add_filter('admin_body_class', array($this, 'add_admin_class'), 999);
        add_action('admin_enqueue_scripts', array($this, 'admin_init'), 11);
        add_action('wp_enqueue_scripts', array($this, 'enqueue_styles'), 11);
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
    }

    public function load_plugin_textdomain() {
        load_plugin_textdomain('hash-form', false, basename(dirname(__FILE__)) . '/languages');
    }

    public static function add_admin_class($classes) {
        if (HashHelper::is_form_builder_page()) {
            $full_screen_on = self::get_full_screen_setting();
            if ($full_screen_on) {
                $classes .= ' is-fullscreen-mode';
                wp_enqueue_style('wp-edit-post'); // Load the CSS for .is-fullscreen-mode.
            }
        }
        return $classes;
    }

    private static function get_full_screen_setting() {
        global $wpdb;
        $meta_key = $wpdb->get_blog_prefix() . 'persisted_preferences';
        $prefs = get_user_meta(get_current_user_id(), $meta_key, true);
        if ($prefs && isset($prefs['core/edit-post']['fullscreenMode']))
            return $prefs['core/edit-post']['fullscreenMode'];
        return true;
    }

    public static function admin_init() {
        $page = HashHelper::get_var('page', 'sanitize_title');
        if (strpos($page, 'hashform') === 0) {
            wp_enqueue_script('hashform-builder', HASH_FORM_URL . 'js/builder.js', array('jquery', 'jquery-ui-core', 'jquery-ui-draggable', 'jquery-ui-droppable', 'jquery-ui-sortable', 'wp-i18n', 'wp-hooks', 'jquery-ui-dialog'), time(), true);
            wp_enqueue_script('hashform-backend', HASH_FORM_URL . 'js/backend.js', array('jquery', 'jquery-ui-core', 'jquery-ui-draggable', 'jquery-ui-droppable', 'jquery-ui-sortable', 'wp-i18n', 'wp-hooks', 'jquery-ui-dialog'), time(), true);
            wp_enqueue_style('hashform-icons', HASH_FORM_URL . 'fonts/hf-icons.css', array(), HASH_FORM_VERSION);

            wp_localize_script('hashform-backend', 'hashform_backend_js', array(
                'nonce' => wp_create_nonce('hashform_ajax'),
            ));
        }

        wp_enqueue_script('hashform-chosen', HASH_FORM_URL . '/js/chosen.jquery.js', array('jquery'), HASH_FORM_VERSION, true);
        wp_enqueue_script('hashform-select2', HASH_FORM_URL . '/js/select2.min.js', array('jquery'), HASH_FORM_VERSION, true);
        wp_enqueue_script('jquery-condition', HASH_FORM_URL . '/js/jquery-condition.js', array('jquery'), HASH_FORM_VERSION, true);
        wp_enqueue_script('wp-color-picker-alpha', HASH_FORM_URL . '/js/wp-color-picker-alpha.js', array('wp-color-picker'), HASH_FORM_VERSION, true);
        wp_enqueue_script('hashform-admin-settings', HASH_FORM_URL . '/js/admin-settings.js', array('jquery'), HASH_FORM_VERSION, true);

        wp_localize_script('hashform-admin-settings', 'hashform_admin_js_obj', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'ajax_nonce' => wp_create_nonce('hashform-ajax-nonce'),
            'installing_text' => esc_html__('Installing WP Mail SMTP', 'hash-form'),
            'activating_text' => esc_html__('Activating WP Mail SMTP', 'hash-form'),
            'error' => esc_html__('Error! Reload the page and try again.', 'hash-form'),
        ));

        wp_enqueue_style('wp-color-picker');
        wp_enqueue_style('materialdesignicons', HASH_FORM_URL . 'fonts/materialdesignicons.css', array(), HASH_FORM_VERSION);
        wp_enqueue_style('hashform-chosen', HASH_FORM_URL . '/css/chosen.css', array(), HASH_FORM_VERSION);
        wp_enqueue_style('hashform-select2', HASH_FORM_URL . '/css/select2.min.css', array(), HASH_FORM_VERSION);
        wp_enqueue_style('hashform-admin', HASH_FORM_URL . 'css/admin-style.css', array(), HASH_FORM_VERSION);
        wp_enqueue_style('hashform-admin-settings', HASH_FORM_URL . '/css/admin-settings.css', array(), HASH_FORM_VERSION);
        wp_enqueue_style('hashform-style', HASH_FORM_URL . '/css/style.css', array(), HASH_FORM_VERSION);

        $fonts_url = HashStyles::fonts_url();

        // Load Fonts if necessary.
        if ($fonts_url) {
            wp_enqueue_style('hashform-fonts', $fonts_url, array(), NULL);
        }
    }

    public static function enqueue_styles() {
        wp_enqueue_style('dashicons');
        wp_enqueue_style('jquery-timepicker', HASH_FORM_URL . 'css/jquery.timepicker.css', array(), HASH_FORM_VERSION);
        wp_enqueue_style('materialdesignicons', HASH_FORM_URL . 'fonts/materialdesignicons.css', array(), HASH_FORM_VERSION);
        wp_enqueue_style('hashform-style', HASH_FORM_URL . 'css/style.css', array(), HASH_FORM_VERSION);
        $fonts_url = HashStyles::fonts_url();

        if ($fonts_url) {
            wp_enqueue_style('hashform-fonts', $fonts_url, array(), NULL);
        }
    }

    public static function enqueue_scripts() {
        wp_enqueue_script('jquery-ui-slider');
        wp_enqueue_script('jquery-timepicker', HASH_FORM_URL . 'js/jquery.timepicker.min.js', array('jquery'), HASH_FORM_VERSION, true);
        wp_enqueue_script('frontend', HASH_FORM_URL . 'js/frontend.js', array('jquery', 'jquery-ui-datepicker', 'jquery-timepicker'), HASH_FORM_VERSION, true);
        wp_localize_script('frontend', 'hashform_vars', array(
            'ajaxurl' => admin_url('admin-ajax.php')
        ));
    }

}

new HashLoader();
