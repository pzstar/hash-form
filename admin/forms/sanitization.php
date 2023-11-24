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

function hashform_sanitize_color($color) {
    // Is this an rgba color or a hex?
    $mode = ( false === strpos($color, 'rgba') ) ? 'hex' : 'rgba';
    if ('rgba' === $mode) {
        $color = str_replace(' ', '', $color);
        sscanf($color, 'rgba(%d,%d,%d,%f)', $red, $green, $blue, $alpha);
        return 'rgba(' . $red . ',' . $green . ',' . $blue . ',' . $alpha . ')';
    } else {
        return sanitize_hex_color($color);
    }
}

function hashform_sanitize_url($url) {
    $sanitized_url = strip_tags(stripslashes(filter_var($url, FILTER_VALIDATE_URL)));
    return $sanitized_url;
}

function hashform_sanitize_checkbox_boolean($input) {
    if (true == $input) {
        return true;
    } else {
        return false;
    }
}
