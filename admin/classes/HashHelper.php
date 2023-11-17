<?php
defined('ABSPATH') || die();

class HashHelper {

    public static function get_fields_array($form_id) {
        $fields = HashFields::get_form_fields($form_id);

        $values['fields'] = array();

        if (empty($fields))
            return $values;

        foreach ((array) $fields as $field) {
            $field_array = HashFields::covert_field_obj_to_array($field);
            $values['fields'][] = $field_array;
        }

        $form_options_defaults = self::get_form_options_default();

        return array_merge($form_options_defaults, $values);
    }

    public static function get_var($param, $sanitize = 'sanitize_text_field', $default = '') {
        if ($_GET && isset($_GET[$param])) {
            $value = wp_unslash($_GET[$param]);
        } else {
            $value = $default;
        }

        return self::sanitize_value($sanitize, $value);
    }

    public static function get_post($param, $sanitize = 'sanitize_text_field', $default = '') {
        if (isset($_POST[$param])) {
            $value = wp_unslash($_POST[$param]);
        } else {
            $value = $default;
        }

        return self::sanitize_value($sanitize, $value);
    }

    public static function sanitize_value($sanitize, &$value) {
        if (!empty($sanitize)) {
            if (is_array($value)) {
                $temp_values = $value;
                foreach ($temp_values as $k => $v) {
                    $value[$k] = self::sanitize_value($sanitize, $value[$k]);
                }
            } else {
                $value = call_user_func($sanitize, htmlspecialchars_decode($value));
            }
        }

        return $value;
    }

    public static function get_unique_key($table_name, $column_name, $limit = 6) {
        $values = 'ABCDEFGHIJKLMOPQRSTUVXWYZ0123456789';
        $count = strlen($values);
        $count--;
        $key = NULL;
        for ($x = 1; $x <= $limit; $x++) {
            $rand_var = rand(0, $count);
            $key .= substr($values, $rand_var, 1);
        }

        $key = strtolower($key);
        $existing_keys = self::check_table_keys($table_name, $column_name);

        if (in_array($key, $existing_keys)) {
            self::get_unique_key($table_name, $column_name, $limit = 6);
        }

        return $key;
    }

    public static function check_table_keys($table_name, $column_name) {
        global $wpdb;
        $results = $wpdb->get_results('SELECT ' . $column_name . ' FROM ' . $wpdb->prefix . $table_name, ARRAY_A); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
        return array_column($results, $column_name);
    }

    public static function is_admin_page($page = 'hashform') {
        $get_page = self::get_var('page', 'sanitize_title');
        if (is_admin() && $get_page === $page) {
            return true;
        }

        return false;
    }

    public static function is_preview_page() {
        $action = self::get_var('action', 'sanitize_title');
        return (is_admin() && ( $action == 'hashform_preview'));
    }

    public static function is_form_builder_page() {
        $action = self::get_var('hashform_action', 'sanitize_title');
        $builder_actions = self::get_form_builder_actions();
        return self::is_admin_page('hashform') && ( in_array($action, $builder_actions) );
    }

    public static function is_form_listing_page() {
        if (!self::is_admin_page('hashform'))
            return false;

        $action = self::get_var('hashform_action', 'sanitize_title');
        $builder_actions = self::get_form_builder_actions();
        return !$action || in_array($action, $builder_actions);
    }

    public static function get_form_builder_actions() {
        return array('edit', 'settings', 'style');
    }

    public static function start_field_array($field) {
        return array(
            'id' => $field->id,
            'default_value' => $field->default_value,
            'name' => $field->name,
            'description' => $field->description,
            'options' => $field->options,
            'required' => $field->required,
            'field_key' => $field->field_key,
            'field_order' => $field->field_order,
            'form_id' => $field->form_id,
        );
    }

