(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function D(){}function dt(t){return t()}function ft(){return Object.create(null)}function x(t){t.forEach(dt)}function yt(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function vt(t){return Object.keys(t).length===0}function p(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function v(){return L(" ")}function lt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let Y;function S(t){Y=t}const O=[],A=[],K=[],U=[],Et=Promise.resolve();let W=!1;function Ct(){W||(W=!0,Et.then(pt))}function X(t){K.push(t)}function I(t){U.push(t)}const J=new Set;let M=0;function pt(){const t=Y;do{for(;M<O.length;){const e=O[M];M++,S(e),At(e.$$)}for(S(null),O.length=0,M=0;A.length;)A.pop()();for(let e=0;e<K.length;e+=1){const n=K[e];J.has(n)||(J.add(n),n())}K.length=0}while(O.length);for(;U.length;)U.pop()();W=!1,J.clear(),S(t)}function At(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const R=new Set;let Lt;function k(t,e){t&&t.i&&(R.delete(t),t.i(e))}function T(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),Lt.c.push(()=>{R.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function V(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function q(t){t&&t.c()}function z(t,e,n,r){const{fragment:o,on_mount:u,on_destroy:f,after_update:l}=t.$$;o&&o.m(e,n),r||X(()=>{const a=u.map(dt).filter(yt);f?f.push(...a):x(a),t.$$.on_mount=[]}),l.forEach(X)}function j(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(O.push(t),Ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(t,e,n,r,o,u,f,l=[-1]){const a=Y;S(t);const i=t.$$={fragment:null,ctx:null,props:u,update:D,not_equal:o,bound:ft(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ft(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};f&&f(i.root);let m=!1;if(i.ctx=n?n(t,e.props||{},(_,s,...d)=>{const E=d.length?d[0]:s;return i.ctx&&o(i.ctx[_],i.ctx[_]=E)&&(!i.skip_bound&&i.bound[_]&&i.bound[_](E),m&&Nt(t,_)),s}):[],i.update(),m=!0,x(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const _=wt(e.target);i.fragment&&i.fragment.l(_),_.forEach(y)}else i.fragment&&i.fragment.c();e.intro&&k(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),pt()}S(a)}class mt{$destroy(){j(this,1),this.$destroy=D}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ot(t){let e,n,r,o,u,f,l,a,i,m,_;return{c(){e=g("button"),e.textContent="-",n=v(),r=g("button"),r.textContent="+",o=v(),u=g("p"),f=g("span"),l=L(t[1]),a=L(" : votos "),i=L(t[0]),w(e,"class","decrement svelte-lb6sz3"),w(r,"class","increment svelte-lb6sz3"),w(f,"class","option svelte-lb6sz3")},m(s,d){C(s,e,d),C(s,n,d),C(s,r,d),C(s,o,d),C(s,u,d),p(u,f),p(f,l),p(u,a),p(u,i),m||(_=[lt(e,"click",t[3]),lt(r,"click",t[2])],m=!0)},p(s,[d]){d&2&&Q(l,s[1]),d&1&&Q(i,s[0])},i:D,o:D,d(s){s&&y(e),s&&y(n),s&&y(r),s&&y(o),s&&y(u),m=!1,x(_)}}}function kt(t,e,n){let{option:r}=e,{count:o=0}=e;const u=()=>{n(0,o+=1)},f=()=>{o>0&&n(0,o-=1)};return t.$$set=l=>{"option"in l&&n(1,r=l.option),"count"in l&&n(0,o=l.count)},[o,r,u,f]}class F extends mt{constructor(e){super(),_t(this,e,kt,Ot,at,{option:1,count:0})}}function zt(t){let e,n,r,o,u,f,l,a,i,m,_,s,d,E,Z,B,h,G,tt,P,$,H,N;function gt(c){t[5](c)}let et={option:"Apruebo"};t[0]!==void 0&&(et.count=t[0]),i=new F({props:et}),A.push(()=>V(i,"count",gt));function ht(c){t[6](c)}let nt={option:"Rechazo"};t[1]!==void 0&&(nt.count=t[1]),d=new F({props:nt}),A.push(()=>V(d,"count",ht));function $t(c){t[7](c)}let ot={option:"Nulo"};t[2]!==void 0&&(ot.count=t[2]),h=new F({props:ot}),A.push(()=>V(h,"count",$t));function bt(c){t[8](c)}let rt={option:"Blanco"};return t[3]!==void 0&&(rt.count=t[3]),$=new F({props:rt}),A.push(()=>V($,"count",bt)),{c(){e=g("main"),n=g("h1"),n.textContent="Contador de Votos",r=v(),o=g("h2"),u=L("Votos totales: "),f=L(t[4]),l=v(),a=g("div"),q(i.$$.fragment),_=v(),s=g("div"),q(d.$$.fragment),Z=v(),B=g("div"),q(h.$$.fragment),tt=v(),P=g("div"),q($.$$.fragment),w(a,"class","card"),w(s,"class","card"),w(B,"class","card"),w(P,"class","card")},m(c,b){C(c,e,b),p(e,n),p(e,r),p(e,o),p(o,u),p(o,f),p(e,l),p(e,a),z(i,a,null),p(e,_),p(e,s),z(d,s,null),p(e,Z),p(e,B),z(h,B,null),p(e,tt),p(e,P),z($,P,null),N=!0},p(c,[b]){(!N||b&16)&&Q(f,c[4]);const ut={};!m&&b&1&&(m=!0,ut.count=c[0],I(()=>m=!1)),i.$set(ut);const it={};!E&&b&2&&(E=!0,it.count=c[1],I(()=>E=!1)),d.$set(it);const st={};!G&&b&4&&(G=!0,st.count=c[2],I(()=>G=!1)),h.$set(st);const ct={};!H&&b&8&&(H=!0,ct.count=c[3],I(()=>H=!1)),$.$set(ct)},i(c){N||(k(i.$$.fragment,c),k(d.$$.fragment,c),k(h.$$.fragment,c),k($.$$.fragment,c),N=!0)},o(c){T(i.$$.fragment,c),T(d.$$.fragment,c),T(h.$$.fragment,c),T($.$$.fragment,c),N=!1},d(c){c&&y(e),j(i),j(d),j(h),j($)}}}function jt(t,e,n){let r,o=0,u=0,f=0,l=0;function a(s){o=s,n(0,o)}function i(s){u=s,n(1,u)}function m(s){f=s,n(2,f)}function _(s){l=s,n(3,l)}return t.$$.update=()=>{t.$$.dirty&15&&n(4,r=o+u+f+l)},[o,u,f,l,r,a,i,m,_]}class St extends mt{constructor(e){super(),_t(this,e,jt,zt,at,{})}}new St({target:document.getElementById("app")});
