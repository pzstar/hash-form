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

define('HASH_FORM_VERSION', '1.0.0');
define('HASH_FORM_PATH', plugin_dir_path(__FILE__));
define('HASH_FORM_URL', plugin_dir_url(__FILE__));

require HASH_FORM_PATH . 'admin/classes/HashCreateTable.php';
require HASH_FORM_PATH . 'admin/classes/HashBuilder.php';
require HASH_FORM_PATH . 'admin/classes/HashHelper.php';
require HASH_FORM_PATH . 'admin/classes/HashFields.php';
require HASH_FORM_PATH . 'admin/classes/HashLoader.php';
require HASH_FORM_PATH . 'admin/classes/HashSmtp.php';
require HASH_FORM_PATH . 'admin/classes/HashEntry.php';
require HASH_FORM_PATH . 'admin/classes/HashImportExport.php';
require HASH_FORM_PATH . 'admin/classes/HashFormListing.php';
require HASH_FORM_PATH . 'admin/classes/HashEntryListing.php';
require HASH_FORM_PATH . 'admin/classes/HashValidate.php';
require HASH_FORM_PATH . 'admin/classes/HashFormPreview.php';
require HASH_FORM_PATH . 'admin/classes/HashShortcode.php';
require HASH_FORM_PATH . 'admin/classes/HashSettings.php';
require HASH_FORM_PATH . 'admin/classes/HashStyles.php';
require HASH_FORM_PATH . 'admin/classes/HashGridHelper.php';
require HASH_FORM_PATH . 'admin/classes/HashEmail.php';

register_activation_hook(__FILE__, 'hashform_create_table');

function hashform_create_table() {
    $db = new HashCreateTable();
    $db->upgrade();
}
