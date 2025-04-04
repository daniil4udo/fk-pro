import {
    createSectionFactory as e,
    createBaseSections as s,
} from '../index.mjs';
const t = /* #__PURE__ */ e('tf'),
    {
        outer: a,
        wrapper: r,
        inner: l,
        icon: o,
        prefix: i,
        suffix: n,
        help: c,
        messages: d,
        message: $,
    } = /* #__PURE__ */ s(t),
    u = t('fieldset', () => ({
        $el: 'fieldset',
        attrs: {
            id: '$id + "_fieldset"',
            role: 'presentation',
            'aria-describedby': {
                if: '$help',
                then: '$: "help-" + $id',
                else: void 0,
            },
        },
    })),
    h = t('legend', () => ({ if: '$label', $el: 'legend' })),
    p = t('area', () => ({ $el: 'div', attrs: { id: '$id + "_area"' } })),
    f = t('source', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_source"',
            class: '$classes.transferlist + " " + $classes.source',
        },
    })),
    g = t('sourceHeader', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_source_header"',
            role: 'presentation',
            class: '$classes.transferlistHeader + " " + $classes.sourceHeader',
        },
    })),
    _ = t('sourceHeaderLabel', () => ({
        if: '$sourceLabel',
        $el: 'label',
        attrs: {
            id: '$id + "_source_header_label"',
            for: '$id + "_source_search_input"',
            class: '$classes.transferlistHeaderLabel + " " + $classes.sourceHeaderLabel',
        },
        children: '$sourceLabel || $label',
    })),
    b = t('sourceHeaderItemCount', () => ({
        $el: 'span',
        attrs: {
            id: '$id + "_source_header_item_count"',
            role: 'presentation',
            'aria-label': '$sourceOptions.length " items"',
            class: '$classes.transferlistHeaderItemCount + " " + $classes.sourceHeaderItemCount',
        },
    })),
    m = t('targetHeaderLabel', () => ({
        if: '$targetLabel',
        $el: 'label',
        attrs: {
            id: '$id + "_target_header_label"',
            for: '$id + "_target_search_input"',
            class: '$classes.transferlistHeaderLabel + " " + $classes.targetHeaderLabel',
        },
        children: '$targetLabel || $label',
    })),
    v = t('targetHeaderItemCount', () => ({
        $el: 'span',
        attrs: {
            id: '$id + "_target_header_item_count"',
            role: 'presentation',
            'aria-label': '$targetOptions.length + " items"',
            class: '$classes.transferlistHeaderItemCount + " " + $classes.targetHeaderItemCount',
        },
        children: '$targetOptions.length',
    })),
    S = t('sourceControls', () => ({
        $el: 'div',
        if: '$searchable',
        attrs: {
            id: '$id + "_source_controls"',
            class: '$classes.transferlistControls + " " + $classes.sourceControls',
        },
    })),
    I = t('sourceSearch', () => ({
        if: '$searchable',
        $el: 'div',
        attrs: {
            id: '$id + "_source_search"',
            class: '$classes.transferlistSearch + " " + $classes.sourceSearch',
        },
    })),
    L = t('sourceSearchInput', () => ({
        $el: 'input',
        attrs: {
            id: '$id + "_source_search_input"',
            type: 'text',
            placeholder: '$placeholder',
            onInput: '$handlers.onSearch',
            value: '$inputText',
            onKeydown: '$handlers.sourceSearchKeydown',
            disabled: '$disabled',
            'aria-label': 'Search',
            role: 'searchbox',
            autocomplete: 'off',
            class: '$classes.transferlistSearchInput + " " + $classes.sourceSearchInput',
            onFocus: '$handlers.sourceSearchFocus',
            onBlur: '$handlers.sourceSearchBlur',
        },
    })),
    y = t('targetSearch', () => ({
        if: '$targetSearchable',
        $el: 'div',
        attrs: {
            id: '$id + "_target_search"',
            class: '$classes.transferlistSearch + " " + $classes.targetSearch',
        },
    })),
    C = t('targetSearchInput', () => ({
        $el: 'input',
        attrs: {
            id: '$id + "_target_search_input"',
            type: 'text',
            placeholder: '$placeholder',
            onInput: '$handlers.onTargetSearch',
            value: '$targetInputText',
            onKeydown: '$handlers.targetSearchKeydown',
            disabled: '$disabled',
            'aria-label': 'Search',
            role: 'searchbox',
            autocomplete: 'off',
            class: '$classes.transferlistSearchInput + " " + $classes.targetSearchInput',
            onFocus: '$handlers.targetSearchFocus',
            onBlur: '$handlers.targetSearchBlur',
        },
    })),
    k = t('targetControls', () => ({
        $el: 'div',
        if: '$targetSearchable',
        attrs: {
            id: '$id + "_target_controls"',
            class: '$classes.transferlistControls + " " + $classes.targetControls',
        },
    })),
    w = t('sourceSearchClear', () => ({
        $el: 'button',
        if: '$inputText !== ""',
        attrs: {
            id: '$id + "_source_search_clear"',
            type: 'button',
            onClick: '$handlers.clearSearch',
            'aria-label': 'Clear Source Search',
            class: '$classes.transferlistSearchClear + " " + $classes.sourceSearchClear',
        },
    })),
    x = t('targetSearchClear', () => ({
        $el: 'button',
        if: '$targetInputText !== ""',
        attrs: {
            id: '$id + "_target_search_clear"',
            type: 'button',
            onClick: '$handlers.clearTargetSearch',
            'aria-label': 'Clear Target Search',
            class: '$classes.transferlistSearchClear + " " + $classes.targetSearchClear',
        },
    })),
    B = t('sourceListItems', () => ({
        $el: 'ul',
        attrs: {
            id: '$id + "_source_list_items"',
            'aria-activedescendant': '$activeDescendant',
            onMouseenter: '$handlers.onMouseenter(true)',
            onMouseout: '$handlers.onMouseleave(true)',
            role: 'listbox',
            'aria-multiselectable': 'true',
            'aria-roledescription': 'List of options to choose from.',
            class: '$classes.transferlistListItems + " " + $classes.sourceListItems',
            onKeydown: '$handlers.sourceListKeydown',
            tabindex: '$searchable || $sourceOptions.length === 0 && -1 || 0',
            onFocus: '$handlers.sourceListFocused',
            onBlur: '$handlers.sourceListBlurred',
            'aria-label': 'Source list',
        },
    })),
    M = t('sourceListItem', () => ({
        for: ['option', 'index', '$sourceOptions'],
        $el: 'li',
        attrs: {
            id: '$id + "_source_list_item_" + $index',
            'data-value': '$option.value',
            'aria-selected':
                '$transferOnSelect === false && $fns.isSelected($option, $selectedSourceItems)',
            'data-is-active': '$fns.isActive($option, $activeValue)',
            'data-disabled': '$option.attrs.disabled',
            role: 'option',
            onClick: '$handlers.listitemClick($option, true)',
            onTouchstartPassive: '$handlers.listitemTouchstart($option, true)',
            onTouchmovePassive: '$handlers.listitemTouchmove($option, true)',
            onTouchend: '$handlers.listitemTouchend($option, true)',
            key: '$option.value',
            class: '$classes.transferlistListItem + " " + $classes.sourceListItem',
        },
    })),
    T = t('sourceOption', () => ({
        $el: 'div',
        attrs: {
            'data-checked': '$fns.isSelected($option, $selectedSourceItems)',
            class: '$classes.transferlistOption + " " + $classes.sourceOption',
        },
    })),
    O = t('sourceLoadMore', () => ({
        $el: 'li',
        if: '$state.loading || $state.hasNextPage',
        attrs: {
            id: '$id + "_source_load_more"',
            key: 'loadMore',
            onClick: '$handlers.listitemClick($loadMoreOption)',
            'aria-selected': 'false',
            'data-is-active': '$fns.isActive($loadMoreOption)',
            tabindex: '-1',
        },
    })),
    H = t('loadMoreInner', 'span'),
    F = t('target', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_target"',
            class: '$classes.transferlist + " " + $classes.target',
        },
    })),
    A = t('targetHeader', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_target_header"',
            role: 'presentation',
            class: '$classes.transferlistHeader + " " + $classes.targetHeader',
        },
    })),
    V = t('targetListItems', () => ({
        $el: 'ul',
        attrs: {
            id: '$id',
            'aria-activedescendant': '$activeDescendant',
            onMouseenter: '$handlers.onMouseenter(false)',
            onMouseout: '$handlers.onMouseleave(false)',
            role: 'listbox',
            class: '$classes.transferlistListItems + " " + $classes.targetListItems',
            tabindex: '$targetOptions.length === 0 && -1 || 0',
            onKeydown: '$handlers.targetListKeydown',
            onFocus: '$handlers.targetListFocused',
            onBlur: '$handlers.targetListBlurred',
            'aria-label': 'Target list',
        },
    })),
    K = t('targetListItem', () => ({
        for: ['option', 'index', '$targetOptions'],
        $el: 'li',
        attrs: {
            id: '$id + "_target_list_item_" + $index',
            'data-disabled': '$option.attrs.disabled',
            'data-value': '$option.value',
            'aria-selected':
                '$transferOnSelect === false && $fns.isSelected($option, $selectedTargetItems)',
            'data-is-active': '$fns.isActive($option, $activeValue)',
            role: 'option',
            onClick: '$handlers.listitemClick($option, false)',
            onTouchstartPassive: '$handlers.listitemTouchstart($option, false)',
            onTouchmovePassive: '$handlers.listitemTouchmove($option, false)',
            onTouchend: '$handlers.listitemTouchend($option, false)',
            key: '$option.value',
            class: '$classes.transferlistListItem + " " + $classes.targetListItem',
        },
    })),
    E = t('targetOption', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_target_list_item_" + $index + "_option"',
            'data-checked': '$fns.isSelected($option, $selectedTargetItems)',
            class: '$classes.transferlistOption + " " + $classes.targetOption',
        },
    })),
    P = t('targetLoadMore', () => ({
        $el: 'li',
        if: '$targetLoading && $state.loading',
        attrs: {
            id: '$id + "_target_load_more"',
            key: 'loadMore',
            'aria-selected': 'false',
            class: '$classes.transferlistLoadMore + " " + $classes.targetLoadMore',
        },
    })),
    D = t('transferControls', () => ({
        $el: 'div',
        attrs: { id: '$id + "_transfer_controls"' },
    })),
    N = t('transferButtonForward', () => ({
        if: '$transferOnSelect !== true',
        $el: 'button',
        attrs: {
            id: '$id + "_transfer_button_forward"',
            type: 'button',
            disabled:
                '$selectedSourceItems.length === 0 || $disabled || ($max && $value && $value.length >= $max)',
            onClick: '$handlers.transferForward',
            'aria-label': '$ui.addSelectedValues.value',
            title: '$ui.addSelectedValues.value',
            class: '$classes.transferlistButton + " " + $classes.transferButtonForward',
        },
    })),
    j = t('transferButtonForwardAll', () => ({
        $el: 'button',
        attrs: {
            id: '$id + "_transfer_button_forward_all"',
            type: 'button',
            disabled:
                '$sourceOptions.length === 0 || $disabled || ($max && $value && $value.length >= $max)',
            onClick: '$handlers.transferForwardAll',
            'aria-label': '$ui.addAllValues.value',
            title: '$ui.addAllValues.value',
            onFocus: '$handlers.transferForwardAllFocused',
            class: '$classes.transferlistButton + " " + $classes.transferButtonForwardAll',
        },
    })),
    q = t('transferButtonBackward', () => ({
        if: '$transferOnSelect !== true',
        $el: 'button',
        attrs: {
            id: '$id + "_transfer_button_backward"',
            onClick: '$handlers.transferBackward',
            type: 'button',
            disabled:
                '$selectedTargetItems.length === 0 || $targetOptions.length === 0 || $disabled',
            'aria-label': '$ui.removeSelectedValues.value',
            title: '$ui.removeSelectedValues.value',
            class: '$classes.transferlistButton + " " + $classes.transferButtonBackward',
        },
    })),
    z = t('transferButtonBackwardAll', () => ({
        $el: 'button',
        attrs: {
            id: '$id + "_transfer_button_backward_all"',
            onClick: '$handlers.transferBackwardAll',
            type: 'button',
            disabled: '$targetOptions.length === 0 || $disabled',
            'aria-label': '$ui.removeAllValues.value',
            title: '$ui.removeAllValues.value',
            class: '$classes.transferlistButton + " " + $classes.transferButtonBackwardAll',
        },
    })),
    G = t('controlLabel', 'span'),
    J = t('sourceEmptyMessage', () => ({
        $el: 'li',
        if: '$showSourceEmptyMessage && $sourceEmptyMessage && $state.loading !== true',
        attrs: {
            id: '$id + "_source_empty_message"',
            key: '$sourceEmptyMessage',
            role: 'presentation',
        },
    })),
    Q = t('targetEmptyMessage', () => ({
        $el: 'li',
        if: '$showTargetEmptyMessage && $targetEmptyMessage',
        attrs: {
            id: '$id + "_empty_message"',
            key: '$emptyMessage',
            role: 'presentation',
        },
    })),
    R = t('emptyMessageInner', 'span');
export {
    p as area,
    G as controlLabel,
    t as createSection,
    R as emptyMessageInner,
    u as fieldset,
    c as help,
    o as icon,
    l as inner,
    h as legend,
    H as loadMoreInner,
    $ as message,
    d as messages,
    a as outer,
    i as prefix,
    f as source,
    S as sourceControls,
    J as sourceEmptyMessage,
    g as sourceHeader,
    b as sourceHeaderItemCount,
    _ as sourceHeaderLabel,
    M as sourceListItem,
    B as sourceListItems,
    O as sourceLoadMore,
    T as sourceOption,
    I as sourceSearch,
    w as sourceSearchClear,
    L as sourceSearchInput,
    n as suffix,
    F as target,
    k as targetControls,
    Q as targetEmptyMessage,
    A as targetHeader,
    v as targetHeaderItemCount,
    m as targetHeaderLabel,
    K as targetListItem,
    V as targetListItems,
    P as targetLoadMore,
    E as targetOption,
    y as targetSearch,
    x as targetSearchClear,
    C as targetSearchInput,
    q as transferButtonBackward,
    z as transferButtonBackwardAll,
    N as transferButtonForward,
    j as transferButtonForwardAll,
    D as transferControls,
    r as wrapper,
};
