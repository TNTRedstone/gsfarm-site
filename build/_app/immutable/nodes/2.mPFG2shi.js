import { s as r, n as s } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as l,
    i,
    g as c,
    h as m,
    y as d,
    k as h,
    a as u,
    f as g
} from '../chunks/index.QGuRUDPK.js';
function f(n) {
    let e,
        a =
            '<h1 class="font-sans text-2xl sm:text-3xl">Welcome to GSFarm</h1> <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2 rounded"><a href="./countdowns" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Countdowns</a> <a href="./animal-albums" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Animals</a></div>';
    return {
        c() {
            (e = c('main')), (e.innerHTML = a), this.h();
        },
        l(t) {
            (e = m(t, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
                d(e) !== 'svelte-11fi1lj' && (e.innerHTML = a),
                this.h();
        },
        h() {
            h(e, 'class', 'm-2');
        },
        m(t, o) {
            u(t, e, o);
        },
        p: s,
        i: s,
        o: s,
        d(t) {
            t && g(e);
        }
    };
}
class v extends l {
    constructor(e) {
        super(), i(this, e, null, f, r, {});
    }
}
export { v as component };
