import {__} from '@wordpress/i18n';
import {useSelect} from '@wordpress/data';

const getCssVar = (varname, value, unit = '', def = '0') => {
    var varname = '--hf-' + varname;

    return `
        ${value ? varname + ':' + value + unit + ';' : ''}
    `;
}

const responsiveSliderVars = (varname, valueLg, valueSm, valueMd, unit = '', def = '0') => {
    return `
        ${valueLg ? '--hf-' + varname + '-lg:' + valueLg + unit + ';' : ''}
        ${valueMd ? '--hf-' + varname + '-md:' + valueMd + unit + ';' : ''}
        ${valueSm ? '--hf-' + varname + '-sm:' + valueSm + unit + ';' : ''}
    `;
}

const easingList = [
    {value: 'linear', label: 'Linear'},
    {value: 'easeInSine', label: 'easeInSine'},
    {value: 'easeOutSine', label: 'easeOutSine'},
    {value: 'easeInOutSine', label: 'easeInOutSine'},
    {value: 'easeInQuad', label: 'easeInQuad'},
    {value: 'easeOutQuad', label: 'easeOutQuad'},
    {value: 'easeInOutQuad', label: 'easeInOutQuad'},
    {value: 'easeInCubic', label: 'easeInCubic'},
    {value: 'easeOutCubic', label: 'easeOutCubic'},
    {value: 'easeInOutCubic', label: 'easeInOutCubic'},
    {value: 'easeInQuart', label: 'easeInQuart'},
    {value: 'easeOutQuart', label: 'easeOutQuart'},
    {value: 'easeInOutQuart', label: 'easeInOutQuart'},
    {value: 'easeInQuint', label: 'easeInQuint'},
    {value: 'easeOutQuint', label: 'easeOutQuint'},
    {value: 'easeInOutQuint', label: 'easeInOutQuint'},
    {value: 'easeInExpo', label: 'easeInExpo'},
    {value: 'easeOutExpo', label: 'easeOutExpo'},
    {value: 'easeInOutExpo', label: 'easeInOutExpo'},
    {value: 'easeInCirc', label: 'easeInCirc'},
    {value: 'easeOutCirc', label: 'easeOutCirc'},
    {value: 'easeInBack', label: 'easeInBack'},
    {value: 'easeOutBack', label: 'easeOutBack'},
    {value: 'easeInOutBack', label: 'easeInOutBack'},
    {value: 'easeInElastic', label: 'easeInElastic'},
    {value: 'easeOutElastic', label: 'easeOutElastic'},
    {value: 'easeInOutElastic', label: 'easeInOutElastic'},
    {value: 'easeInBounce', label: 'easeInBounce'},
    {value: 'easeOutBounce', label: 'easeOutBounce'},
    {value: 'easeInOutBounce', label: 'easeInOutBounce'}
]

const getParallaxData = (attributes) => {
    const parallaxDat = `{
        "parallax_effect_type": "${attributes.sbParallaxStyle || ''}"
        ${attributes.sbParallaxStyle == 'mouse-effects' ? `,
            "mouse_type": "${attributes.sbParallaxMouseInteractivityStyl || 'parallax'}",
            ${attributes.sbParallaxMouseInteractivityStyl == 'tilt' ? `
                "tilt_rate": ${attributes.sbParallaxMouseTiltRate || 20},
                "tilt_scale": ${attributes.sbParallaxMouseTiltScale || 1},
                "tilt_glare": ${attributes.sbParallaxMouseTiltGlare || 0},
                "tilt_speed": ${attributes.sbParallaxMouseTiltSpeed || 300},
                "tilt_axis": "${attributes.sbParallaxMouseTiltAxis || ''}"
            ` : `
                "mouse_reverse": ${attributes.sbParallaxMouseReverseDir || false},
                "mouse_initial": ${attributes.sbParallaxMouseBackToInitPos || false},
                "mouse_rate": ${attributes.sbParallaxMouseVelocity || 100}
            `}
        ` : ''}

        ${attributes.sbParallaxStyle == 'scroll-effects' ? `,
            "scroll_opacity": ${attributes.sbParallaxTransparency || false},
            "scroll_opacity_effect": "${attributes.sbParallaxTransparencyDir || 'down'}",
            "scroll_opacity_level": "${attributes.sbParallaxTransparencyOpacity || ''}",
            "scroll_opacity_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxTransparencyViewportFrom || 0}, "end": ${attributes.sbParallaxTransparencyViewportTo || 100}}},
            "scroll_v": ${attributes.sbParallaxVerParallax || false},
            "scroll_v_direction": "${attributes.sbParallaxVerParallaxDir || 'down'}",
            "scroll_v_speed": "${attributes.sbParallaxVerParallaxSpeed || 4}",
            "scroll_v_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxVerParallaxViewportFrom || 0}, "end": ${attributes.sbParallaxVerParallaxViewportTo || 100}}},
            "scroll_h": ${attributes.sbParallaxHorParallax || false},
            "scroll_h_direction": "${attributes.sbParallaxHorParallaxDir || 'down'}",
            "scroll_h_speed": "${attributes.sbParallaxHorParallaxSpeed || 4}",
            "scroll_h_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxHorParallaxViewportFrom || 0}, "end": ${attributes.sbParallaxHorParallaxViewportTo || 100}}},
            "scroll_blur": ${attributes.sbParallaxBlur || false},
            "scroll_blur_effect": "${attributes.sbParallaxBlurDir || 'down'}",
            "scroll_blur_level": "${attributes.sbParallaxBlurLevel || 10}",
            "scroll_blur_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxBlurViewportFrom || 0}, "end": ${attributes.sbParallaxBlurViewportTo || 100}}},
            "scroll_rotate": ${attributes.sbParallaxRotate || false},
            "scroll_rotate_direction": "${attributes.sbParallaxRotateDir || 'down'}",
            "scroll_rotate_speed": ${attributes.sbParallaxRotateSpeed || 3},
            "scroll_rotate_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxRotateViewportFrom || 0}, "end": ${attributes.sbParallaxRotateViewportTo || 100}}},
            "scroll_scale": ${attributes.sbParallaxScale || false},
            "scroll_scale_direction": "${attributes.sbParallaxScaleDir || 'up'}",
            "scroll_scale_speed": ${attributes.sbParallaxScaleSpeed || 3},
            "scroll_scale_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxScaleViewportFrom || 0}, "end": ${attributes.sbParallaxScaleViewportTo || 100}}},
            "scroll_gray": ${attributes.sbParallaxGrayScale || false},
            "scroll_gray_effect": "${attributes.sbParallaxGrayScaleEffect || 'down'}",
            "scroll_gray_level": ${attributes.sbParallaxGrayScaleSpeed || 10},
            "scroll_gray_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxGrayScaleViewportFrom || 0}, "end": ${attributes.sbParallaxGrayScaleViewportTo || 100}}},
            "scroll_to_x": "${attributes.sbParallaxXAnchorPoint || 'center'}",
            "scroll_to_y": "${attributes.sbParallaxYAnchorPoint || 'center'}"
        ` : ''}
    }`;
    return parallaxDat;
}

