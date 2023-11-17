<?php
defined('ABSPATH') || die();

$style_id = $form->template_id;
$hashform_styles = get_post_meta($style_id, 'hashform_styles', true);
$title = isset($form->options['show_title']) ? $form->options['show_title'] : 'on';
$description = isset($form->options['show_description']) ? $form->options['show_description'] : 'off';
$submit_class = isset($form->options['submit_btn_alignment']) ? 'hf-submit-btn-align-' . $form->options['submit_btn_alignment'] : 'hf-submit-btn-align-left';
$submit = isset($form->options['submit_value']) ? $form->options['submit_value'] : __('Submit', 'hash-form');
$button_class = array('hf-submit-button');
$button_class[] = isset($form->options['submit_btn_css_class']) ? $form->options['submit_btn_css_class'] : '';

$form_title = $form->name;
$form_description = $form->description;
$show_title = $form->options['show_title'];
$show_description = $form->options['show_description'];

if (!$hashform_styles) {
    $hashform_styles = HashStyles::default_styles();
} else {
    $hashform_styles = HashHelper::recursive_parse_args($hashform_styles, HashStyles::default_styles());
}
?>

<div class="hf-form-preview" id="hf-container-<?php echo esc_attr($form->id); ?>">
    <?php
    if (empty($values) || !isset($values['fields']) || empty($values['fields'])) {
        ?>
        <div class="hf-form-error">
            <strong><?php esc_html_e('Oops!', 'hash-form'); ?></strong>
            <?php printf(esc_html__('You did not add any fields to your form. %1$sGo back%2$s and add some.', 'hash-form'), '<a href="' . esc_url(admin_url('admin.php?page=hashform&hashform_action=edit&id=' . $id)) . '">', '</a>'); ?>
        </div>
        <?php
        return;
    }

    if ($show_title == 'on' && $form_title) {
        ?>
        <h3 class="hf-form-title"><?php echo esc_html($form_title); ?></h3>
        <?php
    }

    if ($show_description == 'on' && $form_description) {
        ?>
        <div class="hf-form-description"><?php echo esc_html($form_description); ?></div>
        <?php
    }
    ?>
    <div class="hf-container">
        <input type="hidden" name="hashform_action" value="create" />
        <input type="hidden" name="form_id" value="<?php echo esc_attr($form->id); ?>" />
        <input type="hidden" name="form_key" value="<?php echo esc_attr($form->form_key); ?>" />
        <input type="hidden" class="hashform-form-conditions" value="<?php echo htmlspecialchars(wp_json_encode(HashBuilder::get_show_hide_conditions($form->id)), ENT_QUOTES, 'UTF-8'); ?>" />
        <?php
        wp_nonce_field('hashform_submit_entry_nonce', 'hashform_submit_entry_' . $form->id);

        if ($values['fields']) {
            HashFields::show_fields($values['fields']);
        }
        ?>
        <div class="hf-submit-wrap <?php echo esc_attr($submit_class); ?>">
            <button class="<?php echo implode(' ', array_filter($button_class)) ?>" type="submit" <?php echo esc_attr(isset($_GET['action']) && $_GET['action'] == 'hashform_preview' ? 'disabled' : '') ?>><?php echo esc_html($submit); ?></button>
        </div>
    </div>
    <?php
    echo '<style class="hf-style-content">';
    echo '#hf-container-' . esc_attr($form->id) . '{';
    HashStyles::get_style_vars($hashform_styles, '');
    echo '}';
    echo '</style>';
    ?>
</div>