import{n as d,s as k}from"./scheduler.k-kUyWhY.js";const u=[];function p(t,e=d){let n;const o=new Set;function r(s){if(k(t,s)&&(t=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){r(s(t))}function a(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=e(r,i)||d),s(t),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}const E=globalThis.__sveltekit_4rlcxh?.base??"",m=globalThis.__sveltekit_4rlcxh?.assets??E,A="1704657601320",I="sveltekit:snapshot",w="sveltekit:scroll",y="sveltekit:states",N="sveltekit:pageurl",U="sveltekit:history",L="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},g=location.origin;function O(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function x(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const h={..._,"":_.hover};function v(t){let e=t.assignedSlot??t.parentNode;return e?.nodeType===11&&(e=e.host),e}function Y(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function P(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||T(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=n?.origin===g&&t.hasAttribute("download");return{url:n,external:r,target:o,download:i}}function V(t){let e=null,n=null,o=null,r=null,i=null,a=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:h[o??"off"],preload_data:h[r??"off"],keepfocus:c(e),noscroll:c(n),reload:c(i),replace_state:c(a)}}function b(t){const e=p(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function i(a){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:i}}function R(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(t(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:e,check:o}}function T(t,e){return t.origin!==g||!t.pathname.startsWith(e)}function G(t){t.client}const K={url:b({}),page:b({}),navigating:p(null),updated:R()};export{U as H,L as N,N as P,w as S,y as a,I as b,V as c,K as d,E as e,Y as f,P as g,_ as h,T as i,G as j,g as o,O as r,x as s};
