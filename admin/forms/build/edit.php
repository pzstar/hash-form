<?php
defined('ABSPATH') || die();

$id = isset($_GET['id']) ? htmlspecialchars_decode(wp_unslash($_GET['id'])) : '';
$form = HashBuilder::get_form_vars($id);

if (!$form) {
    echo '<h3>' . esc_html__('You are trying to edit a form that does not exist.', 'hash-form') . '</h3>';
    return;
}
$fields = HashFields::get_form_fields($form->id);
$values = HashHelper::process_form_array($form);

$edit_message = '<span class="mdi mdi-check-circle"></span>' . __('Form was successfully updated.', 'hash-form');
$has_fields = isset($fields) && !empty($fields);

if (!empty($fields)) {
    $vars = HashHelper::get_fields_array($id);
}

if (defined('DOING_AJAX')) {
    wp_die();
} else {
    ?>
    <div id="hf-wrap" class="hf-content">
        <?php
        self::get_admin_header(array(
            'form' => $form,
            'class' => 'hf-header-nav',
        ));
        ?>
        <div class="hf-body">
            <?php require( HASH_FORM_PATH . 'admin/forms/build/sidebar.php' ); ?>

            <div id="hf-form-panel">
                <div class="hf-form-wrap">
                    <form method="post">
                        <?php require( HASH_FORM_PATH . 'admin/forms/build/builder.php' ); ?>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <?php
}