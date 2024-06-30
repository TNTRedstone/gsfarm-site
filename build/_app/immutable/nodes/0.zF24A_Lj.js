import { s as f, n as i, c as v, u as b, g, d as h } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as m,
    i as d,
    g as w,
    h as x,
    x as y,
    k as $,
    a as p,
    f as _,
    r as k,
    s as j,
    u as S,
    c as A,
    v as C,
    d as u,
    t as c,
    w as L
} from '../chunks/index.3eaemhlc.js';
const M = !0,
    B = Object.freeze(
        Object.defineProperty({ __proto__: null, prerender: M }, Symbol.toStringTag, {
            value: 'Module'
        })
    );
function T(l) {
    let e,
        a =
            '<div class="container mx-auto flex flex-wrap items-center"><div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold"><a class="text-white no-underline hover:text-white hover:no-underline" href="/"><span class="text-2xl pl-2">GSFarm</span></a></div> <div class="flex w-full pt-2 content-center justify-center md:w-1/2 md:justify-end"><ul class="list-reset flex justify-between flex-1 md:flex-none items-center"><li><a class="rounded bg-sky-400 p-2 m-1 text-center hover:bg-sky-500 nav-buttons svelte-1b2gv6w" href="/countdowns">Countdowns</a></li> <li><a class="rounded bg-sky-400 p-2 m-1 text-center hover:bg-sky-500 nav-buttons svelte-1b2gv6w" href="/animal-albums">Animal Albums</a></li> <li><a class="rounded bg-sky-400 p-2 m-1 text-center hover:bg-sky-500 nav-buttons svelte-1b2gv6w" href="/blog">Blog</a></li></ul></div></div>';
    return {
        c() {
            (e = w('nav')), (e.innerHTML = a), this.h();
        },
        l(n) {
            (e = x(n, 'NAV', { class: !0, 'data-svelte-h': !0 })),
                y(e) !== 'svelte-10wfzcl' && (e.innerHTML = a),
                this.h();
        },
        h() {
            $(e, 'class', 'bg-sky-700 p-2 mt-0 w-full');
        },
        m(n, r) {
            p(n, e, r);
        },
        p: i,
        i,
        o: i,
        d(n) {
            n && _(e);
        }
    };
}
class z extends m {
    constructor(e) {
        super(), d(this, e, null, T, f, {});
    }
}
function H(l) {
    let e, a, n;
    e = new z({});
    const r = l[1].default,
        s = v(r, l, l[0], null);
    return {
        c() {
            k(e.$$.fragment), (a = j()), s && s.c();
        },
        l(t) {
            S(e.$$.fragment, t), (a = A(t)), s && s.l(t);
        },
        m(t, o) {
            C(e, t, o), p(t, a, o), s && s.m(t, o), (n = !0);
        },
        p(t, [o]) {
            s && s.p && (!n || o & 1) && b(s, r, t, t[0], n ? h(r, t[0], o, null) : g(t[0]), null);
        },
        i(t) {
            n || (u(e.$$.fragment, t), u(s, t), (n = !0));
        },
        o(t) {
            c(e.$$.fragment, t), c(s, t), (n = !1);
        },
        d(t) {
            t && _(a), L(e, t), s && s.d(t);
        }
    };
}
function N(l, e, a) {
    let { $$slots: n = {}, $$scope: r } = e;
    return (
        (l.$$set = (s) => {
            '$$scope' in s && a(0, (r = s.$$scope));
        }),
        [r, n]
    );
}
class F extends m {
    constructor(e) {
        super(), d(this, e, N, H, f, {});
    }
}
export { F as component, B as universal };
