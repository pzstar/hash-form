<?php

defined('ABSPATH') || die();

class HashFormShortcode {

    public function __construct() {
        add_shortcode('hashform', array($this, 'get_form_shortcode'));
    }

    public static function get_form_shortcode($atts) {
        $shortcode_atts = shortcode_atts(array(
            'id' => '',
                ), $atts);
        return HashFormPreview::show_form($shortcode_atts['id']);
    }

}

new HashFormShortcode();