const getImageParallaxDat = (groups) => {
    const {
        imageEffectParallaxType,

        imageEffectInteractivityStyle,
        imageEffectMouseReverseDir,
        imageEffectMouseBackToInitPos,
        imageEffectMouseVelocity,
        imageEffectMouseTiltRate,
        imageEffectMouseTiltScale,
        imageEffectMouseTiltGlare,
        imageEffectMouseTiltSpeed,
        imageEffectMouseTiltAxis,

        imageEffectScrollTransparency,
        imageEffectScrollTransparencyDir,
        imageEffectScrollTransparencyOpacity,
        imageEffectScrollTransparencyViewportFrom,
        imageEffectScrollTransparencyViewportTo,
        imageEffectScrollVerParallax,
        imageEffectScrollVerParallaxDir,
        imageEffectScrollVerParallaxSpeed,
        imageEffectScrollVerParallaxViewportFrom,
        imageEffectScrollVerParallaxViewportTo,
        imageEffectScrollHorParallax,
        imageEffectScrollHorParallaxDir,
        imageEffectScrollHorParallaxSpeed,
        imageEffectScrollHorParallaxViewportFrom,
        imageEffectScrollHorParallaxViewportTo,
        imageEffectScrollBlur,
        imageEffectScrollBlurDir,
        imageEffectScrollBlurLevel,
        imageEffectScrollBlurViewportFrom,
        imageEffectScrollBlurViewportTo,
        imageEffectScrollRotate,
        imageEffectScrollRotateDir,
        imageEffectScrollRotateSpeed,
        imageEffectScrollRotateViewportFrom,
        imageEffectScrollRotateViewportTo,
        imageEffectScrollScale,
        imageEffectScrollScaleDir,
        imageEffectScrollScaleSpeed,
        imageEffectScrollScaleViewportFrom,
        imageEffectScrollScaleViewportTo,
        imageEffectScrollGrayScale,
        imageEffectScrollGrayScaleEffect,
        imageEffectScrollGrayScaleSpeed,
        imageEffectScrollGrayScaleViewportFrom,
        imageEffectScrollGrayScaleViewportTo,

        imageEffectXAnchorPoint,
        imageEffectYAnchorPoint
    } = groups;

    const parallaxDat = `{
        "parallax_effect_type": "${imageEffectParallaxType || ''}"
        ${imageEffectParallaxType == 'mouse' ? `,
            "mouse_type": "${imageEffectInteractivityStyle || 'parallax'}",
            ${imageEffectInteractivityStyle == 'tilt' ? `
                "tilt_rate": ${imageEffectMouseTiltRate || 20},
                "tilt_scale": ${imageEffectMouseTiltScale || 1},
                "tilt_glare": ${imageEffectMouseTiltGlare || 0},
                "tilt_speed": ${imageEffectMouseTiltSpeed || 300},
                "tilt_axis": "${imageEffectMouseTiltAxis || ''}"
            ` : `
                "mouse_reverse": ${imageEffectMouseReverseDir || false},
                "mouse_initial": ${imageEffectMouseBackToInitPos || false},
                "mouse_rate": ${imageEffectMouseVelocity || 100}
            `}
        ` : ''}

        ${imageEffectParallaxType == 'scroll' ? `,
            "scroll_opacity": ${imageEffectScrollTransparency || false},
            "scroll_opacity_effect": "${imageEffectScrollTransparencyDir || 'down'}",
            "scroll_opacity_level": "${imageEffectScrollTransparencyOpacity || ''}",
            "scroll_opacity_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollTransparencyViewportFrom || 0}, "end": ${imageEffectScrollTransparencyViewportTo || 100}}},
            "scroll_v": ${imageEffectScrollVerParallax || false},
            "scroll_v_direction": "${imageEffectScrollVerParallaxDir || 'down'}",
            "scroll_v_speed": "${imageEffectScrollVerParallaxSpeed || 4}",
            "scroll_v_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollVerParallaxViewportFrom || 0}, "end": ${imageEffectScrollVerParallaxViewportTo || 100}}},
            "scroll_h": ${imageEffectScrollHorParallax || false},
            "scroll_h_direction": "${imageEffectScrollHorParallaxDir || 'down'}",
            "scroll_h_speed": "${imageEffectScrollHorParallaxSpeed || 4}",
            "scroll_h_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollHorParallaxViewportFrom || 0}, "end": ${imageEffectScrollHorParallaxViewportTo || 100}}},
            "scroll_blur": ${imageEffectScrollBlur || false},
            "scroll_blur_effect": "${imageEffectScrollBlurDir || 'down'}",
            "scroll_blur_level": "${imageEffectScrollBlurLevel || 10}",
            "scroll_blur_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollBlurViewportFrom || 0}, "end": ${imageEffectScrollBlurViewportTo || 100}}},
            "scroll_rotate": ${imageEffectScrollRotate || false},
            "scroll_rotate_direction": "${imageEffectScrollRotateDir || 'down'}",
            "scroll_rotate_speed": ${imageEffectScrollRotateSpeed || 3},
            "scroll_rotate_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollRotateViewportFrom || 0}, "end": ${imageEffectScrollRotateViewportTo || 100}}},
            "scroll_scale": ${imageEffectScrollScale || false},
            "scroll_scale_direction": "${imageEffectScrollScaleDir || 'up'}",
            "scroll_scale_speed": ${imageEffectScrollScaleSpeed || 3},
            "scroll_scale_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollScaleViewportFrom || 0}, "end": ${imageEffectScrollScaleViewportTo || 100}}},
            "scroll_gray": ${imageEffectScrollGrayScale || false},
            "scroll_gray_effect": "${imageEffectScrollGrayScaleEffect || 'down'}",
            "scroll_gray_level": ${imageEffectScrollGrayScaleSpeed || 10},
            "scroll_gray_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollGrayScaleViewportFrom || 0}, "end": ${imageEffectScrollGrayScaleViewportTo || 100}}},
            "scroll_to_x": "${imageEffectXAnchorPoint || 'center'}",
            "scroll_to_y": "${imageEffectYAnchorPoint || 'center'}"
        ` : ''}
    }`;
    return parallaxDat;
}


