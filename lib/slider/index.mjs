import {
    createSectionFactory as a,
    createBaseSections as e,
} from '../index.mjs';
const l = /* #__PURE__ */ a('sl'),
    {
        outer: t,
        wrapper: s,
        inner: $,
        icon: n,
        prefix: i,
        suffix: r,
        help: d,
        messages: o,
        message: u,
    } = /* #__PURE__ */ e(l),
    c = l('label', () => ({
        if: '$label',
        $el: 'label',
        attrs: { id: "$id + '_label'" },
    })),
    h = l('chart', () => ({ $el: 'div', if: '$chart' })),
    p = l('chartBar', () => ({
        $el: 'div',
        for: ['bar', 'index', '$chart'],
        attrs: {
            'data-active': {
                if: '$isMulti',
                then: {
                    if: '$_value.0 < $_value.1',
                    then: '$bar.at >= $_value.0 && $bar.at <= $_value.1',
                    else: '$bar.at >= $_value.1 && $bar.at <= $_value.0',
                },
                else: '$bar.at <= $_value',
            },
            style: {
                left: '$bar.at / ($max - $min) * 100 + "%"',
                width: '$: "calc(" + (100 / $chart.length) + "% - 2px)"',
                height: {
                    if: '$largestBar',
                    then: '$bar.value / $largestBar * 100 + "%"',
                },
            },
        },
    })),
    m = l('sliderInner', () => ({
        $el: 'div',
        attrs: { 'data-has-mark-labels': '$markLabels && $marks.length > 0' },
    })),
    v = l('track', () => ({
        $el: 'div',
        attrs: { id: "$: 'track-' + $id", onClick: '$handlers.clickTrack' },
    })),
    f = l('trackWrapper', () => ({ $el: 'div' })),
    b = l('trackInner', () => ({ $el: 'div' })),
    k = l('fill', () => ({ $el: 'div', attrs: { style: '$fillStyles' } })),
    _ = l('linkedValues', () => ({ $el: 'div' })),
    x = l('maxValue', () => ({
        $formkit: 'number',
        bind: '$computedMaxInputAttrs',
        ignore: !0,
        number: !0,
        value: { if: '$isMulti', then: '$_value.1', else: '$_value' },
        tabindex: { if: '$disabled', then: -1 },
        onNode: '$handlers.maxNode',
        onBlur: '$handlers.inputBlur',
    })),
    M = l('minValue', () => ({
        $formkit: 'number',
        if: '$isMulti',
        bind: '$computedMinInputAttrs',
        ignore: !0,
        number: !0,
        value: { if: '$isMulti', then: '$_value.0', else: '$_value' },
        tabindex: { if: '$disabled', then: -1 },
        onNode: '$handlers.minNode',
        onBlur: '$handlers.inputBlur',
    })),
    g = l('marks', () => ({ $el: 'div', if: '$marks' })),
    y = l('mark', () => ({
        $el: 'span',
        for: ['step', 'index', '$marks'],
        attrs: {
            'data-active': {
                if: '$isMulti',
                then: {
                    if: '$_value.0 < $_value.1',
                    then: '$step.at >= $_value.0 && $step.at <= $_value.1',
                    else: '$step.at >= $_value.1 && $step.at <= $_value.0',
                },
                else: '$step.at <= $_value',
            },
            class: {
                if: '$step.class',
                then: '$: $classes.mark + " " + $step.class',
                else: '$classes.mark',
            },
            style: { left: '$: $fns.calculateMarkPosition($step.at) + "%"' },
        },
    })),
    I = l('markLabel', () => ({
        $el: 'span',
        if: '$markLabels',
        children: {
            if: '$step.label !== undefined',
            then: '$step.label',
            else: '',
        },
        attrs: { class: '$: $classes.markLabel + " " + $step.labelClass' },
    })),
    w = l('handles', () => ({ $el: 'ul' })),
    B = l('handleMax', () => ({
        $el: 'li',
        attrs: {
            'data-active': '$dragging',
            'data-is-target': '$lastHandleInteraction === "max"',
            'data-handle': 'max',
            'data-show-tooltip': '$tooltip',
            class: "$: 'formkit-handle ' + $classes.handle + ' ' + $classes.handleMax",
            onFocus: '$handlers.focus',
            onClick: '$handlers.clickHandle',
            onMousedown: '$handlers.startDrag',
            onTouchstart: '$handlers.startDrag',
            style: '$maxHandleStyles',
            tabindex: { if: '$disabled', then: -1, else: 0 },
            onBlur: '$handlers.blur',
            onKeydown: '$handlers.keydown',
        },
    })),
    F = l('handleMin', () => ({
        $el: 'li',
        if: '$isMulti',
        attrs: {
            'data-active': '$dragging',
            'data-is-target': '$lastHandleInteraction === "min"',
            'data-handle': 'min',
            'data-show-tooltip': '$tooltip',
            class: "$: $classes.handle + ' ' + $classes.handleMin",
            onFocus: '$handlers.focus',
            onClick: '$handlers.clickHandle',
            onMousedown: '$handlers.startDrag',
            onTouchstart: '$handlers.startDrag',
            style: '$minHandleStyles',
            tabindex: { if: '$disabled', then: -1, else: 0 },
            onBlur: '$handlers.blur',
            onKeydown: '$handlers.keydown',
        },
    })),
    H = l('handleMinInner', () => ({
        $el: 'div',
        attrs: {
            class: '$: $classes.handleInner + " " + $classes.handleMinInner',
        },
    })),
    C = l('handleMaxInner', () => ({
        $el: 'div',
        attrs: {
            class: '$: $classes.handleInner + " " + $classes.handleMaxInner',
        },
    })),
    D = l('tooltipMax', () => ({
        $el: 'div',
        if: '$tooltip === true || $tooltip === "auto"',
        children: {
            if: '$isMulti',
            then: {
                if: '$_value.0 < $_value.1',
                then: '$tooltipFormat($_value.1, "max")',
                else: '$tooltipFormat($_value.0, "max")',
            },
            else: '$tooltipFormat($_value, "max")',
        },
        attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMax" },
    })),
    L = l('tooltipMin', () => ({
        $el: 'div',
        if: '$isMulti && ($tooltip === true || $tooltip === "auto")',
        children: {
            if: '$_value.0 < $_value.1',
            then: '$tooltipFormat($_value.0, "min")',
            else: '$tooltipFormat($_value.1, "min")',
        },
        attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMin" },
    }));
export {
    h as chart,
    p as chartBar,
    l as createSection,
    k as fill,
    B as handleMax,
    C as handleMaxInner,
    F as handleMin,
    H as handleMinInner,
    w as handles,
    d as help,
    n as icon,
    $ as inner,
    c as label,
    _ as linkedValues,
    y as mark,
    I as markLabel,
    g as marks,
    x as maxValue,
    u as message,
    o as messages,
    M as minValue,
    t as outer,
    i as prefix,
    m as sliderInner,
    r as suffix,
    D as tooltipMax,
    L as tooltipMin,
    v as track,
    b as trackInner,
    f as trackWrapper,
    s as wrapper,
};
