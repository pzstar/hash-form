<?php

/**
 * Fired when Hash Form is deleted from the Plugins screen.
 *
 * Only things the plugin added to WordPress itself are removed here. Forms,
 * fields, entries and their uploaded files are deliberately left in place:
 * deleting a plugin should not throw away submissions a site may still need,
 * or be legally required to keep, and a plugin that quietly destroys data on
 * uninstall is one nobody can safely reinstall to try again.
 *
 * @package Hash_Form
 */
// If uninstall was not called by WordPress, then exit.
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

require_once plugin_dir_path(__FILE__) . 'admin/classes/HashFormCapabilities.php';

if (class_exists('HashFormCapabilities')) {
    // Take the plugin's capabilities back off every role, so it does not
    // leave them scattered across roles it once touched.
    HashFormCapabilities::remove_caps();
}

delete_option('hashform_caps_version');
