<?php
defined('ABSPATH') || die();
/*
 * Free vs Pro.
 *
 * Every count here is what the plugins actually ship, so the table can be
 * checked against the screens rather than taken on trust: 27 field types in
 * this plugin and 23 more in Pro (50 together, which is what the builder's
 * field list offers), 79 form templates, 20 payment gateways, 74 modules.
 */
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- included from within a method, so these are function locals.

/**
 * One row of the comparison.
 *
 * @param string $feature What it is.
 * @param string $desc    One line on why it matters. Optional.
 * @param array  $free    array(text, state) where state is yes|no|plain.
 * @param array  $pro     array(text, state).
 */
if (!function_exists('hashform_compare_row')) {

    function hashform_compare_row($feature, $desc, $free, $pro) {
        $cell = function ($value, $column) {
            list($text, $state) = $value;
            $class = 'hf-cmp-' . $column . ' hf-cmp-' . $state;
            $mark = '';

            if ('yes' === $state) {
                $mark = '<span class="hf-cmp-mark" aria-hidden="true">&#10003;</span>';
            } else if ('no' === $state) {
                $mark = '<span class="hf-cmp-mark" aria-hidden="true">&#8211;</span>';
            }

            return '<td class="' . esc_attr($class) . '">' . $mark . '<span>' . esc_html($text) . '</span></td>';
        };

        echo '<tr><td class="hf-cmp-feature"><span class="hf-cmp-name">' . esc_html($feature) . '</span>';

        if ($desc) {
            echo '<span class="hf-cmp-desc">' . esc_html($desc) . '</span>';
        }

        echo '</td>';
        // phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- built above from escaped parts.
        echo $cell($free, 'free');
        echo $cell($pro, 'pro');
        // phpcs:enable
        echo '</tr>';
    }

    /**
     * The columns, repeated per card so every table lines up with the header.
     */
    function hashform_compare_cols() {
        return '<colgroup><col class="hf-cmp-col-feature"/><col class="hf-cmp-col-free"/><col class="hf-cmp-col-pro"/></colgroup>';
    }

    /**
     * Opens a section, closing the one before it.
     */
    function hashform_compare_heading($title) {
        if (hashform_compare_open(null)) {
            echo '</tbody></table></div>';
        }

        hashform_compare_open(true);

        echo '<div class="hf-cmp-section"><h3>' . esc_html($title) . '</h3>';
        echo '<table>' . hashform_compare_cols() . '<tbody>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- fixed markup.
    }

    function hashform_compare_open($set) {
        static $open = false;

        if (null !== $set) {
            $open = (bool) $set;
        }

        return $open;
    }

    function hashform_compare_end() {
        if (hashform_compare_open(null)) {
            echo '</tbody></table></div>';
            hashform_compare_open(false);
        }
    }
}

$hf_yes = function ($text = '') { return array($text, 'yes'); };
$hf_no = function ($text = '') { return array($text, 'no'); };
$hf_plain = function ($text) { return array($text, 'plain'); };
?>