const sbGetParticlesDat = (attributes) => {
    const {
        sbParticlesEnable,
        sbParticlesLinkColor,
        sbParticlesBallColor,
        sbParticlesNumber,
        sbParticlesLinkWidth,
        sbParticlesLinkDistance,
        sbParticlesCreateLink,
        sbParticlesBallMaxSize,
        sbParticlesAnimationSpeed,
        sbParticlesDisableLinks,
        sbParticlesDisableMouse
    } = attributes;
    const particlesDat = `{
        "link_color": "${sbParticlesLinkColor || '#FFFFFF'}",
        "ball_color": "${sbParticlesBallColor || '#F6F6F6'}",
        "number": ${sbParticlesNumber || 150},
        "link": ${sbParticlesDisableLinks || false},
        "clink": ${sbParticlesCreateLink || 100},
        "linkw": ${sbParticlesLinkWidth || 0.3},
        "size": ${sbParticlesBallMaxSize || 8},
        "speed": ${sbParticlesAnimationSpeed || 20},
        "dlink": ${sbParticlesLinkDistance || 50},
        "dmouse": ${sbParticlesDisableMouse || false}
    }`;
    return particlesDat;
}


const hoverAnimations = [
    {value: '', label: 'None'},
    {value: 'grow', label: 'Grow'},
    {value: 'shrink', label: 'Shrink'},
    {value: 'pulse', label: 'Pulse'},
    {value: 'pulse-grow', label: 'Pulse Grow'},
    {value: 'pulse-shrink', label: 'Pulse Shrink'},
    {value: 'push', label: 'Push'},
    {value: 'pop', label: 'Pop'},
    {value: 'bounce-in', label: 'Bounce In'},
    {value: 'bounce-out', label: 'Bounce Out'},
    {value: 'rotate', label: 'Rotate'},
    {value: 'grow-rotate', label: 'Grow Rotate'},
    {value: 'float', label: 'Float'},
    {value: 'sink', label: 'Sink'},
    {value: 'bob', label: 'Bob'},
    {value: 'hong', label: 'Hang'},
    {value: 'skew', label: 'Skew'},
    {value: 'skew-forward', label: 'Skew Forward'},
    {value: 'skew-backward', label: 'Skew Backward'},
    {value: 'wobble-vertical', label: 'Wobble Vertical'},
    {value: 'wobble-horizontal', label: 'Wobble Horizontal'},
    {value: 'wobble-to-bottom-right', label: 'Wobble To Bottom Right'},
    {value: 'wobble-to-top-right', label: 'Wobble To Top Right'},
    {value: 'wobble-top', label: 'Wobble Top'},
    {value: 'wobble-bottom', label: 'Wobble Bottom'},
    {value: 'wobble-skew', label: 'Wobble Skew'},
    {value: 'buzz', label: 'Buzz'},
    {value: 'buzz-out', label: 'Buzz Out'}
]


