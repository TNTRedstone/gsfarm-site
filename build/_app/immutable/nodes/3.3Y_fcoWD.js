import { s as r, n as s } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as l,
    i,
    g as c,
    h as m,
    x as d,
    k as h,
    a as p,
    f as g
} from '../chunks/index.3eaemhlc.js';
function u(n) {
    let t,
        a =
            '<h1 class="font-sans text-2xl sm:text-3xl">Animal albums</h1> <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2 rounded"><a href="https://photos.app.goo.gl/qow3jmEucX5NE3zs6" target="_blank" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Macy</a></div>';
    return {
        c() {
            (t = c('main')), (t.innerHTML = a), this.h();
        },
        l(e) {
            (t = m(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
                d(t) !== 'svelte-hv5rc9' && (t.innerHTML = a),
                this.h();
        },
        h() {
            h(t, 'class', 'm-2');
        },
        m(e, o) {
            p(e, t, o);
        },
        p: s,
        i: s,
        o: s,
        d(e) {
            e && g(t);
        }
    };
}
class v extends l {
    constructor(t) {
        super(), i(this, t, null, u, r, {});
    }
}
export { v as component };
