import {
    $if as e,
    $attrs as i,
    createSectionFactory as t,
    createBaseSections as n,
} from '../index.mjs';
import { icon as a } from '@formkit/inputs';
const o = (e, i) => () => a(e, i);
function l(t) {
    const n = t('dropdownWrapper', () => ({
            $el: 'div',
            attrs: {
                id: '$id + "_popover"',
                popover: { if: '$usePopover', then: '$popover', else: void 0 },
                'data-is-wrapper': !0,
                style: '$dropdownWrapperStyles',
                onScroll: '$handlers.scroll',
            },
        })),
        a = t('listbox', () => ({
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
        r = t('emptyMessage', () => ({
            $el: 'li',
            if: '$showEmptyMessage && $state.loading !== true',
            attrs: {
                id: '$id + "_empty_message"',
                key: '$emptyMessage',
                role: 'presentation',
            },
        })),
        $ = t('emptyMessageInner', 'span'),
        p = t('option', () => ({
            $el: 'div',
            attrs: { 'data-checked': '$fns.isSelected($option)' },
        })),
        c = t('listitems', () => ({
            $el: null,
            if: '$options.length',
            for: ['option', 'index', '$option.options || $options'],
        })),
        u = t('innerListitems', () => ({
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
        g = t('groupLabel', 'span'),
        b = t('groupList', () => ({ $el: 'ul', attrs: { role: 'group' } }));
    return () =>
        n(
            a(
                r($('$emptyMessage')),
                c(
                    e(
                        '$option.group',
                        v(
                            g('$option.group'),
                            b(
                                u(
                                    i(
                                        () => ({
                                            id: '$id + "_listitem_" + $index + "_" + $innerIndex',
                                        }),
                                        l(
                                            e(
                                                '$fns.isSelected($option)',
                                                o('selected')
                                            ),
                                            p('$option.label')
                                        )
                                    )
                                )
                            )
                        ),
                        l(
                            e('$fns.isSelected($option)', o('selected')),
                            p('$option.label')
                        )
                    )
                ),
                d(
                    e(
                        '$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage',
                        s(
                            e('$state.loading', o('loader')),
                            '$state.loading && $ui.isLoading.value || $ui.loadMore.value'
                        )
                    )
                )
            )
        );
}
const d = /* #__PURE__ */ t('dd'),
    {
        outer: s,
        wrapper: r,
        inner: $,
        icon: p,
        label: c,
        prefix: u,
        suffix: v,
        help: g,
        messages: b,
        message: f,
    } = /* #__PURE__ */ n(d),
    x = d('selector', () => ({
        $el: 'button',
        bind: '$attrs',
        attrs: {
            id: '$id',
            type: 'button',
            onClick: '$handlers.click',
            onBlur: '$handlers.blur',
            onFocus: '$handlers.focus',
            onKeydown: '$handlers.keydown',
            tabindex: '0',
            name: '$node.name',
            disabled: '$disabled || $disabledInternally || undefined',
            'aria-haspopup': 'listbox',
            'aria-expanded': '$expanded',
            'aria-controls': '$expanded && $id + "_listbox" || undefined',
            'aria-describedBy': '$describedBy',
        },
    })),
    h = d('selectionWrapper', () => ({
        if: '$option || $state.loading',
        $el: 'div',
    })),
    m = d('selection', () => ({ $el: 'div' })),
    _ = d('placeholder', () => ({
        $el: 'div',
        attrs: {
            key: 'placeholder',
            'data-is-placeholder': 'true',
            'aria-hidden': '$placeholder === undefined && "true" || undefined',
            style: {
                opacity: '$placeholder === undefined && "0" || undefined',
                'pointer-events':
                    '$placeholder === undefined && "none" || undefined',
            },
        },
    })),
    y = d('optionLoading', 'span'),
    k = d('option', () => ({ $el: 'div' })),
    S = d('removeSelection', () => ({
        $el: 'div',
        attrs: {
            id: '$selectionAppearance === "tags" && $id + "_remove_selection_" + $index || $id + "_remove_selection"',
            tabindex: '-1',
            type: 'button',
            key: '$value',
            'aria-label': '$ui.remove.value',
            onClick:
                '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)',
            onTouchstartPassive:
                '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)',
            'aria-controls': '$id',
        },
    })),
    w = d('selectionsWrapper', () => ({
        $el: 'div',
        attrs: { id: '$id + "_selections_wrapper"' },
    })),
    I = d('selections', () => ({
        $el: 'div',
        attrs: {
            'aria-live': 'polite',
            'aria-hidden': '$lastVisibleIndex && "true" || undefined',
            'data-test': '$lastVisibleIndex',
            id: '$id + "_selections"',
        },
    })),
    L = d('truncationCount', () => ({
        $el: 'div',
        attrs: { id: '$id + "_truncation_count"' },
    })),
    C = d('selectionsItem', () => ({
        $el: 'div',
        for: ['selectionLabel', 'index', '$formattedSelections'],
        attrs: {
            id: '$id + "_selections_item_" + $index',
            'data-check': '$selectionLabel',
            key: '$selectionLabel',
            'aria-hidden':
                '$lastVisibleIndex && $index > $lastVisibleIndex && "true" || undefined',
            style: {
                visibility:
                    '$lastVisibleIndex && $index > $lastVisibleIndex && "hidden" || undefined',
            },
        },
        children: '$selectionLabel || ""',
    })),
    M = d('tagWrapper', () => ({
        $el: 'span',
        for: ['option', 'index', '$selections'],
        attrs: {
            id: '$id + "_tag-wrapper_" + $index',
            key: '$option.value',
            'data-value': '$option.value',
            tabindex: '-1',
            onClick: '$handlers.tagClick && $handlers.tagClick($option)',
            onKeydown: '$handlers.selectorTagKeydownHandler($option)',
            onFocus: '$handlers.tagFocus && $handlers.tagFocus($option)',
            onBlur: '$handlers.tagBlur && $handlers.tagBlur($option)',
            'data-is-tag': 'true',
            'data-active-selection':
                '$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)',
        },
    })),
    V = d('tag', () => ({
        $el: 'div',
        attrs: { id: '$id + "_tag_" + $index', role: 'button', tabindex: '-1' },
    })),
    A = d('tagLabel', () => ({ $el: 'span' })),
    B = d('tagsWrapper', () => ({
        $el: 'span',
        attrs: { id: '$id + "_tags_wrapper"', 'aria-live': 'polite' },
    })),
    W = d('tags', () => ({
        $el: 'span',
        attrs: { id: '$id + "_selections"' },
    })),
    F = d('tagLoading', 'span'),
    O = /* #__PURE__ */ l(d);
export {
    d as createSection,
    g as help,
    p as icon,
    $ as inner,
    c as label,
    O as listbox,
    f as message,
    b as messages,
    k as option,
    y as optionLoading,
    s as outer,
    _ as placeholder,
    u as prefix,
    S as removeSelection,
    m as selection,
    h as selectionWrapper,
    x as selector,
    I as selectorSelections,
    C as selectorSelectionsItem,
    w as selectorSelectionsWrapper,
    v as suffix,
    V as tag,
    A as tagLabel,
    F as tagLoading,
    M as tagWrapper,
    W as tags,
    B as tagsWrapper,
    L as truncationCount,
    r as wrapper,
};
