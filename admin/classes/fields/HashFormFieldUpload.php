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
            'max_upload_size' => '8000000',
            'extensions' => 'jpg,jpeg,gif,png',
            'extensions_error_message' => esc_html__('Invalid Extension', 'hash-form'),
            'multiple_uploads' => 'on',
            'multiple_uploads_limit' => 5,
            'multiple_uploads_error_message' => esc_html__('Maximum number for file uploaded', 'hash-form'),
        );
    }

    protected function input_html() {
        $field = $this->get_field();
        if (is_admin()) {
            ?>
            <div class="hf-file-uploader-wrapper">
                <div class="hf-file-uploader">
                    <div class="qq-uploader">
                        <div class="qq-upload-button">Upload File</div>
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
                    data-extensions="<?php echo esc_attr($field['extensions']); ?>"
                    data-extensions-error-message="<?php echo esc_attr($field['extensions_error_message']); ?>"
                    data-multiple-uploads="<?php echo $field['multiple_uploads'] == 'on' ? 'true' : 'false'; ?>"
                    data-multiple-uploads-limit="<?php echo esc_attr($field['multiple_uploads_limit']); ?>"
                    data-multiple-uploads-error-message="<?php echo esc_attr($field['multiple_uploads_error_message']); ?>"
                    data-max-upload-size="<?php echo esc_attr($field['max_upload_size']); ?>"
                    data-field-uploader-id="<?php echo esc_attr($this->html_id()); ?>">
                </div>

                <div class="hf-file-preview"></div>

                <input type="hidden" class="hf-uploaded-files" <?php $this->field_attrs(); ?>>
                <input type="hidden" class="hf-multiple-upload-limit" value="0">
            </div>
            <?php
        }
    }

}
