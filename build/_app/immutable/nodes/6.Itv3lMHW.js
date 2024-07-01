import { s as H, n as w, r as G } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as J,
    i as K,
    g as l,
    s as v,
    h as r,
    j as z,
    x as g,
    c as C,
    f as S,
    k as a,
    a as Q,
    y as e,
    z as k,
    A,
    B as F
} from '../chunks/index.IXUvKpfm.js';
function V(c) {
    let o,
        u,
        _ = 'Chore tracker',
        h,
        t,
        b,
        L = 'Chore',
        B,
        s,
        E,
        N,
        x,
        $ = 'Minutes',
        T,
        i,
        I,
        M,
        y,
        D = 'Date',
        P,
        p,
        R,
        U,
        f,
        O = 'Submit',
        j,
        q;
    return {
        c() {
            (o = l('main')),
                (u = l('h1')),
                (u.textContent = _),
                (h = v()),
                (t = l('form')),
                (b = l('label')),
                (b.textContent = L),
                (B = v()),
                (s = l('input')),
                (E = l('br')),
                (N = v()),
                (x = l('label')),
                (x.textContent = $),
                (T = v()),
                (i = l('input')),
                (I = l('br')),
                (M = v()),
                (y = l('label')),
                (y.textContent = D),
                (P = v()),
                (p = l('input')),
                (R = l('br')),
                (U = v()),
                (f = l('button')),
                (f.textContent = O),
                this.h();
        },
        l(d) {
            o = r(d, 'MAIN', { class: !0 });
            var m = z(o);
            (u = r(m, 'H1', { class: !0, 'data-svelte-h': !0 })),
                g(u) !== 'svelte-1531bai' && (u.textContent = _),
                (h = C(m)),
                (t = r(m, 'FORM', {}));
            var n = z(t);
            (b = r(n, 'LABEL', { 'data-svelte-h': !0 })),
                g(b) !== 'svelte-nicmex' && (b.textContent = L),
                (B = C(n)),
                (s = r(n, 'INPUT', { type: !0, name: !0, id: !0, class: !0 })),
                (E = r(n, 'BR', {})),
                (N = C(n)),
                (x = r(n, 'LABEL', { 'data-svelte-h': !0 })),
                g(x) !== 'svelte-19hh1jp' && (x.textContent = $),
                (T = C(n)),
                (i = r(n, 'INPUT', { type: !0, name: !0, id: !0, class: !0 })),
                (I = r(n, 'BR', {})),
                (M = C(n)),
                (y = r(n, 'LABEL', { 'data-svelte-h': !0 })),
                g(y) !== 'svelte-au1wy4' && (y.textContent = D),
                (P = C(n)),
                (p = r(n, 'INPUT', { type: !0, name: !0, id: !0, class: !0 })),
                (R = r(n, 'BR', {})),
                (U = C(n)),
                (f = r(n, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
                g(f) !== 'svelte-kj1e23' && (f.textContent = O),
                n.forEach(S),
                m.forEach(S),
                this.h();
        },
        h() {
            a(u, 'class', 'font-sans text-2xl sm:text-3xl'),
                a(s, 'type', 'text'),
                a(s, 'name', 'Chore'),
                a(s, 'id', 'chore'),
                a(s, 'class', 'border-black border rounded mb-0.5'),
                a(i, 'type', 'number'),
                a(i, 'name', 'Minutes'),
                a(i, 'id', 'minutes'),
                a(i, 'class', 'border-black border rounded mb-0.5'),
                a(p, 'type', 'date'),
                a(p, 'name', 'Date'),
                a(p, 'id', 'date'),
                a(p, 'class', 'border-black border rounded mb-0.5'),
                a(f, 'class', 'rounded bg-sky-400 p-2 text-center hover:bg-sky-500'),
                a(o, 'class', 'm-2');
        },
        m(d, m) {
            Q(d, o, m),
                e(o, u),
                e(o, h),
                e(o, t),
                e(t, b),
                e(t, B),
                e(t, s),
                k(s, c[1]),
                e(t, E),
                e(t, N),
                e(t, x),
                e(t, T),
                e(t, i),
                k(i, c[0]),
                e(t, I),
                e(t, M),
                e(t, y),
                e(t, P),
                e(t, p),
                k(p, c[2]),
                e(t, R),
                e(t, U),
                e(t, f),
                j ||
                    ((q = [
                        A(s, 'input', c[4]),
                        A(i, 'input', c[5]),
                        A(p, 'input', c[6]),
                        A(f, 'click', c[3])
                    ]),
                    (j = !0));
        },
        p(d, [m]) {
            m & 2 && s.value !== d[1] && k(s, d[1]),
                m & 1 && F(i.value) !== d[0] && k(i, d[0]),
                m & 4 && k(p, d[2]);
        },
        i: w,
        o: w,
        d(d) {
            d && S(o), (j = !1), G(q);
        }
    };
}
function W(c, o, u) {
    let _ = 15,
        h,
        t;
    function b() {
        fetch(`http://172.19.64.1:5000/data/${h}/${_}/${t}`, { mode: 'no-cors' });
    }
    function L() {
        (h = this.value), u(1, h);
    }
    function B() {
        (_ = F(this.value)), u(0, _);
    }
    function s() {
        (t = this.value), u(2, t);
    }
    return [_, h, t, b, L, B, s];
}
class Z extends J {
    constructor(o) {
        super(), K(this, o, W, V, H, {});
    }
}
export { Z as component };
