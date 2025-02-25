import {
    createSectionFactory as e,
    createBaseSections as l,
    $if as a,
} from '../index.mjs';
const o = /* #__PURE__ */ e('tg'),
    {
        outer: $,
        wrapper: t,
        label: n,
        prefix: i,
        suffix: r,
        help: b,
        messages: f,
        message: d,
        icon: u,
    } = /* #__PURE__ */ l(o),
    s = o('input', () => ({
        $el: 'input',
        bind: '$attrs',
        attrs: {
            type: 'checkbox',
            id: '$id',
            value: '$value',
            name: '$node.name',
            checked: '$checked',
            onInput: '$handlers.toggles',
            onBlur: '$handlers.blur',
            disabled: '$disabled',
        },
    })),
    c = o('label', () => ({
        if: '($label && $onValueLabel === undefined && $offValueLabel === undefined) || ($valueLabelDisplay === inner) && $altLabelPosition !== true',
        $el: 'label',
        attrs: { for: '$id' },
        children: '$label',
    })),
    h = o('altLabel', () => ({
        $el: 'label',
        if: '($label && ($onValueLabel || $offValueLabel) && $valueLabelDisplay !== hidden && $valueLabelDisplay !== inner) || $altLabelPosition === true',
        attrs: {
            for: '$id',
            'data-label-alt': 'true',
            style: {
                color: {
                    if: '$checked',
                    then: '$valueLabelColorOn',
                    else: '$valueLabelColorOff',
                },
            },
        },
        children: '$label',
    })),
    L = o('innerLabel', () => ({
        $el: 'div',
        if: '$valueLabelDisplay === inner && ($checked && $onValueLabel || $offValueLabel)',
        attrs: {
            style: {
                color: {
                    if: '$checked',
                    then: '$valueLabelColorOn',
                    else: '$valueLabelColorOff',
                },
            },
        },
        children: {
            if: '$checked',
            then: '$onValueLabel',
            else: '$offValueLabel',
        },
    })),
    k = o('valueLabel', () => ({
        $el: 'label',
        if: '$valueLabelDisplay !== hidden && $valueLabelDisplay !== inner && (($checked === true && $onValueLabel) || ($checked === false && $offValueLabel))',
        attrs: { for: '$id' },
        children: {
            if: '$checked && $onValueLabel',
            then: '$onValueLabel',
            else: { if: '$offValueLabel', then: '$offValueLabel' },
        },
    })),
    p = o('inner', () => ({
        $el: 'label',
        attrs: { for: '$id', id: "$id + '_label'" },
    })),
    v = o('track', () => ({
        $el: 'div',
        attrs: {
            style: {
                backgroundColor: {
                    if: '$checked',
                    then: '$trackColorOn',
                    else: '$trackColorOff',
                },
            },
        },
    })),
    V = o('thumb', () => ({
        $el: 'div',
        attrs: {
            style: {
                color: {
                    if: '$checked',
                    then: '$iconColorOn',
                    else: '$iconColorOff',
                },
                backgroundColor: {
                    if: '$checked',
                    then: '$thumbColorOn',
                    else: '$thumbColorOff',
                },
            },
        },
    })),
    C = () => V(a('$slots.default', '$slots.default', u('thumb')));
export {
    h as altLabel,
    o as createSection,
    c as defaultLabel,
    b as help,
    u as icon,
    p as inner,
    L as innerLabel,
    s as input,
    n as label,
    d as message,
    f as messages,
    $ as outer,
    i as prefix,
    r as suffix,
    C as thumbWrapper,
    v as track,
    k as valueLabel,
    t as wrapper,
};
