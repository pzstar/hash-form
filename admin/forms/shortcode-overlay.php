<?php
defined('ABSPATH') || die();

$form_id = HashFormHelper::get_var('id', 'absint');
?>
<div id="hf-shortcode-form-modal" role="dialog" aria-modal="true" aria-labelledby="hf-shortcode-title" aria-hidden="true">
    <div class="hf-shortcode-modal-wrap">

        <h3 id="hf-shortcode-title"><?php esc_html_e('Use the shortcode below to add to your pages', 'hash-form'); ?></h3>

        <button type="button" class="hf-modal-close hashform-close-form-modal">
            <span class="dashicons dashicons-no-alt" aria-hidden="true"></span>
            <span class="screen-reader-text"><?php esc_html_e('Close', 'hash-form'); ?></span>
        </button>

        <form id="hf-add-template" method="post">
            <div class="hf-form-row">
                <input type="text" value="<?php echo esc_attr('[hashform id="' . absint($form_id) . '"]') ?>" disabled />
                <span id="hf-copy-shortcode" class="mdi mdi-content-copy"></span>
            </div>

            <div class="hf-copied"><?php esc_attr_e('Copied!', 'hash-form'); ?></div>

            <div class="hf-shortcode-footer">
                <a href="#" class="hashform-close-form-modal"><?php esc_html_e('Close', 'hash-form'); ?></a>
            </div>
        </form>
    </div>
</div>