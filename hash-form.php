<?php

/*
 * Plugin Name: Hash Form - Drag & Drop Form Builder
 * Description: Design, Embed, Connect: Your Ultimate Form Companion for WordPress
 * Version: 1.0.3
 * Author: HashThemes
 * Author URI: https://hashthemes.com/
 * Author: HashThemes
 * Text Domain: hash-form
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /languages
 */

defined('ABSPATH') || die();

define('HASHFORM_VERSION', '1.0.3');
define('HASHFORM_FILE', __FILE__);
define('HASHFORM_PATH', plugin_dir_path(HASHFORM_FILE));
define('HASHFORM_URL', plugin_dir_url(HASHFORM_FILE));
define('HASHFORM_UPLOAD_DIR', '/hashform');

require HASHFORM_PATH . 'admin/classes/HashFormUploader.php';
require HASHFORM_PATH . 'admin/classes/HashFormCreateTable.php';
require HASHFORM_PATH . 'admin/classes/HashFormBuilder.php';
require HASHFORM_PATH . 'admin/classes/HashFormHelper.php';
require HASHFORM_PATH . 'admin/classes/HashFormFields.php';
require HASHFORM_PATH . 'admin/classes/HashFormLoader.php';
require HASHFORM_PATH . 'admin/classes/HashFormSmtp.php';
require HASHFORM_PATH . 'admin/classes/HashFormEntry.php';
require HASHFORM_PATH . 'admin/classes/HashFormImportExport.php';
require HASHFORM_PATH . 'admin/classes/HashFormListing.php';
require HASHFORM_PATH . 'admin/classes/HashFormEntryListing.php';
require HASHFORM_PATH . 'admin/classes/HashFormValidate.php';
require HASHFORM_PATH . 'admin/classes/HashFormPreview.php';
require HASHFORM_PATH . 'admin/classes/HashFormShortcode.php';
require HASHFORM_PATH . 'admin/classes/HashFormSettings.php';
require HASHFORM_PATH . 'admin/classes/HashFormStyles.php';
require HASHFORM_PATH . 'admin/classes/HashFormGridHelper.php';
require HASHFORM_PATH . 'admin/classes/HashFormEmail.php';

/**
 * Register widget.
 */
add_action('elementor/widgets/register', 'hashform_elementor_widget_register');

function hashform_elementor_widget_register($widgets_manager) {
    require HASHFORM_PATH . 'admin/classes/HashFormElement.php';
    $widgets_manager->register(new \HashFormElement());
}

register_activation_hook(HASHFORM_FILE, 'hashform_create_table');

function hashform_create_table() {
    $db = new HashFormCreateTable();
    $db->upgrade();
}
