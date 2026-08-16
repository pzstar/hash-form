<?php

function hashform_sanitize_checkbox($input) {
    if ($input == 'on') {
        return 'on';
    } else {
        return 'off';
    }
}

function hashform_sanitize_number($input) {
    if (is_numeric($input)) {
        return intval($input);
    } else {
        return '';
    }
}

function hashform_sanitize_float($input) {
    if (is_numeric($input)) {
        return (float) $input;
    } else {
        return '';
    }
}

function hashform_sanitize_color($color) {
    // Is this an rgba color or a hex?
    $mode = (false === strpos($color, 'rgba')) ? 'hex' : 'rgba';
    if ('rgba' === $mode) {
        $color = str_replace(' ', '', $color);
        sscanf($color, 'rgba(%d,%d,%d,%f)', $red, $green, $blue, $alpha);
        return 'rgba(' . $red . ',' . $green . ',' . $blue . ',' . $alpha . ')';
    } else {
        return sanitize_hex_color($color);
    }
}

function hashform_sanitize_url($url) {
    $sanitized_url = wp_strip_all_tags(stripslashes(filter_var($url, FILTER_VALIDATE_URL)));
    return $sanitized_url;
}

function hashform_sanitize_checkbox_boolean($input) {
    if (true == $input) {
        return true;
    } else {
        return false;
    }
}

/**
 * File extensions an upload field may be configured with.
 *
 * The one list. It used to be written out twice, here and in the upload AJAX
 * handler, and the two drifted: a format present in one and missing from the
 * other left a field that accepted nothing at all.
 *
 * This is only the outer bound. get_allowed_mime_types() is applied on top when
 * the file actually arrives, so a type this site has disabled is still refused.
 */
function hashform_allowed_file_extensions() {
    return apply_filters('hashform_allowed_file_extensions', array(
        'pdf', 'doc', 'docx', 'xls', 'xlsx', 'odt', 'ppt', 'pptx', 'pps', 'ppsx',
        'jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'avif', 'heic', 'heif',
        'mp3', 'm4a', 'mp4', 'ogg', 'wav', 'm4v', 'mov', 'wmv', 'avi', 'mpg',
        'ogv', 'webm', '3gp',
        'txt', 'zip', 'rar', '7z', 'csv',
    ));
}

function hashform_sanitize_allowed_file_extensions($extensions) {
    $new_extensions = array();
    $extensions = explode(',', $extensions);
    $allowed_extensions = hashform_allowed_file_extensions();
    foreach ($extensions as $row) {
        $extension = trim($row);
        if (in_array($extension, $allowed_extensions)) {
            $new_extensions[] = $extension;
        }
    }
    return implode(',', $new_extensions);
}