const htmlTags = [
    {value: 'div', label: 'div'},
    {value: 'span', label: 'span'},
    {value: 'p', label: 'p'},
    {value: 'h1', label: 'H1'},
    {value: 'h2', label: 'H2'},
    {value: 'h3', label: 'H3'},
    {value: 'h4', label: 'H4'},
    {value: 'h5', label: 'H5'},
    {value: 'h6', label: 'H6'}
]

const animationEffects = [
    {label: 'None', value: 'none'},
    {
        label: 'Fading',
        value: [
            {value: 'fadeIn', label: 'Fade In'},
            {value: 'fadeInDown', label: 'Fade In Down'},
            {value: 'fadeInLeft', label: 'Fade In Left'},
            {value: 'fadeInRight', label: 'Fade In Right'},
            {value: 'fadeInUp', label: 'Fade In Up'}
        ]
    },
    {
        label: 'Zooming',
        value: [
            {value: 'zoomIn', label: 'Zoom In'},
            {value: 'zoomInDown', label: 'Zoom In Down'},
            {value: 'zoomInLeft', label: 'Zoom In Left'},
            {value: 'zoomInRight', label: 'Zoom In Right'},
            {value: 'zoomInUp', label: 'Zoom In Up'}
        ]
    },
    {
        label: 'Bouncing',
        value: [
            {value: 'bounceIn', label: 'Bounce In'},
            {value: 'bounceInDown', label: 'Bounce In Down'},
            {value: 'bounceInLeft', label: 'Bounce In Left'},
            {value: 'bounceInRight', label: 'Bounce In Right'},
            {value: 'bounceInUp', label: 'Bounce In Up'}
        ]
    },
    {
        label: 'Sliding',
        value: [
            {value: 'slideInDown', label: 'Slide In Down'},
            {value: 'slideInLeft', label: 'Slide In Left'},
            {value: 'slideInRight', label: 'Slide In Right'},
            {value: 'slideInUp', label: 'Slide In Up'}
        ]
    },
    {
        label: 'Rotating',
        value: [
            {value: 'rotateIn', label: 'Rotate In'},
            {value: 'rotateInDownLeft', label: 'Rotate In Down Left'},
            {value: 'rotateInDownRight', label: 'Rotate In Down Right'},
            {value: 'rotateInUpLeft', label: 'Rotate In Up Left'},
            {value: 'rotateInUpRight', label: 'Rotate In Up Right'}
        ]
    },
    {
        label: 'Attention Seekers',
        value: [
            {value: 'bounce', label: 'Bounce'},
            {value: 'flash', label: 'Flash'},
            {value: 'pulse', label: 'Pulse'},
            {value: 'rubberBand', label: 'Rubber Band'},
            {value: 'shake', label: 'Shake'},
            {value: 'headShake', label: 'Head Shake'},
            {value: 'swing', label: 'Swing'},
            {value: 'tada', label: 'Tada'},
            {value: 'wobble', label: 'Wobble'},
            {value: 'jello', label: 'Jello'}
        ]
    },
    {
        label: 'Light Speed',
        value: [
            {value: 'lightSpeedIn', label: 'Light Speed In'}
        ]
    },
    {
        label: 'Specials',
        value: [
            {value: 'rollIn', label: 'Roll In'}
        ]
    }
]

const toMoment = (val) => {
    var conversions = {
        'd': 'DD',
        'D': 'ddd',
        'j': 'D',
        'l': 'dddd',
        'N': 'E',
        'S': 'o',
        'w': 'e',
        'z': 'DDD',
        'W': 'W',
        'F': 'MMMM',
        'm': 'MM',
        'M': 'MMM',
        'n': 'M',
        't': '',
        'L': '',
        'o': 'YYYY',
        'Y': 'YYYY',
        'y': 'YY',
        'a': 'a',
        'A': 'A',
        'B': '',
        'g': 'h',
        'G': 'H',
        'h': 'hh',
        'H': 'HH',
        'i': 'mm',
        's': 'ss',
        'u': 'SSS',
        'e': 'zz',
        'I': '',
        'O': '',
        'P': '',
        'T': '',
        'Z': '',
        'c': '',
        'r': '',
        'U': 'X',
    };

    return val && val.replace(/[A-Za-z]+/g, function (match) {
        return conversions[match] || match;
    });
}

