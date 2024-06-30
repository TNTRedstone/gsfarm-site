import { s as x, n as o } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as _,
    i as u,
    g as m,
    s as v,
    h as p,
    x as f,
    c as C,
    a as l,
    f as i
} from '../chunks/index.3eaemhlc.js';
function d(h) {
    let t,
        r = 'This is a blog post right',
        a,
        s,
        c = 'No';
    return {
        c() {
            (t = m('h1')), (t.textContent = r), (a = v()), (s = m('h3')), (s.textContent = c);
        },
        l(e) {
            (t = p(e, 'H1', { 'data-svelte-h': !0 })),
                f(t) !== 'svelte-a11ef7' && (t.textContent = r),
                (a = C(e)),
                (s = p(e, 'H3', { 'data-svelte-h': !0 })),
                f(s) !== 'svelte-13v2p2n' && (s.textContent = c);
        },
        m(e, n) {
            l(e, t, n), l(e, a, n), l(e, s, n);
        },
        p: o,
        i: o,
        o,
        d(e) {
            e && (i(t), i(a), i(s));
        }
    };
}
class S extends _ {
    constructor(t) {
        super(), u(this, t, null, d, x, {});
    }
}
export { S as component };