    public static function show_search_box($atts) {
        $defaults = array(
            'placeholder' => '',
            'tosearch' => '',
            'text' => __('Search', 'hash-form'),
            'input_id' => '',
        );
        $atts = array_merge($defaults, $atts);
        $class = 'hf-search-fields-input';
        $input_id = $atts['input_id'] . '-search-input';
        ?>
        <div class="hf-search-fields">
            <span class="mdi mdi-magnify"></span>
            <input type="search" id="<?php echo esc_attr($input_id); ?>" name="s" value="<?php _admin_search_query(); ?>" placeholder="<?php echo esc_attr($atts['placeholder']); ?>" class="<?php echo esc_attr($class); ?>" data-tosearch="<?php echo esc_attr($atts['tosearch']); ?>" <?php if (!empty($atts['tosearch'])) { ?> autocomplete="off"<?php } ?> />
            <?php if (empty($atts['tosearch'])) submit_button($atts['text'], 'button-secondary', '', false, array('id' => 'search-submit')); ?>
        </div>
        <?php
    }

    public static function convert_date_format($date) {
        $timestamp = strtotime($date);

        $new_date = date('Y/m/d', $timestamp);
        $new_time = date('g:i a', $timestamp);

        return $new_date . ' ' . __('at', 'hash-form') . ' ' . $new_time;
    }

    public static function parse_json_array($array = array()) {
        $array = json_decode($array, true);
        $fields = array();
        foreach ($array as $val) {
            $name = $val['name'];
            $value = $val['value'];
            if (strpos($name, '[]') !== false) {
                $fields[str_replace('[]', '', $name)][] = $value;
            } else if (strpos($name, '[') !== false) {
                $ids = explode('[', str_replace(']', '', $name));
                $count = count($ids);

                switch ($count):
                    case 1:
                        $fields[$ids[0]] = $value;
                        break;
                    case 2:
                        $fields[$ids[0]][$ids[1]] = $value;
                        break;
                    case 3:
                        $fields[$ids[0]][$ids[1]][$ids[2]] = $value;
                        break;
                    case 4:
                        $fields[$ids[0]][$ids[1]][$ids[2]][$ids[3]] = $value;
                        break;
                    case 5:
                        $fields[$ids[0]][$ids[1]][$ids[2]][$ids[3]][$ids[4]] = $value;
                        break;
                endswitch;
            }else {
                $fields[$name] = $value;
            }
        }
        return $fields;
    }

    public static function process_form_array($form) {
        if (!$form)
            return;

        $new_values = array(
            'id' => $form->id,
            'form_key' => $form->form_key,
            'name' => $form->name,
            'description' => $form->description,
            'status' => $form->status,
        );

        if (is_array($form->options)) {
            $form_options = wp_parse_args($form->options, self::get_form_options_default());

            foreach ($form_options as $opt => $value) {
                $new_values[$opt] = $value;
            }
        }

        return $new_values;
    }

    public static function recursive_parse_args($args, $defaults) {
        $new_args = (array) $defaults;
        foreach ($args as $key => $value) {
            if (is_array($value) && isset($new_args[$key])) {
                $new_args[$key] = self::recursive_parse_args($value, $new_args[$key]);
            } else {
                $new_args[$key] = $value;
            }
        }
        return $new_args;
    }

    public static function get_form_options_default() {
        return array(
            'submit_value' => __('Submit', 'hash-form'),
            'success_msg' => '',
            'form_css_class' => '',
            'submit_btn_css_class' => '',
            'submit_btn_alignment' => 'left',
            'show_title' => 'on',
            'show_description' => 'on',
        );
    }

