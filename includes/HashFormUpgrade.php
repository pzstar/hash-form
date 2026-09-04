<?php
defined('ABSPATH') || die();

/**
 * The Upgrade to Pro screen.
 *
 * Only registered while Pro is not installed: once it is, the menu entry would
 * be an advert for something the site already has, and the comparison would
 * describe a choice already made.
 */
class HashFormUpgrade {

    const PAGE_SLUG = 'hashform-upgrade';
    const PRO_URL = 'https://hashthemes.com/plugin/hash-form-pro/';

    public function __construct() {
        add_action('admin_menu', array($this, 'menu'), 60);
        add_action('in_admin_header', array($this, 'header'));
        add_action('admin_head', array($this, 'menu_style'));
    }

    /**
     * Whether Pro is here.
     *
     * The constant rather than the plugin file, so a site running Pro from an
     * unusual path is still recognised.
     */
    public static function pro_active() {
        return defined('HASH_FORM_PRO_VERSION');
    }

    public static function is_screen() {
        return is_admin() && self::PAGE_SLUG === HashFormHelper::get_var('page', 'sanitize_title');
    }

    public function menu() {
        if (self::pro_active()) {
            return;
        }

        add_submenu_page(
                'hashform',
                esc_html__('Upgrade to Pro', 'hash-form'),
                esc_html__('Upgrade to Pro', 'hash-form'),
                'hashform_view_forms',
                self::PAGE_SLUG,
                array($this, 'render')
        );
    }

    /**
     * The menu entry is the one thing on this screen meant to catch the eye.
     */
    public function menu_style() {
        if (self::pro_active()) {
            return;
        }
        ?>
        <style>
            #adminmenu .toplevel_page_hashform a[href$="page=hashform-upgrade"] {
                color: #ffb976;
                font-weight: 600;
            }
        </style>
        <?php
    }

    /**
     * The same bar every other screen carries.
     */
    public function header() {
        if (!self::is_screen()) {
            return;
        }

        HashFormHelper::render_list_header(array(
            'title' => esc_html__('Upgrade to Pro', 'hash-form'),
            'actions' => array(
                array(
                    'label' => esc_html__('Get Hash Form Pro', 'hash-form'),
                    'url' => self::PRO_URL,
                    'class' => 'hf-upgrade-cta',
                ),
            ),
        ));
    }

    public function render() {
        if (!HashFormCapabilities::user_can('hashform_view_forms')) {
            wp_die(esc_html__('You do not have permission to do that.', 'hash-form'));
        }

        include HASHFORM_PATH . 'admin/upgrade/compare.php';
    }

}

new HashFormUpgrade();
