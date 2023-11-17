<?php
defined('ABSPATH') || die();

global $post;
$post_id = $post->ID;
$hashform_styles = get_post_meta($post_id, 'hashform_styles', true);

if (!$hashform_styles) {
    $hashform_styles = HashStyles::default_styles();
} else {
    $hashform_styles = HashHelper::recursive_parse_args($hashform_styles, HashStyles::default_styles());
}

wp_nonce_field('hf-styles-nonce', 'hashform_styles_nonce');
?>

<div class="hf-content">
    <div class="hf-body">
        <div class="hf-fields-sidebar hf-style-sidebar">
            <div class="hf-sticky-sidebar">
                <?php include HASH_FORM_PATH . 'admin/styles/main.php'; ?>
            </div>
        </div>

        <div id="hf-form-panel">
            <div class="hf-form-wrap">
                <?php HashHelper::print_message(); ?>
                <?php include HASH_FORM_PATH . 'admin/styles/demo-preview.php'; ?>
            </div>
        </div>
    </div>

    <?php
    $post_class = (isset($_GET['post_type']) && $_GET['post_type'] == 'hashform-styles') ? 'postbox' : 'submitbox';
    ?>
    <div class="hf-footer">
        <div id="submitpost" class="<?php echo esc_attr($post_class); ?>">  
            <div id="major-publishing-actions">
                <div id="publishing-action">
                    <span class="spinner"></span>
                    <?php if (isset($_GET['post_type']) && $_GET['post_type'] == 'hashform-styles') { ?>
                        <input name="original_publish" type="hidden" id="original_publish" value="Publish">
                        <input type="submit" name="publish" id="publish" class="button button-primary button-large" value="<?php esc_html_e('Publish', 'hash-form'); ?>">						
                    <?php } else { ?>
                        <input name="original_publish" type="hidden" id="original_publish" value="Update">
                        <input type="submit" name="save" id="publish" class="button button-primary button-large" value="<?php esc_html_e('Update', 'hash-form'); ?>">
                    <?php } ?>
                </div>
            </div>
        </div>
        <div class="hf-preview-close">
            <a class="button button-secondary button-large" href="<?php echo admin_url('/edit.php?post_type=hashform-styles') ?>"><?php esc_html_e('Close', 'hash-form'); ?></a>
        </div>
    </div>
</div>