    public static function get_countries() {
        $countries = array(
            __('Afghanistan', 'hash-form'),
            __('Aland Islands', 'hash-form'),
            __('Albania', 'hash-form'),
            __('Algeria', 'hash-form'),
            __('American Samoa', 'hash-form'),
            __('Andorra', 'hash-form'),
            __('Angola', 'hash-form'),
            __('Anguilla', 'hash-form'),
            __('Antarctica', 'hash-form'),
            __('Antigua and Barbuda', 'hash-form'),
            __('Argentina', 'hash-form'),
            __('Armenia', 'hash-form'),
            __('Aruba', 'hash-form'),
            __('Australia', 'hash-form'),
            __('Austria', 'hash-form'),
            __('Azerbaijan', 'hash-form'),
            __('Bahamas', 'hash-form'),
            __('Bahrain', 'hash-form'),
            __('Bangladesh', 'hash-form'),
            __('Barbados', 'hash-form'),
            __('Belarus', 'hash-form'),
            __('Belgium', 'hash-form'),
            __('Belize', 'hash-form'),
            __('Benin', 'hash-form'),
            __('Bermuda', 'hash-form'),
            __('Bhutan', 'hash-form'),
            __('Bolivia', 'hash-form'),
            __('Bonaire, Sint Eustatius and Saba', 'hash-form'),
            __('Bosnia and Herzegovina', 'hash-form'),
            __('Botswana', 'hash-form'),
            __('Bouvet Island', 'hash-form'),
            __('Brazil', 'hash-form'),
            __('British Indian Ocean Territory', 'hash-form'),
            __('Brunei', 'hash-form'),
            __('Bulgaria', 'hash-form'),
            __('Burkina Faso', 'hash-form'),
            __('Burundi', 'hash-form'),
            __('Cambodia', 'hash-form'),
            __('Cameroon', 'hash-form'),
            __('Canada', 'hash-form'),
            __('Cape Verde', 'hash-form'),
            __('Cayman Islands', 'hash-form'),
            __('Central African Republic', 'hash-form'),
            __('Chad', 'hash-form'),
            __('Chile', 'hash-form'),
            __('China', 'hash-form'),
            __('Christmas Island', 'hash-form'),
            __('Cocos (Keeling) Islands', 'hash-form'),
            __('Colombia', 'hash-form'),
            __('Comoros', 'hash-form'),
            __('Congo', 'hash-form'),
            __('Cook Islands', 'hash-form'),
            __('Costa Rica', 'hash-form'),
            __('C&ocirc;te d\'Ivoire', 'hash-form'),
            __('Croatia', 'hash-form'),
            __('Cuba', 'hash-form'),
            __('Curacao', 'hash-form'),
            __('Cyprus', 'hash-form'),
            __('Czech Republic', 'hash-form'),
            __('Denmark', 'hash-form'),
            __('Djibouti', 'hash-form'),
            __('Dominica', 'hash-form'),
            __('Dominican Republic', 'hash-form'),
            __('East Timor', 'hash-form'),
            __('Ecuador', 'hash-form'),
            __('Egypt', 'hash-form'),
            __('El Salvador', 'hash-form'),
            __('Equatorial Guinea', 'hash-form'),
            __('Eritrea', 'hash-form'),
            __('Estonia', 'hash-form'),
            __('Ethiopia', 'hash-form'),
            __('Falkland Islands (Malvinas)', 'hash-form'),
            __('Faroe Islands', 'hash-form'),
            __('Fiji', 'hash-form'),
            __('Finland', 'hash-form'),
            __('France', 'hash-form'),
            __('French Guiana', 'hash-form'),
            __('French Polynesia', 'hash-form'),
            __('French Southern Territories', 'hash-form'),
            __('Gabon', 'hash-form'),
            __('Gambia', 'hash-form'),
            __('Georgia', 'hash-form'),
            __('Germany', 'hash-form'),
            __('Ghana', 'hash-form'),
            __('Gibraltar', 'hash-form'),
            __('Greece', 'hash-form'),
            __('Greenland', 'hash-form'),
            __('Grenada', 'hash-form'),
            __('Guadeloupe', 'hash-form'),
            __('Guam', 'hash-form'),
            __('Guatemala', 'hash-form'),
            __('Guernsey', 'hash-form'),
            __('Guinea', 'hash-form'),
            __('Guinea-Bissau', 'hash-form'),
            __('Guyana', 'hash-form'),
            __('Haiti', 'hash-form'),
            __('Heard Island and McDonald Islands', 'hash-form'),
            __('Holy See', 'hash-form'),
            __('Honduras', 'hash-form'),
            __('Hong Kong', 'hash-form'),
            __('Hungary', 'hash-form'),
            __('Iceland', 'hash-form'),
            __('India', 'hash-form'),
            __('Indonesia', 'hash-form'),
            __('Iran', 'hash-form'),
            __('Iraq', 'hash-form'),
            __('Ireland', 'hash-form'),
            __('Israel', 'hash-form'),
            __('Isle of Man', 'hash-form'),
            __('Italy', 'hash-form'),
            __('Jamaica', 'hash-form'),
            __('Japan', 'hash-form'),
            __('Jersey', 'hash-form'),
            __('Jordan', 'hash-form'),
            __('Kazakhstan', 'hash-form'),
            __('Kenya', 'hash-form'),
            __('Kiribati', 'hash-form'),
            __('North Korea', 'hash-form'),
            __('South Korea', 'hash-form'),
            __('Kosovo', 'hash-form'),
            __('Kuwait', 'hash-form'),
            __('Kyrgyzstan', 'hash-form'),
            __('Laos', 'hash-form'),
            __('Latvia', 'hash-form'),
            __('Lebanon', 'hash-form'),
            __('Lesotho', 'hash-form'),
            __('Liberia', 'hash-form'),
            __('Libya', 'hash-form'),
            __('Liechtenstein', 'hash-form'),
            __('Lithuania', 'hash-form'),
            __('Luxembourg', 'hash-form'),
            __('Macao', 'hash-form'),
            __('Macedonia', 'hash-form'),
            __('Madagascar', 'hash-form'),
            __('Malawi', 'hash-form'),
            __('Malaysia', 'hash-form'),
            __('Maldives', 'hash-form'),
            __('Mali', 'hash-form'),
            __('Malta', 'hash-form'),
            __('Marshall Islands', 'hash-form'),
            __('Martinique', 'hash-form'),
            __('Mauritania', 'hash-form'),
            __('Mauritius', 'hash-form'),
            __('Mayotte', 'hash-form'),
            __('Mexico', 'hash-form'),
            __('Micronesia', 'hash-form'),
            __('Moldova', 'hash-form'),
            __('Monaco', 'hash-form'),
            __('Mongolia', 'hash-form'),
            __('Montenegro', 'hash-form'),
            __('Montserrat', 'hash-form'),
            __('Morocco', 'hash-form'),
            __('Mozambique', 'hash-form'),
            __('Myanmar', 'hash-form'),
            __('Namibia', 'hash-form'),
            __('Nauru', 'hash-form'),
            __('Nepal', 'hash-form'),
            __('Netherlands', 'hash-form'),
            __('New Caledonia', 'hash-form'),
            __('New Zealand', 'hash-form'),
            __('Nicaragua', 'hash-form'),
            __('Niger', 'hash-form'),
            __('Nigeria', 'hash-form'),
            __('Niue', 'hash-form'),
            __('Norfolk Island', 'hash-form'),
            __('Northern Mariana Islands', 'hash-form'),
            __('Norway', 'hash-form'),
            __('Oman', 'hash-form'),
            __('Pakistan', 'hash-form'),
            __('Palau', 'hash-form'),
            __('Palestine', 'hash-form'),
            __('Panama', 'hash-form'),
            __('Papua New Guinea', 'hash-form'),
            __('Paraguay', 'hash-form'),
            __('Peru', 'hash-form'),
            __('Philippines', 'hash-form'),
            __('Pitcairn', 'hash-form'),
            __('Poland', 'hash-form'),
            __('Portugal', 'hash-form'),
            __('Puerto Rico', 'hash-form'),
            __('Qatar', 'hash-form'),
            __('Reunion', 'hash-form'),
            __('Romania', 'hash-form'),
            __('Russia', 'hash-form'),
            __('Rwanda', 'hash-form'),
            __('Saint Barthelemy', 'hash-form'),
            __('Saint Helena, Ascension and Tristan da Cunha', 'hash-form'),
            __('Saint Kitts and Nevis', 'hash-form'),
            __('Saint Lucia', 'hash-form'),
            __('Saint Martin (French part)', 'hash-form'),
            __('Saint Pierre and Miquelon', 'hash-form'),
            __('Saint Vincent and the Grenadines', 'hash-form'),
            __('Samoa', 'hash-form'),
            __('San Marino', 'hash-form'),
            __('Sao Tome and Principe', 'hash-form'),
            __('Saudi Arabia', 'hash-form'),
            __('Senegal', 'hash-form'),
            __('Serbia', 'hash-form'),
            __('Seychelles', 'hash-form'),
            __('Sierra Leone', 'hash-form'),
            __('Singapore', 'hash-form'),
            __('Sint Maarten (Dutch part)', 'hash-form'),
            __('Slovakia', 'hash-form'),
            __('Slovenia', 'hash-form'),
            __('Solomon Islands', 'hash-form'),
            __('Somalia', 'hash-form'),
            __('South Africa', 'hash-form'),
            __('South Georgia and the South Sandwich Islands', 'hash-form'),
            __('South Sudan', 'hash-form'),
            __('Spain', 'hash-form'),
            __('Sri Lanka', 'hash-form'),
            __('Sudan', 'hash-form'),
            __('Suriname', 'hash-form'),
            __('Svalbard and Jan Mayen', 'hash-form'),
            __('Swaziland', 'hash-form'),
            __('Sweden', 'hash-form'),
            __('Switzerland', 'hash-form'),
            __('Syria', 'hash-form'),
            __('Taiwan', 'hash-form'),
            __('Tajikistan', 'hash-form'),
            __('Tanzania', 'hash-form'),
            __('Thailand', 'hash-form'),
            __('Timor-Leste', 'hash-form'),
            __('Togo', 'hash-form'),
            __('Tokelau', 'hash-form'),
            __('Tonga', 'hash-form'),
            __('Trinidad and Tobago', 'hash-form'),
            __('Tunisia', 'hash-form'),
            __('Turkey', 'hash-form'),
            __('Turkmenistan', 'hash-form'),
            __('Turks and Caicos Islands', 'hash-form'),
            __('Tuvalu', 'hash-form'),
            __('Uganda', 'hash-form'),
            __('Ukraine', 'hash-form'),
            __('United Arab Emirates', 'hash-form'),
            __('United Kingdom', 'hash-form'),
            __('United States', 'hash-form'),
            __('United States Minor Outlying Islands', 'hash-form'),
            __('Uruguay', 'hash-form'),
            __('Uzbekistan', 'hash-form'),
            __('Vanuatu', 'hash-form'),
            __('Vatican City', 'hash-form'),
            __('Venezuela', 'hash-form'),
            __('Vietnam', 'hash-form'),
            __('Virgin Islands, British', 'hash-form'),
            __('Virgin Islands, U.S.', 'hash-form'),
            __('Wallis and Futuna', 'hash-form'),
            __('Western Sahara', 'hash-form'),
            __('Yemen', 'hash-form'),
            __('Zambia', 'hash-form'),
            __('Zimbabwe', 'hash-form'),
        );

        sort($countries, SORT_LOCALE_STRING);
        return $countries;
    }

