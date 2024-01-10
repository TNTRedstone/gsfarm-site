import { s as U, n as G } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as W,
    i as X,
    g as w,
    m as x,
    s as L,
    h as b,
    j as C,
    n as p,
    f as v,
    c as A,
    k as E,
    a as Y,
    x as c,
    o as k,
    y as Z,
    d as T,
    b as $,
    t as J,
    z as tt,
    r as et,
    u as lt,
    v as st,
    w as nt,
    p as at
} from '../chunks/index.QGuRUDPK.js';
function O(r) {
    return r?.length !== void 0 ? r : Array.from(r);
}
function ot(r) {
    let t,
        n,
        o,
        f,
        i,
        m = r[1][0] + '',
        d,
        s,
        g,
        e,
        a = r[1][1] + '',
        l,
        h,
        V,
        I,
        M = r[1][2] + '',
        H,
        j,
        q,
        D,
        y = r[1][3] + '',
        S,
        z;
    return {
        c() {
            (t = w('div')),
                (n = w('h2')),
                (o = x(r[0])),
                (f = L()),
                (i = w('li')),
                (d = x(m)),
                (s = x(' days')),
                (g = L()),
                (e = w('li')),
                (l = x(a)),
                (h = x(' hours')),
                (V = L()),
                (I = w('li')),
                (H = x(M)),
                (j = x(' minutes')),
                (q = L()),
                (D = w('li')),
                (S = x(y)),
                (z = x(' seconds')),
                this.h();
        },
        l(_) {
            t = b(_, 'DIV', { class: !0 });
            var u = C(t);
            n = b(u, 'H2', { class: !0 });
            var K = C(n);
            (o = p(K, r[0])), K.forEach(v), (f = A(u)), (i = b(u, 'LI', { class: !0 }));
            var B = C(i);
            (d = p(B, m)),
                (s = p(B, ' days')),
                B.forEach(v),
                (g = A(u)),
                (e = b(u, 'LI', { class: !0 }));
            var N = C(e);
            (l = p(N, a)),
                (h = p(N, ' hours')),
                N.forEach(v),
                (V = A(u)),
                (I = b(u, 'LI', { class: !0 }));
            var P = C(I);
            (H = p(P, M)),
                (j = p(P, ' minutes')),
                P.forEach(v),
                (q = A(u)),
                (D = b(u, 'LI', { class: !0 }));
            var F = C(D);
            (S = p(F, y)), (z = p(F, ' seconds')), F.forEach(v), u.forEach(v), this.h();
        },
        h() {
            E(n, 'class', 'sm:text-sm md:text-md lg:text-lg xl:text-xl'),
                E(i, 'class', 'sm:text-sm md:text-md lg:text-lg'),
                E(e, 'class', 'sm:text-sm md:text-md lg:text-lg'),
                E(I, 'class', 'sm:text-sm md:text-md lg:text-lg'),
                E(D, 'class', 'sm:text-sm md:text-md lg:text-lg'),
                E(t, 'class', 'bg-sky-300 rounded');
        },
        m(_, u) {
            Y(_, t, u),
                c(t, n),
                c(n, o),
                c(t, f),
                c(t, i),
                c(i, d),
                c(i, s),
                c(t, g),
                c(t, e),
                c(e, l),
                c(e, h),
                c(t, V),
                c(t, I),
                c(I, H),
                c(I, j),
                c(t, q),
                c(t, D),
                c(D, S),
                c(D, z);
        },
        p(_, [u]) {
            u & 1 && k(o, _[0]),
                u & 2 && m !== (m = _[1][0] + '') && k(d, m),
                u & 2 && a !== (a = _[1][1] + '') && k(l, a),
                u & 2 && M !== (M = _[1][2] + '') && k(H, M),
                u & 2 && y !== (y = _[1][3] + '') && k(S, y);
        },
        i: G,
        o: G,
        d(_) {
            _ && v(t);
        }
    };
}
function rt(r, t, n) {
    let { date: o } = t,
        { label: f = 'Countdown' } = t,
        i = [];
    function m() {
        let d = new Date(),
            g = new Date(o).getTime() - d.getTime();
        if (g > 0) {
            let e = Math.floor(g / 864e5),
                a = Math.floor((g % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
                l = Math.floor((g % (1e3 * 60 * 60)) / (1e3 * 60)),
                h = Math.floor((g % (1e3 * 60)) / 1e3);
            n(1, (i = [e, a, l, h]));
        } else n(1, (i = ['Event has passed']));
    }
    return (
        m(),
        setInterval(m, 1e3),
        (r.$$set = (d) => {
            'date' in d && n(2, (o = d.date)), 'label' in d && n(0, (f = d.label));
        }),
        [f, i, o]
    );
}
class ct extends W {
    constructor(t) {
        super(), X(this, t, rt, ot, U, { date: 2, label: 0 });
    }
}
function Q(r, t, n) {
    const o = r.slice();
    return (o[1] = t[n]), o;
}
function R(r) {
    let t, n;
    return (
        (t = new ct({ props: { date: r[1].date, label: r[1].label } })),
        {
            c() {
                et(t.$$.fragment);
            },
            l(o) {
                lt(t.$$.fragment, o);
            },
            m(o, f) {
                st(t, o, f), (n = !0);
            },
            p: G,
            i(o) {
                n || (T(t.$$.fragment, o), (n = !0));
            },
            o(o) {
                J(t.$$.fragment, o), (n = !1);
            },
            d(o) {
                nt(t, o);
            }
        }
    );
}
function it(r) {
    let t,
        n,
        o = 'Countdowns:',
        f,
        i,
        m,
        d = O(r[0]),
        s = [];
    for (let e = 0; e < d.length; e += 1) s[e] = R(Q(r, d, e));
    const g = (e) =>
        J(s[e], 1, 1, () => {
            s[e] = null;
        });
    return {
        c() {
            (t = w('main')), (n = w('h1')), (n.textContent = o), (f = L()), (i = w('div'));
            for (let e = 0; e < s.length; e += 1) s[e].c();
            this.h();
        },
        l(e) {
            t = b(e, 'MAIN', {});
            var a = C(t);
            (n = b(a, 'H1', { class: !0, 'data-svelte-h': !0 })),
                Z(n) !== 'svelte-1ccmg4r' && (n.textContent = o),
                (f = A(a)),
                (i = b(a, 'DIV', { class: !0 }));
            var l = C(i);
            for (let h = 0; h < s.length; h += 1) s[h].l(l);
            l.forEach(v), a.forEach(v), this.h();
        },
        h() {
            E(n, 'class', 'sm:text-sm md:text-md lg:text-lg xl:text-xl'),
                E(i, 'class', 'grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-1');
        },
        m(e, a) {
            Y(e, t, a), c(t, n), c(t, f), c(t, i);
            for (let l = 0; l < s.length; l += 1) s[l] && s[l].m(i, null);
            m = !0;
        },
        p(e, [a]) {
            if (a & 1) {
                d = O(e[0]);
                let l;
                for (l = 0; l < d.length; l += 1) {
                    const h = Q(e, d, l);
                    s[l]
                        ? (s[l].p(h, a), T(s[l], 1))
                        : ((s[l] = R(h)), s[l].c(), T(s[l], 1), s[l].m(i, null));
                }
                for (at(), l = d.length; l < s.length; l += 1) g(l);
                $();
            }
        },
        i(e) {
            if (!m) {
                for (let a = 0; a < d.length; a += 1) T(s[a]);
                m = !0;
            }
        },
        o(e) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) J(s[a]);
            m = !1;
        },
        d(e) {
            e && v(t), tt(s, e);
        }
    };
}
function dt(r) {
    return [[{ date: '1/10/2024', label: "Calvin's birthday" }]];
}
class ft extends W {
    constructor(t) {
        super(), X(this, t, dt, it, U, {});
    }
}
export { ft as component };
