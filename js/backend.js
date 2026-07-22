var hashFormAdmin = hashFormAdmin || {};

(function ($) {
    'use strict';

    let $buildForm = $('#hf-fields-form'),
        $formMeta = $('#hf-meta-form'),
        $formSettings = $('#hf-settings-form'),
        $styleSettings = $('#hf-style-form'),
        copyHelper = false,
        isCheckedField = false;

    // The hidden <li> option template ships with this placeholder key.
    const OPT_TEMPLATE_KEY = '000';

    // Sub-inputs of an option row that are not the option label itself.
    const SKIPPED_OPT_PARTS = ['[000]', '[value]', '[image_id]', '[price]'];

    /* -----------------------------------------------------------------------
     * Shared helpers
     * -------------------------------------------------------------------- */

    // Every settings control lives inside the panel of the field it edits.
    function fieldIdOf(control) {
        return $(control).closest('.hf-fields-settings').data('fid');
    }

    // The live preview of the field whose settings panel `control` belongs to.
    function editorFieldOf(control) {
        return $('#hf-editor-field-id-' + fieldIdOf(control));
    }

    // Modifier classes are written as `prefix + value`, and only one variant of
    // a group may be present at a time, so the whole group is cleared first.
    const MODIFIER_VARIANTS = {
        'hf-label-position-': ['top', 'left', 'right', 'hide'],
        'hf-label-alignment-': ['left', 'right', 'center'],
        'hf-text-alignment-': ['left', 'right', 'center'],
        'hf-field-alignment-': ['left', 'right', 'center'],
        'hf-options-layout-': ['inline', '1', '2', '3', '4', '5', '6'],
        'hf-submit-btn-align-': ['left', 'right', 'center', 'stretch'],
        'hf-form-': ['no-style', 'default-style', 'custom-style']
    };

    function swapModifierClass($el, prefix, value) {
        const group = MODIFIER_VARIANTS[prefix].map((variant) => prefix + variant).join(' ');
        return $el.removeClass(group).addClass(prefix + value);
    }

    // Open the WP media library on images only and hand the picked attachment back.
    function chooseImage(onSelect) {
        const fileFrame = wp.media({
            multiple: false,
            library: {
                type: ['image']
            }
        });

        fileFrame.on('select', function () {
            onSelect(fileFrame.state().get('selection').first().toJSON());
        });
        fileFrame.open();
    }

    /* -----------------------------------------------------------------------
     * Bootstrap
     * -------------------------------------------------------------------- */

    hashFormAdmin = {
        init: function () {
            if ($formSettings.length > 0) {
                this.initFormSettings();
            } else if ($styleSettings.length > 0) {
                this.initStyleSettings();
            } else if ($buildForm.length > 0) {
                $('.hashform-ajax-udpate-button').on('click', hashFormAdmin.submitBuild);
            } else {
                this.initOtherSettings();
            }

            hashFormAdmin.liveChanges();
            hashFormAdmin.setupFieldOptionSorting($('.hf-option-list'));
            hashFormAdmin.initBulkOptionsOverlay();
            hashFormAdmin.initNewFormModal();

            $(document).find('.hf-color-picker').wpColorPicker();

            $(document).on('click', '#hf-fields-tabs a', hashFormAdmin.clickNewTab);
            $(document).on('input', '.hf-search-fields-input', hashFormAdmin.searchContent);
            $(document).on('click', '.hf-settings-tab a', hashFormAdmin.clickNewTabSettings);

            /* Image */
            $(document).on('click', '.hf-image-preview .hf-choose-image', hashFormAdmin.addImage);
            $(document).on('click', '.hf-image-preview .hf-remove-image', hashFormAdmin.removeImage);

            /* Add field attr to form in Settings page */
            $(document).on('click', '.hf-add-field-attr-to-form li', hashFormAdmin.addFieldAttrToForm);

            /* Open/Close embed popup */
            $(document).on('click', '.hf-embed-button', () => {
                $('#hf-shortcode-form-modal').addClass('hf-open');
            });

            $(document).on('click', '.hashform-close-form-modal', () => {
                $('#hf-shortcode-form-modal').removeClass('hf-open');
            });

            $('.hf-add-more-condition').on('click', hashFormAdmin.addConditionRepeaterBlock);
            $(document).on('click', '.hf-condition-remove', hashFormAdmin.removeConditionRepeaterBlock);

            $(document).on('change', '.hf-fields-type-time .default-value-field', hashFormAdmin.addTimeDefaultValue);
            $(document).on('change', '.hf-fields-type-time .min-value-field, .hf-fields-type-time .max-value-field, .hf-fields-type-time .hf-default-value-field', hashFormAdmin.validateTimeValue);

            $('.hf-fields-type-date .hf-default-value-field').datepicker({
                changeMonth: true
            });

            // Newly built date fields need their picker attached after the fact.
            document.addEventListener('hashform_added_field', (e) => {
                if (e.hfType === 'date') {
                    $(document).find('.hf-fields-type-date .hf-default-value-field').datepicker({
                        changeMonth: true
                    });
                }
            }, false);
        },

        /* -------------------------------------------------------------------
         * Tabs and search
         * ---------------------------------------------------------------- */

        clickNewTab: function () {
            const $link = $(this);
            const href = $link.attr('href');
            if (typeof href === 'undefined') {
                return false;
            }

            $link.closest('li').addClass('hf-active-tab').siblings('li').removeClass('hf-active-tab');
            $link.closest('.hf-fields-container').find('.ht-fields-panel').hide();
            $(href).show();
            return false;
        },

        clickNewTabSettings: function () {
            const $link = $(this);
            const id = this.getAttribute('href');

            if (typeof id === 'undefined') {
                return false;
            }

            $link.closest('li').addClass('hf-active').siblings('li').removeClass('hf-active');
            $(id).removeClass('hf-hidden').siblings().addClass('hf-hidden');
            return false;
        },

        searchContent: function () {
            const searchText = $(this).val().toLowerCase();
            const toSearch = $(this).attr('data-tosearch');

            $('.' + toSearch).each(function () {
                $(this).toggle($(this).attr('id').indexOf(searchText) > -1);
            });
        },

        /* -------------------------------------------------------------------
         * Image pickers
         * ---------------------------------------------------------------- */

        addImage: function (e) {
            e.preventDefault();
            const imagePreview = $(this).closest('.hf-image-preview');

            chooseImage((attachment) => {
                imagePreview.find('img').attr('src', attachment.url);
                imagePreview.find('input.hf-image-id').val(attachment.id);
                imagePreview.find('.hf-image-preview-wrap').removeClass('hf-hidden');
                imagePreview.find('.hf-choose-image').addClass('hf-hidden');

                const frontImagePreview = $('.' + imagePreview.find('input.hf-image-id').attr('id'));
                frontImagePreview.append('<img src="' + attachment.url + '"/>');
                frontImagePreview.find('.hf-no-image-field').addClass('hf-hidden');
            });
        },

        removeImage: function (e) {
            e.preventDefault();
            const imagePreview = $(this).closest('.hf-image-preview');

            imagePreview.find('img').attr('src', '');
            imagePreview.find('.hf-image-preview-wrap').addClass('hf-hidden');
            imagePreview.find('.hf-choose-image').removeClass('hf-hidden');
            imagePreview.find('input.hf-image-id').val('');

            const frontImagePreview = $('.' + imagePreview.find('input.hf-image-id').attr('id'));
            frontImagePreview.find('.hf-no-image-field').removeClass('hf-hidden');
            frontImagePreview.find('img').remove();
        },

        addImageToOption: function (e) {
            e.preventDefault();
            const $imagePreview = $(e.target.closest('li'));

            chooseImage((attachment) => {
                $imagePreview.find('.hf-is-image-holder').html('<img src="' + attachment.url + '"/>');
                $imagePreview.find('.hf-is-image-preview-box').addClass('hf-image-added');
                $imagePreview.find('input.hf-image-id').val(attachment.id).trigger('change');
                hashFormAdmin.resetDisplayedOpts(fieldIdOf($imagePreview));
            });
        },

        removeImageFromOption: function (e) {
            e.preventDefault();
            e.stopPropagation();

            const previewWrapper = $(this).closest('li');
            previewWrapper.find('.hf-is-image-holder').html('');
            previewWrapper.find('.hf-is-image-preview-box').removeClass('hf-image-added');
            previewWrapper.find('input.hf-image-id').val('').trigger('change');
            hashFormAdmin.resetDisplayedOpts(fieldIdOf(previewWrapper));
        },

        /* -------------------------------------------------------------------
         * Saving
         * ---------------------------------------------------------------- */

        // Shared tail of every save button: POST, un-busy the button and show
        // the returned notice. Callers must run preFormSave() first, since it
        // can flush pending inline edits into the form before serialization.
        postFormSave: function (button, data) {
            $.ajax({
                type: 'POST',
                url: ajaxurl,
                data: data,
                success: function (msg) {
                    hashFormAdmin.afterFormSave(button);
                    hashFormAdmin.showUpdatedInfo(msg);
                }
            });
        },

        showUpdatedInfo: function (msg) {
            const panel = document.getElementById('hf-form-panel');
            const notice = document.createElement('div');
            notice.setAttribute('class', 'hf-updated-info');
            notice.innerHTML = msg;
            panel.insertBefore(notice, panel.firstChild);
        },

        submitBuild: function (e) {
            e.preventDefault();
            hashFormAdmin.preFormSave(this);
            hashFormAdmin.postFormSave(this, {
                action: 'hashform_update_form',
                hashform_fields: JSON.stringify($buildForm.serializeArray()),
                hashform_settings: JSON.stringify($formMeta.serializeArray()),
                backend_nonce: hashform_backend_js.nonce
            });
        },

        submitSettingsBuild: function (e) {
            e.preventDefault();
            hashFormAdmin.preFormSave(this);

            const fields = JSON.stringify($formSettings.serializeArray());
            $('#hashform_compact_fields').val(fields);

            hashFormAdmin.postFormSave(this, {
                action: 'hashform_save_form_settings',
                hashform_compact_fields: fields
            });
        },

        submitStylesBuild: function (e) {
            e.preventDefault();
            hashFormAdmin.preFormSave(this);

            const fields = JSON.stringify($styleSettings.serializeArray());
            $('#hashform_compact_fields').val(fields);

            hashFormAdmin.postFormSave(this, {
                action: 'hashform_save_form_style',
                hashform_compact_fields: fields,
                backend_nonce: hashform_backend_js.nonce
            });
        },

        preFormSave: function (b) {
            hashFormBuilder.removeWPUnload();
            if ($('form.inplace_form').length) {
                $('.inplace_save, .postbox').trigger('click');
            }

            if (b.classList.contains('hashform-ajax-udpate-button')) {
                b.classList.add('hashform-updating');
            } else {
                b.classList.add('hashform_loading_button');
            }
            b.setAttribute('aria-busy', 'true');
        },

        afterFormSave: function (button) {
            button.classList.remove('hashform-updating');
            button.classList.remove('hashform_loading_button');
            hashFormBuilder.resetOptionTextDetails();
            button.setAttribute('aria-busy', 'false');

            setTimeout(function () {
                $('.hf-updated-info').fadeOut('slow', function () {
                    this.parentNode.removeChild(this);
                });
            }, 5000);
        },

        /* -------------------------------------------------------------------
         * Page setup: form settings / styles / global settings
         * ---------------------------------------------------------------- */

        initFormSettings: function () {
            $('.hashform-ajax-udpate-button').on('click', hashFormAdmin.submitSettingsBuild);

            $('.hf-multiple-rows').on('click', '.hf-add-email', function () {
                $(this).closest('.hf-multiple-rows').find('.hf-multiple-email').append('<div class="hf-email-row"><input type="email" name="email_to[]" autocomplete="off" value=""/><span class="mdi mdi-trash-can-outline hf-delete-email-row"></span></div>');
            });

            $(document).on('click', '.hf-multiple-rows .hf-delete-email-row', function () {
                $(this).closest('.hf-email-row').remove();
            });
        },

        initStyleSettings: function () {
            $('.hashform-ajax-udpate-button').on('click', hashFormAdmin.submitStylesBuild);

            hashFormAdmin.loadStylePreview();

            $('#hf-form-style-template').on('change', function (e) {
                e.preventDefault();
                const templateID = $(this).val();
                const style = templateID ? $(document).find('option[value="' + templateID + '"]').attr('data-style') : '';
                $(hashFormAdmin.stylePreviewDoc()).find('style.hf-style-content').text(style);
            });

            $('#hf-form-style-select').on('change', function (e) {
                e.preventDefault();
                const styleClass = $(this).find(':selected').val();
                swapModifierClass($(hashFormAdmin.stylePreviewDoc()).find('form.hashform-form'), 'hf-form-', styleClass);
            });
        },

        stylePreviewDoc: function () {
            const iframe = $('#hf-form-preview-iframe')[0];
            return iframe.contentDocument || iframe.contentWindow.document;
        },

        loadStylePreview: function () {
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    action: 'hashform_form_preview',
                    form_id: $('.hf-form-preview').attr('data-form'),
                    backend_nonce: hashform_backend_js.nonce
                },
                success: function (response) {
                    if (!response.success) {
                        return;
                    }

                    $('#hf-form-preview-iframe').remove();
                    const newIframe = $('<iframe>', {
                        id: 'hf-form-preview-iframe'
                    }).appendTo('.hf-form-preview')[0];

                    setTimeout(function () {
                        const doc = newIframe.contentDocument || newIframe.contentWindow.document;
                        doc.open();
                        doc.write(response.data);
                        doc.close();
                        // The preview is for looks only, so swallow all interaction.
                        doc.addEventListener('click', (e) => e.preventDefault(), true);
                        doc.addEventListener('mousedown', (e) => e.preventDefault(), true);
                        doc.addEventListener('mouseup', (e) => e.preventDefault(), true);
                    }, 0);

                    $('.hf-form-wrap').removeClass('hf-content-loading');
                }
            });
        },

        initOtherSettings: function () {
            $(document).on('click', '#hf-test-email-button', function (e) {
                e.preventDefault();

                const testEmailButton = $(this);
                const testEmail = $(document).find('#hf-test-email').val();

                $(document).find('.hf-error').remove();
                if (!hashFormAdmin.isEmail(testEmail)) {
                    testEmailButton.closest('.hf-grid-3').append('<div class="hf-error">Invalid Email</div>');
                    return;
                }

                testEmailButton.addClass('hf-loading-button');
                $('.hf-test-email-notice').html('');

                $.ajax({
                    type: 'POST',
                    url: ajaxurl,
                    data: {
                        action: 'hashform_test_email_template',
                        email_template: $('#hf-settings-email-template').val(),
                        test_email: testEmail,
                        backend_nonce: hashform_backend_js.nonce
                    },
                    success: function (res) {
                        testEmailButton.removeClass('hf-loading-button');
                        const response = JSON.parse(res);
                        const noticeClass = response.success ? 'hf-success' : 'hf-error';
                        testEmailButton.closest('.hf-settings-row').find('.hf-test-email-notice')
                            .html('<div class="' + noticeClass + '">' + response.message + '</div>');
                    }
                });
            });
        },

        /* -------------------------------------------------------------------
         * Live preview bindings
         * ---------------------------------------------------------------- */

        liveChanges: function () {
            $('#hf-meta-panel').on('input', '[data-changeme]', hashFormAdmin.liveChangesInput);
            $('#hf-meta-panel').on('change', 'select[name="submit_btn_alignment"]', hashFormAdmin.liveChangeButtonPosition);

            $buildForm.on('input, change', '[data-changeme]', hashFormAdmin.liveChangesInput);

            $buildForm.on('click', 'input.hf-form-field-required', hashFormAdmin.markRequired);

            $buildForm.on('click', '.hf-add-option', hashFormAdmin.addFieldOption);
            $buildForm.on('input', '.hf-single-option input[type="text"]', hashFormAdmin.resetOptOnChange);
            $buildForm.on('mousedown', '.hf-single-option input[type=radio]', hashFormAdmin.maybeUncheckRadio);
            $buildForm.on('click', '.hf-single-option .hf-choice-input', hashFormAdmin.resetOptOnChange);
            $buildForm.on('change', '.hf-image-id', hashFormAdmin.resetOptOnChange);

            $buildForm.on('click', '.hf-single-option a[data-removeid]', hashFormAdmin.deleteFieldOption);

            $buildForm.on('click', '.hf-is-image-preview-box', hashFormAdmin.addImageToOption);
            $buildForm.on('click', '.hf-is-remove-image', hashFormAdmin.removeImageFromOption);

            $buildForm.on('input', '[data-changeheight]', hashFormAdmin.liveChangeHeight);
            $buildForm.on('input', '[data-changerows]', hashFormAdmin.liveChangeRows);
            $buildForm.on('input', '[data-changestars]', hashFormAdmin.liveChangeStars);

            $buildForm.on('change', 'select[name^="field_options[label_position"]', hashFormAdmin.liveChangeLabelPosition);
            $buildForm.on('change', 'select[name^="field_options[label_alignment"]', hashFormAdmin.liveChangeLabelAlignment);

            $buildForm.on('change', 'select[name^="field_options[options_layout"]', hashFormAdmin.liveChangeOptionsLayout);
            $buildForm.on('change', 'select[name^="field_options[heading_type"]', hashFormAdmin.liveChangeHeadingType);
            $buildForm.on('change', 'select[name^="field_options[text_alignment"]', hashFormAdmin.liveChangeTextAlignment);
            $buildForm.on('change', 'select.hf-select-image-type', hashFormAdmin.liveChangeSelectImageType);

            $buildForm.on('change', '[data-changebordertype]', hashFormAdmin.liveChangeBorderType);
            $buildForm.on('input', '[data-changeborderwidth]', hashFormAdmin.liveChangeBorderWidth);

            $buildForm.on('input', 'input[name^="field_options[field_max_width"]', hashFormAdmin.liveChangeFieldMaxWidth);
            $buildForm.on('change', 'select[name^="field_options[field_max_width_unit"]', hashFormAdmin.liveChangeFieldMaxWidth);

            $buildForm.on('input', 'input[name^="field_options[image_max_width"]', hashFormAdmin.liveChangeImageMaxWidth);
            $buildForm.on('change', 'select[name^="field_options[image_max_width_unit"]', hashFormAdmin.liveChangeImageMaxWidth);

            $buildForm.on('change click', '[data-disablefield]', hashFormAdmin.liveChangeAddressFields);

            $buildForm.on('change click', 'input[name^="field_options[auto_width"]', hashFormAdmin.liveChangeAutoWidth);

            $buildForm.on('change', 'select[name^="field_options[field_alignment"]', hashFormAdmin.liveChangeFieldAlignment);

            $buildForm.on('change', '[data-row-show-hide]', hashFormAdmin.liveChangeHideShowRow);
            $buildForm.on('input', '[data-label-show-hide]', hashFormAdmin.liveChangeHideShowLabel);
            $buildForm.on('change', '[data-label-show-hide-checkbox]', hashFormAdmin.liveChangeHideShowLabelCheckbox);
        },

        /* -------------------------------------------------------------------
         * Live preview: generic [data-changeme] mirroring
         * ---------------------------------------------------------------- */

        liveChangesInput: function () {
            const newValue = this.value,
                changes = document.getElementById(this.getAttribute('data-changeme')),
                att = this.getAttribute('data-changeatt'),
                fieldAttrType = this.getAttribute('type'),
                parentField = $(changes).closest('.hf-editor-form-field');

            if (att === 'value' && fieldAttrType === 'email') {
                hashFormAdmin.showInlineError(this, newValue && !hashFormAdmin.isEmail(newValue), 'Invalid Email Value');
            }

            if (att === 'value' && parentField.attr('data-type') === 'url') {
                hashFormAdmin.showInlineError(this, newValue && !hashFormAdmin.isUrl(newValue), 'Invalid Website/URL Value. Please add full URL value');
            }

            if (parentField.attr('data-type') === 'range_slider') {
                // Wait for the mirrored min/max/step attributes to land first.
                setTimeout(function () {
                    hashFormAdmin.rebuildRangeSlider(parentField.find('.hf-range-input-selector'));
                }, 100);
            }

            if (changes === null) {
                return;
            }

            if (att !== null) {
                hashFormAdmin.applyChangedAtt(changes, att, newValue, this);
            } else if (changes.id.indexOf('setup-message') === 0) {
                if (newValue !== '') {
                    changes.innerHTML = '<input type="text" value="" disabled />';
                }
            } else {
                changes.innerHTML = newValue;

                if ('TEXTAREA' === changes.nodeName && changes.classList.contains('wp-editor-area')) {
                    $(changes).trigger('change');
                }

                if (changes.classList.contains('hf-form-label') && 'break' === changes.nextElementSibling.getAttribute('data-type')) {
                    changes.nextElementSibling.querySelector('.hf-editor-submit-button').textContent = newValue;
                }
            }
        },

        applyChangedAtt: function (changes, att, newValue, source) {
            if (changes.tagName === 'SELECT' && att === 'placeholder') {
                const option = changes.options[0];
                if (option.value === '') {
                    option.innerHTML = newValue;
                } else {
                    // Create a placeholder option if there are no blank values.
                    hashFormBuilder.addBlankSelectOption(changes, newValue);
                }
            } else if (att === 'class') {
                hashFormBuilder.changeFieldClass(changes, source);
            } else if ('TEXTAREA' === changes.nodeName && att === 'value') {
                changes.innerHTML = newValue;
            } else {
                changes.setAttribute(att, newValue);
            }
        },

        // Replace the inline validation message under a settings input.
        showInlineError: function (input, hasError, message) {
            const holder = $(input).closest('div');
            holder.find('.hf-error').remove();
            if (hasError) {
                holder.append('<p class="hf-error">' + message + '</p>');
            }
        },

        rebuildRangeSlider: function (newSlider) {
            const min = parseFloat(newSlider.attr('min'));
            const max = parseFloat(newSlider.attr('max'));
            const step = parseFloat(newSlider.attr('step'));

            let value = newSlider.val();
            value = value < min ? min : value;
            value = value > max ? max : value;
            value = value - (value % step);

            newSlider.prev('.hf-range-slider').slider({
                value: value,
                min: min,
                max: max,
                step: step,
                range: 'min',
                slide: function (e, ui) {
                    $(this).next().val(ui.value).trigger('change');
                }
            });
        },

        /* -------------------------------------------------------------------
         * Live preview: classes, sizes and layout
         * ---------------------------------------------------------------- */

        liveChangeButtonPosition: function (e) {
            swapModifierClass($('.hf-editor-submit-button-wrap'), 'hf-submit-btn-align-', e.target.value);
        },

        liveChangeLabelPosition: function (e) {
            swapModifierClass(editorFieldOf(this), 'hf-label-position-', e.target.value);
        },

        liveChangeLabelAlignment: function (e) {
            swapModifierClass(editorFieldOf(this), 'hf-label-alignment-', e.target.value);
        },

        liveChangeOptionsLayout: function (e) {
            swapModifierClass(editorFieldOf(this), 'hf-options-layout-', e.target.value);
        },

        liveChangeTextAlignment: function (e) {
            swapModifierClass(editorFieldOf(this), 'hf-text-alignment-', e.target.value);
        },

        liveChangeFieldAlignment: function (e) {
            swapModifierClass(editorFieldOf(this), 'hf-field-alignment-', e.target.value);
        },

        liveChangeHeadingType: function (e) {
            const tag = e.target.value;
            const id = 'hf-field-' + fieldIdOf(this);
            $('#' + id).replaceWith(function () {
                return '<' + tag + ' id="' + id + '">' + $(this).html() + '</' + tag + '>';
            });
        },

        liveChangeSelectImageType: function () {
            const option = $(this).val();
            const id = $(this).attr('data-is-id');
            const settingsInputs = $('#hf-field-options-' + id).find('.hf-choice-input');
            const previewInputs = $('#hf-editor-field-container-' + id).find('input');

            settingsInputs.prop('checked', false);
            previewInputs.prop('checked', false);
            settingsInputs.attr('type', option);
            previewInputs.attr('type', option);
        },

        liveChangeHeight: function () {
            const changes = document.getElementById(this.getAttribute('data-changeheight'));
            if (changes !== null) {
                $(changes).css('height', this.value);
            }
        },

        liveChangeRows: function () {
            const changes = document.getElementById(this.getAttribute('data-changerows'));
            if (changes !== null) {
                $(changes).attr('rows', this.value);
            }
        },

        liveChangeStars: function () {
            const newValue = this.value,
                changes = document.getElementById(this.getAttribute('data-changestars'));

            if (changes === null) {
                return;
            }

            let stars = '';
            for (let i = 0; i < newValue; i++) {
                stars = stars + '<label class="hf-star-rating"><input type="radio"><span class="mdi mdi-star-outline"></span></label>';
            }
            $(changes).html(stars);
        },

        liveChangeBorderType: function () {
            $('#' + this.getAttribute('data-changebordertype')).css('border-bottom-style', this.value);
        },

        liveChangeBorderWidth: function () {
            $('#' + this.getAttribute('data-changeborderwidth')).css('border-bottom-width', this.value + 'px');
        },

        // Mirror a `<name>` / `<name>_unit` settings pair onto a CSS custom
        // property, clearing it when no positive width is set.
        liveChangeMaxWidth: function (control, name, cssVar) {
            const settings = $(control).closest('.hf-fields-settings');
            const container = $('#hf-editor-field-container-' + settings.data('fid'));
            const width = settings.find('input[name^="field_options[' + name + '"]').val();
            const unit = settings.find('select[name^="field_options[' + name + '_unit"]').val();

            if (parseInt(width) > 0) {
                container.css(cssVar, parseInt(width) + unit);
            } else {
                container.prop('style').removeProperty(cssVar);
            }
        },

        liveChangeFieldMaxWidth: function () {
            hashFormAdmin.liveChangeMaxWidth(this, 'field_max_width', '--hf-width');
        },

        liveChangeImageMaxWidth: function () {
            hashFormAdmin.liveChangeMaxWidth(this, 'image_max_width', '--hf-image-width');
        },

        liveChangeAddressFields: function () {
            $(document).find('#' + $(this).attr('data-disablefield')).toggleClass('hf-hidden', $(this).is(':checked'));
        },

        liveChangeAutoWidth: function () {
            editorFieldOf(this).toggleClass('hf-auto-width', $(this).is(':checked'));
        },

        liveChangeHideShowRow: function () {
            const parentRow = $(this).closest('.hf-form-container');
            parentRow.find('.hf-row-show-hide').addClass('hf-hidden');

            $.each($(this).val().split('_'), function (index, value) {
                parentRow.find('.hf-row-show-hide.hf-sub-field-' + value).removeClass('hf-hidden');
            });
        },

        // The label is hidden when its text is empty or the "hide" box is ticked.
        // Each entry point reads its own control directly and the sibling from
        // the settings panel, so the two handlers keep separate lookups.
        setFieldLabelHidden: function (parentFieldSetting, hidden) {
            $('#hf-editor-field-id-' + parentFieldSetting.data('fid'))
                .find('label.hf-label-show-hide')
                .toggleClass('hf-hidden', hidden);
        },

        liveChangeHideShowLabel: function () {
            const parentFieldSetting = $(this).closest('.hf-fields-settings');
            hashFormAdmin.setFieldLabelHidden(
                parentFieldSetting,
                !$(this).val() || parentFieldSetting.find('[data-label-show-hide-checkbox]').is(':checked')
            );
        },

        liveChangeHideShowLabelCheckbox: function () {
            const parentFieldSetting = $(this).closest('.hf-fields-settings');
            hashFormAdmin.setFieldLabelHidden(
                parentFieldSetting,
                $(this).is(':checked') || !parentFieldSetting.find('[data-label-show-hide]').val()
            );
        },

        /* -------------------------------------------------------------------
         * Required toggle
         * ---------------------------------------------------------------- */

        markRequired: function () {
            const fieldId = this.id.replace('hf-', '').replace('req-field-', ''),
                checked = this.checked,
                label = $('#hf-editor-field-required-' + fieldId);

            hashFormAdmin.toggleValidationBox(checked, '.hf-required-detail-' + fieldId);

            if (checked) {
                const $reqBox = $('input[name="field_options[required_indicator_' + fieldId + ']"]');
                if ($reqBox.val() === '') {
                    $reqBox.val('*');
                }
            }
            label.toggleClass('hf-hidden', !checked);
        },

        toggleValidationBox: function (hasValue, messageClass) {
            const $msg = $(messageClass);
            $msg.toggleClass('hf-hidden', !hasValue);
            $msg.closest('.hf-form-container').find('.hf-validation-header').toggleClass('hf-hidden', !hasValue);
        },

        /* -------------------------------------------------------------------
         * Field options: add / remove / reorder
         * ---------------------------------------------------------------- */

        //Add new option or "Other" option to radio/checkbox/dropdown
        addFieldOption: function () {
            /*jshint validthis:true */
            const fieldId = fieldIdOf(this),
                optType = $(this).data('opttype'),
                lastKey = hashFormAdmin.getHighestOptKey(fieldId);

            const optKey = lastKey !== OPT_TEMPLATE_KEY ? lastKey + 1 : 0;

            if (optType !== 'other') {
                const template = $('#hf-field-options-' + fieldId + ' .hf-option-template').prop('outerHTML');
                $('#hf-field-options-' + fieldId).append(hashFormAdmin.renderOptionTemplate(template, optKey));
                hashFormAdmin.resetDisplayedOpts(fieldId);
                return;
            }

            //Update hidden field
            document.getElementById('other_input_' + fieldId).value = 1;

            //Hide "Add Other" option now if this is radio field
            const ftype = $(this).data('ftype');
            if (ftype === 'radio' || ftype === 'select') {
                $(this).fadeOut('slow');
            }

            $.post(ajaxurl, {
                action: 'hf-add-field_option',
                field_id: fieldId,
                opt_key: optKey,
                opt_type: optType,
                backend_nonce: hashform_backend_js.nonce
            }, function (msg) {
                $('#hf-field-options-' + fieldId).append(msg);
                hashFormAdmin.resetDisplayedOpts(fieldId);
            });
        },

        // The hidden <li> template carries the placeholder key '000' throughout
        // its ids, names and attributes; swap every spelling for the real key.
        renderOptionTemplate: function (template, optKey) {
            const oldKey = OPT_TEMPLATE_KEY;
            return template
                .replace(new RegExp('optkey="' + oldKey + '"', 'g'), 'optkey="' + optKey + '"')
                .replace(new RegExp('-' + oldKey + '_', 'g'), '-' + optKey + '_')
                .replace(new RegExp('-' + oldKey + '"', 'g'), '-' + optKey + '"')
                .replace(new RegExp('\\[' + oldKey + '\\]', 'g'), '[' + optKey + ']')
                .replace('hf-hidden hf-option-template', '');
        },

        deleteFieldOption: function () {
            const parentLi = this.closest('li'),
                parentUl = parentLi.parentNode,
                fieldId = this.getAttribute('data-fid');

            $(parentLi).fadeOut('slow', function () {
                $(parentLi).remove();

                if ($(parentUl).find('.hashform_other_option').length < 1) {
                    const otherInput = document.getElementById('other_input_' + fieldId);
                    if (otherInput !== null) {
                        otherInput.value = 0;
                    }
                    $('#other_button_' + fieldId).fadeIn('slow');
                }
                hashFormAdmin.resetDisplayedOpts(fieldId);
            });
        },

        resetOptOnChange: function () {
            const check = $(this);
            const field = hashFormAdmin.getFieldKeyFromOpt(this);
            if (!field) {
                return;
            }

            hashFormAdmin.resetSingleOpt(field.fieldId, field.fieldKey, check.closest('li'));

            setTimeout(function () {
                check.next('input').trigger('change');
            }, 100);
        },

        // Radios cannot normally be unticked; let a click on the checked one clear it.
        maybeUncheckRadio: function () {
            const $self = $(this);

            if (!$self.is(':checked')) {
                $self.closest('li').siblings().find('.hf-choice-input').prop('checked', false);
                return;
            }

            const unbind = function () {
                $self.off('mouseup', up);
            };

            const up = function () {
                setTimeout(function () {
                    $self.prop('checked', false);
                }, 0);
                unbind();
            };

            $self.on('mouseup', up);
            $self.one('mouseout', unbind);
        },

        setupFieldOptionSorting: function (sort) {
            $(sort).sortable({
                items: 'li',
                axis: 'y',
                opacity: 0.65,
                forcePlaceholderSize: false,
                handle: '.hf-drag',
                helper: function (e, li) {
                    if (li.find('input[type="radio"]:checked, input[type="checkbox"]:checked').length > 0) {
                        isCheckedField = true;
                    }
                    copyHelper = li.clone().insertAfter(li);
                    return li.clone();
                },
                stop: function (e, ui) {
                    copyHelper && copyHelper.remove();

                    const fieldId = ui.item.attr('id').replace('hf-option-list-', '').replace('-' + ui.item.data('optkey'), '');
                    hashFormAdmin.resetDisplayedOpts(fieldId);

                    // Sorting clones the row, which drops the checked state.
                    if (isCheckedField) {
                        ui.item.find('input[type="radio"], input[type="checkbox"]').prop('checked', true);
                        ui.item.find('input[type="radio"]').trigger('click');
                        isCheckedField = false;
                    }
                }
            });
        },

        /* -------------------------------------------------------------------
         * Field options: reading the settings panel
         * ---------------------------------------------------------------- */

        getFieldKeyFromOpt: function (object) {
            const allOpts = $(object).closest('.hf-option-list');
            if (!allOpts.length) {
                return false;
            }

            return {
                fieldId: allOpts.attr('id').replace('hf-field-options-', ''),
                fieldKey: allOpts.data('key')
            };
        },

        usingSeparateValues: function (fieldId) {
            const field = document.getElementById('separate_value_' + fieldId);
            return field === null ? false : field.checked;
        },

        getMultipleOpts: function (fieldId) {
            const opts = [],
                hasImageOptions = document.getElementsByName('field_options[select_option_type_' + fieldId + ']').length > 0,
                optVals = $('input[name^="field_options[options_' + fieldId + ']"]'),
                separateValues = hashFormAdmin.usingSeparateValues(fieldId);

            for (let i = 0; i < optVals.length; i++) {
                const name = optVals[i].name;
                if (SKIPPED_OPT_PARTS.some((part) => name.indexOf(part) > 0)) {
                    continue;
                }

                let saved = optVals[i].value;
                let label = saved;
                const key = name.replace('field_options[options_' + fieldId + '][', '').replace('[label]', '').replace(']', '');

                if (separateValues) {
                    saved = $('input[name="' + name.replace('[label]', '[value]') + '"]').val();
                }

                const checked = hashFormBuilder.getChecked(optVals[i].getAttribute('class'));

                if (hasImageOptions) {
                    const imageUrl = hashFormBuilder.getImageUrlFromInput(optVals[i]);
                    label = hashFormBuilder.getImageLabel(label, false, imageUrl);
                }

                opts.push({
                    saved: saved,
                    label: label,
                    checked: checked,
                    key: key
                });
            }
            return opts;
        },

        getFieldOptions: function (fieldId) {
            const listItems = document.getElementById('hf-field-options-' + fieldId).querySelectorAll('.hashform_single_option'),
                options = [];

            for (let index = 0; index < listItems.length; index++) {
                const li = listItems[index];
                if (li.classList.contains('hf-hidden')) {
                    continue;
                }
                options.push(li.querySelector('.field_' + fieldId + '_option').value);
            }
            return options;
        },

        getHighestOptKey: function (fieldId) {
            const opts = $('#hf-field-options-' + fieldId + ' li');
            let optKey = 0,
                lastKey = 0;

            for (let i = 0; i < opts.length; i++) {
                optKey = opts[i].getAttribute('data-optkey');
                if (opts.length === 1) {
                    return optKey;
                }
                if (optKey !== OPT_TEMPLATE_KEY) {
                    optKey = parseInt(optKey.replace('other_', ''), 10);
                }

                if (!isNaN(lastKey) && (optKey > lastKey || lastKey === OPT_TEMPLATE_KEY)) {
                    lastKey = optKey;
                }
            }
            return lastKey;
        },

        /* -------------------------------------------------------------------
         * Field options: repainting the live preview
         * ---------------------------------------------------------------- */

        resetSingleOpt: function (fieldId, fieldKey, thisOpt) {
            const optKey = thisOpt.data('optkey'),
                separateValues = hashFormAdmin.usingSeparateValues(fieldId),
                single = $('label[for="field_' + fieldKey + '-' + optKey + '"]'),
                baseName = 'field_options[options_' + fieldId + '][' + optKey + ']';

            let label = $('input[name="' + baseName + '[label]"]');

            if (single.length < 1) {
                hashFormAdmin.resetDisplayedOpts(fieldId);

                // Set the default value.
                const defaultVal = thisOpt.find('input[name^="default_value_"]');
                if (defaultVal.is(':checked') && label.length > 0) {
                    $('select[name^="item_meta[' + fieldId + ']"]').val(label.val());
                }
                return;
            }

            const previewInput = single.children('input');
            let saved;

            if (label.length < 1) {
                // Check for other label.
                label = $('input[name="' + baseName + '"]');
                saved = label.val();
            } else if (separateValues) {
                saved = $('input[name="' + baseName + '[value]"]').val();
            } else {
                saved = label.val();
            }

            if (label.length < 1) {
                return;
            }

            // Set the displayed value.
            const text = single[0].childNodes;
            text[text.length - 1].nodeValue = ' ' + label.val();
            previewInput.closest('.hf-choice').find('.hf-field-is-label').text(saved);

            // Set saved value.
            previewInput.val(saved);

            // Set the default value.
            previewInput.prop('checked', thisOpt.find('input[name^="default_value_"]').is(':checked'));
        },

        resetDisplayedOpts: function (fieldId) {
            const input = $('[name^="item_meta[' + fieldId + ']"]');

            if (input.length < 1) {
                return;
            }

            if (input.is('select')) {
                const selectedValDefault = input.val();
                const placeholder = document.getElementById('hf-placeholder-' + fieldId);

                const atts = {sourceID: fieldId};
                if (placeholder !== null && placeholder.value !== '') {
                    atts.placeholder = placeholder.value;
                }
                hashFormAdmin.fillDropdownOpts(input[0], atts);

                // Re-query: fillDropdownOpts has just rewritten the options.
                const refreshed = $('[name^="item_meta[' + fieldId + ']"]');
                if (refreshed.length > 0 && refreshed[0].contains(selectedValDefault)) {
                    refreshed.val(selectedValDefault);
                }
            } else {
                const opts = hashFormAdmin.getMultipleOpts(fieldId);
                const type = input.attr('type');
                const fieldInfo = hashFormAdmin.getFieldKeyFromOpt($('#hf-option-list-' + fieldId + '-000'));
                const container = $('#hf-editor-field-container-' + fieldId + ' .hf-choice-container');

                container.html('');
                for (let i = 0; i < opts.length; i++) {
                    container.append(hashFormAdmin.addRadioCheckboxOpt(type, opts[i], fieldId, fieldInfo.fieldKey));
                }
            }

            hashFormAdmin.adjustConditionalLogicOptionOrders(fieldId);
        },

        fillDropdownOpts: function (field, atts) {
            if (field === null) {
                return;
            }

            const showOther = atts.other;
            const placeholder = atts.placeholder;

            hashFormAdmin.removeDropdownOpts(field);

            const opts = hashFormAdmin.getMultipleOpts(atts.sourceID);
            let hasPlaceholder = (typeof placeholder !== 'undefined');

            for (let i = 0; i < opts.length; i++) {
                let label = opts[i].label;
                const isOther = opts[i].key.indexOf('other') !== -1;

                if (hasPlaceholder && label !== '') {
                    hashFormBuilder.addBlankSelectOption(field, placeholder);
                } else if (hasPlaceholder) {
                    label = placeholder;
                }
                hasPlaceholder = false;

                if (!isOther || showOther) {
                    const opt = document.createElement('option');
                    opt.value = opts[i].saved;
                    opt.innerHTML = label;
                    field.appendChild(opt);
                }
            }
        },

        removeDropdownOpts: function (field) {
            if (typeof field.options === 'undefined') {
                return;
            }

            for (let i = field.options.length - 1; i >= 0; i--) {
                field.remove(i);
            }
        },

        addRadioCheckboxOpt: function (type, opt, fieldId, fieldKey) {
            const id = 'hf-field-' + fieldKey + '-' + opt.key;

            return '<div class="hf-choice hf-' + type + '" id="hf-' + type + '-' + fieldId + '-' + opt.key + '"><label for="' + id +
                '"><input type="' + type +
                '" name="item_meta[' + fieldId + ']' + (type === 'checkbox' ? '[]' : '') +
                '" value="' + opt.saved + '" id="' + id + '"' + (opt.checked ? ' checked="checked"' : '') + '> ' + opt.label + '</label>' +
                '</div>';
        },

        adjustConditionalLogicOptionOrders: function (fieldId) {
            const rows = document.getElementById('hf-wrap').querySelectorAll('.hashform_logic_row'),
                fieldOptions = hashFormAdmin.getFieldOptions(fieldId);

            for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                const row = rows[rowIndex];

                // Loose on purpose: the select value is a string, fieldId a number.
                if (row.querySelector('.hashform_logic_field_opts').value != fieldId) {
                    continue;
                }

                const logicId = row.id.split('_')[2];
                const valueSelect = row.querySelector('select[name="field_options[hide_opt_' + logicId + '][]"]');

                // Walk backwards and prepend, so the options end up in source order.
                for (let optionIndex = fieldOptions.length - 1; optionIndex >= 0; optionIndex--) {
                    const expectedOption = fieldOptions[optionIndex];
                    let optionMatch = valueSelect.querySelector('option[value="' + expectedOption + '"]');

                    if (optionMatch === null) {
                        optionMatch = document.createElement('option');
                        optionMatch.setAttribute('value', expectedOption);
                        optionMatch.textContent = expectedOption;
                    }

                    valueSelect.prepend(optionMatch);
                }

                // Keep the blank option first.
                const blank = valueSelect.querySelector('option[value=""]');
                if (blank !== null) {
                    valueSelect.prepend(blank);
                }
            }
        },

        /* -------------------------------------------------------------------
         * Modals: bulk options and new form
         * ---------------------------------------------------------------- */

        initModal: function (id, width) {
            const $info = $(id);
            if (!$info.length) {
                return false;
            }
            if (typeof width === 'undefined') {
                width = '550px';
            }

            $info.dialog({
                dialogClass: 'hf-dialog',
                modal: true,
                autoOpen: false,
                closeOnEscape: true,
                width: width,
                resizable: false,
                draggable: false,
                open: function () {
                    $('.ui-dialog-titlebar').addClass('hf-hidden').removeClass('ui-helper-clearfix');
                    $('#wpwrap').addClass('hashform_overlay');
                    $('.hf-dialog').removeClass('ui-widget ui-widget-content ui-corner-all');
                    $info.removeClass('ui-dialog-content ui-widget-content');
                    hashFormAdmin.bindClickForDialogClose($info);
                },
                close: function () {
                    $('#wpwrap').removeClass('hashform_overlay');
                    $('.spinner').css('visibility', 'hidden');

                    this.removeAttribute('data-option-type');
                    const optionType = document.getElementById('bulk-option-type');
                    if (optionType) {
                        optionType.value = '';
                    }
                }
            });
            return $info;
        },

        bindClickForDialogClose: function ($modal) {
            const closeModal = function () {
                $modal.dialog('close');
            };
            $('.ui-widget-overlay').on('click', closeModal);
            $modal.on('click', 'a.dismiss', closeModal);
        },

        initBulkOptionsOverlay: function () {
            const $info = hashFormAdmin.initModal('#hf-bulk-edit-modal', '700px');
            if ($info === false) {
                return;
            }

            $('.hf-insert-preset').on('click', function (event) {
                const opts = JSON.parse(this.getAttribute('data-opts'));
                event.preventDefault();
                document.getElementById('hf-bulk-options').value = opts.join('\n');
                return false;
            });

            $buildForm.on('click', 'a.hf-bulk-edit-link', function (event) {
                event.preventDefault();

                const fieldId = $(this).closest('[data-fid]').data('fid'),
                    separate = hashFormAdmin.usingSeparateValues(fieldId),
                    optList = document.getElementById('hf-field-options-' + fieldId);

                if (!optList) {
                    return;
                }

                const opts = optList.getElementsByTagName('li');
                document.getElementById('bulk-field-id').value = fieldId;

                let content = '';
                for (let i = 0; i < opts.length; i++) {
                    const key = opts[i].getAttribute('data-optkey');
                    if (key !== OPT_TEMPLATE_KEY) {
                        const label = document.getElementsByName('field_options[options_' + fieldId + '][' + key + '][label]')[0];
                        if (typeof label !== 'undefined') {
                            content += label.value;
                            if (separate) {
                                content += '|' + document.getElementsByName('field_options[options_' + fieldId + '][' + key + '][value]')[0].value;
                            }
                            content += '\r\n';
                        }
                    }

                    // Kept inside the loop: an empty list must not clear the textarea.
                    if (i >= opts.length - 1) {
                        document.getElementById('hf-bulk-options').value = content;
                    }
                }
                $info.dialog('open');
                return false;
            });

            $('#hf-update-bulk-options').on('click', function () {
                const fieldId = document.getElementById('bulk-field-id').value;
                if (document.getElementById('bulk-option-type').value) {
                    return;
                }

                this.classList.add('hf-loading-button');

                $.ajax({
                    type: 'POST',
                    url: ajaxurl,
                    data: {
                        action: 'hashform_import_options',
                        field_id: fieldId,
                        opts: document.getElementById('hf-bulk-options').value,
                        separate: hashFormAdmin.usingSeparateValues(fieldId),
                        backend_nonce: hashform_backend_js.nonce
                    },
                    success: function (html) {
                        document.getElementById('hf-field-options-' + fieldId).innerHTML = html;
                        hashFormAdmin.resetDisplayedOpts(fieldId);
                        if (typeof $info !== 'undefined') {
                            $info.dialog('close');
                            document.getElementById('hf-update-bulk-options').classList.remove('hf-loading-button');
                        }
                    }
                });
            });
        },

        initNewFormModal: function () {
            $(document).on('click', '.hf-trigger-modal', () => {
                $('#hf-add-form-modal').addClass('hf-open');
            });

            $(document).on('click', '.hashform-close-form-modal', () => {
                $('#hf-add-form-modal').removeClass('hf-open');
            });

            $(document).on('submit', '#hf-add-template', function (event) {
                event.preventDefault();

                const $template = $(this).closest('#hf-add-template');
                const addTemplateButton = $template.find('button');
                if (addTemplateButton.hasClass('hashform-updating')) {
                    return;
                }

                addTemplateButton.addClass('hashform-updating');
                $.ajax({
                    type: 'POST',
                    url: ajaxurl,
                    data: {
                        action: 'hashform_create_form',
                        name: $template.find('input[name=template_name]').val(),
                        backend_nonce: hashform_backend_js.nonce
                    },
                    success: function (response) {
                        const res = JSON.parse(response);
                        if (typeof res.redirect !== 'undefined') {
                            window.location = res.redirect;
                        }
                    }
                });
            });
        },

        /* -------------------------------------------------------------------
         * Conditional logic repeater
         * ---------------------------------------------------------------- */

        addConditionRepeaterBlock: async function (e) {
            e.preventDefault();
            const parentRepeaterBlock = $(this).closest('.hf-form-row').find('.hf-condition-repeater-blocks');

            await $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    action: 'hashform_add_more_condition_block',
                    form_id: $('#form_id').val(),
                    backend_nonce: hashform_backend_js.nonce
                },
                success: function (msg) {
                    parentRepeaterBlock.append(msg);
                }
            });
        },

        removeConditionRepeaterBlock: function () {
            $(this).closest('.hf-condition-repeater-block').remove();
        },

        /* -------------------------------------------------------------------
         * Settings page: field attribute inserter
         * ---------------------------------------------------------------- */

        addFieldAttrToForm: function () {
            const fieldId = $(this).attr('data-value');
            const $row = $(this).closest('.hf-form-row');
            const inputChange = $row.find('input');
            const textAreaChange = $row.find('textarea');

            // Note: .val(x) writes one value to every match, seeded from the
            // first one. Preserved from the original.
            if (fieldId && inputChange.length > 0) {
                inputChange.val(inputChange.val() + ' ' + fieldId);
            }

            if (fieldId && textAreaChange.length > 0) {
                textAreaChange.val(textAreaChange.val() + ' ' + fieldId);
            }
        },

        /* -------------------------------------------------------------------
         * Time field
         * ---------------------------------------------------------------- */

        // Settings store 24h HH:MM; anything else is reset rather than guessed at.
        clampTimeValue: function (input) {
            if (input.val() && !input.val().match(/^(2[0-3]|[01][0-9]):[0-5][0-9]$/)) {
                input.val('00:00');
            }
        },

        addTimeDefaultValue: function () {
            const that = $(this);
            hashFormAdmin.clampTimeValue(that);

            const fieldId = fieldIdOf(this);
            const [hourString, minute] = that.val().split(':');
            const hour = +hourString % 24;

            $('#hf-editor-field-container-' + fieldId + ' .hf-timepicker')
                .val(minute && (hour % 12 || 12) + ':' + minute + (hour < 12 ? 'am' : 'pm'));
        },

        validateTimeValue: function () {
            const that = $(this);
            hashFormAdmin.clampTimeValue(that);
            that.trigger('input');
        },

        /* -------------------------------------------------------------------
         * Validators
         * ---------------------------------------------------------------- */

        isEmail: function (email) {
            const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        },

        isUrl: function (url) {
            const regex = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            return regex.test(url);
        }
    };

    $(function () {
        hashFormAdmin.init();
    });
})(jQuery);


/**
 * NOTE: this shadows Node.prototype.contains for <select> elements. Kept as-is;
 * resetDisplayedOpts() depends on this value-lookup behaviour.
 */
HTMLSelectElement.prototype.contains = function (value) {
    for (var i = 0, l = this.options.length; i < l; i++) {
        if (this.options[i].value == value) {
            return true;
        }
    }
    return false;
};
