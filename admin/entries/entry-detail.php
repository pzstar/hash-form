<?php
defined('ABSPATH') || die();
?>

<div id="hf-form-entry-details" class="wrap">
    <div class="hf-page-title">
        <h3>
            <span><?php esc_html_e('Entry', 'hash-form'); ?></span>
            <span class="hf-sub-label">
                <?php printf(esc_html__('(ID %d)', 'hash-form'), absint($entry->id)); ?>
            </span>
        </h3>
    </div>
    <table>
        <tbody>
            <?php
            $file_img_placeholder = HASHFORM_URL . '/img/attachment.png';
            foreach ($entry->metas as $id => $value) {
                $title = $value['name'];
                $entry_value = maybe_unserialize($value['value']);
                $entry_type = $value['type'];

                if (is_array($entry_value)) {
                    $entry_value = array_filter($entry_value);
                    if ($entry_type == 'name') {
                        $entry_value = implode(' ', $entry_value);
                    } else {
                        $entry_value = implode(',<br>', $entry_value);
                    }
                }

                if ($entry_type == 'upload' && $entry_value) {
                    $files_arr = explode(',', $entry_value);
                    $upload_value = '';
                    foreach($files_arr as $file) {
                        $file_info = pathinfo($file);
                        $file_name = $file_info['basename'];
                        $file_label = $file_info['filename'];
                        $file_extension = $file_info['extension'];
                        $upload_dir = wp_upload_dir();

                        $upload_value .= '<a class="hf-form-entry-preview-link" href="' . esc_url($file) . '" target="_blank">';
                        $upload_value .= '<div class="hf-form-entry-preview"><img src="' . esc_url(in_array($file_extension, array('jpg', 'jpeg', 'png', 'gif', 'bmp')) ? $file : $file_img_placeholder) . '"></div>';
                        $upload_value .= '<label>' . esc_html($file_label) . '</label>';
                        $upload_value .= '</a>';
                    }
                    $entry_value = $upload_value;
                }
                echo '<tr>';
                echo '<th>' . esc_html($title) . '</th>';
                echo '<td>' . wp_kses_post($entry_value) . '</td>';
                echo '</tr>';
            }
            ?>
        </tbody>
    </table>
</div>
