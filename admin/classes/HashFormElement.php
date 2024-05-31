<?php
defined('ABSPATH') || die();

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Plugin;

class HashFormElement extends Widget_Base {

    public function get_name() {
        return 'Hash Form';
    }

    public function get_title() {
        return esc_html__('Hash Form', 'hash-form');
    }

    public function get_icon() {
        return 'hfi hfi-form';
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

        $this->add_control(
                'hf_form_id', [
            'label' => esc_html__('Select Form', 'hash-form'),
            'type' => Controls_Manager::SELECT2,
            'options' => HashFormHelper::get_all_forms_list_options(),
            'multiple' => false,
            'label_block' => true,
            'separator' => 'after'
                ]
        );

        $this->add_control(
                'new_form', [
            'type' => Controls_Manager::RAW_HTML,
            'raw' => sprintf(
                    wp_kses(esc_html__('To Create New Form', 'hash-form') . ' <a href="%s" target="_blank">' . esc_html__('Cick Here', 'hash-form') . '</a>', [
                'b' => [],
                'br' => [],
                'a' => [
                    'href' => [],
                    'target' => [],
                ],
                    ]), esc_url(add_query_arg('page', 'hashform', admin_url('admin.php')))
            )
                ]
        );

        $this->end_controls_section();


        $this->start_controls_section(
                'enable_style', [
            'label' => esc_html__('Custom Style', 'hash-elements'),
            'tab' => Controls_Manager::TAB_STYLE,
                ]
        );

        $this->add_control(
                'enable_custom_style', [
            'label' => __('Enable Custom Style', 'totalplus'),
            'type' => Controls_Manager::SWITCHER,
            'return_value' => 'yes',
                ]
        );

        $this->end_controls_section();


        $this->start_controls_section(
                'form_style', [
            'label' => esc_html__('Form', 'hash-elements'),
            'tab' => Controls_Manager::TAB_STYLE,
            'condition' => [
                'enable_custom_style' => 'yes'
            ],
                ]
        );

        $this->add_control(
                'column_gap', [
            'label' => __('Column Gap', 'hash-elements'),
            'type' => Controls_Manager::SLIDER,
            'size_units' => ['px', 'em', 'rem'],
            'range' => [
                'px' => [
                    'min' => 10,
                    'max' => 80,
                    'step' => 1,
                ]
            ],
            'condition' => [
                'enable_custom_style' => 'yes'
            ],
            'selectors' => [
                '{{WRAPPER}}' => '--hf-form-column-gap: {{SIZE}}{{UNIT}};',
            ],
                ]
        );
        
         $this->add_control(
                'row_gap', [
            'label' => __('Row Gap', 'hash-elements'),
            'type' => Controls_Manager::SLIDER,
            'size_units' => ['px', 'em', 'rem'],
            'range' => [
                'px' => [
                    'min' => 10,
                    'max' => 80,
                    'step' => 1,
                ]
            ],
            'condition' => [
                'enable_custom_style' => 'yes'
            ],
            'selectors' => [
                '{{WRAPPER}}' => '--hf-form-row-gap: {{SIZE}}{{UNIT}};',
            ],
                ]
        );

        $this->end_controls_section();
        
        $this->start_controls_section(
                'label_style', [
            'label' => esc_html__('Label', 'hash-elements'),
            'tab' => Controls_Manager::TAB_STYLE,
            'condition' => [
                'enable_custom_style' => 'yes'
            ],
                ]
        );
        
        $this->add_group_control(
                Group_Control_Typography::get_type(), [
            'name' => 'label_typography',
            'label' => esc_html__('Typography', 'hash-elements'),
            'selector' => '{{WRAPPER}} .hf-container .hf-field-label',
            'condition' => [
                'enable_custom_style' => 'yes'
            ],
                ]
        );
        
        $this->add_control(
                'label_color', [
            'label' => esc_html__('Color', 'hash-elements'),
            'type' => Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}}' => '--hf-label-typo-font-color: {{VALUE}}',
            ],
                ]
        );
        
        $this->add_control(
                'required_color', [
            'label' => esc_html__('Required Color', 'hash-elements'),
            'type' => Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}}' => '--hf-label-required-color: {{VALUE}}',
            ],
                ]
        );
        
        $this->add_control(
                'label_spacing', [
            'label' => esc_html__('Spacing', 'hash-elements'),
            'type' => Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors' => [
                '{{WRAPPER}}' => '--hf-label-spacing-top: {{TOP}}{{UNIT};',
                '{{WRAPPER}}' => '--hf-label-spacing-bottom: {{BOTTOM}}{{UNIT};',
                '{{WRAPPER}}' => '--hf-label-spacing-left: {{LEFT}}{{UNIT};',
                '{{WRAPPER}}' => '--hf-label-spacing-right: {{RIGHT}}{{UNIT};',
            ],
                ]
        );
        
        $this->end_controls_section();
        
        $this->start_controls_section(
                'description_style', [
            'label' => esc_html__('Description', 'hash-elements'),
            'tab' => Controls_Manager::TAB_STYLE,
            'condition' => [
                'enable_custom_style' => 'yes'
            ],
                ]
        );
        
        $this->add_group_control(
                Group_Control_Typography::get_type(), [
            'name' => 'description_typography',
            'label' => esc_html__('Typography', 'hash-elements'),
            'selector' => '{{WRAPPER}} .hf-container .hf-field-desc',
            'condition' => [
                'enable_custom_style' => 'yes'
            ],
                ]
        );
        
        $this->end_controls_section();
    }

    public function render() {
        $settings = $this->get_settings_for_display();
        $enable_class = isset($settings['enable_custom_style']) && $settings['enable_custom_style'] == 'yes' ? ' hf-elementor-form-custom-style' : '';

        if (isset($settings['hf_form_id']) && !empty($settings['hf_form_id']) && (HashFormListing::get_status($settings['hf_form_id']) == 'published')) {
            echo '<div class="hf-elementor-form' . esc_attr($enable_class) . '">';
            echo do_shortcode('[hashform id="' . $settings['hf_form_id'] . '"]');
            echo '</div>';
        } elseif ($this->elementor()->editor->is_edit_mode()) {
            ?>
            <p><?php echo esc_html__('Please select a Form', 'hash-form'); ?></p>
            <?php
        }
    }

    protected function elementor() {
        return Plugin::$instance;
    }

}
