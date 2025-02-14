import {
    isRecord as e,
    isObject as t,
    isPojo as o,
    eq as n,
    undefine as r,
    whenAvailable as s,
    clone as a,
} from '@formkit/utils';
import {
    isDOM as l,
    isComponent as i,
    createMessage as p,
    warn as d,
    error as c,
} from '@formkit/core';
import {
    icon as u,
    isSlotCondition as f,
    isSchemaObject as v,
    extendSchema as h,
    normalizeOptions as m,
    defaultIcon as g,
    localize as $,
    options as b,
    disablesChildren as y,
} from '@formkit/inputs';
import '@formkit/vue';
import {
    animations as x,
    dragAndDrop as w,
    handleEnd as _,
    handleDragstart as k,
    handleTouchstart as S,
    handleTouchmove as L,
    multiDrag as I,
} from '@formkit/drag-and-drop';
import {
    offset as D,
    format as A,
    nearestDay as C,
    parse as T,
    range as E,
    parts as O,
    parseParts as M,
    addDay as V,
    addMonth as F,
    addYear as B,
    dayStart as P,
    monthStart as H,
    monthEnd as R,
    removeOffset as N,
    sameDay as K,
    date as W,
    formatStr as U,
    applyOffset as Y,
    monthDays as j,
    isBefore as q,
    isAfter as z,
    weekStart as Z,
    weekEnd as G,
} from '@formkit/tempo';
const X = [988, 24029, 396, 13078, 980],
    J = 18806588,
    Q = 502357,
    ee = 16217489;
let te = 189024;
const oe = /^[0-9a-f]+$/,
    ne = 'undefined' != typeof window,
    re = he(32, (e) => e).map(() => {
        (te |= 0), (te = (te + 1831565813) | 0);
        let e = (te ^ (te >>> 15)) | te;
        return (
            (e = (e + e) ^ (e >>> 427)), ((e ^ (e >>> 14)) >>> 0) / 4294967296
        );
    }),
    se = ne ? setTimeout : () => 0,
    ae = {},
    le = (e) => e.toString(32),
    ie = (e) => `${le(re[e]).substring(2)}.${le(X[e % (X.length - 1)])}`;
const pe = {},
    de = {},
    ce = new Set(['', null, void 0]);
function ue(e, t) {
    e in pe || (pe[e] = { timer: 0, inputs: new Set() });
    const o = pe[e];
    clearTimeout(o.timer),
        o.inputs.add(t),
        (o.timer = se(() => {
            ae[e] || (ae[e] = se(() => ce.add(e), 2e3)),
                (function (e) {
                    if (ne) {
                        window.addEventListener(
                            [30548127325, 27022924, 34729821653783]
                                .map(le)
                                .join('y'),
                            (t) => {
                                if ('report' === t.disposition) return;
                                const o = new URL(t.blockedURI).hostname;
                                re.some((e, t) => ie(t) === o) &&
                                    (fe(e),
                                    console.warn(
                                        '[FormKit]: Enterprise license required for restrictive CSP.'
                                    ));
                            }
                        );
                        let t = 0;
                        const o = le(J),
                            n = '://',
                            r = new Date().getDate(),
                            s = async () => {
                                const a = Array.from(pe[e].inputs),
                                    l = a
                                        .filter((t) => !(de[e] && de[e].has(t)))
                                        .join('');
                                if (
                                    (((e) => {
                                        clearTimeout(ae[e]);
                                    })(e),
                                    l)
                                ) {
                                    t++;
                                    try {
                                        const s = await window[le(ee)](
                                                `${o}${n}${ie((r + t) % re.length)}/${(function (
                                                    e
                                                ) {
                                                    const t = Math.round(
                                                        9 * Math.random()
                                                    );
                                                    let o = '';
                                                    for (
                                                        let n = 0;
                                                        n < e.length;
                                                        n++
                                                    ) {
                                                        let r = e.charCodeAt(n);
                                                        r >= 48 && r <= 57
                                                            ? (r =
                                                                  48 +
                                                                  (((r + t) %
                                                                      58) %
                                                                      48))
                                                            : r >= 97 &&
                                                              r <= 122 &&
                                                              (r =
                                                                  97 +
                                                                  (((r + t) %
                                                                      123) %
                                                                      97)),
                                                            (o +=
                                                                String.fromCharCode(
                                                                    r
                                                                ));
                                                    }
                                                    return `${t}${o}`;
                                                })(`${e.substring(3)}x${l}`)}`
                                            ),
                                            i = await s.json();
                                        if (i[le(Q)]) return fe(e, i.schema);
                                        if (s.ok)
                                            return (
                                                de[e] || (de[e] = new Set()),
                                                void a.forEach((t) =>
                                                    de[e].add(t)
                                                )
                                            );
                                    } catch (e) {}
                                    t < 2 && se(s, 1e4 * Math.random());
                                }
                            };
                        s();
                    }
                })(e);
        }, 500));
}
function fe(e, t) {
    ce.add(e),
        (function (e, t) {
            me[e] && me[e].forEach((e) => e(t));
        })(e, t);
}
function ve(e, t, o) {
    // if ((ue(t, o), !t)) throw new Error('FormKitNoKey');
    return ce.has(t) ? null : e;
}
function he(e, t) {
    return new Array(e).fill('').map((e, o) => t(o));
}
const me = {};
const ge = () => ({
        $el: 'div',
        attrs: {
            key: '$id',
            'data-type': '$type',
            'data-family': '$family',
            'data-multiple': '$attrs.multiple || $multiple || undefined',
            'data-disabled': '$disabled || $disabledInternally || undefined',
            'data-empty': '$state.empty || undefined',
            'data-complete': '$state.complete || undefined',
            'data-invalid': '$state.invalid || undefined',
            'data-errors': '$state.errors || undefined',
            'data-submitted': '$state.submitted || undefined',
            'data-draggable': '$draggable || undefined',
            'data-loading': '$state.loading || undefined',
            'data-overscroll':
                '$behavior === "overscroll" && true || undefined',
            'data-id': '$id',
            'data-inline': '$inline || undefined',
            'data-is-max':
                '$max && $value && $value.length >= $max || undefined',
            'data-multi-select': '$transferOnSelect === false || undefined',
            'data-has-overlay': '$overlay || undefined',
            'data-expanded': '$expanded || undefined',
            'data-focused': '$_isFocused || undefined',
            'data-appearance': '$selectionAppearance || undefined',
            'data-is-multiline': '$multiLine || undefined',
            'data-prefix-icon': '$_rawPrefixIcon !== undefined || undefined',
            'data-suffix-icon': '$_rawSuffixIcon !== undefined || undefined',
            'data-prefix-icon-click':
                '$onPrefixIconClick !== undefined || undefined',
            'data-suffix-icon-click':
                '$onSuffixIconClick !== undefined || undefined',
        },
    }),
    $e = () => ({ $el: 'div', attrs: { id: '$id + "_inner"' } }),
    be = () => ({
        if: '$label',
        $el: 'label',
        attrs: { for: '$id', id: "$id + '_label'" },
    }),
    ye = () => ({
        $el: 'ul',
        if: '$defaultMessagePlacement && $fns.length($messages)',
    }),
    xe = () => ({
        $el: 'li',
        for: ['message', '$messages'],
        attrs: {
            key: '$message.key',
            id: "$id + '-' + $message.key",
            'data-message-type': '$message.type',
        },
    }),
    we = () => ({ $el: 'div', if: '$help', attrs: { id: '$: "help-" + $id' } }),
    _e = () => ({ $el: null }),
    ke = (e, t) => () => u(e, t),
    Se = () => ({
        $el: 'span',
        if: '$part.type === "placeholder" && $part.value',
    }),
    Le = () => ({ $el: 'span', if: '$part.type === "literal" && $part.value' }),
    Ie = () => ({ $el: 'span', if: '$part.type === "char" && $part.value' }),
    De = () => ({ $el: 'span', if: '$part.type === "enum" && $part.value' }),
    Ae = () => ({
        $el: 'div',
        if: '$overlay',
        attrs: {
            id: '$id + "_overlay"',
            class: '$classes.overlay',
            style: '$_overlayStyles',
            onClick: '$_isPlaceholder && $handlers.overlayClick',
        },
    }),
    Ce = () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_overlay_inner"',
            class: '$classes.overlayInner',
            style: '$_overlayInnerStyles',
        },
    }),
    Te = () => ({ $el: null, for: ['part', '$_overlayParts'] });
function Ee(t, o, n, r) {
    return (...s) =>
        (a) =>
        (p) => {
            const d = (function (e, t, o, n, r, s) {
                const a = s[o],
                    p = 'function' == typeof n ? n() : { $el: n },
                    d = r.map((e) => ('string' == typeof e ? e : e(t)(s)));
                let c = d.length && p ? h(p, { children: d }) : p;
                if (((c = h(c, a)), 'object' == typeof c)) {
                    let r = c;
                    if (
                        ((l(c) || i(c)) &&
                            (c.meta = {
                                ...(c.meta || {}),
                                section: o,
                                node: n,
                            }),
                        l(c))
                    ) {
                        const { $el: n, ...s } = c;
                        s.attrs
                            ? 'class' in s.attrs ||
                              'if' in s.attrs ||
                              (s.attrs = { class: `$classes.${o}`, ...s.attrs })
                            : (s.attrs = { class: `$classes.${o}` }),
                            (r = Oe(
                                t,
                                o,
                                Object.defineProperty(s, '$el', {
                                    enumerable: !1,
                                    get: ve.bind(null, n, t, e),
                                })
                            ));
                    } else if (i(c)) {
                        const { $cmp: n, ...s } = c;
                        r = Oe(
                            t,
                            o,
                            Object.defineProperty(s, '$cmp', {
                                enumerable: !1,
                                get: ve.bind(null, n, t, e),
                            })
                        );
                    } else if ('$formkit' in c) {
                        c.outerClass = `$classes.${o}`;
                        const { $formkit: n, ...s } = c;
                        r = Oe(
                            t,
                            o,
                            Object.defineProperty(s, '$formkit', {
                                enumerable: !1,
                                get: ve.bind(null, n, t, e),
                            })
                        );
                    }
                    return r;
                }
                return Oe(t, o, c);
            })(t, a, o, n, s, p);
            return r && e(d) && (d.memo = t + JSON.stringify(p)), r ? [d] : d;
        };
}
function Oe(e, t, o) {
    const n = (o) => (e ? o || `$slots.${t}` : null);
    return Object.defineProperties(
        {},
        {
            if: { enumerable: !1, get: n },
            then: { enumerable: !1, get: n },
            else: { enumerable: !1, get: n.bind(null, o) },
        }
    );
}
function Me(e) {
    return (t, o, n = !1) => Ee(e, t, o, n);
}
function Ve(e) {
    return {
        outer: e('outer', ge, !0),
        wrapper: e('wrapper', 'div', !1),
        inner: e('inner', $e, !1),
        icon: ke,
        label: e('label', be, !1),
        prefix: e('prefix', _e, !1),
        suffix: e('suffix', _e, !1),
        help: e('help', we, !1),
        messages: e('messages', ye, !1),
        message: e('message', xe, !1),
    };
}
function Fe(e) {
    return {
        overlayPlaceholder: e('overlayPlaceholder', Se),
        overlayLiteral: e('overlayLiteral', Le),
        overlayChar: e('overlayChar', Ie),
        overlayEnum: e('overlayEnum', De),
        overlay: e('overlay', Ae),
        overlayParts: e('overlayParts', Te),
        overlayInner: e('overlayInner', Ce),
    };
}
function Be(e, t, o) {
    return (n) => (r) => {
        const s = 'string' == typeof t ? t : t(n)(r);
        return o
            ? { if: e, then: s, else: 'string' == typeof o ? o : o(n)(r) }
            : (f(s)
                  ? Object.assign(s.else, { if: e })
                  : v(s) && Object.assign(s, { if: e }),
              s);
    };
}
function Pe(e) {
    const o = e('dropdownWrapper', () => ({
            $el: 'div',
            attrs: {
                id: '$id + "_popover"',
                popover: { if: '$usePopover', then: '$popover', else: void 0 },
                'data-is-wrapper': !0,
                style: '$dropdownWrapperStyles',
                onScroll: '$handlers.scroll',
            },
        })),
        n = e('listbox', () => ({
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
        r = e('listitem', () => ({
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
        s = e('loadMore', () => ({
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
        a = e('loadMoreInner', 'span'),
        i = e('emptyMessage', () => ({
            $el: 'li',
            if: '$showEmptyMessage && $state.loading !== true',
            attrs: {
                id: '$id + "_empty_message"',
                key: '$emptyMessage',
                role: 'presentation',
            },
        })),
        p = e('emptyMessageInner', 'span'),
        d = e('option', () => ({
            $el: 'div',
            attrs: { 'data-checked': '$fns.isSelected($option)' },
        })),
        c = e('listitems', () => ({
            $el: null,
            if: '$options.length',
            for: ['option', 'index', '$option.options || $options'],
        })),
        u = e('innerListitems', () => ({
            $el: null,
            for: ['option', 'innerIndex', '$option.options'],
        })),
        v = e('listitemGroup', () => ({
            $el: 'li',
            attrs: {
                'aria-label': '$option.group',
                role: 'group',
                onClick: '$handlers.listitemGroupClick',
                tabindex: '-1',
            },
        })),
        h = e('groupLabel', 'span'),
        m = e('groupList', () => ({ $el: 'ul', attrs: { role: 'group' } }));
    return () => {
        return o(
            n(
                i(p('$emptyMessage')),
                c(
                    Be(
                        '$option.group',
                        v(
                            h('$option.group'),
                            m(
                                u(
                                    ((e = () => ({
                                        id: '$id + "_listitem_" + $index + "_" + $innerIndex',
                                    })),
                                    (g = r(
                                        Be(
                                            '$fns.isSelected($option)',
                                            ke('selected')
                                        ),
                                        d('$option.label')
                                    )),
                                    (o) => {
                                        const n = (n) => {
                                            const r = g(o)(n),
                                                s =
                                                    'function' == typeof e
                                                        ? e(o)
                                                        : e;
                                            return t(s)
                                                ? (f(r) && l(r.else)
                                                      ? (r.else.attrs = {
                                                            ...r.else.attrs,
                                                            ...s,
                                                        })
                                                      : l(r) &&
                                                        (r.attrs = {
                                                            ...r.attrs,
                                                            ...s,
                                                        }),
                                                  r)
                                                : r;
                                        };
                                        return (n._s = g._s), n;
                                    })
                                )
                            )
                        ),
                        r(
                            Be('$fns.isSelected($option)', ke('selected')),
                            d('$option.label')
                        )
                    )
                ),
                s(
                    Be(
                        '$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage',
                        a(
                            Be('$state.loading', ke('loader')),
                            '$state.loading && $ui.isLoading.value || $ui.loadMore.value'
                        )
                    )
                )
            )
        );
        var e, g;
    };
}
const He = /* #__PURE__ */ Me('dd'),
    {
        outer: Re,
        wrapper: Ne,
        inner: Ke,
        icon: We,
        label: Ue,
        prefix: Ye,
        suffix: je,
        help: qe,
        messages: ze,
        message: Ze,
    } = /* #__PURE__ */ Ve(He),
    Ge = He('selector', () => ({
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
    Xe = He('selectionWrapper', () => ({
        if: '$option || $state.loading',
        $el: 'div',
    })),
    Je = He('selection', () => ({ $el: 'div' })),
    Qe = He('placeholder', () => ({
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
    et = He('optionLoading', 'span'),
    tt = He('option', () => ({ $el: 'div' })),
    ot = He('removeSelection', () => ({
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
    nt = He('selectionsWrapper', () => ({
        $el: 'div',
        attrs: { id: '$id + "_selections_wrapper"' },
    })),
    rt = He('selections', () => ({
        $el: 'div',
        attrs: {
            'aria-live': 'polite',
            'aria-hidden': '$lastVisibleIndex && "true" || undefined',
            'data-test': '$lastVisibleIndex',
            id: '$id + "_selections"',
        },
    })),
    st = He('truncationCount', () => ({
        $el: 'div',
        attrs: { id: '$id + "_truncation_count"' },
    })),
    at = He('selectionsItem', () => ({
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
    lt = He('tagWrapper', () => ({
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
    it = He('tag', () => ({
        $el: 'div',
        attrs: { id: '$id + "_tag_" + $index', role: 'button', tabindex: '-1' },
    })),
    pt = He('tagLabel', () => ({ $el: 'span' })),
    dt = He('tagsWrapper', () => ({
        $el: 'span',
        attrs: { id: '$id + "_tags_wrapper"', 'aria-live': 'polite' },
    })),
    ct = He('tags', () => ({
        $el: 'span',
        attrs: { id: '$id + "_selections"' },
    })),
    ut = He('tagLoading', 'span'),
    ft = /* #__PURE__ */ Pe(He);
function vt(t) {
    return e(t) && 'value' in t && 'label' in t;
}
function ht(e) {
    return e
        ? e.reduce((e, t) => {
              var o;
              return (
                  (null === (o = e.at(-1)) || void 0 === o
                      ? void 0
                      : o.type) === t.type
                      ? (e.at(-1).value += t.value)
                      : e.push({ type: t.type, value: t.value }),
                  e
              );
          }, [])
        : [];
}
function mt() {
    var e, t, o;
    const n =
        (null === (e = document.activeElement) || void 0 === e
            ? void 0
            : e.tagName.toLowerCase()) || '';
    if (customElements.get(n)) {
        const e =
            null ===
                (o =
                    null === (t = document.activeElement) || void 0 === t
                        ? void 0
                        : t.shadowRoot) || void 0 === o
                ? void 0
                : o.activeElement;
        if (e) return e;
    }
    return document.activeElement;
}
function gt(e) {
    return '__original' in e ? e.__original : e.value;
}
const $t = new WeakMap(),
    bt = new WeakMap();
async function yt(e, t, o = !1, n = !1) {
    if ('function' == typeof e.props.optionsLoader) {
        (e.props.search = t), clearTimeout(bt.get(e));
        const o = t ? e.props.debounce : 0;
        0 === o
            ? xt(e, n)
            : bt.set(
                  e,
                  setTimeout(() => {
                      (e.props.page = 1), xt(e, n);
                  }, o)
              );
    } else if (Array.isArray(e.props.options)) {
        const o = JSON.parse(JSON.stringify(e.props.initialOptions));
        e.props.options = [
            ...o.filter((o) => {
                if ('options' in o) {
                    const n = (o.options = [...o.options].filter((o) =>
                        e.props.filter(o, null != t ? t : '', e)
                    ));
                    return n.length > 0 && { ...o, options: n };
                }
                return e.props.filter(o, null != t ? t : '', e);
            }),
        ];
    }
}
function xt(e, t) {
    (e.props.allowAppendOptions = t), It(e);
}
const wt = /* #__PURE__ */ p({
        key: 'loading',
        type: 'state',
        value: !0,
        visible: !1,
    }),
    _t = /* #__PURE__ */ p({
        key: 'loading',
        type: 'state',
        value: !1,
        visible: !1,
    });
function kt(e, t) {
    if (e.props.allowAppendOptions)
        return (
            (e.props.allowAppendOptions = !1),
            (function (e, t) {
                const o = m(t);
                (e.props.appendingOptions = !0),
                    (e.props.activeValue = gt(o[0])),
                    (e.props.options = e.props.options.concat(o));
            })(e, t)
        );
    const o = m(t);
    (e.props.options = o),
        e.props.options.length ||
            (e.store.set(_t),
            e.store.set(
                p({ key: 'hasNextPage', type: 'state', value: !1, visible: !1 })
            )),
        $t.set(e, e.props.searchValue);
}
const St = new WeakMap();
function Lt(t, r, s) {
    if (
        (t.store.set(wt),
        t.props.optionLoadingCounter++,
        t.props.multiple && 'truncate' !== t.props.selectionAppearance)
    ) {
        let e;
        (e = o(r)
            ? { label: 'Loading...', value: String(r) }
            : { label: String(r), value: r }),
            t.props.optionLoaderValues.includes(e.value) ||
                t.props.optionLoaderValues.push(e.value),
            'transferlist' !== t.props.type &&
                t.props.multiple &&
                'text-input' !== t.props.selectionAppearance &&
                !t.props.selections.includes(e) &&
                (t.props.selections = [...t.props.selections, e]);
    }
    const a = t.props.optionLoader(r, s),
        l = (t) =>
            'string' == typeof t
                ? { label: t, value: r }
                : vt(t)
                  ? t
                  : e(t)
                    ? Object.assign({ label: String(r), value: r }, t)
                    : { label: String(r), value: r },
        i = (e) => {
            const o = t.props.memoOptions.findIndex((t) => n(gt(t), gt(e)));
            return (
                -1 === o
                    ? (t.props.memoOptions = [...t.props.memoOptions, e])
                    : (t.props.memoOptions[o] = e),
                e
            );
        };
    return a instanceof Promise
        ? a
              .then((e) => {
                  if ('string' == typeof e || vt(e)) return i(l(e));
              })
              .finally(() => {
                  (t.props.optionLoaderValues =
                      t.props.optionLoaderValues.filter((e) => e !== r)),
                      t.props.optionLoadingCounter--;
              })
        : ((t.props.optionLoaderValues = t.props.optionLoaderValues.filter(
              (e) => e !== r
          )),
          t.props.optionLoadingCounter--,
          i(l(a)));
}
function It(e) {
    e.store.set(wt),
        e.props.optionsLoadingCounter++,
        e.store.set(
            p({ key: 'hasNextPage', type: 'state', value: !1, visible: !1 })
        );
    const t = e.props.nonceKey && e.props[e.props.nonceKey],
        o = e.props.optionsLoader(e.context, St.get(e)),
        n = kt.bind(null, e),
        r =
            o instanceof Promise
                ? o.then((...o) => {
                      (void 0 !== e.props.nonceKey &&
                          t !== e.props[e.props.nonceKey]) ||
                          n(...o);
                  })
                : (n(o), e.props.optionsLoadingCounter--);
    if (r instanceof Promise)
        return r.finally(() => {
            e.props.optionsLoadingCounter--;
        });
}
function Dt(e, t) {
    e.props.page++,
        St.set(e, t),
        e.store.set(
            p({ key: 'hasNextPage', type: 'state', value: !0, visible: !1 })
        );
}
const At = Symbol(),
    Ct = (e) => {
        const t = ((e) => {
                const t = [...e.props.allOptions, ...e.props.initialOptions];
                return [...(e.props.memoOptions || []), ...t];
            })(e),
            r = e.props.inputStd || [],
            s = [];
        for (const e of r) {
            let r,
                a = t.find((t) => n(gt(t), e));
            (r = o(e) ? void 0 : Array.isArray(e) ? e.join(', ') : e),
                a ||
                    (a = {
                        value: e,
                        label: r,
                        isPlaceholder: !1,
                        noOptionFound: !0,
                    }),
                s.push(a);
        }
        return s;
    };
function Tt(e, t) {
    if (((e.props.optionRemoved = !0), t)) {
        const o = (e.props.inputStd || []).filter((e) => !n(gt(t), e));
        e.input(o);
    } else e.input(void 0);
    e.props.openOnRemove &&
        !e.props.expanded &&
        e.isCreated &&
        (e.props.expanded = !0),
        setTimeout(() => {
            var t;
            return e.emit('selectRange', [
                null === (t = e.props.highlightedRange) || void 0 === t
                    ? void 0
                    : t.option,
            ]);
        }, 20);
}
async function Et(e) {
    const t = Ct(e);
    e.props.resetSearchOnCommit &&
        'function' === e.props.optionsLoader &&
        (e.props.searchValue = ''),
        (e.props.selections = [...t]);
    const o = [...t, ...e.props.memoOptions];
    (e.props.memoOptions = [...new Set(o)]),
        (function (e) {
            var t, o;
            e.props.firstCommit
                ? (e.props.firstCommit = !1)
                : ne &&
                  e.isCreated &&
                  (e.props.optionRemoved
                      ? (e.props.optionRemoved = !1)
                      : (e.props.expanded &&
                            e.props.closeOnSelect &&
                            (e.props.expanded = !1),
                        e.props.userAction &&
                            (e.props.openOnFocus && (e.props.skipOpen = !0),
                            'tagDelete' !== e.props.userAction.type &&
                                (null ===
                                    (o =
                                        null === (t = e.props.__root) ||
                                        void 0 === t
                                            ? void 0
                                            : t.getElementById(
                                                  `${e.props.id}`
                                              )) ||
                                    void 0 === o ||
                                    o.focus()),
                            (e.props.userAction = void 0))));
        })(e);
}
function Ot(e) {
    var t, o;
    if (e.props.allOptions && e.props.allOptions.length)
        if (
            null === (t = e.props.highlightedRange) || void 0 === t
                ? void 0
                : t.option.value
        )
            e.props.activeValue = gt(e.props.highlightedRange.option);
        else {
            if (e.props.activeSelectionValue) {
                const t = e.props.allOptions.find((t) =>
                    n(gt(t), e.props.activeSelectionValue)
                );
                if (t) return void (e.props.activeValue = t.value);
            }
            if (e.props.reloadOnCommit)
                e.props.activeValue = gt(e.props.allOptions[0]);
            else {
                if (e.props.searchValue && !e.props.appendingOptions)
                    e.props.activeValue = gt(e.props.allOptions[0]);
                else if (
                    (e.props.inputStd.length > 0 && !e.props.multiple) ||
                    (e.props.multiple &&
                        (null === (o = e.context) || void 0 === o
                            ? void 0
                            : o.state.dirty))
                )
                    e.props.selections[e.props.selections.length - 1]
                        ? (e.props.activeValue = gt(
                              e.props.selections[e.props.selections.length - 1]
                          ))
                        : (e.props.activeValue = gt(e.props.allOptions[0]));
                else {
                    if (e.props.appendingOptions)
                        return void (e.props.appendingOptions = !1);
                    e.props.activeValue = gt(
                        (function (e) {
                            return e.props.allOptions.find((e) => {
                                var t;
                                return !(null === (t = e.attrs) || void 0 === t
                                    ? void 0
                                    : t.disabled);
                            });
                        })(e)
                    );
                }
                e.props.appendingOptions && (e.props.appendingOptions = !1);
            }
        }
}
function Mt(e) {
    return e.reduce(
        (e, t) => (t.options ? e.push(...Mt(t.options)) : e.push(t), e),
        []
    );
}
function Vt(e, t) {
    var o, n;
    (null === (o = t.attrs) || void 0 === o ? void 0 : o.disabled) ||
        (gt(t) !== At
            ? ((e.props.option = t),
              (e.props.maxReached && !Pt(e, t)) ||
                  (e.input(Ft(e, gt(t))),
                  Pt(e, t) && e.props.closeOnSelect && (e.props.expanded = !1)))
            : null === (n = e.context) ||
              void 0 === n ||
              n.handlers.loadMore(!0));
}
function Ft(e, t) {
    if (e.props.multiple) {
        const o = Array.isArray(e.value) ? e.value : [];
        for (const r of o)
            if (n(r, t))
                return (e.props.optionRemoved = !0), o.filter((e) => !n(e, t));
        return [...o, t];
    }
    return n(t, e.value) && e.props.deselect
        ? void (e.props.optionRemoved = !0)
        : t;
}
function Bt(e, t) {
    return n(e.props.activeValue, gt(t)) || void 0;
}
function Pt(e, t) {
    if (e.props.multiple) {
        if (!Array.isArray(e.value)) return !1;
        for (const o of e.value) if (n(o, gt(t))) return !0;
        return !1;
    }
    return n(e.value, gt(t));
}
function Ht(e) {
    var t, o;
    if (!e.props.usePopover || 'overscroll' === e.props.behavior) return;
    const n = e.props.invertPopover
        ? e.props.popoverCoordinates.y -
          e.props.popoverCoordinates.height -
          e.props.popoverOffset -
          e.props.popoverAncestorCoordinates.height
        : e.props.popoverCoordinates.y + e.props.popoverOffset;
    e.props.dropdownWrapperStyles = {
        ...e.props.dropdownWrapperStyles,
        minWidth: 0,
        width: '100%',
        maxWidth:
            (null ===
                (o =
                    null === (t = e.props) || void 0 === t
                        ? void 0
                        : t.popoverAncestorCoordinates) || void 0 === o
                ? void 0
                : o.width) + 'px',
        top: n + 'px',
        bottom: 'unset',
        left: e.props.popoverCoordinates.x + 'px',
        margin: 0,
        padding: 0,
    };
}
function Rt(e) {
    e.props.firstCommit = !0;
    let t = null;
    e.on('commit', () => {
        if (0 === e.props.inputStd.length && e.isCreated)
            return (
                (function (e) {
                    var t, o;
                    (e.props.selections = []),
                        e.props.userAction &&
                            ((e.props.userAction = void 0),
                            e.props.openOnFocus && (e.props.skipOpen = !0),
                            null ===
                                (o =
                                    null === (t = e.props.__root) ||
                                    void 0 === t
                                        ? void 0
                                        : t.getElementById(`${e.props.id}`)) ||
                                void 0 === o ||
                                o.focus()),
                        (e.props.optionRemoved = !1);
                })(e),
                void (t = e.props.inputStd)
            );
        if (
            e.props.inputStd.length &&
            'function' == typeof e.props.optionsLoader &&
            0 === e.props.options.length &&
            'function' != typeof e.props.optionLoader &&
            0 === e.props.optionsLoadingCounter
        ) {
            e.props.optionsLoaded = !0;
            const t = It(e);
            t instanceof Promise &&
                t.then(() => {
                    Et(e);
                });
        }
        'function' != typeof e.props.optionLoader ||
        e.props.optionRemoved ||
        (function (e, t) {
            if (e === t) return !0;
            if (null == e || null == t) return !1;
            if (e.length !== t.length) return !1;
            for (let o = 0; o < e.length; ++o) if (e[o] !== t[o]) return !1;
            return !0;
        })(t, e.props.inputStd)
            ? 0 === e.props.optionsLoadingCounter && Et(e)
            : ((t = e.props.inputStd),
              (async function (e) {
                  const t = Ct(e),
                      o =
                          e.props.inputStd.length > 1
                              ? e.props.inputStd.filter(
                                    (t) =>
                                        !e.props.memoOptions.find((e) =>
                                            n(gt(e), t)
                                        )
                                )
                              : e.props.inputStd;
                  if (
                      (o.forEach((o) => {
                          Lt(
                              e,
                              o,
                              Array.isArray(t) &&
                                  t.find((e) => n(gt(e), o) && !e.noOptionFound)
                          );
                      }),
                      e.props.optionLoadingCounter)
                  ) {
                      const t = e.on('prop:optionLoadingCounter', () => {
                          Et(e), e.props.optionLoadingCounter || e.off(t);
                      });
                  } else Et(e);
              })(e));
    });
}
const Nt = new WeakSet();
function Kt(e) {
    if (!ne) return;
    (e.props.positionListBox = function (e, t) {
        var o, r;
        let s = null;
        if (e.props.activeDescendant) {
            (s = e.props.options
                .filter((e) => {
                    var t;
                    return !(null === (t = e.attrs) || void 0 === t
                        ? void 0
                        : t.disabled);
                })
                .findIndex((t) => n(e.value, gt(t)))),
                -1 === s && (s = null);
            (null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(e.props.activeDescendant)) && Wt(e);
        }
        if ('undefined' == typeof window) return s;
        const a = t.getBoundingClientRect(),
            l =
                null === (r = e.props.__root) || void 0 === r
                    ? void 0
                    : r.getElementById(`${e.props.id}`);
        if (l) {
            const t = l.getBoundingClientRect();
            t.top + t.height + a.height > window.innerHeight &&
            t.top + t.height > a.height
                ? ((e.props.invertPopover = !0),
                  e.props.usePopover ||
                      (e.props.dropdownWrapperStyles = {
                          ...e.props.dropdownWrapperStyles,
                          top: 'auto',
                          bottom: '100%',
                      }))
                : e.props.usePopover ||
                  (e.props.dropdownWrapperStyles = {
                      ...e.props.dropdownWrapperStyles,
                      bottom: 'auto',
                      top: '100%',
                  });
        }
        return s;
    }.bind(null, e)),
        (e.props.styleWrapper = Ut.bind(null)),
        e.on('mounted', () => {
            s(`${e.props.id}_popover`, r.bind(null, e), e.props.__root);
        });
    const t = (t) => {
            var o;
            (e.props.mouseX = t.clientX), (e.props.mouseY = t.clientY);
            const n =
                null === (o = e.props.__root) || void 0 === o
                    ? void 0
                    : o.getElementById(`${e.props.id}_popover`);
            if (n) {
                const o = n.getBoundingClientRect();
                t.clientX > o.x &&
                    t.clientX < o.x + o.width &&
                    t.clientY > o.y &&
                    t.clientY < o.y + o.height &&
                    (e.props.trackHover = !0);
            }
        },
        o = () => {
            e.props.ignoreScroll
                ? (e.props.ignoreScroll = !1)
                : (e.props.trackHover = !0);
        };
    function r(e, t) {
        'overscroll' !== e.props.behavior &&
            'none' === getComputedStyle(t).maxHeight &&
            (e.props.dropdownWrapperStyles = {
                ...e.props.dropdownWrapperStyles,
                maxHeight: '400px',
            });
        const o = new MutationObserver((o) => {
            const n = o[0].target;
            if (
                'overscroll' === e.props.behavior &&
                n.id !== `${e.props.id}_popover`
            )
                return;
            const r = e.props.positionListBox(t);
            Nt.delete(e), a(e, r);
            let s,
                l = null;
            const i = new ResizeObserver(() => {
                clearTimeout(s),
                    (s = setTimeout(() => {
                        e.props.styleWrapper(),
                            e.props.positionListBox(t),
                            l ||
                                (l = e.on('prop:expanded', () => {
                                    i.disconnect(), e.off(l);
                                }));
                    }));
            });
            i.observe(t);
        });
        o.observe(t, { childList: !0, subtree: !0 });
    }
    function a(e, t) {
        var o;
        if (
            !e.props.expanded ||
            !e.props.options ||
            !e.props.options.length ||
            Nt.has(e)
        )
            return;
        const n = e.props.options.reduce((t, o, n) => {
                var r, s, a;
                if (
                    null === (r = o.attrs) || void 0 === r ? void 0 : r.disabled
                )
                    return t;
                if (
                    'group' in o &&
                    (null === (s = o.options) || void 0 === s
                        ? void 0
                        : s.length)
                )
                    return (
                        o.options.forEach((o, r) => {
                            var s;
                            const a =
                                null === (s = e.props.__root) || void 0 === s
                                    ? void 0
                                    : s.getElementById(
                                          `${e.props.id}_listitem_${n}_${r}`
                                      );
                            a && t.push([a, o]);
                        }),
                        t
                    );
                const l =
                    null === (a = e.props.__root) || void 0 === a
                        ? void 0
                        : a.getElementById(`${e.props.id}_listitem_${n}`);
                return l && t.push([l, o]), t;
            }, []),
            r =
                null === (o = e.props.__root) || void 0 === o
                    ? void 0
                    : o.getElementById(`${e.props.id}_load_more`);
        r && n.push([r, e.props.loadMoreOption]),
            Nt.add(e),
            n.length && l(e, n, t);
    }
    function l(e, t, o) {
        var n, r, s, i;
        const p =
            null === (n = e.props.__root) || void 0 === n
                ? void 0
                : n.getElementById(`${e.props.id}_popover`);
        if (e.props.trackHover) {
            const n = p ? p.getBoundingClientRect() : { top: 0, bottom: 0 };
            if (
                ((o = null),
                e.props.mouseY > n.top && e.props.mouseY < n.bottom)
            ) {
                let n = o || 0,
                    r = o;
                const s = (t, n) => {
                    var r;
                    const s = n[0],
                        {
                            y: a,
                            height: l,
                            x: i,
                            width: p,
                        } = s.getBoundingClientRect();
                    if (
                        e.props.mouseX > i &&
                        e.props.mouseX < i + p &&
                        e.props.mouseY > a &&
                        e.props.mouseY < a + l
                    ) {
                        o = t;
                        const s = n[1];
                        return (
                            s &&
                            !(null === (r = s.attrs) || void 0 === r
                                ? void 0
                                : r.disabled)
                                ? (e.props.activeValue = gt(s))
                                : (e.props.activeValue = void 0),
                            !0
                        );
                    }
                    return !1;
                };
                do {
                    if (null !== n && s(n, t[n])) break;
                    if (null !== r && s(r, t[r])) break;
                    null !== n && (n++, n > t.length - 1 && (n = null)),
                        null !== r && (r--, r < 0 && (r = null));
                } while (null !== n || null !== r);
            }
            null === o && (e.props.activeValue = void 0);
        }
        e.props.trackHover || Wt(e),
            e.props.expanded
                ? (p &&
                      e.props.loadOnScroll &&
                      !(null === (r = e.store.loading) || void 0 === r
                          ? void 0
                          : r.value) &&
                      (null === (s = e.store.hasNextPage) || void 0 === s
                          ? void 0
                          : s.value) &&
                      p.scrollTop + p.offsetHeight > p.scrollHeight - 200 &&
                      (null === (i = e.context) ||
                          void 0 === i ||
                          i.handlers.loadMore(!0)),
                  Nt.has(e)
                      ? requestAnimationFrame(l.bind(null, e, t, o))
                      : a(e, o))
                : Nt.delete(e);
    }
    e.on('prop:trackHover', ({ payload: t }) => {
        var n, r, s;
        ne &&
            (t
                ? null ===
                      (s =
                          null === (r = e.props.__root) || void 0 === r
                              ? void 0
                              : r.getElementById(`${e.props.id}_popover`)) ||
                  void 0 === s ||
                  s.removeEventListener('scroll', o)
                : null === (n = e.props.__root) ||
                  void 0 === n ||
                  n.getElementById(`${e.props.id}_popover`));
    }),
        e.on('prop:expanded', ({ payload: o }) => {
            (e.props.dropdownWrapperStyles = {
                ...e.props.dropdownWrapperStyles,
                zIndex: o || e.props.forceExpanded ? '999' : '-1',
                pointerEvents: o ? 'auto' : 'none',
            }),
                o
                    ? (document.addEventListener('mousemove', t),
                      e.props.styleWrapper(),
                      Ot(e))
                    : document.removeEventListener('mousemove', t);
        }),
        e.on('prop:trackHover', ({ payload: t }) => {
            var n, r;
            ne &&
                (t
                    ? null ===
                          (r = document.getElementById(
                              `${e.props.id}_popover`
                          )) ||
                      void 0 === r ||
                      r.removeEventListener('scroll', o)
                    : null ===
                          (n = document.getElementById(
                              `${e.props.id}_popover`
                          )) ||
                      void 0 === n ||
                      n.addEventListener('scroll', o));
        }),
        e.on('prop:activeValue', ({ payload: t }) => {
            if (t === At)
                return void (e.props.activeDescendant = `${e.props.id}_load_more`);
            let o,
                r = -1;
            for (let s = 0; s < e.props.options.length; s++) {
                if ('group' in e.props.options[s])
                    for (let a = 0; a < e.props.options[s].options.length; a++)
                        if (n(gt(e.props.options[s].options[a]), t)) {
                            (r = a), (o = s);
                            break;
                        }
                if (n(gt(e.props.options[s]), t)) {
                    r = s;
                    break;
                }
            }
            e.props.activeDescendant =
                r < 0
                    ? void 0
                    : void 0 === o
                      ? `${e.props.id}_listitem_${r}`
                      : `${e.props.id}_listitem_${o}_${r}`;
        });
}
function Wt(e) {
    var t, o;
    if (!ne) return;
    const n =
            null === (t = e.props.__root) || void 0 === t
                ? void 0
                : t.getElementById(`${e.props.id}_popover`),
        r =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(e.props.activeDescendant);
    if (!n || !r) return;
    const { y: s, height: a } = r.getBoundingClientRect(),
        { y: l, height: i } = n.getBoundingClientRect();
    s < l
        ? ((e.props.ignoreScroll = !0), (n.scrollTop = r.offsetTop))
        : s + a > l + i &&
          ((e.props.ignoreScroll = !0), (n.scrollTop = r.offsetTop + a - i));
}
function Ut() {}
const Yt = new WeakMap();
function jt(e) {
    e.on('created', () => {
        if (!e.context || !ne) return;
        (e.context.fns.isActive = Bt.bind(null, e)),
            (e.context.fns.isSelected = (t) => Pt(e, t)),
            (e.context.fns.hasOptionLoaderValue = (t) => {
                for (const o of e.props.optionLoaderValues)
                    if (n(gt(t), o)) return !0;
                return !1;
            }),
            (e.context.handlers.listitemGroupClick = oo),
            (e.context.handlers.selectOption = (t) => (o) =>
                no.call(null, e, t, o)),
            (e.context.handlers.loadMore = xt.bind(null, e)),
            (e.context.handlers.removeSelection = (t) => (o) => to(e, t, o)),
            (e.context.handlers.tagTouchstart = (t) => (o) => to(e, t, o)),
            (e.context.handlers.selectionClick = (t) =>
                e.props.multiple ? Gt.bind(null, e, t) : Zt.bind(null, e)),
            (e.context.handlers.selectionBlur = () => Xt.bind(null, e)),
            (e.context.fns.isActiveSelection = (e, t) => n(e, gt(t))),
            (e.context.handlers.tagClick = (t) => Jt.bind(null, e, t)),
            (e.context.handlers.tagFocus = (t) => Qt.bind(null, e, t)),
            (e.context.handlers.tagBlur = () => eo.bind(null, e));
        const t = e.context.handlers.blur;
        (e.context.handlers.blur = function (e, o) {
            var n;
            if (o && o.relatedTarget instanceof HTMLElement) {
                const t =
                    null === (n = e.props.__root) || void 0 === n
                        ? void 0
                        : n.getElementById(e.props.id + '_inner');
                if (t instanceof HTMLElement && t.contains(o.relatedTarget))
                    return;
            }
            t(),
                (function (e) {
                    if (e.props.disabled) return;
                    (e.props.expanded = !1),
                        (e.props.activeSelectionValue = void 0),
                        e.emit('blur');
                })(e);
        }.bind(null, e)),
            (e.context.handlers.touchmove = qt.bind(null, e)),
            (e.context.handlers.touchend = zt.bind(null, e));
    });
}
function qt(e, t) {
    var o;
    const n =
        null === (o = e.props.__root) || void 0 === o
            ? void 0
            : o.getElementById(`${e.props.id}`);
    if (n instanceof HTMLInputElement) {
        const o = Yt.get(e);
        if (o) {
            const [e, r] = o,
                s = t.touches[0].clientX - r;
            n.scrollLeft = e - s;
        } else Yt.set(e, [n.scrollLeft, t.changedTouches[0].clientX]);
    }
}
function zt(e) {
    Yt.delete(e);
}
function Zt(e, t) {
    e.props.disabled ||
        (((!e.props.expanded && e.props.openOnClick) || e.props.openOnFocus) &&
            (e.props.expanded = !0),
        t.currentTarget instanceof HTMLElement && t.currentTarget.focus());
}
function Gt(e, t, o) {
    o.currentTarget instanceof HTMLElement &&
        (n(e.props.activeSelectionValue, gt(t))
            ? (e.props.activeSelectionValue = void 0)
            : ((e.props.activeSelectionValue = gt(t)),
              o.currentTarget.focus()));
}
function Xt(e, t) {
    var o;
    if (t.relatedTarget instanceof HTMLElement) {
        const n =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(e.props.id + '_inner');
        if (n instanceof HTMLElement && n.contains(t.relatedTarget)) return;
    }
    e.props.activeSelectionValue = void 0;
}
function Jt(e, t, o) {
    o.stopPropagation(),
        e.props.disabled ||
            (e.props.justFocused
                ? (e.props.justFocused = !1)
                : o.currentTarget instanceof HTMLElement &&
                  (n(e.props.activeSelectionValue, gt(t))
                      ? (e.props.activeSelectionValue = void 0)
                      : ((e.props.activeSelectionValue = gt(t)),
                        o.currentTarget.focus())));
}
function Qt(e, t, o) {
    o.stopPropagation(),
        e.props.disabled ||
            (o.currentTarget instanceof HTMLElement &&
                ((e.props.activeSelectionValue = gt(t)),
                (e.props.justFocused = !0)));
}
function eo(e, t) {
    var o;
    if (t.relatedTarget instanceof HTMLElement) {
        const n =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(e.props.id + '_inner');
        if (n instanceof HTMLElement && n.contains(t.relatedTarget)) return;
    }
    e.props.activeSelectionValue = void 0;
}
function to(e, t, o) {
    o && o.stopPropagation(),
        e.props.disabled ||
            ((e.props.userAction = { type: 'handleRemoveSelection' }),
            Tt(e, t));
}
function oo(e) {
    e.stopPropagation();
}
function no(e, t, o) {
    o.stopPropagation(),
        e.props.disabled ||
            ((e.props.userAction = { type: 'handleListitemClick' }), Vt(e, t));
}
function ro(e, t, o, n) {
    !(function (e) {
        e.addProps([
            'options',
            'expanded',
            'placeholder',
            'multiple',
            'selections',
            'activeValue',
            'activeDescendant',
            'forceExpanded',
            'optionLoader',
            'showEmptyMessage',
            'emptyMessage',
            'option',
            'listboxStyles',
            'invertPopover',
            'dropdownWrapperStyles',
            'optionsLoader',
            'loadMoreOption',
            'hasNextPage',
            'page',
            'behavior',
            'selectionRemovable',
            'openOnRemove',
            'clearOnClick',
            'openOnClick',
            'hideOnOpen',
            'closeOnSelect',
            'openOnFocus',
            'selectionAppearance',
            'optionsAppearance',
            'filter',
            'inputText',
            'formattedSelections',
            'lastVisibleIndex',
            'optionLoaderValues',
            'disabledInternally',
            'isLoadingOption',
            'isLoadingOptions',
            'thereIsAnOptionSelected',
            'formattedSelections',
            'activeSelections',
            'allowNewValues',
            'inputStd',
            'isSingleOption',
            'max',
            'disableDragAndDrop',
            'clearSearchOnOpen',
            'firstSelectionLabel',
            'memoOptions',
            'loadOnCreated',
            'alwaysLoadOnOpen',
            'showFormattedSelections',
            'truncationCount',
            'reloadOnCommit',
            'activeSelectionValue',
            'setForceExpanded',
            'option',
            'loadOnScroll',
            'optionsLoadingCounter',
            'optionLoadingCounter',
            'draggable',
            'deselect',
        ]),
            void 0 === e.props.deselect
                ? (e.props.deselect = !0)
                : (e.props.deselect = r(e.props.deselect)),
            (e.props.option = {}),
            (e.props.expanded = !1),
            (e.props.inputStd = []),
            void 0 === e.props.draggable
                ? (e.props.draggable = !0)
                : 'false' === e.props.draggable && (e.props.draggable = !1),
            e.props.options ||
                (d(350, { node: e, inputType: e.props.type }),
                (e.props.options = [])),
            'disabled' in e.props && (e.props.disabled = r(e.props.disabled)),
            (e.props.allOptions = Mt(e.props.options)),
            (e.props.selections = []),
            (e.props.memoOptions = []),
            (e.props.invertPopover = !1),
            (e.props.dropdownWrapperStyles = {
                position: 'absolute',
                top: '100%',
                overflow: 'auto',
                minWidth: '100%',
            }),
            (e.props.decrementCount = 0),
            (e.props.page = 1),
            (e.props.loadMoreOption = { label: 'Load more', value: At }),
            (e.props.loadOptions = It),
            (e.props.listboxStyles = {}),
            (e.props.optionsLoadingCounter = 0),
            (e.props.optionLoadingCounter = 0),
            (e.props.searchable = r(e.props.searchable)),
            (e.props.loadOnScroll = r(e.props.loadOnScroll)),
            (e.props.multiple = r(e.props.multiple) || !1),
            'taglist' === e.props.type && (e.props.multiple = !0),
            (e.props.openOnFocus = r(e.props.openOnFocus)),
            (e.props.openOnRemove =
                void 0 !== e.props.openOnRemove && r(e.props.openOnRemove)),
            (e.props.hasNextPage = Dt.bind(null, e)),
            (e.props.initialOptions = [...e.props.options]),
            (e.props.optionLoaderValues = []),
            (e.props.loadOnCreated = r(e.props.loadOnCreated)),
            e.props.max && 'number' != typeof e.props.max
                ? (e.props.max = parseInt(e.props.max))
                : e.props.max && !e.props.multiple && (e.props.max = void 0),
            e.on('mounted', () => Ht(e)),
            e.on('prop:popoverCoordinates', () =>
                setTimeout(() => {
                    Ht(e);
                }, 10)
            );
    })(n),
        n.props.multiple
            ? (function (e) {
                  e.hook.input(
                      (t, o) => (
                          e.props.highlightedRange &&
                              !e.props.optionRemoved &&
                              (t.splice(
                                  e.props.highlightedRange.index,
                                  1,
                                  gt(e.props.option)
                              ),
                              (t = t.filter((e) => void 0 !== e))),
                          (e.props.inputStd =
                              t && Array.isArray(t) ? [...new Set(t)] : []),
                          o(void 0 === t ? void 0 : [...e.props.inputStd])
                      )
                  );
              })(n)
            : (function (e) {
                  e.hook.input(
                      (t, o) => (
                          (e.props.inputStd =
                              void 0 === t || '' === t || null === t
                                  ? []
                                  : [t]),
                          o(t)
                      )
                  );
              })(n),
        e(n),
        Rt(n),
        (function (e) {
            e.on('created', () => {
                e.context &&
                    ((e.props.trackHover = !0),
                    void 0 !== e.props.disabled ||
                        e.props.optionsLoader ||
                        !e.props.options ||
                        e.props.options.length ||
                        void 0 !== e.props.emptyMessage ||
                        e.props.allowNewValues ||
                        0 !== e.props.inputStd.length ||
                        (e.props.disabledInternally = !0),
                    Kt(e),
                    e.props.loadOnCreated &&
                    !e.props.optionsLoaded &&
                    e.props.optionsLoader
                        ? It(e)
                        : e.props.optionsLoaded && (e.props.optionsLoaded = !1),
                    (e.props.forceExpanded = r(e.props.forceExpanded)),
                    e.props.forceExpanded &&
                        ((e.props.dropdownWrapperStyles = {
                            ...e.props.dropdownWrapperStyles,
                            zIndex: '999',
                            pointerEvents: 'auto',
                        }),
                        setTimeout(() => {
                            e.props.setForceExpanded = !0;
                        }, 100)));
            });
        })(n),
        jt(n),
        t(n),
        (function (e) {
            e.on('prop:selections', ({ payload: t }) => {
                e.props.max && (e.props.maxReached = t.length >= e.props.max);
            }),
                e.on('prop:maxReached', ({ payload: t }) => {
                    t && (e.props.expanded = !1);
                }),
                e.on('prop:optionsLoadingCounter', ({ payload: t }) => {
                    0 === t &&
                        (e.props.emptyMessage &&
                            (e.props.showEmptyMessage =
                                !e.props.options.length),
                        0 === e.props.optionLoadingCounter && e.store.set(_t));
                }),
                e.on('prop:optionLoadingCounter', ({ payload: t }) => {
                    0 === t &&
                        0 === e.props.optionsLoadingCounter &&
                        e.store.set(_t);
                }),
                e.on('prop:disabled', ({ payload: t }) => {
                    t && (e.props.expanded = !1);
                }),
                e.on('prop:options', ({ payload: t }) => {
                    (e.props.allOptions = Mt(e.props.options)),
                        e.props.emptyMessage &&
                            'function' != typeof e.props.optionsLoader &&
                            (e.props.showEmptyMessage = !t.length),
                        t.length
                            ? (e.props.disabledInternally = !1)
                            : t.length ||
                              e.props.optionsLoader ||
                              void 0 !== e.props.emptyMessage ||
                              e.props.allowNewValues ||
                              0 !== e.props.inputStd.length ||
                              e.props.searchValue ||
                              (e.props.disabledInternally = !0),
                        Ot(e);
                }),
                e.on('prop:expanded', ({ payload: o }) => {
                    var n;
                    if (ne)
                        if (
                            (e.props.alwaysLoadOnOpen && (e.props.page = 1), o)
                        ) {
                            if (
                                ((e.props.trackHover = !1),
                                e.props.options &&
                                    !e.props.options.length &&
                                    'function' !=
                                        typeof e.props.optionsLoader &&
                                    e.props.emptyMessage &&
                                    (e.props.showEmptyMessage = !0),
                                setTimeout(
                                    () => document.addEventListener('click', t),
                                    10
                                ),
                                'text-input' === e.props.selectionAppearance &&
                                    e.props.multiple)
                            )
                                return;
                            const o =
                                null === (n = e.props.__root) || void 0 === n
                                    ? void 0
                                    : n.getElementById(`${e.props.id}`);
                            o instanceof HTMLInputElement &&
                                (o.focus(),
                                e.props.searchExpand ||
                                    ((o.value = ''),
                                    (o.value = e.props.inputText)));
                        } else
                            document.removeEventListener('click', t),
                                (e.props.trackHover = !1),
                                (e.props.showEmptyMessage = !1);
                });
            const t = () => {
                (e.props.activeSelectionValue = void 0),
                    (e.props.expanded = !1);
            };
        })(n),
        o(n);
}
function so(e) {
    void 0 === e.props.closeOnSelect
        ? (e.props.closeOnSelect = !e.props.multiple)
        : (e.props.closeOnSelect = r(e.props.closeOnSelect)),
        ((e.props.multiple && void 0 === e.props.selectionAppearance) ||
            'truncate' === e.props.selectionAppearance) &&
            ((e.props.selectionAppearance = 'truncate'),
            (e.props.formattedSelections = [])),
        e.props.multiple
            ? (e.props.selectionRemovable = !1)
            : (e.props.selectionRemovable = r(e.props.selectionRemovable));
}
function ao(e) {
    var t, o;
    e.props.searchValue ||
        null ===
            (o =
                null === (t = e.props.__root) || void 0 === t
                    ? void 0
                    : t.getElementById(
                          `${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`
                      )) ||
        void 0 === o ||
        o.focus();
}
function lo(e, t, o) {
    var r, s, a;
    if ((o.preventDefault(), (e.props.trackHover = !1), e.props.expanded)) {
        const o = e.props.allOptions.reduce((e, t) => {
            var o;
            return (
                (null === (o = null == t ? void 0 : t.attrs) || void 0 === o
                    ? void 0
                    : o.disabled) || e.push(gt(t)),
                e
            );
        }, []);
        (null === (r = e.store.hasNextPage) || void 0 === r
            ? void 0
            : r.value) && o.push(At);
        let l = -1;
        e.props.activeValue &&
            (l = o.findIndex((t) => n(t, e.props.activeValue))),
            -1 === l && o.length
                ? (e.props.activeValue = o[0])
                : 'ArrowDown' === t && o.length > l + 1
                  ? (e.props.activeValue = o[l + 1])
                  : 'ArrowUp' === t && l > 0
                    ? (e.props.activeValue = o[l - 1])
                    : 'ArrowUp' === t &&
                      0 === l &&
                      (null ===
                          (a =
                              null === (s = e.props.__root) || void 0 === s
                                  ? void 0
                                  : s.getElementById(
                                        `${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`
                                    )) ||
                          void 0 === a ||
                          a.focus(),
                      (e.props.expanded = !1));
    } else e.props.expanded || 'ArrowDown' !== t || (e.props.expanded = !0);
}
function io(e, t) {
    var o, n, r;
    if (
        ('taglist' === e.props.type ||
            'tags' === e.props.selectionAppearance) &&
        e.props.inputStd.length &&
        !e.props.inputText
    ) {
        if ('ArrowLeft' === t)
            return (
                e.props.selections.length &&
                    (null ===
                        (n =
                            null === (o = e.props.__root) || void 0 === o
                                ? void 0
                                : o.getElementById(
                                      `${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`
                                  )) ||
                        void 0 === n ||
                        n.focus(),
                    e.props.selections[e.props.selections.length - 1]
                        ? (e.props.activeSelectionValue = gt(
                              e.props.selections[e.props.selections.length - 1]
                          ))
                        : (e.props.activeSelectionValue = void 0)),
                void (e.props.expanded = !1)
            );
        'ArrowRight' === t &&
            (null ===
                (r = document.getElementById(`${e.props.id}_tag-wrapper_0`)) ||
                void 0 === r ||
                r.focus(),
            e.props.selections[0]
                ? (e.props.activeSelectionValue = gt(e.props.selections[0]))
                : (e.props.activeSelectionValue = void 0)),
            (e.props.expanded = !1);
    }
}
function po(e) {
    var t, o;
    (e.props.expanded = !0),
        null ===
            (o =
                null === (t = e.props.__root) || void 0 === t
                    ? void 0
                    : t.getElementById(`${e.props.id}`)) ||
            void 0 === o ||
            o.focus();
}
function co(e, t, o, r = !0) {
    var s, a, l, i, p, d, c;
    const u = o.key;
    if (o.altKey) {
        const r = mt(),
            s = e.props.selections.findIndex((e) => n(gt(e), gt(t))),
            a = [...e.props.selections];
        'ArrowRight' === o.key
            ? s < e.props.selections.length - 1 &&
              (a.splice(s, 1), a.splice(s + 1, 0, t))
            : 'ArrowLeft' === o.key &&
              s > 0 &&
              (a.splice(s, 1), a.splice(s - 1, 0, t)),
            (e.props.activeSelectionValue = gt(t)),
            e.input([...a.map(gt)]),
            setTimeout(() => {
                r instanceof HTMLElement && r.focus();
            }, 100);
    } else {
        const o = e.props.selections.findIndex((e) => n(gt(e), gt(t)));
        if (-1 === o) return;
        const f = 'ArrowRight' === u ? o + 1 : o - 1;
        if (f >= e.props.selections.length) {
            if (!r)
                return (
                    (e.props.expanded = !0),
                    (e.props.activeSelectionValue = void 0),
                    void (
                        null ===
                            (a =
                                null === (s = e.props.__root) || void 0 === s
                                    ? void 0
                                    : s.getElementById(`${e.props.id}`)) ||
                        void 0 === a ||
                        a.focus()
                    )
                );
            null ===
                (i =
                    null === (l = e.props.__root) || void 0 === l
                        ? void 0
                        : l.getElementById(`${e.props.id}`)) ||
                void 0 === i ||
                i.focus();
        } else if (f < 0 && 0 === o)
            null ===
                (d =
                    null === (p = e.props.__root) || void 0 === p
                        ? void 0
                        : p.getElementById(`${e.props.id}`)) ||
                void 0 === d ||
                d.focus();
        else if (f < 0) return;
        const v =
            null === (c = e.props.__root) || void 0 === c
                ? void 0
                : c.getElementById(`${e.props.id}_tag-wrapper_${f}`);
        v && v.focus(),
            e.props.selections[f]
                ? (e.props.activeSelectionValue = gt(e.props.selections[f]))
                : (e.props.activeSelectionValue = void 0);
    }
}
function uo(e, t, o) {
    var r;
    if (!(o.currentTarget instanceof HTMLElement)) return;
    if (e.props.searchValue) return;
    const s = e.props.selections.findIndex((e) => n(gt(e), gt(t)));
    if (-1 === s) return;
    const a = e.props.selections[s + 1] ? s + 1 : s - 1,
        l =
            null === (r = e.props.__root) || void 0 === r
                ? void 0
                : r.getElementById(`${e.props.id}_tag-wrapper_${a}`);
    l && l.focus(), (e.props.userAction = { type: 'tagDelete' }), Tt(e, t);
}
function fo(e, t) {
    var o;
    if (
        (t.preventDefault(),
        e.props.allowNewValues &&
            e.props.searchValue &&
            e.input(Ft(e, e.props.searchValue)),
        e.props.expanded)
    ) {
        if (e.props.activeValue === At)
            return void (
                null === (o = e.context) ||
                void 0 === o ||
                o.handlers.loadMore(!0)
            );
        const t = e.props.allOptions.find((t) => n(gt(t), e.props.activeValue));
        if (!t) return;
        Vt(e, t);
    } else e.props.expanded = !0;
}
function vo(e) {
    e.props.expanded && (e.props.expanded = !1);
}
function ho(e, t, o) {
    if ((o.stopPropagation(), e.props.disabled)) return;
    switch (o.key) {
        case 'ArrowDown':
            po(e);
            break;
        case 'ArrowRight':
        case 'ArrowLeft':
            co(e, t, o, !1);
            break;
        case 'Delete':
        case 'Backspace':
            uo(e, t, o);
    }
}
function mo(e, t, o) {
    if (e.props.disabled) return;
    switch (o.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            !(function (e, t, o) {
                var r, s, a, l;
                o.preventDefault();
                const i = o.key,
                    p = e.props.selections.findIndex((e) => n(gt(e), gt(t)));
                if (-1 === p) return;
                const d = 'ArrowDown' === i ? p + 1 : p - 1;
                if (
                    (d < 0 &&
                        (null ===
                            (s =
                                null === (r = e.props.__root) || void 0 === r
                                    ? void 0
                                    : r.getElementById(`${e.props.id}`)) ||
                            void 0 === s ||
                            s.focus()),
                    d < 0 || d >= e.props.selections.length)
                )
                    return;
                const c =
                    null === (a = e.props.__root) || void 0 === a
                        ? void 0
                        : a.getElementById(
                              `${e.props.id}_selection_wrapper_${d}`
                          );
                c && c.focus(),
                    (e.props.activeSelectionValue =
                        (null === (l = e.props.selections[d]) || void 0 === l
                            ? void 0
                            : l.value) || void 0);
            })(e, t, o);
            break;
        case 'Enter':
            break;
        case 'Tab':
            !(function (e, t, o) {
                var r, s, a, l;
                if (t) {
                    const i = e.props.selections.findIndex((e) =>
                        n(gt(e), gt(t))
                    );
                    if (-1 === i) return;
                    const p = o.shiftKey ? i - 1 : i + 1;
                    if (p >= e.props.selections.length) return;
                    if (p < 0)
                        return void (
                            null ===
                                (s =
                                    null === (r = e.props.__root) ||
                                    void 0 === r
                                        ? void 0
                                        : r.getElementById(`${e.props.id}`)) ||
                            void 0 === s ||
                            s.focus()
                        );
                    const d =
                        null === (a = e.props.__root) || void 0 === a
                            ? void 0
                            : a.getElementById(
                                  `${e.props.id}_selection_wrapper_${p}`
                              );
                    d && d.focus(),
                        (e.props.activeSelectionValue =
                            (null === (l = e.props.selections[p]) ||
                            void 0 === l
                                ? void 0
                                : l.value) || void 0);
                }
            })(e, t, o);
            break;
        case 'Delete':
        case 'Backspace':
            !(function (e, t) {
                var o;
                if (t) {
                    const r = e.props.selections.findIndex((e) =>
                        n(gt(e), gt(t))
                    );
                    if (-1 === r) return;
                    const s = e.props.selections[r + 1] ? r + 1 : r - 1,
                        a =
                            null === (o = e.props.__root) || void 0 === o
                                ? void 0
                                : o.getElementById(
                                      `${e.props.id}_selection_wrapper_${s}`
                                  );
                    a && a.focus(),
                        e.props.selections[s]
                            ? (e.props.activeSelectionValue = gt(
                                  e.props.selections[s]
                              ))
                            : (e.props.activeSelectionValue = void 0);
                }
                (t && 1 !== e.props.selections.length) ||
                    (e.props.userAction = { type: 'selectionDelete' }),
                    Tt(e, t);
            })(e, t);
    }
}
function go(e, t) {
    if (e.props.disabled) return;
    if (
        !(t.currentTarget instanceof HTMLElement) ||
        e.props.id !== t.currentTarget.id
    )
        return;
    const o = t.key;
    switch (o) {
        case 'Tab':
            !(function (e) {
                e.props.expanded && (e.props.expanded = !1);
            })(e);
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            lo(e, o, t);
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            io(e, o);
            break;
        case 'Enter':
            fo(e, t);
            break;
        case 'Escape':
            vo(e);
            break;
        case 'Delete':
        case 'Backspace':
            ao(e);
            break;
        default:
            e.emit('unusedKeydown', t);
    }
}
function $o(e, t) {
    if (e.props.disabled) return;
    if (
        !(t.currentTarget instanceof HTMLElement) ||
        e.props.id !== t.currentTarget.id
    )
        return;
    const o = t.key;
    switch (o) {
        case 'Tab':
            !(function (e, t) {
                var o, n, r;
                (e.props.expanded = !1),
                    e.props.multiple &&
                        e.props.selections.length &&
                        'autocomplete' === e.props.type &&
                        'option' === e.props.selectionAppearance &&
                        (t.preventDefault(),
                        null ===
                            (n =
                                null === (o = e.props.__root) || void 0 === o
                                    ? void 0
                                    : o.getElementById(
                                          `${e.props.id}_selection_wrapper_0`
                                      )) ||
                            void 0 === n ||
                            n.focus(),
                        (e.props.activeSelectionValue =
                            (null === (r = e.props.selections[0]) ||
                            void 0 === r
                                ? void 0
                                : r.value) || void 0));
            })(e, t);
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            lo(e, o, t);
            break;
        case 'ArrowRight':
        case 'ArrowLeft':
            io(e, o);
            break;
        case 'Enter':
            fo(e, t);
            break;
        case 'Escape':
            vo(e);
            break;
        case 'Delete':
        case 'Backspace':
            ao(e);
    }
}
function bo(e) {
    (e.props.alwaysLoadOnOpen =
        void 0 !== e.props.alwaysLoadOnOpen && r(e.props.alwaysLoadOnOpen)),
        e.on('created', () => {
            e.context &&
                ((e.context.handlers.click = yo.bind(null, e)),
                (e.context.handlers.focus = xo.bind(null, e)),
                (e.context.handlers.keydown = go.bind(null, e)),
                (e.context.handlers.selectorTagKeydownHandler = (t) =>
                    ho.bind(null, e, t)));
        });
}
function yo(e, t) {
    var o;
    if ((t.stopPropagation(), 0 === t.detail)) return;
    if (e.props.disabled) return;
    e.props.attrs.onClick && e.props.attrs.onClick(t);
    const n =
        null === (o = e.props.__root) || void 0 === o
            ? void 0
            : o.getElementById(`${e.props.id}`);
    e.props.justOpened
        ? (e.props.justOpened = !1)
        : e.props.expanded
          ? (e.props.expanded = !1)
          : (n && 'mouse' !== t.pointerType
                ? ((e.props.mouseX = -1), (e.props.mouseY = -1))
                : ((e.props.mouseX = t.clientX), (e.props.mouseY = t.clientY)),
            (e.props.expanded = !0),
            null == n || n.focus());
}
function xo(e) {
    e.props.disabled ||
        (e.props.attrs.onFocus && e.props.attrs.onFocus(),
        e.props.skipOpen
            ? (e.props.skipOpen = !1)
            : e.props.openOnFocus &&
              ((e.props.justOpened = !0), (e.props.expanded = !0)));
}
function wo(e) {
    let t,
        o = '';
    e.on('unusedKeydown', ({ payload: r }) => {
        if (!r.isComposing && 1 === [...r.key].length) {
            if (!o && ' ' === r.key)
                return void (function (e, t) {
                    var o;
                    if ((t.preventDefault(), e.props.expanded)) {
                        if (e.props.activeValue === At)
                            return void (
                                null === (o = e.context) ||
                                void 0 === o ||
                                o.handlers.loadMore()
                            );
                        const t = e.props.allOptions.find((t) =>
                            n(gt(t), e.props.activeValue)
                        );
                        if (!t) return;
                        Vt(e, t);
                    } else e.props.expanded = !0;
                })(e, r);
            (e.props.expanded = !0), clearTimeout(t), (o += r.key);
            const s = e.props.allOptions.find((e) =>
                e.label.toLowerCase().startsWith(o.toLowerCase())
            );
            s && (e.props.activeValue = gt(s)),
                (t = setTimeout(() => {
                    o = '';
                }, 400));
        }
    });
}
function _o(e) {
    ko(e),
        e.on('prop:selections', () => {
            (e.props.skipFormatSelections = !1), ko(e);
        }),
        ne && s(`${e.props.id}_selections`, Lo.bind(null, e), e.props.__root);
}
function ko(e) {
    e.isCreated &&
        (e.props.selections.length &&
        e.props.lastVisibleIndex &&
        e.props.selections.length - e.props.lastVisibleIndex > 1
            ? (e.props.truncationCount =
                  '+ ' +
                  (
                      e.props.selections.length -
                      e.props.lastVisibleIndex -
                      1
                  ).toString())
            : (e.props.truncationCount = void 0),
        (e.props.formattedSelections = e.props.selections.map((t, o) =>
            e.props.lastVisibleIndex &&
            o === e.props.lastVisibleIndex &&
            0 !== o
                ? e.props.lastTruncatedElText &&
                  o === e.props.selections.length - 1
                    ? e.props.lastTruncatedElText
                    : o === e.props.selections.length - 1
                      ? t.label
                      : t.label + '...'
                : o === e.props.selections.length - 1
                  ? t.label
                  : t.label + ', '
        )));
}
function So(e) {
    var t, o;
    if (!ne || !e.context) return;
    const n =
        null === (t = e.props.__root) || void 0 === t
            ? void 0
            : t.getElementById(`${e.props.id}_selections`);
    if (!(n instanceof HTMLElement)) return;
    const r = n.parentNode;
    if (!(r instanceof HTMLElement)) return;
    let s = n.getBoundingClientRect().width;
    const a = 0.98 * r.getBoundingClientRect().width,
        l = Array.prototype.slice.call(n.children),
        i = [...e.props.selections];
    if (s > a) {
        const t = [];
        let n = 0;
        for (let e = 0; e < i.length; e++) t.push([i[e], l[e]]);
        for (let r = t.length - 1; r >= 0; r--) {
            const l = t[r];
            if (!(l[1] instanceof HTMLElement)) return;
            n +=
                l[1].getBoundingClientRect().width +
                parseFloat(window.getComputedStyle(l[1]).marginRight) +
                parseFloat(window.getComputedStyle(l[1]).marginLeft);
            const i = s - n;
            if (a > i) {
                const t = l[0].label;
                (e.props.skipFormatSelections = !0), (l[1].textContent = t);
                let n = !1;
                for (let s = t.length; s >= 0; s--) {
                    if (
                        ((e.props.skipFormatSelections = !0),
                        (l[1].textContent = t.slice(0, s).trim() + '...'),
                        i + l[1].getBoundingClientRect().width < a)
                    ) {
                        if (s < 4) {
                            (e.props.lastVisibleIndex = r - 1),
                                (e.props.lastTruncatedElText = null);
                            break;
                        }
                        if (
                            ((e.props.lastVisibleIndex = r),
                            e.props.lastTruncatedElText &&
                                l[1].textContent.slice(0, 4) ===
                                    e.props.lastTruncatedElText.slice(0, 4))
                        )
                            break;
                        e.props.lastTruncatedElText =
                            null === (o = l[1]) || void 0 === o
                                ? void 0
                                : o.textContent;
                        break;
                    }
                    0 === s && (n = !0);
                }
                (l[1].textContent =
                    e.props.lastTruncatedElText && !n && 0 !== r
                        ? e.props.lastTruncatedElText
                        : t),
                    null === e.props.lastVisibleIndex &&
                        ((e.props.lastVisibleIndex = 0 === r ? 0 : r - 1),
                        (e.props.lastTruncatedElText = null)),
                    setTimeout(() => {
                        ko(e);
                    });
                break;
            }
        }
    } else
        (e.props.lastTruncatedElText = null),
            (e.props.lastVisibleIndex = null),
            ko(e);
}
function Lo(e, t) {
    const o = new ResizeObserver(() => {
            e.props.selections &&
                0 !== e.props.selections.length &&
                (e.props.skipFormatSelections
                    ? (e.props.skipFormatSelections = !1)
                    : So(e));
        }),
        n = new ResizeObserver(() => {
            So(e);
        });
    o.observe(t), t.parentNode instanceof Element && n.observe(t.parentNode);
}
const Io = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflowY: 'auto',
        '-webkit-overflow-scrolling': 'auto',
    },
    Do = {
        position: 'fixed',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
    },
    Ao = { overflow: 'hidden', height: '100%' },
    Co = {},
    To = {};
let Eo = 0;
function Oo(e) {
    var t, o;
    if ('undefined' == typeof window) return;
    const n =
            null === (t = e.props.__root) || void 0 === t
                ? void 0
                : t.getElementById(`${e.props.id}_popover`),
        r =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(`${e.props.id}`);
    if (!r || !n) return;
    const s = n.style.paddingTop,
        a = n.style.paddingBottom,
        l = n.style.paddingLeft;
    (n.style.paddingTop = '0'),
        (n.style.paddingBottom = '0'),
        (n.style.paddingLeft = '0');
    const i = r.getBoundingClientRect(),
        p = n.getBoundingClientRect(),
        d = Math.round(i.top - p.top) + 'px',
        c = Math.round(i.left - p.left - 5) + 'px',
        u =
            Math.max(
                Math.round(
                    Math.min(p.height - p.top, window.innerHeight) -
                        (i.top + i.height)
                ),
                0
            ) + 'px';
    (n.style.paddingTop = s),
        (n.style.paddingBottom = a),
        (n.style.paddingLeft = l),
        (e.props.dropdownWrapperStyles = {
            ...e.props.dropdownWrapperStyles,
            paddingTop: d,
            paddingLeft: c,
            paddingBottom: u,
        }),
        (e.props.listboxStyles = {
            ...e.props.listboxStyles,
            minWidth:
                'overscroll' === e.props.behavior
                    ? `min(${i.width + 'px'}, calc(100vw - 4em))`
                    : i.width + 'px',
            maxWidth: 'calc(100vw - 4em)',
        });
}
function Mo(e, t) {
    var o, r;
    let s = null;
    if (e.props.activeDescendant) {
        const a =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(e.props.activeDescendant);
        if (!a) return s;
        e.props.ignoreScroll = !0;
        const l =
            null === (r = e.props.__root) || void 0 === r
                ? void 0
                : r.getElementById(`${e.props.id}_listbox`);
        if (!l) return s;
        const i = t.getBoundingClientRect(),
            p = l.getBoundingClientRect(),
            d = parseInt(getComputedStyle(t).paddingTop),
            c = parseInt(getComputedStyle(t).paddingBottom),
            u = a.offsetTop - d,
            f = Math.max(u - d, 0),
            v = Math.max(t.scrollHeight - c - u - i.height, 0),
            h = p.height - f - v;
        t.scrollTop = u;
        const m = () => {
                t.scrollTop =
                    v > 0 ? (v < d ? t.scrollHeight : d) : f < c ? 0 : u - c;
            },
            g = Math.min(150, p.height);
        (f > 0 && v > 0) || (0 === f && 0 === v) || h > g
            ? (t.scrollTop = u)
            : m();
        t.clientHeight / 2 < t.scrollTop &&
            (s = e.props.options
                .filter((e) => {
                    var t;
                    return !(null === (t = e.attrs) || void 0 === t
                        ? void 0
                        : t.disabled);
                })
                .findIndex((t) => n(e.value, gt(t)))),
            -1 === s && (s = null);
    }
    return s;
}
function Vo(e) {
    e.addProps(['behavior']),
        e.on('created', () => {
            'overscroll' === e.props.behavior &&
                ('function' == typeof e.props.optionsLoader && c(300, [e]),
                (e.props.dropdownWrapperStyles = a(Io)),
                (e.props.listboxStyles = { display: 'inline-block' }),
                (e.props.styleWrapper = Oo.bind(null, e)),
                (e.props.positionListBox = Mo.bind(null, e)));
        }),
        e.on('prop:expanded', ({ payload: t }) => {
            'overscroll' === e.props.behavior &&
                (t
                    ? (function () {
                          Eo = document.documentElement.scrollTop;
                          for (const e in Do)
                              (To[e] = document.documentElement.style[e]),
                                  (document.documentElement.style[e] = Do[e]);
                          for (const e in Ao)
                              (Co[e] = document.body.style[e]),
                                  (document.body.style[e] = Ao[e]);
                          document.body.scrollTop = Eo;
                      })()
                    : (function () {
                          for (const e in Do)
                              document.documentElement.style[e] = To[e];
                          for (const e in Ao) document.body.style[e] = Co[e];
                          (document.body.scrollTop = 0),
                              (document.documentElement.scrollTop = Eo);
                      })());
        });
}
function Fo(e) {
    e.addProps(['multiLine']),
        e.on('created', () => {
            ne &&
                ((e.props.multiLineHeight = void 0),
                s(
                    `${e.props.id}_selections`,
                    Bo.bind(null, e),
                    e.props.__root
                ));
        });
}
function Bo(e) {
    var t;
    const o = new ResizeObserver((t) => {
            for (const o of t) {
                const { height: t } = o.contentRect;
                e.props.selectionsHeight !== t &&
                    (e.props.selectionsHeight = t),
                    Po(e, o.target);
            }
        }),
        n =
            null === (t = e.props.__root) || void 0 === t
                ? void 0
                : t.getElementById(`${e.props.id}_selections`);
    n && o.observe(n);
}
function Po(e, t) {
    var o;
    const n = t.querySelectorAll(`[id^="${e.props.id}_tag-wrapper"`);
    let r,
        s = [];
    if ('taglist' === e.props.type) {
        const t =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(`${e.props.id}`);
        if (!t) return;
        s = [t, ...Array.from(n)];
    } else s = Array.from(n);
    if (!n) return;
    let a = !1;
    for (const t of s)
        if (void 0 === r) r = t.getBoundingClientRect();
        else {
            const o = t.getBoundingClientRect();
            if (
                r.top >= o.top + o.height / 5 ||
                r.top <= o.top - o.height / 5
            ) {
                (a = !0), (e.props.multiLine = !0);
                break;
            }
        }
    a || (e.props.multiLine = !1);
}
function Ho(e) {
    if (
        (e.on('created', () => {
            e.context && wo(e);
        }),
        e.props.multiple ||
            (function (e) {
                e.on('prop:selections', ({ payload: t }) => {
                    var o;
                    (e.props.firstSelectionLabel =
                        (null === (o = t[0]) || void 0 === o
                            ? void 0
                            : o.label) || ''),
                        (e.props.option = t[0]);
                });
            })(e),
        'truncate' === e.props.selectionAppearance &&
            ((e.props.lastVisibleIndex = null),
            _o(e),
            e.on('prop:selections', () => {
                _o(e);
            })),
        'tags' === e.props.selectionAppearance && Fo(e),
        e.props.multiple && 'tags' === e.props.selectionAppearance)
    ) {
        function t() {
            return Array.isArray(e.value) ? e.value : [];
        }
        function o(t, o) {
            e.input(t);
        }
        e.on('created', () => {
            e.props.disabled && (e.props.draggable = !1),
                s(
                    `${e.props.id}_selections`,
                    (n) => {
                        if (e.context && n instanceof HTMLElement) {
                            const r = {
                                threshold: { horizontal: 0.25, vertical: 0 },
                                plugins: [x()],
                                draggingClass: e.context.classes.dragging,
                                dropZoneClass: e.context.classes.dropZone,
                                disabled: !e.props.draggable,
                                root: e.props.__root,
                                touchDraggingClass:
                                    e.context.classes.touchDragging,
                                touchDropZoneClass:
                                    e.context.classes.touchDropZone,
                                draggable: (e) => e.hasAttribute('data-is-tag'),
                            };
                            w({
                                parent: n,
                                getValues: t,
                                setValues: o,
                                config: r,
                            }),
                                e.on('prop:disabled', ({ payload: e }) => {
                                    (r.disabled = e),
                                        w({
                                            parent: n,
                                            getValues: t,
                                            setValues: o,
                                            config: r,
                                        });
                                }),
                                e.on('prop:draggable', ({ payload: e }) => {
                                    (r.disabled = !e),
                                        w({
                                            parent: n,
                                            getValues: t,
                                            setValues: o,
                                            config: r,
                                        });
                                });
                        }
                    },
                    e.props.__root
                );
        });
    }
    e.on('prop:expanded', ({ payload: t }) => {
        t &&
            e.props.optionsLoader &&
            'function' == typeof e.props.optionsLoader &&
            (!e.props.options.length || e.props.alwaysLoadOnOpen) &&
            ((e.props.options = []), It(e));
    }),
        'overscroll' === e.props.behavior && Vo(e);
}
const Ro = (e, t) => {
    let o = null,
        n = null,
        r = null;
    return function (...s) {
        const a = this;
        o
            ? ((n = s), (r = a))
            : (e.apply(a, s),
              (o = window.setTimeout(() => {
                  (o = null),
                      null !== n &&
                          null !== r &&
                          (e.apply(r, n), (n = null), (r = null));
              }, t)));
    };
};
function No(e) {
    if (
        (e.addProps([
            'popover',
            'popoverOffset',
            'usePopover',
            'popoverCoordinates',
            'popoverAncestorCoordinates',
        ]),
        (e.props.popover = r(e.props.popover) ? 'manual' : void 0),
        'input' !== e.type || 'overscroll' === e.props.behavior)
    )
        return;
    let t = null,
        o = null,
        n = [],
        a = null;
    if (
        ((e.props.popoverOffset = r(e.props.popoverOffset)
            ? parseInt(e.props.popoverOffset)
            : 0),
        !e.props.popover)
    )
        return;
    if ('undefined' == typeof document || !('popover' in HTMLElement.prototype))
        return void (
            'undefined' != typeof window &&
            console.warn(
                'FormKit: Popover API is not supported in this browser — input panels will be rendered with fallback CSS positioning. This could result in inaccessible inputs due to parent containers using "overflow: hidden" or z-index conflicts.'
            )
        );
    const l = () => {
        (e.props.invertPopover = !1),
            document.removeEventListener('resize', a),
            document.removeEventListener('scroll', a),
            n.forEach((e) => {
                e.removeEventListener('scroll', a);
            });
    };
    function i() {
        const {
            x: n,
            y: r,
            width: s,
            height: a,
        } = (function (e, t) {
            if (!e || !t) return { x: 0, y: 0 };
            const {
                left: o,
                top: n,
                width: r,
                height: s,
            } = t.getBoundingClientRect();
            return {
                x: o + window.scrollX,
                y: n + s + window.scrollY,
                width: r,
                height: s,
            };
        })(t, o);
        (e.props.popoverAncestorCoordinates = {
            x: n,
            y: r,
            width: s,
            height: a,
        }),
            (e.props.popoverCoordinates = { x: n, y: r, width: s, height: 0 });
    }
    function p(o) {
        t &&
            document.body.contains(t) &&
            (o
                ? (null == t || t.showPopover(),
                  setTimeout(() => {
                      e.props.popoverCoordinates.height =
                          (null == t ? void 0 : t.offsetHeight) || 0;
                  }, 5))
                : t.matches(':popover-open') &&
                  (t.hidePopover(), (e.props.popoverCoordinates.height = 0)));
    }
    e.on('mounted', () => {
        e.context &&
            ((e.props.usePopover = !0),
            (e.props.popoverCoordinates = { x: 0, y: 0, width: 0, height: 0 }),
            (e.props.popoverAncestorCoordinates = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            }));
    }),
        e.on('destroyed', () => {
            l();
        }),
        e.on('prop:inputText', () => {
            e.context && (i(), p(!0));
        }),
        e.on('prop:expanded', ({ payload: r }) => {
            var d;
            e.context &&
                (!1 === r
                    ? l()
                    : s(
                          `${null === (d = e.context) || void 0 === d ? void 0 : d.id}_popover`,
                          () => {
                              if (!e.context) return;
                              (t =
                                  document.querySelector(
                                      `[id="${e.context.id}_popover"][popover]`
                                  ) ||
                                  document.querySelector(
                                      `[id="${e.context.id}_popover"] [popover]`
                                  )),
                                  o ||
                                      (o = (function (e) {
                                          if (!e) return null;
                                          let t = e.parentElement;
                                          for (
                                              ;
                                              t &&
                                              'static' ===
                                                  window.getComputedStyle(t)
                                                      .position;

                                          )
                                              t = t.parentElement;
                                          return t;
                                      })(t)),
                                  i(),
                                  p(r),
                                  (a = Ro(() => {
                                      e.context && (i(), p(r));
                                  }, 10)),
                                  document.addEventListener('resize', a),
                                  document.addEventListener('scroll', a),
                                  (n = []);
                              let s = null == t ? void 0 : t.parentElement;
                              for (; s; )
                                  s.scrollHeight > s.clientHeight && n.push(s),
                                      (s = s.parentElement);
                              n.forEach((e) => {
                                  e.addEventListener('scroll', a);
                              });
                          }
                      ));
        });
}
const Ko = {
        schema: /* #__PURE__ */ Re(
            /* #__PURE__ */ Ne(
                /* #__PURE__ */ Ue('$label'),
                /* #__PURE__ */ Ke(
                    /* #__PURE__ */ We('prefix'),
                    /* #__PURE__ */ Ye(),
                    /* #__PURE__ */ Ge(
                        /* #__PURE__ */ Be(
                            '$inputStd.length === 0 && $state.loading !== true',
                            /* #__PURE__ */ Qe('$placeholder || "placeholder"'),
                            /* #__PURE__ */ Be(
                                '$multiple !== true',
                                /* #__PURE__ */ Xe(
                                    /* #__PURE__ */ Be(
                                        '$state.loading && $selections.length === 0',
                                        /* #__PURE__ */ et(
                                            '$ui.isLoading.value'
                                        ),
                                        /* #__PURE__ */ Je(
                                            /* #__PURE__ */ tt('$option.label')
                                        )
                                    )
                                ),
                                /* #__PURE__ */ Be(
                                    '$multiple && $selectionAppearance === "truncate"',
                                    /* #__PURE__ */ nt(
                                        /* #__PURE__ */ rt(
                                            /* #__PURE__ */ Be(
                                                '$state.loading && $selections.length === 0',
                                                /* #__PURE__ */ et(
                                                    '$ui.isLoading.value'
                                                ),
                                                /* #__PURE__ */ at()
                                            )
                                        )
                                    ),
                                    /* #__PURE__ */ Be(
                                        '$multiple && $selectionAppearance === "tags"',
                                        /* #__PURE__ */ dt(
                                            /* #__PURE__ */ ct(
                                                /* #__PURE__ */ Be(
                                                    '$state.loading && $isLoadingOption !== true && $selections.length === 0',
                                                    /* #__PURE__ */ et(
                                                        '$ui.isLoading.value'
                                                    ),
                                                    /* #__PURE__ */ lt(
                                                        /* #__PURE__ */ it(
                                                            /* #__PURE__ */ Be(
                                                                '$state.loading && $fns.hasOptionLoaderValue($option) || $option.label === undefined',
                                                                /* #__PURE__ */ ut(
                                                                    '$ui.isLoading.value'
                                                                ),
                                                                /* #__PURE__ */ pt(
                                                                    '$option.label'
                                                                )
                                                            ),
                                                            /* #__PURE__ */ ot(
                                                                /* #__PURE__ */ We(
                                                                    'close'
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        /* #__PURE__ */ Be(
                            '$truncationCount && $state.loading !== true',
                            /* #__PURE__ */ st('$truncationCount')
                        ),
                        /* #__PURE__ */ Be(
                            '$state.loading',
                            /* #__PURE__ */ We('loader')
                        ),
                        /* #__PURE__ */ Be(
                            '$inputStd.length !== 0 && $selectionRemovable',
                            /* #__PURE__ */ ot(/* #__PURE__ */ We('close')),
                            /* #__PURE__ */ We('select')
                        )
                    ),
                    /* #__PURE__ */ ft(),
                    /* #__PURE__ */ je(),
                    /* #__PURE__ */ We('suffix')
                )
            ),
            /* #__PURE__ */ qe('$help'),
            /* #__PURE__ */ ze(/* #__PURE__ */ Ze('$message.value'))
        ),
        type: 'input',
        family: 'dropdown',
        props: [],
        features: [
            /* #__PURE__ */ g('select', 'select'),
            /* #__PURE__ */ g('close', 'close'),
            /* #__PURE__ */ g('selected', 'check'),
            /* #__PURE__ */ g('loader', 'spinner'),
            /* #__PURE__ */ $('isLoading'),
            /* #__PURE__ */ $('loadMore'),
            /* #__PURE__ */ $('remove'),
            b,
            /* #__PURE__ */ ro.bind(null, so, bo, Ho),
            No,
        ],
    },
    Wo = /* #__PURE__ */ Me('tg'),
    {
        outer: Uo,
        wrapper: Yo,
        label: jo,
        prefix: qo,
        suffix: zo,
        help: Zo,
        messages: Go,
        message: Xo,
        icon: Jo,
    } = /* #__PURE__ */ Ve(Wo),
    Qo = Wo('input', () => ({
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
    en = Wo('label', () => ({
        if: '($label && $onValueLabel === undefined && $offValueLabel === undefined) || ($valueLabelDisplay === inner) && $altLabelPosition !== true',
        $el: 'label',
        attrs: { for: '$id' },
        children: '$label',
    })),
    tn = Wo('altLabel', () => ({
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
    on = Wo('innerLabel', () => ({
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
    nn = Wo('valueLabel', () => ({
        $el: 'label',
        if: '$valueLabelDisplay !== hidden && $valueLabelDisplay !== inner && (($checked === true && $onValueLabel) || ($checked === false && $offValueLabel))',
        attrs: { for: '$id' },
        children: {
            if: '$checked && $onValueLabel',
            then: '$onValueLabel',
            else: { if: '$offValueLabel', then: '$offValueLabel' },
        },
    })),
    rn = Wo('inner', () => ({
        $el: 'label',
        attrs: { for: '$id', id: "$id + '_label'" },
    })),
    sn = Wo('track', () => ({
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
    an = Wo('thumb', () => ({
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
    ln = () => an(Be('$slots.default', '$slots.default', Jo('thumb')));
const pn = {
        schema: /* #__PURE__ */ Uo(
            /* #__PURE__ */ Yo(
                /* #__PURE__ */ tn(),
                /* #__PURE__ */ rn(
                    /* #__PURE__ */ qo(),
                    /* #__PURE__ */ Qo(),
                    /* #__PURE__ */ sn(
                        /* #__PURE__ */ on(),
                        /* #__PURE__ */ ln()
                    ),
                    /* #__PURE__ */ zo()
                ),
                /* #__PURE__ */ nn(),
                /* #__PURE__ */ en()
            ),
            /* #__PURE__ */ Zo('$help'),
            /* #__PURE__ */ Go(/* #__PURE__ */ Xo('$message.value'))
        ),
        type: 'input',
        props: [
            'checked',
            'thumbColorOff',
            'thumbColorOn',
            'iconColorOff',
            'iconColorOn',
            'valueLabelColorOff',
            'valueLabelColorOn',
            'offValue',
            'offValueLabel',
            'onValue',
            'onValueLabel',
            'thumbIcon',
            'trackColorOff',
            'trackColorOn',
            'valueLabelDisplay',
            'altLabelPosition',
        ],
        features: [
            function (e) {
                function t(e, t) {
                    t.target instanceof HTMLInputElement &&
                        (e.input(
                            t.target.checked
                                ? e.props.onValue
                                : e.props.offValue
                        ),
                        (e.props.checked = t.target.checked));
                }
                e.on('created', () => {
                    'disabled' in e.props &&
                        (e.props.disabled = r(e.props.disabled)),
                        (e.props.altLabelPosition = r(
                            e.props.altLabelPosition
                        )),
                        void 0 === e.props.offValue && (e.props.offValue = !1),
                        void 0 === e.props.onValue && (e.props.onValue = !0),
                        (e.props.checked = n(e.value, e.props.onValue)),
                        e.context &&
                            (e.context.handlers.toggles = t.bind(null, e));
                }),
                    e.on('commit', ({ payload: t }) => {
                        e.props.checked = n(t, e.props.onValue);
                    });
            },
        ],
    },
    dn = /* #__PURE__ */ Me('rp'),
    {
        outer: cn,
        inner: un,
        prefix: fn,
        suffix: vn,
        help: hn,
        messages: mn,
        message: gn,
        icon: $n,
    } = /* #__PURE__ */ Ve(dn),
    bn = dn('empty', () => ({ $el: 'div' })),
    yn = dn('insertControl', () => ({
        $el: 'button',
        attrs: {
            disabled: '$value.length >= $max',
            onClick: '$fns.createInsert($index)',
            type: 'button',
        },
    })),
    xn = dn('addButton', () => ({
        $formkit: 'button',
        bind: '$addAttrs',
        if: '$addButton',
        disabled: '$value.length >= $max',
        onClick: '$fns.createAppend()',
        type: 'button',
    })),
    wn = dn('removeControl', () => ({
        $el: 'button',
        attrs: {
            disabled: '$value.length <= $min',
            onClick: '$fns.createRemover($index)',
            type: 'button',
        },
    })),
    _n = dn('items', () => ({
        $el: 'ul',
        meta: { autoAnimate: !0 },
        attrs: { role: 'list', id: '$id + "_items"' },
    })),
    kn = dn('item', () => ({
        $el: 'li',
        for: ['item', 'index', '$items'],
        attrs: { role: 'listitem', key: '$item', 'data-index': '$index' },
    })),
    Sn = dn('downControl', () => ({
        $el: 'button',
        attrs: {
            disabled: '$index >= $value.length - 1',
            onClick: '$fns.createShift($index, 1)',
            type: 'button',
        },
    })),
    Ln = dn('upControl', () => ({
        $el: 'button',
        attrs: {
            disabled: '$index <= 0',
            onClick: '$fns.createShift($index, -1)',
            type: 'button',
        },
    })),
    In = dn('content', 'div'),
    Dn = dn('fieldset', () => ({ $el: 'fieldset', attrs: { id: '$id' } })),
    An = dn('legend', () => ({ $el: 'legend', if: '$label' })),
    Cn = dn('group', () => ({ $formkit: 'group', index: '$index' })),
    Tn = dn('controls', () => ({
        $el: 'ul',
        if: '$removeControl || $insertControl || $upControl || $downControl',
    })),
    En = dn('remove', () => ({ $el: 'li', if: '$removeControl' })),
    On = dn('insert', () => ({ $el: 'li', if: '$insertControl' })),
    Mn = dn('up', () => ({ $el: 'li', if: '$upControl' })),
    Vn = dn('down', () => ({ $el: 'li', if: '$downControl' })),
    Fn = dn('controlLabel', 'span'),
    Bn = dn('dragHandleWrapper', () => ({ if: '$draggable', $el: 'div' })),
    Pn = dn('dragHandle', () => ({
        $el: 'div',
        attrs: { id: '$id + "_drag_handle"' },
    }));
function Hn(e) {
    var t, o, n, s, a, l, i, p, d, c, u, f, v, h;
    if (
        ((null !== (t = (p = e.props).removeControl) && void 0 !== t) ||
            (p.removeControl = !0),
        (null !== (o = (d = e.props).upControl) && void 0 !== o) ||
            (d.upControl = !0),
        (null !== (n = (c = e.props).downControl) && void 0 !== n) ||
            (c.downControl = !0),
        (null !== (s = (u = e.props).insertControl) && void 0 !== s) ||
            (u.insertControl = !1),
        (null !== (a = (f = e.props).addButton) && void 0 !== a) ||
            (f.addButton = !0),
        (null !== (l = (v = e.props).addLabel) && void 0 !== l) ||
            (v.addLabel = !1),
        (null !== (i = (h = e.props).addAttrs) && void 0 !== i) ||
            (h.addAttrs = {}),
        (e.props.draggable = r(e.props.draggable)),
        (e.props.min = void 0 !== e.props.min ? Number(e.props.min) : 1),
        (e.props.max = void 0 !== e.props.max ? Number(e.props.max) : 1 / 0),
        e.props.min > e.props.max)
    )
        throw Error('Repeater: min must be less than max');
    if (Array.isArray(e.value))
        if (e.value.length < e.props.min) {
            const t = he(e.props.min - e.value.length, () => ({}));
            e.input(e.value.concat(t), !1);
        } else
            e.value.length > e.props.max &&
                e.input(e.value.slice(0, e.props.max), !1);
    else
        e.input(
            he(e.props.min, () => ({})),
            !1
        );
    e.context &&
        (function (e, t) {
            (t.createShift = (t, o) => () => {
                const n = e._value;
                n.splice(t + o, 0, n.splice(t, 1)[0]), e.input(n, !1);
            }),
                (t.createInsert = (t) => () => {
                    const o = e._value;
                    o.splice(t + 1, 0, {}), e.input(o, !1);
                }),
                (t.createAppend = () => () => {
                    const t = e._value;
                    t.push({}), e.input(t, !1);
                }),
                (t.createRemover = (t) => () => {
                    const o = e._value;
                    o.splice(t, 1), e.input(o, !1);
                });
        })(e, e.context.fns);
}
function Rn(e, t) {
    var o;
    if (!t.context) return;
    const n =
            null === (o = t.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(`${t.props.id}_inner`),
        r = null == n ? void 0 : n.hasAttribute('data-auto-animate'),
        s = {
            group: t.props.id,
            dragHandle: `#${t.props.id}_drag_handle`,
            draggingClass: t.context.classes.dragging,
            dropZoneClass: t.context.classes.dropZone,
            root: t.props.__root,
            disabled: !t.props.draggable,
            plugins: r ? [] : [x({ duration: 100 })],
            touchDraggingClass: t.context.classes.touchDragging,
            touchDropZoneClass: t.context.classes.touchDropZone,
            draggable: (e) => 'LI' === e.tagName,
        };
    function a() {
        return Array.isArray(t.value) ? t.value : [];
    }
    function l(e) {
        t.input(e);
    }
    w({ parent: e, getValues: a, setValues: l, config: s }),
        t.on('prop:disabled', ({ payload: t }) => {
            (s.disabled = t),
                w({ parent: e, getValues: a, setValues: l, config: s });
        }),
        t.on('prop:draggable', ({ payload: t }) => {
            (s.disabled = !t),
                w({ parent: e, getValues: a, setValues: l, config: s });
        });
}
const Nn = {
        schema: /* #__PURE__ */ cn(
            /* #__PURE__ */ Dn(
                /* #__PURE__ */ An('$label'),
                /* #__PURE__ */ hn('$help'),
                /* #__PURE__ */ xn(
                    '$addLabel || ($ui.add.value + " " + ($label || ""))'
                ),
                /* #__PURE__ */ un(
                    /* #__PURE__ */ fn(),
                    /* #__PURE__ */ Be(
                        '$value.length === 0',
                        /* #__PURE__ */ Be(
                            '$slots.empty',
                            /* #__PURE__ */ bn()
                        ),
                        /* #__PURE__ */ _n(
                            /* #__PURE__ */ kn(
                                /* #__PURE__ */ Bn(
                                    /* #__PURE__ */ Pn(
                                        /* #__PURE__ */ $n('dragHandle')
                                    )
                                ),
                                /* #__PURE__ */ In(
                                    /* #__PURE__ */ Cn('$slots.default')
                                ),
                                /* #__PURE__ */ Tn(
                                    /* #__PURE__ */ Mn(
                                        /* #__PURE__ */ Ln(
                                            /* #__PURE__ */ Fn(
                                                '$ui.moveUp.value'
                                            ),
                                            /* #__PURE__ */ $n('moveUp')
                                        )
                                    ),
                                    /* #__PURE__ */ En(
                                        /* #__PURE__ */ wn(
                                            /* #__PURE__ */ Fn(
                                                '$ui.remove.value'
                                            ),
                                            /* #__PURE__ */ $n('remove')
                                        )
                                    ),
                                    /* #__PURE__ */ On(
                                        /* #__PURE__ */ yn(
                                            /* #__PURE__ */ Fn('$ui.add.value'),
                                            /* #__PURE__ */ $n('add')
                                        )
                                    ),
                                    /* #__PURE__ */ Vn(
                                        /* #__PURE__ */ Sn(
                                            /* #__PURE__ */ Fn(
                                                '$ui.moveDown.value'
                                            ),
                                            /* #__PURE__ */ $n('moveDown')
                                        )
                                    )
                                )
                            ),
                            /* #__PURE__ */ vn()
                        )
                    )
                ),
            ),
            /* #__PURE__ */ mn(/* #__PURE__ */ gn('$message.value'))
        ),
        type: 'list',
        props: [
            'min',
            'max',
            'total',
            'upControl',
            'downControl',
            'removeControl',
            'insertControl',
            'addLabel',
            'addButton',
            'addAttrs',
            'draggable',
        ],
        features: [
            function (e) {
                (e._c.sync = !0),
                    e.on('created', Hn.bind(null, e)),
                    e.on('mounted', () => {
                        s(
                            `${e.props.id}_items`,
                            (t) => {
                                if (t instanceof HTMLElement) {
                                    Rn(t, e);
                                    function o(t) {
                                        for (const o of t)
                                            for (const t of Array.from(
                                                o.addedNodes
                                            ))
                                                if (
                                                    t instanceof HTMLElement &&
                                                    t.id ===
                                                        `${e.props.id}_items`
                                                )
                                                    return void Rn(t, e);
                                    }
                                    new MutationObserver(o).observe(
                                        t.parentNode,
                                        { childList: !0 }
                                    );
                                }
                            },
                            e.props.__root
                        );
                    });
            },
            y,
            /* #__PURE__ */ $('remove'),
            /* #__PURE__ */ $('add'),
            /* #__PURE__ */ $('moveUp'),
            /* #__PURE__ */ $('moveDown'),
            /* #__PURE__ */ g('dragHandle', 'dragHandle'),
            /* #__PURE__ */ g('remove', 'trash'),
            /* #__PURE__ */ g('add', 'add'),
            /* #__PURE__ */ g('moveUp', 'arrowUp'),
            /* #__PURE__ */ g('moveDown', 'arrowDown'),
        ],
    },
    Kn = new WeakMap();
function Wn(e, t) {
    const o = { onItems: [], offItems: [] },
        n = t || Number(e.value || 0);
    for (let t = 0; t < e.props.max; t++)
        if (t < n && t + 1 >= n) {
            const r = e.props.rightToLeft ? 100 - 100 * (n - t) : 100 * (n - t);
            o.onItems.push(r + '%'), o.offItems.push(100 - r + '%');
        } else
            t < n
                ? (o.offItems.push('0%'), o.onItems.push('100%'))
                : t >= n && (o.offItems.push('100%'), o.onItems.push('0%'));
    e.props.itemsToPercentages = o;
}
function Un(e, t) {
    var o;
    null === (o = e.context) || void 0 === o || o.handlers.blur(t);
}
function Yn(e, t) {
    const { x: o, y: n } = er(t);
    let r = document.elementFromPoint(o, n);
    const s = Array.from(
        document.querySelectorAll(
            `#${e.props.id}_items_wrapper > .formkit-ratingItem`
        )
    );
    let a = !0;
    for (; r && a; ) {
        if (s.includes(r)) {
            a = !1;
            break;
        }
        r = r.parentNode;
    }
    if (!a) {
        const t = s.indexOf(r);
        if (1 === e.props.step) return void e.input(t + 1, !1);
    }
}
function jn(e, t, o) {
    e.props.disabled ||
        (o.preventDefault(),
        (e.props.hoverHighlight = !0),
        (e.props.touchStarted = !0),
        1 !== e.props.step ? tr(e, t, o) : e.input(t + 1, !1));
}
function qn(e, t) {
    if (!e.props.dragStarted) return;
    t.preventDefault(),
        (e.props.hoverHighlight = !1),
        (e.props.dragStarted = !1),
        Wn(e);
    const o = Kn.get(e);
    o && (o.abort(), Kn.delete(e));
}
function zn(e, t, o) {
    if (e.props.hoverHighlight || e.props.disabled) return;
    o.preventDefault(),
        (e.props.hoverHighlight = !0),
        (e.props.dragStarted = !0);
    const n = new AbortController();
    document.addEventListener('mouseup', (t) => qn(e, t), { signal: n.signal }),
        Kn.set(e, n),
        1 === e.props.step ? e.input(t + 1, !1) : tr(e, t, o);
}
function Zn(e, t) {
    var o, n;
    if (document.activeElement === t.currentTarget)
        if ('ArrowRight' === t.key || 'ArrowDown' === t.key) {
            e.props.arrow = 1;
            const t = e.value
                    ? or(e.value + 1 * e.props.step, e.props.step)
                    : e.props.min + 1 * e.props.step,
                n =
                    null === (o = e.props.__root) || void 0 === o
                        ? void 0
                        : o.querySelector(
                              e.value
                                  ? `#${e.props.id}_inner input[value="${t}"]`
                                  : '#' + (e.props.id + '_0_0')
                          );
            (e.props.preventFocus = !0),
                n && n instanceof HTMLInputElement && n.focus(),
                (e.props.preventFocus = !1),
                e.input(Number(t));
        } else if ('ArrowLeft' === t.key || 'ArrowUp' === t.key) {
            e.props.arrow = -1;
            const t = e.value
                    ? or(e.value - 1 * e.props.step, e.props.step)
                    : e.props.max,
                o =
                    null === (n = e.props.__root) || void 0 === n
                        ? void 0
                        : n.querySelector(
                              `#${e.props.id}_inner input[value="${t}"]`
                          );
            (e.props.preventFocus = !0),
                o && o instanceof HTMLInputElement && o.focus(),
                (e.props.preventFocus = !0),
                e.input(Number(t)),
                (e.props.preventFocus = !1);
        }
}
function Gn(e, t) {
    if (!e.props.preventFocus)
        if (
            ((e.props.preventFocus = !0),
            setTimeout(() => {
                e.props.preventFocus = !1;
            }, 50),
            t.relatedTarget instanceof HTMLElement &&
                t.relatedTarget.id === e.props.id + '_items_wrapper')
        )
            e.props.arrow > 0
                ? setTimeout(() => {
                      var t, o;
                      null ===
                          (o =
                              null === (t = e.props.__root) || void 0 === t
                                  ? void 0
                                  : t.getElementById(e.props.id + '_0_0')) ||
                          void 0 === o ||
                          o.focus();
                  })
                : e.props.arrow < 0 &&
                  setTimeout(() => {
                      var t, o;
                      null ===
                          (o =
                              null === (t = e.props.__root) || void 0 === t
                                  ? void 0
                                  : t.getElementById(
                                        e.props.id +
                                            `_${e.props.max - 1}_${e.props.stepsPerValue - 1}`
                                    )) ||
                          void 0 === o ||
                          o.focus();
                  });
        else if (t.target instanceof HTMLInputElement) {
            if (
                (Number(t.target.value) === e.props.step &&
                    e.value === e.props.max) ||
                (Number(t.target.value) === e.props.max &&
                    e.value === e.props.step)
            ) {
                const t = document.getElementById(
                    e.props.id + '_items_wrapper'
                );
                return null == t || t.focus(), void e.input(0);
            }
            e.input(Number(t.target.value));
        }
}
function Xn(e, t, o) {
    e.props.hoverHighlight &&
        (e.props.disabled ||
            (1 === e.props.step
                ? (Wn(e, t + 1), e.props.dragStarted && e.input(t + 1, !1))
                : tr(e, t, o, !!e.props.dragStarted)));
}
function Jn(e) {
    Wn(e);
}
function Qn(e, t, o) {
    if (
        !e.props.disabled &&
        'touchstart' !== o.type &&
        (o.preventDefault(),
        (0 !== o.clientX || 0 !== o.clientY) &&
            o.currentTarget instanceof HTMLElement)
    )
        return 1 === e.props.step
            ? e.props.deselect && Number(e.value) === t + 1
                ? void e.input(0)
                : void e.input(t + 1)
            : void tr(e, t, o);
}
function er(e) {
    return e instanceof MouseEvent
        ? { x: e.clientX, y: e.clientY }
        : { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}
function tr(e, t, o, n = !0) {
    if (!(o.currentTarget instanceof HTMLElement)) return;
    const { x: r, y: s } = er(o),
        a = o.currentTarget.getBoundingClientRect();
    let l = or((r - a.x) / a.width + t, e.props.step);
    (l = l > e.props.min ? l : e.props.min),
        (l = l < e.props.max ? l : e.props.max),
        !e.props.deselect || l !== Number(e.value) || e.props.dragStarted
            ? n
                ? e.input(l, !1)
                : Wn(e, l)
            : e.input(0);
}
function or(e, t) {
    t || (t = 1);
    const o = 1 / t;
    return Math.ceil(e * o) / o;
}
const nr = /* #__PURE__ */ Me('rt'),
    {
        outer: rr,
        wrapper: sr,
        inner: ar,
        label: lr,
        prefix: ir,
        suffix: pr,
        help: dr,
        messages: cr,
        message: ur,
        icon: fr,
    } = /* #__PURE__ */ Ve(nr),
    vr = nr('itemsWrapper', () => ({
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
    hr = nr('ratingItem', () => ({
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
            onTouchstartPassive: '$handlers.handleTouchstart($item)',
            onTouchmovePassive: '$handlers.handleTouchmove',
        },
    })),
    mr = nr('template', () => ({
        for: ['increment', 'stepIndex', '$stepsPerValue'],
        $el: null,
    })),
    gr = nr('itemLabel', () => ({
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
    $r = nr('itemLabelInner', () => ({
        $el: 'span',
        children: '$fns.getValue($item, $increment)',
    })),
    br = nr('input', () => ({
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
    yr = nr('onItemRow', () => ({
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
    xr = nr('offItemRow', () => ({
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
    wr = nr('onItemWrapper', () => ({
        $el: 'div',
        attrs: { style: { color: '$onColor' } },
    })),
    _r = nr('offItemWrapper', () => ({
        $el: 'div',
        attrs: { style: { color: '$offColor' } },
    })),
    kr = () =>
        Be(
            '$slots.onItem',
            () => () => '$slots.onItem',
            Be('$slots.default', () => () => '$slots.default', fr('rating'))
        ),
    Sr = () =>
        Be(
            '$slots.offItem',
            () => () => '$slots.offItem',
            Be('$slots.default', () => () => '$slots.default', fr('rating'))
        ),
    Lr = {
        schema: /* #__PURE__ */ rr(
            /* #__PURE__ */ sr(
                /* #__PURE__ */ lr('$label'),
                /* #__PURE__ */ ar(
                    /* #__PURE__ */ fr('prefix'),
                    /* #__PURE__ */ ir(),
                    /* #__PURE__ */ vr(
                        /* #__PURE__ */ hr(
                            /* #__PURE__ */ mr(
                                /* #__PURE__ */ gr(
                                    /* #__PURE__ */ yr(
                                        /* #__PURE__ */ wr(/* #__PURE__ */ kr())
                                    ),
                                    /* #__PURE__ */ xr(
                                        /* #__PURE__ */ _r(/* #__PURE__ */ Sr())
                                    ),
                                    /* #__PURE__ */ $r()
                                ),
                                /* #__PURE__ */ br()
                            )
                        )
                    ),
                    /* #__PURE__ */ pr(),
                    /* #__PURE__ */ fr('suffix')
                )
            ),
            /* #__PURE__ */ dr('$help'),
            /* #__PURE__ */ cr(/* #__PURE__ */ ur('$message.value'))
        ),
        type: 'input',
        props: [],
        features: [
            function (e) {
                function t(e) {
                    setTimeout(() => {
                        const t = Array.from(
                            document.querySelectorAll(
                                `#${e.props.id}_items_wrapper > .formkit-ratingItem`
                            )
                        );
                        for (let e = 0; e < t.length; e++) {
                            const o = t[e].querySelectorAll(
                                    '.formkit-onItemWrapper'
                                ),
                                n = t[e].querySelectorAll(
                                    '.formkit-offItemWrapper'
                                );
                            for (let n = 0; n < o.length; n++)
                                o[n].style.flex =
                                    `0 0 ${t[e].getBoundingClientRect().width}px`;
                            for (let o = 0; o < n.length; o++)
                                n[o].style.flex =
                                    `0 0 ${t[e].getBoundingClientRect().width}px`;
                        }
                    });
                }
                e.addProps([
                    'max',
                    'step',
                    'stepsPerValue',
                    'itemsToPercentages',
                    'rightToLeft',
                    'onItemStyles',
                    'offItemStyles',
                    'hoverHighlight',
                    'deselect',
                    'disabled',
                    'wrapperWidth',
                    'onColor',
                    'offColor',
                ]),
                    !1 !== e.props.hoverHighlight &&
                        'false' !== e.props.hoverHighlight &&
                        (e.props.hoverHighlight = !0),
                    (e.props.deselect = r(e.props.deselect)),
                    (e.props.max = Number(e.props.max) || 5),
                    (e.props.min = Number(e.props.min) || 0),
                    (e.props.step = Number(e.props.step) || 1),
                    (e.props.numberOfSteps = e.props.max / e.props.step),
                    (e.props.lastIndex = 1 / e.props.step - 1),
                    (e.props.itemsToPercentages = {}),
                    'disabled' in e.props &&
                        (e.props.disabled = r(e.props.disabled)),
                    e.props.rightToLeft
                        ? ((e.props.onItemStyles = void 0),
                          (e.props.offItemStyles = {
                              position: 'absolute',
                              top: '0',
                              left: '0',
                              overflow: 'hidden',
                              height: '100%',
                              zIndex: 100,
                          }))
                        : (e.props.onItemStyles = {
                              position: 'absolute',
                              top: '0',
                              left: '0',
                              overflow: 'hidden',
                              height: '100%',
                          }),
                    (e.props.stepsPerValue = 1 / e.props.step),
                    e.hook.input((t, o) => {
                        if (null === t || '' === t || isNaN(t)) return o(t);
                        const n = Number(t),
                            r = Number(e.props.min),
                            s = Number(e.props.max);
                        return n > s
                            ? o(s)
                            : e.props.min && n <= r
                              ? o(r)
                              : o(n);
                    }),
                    e.on('commit', ({ payload: t }) => {
                        const o = Number(t || 0);
                        Wn(e, o);
                    }),
                    e.on('created', () => {
                        e.context &&
                            (s(
                                `${e.props.id}_items_wrapper`,
                                () => {
                                    t(e),
                                        (function (e) {
                                            var o;
                                            const n =
                                                null === (o = e.props.__root) ||
                                                void 0 === o
                                                    ? void 0
                                                    : o.getElementById(
                                                          `${e.props.id}_items_wrapper`
                                                      );
                                            if (!n) return;
                                            new ResizeObserver(() => {
                                                t(e);
                                            }).observe(n);
                                        })(e),
                                        setTimeout(() => t(e), 100);
                                },
                                e.props.__root
                            ),
                            (e.context.fns.getPercentage = (e, t, o = !0) =>
                                (o ? e.onItems : e.offItems)[t]),
                            (e.context.fns.getValue = (t, o) =>
                                t +
                                Number(
                                    (o * e.props.step + e.props.step).toFixed(1)
                                )),
                            (e.context.fns.showLabel = (t, o) => {
                                const n = Number(e.value || 0);
                                return (
                                    (0 === n && 0 === o) ||
                                    (n && t === n) ||
                                    (t > n && 0 === o) ||
                                    (n > t && o === e.props.lastIndex)
                                );
                            }),
                            (e.context.handlers.handleFocus = (t) =>
                                Gn.call(null, e, t)),
                            (e.context.handlers.handleWrapperKeydown = (t) =>
                                Zn.call(null, e, t)),
                            (e.context.handlers.handleWrapperBlur = (t) =>
                                Un.call(null, e, t)),
                            (e.context.handlers.handleItemClick = (t) => (o) =>
                                Qn.call(null, e, t, o)),
                            (e.context.handlers.handleMousemove = (t) => (o) =>
                                Xn.call(null, e, t, o)),
                            (e.context.handlers.handleMouseleave = () =>
                                Jn.call(null, e)),
                            (e.context.handlers.handleDragstart = (t) => (o) =>
                                zn.call(null, e, t, o)),
                            (e.context.handlers.handleMouseup = (t) =>
                                qn.call(null, e, t)),
                            (e.context.handlers.handleTouchstart = (t) => (o) =>
                                jn.call(null, e, t, o)),
                            (e.context.handlers.handleTouchmove = (t) =>
                                Yn.call(null, e, t)),
                            (e.context.handlers.handleKeydown = (t) => (o) =>
                                (function (e, t, o) {
                                    const n = Number(e.value);
                                    e.props.deselect && ' ' === o.key && n === t
                                        ? e.input(0)
                                        : ' ' === o.key && e.input(t);
                                })(e, t, o)));
                    });
            },
            /* #__PURE__ */ g('rating', 'star'),
        ],
    },
    Ir = /* #__PURE__ */ Me('ac'),
    {
        outer: Dr,
        wrapper: Ar,
        inner: Cr,
        icon: Tr,
        label: Er,
        prefix: Or,
        suffix: Mr,
        help: Vr,
        messages: Fr,
        message: Br,
    } = /* #__PURE__ */ Ve(Ir),
    Pr = Ir('input', () => ({
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
    Hr = Ir('listboxButton', () => ({
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
    Rr = Ir('selectionWrapper', () => ({
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
    Nr = Ir('selection', () => ({
        $el: 'div',
        attrs: { id: '$id + "_selection_" + $index' },
    })),
    Kr = Ir('selections', () => ({
        $el: 'div',
        attrs: { 'aria-live': 'polite', id: '$id + "_selections"' },
    })),
    Wr = Ir('removeSelection', () => ({
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
    Ur = Ir('optionLoading', 'span'),
    Yr = Ir('option', () => ({ $el: 'div', if: '$value !== undefined' })),
    jr = /* #__PURE__ */ Pe(Ir);
function qr(e) {
    'option' !== e.props.selectionAppearance ||
        e.props.multiple ||
        !1 === e.props.selectionRemovable ||
        'false' === e.props.selectionRemovable ||
        (e.props.selectionRemovable = !0),
        e.props.multiple ||
            (e.props.clearSearchOnOpen = r(e.props.clearSearchOnOpen)),
        (e.props.selectionRemovable = r(e.props.selectionRemovable)),
        (e.props.openOnClick = r(e.props.openOnClick)),
        'option' !== e.props.selectionAppearance ||
            e.props.multiple ||
            (e.props.isSingleOption = !0),
        void 0 === e.props.closeOnSelect && (e.props.closeOnSelect = !0),
        void 0 === e.props.selectionAppearance &&
            (e.props.selectionAppearance = 'text-input'),
        void 0 === e.props.closeOnSelect && (e.props.closeOnSelect = !0),
        e.props.closeOnSelect
            ? (e.props.resetSearchOnCommit = !1)
            : void 0 === e.props.resetSearchOnCommit &&
              (e.props.resetSearchOnCommit = e.props.multiple),
        (e.props.allowNewValues = r(e.props.allowNewValues));
}
function zr(e) {
    e.addProps([
        'inputText',
        'selectionAppearance',
        'searchValue',
        'openOnClick',
        'filteredOptions',
        'search',
        'debounce',
        'showInput',
        'visibilityStyles',
        'selectionStyles',
        'multiple',
        'filter',
        'hasHighlightedRange',
        'clearOnClick',
        'debounce',
    ]),
        void 0 === e.props.debounce
            ? (e.props.debounce = 200)
            : (e.props.debounce = parseInt(e.props.debounce)),
        (e.props.nonceKey = 'searchValue'),
        (e.props.searchValue = ''),
        (e.props.inputText = ''),
        (e.props.filterOptions = yt.bind(null, e)),
        (e.props.reloadOnCommit = r(e.props.reloadOnCommit)),
        void 0 === e.props.alwaysLoadOnOpen
            ? (e.props.alwaysLoadOnOpen = !0)
            : (e.props.alwaysLoadOnOpen = r(e.props.alwaysLoadOnOpen)),
        'function' != typeof e.props.filter &&
            (e.props.filter = (e, t) =>
                e.label.toLowerCase().includes(t.toLowerCase())),
        e.on('created', () => {
            e.context &&
                ne &&
                ((e.context.handlers.focus = Xr.bind(null, e)),
                (e.context.handlers.input = Zr.bind(null, e)),
                (e.context.handlers.focus = Xr.bind(null, e)),
                (e.context.handlers.click = Gr.bind(null, e)),
                (e.context.handlers.toggleListbox = Jr.bind(null, e)),
                (e.context.handlers.toggleListboxKeydown = Qr.bind(null, e)),
                (e.context.handlers.keydown = $o.bind(null, e)),
                (e.context.handlers.selectionKeydown = (t) => (o) =>
                    mo(e, t, o)),
                (e.context.handlers.searchInputTagKeydown = (t) => (o) =>
                    (function (e, t, o) {
                        if ((o.stopPropagation(), e.props.disabled)) return;
                        switch (o.key) {
                            case 'ArrowDown':
                                po(e);
                                break;
                            case 'ArrowRight':
                            case 'ArrowLeft':
                                co(e, t, o);
                                break;
                            case 'Delete':
                            case 'Backspace':
                                uo(e, t, o);
                        }
                    })(e, t, o)),
                e.on('prop:options', ({ payload: t }) => {
                    if (
                        (((0 === e.props.initialOptions.length &&
                            'function' != typeof e.props.optionsLoader) ||
                            (!e.props.searchValue && t.length)) &&
                            (e.props.initialOptions = [...t]),
                        e.props.selections &&
                            e.props.selections.length &&
                            t.length)
                    )
                        for (let o = 0; o < e.props.selections.length; o++) {
                            const n = e.props.selections[o],
                                r = t.find((e) => gt(e) === n.value);
                            r && (e.props.selections[o] = r);
                        }
                }));
        }),
        e.on('prop:expanded', ({ payload: t }) => {
            t || $t.delete(e);
        });
}
function Zr(e, t) {
    if (e.props.disabled) return;
    const o = t.target;
    (e.props.inputText = o.value),
        e.emit('handleSearchInput', o.value),
        e.props.searchValue && yt(e, e.props.searchValue, !0);
}
function Gr(e, t) {
    t.stopPropagation(),
        e.props.disabled ||
            e.props.disabledInternally ||
            (e.props.attrs.onClick && e.props.attrs.onClick(t),
            ((!e.props.expanded && e.props.openOnClick) ||
                e.props.openOnFocus) &&
                (e.props.expanded = !0));
}
function Xr(e) {
    e.props.disabled ||
        e.props.disabledInternally ||
        (e.props.attrs.onFocus && e.props.attrs.onFocus(),
        (e.props.activeSelectionValue = void 0),
        e.props.skipOpen
            ? (e.props.skipOpen = !1)
            : e.props.openOnFocus && (e.props.expanded = !0));
}
function Jr(e) {
    var t, o, n;
    e.props.disabled ||
        e.props.disabledInternally ||
        (null === (t = e.context) || void 0 === t ? void 0 : t.state.loading) ||
        ((e.props.expanded = !e.props.expanded),
        e.props.openOnFocus ||
            null ===
                (n =
                    null === (o = e.props.__root) || void 0 === o
                        ? void 0
                        : o.getElementById(`${e.props.id}`)) ||
            void 0 === n ||
            n.focus());
}
function Qr(e, t) {
    ('Enter' !== t.key && ' ' !== t.key) ||
        (t.preventDefault(), t.stopPropagation(), Jr(e));
}
const es = new WeakMap(),
    ts = 'undefined' != typeof window,
    os = new WeakMap();
let ns = !1;
function rs(e) {
    (e.props.searchValue = null),
        e.on('commit', () => {
            (e.props.searchValue = null), e.props.highlightedRange || ss(e);
        }),
        e.on('created', () => {
            if (!e.context || !ts) return;
            e.on('handleSearchInput', ({ payload: t }) => {
                '' === t
                    ? ((e.props.searchValue = null), e.input([]))
                    : t && 0 === e.props.inputStd.length
                      ? (e.props.searchValue = t)
                      : t &&
                        e.props.inputStd.length > 0 &&
                        (e.props.searchValue = (function (e) {
                            var t;
                            const o = ls(e);
                            if (e.props.highlightedRange) {
                                const [t, n] = as(e, o);
                                return e.props.inputText.slice(t, n);
                            }
                            return e.props.inputText.slice(
                                (null === (t = o[o.length - 1]) || void 0 === t
                                    ? void 0
                                    : t.end) + 2
                            );
                        })(e)),
                    !e.props.expanded && t
                        ? (e.props.expanded = !0)
                        : !t && e.props.expanded && (e.props.expanded = !1);
            }),
                (function (e) {
                    s(
                        `${e.props.id}`,
                        (t) => {
                            t instanceof HTMLInputElement && os.set(t, e);
                        },
                        e.props.__root
                    ),
                        ts &&
                            !ns &&
                            ((ns = !0),
                            document.addEventListener('selectionchange', () => {
                                const e = mt();
                                if (
                                    e instanceof HTMLInputElement &&
                                    os.has(e)
                                ) {
                                    const t = os.get(e);
                                    t &&
                                        (function (e) {
                                            clearTimeout(es.get(e)),
                                                es.set(
                                                    e,
                                                    setTimeout(() => {
                                                        var t, o, n, r;
                                                        const s =
                                                            null ===
                                                                (t =
                                                                    e.props
                                                                        .__root) ||
                                                            void 0 === t
                                                                ? void 0
                                                                : t.getElementById(
                                                                      `${e.props.id}`
                                                                  );
                                                        if (
                                                            s instanceof
                                                            HTMLInputElement
                                                        ) {
                                                            const t = ls(e),
                                                                a = t.findIndex(
                                                                    (e) =>
                                                                        null !==
                                                                        s.selectionStart
                                                                            ? s.selectionStart >=
                                                                                  e.start &&
                                                                              s.selectionStart <=
                                                                                  e.end
                                                                            : null !==
                                                                                  s.selectionEnd &&
                                                                              s.selectionEnd >=
                                                                                  e.start &&
                                                                              s.selectionEnd <=
                                                                                  e.end
                                                                ),
                                                                l =
                                                                    null ===
                                                                        (o =
                                                                            t[
                                                                                t.length -
                                                                                    1
                                                                            ]) ||
                                                                    void 0 === o
                                                                        ? void 0
                                                                        : o.end;
                                                            if (
                                                                0 ===
                                                                    s.selectionStart &&
                                                                s.selectionEnd ===
                                                                    (null ===
                                                                        (n =
                                                                            e
                                                                                .props
                                                                                .inputText) ||
                                                                    void 0 === n
                                                                        ? void 0
                                                                        : n.length)
                                                            )
                                                                return;
                                                            if (
                                                                'string' ==
                                                                    typeof e
                                                                        .props
                                                                        .searchValue &&
                                                                e.props
                                                                    .highlightedRange
                                                            ) {
                                                                if (t.length) {
                                                                    const o =
                                                                            e
                                                                                .props
                                                                                .highlightedRange,
                                                                        [n, r] =
                                                                            as(
                                                                                e,
                                                                                t
                                                                            );
                                                                    if (
                                                                        null !==
                                                                            s.selectionEnd &&
                                                                        (s.selectionEnd <
                                                                            n ||
                                                                            s.selectionEnd >
                                                                                r)
                                                                    ) {
                                                                        const t =
                                                                                o.end -
                                                                                o.start -
                                                                                (r -
                                                                                    n),
                                                                            a =
                                                                                s.selectionEnd;
                                                                        (e.props.inputText =
                                                                            e.props.option.label),
                                                                            (e.props.highlightedRange =
                                                                                void 0),
                                                                            (e.props.searchValue =
                                                                                null),
                                                                            (s.value =
                                                                                e.props.inputText),
                                                                            (s.selectionStart =
                                                                                s.selectionEnd =
                                                                                    a +
                                                                                    (a >
                                                                                    n
                                                                                        ? t
                                                                                        : 0));
                                                                    }
                                                                }
                                                            } else if (
                                                                a >= 0 &&
                                                                null !==
                                                                    s.selectionStart &&
                                                                (l !==
                                                                    (null ===
                                                                        (r =
                                                                            e
                                                                                .props
                                                                                .inputText) ||
                                                                    void 0 === r
                                                                        ? void 0
                                                                        : r.length) ||
                                                                    s.selectionStart <
                                                                        l)
                                                            ) {
                                                                const o = t[a],
                                                                    n =
                                                                        e.props.inputText.substr(
                                                                            0,
                                                                            l
                                                                        ),
                                                                    r =
                                                                        o.start +
                                                                        (o.index >
                                                                        0
                                                                            ? 1
                                                                            : 0),
                                                                    i =
                                                                        o.end +
                                                                        (t.length -
                                                                            1 >
                                                                        o.index
                                                                            ? -1
                                                                            : 0);
                                                                n !==
                                                                    e.props
                                                                        .inputText &&
                                                                    ((e.props.inputText =
                                                                        n),
                                                                    (s.value =
                                                                        n)),
                                                                    (e.props.highlightedRange =
                                                                        o),
                                                                    (s.selectionStart =
                                                                        r),
                                                                    (s.selectionEnd =
                                                                        i);
                                                            } else
                                                                (e.props.highlightedRange =
                                                                    void 0),
                                                                    ss(e);
                                                            if (
                                                                null !==
                                                                    s.selectionStart &&
                                                                s.selectionStart >=
                                                                    l &&
                                                                ', ' !==
                                                                    e.props.inputText.substring(
                                                                        l,
                                                                        l + 2
                                                                    )
                                                            ) {
                                                                let t =
                                                                    e.props.inputText.substring(
                                                                        0,
                                                                        l
                                                                    );
                                                                (t =
                                                                    e.props
                                                                        .multiple &&
                                                                    e.props
                                                                        .max &&
                                                                    Array.isArray(
                                                                        e.props
                                                                            .inputStd
                                                                    ) &&
                                                                    e.props
                                                                        .inputStd
                                                                        .length >=
                                                                        e.props
                                                                            .max
                                                                        ? t
                                                                        : `${t},`),
                                                                    (e.props.inputText = `${t} ${e.props.inputText.substring(l).replace(/^[,\s]{1,2}/, '')}`);
                                                            }
                                                        }
                                                    }, 5)
                                                );
                                        })(t);
                                }
                            }));
                })(e);
            const o = e.context.handlers.keydown;
            e.context.handlers.keydown = (n) => {
                o(n),
                    (function (e, o) {
                        var n, r, s, a;
                        if (
                            ['ArrowRight', 'ArrowLeft'].includes(o.key) &&
                            o.target instanceof HTMLInputElement &&
                            null !== o.target.selectionEnd &&
                            null !== o.target.selectionStart
                        ) {
                            if (
                                0 === o.target.selectionStart &&
                                o.target.selectionEnd ===
                                    (null === (n = e.props.inputText) ||
                                    void 0 === n
                                        ? void 0
                                        : n.length)
                            )
                                'ArrowLeft' === o.key ? t(0) : t(-1);
                            else if (!e.props.searchValue) {
                                e.props.searchValue = null;
                                const t = ls(e),
                                    n =
                                        null === (r = t[t.length - 1]) ||
                                        void 0 === r
                                            ? void 0
                                            : r.end;
                                o.target.selectionStart < n &&
                                    (o.target.selectionStart = Math.max(
                                        0,
                                        'ArrowLeft' === o.key
                                            ? o.target.selectionStart - 2
                                            : o.target.selectionEnd + 2
                                    ));
                            }
                        } else if (['Delete', 'Backspace'].includes(o.key))
                            e.props.highlightedRange && !e.props.searchValue
                                ? (Tt(e, e.props.highlightedRange.option),
                                  0 === e.props.inputStd.length &&
                                      (e.props.highlightedRange = void 0))
                                : o.target instanceof HTMLInputElement &&
                                  ((e.props.searchValue = null),
                                  t(-1, !0) && o.preventDefault());
                        else if (
                            o.target instanceof HTMLInputElement &&
                            0 === o.target.selectionStart &&
                            o.target.selectionEnd ===
                                (null === (s = e.props.inputText) ||
                                void 0 === s
                                    ? void 0
                                    : s.length) &&
                            (null === (a = e.props.inputText) || void 0 === a
                                ? void 0
                                : a.length) &&
                            0 === e.props.selections.length
                        )
                            o.preventDefault();
                        else if ('Tab' === o.key) return;
                        'ArrowLeft' === o.key &&
                            t(-1, !0) &&
                            o.preventDefault();
                    })(e, n);
            };
            const n = e.context.handlers.focus;
            (e.context.handlers.focus = (t) => {
                n(e, t);
                const o = new Event('selectionchange');
                document.dispatchEvent(o);
            }),
                e.on('blur', () => {
                    e.props.selections.length
                        ? ((e.props.inputText = e.props.selections
                              .map((e) => e.label)
                              .join(', ')),
                          (e.props.searchValue = null))
                        : e.props.selections.length ||
                          ((e.props.inputText = ''),
                          (e.props.searchValue = ''));
                });
        }),
        e.on('prop:expanded', ({ payload: t }) => {
            t || e.props.inputStd.length
                ? t &&
                  ((e.props.options.length && !e.props.alwaysLoadOnOpen) ||
                      ((e.props.options = []), yt(e, e.props.searchValue)))
                : ((e.props.searchValue = ''), (e.props.inputText = ''));
        }),
        e.on('prop:selections', () => {
            var t;
            const o = [...e.props.selections].map((e) => e.label).join(', ');
            let n = '';
            if (ts && e.isCreated) {
                const o =
                    null === (t = e.props.__root) || void 0 === t
                        ? void 0
                        : t.getElementById(`${e.props.id}`);
                if (mt() === o && Array.isArray(e._value) && e._value.length) {
                    if (e.props.max && e._value.length >= Number(e.props.max))
                        return;
                    n = ', ';
                }
            }
            (e.props.inputText = `${o}${n}`),
                e.props.reloadOnCommit &&
                    ((e.props.searchValue = ''), yt(e, e.props.searchValue));
        });
    const t = (t, o = !1) => {
        var n, r;
        const s =
            null === (n = e.props.__root) || void 0 === n
                ? void 0
                : n.getElementById(`${e.props.id}`);
        if (!(s instanceof HTMLInputElement)) return !1;
        const a = ls(e),
            l = t >= 0 ? t : a.length - 1;
        if (void 0 === a[l]) return !1;
        const i = null === (r = a[l]) || void 0 === r ? void 0 : r.end;
        return (
            null !== s.selectionStart &&
            (!o || (s.selectionStart >= i && s.selectionStart <= i + 2)) &&
            ((s.selectionStart = a[l].start + (l > 0 ? 1 : 0)),
            (s.selectionEnd = a[l].end + (l < a.length - 1 ? -1 : 0)),
            !0)
        );
    };
    let o;
    e.on('selectRange', ({ payload: e }) => t(...e)),
        e.on('prop:highlightedRange', ({ payload: t }) => {
            (e.props.hasHighlightedRange = !!t),
                t &&
                    e.props.expanded &&
                    o !== t.option &&
                    ((o = t.option), Ot(e));
        });
}
function ss(e) {
    var t;
    if (!ts) return;
    const o =
        null === (t = e.props.__root) || void 0 === t
            ? void 0
            : t.getElementById(`${e.props.id}`);
    o && o.scrollTo({ left: o.scrollWidth, behavior: 'smooth' });
}
function as(e, t) {
    var o;
    const n = e.props.highlightedRange,
        r = n.index,
        s = n.start + (r ? 1 : 0),
        a = t.length - 1 > r ? t[t.length - 1].end - t[r + 1].start : 0;
    return [
        s,
        (null === (o = e.props.inputText) || void 0 === o ? void 0 : o.length) -
            a +
            (t.length - 1 > n.index ? -1 : 0),
    ];
}
function ls(e) {
    const t = Ct(e);
    return Array.isArray(t) && t.length
        ? t.reduce((e, o, n) => {
              var r;
              const s =
                  (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.end) ||
                  0;
              let a = 0;
              return (
                  t.length - 1 !== n && a++,
                  0 !== n && a++,
                  e.push({
                      option: o,
                      index: n,
                      start: s,
                      end: s + o.label.length + a,
                  }),
                  e
              );
          }, [])
        : [];
}
function is(e) {
    !(function (e) {
        e.on('prop:expanded', ({ payload: t }) => {
            t
                ? ((e.props.searchValue = ''),
                  (e.props.options.length && !e.props.alwaysLoadOnOpen) ||
                      ((e.props.options = []), yt(e, e.props.searchValue, !0)))
                : ((e.props.searchValue = ''), (e.props.inputText = ''));
        });
    })(e),
        (function (e) {
            e.on('handleSearchInput', ({ payload: t }) => {
                t && !e.props.expanded
                    ? ((e.props.searchExpand = !0), (e.props.expanded = !0))
                    : !t && e.props.expanded && (e.props.expanded = !1),
                    (e.props.searchValue = e.props.inputText);
            });
        })(e),
        (function (e) {
            e.on('prop:selections', () => {
                e.isCreated &&
                    ((e.props.inputText = ''),
                    (e.props.searchValue = ''),
                    e.props.optionRemoved ||
                        (e.props.reloadOnCommit &&
                            yt(e, e.props.searchValue, !0)));
            });
        })(e);
}
function ps(e) {
    !(function (e) {
        function t(e) {
            0 === e.props.inputStd.length
                ? ((e.props.inputText = ''), (e.props.searchValue = ''))
                : ((e.props.inputText = e.props.selections[0].label),
                  (e.props.searchValue = e.props.selections[0].label));
        }
        function o(e) {
            e.props.clearSearchOnOpen &&
                !e.props.searchExpand &&
                ((e.props.inputText = ''), (e.props.searchValue = '')),
                (e.props.searchValue = e.props.inputText),
                (e.props.options.length && !e.props.alwaysLoadOnOpen) ||
                    ((e.props.options = []), yt(e, e.props.searchValue, !0)),
                e.props.searchExpand && (e.props.searchExpand = !1);
        }
        e.on('prop:expanded', ({ payload: n }) => {
            n ? o(e) : t(e);
        });
    })(e),
        (function (e) {
            e.on('handleSearchInput', ({ payload: t }) => {
                '' === t
                    ? (0 === e.props.inputStd.length && (e.props.expanded = !1),
                      e.input(void 0))
                    : t &&
                      !e.props.expanded &&
                      ((e.props.searchExpand = !0), (e.props.expanded = !0)),
                    (e.props.searchValue = e.props.inputText);
            });
        })(e),
        (function (e) {
            e.on('prop:selections', ({ payload: t }) => {
                (e.props.inputText = t.length ? t[0].label : ''),
                    (e.props.searchValue = t.length ? t[0].label : ''),
                    e.isCreated &&
                        e.props.expanded &&
                        0 === t.length &&
                        yt(e, e.props.searchValue, !0);
            });
        })(e);
}
function ds(e) {
    if (e.props.multiple)
        if (e.props.multiple && 'option' === e.props.selectionAppearance) {
            function t() {
                return Array.isArray(e.value) ? e.value : [];
            }
            function o(t) {
                e.input(t);
            }
            is(e),
                e.on('created', () => {
                    e.props.disabled && (e.props.draggable = !1),
                        s(
                            `${e.props.id}_selections`,
                            (n) => {
                                if (n instanceof HTMLElement && e.context) {
                                    const r = {
                                        draggingClass:
                                            e.context.classes.dragging,
                                        dropZoneClass:
                                            e.context.classes.dropZone,
                                        root: e.props.__root,
                                        disabled: !e.props.draggable,
                                        plugins: [x()],
                                        touchDraggingClass:
                                            e.context.classes.touchDragging,
                                        touchDropZoneClass:
                                            e.context.classes.touchDropZone,
                                        draggable: (e) =>
                                            e.hasAttribute('data-is-selection'),
                                    };
                                    w({
                                        parent: n,
                                        getValues: t,
                                        setValues: o,
                                        config: r,
                                    }),
                                        e.on(
                                            'prop:disabled',
                                            ({ payload: e }) => {
                                                (r.disabled = e),
                                                    w({
                                                        parent: n,
                                                        getValues: t,
                                                        setValues: o,
                                                        config: r,
                                                    });
                                            }
                                        ),
                                        e.on(
                                            'prop:draggable',
                                            ({ payload: e }) => {
                                                (r.disabled = !e),
                                                    w({
                                                        parent: n,
                                                        getValues: t,
                                                        setValues: o,
                                                        config: r,
                                                    });
                                            }
                                        );
                                }
                            },
                            e.props.__root
                        );
                });
        } else
            e.props.multiple &&
                'text-input' === e.props.selectionAppearance &&
                rs(e);
    else ps(e);
}
const cs = {
        schema: /* #__PURE__ */ Dr(
            /* #__PURE__ */ Ar(
                /* #__PURE__ */ Er('$label'),
                /* #__PURE__ */ Cr(
                    /* #__PURE__ */ Tr('prefix'),
                    /* #__PURE__ */ Or(),
                    /* #__PURE__ */ Pr(),
                    /* #__PURE__ */ Be(
                        '$multiple !== true && $selectionAppearance === option && $expanded === false',
                        /* #__PURE__ */ Kr(
                            /* #__PURE__ */ Rr(
                                /* #__PURE__ */ Nr(
                                    /* #__PURE__ */ Yr(
                                        /* #__PURE__ */ Be(
                                            '$state.loading',
                                            /* #__PURE__ */ Ur(
                                                '$ui.isLoading.value'
                                            ),
                                            '$option.label'
                                        )
                                    )
                                ),
                                /* #__PURE__ */ Be(
                                    '$state.loading && $isSingleOption !== true && $optionLoaderValues.includes($option.value)',
                                    /* #__PURE__ */ Tr('loader')
                                ),
                                /* #__PURE__ */ Be(
                                    '$selectionRemovable && $isSingleOption',
                                    /* #__PURE__ */ Wr(
                                        /* #__PURE__ */ Tr('close')
                                    )
                                )
                            )
                        )
                    ),
                    /* #__PURE__ */ Be(
                        '$state.loading && ($isSingleOption !== true || $selections.length === 0)',
                        /* #__PURE__ */ Tr('loader')
                    ),
                    /* #__PURE__ */ Be(
                        '$selectionRemovable && $selectionAppearance === "text-input" && $selections.length > 0',
                        /* #__PURE__ */ Wr(/* #__PURE__ */ Tr('close')),
                        /* #__PURE__ */ Be(
                            '$selectionAppearance === "text-input" || ($selectionAppearance === "option" && $multiple)',
                            /* #__PURE__ */ Hr(/* #__PURE__ */ Tr('select'))
                        )
                    ),
                    /* #__PURE__ */ Be(
                        '$isSingleOption && ($inputStd.length === 0 || $selectionRemovable === undefined || ($expanded) || $state.loading || $optionLoaderValues.length > 0)',
                        /* #__PURE__ */ Hr(/* #__PURE__ */ Tr('select'))
                    ),
                    /* #__PURE__ */ jr(),
                    /* #__PURE__ */ Mr(),
                    /* #__PURE__ */ Tr('suffix')
                ),
                /* #__PURE__ */ Be(
                    '$multiple && $selectionAppearance === option',
                    /* #__PURE__ */ Kr(
                        /* #__PURE__ */ Rr(
                            /* #__PURE__ */ Nr(
                                /* #__PURE__ */ Yr(
                                    /* #__PURE__ */ Be(
                                        '$state.loading && $fns.hasOptionLoaderValue($option)',
                                        /* #__PURE__ */ Ur(
                                            '$ui.isLoading.value'
                                        ),
                                        '$option.label'
                                    )
                                )
                            ),
                            /* #__PURE__ */ Wr(/* #__PURE__ */ Tr('close'))
                        )
                    )
                )
            ),
            /* #__PURE__ */ Vr('$help'),
            /* #__PURE__ */ Fr(/* #__PURE__ */ Br('$message.value'))
        ),
        type: 'input',
        family: 'dropdown',
        props: [],
        features: [
            /* #__PURE__ */ g('select', 'select'),
            /* #__PURE__ */ g('close', 'close'),
            /* #__PURE__ */ g('selected', 'check'),
            /* #__PURE__ */ g('loader', 'spinner'),
            /* #__PURE__ */ $('isLoading'),
            /* #__PURE__ */ $('loadMore'),
            /* #__PURE__ */ $('remove'),
            /* #__PURE__ */ $('open'),
            /* #__PURE__ */ $('close'),
            b,
            /* #__PURE__ */ ro.bind(null, qr, zr, ds),
            No,
        ],
    },
    us = /* #__PURE__ */ Me('dp'),
    {
        outer: fs,
        wrapper: vs,
        inner: hs,
        icon: ms,
        label: gs,
        prefix: $s,
        suffix: bs,
        help: ys,
        messages: xs,
        message: ws,
    } = /* #__PURE__ */ Ve(us),
    _s = us('input', () => ({
        $el: 'input',
        bind: '$attrs',
        attrs: {
            name: '$node.name',
            id: '$id',
            onKeydown: '$handlers.inputKeydown',
            value: '$inputText',
            onInput: '$handlers.dateInput',
            onClick: '$pickerOnly && $handlers.open',
            onBlur: '$handlers._blur',
            onFocus: '$handlers.focus',
            readonly: '$pickerOnly || $expanded',
            disabled: '$disabled',
        },
    })),
    ks = us('panelWrapper', () => ({
        $el: 'div',
        if: '$expanded',
        attrs: {
            id: '$id + "_popover"',
            role: 'dialog',
            onBlur: '$handlers._blurOut()',
            tabindex: '-1',
            popover: '$popover',
            'aria-modal': 'true',
            'aria-label': 'Choose date',
            'data-panel': '$panel',
            style: {
                if: '$usePopover',
                then: {
                    margin: 0,
                    top: '$popoverCoordinates.y + "px"',
                    left: '$popoverCoordinates.x + "px"',
                    width: '$popoverCoordinates.width + "px"',
                },
            },
        },
    })),
    Ss = us('next', () => ({
        $el: 'button',
        if: '$showPagination',
        attrs: {
            id: '$id + _next_button',
            type: 'button',
            onClick: '$handlers.next',
        },
    })),
    Ls = us('nextLabel', 'span'),
    Is = us('prev', () => ({
        $el: 'button',
        if: '$showPagination',
        attrs: {
            id: '$id + _prev_button',
            type: 'button',
            onClick: '$handlers.prev',
        },
    })),
    Ds = us('prevLabel', 'span'),
    As = us('calendar', () => ({
        if: '$panel === "day"',
        $el: 'table',
        for: ['month', '$calendar'],
        attrs: { key: '$fns.format($month.monthDay, "YYYY-MM")' },
    })),
    Cs = us('calendarWeeks', () => ({ $el: 'tbody' })),
    Ts = us('calendarHeader', () => ({ $el: 'thead' })),
    Es = us('weekDays', () => ({ $el: 'tr' })),
    Os = us('weekDay', () => ({
        $el: 'th',
        for: ['day', '$month.weeks.0'],
        attrs: { 'aria-label': '$fns.format($day, "dddd")' },
    })),
    Ms = us('week', () => ({
        $el: 'tr',
        for: ['week', 'weekIndex', '$month.weeks'],
    })),
    Vs = us('dayCell', () => ({
        $el: 'td',
        for: ['day', 'dayIndex', '$week'],
        attrs: {
            key: '$day',
            onClick: '$handlers.setDate($day)',
            onKeydown: '$handlers.keyDown',
            onMouseenter: '$handlers.mouseEnter($day)',
            onMouseleave: '$handlers.mouseLeave',
            onBlur: '$handlers._blurOut(day)',
            tabindex: '$fns.sameDay($day) && "0" || "-1"',
            'data-is-extra': '$fns.notInMonth($month.monthDay, $day)',
            'data-disabled': '$fns.isDisabled($day)',
            'aria-selected':
                '$selectedWeek === $weekIndex && $selectedDay === $dayIndex',
            'aria-label': '$fns.format($day, "long")',
        },
    })),
    Fs = us('day', 'div'),
    Bs = us('openButton', () => ({
        $el: 'div',
        attrs: {
            style: '$visibilityStyles',
            id: '$id + "_listbox_button"',
            type: 'div',
            role: 'button',
            onClick: '$handlers.open',
            onKeydown: '$handlers.openKeydown',
            tabIndex: '$pickerOnly && "-1" || "0"',
            'data-disabled': '$disabled',
            'aria-disabled': '$disabled',
            'aria-label':
                '$value && ($ui.changeDate.value + ", " + $inputText) || $ui.chooseDate.value',
            'aria-haspopup': 'true',
            'aria-expanded': '$expanded',
            'aria-controls': '$expanded && $id + "_listbox" || undefined',
        },
    })),
    Ps = us('years', () => ({
        if: '$panel === "year"',
        $el: 'ul',
        attrs: { id: '$id + "_years"' },
    })),
    Hs = us('year', () => ({
        for: ['year', 'yearIndex', '$years'],
        $el: 'li',
        attrs: {
            key: '$: "year" + $fns.format($year, "YYYY")',
            onClick: '$handlers.setDate($year)',
            onKeydown: '$handlers.keyDown',
            onMouseenter: '$handlers.mouseEnter($year)',
            onMouseleave: '$handlers.mouseLeave',
            onBlur: '$handlers._blurOut(year)',
            tabindex: '$fns.sameYear($year) && "0" || "-1"',
            'aria-selected': '$selectedYear === $yearIndex',
            'data-disabled': '$fns.isDisabledYear($year)',
            'aria-label': '$fns.format($year, $yearFormat)',
        },
    })),
    Rs = us('months', () => ({ if: '$panel === "month"', $el: 'ul' })),
    Ns = us('month', () => ({
        $el: 'li',
        for: ['month', 'index', '$months'],
        attrs: {
            key: '$month',
            onClick: '$handlers.setDate($month)',
            onKeydown: '$handlers.keyDown',
            onMouseenter: '$handlers.mouseEnter($month)',
            onMouseleave: '$handlers.mouseLeave',
            onBlur: '$handlers._blurOut(month)',
            tabindex: '$fns.sameMonth($month) && "0" || "-1"',
            'aria-selected': '$selectedMonth === $index',
            'data-disabled': '$fns.isDisabledMonth($month)',
        },
    })),
    Ks = us('panelHeader', () => ({
        $el: 'header',
        attrs: { 'aria-live': 'polite' },
    })),
    Ws = us('yearsHeader', () => ({ $el: 'div', if: '$panel === "year"' })),
    Us = us('monthsHeader', () => ({ $el: 'div', if: '$panel === "month"' })),
    Ys = us('daysHeader', () => ({ $el: 'div', if: '$panel === "day"' })),
    js = us('timeHeader', () => ({ $el: 'div', if: '$panel === "time"' })),
    qs = us('yearButton', () => ({
        $el: 'button',
        attrs: {
            type: 'button',
            id: '$id + _year_button',
            onClick: '$handlers.jumpTo(year)',
        },
        children: '$fns.format($renderedDate, $yearFormat)',
    })),
    zs = us('monthButton', () => ({
        $el: 'button',
        attrs: {
            type: 'button',
            id: '$id + _month_button',
            onClick: '$handlers.jumpTo(month)',
        },
        children: '$fns.format($renderedDate, $monthButtonFormat)',
    })),
    Zs = us('dayButton', () => ({
        $el: 'button',
        attrs: {
            type: 'button',
            id: '$id + _day_button',
            onClick: '$handlers.jumpTo(day)',
            tabindex: '2',
        },
        children: '$fns.format($renderedDate, $dayButtonFormat)',
    })),
    Gs = us('removeSelection', () => ({
        $el: 'button',
        if: '$clearable && $_value',
        attrs: {
            id: '$id + "_remove_selection"',
            type: 'button',
            onClick: '$handlers.clear',
            'aria-controls': '$id',
        },
    })),
    Xs = us('time', () => ({ $el: 'div', if: '$panel === "time"' })),
    Js = us('timeInput', () => ({
        $el: 'input',
        attrs: {
            type: 'time',
            value: '$localTime',
            onInput: '$handlers.localTime',
            onKeydown: '$handlers.keyDown',
            spellcheck: 'false',
            onBlur: '$handlers._blurOut(time)',
        },
    })),
    Qs = us('panelClose', () => ({
        $el: 'button',
        if: '$showPanelClose && ($inline === undefined || $inline === false)',
        attrs: {
            type: 'button',
            class: '$classes.panelClose',
            onClick: '$handlers.closePanel',
            tabindex: -1,
            'aria-label': '$ui.close.value',
        },
    })),
    {
        overlayPlaceholder: ea,
        overlayLiteral: ta,
        overlayChar: oa,
        overlayEnum: na,
        overlay: ra,
        overlayParts: sa,
        overlayInner: aa,
    } = /* #__PURE__ */ Fe(us),
    la = us('panel', 'div'),
    ia = /* #__PURE__ */ new WeakMap(),
    pa = /* #__PURE__ */ new WeakMap(),
    da = new WeakSet(),
    ca = /* #__PURE__ */ new WeakMap(),
    ua = /* #__PURE__ */ new WeakMap(),
    fa = new WeakSet(),
    va = /* #__PURE__ */ new WeakMap(),
    ha = /[\uD800-\uDBFF]/,
    ma = /* #__PURE__ */ new WeakMap(),
    ga = /* #__PURE__ */ new WeakMap(),
    $a = /* #__PURE__ */ new WeakMap(),
    ba = /* #__PURE__ */ new WeakMap(),
    ya = /* #__PURE__ */ new WeakMap(),
    xa = new WeakSet(),
    wa = /* #__PURE__ */ new WeakMap(),
    _a = /* #__PURE__ */ new WeakMap(),
    ka = /* #__PURE__ */ new WeakMap(),
    Sa = /* #__PURE__ */ new WeakMap();
let La = !1;
const Ia = () => {
        (La = !0),
            setTimeout(() => {
                La = !1;
            }, 500);
    },
    Da = {
        '#': {
            type: 'char',
            pattern: /\d/,
            token: '#',
            placeholder: '_',
            selectDirection: 'right',
        },
        a: {
            type: 'char',
            pattern: /[a-zA-Z]/,
            token: 'a',
            placeholder: '_',
            selectDirection: 'left',
        },
        h: {
            type: 'char',
            pattern: /[0-9a-fA-F]/,
            token: 'h',
            placeholder: '_',
            selectDirection: 'left',
        },
        '*': {
            type: 'char',
            pattern: /./,
            token: '*',
            placeholder: '_',
            selectDirection: 'left',
        },
    },
    Aa = /* #__PURE__ */ new WeakMap(),
    Ca = 'undefined' != typeof window;
let Ta = !1,
    Ea = !1;
function Oa() {
    Ca &&
        !Ea &&
        ((Ea = !0),
        document.addEventListener('selectionchange', () => {
            const e = mt();
            if (!(e instanceof HTMLInputElement)) return;
            if (Sa.has(e))
                return (function (e) {
                    const t = Sa.get(e);
                    if (t) {
                        const [o, n] = t,
                            [r, s] = gl(e),
                            a = s.indexOf(o);
                        if (-1 === a) return void Sa.delete(e);
                        const l = r[a],
                            i = [l[0] + n[0], l[1], 'none'];
                        Ya(ja(e), i) || Ja(e, i);
                    }
                })(e);
            if ('select' !== va.get(e)) return;
            const t = ja(e);
            if (!Ya(t, Aa.get(e))) {
                if ((Aa.set(e, t), da.has(e))) return da.delete(e);
                e.dispatchEvent(
                    new CustomEvent('selection', { detail: ja(e) })
                );
            }
        }));
}
function Ma(e, t, o) {
    var n;
    if ((Oa(), ia.has(e))) return;
    ia.set(e, []),
        t.reverse && xa.add(e),
        t.prefix && wa.set(e, t.prefix),
        t.suffix && _a.set(e, t.suffix),
        Ha(e, t.pattern, t.partOverrides, t.explicitParts);
    const r = ua.get(e),
        s = null == r ? void 0 : r.some((e) => Ka(e)),
        a =
            null == r
                ? void 0
                : r.some((e) =>
                      (function (e) {
                          return (
                              !!e &&
                              'group' === e.type &&
                              Array.isArray(e.parts)
                          );
                      })(e)
                  );
    if (s && a)
        throw new Error('Cannot use enums and groups in the same mask.');
    const l = s
        ? 'select'
        : null !== (n = t.mode) && void 0 !== n
          ? n
          : 'shift';
    if (a && 'select' === l)
        throw new Error('Cannot use groups in select mode.');
    (t.placeholder || 'select' === l) && fa.add(e),
        va.set(e, l),
        t.onChange && ba.set(e, t.onChange);
    let i = !1;
    e.addEventListener('beforeinput', (o) => {
        if (Ta) return;
        if ('insertLineBreak' === o.inputType) return;
        if (o.inputType.startsWith('history'))
            return (function (e, t) {
                e.addEventListener(
                    'input',
                    (o) => {
                        var n;
                        o.preventDefault(), o.stopImmediatePropagation();
                        const r = ia.get(e);
                        if (null == r ? void 0 : r.length) {
                            const o =
                                    (null !== (n = pa.get(e)) && void 0 !== n
                                        ? n
                                        : r.length - 1) +
                                    (t.endsWith('Undo') ? -1 : 1),
                                s = r[o];
                            if (!s) return;
                            Qa(e, s),
                                e.setSelectionRange(...s.selectionAfter),
                                pa.set(e, o),
                                ba.has(e) && ba.get(e)(s, e);
                        }
                    },
                    { once: !0 }
                );
            })(e, o.inputType);
        o.preventDefault(), (i = !0);
        const n = (r = o.inputType).startsWith('insert')
            ? 'insert'
            : !!r.startsWith('delete') &&
              ('deleteContentForward' === r
                  ? 'deleteContentForward'
                  : 'deleteContentBackward');
        var r;
        const s = ja(e),
            a = e.value;
        n &&
            qa(e, {
                type: n,
                selectionBefore: s,
                data: o.data,
                valueBefore: a,
                suffix: t.suffix,
                prefix: t.prefix,
            });
    }),
        e.addEventListener('input', (t) => {
            (i = !1),
                'data' in t ||
                    (!i &&
                        o &&
                        (o.input(e.value, !1), (o.props._maskValue = e.value)));
        }),
        'select' === l &&
            e.addEventListener('keydown', (t) => {
                switch (t.key) {
                    case 'ArrowRight':
                        return t.preventDefault(), wl(e);
                    case 'ArrowLeft':
                        return t.preventDefault(), wl(e, -1);
                    case 'ArrowUp':
                        return void (_l(e, 1) && t.preventDefault());
                    case 'ArrowDown':
                        return void (_l(e, -1) && t.preventDefault());
                    case 'Tab':
                        return La
                            ? void t.preventDefault()
                            : void (
                                  wl(e, t.shiftKey ? -1 : 1) &&
                                  t.preventDefault()
                              );
                }
            }),
        e.addEventListener('focus', () =>
            (function (e) {
                var t;
                const o = fa.has(e),
                    n = va.get(e);
                if (o) {
                    let o = null,
                        r = null,
                        s = !1;
                    const a = 'shift' === n ? 0 : 1,
                        l = e.value;
                    pl(
                        e,
                        {
                            type: 'insert',
                            data: l,
                            selectionBefore: [0, 0, 'none'],
                            valueBefore: l,
                        },
                        'shift' === n ? '' : l,
                        (e, t) => (
                            null === o && 'char' === t.type && (o = e.pos - a),
                            (Na(t) || Ka(t)) && e.value.endsWith(t.placeholder)
                                ? ((r = e.pos - a), !1)
                                : ('char' === t.type && (s = !0), !0)
                        )
                    );
                    const i =
                        null !== (t = null != r ? r : s ? l.length : o) &&
                        void 0 !== t
                            ? t
                            : null;
                    if (null !== i) {
                        let t = [i, i, 'none'];
                        if ('select' === va.get(e)) {
                            const [o] = gl(e),
                                n = Sl(e, t);
                            void 0 !== n && n in o && (t = o[n]);
                        }
                        return (function (e, t, o = 50) {
                            ma.set(e, Za(e, t));
                            const n = async () => {
                                if (!Ca || mt() !== e) return;
                                'select' === va.get(e) &&
                                    (await new Promise((e) =>
                                        setTimeout(e, 10)
                                    ),
                                    (function (e) {
                                        let t = ja(e);
                                        if (
                                            (t[0] === t[1] && 0 === t[0]) ||
                                            (e.value.length === t[1] &&
                                                0 === t[0])
                                        )
                                            return;
                                        t = Ga(e, t);
                                        const [o] = gl(e),
                                            n = Sl(e, t),
                                            r = t[0];
                                        void 0 !== n &&
                                            o.some(
                                                (e) => r >= e[0] && r < e[1]
                                            ) &&
                                            ma.set(e, Za(e, o[n]));
                                    })(e));
                                const t = ma.get(e);
                                t && e.setSelectionRange(...t);
                            };
                            n(),
                                document.addEventListener('selectionchange', n),
                                setTimeout(() => {
                                    document.removeEventListener(
                                        'selectionchange',
                                        n
                                    ),
                                        ma.delete(e);
                                }, o);
                        })(e, t);
                    }
                }
            })(e)
        ),
        e.addEventListener('selection', (t) =>
            (function (e, t) {
                if (ma.get(e)) return;
                Cl(e), (t = Ga(e, t));
                const [o] = gl(e),
                    n = Sl(e, t),
                    r = void 0 !== n && Za(e, o[n]);
                r && !Ya(t, r) && Ja(e, r, !0);
            })(e, t.detail)
        ),
        qa(e, {
            type: 'insert',
            selectionBefore: [0, 0, 'forward'],
            data: e.value,
            valueBefore: '',
            suffix: t.suffix,
            prefix: t.prefix,
        });
}
function Va(e) {
    var t, o;
    if (Sa.has(e)) return;
    const n = null !== (t = ia.get(e)) && void 0 !== t ? t : [],
        r = n[null !== (o = pa.get(e)) && void 0 !== o ? o : n.length - 1];
    if (r) {
        const t = r.selectionAfter,
            [o, n] = gl(e, r.valueAfter),
            s = Sl(e, t, [o, n]);
        if (void 0 !== s && s in o) {
            const r = n[s],
                a = o[s],
                l = [t[0] - a[0], t[1] - a[0], 'none'];
            Sa.set(e, [r, l]);
        }
    }
}
function Fa(e) {
    Sa.delete(e);
}
function Ba(e, t, o) {
    const n = 'string' == typeof e || !ia.has(e),
        r = 'string' == typeof e ? Pa(e) : e;
    if (n)
        t.prefix && wa.set(r, t.prefix),
            t.suffix && _a.set(r, t.suffix),
            (r.value = za(r, r.value)),
            Ma(r, t, o);
    else {
        const e = Ll(r),
            o = r.value;
        (r.value = ''),
            qa(r, {
                type: 'insert',
                selectionBefore: [0, e ? e.valueAfter.length : 0, 'none'],
                valueBefore: e ? e.valueAfter : '',
                data: o,
                suffix: t.suffix,
                prefix: t.prefix,
            });
    }
    return r.value;
}
function Pa(e) {
    return {
        value: e,
        selectionStart: 0,
        selectionEnd: 0,
        scrollWidth: 0,
        clientWidth: 0,
        addEventListener: () => {},
        dispatchEvent: () => {},
        setSelectionRange: () => {},
    };
}
function Ha(e, t, o, n, r) {
    r = (e && xa.has(e)) || r;
    const s = (
        null != n
            ? n
            : (function (e) {
                  const t = Object.values(Da);
                  if (!e) return t;
                  const o = { ...e },
                      n = [];
                  for (const r of t)
                      if (!Ua(r))
                          if ('token' in r && r.token in e) {
                              const t = { ...r, ...e[r.token] };
                              Ra(t) && n.push(t), delete o[r.token];
                          } else n.push(r);
                  const r = Object.values(o);
                  for (const e of r)
                      Ra(e)
                          ? n.push(e)
                          : console.warn(`Invalid ${e.type} token`, e);
                  return n;
              })(o)
    ).sort((e, t) => {
        const o = 'token' in e ? e.token.length : -1,
            n = 'token' in t ? t.token.length : -1;
        return o === n ? 0 : o > n ? -1 : 1;
    });
    let a = [];
    [t, a] = (function (e, t, o, n) {
        let r,
            s = 0,
            a = '',
            l = '',
            i = '';
        const p = [];
        for (; (a = el(e)); )
            a === t && r !== n
                ? (s++, s > 1 && (i += a))
                : a === o && s && r !== n
                  ? (s--,
                    0 === s
                        ? ((l += `{$${p.length}}`), p.push(i), (i = ''))
                        : (i += a))
                  : s
                    ? (i += a)
                    : r !== n || (a !== t && a !== o)
                      ? (l += a)
                      : (l = `${l.substring(0, l.length - 1)}${a}`),
                (r = a),
                (e = e.substring(a.length));
        return [l, p];
    })(t, '{', '}', '\\');
    const l = a.length;
    t = s.reduce(
        (e, t, o) =>
            'token' in t
                ? e
                      .replaceAll(`\\${t.token}`, '{“!”}')
                      .replaceAll(t.token, `{$${l + o}}`)
                      .replaceAll('{“!”}', t.token)
                : e,
        t
    );
    const i = (function (e, t, o) {
            return e.reduce((e, n) => {
                const [r, s] = (function (e) {
                    const [t, ...o] = e.split('|'),
                        n = o.reduce((e, t) => {
                            const [o, n = !0] = t.split(':');
                            return Object.assign(e, { [o]: n });
                        }, {});
                    return [t, n];
                })(n);
                let a = Ha(null, r, void 0, t, o);
                a = a.map((e) => {
                    const t = { ...e };
                    if ('char' === t.type && s.placeholder)
                        t.placeholder = s.placeholder;
                    else if ('enum' === t.type)
                        throw new Error('Groups cannot contain enums.');
                    return t;
                });
                const l = { type: 'group', parts: a, ...s };
                return e.push(l), e;
            }, []);
        })(a, s, r).concat(s),
        p = /\{\$\d+\}/g,
        d = t.match(p),
        c = t.split(p).reduce((e, t, o) => {
            if (
                (t &&
                    ((t = t.replaceAll('\\', '')),
                    e.push({
                        type: 'literal',
                        value: r ? [...t].reverse().join('') : t,
                    })),
                d && d[o])
            ) {
                const t = d[o],
                    n = Number(t.substring(2, t.length - 1));
                !isNaN(n) && i[n] && e.push(i[n]);
            }
            return e;
        }, []);
    return r && c.reverse(), e && ua.set(e, c), c;
}
function Ra(e) {
    return !!e && (Ua(e) || Na(e) || Ka(e));
}
function Na(e) {
    return !!e && 'char' === e.type && e.pattern instanceof RegExp && Wa(e);
}
function Ka(e) {
    return !!e && 'enum' === e.type && Array.isArray(e.values) && Wa(e);
}
function Wa(e) {
    return !!e && 'placeholder' in e && 'token' in e;
}
function Ua(e) {
    return !!e && 'literal' === e.type && 'string' == typeof e.value;
}
function Ya(e, t) {
    return (
        e === t ||
        (void 0 !== e && void 0 !== t && e[0] === t[0] && e[1] === t[1])
    );
}
function ja(e) {
    var t, o;
    return [
        null !== (t = e.selectionStart) && void 0 !== t ? t : e.value.length,
        null !== (o = e.selectionEnd) && void 0 !== o ? o : e.value.length,
        'none',
    ];
}
function qa(e, t) {
    var o;
    xa.has(e) && Al(t);
    let n = !1;
    switch ((ya.set(e, 'playing'), t.type)) {
        case 'insert':
            n = (function (e, t) {
                let o = Xa(t);
                const n = t.selectionBefore,
                    r = (function (e, t) {
                        var o, n, r;
                        if ('select' === va.get(e)) {
                            const [s, a] = gl(e),
                                l = s.findIndex((e) =>
                                    Ya(e, t.selectionBefore)
                                ),
                                i =
                                    null !== (o = a[l]) && void 0 !== o
                                        ? o
                                        : null;
                            if (Na(i)) {
                                const e = t.selectionBefore,
                                    o = e[1] - e[0],
                                    s = t.valueBefore.substring(e[0], e[1]),
                                    a = 'left' === i.selectDirection,
                                    l = ll(s, i),
                                    p = a
                                        ? 0
                                        : (function (e, t, o) {
                                              if (!e) return 0;
                                              let n = '';
                                              for (; e.length; ) {
                                                  const o = el(e);
                                                  (e = e.substring(o.length)),
                                                      t.pattern.test(o) &&
                                                          (n += o);
                                              }
                                              return Math.min(
                                                  Math.max(n.length, 1),
                                                  o
                                              );
                                          })(t.data, i, o);
                                if (l.length >= o)
                                    return (
                                        a || (t.insertPos = e[1] - p),
                                        (null !== (n = i.selectFill) &&
                                        void 0 !== n
                                            ? n
                                            : i.placeholder
                                        ).repeat(o)
                                    );
                                const d = (
                                    null !== (r = i.selectFill) && void 0 !== r
                                        ? r
                                        : i.placeholder
                                ).repeat(o - l.length - (a ? 0 : p));
                                return (
                                    (t.insertPos = a
                                        ? e[0] + l.length
                                        : e[1] - p),
                                    'left' === i.selectDirection
                                        ? `${l}${d}`
                                        : `${d}${l}${i.placeholder}`
                                );
                            }
                            if (Ka(i)) {
                                const e = t.selectionBefore;
                                return t.valueBefore.substring(e[0], e[1]);
                            }
                        }
                        return '';
                    })(e, t);
                o = `${o.substring(0, n[0])}${r}${o.substring(n[1])}`;
                const s = pl(e, t, o);
                return (
                    ca.set(e, s.endPos),
                    {
                        ...t,
                        valueAfter: s.value,
                        selectionAfter: il(e, s),
                        unmasked: s.unmasked,
                        complete: s.complete,
                        meta: s.meta,
                    }
                );
            })(e, t);
            break;
        case 'deleteContentBackward':
        case 'deleteContentForward':
            n = (function (e, t) {
                const o = Xa(t),
                    n = t.selectionBefore,
                    r = xa.has(e);
                let s = n[0],
                    a = n[1];
                s === a &&
                    ('deleteContentBackward' !== t.type || r
                        ? (a += tl(o, s))
                        : (s -= tl(o, s, 'backward')));
                const l = va.get(e);
                let i = '';
                if ('select' === l) {
                    const [o, n] = gl(e),
                        r = Sl(e, [s, a, 'none']);
                    if (void 0 !== r) {
                        const l = n[r],
                            p = o[r];
                        Na(l)
                            ? (i = l.placeholder.repeat(a - s))
                            : Ka(l) &&
                              ([i, s] = Ya(p, ja(e))
                                  ? [l.placeholder, s]
                                  : (function (e, t, o, n) {
                                        const r = n.valueBefore,
                                            s = tl(
                                                r,
                                                n.selectionBefore[0],
                                                'backward'
                                            ),
                                            a = Math.max(
                                                o[0],
                                                n.selectionBefore[0] - s
                                            ),
                                            l = r.substring(o[0], a),
                                            i = bl(t.values, l);
                                        let p =
                                            null == i
                                                ? void 0
                                                : i.substring(l.length);
                                        i && !p && yl(t.values, i) && (p = i);
                                        return [
                                            null != p ? p : t.placeholder,
                                            p ? a : o[0],
                                        ];
                                    })(0, l, p, t));
                    }
                }
                const p = `${o.substring(0, s)}${i}${o.substring(a)}`,
                    d = pl(e, t, p);
                return {
                    ...t,
                    valueAfter: d.value,
                    selectionAfter: vl(e, d, t, s),
                    unmasked: d.unmasked,
                    complete: d.complete,
                    meta: d.meta,
                };
            })(e, t);
    }
    if (
        (xa.has(e) && n && Al(n),
        n &&
            (function (e, t) {
                t.prefix &&
                    ((t.valueAfter = t.prefix + t.valueAfter),
                    (t.selectionAfter = Za(e, t.selectionAfter)));
                t.suffix && (t.valueAfter += t.suffix);
            })(e, n),
        n &&
            (function (e) {
                return (
                    e.valueBefore !== e.valueAfter ||
                    e.selectionBefore[0] !== e.selectionAfter[0] ||
                    e.selectionBefore[1] !== e.selectionAfter[1]
                );
            })(n))
    ) {
        ba.has(e) &&
            ka.set(e, () => {
                ka.delete(e), n && ba.get(e)(n, e);
            }),
            ya.set(e, 'beforeCallback');
        let t = null !== (o = ia.get(e)) && void 0 !== o ? o : [];
        const r = pa.get(e);
        r && ((t = t.slice(0, r)), pa.delete(e)),
            t.push(n),
            ia.set(e, t),
            Ca && mt() === e && 'function' == typeof document.execCommand && !Ta
                ? (Ja(e, [0, e.value.length, 'forward'], !0),
                  (Ta = !0),
                  document.execCommand('insertText', void 0, n.valueAfter),
                  (Ta = !1))
                : Qa(e, n),
            Ca && mt() === e && Ja(e, n.selectionAfter);
        const s = ka.get(e);
        s && s(), Cl(e);
    }
    ya.set(e, 'complete');
}
function za(e, t) {
    var o, n;
    const r = null !== (o = wa.get(e)) && void 0 !== o ? o : '',
        s = null !== (n = _a.get(e)) && void 0 !== n ? n : '';
    return (
        r && t.startsWith(r) && (t = t.substring(r.length)),
        s && t.endsWith(s) && (t = t.substring(0, t.length - s.length)),
        t
    );
}
function Za(e, t) {
    const o = wa.get(e),
        n = [...t];
    return o && ((n[0] += o.length), (n[1] += o.length)), n;
}
function Ga(e, t) {
    const o = wa.get(e),
        n = [...t];
    return o && ((n[0] -= o.length), (n[1] -= o.length)), n;
}
function Xa(e) {
    let t = e.valueBefore;
    const o = e.selectionBefore;
    if (
        (e.suffix &&
            t.endsWith(e.suffix) &&
            ((t = t.substring(0, t.length - e.suffix.length)),
            (e.valueBefore = t),
            o[0] >= t.length && (o[0] = t.length),
            o[1] >= t.length && (o[1] = t.length)),
        e.prefix && t.startsWith(e.prefix))
    ) {
        const n = e.prefix.length;
        (t = t.substring(n)),
            (e.valueBefore = t),
            (o[0] = Math.max(o[0] - n, 0)),
            (o[1] = Math.max(o[1] - n, 0));
    }
    return t;
}
function Ja(e, t, o = !1) {
    o && (da.add(e), setTimeout(() => da.delete(e), 5)),
        ma.get(e) && ma.set(e, t),
        e.setSelectionRange(...t);
}
function Qa(e, t, o = 'After') {
    if (((e.value = t[`value${o}`]), Ca)) {
        const o = new InputEvent('input', {
            inputType: 'insert' === t.type ? 'insertText' : t.type,
            data: t.data,
        });
        e.dispatchEvent(o);
    }
}
function el(e) {
    if (null == e) return '';
    const t = ha.test(e.charAt(0)) && ha.test(e.charAt(1)) ? 2 : 1;
    return e.substring(0, t);
}
function tl(e, t, o = 'forward') {
    if ('backward' === o)
        return 0 === t
            ? 0
            : 1 === t
              ? 1
              : ha.test(e.charAt(t)) && ha.test(e.charAt(t - 1))
                ? 2
                : 1;
    const n = e.length - t;
    return 0 === n ? 0 : 1 === n ? 1 : el(e.substring(t)).length;
}
function ol(e, t) {
    const o = el(e.data),
        n = o.length;
    if (
        ((e.value += o),
        (e.pos += n),
        'string' == typeof e.data &&
            ((e.data = e.data.substring(n)),
            e.data.length || (e.endPos = e.pos)),
        t)
    )
        return t.substring(n);
}
function nl(e) {
    const t = el(e.buffer),
        o = t.length;
    (e.value += t), (e.pos += o), (e.buffer = e.buffer.substring(o));
}
function rl(e, t) {
    const o = el(t),
        n = o.length;
    return (e.value += o), (e.pos += n), t.substring(n);
}
function sl(e, t) {
    for (; t.buffer; ) {
        const o = el(t.buffer);
        if (e.pattern.test(o) || (t.placeholder && e.placeholder === o))
            return void (
                ('replace' !== t.mode && 'select' !== t.mode) ||
                (t.buffer = t.buffer.substring(o.length))
            );
        t.buffer = t.buffer.substring(o.length);
    }
}
function al(e, t) {
    const o = e.values
        .concat([e.placeholder])
        .map((e) => e.toLowerCase())
        .sort((e, t) => (e.length > t.length ? -1 : 1));
    for (; t.buffer; ) {
        const e = t.buffer.toLowerCase(),
            n = o.find((t) => e.startsWith(t));
        if (n) {
            const e = t.buffer.substring(0, n.length);
            return (t.buffer = t.buffer.substring(n.length)), e;
        }
        t.buffer = t.buffer.substring(tl(t.buffer, 0));
    }
    return null;
}
function ll(e, t) {
    let o = e.replaceAll(t.placeholder, '');
    const n = 'left' === t.selectDirection;
    if (t.selectFill) {
        const e = new RegExp(
            `${n ? '' : '^'}${((r = t.selectFill), r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'))}+${n ? '$' : ''}`
        );
        o = o.replace(e, '');
    }
    var r;
    return o;
}
function il(e, t) {
    let o = [t.endPos, t.endPos, 'forward'];
    if ('select' !== t.mode) return o;
    const n = ja(e);
    o = [n[0], t.endPos, 'none'];
    const [r, s] = gl(e, t.value),
        a = Sl(e, o, [r, s]);
    if (void 0 === a) return o;
    if (!(a in r) || !(a in s)) return o;
    const l = r[a],
        i = s[a],
        p = t.value.slice(l[0], l[1]);
    if (Na(i) && ll(p, i).length === p.length && a < r.length - 1)
        return Ia(), r[a + 1];
    if (Ka(i) && t.insertPos >= l[0] && t.insertPos <= l[1]) {
        if (t.cycle) return l;
        const o = (function (e, t, o) {
            if (null === e.originalData) return 0;
            const n = e.insertPos >= t ? e.value.substring(t, e.insertPos) : '',
                r = `${n}${e.originalData}`,
                s = bl(o.values, r);
            if (s) return ml(r, s).length - n.length;
            return 0;
        })(t, l[0], i);
        if (t.insertPos + o === l[1])
            return yl(i.values, p)
                ? [l[1], l[1], 'forward']
                : (Ia(), r[a + 1] ? r[a + 1] : r[a]);
        const s = [t.insertPos + o, l[1], 'none'];
        return Ya(s, n) || (da.add(e), setTimeout(() => da.delete(e), 5)), s;
    }
    return l;
}
function pl(e, t, o, n) {
    var r, s;
    const a = null !== (r = ua.get(e)) && void 0 !== r ? r : [],
        l = {
            pos: 0,
            insertPos:
                null !== (s = t.insertPos) && void 0 !== s
                    ? s
                    : t.selectionBefore[0],
            range: t.selectionBefore,
            chars: 0,
            placeholder: fa.has(e),
            buffer: o,
            data: t.data,
            originalData: t.data,
            value: '',
            mode: va.get(e) || 'replace',
            endPos: t.selectionBefore[0],
            rangeParts: gl(e),
            unmasked: '',
            complete: !0,
            cycle: t.cycle,
            meta: [],
        };
    return dl(a, l, void 0, n), l;
}
function dl(e, t, o, n) {
    var r, s;
    const a = { ...t };
    (null == o ? void 0 : o.placeholder) && (t.placeholder = !0);
    const l =
        (null == o ? void 0 : o.repeat) &&
        'literal' ===
            (null === (r = o.nextPart) || void 0 === r ? void 0 : r.type)
            ? o.nextPart.value
            : null;
    let i = 0;
    const p = e.reduce((e, t) => e + ('char' === t.type ? 1 : 0), 0),
        d = t.chars;
    for (const o of e) {
        const r = e[i + 1];
        switch (o.type) {
            case 'literal':
                ul(o, t, e.at(-1) === o);
                break;
            case 'char':
                fl(o, t, l);
                break;
            case 'enum':
                cl(o, t);
                break;
            case 'group':
                const a = {
                    repeat: null !== (s = o.repeat) && void 0 !== s && s,
                    nextPart: r,
                    repeats: 0,
                    placeholder: !!o.placeholder,
                };
                dl(o.parts, t, a, n);
        }
        if (n) {
            if (!1 === n(t, o)) break;
        }
        const a = Ua(r) && i + 2 === e.length && d !== t.chars;
        if (!(t.buffer || t.data || t.placeholder || a)) break;
        i++;
    }
    if ((t.chars < p && (t.complete = !1), o)) {
        const r = t.chars - d,
            s = r === p,
            i = !(
                !t.data ||
                (l && t.data.startsWith(l) && t.insertPos <= t.pos)
            ),
            c =
                !(
                    t.buffer &&
                    l &&
                    t.buffer.startsWith(l) &&
                    t.insertPos >= t.pos + l.length
                ) &&
                (t.buffer || i);
        if (o.repeat && c && s) return o.repeats++, dl(e, t, o, n);
        if (!s) {
            t.complete = !1;
            const o = e.reverse().find((e) => 'literal' === e.type);
            e.reverse(),
                Ua(o) &&
                    t.value.endsWith(o.value) &&
                    ((t.value = t.value.substring(
                        0,
                        t.value.length - o.value.length
                    )),
                    (t.pos = t.value.length));
        }
        p > 1 && r < p && 0 !== r && t.insertPos <= t.pos
            ? (t.data = '')
            : o.repeat && !s && o.repeats && Object.assign(t, a);
    }
    t.placeholder = a.placeholder;
}
function cl(e, t) {
    const [o, n] = t.rangeParts,
        r = o[n.indexOf(e)];
    if (
        r &&
        (t.insertPos <= t.pos ||
            (t.insertPos >= r[0] && t.insertPos <= r[1])) &&
        t.data
    ) {
        const o = t.buffer.substring(0, t.insertPos - t.pos),
            n = `${o}${t.data}`,
            r = bl(e.values.concat([e.placeholder]), n);
        if (r) {
            const s = ml(n, r);
            return (
                (t.data = t.data.substring(s.length)),
                (t.value += r),
                r !== e.placeholder ? (t.unmasked += r) : (t.complete = !1),
                t.meta.push({
                    type: r !== e.placeholder ? 'enum' : 'placeholder',
                    value: r,
                }),
                o ? (t.buffer = t.buffer.substring(o.length)) : al(e, t),
                (t.endPos = t.pos + s.length),
                void (t.pos = t.value.length)
            );
        }
        t.data = '';
    }
    if (t.buffer) {
        const o = al(e, t);
        if (o)
            return (
                (t.value += o),
                o !== e.placeholder ? (t.unmasked += o) : (t.complete = !1),
                t.meta.push({
                    type: o !== e.placeholder ? 'enum' : 'placeholder',
                    value: o,
                }),
                void (t.pos = t.value.length)
            );
    }
    (t.complete = !1),
        (t.value += e.placeholder),
        t.meta.push({ type: 'placeholder', value: e.placeholder }),
        (t.pos = t.value.length);
}
function ul(e, t, o) {
    let n = e.value;
    if ('' === t.data && !t.buffer && !t.placeholder && !o) return;
    let r = !1;
    for (; n; ) {
        const e = t.insertPos <= t.pos ? el(t.data) : '',
            s = el(n);
        if (e === s)
            (n = ol(t, n)),
                t.meta.push({ type: 'literal', value: s }),
                (r = !0);
        else if (!r || t.data || null === t.data || t.placeholder || o)
            (n = rl(t, n)), t.meta.push({ type: 'literal', value: s });
        else if (r && !t.data) break;
        t.buffer.startsWith(s) && (t.buffer = t.buffer.substring(s.length));
    }
    null === t.data &&
        !t.buffer &&
        t.insertPos <= t.pos &&
        !t.placeholder &&
        ((t.value = t.value.substring(0, t.value.length - e.value.length)),
        (t.pos = t.endPos = t.value.length));
}
function fl(e, t, o) {
    var n;
    let r = !0;
    if (t.insertPos <= t.pos)
        for (; null === (n = t.data) || void 0 === n ? void 0 : n.length; ) {
            const n = el(t.data);
            if (e.pattern.test(n))
                return (
                    ol(t),
                    t.meta.push({ type: 'char', value: n }),
                    t.chars++,
                    (t.unmasked += n),
                    void sl(e, t)
                );
            if ('string' == typeof t.data) {
                if (o && t.data.startsWith(o)) {
                    r = !1;
                    break;
                }
                t.data = t.data.substring(n.length);
            }
        }
    for (; r && t.buffer; ) {
        const n = el(t.buffer);
        if (e.pattern.test(n))
            return (
                t.chars++,
                (t.unmasked += n),
                nl(t),
                void t.meta.push({ type: 'char', value: n })
            );
        if (t.placeholder && n === e.placeholder)
            return nl(t), void t.meta.push({ type: 'placeholder', value: n });
        if ('string' == typeof t.buffer) {
            if (o && t.buffer.startsWith(o)) {
                t.buffer = t.buffer.substring(o.length);
                break;
            }
            t.buffer = t.buffer.substring(n.length);
        }
    }
    t.placeholder
        ? ((t.value += e.placeholder),
          t.meta.push({ type: 'placeholder', value: e.placeholder }))
        : (t.endPos = t.pos);
}
function vl(e, t, o, n) {
    const r = [n, n, 'none'];
    if ('select' === t.mode) {
        const s = gl(e),
            a = Sl(e, r, s),
            [l, i] = gl(e, t.value),
            p = void 0 !== a && hl(o.valueBefore, s[0][a], s[1][a]);
        if (void 0 !== a && a in l) {
            if (p) {
                const e = l.slice(a).every((e, o) => hl(t.value, e, i[a + o]));
                return e && l[a - 1] ? l[a - 1] : l[a];
            }
            return [n, l[a][1], 'none'];
        }
    }
    return r;
}
function hl(e, t, o) {
    if (Ua(o)) return !1;
    if (Na(o)) {
        let n = t[0];
        for (; n < t[1]; ) {
            const t = el(e.substring(n));
            if (t !== o.placeholder) return !1;
            n += t.length;
        }
    }
    return !Ka(o) || e.substring(t[0], t[1]) === o.placeholder;
}
function ml(e, t) {
    let o = '';
    do {
        const n = el(e).toLowerCase(),
            r = el(t).toLowerCase();
        if (n !== r) break;
        (o += n), (e = e.substring(n.length)), (t = t.substring(r.length));
    } while (e.length && t.length);
    return o;
}
function gl(e, t) {
    const o = ua.get(e);
    if (!o) return [[], []];
    if (ga.has(e)) return ga.get(e);
    const n = null != t ? t : za(e, e.value),
        r = [],
        s = [];
    let a = null,
        l = null,
        i = 0,
        p = !0;
    for (const e of o)
        if (Ua(e))
            (a = e),
                null !== l && (r.push([l, i, 'none']), (l = null)),
                (i += e.value.length);
        else {
            if (Na(a) && Na(e) && e.token === a.token) i++;
            else if (Na(e))
                null === l
                    ? ((l = i), s.push(e))
                    : (r.push([l, i, 'none']), (l = i), s.push(e)),
                    i++;
            else if (Ka(e)) {
                l && r.push([l, i, 'none']), xl(e) || (p = !1);
                const t = $l(n, e, i);
                (l = null), r.push([i, i + t, 'none']), s.push(e), (i += t);
            }
            a = e;
        }
    null !== l && r.push([l, i, 'none']);
    const d = [[...r], [...s]];
    return p && !t && ga.set(e, d), d;
}
function $l(e, t, o) {
    if (xl(t)) return t.values[0].length;
    const n = e.slice(o),
        r = bl(t.values.concat([t.placeholder]), n);
    return r ? r.length : 0;
}
function bl(e, t, o = null, n) {
    var r;
    if (0 === t.length) return o;
    if (!n) {
        const o = e.find((e) => e.toLowerCase() === t.toLowerCase());
        if (o) return o;
    }
    const s = el(t.toLowerCase()),
        a = `${null != n ? n : ''}${s}`,
        l = e.filter((e) => e.toLowerCase().startsWith(a)),
        i = l.find((e) => e.toLowerCase() === a);
    return (
        i && (o = i),
        0 === l.length
            ? o
            : 1 === l.length
              ? l[0]
              : (l.length > 1 && (o = l[0]),
                null !== (r = bl(l, t.substring(s.length), o, a)) &&
                void 0 !== r
                    ? r
                    : l[0])
    );
}
function yl(e, t) {
    return (
        (t = t.toLowerCase()),
        e.some(
            (e) =>
                (e = e.toLowerCase()).startsWith(t.toLocaleLowerCase()) &&
                e !== t
        )
    );
}
function xl(e) {
    if (!$a.has(e) && Array.isArray(e.values) && e.values.length > 0) {
        const t = e.values[0].length;
        if (e.placeholder.length !== t) return !1;
        $a.set(
            e,
            e.values.every((e) => e.length === t)
        );
    }
    return $a.get(e);
}
function wl(e, t = 1) {
    const [o] = gl(e),
        n = Sl(e, Ga(e, ja(e)));
    return (
        void 0 !== n &&
        void 0 !== o[n + t] &&
        (e.setSelectionRange(...Za(e, o[n + t])), !0)
    );
}
function _l(e, t = 1) {
    const [o, n] = gl(e),
        r = Sl(e, ja(e));
    if (void 0 !== r && r in n) {
        const s = n[r];
        if (Ka(s)) {
            const n = o[r],
                a = e.value.slice(n[0], n[1]);
            let l = null,
                i = s.values.indexOf(a);
            const p = s.values.length - 1;
            if (-1 !== i) {
                const e = i + t;
                (i = e < 0 ? p : e > p ? 0 : e), (l = s.values[i]);
            } else
                a === s.placeholder && (l = t > 0 ? s.values[0] : s.values[p]);
            if (null !== l) {
                const t = {
                    selectionBefore: n,
                    insertPos: n[0],
                    type: 'insert',
                    data: l,
                    valueBefore: e.value,
                    cycle: !0,
                };
                return setTimeout(() => qa(e, t), 0), !0;
            }
        }
    }
    return !1;
}
function kl(e, t) {
    if (!e.length) return -1;
    if (1 === e.length) return e[0];
    const o = e.length / 2,
        n = Number.isInteger(o) ? o : Math.floor(o),
        r = Math.abs(t - e[n - 1]) < Math.abs(t - e[n]) ? [0, n] : [n];
    return kl(e.slice(...r), t);
}
function Sl(e, t, o) {
    const [n] = null != o ? o : gl(e),
        r = n.findIndex(
            (e) => e[0] !== e[1] && (!!Ya(e, t) || (t[1] > e[0] && t[1] < e[1]))
        );
    if (-1 !== r) return r;
    const [s, a] = n.reduce(
            (e, t, o) => (
                e[0].add(t[0]),
                e[0].add(t[1]),
                (e[1][t[0]] = o),
                (e[1][t[1]] = o),
                e
            ),
            [new Set(), {}]
        ),
        l = kl([...s], 0 === t[0] && t[1] === e.value.length ? 0 : t[1]);
    return l in a ? a[l] : void 0;
}
function Ll(e) {
    var t, o;
    const n = null !== (t = ia.get(e)) && void 0 !== t ? t : [];
    return n[null !== (o = pa.get(e)) && void 0 !== o ? o : n.length - 1];
}
function Il(e, t = !1) {
    const o = Ll(e);
    return o && (o.complete || t)
        ? xa.has(e)
            ? [...o.unmasked].reverse().join('')
            : o.unmasked
        : t
          ? ''
          : null;
}
function Dl(e) {
    var t;
    const o = Ll(e);
    return null !== (t = null == o ? void 0 : o.meta) && void 0 !== t
        ? t
        : null;
}
function Al(e) {
    const t = (e) => [...e].reverse().join(''),
        o = (e, t) => [t - e[1], t - e[0], e[2]];
    e.data && (e.data = t(e.data)),
        (e.valueBefore = t(e.valueBefore)),
        'valueAfter' in e && (e.valueAfter = t(e.valueAfter)),
        'selectionAfter' in e &&
            (e.selectionAfter = o(e.selectionBefore, e.valueAfter.length)),
        (e.selectionBefore = o(e.selectionBefore, e.valueBefore.length));
}
function Cl(e) {
    if (
        e.scrollWidth > e.clientWidth &&
        null !== e.selectionStart &&
        null !== e.selectionEnd
    ) {
        const t = e.selectionStart / e.value.length,
            o = e.selectionEnd / e.value.length;
        (e.scrollLeft = o > 0.9 ? e.scrollWidth : t * e.scrollWidth - 20),
            e.dispatchEvent(
                new CustomEvent('input-scroll', {
                    bubbles: !1,
                    detail: e.scrollLeft,
                })
            );
    }
}
const Tl = 'undefined' != typeof window,
    El = new WeakSet(),
    Ol = new WeakSet(),
    Ml = new WeakSet(),
    Vl = new WeakMap(),
    Fl = new WeakMap(),
    Bl = new WeakSet(),
    Pl = new WeakSet();
function Hl(e) {
    e.props.selectedMonth =
        e.props.selectedYear =
        e.props.selectedDay =
        e.props.selectedWeek =
            void 0;
}
function Rl(e) {
    var t, o, n;
    (e.props.selectedMonth = e.props.months.findIndex((t) =>
        Wl(t, e.props.activeDate)
    )),
        (e.props.selectedYear = e.props.years.findIndex((t) =>
            Kl(t, e.props.activeDate)
        ));
    for (
        let r = 0;
        r <
        (null === (t = e.props.calendar[0]) || void 0 === t
            ? void 0
            : t.weeks.length);
        r++
    )
        for (
            let t = 0;
            t <
            (null === (o = e.props.calendar[0]) || void 0 === o
                ? void 0
                : o.weeks[r].length);
            t++
        ) {
            const o =
                null === (n = e.props.calendar[0]) || void 0 === n
                    ? void 0
                    : n.weeks[r][t];
            if (K(o, e.props.activeDate)) {
                (e.props.selectedWeek = r), (e.props.selectedDay = t);
                break;
            }
        }
}
function Nl(e) {
    return 'timeZoneName' !== e.partName;
}
function Kl(e, t) {
    return t instanceof Date && e.getFullYear() === t.getFullYear();
}
function Wl(e, t) {
    return t instanceof Date && e.getMonth() === t.getMonth();
}
function Ul(e) {
    e.props.skipBuildCalendar || Hl(e),
        (e.props.selectedIndex = e.props.calendar =
            he(e.props.showMonths, (e) => e).map((t) =>
                (function (e, t) {
                    const o = [],
                        n = W(t);
                    n.setDate(1);
                    let r = Z(n, e.props.weekStart);
                    r.setHours(n.getHours(), n.getMinutes(), n.getSeconds());
                    const s = G(R(t), e.props.weekStart);
                    let a = [];
                    do {
                        a.push(r),
                            7 === a.length && (o.push(a), (a = [])),
                            (r = V(r));
                    } while (r.getTime() <= s.getTime());
                    return { monthDay: n, weeks: o };
                })(e, F(e.props.renderedDate, t))
            )),
        (e.props.years = (function (e) {
            const t = Number(A(e.props.renderedDate, 'YYYY')),
                o = t - (t % 10);
            return (
                (e.props.decade = `${o} - ${o + 9}`),
                he(10, (n) => B(e.props.renderedDate, o + n - t))
            );
        })(e)),
        (e.props.months = (function (e) {
            const t = W(e.props.renderedDate);
            return t.setMonth(0), he(12, (e) => F(t, e));
        })(e)),
        e.props.skipBuildCalendar
            ? (e.props.skipBuildCalendar = !1)
            : e.value && Rl(e);
}
function Yl(e, t) {
    var o;
    (t.target &&
        t.target instanceof Element &&
        (t.target.closest(`#${e.props.id}_popover`) ||
            !(null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.contains(t.target)))) ||
        (e.props.expanded = !1);
}
function jl(e, t) {
    if (!t) return (e.props.inputText = ''), new Date();
    const o =
        t instanceof Date ? t : T(t, e.props.valueFormat, e.props.valueLocale);
    return (
        (e.props.inputText = e.props.formatDate(
            o,
            e.props.format,
            e.props.locale,
            !1,
            Nl
        )),
        o
    );
}
function ql(e) {
    return Array.isArray(e.props.sequence) ? a(e.props.sequence) : ['day'];
}
function zl(e, t, o = !0) {
    var n, r;
    if (e._value === t) return;
    if (null == t) return e.input(t, o);
    e.props.offset = e.props.timezone ? D(t, e.props.timezone) : '+0000';
    const s = Y(
        t,
        null !== (n = (r = e.props).offset) && void 0 !== n
            ? n
            : (r.offset = '+0000')
    );
    e.input(A(s, e.props.valueFormat, e.props.valueLocale, !1), o);
}
function Zl(e, t) {
    var o;
    const n = [
            'prev_button',
            'month_button',
            'day_button',
            'year_button',
            'next_button',
        ].find((t) => {
            var o;
            return null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(`${e.props.id}_${t}`);
        }),
        r =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(`${e.props.id}_${n}`);
    r instanceof HTMLElement && (t.preventDefault(), r.focus());
}
function Gl(e, t) {
    var o;
    let n = '';
    if (!(t instanceof HTMLInputElement) || e.props.pickerOnly) return;
    Vl.set(e, t),
        null === (o = e.props.__root) ||
            void 0 === o ||
            o.addEventListener('click', (t) => {
                e.props.expanded &&
                t.target instanceof HTMLElement &&
                t.target.closest(`#${e.props.id}_popover`)
                    ? Pl.add(e)
                    : Pl.delete(e);
            }),
        e.on('prop:inputText', ({ payload: e }) => {
            e !== t.value &&
                ('beforeCallback' === ya.get(t) && (n = t.value),
                Va(t),
                (t.selectionStart = 0),
                (t.selectionEnd = t.value.length),
                (function (e, t) {
                    var o, n;
                    if (!ia.has(e)) return;
                    const r = null !== (o = wa.get(e)) && void 0 !== o ? o : '',
                        s = null !== (n = _a.get(e)) && void 0 !== n ? n : '';
                    qa(e, {
                        type: 'insert',
                        selectionBefore: ja(e),
                        data: t,
                        valueBefore: e.value,
                        suffix: s,
                        prefix: r,
                    });
                })(t, e),
                (t.value = e),
                setTimeout(() => Fa(t), 10));
        });
    const [r, s] = Jl(e);
    Ma(
        t,
        {
            pattern: r,
            explicitParts: s,
            onChange: ({ valueAfter: o }) => {
                if ((Xl(e), El.has(e))) return El.delete(e);
                n && n === o
                    ? (n = '')
                    : (Va(t),
                      (e.props.inputText = o),
                      setTimeout(() => Fa(t), 10));
            },
        },
        e
    );
}
function Xl(e) {
    var t, o;
    if (e.props.overlay) {
        const n = Vl.get(e);
        !n ||
        !(null === (t = e.props.attrs) || void 0 === t
            ? void 0
            : t.placeholder) ||
        e._value ||
        Il(n, !0) ||
        e.props._isFocused ||
        (e.props.activeDate && e.props.expanded)
            ? n &&
              ((e.props._isPlaceholder = !1),
              (e.props._overlayParts = ht(Dl(n))))
            : ((e.props._isPlaceholder = !0),
              (e.props._overlayParts = [
                  {
                      type: 'placeholder',
                      value:
                          null === (o = e.props.attrs) || void 0 === o
                              ? void 0
                              : o.placeholder,
                  },
              ]));
    }
}
function Jl(e) {
    const t = e.props.locale,
        o =
            ['full', 'long', 'medium', 'short'].includes(e.props.format) ||
            'object' == typeof e.props.format,
        n = O(e.props.format, t);
    return [
        U(e.props.format, t, !0, Nl),
        n.reduce((n, r) => {
            if ('literal' === r.partName) return n;
            let s = E(r.token, t, o);
            if ('YYYY' === r.token && e.props.minDate && e.props.maxDate) {
                const t = e.props.minDate.getFullYear();
                s = he(e.props.maxDate.getFullYear() - t + 1, (e) =>
                    String(t + e)
                );
            }
            const a = {
                type: 'enum',
                token: r.token,
                values: s,
                placeholder: 'A' === r.token ? 'A/P' : r.token,
                selectDirection: 'left',
            };
            return n.push(a), r.token.startsWith('D') && Fl.set(e, s), n;
        }, []),
    ];
}
function Ql(e, t) {
    return (
        !t ||
        !(!e.props.minDate || !q(t, e.props.minDate)) ||
        !(!e.props.maxDate || !z(t, e.props.maxDate)) ||
        void 0
    );
}
function ei(e) {
    return 'function' == typeof e.props.validationLabel
        ? e.props.validationLabel(e)
        : e.props.validationLabel ||
              e.props.label ||
              e.props.name ||
              String(e.name);
}
const ti = 'undefined' != typeof window,
    oi = new WeakMap();
function ni(e, t) {
    var o, n;
    if (t instanceof HTMLInputElement && !oi.get(e) && ti) {
        const r =
                null === (o = e.props.__root) || void 0 === o
                    ? void 0
                    : o.getElementById(`${e.props.id}_overlay`),
            s =
                null === (n = e.props.__root) || void 0 === n
                    ? void 0
                    : n.getElementById(`${e.props.id}_overlay_inner`);
        if (r && t && s) {
            oi.set(e, r);
            const o = getComputedStyle(t).color;
            (t.style.color = 'transparent'), (t.style.caretColor = o);
            const n = new ResizeObserver(() => {
                var o;
                const n = getComputedStyle(t),
                    r = t.getBoundingClientRect(),
                    s =
                        null === (o = t.parentElement) || void 0 === o
                            ? void 0
                            : o.getBoundingClientRect();
                e.props._overlayStyles = {
                    ...e.props._overlayStyles,
                    width: n.width,
                    height: n.height,
                    boxSizing: n.boxSizing,
                    padding: n.padding,
                    margin: n.margin,
                    fontSize: n.fontSize,
                    lineHeight: n.lineHeight,
                    top: r.top - ((null == s ? void 0 : s.top) || r.top) + 'px',
                    left:
                        r.left -
                        ((null == s ? void 0 : s.left) || r.left) +
                        'px',
                };
            });
            n.observe(t);
            const a = (e) => {
                s.scrollLeft = e.detail;
            };
            t.addEventListener('input-scroll', a),
                e.on('destroyed', () => {
                    t.removeEventListener('input-scroll', a), n.disconnect();
                });
        }
    }
}
function ri(e) {
    e.addProps([
        '_overlayStyles',
        '_overlayParts',
        '_overlayInnerStyles',
        '_isPlaceholder',
    ]),
        (e.props._overlayStyles = {
            position: 'absolute',
            top: '0',
            left: '0',
            pointerEvents: e.props._isPlaceholder ? 'auto' : 'none',
        }),
        (e.props._overlayInnerStyles = {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            paddingRight: '20px',
        }),
        e.on('created', () => {
            (e.props.overlay = r(e.props.overlay)),
                (e.props.pickerOnly = r(e.props.pickerOnly)),
                (e.props.overlay = e.props.pickerOnly
                    ? void 0
                    : e.props.overlay),
                e.props.overlay &&
                    s(`${e.props.id}`, ni.bind(null, e), e.props.__root);
        }),
        e.on('prop:_isPlaceholder', () => {
            e.props._overlayStyles = {
                ...e.props._overlayStyles,
                pointerEvents: e.props._isPlaceholder ? 'auto' : 'none',
            };
        });
}
const si = {
        schema: /* #__PURE__ */ fs(
            /* #__PURE__ */ vs(
                /* #__PURE__ */ gs('$label'),
                /* #__PURE__ */ hs(
                    /* #__PURE__ */ ms('prefix'),
                    /* #__PURE__ */ $s(),
                    /* #__PURE__ */ ra(
                        /* #__PURE__ */ aa(
                            /* #__PURE__ */ sa(
                                /* #__PURE__ */ ea('$part.value'),
                                /* #__PURE__ */ ta('$part.value'),
                                /* #__PURE__ */ oa('$part.value'),
                                /* #__PURE__ */ na('$part.value')
                            )
                        )
                    ),
                    /* #__PURE__ */ _s(),
                    /* #__PURE__ */ ks(
                        /* #__PURE__ */ Ks(
                            /* #__PURE__ */ Is(
                                /* #__PURE__ */ Ds('$ui.prev.value'),
                                /* #__PURE__ */ ms('prev')
                            ),
                            /* #__PURE__ */ Ws('$decade'),
                            /* #__PURE__ */ Us(/* #__PURE__ */ qs()),
                            /* #__PURE__ */ Ys(
                                /* #__PURE__ */ zs(),
                                /* #__PURE__ */ qs()
                            ),
                            /* #__PURE__ */ js(
                                /* #__PURE__ */ zs(),
                                /* #__PURE__ */ Zs(),
                                /* #__PURE__ */ qs()
                            ),
                            /* #__PURE__ */ Ss(
                                /* #__PURE__ */ Ls('$ui.next.value'),
                                /* #__PURE__ */ ms('next')
                            ),
                            /* #__PURE__ */ Qs(/* #__PURE__ */ ms('close'))
                        ),
                        /* #__PURE__ */ la(
                            /* #__PURE__ */ Ps(
                                /* #__PURE__ */ Hs(
                                    '$fns.format($year, $yearFormat)'
                                )
                            ),
                            /* #__PURE__ */ Rs(
                                /* #__PURE__ */ Ns(
                                    '$fns.format($month, $monthFormat)'
                                )
                            ),
                            /* #__PURE__ */ As(
                                /* #__PURE__ */ Ts(
                                    /* #__PURE__ */ Es(
                                        /* #__PURE__ */ Os(
                                            '$fns.format($day, $weekdayFormat)'
                                        )
                                    )
                                ),
                                /* #__PURE__ */ Cs(
                                    /* #__PURE__ */ Ms(
                                        /* #__PURE__ */ Vs(
                                            /* #__PURE__ */ Fs(
                                                '$fns.format($day, $dateFormat)'
                                            )
                                        )
                                    )
                                )
                            ),
                            /* #__PURE__ */ Xs(/* #__PURE__ */ Js())
                        )
                    ),
                    /* #__PURE__ */ Gs(/* #__PURE__ */ ms('clear')),
                    /* #__PURE__ */ Bs(/* #__PURE__ */ ms('calendar')),
                    /* #__PURE__ */ bs(),
                    /* #__PURE__ */ ms('suffix')
                )
            ),
            /* #__PURE__ */ ys('$help'),
            /* #__PURE__ */ xs(/* #__PURE__ */ ws('$message.value'))
        ),
        type: 'input',
        family: 'text',
        props: [
            'dateFormat',
            'dayButtonFormat',
            'format',
            'monthButtonFormat',
            'monthFormat',
            'overlay',
            'pickerOnly',
            'showMonths',
            'showPagination',
            'weekStart',
            'weekdayFormat',
            'yearFormat',
            'years',
        ],
        features: [
            ri,
            function (e) {
                var t,
                    o,
                    n,
                    a,
                    l,
                    i,
                    d,
                    c,
                    u,
                    f,
                    v,
                    h,
                    m,
                    g,
                    $,
                    b,
                    y,
                    x,
                    w,
                    _,
                    k,
                    S;
                e.addProps([
                    '_isDisabled',
                    '_isFocused',
                    'activeDate',
                    'calendar',
                    'clearable',
                    'disabled',
                    'decade',
                    'disabledDays',
                    'expanded',
                    'inputText',
                    'localTime',
                    'maxDate',
                    'maxScan',
                    'minDate',
                    'months',
                    'offset',
                    'paginatedPanels',
                    'panel',
                    'pickerOnly',
                    'renderedDate',
                    'sequence',
                    'timezone',
                    'valueFormat',
                    'valueLocale',
                    'showPanelClose',
                    'selectedDay',
                    'selectedWeek',
                    'selectedMonth',
                    'selectedYear',
                ]),
                    e.hook.prop(
                        (t, o) => (
                            'expanded' === t.prop &&
                                e.props.disabled &&
                                (t.value = !1),
                            'weekStart' === t.prop &&
                                (t.value = Number(t.value || 0)),
                            'showMonths' === t.prop &&
                                (t.value = Number(t.value || 1)),
                            'maxScan' === t.prop &&
                                (t.value = Number(t.value || 7)),
                            'timezone' === t.prop &&
                                ('string' == typeof e._value ||
                                    e._value instanceof Date) &&
                                (e.props.offset = D(e._value, t.value)),
                            o(t)
                        )
                    ),
                    (e.props._isFocused = !1),
                    (e.props._isPlaceholder = !1),
                    (null !== (t = (h = e.props).valueFormat) &&
                        void 0 !== t) ||
                        (h.valueFormat = 'ISO8601'),
                    (null !== (o = (m = e.props).weekdayFormat) &&
                        void 0 !== o) ||
                        (m.weekdayFormat = 'd'),
                    (null !== (n = (g = e.props).monthFormat) &&
                        void 0 !== n) ||
                        (g.monthFormat = 'MMM'),
                    (null !== (a = ($ = e.props).monthButtonFormat) &&
                        void 0 !== a) ||
                        ($.monthButtonFormat = 'MMMM'),
                    (null !== (l = (b = e.props).dayButtonFormat) &&
                        void 0 !== l) ||
                        (b.dayButtonFormat = 'D'),
                    (null !== (i = (y = e.props).dateFormat) && void 0 !== i) ||
                        (y.dateFormat = 'D'),
                    (null !== (d = (x = e.props).yearFormat) && void 0 !== d) ||
                        (x.yearFormat = 'YYYY'),
                    (null !== (c = (w = e.props).paginatedPanels) &&
                        void 0 !== c) ||
                        (w.paginatedPanels = ['day', 'year']),
                    (null !== (u = (_ = e.props).valueLocale) &&
                        void 0 !== u) ||
                        (_.valueLocale = e.props.locale),
                    (null !== (f = (k = e.props).format) && void 0 !== f) ||
                        (k.format = 'long'),
                    (e.props.panels = ql(e)),
                    (e.props.pickerOnly = r(e.props.pickerOnly)),
                    'disabled' in e.props &&
                        (e.props.disabled = r(e.props.disabled)),
                    'clearable' in e.props &&
                        (e.props.clearable = r(e.props.clearable)),
                    (null !== (v = (S = e.props).maxScan) && void 0 !== v) ||
                        (S.maxScan = 7),
                    (e.props._isDisabled =
                        'function' == typeof e.props.disabledDays
                            ? e.props.disabledDays.bind(null, e)
                            : Ql.bind(null, e)),
                    (e.props.calendar = []),
                    (e.props.inputText = ''),
                    (e.props.showMonths = e.props.showMonths || 1),
                    'function' == typeof e.props.format
                        ? ((e.props.formatDate = e.props.format),
                          (e.props.format = null))
                        : (e.props.formatDate = A),
                    Ul(e),
                    e.on('mounted', () => {
                        s(`${e.props.id}`, Gl.bind(null, e), e.props.__root);
                    }),
                    e.on('created', () => {
                        if (
                            ((function (e) {
                                const t = e._value;
                                let o = new Date();
                                if (t instanceof Date) o = W(t);
                                else if ('string' == typeof t)
                                    try {
                                        const n = T(
                                            t,
                                            e.props.valueFormat,
                                            e.props.valueLocale
                                        );
                                        o = W(n);
                                    } catch {
                                        console.warn(
                                            `Date (${t}) does not match format (${U(e.props.valueFormat, e.props.valueLocale)})`
                                        ),
                                            (o = void 0);
                                    }
                                else t || (o = void 0);
                                if (
                                    ((e.props.offset = e.props.timezone
                                        ? D(o || new Date(), e.props.timezone)
                                        : '+0000'),
                                    e.props.minDate)
                                ) {
                                    const t =
                                        'string' == typeof e.props.minDate
                                            ? T(e.props.minDate)
                                            : e.props.minDate;
                                    e.props.minDate = N(t, e.props.offset);
                                }
                                if (e.props.maxDate) {
                                    const t =
                                        'string' == typeof e.props.maxDate
                                            ? T(e.props.maxDate)
                                            : e.props.maxDate;
                                    e.props.maxDate = N(t, e.props.offset);
                                }
                                (o = o && N(o, e.props.offset)),
                                    o && zl(e, o, !1);
                                let n = o || new Date();
                                e.props.minDate && n < e.props.minDate
                                    ? (n = e.props.minDate)
                                    : e.props.maxDate &&
                                      n > e.props.maxDate &&
                                      (n = e.props.maxDate),
                                    (e.props.renderedDate = n),
                                    (e.props.activeDate = n),
                                    (e.props.localTime =
                                        (o && A(o, 'HH:mm')) || '12:00');
                            })(e),
                            e.context)
                        ) {
                            const t = {};
                            let o;
                            (e.context.fns.format = (o, n) => {
                                if (t[n] && t[n][o.toString()])
                                    return t[n][o.toString()];
                                const r = A(
                                    o,
                                    n,
                                    e.props.locale || 'en',
                                    !1,
                                    Nl
                                );
                                return (
                                    t[n]
                                        ? (t[n][o.toString()] = r)
                                        : (t[n] = { [o.toString()]: r }),
                                    r
                                );
                            }),
                                (e.context.fns.isDisabled =
                                    e.props._isDisabled),
                                (e.context.fns.isDisabledMonth = (t) =>
                                    !C(
                                        t,
                                        (t) => !e.props._isDisabled(t),
                                        'month'
                                    )),
                                (e.context.fns.isDisabledYear = (t) =>
                                    !C(
                                        t,
                                        (t) => !e.props._isDisabled(t),
                                        'year'
                                    )),
                                (e.context.handlers._blur = (t) => {
                                    var o, n;
                                    (e.props._isFocused = !1),
                                        'function' ==
                                            typeof (null === (o = e.context) ||
                                            void 0 === o
                                                ? void 0
                                                : o.handlers.blur) &&
                                            (null === (n = e.context) ||
                                                void 0 === n ||
                                                n.handlers.blur(t));
                                }),
                                (e.context.handlers.closePanel = () => {
                                    e.props.expanded = !1;
                                }),
                                (e.context.handlers._blurOut = (t) => (o) => {
                                    var n;
                                    o.preventDefault(),
                                        e.props.keydown
                                            ? (e.props.keydown = !1)
                                            : (t && t !== e.props.panel) ||
                                              (e.props.pickerOnly &&
                                                  o.relatedTarget instanceof
                                                      Element &&
                                                  (o.relatedTarget ===
                                                      document.getElementById(
                                                          `${e.props.id}_inner`
                                                      ) ||
                                                      o.relatedTarget.closest(
                                                          `#${e.props.id}_inner`
                                                      ))) ||
                                              (o.relatedTarget &&
                                                  o.relatedTarget instanceof
                                                      Element &&
                                                  (o.relatedTarget.closest(
                                                      `#${e.props.id}_popover`
                                                  ) ||
                                                      !(null ===
                                                          (n =
                                                              e.props.__root) ||
                                                      void 0 === n
                                                          ? void 0
                                                          : n.contains(
                                                                o.relatedTarget
                                                            )) ||
                                                      o.relatedTarget.id ===
                                                          `${e.props.id}_popover`)) ||
                                              (e.props.expanded = !1);
                                }),
                                (e.context.handlers.overlayClick = () => {
                                    const t = Vl.get(e);
                                    t &&
                                        (t.focus(),
                                        (e.props._isPlaceholder = !1));
                                }),
                                (e.context.handlers.focus = () => {
                                    e.props.pickerOnly ||
                                        ((e.props._isFocused = !0),
                                        e.props.pickerOnly &&
                                            !Ol.has(e) &&
                                            (Ml.add(e),
                                            (e.props.expanded = !0),
                                            setTimeout(
                                                () => Ml.delete(e),
                                                200
                                            )));
                                }),
                                (e.context.handlers.clear = () => {
                                    var t, o;
                                    zl(e, void 0, !0), jl(e, void 0);
                                    const n =
                                        null ===
                                            (o =
                                                null === (t = e.props) ||
                                                void 0 === t
                                                    ? void 0
                                                    : t.__root) || void 0 === o
                                            ? void 0
                                            : o.getElementById(`${e.props.id}`);
                                    n instanceof HTMLInputElement &&
                                        (n.focus(),
                                        setTimeout(() => {
                                            n.setSelectionRange(0, 0);
                                        }, 50));
                                }),
                                (e.context.handlers.dateInput = (t) => {
                                    var o;
                                    if (Bl.has(e)) return Bl.delete(e);
                                    if (
                                        t.target instanceof HTMLInputElement &&
                                        !e.props.expanded
                                    )
                                        try {
                                            let n = T({
                                                date: t.target.value,
                                                format: e.props.format,
                                                locale: e.props.locale,
                                                partFilter: Nl,
                                            });
                                            if (
                                                (function (e) {
                                                    return O(
                                                        e.props.format,
                                                        e.props.locale
                                                    ).some(
                                                        (e) =>
                                                            'weekday' ===
                                                            e.partName
                                                    );
                                                })(e) &&
                                                e.props.activeDate instanceof
                                                    Date &&
                                                e.props.activeDate.getTime() ===
                                                    n.getTime() &&
                                                !Sa.get(t.target) &&
                                                A(
                                                    n,
                                                    e.props.format,
                                                    e.props.locale,
                                                    !1,
                                                    Nl
                                                ) !== t.target.value
                                            ) {
                                                const r = E(
                                                        'dddd',
                                                        e.props.locale
                                                    ),
                                                    s = O(
                                                        e.props.format,
                                                        e.props.locale
                                                    ),
                                                    a =
                                                        null ===
                                                            (o = M(
                                                                t.target.value,
                                                                s
                                                            ).find(
                                                                (e) =>
                                                                    'dddd' ===
                                                                    e.token
                                                            )) || void 0 === o
                                                            ? void 0
                                                            : o.value,
                                                    l = A(
                                                        n,
                                                        'dddd',
                                                        e.props.locale
                                                    );
                                                if (
                                                    a &&
                                                    r.includes(a) &&
                                                    l !== a
                                                ) {
                                                    let t =
                                                        r.indexOf(a) -
                                                        r.indexOf(l);
                                                    (t = t < -1 ? 7 + t : t),
                                                        (n = V(n, t)),
                                                        El.add(e);
                                                }
                                            }
                                            zl(e, n);
                                        } catch (t) {
                                            zl(e, void 0);
                                        }
                                }),
                                (e.context.handlers.open = () => {
                                    e.props.expanded = !0;
                                }),
                                (e.context.handlers.next = () => {
                                    switch (e.props.panel) {
                                        case 'year':
                                            return void (e.props.renderedDate =
                                                B(e.props.renderedDate, 10));
                                        case 'day':
                                            return void (e.props.renderedDate =
                                                F(e.props.renderedDate, 1));
                                    }
                                }),
                                (e.context.handlers.prev = () => {
                                    switch (e.props.panel) {
                                        case 'year':
                                            return void (e.props.renderedDate =
                                                B(e.props.renderedDate, -10));
                                        case 'day':
                                            return void (e.props.renderedDate =
                                                F(e.props.renderedDate, -1));
                                    }
                                }),
                                (e.context.handlers.setDate = (t) => () => {
                                    ('month' !== e.props.panel &&
                                        'year' !== e.props.panel) ||
                                        !e.props.activeDate ||
                                        (t = e.props.activeDate),
                                        e.emit('dateSelected', t);
                                }),
                                (e.context.handlers.localTime = (t) => {
                                    const o = t.target;
                                    if (!o.value) return;
                                    const [n, r] = o.value.split(':');
                                    (e.props.localTime = o.value),
                                        e.props.activeDate.setHours(n, r),
                                        jl(e, e.props.activeDate);
                                }),
                                (e.context.handlers.keyDown = (t) => {
                                    switch (
                                        ((e.props.keydown = !0), e.props.panel)
                                    ) {
                                        case 'day':
                                            return e.emit('calendarKeydown', t);
                                        case 'year':
                                            return e.emit('yearKeydown', t);
                                        case 'month':
                                            return e.emit('monthKeydown', t);
                                        case 'time':
                                            return e.emit('timeKeydown', t);
                                        default:
                                            return;
                                    }
                                }),
                                (e.context.handlers.inputKeydown = (t) => {
                                    e.emit('keydown', t);
                                }),
                                (e.context.handlers.openKeydown = (t) => {
                                    ('Enter' !== t.key && 'Space' !== t.key) ||
                                        (e.props.expanded = !0);
                                }),
                                (e.context.handlers.mouseEnter = (t) => (n) => {
                                    if (
                                        (clearTimeout(o),
                                        n.target instanceof HTMLElement &&
                                            '-1' ===
                                                n.target.getAttribute(
                                                    'tabindex'
                                                ) &&
                                            'true' !==
                                                n.target.getAttribute(
                                                    'data-is-extra'
                                                ))
                                    )
                                        if (
                                            'month' === e.props.panel ||
                                            'year' === e.props.panel
                                        ) {
                                            const o = C(
                                                t,
                                                () => !0,
                                                e.props.panel
                                            );
                                            o && (e.props.activeDate = o);
                                        } else e.props.activeDate = t;
                                }),
                                (e.context.handlers.mouseLeave = () => {
                                    clearTimeout(o),
                                        (o = setTimeout(() => {}, 100));
                                }),
                                (e.context.handlers.jumpTo = (t) => () => {
                                    e.props.panels.unshift(e.props.panel),
                                        (e.props.panel = t);
                                }),
                                (e.context.fns.sameDay = (t) =>
                                    (function (e, t) {
                                        return t instanceof Date && K(e, t);
                                    })(t, e.props.activeDate)),
                                (e.context.fns.sameMonth = (t) =>
                                    Wl(t, e.props.activeDate)),
                                (e.context.fns.sameYear = (t) =>
                                    Kl(t, e.props.activeDate)),
                                (e.context.fns.notInMonth = (e, t) => {
                                    const o = P(t).getTime();
                                    return (
                                        o < H(e).getTime() ||
                                        o > R(e).getTime() ||
                                        void 0
                                    );
                                });
                        }
                    });
                const L = Yl.bind(null, e);
                e.on('prop:panel', ({ payload: t }) => {
                    e.props.showPagination =
                        e.props.paginatedPanels.includes(t);
                }),
                    e.on('dateSelected', ({ payload: t }) => {
                        var o, n;
                        Array.isArray(e.props.panels) && e.props.panels.length
                            ? (e.props.panel = e.props.panels.shift())
                            : ((e.props.expanded = !1),
                              null ===
                                  (n =
                                      null === (o = e.props.__root) ||
                                      void 0 === o
                                          ? void 0
                                          : o.getElementById(
                                                `${e.props.id}`
                                            )) ||
                                  void 0 === n ||
                                  n.focus()),
                            (t && e.props._isDisabled(t)) || zl(e, t);
                    }),
                    e.on('input', ({ payload: t }) => {
                        if (void 0 === t && !e.props._isFocused)
                            return void jl(e, void 0);
                        const o = new Date(),
                            n = t
                                ? jl(
                                      e,
                                      N(
                                          'string' == typeof t
                                              ? T(
                                                    t,
                                                    e.props.valueFormat,
                                                    e.props.valueLocale
                                                )
                                              : t,
                                          e.props.offset
                                      )
                                  )
                                : o;
                        (e.props.activeDate =
                            !t && e.props.activeDate ? e.props.activeDate : n),
                            (e.props.renderedDate =
                                !t && e.props.renderedDate
                                    ? e.props.renderedDate
                                    : n),
                            (e.props.localTime = A(n, 'HH:mm')),
                            (function (e) {
                                const t = Fl.get(e);
                                if (e._value && t) {
                                    const o = j(e.props.activeDate);
                                    if (t.length > o) t.splice(o, t.length - o);
                                    else if (t.length < o)
                                        for (let e = t.length + 1; e <= o; e++)
                                            t.push(String(e));
                                }
                            })(e);
                    }),
                    e.on('prop:renderedDate', Ul.bind(null, e)),
                    e.on('prop:expanded', ({ payload: t }) => {
                        if (t) {
                            if (
                                (Pl.delete(e),
                                (e.props.panels = ql(e)),
                                (e.props.panel = e.props.panels.shift()),
                                window.innerWidth <= 430 &&
                                !window.matchMedia('(hover: hover)').matches
                                    ? (e.props.showPanelClose = !0)
                                    : (e.props.showPanelClose = !1),
                                'day' === e.props.panel)
                            ) {
                                const t = e.props.activeDate;
                                e.props.activeDate =
                                    C(
                                        e.props.activeDate,
                                        (t) => !e.props._isDisabled(t),
                                        'month'
                                    ) || t;
                            }
                            Ul(e),
                                s(
                                    `${e.props.id}_popover`,
                                    (t) => {
                                        const o =
                                            t.querySelector('[tabindex="0"]');
                                        o &&
                                            setTimeout(() => {
                                                o.focus(),
                                                    (function (e, t) {
                                                        const o =
                                                            new MutationObserver(
                                                                (e) => {
                                                                    for (const t of e)
                                                                        'attributes' ===
                                                                            t.type &&
                                                                        t.target instanceof
                                                                            HTMLElement &&
                                                                        '0' ===
                                                                            t.target.getAttribute(
                                                                                'tabindex'
                                                                            )
                                                                            ? t.target.focus()
                                                                            : t
                                                                                  .addedNodes
                                                                                  .length &&
                                                                              t.addedNodes.forEach(
                                                                                  (
                                                                                      e
                                                                                  ) => {
                                                                                      var t;
                                                                                      if (
                                                                                          e instanceof
                                                                                              HTMLElement &&
                                                                                          '0' ===
                                                                                              e.getAttribute(
                                                                                                  'tabindex'
                                                                                              )
                                                                                      )
                                                                                          e.focus();
                                                                                      else if (
                                                                                          e instanceof
                                                                                              HTMLElement &&
                                                                                          e.querySelector(
                                                                                              '[tabindex="0"]'
                                                                                          )
                                                                                      ) {
                                                                                          const t =
                                                                                              e.querySelector(
                                                                                                  '[tabindex="0"]'
                                                                                              );
                                                                                          t instanceof
                                                                                              HTMLElement &&
                                                                                              t.focus();
                                                                                      } else
                                                                                          e instanceof
                                                                                              HTMLElement &&
                                                                                              e.querySelector(
                                                                                                  'input[type="time"]'
                                                                                              ) &&
                                                                                              (null ===
                                                                                                  (t =
                                                                                                      e.querySelector(
                                                                                                          'input[type="time"]'
                                                                                                      )) ||
                                                                                                  void 0 ===
                                                                                                      t ||
                                                                                                  t.focus());
                                                                                  }
                                                                              );
                                                                }
                                                            );
                                                        o.observe(t, {
                                                            attributes: !0,
                                                            attributeFilter: [
                                                                'tabindex',
                                                            ],
                                                            childList: !0,
                                                            subtree: !0,
                                                        });
                                                        const n = e.on(
                                                            'prop:expanded',
                                                            ({
                                                                payload: t,
                                                            }) => {
                                                                t ||
                                                                    (e.off(n),
                                                                    o.disconnect());
                                                            }
                                                        );
                                                    })(e, t);
                                            }, 0);
                                    },
                                    e.props.__root
                                ),
                                Tl &&
                                    setTimeout(() => {
                                        document.addEventListener('click', L);
                                    }, 10);
                        } else {
                            if (
                                ((e.props.activeDate = e.props.renderedDate),
                                'time' === e.props.panel)
                            )
                                e.emit('dateSelected', e.props.activeDate);
                            else if (e._value) {
                                Bl.add(e);
                                const t =
                                    'string' == typeof e._value
                                        ? T(
                                              e._value,
                                              e.props.valueFormat,
                                              e.props.valueLocale
                                          )
                                        : e._value;
                                jl(e, N(t, e.props.offset));
                            } else jl(e, void 0);
                            Tl &&
                                (Ol.add(e),
                                document.removeEventListener('click', L),
                                setTimeout(() => Ol.delete(e), 50));
                        }
                    }),
                    e.on('prop:activeDate', ({ payload: t }) => {
                        if (
                            Array.isArray(e.props.calendar) &&
                            e.props.calendar.length
                        )
                            if ('day' === e.props.panel) {
                                const o = e.props.calendar,
                                    n = H(e.props.renderedDate),
                                    r = R(
                                        F(e.props.renderedDate, o.length - 1)
                                    );
                                t.getTime() < n.getTime()
                                    ? (e.props.renderedDate = F(
                                          e.props.renderedDate,
                                          -1
                                      ))
                                    : t.getTime() > r.getTime() &&
                                      (e.props.renderedDate = F(
                                          e.props.renderedDate
                                      ));
                            } else if ('year' === e.props.panel) {
                                const o = e.props.years,
                                    n = o[0].getFullYear(),
                                    r = o[o.length - 1].getFullYear(),
                                    s = e.props.activeDate.getFullYear();
                                s > r
                                    ? (e.props.renderedDate = B(
                                          e.props.renderedDate,
                                          10
                                      ))
                                    : s < n
                                      ? (e.props.renderedDate = B(
                                            e.props.renderedDate,
                                            -10
                                        ))
                                      : ((e.props.skipBuildCalendar = !0),
                                        (e.props.renderedDate = t));
                            }
                        e.props.expanded && jl(e, e.props.activeDate);
                    }),
                    e.on('keydown', ({ payload: t }) => {
                        switch (t.key) {
                            case 'ArrowDown':
                            case 'ArrowUp':
                            case ' ':
                                t.preventDefault(),
                                    e.props.pickerOnly &&
                                        (e.props.expanded = !0);
                                break;
                            case 'Enter':
                            case 'Return':
                                e.props.expanded || (e.props.expanded = !0);
                                break;
                            case 'Escape':
                                e.props.expanded = !1;
                        }
                    }),
                    e.on('calendarKeydown', ({ payload: t }) => {
                        t.preventDefault();
                        let o = null,
                            n = 0;
                        switch (t.key) {
                            case 'ArrowRight':
                                n = 1;
                                break;
                            case 'ArrowLeft':
                                n = -1;
                                break;
                            case 'ArrowDown':
                                n = 7;
                                break;
                            case 'ArrowUp':
                                n = -7;
                                break;
                            case 'Return':
                            case 'Enter':
                                e.emit('dateSelected', e.props.activeDate);
                                break;
                            case 'Tab':
                                t.shiftKey || Zl(e, t);
                                break;
                            case 'Escape':
                                e.props.expanded = !1;
                        }
                        if (
                            (n &&
                                (t.preventDefault(),
                                (o = V(e.props.activeDate, n))),
                            o && !e.props._isDisabled(o))
                        )
                            e.props.activeDate = o;
                        else if (o && e.props._isDisabled(o)) {
                            const t = n > 0 ? 1 : -1;
                            he(Number(e.props.maxScan), (e) => t * e).some(
                                (t) => {
                                    const n = V(o, t);
                                    return (
                                        !e.props._isDisabled(n) &&
                                        ((e.props.activeDate = n), !0)
                                    );
                                }
                            );
                        }
                    }),
                    e.on('yearKeydown', ({ payload: t }) => {
                        let o = 0;
                        switch (t.key) {
                            case 'ArrowDown':
                                o = 5;
                                break;
                            case 'ArrowRight':
                                o = 1;
                                break;
                            case 'ArrowUp':
                                o = -5;
                                break;
                            case 'ArrowLeft':
                                o = -1;
                                break;
                            case 'Tab':
                                t.shiftKey || Zl(e, t);
                                break;
                            case 'Return':
                            case 'Enter':
                                e.emit('dateSelected', e.props.activeDate);
                                break;
                            case 'Escape':
                                e.props.expanded = !1;
                        }
                        const n =
                            e.props.activeDate.getFullYear() +
                            o -
                            e.props.renderedDate.getFullYear();
                        e.props.activeDate = B(e.props.renderedDate, n);
                    }),
                    e.on('monthKeydown', ({ payload: t }) => {
                        let o = 0;
                        switch (t.key) {
                            case 'ArrowDown':
                                o = 3;
                                break;
                            case 'ArrowRight':
                                o = 1;
                                break;
                            case 'ArrowLeft':
                                o = -1;
                                break;
                            case 'ArrowUp':
                                o = -3;
                                break;
                            case 'Tab':
                                t.shiftKey || Zl(e, t);
                                break;
                            case 'Return':
                            case 'Enter':
                                e.emit('dateSelected', e.props.activeDate);
                                break;
                            case 'Escape':
                                e.props.expanded = !1;
                        }
                        o && t.preventDefault();
                        let n = (e.props.activeDate.getMonth() + o) % 12;
                        n = n < 0 ? 12 + n : n;
                        const r = n - e.props.renderedDate.getMonth();
                        let s = F(e.props.renderedDate, r);
                        if (e.props._isDisabled(s)) {
                            const t = C(
                                s,
                                (t) => !e.props._isDisabled(t),
                                'month'
                            );
                            t && (s = t);
                        }
                        e.props.activeDate = s;
                    }),
                    e.on('timeKeydown', ({ payload: t }) => {
                        switch (t.key) {
                            case 'Return':
                            case 'Enter':
                                t.preventDefault(),
                                    e.emit('dateSelected', e.props.activeDate);
                        }
                    }),
                    e.on('prop:_isFocused', () => {
                        Vl.get(e) && Xl(e);
                    }),
                    e.on('commit', ({ payload: t }) => {
                        if (
                            (t ? Rl(e) : Hl(e),
                            e.props.activeDate &&
                                e.props._isDisabled(e.props.activeDate))
                        ) {
                            const t = p({
                                blocking: !0,
                                key: 'rule_invalidDate',
                                meta: {
                                    messageKey: 'invalidDate',
                                    removeImmediately: !1,
                                    localize: !0,
                                    i18nArgs: [
                                        { node: e, name: ei(e), args: [] },
                                    ],
                                },
                                type: 'validation',
                                value: 'The selected date is invalid.',
                            });
                            e.store.set(t);
                        } else e.store.remove('rule_invalidDate');
                    });
            },
            No,
            /* #__PURE__ */ $('next'),
            /* #__PURE__ */ $('prev'),
            /* #__PURE__ */ $('changeDate'),
            /* #__PURE__ */ $('chooseDate'),
            /* #__PURE__ */ g('close', 'close'),
            /* #__PURE__ */ g('next', 'right'),
            /* #__PURE__ */ g('clear', 'close'),
            /* #__PURE__ */ g('prev', 'left'),
            /* #__PURE__ */ g('calendar', 'date'),
        ],
    },
    ai = /* #__PURE__ */ Me('tl'),
    {
        outer: li,
        wrapper: ii,
        inner: pi,
        icon: di,
        label: ci,
        prefix: ui,
        suffix: fi,
        help: vi,
        messages: hi,
        message: mi,
    } = /* #__PURE__ */ Ve(ai),
    gi = ai('input', () => ({
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
            'aria-required': '$state.required || undefined',
        },
    })),
    $i = ai('listboxButton', () => ({
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
    bi = ai('tagWrapper', () => ({
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
    yi = ai('tag', () => ({
        $el: 'div',
        attrs: { id: '$id + "_tag_" + $index', role: 'button' },
    })),
    xi = ai('removeSelection', () => ({
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
    wi = ai('tagLabel', () => ({ $el: 'span' })),
    _i = ai('tags', () => ({
        $el: 'div',
        attrs: { id: '$id + "_selections"', 'aria-live': 'polite' },
    })),
    ki = ai('tagLoading', 'span'),
    Si = /* #__PURE__ */ Pe(ai);
function Li(e) {
    (e.props.multiple = !0),
        (e.props.openOnClick = r(e.props.openOnClick)),
        void 0 === e.props.closeOnSelect && (e.props.closeOnSelect = !0),
        e.props.closeOnSelect
            ? (e.props.resetSearchOnCommit = !1)
            : void 0 === e.props.resetSearchOnCommit &&
              (e.props.resetSearchOnCommit = e.props.multiple),
        (e.props.allowNewValues = r(e.props.allowNewValues));
}
function Ii(e) {
    is(e),
        Fo(e),
        e.on('created', () => {
            function t() {
                return Array.isArray(e.value) ? e.value : [];
            }
            function o(t) {
                e.input(t);
            }
            e.props.disabled && (e.props.draggable = !1),
                s(
                    `${e.props.id}_selections`,
                    (n) => {
                        if (n instanceof HTMLElement) {
                            if (!e.context) return;
                            const r = {
                                draggingClass: e.context.classes.dragging,
                                dropZoneClass: e.context.classes.dropZone,
                                disabled: !e.props.draggable,
                                threshold: { horizontal: 0.25, vertical: 0 },
                                plugins: [x()],
                                root: e.props.__root,
                                touchDraggingClass:
                                    e.context.classes.touchDragging,
                                touchDropZoneClass:
                                    e.context.classes.touchDropZone,
                                draggable: (e) => e.hasAttribute('data-is-tag'),
                                handleEnd(t) {
                                    (e.props.activeSelectionValue = void 0),
                                        _(t);
                                },
                                handleDragstart(t) {
                                    (e.props.activeSelectionValue = void 0),
                                        k(t);
                                },
                                handleTouchstart(t) {
                                    (e.props.activeSelectionValue = void 0),
                                        S(t);
                                },
                            };
                            w({
                                parent: n,
                                getValues: t,
                                setValues: o,
                                config: r,
                            }),
                                e.on('prop:disabled', ({ payload: e }) => {
                                    (r.disabled = e),
                                        w({
                                            parent: n,
                                            getValues: t,
                                            setValues: o,
                                            config: r,
                                        });
                                }),
                                e.on('prop:draggable', ({ payload: e }) => {
                                    (r.disabled = !e),
                                        w({
                                            parent: n,
                                            getValues: t,
                                            setValues: o,
                                            config: r,
                                        });
                                });
                        }
                    },
                    e.props.__root
                );
        });
}
const Di = {
        schema: /* #__PURE__ */ li(
            /* #__PURE__ */ ii(
                /* #__PURE__ */ ci('$label'),
                /* #__PURE__ */ pi(
                    /* #__PURE__ */ di('prefix'),
                    /* #__PURE__ */ ui(),
                    /* #__PURE__ */ _i(
                        /* #__PURE__ */ bi(
                            /* #__PURE__ */ yi(
                                /* #__PURE__ */ Be(
                                    '$state.loading && $fns.hasOptionLoaderValue && $fns.hasOptionLoaderValue($option) || $option.label === undefined',
                                    /* #__PURE__ */ ki('$ui.isLoading.value'),
                                    /* #__PURE__ */ wi('$option.label')
                                ),
                                /* #__PURE__ */ xi(/* #__PURE__ */ di('close'))
                            )
                        ),
                        /* #__PURE__ */ gi()
                    ),
                    /* #__PURE__ */ Be(
                        '$state.loading',
                        /* #__PURE__ */ di('loader')
                    ),
                    /* #__PURE__ */ $i(/* #__PURE__ */ di('select')),
                    /* #__PURE__ */ Si(),
                    /* #__PURE__ */ fi(),
                    /* #__PURE__ */ di('suffix')
                )
            ),
            /* #__PURE__ */ vi('$help'),
            /* #__PURE__ */ hi(/* #__PURE__ */ mi('$message.value'))
        ),
        type: 'input',
        family: 'dropdown',
        props: [],
        features: [
            b,
            /* #__PURE__ */ ro.bind(null, Li, zr, Ii),
            /* #__PURE__ */ g('select', 'select'),
            /* #__PURE__ */ g('close', 'close'),
            /* #__PURE__ */ g('selected', 'check'),
            /* #__PURE__ */ g('loader', 'spinner'),
            /* #__PURE__ */ $('isLoading'),
            /* #__PURE__ */ $('loadMore'),
            /* #__PURE__ */ $('remove'),
            /* #__PURE__ */ $('open'),
            /* #__PURE__ */ $('close'),
            No,
        ],
    },
    Ai = /* #__PURE__ */ Me('mk'),
    {
        outer: Ci,
        wrapper: Ti,
        inner: Ei,
        label: Oi,
        prefix: Mi,
        suffix: Vi,
        help: Fi,
        messages: Bi,
        message: Pi,
        icon: Hi,
    } = /* #__PURE__ */ Ve(Ai),
    {
        overlayPlaceholder: Ri,
        overlayLiteral: Ni,
        overlayChar: Ki,
        overlayEnum: Wi,
        overlay: Ui,
        overlayParts: Yi,
        overlayInner: ji,
    } = /* #__PURE__ */ Fe(Ai),
    qi = Ai('input', () => ({
        $el: 'input',
        bind: '$attrs',
        attrs: {
            type: 'text',
            disabled: '$disabled',
            name: '$node.name',
            onBlur: '$handlers.blur',
            onInput: '$handlers.DOMInput',
            value: '$_maskValue',
            placeholder: '$placeholder',
            id: '$id',
            'aria-describedby': '$describedBy',
        },
    })),
    zi = new WeakMap(),
    Zi = new WeakMap(),
    Gi = new WeakMap();
function Xi(e, t) {
    if (!(t instanceof HTMLInputElement))
        throw new Error(
            `Masks can only be applied to an HTMLInputElement (id: ${t.id}).`
        );
    Zi.set(e, t),
        Ma(
            t,
            {
                ...zi.get(e),
                onChange: ({ valueAfter: t, meta: o }) => {
                    (e.props._maskValue = t),
                        e.input({ maskValue: t }),
                        (e.props._overlayParts = ht(o));
                },
            },
            e
        );
}
const Ji = {
        schema: /* #__PURE__ */ Ci(
            /* #__PURE__ */ Ti(
                /* #__PURE__ */ Oi('$label'),
                /* #__PURE__ */ Ei(
                    /* #__PURE__ */ Hi('prefix'),
                    /* #__PURE__ */ Mi(),
                    /* #__PURE__ */ Ui(
                        /* #__PURE__ */ ji(
                            /* #__PURE__ */ Yi(
                                /* #__PURE__ */ Ri('$part.value'),
                                /* #__PURE__ */ Ni('$part.value'),
                                /* #__PURE__ */ Ki('$part.value'),
                                /* #__PURE__ */ Wi('$part.value')
                            )
                        )
                    ),
                    /* #__PURE__ */ qi(),
                    /* #__PURE__ */ Vi(),
                    /* #__PURE__ */ Hi('suffix')
                )
            ),
            /* #__PURE__ */ Fi('$help'),
            /* #__PURE__ */ Bi(/* #__PURE__ */ Pi('$message.value'))
        ),
        type: 'input',
        props: [
            'allowIncomplete',
            'mask',
            'mode',
            'tokens',
            'showMask',
            'unmaskValue',
            'prefix',
            'suffix',
            'reverse',
            'overlay',
        ],
        family: 'text',
        features: [
            ri,
            function (e) {
                e.addProps(['_maskValue', '_overlayParts']),
                    e.on('created', () => {
                        var t, o, n, a, l;
                        const i = Pa(
                            'string' == typeof e._value ? e._value : ''
                        );
                        Zi.set(e, i),
                            Gi.set(e, i),
                            (e.props.allowIncomplete = r(
                                e.props.allowIncomplete
                            )),
                            (e.props.overlay = r(e.props.overlay));
                        const p = !(
                            void 0 !== e.props.showMask && !r(e.props.showMask)
                        );
                        (e.props.unmaskValue = r(e.props.unmaskValue)),
                            e.hook.prop(
                                (e, t) => (
                                    'unmaskValue' === e.prop &&
                                        (e.value = r(e)),
                                    t(e)
                                )
                            );
                        const d = {
                            placeholder: p,
                            pattern:
                                null !== (t = e.props.mask) && void 0 !== t
                                    ? t
                                    : '',
                            mode:
                                null !== (o = e.props.mode) && void 0 !== o
                                    ? o
                                    : 'shift',
                            partOverrides:
                                null !== (n = e.props.tokens) && void 0 !== n
                                    ? n
                                    : {},
                            prefix:
                                null !== (a = e.props.prefix) && void 0 !== a
                                    ? a
                                    : void 0,
                            suffix:
                                null !== (l = e.props.suffix) && void 0 !== l
                                    ? l
                                    : void 0,
                            reverse: r(e.props.reverse),
                        };
                        zi.set(e, d),
                            e.hook.input((t, o) => {
                                const n = (function (e, t) {
                                    const o = Zi.get(e),
                                        n =
                                            'object' == typeof t &&
                                            'maskValue' in t;
                                    t =
                                        'string' == typeof t
                                            ? t
                                            : n
                                              ? t.maskValue
                                              : '';
                                    const r = Gi.get(e);
                                    r.value = za(r, t);
                                    const s = Ba(r, zi.get(e)),
                                        a = Il(r, e.props.allowIncomplete);
                                    if (t === o.value)
                                        return e.props.unmaskValue
                                            ? null != a
                                                ? a
                                                : ''
                                            : null === a
                                              ? ''
                                              : 'string' == typeof t
                                                ? t
                                                : '';
                                    if (
                                        '' === t &&
                                        '' !== o.value &&
                                        !e.props.allowIncomplete
                                    )
                                        return t;
                                    n ||
                                        s === e.props._maskValue ||
                                        ((o.value = s),
                                        (e.props._maskValue = s),
                                        (e.props._overlayParts = ht(
                                            Dl(r) || []
                                        )));
                                    return null === a
                                        ? ''
                                        : e.props.unmaskValue
                                          ? a
                                          : s;
                                })(e, t);
                                return o(n);
                            }),
                            (e.props._maskValue = Ba(i, d, e)),
                            e.input(e.props._maskValue, !1),
                            e.context &&
                                (e.context.handlers.DOMInput = (t) => {
                                    e.emit('dom-input-event', t);
                                }),
                            s(
                                `${e.props.id}`,
                                Xi.bind(null, e),
                                e.props.__root
                            );
                    });
            },
        ],
    },
    Qi = /* #__PURE__ */ Me('tf'),
    {
        outer: ep,
        wrapper: tp,
        inner: op,
        icon: np,
        prefix: rp,
        suffix: sp,
        help: ap,
        messages: lp,
        message: ip,
    } = /* #__PURE__ */ Ve(Qi),
    pp = Qi('fieldset', () => ({
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
    dp = Qi('legend', () => ({ if: '$label', $el: 'legend' })),
    cp = Qi('source', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_source"',
            class: '$classes.transferlist + " " + $classes.source',
        },
    })),
    up = Qi('sourceHeader', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_source_header"',
            role: 'presentation',
            class: '$classes.transferlistHeader + " " + $classes.sourceHeader',
        },
    })),
    fp = Qi('sourceHeaderLabel', () => ({
        if: '$sourceLabel',
        $el: 'label',
        attrs: {
            id: '$id + "_source_header_label"',
            for: '$id + "_source_search_input"',
            class: '$classes.transferlistHeaderLabel + " " + $classes.sourceHeaderLabel',
        },
        children: '$sourceLabel || $label',
    })),
    vp = Qi('sourceHeaderItemCount', () => ({
        $el: 'span',
        attrs: {
            id: '$id + "_source_header_item_count"',
            role: 'presentation',
            'aria-label': '$sourceOptions.length " items"',
            class: '$classes.transferlistHeaderItemCount + " " + $classes.sourceHeaderItemCount',
        },
    })),
    hp = Qi('targetHeaderLabel', () => ({
        if: '$targetLabel',
        $el: 'label',
        attrs: {
            id: '$id + "_target_header_label"',
            for: '$id + "_target_search_input"',
            class: '$classes.transferlistHeaderLabel + " " + $classes.targetHeaderLabel',
        },
        children: '$targetLabel || $label',
    })),
    mp = Qi('targetHeaderItemCount', () => ({
        $el: 'span',
        attrs: {
            id: '$id + "_target_header_item_count"',
            role: 'presentation',
            'aria-label': '$targetOptions.length + " items"',
            class: '$classes.transferlistHeaderItemCount + " " + $classes.targetHeaderItemCount',
        },
        children: '$targetOptions.length',
    })),
    gp = Qi('sourceControls', () => ({
        $el: 'div',
        if: '$searchable',
        attrs: {
            id: '$id + "_source_controls"',
            class: '$classes.transferlistControls + " " + $classes.sourceControls',
        },
    })),
    $p = Qi('sourceSearch', () => ({
        if: '$searchable',
        $el: 'div',
        attrs: {
            id: '$id + "_source_search"',
            class: '$classes.transferlistSearch + " " + $classes.sourceSearch',
        },
    })),
    bp = Qi('sourceSearchInput', () => ({
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
    yp = Qi('targetSearch', () => ({
        if: '$targetSearchable',
        $el: 'div',
        attrs: {
            id: '$id + "_target_search"',
            class: '$classes.transferlistSearch + " " + $classes.targetSearch',
        },
    })),
    xp = Qi('targetSearchInput', () => ({
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
    wp = Qi('targetControls', () => ({
        $el: 'div',
        if: '$targetSearchable',
        attrs: {
            id: '$id + "_target_controls"',
            class: '$classes.transferlistControls + " " + $classes.targetControls',
        },
    })),
    _p = Qi('sourceSearchClear', () => ({
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
    kp = Qi('targetSearchClear', () => ({
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
    Sp = Qi('sourceListItems', () => ({
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
    Lp = Qi('sourceListItem', () => ({
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
    Ip = Qi('sourceOption', () => ({
        $el: 'div',
        attrs: {
            'data-checked': '$fns.isSelected($option, $selectedSourceItems)',
            class: '$classes.transferlistOption + " " + $classes.sourceOption',
        },
    })),
    Dp = Qi('sourceLoadMore', () => ({
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
    Ap = Qi('loadMoreInner', 'span'),
    Cp = Qi('target', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_target"',
            class: '$classes.transferlist + " " + $classes.target',
        },
    })),
    Tp = Qi('targetHeader', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_target_header"',
            role: 'presentation',
            class: '$classes.transferlistHeader + " " + $classes.targetHeader',
        },
    })),
    Ep = Qi('targetListItems', () => ({
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
    Op = Qi('targetListItem', () => ({
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
    Mp = Qi('targetOption', () => ({
        $el: 'div',
        attrs: {
            id: '$id + "_target_list_item_" + $index + "_option"',
            'data-checked': '$fns.isSelected($option, $selectedTargetItems)',
            class: '$classes.transferlistOption + " " + $classes.targetOption',
        },
    })),
    Vp = Qi('transferControls', () => ({
        $el: 'div',
        attrs: { id: '$id + "_transfer_controls"' },
    })),
    Fp = Qi('transferButtonForward', () => ({
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
    Bp = Qi('transferButtonForwardAll', () => ({
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
    Pp = Qi('transferButtonBackward', () => ({
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
    Hp = Qi('transferButtonBackwardAll', () => ({
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
    Rp = Qi('controlLabel', 'span'),
    Np = Qi('sourceEmptyMessage', () => ({
        $el: 'li',
        if: '$showSourceEmptyMessage && $sourceEmptyMessage && $state.loading !== true',
        attrs: {
            id: '$id + "_source_empty_message"',
            key: '$sourceEmptyMessage',
            role: 'presentation',
        },
    })),
    Kp = Qi('targetEmptyMessage', () => ({
        $el: 'li',
        if: '$showTargetEmptyMessage && $targetEmptyMessage',
        attrs: {
            id: '$id + "_empty_message"',
            key: '$emptyMessage',
            role: 'presentation',
        },
    })),
    Wp = Qi('emptyMessageInner', 'span'),
    Up = Symbol(),
    Yp = new WeakSet(),
    jp = new WeakSet();
function qp(e, t, o, n) {
    if (
        !(
            e.props.disabled ||
            ((e.props.isSourceOption = o),
            e.props.isSourceOption &&
                Array.isArray(e.value) &&
                e.value.length >= e.props.max)
        )
    )
        if (o) {
            if (e.props.selectedSourceItems.includes(t))
                return (
                    (e.props.selectedSourceItems =
                        e.props.selectedSourceItems.filter((e) => e !== t)),
                    (e.props.activeValue = void 0),
                    void (e.props.activeDescendant = void 0)
                );
            (e.props.selectedTargetItems = []),
                (e.props.selectedSourceItems = [
                    ...e.props.selectedSourceItems,
                    t,
                ]);
        } else {
            if (e.props.selectedTargetItems.includes(t))
                return void (e.props.selectedTargetItems =
                    e.props.selectedTargetItems.filter((e) => e !== t));
            (e.props.selectedSourceItems = []),
                (e.props.selectedTargetItems = [
                    ...e.props.selectedTargetItems,
                    t,
                ]);
        }
}
function zp(e, t) {
    if (((e.props.sourceListOrigin = !0), e.props.maxReached)) return;
    if (t) {
        const o = Array.isArray(e.value) ? [...e.value, t] : [t];
        return void e.input(o);
    }
    const o = e.props.selectedSourceItems.map((e) => gt(e));
    Array.isArray(e.value) ? e.input([...e.value, ...o]) : e.input(o),
        (e.props.selectedSourceItems = []);
}
function Zp(e, t) {
    if (((e.props.sourceListOrigin = !1), t)) {
        const o = Array.isArray(e.value) ? e.value.filter((e) => e !== t) : [];
        return void e.input(o);
    }
    const o = e.props.selectedTargetItems.map((e) => gt(e));
    if (Array.isArray(e.value)) {
        const t = e.value.filter((e) => !o.includes(e));
        e.input(t);
    }
    e.props.selectedTargetItems = [];
}
function Gp(e) {
    var t, o;
    if (e.props.activeValue === Up) {
        const o =
            null === (t = e.props.__root) || void 0 === t
                ? void 0
                : t.getElementById(`${e.props.id}_source_load_more`);
        return void (
            o && o.scrollIntoView({ block: 'nearest', inline: 'start' })
        );
    }
    const n =
        null === (o = e.props.__root) || void 0 === o
            ? void 0
            : o.getElementById(e.props.activeDescendant);
    n && n.scrollIntoView({ block: 'nearest', inline: 'start' });
}
function Xp(e) {
    var t;
    if (Array.isArray(e.value)) {
        const t = [];
        let o = [...e.props.options];
        e.value.forEach((r) => {
            const s = e.props.memoOptions.find((e) => n(gt(e), r));
            if (s && !s.noOptionFound) {
                t.push(s);
                const a = e.props.options.findIndex((e) => n(gt(e), r));
                -1 !== a && (o = o.filter((e) => !n(gt(e), r)));
            } else {
                const e = o.find((e) => n(gt(e), r));
                e
                    ? (t.push(e), (o = o.filter((e) => !n(gt(e), r))))
                    : t.push({ label: String(r), value: r, noOptionFound: !0 });
            }
        }),
            (e.props.targetOptions = e.props.targetInputText
                ? t.filter((t) => e.props.filter(t, e.props.targetInputText, e))
                : t),
            (e.props.sourceOptions = o);
    } else
        (e.props.sourceOptions = [...e.props.options]),
            (e.props.targetOptions = []);
    if (e.props.skipSetActiveValue)
        return void (e.props.skipSetActiveValue = !1);
    (null === (t = e.props.__root) || void 0 === t
        ? void 0
        : t.getElementById(e.props.id + '_source_list_items')) && Jp(e);
}
function Jp(e) {
    var t, o, n, r, s, a, l, i, p;
    if (e.props.isDragging) return;
    if (e.props.targetSearchActive) {
        if (
            (null ===
                (o =
                    null === (t = e.props.__root) || void 0 === t
                        ? void 0
                        : t.activeElement) || void 0 === o
                ? void 0
                : o.id) === `${e.props.id}_target_search_input`
        ) {
            const t = e.props.targetOptions.find((e) => {
                var t;
                return !(null === (t = e.attrs) || void 0 === t
                    ? void 0
                    : t.disabled);
            });
            return t
                ? void (e.props.activeValue = gt(t))
                : void (e.props.activeValue = void 0);
        }
        return;
    }
    if (e.props.sourceSearchActive) {
        if (
            (null ===
                (r =
                    null === (n = e.props.__root) || void 0 === n
                        ? void 0
                        : n.activeElement) || void 0 === r
                ? void 0
                : r.id) === `${e.props.id}_source_search_input`
        ) {
            const t = e.props.sourceOptions.find((e) => {
                var t;
                return !(null === (t = e.attrs) || void 0 === t
                    ? void 0
                    : t.disabled);
            });
            return t
                ? void (e.props.activeValue = gt(t))
                : void (e.props.activeValue = void 0);
        }
        e.props.sourceSearchActive = !1;
    }
    if (!1 === e.props.transferOnSelect)
        return void (e.props.activeValue = void 0);
    const d = e.props.sourceListOrigin
        ? e.props.sourceOptions
        : e.props.targetOptions;
    let c = !1;
    for (let t = e.props.activeIndex; t <= d.length; t++)
        if (
            !(null === (s = d.attrs) || void 0 === s ? void 0 : s.disabled) &&
            d[t]
        ) {
            (c = !0), (e.props.activeValue = gt(d[t]));
            break;
        }
    if (!c && d.length)
        for (let t = e.props.activeIndex; t >= 0; t--)
            if (
                !(null === (a = d.attrs) || void 0 === a
                    ? void 0
                    : a.disabled) &&
                d[t]
            )
                return (c = !0), void (e.props.activeValue = gt(d[t]));
    if (!c) {
        let t;
        (t = e.props.sourceListOrigin
            ? null === (p = e.props.__root) || void 0 === p
                ? void 0
                : p.getElementById(`${e.props.id}`)
            : e.props.searchable
              ? null === (l = e.props.__root) || void 0 === l
                  ? void 0
                  : l.getElementById(`${e.props.id}_source_search_input`)
              : null === (i = e.props.__root) || void 0 === i
                ? void 0
                : i.getElementById(`${e.props.id}_source_list_items`)),
            t && t.focus();
    }
}
function Qp(e, t) {
    return (t ? e.props.sourceOptions : e.props.targetOptions).find((e) => {
        var t;
        return !(null === (t = e.attrs) || void 0 === t ? void 0 : t.disabled);
    });
}
function ed(e) {
    Array.isArray(e.value) &&
        e.value.forEach(async (t) => {
            Lt(
                e,
                t,
                (function (e, t) {
                    const o = [...e.props.options, ...e.props.memoOptions];
                    return o.find((e) => n(gt(e), t));
                })(e, t)
            );
        });
}
function td(e) {
    e.context &&
        ((e.context.handlers.loadMore = xt.bind(null, e)),
        (e.context.fns.getSourceItemCount = (t) =>
            !1 === e.props.transferOnSelect && t.length
                ? t.length + '/' + e.props.sourceOptions.length
                : e.props.sourceOptions.length),
        (e.context.fns.getTargetItemCount = (t) =>
            !1 === e.props.transferOnSelect && t.length
                ? t.length + '/' + e.props.targetOptions.length
                : e.props.targetOptions.length),
        (e.context.fns.isActive = (t, o) => {
            if (!e.props.isDragging && !e.props.touchStarted)
                return n(o, gt(t)) || void 0;
        }),
        (e.context.fns.isSelected = (e, t) =>
            !!t && !!Array.isArray(t) && t.includes(e)),
        (e.context.fns.optionLoading = (t) =>
            e.props.optionLoaderValues.includes(gt(t))),
        (e.context.handlers.clearSearch = () => {
            !(function (e) {
                var t;
                (e.props.sourceSearchActive = !1),
                    (e.props.inputText = ''),
                    yt(e, '', !0);
                const o =
                    null === (t = e.props.__root) || void 0 === t
                        ? void 0
                        : t.getElementById(`${e.props.id}_source_search_input`);
                if (!o) return;
                o.focus();
            })(e);
        }),
        (e.context.handlers.clearTargetSearch = () => {
            !(function (e) {
                var t;
                (e.props.targetSearchActive = !1),
                    (e.props.targetInputText = '');
                const o = [
                        ...new Set([
                            ...e.props.options,
                            ...e.props.memoOptions,
                        ]),
                    ],
                    n = [];
                for (const t of e.value) {
                    const e = o.find((e) => gt(e) === t);
                    e && n.push(e);
                }
                e.props.targetOptions = n;
                const r =
                    null === (t = e.props.__root) || void 0 === t
                        ? void 0
                        : t.getElementById(`${e.props.id}_target_search_input`);
                if (!r) return;
                r.focus();
            })(e);
        }),
        (e.context.handlers.sourceSearchBlur = (t) => {
            setTimeout(() => {
                var o;
                if (
                    t.relatedTarget &&
                    t.relatedTarget instanceof HTMLElement &&
                    (t.relatedTarget.id === `${e.props.id}_source_list_items` ||
                        t.relatedTarget.id === `${e.props.id}`)
                ) {
                    const t =
                        null === (o = e.props.__root) || void 0 === o
                            ? void 0
                            : o.getElementById(
                                  `${e.props.id}_source_search_input`
                              );
                    if (!t) return;
                    t.focus();
                } else e.props.activeValue = void 0;
            });
        }),
        (e.context.handlers.targetSearchBlur = (t) => {
            setTimeout(() => {
                var o;
                if (
                    t.relatedTarget &&
                    t.relatedTarget instanceof HTMLElement &&
                    (t.relatedTarget.id === `${e.props.id}_source_list_items` ||
                        t.relatedTarget.id === `${e.props.id}`)
                ) {
                    const t =
                        null === (o = e.props.__root) || void 0 === o
                            ? void 0
                            : o.getElementById(
                                  `${e.props.id}_target_search_input`
                              );
                    if (!t) return;
                    t.focus();
                } else e.props.activeValue = void 0;
            });
        }),
        (e.context.handlers.listitemClick = (t, o) => (n) => {
            od(e, t, o);
        }),
        (e.context.handlers.transferForward = zp.bind(null, e, void 0)),
        (e.context.handlers.transferForwardAll = () => {
            let t;
            if (e.props.maxReached) return;
            const o = e.props.sourceOptions.map((e) => gt(e));
            (t = Array.isArray(e.value) ? [...e.value, ...o] : [...o]),
                e.input(t),
                (e.props.selectedSourceItems = []);
        }),
        (e.context.handlers.transferBackward = Zp.bind(null, e, void 0)),
        (e.context.handlers.transferBackwardAll = () => {
            Array.isArray(e.value) &&
                (e.input([]), (e.props.selectedTargetItems = []));
        }),
        (e.context.handlers.onSearch = (t) => {
            !(function (e, t) {
                e.props.sourceSearchActive = !0;
                const o = t.target;
                (e.props.inputText = o.value), yt(e, o.value, !0);
            })(e, t);
        }),
        (e.context.handlers.onTargetSearch = (t) => {
            !(function (e, t) {
                e.props.targetSearchActive = !0;
                const o = t.target;
                e.props.targetInputText = o.value;
                const n = [
                        ...new Set([
                            ...e.props.memoOptions,
                            ...e.props.options,
                        ]),
                    ],
                    r = [];
                for (const t of e.value) {
                    const e = n.find((e) => gt(e) === t);
                    e && r.push(e);
                }
                const s = [
                    ...new Map(
                        [...e.props.targetOptions, ...r].map((e) => [
                            JSON.stringify(e),
                            e,
                        ])
                    ).values(),
                ];
                (e.props.targetOptions = s.filter((t) =>
                    e.props.filter(t, o.value, e)
                )),
                    0 === e.props.targetOptions.length
                        ? (e.props.showTargetEmptyMessage = !0)
                        : (e.props.showTargetEmptyMessage = !1);
                Jp(e);
            })(e, t);
        }),
        (e.context.handlers.onMouseenter = (t) => (o) => {
            'touchstart' !== o.type &&
                (t
                    ? (e.props.mouseOnSource = !0)
                    : (e.props.mouseOnTarget = !0));
        }),
        (e.context.handlers.onMouseleave = (t) => (o) => {
            var n;
            if ('touchend' === o.type) return;
            const r =
                null === (n = e.props.__root) || void 0 === n
                    ? void 0
                    : n.getElementById(
                          t
                              ? `${e.props.id}_source_list_items`
                              : `${e.props.id}`
                      );
            r &&
                (r.contains(o.relatedTarget) ||
                    ((e.props.trackHover = !1),
                    (e.props.activeValue = void 0),
                    (e.props.activeDescendant = void 0),
                    (e.props.activeIndex = void 0),
                    t
                        ? (e.props.mouseOnSource = !1)
                        : (e.props.mouseOnTarget = !1)));
        }),
        (e.context.handlers.listitemClick = (t, o) => (n) => {
            (n instanceof MouseEvent && e.props.touchStarted) || od(e, t, o);
        }),
        (e.context.handlers.listitemTouchstart = () => () => {
            !(function (e) {
                e.props.touchStarted = !0;
            })(e);
        }),
        (e.context.handlers.listitemTouchend = (t, o) => (n) => {
            !(function (e, t, o) {
                if (e.props.touchMoved)
                    return (
                        (e.props.touchMoved = !1),
                        void (e.props.touchStarted = !1)
                    );
                const n = gt(t);
                (e.props.activeIndex = e.props.sourceOptions.findIndex(
                    (e) => gt(e) === n
                )),
                    e.props.transferOnSelect
                        ? o
                            ? zp(e, n)
                            : Zp(e, n)
                        : qp(e, t, o);
            })(e, t, o);
        }),
        (e.context.handlers.listitemTouchmove = () => (t) => {
            !(function (e) {
                e.props.touchMoved = !0;
            })(e);
        }),
        (e.context.handlers.sourceSearchFocus = (t) => {
            nd(e, !0);
        }),
        (e.context.handlers.targetSearchFocus = (t) => {
            nd(e, !1);
        }),
        (e.context.handlers.sourceListFocused = (t) => {
            nd(e, !0);
        }),
        (e.context.handlers.targetListFocused = () => {
            nd(e, !1);
        }),
        (e.context.handlers.sourceListBlurred = (t) => {
            e.props.activeValue = void 0;
        }),
        (e.context.handlers.targetListBlurred = (t) => {
            e.props.activeValue = void 0;
        }),
        (e.context.handlers.sourceListKeydown = (t) => {
            rd(e, t, !0);
        }),
        (e.context.handlers.targetListKeydown = (t) => {
            rd(e, t, !1);
        }),
        (e.context.handlers.sourceSearchKeydown = (t) => {
            rd(e, t, !0);
        }),
        (e.context.handlers.targetSearchKeydown = (t) => {
            rd(e, t, !1);
        }));
}
function od(e, t, o, n) {
    var r;
    if (gt(t) === Up)
        return void (
            null === (r = e.context) ||
            void 0 === r ||
            r.handlers.loadMore(!0)
        );
    const s = gt(t);
    (e.props.activeIndex = e.props.sourceOptions.findIndex((e) => gt(e) === s)),
        e.props.transferOnSelect ? (o ? zp(e, s) : Zp(e, s)) : qp(e, t, o);
}
function nd(e, t) {
    const o = Qp(e, t);
    o && ((e.props.sourceListOrigin = t), (e.props.activeValue = gt(o)));
}
function rd(e, t, o) {
    if ('ArrowDown' === t.key || 'ArrowUp' === t.key)
        !(function (e, t, o) {
            var n, r, s;
            e.preventDefault();
            const a = o ? t.props.sourceOptions : t.props.targetOptions,
                l = a.reduce((e, t) => {
                    var o;
                    return (
                        (null === (o = null == t ? void 0 : t.attrs) ||
                        void 0 === o
                            ? void 0
                            : o.disabled) || e.push(gt(t)),
                        e
                    );
                }, []);
            (null === (n = t.store.hasNextPage) || void 0 === n
                ? void 0
                : n.value) && l.push(Up);
            const i = l.indexOf(t.props.activeValue);
            if ('ArrowUp' === e.key && 0 !== i)
                for (let e = i - 1; e >= 0; e--) {
                    (t.props.sourceListOrigin = o),
                        (t.props.activeValue = l[i - 1]);
                    break;
                }
            else if ('ArrowDown' === e.key && i !== l.length - 1)
                for (let e = i + 1; e < l.length; e++)
                    if (
                        !(null ===
                            (s =
                                null === (r = a[e]) || void 0 === r
                                    ? void 0
                                    : r.attrs) || void 0 === s
                            ? void 0
                            : s.disabled)
                    ) {
                        (t.props.sourceListOrigin = o),
                            (t.props.activeValue = l[e]);
                        break;
                    }
            Gp(t);
        })(t, e, o);
    else if ('ArrowRight' === t.key || 'ArrowLeft' === t.key) {
        if ('ArrowLeft' === t.key && o) return;
        if ('ArrowRight' === t.key && !o) return;
        !(function (e, t, o) {
            if (t.props.searchable) return;
            e.preventDefault(),
                (function (e, t) {
                    var o, n, r;
                    if (Qp(e, !t))
                        if (t) {
                            const t =
                                null === (o = e.props.__root) || void 0 === o
                                    ? void 0
                                    : o.getElementById(`${e.props.id}`);
                            t && t.focus();
                        } else if (e.props.searchable) {
                            const t =
                                null === (n = e.props.__root) || void 0 === n
                                    ? void 0
                                    : n.getElementById(
                                          `${e.props.id}_source_search_input`
                                      );
                            t && t.focus();
                        } else {
                            const t =
                                null === (r = e.props.__root) || void 0 === r
                                    ? void 0
                                    : r.getElementById(
                                          `${e.props.id}_source_list_items`
                                      );
                            t && t.focus();
                        }
                })(t, o);
        })(t, e, o);
    } else
        'Enter' === t.key &&
            (function (e, t, o) {
                var n;
                if ((e.preventDefault(), !t.props.activeValue)) return;
                if (t.props.activeValue === Up)
                    return void (
                        null === (n = t.context) ||
                        void 0 === n ||
                        n.handlers.loadMore(!0)
                    );
                const r = o ? t.props.sourceOptions : t.props.targetOptions,
                    s = r.findIndex((e) => gt(e) === t.props.activeValue);
                t.props.activeIndex = s;
                const a = r[s];
                if (!a) return;
                t.props.transferOnSelect
                    ? o
                        ? zp(t, gt(a))
                        : Zp(t, gt(a))
                    : qp(t, a, o);
            })(t, e, o);
}
function sd(e) {
    e.on('created', () => {
        if (
            ('function' == typeof e.props.optionsLoader &&
                ((e.props.skipSetActiveValue = !0), It(e)),
            td(e),
            e.props.disabled && (e.props.draggable = !1),
            ne)
        ) {
            s(
                e.props.id + '_source_list_items',
                (t) => {
                    t instanceof HTMLElement &&
                        (function (e, t) {
                            if (!e.context) return;
                            function o() {
                                return e.props.sourceOptions.map((e) => gt(e));
                            }
                            function n() {
                                return [];
                            }
                            const r = {
                                longTouch: !0,
                                draggingClass: e.context.classes.dragging,
                                dropZoneClass: e.context.classes.dropZone,
                                group: e.props.id,
                                root: e.props.__root || document,
                                disabled:
                                    !e.props.draggable || e.props.maxReached,
                                touchDraggingClass:
                                    e.context.classes.touchDragging,
                                touchDropZoneClass:
                                    e.context.classes.touchDropZone,
                                selectionDraggingClass:
                                    e.context.classes.selectionDragging,
                                selectionDropZoneClass:
                                    e.context.classes.selectionDropZone,
                                touchSelectionDraggingClass:
                                    e.context.classes.touchSelectionDragging,
                                touchSelectionDropZoneClass:
                                    e.context.classes.touchSelectionDropZone,
                                longTouchClass: e.context.classes.longTouch,
                                handleTouchmove(t) {
                                    (e.props.selectedSourceItems = []), L(t);
                                },
                                draggable: (e) =>
                                    'option' === e.getAttribute('role'),
                            };
                            (r.plugins = [
                                I({
                                    handleDragstart(t) {
                                        (e.props.isDragging = !0),
                                            (e.props.trackHover = !1),
                                            (e.props.activeValue = void 0),
                                            (e.props.activeDescendant = void 0),
                                            k(t);
                                    },
                                    handleEnd(t) {
                                        _(t),
                                            (e.props.isDragging = !1),
                                            (e.props.activeValue = void 0),
                                            (e.props.activeDescendant = void 0),
                                            (e.props.activeDescendant = void 0),
                                            (e.props.isDragging = !1),
                                            (e.props.selectedTargetItems = []),
                                            (e.props.selectedSourceItems = []);
                                    },
                                    handleTouchstart(t) {
                                        (e.props.isDragging = !0),
                                            (e.props.trackHover = !1),
                                            (e.props.activeValue = void 0),
                                            (e.props.activeDescendant = void 0),
                                            (e.props.mouseOnSource = !1),
                                            (e.props.mouseOnTarget = !1),
                                            S(t);
                                    },
                                    selections: () =>
                                        e.props.selectedSourceItems.map((e) =>
                                            gt(e)
                                        ),
                                }),
                            ]),
                                w({
                                    parent: t,
                                    getValues: o,
                                    setValues: n,
                                    config: r,
                                }),
                                e.on('prop:disabled', ({ payload: e }) => {
                                    (r.disabled = e),
                                        w({
                                            parent: t,
                                            getValues: o,
                                            setValues: n,
                                            config: r,
                                        });
                                }),
                                e.on('prop:draggable', ({ payload: e }) => {
                                    (r.disabled = !e),
                                        w({
                                            parent: t,
                                            getValues: o,
                                            setValues: n,
                                            config: r,
                                        });
                                }),
                                e.on('prop:maxReached', ({ payload: e }) => {
                                    (r.disabled = e),
                                        w({
                                            parent: t,
                                            getValues: o,
                                            setValues: n,
                                            config: r,
                                        });
                                });
                        })(e, t);
                },
                e.props.__root
            ),
                s(
                    `${e.props.id}`,
                    (t) => {
                        t instanceof HTMLElement &&
                            (function (e, t) {
                                if (!e.context) return;
                                function o() {
                                    return e.props.targetOptions.map((e) =>
                                        gt(e)
                                    );
                                }
                                function n(t, o) {
                                    (e.props.sourceListOrigin = !0), e.input(t);
                                }
                                const r = {
                                    longTouch: !0,
                                    root: e.props.__root,
                                    group: e.props.id,
                                    disabled: !e.props.draggable,
                                    draggingClass: e.context.classes.dragging,
                                    dropZoneClass: e.context.classes.dropZone,
                                    touchDraggingClass:
                                        e.context.classes.touchDragging,
                                    touchDropZoneClass:
                                        e.context.classes.touchDropZone,
                                    selectionDraggingClass:
                                        e.context.classes.selectionDragging,
                                    selectionDropZoneClass:
                                        e.context.classes.selectionDropZone,
                                    touchSelectionDraggingClass:
                                        e.context.classes
                                            .touchSelectionDragging,
                                    touchSelectionDropZoneClass:
                                        e.context.classes
                                            .touchSelectionDropZone,
                                    longTouchClass: e.context.classes.longTouch,
                                    draggable: (e) =>
                                        'option' === e.getAttribute('role'),
                                    plugins: [],
                                };
                                (r.plugins = [
                                    I({
                                        handleDragstart(t) {
                                            (e.props.isDragging = !0),
                                                (e.props.trackHover = !1),
                                                (e.props.activeValue = void 0),
                                                k(t);
                                        },
                                        handleEnd(t) {
                                            _(t),
                                                (e.props.selectedTargetItems =
                                                    []),
                                                (e.props.selectedSourceItems =
                                                    []),
                                                (e.props.activeValue = void 0),
                                                (e.props.trackHover = !0),
                                                (e.props.isDragging = !1);
                                        },
                                        handleTouchstart(t) {
                                            (e.props.trackHover = !1),
                                                (e.props.activeValue = void 0),
                                                (e.props.isDragging = !0),
                                                (e.props.activeDescendant =
                                                    void 0),
                                                S(t);
                                        },
                                        selections: () =>
                                            e.props.selectedTargetItems.map(
                                                (e) => gt(e)
                                            ),
                                    }),
                                ]),
                                    w({
                                        parent: t,
                                        getValues: o,
                                        setValues: n,
                                        config: r,
                                    }),
                                    e.on('prop:disabled', ({ payload: e }) => {
                                        (r.disabled = e),
                                            w({
                                                parent: t,
                                                getValues: o,
                                                setValues: n,
                                                config: r,
                                            });
                                    }),
                                    e.on('prop:draggable', ({ payload: e }) => {
                                        (r.disabled = !e),
                                            w({
                                                parent: t,
                                                getValues: o,
                                                setValues: n,
                                                config: r,
                                            });
                                    });
                            })(e, t);
                    },
                    e.props.__root
                );
            const t = (t) => {
                var o;
                if (e.props.isDragging) return;
                (e.props.mouseX = t.clientX), (e.props.mouseY = t.clientY);
                const n = e.props.mouseOnSource
                        ? `${e.props.id}_source_list_items`
                        : `${e.props.id}`,
                    r =
                        null === (o = e.props.__root) || void 0 === o
                            ? void 0
                            : o.getElementById(n);
                if (r) {
                    const o = r.getBoundingClientRect();
                    t.clientX > o.x &&
                        t.clientX < o.x + o.width &&
                        t.clientY > o.y &&
                        t.clientY < o.y + o.height &&
                        (e.props.trackHover = !0);
                }
            };
            document.addEventListener('mousemove', t);
        }
    });
}
function ad(e, t) {
    var o;
    let n = null,
        r = '',
        s = [];
    if (e.props.mouseOnSource) {
        if (
            ((n = Yp.has(e)),
            (r = `${e.props.id}_source_list_item`),
            (s = [...e.props.sourceOptions]),
            !s || !s.length || n)
        )
            return (s = []), (r = ''), void (n = null);
    } else if (
        e.props.mouseOnTarget &&
        ((n = jp.has(e)),
        (r = `${e.props.id}_target_list_item`),
        (s = [...e.props.targetOptions]),
        !s || !s.length || n)
    )
        return (s = []), (r = ''), void (n = null);
    const a = s.reduce((t, o, n) => {
            var s, a;
            if (null === (s = o.attrs) || void 0 === s ? void 0 : s.disabled)
                return t;
            const l =
                null === (a = e.props.__root) || void 0 === a
                    ? void 0
                    : a.getElementById(r + `_${n}`);
            return l && t.push([l, o]), t;
        }, []),
        l =
            null === (o = e.props.__root) || void 0 === o
                ? void 0
                : o.getElementById(`${e.props.id}_load_more`);
    l && a.push([l, e.props.loadMoreOption]),
        e.props.mouseOnSource && Yp.add(e),
        e.props.mouseOnTarget && jp.add(e),
        a.length && ld(e, a, null, t);
}
function ld(e, t, o, n) {
    const r = n ? n.getBoundingClientRect() : { top: 0, bottom: 0 };
    if (((o = null), e.props.trackHover)) {
        if (e.props.mouseY > r.top && e.props.mouseY < r.bottom) {
            let n = o || 0,
                r = o;
            const s = (t, n) => {
                var r;
                const s = n[0],
                    {
                        y: a,
                        height: l,
                        x: i,
                        width: p,
                    } = s.getBoundingClientRect();
                if (
                    e.props.mouseX > i &&
                    e.props.mouseX < i + p &&
                    e.props.mouseY > a &&
                    e.props.mouseY < a + l
                ) {
                    o = t;
                    const s = n[1];
                    return (
                        (e.props.activeValue =
                            s &&
                            !(null === (r = s.attrs) || void 0 === r
                                ? void 0
                                : r.disabled)
                                ? gt(s)
                                : void 0),
                        !0
                    );
                }
                return !1;
            };
            do {
                if (null !== n && s(n, t[n])) break;
                if (null !== r && s(r, t[r])) break;
                null !== n && (n++, n > t.length - 1 && (n = null)),
                    null !== r && (r--, r < 0 && (r = null));
            } while (null !== n || null !== r);
        }
    } else Gp(e);
    e.props.mouseOnSource || e.props.mouseOnTarget
        ? (e.props.mouseOnSource && Yp.has(e)) ||
          (e.props.mouseOnTarget && jp.has(e))
            ? requestAnimationFrame(ld.bind(null, e, t, o, n))
            : ad(e, n)
        : (Yp.delete(e), jp.delete(e));
}
const id = {
    schema: /* #__PURE__ */ ep(
        /* #__PURE__ */ pp(
            /* #__PURE__ */ dp('$label'),
            /* #__PURE__ */ ap('$help'),
            /* #__PURE__ */ tp(
                /* #__PURE__ */ cp(
                    /* #__PURE__ */ up(
                        /* #__PURE__ */ fp(),
                        /* #__PURE__ */ vp(
                            /* #__PURE__ */ Be(
                                '$optionsLoadingCounter > 0',
                                /* #__PURE__ */ np('loader'),
                                '$fns.getSourceItemCount($selectedSourceItems)'
                            )
                        )
                    ),
                    /* #__PURE__ */ gp(
                        /* #__PURE__ */ $p(
                            /* #__PURE__ */ bp(),
                            /* #__PURE__ */ _p(/* #__PURE__ */ np('close'))
                        )
                    ),
                    /* #__PURE__ */ Sp(
                        /* #__PURE__ */ Np(
                            /* #__PURE__ */ Wp('$sourceEmptyMessage')
                        ),
                        /* #__PURE__ */ Lp(
                            /* #__PURE__ */ Be(
                                '$transferOnSelect !== true && $fns.isSelected($option, $selectedSourceItems)',
                                /* #__PURE__ */ np('selected')
                            ),
                            /* #__PURE__ */ Ip('$option.label')
                        ),
                        /* #__PURE__ */ Dp(
                            /* #__PURE__ */ Be(
                                '$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage',
                                /* #__PURE__ */ Ap(
                                    /* #__PURE__ */ Be(
                                        '$state.loading',
                                        /* #__PURE__ */ np('loader')
                                    ),
                                    '$state.loading && $ui.isLoading.value || $ui.loadMore.value'
                                )
                            )
                        )
                    )
                ),
                /* #__PURE__ */ Vp(
                    /* #__PURE__ */ Bp(
                        /* #__PURE__ */ Rp('$ui.addAllValues.value'),
                        /* #__PURE__ */ np('fastForward')
                    ),
                    /* #__PURE__ */ Fp(
                        /* #__PURE__ */ Rp('$ui.addSelectedValues.value'),
                        /* #__PURE__ */ np('moveRight')
                    ),
                    /* #__PURE__ */ Pp(
                        /* #__PURE__ */ Rp('$ui.removeSelectedValues.value'),
                        /* #__PURE__ */ np('moveLeft')
                    ),
                    /* #__PURE__ */ Hp(
                        /* #__PURE__ */ Rp('$ui.removeAllValues.value'),
                        /* #__PURE__ */ np('rewind')
                    )
                ),
                /* #__PURE__ */ Cp(
                    /* #__PURE__ */ Tp(
                        /* #__PURE__ */ hp(),
                        /* #__PURE__ */ mp(
                            '$fns.getTargetItemCount($selectedTargetItems)'
                        )
                    ),
                    /* #__PURE__ */ wp(
                        /* #__PURE__ */ yp(
                            /* #__PURE__ */ xp(),
                            /* #__PURE__ */ kp(/* #__PURE__ */ np('close'))
                        )
                    ),
                    /* #__PURE__ */ Ep(
                        /* #__PURE__ */ Kp(
                            /* #__PURE__ */ Be(
                                '$state.loading !== true',
                                /* #__PURE__ */ Wp('$targetEmptyMessage')
                            )
                        ),
                        /* #__PURE__ */ Op(
                            /* #__PURE__ */ Be(
                                '$transferOnSelect !== true && $fns.isSelected($option, $selectedTargetItems)',
                                /* #__PURE__ */ np('selected')
                            ),
                            /* #__PURE__ */ Mp(
                                /* #__PURE__ */ Be(
                                    '$fns.optionLoading($option, $optionLoaderValues)',
                                    '$ui.isLoading.value',
                                    '$option.label'
                                )
                            )
                        )
                    )
                )
            ),
            /* #__PURE__ */ lp(/* #__PURE__ */ ip('$message.value'))
        )
    ),
    type: 'input',
    props: [],
    features: [
        /* #__PURE__ */ g('moveRight', 'right'),
        /* #__PURE__ */ g('moveLeft', 'left'),
        /* #__PURE__ */ g('fastForward', 'fastForward'),
        /* #__PURE__ */ g('rewind', 'rewind'),
        /* #__PURE__ */ g('close', 'close'),
        /* #__PURE__ */ g('loader', 'spinner'),
        /* #__PURE__ */ g('selected', 'check'),
        /* #__PURE__ */ $('isLoading'),
        /* #__PURE__ */ $('loadMore'),
        /* #__PURE__ */ $('addAllValues'),
        /* #__PURE__ */ $('addSelectedValues'),
        /* #__PURE__ */ $('removeSelectedValues'),
        /* #__PURE__ */ $('removeAllValues'),
        b,
        function (e) {
            !(function (e) {
                e.addProps([
                    'search',
                    'options',
                    'selectedItems',
                    'activeValue',
                    'activeIndex',
                    'activeDescendant',
                    'targetOptions',
                    'sourceOptions',
                    'optionLoader',
                    'isLoadingOptions',
                    'filterOptions',
                    'inputText',
                    'hasNextPage',
                    'page',
                    'targetLoading',
                    'searchable',
                    'sourceLabel',
                    'targetLabel',
                    'transferOnSelect',
                    'disabled',
                    'placeholder',
                    'filter',
                    'showSourceEmptyMessage',
                    'showTargetEmptyMessage',
                    'sourceEmptyMessage',
                    'targetEmptyMessage',
                    'clearOnSelect',
                    'max',
                    'maxReached',
                    'debounce',
                    'sourceListActive',
                    'optionLoaderValues',
                    'optionLoadingCounter',
                    'optionsLoadingCounter',
                    'memoOptions',
                    'optionsLoaded',
                    'selectedSourceItems',
                    'selectedTargetItems',
                    'draggable',
                    'loadMore',
                    'loadMoreOption',
                    'targetSearchable',
                    'targetInputText',
                ]),
                    (e.props.loadMoreOption = {
                        label: 'Load more',
                        value: Up,
                    }),
                    void 0 === e.props.draggable
                        ? (e.props.draggable = !0)
                        : 'false' === e.props.draggable &&
                          (e.props.draggable = !1),
                    (e.props.optionsLoaderValues = []),
                    (e.props.selectedSourceItems = []),
                    (e.props.selectedTargetItems = []),
                    (e.props.optionsLoaded = void 0),
                    (e.props.memoOptions = []),
                    (e.props.multiple = !0),
                    (e.props.debounce = e.props.debounce
                        ? parseInt(e.props.debounce)
                        : 200),
                    (e.props.optionLoaderValues = []),
                    (e.props.optionsLoadingCounter = 0),
                    (e.props.optionLoadingCounter = 0),
                    (e.props.page = 1),
                    (e.props.hasNextPage = Dt.bind(null, e)),
                    e.props.options
                        ? (e.props.options = [...e.props.options])
                        : (e.props.options = []),
                    (e.props.sourceOptions = []),
                    (e.props.targetOptions = []),
                    'disabled' in e.props &&
                        (e.props.disabled = r(e.props.disabled)),
                    (e.props.searchable = r(e.props.searchable)),
                    e.props.searchable && (e.props.inputText = ''),
                    (e.props.targetSearchable = r(e.props.targetSearchable)),
                    e.props.targetSearchable && (e.props.targetInputText = ''),
                    (e.props.clearOnSelect = r(e.props.clearOnSelect)),
                    void 0 === e.props.transferOnSelect
                        ? (e.props.transferOnSelect = !0)
                        : 'false' === e.props.transferOnSelect &&
                          (e.props.transferOnSelect = !1),
                    e.props.targetOptions.length &&
                        (e.props.targetOptionValues = e.props.targetOptions.map(
                            (e) => gt(e)
                        )),
                    (e.props.initialOptions = [...e.props.options]),
                    e.props.max && (e.props.max = parseInt(e.props.max)),
                    (e.props.sourceListOrigin = void 0),
                    'function' != typeof e.props.filter &&
                        (e.props.filter = (e, t) =>
                            e.label.toLowerCase().includes(t.toLowerCase()));
            })(e),
                (function (e) {
                    e.on('commit', async ({ payload: t }) => {
                        (e.props.activeValue = void 0),
                            e.props.max &&
                                (e.props.maxReached = t.length >= e.props.max),
                            e.props.clearOnSelect &&
                                e.props.inputText &&
                                ((e.props.reFilter = !0),
                                (e.props.inputText = '')),
                            (e.props.memoOptions = [
                                ...new Set([
                                    ...e.props.targetOptions,
                                    ...e.props.memoOptions,
                                ]),
                            ]),
                            e.props.searchable &&
                            e.props.reFilter &&
                            !e.props.initialLoad
                                ? (yt(e, e.props.inputText),
                                  (e.props.reFilter = !1))
                                : e.props.initialLoad ||
                                  (e.isCreated ||
                                      (e.props.skipSetActiveValue = !0),
                                  Xp(e)),
                            'function' == typeof e.props.optionLoader
                                ? ed(e)
                                : e.props.initialLoad ||
                                  (e.props.memoOptions = [
                                      ...new Set([
                                          ...e.props.targetOptions,
                                          ...e.props.memoOptions,
                                      ]),
                                  ]);
                    });
                })(e),
                sd(e),
                (function (e) {
                    e.on('prop:options', () => {
                        e.props.appendingOptions &&
                            ((e.props.skipSetActiveValue = !0),
                            (e.props.appendingOptions = !1)),
                            Xp(e);
                    }),
                        e.on('prop:memoOptions', () => {
                            (e.props.skipSetActiveValue = !0), Xp(e);
                        }),
                        e.on('prop:sourceOptions', () => {
                            0 === e.props.sourceOptions.length
                                ? (e.props.showSourceEmptyMessage = !0)
                                : (e.props.showSourceEmptyMessage = !1),
                                Yp.delete(e);
                        }),
                        e.on('prop:targetOptions', () => {
                            0 === e.props.targetOptions.length
                                ? (e.props.showTargetEmptyMessage = !0)
                                : (e.props.showTargetEmptyMessage = !1);
                        }),
                        e.on('prop:activeValue', ({ payload: t }) => {
                            if (e.props.isDragging)
                                return void (e.props.activeDescendant = void 0);
                            if (t === Up)
                                return void (e.props.activeDescendant = `${e.props.id}_load_more`);
                            const o = (
                                e.props.sourceListOrigin
                                    ? e.props.sourceOptions
                                    : e.props.targetOptions
                            ).findIndex((e) => n(gt(e), t));
                            o >= 0 && e.props.sourceListOrigin
                                ? (e.props.activeDescendant = `${e.props.id}_source_list_item_${o}`)
                                : (e.props.activeDescendant =
                                      o >= 0
                                          ? `${e.props.id}_target_list_item_${o}`
                                          : void 0);
                        }),
                        e.on('prop:mouseOnSource', ({ payload: t }) => {
                            var o;
                            if (
                                t &&
                                !0 !== e.props.disabled &&
                                !e.props.isDragging
                            ) {
                                const t =
                                    null === (o = e.props.__root) ||
                                    void 0 === o
                                        ? void 0
                                        : o.getElementById(
                                              e.props.id + '_source_list_items'
                                          );
                                if (!t) return;
                                (e.props.mouseOnTarget = !1),
                                    (e.props.sourceListOrigin = !0),
                                    Yp.delete(e),
                                    ad(e, t);
                            }
                        }),
                        e.on('prop:mouseOnTarget', ({ payload: t }) => {
                            var o;
                            if (
                                t &&
                                !0 !== e.props.disabled &&
                                !e.props.isDragging
                            ) {
                                const t =
                                    null === (o = e.props.__root) ||
                                    void 0 === o
                                        ? void 0
                                        : o.getElementById(`${e.props.id}`);
                                if (!t) return;
                                (e.props.mouseOnSource = !1),
                                    (e.props.sourceListOrigin = !1),
                                    jp.delete(e),
                                    ad(e, t);
                            }
                        }),
                        e.on('prop:optionsLoadingCounter', ({ payload: t }) => {
                            0 === t &&
                                0 === e.props.optionLoadingCounter &&
                                e.store.set(_t);
                        }),
                        e.on('prop:optionLoadingCounter', ({ payload: t }) => {
                            0 === t &&
                                0 === e.props.optionsLoadingCounter &&
                                (e.store.set(_t),
                                (e.props.skipSetActiveValue = !0),
                                Xp(e));
                        });
                })(e);
        },
    ],
};
const pd = /* #__PURE__ */ Me('sl'),
    {
        outer: dd,
        wrapper: cd,
        inner: ud,
        icon: fd,
        prefix: vd,
        suffix: hd,
        help: md,
        messages: gd,
        message: $d,
    } = /* #__PURE__ */ Ve(pd),
    bd = pd('label', () => ({
        if: '$label',
        $el: 'label',
        attrs: { id: "$id + '_label'" },
    })),
    yd = pd('chart', () => ({ $el: 'div', if: '$chart' })),
    xd = pd('chartBar', () => ({
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
    wd = pd('sliderInner', () => ({
        $el: 'div',
        attrs: { 'data-has-mark-labels': '$markLabels && $marks.length > 0' },
    })),
    _d = pd('track', () => ({
        $el: 'div',
        attrs: { id: "$: 'track-' + $id", onClick: '$handlers.clickTrack' },
    })),
    kd = pd('trackWrapper', () => ({ $el: 'div' })),
    Sd = pd('trackInner', () => ({ $el: 'div' })),
    Ld = pd('fill', () => ({ $el: 'div', attrs: { style: '$fillStyles' } })),
    Id = pd('linkedValues', () => ({ $el: 'div' })),
    Dd = pd('maxValue', () => ({
        $formkit: 'number',
        bind: '$computedMaxInputAttrs',
        ignore: !0,
        number: !0,
        value: { if: '$isMulti', then: '$_value.1', else: '$_value' },
        tabindex: { if: '$disabled', then: -1 },
        onNode: '$handlers.maxNode',
        onBlur: '$handlers.inputBlur',
    })),
    Ad = pd('minValue', () => ({
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
    Cd = pd('marks', () => ({ $el: 'div', if: '$marks' })),
    Td = pd('mark', () => ({
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
    Ed = pd('markLabel', () => ({
        $el: 'span',
        if: '$markLabels',
        children: {
            if: '$step.label !== undefined',
            then: '$step.label',
            else: '',
        },
        attrs: { class: '$: $classes.markLabel + " " + $step.labelClass' },
    })),
    Od = pd('handles', () => ({ $el: 'ul' })),
    Md = pd('handleMax', () => ({
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
            onTouchstartPassive: '$handlers.startDrag',
            style: '$maxHandleStyles',
            tabindex: { if: '$disabled', then: -1, else: 0 },
            onBlur: '$handlers.blur',
            onKeydown: '$handlers.keydown',
        },
    })),
    Vd = pd('handleMin', () => ({
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
            onTouchstartPassive: '$handlers.startDrag',
            style: '$minHandleStyles',
            tabindex: { if: '$disabled', then: -1, else: 0 },
            onBlur: '$handlers.blur',
            onKeydown: '$handlers.keydown',
        },
    })),
    Fd = pd('handleMinInner', () => ({
        $el: 'div',
        attrs: {
            class: '$: $classes.handleInner + " " + $classes.handleMinInner',
        },
    })),
    Bd = pd('handleMaxInner', () => ({
        $el: 'div',
        attrs: {
            class: '$: $classes.handleInner + " " + $classes.handleMaxInner',
        },
    })),
    Pd = pd('tooltipMax', () => ({
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
    Hd = pd('tooltipMin', () => ({
        $el: 'div',
        if: '$isMulti && ($tooltip === true || $tooltip === "auto")',
        children: {
            if: '$_value.0 < $_value.1',
            then: '$tooltipFormat($_value.0, "min")',
            else: '$tooltipFormat($_value.1, "min")',
        },
        attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMin" },
    })),
    Rd = {
        schema: /* #__PURE__ */ dd(
            /* #__PURE__ */ cd(
                /* #__PURE__ */ bd('$label'),
                /* #__PURE__ */ md('$help'),
                /* #__PURE__ */ wd(
                    /* #__PURE__ */ fd('prefix'),
                    /* #__PURE__ */ vd(),
                    /* #__PURE__ */ _d(
                        /* #__PURE__ */ yd(/* #__PURE__ */ xd()),
                        /* #__PURE__ */ kd(
                            /* #__PURE__ */ Sd(
                                /* #__PURE__ */ Ld(),
                                /* #__PURE__ */ Cd(
                                    /* #__PURE__ */ Td(/* #__PURE__ */ Ed())
                                ),
                                /* #__PURE__ */ Od(
                                    /* #__PURE__ */ Vd(
                                        /* #__PURE__ */ Hd(),
                                        /* #__PURE__ */ Fd()
                                    ),
                                    /* #__PURE__ */ Md(
                                        /* #__PURE__ */ Pd(),
                                        /* #__PURE__ */ Bd()
                                    )
                                )
                            )
                        )
                    ),
                    /* #__PURE__ */ hd(),
                    /* #__PURE__ */ fd('suffix'),
                    /* #__PURE__ */ Be(
                        '$showInput && $isMulti === false',
                        /* #__PURE__ */ Dd()
                    )
                ),
                /* #__PURE__ */ Be(
                    '$showInput && $isMulti',
                    /* #__PURE__ */ Id(
                        /* #__PURE__ */ Ad(),
                        /* #__PURE__ */ Dd()
                    )
                ),
                /* #__PURE__ */ gd(/* #__PURE__ */ $d('$message.value'))
            )
        ),
        type: 'input',
        family: '',
        props: [
            'min',
            'max',
            'step',
            'showInput',
            'tooltip',
            'tooltipFormat',
            'inputAttrs',
            'maxInputAttrs',
            'minInputAttrs',
            'marks',
            'markLabels',
            'snapToMarks',
            'chart',
            'scalingFunction',
            'intervals',
        ],
        features: [
            function (e) {
                let t, o, a;
                e.addProps([
                    'isMulti',
                    'maxHandleStyles',
                    'minHandleStyles',
                    'fillStyles',
                    'decimals',
                    'dragging',
                    'lastHandleInteraction',
                    'largestBar',
                    'computedMaxInputAttrs',
                    'computedMinInputAttrs',
                ]);
                const l = {
                    linear: { forward: (e) => e, reverse: (e) => e },
                    log: {
                        forward: (t, o = e.props.min, n = e.props.max) =>
                            n * Math.pow(t / n, 1.5),
                        reverse: (t, o = e.props.min, n = e.props.max) =>
                            n * Math.pow(t / n, 1 / 1.5),
                    },
                };
                let i = !1;
                function p() {
                    const e = document.activeElement;
                    if (e instanceof HTMLInputElement) {
                        const t = e.value;
                        (e.value = ''), (e.value = t);
                    }
                }
                function d(e) {
                    if (!e) return;
                    const t = {
                        disabled: e.props.disabled,
                        min: 'number' == typeof e.props.min ? e.props.min : 0,
                        max:
                            'number' == typeof e.props.max
                                ? e.props.max
                                : void 0,
                        step: e.props.step || 1,
                    };
                    (e.props.minInputAttrs = Object.assign(
                        e.props.minInputAttrs || {},
                        t
                    )),
                        (e.props.maxInputAttrs = Object.assign(
                            e.props.maxInputAttrs || {},
                            t
                        )),
                        (e.props.inputAttrs =
                            e.props.inputAttrs &&
                            'object' == typeof e.props.inputAttrs
                                ? Object.assign(e.props.inputAttrs, t)
                                : t),
                        (e.props.computedMaxInputAttrs =
                            e.props.maxInputAttrs &&
                            'object' == typeof e.props.maxInputAttrs
                                ? Object.assign(
                                      {},
                                      e.props.inputAttrs,
                                      e.props.maxInputAttrs
                                  )
                                : e.props.inputAttrs),
                        (e.props.computedMinInputAttrs =
                            e.props.minInputAttrs &&
                            'object' == typeof e.props.minInputAttrs
                                ? Object.assign(
                                      {},
                                      e.props.inputAttrs,
                                      e.props.minInputAttrs
                                  )
                                : e.props.inputAttrs);
                }
                function c(t) {
                    const { min: o, max: n, intervals: r } = e.props;
                    if (
                        ((t = Math.min(Math.max(t, 0), 100)),
                        !r || 0 === r.length)
                    ) {
                        x();
                        const r = o + (t / 100) * (n - o);
                        return e.props.scalingFunction.reverse(r, o, n);
                    }
                    const s = f(r, o, n);
                    for (let e = 0; e < s.length; e++) {
                        const {
                            value: o,
                            step: n,
                            left: r,
                            width: a,
                            stepsInInterval: l,
                        } = s[e];
                        if (t >= r && t <= r + a) {
                            const e = o + ((t - r) / a) * l * n,
                                s = e % n;
                            return $(s < n / 2 ? e - s : e + (n - s));
                        }
                    }
                    return t > 100 ? n : t < 0 ? o : void 0;
                }
                function u(t, o = e.props.min, n = e.props.max) {
                    const r = e.props.intervals;
                    if (!r || 0 === r.length) {
                        x();
                        return (
                            ((e.props.scalingFunction.forward(t, o, n) - o) /
                                (n - o)) *
                            100
                        );
                    }
                    const s = f(r, o, n);
                    for (let e = 0; e < s.length; e++) {
                        const {
                                value: o,
                                step: r,
                                left: a,
                                width: l,
                                stepsInInterval: i,
                            } = s[e],
                            p = e < s.length - 1 ? s[e + 1].value : n;
                        if (t >= o && t <= p) {
                            return 100 * ((a + ((t - o) / r / i) * l) / 100);
                        }
                    }
                    return 100;
                }
                function f(t, o = e.props.min, n = e.props.max) {
                    (t = [...t]).sort((e, t) => e.value - t.value),
                        t[0].value !== o &&
                            t.unshift({ value: o, step: e.props.step });
                    let r = 0;
                    for (let e = 0; e < t.length; e++) {
                        const o = t[e].value,
                            s =
                                ((e < t.length - 1 ? t[e + 1].value : n) - o) /
                                t[e].step;
                        r += s;
                    }
                    let s = 0;
                    return t.map((e, o) => {
                        const a = e.value,
                            l =
                                ((o < t.length - 1 ? t[o + 1].value : n) - a) /
                                e.step,
                            i = (s / r) * 100;
                        return (
                            (s += l),
                            {
                                value: e.value,
                                step: e.step,
                                left: i,
                                width: (l / r) * 100,
                                stepsInInterval: l,
                                totalSteps: r,
                            }
                        );
                    });
                }
                function v() {
                    const t = parseFloat(`${e.props.min}`),
                        o = parseFloat(`${e.props.max}`);
                    let n,
                        r = 0;
                    if (Array.isArray(e._value)) {
                        const t = [...e._value].sort(h);
                        (r = parseFloat(`${t[0]}`)),
                            (n = parseFloat(`${t[1]}`));
                    } else n = parseFloat(`${e._value}`);
                    (e.props.maxHandleStyles = { left: `${u(n, t, o)}%` }),
                        e.props.isMulti && Array.isArray(e._value)
                            ? ((e.props.minHandleStyles = {
                                  left: `${u(r, t, o)}%`,
                              }),
                              (e.props.fillStyles = {
                                  left: `${u(r, t, o)}%`,
                                  width: u(n, t, o) - u(r, t, o) + '%',
                              }))
                            : (e.props.fillStyles = {
                                  left: '0%',
                                  width: `${u(n, t, o)}%`,
                              });
                }
                function h(e, t) {
                    return parseFloat(`${e}`) - parseFloat(`${t}`);
                }
                function m(o, n = !0) {
                    if (e.props.disabled) return;
                    let r;
                    if (void 0 === o) {
                        if (e.props.isMulti)
                            e.input([b(e.props.min), b(e.props.max)]);
                        else {
                            const t =
                                e.props.min + (e.props.max - e.props.min) / 2;
                            e.input(b(t));
                        }
                        return void v();
                    }
                    if (
                        e.props.isMulti &&
                        Array.isArray(e._value) &&
                        !Array.isArray(o)
                    ) {
                        const n =
                            'min' === e.props.lastHandleInteraction ? 0 : 1;
                        e._value[n] = o;
                        const [s, a] = [...e._value];
                        if (s >= a) {
                            const o =
                                null == t
                                    ? void 0
                                    : t.querySelector(
                                          `[data-handle="${'min' === e.props.lastHandleInteraction ? 'max' : 'min'}"]`
                                      );
                            null == o || o.focus();
                        }
                        r = b([...e._value].sort(h));
                    } else
                        Array.isArray(o)
                            ? (r = b(o))
                            : ((r = b(o)), (r = isNaN(r) ? e.props.min : r));
                    e.props.snapToMarks && (r = y(r));
                    const s = b(g(r));
                    n && e.input(s), v();
                }
                function g(t) {
                    return e.props.isMulti && Array.isArray(t)
                        ? [g(t[0]), g(t[1])]
                        : ((t = isNaN(t) ? e.props.min : t),
                          Math.min(
                              Math.max(parseFloat(`${t}`), e.props.min),
                              e.props.max
                          ));
                }
                function $(t) {
                    return parseFloat(t.toFixed(e.props.decimals));
                }
                function b(t) {
                    if (e.props.snapToMarks) return t;
                    if (!e.props.intervals)
                        return Array.isArray(t)
                            ? t.map((t) =>
                                  $(Math.round(t / e.props.step) * e.props.step)
                              )
                            : $(Math.round(t / e.props.step) * e.props.step);
                    const o = f(e.props.intervals);
                    if (Array.isArray(t))
                        return t.map((t) => {
                            const n = o.find((n, r) => {
                                var s;
                                return (
                                    t >= n.value &&
                                    t <
                                        ((null === (s = o[r + 1]) ||
                                        void 0 === s
                                            ? void 0
                                            : s.value) || e.props.max)
                                );
                            });
                            if (!n) return t;
                            return $(
                                n.value +
                                    Math.round((t - n.value) / n.step) * n.step
                            );
                        });
                    {
                        const n = o.find((n, r) => {
                            var s;
                            return (
                                t >= n.value &&
                                t <
                                    ((null === (s = o[r + 1]) || void 0 === s
                                        ? void 0
                                        : s.value) || e.props.max)
                            );
                        });
                        if (!n) return t;
                        return $(
                            n.value +
                                Math.round((t - n.value) / n.step) * n.step
                        );
                    }
                }
                function y(t) {
                    if (Array.isArray(t))
                        return (t[0] = y(t[0])), (t[1] = y(t[1])), t;
                    {
                        const o = e.props.marks,
                            n = o.reduce(
                                (e, o) =>
                                    Math.abs(o.at - t) < Math.abs(e.at - t)
                                        ? o
                                        : e,
                                o[0]
                            );
                        return n.at;
                    }
                }
                function x() {
                    if (i) return;
                    r(e.props.scalingFunction)
                        ? 'string' == typeof e.props.scalingFunction
                            ? (e.props.scalingFunction =
                                  l[e.props.scalingFunction] || l.linear)
                            : 'object' == typeof e.props.scalingFunction &&
                              (e.props.scalingFunction = {
                                  ...l.linear,
                                  ...e.props.scalingFunction,
                              })
                        : (e.props.scalingFunction = l.linear),
                        (i = !0);
                }
                (e.props.maxHandleStyles = { left: '0%' }),
                    (e.props.fillStyles = { left: '0%', width: '0%' }),
                    (e.props.isMulti = !1),
                    (e.props.step = 1),
                    (e.props.min = 0),
                    (e.props.max = 100),
                    (e.props.tooltipFormat =
                        'function' == typeof e.props.tooltipFormat
                            ? e.props.tooltipFormat
                            : (e, t) => {
                                  if (t) return e;
                              }),
                    (e.props.largestBar = 0),
                    'disabled' in e.props &&
                        (e.props.disabled = r(e.props.disabled)),
                    e.on('created', () => {
                        var l;
                        x(),
                            (e.props.isMulti = Array.isArray(e.value)),
                            (e.props.step = parseFloat(`${e.props.step}`)),
                            (e.props.decimals =
                                (null ===
                                    (l = e.props.step
                                        .toString()
                                        .split('.')[1]) || void 0 === l
                                    ? void 0
                                    : l.length) || 0),
                            (e.props.min = e.props.min
                                ? parseFloat(`${e.props.min}`)
                                : 0),
                            (e.props.max = e.props.max
                                ? parseFloat(`${e.props.max}`)
                                : 100);
                        const i = r(e.props.tooltip);
                        e.props.tooltip =
                            void 0 === e.props.tooltip ? 'auto' : i;
                        const $ = r(e.props.marks);
                        if (
                            ((e.props.marks =
                                !!$ &&
                                (Array.isArray(e.props.marks)
                                    ? e.props.marks
                                    : (function () {
                                          const {
                                                  min: t,
                                                  max: o,
                                                  step: n,
                                              } = e.props,
                                              r = [];
                                          for (let e = t; e <= o; e += n)
                                              r.push({ at: e, label: e });
                                          return r;
                                      })())),
                            (e.props.markLabels = r(e.props.markLabels)),
                            (e.props.snapToMarks = r(e.props.snapToMarks)),
                            (e.props.showInput = r(e.props.showInput)),
                            (e.props.largestBar = e.props.chart
                                ? e.props.chart.reduce(
                                      (e, t) => (t.value > e ? t.value : e),
                                      0
                                  )
                                : e.props.largestBar),
                            d(e),
                            s(
                                `track-${e.props.id}`,
                                () => {
                                    var o;
                                    (t =
                                        null === (o = e.props.__root) ||
                                        void 0 === o
                                            ? void 0
                                            : o.getElementById(
                                                  `track-${e.props.id}`
                                              )),
                                        m(e.value, !1),
                                        v();
                                },
                                e.props.__root
                            ),
                            e.context)
                        ) {
                            let r = 0,
                                s = '';
                            const l = e.context.handlers.blur;
                            (e.context.handlers.blur = (t) => {
                                l(t), e.emit('blur');
                            }),
                                (e.context.handlers.clickTrack = (o) => {
                                    if (!t) return;
                                    e.props.dragging = !1;
                                    const { left: n, width: r } =
                                            t.getBoundingClientRect(),
                                        s = (o.clientX - n) / r;
                                    if (
                                        e.props.isMulti &&
                                        Array.isArray(e.value)
                                    ) {
                                        const [t, o] = e.value,
                                            n =
                                                Math.abs(t - s * e.props.max) <
                                                Math.abs(o - s * e.props.max)
                                                    ? 'min'
                                                    : 'max',
                                            r = 'min' === n ? 0 : 1;
                                        (e.props.lastHandleInteraction = n),
                                            (e.value[r] = c(100 * s)),
                                            m(e._value);
                                    } else m(c(100 * s));
                                }),
                                (e.context.handlers.focus = (o) => {
                                    if (!t) return;
                                    const n = o.target.dataset.handle;
                                    n && (e.props.lastHandleInteraction = n);
                                }),
                                (e.context.handlers.clickHandle = (t) => {
                                    t.stopPropagation(),
                                        e.props.attrs.onClick &&
                                            e.props.attrs.onClick(t),
                                        (e.props.dragging = !1),
                                        m(e._value);
                                }),
                                (e.context.handlers.startDrag = (o) => {
                                    if (!t) return;
                                    e.props.dragging = !0;
                                    const n = 'touchstart' === o.type,
                                        r = n ? 'touchmove' : 'mousemove',
                                        s = n ? 'touchend' : 'mouseup';
                                    (e.props.lastHandleInteraction =
                                        o.target.dataset.handle ||
                                        e.props.lastHandleInteraction),
                                        document.addEventListener(r, _, {
                                            passive: !1,
                                        }),
                                        document.addEventListener(s, () => {
                                            e.context &&
                                                ((e.props.dragging = !1),
                                                document.removeEventListener(
                                                    r,
                                                    _
                                                ),
                                                n &&
                                                    o.target instanceof
                                                        HTMLElement &&
                                                    o.target.blur());
                                        });
                                }),
                                (e.context.handlers.keydown = (t) => {
                                    if (
                                        [
                                            '1',
                                            '2',
                                            '3',
                                            '4',
                                            '5',
                                            '6',
                                            '7',
                                            '8',
                                            '9',
                                            '0',
                                            '.',
                                            '-',
                                        ].includes(t.key)
                                    ) {
                                        t.preventDefault(),
                                            clearTimeout(r),
                                            (s += t.key);
                                        const e = '-' === s ? -1 : 1;
                                        r = window.setTimeout(() => {
                                            '-' !== s
                                                ? (m(parseFloat(s) * e),
                                                  (s = ''))
                                                : (s = '');
                                        }, 350);
                                    }
                                    if (
                                        [
                                            'ArrowLeft',
                                            'ArrowDown',
                                            'ArrowRight',
                                            'ArrowUp',
                                            'PageUp',
                                            'PageDown',
                                            'Home',
                                            'End',
                                        ].includes(t.key)
                                    ) {
                                        t.preventDefault();
                                        const o =
                                                'min' ===
                                                e.props.lastHandleInteraction
                                                    ? 0
                                                    : 1,
                                            n = Array.isArray(e._value)
                                                ? e._value[o]
                                                : e._value,
                                            r = (function (t, o) {
                                                if (!e.props.intervals)
                                                    return e.props.step;
                                                const n = f(e.props.intervals);
                                                if (t >= e.props.max)
                                                    return n[n.length - 1].step;
                                                let r = n.find((o, r) => {
                                                    var s;
                                                    return (
                                                        t >= o.value &&
                                                        t <
                                                            ((null ===
                                                                (s =
                                                                    n[r + 1]) ||
                                                            void 0 === s
                                                                ? void 0
                                                                : s.value) ||
                                                                e.props.max)
                                                    );
                                                });
                                                if (!r) return e.props.step;
                                                if (-1 === o) {
                                                    t - r.step < r.value &&
                                                        (r =
                                                            n[
                                                                n.indexOf(r) - 1
                                                            ] || r);
                                                }
                                                return r.step;
                                            })(
                                                n,
                                                [
                                                    'ArrowLeft',
                                                    'ArrowDown',
                                                    'PageDown',
                                                ].includes(t.key)
                                                    ? -1
                                                    : 1
                                            );
                                        if (
                                            e.props.marks &&
                                            e.props.snapToMarks
                                        ) {
                                            const o = y(n),
                                                r = e.props.marks.find(
                                                    (e) => e.at === o
                                                ),
                                                s = e.props.marks.indexOf(r),
                                                a = [
                                                    'ArrowLeft',
                                                    'ArrowDown',
                                                ].includes(t.key)
                                                    ? -1
                                                    : 1,
                                                l = Math.min(
                                                    Math.max(0, s + a),
                                                    e.props.marks.length - 1
                                                );
                                            return void m(e.props.marks[l].at);
                                        }
                                        if (t.metaKey)
                                            return void ('ArrowLeft' ===
                                                t.key || 'ArrowDown' === t.key
                                                ? m(e.props.min)
                                                : m(e.props.max));
                                        if ('Home' === t.key)
                                            return void m(e.props.min);
                                        if ('End' === t.key)
                                            return void m(e.props.max);
                                        if (
                                            [
                                                'ArrowUp',
                                                'ArrowDown',
                                                'ArrowLeft',
                                                'ArrowRight',
                                            ].includes(t.key)
                                        ) {
                                            m(
                                                n +
                                                    (t.shiftKey ? 10 * r : r) *
                                                        ([
                                                            'ArrowLeft',
                                                            'ArrowDown',
                                                        ].includes(t.key)
                                                            ? -1
                                                            : 1)
                                            );
                                        }
                                        'PageUp' === t.key
                                            ? m(n + 10 * r)
                                            : 'PageDown' === t.key &&
                                              m(n - 10 * r);
                                    }
                                }),
                                (e.context.handlers.maxNode = (t) => {
                                    (a = t),
                                        t.hook.commit((o, r) => {
                                            if (n(t.value, o)) return r(o);
                                            if (
                                                (`${t.value}`.includes('.') &&
                                                    !`${o}`.includes('.') &&
                                                    p(),
                                                e.props.isMulti &&
                                                    Array.isArray(e.value))
                                            ) {
                                                m([e.value[0], o]);
                                            } else m(o);
                                            return r(g(o));
                                        });
                                }),
                                (e.context.handlers.minNode = (t) => {
                                    (o = t),
                                        t.hook.commit((o, r) => {
                                            if (n(t.value, o)) return r(o);
                                            if (
                                                (`${t.value}`.includes('.') &&
                                                    !`${o}`.includes('.') &&
                                                    p(),
                                                e.props.isMulti &&
                                                    Array.isArray(e.value))
                                            ) {
                                                m([o, e.value[1]]);
                                            } else m(o);
                                            return r(g(o));
                                        });
                                }),
                                (e.context.handlers.inputBlur = () => {
                                    if (
                                        e.props.isMulti &&
                                        Array.isArray(e._value)
                                    ) {
                                        m([...e._value].sort(h));
                                    }
                                }),
                                (e.context.fns.calculateMarkPosition = (t) =>
                                    u(t, e.props.min, e.props.max));
                        }
                        let w;
                        function _(o) {
                            var n;
                            if (!t || !e.props.dragging) return;
                            o.preventDefault();
                            const r =
                                    o.clientX ||
                                    ((null === (n = o.touches) || void 0 === n
                                        ? void 0
                                        : n.length) &&
                                        o.touches[0].clientX),
                                { left: s, width: a } =
                                    t.getBoundingClientRect(),
                                l = b(c(((r - s) / a) * 100));
                            w !== l && ((w = l), m(l));
                        }
                        m(e.value);
                    }),
                    e.on('input', ({ payload: t }) => {
                        Array.isArray(e.value) && Array.isArray(t)
                            ? (e.value[0] === t[0] && e.value[1] === t[1]) ||
                              m(t, !1)
                            : e.value !== t && m(t, !1),
                            (function () {
                                if (
                                    e.props.isMulti &&
                                    Array.isArray(e._value)
                                ) {
                                    const [t, n] = [...e._value];
                                    o && o.input($(t)), a && a.input($(n));
                                } else a && a.input(e._value);
                            })();
                    }),
                    e.on('prop:max', () => {
                        (e.props.max = e.props.max
                            ? parseFloat(`${e.props.max}`)
                            : 100),
                            m(e.value),
                            d(e);
                    }),
                    e.on('prop:min', () => {
                        (e.props.min = e.props.min
                            ? parseFloat(`${e.props.min}`)
                            : 0),
                            m(e.value),
                            d(e);
                    });
            },
        ],
    },
    Nd = /* #__PURE__ */ Me('cp'),
    {
        outer: Kd,
        wrapper: Wd,
        inner: Ud,
        label: Yd,
        prefix: jd,
        suffix: qd,
        help: zd,
        messages: Zd,
        message: Gd,
        icon: Xd,
    } = /* #__PURE__ */ Ve(Nd),
    Jd = Nd('swatchPreview', () => ({
        $el: 'div',
        attrs: {
            id: '$id',
            class: '$classes.swatchPreview',
            tabindex: { if: '$disabled', then: -1, else: 0 },
            onClick: '$handlers.inputPreviewClick',
            onFocusout: '$handlers.inputPreviewFocusout',
            onKeydown: '$handlers.inputPreviewKeydown',
            role: 'button',
            'aria-valuetext': '$: "Current color: " + $value',
        },
    })),
    Qd = Nd('valueString', () => ({
        $el: 'span',
        attrs: { class: '$classes.valueString' },
        children: {
            if: '$format === "hex"',
            then: '$hex',
            else: {
                if: '$format === "rgba"',
                then: '$rgbaString',
                else: {
                    if: '$format === "hsla"',
                    then: '$hslaString',
                    else: '',
                },
            },
        },
    })),
    ec = Nd('panel', () => ({
        $el: 'div',
        attrs: {
            id: '$: $id + "_popover"',
            class: '$classes.panel',
            onKeydown: '$handlers.panelKeydown',
            'aria-role': { if: '$layout === popover', then: 'dialog' },
            'aria-modal': { if: '$layout === popover', then: 'true' },
            'aria-label': '$label',
            popover: '$popover',
            style: {
                if: '$usePopover',
                then: {
                    margin: 0,
                    top: '$popoverCoordinates.y + "px"',
                    left: '$popoverCoordinates.x + "px"',
                },
                else: {
                    position: {
                        if: '$inline === undefined || $inline === false',
                        then: 'absolute',
                    },
                },
            },
        },
    })),
    tc = Nd('panelClose', () => ({
        $el: 'button',
        attrs: {
            type: 'button',
            class: '$classes.panelClose',
            onClick: '$handlers.closePanel',
            tabindex: { if: '$showPanelClose', then: -1, else: 0 },
            onKeydown: '$handlers.panelCloseKeydown',
            'aria-label': '$ui.close.value',
        },
    })),
    oc = Nd('controlGroup', () => ({
        $el: 'div',
        attrs: {
            class: '$classes.controlGroup',
            'data-eye-dropper': '$hasNativeEyeDropper && $eyeDropper',
            role: 'group',
        },
    })),
    nc = Nd('LS', () => ({ $el: 'div', attrs: { class: '$classes.LS' } })),
    rc = Nd('canvasLS', () => ({
        $el: 'canvas',
        attrs: {
            id: '$: "canvas-ls-" + $id',
            class: '$classes.canvas + " " + $classes.canvasLS',
            width: 256,
            height: 256,
            'aria-hidden': 'true',
        },
    })),
    sc = Nd('controlLS', () => ({
        $el: 'div',
        attrs: {
            tabindex: { if: '$disabled', then: -1, else: 0 },
            class: '$classes.control + " " + $classes.controlLS',
            onKeydown: '$handlers.lsKeydown',
            style: {
                left: '$controlLSPosition.x + "%"',
                top: '$controlLSPosition.y + "%"',
                backgroundColor:
                    '$: "hsl(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%)"',
            },
            role: 'slider',
            'aria-valuemin': 0,
            'aria-valuemax': 1,
            'aria-valuetext':
                '$: "Lightness: " + $hslaPercent.l + "%, Saturation: " + $hslaPercent.s + "%"',
        },
    })),
    ac = Nd('hue', () => ({ $el: 'div', attrs: { class: '$classes.hue' } })),
    lc = Nd('canvasHue', () => ({
        $el: 'canvas',
        attrs: {
            id: '$: "canvas-hue-" + $id',
            class: '$classes.canvas + " " + $classes.canvasHue',
            width: 256,
            height: 10,
            'aria-hidden': 'true',
        },
    })),
    ic = Nd('controlHue', () => ({
        $el: 'div',
        attrs: {
            tabindex: { if: '$disabled', then: -1, else: 0 },
            onKeydown: '$handlers.hueControlKeydown',
            class: '$classes.control + " " + $classes.controlHue',
            style: {
                left: '$: "min(max(" + (($hsla.h / 360) * 100) + "%, 3px), calc(100% - 3px))"',
                backgroundColor: '$: "hsl(" + $hsla.h + "deg, 100%, 50%)"',
            },
            role: 'slider',
            'aria-valuemin': 0,
            'aria-valuemax': 360,
            'aria-valuenow': '$h',
        },
    })),
    pc = Nd('alpha', () => ({
        $el: 'div',
        attrs: {
            class: '$classes.alpha',
            style: {
                opacity: { if: '$alpha', then: '1', else: '0.5' },
                cursor: { if: '$alpha', then: '', else: 'not-allowed' },
                filter: { if: '$alpha', then: '', else: 'grayscale(1)' },
            },
        },
    })),
    dc = Nd('canvasAlpha', () => ({
        $el: 'canvas',
        attrs: {
            id: '$: "canvas-alpha-" + $id',
            class: '$classes.canvas + " " + $classes.canvasAlpha',
            width: 256,
            height: 10,
            'aria-hidden': 'true',
            style: {
                pointerEvents: { if: '$alpha', then: 'auto', else: 'none' },
            },
        },
    })),
    cc = Nd('controlAlpha', () => ({
        $el: 'div',
        attrs: {
            tabindex: {
                if: '$disabled || $alpha === undefined',
                then: -1,
                else: 0,
            },
            onKeydown: '$handlers.alphaControlKeydown',
            class: '$classes.control + " " + $classes.controlAlpha',
            style: {
                left: '$: "min(max(" + ($hsla.a * 100) + "%, 3px), calc(100% - 3px))"',
                backgroundImage:
                    '$: "linear-gradient(to right, hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + "), hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + ")), linear-gradient(to right, white, white)"',
                pointerEvents: { if: '$alpha', then: 'auto', else: 'none' },
            },
            role: 'slider',
            'aria-valuemin': 0,
            'aria-valuemax': 1,
            'aria-valuenow': '$hsla.a',
        },
    })),
    uc = Nd('preview', () => ({
        $el: 'div',
        attrs: { class: '$classes.preview' },
    })),
    fc = Nd('canvasPreview', () => ({
        $el: 'canvas',
        attrs: {
            id: '$: "canvas-preview-" + $id',
            class: '$classes.canvas + " " + $classes.canvasPreview',
            width: 33,
            height: 33,
            'aria-hidden': 'true',
        },
    })),
    vc = Nd('canvasSwatchPreview', () => ({
        $el: 'div',
        attrs: { class: '$classes.canvasSwatchPreviewWrapper' },
        children: [
            {
                $el: 'canvas',
                attrs: {
                    id: '$: "canvas-swatch-preview-" + $id',
                    class: '$classes.canvas + " " + $classes.canvasSwatchPreview',
                    width: 33,
                    height: 33,
                    'aria-hidden': 'true',
                },
            },
        ],
    })),
    hc = Nd('eyeDropper', () => ({
        $el: 'div',
        attrs: {
            tabindex: { if: '$disabled', then: -1, else: 0 },
            role: 'button',
            onKeydown: '$handlers.eyeDropperKeydown',
            id: '$: "eye-dropper-" + $id',
            class: '$classes.eyeDropper',
        },
    })),
    mc = Nd('formatField', () => ({
        $el: 'div',
        attrs: { class: '$classes.formatField' },
    })),
    gc = Nd('colorInputGroup', () => ({
        $el: 'div',
        attrs: { class: '$classes.colorInputGroup', 'aria-role': 'group' },
    })),
    $c = Nd('hexField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.hexFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    onInput: '$handlers.hexInput',
                    onKeydown: '$handlers.hexKeydown',
                    onFocus: '$handlers.hexFocus',
                    onBlur: '$handlers.hexBlur',
                    id: '$: "hex-" + $id',
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    disabled: '$disabled',
                    class: '$classes.colorField + " " + $classes.hexField',
                    value: '$hex',
                    autocomplete: 'off',
                },
            },
            {
                $el: 'label',
                children: 'HEX',
                attrs: { for: '$: "hex-" + $id', class: '$classes.fieldLabel' },
            },
        ],
    })),
    bc = Nd('rField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.rFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    id: '$: "r-" + $id',
                    onInput: '$handlers.rangeLimitInput("rgba", 0, 255)',
                    onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)',
                    type: 'number',
                    class: '$classes.colorField + " " + $classes.rField',
                    min: 0,
                    max: 255,
                    step: 1,
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    disabled: '$disabled',
                    value: '$rgba.r',
                    autocomplete: 'off',
                },
            },
            {
                $el: 'label',
                children: 'R',
                attrs: { for: '$: "r-" + $id', class: '$classes.fieldLabel' },
            },
        ],
    })),
    yc = Nd('gField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.gFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    id: '$: "g-" + $id',
                    onInput: '$handlers.rangeLimitInput("rgba", 0, 255)',
                    onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)',
                    type: 'number',
                    class: '$classes.colorField + " " + $classes.gField',
                    min: 0,
                    max: 255,
                    step: 1,
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    disabled: '$disabled',
                    value: '$rgba.g',
                    autocomplete: 'off',
                },
            },
            {
                $el: 'label',
                children: 'G',
                attrs: { for: '$: "g-" + $id', class: '$classes.fieldLabel' },
            },
        ],
    })),
    xc = Nd('bField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.bFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    id: '$: "b-" + $id',
                    onInput: '$handlers.rangeLimitInput("rgba", 0, 255)',
                    onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)',
                    type: 'number',
                    class: '$classes.colorField + " " + $classes.bField',
                    min: 0,
                    max: 255,
                    step: 1,
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    disabled: '$disabled',
                    value: '$rgba.b',
                    autocomplete: 'off',
                },
            },
            {
                $el: 'label',
                children: 'B',
                attrs: { for: '$: "b-" + $id', class: '$classes.fieldLabel' },
            },
        ],
    })),
    wc = Nd('aField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.aFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    id: '$: "a-" + $id',
                    onInput: '$handlers.rangeLimitInput("alpha", 0, 1)',
                    onKeydown:
                        '$handlers.rangeLimitKeydown("alpha", 0, 1, 0.01)',
                    type: 'text',
                    class: '$classes.colorField + " " + $classes.aField',
                    value: '$rgba.a',
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    disabled: '$disabled || $alpha === undefined',
                    autocomplete: 'off',
                    style: {
                        opacity: { if: '$alpha', then: '1', else: '0.33' },
                        cursor: {
                            if: '$alpha',
                            then: void 0,
                            else: 'not-allowed',
                        },
                    },
                    'aria-valuemin': 0,
                    'aria-valuemax': 1,
                    'aria-valuenow': '$rgba.a',
                },
            },
            {
                $el: 'label',
                children: 'A',
                attrs: {
                    for: '$: "a-" + $id',
                    class: '$classes.fieldLabel',
                    style: {
                        opacity: { if: '$alpha', then: '1', else: '0.33' },
                    },
                },
            },
        ],
    })),
    _c = Nd('hField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.hFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    id: '$: "h-" + $id',
                    onInput: '$handlers.rangeLimitInput("hsla", 0, 360)',
                    onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 360, 1)',
                    type: 'text',
                    class: '$classes.colorField + " " + $classes.hField',
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    disabled: '$disabled',
                    value: '$hslaPercent.h',
                    autocomplete: 'off',
                    'aria-valuemin': 0,
                    'aria-valuemax': 360,
                    'aria-valuenow': '$hsla.h',
                },
            },
            {
                $el: 'label',
                children: 'H',
                attrs: { for: '$: "h-" + $id', class: '$classes.fieldLabel' },
            },
        ],
    })),
    kc = Nd('sField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.sFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    id: '$: "s-" + $id',
                    onInput: '$handlers.rangeLimitInput("hsla", 0, 100)',
                    onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)',
                    type: 'text',
                    class: '$classes.colorField + " " + $classes.sField',
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    value: '$hslaPercent.s',
                    autocomplete: 'off',
                    'aria-valuemin': 0,
                    'aria-valuemax': 100,
                    'aria-valuenow': '$hsla.s',
                },
            },
            {
                $el: 'label',
                children: 'S',
                attrs: { for: '$: "s-" + $id', class: '$classes.fieldLabel' },
            },
        ],
    })),
    Sc = Nd('lField', () => ({
        $el: 'div',
        attrs: { class: '$classes.fieldGroup + " " + $classes.lFieldGroup' },
        children: [
            {
                $el: 'input',
                attrs: {
                    id: '$: "l-" + $id',
                    onInput: '$handlers.rangeLimitInput("hsla", 0, 100)',
                    onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)',
                    type: 'text',
                    class: '$classes.colorField + " " + $classes.lField',
                    tabindex: { if: '$disabled', then: -1, else: 0 },
                    disabled: '$disabled',
                    value: '$hslaPercent.l',
                    autocomplete: 'off',
                    'aria-valuemin': 0,
                    'aria-valuemax': 100,
                    'aria-valuenow': '$hsla.l',
                },
            },
            {
                $el: 'label',
                children: 'L',
                attrs: { for: '$: "l-" + $id', class: '$classes.fieldLabel' },
            },
        ],
    })),
    Lc = Nd('formatSwitcher', () => ({
        $el: 'div',
        attrs: {
            class: '$classes.formatSwitcher',
            onClick: '$handlers.toggleFormat',
            tabindex: { if: '$disabled', then: -1, else: 0 },
            onKeydown: '$handlers.formatSwitcherKeydown',
            role: 'button',
            'aria-label': '$ui.next.value',
        },
    })),
    Ic = Nd('swatches', () => ({
        $el: 'div',
        attrs: {
            id: '$: "swatches-" + $id',
            class: '$classes.swatches',
            'data-keyboard-nav': '$swatchIsUsingKeyboardNav',
        },
    })),
    Dc = Nd('swatch', () => ({
        $el: 'div',
        for: ['swatch', 'index', '$options'],
        if: '$swatch',
        attrs: {
            if: '$swatch.group',
            then: { class: '$classes.swatchGroup' },
            else: { class: '$classes.swatch', title: '$swatch.label' },
        },
        children: {
            if: '$swatch.group',
            then: [
                {
                    $el: 'span',
                    attrs: { class: '$classes.swatchGroupLabel' },
                    children: '$swatch.group',
                },
                {
                    $el: 'div',
                    for: ['groupSwatch', 'swatchIndex', '$swatch.options'],
                    attrs: {
                        class: '$classes.swatch',
                        title: '$groupSwatch.label',
                    },
                    children: [
                        {
                            $el: 'canvas',
                            attrs: {
                                class: '$classes.swatchCanvas',
                                width: 21,
                                height: 21,
                                onClick: '$handlers.swatchClick',
                                onKeydown: '$handlers.swatchKeydown',
                                tabindex: {
                                    if: '$: ($focusedSwatch === $fns.anyToHsvaString($groupSwatch.value, 0))',
                                    then: {
                                        if: '$disabled',
                                        then: -1,
                                        else: 0,
                                    },
                                    else: -1,
                                },
                                key: '$groupSwatch.label + "-" + $groupSwatch.value',
                                'data-color':
                                    '$fns.anyToHsvaString($groupSwatch.value, 0)',
                                'data-color-precise':
                                    '$fns.anyToHsvaString($groupSwatch.value, 2)',
                                'data-group': '$index',
                                'data-label': '$swatch.label',
                                role: 'button',
                                'aria-label': '$swatch.label',
                            },
                        },
                    ],
                },
            ],
            else: {
                $el: 'canvas',
                attrs: {
                    class: '$classes.swatchCanvas',
                    width: 21,
                    height: 21,
                    onClick: '$handlers.swatchClick',
                    onKeydown: '$handlers.swatchKeydown',
                    tabindex: {
                        if: '$: ($focusedSwatch === $fns.anyToHsvaString($swatch.value, 0))',
                        then: { if: '$disabled', then: -1, else: 0 },
                        else: -1,
                    },
                    key: '$swatch.label + "-" + $swatch.value',
                    'data-color': '$fns.anyToHsvaString($swatch.value, 0)',
                    'data-color-precise':
                        '$fns.anyToHsvaString($swatch.value, 2)',
                    'data-group': 0,
                    'data-label': '$swatch.label',
                    role: 'button',
                    'aria-label': '$swatch.label',
                },
            },
        },
    })),
    Ac =
        /rgba?\((\d+%?)\s*(?:,?\s*|\s+)(\d+%?)\s*(?:,?\s*|\s+)(\d+%?)(?:\s*(?:,?\s*|\s+|\/\s*)(\d*(?:\.\d+)?%?))?\)/i,
    Cc =
        /^hsla?\((\d{1,3}deg|[\d.]+)\s*,?\s*([\d.]+%)\s*,?\s*([\d.]+%)(?:\s*,?\s*([\d.]+%?))?\)$/i;
function Tc(e, t) {
    const o = Math.pow(10, t);
    return Math.round(e * o) / o;
}
function Ec(e) {
    const [t, o, n, r] = (function (e) {
        (e = e.replace('#', '')),
            3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        const t = parseInt(e.slice(0, 2), 16),
            o = parseInt(e.slice(2, 4), 16),
            n = parseInt(e.slice(4, 6), 16),
            r = e.length >= 8 ? parseInt(e.slice(6, 8), 16) / 255 : 1;
        return (function (e, t, o, n = 1) {
            const r = e / 255,
                s = t / 255,
                a = o / 255,
                l = Math.max(r, s, a),
                i = Math.min(r, s, a);
            let p,
                d = 0;
            const c = (l + i) / 2;
            if (l === i) d = p = 0;
            else {
                const e = l - i;
                switch (((p = c > 0.5 ? e / (2 - l - i) : e / (l + i)), l)) {
                    case r:
                        d = (s - a) / e + (s < a ? 6 : 0);
                        break;
                    case s:
                        d = (a - r) / e + 2;
                        break;
                    case a:
                        d = (r - s) / e + 4;
                }
                d *= 60;
            }
            return [d, 255 * p, 255 * c, n];
        })(t, o, n, r);
    })(e);
    return [...Mc(t, o, n, r)];
}
function Oc(e, t, o, n = 1) {
    const r = t / 100,
        s = o / 100,
        a = ((2 - r) * s) / 2;
    return (
        0 !== a &&
            (1 === a ||
                (t = a < 0.5 ? (r * s) / (2 * a) : (r * s) / (2 - 2 * a))),
        [e, Tc(255 * t, 2), Tc(255 * a, 2), n]
    );
}
function Mc(e, t, o, n = 1) {
    const r = Tc(t / 255, 4),
        s = Tc(o / 255, 4);
    if (1 === s) return [e, 0, 100, n];
    const a = Tc(s + r * Math.min(s, 1 - s), 4);
    let l = t / 2.55;
    return (
        0 !== a &&
            (l = 1 !== s && 0 !== s ? ((2 * (a - s)) / a) * 100 : t / 2.55),
        [e, Tc(l, 2), Tc(100 * a, 2), n]
    );
}
function Vc(e, t, o, n = 1) {
    const r = o / 100,
        s = r * (t / 100),
        a = s * (1 - Math.abs(((e / 60) % 2) - 1)),
        l = r - s;
    let i = 0,
        p = 0,
        d = 0;
    return (
        ([i, p, d] =
            e < 60
                ? [s, a, 0]
                : e < 120
                  ? [a, s, 0]
                  : e < 180
                    ? [0, s, a]
                    : e < 240
                      ? [0, a, s]
                      : e < 300
                        ? [a, 0, s]
                        : [s, 0, a]),
        (i = Math.round(255 * (i + l))),
        (p = Math.round(255 * (p + l))),
        (d = Math.round(255 * (d + l))),
        [
            Math.min(Math.max(i, 0), 255),
            Math.min(Math.max(p, 0), 255),
            Math.min(Math.max(d, 0), 255),
            n,
        ]
    );
}
function Fc(e, t, o, n = 1) {
    const r = e / 255,
        s = t / 255,
        a = o / 255,
        l = Math.max(r, s, a),
        i = Math.min(r, s, a);
    let p = 0;
    const d = l,
        c = l - i,
        u = 0 === l ? 0 : c / l;
    if (l !== i) {
        switch (l) {
            case r:
                p = (s - a) / c + (s < a ? 6 : 0);
                break;
            case s:
                p = (a - r) / c + 2;
                break;
            case a:
                p = (r - s) / c + 4;
        }
        p /= 6;
    }
    return [360 * p, 100 * u, 100 * d, n];
}
function Bc(e, t, o, n = 1) {
    const [r, s, a, l] = Vc(e, t, o, n);
    return (function (e, t, o, n = 1) {
        const r = (e) =>
                Math.round(e).toString(16).padStart(2, '0').toUpperCase(),
            s = (function (e) {
                return Math.round(255 * e)
                    .toString(16)
                    .padStart(2, '0')
                    .toUpperCase();
            })(n);
        return '#' + r(e) + r(t) + r(o) + `${'FF' === s ? '' : s}`;
    })(r, s, a, l);
}
function Pc(e) {
    return /^(#?)([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(e);
}
function Hc(e) {
    if (e) {
        if (Pc(e)) return Ec(e);
        if (e.startsWith('rgb')) {
            const t = e.match(Ac);
            if (!t) return [0, 0, 0, 1];
            const o = (e) =>
                e.endsWith('%')
                    ? Math.round(2.55 * Number(e.slice(0, -1)))
                    : Number(e);
            return Fc(
                o(t[1]),
                o(t[2]),
                o(t[3]),
                t[4]
                    ? t[4].endsWith('%')
                        ? Number(t[4].slice(0, -1)) / 100
                        : Number(t[4])
                    : 1
            );
        }
        if (e.startsWith('hsl')) {
            const t = e.match(Cc);
            if (!t) return [0, 0, 0, 1];
            const o = Number(t[1].replace('deg', '').trim()),
                n = Number(t[2].slice(0, -1)) / 100,
                r = Number(t[3].slice(0, -1)) / 100,
                s = t[4]
                    ? t[4].endsWith('%')
                        ? Number(t[4].slice(0, -1)) / 100
                        : Number(t[4])
                    : 1;
            return Mc(o, Tc(255 * n, 2), Tc(255 * r, 2), s);
        }
    }
}
function Rc(e) {
    const [t, o, n, r] = e.split('-').map((e) => Number(e));
    return [t, o, n, r];
}
function Nc(e, t = 150, o = !0) {
    let n = null,
        r = !0;
    return (...s) => {
        const a = () => {
            e(...s), (n = null);
        };
        o && r && ((r = !1), a()), n || (n = setTimeout(a, t));
    };
}
function Kc(e) {
    return !1 !== e && 'false' !== e;
}
function Wc(e) {
    return e.tabIndex >= 0 && !e.disabled && null !== e.offsetParent;
}
const Uc = { 'canvas-ls': 'LS', 'canvas-hue': 'Hue', 'canvas-alpha': 'Alpha' };
const Yc = {
        schema: /* #__PURE__ */ Kd(
            /* #__PURE__ */ Wd(
                /* #__PURE__ */ Yd('$label'),
                /* #__PURE__ */ Be(
                    '$inline && $help',
                    /* #__PURE__ */ zd('$help')
                ),
                /* #__PURE__ */ Ud(
                    /* #__PURE__ */ Be(
                        '($inline === undefined || $inline === false) && $prefixIcon !== undefined',
                        /* #__PURE__ */ Xd('prefix', 'label')
                    ),
                    /* #__PURE__ */ Be(
                        '$inline === undefined || $inline === false',
                        /* #__PURE__ */ jd()
                    ),
                    /* #__PURE__ */ Be(
                        '$inline === undefined || $inline === false',
                        /* #__PURE__ */ Jd(
                            /* #__PURE__ */ vc(),
                            /* #__PURE__ */ Be(
                                '$showValue',
                                /* #__PURE__ */ Qd()
                            )
                        )
                    ),
                    /* #__PURE__ */ Be(
                        '$inline || $expanded)',
                        /* #__PURE__ */ ec(
                            /* #__PURE__ */ Be(
                                '$showPanelClose && ($inline === undefined || $inline === false)',
                                /* #__PURE__ */ tc(/* #__PURE__ */ Xd('close'))
                            ),
                            /* #__PURE__ */ Be(
                                '$panelControls',
                                /* #__PURE__ */ oc(
                                    /* #__PURE__ */ nc(
                                        /* #__PURE__ */ rc(),
                                        /* #__PURE__ */ sc()
                                    ),
                                    /* #__PURE__ */ uc(/* #__PURE__ */ fc()),
                                    /* #__PURE__ */ ac(
                                        /* #__PURE__ */ lc(),
                                        /* #__PURE__ */ ic()
                                    ),
                                    /* #__PURE__ */ pc(
                                        /* #__PURE__ */ dc(),
                                        /* #__PURE__ */ cc()
                                    ),
                                    /* #__PURE__ */ Be(
                                        '$eyeDropper && $hasNativeEyeDropper',
                                        /* #__PURE__ */ hc(
                                            /* #__PURE__ */ Xd('eyeDropper')
                                        )
                                    )
                                )
                            ),
                            /* #__PURE__ */ Be(
                                '$panelFormat',
                                /* #__PURE__ */ mc(
                                    /* #__PURE__ */ gc(
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "hex"',
                                            /* #__PURE__ */ $c()
                                        ),
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "rgba"',
                                            /* #__PURE__ */ bc()
                                        ),
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "rgba"',
                                            /* #__PURE__ */ yc()
                                        ),
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "rgba"',
                                            /* #__PURE__ */ xc()
                                        ),
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "hsla"',
                                            /* #__PURE__ */ _c()
                                        ),
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "hsla"',
                                            /* #__PURE__ */ kc()
                                        ),
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "hsla"',
                                            /* #__PURE__ */ Sc()
                                        ),
                                        /* #__PURE__ */ Be(
                                            '$panelActiveFormat === "rgba" || $panelActiveFormat === "hsla"',
                                            /* #__PURE__ */ wc()
                                        )
                                    ),
                                    /* #__PURE__ */ Lc(
                                        /* #__PURE__ */ Xd('switch')
                                    )
                                )
                            ),
                            /* #__PURE__ */ Be(
                                '$options',
                                /* #__PURE__ */ Ic(/* #__PURE__ */ Dc())
                            )
                        )
                    ),
                    /* #__PURE__ */ Be(
                        '$inline === undefined || $inline === false',
                        /* #__PURE__ */ qd()
                    ),
                    /* #__PURE__ */ Be(
                        '($inline === undefined || $inline === false) && $suffixIcon !== undefined',
                        /* #__PURE__ */ Xd('suffix')
                    )
                ),
                /* #__PURE__ */ Be(
                    '$: ($inline === undefined || $inline === false) && $help',
                    /* #__PURE__ */ zd('$help')
                )
            ),
            /* #__PURE__ */ Zd(/* #__PURE__ */ Gd('$message.value'))
        ),
        type: 'input',
        family: 'text',
        props: [
            'disbaled',
            'format',
            'valueFormat',
            'alpha',
            'panelControls',
            'panelFormat',
            'eyeDropper',
            'inline',
            'options',
            'showValue',
            'closeOnSelect',
            'allowPaste',
        ],
        features: [
            function (e) {
                let t,
                    o = null,
                    n = null,
                    a = null,
                    l = null,
                    i = null,
                    p = null,
                    d = null,
                    c = 0;
                const u = ['hex', 'rgba', 'hsla'],
                    f = Nc(function () {
                        if (!n) return;
                        const t = n.getContext('2d');
                        if (!t) return;
                        const { width: o, height: r } = n,
                            s = e.props.h || 0;
                        (t.fillStyle = `hsl(${s}, 100%, 50%)`),
                            t.fillRect(0, 0, o, r);
                        const a = t.createLinearGradient(0, 0, o, 0);
                        a.addColorStop(0, 'rgba(255, 255, 255, 1)'),
                            a.addColorStop(1, 'rgba(255, 255, 255, 0)'),
                            (t.fillStyle = a),
                            t.fillRect(0, 0, o, r);
                        const l = t.createLinearGradient(0, 0, 0, r);
                        l.addColorStop(0, 'rgba(0,0,0,0)'),
                            l.addColorStop(1, 'rgba(0,0,0,1)'),
                            (t.fillStyle = l),
                            t.fillRect(0, 0, o, r);
                    }, 2),
                    v = Nc(function () {
                        if (!l) return;
                        const t = l.getContext('2d');
                        if (!t) return;
                        const o = Math.round(l.width),
                            n = Math.round(l.height);
                        t.clearRect(0, 0, o, n), F(l, n / 2);
                        const r = e.props.rgba.r || 0,
                            s = e.props.rgba.g || 0,
                            a = e.props.rgba.b || 0,
                            i = t.createLinearGradient(0, 0, o, 0);
                        i.addColorStop(0, `rgba(${r}, ${s}, ${a}, 0)`),
                            i.addColorStop(1, `rgba(${r}, ${s}, ${a}, 1)`),
                            (t.fillStyle = i),
                            t.fillRect(0, 0, o, n);
                    }, 2),
                    h = Nc(A, 2),
                    m = Nc(C, 2),
                    g = Nc(H, 2),
                    $ = Nc(B, 10, !1);
                function b(t) {
                    var n, r;
                    if (!e.context || !e.props.allowPaste || e.props.disabled)
                        return;
                    const s =
                        null === (n = e.props.__root) || void 0 === n
                            ? void 0
                            : n.activeElement;
                    if (o && o.contains(s)) {
                        const o =
                            null === (r = t.clipboardData) || void 0 === r
                                ? void 0
                                : r.getData('text');
                        if (!o) return;
                        if (
                            'INPUT' === s.tagName &&
                            !Pc(o) &&
                            !Ac.test(o) &&
                            !Cc.test(o)
                        )
                            return;
                        (Pc(o) || o.startsWith('hsl') || o.startsWith('rgb')) &&
                            (e.props.hexInputFocused &&
                                ((e.props.hexInputFocused = !1),
                                setTimeout(() => {
                                    e.props.hexInputFocused = !0;
                                }, 10)),
                            t.preventDefault(),
                            y(o));
                    }
                }
                function y(t) {
                    var o;
                    if (!t) return;
                    const n = Hc(t);
                    if (n) {
                        const [o, r, s, a] = n;
                        ('undefined' !== t &&
                            ('number' != typeof o ||
                                isNaN(o) ||
                                'number' != typeof r ||
                                isNaN(r) ||
                                'number' != typeof s ||
                                isNaN(s) ||
                                'number' != typeof a ||
                                isNaN(a) ||
                                (Tc(o, 2) === e.props.h &&
                                    Tc(r, 2) === e.props.s &&
                                    Tc(s, 2) === e.props.v &&
                                    Tc(a, 2) === e.props.a))) ||
                            (e.props.alpha && (e.props.a = Tc(a, 2)),
                            H(o, r, s));
                    } else {
                        const n =
                            null === (o = e.props.options) || void 0 === o
                                ? void 0
                                : o.find((e) => {
                                      var o;
                                      return (
                                          (null === (o = e.label) ||
                                          void 0 === o
                                              ? void 0
                                              : o.toLowerCase()) ===
                                          t.toLowerCase()
                                      );
                                  });
                        if (n && n.value) {
                            const t = Hc(n.value);
                            if (t) {
                                const [o, n, r, s] = t;
                                e.props.alpha && (e.props.a = Tc(s, 2)),
                                    H(o, n, r);
                            } else H(e.props.h, e.props.s, e.props.v);
                        } else H(e.props.h, e.props.s, e.props.v);
                    }
                }
                function x(t) {
                    if (!e.context || !d) return;
                    const o = d[t];
                    o && (e.props.focusedSwatch = o.dataset.color);
                }
                function w(e, t) {
                    new ResizeObserver(() => {
                        const o = e.getBoundingClientRect();
                        (e.width = Math.round(o.width)),
                            (e.height = Math.round(o.height)),
                            t(e);
                    }).observe(e);
                }
                function _() {
                    e.context &&
                        e.props.eyeDropper &&
                        ((e.context.hasNativeEyeDropper = !(
                            'undefined' == typeof window || !window.EyeDropper
                        )),
                        s(
                            `eye-dropper-${e.props.id}`,
                            () => {
                                var t;
                                const o = new window.EyeDropper(),
                                    n =
                                        null === (t = e.props.__root) ||
                                        void 0 === t
                                            ? void 0
                                            : t.getElementById(
                                                  `eye-dropper-${e.props.id}`
                                              );
                                null == n ||
                                    n.addEventListener('click', async () => {
                                        const t = await o.open();
                                        if (!t.sRGBHex) return;
                                        const [n, r, s] = Ec(t.sRGBHex);
                                        e.props.alpha && (e.props.a = 1),
                                            H(n, r, s);
                                    });
                            },
                            e.props.__root
                        ));
                }
                function k() {
                    S(
                        'canvas-ls',
                        (e) => {
                            n = e;
                        },
                        f,
                        O
                    ),
                        S(
                            'canvas-hue',
                            (e) => {
                                a = e;
                            },
                            D,
                            M
                        ),
                        S(
                            'canvas-alpha',
                            (e) => {
                                l = e;
                            },
                            v,
                            V
                        ),
                        L(
                            `canvas-preview-${e.props.id}`,
                            (e) => {
                                (i = e), A();
                            },
                            h
                        ),
                        L(
                            `canvas-swatch-preview-${e.props.id}`,
                            (e) => {
                                (p = e), C();
                            },
                            m
                        ),
                        I();
                }
                function S(o, n, r, s) {
                    let a = !1;
                    const l = () => {
                            document.removeEventListener('mousemove', i),
                                document.removeEventListener('mouseup', d),
                                document.removeEventListener('touchmove', p),
                                document.removeEventListener('touchend', c);
                        },
                        i = (e) => {
                            1 === e.buttons && t && s(e);
                        },
                        p = (e) => {
                            t && s(e);
                        },
                        d = () => {
                            (t = void 0), l();
                        },
                        c = () => {
                            (t = void 0), l();
                        };
                    L(
                        `${o}-${e.props.id}`,
                        (e) => {
                            const l = e.nextElementSibling;
                            n(e),
                                r(),
                                (function (e, t) {
                                    const o = (o) => {
                                        e && (o.preventDefault(), t(o));
                                    };
                                    null == e ||
                                        e.addEventListener('mousedown', o),
                                        null == e ||
                                            e.addEventListener('touchstart', o);
                                })(e, s),
                                a ||
                                    (function (e, t) {
                                        (a = !0),
                                            e.addEventListener('blur', () => {
                                                e.removeAttribute(
                                                    'data-prevent-focus-style'
                                                );
                                            }),
                                            t.addEventListener(
                                                'touchend',
                                                () => {
                                                    e.removeAttribute(
                                                        'data-prevent-focus-style'
                                                    ),
                                                        e.blur();
                                                }
                                            ),
                                            e.addEventListener(
                                                'keydown',
                                                (t) => {
                                                    [
                                                        'ArrowUp',
                                                        'ArrowDown',
                                                        'ArrowLeft',
                                                        'ArrowRight',
                                                    ].includes(t.key) &&
                                                        e.removeAttribute(
                                                            'data-prevent-focus-style'
                                                        );
                                                }
                                            );
                                    })(l, e),
                                e.addEventListener('mousedown', (e) => {
                                    l.focus(),
                                        l.setAttribute(
                                            'data-prevent-focus-style',
                                            'true'
                                        ),
                                        (t = Uc[o]),
                                        s(e),
                                        document.addEventListener(
                                            'mousemove',
                                            i
                                        ),
                                        document.addEventListener('mouseup', d);
                                }),
                                e.addEventListener('touchstart', () => {
                                    l.setAttribute(
                                        'data-prevent-focus-style',
                                        'true'
                                    ),
                                        l.focus(),
                                        (t = Uc[o]),
                                        document.addEventListener(
                                            'touchmove',
                                            p
                                        ),
                                        document.addEventListener(
                                            'touchend',
                                            c
                                        );
                                });
                        },
                        r
                    );
                }
                function L(t, o, n) {
                    s(
                        t,
                        () => {
                            var r;
                            const s =
                                null === (r = e.props.__root) || void 0 === r
                                    ? void 0
                                    : r.getElementById(t);
                            s && (o(s), n && w(s, n));
                        },
                        e.props.__root
                    );
                }
                function I() {
                    s(
                        `swatches-${e.props.id}`,
                        () => {
                            var t, o, n;
                            (d = Array.from(
                                (null === (t = e.props.__root) || void 0 === t
                                    ? void 0
                                    : t.querySelectorAll(
                                          `#swatches-${e.props.id} canvas`
                                      )) || []
                            )),
                                d.forEach((e) => {
                                    w(e, T);
                                }),
                                (e.props.focusedSwatch =
                                    null ===
                                        (n =
                                            null === (o = d[0]) || void 0 === o
                                                ? void 0
                                                : o.dataset) || void 0 === n
                                        ? void 0
                                        : n.color),
                                B();
                        },
                        e.props.__root
                    );
                }
                function D() {
                    if (!a) return;
                    const e = a.getContext('2d');
                    if (!e) return;
                    const t = a.width,
                        o = a.height;
                    for (let n = 0; n < t; n++) {
                        const r = Math.floor((n / t) * 360);
                        (e.fillStyle = `hsl(${r}, 100%, 50%)`),
                            e.fillRect(n, 0, 1, o);
                    }
                }
                function A() {
                    if (!i) return;
                    const t = i.getContext('2d');
                    if (!t) return;
                    F(i, i.width / 3);
                    const { r: o, g: n, b: r, a: s } = e.props.rgba;
                    (t.fillStyle = `rgba(${o}, ${n}, ${r}, ${s})`),
                        t.fillRect(0, 0, i.width, i.height);
                }
                function C() {
                    if (!p) return;
                    const t = p.getContext('2d');
                    if (!t) return;
                    F(p, p.height / 2);
                    const { r: o, g: n, b: r, a: s } = e.props.rgba;
                    (t.fillStyle = `rgba(${o}, ${n}, ${r}, ${s})`),
                        t.fillRect(0, 0, p.width, p.height);
                }
                function T(e) {
                    if (!e) return;
                    const t = e.getContext('2d');
                    if (!t) return;
                    F(e, e.width / 2);
                    const o = e.dataset.colorPrecise;
                    if (!o) return;
                    const [n, r, s, a] = Rc(o),
                        [l, i, p, d] = Oc(n, r, s, a);
                    (t.fillStyle = `hsla(${l}, ${(i / 255) * 100}%, ${(p / 255) * 100}%, ${d})`),
                        t.fillRect(
                            0,
                            0,
                            Math.round(e.width),
                            Math.round(e.height)
                        );
                }
                function E(e, o, n) {
                    let r = null;
                    const s = (e) => {
                        null !== r && cancelAnimationFrame(r),
                            (r = requestAnimationFrame(() => {
                                if (!o) return;
                                const t = o.getBoundingClientRect();
                                let r, s;
                                'touches' in e
                                    ? ((r = e.touches[0].clientX - t.left),
                                      (s = e.touches[0].clientY - t.top))
                                    : ((r = e.clientX - t.left),
                                      (s = e.clientY - t.top)),
                                    (r = Math.min(Math.max(r, 0), t.width)),
                                    (s = Math.min(Math.max(s, 0), t.height)),
                                    n(r, s);
                            }));
                    };
                    s(e);
                    const a = (e) => {
                            e.preventDefault(), s(e);
                        },
                        l = (e) => {
                            e.preventDefault(), s(e);
                        },
                        i = () => {
                            (t = void 0),
                                document.removeEventListener('mousemove', a),
                                document.removeEventListener('mouseup', i);
                        },
                        p = () => {
                            (t = void 0),
                                document.removeEventListener('touchmove', l),
                                document.removeEventListener('touchend', p);
                        };
                    'touches' in e
                        ? (document.addEventListener('touchmove', l),
                          document.addEventListener('touchend', p))
                        : (document.addEventListener('mousemove', a),
                          document.addEventListener('mouseup', i));
                }
                function O(t) {
                    E(t, n, (t, o) => {
                        const r = (t / n.width) * 100,
                            s = 100 - (o / n.height) * 100;
                        g(e.props.hue, r, s);
                    });
                }
                function M(t) {
                    E(t, a, (t, o) => {
                        if (!a) return;
                        const n = a.width,
                            r = Math.floor((t / n) * 360);
                        (e.props.h = r), g(e.props.h, e.props.s, e.props.v);
                    });
                }
                function V(t) {
                    e.props.alpha &&
                        E(t, l, (t, o) => {
                            const n = ((t / l.width) * 100) / 100;
                            (e.props.a = n),
                                g(e.props.hue, e.props.s, e.props.v);
                        });
                }
                function F(e, t) {
                    const o = e.getContext('2d');
                    if (!o) return;
                    const n = Math.ceil(e.height / t),
                        r = Math.ceil(e.width / t);
                    for (let e = 0; e < n; e++)
                        for (let n = 0; n < r; n++)
                            (o.fillStyle =
                                (e + n) % 2 == 1 ? '#FFFFFF' : '#CCCCCC'),
                                o.fillRect(n * t, e * t, t, t);
                }
                function B() {
                    var t, o;
                    if (!e.context || !e.props.options || !d) return;
                    const { h: n, s: r, v: s, a: a } = e.props,
                        l = (function (e, t, o, n = 1) {
                            const r = 0 === o ? 0 : t;
                            return `${Tc(0 === o || (100 === o && 0 === t) ? 0 : e, 0)}-${Tc(r, 0)}-${Tc(o, 0)}-${Tc(n, 2)}`;
                        })(n, r, s, a);
                    let i = !1,
                        p = !1;
                    d.forEach((e) => {
                        const t = e.dataset.color;
                        if (!t) return;
                        const [o, n, r, c] = t.split('-');
                        '0' === r && 0 === s && c === `${a}` && (p = !0);
                        const u = e.parentElement;
                        p || t === l
                            ? ((u.dataset.active = 'true'),
                              (e.ariaSelected = 'true'),
                              (p = !1),
                              !i && d && (x(d.indexOf(e)), (i = !0)))
                            : (delete u.dataset.active,
                              (e.ariaSelected = 'false'));
                    }),
                        i ||
                            (e.props.focusedSwatch =
                                null ===
                                    (o =
                                        null === (t = d[0]) || void 0 === t
                                            ? void 0
                                            : t.dataset) || void 0 === o
                                    ? void 0
                                    : o.color);
                }
                function P(t) {
                    (t = t.replace('#', '')),
                        e.props.hexInputFocused ||
                            3 !== t.length ||
                            (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
                        (t = `#${(t = t.toUpperCase())}`),
                        (e.props.hex = t.slice(0, 9));
                }
                function H(t, n, r, s = !1) {
                    (e.props.h =
                        void 0 === t || isNaN(t)
                            ? e.props.h
                            : Tc(Math.max(Math.min(t, 360), 0), 2)),
                        (e.props.s =
                            void 0 === n || isNaN(n)
                                ? e.props.s
                                : Tc(Math.max(Math.min(n, 100), 0), 2)),
                        (e.props.v =
                            void 0 === r || isNaN(r)
                                ? e.props.v
                                : Tc(Math.max(Math.min(r, 100), 0), 2));
                    const { h: a, s: l, v: i, a: p } = e.props,
                        [d, c, u] = Oc(a, l, i),
                        [f, v, h] = Vc(a, l, i),
                        m = e.props.hexInputFocused
                            ? e.props.hex
                            : Bc(a, l, i, p),
                        g = Tc(p, 2);
                    (e.props.hsla = { h: a, s: c, l: u, a: g }),
                        (e.props.hslaPercent = {
                            h: Tc(a, 0),
                            s:
                                100 === i && 0 === l
                                    ? 0
                                    : Tc(
                                          0 === i
                                              ? c / 255
                                              : Math.max(
                                                    Math.min(
                                                        (c / 255) * 100,
                                                        100
                                                    ),
                                                    0
                                                ),
                                          0
                                      ),
                            l: Tc(
                                Math.max(
                                    Math.min((e.props.hsla.l / 255) * 100, 100),
                                    0
                                ),
                                0
                            ),
                            a: g,
                        }),
                        (e.props.hslaString = `hsla(${e.props.hslaPercent.h}, ${e.props.hslaPercent.s}%, ${e.props.hslaPercent.l}%, ${g})`),
                        (e.props.hslaStringPrecise = `hsla(${a}, ${Tc(0 === i ? c / 255 : (c / 255) * 100, 2)}%, ${Tc((u / 255) * 100, 2)}%, ${g})`),
                        (e.props.rgba = { r: f, g: v, b: h, a: g }),
                        (e.props.rgbaString = `rgba(${f}, ${v}, ${h}, ${g})`),
                        P(m),
                        setTimeout(() => {
                            var t;
                            R(),
                                (function () {
                                    const t = e.props.s,
                                        o = 100 - e.props.v;
                                    e.props.controlLSPosition = { x: t, y: o };
                                })(),
                                $(),
                                o ||
                                    'undefined' == typeof window ||
                                    (o =
                                        null === (t = e.props.__root) ||
                                        void 0 === t
                                            ? void 0
                                            : t.querySelector(
                                                  `[data-id="${e.props.id}"]`
                                              ));
                        }, 0);
                    const b = e.props.valueFormat
                        ? e.props.valueFormat
                        : e.props.format;
                    s ||
                        ('hex' === b
                            ? e.input(e.props.hex)
                            : 'rgba' === b
                              ? e.input(e.props.rgbaString)
                              : 'hsla' === b &&
                                e.input(e.props.hslaStringPrecise));
                }
                function R() {
                    f(), v(), h(), m();
                }
                e.addProps([
                    'expanded',
                    'h',
                    's',
                    'v',
                    'a',
                    'hsla',
                    'hslaPercent',
                    'hslaString',
                    'hslaStringPrecise',
                    'rgba',
                    'rgbaString',
                    'hex',
                    'controlLSPosition',
                    'panelActiveFormat',
                    'hexInputFocused',
                    'hasNativeEyeDropper',
                    'focusedSwatch',
                    'swatchIsUsingKeyboardNav',
                    'showPanelClose',
                ]),
                    (e.props.h = e.props.h || void 0),
                    (e.props.s = e.props.s || void 0),
                    (e.props.v = e.props.v || void 0),
                    (e.props.a = e.props.a || 1),
                    (e.props.controlLSPosition = e.props.controlLSPosition || {
                        x: 0,
                        y: 0,
                    }),
                    (e.props.switchIcon =
                        e.props.switchIcon ||
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.2 179.7L154.4 66.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2 .8 5.6 2.2L285.8 179.7c1.4 1.3 2.2 3.2 2.2 5.2c0 3.9-3.2 7.1-7.1 7.1H39.1c-3.9 0-7.1-3.2-7.1-7.1c0-2 .8-3.8 2.2-5.2zm-22-23.3C4.4 163.8 0 174.1 0 184.9C0 206.5 17.5 224 39.1 224H280.9c21.6 0 39.1-17.5 39.1-39.1c0-10.8-4.4-21.1-12.3-28.4L187.6 42.9C180.1 35.9 170.2 32 160 32s-20.1 3.9-27.6 10.9L12.3 156.4zm22 175.9c-1.4-1.3-2.2-3.2-2.2-5.2c0-3.9 3.2-7.1 7.1-7.1H280.9c3.9 0 7.1 3.2 7.1 7.1c0 2-.8 3.8-2.2 5.2L165.6 445.8c-1.4 1.3-3.5 2.2-5.6 2.2s-4.2-.8-5.6-2.2L34.2 332.3zm-22 23.3L132.4 469.1c7.4 7 17.4 10.9 27.6 10.9s20.1-3.9 27.6-10.9L307.7 355.6c7.8-7.4 12.3-17.7 12.3-28.5c0-21.6-17.5-39.1-39.1-39.1H39.1C17.5 288 0 305.5 0 327.1c0 10.8 4.4 21.1 12.3 28.5z"/></svg>'),
                    (e.props.hexInputFocused = !1),
                    (e.props.swatchIsUsingKeyboardNav = !1),
                    e.on('destroying', () => {
                        e.context &&
                            'undefined' != typeof document &&
                            document.removeEventListener('paste', b);
                    }),
                    e.on('created', () => {
                        var t, n;
                        e.context &&
                            ('undefined' != typeof window &&
                                document.addEventListener('paste', b),
                            (e.props.expanded = !1),
                            (e.props.panelActiveFormat =
                                e.props.format || u[0]),
                            (e.props.panelControls = Kc(e.props.panelControls)),
                            (e.props.eyeDropper = Kc(e.props.eyeDropper)),
                            (e.props.panelFormat = Kc(e.props.panelFormat)),
                            (e.props.showValue = Kc(e.props.showValue)),
                            (e.props.allowPaste = Kc(e.props.allowPaste)),
                            (e.props.inline = r(e.props.inline)),
                            (e.props.disabled = r(e.props.disabled)),
                            (e.props.format = e.props.format || 'hex'),
                            (e.props.alpha = r(
                                null ===
                                    (n =
                                        null === (t = e.props) || void 0 === t
                                            ? void 0
                                            : t.alpha) ||
                                    void 0 === n ||
                                    n
                            )),
                            (e.props.valueFormat =
                                e.props.valueFormat || e.props.format),
                            (e.props.closeOnSelect = r(e.props.closeOnSelect)),
                            (e.props.focusedSwatch = void 0),
                            void 0 === e.value ||
                            '' === e.value ||
                            null === e.value
                                ? ((e.props.rgba = { r: 0, g: 0, b: 0 }),
                                  H(0, 0, 0, !0))
                                : y(`${e.value}`),
                            e.on('input', ({ payload: t }) => {
                                o &&
                                    void 0 !== e.props.__root &&
                                    !o.contains(e.props.__root.activeElement) &&
                                    y(t);
                            }),
                            setTimeout(() => {
                                _();
                            }, 5),
                            k(),
                            e.on('prop:expanded', () => {
                                var t;
                                if (e.props.expanded)
                                    _(),
                                        k(),
                                        I(),
                                        document.addEventListener('keydown', o),
                                        window.innerWidth <= 430 &&
                                        !window.matchMedia('(hover: hover)')
                                            .matches
                                            ? (e.props.showPanelClose = !0)
                                            : (e.props.showPanelClose = !1),
                                        setTimeout(() => {
                                            var t;
                                            const o =
                                                null === (t = e.props.__root) ||
                                                void 0 === t
                                                    ? void 0
                                                    : t.querySelector(
                                                          `[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`
                                                      );
                                            o && o.focus();
                                        }, 0);
                                else {
                                    document.removeEventListener('keydown', o);
                                    (null === (t = e.props.__root) ||
                                    void 0 === t
                                        ? void 0
                                        : t.querySelector(
                                              `[data-id="${e.props.id}"] *[tabindex="0"]`
                                          )
                                    ).focus();
                                }
                                function o(t) {
                                    'Escape' === t.key &&
                                        (t.preventDefault(),
                                        (e.props.expanded = !1));
                                }
                            }),
                            (e.context.fns.anyToHsvaString = (e, t) => {
                                const o = Hc(e);
                                if (!o) return '0-0-0-1';
                                let [n, r, s, a] = o;
                                return (
                                    0 === t &&
                                        (n =
                                            0 === s || (100 === s && 0 === r)
                                                ? 0
                                                : n),
                                    `${Tc(n, t)}-${Tc(r, t)}-${Tc(s, t)}-${Tc(a, 2)}`
                                );
                            }),
                            (e.context.handlers.inputPreviewClick = (t) => {
                                e.props.expanded = !e.props.expanded;
                            }),
                            (e.context.handlers.inputPreviewFocusout = (t) => {
                                var o, n, r;
                                const s =
                                        null === (o = e.props.__root) ||
                                        void 0 === o
                                            ? void 0
                                            : o.querySelector(
                                                  `[data-id="${e.props.id}"] .formkit-inner`
                                              ),
                                    a = t.relatedTarget;
                                if (s.contains(a)) {
                                    function l(t) {
                                        var o, n;
                                        s.contains(t.target) ||
                                            ((e.props.expanded = !1),
                                            null === (o = e.props.__root) ||
                                                void 0 === o ||
                                                o.removeEventListener(
                                                    'mousedown',
                                                    l
                                                ),
                                            null === (n = e.props.__root) ||
                                                void 0 === n ||
                                                n.removeEventListener(
                                                    'touchstart',
                                                    l
                                                ));
                                    }
                                    null === (n = e.props.__root) ||
                                        void 0 === n ||
                                        n.addEventListener('mousedown', l),
                                        null === (r = e.props.__root) ||
                                            void 0 === r ||
                                            r.addEventListener('touchstart', l);
                                } else e.props.expanded = !1;
                            }),
                            (e.context.handlers.inputPreviewKeydown = (t) => {
                                'Escape' === t.key &&
                                    (t.preventDefault(),
                                    (e.props.expanded = !1)),
                                    ('Enter' !== t.key && ' ' !== t.key) ||
                                        (t.preventDefault(),
                                        (e.props.expanded = !e.props.expanded));
                            }),
                            (e.context.handlers.closePanel = () => {
                                e.props.expanded = !1;
                            }),
                            (e.context.handlers.panelCloseKeydown = (t) => {
                                ('Enter' !== t.key && ' ' !== t.key) ||
                                    (t.preventDefault(),
                                    (e.props.expanded = !1));
                            }),
                            (e.context.handlers.toggleFormat = (t = 1) => {
                                t = 'number' == typeof t ? t : 1;
                                const o =
                                    (u.indexOf(e.props.panelActiveFormat) +
                                        t +
                                        u.length) %
                                    u.length;
                                e.props.panelActiveFormat = u[o];
                            }),
                            (e.context.handlers.panelKeydown = (t) => {
                                var o, n, r;
                                if ('Tab' === t.key && e.props.expanded) {
                                    t.preventDefault();
                                    const s = Array.from(
                                            (null === (o = e.props.__root) ||
                                            void 0 === o
                                                ? void 0
                                                : o.querySelectorAll(
                                                      `[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`
                                                  )) || []
                                        ).filter(Wc),
                                        a = s.indexOf(
                                            (
                                                null === (n = e.props.__root) ||
                                                void 0 === n
                                                    ? void 0
                                                    : n.activeElement
                                            )
                                                ? null ===
                                                      (r = e.props.__root) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.activeElement
                                                : e.props.__root
                                        );
                                    let l;
                                    (l = t.shiftKey
                                        ? (a - 1 + s.length) % s.length
                                        : (a + 1) % s.length),
                                        s[l].focus();
                                }
                            }),
                            (e.context.handlers.lsKeydown = (t) => {
                                if (
                                    [
                                        'ArrowLeft',
                                        'ArrowRight',
                                        'ArrowUp',
                                        'ArrowDown',
                                        'PageUp',
                                        'PageDown',
                                        'Home',
                                        'End',
                                    ].includes(t.key)
                                ) {
                                    t.preventDefault();
                                    const { h: o, s: n, v: r } = e.props,
                                        s = t.shiftKey ? 10 : 1;
                                    switch (t.key) {
                                        case 'ArrowLeft':
                                            H(o, n - s, r);
                                            break;
                                        case 'ArrowRight':
                                            H(o, n + s, r);
                                            break;
                                        case 'ArrowUp':
                                            H(o, n, r + s);
                                            break;
                                        case 'ArrowDown':
                                            H(o, n, r - s);
                                            break;
                                        case 'PageUp':
                                            H(o, n, r + 10);
                                            break;
                                        case 'PageDown':
                                            H(o, n, r - 10);
                                            break;
                                        case 'Home':
                                            H(o, n - 10, r);
                                            break;
                                        case 'End':
                                            H(o, n + 10, r);
                                    }
                                    R();
                                }
                            }),
                            (e.context.handlers.hueControlKeydown = (t) => {
                                if (
                                    [
                                        'ArrowLeft',
                                        'ArrowRight',
                                        'ArrowUp',
                                        'ArrowDown',
                                        'PageUp',
                                        'PageDown',
                                        'Home',
                                        'End',
                                    ].includes(t.key)
                                ) {
                                    t.preventDefault();
                                    const { h: o, s: n, v: r } = e.props,
                                        s = t.shiftKey ? 10 : 1;
                                    switch (t.key) {
                                        case 'ArrowLeft':
                                        case 'ArrowDown':
                                            H(o - s, n, r);
                                            break;
                                        case 'ArrowRight':
                                        case 'ArrowUp':
                                            H(o + s, n, r);
                                            break;
                                        case 'PageUp':
                                            H(o + 10, n, r);
                                            break;
                                        case 'PageDown':
                                            H(o - 10, n, r);
                                            break;
                                        case 'Home':
                                            H(0, n, r);
                                            break;
                                        case 'End':
                                            H(360, n, r);
                                    }
                                    R();
                                }
                            }),
                            (e.context.handlers.alphaControlKeydown = (t) => {
                                if (
                                    e.props.alpha &&
                                    [
                                        'ArrowLeft',
                                        'ArrowRight',
                                        'ArrowUp',
                                        'ArrowDown',
                                        'PageUp',
                                        'PageDown',
                                        'Home',
                                        'End',
                                    ].includes(t.key)
                                ) {
                                    t.preventDefault();
                                    const { h: o, s: n, v: r, a: s } = e.props,
                                        a = t.shiftKey ? 0.1 : 0.01;
                                    switch (t.key) {
                                        case 'ArrowLeft':
                                        case 'ArrowDown':
                                            e.props.a = Tc(
                                                Math.min(Math.max(s - a, 0), 1),
                                                2
                                            );
                                            break;
                                        case 'ArrowRight':
                                        case 'ArrowUp':
                                            e.props.a = Tc(
                                                Math.min(Math.max(s + a, 0), 1),
                                                2
                                            );
                                            break;
                                        case 'PageUp':
                                            e.props.a = Tc(
                                                Math.min(
                                                    Math.max(s + 0.1, 0),
                                                    1
                                                ),
                                                2
                                            );
                                            break;
                                        case 'PageDown':
                                            e.props.a = Tc(
                                                Math.min(
                                                    Math.max(s - 0.1, 0),
                                                    1
                                                ),
                                                2
                                            );
                                            break;
                                        case 'Home':
                                            e.props.a = 0;
                                            break;
                                        case 'End':
                                            e.props.a = 1;
                                    }
                                    H(o, n, r);
                                }
                            }),
                            (e.context.handlers.eyeDropperKeydown = (t) => {
                                var o;
                                if ('Enter' === t.key || ' ' === t.key) {
                                    t.preventDefault();
                                    const n =
                                        null === (o = e.props.__root) ||
                                        void 0 === o
                                            ? void 0
                                            : o.getElementById(
                                                  `eye-dropper-${e.props.id}`
                                              );
                                    null == n || n.click();
                                }
                            }),
                            (e.context.handlers.formatSwitcherKeydown = (t) => {
                                e.context &&
                                    (('Enter' !== t.key &&
                                        ' ' !== t.key &&
                                        'ArrowDown' !== t.key) ||
                                        (t.preventDefault(),
                                        e.context.handlers.toggleFormat()),
                                    'ArrowUp' === t.key &&
                                        (t.preventDefault(),
                                        e.context.handlers.toggleFormat(-1)));
                            }),
                            (e.context.handlers.hexInput = (t) => {
                                const o = t.target,
                                    n = o.value.startsWith('#') ? 9 : 8,
                                    r = o.value.slice(0, n);
                                if (
                                    ((o.value = e.props.alpha
                                        ? r
                                        : r.slice(0, 7)),
                                    Pc(r))
                                ) {
                                    const [t, o, n, s] = Ec(r);
                                    e.props.alpha && (e.props.a = s),
                                        P(r),
                                        H(t, o, n);
                                }
                            }),
                            (e.context.handlers.hexKeydown = (t) => {
                                const o = t.target,
                                    n = o.value;
                                let r = '';
                                if (!Pc(n)) return;
                                const s = n.startsWith('#') ? n.slice(1) : n,
                                    a = 8 === s.length,
                                    l = a ? s.substring(0, 6) : s,
                                    i = a ? s.substring(6, 8) : '',
                                    p = t.shiftKey ? 10 : 1,
                                    d = 16777215;
                                let c;
                                if (
                                    [
                                        'ArrowUp',
                                        'ArrowDown',
                                        'PageUp',
                                        'PageDown',
                                        'Home',
                                        'End',
                                    ].includes(t.key)
                                )
                                    switch ((t.preventDefault(), t.key)) {
                                        case 'ArrowUp':
                                            c =
                                                (parseInt(l, 16) + p) %
                                                16777216;
                                            break;
                                        case 'ArrowDown':
                                            c =
                                                (parseInt(l, 16) - p + d + 1) %
                                                16777216;
                                            break;
                                        case 'PageUp':
                                            c =
                                                (parseInt(l, 16) + 10) %
                                                16777216;
                                            break;
                                        case 'PageDown':
                                            c =
                                                (parseInt(l, 16) - 10 + d + 1) %
                                                16777216;
                                            break;
                                        case 'Home':
                                            c = 0;
                                            break;
                                        case 'End':
                                            c = d;
                                    }
                                void 0 !== c &&
                                    (r = c
                                        .toString(16)
                                        .padStart(6, '0')
                                        .toUpperCase()),
                                    r && (o.value = a ? `#${r}${i}` : `#${r}`),
                                    e.context && e.context.handlers.hexInput(t);
                            }),
                            (e.context.handlers.hexFocus = () => {
                                e.context && (e.props.hexInputFocused = !0);
                            }),
                            (e.context.handlers.hexBlur = (t) => {
                                if (!e.context) return;
                                e.props.hexInputFocused = !1;
                                const o = t.target.value;
                                Pc(o) && P(o);
                            }),
                            (e.context.handlers.rangeLimitInput =
                                (t, o, n, r) => (s) => {
                                    const a = r || s;
                                    if (!a || !e.context) return;
                                    const l = a.target;
                                    if (l.value.endsWith('.')) return;
                                    const i = Math.max(
                                        Math.min(Number(l.value), n),
                                        o
                                    );
                                    l.value = `${i}`;
                                    const p = l.id;
                                    if ('hsla' === t) {
                                        switch (p) {
                                            case `h-${e.props.id}`:
                                                e.props.h = i;
                                                break;
                                            case `s-${e.props.id}`:
                                                e.props.hslaPercent.s = i;
                                                break;
                                            case `l-${e.props.id}`:
                                                e.props.hslaPercent.l = i;
                                        }
                                        const [t, o, n] = Mc(
                                            e.props.h,
                                            2.55 * e.props.hslaPercent.s,
                                            2.55 * e.props.hslaPercent.l
                                        );
                                        H(t, o, n);
                                    } else if ('rgba' === t) {
                                        switch (p) {
                                            case `r-${e.props.id}`:
                                                e.props.rgba.r = i;
                                                break;
                                            case `g-${e.props.id}`:
                                                e.props.rgba.g = i;
                                                break;
                                            case `b-${e.props.id}`:
                                                e.props.rgba.b = i;
                                        }
                                        const [t, o, n] = Fc(
                                            e.props.rgba.r,
                                            e.props.rgba.g,
                                            e.props.rgba.b
                                        );
                                        H(t, o, n);
                                    } else
                                        'alpha' == t &&
                                            e.props.alpha &&
                                            ((e.props.a = i), H());
                                }),
                            (e.context.handlers.rangeLimitKeydown =
                                (t, o, n, r) => (s) => {
                                    if (!e.context) return;
                                    if (
                                        [
                                            'ArrowUp',
                                            'ArrowDown',
                                            'PageUp',
                                            'PageDown',
                                            'Home',
                                            'End',
                                            'Backspace',
                                            'Tab',
                                            'Enter',
                                        ].includes(s.key) ||
                                        s.metaKey ||
                                        !/[a-zA-Z!@#$%^&*()_+={}\[\]:;"'<,>?\/|\\`~]/g.test(
                                            s.key
                                        )
                                    ) {
                                        if (
                                            [
                                                'ArrowUp',
                                                'ArrowDown',
                                                'PageUp',
                                                'PageDown',
                                                'Home',
                                                'End',
                                            ].includes(s.key)
                                        ) {
                                            const a = s.target,
                                                l = Number(a.value),
                                                i = s.shiftKey ? 10 * r : r;
                                            switch (s.key) {
                                                case 'ArrowUp':
                                                    s.preventDefault(),
                                                        (a.value = `${Math.min(l + i, n)}`);
                                                    break;
                                                case 'ArrowDown':
                                                    s.preventDefault(),
                                                        (a.value = `${Math.max(l - i, o)}`);
                                                    break;
                                                case 'PageUp':
                                                    s.preventDefault(),
                                                        (a.value = `${Math.min(l + 10 * r, n)}`);
                                                    break;
                                                case 'PageDown':
                                                    s.preventDefault(),
                                                        (a.value = `${Math.max(l - 10 * r, o)}`);
                                                    break;
                                                case 'Home':
                                                    s.preventDefault(),
                                                        (a.value = `${o}`);
                                                    break;
                                                case 'End':
                                                    s.preventDefault(),
                                                        (a.value = `${n}`);
                                            }
                                            e.context.handlers.rangeLimitInput(
                                                t,
                                                o,
                                                n,
                                                s
                                            )();
                                        }
                                    } else s.preventDefault();
                                }),
                            (e.context.handlers.swatchClick = (t) => {
                                const o = t.target;
                                if (o.dataset.colorPrecise) {
                                    const [t, n, r, s] = Rc(
                                        o.dataset.colorPrecise
                                    );
                                    e.props.alpha && (e.props.a = s),
                                        H(t, n, r),
                                        e.props.closeOnSelect &&
                                            (e.props.expanded = !1);
                                }
                                e.context &&
                                    'keydown' !== t.type &&
                                    e.context.handlers.swatchKeydown(t);
                            }),
                            (e.context.handlers.swatchKeydown = (t) => {
                                var o, n, r, s;
                                if (!e.context || !d || !d.length) return;
                                const a = d.indexOf(t.currentTarget);
                                let l = null;
                                const i = (function (e) {
                                        var t;
                                        if (!e.length) return 0;
                                        const o =
                                            null === (t = e[0].parentElement) ||
                                            void 0 === t
                                                ? void 0
                                                : t.parentElement;
                                        if (!o) return 0;
                                        const n =
                                                o.getBoundingClientRect().width,
                                            r = e[0].parentElement;
                                        if (!r) return 0;
                                        const s = r.getBoundingClientRect(),
                                            a = window.getComputedStyle(r),
                                            l =
                                                parseFloat(a.marginLeft) +
                                                parseFloat(a.marginRight),
                                            i = s.width + l;
                                        return Math.floor(n / i);
                                    })(d),
                                    p = d.length;
                                let u = 0,
                                    f = p,
                                    v = !1;
                                const h = d[a].dataset.group;
                                if (void 0 !== h) {
                                    const e = d.filter(
                                        (e) => e.dataset.group === h
                                    );
                                    (u = d.indexOf(e[0])),
                                        (f = d.indexOf(e[e.length - 1]));
                                }
                                const m = (a - u) % i;
                                if (!t.key || 'Tab' === t.key)
                                    return (
                                        t.key ||
                                            ((e.props.swatchIsUsingKeyboardNav =
                                                !1),
                                            (c = m),
                                            x(a)),
                                        'Tab' === t.key &&
                                            (e.props.swatchIsUsingKeyboardNav =
                                                !1),
                                        void d.forEach((e) => {
                                            delete e.parentElement.dataset
                                                .focused;
                                        })
                                    );
                                if ('Enter' === t.key || ' ' === t.key)
                                    return (
                                        t.preventDefault(),
                                        (c = m),
                                        e.context.handlers.swatchClick(t),
                                        void x(a)
                                    );
                                switch (
                                    (('ArrowUp' !== t.key &&
                                        'ArrowDown' !== t.key &&
                                        'ArrowLeft' !== t.key &&
                                        'ArrowRight' !== t.key) ||
                                        ((e.props.swatchIsUsingKeyboardNav =
                                            !0),
                                        t.preventDefault()),
                                    t.key)
                                ) {
                                    case 'ArrowUp':
                                        (l = Math.max(
                                            a - i,
                                            a - (i - (c - m))
                                        )),
                                            (v = !0);
                                        break;
                                    case 'ArrowDown':
                                        (l = Math.max(
                                            a + i,
                                            a + (i + (c - m))
                                        )),
                                            (v = !0);
                                        break;
                                    case 'ArrowLeft':
                                        (l = a - 1), (c = (l - u) % i);
                                        break;
                                    case 'ArrowRight':
                                        (l = a + 1), (c = (l - u) % i);
                                }
                                if (v && null !== l && (l < u || l > f)) {
                                    let e;
                                    e =
                                        l < u
                                            ? null ===
                                                  (n =
                                                      null === (o = d[u - 1]) ||
                                                      void 0 === o
                                                          ? void 0
                                                          : o.dataset) ||
                                              void 0 === n
                                                ? void 0
                                                : n.group
                                            : null ===
                                                    (s =
                                                        null ===
                                                            (r = d[f + 1]) ||
                                                        void 0 === r
                                                            ? void 0
                                                            : r.dataset) ||
                                                void 0 === s
                                              ? void 0
                                              : s.group;
                                    const t = d.filter(
                                            (e) => e.dataset.group === h
                                        ),
                                        p = d.filter(
                                            (t) => t.dataset.group === e
                                        ),
                                        v = (a - u) % i,
                                        m = t.length % i || i,
                                        g = a >= u + t.length - m;
                                    if (l < u) {
                                        const e = p.length % i || i;
                                        l =
                                            u -
                                            e +
                                            Math.min(Math.max(v, c), e - 1);
                                    } else
                                        l > f &&
                                            (l = g
                                                ? Math.min(
                                                      f + Math.max(v, c) + 1,
                                                      d.indexOf(p[p.length - 1])
                                                  )
                                                : Math.min(l, f));
                                }
                                if (null !== l && l >= 0 && l < p) {
                                    x(l),
                                        d.forEach((e) => {
                                            delete e.parentElement.dataset
                                                .focused;
                                        });
                                    const e = d[l],
                                        t = e.parentElement;
                                    e.focus(), (t.dataset.focused = 'true');
                                }
                            }));
                    });
            },
            No,
            b,
            /* #__PURE__ */ g('eyeDropper', 'color'),
            /* #__PURE__ */ g('close', 'close'),
            /* #__PURE__ */ $('close'),
            /* #__PURE__ */ $('next'),
        ],
    },
    jc = /* #__PURE__ */ Me('tb'),
    {
        outer: qc,
        inner: zc,
        wrapper: Zc,
        prefix: Gc,
        suffix: Xc,
        help: Jc,
        messages: Qc,
        message: eu,
        icon: tu,
    } = /* #__PURE__ */ Ve(jc),
    ou = jc('label', () => ({
        if: '$label',
        $el: 'label',
        attrs: { id: "$id + '_label'" },
    })),
    nu = jc('singleToggle', () => ({
        bind: '$attrs',
        $el: 'button',
        attrs: {
            id: '$id',
            type: 'button',
            'aria-label': '$label',
            'aria-pressed': '$fns.isChecked($onValue, $value)',
            onClick: '$handlers.toggleValue()',
            disabled: '$disabled',
            class: '$classes.input',
            onBlur: '$handlers.blur',
        },
    })),
    ru = jc('multiToggle', () => ({
        bind: '$attrs',
        $el: 'button',
        attrs: {
            type: 'button',
            id: "$id+'_'+$index",
            'aria-label': '$label',
            'aria-pressed': '$fns.isChecked($option, $value)',
            onClick: '$handlers.toggleValue($option)',
            class: '$classes.input',
            title: '$option.help',
            disabled: '$disabled || $option.disabled',
            onBlur: '$handlers.blur',
        },
    })),
    su = jc('inputInner', () => ({ bind: '$attrs', $el: 'span' })),
    au = jc('options', () => ({
        $el: 'ul',
        attrs: {
            id: '$id',
            'data-vertical': '$vertical && "true" || "false"',
            'aria-labelledby': '$id',
        },
    })),
    lu = jc('option', () => ({
        $el: 'li',
        for: ['option', 'index', '$options'],
        attrs: { key: '$option.value', 'data-index': '$index' },
    }));
function iu(e, t) {
    return (
        (t = (null == t ? void 0 : t.hasOwnProperty('__original'))
            ? null == t
                ? void 0
                : t.__original
            : null == t
              ? void 0
              : t.value),
        e.props.multiple
            ? !!Array.isArray(e.value) &&
              e.value.filter((e) => n(e, t)).length > 0
            : void 0 !== t
              ? n(e.value, t)
              : ((e.props._isChecked = n(e.value, e.props.onValue)),
                e.props._isChecked)
    );
}
const pu = {
        schema: /* #__PURE__ */ qc(
            /* #__PURE__ */ Be(
                '$options',
                /* #__PURE__ */ Zc(
                    /* #__PURE__ */ ou('$label'),
                    /* #__PURE__ */ au(
                        /* #__PURE__ */ lu(
                            /* #__PURE__ */ ru(
                                /* #__PURE__ */ Be(
                                    '$fns.isChecked($option) === true',
                                    /* #__PURE__ */ su(
                                        '$slots.default || $slots.on || $option.onLabel || $option.label'
                                    ),
                                    /* #__PURE__ */ su(
                                        '$slots.default || $slots.off || $option.offLabel || $option.label'
                                    )
                                )
                            )
                        )
                    )
                ),
                /* #__PURE__ */ Zc(
                    /* #__PURE__ */ Be(
                        '$label && ($slots.default || $slots.on || $onLabel)',
                        /* #__PURE__ */ ou('$label')
                    ),
                    /* #__PURE__ */ nu(
                        /* #__PURE__ */ tu('prefix'),
                        /* #__PURE__ */ Gc(),
                        /* #__PURE__ */ Be(
                            '$_isChecked === true',
                            /* #__PURE__ */ su(
                                '$slots.default || $slots.on || $onLabel || $label'
                            ),
                            /* #__PURE__ */ su(
                                '$slots.default || $slots.off || $offLabel || $label'
                            )
                        ),
                        /* #__PURE__ */ Xc(),
                        /* #__PURE__ */ tu('suffix')
                    )
                )
            ),
            /* #__PURE__ */ Jc('$help'),
            /* #__PURE__ */ Qc(/* #__PURE__ */ eu('$message.value'))
        ),
        type: 'input',
        family: 'button',
        props: ['options'],
        features: [
            function (e) {
                var t, o, s, a;
                e.addProps([
                    'enforced',
                    'multiple',
                    'offLabel',
                    'offValue',
                    'disabled',
                    'onLabel',
                    'onValue',
                    'vertical',
                    '_isChecked',
                ]),
                    (e.props._isChecked = !1),
                    (e.props.enforced = r(e.props.enforced)),
                    (e.props.multiple = r(e.props.multiple)),
                    (e.props.vertical = r(e.props.vertical)),
                    'disabled' in e.props &&
                        (e.props.disabled = r(e.props.disabled)),
                    (null !== (t = (s = e.props).onValue) && void 0 !== t) ||
                        (s.onValue = !0),
                    (null !== (o = (a = e.props).offValue) && void 0 !== o) ||
                        (a.offValue = !1),
                    e.on('created', () => {
                        var t;
                        (e.props._isChecked = iu(e, null)),
                            e.props.options &&
                                e.props.multiple &&
                                e.input(
                                    null !== (t = e.value) && void 0 !== t
                                        ? t
                                        : [],
                                    !1
                                ),
                            e.context &&
                                ((e.context.fns.isChecked = (t) => iu(e, t)),
                                (e.context.handlers.toggleValue = (t) => (o) =>
                                    (function (e, t, o) {
                                        if (
                                            (o.preventDefault(),
                                            (t = t ? gt(t) : t),
                                            e.props.options)
                                        )
                                            if (e.props.multiple) {
                                                const o = Array.isArray(e.value)
                                                        ? [...e.value]
                                                        : [],
                                                    r = o.findIndex((e) =>
                                                        n(e, t)
                                                    );
                                                r > -1 &&
                                                (!e.props.enforced ||
                                                    o.length > 1)
                                                    ? o.splice(r, 1)
                                                    : -1 === r && o.push(t),
                                                    e.input(o);
                                            } else
                                                n(e.value, t) &&
                                                !e.props.enforced
                                                    ? e.input(void 0)
                                                    : e.input(t);
                                        else
                                            e.input(
                                                n(e.value, e.props.onValue)
                                                    ? e.props.offValue
                                                    : e.props.onValue
                                            );
                                    })(e, t, o)));
                    });
            },
            b,
        ],
    },
    du = /* #__PURE__ */ Me('ut'),
    {
        outer: cu,
        inner: uu,
        wrapper: fu,
        label: vu,
        prefix: hu,
        suffix: mu,
        help: gu,
        messages: $u,
        message: bu,
        icon: yu,
    } = /* #__PURE__ */ Ve(du),
    xu = du('input', () => ({
        $el: 'input',
        bind: '$attrs',
        attrs: {
            name: '$node.name',
            autocomplete: '$attrs.autocomplete || off',
            id: '$id',
            onChange: '$handlers.handleInput',
            onBlur: '$handlers.unitBlur',
            onInput: '$handlers.handleInput',
            onKeydown: '$handlers.handleKeyDown',
            onBeforeinput: '$handlers.handleBeforeInput',
            readonly: '$readonly',
            inputmode: 'decimal',
            placeholder: '$placeholder || $unitParts.unit',
            disabled: '$disabled',
            'data-unit': '$unit',
            'data-currency': '$currency',
            'data-display-locale': '$displayLocale',
            'data-value-locale': '$valueLocale',
            'data-decimals': '$decimals',
            'data-trailing': '$trailingZeros',
            'data-numeric-value': '$_numericValue',
            'data-align': '$_valueAlignAuto',
            'aria-required': '$state.required || undefined',
        },
    })),
    wu = {
        meter: {
            kilometer: 0.001,
            meter: 1,
            centimeter: 100,
            millimeter: 1e3,
            mile: 621371e-9,
            yard: 1.09361,
            foot: 3.28084,
            inch: 39.3701,
            'mile-scandinavian': 1e-4,
        },
        kilometer: {
            kilometer: 1,
            meter: 1e3,
            centimeter: 1e5,
            millimeter: 1e6,
            mile: 0.621371,
            yard: 1093.61,
            foot: 3280.84,
            inch: 39370.1,
            'mile-scandinavian': 10,
        },
        centimeter: {
            kilometer: 1e-5,
            meter: 0.01,
            centimeter: 1,
            millimeter: 10,
            mile: 62137e-10,
            yard: 0.0109361,
            foot: 0.0328084,
            inch: 0.393701,
            'mile-scandinavian': 1e-6,
        },
        millimeter: {
            kilometer: 1e-6,
            meter: 0.001,
            centimeter: 0.1,
            millimeter: 1,
            mile: 6.21371e-7,
            yard: 0.00109361,
            foot: 0.00328084,
            inch: 0.0393701,
            'mile-scandinavian': 1e-7,
        },
        mile: {
            kilometer: 1.60934,
            meter: 1609.34,
            centimeter: 160934,
            millimeter: 1609340,
            mile: 1,
            yard: 1760,
            foot: 5280,
            inch: 63360,
            'mile-scandinavian': 0.160934,
        },
        yard: {
            kilometer: 9144e-7,
            meter: 0.9144,
            centimeter: 91.44,
            millimeter: 914.4,
            mile: 568182e-9,
            yard: 1,
            foot: 3,
            inch: 36,
            'mile-scandinavian': 9144e-8,
        },
        foot: {
            kilometer: 3048e-7,
            meter: 0.3048,
            centimeter: 30.48,
            millimeter: 304.8,
            mile: 189394e-9,
            yard: 0.333333,
            foot: 1,
            inch: 12,
            'mile-scandinavian': 3048e-8,
        },
        inch: {
            kilometer: 254e-7,
            meter: 0.0254,
            centimeter: 2.54,
            millimeter: 25.4,
            mile: 15783e-9,
            yard: 0.0277778,
            foot: 0.0833333,
            inch: 1,
            'mile-scandinavian': 254e-8,
        },
        'mile-scandinavian': {
            kilometer: 10,
            meter: 1e4,
            centimeter: 1e6,
            millimeter: 1e7,
            mile: 6.21371,
            yard: 10936.1,
            foot: 32808.4,
            inch: 393701,
            'mile-scandinavian': 1,
        },
    },
    _u = {
        celsius: { celsius: (e) => e, fahrenheit: (e) => 1.8 * e + 32 },
        fahrenheit: {
            celsius: (e) => (5 / 9) * (e - 32),
            fahrenheit: (e) => e,
        },
    },
    ku = {
        acre: { acre: 1, hectare: 0.404686 },
        hectare: { acre: 2.47105, hectare: 1 },
    },
    Su = {
        gram: { gram: 1, kilogram: 0.001, ounce: 0.035274, pound: 0.00220462 },
        kilogram: { gram: 1e3, kilogram: 1, ounce: 35.274, pound: 2.20462 },
        ounce: { gram: 28.3495, kilogram: 0.0283495, ounce: 1, pound: 0.0625 },
        pound: { gram: 453.592, kilogram: 0.453592, ounce: 16, pound: 1 },
        stone: {
            gram: 6350.29,
            kilogram: 6.35029,
            ounce: 224,
            pound: 14,
            stone: 1,
        },
    },
    Lu = {
        liter: {
            liter: 1,
            milliliter: 1e3,
            gallon: 0.264172,
            'fluid-ounce': 33.814,
        },
        milliliter: {
            liter: 0.001,
            milliliter: 1,
            gallon: 264172e-9,
            'fluid-ounce': 0.033814,
        },
        gallon: {
            liter: 3.78541,
            milliliter: 3785.41,
            gallon: 1,
            'fluid-ounce': 128,
        },
        'fluid-ounce': {
            liter: 0.0295735,
            milliliter: 29.5735,
            gallon: 0.0078125,
            'fluid-ounce': 1,
        },
    },
    Iu = {
        day: {
            day: 1,
            hour: 24,
            microsecond: 864e8,
            millisecond: 864e5,
            minute: 1440,
            month: 0.0328767,
            nanosecond: 864e14,
            second: 86400,
            week: 0.142857,
            year: 0.00273973,
        },
        hour: {
            day: 0.0416667,
            hour: 1,
            microsecond: 36e8,
            millisecond: 36e5,
            minute: 60,
            month: 0.00136986,
            nanosecond: 36e11,
            second: 3600,
            week: 0.00595238,
            year: 114155e-9,
        },
        microsecond: {
            day: 115741e-19,
            hour: 277778e-18,
            microsecond: 1,
            millisecond: 0.001,
            minute: 1.66667e-8,
            month: 380517e-24,
            nanosecond: 1e3,
            second: 1e-6,
            week: 165344e-20,
            year: 3171e-20,
        },
        millisecond: {
            day: 1.15741e-8,
            hour: 2.77778e-7,
            microsecond: 1e3,
            millisecond: 1,
            minute: 166667e-10,
            month: 380517e-19,
            nanosecond: 1e6,
            second: 0.001,
            week: 165344e-16,
            year: 3171e-16,
        },
        minute: {
            day: 694444e-9,
            hour: 0.0166667,
            microsecond: 6e7,
            millisecond: 6e4,
            minute: 1,
            month: 228311e-10,
            nanosecond: 6e10,
            second: 60,
            week: 992063e-10,
            year: 190132e-11,
        },
        month: {
            day: 30.4368,
            hour: 730.484,
            microsecond: 2628e12,
            millisecond: 2628e9,
            minute: 43800,
            month: 1,
            nanosecond: 2628e15,
            second: 2628e6,
            week: 4.34524,
            year: 0.0833333,
        },
        nanosecond: {
            day: 1.15741e-20,
            hour: 277778e-24,
            microsecond: 0.001,
            millisecond: 1e-6,
            minute: 166667e-19,
            month: 380517e-28,
            nanosecond: 1,
            second: 1e-9,
            week: 165344e-26,
            year: 3171e-26,
        },
        second: {
            day: 115741e-10,
            hour: 277778e-9,
            microsecond: 1e6,
            millisecond: 1e3,
            minute: 0.0166667,
            month: 380517e-16,
            nanosecond: 1e9,
            second: 1,
            week: 1.65344e-8,
            year: 3.171e-10,
        },
        week: {
            day: 7,
            hour: 168,
            microsecond: 6048e11,
            millisecond: 6048e8,
            minute: 10080,
            month: 0.230137,
            nanosecond: 6048e14,
            second: 604800,
            week: 1,
            year: 0.0191781,
        },
        year: {
            day: 365,
            hour: 8760,
            microsecond: 3154e13,
            millisecond: 3154e10,
            minute: 525600,
            month: 12,
            nanosecond: 3154e16,
            second: 3154e4,
            week: 52.1429,
            year: 1,
        },
    },
    Du = {
        bit: {
            bit: 1,
            byte: 0.125,
            kilobit: 0.001,
            kilobyte: 125e-6,
            megabit: 1e-6,
            megabyte: 125e-9,
            gigabit: 1e-9,
            gigabyte: 1.25e-10,
            terabit: 1e-12,
            terabyte: 125e-15,
            petabyte: 125e-18,
        },
        byte: {
            bit: 8,
            byte: 1,
            kilobit: 0.008,
            kilobyte: 0.001,
            megabit: 8e-6,
            megabyte: 1e-6,
            gigabit: 8e-9,
            gigabyte: 1e-9,
            terabit: 8e-12,
            terabyte: 1e-12,
            petabyte: 1e-15,
        },
        kilobit: {
            bit: 1e3,
            byte: 125,
            kilobit: 1,
            kilobyte: 0.125,
            megabit: 0.001,
            megabyte: 125e-6,
            gigabit: 1e-6,
            gigabyte: 125e-9,
            terabit: 1e-9,
            terabyte: 1.25e-10,
            petabyte: 125e-15,
        },
        kilobyte: {
            bit: 8e3,
            byte: 1e3,
            kilobit: 8,
            kilobyte: 1,
            megabit: 0.008,
            megabyte: 0.001,
            gigabit: 8e-6,
            gigabyte: 1e-6,
            terabit: 8e-9,
            terabyte: 1e-9,
            petabyte: 1e-12,
        },
        megabit: {
            bit: 1e6,
            byte: 125e3,
            kilobit: 1e3,
            kilobyte: 125,
            megabit: 1,
            megabyte: 0.125,
            gigabit: 0.001,
            gigabyte: 125e-6,
            terabit: 1e-6,
            terabyte: 125e-9,
            petabyte: 1.25e-10,
        },
        megabyte: {
            bit: 8e6,
            byte: 1e6,
            kilobit: 8e3,
            kilobyte: 1e3,
            megabit: 8,
            megabyte: 1,
            gigabit: 0.008,
            gigabyte: 0.001,
            terabit: 8e-6,
            terabyte: 1e-6,
            petabyte: 1e-9,
        },
        gigabit: {
            bit: 1e9,
            byte: 125e6,
            kilobit: 1e6,
            kilobyte: 125e3,
            megabit: 1e3,
            megabyte: 125,
            gigabit: 1,
            gigabyte: 0.125,
            terabit: 0.001,
            terabyte: 125e-6,
            petabyte: 125e-9,
        },
        gigabyte: {
            bit: 8e9,
            byte: 1e9,
            kilobit: 8e6,
            kilobyte: 1e6,
            megabit: 8e3,
            megabyte: 1e3,
            gigabit: 8,
            gigabyte: 1,
            terabit: 0.008,
            terabyte: 0.001,
            petabyte: 1e-6,
        },
        terabit: {
            bit: 1e12,
            byte: 125e9,
            kilobit: 1e9,
            kilobyte: 125e6,
            megabit: 1e6,
            megabyte: 125e3,
            gigabit: 1e3,
            gigabyte: 125,
            terabit: 1,
            terabyte: 0.125,
            petabyte: 125e-6,
        },
        terabyte: {
            bit: 8e12,
            byte: 1e12,
            kilobit: 8e9,
            kilobyte: 1e9,
            megabit: 8e6,
            megabyte: 1e6,
            gigabit: 8e3,
            gigabyte: 1e3,
            terabit: 8,
            terabyte: 1,
            petabyte: 0.001,
        },
        petabyte: {
            bit: 1e15,
            byte: 125e12,
            kilobit: 1e12,
            kilobyte: 125e9,
            megabit: 1e9,
            megabyte: 125e6,
            gigabit: 1e6,
            gigabyte: 125e3,
            terabit: 1e3,
            terabyte: 125,
            petabyte: 1,
        },
    };
function Au(e) {
    let t = !1;
    function o(o) {
        var n, r, s;
        const i = (`${o}`.match(/\-/g) || []).length % 2 == 1;
        o = (function (t) {
            (t = (function (e) {
                return e.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (e) =>
                    (15 & e.charCodeAt(0)).toString()
                );
            })(`${t}`)),
                isNaN(t) &&
                    (t = t
                        .split(e.props.unitParts.decimal)
                        .map((e) => e.replace(/[^0-9]/g, ''))
                        .join('.'));
            if (((t = t.replace(/[^0-9\.]/g, '')), t.includes('.'))) {
                const o = t.split('.');
                0 === e.props.decimals
                    ? (t = o[0])
                    : 'currency' === e.props.type &&
                      ((o[1] = o[1].padEnd(p(), '0').slice(0, p())),
                      (t = o.join('.')));
            }
            return t;
        })(o);
        const d = {};
        ('unit' !== a() && 'decimal' !== a()) ||
            (d.minimumFractionDigits = o.includes('.') ? 1 : 0),
            (d.maximumFractionDigits =
                'currency' === e.props.type ? p() : e.props.decimals),
            e.props.minDecimals &&
                ((d.minimumFractionDigits = e.props.minDecimals),
                o &&
                    !o.includes('.') &&
                    (o += '.'.padEnd(e.props.minDecimals + 1, '0'))),
            0 === d.maximumFractionDigits &&
                o.includes('.') &&
                (o = o.split('.')[0]);
        let c = '';
        if (
            !isNaN(o) &&
            '' !== o.trim() &&
            ((o = i ? `-${o}` : o),
            e.props.max &&
                !isNaN(e.props.max) &&
                (o = Number(o) > e.props.max ? `${e.props.max}` : o),
            e.props.min &&
                !isNaN(e.props.min) &&
                (o = Number(o) < e.props.min ? `${e.props.min}` : o),
            o.includes('.') && 'currency' === e.props.type
                ? (o =
                      o.split('.')[0].padStart(1, '0') +
                      '.' +
                      (null !== (n = o.split('.')[1]) && void 0 !== n
                          ? n
                          : '0'))
                : 'currency' === e.props.type &&
                  (d.maximumFractionDigits =
                      null !== (r = d.minimumFractionDigits) && void 0 !== r
                          ? r
                          : 0),
            (c = l(e.props.displayLocale, d).format(o)),
            'unit' === e.props.type && '.' === o[o.length - 1])
        ) {
            const t = c.lastIndexOf(e.props.unitParts.decimal);
            (c = c.slice(0, t + 1) + c.slice(t + 2)), (o = o.slice(0, -1));
        }
        let u,
            f = o.split('.');
        'currency' === e.props.type &&
            ((f =
                f[0] +
                (null !== (s = f[1]) && void 0 !== s ? s : '').padEnd(
                    p(),
                    '0'
                )),
            f.length > 1 &&
                ((f = f.replace(/^0+/, '')),
                (f = '' !== o && '' === f ? '0' : f))),
            (e.props.valueStore = { number: o, integer: f, string: c }),
            (t = !0),
            e.props.valueStore &&
                (u = e.props.valueStore.hasOwnProperty(e.props.valueFormat)
                    ? e.props.valueStore[e.props.valueFormat]
                    : e.props.valueStore.number),
            e
                .input('' === u ? void 0 : u)
                .then(() => ((t = !1), Promise.resolve()));
    }
    function n() {
        s(
            `${e.props.id}`,
            (t) => {
                var o, n;
                t instanceof HTMLInputElement &&
                    (t.value =
                        null !==
                            (n =
                                null === (o = e.props.valueStore) ||
                                void 0 === o
                                    ? void 0
                                    : o.string) && void 0 !== n
                            ? n
                            : '');
            },
            e.props.__root
        );
    }
    function r() {
        var t, o;
        const n =
            null === (t = e.props.__root) || void 0 === t
                ? void 0
                : t.querySelector(`#${e.props.id}_inner input`);
        return null !== (o = null == n ? void 0 : n.value) && void 0 !== o
            ? o
            : '';
    }
    function a() {
        return e.props.currency
            ? 'currency'
            : e.props.unit
              ? 'unit'
              : 'decimal';
    }
    function l(t, o = {}) {
        const n = a(),
            r = Object.assign({}, { style: n, roundingMode: 'trunc' }, o);
        return (
            'unit' === e.props.type && (r.unitDisplay = e.props.unitDisplay),
            'currency' === e.props.type &&
                (r.currencyDisplay = e.props.currencyDisplay),
            (r[n] = e.props[n]),
            new Intl.NumberFormat(t, r)
        );
    }
    function i(t, o) {
        var n, s, a, l, i;
        const p =
            null === (n = e.props.__root) || void 0 === n
                ? void 0
                : n.querySelector(`#${e.props.id}_inner input`);
        if (!p) return;
        const d =
            (null !==
                (a =
                    null === (s = e.props.unitParts.unit) || void 0 === s
                        ? void 0
                        : s.length) && void 0 !== a
                ? a
                : 0) +
            (null !==
                (i =
                    null === (l = e.props.unitParts.literal) || void 0 === l
                        ? void 0
                        : l.length) && void 0 !== i
                ? i
                : 0);
        e.props.unitParts.unitLeft
            ? (t = Math.max(t, d))
            : ((t = Math.min(t, r().length - d)),
              'insertText' === o && 0 === t && (t = 1)),
            p.setSelectionRange(t, t);
    }
    function p() {
        return void 0 !== e.props.decimals
            ? e.props.decimals
            : void 0 !== e.props.minDecimals &&
                e.props.minDecimals > e.props.unitParts.fractionLength
              ? e.props.minDecimals
              : e.props.unitParts.fractionLength;
    }
    (e.props.valueStore = null),
        e.on('input', ({ payload: e }) => {
            t || (o(e), n());
        }),
        e.context &&
            ((e.context.handlers.init = (t = null) => {
                var r;
                e.props.skipInit
                    ? (e.props.skipInit = !1)
                    : (function () {
                          var t, o, n, r, s, a, i;
                          e.props.skipInit = !0;
                          const p = l(e.props.displayLocale).formatToParts(
                              12345678.12345678
                          );
                          e.props.unitParts = {
                              decimal:
                                  null ===
                                      (t = p.find(
                                          (e) => 'decimal' == e.type
                                      )) || void 0 === t
                                      ? void 0
                                      : t.value,
                              group:
                                  null ===
                                      (o = p.find((e) => 'group' == e.type)) ||
                                  void 0 === o
                                      ? void 0
                                      : o.value,
                              unit:
                                  null ===
                                      (n = p.find((e) =>
                                          ['unit', 'currency'].includes(e.type)
                                      )) || void 0 === n
                                      ? void 0
                                      : n.value,
                              unitLeft: ['unit', 'currency'].includes(
                                  p[0].type
                              ),
                              literal:
                                  null !==
                                      (s =
                                          null ===
                                              (r = p.find(
                                                  (e) => 'literal' == e.type
                                              )) || void 0 === r
                                              ? void 0
                                              : r.value) && void 0 !== s
                                      ? s
                                      : '',
                              fractionLength:
                                  null !==
                                      (i =
                                          null ===
                                              (a = p.find(
                                                  (e) => 'fraction' == e.type
                                              )) || void 0 === a
                                              ? void 0
                                              : a.value.length) && void 0 !== i
                                      ? i
                                      : 0,
                          };
                      })();
                let s =
                    null !== (r = null != t ? t : e._value) && void 0 !== r
                        ? r
                        : '';
                e.props.valueStore
                    ? (s = e.props.valueStore.number)
                    : 'integer' === e.props.valueFormat &&
                      (s = (function (e) {
                          var t;
                          return (
                              parseFloat(`${e}`) /
                              Math.pow(
                                  10,
                                  null !== (t = p()) && void 0 !== t ? t : 0
                              )
                          )
                              .toString()
                              .replace('.', p());
                      })(`${null != s ? s : ''}`)),
                    'unit' === e.props.type &&
                        e.props.valueUnit &&
                        e.props.unit &&
                        e.props.valueUnit !== e.props.unit &&
                        e.hook.input((t, o) => {
                            const n = (function (e, t, o) {
                                if (wu[e] && wu[e][o]) return t * wu[e][o];
                                if (_u[e] && _u[e][o]) return _u[e][o](t);
                                if (ku[e] && ku[e][o]) return t * ku[e][o];
                                if (Su[e] && Su[e][o]) return t * Su[e][o];
                                if (Lu[e] && Lu[e][o]) return t * Lu[e][o];
                                if (Iu[e] && Iu[e][o]) return t * Iu[e][o];
                                if (Du[e] && Du[e][o]) return t * Du[e][o];
                                throw new Error('Conversion not supported');
                            })(e.props.unit, t, e.props.valueUnit);
                            return isNaN(n)
                                ? o(t)
                                : o(
                                      +n.toFixed(
                                          Number(e.props.valueDecimals) || 2
                                      )
                                  );
                        }),
                    o(s),
                    n();
            }),
            (e.context.handlers.handleBeforeInput = (t) => {
                var n, r, s, a, l, p, d, c, u;
                if (
                    !e.props.inExecCommand &&
                    'insertLineBreak' !== t.inputType &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    t.target instanceof HTMLInputElement)
                ) {
                    const f = t.target,
                        v = null !== (n = t.data) && void 0 !== n ? n : '',
                        h =
                            null !== (r = t.target.value) && void 0 !== r
                                ? r
                                : '',
                        m =
                            null !== (s = t.target.selectionStart) &&
                            void 0 !== s
                                ? s
                                : 0,
                        g =
                            null !== (a = t.target.selectionEnd) && void 0 !== a
                                ? a
                                : 0,
                        $ = g - m,
                        b = h.indexOf(e.props.unitParts.decimal);
                    let y =
                            (null !== (l = t.target.selectionStart) &&
                            void 0 !== l
                                ? l
                                : 0) + (t.data ? 0 : -1),
                        x = h,
                        w = 1;
                    if (
                        h.includes(e.props.unitParts.decimal) &&
                        v === e.props.unitParts.decimal
                    )
                        return (
                            v === e.props.unitParts.decimal &&
                                (y = x.indexOf(e.props.unitParts.decimal) + 1),
                            void i(y)
                        );
                    if (
                        !(
                            null === e.props.min ||
                            e.props.min < 0 ||
                            e.props.max < 0
                        ) &&
                        '-' === v
                    )
                        return;
                    if (v.match(/[a-zA-Z]/)) return;
                    if (
                        v === e.props.unitParts.decimal &&
                        0 === e.props.decimals
                    )
                        return;
                    if (
                        ('deleteByCut' === t.inputType &&
                            $ > 0 &&
                            ((x = x.slice(0, m) + x.slice(g)), (y = g)),
                        'insertFromPaste' === t.inputType)
                    ) {
                        const e =
                            null !== (p = t.data) && void 0 !== p ? p : '';
                        x = x.slice(0, m) + e + x.slice(g);
                    }
                    if (
                        ('deleteContentBackward' === t.inputType &&
                        h[m - 1] === e.props.unitParts.group
                            ? ((w += 1), (y -= 1))
                            : 'deleteContentForward' === t.inputType &&
                              h[m] === e.props.unitParts.group &&
                              ((w += 1), (y += 1)),
                        -1 !== b && y > b && 'insertText' === t.inputType
                            ? (x = (function (e, t, o) {
                                  return (
                                      e.substring(0, t) +
                                      o +
                                      e.substring(t + o.length)
                                  );
                              })(
                                  x,
                                  y,
                                  null !== (d = t.data) && void 0 !== d
                                      ? d
                                      : '0'
                              ))
                            : 'insertText' === t.inputType
                              ? ((y = g),
                                (x = x.slice(0, m) + t.data + x.slice(g)))
                              : 'deleteContentForward' === t.inputType
                                ? ((y += 2),
                                  (x =
                                      0 === $
                                          ? x.slice(0, m) + x.slice(g + w)
                                          : x.slice(0, m) + x.slice(g)))
                                : 'deleteContentBackward' === t.inputType &&
                                  ((y += 1),
                                  0 === $
                                      ? (x =
                                            x.slice(0, Math.max(m - w, 0)) +
                                            x.slice(g))
                                      : $ > 0 &&
                                        (x = x.slice(0, m) + x.slice(g))),
                        'deleteContentForward' === t.inputType &&
                            h[m] === e.props.unitParts.decimal)
                    ) {
                        const t = x.slice(m - 1);
                        (x = x.slice(0, m)),
                            t.includes(e.props.unitParts.unit) &&
                                (x += ' ' + e.props.unitParts.unit);
                    } else if (
                        'deleteContentBackward' === t.inputType &&
                        h[m - 1] === e.props.unitParts.decimal
                    ) {
                        const t = x.slice(m - 1);
                        (x = x.slice(0, m - 1)),
                            t.includes(e.props.unitParts.unit) &&
                                (x += ' ' + e.props.unitParts.unit);
                    }
                    if (
                        (o(x),
                        (x =
                            (null === (c = e.props.valueStore) || void 0 === c
                                ? void 0
                                : c.string) ||
                            (null === (u = e.props.valueStore) || void 0 === u
                                ? void 0
                                : u.number) ||
                            ''),
                        (y = x.length - h.length + y),
                        x.length === h.length &&
                            y > b &&
                            (y += t.inputType.includes('delete') ? -1 : 1),
                        f.setSelectionRange(0, h.length),
                        (e.props.inExecCommand = !0),
                        document.execCommand('insertText', void 0, x),
                        (e.props.inExecCommand = !1),
                        v === e.props.unitParts.decimal
                            ? (y = x.indexOf(e.props.unitParts.decimal) + 1)
                            : h.includes(e.props.unitParts.decimal) &&
                              !x.includes(e.props.unitParts.decimal) &&
                              (y = x.length),
                        'insertText' === t.inputType &&
                            e.props.minDecimals &&
                            (!e.value ||
                                (0 === m && g === h.length) ||
                                (-1 === b && e.props.minDecimals && h)))
                    ) {
                        let t = 0;
                        (t = e.props.unitParts.unit
                            ? e.props.unitParts.unit.length + 1
                            : 0),
                            (y -= e.props.minDecimals),
                            e.props.unitParts.unitLeft
                                ? (y -= t - 1)
                                : (y -= t + 1);
                    }
                    i(Math.max(0, y), t.inputType);
                }
            }),
            (e.context.handlers.handleInput = (t) => {
                e.emit('dom-input-event', t),
                    t.target instanceof HTMLInputElement &&
                        ((e.props.inputText = t.target.value),
                        o(t.target.value));
            }),
            (e.context.handlers.handleKeyDown = (t) => {
                var s, a;
                if (
                    t.target instanceof HTMLInputElement &&
                    ('ArrowUp' === t.key || 'ArrowDown' === t.key)
                ) {
                    const l =
                        'ArrowUp' === t.key
                            ? 1 * e.props.step
                            : -1 * e.props.step;
                    o(
                        (function (e, t) {
                            var o, n, r, s;
                            const a = `${e}`.split('.'),
                                l = `${t}`.split('.');
                            let i =
                                    null !== (o = a[0]) && void 0 !== o
                                        ? o
                                        : '0',
                                p =
                                    null !== (n = l[0]) && void 0 !== n
                                        ? n
                                        : '0';
                            const d =
                                    null !== (r = a[1]) && void 0 !== r
                                        ? r
                                        : '',
                                c =
                                    null !== (s = l[1]) && void 0 !== s
                                        ? s
                                        : '',
                                u = Math.max(d.length, c.length);
                            u > 0 &&
                                ((i += d.padEnd(u, '0')),
                                (p += c.padEnd(u, '0')));
                            const f = BigInt(BigInt(i) + BigInt(p)).toString();
                            return u > 0
                                ? f.slice(0, -1 * u) + '.' + f.slice(-1 * u)
                                : f;
                        })(
                            null !==
                                (a =
                                    null === (s = e.props.valueStore) ||
                                    void 0 === s
                                        ? void 0
                                        : s.number) && void 0 !== a
                                ? a
                                : 0,
                            l
                        )
                    ),
                        n(),
                        setTimeout(() => {
                            i(r().length);
                        }, 1);
                }
            }));
}
const Cu = {
        schema: /* #__PURE__ */ cu(
            /* #__PURE__ */ fu(
                /* #__PURE__ */ vu('$label'),
                /* #__PURE__ */ uu(
                    /* #__PURE__ */ yu('prefix'),
                    /* #__PURE__ */ hu(),
                    /* #__PURE__ */ xu(),
                    /* #__PURE__ */ mu(),
                    /* #__PURE__ */ yu('suffix')
                )
            ),
            /* #__PURE__ */ gu('$help'),
            /* #__PURE__ */ $u(/* #__PURE__ */ bu('$message.value'))
        ),
        type: 'input',
        family: 'text',
        features: [
            function (e) {
                var t, o, n, r, s, a;
                const l = [
                    'unit',
                    'decimals',
                    'minDecimals',
                    'displayLocale',
                    'min',
                    'max',
                    'step',
                    'valueFormat',
                    'unitDisplay',
                    'placeholder',
                    'unitParts',
                    'valueUnit',
                    'valueDecimals',
                ];
                e.addProps(l),
                    (null !== (t = (r = e.props).displayLocale) &&
                        void 0 !== t) ||
                        (r.displayLocale = e.props.locale || 'en-US'),
                    (e.props.unitDisplay = e.props.unitDisplay || 'short'),
                    'false' === e.props.decimals || !1 === e.props.decimals
                        ? (e.props.decimals = 0)
                        : void 0 !== e.props.decimals
                          ? (e.props.decimals = Number(e.props.decimals))
                          : (e.props.decimals = 2),
                    (e.props.minDecimals =
                        void 0 !== e.props.minDecimals
                            ? Number(e.props.minDecimals)
                            : void 0),
                    void 0 !== e.props.min &&
                        (e.props.min = Number(e.props.min)),
                    void 0 !== e.props.max &&
                        (e.props.max = Number(e.props.max)),
                    (null !== (o = (s = e.props).step) && void 0 !== o) ||
                        (s.step = 1),
                    (null !== (n = (a = e.props).valueFormat) &&
                        void 0 !== n) ||
                        (a.valueFormat = 'number'),
                    -1 === ['string', 'number'].indexOf(e.props.valueFormat) &&
                        (e.props.valueFormat = 'number'),
                    e.on('created', () => {
                        e.context &&
                            ((e.context.handlers.unitBlur = (t) => {
                                if (!(t.target instanceof HTMLInputElement))
                                    return;
                                let o = t.target.value;
                                (function (e) {
                                    e = e.trim();
                                    const t = /\d+\,\s*%?$/;
                                    return /\d+\.\s*%?$/.test(e) || t.test(e);
                                })(o) &&
                                    ((o = o.replace(
                                        e.props.unitParts.decimal,
                                        ''
                                    )),
                                    (t.target.value = o)),
                                    e.context && e.context.handlers.blur(t);
                            }),
                            Au(e),
                            e.context.handlers.init(),
                            l.forEach((t) => {
                                e.on(`prop:${t}`, () => {
                                    var t;
                                    null ===
                                        (t = null == e ? void 0 : e.context) ||
                                        void 0 === t ||
                                        t.handlers.init();
                                });
                            }));
                    });
            },
        ],
    },
    Tu = /* #__PURE__ */ Me('cr'),
    {
        outer: Eu,
        inner: Ou,
        wrapper: Mu,
        label: Vu,
        prefix: Fu,
        suffix: Bu,
        help: Pu,
        messages: Hu,
        message: Ru,
        icon: Nu,
    } = /* #__PURE__ */ Ve(Tu),
    Ku = Tu('input', () => ({
        $el: 'input',
        bind: '$attrs',
        attrs: {
            name: '$node.name',
            autocomplete: '$attrs.autocomplete || off',
            id: '$id',
            onChange: '$handlers.handleInput',
            onBlur: '$handlers.blur',
            onInput: '$handlers.handleInput',
            onKeydown: '$handlers.handleKeyDown',
            onBeforeinput: '$handlers.handleBeforeInput',
            readonly: '$readonly',
            disabled: '$disabled',
            placeholder: '$placeholder || $unitParts.unit',
            inputmode: 'decimal',
            'data-unit': '$unit',
            'data-currency': '$currency',
            'data-display-locale': '$displayLocale',
            'data-value-locale': '$valueLocale',
            'data-decimals': '$decimals',
            'data-trailing': '$trailingZeros',
            'data-numeric-value': '$_numericValue',
            'data-align': '$_valueAlignAuto',
            'aria-required': '$state.required || undefined',
        },
    }));
const Wu = {
    schema: /* #__PURE__ */ Eu(
        /* #__PURE__ */ Mu(
            /* #__PURE__ */ Vu('$label'),
            /* #__PURE__ */ Ou(
                /* #__PURE__ */ Nu('prefix'),
                /* #__PURE__ */ Fu(),
                /* #__PURE__ */ Ku(),
                /* #__PURE__ */ Bu(),
                /* #__PURE__ */ Nu('suffix')
            )
        ),
        /* #__PURE__ */ Pu('$help'),
        /* #__PURE__ */ Hu(/* #__PURE__ */ Ru('$message.value'))
    ),
    type: 'input',
    family: 'text',
    props: ['options'],
    features: [
        function (e) {
            var t, o, n, r, s, a, l, i;
            const p = [
                'currency',
                'decimals',
                'maxDecimals',
                'minDecimals',
                'displayLocale',
                'min',
                'max',
                'step',
                'valueFormat',
                'currencyDisplay',
                'placeholder',
                'unitParts',
            ];
            e.addProps(p),
                e.addProps(['inputText']),
                (null !== (t = (s = e.props).displayLocale) && void 0 !== t) ||
                    (s.displayLocale = e.props.locale || 'en-US'),
                (null !== (o = (a = e.props).currency) && void 0 !== o) ||
                    (a.currency = e.props.currency || 'USD'),
                'false' === e.props.decimals || !1 === e.props.decimals
                    ? (e.props.decimals = 0)
                    : void 0 !== e.props.decimals &&
                      (e.props.decimals = Number(e.props.decimals)),
                (e.props.minDecimals =
                    void 0 !== e.props.minDecimals
                        ? Number(e.props.minDecimals)
                        : void 0),
                void 0 !== e.props.min && (e.props.min = Number(e.props.min)),
                void 0 !== e.props.max && (e.props.max = Number(e.props.max)),
                (null !== (n = (l = e.props).step) && void 0 !== n) ||
                    (l.step = 1),
                (null !== (r = (i = e.props).valueFormat) && void 0 !== r) ||
                    (i.valueFormat = 'number'),
                -1 ===
                    ['string', 'number', 'integer'].indexOf(
                        e.props.valueFormat
                    ) && (e.props.valueFormat = 'number'),
                e.on('created', () => {
                    e.context &&
                        (Au(e),
                        e.context.handlers.init(),
                        p.forEach((t) => {
                            e.on(`prop:${t}`, () => {
                                var t;
                                null === (t = null == e ? void 0 : e.context) ||
                                    void 0 === t ||
                                    t.handlers.init();
                            });
                        }));
                });
        },
    ],
};
var Uu = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    autocomplete: cs,
    colorpicker: Yc,
    currency: Wu,
    datepicker: si,
    dropdown: Ko,
    mask: Ji,
    rating: Lr,
    repeater: Nn,
    slider: Rd,
    taglist: Di,
    toggle: pn,
    togglebuttons: pu,
    transferlist: id,
    unit: Cu,
});
const Yu = 'undefined' != typeof window ? setInterval : () => 0,
    ju = new WeakSet();
function qu(e, t = {}) {
    const o = e;
    try {
        if (!o) throw new Error('FormKitNoKey');
        function n(t) {
            if (ju.has(t)) {
                const o = (e) => {
                    t.props.definition &&
                        (t.props.definition.schema = e || [
                            {
                                $el: le(13919),
                                children: `${le(451228594)}${le(32863693)}`,
                            },
                        ]),
                        t.emit('schema'),
                        setTimeout(() => t.destroy(), 1e3);
                };
                !(function (e, t) {
                    me[e] ? me[e].add(t) : (me[e] = new Set([t]));
                })(e, o);
            }
        }
        return (
            (function (e) {
                const t = () => {
                    throw new Error(`InvalidFormKitKey ${e}`);
                };
                if (!/^fk-/i.test(e)) return t();
                const o = e.substring(3);
                if (!oe.test(o)) return t();
                const n = parseInt(o, 16).toString(),
                    r = Number(n[0]) < 6 ? Number(n[0]) : 6,
                    s = n.substring(r, r + (n.length - 6)),
                    a = n.substring(0, r) + n.substring(r + s.length),
                    l = a.slice(0, 2),
                    i = `${a[a.length - 1]}${a[0]}`;
                Number(s) !== Math.floor((Number(a) * Number(l)) / Number(i)) &&
                    t();
            }), //)(o),
            (n.library = (o) => {
                if (o.props.type in t) {
                    const { schema: n, ...r } = t[o.props.type];
                    ju.add(o), o.define({ ...r, schema: n(e) });
                }
                Yu(() => ce.has(e) && o.emit((952679114).toString(32)), 4e3);
            }),
            n
        );
    } catch (r) {
        throw (
            (r instanceof Error &&
                (function (e) {
                    if ('FormKitNoKey' === e.message)
                        throw new Error(
                            'A FormKit API key is required, please visit https://formkit.com/pro'
                        );
                })(r),
            r)
        );
    }
}
export {
    Be as $if,
    cs as autocomplete,
    Yc as colorpicker,
    Ve as createBaseSections,
    qu as createProPlugin,
    Me as createSectionFactory,
    Wu as currency,
    si as datepicker,
    Ko as dropdown,
    Uu as inputs,
    Ji as mask,
    Lr as rating,
    Nn as repeater,
    Rd as slider,
    Di as taglist,
    pn as toggle,
    pu as togglebuttons,
    id as transferlist,
    Cu as unit,
};
