<?php
defined('ABSPATH') || die();

class HashFormEmail {

    public $form;
    public $entry_id;

    public function __construct($form, $entry_id) {
        $this->form = $form;
        $this->entry_id = $entry_id;
    }

    private function get_form_settings() {
        return $this->form->settings;
    }

    public function send_email() {
        $form_settings = $this->get_form_settings();
        $entry = HashFormEntry::get_entry_vars($this->entry_id);
        $metas = $entry->metas;

        $email_to = isset($form_settings['email_to']) ? explode(',', $form_settings['email_to']) : '';
        $email_from = isset($form_settings['email_from']) ? $form_settings['email_from'] : '';
        $email_from_name = isset($form_settings['email_from_name']) ? $form_settings['email_from_name'] : '';
        $email_subject = isset($form_settings['email_subject']) ? $form_settings['email_subject'] : '';
        $reply_to_email = isset($form_settings['reply_to_email']) ? $form_settings['reply_to_email'] : '';
        $reply_to_ar = isset($form_settings['reply_to_ar']) ? $form_settings['reply_to_ar'] : '';

        foreach ($metas as $item => $value) {
            $reply_to_email = str_replace('#field_id_' . absint($item), $value['value'], $reply_to_email);
            $email_subject = str_replace('#field_id_' . absint($item), $value['value'], $email_subject);
            $reply_to_ar = str_replace(absint($item), $value['value'], $reply_to_ar);
        }

        $email_message = $this->get_email_content();

        $head = array();
        $head[] = 'Content-Type: text/html; charset=UTF-8';
        $head[] = 'From: ' . esc_html($email_from_name) . ' <' . esc_html($email_from) . '>';
        if ($reply_to_email) {
            $head[] = 'Reply-To: ' . esc_html($reply_to_email);
        }

        $recipients = array();

        foreach ($email_to as $row) {
            $recipients[] = (trim($row) == '[admin_email]') ? get_option('admin_email') : $row;
        }

        $mail = wp_mail($recipients, $email_subject, $email_message, $head);

        if ($mail) {
            $this->send_auto_responder($reply_to_ar);
            $this->do_success_process();
        } else {
            return false;
        }
    }

    public function send_auto_responder($email) {
        $form_settings = $this->get_form_settings();
        if (isset($form_settings['enable_ar']) && $form_settings['enable_ar'] == 'on') {
            $from_ar = isset($form_settings['from_ar']) ? trim($form_settings['from_ar']) : '';
            $from_ar_name = isset($form_settings['from_ar_name']) && ($form_settings['from_ar_name'] != '') ? esc_html($form_settings['from_ar_name']) : esc_html__('No Name', 'hash-form');
            $email_subject = isset($form_settings['email_subject_ar']) && ($form_settings['email_subject_ar'] != '') ? esc_html($form_settings['email_subject_ar']) : esc_html__('New Form Submission', 'hash-form');
            $email_message = wpautop(isset($form_settings['email_message_ar']) ? esc_html($form_settings['email_message_ar']) : '');
            $settings = HashFormSettings::get_settings();
            $header_image = $settings['header_image'];

            ob_start();
            include(HASHFORM_PATH . 'admin/settings/email-templates/template1.php');
            $form_html = ob_get_clean();

            $from_ar = ($from_ar == '[admin_email]') ? get_option('admin_email') : esc_attr($from_ar);

            $head = array();
            $head[] = 'Content-Type: text/html; charset=UTF-8';
            $head[] = 'From: ' . esc_html($from_ar_name) . ' <' . esc_html($from_ar) . '>';
            wp_mail($email, $email_subject, $form_html, $head);
        }
    }

    public function get_entry_rows() {
        $settings = HashFormSettings::get_settings();
        $email_template = 'template';
        $entry = HashFormEntry::get_entry_vars($this->entry_id);
        $entry_rows = '';
        foreach ($entry->metas as $id => $value) {
            $title = $value['name'];
            $entry_value = maybe_unserialize($value['value']);
            $entry_type = $value['type'];
            if (is_array($entry_value)) {
                if ($entry_type == 'name') {
                    $entry_value = implode(' ', array_filter($entry_value));
                } else {
                    $entry_value = implode(',<br>', array_filter($entry_value));
                }
            }
            $entry_rows .= call_user_func(array($this, $email_template), $title, $entry_value);
        }
        return $entry_rows;
    }

    public function get_email_content() {
        $form_settings = $this->get_form_settings();
        $settings = HashFormSettings::get_settings();
        $email_template = $settings['email_template'] ? $settings['email_template'] : 'template1';
        $header_image = $settings['header_image'];
        $email_message = isset($form_settings['email_message']) ? $form_settings['email_message'] : '';
        $entry = HashFormEntry::get_entry_vars($this->entry_id);
        $metas = $entry->metas;
        $email_table = $this->get_entry_rows();
        $form_title = $this->form->name;

        foreach ($metas as $item => $value) {
            $entry_value = maybe_unserialize($value['value']);
            $entry_type = maybe_unserialize($value['type']);
            if (is_array($entry_value)) {
                if ($entry_type == 'name') {
                    $entry_value = implode(' ', array_filter($entry_value));
                } else {
                    $entry_value = implode(',<br>', array_filter($entry_value));
                }
            }
            $email_message = str_replace('#field_id_' . $item, $entry_value, $email_message);
        }

        $email_message = str_replace('#form_title', $form_title, $email_message);
        $email_message = str_replace('#form_details', $email_table, $email_message);
        $email_message = empty($email_message) ? '' : wpautop($email_message);

        ob_start();
        include(HASHFORM_PATH . 'admin/settings/email-templates/' . $email_template . '.php');
        $form_html = ob_get_clean();

        return $form_html;
    }

    public function do_success_process() {
        $form_settings = $this->get_form_settings();

        $redirect_url = '';

        if ($form_settings['confirmation_type'] == 'show_page') {
            $redirect_url = get_permalink($form_settings['show_page_id']);
        } else if ($form_settings['confirmation_type'] == 'redirect_url') {
            $redirect_url = $form_settings['redirect_url_page'];
        }

        if (!empty($redirect_url)) {
            return wp_send_json(array(
                'status' => 'redirect',
                'message' => esc_url($redirect_url)
            ));
        }

        return wp_send_json(array(
            'status' => 'success',
            'message' => sanitize_text_field($form_settings['confirmation_message'])
        ));
    }

    public function template($title, $entry_value) {
        ob_start();
        ?>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tbody>
                <tr>
                    <th style="font-family: sans-serif; font-size: 14px; vertical-align: top;text-align:left;" valign="top"><?php echo esc_html($title); ?></th>
                </tr>
                <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding: 10px 0 0 0" valign="top"><?php echo esc_html($entry_value); ?></td>
                </tr>
            </tbody>
        </table>
        <?php
        $form_html = ob_get_clean();
        return $form_html;
    }

}
