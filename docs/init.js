!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.geonorge=n():(t.geonorge=t.geonorge||{},t.geonorge.init=n())}(self,(()=>(()=>{var t={745:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>s});var i=e(4663),o=e.n(i),a=e(7638),r=e.n(a)()(o());r.push([t.id,'*{box-sizing:border-box}html{padding:0;margin:0}body{color:#2f3940;font-family:"Open Sans",sans-serif;margin:0;padding:0}',"",{version:3,sources:["webpack://./init.scss","webpack://./style/variables/_colors.scss"],names:[],mappings:"AAEA,EACI,qBAAA,CAGJ,KACI,SAAA,CACA,QAAA,CAGJ,KACI,aCLU,CDMV,kCAAA,CACA,QAAA,CACA,SAAA",sourcesContent:['@import "./style/all";\n\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    color: $default-text;\n    font-family: "Open Sans", sans-serif;\n    margin: 0;\n    padding: 0;\n}\n',"$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$primary-brand: #FE5000;\n$secondary-brand: #7da1c4;\n\n$primary-background: #7DA1C4;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #ffffff;\n$disabled-text: #d8d8d8;\n"],sourceRoot:""}]);const s=r},7638:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",i=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),i&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),i&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,i,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var f=0;f<t.length;f++){var u=[].concat(t[f]);i&&r[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},4663:t=>{"use strict";t.exports=function(t){var n=t[1],e=t[3];if(!e)return n;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(o," */"),r=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([a]).join("\n")}return[n].join("\n")}},6474:(t,n,e)=>{var i;!function(){function o(t,n,e){return t.call.apply(t.bind,arguments)}function a(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function r(t,n,e){return(r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var s=Date.now||function(){return+new Date};function c(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var f=!!window.FontFace;function u(t,n,e,i){if(n=t.c.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&("style"==o?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.c.createTextNode(i)),n}function l(t,n,e){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,r=0;r<i.length;r+=1)if(n[o]===i[r]){a=!0;break}a||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(a=!1,r=0;r<e.length;r+=1)if(i[o]===e[r]){a=!0;break}a||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function g(t,n,e){function i(){s&&o&&a&&(s(r),s=null)}n=u(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,r=null,s=e||null;f?(n.onload=function(){o=!0,i()},n.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),i()}):setTimeout((function(){o=!0,i()}),0),l(t,"head",n)}function v(t,n,e,i){var o=t.c.getElementsByTagName("head")[0];if(o){var a=u(t,"script",{src:n}),r=!1;return a.onload=a.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,e&&e(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){r||(r=!0,e&&e(Error("Script load timeout")))}),i||5e3),a}return null}function m(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,b(t)}}function w(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function A(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function j(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function k(t){return t.a+t.f}function _(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function C(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function S(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new x("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function $(t){if(t.g){var n=p(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),d(t.f,e,i)}T(t,"inactive")}function T(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,k(e)):t.h[n]())}function E(){this.c={}}function O(t,n){this.c=t,this.f=n,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function N(t){l(t.c,"body",t.a)}function I(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+_(t)+";font-weight:"+t.f+"00;"}function P(t,n,e,i,o,a){this.g=t,this.j=n,this.a=i,this.c=e,this.f=o||3e3,this.h=a||void 0}function B(t,n,e,i,o,a,r){this.v=t,this.B=n,this.c=e,this.a=i,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new O(this.c,this.s),this.h=new O(this.c,this.s),this.j=new O(this.c,this.s),this.m=new O(this.c,this.s),t=I(t=new A(this.a.c+",serif",k(this.a))),this.g.a.style.cssText=t,t=I(t=new A(this.a.c+",sans-serif",k(this.a))),this.h.a.style.cssText=t,t=I(t=new A("serif",k(this.a))),this.j.a.style.cssText=t,t=I(t=new A("sans-serif",k(this.a))),this.m.a.style.cssText=t,N(this.g),N(this.h),N(this.j),N(this.m)}x.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},P.prototype.start=function(){var t=this.c.o.document,n=this,e=s(),i=new Promise((function(i,o){!function a(){s()-e>=n.f?o():t.fonts.load(function(t){return _(t)+" "+t.f+"00 300px "+j(t.c)}(n.a),n.h).then((function(t){1<=t.length?i():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,e){o=setTimeout(e,n.f)}));Promise.race([a,i]).then((function(){o&&(clearTimeout(o),o=null),n.g(n.a)}),(function(){n.j(n.a)}))};var D={D:"serif",C:"sans-serif"},F=null;function M(){if(null===F){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);F=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return F}function L(t,n,e){for(var i in D)if(D.hasOwnProperty(i)&&n===t.f[D[i]]&&e===t.f[D[i]])return!0;return!1}function W(t){var n,e=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=e===t.f.serif&&i===t.f["sans-serif"])||(n=M()&&L(t,e,i)),n?s()-t.A>=t.w?M()&&L(t,e,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):function(t){setTimeout(r((function(){W(this)}),t),50)}(t):R(t,t.v)}function R(t,n){setTimeout(r((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),n(this.a)}),t),0)}function U(t,n,e){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=e}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),W(this)};var q=null;function z(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),T(t,"active")):$(t.a))}function G(t){this.j=t,this.a=new E,this.h=0,this.f=this.g=!0}function J(t,n,e,i,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,s=i||{};if(0===e.length&&a)$(n.a);else{n.f+=e.length,a&&(n.j=a);var c,f=[];for(c=0;c<e.length;c++){var u=e[c],l=s[u.c],h=n.a,p=u;if(h.g&&d(h.f,[h.a.c("wf",p.c,k(p).toString(),"loading")]),T(h,"fontloading",p),h=null,null===q)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);q=p?42<parseInt(p[1],10):!g}else q=!1;h=q?new P(r(n.g,n),r(n.h,n),n.c,u,n.s,l):new B(r(n.g,n),r(n.h,n),n.c,u,n.s,t,l),f.push(h)}for(c=0;c<f.length;c++)f[c].start()}}),0)}function K(t,n){this.c=t,this.a=n}function H(t,n){this.c=t,this.a=n}function Q(t,n){this.c=t||V,this.a=[],this.f=[],this.g=n||""}U.prototype.g=function(t){var n=this.a;n.g&&d(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),T(n,"fontactive",t),this.m=!0,z(this)},U.prototype.h=function(t){var n=this.a;if(n.g){var e=p(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),i=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),d(n.f,i,o)}T(n,"fontinactive",t),z(this)},G.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,e){var i=[],o=e.timeout;!function(t){t.g&&d(t.f,[t.a.c("wf","loading")]),T(t,"loading")}(n),i=function(t,n,e){var i,o=[];for(i in n)if(n.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(n[i],e))}return o}(t.a,e,t.c);var a=new U(t.c,n,o);for(t.h=i.length,n=0,e=i.length;n<e;n++)i[n].load((function(n,e,i){J(t,a,n,e,i)}))}(this,new S(this.c,t),t)},K.prototype.load=function(t){function n(){if(a["__mti_fntLst"+i]){var e,o=a["__mti_fntLst"+i](),r=[];if(o)for(var s=0;s<o.length;s++){var c=o[s].fontfamily;null!=o[s].fontStyle&&null!=o[s].fontWeight?(e=o[s].fontStyle+o[s].fontWeight,r.push(new A(c,e))):r.push(new A(c))}t(r)}else setTimeout((function(){n()}),50)}var e=this,i=e.a.projectId,o=e.a.version;if(i){var a=e.c.o;v(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(o?"?v="+o:""),(function(o){o?t([]):(a["__MonotypeConfiguration__"+i]=function(){return e.a},n())})).id="__MonotypeAPIScript__"+i}else t([])},H.prototype.load=function(t){var n,e,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},r=new m;for(n=0,e=i.length;n<e;n++)g(this.c,i[n],y(r));var s=[];for(n=0,e=o.length;n<e;n++)if((i=o[n].split(":"))[1])for(var c=i[1].split(","),f=0;f<c.length;f+=1)s.push(new A(i[0],c[f]));else s.push(new A(i[0]));w(r,(function(){t(s,a)}))};var V="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Z={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},tt={i:"i",italic:"i",n:"n",normal:"n"},nt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,n){this.c=t,this.a=n}var it={Arimo:!0,Cousine:!0,Tinos:!0};function ot(t,n){this.c=t,this.a=n}function at(t,n){this.c=t,this.f=n,this.a=[]}et.prototype.load=function(t){var n=new m,e=this.c,i=new Q(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var e=n.length,i=0;i<e;i++){var o=n[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(i,o);var a=new X(o);!function(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var r;if(r=[],s=i[1])for(var s,c=(s=s.split(",")).length,f=0;f<c;f++){var u;if((u=s[f]).match(/^[\w-]+$/))if(null==(l=nt.exec(u.toLowerCase())))u="";else{if(u=null==(u=l[2])||""==u?"n":tt[u],null==(l=l[1])||""==l)l="4";else var l=Z[l]||(isNaN(l)?"4":l.substr(0,1));u=[u,l].join("")}else u="";u&&r.push(u)}0<r.length&&(a=r),3==i.length&&(r=[],0<(i=(i=i[2])?i.split(","):r).length&&(i=Y[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=Y[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new A(o,a[i]))}}(a),g(e,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(i),y(n)),w(n,(function(){t(a.a,a.c,it)}))},ot.prototype.load=function(t){var n=this.a.id,e=this.c.o;n?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){n=e.Typekit.config.fn;for(var i=[],o=0;o<n.length;o+=2)for(var a=n[o],r=n[o+1],s=0;s<r.length;s++)i.push(new A(a,r[s]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}}),2e3):t([])},at.prototype.load=function(t){var n=this.f.id,e=this.c.o,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(n,e){for(var o=0,a=e.fonts.length;o<a;++o){var r=e.fonts[o];i.a.push(new A(r.name,C("font-weight:"+r.weight+";font-style:"+r.style)))}t(i.a)},v(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var rt=new G(window);rt.a.c.custom=function(t,n){return new H(n,t)},rt.a.c.fontdeck=function(t,n){return new at(n,t)},rt.a.c.monotype=function(t,n){return new K(n,t)},rt.a.c.typekit=function(t,n){return new ot(n,t)},rt.a.c.google=function(t,n){return new et(n,t)};var st={load:r(rt.load,rt)};void 0===(i=function(){return st}.call(n,e,n,t))||(t.exports=i)}()},1799:function(t,n,e){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});const o=i(e(6474)),a=i(e(745));o.default.load({google:{families:["Raleway:100,400,500,700","Open Sans:400,600,700","sans-serif"]}});const r=document.head||document.getElementsByTagName("head")[0],s=a.default.toString(),c=document.createElement("style");if(r.appendChild(c),c.appendChild(document.createTextNode(s)),window.navigator.userAgent.indexOf("Edge/")>-1){const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/webcomponents-bundle.min.js",r.appendChild(t)}}},n={};function e(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={id:i,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.exports}return e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e(1799)})()));
//# sourceMappingURL=init.js.map