!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():(t.geonorge=t.geonorge||{},t.geonorge.DownloadItem=e())}(self,(function(){return(()=>{var t={9474:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var o=n(3062),i=n.n(o),r=n(7638),a=n.n(r)()(i());a.push([t.id,"*{box-sizing:border-box}.download-items-container .icon-toggle-button{-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;border:none;background:transparent;color:#7d746d;padding:0;cursor:pointer}@media(min-width: 37.5em){.download-items-container .icon-toggle-button{padding:0 4px}}.download-items-container .icon-toggle-button.open{color:#414042}.download-items-container .icon-toggle-button .counter{background-color:#fe5000;border-radius:50%;color:#fff;margin-top:-0.25em;margin-left:-0.2em;position:absolute;text-align:center;width:1.4em;line-height:1.4;height:1.4em;font-size:.9em}@media(min-width: 37.5em){.download-items-container .icon-toggle-button .counter{height:1.5em;width:1.5em;line-height:1.5;font-size:1em}}.download-items-container .icon-toggle-button .counter.hidden{display:none}.download-items-container .icon-toggle-button .download-icon svg{width:45px;height:32px}@media(min-width: 37.5em){.download-items-container .icon-toggle-button .download-icon svg{width:52px;height:37px}}.download-items-container .download-item-list-wrapper{position:absolute}.download-items-container .download-item-list-wrapper .download-item-list-container{-webkit-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;box-sizing:border-box;overflow:hidden;max-height:0;position:relative;top:10px;background-color:#fbfcfd;right:205px;width:260px}@media(min-width: 37.5em){.download-items-container .download-item-list-wrapper .download-item-list-container{right:245px;width:300px}}@media print{.download-items-container .download-item-list-wrapper .download-item-list-container{display:none}}.download-items-container .download-item-list-wrapper .download-item-list-container.open{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);-moz-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);height:auto;max-height:300px;overflow:auto}.download-items-container .download-item-list-wrapper .download-item-list-container ul{list-style:none;padding:0;margin:0}.download-items-container .download-item-list-wrapper .download-item-list-container ul li{display:flex;align-items:center;justify-content:space-between;padding:8px 16px}.download-items-container .download-item-list-wrapper .download-item-list-container ul li:hover{background-color:rgba(0,0,0,.08)}.download-items-container .download-item-list-wrapper .download-item-list-container ul li .list-icon{margin-left:8px;cursor:pointer;background:none;border:none}.download-items-container .download-item-list-wrapper .download-item-list-container ul li .list-icon svg{color:#e00d0d;width:20px}","",{version:3,sources:["webpack://custom-elements/main-navigation/download-items/download-items.scss","webpack://style/mixins/_transition.scss","webpack://style/mixins/_breakpoints.scss","webpack://style/variables/_colors.scss","webpack://style/mixins/_border-radius.scss","webpack://style/mixins/_box-shadow.scss"],names:[],mappings:"AAEA,EACI,qBAAA,CAIA,8CCNA,mCDOI,CCNJ,iCDMI,CCLJ,sCDKI,CCJJ,8BDII,CACA,WAAA,CACA,sBAAA,CACA,aAAA,CACA,SAAA,CAIA,cAAA,CEFA,0BFPJ,8CAOQ,aAAA,CAAA,CAGJ,mDACI,aAAA,CAEJ,uDACI,wBGjBI,CHkBJ,iBAAA,CACA,UAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CEjBJ,0BFMA,uDAaQ,YAAA,CACA,WAAA,CACA,eAAA,CACA,aAAA,CAAA,CAEJ,8DACI,YAAA,CAIJ,iEACI,UAAA,CACA,WAAA,CE/BR,0BF6BI,iEAIQ,UAAA,CACA,WAAA,CAAA,CAKhB,sDACI,iBAAA,CACA,oFItDN,iCJuDiC,CItDjC,yBJsDiC,CCvD/B,mCDwDQ,CCvDR,iCDuDQ,CCtDR,sCDsDQ,CCrDR,8BDqDQ,CACA,qBAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,wBAAA,CACA,WAAA,CACA,WAAA,CEnDJ,0BFyCA,oFAYQ,WAAA,CACA,WAAA,CAAA,CAEJ,aAfJ,oFAgBQ,YAAA,CAAA,CAEJ,yFKxER,8GLyEY,CKxEZ,2GLwEY,CKvEZ,sGLuEY,CAKA,WAAA,CACA,gBAAA,CACA,aAAA,CAEJ,uFACI,eAAA,CACA,SAAA,CACA,QAAA,CACA,0FACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CACA,gGACI,gCG3FL,CH6FC,qGACI,eAAA,CACA,cAAA,CACA,eAAA,CACA,WAAA,CACA,yGACI,aGhGX,CHiGW,UAAA",sourcesContent:['@import "../../../style/all";\n\n* {\n    box-sizing: border-box;\n}\n\n.download-items-container {\n    .icon-toggle-button {\n        @include transition(all 0.1s ease-in-out);\n        border: none;\n        background: transparent;\n        color: #7d746d;\n        padding: 0;\n        @include breakpoint(phablet) {\n            padding: 0 4px;\n        }\n        cursor: pointer;\n        &.open {\n            color: #414042;\n        }\n        .counter {\n            background-color: $primary-brand;\n            border-radius: 50%;\n            color: #fff;\n            margin-top: -0.25em;\n            margin-left: -0.2em;\n            position: absolute;\n            text-align: center;\n            width: 1.4em;\n            line-height: 1.4;\n            height: 1.4em;\n            font-size: .9em;\n            @include breakpoint(phablet) {\n                height: 1.5em;\n                width: 1.5em;\n                line-height: 1.5;\n                font-size: 1em;\n            }\n            &.hidden {\n                display: none;\n            }\n        }\n        .download-icon {\n            svg {\n                width: 45px;\n                height: 32px;\n                @include breakpoint(phablet) {\n                    width: 52px;\n                    height: 37px;\n                }\n            }\n        }\n    }\n    .download-item-list-wrapper {\n        position: absolute;\n        .download-item-list-container {\n            @include border-radius(0 0 3px 3px);\n            @include transition(all 0.1s ease-in-out);\n            box-sizing: border-box;\n            overflow: hidden;\n            max-height: 0;\n            position: relative;\n            top: 10px;\n            background-color: #fbfcfd;\n            right: 205px;\n            width: 260px;\n            @include breakpoint(phablet) {\n                right: 245px;\n                width: 300px;\n            }\n            @media print {\n                display: none;\n            }\n            &.open {\n                @include box-shadow(\n                    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12)\n                );\n                height: auto;\n                max-height: 300px;\n                overflow: auto;\n            }\n            ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n                li {\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    padding: 8px 16px;\n                    &:hover {\n                        background-color: $hover-background;\n                    }\n                    .list-icon {\n                        margin-left: 8px;\n                        cursor: pointer;\n                        background: none;\n                        border: none;\n                        svg {\n                            color: $primary-danger;\n                            width: 20px;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n',"\ufeff@mixin transition($transition...) {\n    -moz-transition: $transition;\n    -o-transition: $transition;\n    -webkit-transition: $transition;\n    transition: $transition;\n}\n\n@mixin transition-property($property...) {\n    -moz-transition-property: $property;\n    -o-transition-property: $property;\n    -webkit-transition-property: $property;\n    transition-property: $property;\n}\n\n@mixin transition-duration($duration...) {\n    -moz-transition-property: $duration;\n    -o-transition-property: $duration;\n    -webkit-transition-property: $duration;\n    transition-property: $duration;\n}\n\n@mixin transition-timing-function($timing...) {\n    -moz-transition-timing-function: $timing;\n    -o-transition-timing-function: $timing;\n    -webkit-transition-timing-function: $timing;\n    transition-timing-function: $timing;\n}\n\n@mixin transition-delay($delay...) {\n    -moz-transition-delay: $delay;\n    -o-transition-delay: $delay;\n    -webkit-transition-delay: $delay;\n    transition-delay: $delay;\n}\n","@mixin breakpoint($point) {\n    @if $point == desktop {\n        @media (min-width: $screen-desktop) {\n            @content;\n        }\n    } @else if $point == laptop {\n        @media (min-width: $screen-laptop) {\n            @content;\n        }\n    } @else if $point == tablet {\n        @media (min-width: $screen-tablet) {\n            @content;\n        }\n    } @else if $point == phablet {\n        @media (min-width: $screen-phablet) {\n            @content;\n        }\n    }\n}\n","$body-background: #ffffff;\n$primary-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.08);\n$primary-border: #d8d8d8;\n$primary-brand: #FE5000;\n$primary-danger: #e00d0d;\n$primary-warning: #C38621;\n$icon-disabled: #C2BBBA;\n$secondary-brand: #7da1c4;\n$icon-enabled: #333;\n$primary-success: #06A755;\n$anchor-active:#3767C7;\n$anchor-active-hover:#0056b3;\n$default-text:#2f3940;","@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n  border-radius: $radius;\n}\n\n// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}","\ufeff@mixin box-shadow($shadows...) {\n    -webkit-box-shadow: $shadows;\n    -moz-box-shadow: $shadows;\n    box-shadow: $shadows;\n}\n"],sourceRoot:""}]);const s=a},1942:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o='<template>\n    <div class="download-items-container">\n        <button id="download-toggle-button" class="icon-toggle-button">\n            <span id="download-toggle-button-counter" class="counter"></span>\n            <span id="download-toggle-button-icon" class="download-icon"></span>\n        </button>\n        <div class="download-item-list-wrapper">\n            <div id="download-item-list-container" class="download-item-list-container"></div>\n        </div>\n    </div>\n</template>'},7638:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var d=[].concat(t[s]);o&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},3062:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}t.exports=function(t){var n,o,i=(o=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}return n}}(n,o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=i[1],a=i[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(d," */"),c=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[r].concat(c).concat([l]).join("\n")}return[r].join("\n")}},1397:function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{d(o.next(t))}catch(t){r(t)}}function s(t){try{d(o.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}d((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const i=n(5969),r=n(5773),a=n(3804);e.Component=t=>e=>{var n;const s=t.tag||a.toKebabCase(e.prototype.constructor.name),d=((n=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((t=>a.toKebabCase(t)))}attributeChangedCallback(t,e,n){this.onAttributeChange(t,e,n)}onAttributeChange(t,e,n,o=!0){if(e!=n){o&&(this[a.toCamelCase(t)]=n);const i=this.constructor.watchAttributes;if(i&&i[t]){const o=i[t];this.__connected&&"function"==typeof this[o]&&this[o]({old:e,new:n})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,i.addEventListeners(this),r.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),n=document.createRange().createContextualFragment(e);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let e;return t.style instanceof Promise?e=(yield t.style).default.toString():"string"==typeof t.style&&(e=t.style),e?`<style>${e}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((t,e)=>t(!0))),n);return customElements.get(s)||customElements.define(s,d),d}},985:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=n},265:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},406:function(t,e,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),i(n(1397),e),i(n(985),e),i(n(265),e),i(n(5969),e),i(n(5773),e),i(n(4271),e),i(n(9766),e),i(n(4938),e)},5969:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const o=n(3804);e.Listen=(t,e)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[o]})},e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const n of t.constructor.listeners){const o=n.selector?e.querySelector(n.selector)?e.querySelector(n.selector):null:t;o&&o.addEventListener(n.eventName,(e=>{n.handler.call(t,e)}))}}},e.Dispatch=t=>(e,n)=>{Object.defineProperty(e,n,{get:function(){const e=this;return{emit(i){const r=t||o.toDotCase(n);e.dispatchEvent(new CustomEvent(r,i))}}}})}},5773:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const o=n(3804);e.Prop=()=>(t,e)=>{const n=o.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(n)},set:function(t){if(this.__connected){const i=this.props[e];this.props[e]=o.tryParseInt(t),"object"!=typeof t?this.setAttribute(n,t):this.onAttributeChange(n,i,t,!1)}else this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})},e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let n of(t=>{const e=t.constructor.watchAttributes,n=Object.assign({},e);Object.keys(n).forEach((t=>n[t]=""));const o=Object.assign(Object.assign({},n),t.constructor.propsInit);return Object.keys(o)})(t)){if(e)if(null==e[o.toKebabCase(n)])e[o.toKebabCase(n)]="";else{const i=t.props[n]||t.getAttribute(o.toKebabCase(n));"function"==typeof t[e[n]]&&t[e[n]]({new:i})}t.constructor.propsInit[n]&&(t.hasAttribute(o.toKebabCase(n))||(t[n]=t.constructor.propsInit[n]))}}},4271:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const o=n(3804);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const n=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==n&&null!==n?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(o.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},9766:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},3804:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,(t=>t[1].toUpperCase())),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},4938:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const o=n(3804);e.Watch=t=>(e,n)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[o.toKebabCase(t)]=n,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},5195:t=>{t.exports='<svg viewBox="0 0 48 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1.000000, -9.000000)" fill="currentColor" class="__176tcrb__downloads__cloud "><path d="M25,9 C19.22,9 14.2,12.28 11.7,17.08 C5.68,17.72 1,22.82 1,29 C1,35.62 6.38,41 13,41 L39,41 C44.52,41 49,36.52 49,31 C49,25.72 44.9,21.44 39.7,21.08 C38.34,14.18 32.28,9 25,9 Z M35,27 L25,37 L15,27 L21,27 L21,19 L29,19 L29,27 L35,27 L35,27 Z" id="Shape"></path></g></g></svg>'},2374:t=>{t.exports='<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash" class="__2fgqV-u__svg-inline--fa __2fgqV-u__fa-trash __2fgqV-u__fa-w-14 __2fgqV-u__ " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"></path></svg>'},3075:function(t,e,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DownloadItems=void 0;const d=n(406),l=s(n(5195)),c=s(n(2374)),u=n(9399),p=n(1406);let h=class extends d.CustomElement{constructor(){super(),this.hideListContainer=()=>{this.showList=!1},this.renderDownloadItems=t=>{const e=t.map((t=>{const e=document.createElement("span");e.innerText=t.name;const n=document.createElement("button");return n.classList.add("list-icon"),n.innerHTML=c.default,n.dataset.downloadItem=JSON.stringify(t),e.appendChild(n),`<li>${e.innerHTML}</li>`})).join("");this.downloadItemListContainer.innerHTML=`<ul>${e}</ul>`},this.clickOutsideDownloadItemsContainer=this.clickOutsideDownloadItemsContainer.bind(this)}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.downloadButton=d.getShadowRootElement(this,"#download-toggle-button"),this.downloadIcon=d.getShadowRootElement(this,"#download-toggle-button-icon"),this.downloadIconCounter=d.getShadowRootElement(this,"#download-toggle-button-counter"),this.downloadItemListContainer=d.getShadowRootElement(this,"#download-item-list-container"),this.getUpdatedDownloadItems(),this.downloadIcon.innerHTML=l.default,this.renderDownloadItemsCounter(),document.addEventListener("click",this.clickOutsideDownloadItemsContainer)}getUpdatedDownloadItems(){const t=u.getDownloadItems();this.downloadItems=t.map((t=>u.getDownloadItemMetadata(t)))}disconnectedCallback(){document.removeEventListener("click",this.clickOutsideDownloadItemsContainer)}clickOutsideDownloadItemsContainer(t){const e=t.composedPath()[0];e.closest("#download-item-list-container")||e.closest("#download-toggle-button")||this.hideListContainer()}renderDownloadItemsCounter(){this.downloadItems&&this.downloadItems.length?(this.downloadIconCounter.innerHTML=this.downloadItems.length.toString(),this.downloadIconCounter.classList.remove("hidden")):(this.downloadIconCounter.innerHTML="",this.downloadIconCounter.classList.add("hidden"))}buttonClicked(t){this.downloadItems&&this.downloadItems.length?this.showList=!this.showList:(this.showList=!1,this.preventRedirect?this.onOpenEmptyDownloadItemsList.emit():window.location.href=p.getKartkatalogUrl(this.environment)+"/nedlasting")}removeDownloadItemClicked(t){const e=t.composedPath()[0];e.closest("#menu-container");const n=e.closest("button");if(n){const e=n.dataset&&n.dataset.downloadItem?JSON.parse(n.dataset.downloadItem):null;e&&(t.stopPropagation(),u.removeDownloadItem(e),this.getUpdatedDownloadItems(),this.renderDownloadItems(this.downloadItems),this.renderDownloadItemsCounter(),this.downloadItems&&this.downloadItems.length||(this.showList=!1))}}showMenuChanged(){this.showList?this.downloadItemListContainer.classList.add("open"):this.downloadItemListContainer.classList.remove("open"),this.showList?this.downloadButton.classList.add("open"):this.downloadButton.classList.remove("open")}downloadItemsChanged(){this.downloadItems&&this.downloadItems.length&&(this.renderDownloadItems(this.downloadItems),this.renderDownloadItemsCounter())}static setup(t,e){const n=d.getElement(t);e.onClick&&n.addEventListener("menuButtonClick",e.onClick),e.active&&(n.showList=e.active)}};h.elementSelector="download-items",r([d.Prop()],h.prototype,"id",void 0),r([d.Prop()],h.prototype,"environment",void 0),r([d.Toggle()],h.prototype,"showList",void 0),r([d.Toggle()],h.prototype,"preventRedirect",void 0),r([d.Dispatch("onOpenEmptyDownloadItemsList")],h.prototype,"onOpenEmptyDownloadItemsList",void 0),r([d.Listen("click","#download-toggle-button")],h.prototype,"buttonClicked",null),r([d.Listen("click","#download-item-list-container")],h.prototype,"removeDownloadItemClicked",null),r([d.Watch("showlist")],h.prototype,"showMenuChanged",null),r([d.Watch("downloadItems")],h.prototype,"downloadItemsChanged",null),h=r([d.Component({tag:"download-items",template:Promise.resolve().then((()=>a(n(1942)))),style:Promise.resolve().then((()=>a(n(9474))))})],h),e.DownloadItems=h},9399:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeDownloadItem=e.getDownloadItemMetadata=e.getDownloadItems=void 0,e.getDownloadItems=()=>localStorage.orderItems&&Array.isArray(JSON.parse(localStorage.orderItems))?JSON.parse(localStorage.orderItems):[],e.getDownloadItemMetadata=t=>localStorage[t+".metadata"]?JSON.parse(localStorage[t+".metadata"]):null,e.removeDownloadItem=t=>{let e=localStorage.orderItems&&Array.isArray(JSON.parse(localStorage.orderItems))?JSON.parse(localStorage.orderItems):[];localStorage.orderItems=JSON.stringify(e.filter((e=>e!==t.uuid))),localStorage.removeItem(t.uuid+".metadata")}},1406:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.renderDropdownResultLink=e.convertTextToUrlSlug=e.getGeonorgeNedlastingUrl=e.getGeonorgeUrl=e.getKartkatalogUrl=void 0,e.getKartkatalogUrl=t=>`https://kartkatalog.${"dev"===t||"test"===t?t+".":""}geonorge.no`,e.getGeonorgeUrl=t=>`https://www.${"dev"===t||"test"===t?"test.":""}geonorge.no`,e.getGeonorgeNedlastingUrl=t=>`https://nedlasting.${"dev"===t||"test"===t?"test.":""}geonorge.no`;const n=(t,e,n)=>(t=(t=(t=t.replace(new RegExp(`([^s])([${e}])([^s])`,"ig"),`$1 ${n} $3`)).replace(new RegExp(`([^s])([${e}])`,"ig"),"$1 "+n)).replace(new RegExp(`([${e}])([^s])`,"ig"),n+" $2")).replace(new RegExp(`[${e}]`,"ig"),n);e.convertTextToUrlSlug=(t="")=>(t=t.toLowerCase(),t=n(t,"&","and"),(t=(t=(t=(t=(t=(t=(t=(t=(t=n(t,"+","plus")).replace("æ","ae")).replace("ä","ae")).replace("ø","oe")).replace("ö","oe")).replace("å","aa")).replace(/( - )/g,"-")).replace(/[\s]+/g,"-")).replace(/[^a-z0-9-]+/gi,"")).replace(/^[^A-Z0-9]*|[^a-z0-9]*$/gi,""));const o=(t,e)=>{if(!e)return!1;e({event:"updateSearchString",category:"metadataSearch",activity:"dropDownResultsClick",searchString:t})};e.renderDropdownResultLink=(t,n,i,r,a)=>"articles"===n?`<a onClick="${o(i,a)}" href="${t.ShowDetailsUrl?t.ShowDetailsUrl:"#"}">${t.Title}</a>`:`<a onClick="${o(i,a)}" href="${e.getKartkatalogUrl(r)}/metadata/${e.convertTextToUrlSlug(t.Title)}/${t.Uuid}">${t.Title}</a>`}},e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={id:o,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(3075)})()}));
//# sourceMappingURL=DownloadItem.js.map