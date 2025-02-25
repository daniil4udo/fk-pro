import {
    $if as e,
    $attrs as i,
    createSectionFactory as t,
    createBaseSections as o,
} from '../index.mjs';
import { icon as n } from '@formkit/inputs';
const a = (e, i) => () => n(e, i);
function l(t) {
    const o = t('dropdownWrapper', () => ({
            $el: 'div',
            attrs: {
                id: '$id + "_popover"',
                popover: { if: '$usePopover', then: '$popover', else: void 0 },
                'data-is-wrapper': !0,
                style: '$dropdownWrapperStyles',
                onScroll: '$handlers.scroll',
            },
        })),
        n = t('listbox', () => ({
            $el: 'ul',
            if: '$expanded || $setForceExpanded',
            attrs: {
                style: '$listboxStyles',
                id: '$id + "_listbox"',
                role: 'listbox',
                'aria-activedescendant': '$activeDescendant',
                'aria-labelledby': '$id + "_label"',
            },
        })),
        l = t('listitem', () => ({
            $el: 'li',
            bind: '$option.attrs',
            attrs: {
                id: '$id + "_listitem_" + $index',
                'data-disabled': '$option.attrs.disabled',
                'data-value': '$option.value',
                key: '$option.value',
                onClick: '$handlers.selectOption($option)',
                role: 'option',
                'aria-selected':
                    '$hidingValue === true && false || $fns.isSelected($option)',
                'data-is-active': '$fns.isActive($option)',
                tabindex: '-1',
            },
        })),
        d = t('loadMore', () => ({
            $el: 'li',
            if: '$state.loading || $state.hasNextPage',
            attrs: {
                id: '$id + "_load_more"',
                key: 'loadMore',
                role: 'option',
                onClick: '$handlers.selectOption($loadMoreOption)',
                'aria-selected': 'false',
                'data-is-active': '$fns.isActive($loadMoreOption)',
                tabindex: '-1',
            },
        })),
        s = t('loadMoreInner', 'span'),
        $ = t('emptyMessage', () => ({
            $el: 'li',
            if: '$showEmptyMessage && $state.loading !== true',
            attrs: {
                id: '$id + "_empty_message"',
                key: '$emptyMessage',
                role: 'presentation',
            },
        })),
        r = t('emptyMessageInner', 'span'),
        p = t('option', () => ({
            $el: 'div',
            attrs: { 'data-checked': '$fns.isSelected($option)' },
        })),
        u = t('listitems', () => ({
            $el: null,
            if: '$options.length',
            for: ['option', 'index', '$option.options || $options'],
        })),
        c = t('innerListitems', () => ({
            $el: null,
            for: ['option', 'innerIndex', '$option.options'],
        })),
        v = t('listitemGroup', () => ({
            $el: 'li',
            attrs: {
                'aria-label': '$option.group',
                role: 'group',
                onClick: '$handlers.listitemGroupClick',
                tabindex: '-1',
            },
        })),
        b = t('groupLabel', 'span'),
        m = t('groupList', () => ({ $el: 'ul', attrs: { role: 'group' } }));
    return () =>
        o(
            n(
                $(r('$emptyMessage')),
                u(
                    e(
                        '$option.group',
                        v(
                            b('$option.group'),
                            m(
                                c(
                                    i(
                                        () => ({
                                            id: '$id + "_listitem_" + $index + "_" + $innerIndex',
                                        }),
                                        l(
                                            e(
                                                '$fns.isSelected($option)',
                                                a('selected')
                                            ),
                                            p('$option.label')
                                        )
                                    )
                                )
                            )
                        ),
                        l(
                            e('$fns.isSelected($option)', a('selected')),
                            p('$option.label')
                        )
                    )
                ),
                d(
                    e(
                        '$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage',
                        s(
                            e('$state.loading', a('loader')),
                            '$state.loading && $ui.isLoading.value || $ui.loadMore.value'
                        )
                    )
                )
            )
        );
}
const d = /* #__PURE__ */ t('ac'),
    {
        outer: s,
        wrapper: $,
        inner: r,
        icon: p,
        label: u,
        prefix: c,
        suffix: v,
        help: b,
        messages: m,
        message: h,
    } = /* #__PURE__ */ o(d),
    f = d('input', () => ({
        $el: 'input',
        bind: '$attrs',
        attrs: {
            id: '$id',
            type: 'text',
            onClick: '$handlers.click',
            onBlur: '$handlers.blur',
            onKeydown: '$handlers.keydown',
            onInput: '$handlers.input',
            onFocus: '$handlers.focus',
            value: '$inputText || undefined',
            name: '$node.name',
            placeholder:
                '$state.loading && $ui.isLoading.value || $placeholder || undefined',
            tabindex: '$disabled && "-1" || 0',
            role: 'combobox',
            autocomplete: '$attrs.autocomplete || "off"',
            autocapitalize: 'none',
            readonly:
                '$attrs.readonly || $state.loading || $multiple && $max && $value && $value.length >= $max && $hasHighlightedRange !== true || undefined',
            'data-selection-appearance': '$selectionAppearance',
            disabled: '$disabled || $disabledInternally || undefined',
            onTouchmovePassive: '$handlers.touchmove',
            onTouchstartPassive: '$handlers.touchmove',
            onTouchend: '$handlers.touchend',
            'aria-autocomplete': 'list',
            'aria-expanded': '$expanded',
            'aria-controls': '$expanded && $id + "_listbox" || undefined',
            'aria-describedBy': '$describedBy',
            'aria-activedescendant':
                '$expanded && $activeDescendant || undefined',
            'aria-required': '$state.required || undefined',
        },
    })),
    x = d('listboxButton', () => ({
        $el: 'div',
        attrs: {
            style: '$visibilityStyles',
            id: '$id + "_listbox_button"',
            role: 'button',
            'aria-label': '$expanded && $ui.close.value || $ui.open.value',
            onClick: '$handlers.toggleListbox',
            onKeydown: '$handlers.toggleListboxKeydown',
            tabindex: '$disabled && "-1" || 0',
            'aria-haspopup': 'true',
            'aria-expanded': '$expanded',
            'aria-controls': '$expanded && $id + "_listbox" || undefined',
            'aria-disabled': '$disabled || $state.loading || undefined',
            'data-disabled': '$disabled || $disabledInternally || undefined',
        },
    })),
    g = d('selectionWrapper', () => ({
        for: ['option', 'index', '$selections'],
        $el: 'div',
        attrs: {
            id: '$id + "_selection_wrapper_" + $index',
            key: '$option.value',
            'data-value': '$option.value',
            tabindex: '$disabled && "-1" || 0',
            onKeydown:
                '$handlers.selectionKeydown && $handlers.selectionKeydown($multiple && $option || undefined)',
            onClick:
                '$handlers.selectionClick && $handlers.selectionClick($multiple && $option || undefined)',
            onFocus:
                '$handlers.selectionFocus && $handlers.selectionFocus($multiple && $option || undefined)',
            onBlur: '$handlers.selectionBlur && $handlers.selectionBlur($multiple && $option || undefined)',
            'data-is-selection': 'true',
            'data-active-selection':
                '$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)',
        },
    })),
    y = d('selection', () => ({
        $el: 'div',
        attrs: { id: '$id + "_selection_" + $index' },
    })),
    _ = d('selections', () => ({
        $el: 'div',
        attrs: { 'aria-live': 'polite', id: '$id + "_selections"' },
    })),
    k = d('removeSelection', () => ({
        $el: 'button',
        attrs: {
            id: '$selectionAppearance === "option" && $multiple && $id + "_remove_selection_" + $index || $id + "_remove_selection"',
            tabindex: '0',
            title: '$ui.remove.value',
            type: 'button',
            'aria-label': '$ui.remove.value',
            onClick:
                '$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)',
            onTouchend:
                '$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)',
            'aria-controls': '$id',
        },
    })),
    S = d('optionLoading', 'span'),
    w = d('option', () => ({ $el: 'div', if: '$value !== undefined' })),
    C = /* #__PURE__ */ l(d);
export {
    d as createSection,
    b as help,
    p as icon,
    r as inner,
    f as input,
    u as label,
    C as listbox,
    x as listboxButton,
    h as message,
    m as messages,
    w as option,
    S as optionLoading,
    s as outer,
    c as prefix,
    k as removeSelection,
    y as selection,
    g as selectionWrapper,
    _ as selections,
    v as suffix,
    $ as wrapper,
};
