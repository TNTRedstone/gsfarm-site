import { s as H, n as C } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as T,
    i as V,
    g as _,
    m as k,
    s as $,
    h as x,
    j as p,
    n as y,
    f as g,
    c as j,
    k as v,
    a as E,
    y as m,
    o as q,
    z,
    x as B,
    d as b,
    b as L,
    t as D,
    r as N,
    u as P,
    v as F,
    w as G,
    p as J
} from '../chunks/index.3eaemhlc.js';
function w(r) {
    return r?.length !== void 0 ? r : Array.from(r);
}
function I(r, t, n) {
    const s = r.slice();
    return (s[4] = t[n]), s;
}
function M(r) {
    let t,
        n = r[4] + '',
        s;
    return {
        c() {
            (t = _('li')), (s = k(n)), this.h();
        },
        l(h) {
            t = x(h, 'LI', { class: !0 });
            var i = p(t);
            (s = y(i, n)), i.forEach(g), this.h();
        },
        h() {
            v(t, 'class', 'sm:text-sm md:text-md lg:text-lg');
        },
        m(h, i) {
            E(h, t, i), m(t, s);
        },
        p(h, i) {
            i & 2 && n !== (n = h[4] + '') && q(s, n);
        },
        d(h) {
            h && g(t);
        }
    };
}
function K(r) {
    let t,
        n,
        s,
        h,
        i,
        f = w(r[1]),
        a = [];
    for (let l = 0; l < f.length; l += 1) a[l] = M(I(r, f, l));
    return {
        c() {
            (t = _('div')), (n = _('h2')), (s = k(r[0])), (h = k(':')), (i = $());
            for (let l = 0; l < a.length; l += 1) a[l].c();
            this.h();
        },
        l(l) {
            t = x(l, 'DIV', { class: !0 });
            var u = p(t);
            n = x(u, 'H2', { class: !0 });
            var e = p(n);
            (s = y(e, r[0])), (h = y(e, ':')), e.forEach(g), (i = j(u));
            for (let o = 0; o < a.length; o += 1) a[o].l(u);
            u.forEach(g), this.h();
        },
        h() {
            v(n, 'class', 'sm:text-sm md:text-md lg:text-lg xl:text-xl'),
                v(t, 'class', 'bg-sky-300 rounded');
        },
        m(l, u) {
            E(l, t, u), m(t, n), m(n, s), m(n, h), m(t, i);
            for (let e = 0; e < a.length; e += 1) a[e] && a[e].m(t, null);
        },
        p(l, [u]) {
            if ((u & 1 && q(s, l[0]), u & 2)) {
                f = w(l[1]);
                let e;
                for (e = 0; e < f.length; e += 1) {
                    const o = I(l, f, e);
                    a[e] ? a[e].p(o, u) : ((a[e] = M(o)), a[e].c(), a[e].m(t, null));
                }
                for (; e < a.length; e += 1) a[e].d(1);
                a.length = f.length;
            }
        },
        i: C,
        o: C,
        d(l) {
            l && g(t), z(a, l);
        }
    };
}
function O(r, t, n) {
    let { date: s } = t,
        { label: h = 'Countdown' } = t,
        i = [];
    function f() {
        let a = new Date(),
            u = new Date(s).getTime() - a.getTime();
        if (u > 0) {
            let e = Math.floor(u / 864e5),
                o = Math.floor((u % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
                c = Math.floor((u % (1e3 * 60 * 60)) / (1e3 * 60)),
                d = Math.floor((u % (1e3 * 60)) / 1e3);
            n(
                1,
                (i = [
                    e.toString() + ' days',
                    o.toString() + ' hours',
                    c.toString() + ' minutes',
                    d.toString() + ' seconds'
                ])
            );
        } else n(1, (i = ['Event has passed']));
    }
    return (
        f(),
        setInterval(f, 1e3),
        (r.$$set = (a) => {
            'date' in a && n(2, (s = a.date)), 'label' in a && n(0, (h = a.label));
        }),
        [h, i, s]
    );
}
class Q extends T {
    constructor(t) {
        super(), V(this, t, O, K, H, { date: 2, label: 0 });
    }
}
function S(r, t, n) {
    const s = r.slice();
    return (s[1] = t[n]), s;
}
function A(r) {
    let t, n;
    return (
        (t = new Q({ props: { date: r[1].date, label: r[1].label } })),
        {
            c() {
                N(t.$$.fragment);
            },
            l(s) {
                P(t.$$.fragment, s);
            },
            m(s, h) {
                F(t, s, h), (n = !0);
            },
            p: C,
            i(s) {
                n || (b(t.$$.fragment, s), (n = !0));
            },
            o(s) {
                D(t.$$.fragment, s), (n = !1);
            },
            d(s) {
                G(t, s);
            }
        }
    );
}
function R(r) {
    let t,
        n,
        s = 'Countdowns:',
        h,
        i,
        f,
        a = w(r[0]),
        l = [];
    for (let e = 0; e < a.length; e += 1) l[e] = A(S(r, a, e));
    const u = (e) =>
        D(l[e], 1, 1, () => {
            l[e] = null;
        });
    return {
        c() {
            (t = _('main')), (n = _('h1')), (n.textContent = s), (h = $()), (i = _('div'));
            for (let e = 0; e < l.length; e += 1) l[e].c();
            this.h();
        },
        l(e) {
            t = x(e, 'MAIN', {});
            var o = p(t);
            (n = x(o, 'H1', { class: !0, 'data-svelte-h': !0 })),
                B(n) !== 'svelte-1ccmg4r' && (n.textContent = s),
                (h = j(o)),
                (i = x(o, 'DIV', { class: !0 }));
            var c = p(i);
            for (let d = 0; d < l.length; d += 1) l[d].l(c);
            c.forEach(g), o.forEach(g), this.h();
        },
        h() {
            v(n, 'class', 'sm:text-sm md:text-md lg:text-lg xl:text-xl'),
                v(i, 'class', 'grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-1');
        },
        m(e, o) {
            E(e, t, o), m(t, n), m(t, h), m(t, i);
            for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(i, null);
            f = !0;
        },
        p(e, [o]) {
            if (o & 1) {
                a = w(e[0]);
                let c;
                for (c = 0; c < a.length; c += 1) {
                    const d = S(e, a, c);
                    l[c]
                        ? (l[c].p(d, o), b(l[c], 1))
                        : ((l[c] = A(d)), l[c].c(), b(l[c], 1), l[c].m(i, null));
                }
                for (J(), c = a.length; c < l.length; c += 1) u(c);
                L();
            }
        },
        i(e) {
            if (!f) {
                for (let o = 0; o < a.length; o += 1) b(l[o]);
                f = !0;
            }
        },
        o(e) {
            l = l.filter(Boolean);
            for (let o = 0; o < l.length; o += 1) D(l[o]);
            f = !1;
        },
        d(e) {
            e && g(t), z(l, e);
        }
    };
}
function U(r) {
    return [[{ date: '1/10/2024', label: "Calvin's birthday" }]];
}
class Y extends T {
    constructor(t) {
        super(), V(this, t, U, R, H, {});
    }
}
export { Y as component };
