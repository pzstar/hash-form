jQuery(function ($) {

    'use strict';

    /* -----------------------------------------------------------------------
     * Range sliders
     * -------------------------------------------------------------------- */

    function initRangeSliders(inputs) {
        inputs.each(function () {
            const input = $(this);
            input.prev('.hf-range-slider').slider({
                value: input.val(),
                min: parseFloat(input.attr('min')),
                max: parseFloat(input.attr('max')),
                step: parseFloat(input.attr('step')),
                range: 'min',
                slide: function (e, ui) {
                    $(this).next().val(ui.value);
                }
            });
        });
    }

    initRangeSliders($('.hf-range-input-selector'));

    // Update the slider when the input loses focus, as it has most likely changed.
    $('.hf-range-input-selector').on('blur', function () {
        const input = $(this);
        let value = isNaN(input.val()) ? '' : input.val();

        // Keep a manually typed value within the min/max bounds.
        if (value) {
            const min = parseFloat(input.attr('min'));
            const max = parseFloat(input.attr('max'));
            if (value < min) {
                value = min;
            }
            if (value > max) {
                value = max;
            }
        }

        input.val(value);
        input.prev('.hf-range-slider').slider('value', value);
    });

    /* -----------------------------------------------------------------------
     * Form submission
     * -------------------------------------------------------------------- */

    // Scroll to the field holding the first validation error.
    function firstErrorField(errors) {
        const firstError = Object.keys(errors)[0];
        const separator = firstError.indexOf('-');

        if (separator > 0) {
            const fieldId = firstError.slice(0, separator).replace('field', '');
            const subField = firstError.slice(separator + 1);
            return $('#hf-subfield-container-' + subField + '-' + fieldId);
        }

        return $('#hf-field-container-' + firstError.replace('field', ''));
    }

    function resetRecaptcha() {
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha?.reset();
        }
    }

    function showValidationErrors(errors) {
        $.each(errors, function (key, message) {
            $('#hf-field-container-' + key.replace('field', ''))
                .addClass('hashform-error-container')
                .append('<span class="hf-error-msg">' + message + '</span>');
        });

        resetRecaptcha();

        $('html, body').animate({
            scrollTop: firstErrorField(errors).offset().top - 300
        }, 300);
    }

    function resetForm(form) {
        form.trigger('reset');
        form.find('.hf-star-rating').removeClass('hf-star-checked');
        initRangeSliders(form.find('.hf-range-input-selector'));
        $('body').find('.hf-preview-remove').trigger('click');
    }

    $(document).on('submit.hashform-form', '.hashform-form', function (e) {
        e.preventDefault();

        const form = $(this);
        const submitButton = form.find('button.hf-submit-button');

        // Ignore repeat submits while a request is in flight.
        if (submitButton.hasClass('hf-button-loading')) {
            return;
        }
        submitButton.addClass('hf-button-loading');

        // reCAPTCHA v3 renders as an invisible widget and needs a token fetched
        // on submit; v2 puts its response into the form itself.
        const isV3 = $('.g-recaptcha').attr('data-size') == 'invisible';
        if (isV3) {
            const siteKey = $('.g-recaptcha').attr('data-sitekey');
            grecaptcha.ready(function () {
                grecaptcha.execute(siteKey, { action: 'hashform' }).then(function (token) {
                    form.append('<input type="hidden" id="recaptcha_token" value="' + token + '">');
                });
            });
        }

        $('.hf-error-msg, .hf-success-msg, .hf-failed-msg').remove();
        $(document).find('.hashform-error-container').removeClass('hashform-error-container');

        // Give grecaptcha.execute() time to resolve before reading the token.
        setTimeout(() => {
            const data = form.serializeArray();

            if (isV3) {
                const token = $(document).find('#recaptcha_token').val();
                $(document).find('#recaptcha_token').remove();
                data.forEach(function (item) {
                    if (item.name === 'g-recaptcha-response') {
                        item.value = item.value ? item.value : token;
                    }
                });
            }

            $.ajax({
                type: 'POST',
                url: hashform_vars.ajaxurl,
                dataType: 'json',
                data: {
                    action: 'hashform_process_entry',
                    data: $.param(data),
                    location: window.location.href
                },
                success: function (response) {
                    submitButton.removeClass('hf-button-loading');

                    if (response.status === 'redirect') {
                        window.location.replace(response.message);
                    } else if (response.status === 'success') {
                        resetForm(form);
                        form.append('<span class="hf-success-msg">' + response.message + '</span>');
                    } else if (response.status === 'failed') {
                        resetRecaptcha();
                        form.append('<span class="hf-failed-msg">' + response.message + '</span>');
                    } else {
                        showValidationErrors(response.message);
                    }
                }
            });
        }, 1000);
    });

    /* -----------------------------------------------------------------------
     * Spinner field
     * -------------------------------------------------------------------- */

    $('.hashform-field-type-spinner .hf-quantity .mdi-plus').on('click', function () {
        const input = $(this).closest('.hashform-field-type-spinner').find('input');
        const max = input.attr('max');
        const value = Number(input.val());
        input.val(value < max ? value + 1 : max);
    });

    $('.hashform-field-type-spinner .hf-quantity .mdi-minus').on('click', function () {
        const input = $(this).closest('.hashform-field-type-spinner').find('input');
        const min = input.attr('min');
        const value = Number(input.val());
        input.val(value > min ? value - 1 : min);
    });

    /* -----------------------------------------------------------------------
     * Star rating field
     * -------------------------------------------------------------------- */

    $(document).on('click', '.hashform-star-group input', function () {
        $(this).closest('.hashform-star-group').find('.hf-star-rating').removeClass('hf-star-checked');
        $(this).parent('.hf-star-rating').prevAll('.hf-star-rating').addBack().addClass('hf-star-checked');
    });

    $(document).on('mouseenter', '.hashform-star-group .hf-star-rating:not(.hf-star-rating-readonly)', function () {
        $(this).prevAll('.hf-star-rating').addBack().addClass('hf-star-hovered');
        $(this).nextAll('.hf-star-rating').addClass('hf-star-non-hovered');
    });

    $(document).on('mouseleave', '.hashform-star-group .hf-star-rating:not(.hf-star-rating-readonly)', function () {
        $(this).closest('.hashform-star-group').find('.hf-star-rating').removeClass('hf-star-hovered hf-star-non-hovered');
    });

    /* -----------------------------------------------------------------------
     * Date and time fields
     * -------------------------------------------------------------------- */

    $('.hashform-field-type-date input').each(function () {
        const input = $(this);
        const format = input.attr('data-format');
        const value = input.val();

        if (value) {
            const date = new Date(value);
            const momentFormat = format.replace('dd', 'DD').replace('MM', 'MMMM').replace('mm', 'MM');
            input.val(Number.isNaN(date.getTime()) ? '' : moment(date).format(momentFormat));
        }

        input.datepicker({
            changeMonth: true,
            dateFormat: format
        });
    });

    $('.hashform-field-type-time .hf-timepicker').timepicker({
        'showDuration': false,
        'timeFormat': 'g:ia'
    });

    /* -----------------------------------------------------------------------
     * Conditional logic
     * -------------------------------------------------------------------- */

    // Compare a single configured value against the set of checked values.
    function arrayValsCompare(compareValue, arrayVals, condition) {
        switch (condition) {
            case 'equal':
                return arrayVals.includes(compareValue);
            case 'less_than':
                return arrayVals.length > 0 && arrayVals.every((val) => compareValue > val);
            case 'less_than_or_equal':
                return arrayVals.length > 0 && arrayVals.every((val) => compareValue >= val);
            case 'greater_than':
                return arrayVals.length > 0 && arrayVals.every((val) => compareValue < val);
            case 'greater_than_or_equal':
                return arrayVals.length > 0 && arrayVals.every((val) => compareValue <= val);
            case 'is_like':
                return arrayVals.some((val) => val.indexOf(compareValue) >= 0);
            default:
                return false;
        }
    }

    // Returns whether the condition holds, or null when the condition is unknown.
    function conditionMatches(condition, value, compareValue, arrayVals, isArrayVals) {
        switch (condition) {
            case 'equal':
            case 'not_equal': {
                const equal = isArrayVals
                    ? arrayValsCompare(compareValue, arrayVals, 'equal')
                    : arrayValsCompare(value, compareValue.split(/\s*,\s*/), 'equal');
                return condition === 'equal' ? equal : !equal;
            }

            case 'less_than':
            case 'less_than_or_equal':
            case 'greater_than':
            case 'greater_than_or_equal': {
                if (isArrayVals) {
                    return arrayValsCompare(compareValue, arrayVals, condition);
                }
                const number = (value == '') ? 0 : parseInt(value, 10);
                if (condition === 'less_than') {
                    return number < compareValue;
                }
                if (condition === 'less_than_or_equal') {
                    return number <= compareValue;
                }
                if (condition === 'greater_than') {
                    return number > compareValue;
                }
                return number >= compareValue;
            }

            case 'is_like':
            case 'is_not_like': {
                const like = isArrayVals
                    ? arrayValsCompare(compareValue, arrayVals, 'is_like')
                    : value.indexOf(compareValue) >= 0;
                return condition === 'is_like' ? like : !like;
            }

            default:
                return null;
        }
    }

    $('.hashform-form-conditions').each(function () {
        const parentForm = $(this).closest('form');

        $.each(JSON.parse($(this).val()), function (index, val) {
            const actionField = parentForm.find('#hf-field-container-' + val.compare_from);
            const showOnMatch = val.condition_action === 'show';

            // Fields that accept several values post as item_meta[id][].
            let conditionTrigger = parentForm.find('[name="item_meta[' + val.compare_to + ']');
            let isArrayVals = false;
            if (!(conditionTrigger.length > 0)) {
                conditionTrigger = parentForm.find('[name="item_meta[' + val.compare_to + '][]');
                isArrayVals = true;
            }

            conditionTrigger.on('change', function () {
                const trigger = $(this);
                let value = trigger.val();
                let arrayVals = [];

                if (isArrayVals) {
                    arrayVals = conditionTrigger.map(function () {
                        return $(this).is(':checked') ? $(this).val() : null;
                    }).toArray();
                }

                // An unchecked checkbox posts nothing, so treat it as empty.
                if (trigger.attr('type') === 'checkbox' && !trigger.is(':checked')) {
                    value = '';
                }

                const matched = conditionMatches(val.compare_condition, value, val.compare_value, arrayVals, isArrayVals);

                if (matched !== null && actionField.length) {
                    actionField.toggle(matched === showOnMatch);
                }
            }).trigger('change');
        });
    });

    /* -----------------------------------------------------------------------
     * Field focus styling
     * -------------------------------------------------------------------- */

    $('.hf-field-content input, .hf-field-content select, .hf-field-content textarea').on('focus', function () {
        $(this).parent().addClass('hf-field-focussed');
    }).on('focusout', function () {
        $(this).parent().removeClass('hf-field-focussed');
    });

    /* -----------------------------------------------------------------------
     * File uploads
     * -------------------------------------------------------------------- */

    const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif'];

    // Holds each uploader instance for the lifetime of the page.
    const uploaders = [];

    $('.hf-file-uploader').each(function () {
        const element = $(this);
        const elementId = element.attr('id');
        const sizeLimit = element.attr('data-max-upload-size');
        const uploaderLabel = element.attr('data-upload-label');
        const multipleUpload = element.attr('data-multiple-uploads') === 'true';
        const extensions = element.attr('data-extensions').split(',');
        const extensionErrorMessage = element.attr('data-extensions-error-message');

        let uploadLimit = element.attr('data-multiple-uploads-limit');
        let uploadLimitMessage = element.attr('data-multiple-uploads-error-message');
        uploadLimit = uploadLimit < 1 ? 1 : uploadLimit;

        const wrapper = () => $('#' + elementId).closest('.hf-file-uploader-wrapper');

        uploaders.push(new qq.FileUploader({
            element: document.getElementById(elementId),
            action: hashform_vars.ajaxurl,
            params: {
                action: 'hashform_file_upload_action',
                file_uploader_nonce: hashform_vars.ajax_nounce,
                allowedExtensions: extensions,
                sizeLimit: sizeLimit
            },
            allowedExtensions: extensions,
            sizeLimit: sizeLimit,
            minSizeLimit: 50,
            uploadButtonText: uploaderLabel,
            multiple: multipleUpload,

            onSubmit: function (id, fileName) {
                if (!multipleUpload || uploadLimit == -1) {
                    return;
                }

                const counter = element.parent().find('.hf-multiple-upload-limit');
                const used = Number(counter.val()) + 1;
                counter.val(used);

                if (used > uploadLimit) {
                    uploadLimitMessage = uploadLimitMessage !== ''
                        ? uploadLimitMessage
                        : 'Maximum number of files allowed is ' + uploadLimit;
                    alert(uploadLimitMessage);
                    counter.val(uploadLimit);
                    return false;
                }
            },

            onComplete: function (id, fileName, responseJSON) {
                if (!responseJSON.success) {
                    console.log(responseJSON);
                    return;
                }

                wrapper().find('.hf-error').html('');

                const extension = fileName.split('.').pop();
                const previewImage = IMAGE_EXTENSIONS.includes(extension.toLowerCase()) ? responseJSON.url : '';

                let previewHtml = '<div class="hf-prev-holder" id="hf-uploaded-' + id + '">';
                if (previewImage) {
                    previewHtml += '<img src="' + previewImage + '" />';
                }
                previewHtml += '<span class="hf-prev-name">' + fileName + '</span></div>';

                const uploadedFiles = wrapper().find('.hf-uploaded-files');

                if (multipleUpload) {
                    const existing = uploadedFiles.val();
                    uploadedFiles.val(existing === '' ? responseJSON.url : existing + ',' + responseJSON.url);
                    wrapper().find('.hf-file-preview').append(previewHtml);
                } else {
                    uploadedFiles.val(responseJSON.url);
                    wrapper().find('.hf-file-preview').html(previewHtml);
                }
            },

            messages: {
                typeError: extensionErrorMessage,
                sizeError: '{file} is too large, maximum file size is {sizeLimit}.',
                minSizeError: '{file} is too small, minimum file size is {minSizeLimit}.',
                emptyError: '{file} is empty, please select files again without it.',
                onLeave: 'The files are being uploaded, if you leave now the upload will be cancelled.'
            },

            showMessage: function (message) {
                alert(message);
            }
        }));
    });

    $('body').on('click', '.hf-preview-remove', function () {
        const button = $(this);

        $.ajax({
            url: hashform_vars.ajaxurl,
            type: 'post',
            data: 'action=hashform_file_delete_action&path=' + button.data('path') + '&_wpnonce=' + hashform_vars.ajax_nounce,
            success: function (res) {
                if (res !== 'success') {
                    return;
                }

                const wrapper = button.closest('.hf-file-uploader-wrapper');
                const uploadedFiles = wrapper.find('.hf-uploaded-files');
                uploadedFiles.val(uploadedFiles.val().replace(button.data('url'), '').replace(',,', ','));

                const counter = wrapper.find('.hf-multiple-upload-limit');
                counter.val(Math.max(0, Number(counter.val()) - 1));

                button.parent().fadeOut('1500', function () {
                    button.parent().remove();
                    wrapper.find('#' + button.attr('data-remove-id')).remove();
                });
            }
        });
    });

});