    public static function get_ages() {
        return array(
            __('Under 18', 'hash-form'),
            __('18-24', 'hash-form'),
            __('25-34', 'hash-form'),
            __('35-44', 'hash-form'),
            __('45-54', 'hash-form'),
            __('55-64', 'hash-form'),
            __('65 or Above', 'hash-form'),
            __('Prefer Not to Answer', 'hash-form'),
        );
    }

    public static function get_satisfaction() {
        return array(
            __('Very Unsatisfied', 'hash-form'),
            __('Unsatisfied', 'hash-form'),
            __('Neutral', 'hash-form'),
            __('Satisfied', 'hash-form'),
            __('Very Satisfied', 'hash-form'),
            __('N/A', 'hash-form'),
        );
    }

    public static function get_agreement() {
        return array(
            __('Strongly Disagree', 'hash-form'),
            __('Disagree', 'hash-form'),
            __('Neutral', 'hash-form'),
            __('Agree', 'hash-form'),
            __('Strongly Agree', 'hash-form'),
            __('N/A', 'hash-form'),
        );
    }

    public static function get_likely() {
        return array(
            __('Extremely Unlikely', 'hash-form'),
            __('Unlikely', 'hash-form'),
            __('Neutral', 'hash-form'),
            __('Likely', 'hash-form'),
            __('Extremely Likely', 'hash-form'),
            __('N/A', 'hash-form'),
        );
    }

