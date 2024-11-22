import {
    $if as e,
    $attrs as t,
    createSectionFactory as i,
    createBaseSections as o,
} from '../index.mjs';
import { icon as a } from '@formkit/inputs';
const n = (e, t) => () => a(e, t);
function l(i) {
    const o = i('dropdownWrapper', () => ({
            $el: 'div',
            attrs: {
                id: '$id + "_popover"',
                popover: { if: '$usePopover', then: '$popover', else: void 0 },
                'data-is-wrapper': !0,
                style: '$dropdownWrapperStyles',
                onScroll: '$handlers.scroll',
            },
        })),
        a = i('listbox', () => ({
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
        l = i('listitem', () => ({
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
        d = i('loadMore', () => ({
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
        s = i('loadMoreInner', 'span'),
        r = i('emptyMessage', () => ({
            $el: 'li',
            if: '$showEmptyMessage && $state.loading !== true',
            attrs: {
                id: '$id + "_empty_message"',
                key: '$emptyMessage',
                role: 'presentation',
            },
        })),
        $ = i('emptyMessageInner', 'span'),
        p = i('option', () => ({
            $el: 'div',
            attrs: { 'data-checked': '$fns.isSelected($option)' },
        })),
        u = i('listitems', () => ({
            $el: null,
            if: '$options.length',
            for: ['option', 'index', '$option.options || $options'],
        })),
        c = i('innerListitems', () => ({
            $el: null,
            for: ['option', 'innerIndex', '$option.options'],
        })),
        g = i('listitemGroup', () => ({
            $el: 'li',
            attrs: {
                'aria-label': '$option.group',
                role: 'group',
                onClick: '$handlers.listitemGroupClick',
                tabindex: '-1',
            },
        })),
        b = i('groupLabel', 'span'),
        v = i('groupList', () => ({ $el: 'ul', attrs: { role: 'group' } }));
    return () =>
        o(
            a(
                r($('$emptyMessage')),
                u(
                    e(
                        '$option.group',
                        g(
                            b('$option.group'),
                            v(
                                c(
                                    t(
                                        () => ({
                                            id: '$id + "_listitem_" + $index + "_" + $innerIndex',
                                        }),
                                        l(
                                            e(
                                                '$fns.isSelected($option)',
                                                n('selected')
                                            ),
                                            p('$option.label')
                                        )
                                    )
                                )
                            )
                        ),
                        l(
                            e('$fns.isSelected($option)', n('selected')),
                            p('$option.label')
                        )
                    )
                ),
                d(
                    e(
                        '$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage',
                        s(
                            e('$state.loading', n('loader')),
                            '$state.loading && $ui.isLoading.value || $ui.loadMore.value'
                        )
                    )
                )
            )
        );
}
const d = /* #__PURE__ */ i('tl'),
    {
        outer: s,
        wrapper: r,
        inner: $,
        icon: p,
        label: u,
        prefix: c,
        suffix: g,
        help: b,
        messages: v,
        message: x,
    } = /* #__PURE__ */ o(d),
    h = d('input', () => ({
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
            value: '$inputText',
            name: '$node.name',
            tabindex: '0',
            placeholder:
                '$state.loading && $inputStd.length === 0 && $ui.isLoading.value || $placeholder || undefined',
            role: 'combobox',
            autocomplete: 'off',
            autocapitalize: 'none',
            readonly:
                '$attrs.readonly || $isLoadingOption || undefined || $multiple && $max && $value && $value.length >= $max',
            disabled: '$disabled || $disabledInternally || undefined',
            'aria-autocomplete': 'list',
            'aria-expanded': '$expanded',
            'aria-controls': '$expanded && $id + "_listbox" || undefined',
            'aria-describedBy': '$describedBy',
            'aria-activedescendant':
                '$expanded && $activeDescendant || undefined',
        },
    })),
    m = d('listboxButton', () => ({
        $el: 'button',
        attrs: {
            style: '$visibilityStyles',
            id: '$id + "_listbox_button"',
            type: 'button',
            onClick: '$handlers.toggleListbox',
            tabindex: '-1',
            'aria-label': '$expanded && $ui.close.value || $ui.open.value',
            disabled: '$disabled || undefined',
            'aria-haspopup': 'true',
            'aria-expanded': '$expanded',
            'aria-controls': '$expanded && $id + "_listbox" || undefined',
        },
    })),
    f = d('tagWrapper', () => ({
        $el: 'span',
        for: ['option', 'index', '$selections'],
        attrs: {
            id: '$id + "_tag-wrapper_" + $index',
            key: '$option.value',
            'data-value': '$option.value',
            tabindex: '-1',
            onClick: '$handlers.tagClick && $handlers.tagClick($option)',
            onFocus: '$handlers.tagFocus && $handlers.tagFocus($option)',
            onBlur: '$handlers.tagBlur && $handlers.tagBlur($option)',
            onKeydown:
                '$handlers.searchInputTagKeydown && $handlers.searchInputTagKeydown($option)',
            'data-is-tag': 'true',
            'data-active-selection':
                '$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)',
        },
    })),
    y = d('tag', () => ({
        $el: 'div',
        attrs: { id: '$id + "_tag_" + $index', role: 'button' },
    })),
    _ = d('removeSelection', () => ({
        $el: 'button',
        if: '$selections.length > 0',
        attrs: {
            id: '$id + "_remove_selection_" + $index',
            tabindex: '-1',
            'aria-label': '$ui.remove.value',
            type: 'button',
            onClick:
                '$handlers.removeSelection && $handlers.removeSelection($option)',
            onTouchstartPassive:
                '$handlers.removeSelection && $handlers.removeSelection($option)',
            'aria-controls': '$id',
        },
    })),
    k = d('tagLabel', () => ({ $el: 'span' })),
    S = d('tags', () => ({
        $el: 'div',
        attrs: { id: '$id + "_selections"', 'aria-live': 'polite' },
    })),
    w = d('tagLoading', 'span'),
    C = /* #__PURE__ */ l(d);
export {
    d as createSection,
    b as help,
    p as icon,
    $ as inner,
    h as input,
    u as label,
    C as listbox,
    m as listboxButton,
    x as message,
    v as messages,
    s as outer,
    c as prefix,
    _ as removeSelection,
    g as suffix,
    y as tag,
    k as tagLabel,
    w as tagLoading,
    f as tagWrapper,
    S as tags,
    r as wrapper,
};
