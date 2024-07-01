import { s as o, n as s } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as l,
    i as c,
    g as i,
    h as d,
    x as m,
    k as h,
    a as g,
    f as u
} from '../chunks/index.IXUvKpfm.js';
function p(r) {
    let e,
        a =
            '<h1 class="font-sans text-2xl sm:text-3xl">Welcome to GSFarm</h1> <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2 rounded"><a href="./countdowns" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Countdowns</a> <a href="./animal-albums" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Animals</a> <a href="./blog" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Blog</a> <a href="./chore-tracker" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Chore tracker</a></div>';
    return {
        c() {
            (e = i('main')), (e.innerHTML = a), this.h();
        },
        l(t) {
            (e = d(t, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
                m(e) !== 'svelte-14yb4xm' && (e.innerHTML = a),
                this.h();
        },
        h() {
            h(e, 'class', 'm-2');
        },
        m(t, n) {
            g(t, e, n);
        },
        p: s,
        i: s,
        o: s,
        d(t) {
            t && u(e);
        }
    };
}
class b extends l {
    constructor(e) {
        super(), c(this, e, null, p, o, {});
    }
}
export { b as component };
