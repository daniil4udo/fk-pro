import {
    createSectionFactory as e,
    createBaseSections as t,
    $if as n,
} from '../index.mjs';
const a = /* #__PURE__ */ e('rt'),
    {
        outer: l,
        wrapper: s,
        inner: r,
        label: $,
        prefix: i,
        suffix: o,
        help: d,
        messages: m,
        message: f,
        icon: u,
    } = /* #__PURE__ */ t(a),
    h = a('itemsWrapper', () => ({
        $el: 'span',
        attrs: {
            style: {
                'flex-direction': '$rightToLeft && "row-reverse" || undefined',
            },
            tabindex: "$value !== undefined && $value !== 0 && '-1' || '0'",
            id: '$id + _items_wrapper',
            onKeydown: '$handlers.handleWrapperKeydown',
            'data-disabled': '$disabled',
            onBlur: '$handlers.handleWrapperBlur',
            onMouseleave: '$hoverHighlight && $handlers.handleMouseleave',
        },
    })),
    p = a('ratingItem', () => ({
        for: ['item', 'index', '$max'],
        $el: 'span',
        attrs: {
            id: '$id + "_item_" + $index',
            onClick: '$handlers.handleItemClick($item)',
            draggable:
                '$hoverHighlight !== true && && $disabled !== true && true',
            onMousemove: '$handlers.handleMousemove($item)',
            onDragstart: '$handlers.handleDragstart($item)',
            onDragend: '$handlers.handleDragend',
            onTouchstart: '$handlers.handleTouchstart($item)',
            onTouchmove: '$handlers.handleTouchmove',
        },
    })),
    c = a('template', () => ({
        for: ['increment', 'stepIndex', '$stepsPerValue'],
        $el: null,
    })),
    g = a('itemLabel', () => ({
        $el: 'label',
        attrs: {
            id: '$id + "_label_" + $index + "_" + $stepIndex',
            for: '$id + "_" + $index + "_" + $stepIndex',
            'data-checked':
                '$value === $fns.getValue($item, $increment) && "true" || "false"',
            style: {
                width: '$fns.showLabel($fns.getValue($item, $increment), $stepIndex, $item) && "100%" || "0%"',
            },
        },
    })),
    v = a('itemLabelInner', () => ({
        $el: 'span',
        children: '$fns.getValue($item, $increment)',
    })),
    x = a('input', () => ({
        $el: 'input',
        attrs: {
            type: 'radio',
            value: '$fns.getValue($item, $increment)',
            id: '$id + "_" + $index + "_" + $stepIndex',
            onFocus: '$handlers.handleFocus',
            tabindex:
                '$value === $fns.getValue($item, $increment) && "0" || "-1"',
            disabled: '$disabled',
            name: '$id',
            'data-value': '$fns.getValue($item, $increment)',
            checked: '$value === $fns.getValue($item, $increment) && true',
            onKeydown:
                '$handlers.handleKeydown($fns.getValue($item, $increment))',
        },
    })),
    I = a('onItemRow', () => ({
        $el: 'span',
        attrs: {
            style: {
                width: '$fns.getPercentage($itemsToPercentages, $item)',
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                top: '0',
                left: '0',
                bottom: '0',
            },
        },
    })),
    b = a('offItemRow', () => ({
        $el: 'span',
        attrs: {
            style: {
                width: '$fns.getPercentage($itemsToPercentages, $item, false)',
                display: 'flex',
                'flex-direction': 'row-reverse',
                position: 'absolute',
                zIndex: '$offItemStyles && 100',
                overflow: 'hidden',
                top: '0',
                right: '0',
            },
        },
    })),
    w = a('onItemWrapper', () => ({
        $el: 'div',
        attrs: { style: { color: '$onColor' } },
    })),
    y = a('offItemWrapper', () => ({
        $el: 'div',
        attrs: { style: { color: '$offColor' } },
    })),
    _ = () =>
        n(
            '$slots.onItem',
            () => () => '$slots.onItem',
            n('$slots.default', () => () => '$slots.default', u('rating'))
        ),
    V = () =>
        n(
            '$slots.offItem',
            () => () => '$slots.offItem',
            n('$slots.default', () => () => '$slots.default', u('rating'))
        );
export {
    a as createSection,
    d as help,
    u as icon,
    r as inner,
    x as input,
    g as itemLabel,
    v as itemLabelInner,
    h as itemsWrapper,
    $ as label,
    f as message,
    m as messages,
    V as offItem,
    b as offItemRow,
    y as offItemWrapper,
    _ as onItem,
    I as onItemRow,
    w as onItemWrapper,
    l as outer,
    i as prefix,
    p as ratingItem,
    o as suffix,
    c as template,
    s as wrapper,
};