    public static function get_importance() {
        return array(
            __('Not at all Important', 'hash-form'),
            __('Somewhat Important', 'hash-form'),
            __('Neutral', 'hash-form'),
            __('Important', 'hash-form'),
            __('Very Important', 'hash-form'),
            __('N/A', 'hash-form'),
        );
    }

    public static function get_options_presets() {
        return array(
            'hf-countries-opts' => array(
                'label' => __('Countries', 'hash-form'),
                'options' => self::get_countries()
            ),
            'hf-age-opts' => array(
                'label' => __('Age', 'hash-form'),
                'options' => self::get_ages()
            ),
            'hf-satisfaction-opts' => array(
                'label' => __('Satisfaction', 'hash-form'),
                'options' => self::get_satisfaction()
            ),
            'hf-importance-opts' => array(
                'label' => __('Importance', 'hash-form'),
                'options' => self::get_importance()
            ),
            'hf-agreement-opts' => array(
                'label' => __('Agreement', 'hash-form'),
                'options' => self::get_agreement()
            ),
            'hf-likely-opts' => array(
                'label' => __('Likely', 'hash-form'),
                'options' => self::get_likely()
            ),
        );
    }

    public static function get_user_id_param($user_id) {
        if (!$user_id || is_numeric($user_id)) {
            return $user_id;
        }
        $user_id = sanitize_text_field($user_id);
        if ($user_id == 'current') {
            $user_id = get_current_user_id();
        } else {
            if (is_email($user_id)) {
                $user = get_user_by('email', $user_id);
            } else {
                $user = get_user_by('login', $user_id);
            }
            if ($user) {
                $user_id = $user->ID;
            }
            unset($user);
        }
        return $user_id;
    }