const checkDefault = (check, checkDiff = '') => {
    if (checkDiff != '') {
        return (!checkDiff || checkDiff.toLowerCase() == 'default') ? 'inherit' : check;
    }
    return (!check || check.toLowerCase() == 'default') ? 'inherit' : check;
}

const responsiveTypographyVars = (varname, family, weight, textTransform, textDecoration,
    fontSizeSm, fontSizeMd, fontSize, fontSizeUnit,
    letterSpacingSm, letterSpacingMd, letterSpacing, letterSpacingUnit,
    lineHeightSm, lineHeightMd, lineHeight, lineHeightUnit) => {
    var lgfs = '--hf-' + varname + '-font-size';
    var lgls = '--hf-' + varname + '-letter-spacing';
    var lglh = '--hf-' + varname + '-line-height';

    //console.log('font-size: var(' + lgfs + ', 1em);\n' +
    //    'letter-spacing: var(' + lgls + ', inherit);\n' +
    //    'line-height: var(' + lglh + ', inherit);');

    var mdfs = '--hf-' + varname + '-font-size-md';
    var mdls = '--hf-' + varname + '-letter-spacing-md';
    var mdlh = '--hf-' + varname + '-line-height-md';

    //console.log('font-size: var(' + mdfs + ', var(' + lgfs + ', 1em));\n' +
    //    'letter-spacing: var(' + mdls + ', var(' + lgls + ', inherit));\n' +
    //    'line-height: var(' + mdlh + ', var(' + lglh + ', inherit));');

    var smfs = '--hf-' + varname + '-font-size-sm';
    var smls = '--hf-' + varname + '-letter-spacing-sm';
    var smlh = '--hf-' + varname + '-line-height-sm';

    //console.log('font-size: var(' + smfs + ', var(' + mdfs + ', var(' + lgfs + ', 1em)));\n' +
    //    'letter-spacing: var(' + smls + ', var(' + mdls + ', var(' + lgls + ', inherit)));\n' +
    //    'line-height: var(' + smlh + ', var(' + mdlh + ', var(' + lglh + ', inherit)));');


    return `${family ? `--hf-${varname}-font-family: ${checkDefault(family)};` : ''}
        ${weight ? `--hf-${varname}-font-weight: ${checkDefault(weight.replace(/\D/g, ''), weight)};` : ''}
        ${weight ? `--hf-${varname}-font-style: ${checkDefault(weight.replace(/\d+/g, ''), weight)};` : ''}
        ${textTransform ? `--hf-${varname}-text-transform: ${textTransform};` : ''}
        ${textDecoration ? `--hf-${varname}-text-decoration: ${textDecoration};` : ''}
        ${fontSizeSm ? `--hf-${varname}-font-size-sm: ${(fontSizeSm + fontSizeUnit)};` : ''}
        ${fontSizeMd ? `--hf-${varname}-font-size-md: ${(fontSizeMd + fontSizeUnit)};` : ''}
        ${fontSize ? `--hf-${varname}-font-size: ${(fontSize + fontSizeUnit)};` : ''}
        ${letterSpacingSm ? `--hf-${varname}-letter-spacing-sm: ${(letterSpacingSm + letterSpacingUnit)};` : ''}
        ${letterSpacingMd ? `--hf-${varname}-letter-spacing-md: ${(letterSpacingMd + letterSpacingUnit)};` : ''}
        ${letterSpacing ? `--hf-${varname}-letter-spacing: ${(letterSpacing + letterSpacingUnit)};` : ''}
        ${lineHeightSm ? `--hf-${varname}-line-height-sm: ${(lineHeightSm + lineHeightUnit)};` : ''}
        ${lineHeightMd ? `--hf-${varname}-line-height-md: ${(lineHeightMd + lineHeightUnit)};` : ''}
        ${lineHeight ? `--hf-${varname}-line-height: ${(lineHeight + lineHeightUnit)};` : ''}`;
}

const dimensionVars = (varname, top, right, bottom, left, unit = '') => {
    return `${top ? `--hf-${varname}-top: ${(top + unit)};` : ''}
        ${right ? `--hf-${varname}-right: ${(right + unit)};` : ''}
        ${bottom ? `--hf-${varname}-bottom: ${(bottom + unit)};` : ''}
        ${left ? `--hf-${varname}-left: ${(left + unit)};` : ''}`
}

const boxShadowVars = (varname, horizontal, vertical, blur, spread, color, inset, unit = '') => {
    return `${horizontal ? `--hf-${varname}-x: ${(horizontal + unit)};` : ''}
        ${vertical ? `--hf-${varname}-y: ${(vertical + unit)};` : ''}
        ${blur ? `--hf-${varname}-blur: ${(blur + unit)};` : ''}
        ${spread ? `--hf-${varname}-spread: ${(spread + unit)};` : ''}
        ${color ? `--hf-${varname}-color: ${color};` : ''}
        ${inset ? `--hf-${varname}-inset: ${inset};` : ''}`
}

