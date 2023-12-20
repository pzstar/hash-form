jQuery(function ($) {

    'use strict';

    $(document).on('submit.hashform-form', '.hashform-form', function (e) {
        e.preventDefault();
        var form = $(this);

        if (form.find('button.hf-submit-button').hasClass('hf-button-loading')) {
            return;
        } else {
            form.find('button.hf-submit-button').addClass('hf-button-loading');
        }

        const siteKey = $('.g-recaptcha').attr('data-sitekey');

        const isV3 = $('.g-recaptcha').attr('data-size') == "invisible";
        isV3 && grecaptcha.ready(function () {
            grecaptcha.execute(siteKey, {action: 'hashform'}).then(function (token) {
                form.append('<input type="hidden" id="recaptcha_token" value="' + token + '">');
            });
            ;
        });

        $('.hf-error-msg').remove();
        $('.hf-success-msg').remove();
        $('.hf-failed-msg').remove();
        $(document).find('.hashform-error-container').removeClass('hashform-error-container');

        setTimeout(() => {
            var data = form.serializeArray();
            if (isV3) {
                const reCaptchaTokenValue = $(document).find('#recaptcha_token').val();
                $(document).find('#recaptcha_token').remove();
                data.forEach(function (item) {
                    if (item.name === 'g-recaptcha-response') {
                        item.value = item.value ? item.value : reCaptchaTokenValue;
                    }
                });
            }
            jQuery.ajax({
                type: 'POST',
                url: hashform_vars.ajaxurl,
                dataType: 'json',
                data: {
                    action: 'hashform_process_entry',
                    data: $.param(data)
                },
                success: function (response) {
                    form.find('button.hf-submit-button').removeClass('hf-button-loading');
                    if (response.status == "redirect") {
                        window.location.replace(response.message);
                    } else if (response.status == "success") {
                        form.trigger("reset");
                        form.find('.hf-star-rating').removeClass('hf-star-checked');
                        form.find('.hashform-range-input-selector').each(function () {
                            var newSlider = $(this);
                            var sliderValue = newSlider.val();
                            var sliderMinValue = parseFloat(newSlider.attr('min'));
                            var sliderMaxValue = parseFloat(newSlider.attr('max'));
                            var sliderStepValue = parseFloat(newSlider.attr('step'));
                            newSlider.prev('.hashform-range-slider').slider({
                                value: sliderValue,
                                min: sliderMinValue,
                                max: sliderMaxValue,
                                step: sliderStepValue,
                                range: 'min',
                                slide: function (e, ui) {
                                    $(this).next().val(ui.value);
                                }
                            });
                        });
                        form.append('<span class="hf-success-msg">' + response.message + '</span>');
                    } else if (response.status == "failed") {
                        form.append('<span class="hf-failed-msg">' + response.message + '</span>');
                    } else {
                        $.each(response.message, function (key, value) {
                            const errorFieldId = key.replace("field", "");
                            $('#' + 'hf-field-container-' + errorFieldId).addClass('hashform-error-container').append('<span class="hf-error-msg">' + value + '</span>');
                        });
                        const firstError = Object.keys(response.message)[0];
                        const subFieldIndex = firstError.indexOf('-');
                        var firstErrorItem;
                        if (subFieldIndex > 0) {
                            const errorFieldId = firstError.substr(0, subFieldIndex).replace("field", "");
                            const subField = firstError.substr(subFieldIndex + 1, firstError.length);
                            firstErrorItem = $('#' + 'hf-subfield-container-' + subField + '-' + errorFieldId);
                        } else {
                            const errorFieldId = firstError.replace("field", "");
                            firstErrorItem = $('#' + 'hf-field-container-' + errorFieldId);
                        }
                        $('html, body').animate({
                            scrollTop: firstErrorItem.offset().top - 300
                        }, 300);
                    }
                }
            });
        }, 1000);
    });

    $(document).find(".hashform-field-type-spinner .hf-quantity .mdi-plus").click(function () {
        const parent = $(this).closest('.hashform-field-type-spinner');
        const numberInput = parent.find('input');
        const max = numberInput.attr('max');
        const numberInputVal = Number(numberInput.val());
        numberInput.val(numberInputVal < max ? numberInputVal + 1 : max);
    });

    $(document).find(".hashform-field-type-spinner .hf-quantity .mdi-minus").click(function () {
        const parent = $(this).closest('.hashform-field-type-spinner');
        const numberInput = parent.find('input');
        const min = numberInput.attr('min');
        const numberInputVal = Number(numberInput.val());
        numberInput.val(numberInputVal > min ? numberInputVal - 1 : min);
    });

    // Range JS
    $('.hashform-range-input-selector').each(function () {
        var newSlider = $(this);
        var sliderValue = newSlider.val();
        var sliderMinValue = parseFloat(newSlider.attr('min'));
        var sliderMaxValue = parseFloat(newSlider.attr('max'));
        var sliderStepValue = parseFloat(newSlider.attr('step'));
        console.log(sliderStepValue);
        newSlider.prev('.hashform-range-slider').slider({
            value: sliderValue,
            min: sliderMinValue,
            max: sliderMaxValue,
            step: sliderStepValue,
            range: 'min',
            slide: function (e, ui) {
                $(this).next().val(ui.value);
            }
        });
    });

    // Update slider if the input field loses focus as it's most likely changed
    $('.hashform-range-input-selector').blur(function () {
        var resetValue = isNaN($(this).val()) ? '' : $(this).val();

        if (resetValue) {
            var sliderMinValue = parseFloat($(this).attr('min'));
            var sliderMaxValue = parseFloat($(this).attr('max'));
            // Make sure our manual input value doesn't exceed the minimum & maxmium values
            if (resetValue < sliderMinValue) {
                resetValue = sliderMinValue;
                $(this).val(resetValue);
            }
            if (resetValue > sliderMaxValue) {
                resetValue = sliderMaxValue;
                $(this).val(resetValue);
            }
        }
        $(this).val(resetValue);
        $(this).prev('.hashform-range-slider').slider('value', resetValue);
    });

    function hoverStars() {
        $(this).prevAll('.hf-star-rating').addBack().addClass('hf-star-hovered');
        $(this).nextAll('.hf-star-rating').addClass('hf-star-non-hovered');
    }

    function unhoverStars() {
        $(this).closest('.hashform-star-group').find('.hf-star-rating').removeClass('hf-star-hovered hf-star-non-hovered');
    }

    function loadStars() {
        $(this).closest('.hashform-star-group').find('.hf-star-rating').removeClass('hf-star-checked');
        $(this).parent('.hf-star-rating').prevAll('.hf-star-rating').addBack().addClass('hf-star-checked');
    }

    $(document).on('click', '.hashform-star-group input', loadStars);
    $(document).on('mouseenter', '.hashform-star-group .hf-star-rating:not(.hf-star-rating-readonly)', hoverStars);
    $(document).on('mouseleave', '.hashform-star-group .hf-star-rating:not(.hf-star-rating-readonly)', unhoverStars);

    $('.hashform-field-type-date input').each(function () {
        const $this = $(this);
        const dtFormat = $this.attr('data-format');
        $this.datepicker({
            changeMonth: true,
            dateFormat: dtFormat,
        });
    })

    $('.hashform-field-type-time').each(function () {
        var timePickerWrap = $(this).find('.hf-timepicker');
        var timePickerValueInput = $(this).find('.hf-output');
        timePickerWrap.timepicker({
            'showDuration': false,
            'timeFormat': 'g:ia',
        });
    })

    $('.hashform-form-conditions').each(function () {
        const $this = $(this);
        const parentForm = $this.closest('form');
        const conditions = JSON.parse($this.val());
        $.each(conditions, function (index, val) {
            const conditionTrigger = parentForm.find('[name="item_meta[' + val.compare_to + ']');
            const actionField = parentForm.find('#hf-field-container-' + val.compare_from);
            const compareCondition = val.compare_condition;
            const compareValue = val.compare_value;
            const conditionAction = val.condition_action;
            conditionTrigger.on('change', function () {
                var value = $(this).val();
                var selector = $(this);
                if ($(this).attr('type') && $(this).attr('type') == 'checkbox') {
                    if (!$(this).is(':checked')) {
                        value = '';
                    }
                }
                switch (compareCondition) {
                    case 'equal':
                        if (value == compareValue) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                    case 'not_equal':
                        if (value != compareValue) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                    case 'less_than':
                        value = (value == '') ? 0 : parseInt(value);
                        if (value < compareValue) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                    case 'less_than_or_equal':
                        value = (value == '') ? 0 : parseInt(value);
                        if (value <= compareValue) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                    case 'greater_than':
                        value = (value == '') ? 0 : parseInt(value);
                        if (value > compareValue) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                    case 'greater_than_or_equal':
                        value = (value == '') ? 0 : parseInt(value);
                        if (value >= compareValue) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                    case 'is_like':
                        if (value.indexOf(compareValue) >= 0) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                    case 'is_not_like':
                        if (!(value.indexOf(compareValue) >= 0)) {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.show();
                                } else {
                                    actionField.hide();
                                }
                            }
                        } else {
                            if (actionField.length) {
                                if (conditionAction == 'show') {
                                    actionField.hide();
                                } else {
                                    actionField.show();
                                }
                            }
                        }
                        break;
                }
            }).trigger('change');
        });
    })


    $(".hf-field-content input, .hf-field-content select, .hf-field-content textarea").on('focus', function() {
        $(this).parent().addClass('hf-field-focussed');
    }).on('focusout', function() {
        $(this).parent().removeClass('hf-field-focussed');
    })

});