    public static function get_ip() {
        $ip = self::get_ip_address();
        return $ip;
    }

    public static function get_ip_address() {
        $ip_options = array('REMOTE_ADDR');
        $ip = '';

        foreach ($ip_options as $key) {
            if (!isset($_SERVER[$key]))
                continue;
            $key = self::get_server_value($key);
            foreach (explode(',', $key) as $ip) {
                $ip = trim($ip); // Just to be safe.
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false)
                    return sanitize_text_field($ip);
            }
        }
        return sanitize_text_field($ip);
    }

    public static function get_server_value($value) {
        return isset($_SERVER[$value]) ? wp_strip_all_tags(wp_unslash($_SERVER[$value])) : '';
    }

    public static function count_decimals($num) {
        if (!is_numeric($num))
            return false;
        $num = (string) $num;
        $parts = explode('.', $num);
        if (1 === count($parts))
            return 0;
        return strlen($parts[count($parts) - 1]);
    }

    public static function print_message() {
        if (isset($_SESSION['hashform_message'])) {
            ?>
            <div class="hf-settings-updated">
                <span class="mdi mdi-check-circle"></span>
                <?php
                echo esc_html($_SESSION['hashform_message']);
                unset($_SESSION['hashform_message']);
                ?>
            </div>
            <?php
        }
    }

}
