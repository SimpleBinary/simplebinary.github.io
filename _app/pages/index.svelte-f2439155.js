import{S as ve,i as ye,s as be,e as E,t as ce,c as I,a as q,g as we,d as i,f as o,H as S,h as De,J as H,k as p,n as _,b as D,I as x,A as de,j as v,K as Se,m as y,L as Le,o as b,x as c,u as w,v as j,M as Ve}from"../chunks/vendor-4d7376bc.js";function Ee(u){let t,s;return{c(){t=E("h1"),s=ce(u[0])},l(l){t=I(l,"H1",{});var m=q(t);s=we(m,u[0]),m.forEach(i)},m(l,m){o(l,t,m),S(t,s)},p(l,m){m&1&&De(s,l[0])},d(l){l&&i(t)}}}function Ie(u){let t;return{c(){t=E("div"),this.h()},l(s){t=I(s,"DIV",{style:!0});var l=q(t);l.forEach(i),this.h()},h(){H(t,"color",u[5])},m(s,l){o(s,t,l),t.innerHTML=u[1]},p(s,l){l&2&&(t.innerHTML=s[1]),l&32&&H(t,"color",s[5])},d(s){s&&i(t)}}}function He(u){let t,s,l,m,n=u[0]!=null&&Ee(u),a=u[1]!=null&&Ie(u);return{c(){t=E("div"),s=E("div"),n&&n.c(),l=p(),a&&a.c(),this.h()},l(r){t=I(r,"DIV",{class:!0,style:!0});var g=q(t);s=I(g,"DIV",{class:!0});var $=q(s);n&&n.l($),l=_($),a&&a.l($),$.forEach(i),g.forEach(i),this.h()},h(){D(s,"class","content"),D(t,"class",m="section section-"+u[2]+" svelte-3mx18e"),H(t,"color",u[4]),H(t,"background-color",u[3])},m(r,g){o(r,t,g),S(t,s),n&&n.m(s,null),S(s,l),a&&a.m(s,null)},p(r,[g]){r[0]!=null?n?n.p(r,g):(n=Ee(r),n.c(),n.m(s,l)):n&&(n.d(1),n=null),r[1]!=null?a?a.p(r,g):(a=Ie(r),a.c(),a.m(s,null)):a&&(a.d(1),a=null),g&4&&m!==(m="section section-"+r[2]+" svelte-3mx18e")&&D(t,"class",m),g&16&&H(t,"color",r[4]),g&8&&H(t,"background-color",r[3])},i:x,o:x,d(r){r&&i(t),n&&n.d(),a&&a.d()}}}function xe(u,t,s){let{title:l}=t,{content:m}=t,{style:n="full"}=t,{bg:a="#ffffff"}=t,{text:r="#000000"}=t,{subtext:g=r}=t;return u.$$set=$=>{"title"in $&&s(0,l=$.title),"content"in $&&s(1,m=$.content),"style"in $&&s(2,n=$.style),"bg"in $&&s(3,a=$.bg),"text"in $&&s(4,r=$.text),"subtext"in $&&s(5,g=$.subtext)},[l,m,n,a,r,g]}class L extends ve{constructor(t){super();ye(this,t,xe,He,be,{title:0,content:1,style:2,bg:3,text:4,subtext:5})}}function Ce(u){let t,s,l,m,n,a,r;return{c(){t=E("div"),s=E("div"),l=E("h1"),m=ce("Loading images..."),n=p(),a=E("p"),r=ce("Content will be available shortly."),this.h()},l(g){t=I(g,"DIV",{class:!0});var $=q(t);s=I($,"DIV",{class:!0});var d=q(s);l=I(d,"H1",{class:!0});var k=q(l);m=we(k,"Loading images..."),k.forEach(i),n=_(d),a=I(d,"P",{class:!0});var C=q(a);r=we(C,"Content will be available shortly."),C.forEach(i),d.forEach(i),$.forEach(i),this.h()},h(){D(l,"class","svelte-1qluq90"),D(a,"class","svelte-1qluq90"),D(s,"class","content"),D(t,"class","loading svelte-1qluq90")},m(g,$){o(g,t,$),S(t,s),S(s,l),S(l,m),S(s,n),S(s,a),S(a,r)},p:x,i:x,o:x,d(g){g&&i(t)}}}class Ae extends ve{constructor(t){super();ye(this,t,null,Ce,be,{})}}function Me(u){let t,s,l;return{c(){t=E("div"),s=E("div"),this.h()},l(m){t=I(m,"DIV",{class:!0});var n=q(t);s=I(n,"DIV",{class:!0,style:!0});var a=q(s);a.forEach(i),n.forEach(i),this.h()},h(){D(s,"class","background background-"+u[2]+" svelte-18h3j84"),H(s,"background-image","url('"+u[1]+"')"),D(t,"class",l="section section-"+u[0]+" svelte-18h3j84")},m(m,n){o(m,t,n),S(t,s)},p(m,[n]){n&2&&H(s,"background-image","url('"+m[1]+"')"),n&1&&l!==(l="section section-"+m[0]+" svelte-18h3j84")&&D(t,"class",l)},i:x,o:x,d(m){m&&i(t)}}}function Te(u,t,s){let{style:l="half"}=t,{bg:m}=t,{offset:n=0}=t,a=n.toString().split(".").join("-");return de(()=>{window.addEventListener("scroll",r(g,8));function r($,d){let k=Date.now();return function(){k+d-Date.now()<0&&($(),k=Date.now())}}function g(){let $=window.pageYOffset-n*window.innerHeight,d=document.querySelector(`.background-${a}`),k=$*.4;d.style.transform="translateY("+k+"px)"}}),u.$$set=r=>{"style"in r&&s(0,l=r.style),"bg"in r&&s(1,m=r.bg),"offset"in r&&s(3,n=r.offset)},[l,m,a,n]}class V extends ve{constructor(t){super();ye(this,t,Te,Me,be,{style:0,bg:1,offset:3})}}const{document:je}=Ve;function Pe(u){let t,s,l,m,n,a,r,g,$,d,k,C,A,W,M,X,T,ee,P,te,B,se,K,fe,R,ne,Y,le,G,ie,J,re,N,me,O,ae,Z,$e,h,ue,z,oe,F,ge,Q,pe,U,_e;return n=new Ae({}),r=new L({props:{title:"Hey, I'm Benji.",content:"<p>A computer entusiast from Zimbabwe who enjoys playing football and the ukulele.</p><p>This website is a collection of photos from my travels around Southern Africa.</p>",bg:"#0d1117",text:"#ffdf36",subtext:"#ffffff"}}),$=new L({props:{title:"Pamushana",style:"short"}}),k=new V({props:{offset:"1.25",style:"half",bg:"pamushana/sunrise.jpg"}}),A=new L({props:{style:"seperator"}}),M=new V({props:{offset:"1.8",style:"short",bg:"pamushana/cave-paintings.jpg"}}),T=new L({props:{style:"seperator"}}),P=new V({props:{offset:"2.1",style:"half",bg:"pamushana/lake.jpg"}}),B=new L({props:{title:"Kariba",style:"short"}}),K=new V({props:{offset:"2.85",style:"half",bg:"kariba/shrubs.jpg"}}),R=new L({props:{style:"seperator"}}),Y=new V({props:{offset:"3.4",style:"tall",bg:"kariba/reflection.jpg"}}),G=new L({props:{style:"seperator"}}),J=new V({props:{offset:"4.2",style:"short",bg:"kariba/wood.jpg"}}),N=new L({props:{title:"Nyanga & Gairesi",style:"short"}}),O=new V({props:{offset:"4.7",style:"tall",bg:"nyanga/sunset.jpg"}}),Z=new L({props:{style:"seperator"}}),h=new V({props:{offset:"5.5",style:"short",bg:"nyanga/cliff.jpg"}}),z=new L({props:{style:"seperator"}}),F=new V({props:{offset:"5.8",style:"half",bg:"nyanga/fire.jpg"}}),Q=new L({props:{style:"seperator"}}),U=new V({props:{offset:"6.35",style:"full",bg:"nyanga/river.jpg"}}),{c(){t=E("script"),l=p(),m=E("div"),v(n.$$.fragment),a=p(),v(r.$$.fragment),g=p(),v($.$$.fragment),d=p(),v(k.$$.fragment),C=p(),v(A.$$.fragment),W=p(),v(M.$$.fragment),X=p(),v(T.$$.fragment),ee=p(),v(P.$$.fragment),te=p(),v(B.$$.fragment),se=p(),v(K.$$.fragment),fe=p(),v(R.$$.fragment),ne=p(),v(Y.$$.fragment),le=p(),v(G.$$.fragment),ie=p(),v(J.$$.fragment),re=p(),v(N.$$.fragment),me=p(),v(O.$$.fragment),ae=p(),v(Z.$$.fragment),$e=p(),v(h.$$.fragment),ue=p(),v(z.$$.fragment),oe=p(),v(F.$$.fragment),ge=p(),v(Q.$$.fragment),pe=p(),v(U.$$.fragment),this.h()},l(e){const f=Se('[data-svelte="svelte-2fd1j6"]',je.head);t=I(f,"SCRIPT",{src:!0});var qe=q(t);qe.forEach(i),f.forEach(i),l=_(e),m=I(e,"DIV",{id:!0});var ke=q(m);y(n.$$.fragment,ke),ke.forEach(i),a=_(e),y(r.$$.fragment,e),g=_(e),y($.$$.fragment,e),d=_(e),y(k.$$.fragment,e),C=_(e),y(A.$$.fragment,e),W=_(e),y(M.$$.fragment,e),X=_(e),y(T.$$.fragment,e),ee=_(e),y(P.$$.fragment,e),te=_(e),y(B.$$.fragment,e),se=_(e),y(K.$$.fragment,e),fe=_(e),y(R.$$.fragment,e),ne=_(e),y(Y.$$.fragment,e),le=_(e),y(G.$$.fragment,e),ie=_(e),y(J.$$.fragment,e),re=_(e),y(N.$$.fragment,e),me=_(e),y(O.$$.fragment,e),ae=_(e),y(Z.$$.fragment,e),$e=_(e),y(h.$$.fragment,e),ue=_(e),y(z.$$.fragment,e),oe=_(e),y(F.$$.fragment,e),ge=_(e),y(Q.$$.fragment,e),pe=_(e),y(U.$$.fragment,e),this.h()},h(){je.title="Benji",t.defer=!0,Le(t.src,s="https://unpkg.com/imagesloaded@4.1.4/imagesloaded.pkgd.min.js")||D(t,"src",s),D(m,"id","loading")},m(e,f){S(je.head,t),o(e,l,f),o(e,m,f),b(n,m,null),o(e,a,f),b(r,e,f),o(e,g,f),b($,e,f),o(e,d,f),b(k,e,f),o(e,C,f),b(A,e,f),o(e,W,f),b(M,e,f),o(e,X,f),b(T,e,f),o(e,ee,f),b(P,e,f),o(e,te,f),b(B,e,f),o(e,se,f),b(K,e,f),o(e,fe,f),b(R,e,f),o(e,ne,f),b(Y,e,f),o(e,le,f),b(G,e,f),o(e,ie,f),b(J,e,f),o(e,re,f),b(N,e,f),o(e,me,f),b(O,e,f),o(e,ae,f),b(Z,e,f),o(e,$e,f),b(h,e,f),o(e,ue,f),b(z,e,f),o(e,oe,f),b(F,e,f),o(e,ge,f),b(Q,e,f),o(e,pe,f),b(U,e,f),_e=!0},p:x,i(e){_e||(c(n.$$.fragment,e),c(r.$$.fragment,e),c($.$$.fragment,e),c(k.$$.fragment,e),c(A.$$.fragment,e),c(M.$$.fragment,e),c(T.$$.fragment,e),c(P.$$.fragment,e),c(B.$$.fragment,e),c(K.$$.fragment,e),c(R.$$.fragment,e),c(Y.$$.fragment,e),c(G.$$.fragment,e),c(J.$$.fragment,e),c(N.$$.fragment,e),c(O.$$.fragment,e),c(Z.$$.fragment,e),c(h.$$.fragment,e),c(z.$$.fragment,e),c(F.$$.fragment,e),c(Q.$$.fragment,e),c(U.$$.fragment,e),_e=!0)},o(e){w(n.$$.fragment,e),w(r.$$.fragment,e),w($.$$.fragment,e),w(k.$$.fragment,e),w(A.$$.fragment,e),w(M.$$.fragment,e),w(T.$$.fragment,e),w(P.$$.fragment,e),w(B.$$.fragment,e),w(K.$$.fragment,e),w(R.$$.fragment,e),w(Y.$$.fragment,e),w(G.$$.fragment,e),w(J.$$.fragment,e),w(N.$$.fragment,e),w(O.$$.fragment,e),w(Z.$$.fragment,e),w(h.$$.fragment,e),w(z.$$.fragment,e),w(F.$$.fragment,e),w(Q.$$.fragment,e),w(U.$$.fragment,e),_e=!1},d(e){i(t),e&&i(l),e&&i(m),j(n),e&&i(a),j(r,e),e&&i(g),j($,e),e&&i(d),j(k,e),e&&i(C),j(A,e),e&&i(W),j(M,e),e&&i(X),j(T,e),e&&i(ee),j(P,e),e&&i(te),j(B,e),e&&i(se),j(K,e),e&&i(fe),j(R,e),e&&i(ne),j(Y,e),e&&i(le),j(G,e),e&&i(ie),j(J,e),e&&i(re),j(N,e),e&&i(me),j(O,e),e&&i(ae),j(Z,e),e&&i($e),j(h,e),e&&i(ue),j(z,e),e&&i(oe),j(F,e),e&&i(ge),j(Q,e),e&&i(pe),j(U,e)}}}const Re=!0;function Be(u){return de(()=>{imagesLoaded("body",{background:!0},()=>{console.log("All images loaded successfully"),document.querySelector("#loading").style.display="none"})}),[]}class Ye extends ve{constructor(t){super();ye(this,t,Be,Pe,be,{})}}export{Ye as default,Re as prerender};