const responsiveDimensionVars = (varname, top, right, bottom, left, topSm, rightSm, bottomSm, leftSm, topMd, rightMd, bottomMd, leftMd, unit = '') => {
    return `${topSm ? `--hf-${varname}-top-sm: ${(topSm + unit)};` : ''}
        ${rightSm ? `--hf-${varname}-right-sm: ${(rightSm + unit)};` : ''}
        ${bottomSm ? `--hf-${varname}-bottom-sm: ${(bottomSm + unit)};` : ''}
        ${leftSm ? `--hf-${varname}-left-sm: ${(leftSm + unit)};` : ''}
        ${topMd ? `--hf-${varname}-top-md: ${(topMd + unit)};` : ''}
        ${rightMd ? `--hf-${varname}-right-md: ${(rightMd + unit)};` : ''}
        ${bottomMd ? `--hf-${varname}-bottom-md: ${(bottomMd + unit)};` : ''}
        ${leftMd ? `--hf-${varname}-left-md: ${(leftMd + unit)};` : ''}
        ${top ? `--hf-${varname}-top-lg: ${(top + unit)};` : ''}
        ${right ? `--hf-${varname}-right-lg: ${(right + unit)};` : ''}
        ${bottom ? `--hf-${varname}-bottom-lg: ${(bottom + unit)};` : ''}
        ${left ? `--hf-${varname}-left-lg: ${(left + unit)};` : ''};`
}

const textShadowVars = (varname, horizontal, vertical, blur, color, unit = '') => {
    return `${horizontal ? `--hf-${varname}-horizontal: ${(horizontal + unit)};` : ''}
        ${vertical ? `--hf-${varname}-vertical: ${(vertical + unit)};` : ''}
        ${blur ? `--hf-${varname}-blur: ${(blur + unit)};` : ''}
        ${color ? `--hf-${varname}-color: ${color};` : ''}`;
}

const getImageSrc = (imgId) => {
    if (!imgId) {
        return '';
    }
    const imageSrc = useSelect(select => {
        const img = select('core').getMedia(imgId);
        return img?.source_url
    }, [imgId]);
    return imageSrc;
}

const getElementPositions = [
    {value: 'top left', label: __('Top Left', 'smart-blocks-pro')},
    {value: 'top center', label: __('Top Center', 'smart-blocks-pro')},
    {value: 'top right', label: __('Top Right', 'smart-blocks-pro')},
    {value: 'center center', label: __('Center Center', 'smart-blocks-pro')},
    {value: 'center left', label: __('Center Left', 'smart-blocks-pro')},
    {value: 'center right', label: __('Center Right', 'smart-blocks-pro')},
    {value: 'bottom left', label: __('Bottom Left', 'smart-blocks-pro')},
    {value: 'bottom center', label: __('Bottom Center', 'smart-blocks-pro')},
    {value: 'bottom right', label: __('Bottom Right', 'smart-blocks-pro')},
];

const showAnimations = [
    {value: 'none', label: __('No Animation', 'smart-blocks-pro')},
    {value: 'fadeIn', label: 'fadeIn'},
    {value: 'fadeInLeft', label: 'fadeInLeft'},
    {value: 'fadeInRight', label: 'fadeInRight'},
    {value: 'fadeInUp', label: 'fadeInUp'},
    {value: 'fadeInDown', label: 'fadeInDown'},
    {value: 'zoomIn', label: 'zoomIn'},
    {value: 'zoomInDown', label: 'zoomInDown'},
    {value: 'zoomInLeft', label: 'zoomInLeft'},
    {value: 'zoomInRight', label: 'zoomInRight'},
    {value: 'zoomInUp', label: 'zoomInUp'},
    {value: 'bounceIn', label: 'bounceIn'},
    {value: 'bounceInDown', label: 'bounceInDown'},
    {value: 'bounceInLeft', label: 'bounceInLeft'},
    {value: 'bounceInRight', label: 'bounceInRight'},
    {value: 'bounceInUp', label: 'bounceInUp'},
    {value: 'slideInUp', label: 'slideInUp'},
    {value: 'slideInDown', label: 'slideInDown'},
    {value: 'slideInLeft', label: 'slideInLeft'},
    {value: 'slideInRight', label: 'slideInRight'},
    {value: 'flipInX', label: 'flipInX'},
    {value: 'flipInY', label: 'flipInY'},
    {value: 'rotateIn', label: 'rotateIn'},
    {value: 'rotateInDownLeft', label: 'rotateInDownLeft'},
    {value: 'rotateInDownRight', label: 'rotateInDownRight'},
    {value: 'rotateInUpLeft', label: 'rotateInUpLeft'},
    {value: 'rotateInUpRight', label: 'rotateInUpRight'},
    {value: 'rollIn', label: 'rollIn'}
];

