import {
    r as h,
    n as p,
    f as v,
    h as A,
    i as N,
    j as E,
    k as w,
    l as j,
    m as C,
    p as b,
    q as B,
    v as I,
    w as P
} from './scheduler.k-kUyWhY.js';
let $ = !1;
function T() {
    $ = !0;
}
function q() {
    $ = !1;
}
function H(e, t, n, a) {
    for (; e < t; ) {
        const s = e + ((t - e) >> 1);
        n(s) <= a ? (e = s + 1) : (t = s);
    }
    return e;
}
function M(e) {
    if (e.hydrate_init) return;
    e.hydrate_init = !0;
    let t = e.childNodes;
    if (e.nodeName === 'HEAD') {
        const i = [];
        for (let r = 0; r < t.length; r++) {
            const o = t[r];
            o.claim_order !== void 0 && i.push(o);
        }
        t = i;
    }
    const n = new Int32Array(t.length + 1),
        a = new Int32Array(t.length);
    n[0] = -1;
    let s = 0;
    for (let i = 0; i < t.length; i++) {
        const r = t[i].claim_order,
            o =
                (s > 0 && t[n[s]].claim_order <= r
                    ? s + 1
                    : H(1, s, (_) => t[n[_]].claim_order, r)) - 1;
        a[i] = n[o] + 1;
        const u = o + 1;
        (n[u] = i), (s = Math.max(u, s));
    }
    const c = [],
        l = [];
    let f = t.length - 1;
    for (let i = n[s] + 1; i != 0; i = a[i - 1]) {
        for (c.push(t[i - 1]); f >= i; f--) l.push(t[f]);
        f--;
    }
    for (; f >= 0; f--) l.push(t[f]);
    c.reverse(), l.sort((i, r) => i.claim_order - r.claim_order);
    for (let i = 0, r = 0; i < l.length; i++) {
        for (; r < c.length && l[i].claim_order >= c[r].claim_order; ) r++;
        const o = r < c.length ? c[r] : null;
        e.insertBefore(l[i], o);
    }
}
function O(e, t) {
    if ($) {
        for (
            M(e),
                (e.actual_end_child === void 0 ||
                    (e.actual_end_child !== null && e.actual_end_child.parentNode !== e)) &&
                    (e.actual_end_child = e.firstChild);
            e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

        )
            e.actual_end_child = e.actual_end_child.nextSibling;
        t !== e.actual_end_child
            ? (t.claim_order !== void 0 || t.parentNode !== e) &&
              e.insertBefore(t, e.actual_end_child)
            : (e.actual_end_child = t.nextSibling);
    } else (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function X(e, t, n) {
    $ && !n ? O(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null);
}
function D(e) {
    e.parentNode && e.parentNode.removeChild(e);
}
function L(e) {
    return document.createElement(e);
}
function y(e) {
    return document.createTextNode(e);
}
function Y() {
    return y(' ');
}
function Z() {
    return y('');
}
function k(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ee(e) {
    return e.dataset.svelteH;
}
function R(e) {
    return Array.from(e.childNodes);
}
function U(e) {
    e.claim_info === void 0 && (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function S(e, t, n, a, s = !1) {
    U(e);
    const c = (() => {
        for (let l = e.claim_info.last_index; l < e.length; l++) {
            const f = e[l];
            if (t(f)) {
                const i = n(f);
                return (
                    i === void 0 ? e.splice(l, 1) : (e[l] = i),
                    s || (e.claim_info.last_index = l),
                    f
                );
            }
        }
        for (let l = e.claim_info.last_index - 1; l >= 0; l--) {
            const f = e[l];
            if (t(f)) {
                const i = n(f);
                return (
                    i === void 0 ? e.splice(l, 1) : (e[l] = i),
                    s ? i === void 0 && e.claim_info.last_index-- : (e.claim_info.last_index = l),
                    f
                );
            }
        }
        return a();
    })();
    return (c.claim_order = e.claim_info.total_claimed), (e.claim_info.total_claimed += 1), c;
}
function V(e, t, n, a) {
    return S(
        e,
        (s) => s.nodeName === t,
        (s) => {
            const c = [];
            for (let l = 0; l < s.attributes.length; l++) {
                const f = s.attributes[l];
                n[f.name] || c.push(f.name);
            }
            c.forEach((l) => s.removeAttribute(l));
        },
        () => a(t)
    );
}
function te(e, t, n) {
    return V(e, t, n, L);
}
function W(e, t) {
    return S(
        e,
        (n) => n.nodeType === 3,
        (n) => {
            const a = '' + t;
            if (n.data.startsWith(a)) {
                if (n.data.length !== a.length) return n.splitText(a.length);
            } else n.data = a;
        },
        () => y(t),
        !0
    );
}
function ne(e) {
    return W(e, ' ');
}
function ie(e, t) {
    (t = '' + t), e.data !== t && (e.data = t);
}
function re(e, t, n, a) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, a ? 'important' : '');
}
function ae(e, t) {
    return new e(t);
}
const m = new Set();
let d;
function le() {
    d = { r: 0, c: [], p: d };
}
function se() {
    d.r || h(d.c), (d = d.p);
}
function z(e, t) {
    e && e.i && (m.delete(e), e.i(t));
}
function fe(e, t, n, a) {
    if (e && e.o) {
        if (m.has(e)) return;
        m.add(e),
            d.c.push(() => {
                m.delete(e), a && (n && e.d(1), a());
            }),
            e.o(t);
    } else a && a();
}
function ce(e) {
    e && e.c();
}
function ue(e, t) {
    e && e.l(t);
}
function F(e, t, n) {
    const { fragment: a, after_update: s } = e.$$;
    a && a.m(t, n),
        w(() => {
            const c = e.$$.on_mount.map(B).filter(N);
            e.$$.on_destroy ? e.$$.on_destroy.push(...c) : h(c), (e.$$.on_mount = []);
        }),
        s.forEach(w);
}
function G(e, t) {
    const n = e.$$;
    n.fragment !== null &&
        (j(n.after_update),
        h(n.on_destroy),
        n.fragment && n.fragment.d(t),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []));
}
function J(e, t) {
    e.$$.dirty[0] === -1 && (I.push(e), P(), e.$$.dirty.fill(0)),
        (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function oe(e, t, n, a, s, c, l = null, f = [-1]) {
    const i = C;
    b(e);
    const r = (e.$$ = {
        fragment: null,
        ctx: [],
        props: c,
        update: p,
        not_equal: s,
        bound: v(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (i ? i.$$.context : [])),
        callbacks: v(),
        dirty: f,
        skip_bound: !1,
        root: t.target || i.$$.root
    });
    l && l(r.root);
    let o = !1;
    if (
        ((r.ctx = n
            ? n(e, t.props || {}, (u, _, ...x) => {
                  const g = x.length ? x[0] : _;
                  return (
                      r.ctx &&
                          s(r.ctx[u], (r.ctx[u] = g)) &&
                          (!r.skip_bound && r.bound[u] && r.bound[u](g), o && J(e, u)),
                      _
                  );
              })
            : []),
        r.update(),
        (o = !0),
        h(r.before_update),
        (r.fragment = a ? a(r.ctx) : !1),
        t.target)
    ) {
        if (t.hydrate) {
            T();
            const u = R(t.target);
            r.fragment && r.fragment.l(u), u.forEach(D);
        } else r.fragment && r.fragment.c();
        t.intro && z(e.$$.fragment), F(e, t.target, t.anchor), q(), A();
    }
    b(i);
}
class de {
    $$ = void 0;
    $$set = void 0;
    $destroy() {
        G(this, 1), (this.$destroy = p);
    }
    $on(t, n) {
        if (!N(n)) return p;
        const a = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
            a.push(n),
            () => {
                const s = a.indexOf(n);
                s !== -1 && a.splice(s, 1);
            }
        );
    }
    $set(t) {
        this.$$set &&
            !E(t) &&
            ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
}
const K = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(K);
export {
    de as S,
    X as a,
    se as b,
    ne as c,
    z as d,
    Z as e,
    D as f,
    L as g,
    te as h,
    oe as i,
    R as j,
    k,
    re as l,
    y as m,
    W as n,
    ie as o,
    le as p,
    ae as q,
    ce as r,
    Y as s,
    fe as t,
    ue as u,
    F as v,
    G as w,
    O as x,
    ee as y
};
