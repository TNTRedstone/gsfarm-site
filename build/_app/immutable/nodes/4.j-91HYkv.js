import { s as l, n as s } from '../chunks/scheduler.k-kUyWhY.js';
import {
    S as r,
    i,
    g as c,
    h as m,
    x as d,
    k as h,
    a as p,
    f as g
} from '../chunks/index.IXUvKpfm.js';
function x(n) {
    let e,
        a =
            '<h1 class="font-sans text-2xl sm:text-3xl">Welcome to the blog:</h1> <div class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2 rounded"><a href="./blog/posts/example" class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500">Example</a></div>';
    return {
        c() {
            (e = c('main')), (e.innerHTML = a), this.h();
        },
        l(t) {
            (e = m(t, 'MAIN', { class: !0, 'data-svelte-h': !0 })),
                d(e) !== 'svelte-1a8jrus' && (e.innerHTML = a),
                this.h();
        },
        h() {
            h(e, 'class', 'm-2');
        },
        m(t, o) {
            p(t, e, o);
        },
        p: s,
        i: s,
        o: s,
        d(t) {
            t && g(e);
        }
    };
}
class v extends r {
    constructor(e) {
        super(), i(this, e, null, x, l, {});
    }
}
export { v as component };
