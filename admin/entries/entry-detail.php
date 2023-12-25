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
                echo '<tr>';
                echo '<th>' . esc_html($title) . '</th>';
                echo '<td>' . wp_kses_post(str_replace('\n', '<br>', $entry_value)) . '</td>';
                echo '</tr>';
            }
            ?>
        </tbody>
    </table>
</div>
