<?php

/*
 * Plugin Name: Hash Form - Drag & Drop Form Builder
 * Description: Design, Embed, Connect: Your Ultimate Form Companion for WordPress
 * Version: 1.0.0
 * Author: HashThemes
 * Author URI: https://hashthemes.com/
 * Author: HashThemes
 * Text Domain: hash-form
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /languages
 */

defined('ABSPATH') || die();

define('HASHFORM_VERSION', '1.0.0');
define('HASHFORM_PATH', plugin_dir_path(__FILE__));
define('HASHFORM_URL', plugin_dir_url(__FILE__));

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

register_activation_hook(__FILE__, 'hashform_create_table');

function hashform_create_table() {
    $db = new HashFormCreateTable();
    $db->upgrade();
}
