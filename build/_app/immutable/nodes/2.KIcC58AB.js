import { s as r, n as s } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as i,
    i as l,
    g as c,
    h as d,
    y as m,
    k as h,
    a as u,
    f as g
} from '../chunks/index.QGuRUDPK.js';
function p(n) {
    let t,
        a =
            '<h1 class="font-sans text-2xl sm:text-3xl">Welcome to GSFarm</h1> <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2 rounded"><a href="./countdowns" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Countdowns</a></div>';
    return {
        c() {
            (t = c('main')), (t.innerHTML = a), this.h();
        },
        l(e) {
            (t = d(e, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
                m(t) !== 'svelte-1u4tj9a' && (t.innerHTML = a),
                this.h();
        },
        h() {
            h(t, 'class', 'm-2');
        },
        m(e, o) {
            u(e, t, o);
        },
        p: s,
        i: s,
        o: s,
        d(e) {
            e && g(t);
        }
    };
}
class v extends i {
    constructor(t) {
        super(), l(this, t, null, p, r, {});
    }
}
export { v as component };