<div class="hf-content hf-upgrade-screen">
    <div class="hf-upgrade-hero">
        <h2><?php esc_html_e('Everything in Hash Form, and then the things you grow into', 'hash-form'); ?></h2>
        <p><?php esc_html_e('The free plugin is a complete form builder - unlimited forms, unlimited entries, and no paywall on the everyday features. Pro is for taking payments, generating forms with AI, and sending submissions on to the tools you already use.', 'hash-form'); ?></p>
        <a class="button button-primary hf-upgrade-button" href="<?php echo esc_url(HashFormUpgrade::PRO_URL); ?>" target="_blank" rel="noopener">
            <?php esc_html_e('Get Hash Form Pro', 'hash-form'); ?>
        </a>
    </div>

    <div class="hf-cmp-table">
        <?php
        /*
         * The sticky is on this wrapper rather than on the table itself: a
         * table with border-collapse does not honour position:sticky reliably,
         * and it ended up sitting over the first section heading.
         */
        ?>
        <div class="hf-cmp-head-wrap">
            <table class="hf-cmp-head">
                <?php echo hashform_compare_cols(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- fixed markup. ?>
                <thead>
                    <tr>
                        <th><?php esc_html_e('Feature', 'hash-form'); ?></th>
                        <th><?php esc_html_e('Free', 'hash-form'); ?></th>
                        <th class="hf-cmp-head-pro"><?php esc_html_e('Pro', 'hash-form'); ?></th>
                    </tr>
                </thead>
            </table>
        </div>

        <?php
        hashform_compare_heading(esc_html__('Building forms', 'hash-form'));
        hashform_compare_row(esc_html__('Field types', 'hash-form'), esc_html__('Pro adds signatures, repeaters, matrices, chained selects and more.', 'hash-form'), $hf_plain(esc_html__('27', 'hash-form')), $hf_plain(esc_html__('50', 'hash-form')));
        hashform_compare_row(esc_html__('Forms and entries', 'hash-form'), esc_html__('No cap in either version.', 'hash-form'), $hf_yes(esc_html__('Unlimited', 'hash-form')), $hf_yes(esc_html__('Unlimited', 'hash-form')));
        hashform_compare_row(esc_html__('Rows and columns', 'hash-form'), esc_html__('Arrange fields on a real canvas rather than one per line.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Conditional logic', 'hash-form'), esc_html__('Show and hide fields based on what has been answered.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Multi-step forms', 'hash-form'), esc_html__('Break a long form into steps with a progress indicator.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Repeating field groups', 'hash-form'), esc_html__('Let a visitor add another guest, item or line.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Calculations', 'hash-form'), esc_html__('Total the form up as it is filled in.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('GDPR consent field', 'hash-form'), esc_html__('A consent tick with your own wording, recorded against the entry.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Ready-made templates', 'hash-form'), esc_html__('Start from a finished form instead of a blank canvas.', 'hash-form'), $hf_no(), $hf_plain(esc_html__('79', 'hash-form')));

        hashform_compare_heading(esc_html__('Design', 'hash-form'));
        hashform_compare_row(esc_html__('Full styling controls', 'hash-form'), esc_html__('Typography, colour and spacing on every part of the form.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Style templates', 'hash-form'), esc_html__('Save a look once and reuse it across forms.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Shortcode, block and Elementor widget', 'hash-form'), '', $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Popup and flying button', 'hash-form'), esc_html__('Show a form over the page instead of in it.', 'hash-form'), $hf_no(), $hf_yes());

        hashform_compare_heading(esc_html__('Payments', 'hash-form'));
        hashform_compare_row(esc_html__('Take payments on a form', 'hash-form'), '', $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Payment gateways', 'hash-form'), esc_html__('Stripe, PayPal, Razorpay, Square, Mollie and more.', 'hash-form'), $hf_no(), $hf_plain(esc_html__('20', 'hash-form')));
        hashform_compare_row(esc_html__('Subscriptions', 'hash-form'), esc_html__('Recurring payments with a trial and a cycle count.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Discount codes', 'hash-form'), esc_html__('Priced on the server, so the total cannot be edited in the browser.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Payments and coupons screens', 'hash-form'), esc_html__('Every transaction in one list, with a detail view.', 'hash-form'), $hf_no(), $hf_yes());

        hashform_compare_heading(esc_html__('Entries and notifications', 'hash-form'));
        hashform_compare_row(esc_html__('Entries stored on your site', 'hash-form'), esc_html__('Every submission kept and searchable.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Email notifications and autoresponder', 'hash-form'), '', $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('SMTP', 'hash-form'), esc_html__('Send through a real mail server rather than the host.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Duplicate, import and export forms', 'hash-form'), esc_html__('Copy a form, or move one between sites.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Entry notes and starring', 'hash-form'), esc_html__('Mark and annotate a submission as you work through them.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Privacy export and erase', 'hash-form'), esc_html__('Answers the data export and erasure requests WordPress handles.', 'hash-form'), $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('Export entries to CSV', 'hash-form'), '', $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('PDF of a submission', 'hash-form'), '', $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Schedule, entry limits and login required', 'hash-form'), esc_html__('Open and close a form on a date, or cap how many it takes.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Send through a mail provider', 'hash-form'), esc_html__('SendGrid, Mailgun, Postmark or Amazon SES, rather than the host.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('SMS notifications', 'hash-form'), esc_html__('Twilio or ClickSend when a submission arrives.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Uploads to Google Drive or Dropbox', 'hash-form'), esc_html__('Files go straight to your storage, with resizing on the way.', 'hash-form'), $hf_no(), $hf_yes());

        hashform_compare_heading(esc_html__('Spam protection', 'hash-form'));
        hashform_compare_row(esc_html__('Built-in captcha and honeypot', 'hash-form'), '', $hf_yes(), $hf_yes());
        hashform_compare_row(esc_html__('hCaptcha, Turnstile and math captcha', 'hash-form'), '', $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Akismet', 'hash-form'), '', $hf_no(), $hf_yes());

        hashform_compare_heading(esc_html__('Beyond the form', 'hash-form'));
        hashform_compare_row(esc_html__('AI form generation', 'hash-form'), esc_html__('Describe the form you want and have it built.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Form analytics', 'hash-form'), esc_html__('Impressions, completions, abandonment and per-field drop-off.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Integrations', 'hash-form'), esc_html__('Mailchimp, HubSpot, Slack, Google Sheets, Zoho and many more.', 'hash-form'), $hf_no(), $hf_plain(esc_html__('74 modules', 'hash-form')));
        hashform_compare_row(esc_html__('Google Analytics events', 'hash-form'), esc_html__('Form views and submissions reported to your analytics.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Where a submission came from', 'hash-form'), esc_html__('Geo location recorded with the entry.', 'hash-form'), $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('Create a post from a submission', 'hash-form'), '', $hf_no(), $hf_yes());
        hashform_compare_row(esc_html__('WooCommerce products on a form', 'hash-form'), '', $hf_no(), $hf_yes());
        hashform_compare_end();
        ?>

        <div class="hf-cmp-foot">
            <a class="button button-primary hf-upgrade-button" href="<?php echo esc_url(HashFormUpgrade::PRO_URL); ?>" target="_blank" rel="noopener">
                <?php esc_html_e('Get Hash Form Pro', 'hash-form'); ?>
            </a>
        </div>
    </div>
</div>