const showAnimationsAlt = [
    {value: 'none', label: __('No Animation', 'smart-blocks-pro')},
    {value: 'fadeIn', label: 'fadeIn'},
    {value: 'fadeInLeftSmall', label: 'fadeInLeft'},
    {value: 'fadeInRightSmall', label: 'fadeInRight'},
    {value: 'fadeInUpSmall', label: 'fadeInUp'},
    {value: 'fadeInDownSmall', label: 'fadeInDown'},
    {value: 'zoomIn', label: 'zoomIn'},
    {value: 'zoomInDown', label: 'zoomInDown'},
    {value: 'zoomInLeft', label: 'zoomInLeft'},
    {value: 'zoomInRight', label: 'zoomInRight'},
    {value: 'zoomInUp', label: 'zoomInUp'},
    {value: 'bounceIn', label: 'bounceIn'},
    {value: 'bounceInDownSmall', label: 'bounceInDown'},
    {value: 'bounceInLeftSmall', label: 'bounceInLeft'},
    {value: 'bounceInRightSmall', label: 'bounceInRight'},
    {value: 'bounceInUpSmall', label: 'bounceInUp'},
    {value: 'flipInX', label: 'flipInX'},
    {value: 'flipInY', label: 'flipInY'},
    {value: 'rotateIn', label: 'rotateIn'},
    {value: 'rotateInDownLeft', label: 'rotateInDownLeft'},
    {value: 'rotateInDownRight', label: 'rotateInDownRight'},
    {value: 'rotateInUpLeft', label: 'rotateInUpLeft'},
    {value: 'rotateInUpRight', label: 'rotateInUpRight'},
];

const sliderAnimations = [
    {value: 'none', label: 'No Animation'},
    {value: 'fade-in', label: 'FadeIn'},
    {value: 'scale-in-center', label: 'ScaleInCenter'},
    {value: 'slide-in-top', label: 'SlideInTop'},
    {value: 'slide-in-bottom', label: 'SlideInBottom'},
    {value: 'slide-in-left', label: 'SlideInLeft'},
    {value: 'slide-in-right', label: 'SlideInRight'},
    {value: 'rotate-in-2-fwd-cw', label: 'RotateInForwardClockWise'},
    {value: 'rotate-in-2-fwd-ccw', label: 'RotateInForwardCounterClockWise'},
    {value: 'rotate-in-hor', label: 'RotateInHorizontal'},
    {value: 'flip-in-hor', label: 'FlipInHorizontal'},
    {value: 'flip-in-ver-left', label: 'FlipInVerticalLeft'},
    {value: 'flip-in-ver-right', label: 'FlipInVerticalRight'},
    {value: 'bounce-in-top', label: 'BounceInTop'},
    {value: 'bounce-in-bottom', label: 'BounceInBottom'},
    {value: 'bounce-in-left', label: 'BounceInLeft'},
    {value: 'bounce-in-right', label: 'BounceInRight'},
    {value: 'bounce-in-fwd', label: 'BounceInFodward'},
    {value: 'bounce-in-bck', label: 'BounceInBackward'},
    {value: 'swing-in-top-fwd', label: 'SwingInTopForward'},
    {value: 'swing-in-bottom-fwd', label: 'SwingInBottomForward'},
    {value: 'swing-in-left-fwd', label: 'SwingInLeftForward'},
    {value: 'swing-in-right-fwd', label: 'SwingInRightForward'},
    {value: 'puff-in-center', label: 'PuffInCenter'},
];

