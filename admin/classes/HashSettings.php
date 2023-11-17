<?php
defined('ABSPATH') || die();

class HashSettings {

    public function __construct() {
        add_action('admin_menu', array($this, 'menu'), 45);

        add_action('wp_ajax_hashform_test_email_template', array($this, 'send_test_email'), 10, 0);
    }

    public function menu() {
        add_submenu_page('hashform', 'Hash Form | ' . __('Settings', 'hash-form'), __('Settings', 'hash-form'), 'manage_options', 'hashform-settings', array($this, 'route'));
    }

    public function route() {
        $action = HashHelper::get_post('hashform_action', 'sanitize_title');
        if ($action == 'process-form') {
            self::process_form();
        } else {
            self::display_form();
        }
    }

    public static function display_form() {
        $settings = self::get_settings();
        $sections = array(
            'captcha-settings' => array(
                'name' => __('Captcha', 'hash-form'),
                'icon' => 'mdi mdi-security',
            ),
            'email-settings' => array(
                'name' => __('Email Settings', 'hash-form'),
                'icon' => 'mdi mdi-email-multiple-outline'
            ),
        );
        $current = 'captcha-settings'
        ?>
        <div id="hf-settings-wrap" class="wrap">
            <form name="hashform_settings_form" method="post" action="?page=hashform-settings<?php echo esc_html($current ? '&amp;t=' . $current : '' ); ?>">
                <div class="hf-page-title">
                    <h3><?php esc_html_e('Settings', 'hash-form'); ?></h3>
                </div>
                <div class="hf-content"> 
                    <div class="hf-body">
                        <div class="hf-fields-sidebar">
                            <ul class="hf-settings-tab">
                                <?php foreach ($sections as $key => $section) { ?>
                                    <li class="<?php echo esc_attr($current === $key ? 'hf-active' : '' ); ?>">
                                        <a href="#hf-<?php echo esc_attr($key); ?>">
                                            <i class="<?php echo esc_attr($section['icon']); ?>"></i>
                                            <?php echo wp_kses_post($section['name']); ?>
                                        </a>
                                    </li>
                                <?php } ?>
                            </ul>
                        </div>

                        <div id="hf-form-panel">
                            <div class="hf-form-wrap">
                                <?php HashHelper::print_message(); ?>

                                <input type="hidden" name="hashform_action" value="process-form"/>
                                <?php
                                wp_nonce_field('hashform_process_form_nonce', 'process_form');
                                foreach ($sections as $key => $section) {
                                    ?>
                                    <div id="hf-<?php echo esc_attr($key); ?>" class="<?php echo ( $current === $key ) ? '' : 'hf-hidden'; ?>">
                                        <h3><?php echo esc_html($section['name']); ?></h3>
                                        <?php
                                        include( HASH_FORM_PATH . 'admin/settings/' . $key . '.php' );
                                        ?>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                    <div class="hf-footer">
                        <input class="button button-primary button-large" type="submit" value="<?php esc_attr_e('Update', 'hash-form'); ?>"/>
                    </div>
                </div>
            </form>
        </div>
        <?php
    }

    public static function process_form() {
        $process_form = HashHelper::get_post('process_form', 'sanitize_text_field');
        if (!wp_verify_nonce($process_form, 'hashform_process_form_nonce')) {
            wp_die(esc_html('Permission Denied', 'hash-form'));
        }

        $settings = wp_unslash($_POST);

        update_option('hashform_options', $settings);
        $_SESSION['hashform_message'] = esc_html__('Settings Saved !', 'hash-form');

        self::display_form();
    }

    public static function get_settings() {
        $settings = get_option('hashform_options');
        if (!$settings) {
            $settings = self::default_settings_values();
        } else {
            $settings = wp_parse_args($settings, self::default_settings_values());
        }

        return $settings;
    }

    private static function default_settings_values() {
        return array(
            'pubkey_v2' => '',
            'privkey_v2' => '',
            'pubkey_v3' => '',
            'privkey_v3' => '',
            're_type' => '',
            're_lang' => '',
            're_threshold' => '0.5',
            'header_image' => '',
            'email_template' => 'template1'
        );
    }

    public function send_test_email() {
        if (!current_user_can('manage_options'))
            return;

        $settings = self::get_settings();

        $header_image = $settings['header_image'];

        $email_template = wp_unslash($_POST['email_template']);
        $test_email = wp_unslash($_POST['test_email']);
        $email_subject = __('Test Email', 'hash-form');

        $email_message = '<p style="margin-bottom:20px">';
        $email_message .= __('Hello, this is a test email.', 'hash-form');
        $email_message .= '</p>';
        $email_message .= '<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tbody>
                <tr>
                    <th style="font-family: sans-serif; font-size: 14px; vertical-align: top;text-align:left;" valign="top">Name</th>
                </tr>
                <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 10px 0 0 0" valign="top">John Doe</td>
                </tr>
            </tbody>
        </table>';
        $email_message .= '<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tbody>
                <tr>
                    <th style="font-family: sans-serif; font-size: 14px; vertical-align: top;text-align:left;" valign="top">Email</th>
                </tr>
                <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 10px 0 0 0" valign="top">noreply@gmail.com</td>
                </tr>
            </tbody>
        </table>';
        $email_message .= '<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tbody>
                <tr>
                    <th style="font-family: sans-serif; font-size: 14px; vertical-align: top;text-align:left;" valign="top">Phone Number</th>
                </tr>
                <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 10px 0 0 0" valign="top">+1 879879879</td>
                </tr>
            </tbody>
        </table>';

        ob_start();
        include(HASH_FORM_PATH . 'admin/settings/email-templates/' . $email_template . '.php');
        $form_html = ob_get_clean();

        $admin_email = get_option('admin_email');
        $site_name = get_bloginfo('name');
        $headers = array();
        $headers[] = 'Content-Type: text/html; charset=UTF-8';
        $headers[] = 'From: ' . $site_name . ' <' . $admin_email . '>';
        $mail = wp_mail($test_email, $email_subject, $form_html, $headers);
        if ($mail) {
            die(wp_json_encode(
                            array(
                                'success' => true,
                                'message' => __('Email Sent Successfully', 'hash-form')
                            )
            ));
        }
        die(wp_json_encode(
                        array(
                            'success' => false,
                            'message' => __('Failed to Send Email', 'hash-form')
                        )
        ));
    }

}

new HashSettings();
