<?php
defined('ABSPATH') || die();

class HashFormFieldUpload extends HashFormFieldType {

    protected $type = 'upload';

    protected function field_settings_for_type() {
        return array(
            'default' => false,
        );
    }

    protected function extra_field_default_opts() {
        return array(
            'upload_label' => esc_html__('Upload File', 'hash-form'),
            'max_upload_size' => 10,
            'extensions' => 'jpg,jpeg,gif,png',
            'extensions_error_message' => esc_html__('Invalid Extension', 'hash-form'),
            'multiple_uploads' => 'on',
            'multiple_uploads_limit' => 5,
            'multiple_uploads_error_message' => esc_html__('Maximum file upload limit exceeded', 'hash-form'),
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        $max_size = absint($field['max_upload_size']);
        $max_size = $max_size ? $max_size : 10;
        $max_size = $max_size * 1024 * 1024;
        $new_extensions = hashform_sanitize_allowed_file_extensions($field['extensions']);

        if (is_admin()) {
            ?>
            <div class="hf-file-uploader-wrapper">
                <div class="hf-file-uploader">
                    <div class="qq-uploader">
                        <div class="qq-upload-button"><?php esc_html($field['upload_label']); ?></div>
                        <ul class="qq-upload-list"></ul>
                    </div>
                </div>

                <div class="hf-file-preview"></div>

                <input type="hidden" class="hf-uploaded-files" id="hf-field-yd1cxq" value="" name="item_meta[1038]">
                <input type="hidden" class="hf-multiple-upload-limit" value="0">
            </div>
            <?php
        } else {
            ?>
            <div class="hf-file-uploader-wrapper">
                <div class="hf-file-uploader"
                    id="hf-file-uploader-<?php echo mt_rand(100, 99999); ?>"
                    data-upload-label="<?php echo esc_attr($field['upload_label']); ?>"
                    data-extensions="<?php echo esc_attr($new_extensions); ?>"
                    data-extensions-error-message="<?php echo esc_attr($field['extensions_error_message']); ?>"
                    data-multiple-uploads="<?php echo $field['multiple_uploads'] == 'on' ? 'true' : 'false'; ?>"
                    data-multiple-uploads-limit="<?php echo $field['multiple_uploads'] == 'on' ? absint($field['multiple_uploads_limit']) : '-1'; ?>"
                    data-multiple-uploads-error-message="<?php echo esc_attr($field['multiple_uploads_error_message']); ?>"
                    data-max-upload-size="<?php echo esc_attr($max_size); ?>"
                    data-field-uploader-id="<?php echo esc_attr($this->html_id()); ?>">
                </div>

                <div class="hf-file-preview"></div>

                <input type="hidden" class="hf-uploaded-files" <?php $this->field_attrs(); ?>>
                <input type="hidden" class="hf-multiple-upload-limit" value="0">
            </div>
            <?php
        }
    }

    public function set_value_before_save($value) {
        return str_replace(',', '\n', $value);
    }

}