const getStyleVars = (attributes, vars) => {
    var retvar = '';
    let responsiveSliderUnits = vars?.responsiveSliderUnits;
    if (responsiveSliderUnits?.length) {
        responsiveSliderUnits.map((lvar) => {
            retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], attributes[lvar + 'Unit']);
        })
    }
    let responsiveSlider = vars?.responsiveSlider;
    if (responsiveSlider?.length) {
        responsiveSlider.map((lvar) => {
            retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], '');
        })
    }
    let responsiveSliderPx = vars?.responsiveSliderPx;
    if (responsiveSliderPx?.length) {
        responsiveSliderPx.map((lvar) => {
            retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], 'px');
        })
    }
    let responsiveSliderPer = vars?.responsiveSliderPer;
    if (responsiveSliderPer?.length) {
        responsiveSliderPer.map((lvar) => {
            retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], '%');
        })
    }
    let normal = vars?.normal;
    if (normal?.length) {
        normal.map((lvar) => {
            if (attributes[lvar]) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]};`;
            }
        })
    }
    let normalPx = vars?.normalPx;
    if (normalPx?.length) {
        normalPx.map((lvar) => {
            if (attributes[lvar]) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]}px;`;
            }
        })
    }
    let normalDeg = vars?.normalDeg;
    if (normalDeg?.length) {
        normalDeg.map((lvar) => {
            if (attributes[lvar]) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]}deg;`;
            }
        })
    }
    let normalUnit = vars?.normalUnit;
    if (normalUnit?.length) {
        normalUnit.map((lvar) => {
            if (attributes[lvar]) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]}${attributes[lvar + 'Unit']};`;
            }
        })
    }
    let boxShadow = vars?.boxShadow;
    if (boxShadow?.length) {
        boxShadow.map((lvar) => {
            retvar += boxShadowVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Horizontal'], attributes[lvar + 'Vertical'], attributes[lvar + 'Blur'], attributes[lvar + 'Spread'], attributes[lvar + 'Color'], attributes[lvar + 'Inset'], 'px');
        })
    }
    let textShadow = vars?.textShadow;
    if (textShadow?.length) {
        textShadow.map((lvar) => {
            retvar += textShadowVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Horizontal'], attributes[lvar + 'Vertical'], attributes[lvar + 'Blur'], attributes[lvar + 'Color'], 'px');
        })
    }
    let responsiveDimension = vars?.responsiveDimension;
    if (responsiveDimension?.length) {
        responsiveDimension.map((lvar) => {
            retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'],
            attributes[lvar + 'SmTop'], attributes[lvar + 'SmRight'], attributes[lvar + 'SmBottom'], attributes[lvar + 'SmLeft'],
            attributes[lvar + 'MdTop'], attributes[lvar + 'MdRight'], attributes[lvar + 'MdBottom'], attributes[lvar + 'MdLeft'], attributes[lvar + 'Unit']);
        })
    }
    let responsiveTopBottomDimension = vars?.responsiveTopBottomDimension;
    if (responsiveTopBottomDimension?.length) {
        responsiveTopBottomDimension.map((lvar) => {
            retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], '', attributes[lvar + 'Bottom'], '',
            attributes[lvar + 'SmTop'], '', attributes[lvar + 'SmBottom'], '',
            attributes[lvar + 'MdTop'], '', attributes[lvar + 'MdBottom'], '', attributes[lvar + 'Unit']);
        })
    }
    let topBottomDimension = vars?.topBottomDimension;
    if (topBottomDimension?.length) {
        topBottomDimension.map((lvar) => {
            retvar += dimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], '', attributes[lvar + 'Bottom'], '', attributes[lvar + 'Unit']);
        })
    }
    let responsiveLeftRightDimension = vars?.responsiveLeftRightDimension;
    if (responsiveLeftRightDimension?.length) {
        responsiveLeftRightDimension.map((lvar) => {
            retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), '', attributes[lvar + 'Right'], '', attributes[lvar + 'Left'],
            '', attributes[lvar + 'SmRight'], '', attributes[lvar + 'SmLeft'],
            '', attributes[lvar + 'MdRight'], '', attributes[lvar + 'MdLeft'], attributes[lvar + 'Unit']);
        })
    }
    let dimension = vars?.dimension;
    if (dimension?.length) {
        dimension.map((lvar) => {
            retvar += dimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'], attributes[lvar + 'Unit']);
        })
    }
    let responsiveBorder = vars?.responsiveBorder;
    if (responsiveBorder?.length) {
        responsiveBorder.map((lvar) => {
            if (attributes[lvar]) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]};`;
            }
            retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'],
            attributes[lvar + 'SmTop'], attributes[lvar + 'SmRight'], attributes[lvar + 'SmBottom'], attributes[lvar + 'SmLeft'],
            attributes[lvar + 'MdTop'], attributes[lvar + 'MdRight'], attributes[lvar + 'MdBottom'], attributes[lvar + 'MdLeft'], attributes[lvar + 'Unit']);
            if (attributes[lvar + 'Color']) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-color:${attributes[lvar + 'Color']};`;
            }
        })
    }
    let responsiveTypography = vars?.responsiveTypography;
    if (responsiveTypography?.length) {
        responsiveTypography.map((lvar) => {
            retvar += responsiveTypographyVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), 
                attributes[lvar + 'Family'], 
                attributes[lvar + 'Weight'], 
                attributes[lvar + 'TextTransform'], 
                attributes[lvar + 'TextDecoration'],
                attributes[lvar + 'FontSizeSm'], 
                attributes[lvar + 'FontSizeMd'], 
                attributes[lvar + 'FontSize'], 
                attributes[lvar + 'FontSizeUnit'],
                attributes[lvar + 'LetterSpacingSm'], 
                attributes[lvar + 'LetterSpacingMd'], 
                attributes[lvar + 'LetterSpacing'], 
                attributes[lvar + 'LetterSpacingUnit'],
                attributes[lvar + 'LineHeightSm'], 
                attributes[lvar + 'LineHeightMd'], 
                attributes[lvar + 'LineHeight'], 
                attributes[lvar + 'LineHeightUnit']
            );
        })
    }
    let backgroundType = vars?.backgroundType;
    if (backgroundType?.length) {
        backgroundType.map((lvar) => {
            if (attributes[lvar + 'Type'] == 'color' && attributes[lvar + 'Color']) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-color:${attributes[lvar + 'Color']};`;
            }
            if (attributes[lvar + 'Type'] == 'gradient' && attributes[lvar + 'Gradient']) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-gradient:${attributes[lvar + 'Gradient']};`;
            }
        })
    }
    let advancedRadius = vars?.advancedRadius;
    if (advancedRadius?.length) {
        advancedRadius.map((lvar) => {
            if (attributes[lvar + 'AdvancedShow']) {
                retvar += `--hf-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-radius:${attributes[lvar + 'Advanced']};`;
            } else {
                retvar += dimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '-radius', attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'], attributes[lvar + 'Unit']);
            }
        })
    }
    return retvar;
}

export {getCssVar, responsiveSliderVars, easingList, getParallaxData, getImageParallaxDat, sbGetParticlesDat, hoverAnimations, htmlTags, animationEffects, toMoment, responsiveTypographyVars, dimensionVars, boxShadowVars, responsiveDimensionVars, textShadowVars, getImageSrc, getElementPositions, showAnimations, showAnimationsAlt, sliderAnimations, getStyleVars};