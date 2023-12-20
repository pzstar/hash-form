<?php
defined('ABSPATH') || die();

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

class HashFormElement extends Widget_Base {

    public function get_name() {
        return 'Hash Form';
    }

    public function get_title() {
        return esc_html__('Hash Form', 'hash-form');
    }

    public function get_icon() {
        return 'eicon-code';
    }

    public function get_categories() {
        return array('basic');
    }

    public function get_keywords() {
        return array('Form', 'Hash Form', 'Hash');
    }

    protected function register_controls() {

        $this->start_controls_section(
            'section_title', [
                'label' => esc_html__('Form', 'hash-form'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control('swpf_filter_preset', [
            'label' => esc_html__('Select Hash Form', 'hash-form'),
            'type' => Controls_Manager::SELECT,
            'options' => HashFormHelper::get_all_forms()
        ]);

        $this->end_controls_section();
    }


    public function render() {
        echo '<p>';
        echo "Hash Form";
        echo '</p>';
    }
}