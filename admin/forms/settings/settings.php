<?php
defined('ABSPATH') || die();

$id = HashHelper::get_var('id', 'absint', 0);
$form = HashBuilder::get_form_vars($id);
$fields = HashFields::get_form_fields($id);

$settings = $form->settings ? $form->settings : array();
$settings = HashHelper::recursive_parse_args($settings, self::default_form_values());
?>
<div id="hf-wrap" class="hf-content">
    <?php
    self::get_admin_header(array(
        'form' => $form,
        'class' => 'hf-header-nav',
    ));

    $sections = array(
        'email-settings' => array(
            'name' => __('Email Settings', 'hash-form'),
            'icon' => 'mdi mdi-email-outline'
        ),
        'auto-responder' => array(
            'name' => __('Auto Responder', 'hash-form'),
            'icon' => 'mdi mdi-email-arrow-left-outline'
        ),
        'form-confirmation' => array(
            'name' => __('Confirmation', 'hash-form'),
            'icon' => 'mdi mdi-send-check'
        ),
        'conditional-logic' => array(
            'name' => __('Conditional Logic', 'hash-form'),
            'icon' => 'mdi mdi-checkbox-multiple-marked-outline'
        ),
        'import-export' => array(
            'name' => __('Import/Export', 'hash-form'),
            'icon' => 'mdi mdi-swap-horizontal'
        ),
    );
    $current = 'email-settings';
    ?>
    <div class="hf-body">
        <div class="hf-fields-sidebar">
            <ul class="hf-settings-tab">
                <?php foreach ($sections as $key => $section) { ?>
                    <li class="<?php echo esc_attr($current === $key ? 'hf-active' : '' ); ?>">
                        <a href="#hf-<?php echo esc_attr($key); ?>">
                            <i class="<?php echo esc_attr($section['icon']) ?>"></i>
                            <?php echo esc_html($section['name']); ?>
                        </a>
                    </li>
                <?php } ?>
            </ul>
        </div>

        <div id="hf-form-panel">
            <?php HashHelper::print_message(); ?>
            <div class="hf-form-wrap">
                <form method="post" id="hf-settings-form">
                    <input type="hidden" name="id" id="form_id" value="<?php echo esc_attr($id); ?>" />
                    <?php
                    wp_nonce_field('hashform_process_form_nonce', 'process_form');
                    foreach ($sections as $key => $section) {
                        ?>
                        <div id="hf-<?php echo esc_attr($key); ?>" class="<?php echo ($current === $key) ? '' : ' hf-hidden'; ?>">
                            <h2><?php echo esc_html($section['name']); ?></h2>
                            <?php require HASH_FORM_PATH . 'admin/forms/settings/' . $key . '.php'; ?>
                        </div>
                    <?php } ?>
                </form>
            </div>
        </div>
    </div>
</div>