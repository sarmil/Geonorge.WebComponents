!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():(t.geonorge=t.geonorge||{},t.geonorge.MapItem=e())}(self,(function(){return(()=>{var t={2895:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var i=n(3062),o=n.n(i),r=n(7638),a=n.n(r)()(o());a.push([t.id,"*{box-sizing:border-box}div.map-items-container .icon-toggle-button{-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;border:none;background:transparent;color:#7d746d;cursor:pointer;padding:0}@media(min-width: 37.5em){div.map-items-container .icon-toggle-button{padding:0 4px}}div.map-items-container .icon-toggle-button.open{color:#414042}div.map-items-container .icon-toggle-button .counter{background-color:#fe5000;border-radius:50%;color:#fff;margin-top:-0.25em;margin-left:-0.2em;position:absolute;text-align:center;width:1.4em;line-height:1.4;height:1.4em;font-size:.9em}@media(min-width: 37.5em){div.map-items-container .icon-toggle-button .counter{height:1.5em;width:1.5em;line-height:1.5;font-size:1em}}div.map-items-container .icon-toggle-button .counter.hidden{display:none}div.map-items-container .icon-toggle-button .map-icon svg{width:31px;height:32px}@media(min-width: 37.5em){div.map-items-container .icon-toggle-button .map-icon svg{width:36px;height:37px}}div.map-items-container .map-item-list-wrapper{position:absolute}div.map-items-container .map-item-list-wrapper .map-item-list-container{-webkit-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;box-sizing:border-box;overflow:hidden;max-height:0;position:relative;top:10px;background-color:#fbfcfd;right:205px;width:260px}@media(min-width: 37.5em){div.map-items-container .map-item-list-wrapper .map-item-list-container{right:245px;width:300px}}@media print{div.map-items-container .map-item-list-wrapper .map-item-list-container{display:none}}div.map-items-container .map-item-list-wrapper .map-item-list-container.open{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);-moz-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);height:auto;max-height:300px;overflow:auto}div.map-items-container .map-item-list-wrapper .map-item-list-container .page-link-element{display:block;text-align:center;padding:8px 16px;color:#3767c7;text-decoration:none;cursor:pointer}div.map-items-container .map-item-list-wrapper .map-item-list-container .page-link-element:hover{text-decoration:underline;color:#0056b3}div.map-items-container .map-item-list-wrapper .map-item-list-container ul{list-style:none;padding:0;margin:0}div.map-items-container .map-item-list-wrapper .map-item-list-container ul li{-moz-transition:all .15s ease-in-out;-o-transition:all .15s ease-in-out;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:flex;align-items:center;justify-content:space-between;padding:8px 16px}div.map-items-container .map-item-list-wrapper .map-item-list-container ul li:hover{background-color:rgba(0,0,0,.05)}div.map-items-container .map-item-list-wrapper .map-item-list-container ul li .list-icon{margin-left:8px;cursor:pointer;background:none;border:none}div.map-items-container .map-item-list-wrapper .map-item-list-container ul li .list-icon svg{color:#e00d0d;width:20px}","",{version:3,sources:["webpack://./custom-elements/main-navigation/map-items/map-items.scss","webpack://./style/mixins/_transition.scss","webpack://./style/mixins/_breakpoints.scss","webpack://./style/variables/_colors.scss","webpack://./style/mixins/_border-radius.scss","webpack://./style/mixins/_box-shadow.scss"],names:[],mappings:"AAEA,EACI,qBAAA,CAIA,4CCNA,mCDOI,CCNJ,iCDMI,CCLJ,sCDKI,CCJJ,8BDII,CACA,WAAA,CACA,sBAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CECA,0BFPJ,4CAQQ,aAAA,CAAA,CAEJ,iDACI,aAAA,CAEJ,qDACI,wBGZI,CHaJ,iBAAA,CACA,UAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CEjBJ,0BFMA,qDAaQ,YAAA,CACA,WAAA,CACA,eAAA,CACA,aAAA,CAAA,CAEJ,4DACI,YAAA,CAIJ,0DACI,UAAA,CACA,WAAA,CE/BR,0BF6BI,0DAIQ,UAAA,CACA,WAAA,CAAA,CAKhB,+CACI,iBAAA,CACA,wEItDN,iCJuDiC,CItDjC,yBJsDiC,CCvD/B,mCDwDQ,CCvDR,iCDuDQ,CCtDR,sCDsDQ,CCrDR,8BDqDQ,CACA,qBAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,wBAAA,CACA,WAAA,CACA,WAAA,CEnDJ,0BFyCA,wEAYQ,WAAA,CACA,WAAA,CAAA,CAEJ,aAfJ,wEAgBQ,YAAA,CAAA,CAEJ,6EKxER,8GLyEY,CKxEZ,2GLwEY,CKvEZ,sGLuEY,CAKA,WAAA,CACA,gBAAA,CACA,aAAA,CAEJ,2FACI,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,aGzED,CH0EC,oBAAA,CACA,cAAA,CACA,iGACI,yBAAA,CACA,aG7EA,CHgFR,2EACI,eAAA,CACA,SAAA,CACA,QAAA,CACA,8EClGZ,oCDmGgB,CClGhB,kCDkGgB,CCjGhB,uCDiGgB,CChGhB,+BDgGgB,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CACA,oFACI,gCGxGL,CH0GC,yFACI,eAAA,CACA,cAAA,CACA,eAAA,CACA,WAAA,CACA,6FACI,aGrFd,CHsFc,UAAA",sourcesContent:['@import "../../../style/all";\n\n* {\n    box-sizing: border-box;\n}\n\ndiv.map-items-container {\n    .icon-toggle-button {\n        @include transition(all 0.1s ease-in-out);\n        border: none;\n        background: transparent;\n        color: #7d746d;\n        cursor: pointer;\n        padding: 0;\n        @include breakpoint(phablet) {\n            padding: 0 4px;\n        }\n        &.open {\n            color: #414042;\n        }\n        .counter {\n            background-color: $primary-brand;\n            border-radius: 50%;\n            color: #fff;\n            margin-top: -0.25em;\n            margin-left: -0.2em;\n            position: absolute;\n            text-align: center;\n            width: 1.4em;\n            line-height: 1.4;\n            height: 1.4em;\n            font-size: 0.9em;\n            @include breakpoint(phablet) {\n                height: 1.5em;\n                width: 1.5em;\n                line-height: 1.5;\n                font-size: 1em;\n            }\n            &.hidden {\n                display: none;\n            }\n        }\n        .map-icon {\n            svg {\n                width: 31px;\n                height: 32px;\n                @include breakpoint(phablet) {\n                    width: 36px;\n                    height: 37px;\n                }\n            }\n        }\n    }\n    .map-item-list-wrapper {\n        position: absolute;\n        .map-item-list-container {\n            @include border-radius(0 0 3px 3px);\n            @include transition(all 0.1s ease-in-out);\n            box-sizing: border-box;\n            overflow: hidden;\n            max-height: 0;\n            position: relative;\n            top: 10px;\n            background-color: #fbfcfd;\n            right: 205px;\n            width: 260px;\n            @include breakpoint(phablet) {\n                right: 245px;\n                width: 300px;\n            }\n            @media print {\n                display: none;\n            }\n            &.open {\n                @include box-shadow(\n                    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12)\n                );\n                height: auto;\n                max-height: 300px;\n                overflow: auto;\n            }\n            .page-link-element {\n                display: block;\n                text-align: center;\n                padding: 8px 16px;\n                color: $primary-text;\n                text-decoration: none;\n                cursor: pointer;\n                &:hover {\n                    text-decoration: underline;\n                    color: $primary-text-hover;\n                }\n            }\n            ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n                li {\n                    @include transition(all 0.15s ease-in-out);\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    padding: 8px 16px;\n                    &:hover {\n                        background-color: $hover-background;\n                    }\n                    .list-icon {\n                        margin-left: 8px;\n                        cursor: pointer;\n                        background: none;\n                        border: none;\n                        svg {\n                            color: $danger-text;\n                            width: 20px;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n',"\ufeff@mixin transition($transition...) {\n    -moz-transition: $transition;\n    -o-transition: $transition;\n    -webkit-transition: $transition;\n    transition: $transition;\n}\n\n@mixin transition-property($property...) {\n    -moz-transition-property: $property;\n    -o-transition-property: $property;\n    -webkit-transition-property: $property;\n    transition-property: $property;\n}\n\n@mixin transition-duration($duration...) {\n    -moz-transition-property: $duration;\n    -o-transition-property: $duration;\n    -webkit-transition-property: $duration;\n    transition-property: $duration;\n}\n\n@mixin transition-timing-function($timing...) {\n    -moz-transition-timing-function: $timing;\n    -o-transition-timing-function: $timing;\n    -webkit-transition-timing-function: $timing;\n    transition-timing-function: $timing;\n}\n\n@mixin transition-delay($delay...) {\n    -moz-transition-delay: $delay;\n    -o-transition-delay: $delay;\n    -webkit-transition-delay: $delay;\n    transition-delay: $delay;\n}\n","@mixin breakpoint($point) {\n    @if $point == desktop {\n        @media (min-width: $screen-desktop) {\n            @content;\n        }\n    } @else if $point == laptop {\n        @media (min-width: $screen-laptop) {\n            @content;\n        }\n    } @else if $point == tablet {\n        @media (min-width: $screen-tablet) {\n            @content;\n        }\n    } @else if $point == phablet {\n        @media (min-width: $screen-phablet) {\n            @content;\n        }\n    }\n}\n","$body-background: #ffffff;\n$navigation-bar-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.05);\n$default-border: #d8d8d8;\n\n$default-background: #eee;\n$default-background-hover: #ddd;\n$default-text:#2F3940;\n\n$primary-brand: #FE5000;\n$secondary-brand: #7da1c4;\n\n$primary-background: #7DA1C4;\n$primary-background-hover: #FE5000;\n$primary-text: #3767C7;\n$primary-text-hover:#0056b3;\n\n\n$success-background: #06A755;\n$success-background-hover: #009745;\n$success-text: #06A755;\n\n\n$warning-background: #C38621;\n$warning-background-hover: #B37611;\n$warning-text: #C38621;\n\n$danger-background: #E00d0D;\n$danger-background-hover: #D00000;\n$danger-text: #E00d0D;\n\n$disabled-background: #ffffff;\n$disabled-text: #d8d8d8;\n","@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n  border-radius: $radius;\n}\n\n// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-top-right-radius: $radius;\n  border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  -webkit-border-bottom-right-radius: $radius;\n  border-bottom-right-radius: $radius;\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  -webkit-border-bottom-left-radius: $radius;\n  border-bottom-left-radius: $radius;\n  -webkit-border-top-left-radius: $radius;\n  border-top-left-radius: $radius;\n}","\ufeff@mixin box-shadow($shadows...) {\n    -webkit-box-shadow: $shadows;\n    -moz-box-shadow: $shadows;\n    box-shadow: $shadows;\n}\n"],sourceRoot:""}]);const s=a},7814:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});const i='<template>\n    <div class="map-items-container">\n        <button id="map-toggle-button" class="icon-toggle-button">\n            <span id="map-toggle-button-counter" class="counter"></span>\n            <span id="map-toggle-button-icon" class="map-icon"></span>\n        </button>\n        <div class="map-item-list-wrapper">\n            <div id="map-item-list-container" class="map-item-list-container"></div>\n        </div>\n    </div>\n</template>'},7638:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var p=[].concat(t[s]);i&&o[p[0]]||(n&&(p[2]?p[2]="".concat(n," and ").concat(p[2]):p[2]=n),e.push(p))}},e}},3062:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}t.exports=function(t){var n,i,o=(i=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var i,o,r=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return r}}(n,i)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[1],a=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),c="/*# ".concat(p," */"),l=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[r].concat(l).concat([c]).join("\n")}return[r].join("\n")}},1397:function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{p(i.next(t))}catch(t){r(t)}}function s(t){try{p(i.throw(t))}catch(t){r(t)}}function p(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}p((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const o=n(5969),r=n(5773),a=n(3804);e.Component=t=>e=>{var n;const s=t.tag||a.toKebabCase(e.prototype.constructor.name),p=((n=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((t=>a.toKebabCase(t)))}attributeChangedCallback(t,e,n){this.onAttributeChange(t,e,n)}onAttributeChange(t,e,n,i=!0){if(e!=n){i&&(this[a.toCamelCase(t)]=n);const o=this.constructor.watchAttributes;if(o&&o[t]){const i=o[t];this.__connected&&"function"==typeof this[i]&&this[i]({old:e,new:n})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return i(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,o.addEventListeners(this),r.initializeProps(this)}))}render(){return i(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return i(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),n=document.createRange().createContextualFragment(e);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return i(this,void 0,void 0,(function*(){let e;return t.style instanceof Promise?e=(yield t.style).default.toString():"string"==typeof t.style&&(e=t.style),e?`<style>${e}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((t,e)=>t(!0))),n);return customElements.get(s)||customElements.define(s,p),p}},985:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=n},265:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},406:function(t,e,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||i(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),o(n(1397),e),o(n(985),e),o(n(265),e),o(n(5969),e),o(n(5773),e),o(n(4271),e),o(n(9766),e),o(n(4938),e)},5969:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const i=n(3804);e.Listen=(t,e)=>(n,i)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:e,eventName:t,handler:n[i]})},e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const n of t.constructor.listeners){const i=n.selector?e.querySelector(n.selector)?e.querySelector(n.selector):null:t;i&&i.addEventListener(n.eventName,(e=>{n.handler.call(t,e)}))}}},e.Dispatch=t=>(e,n)=>{Object.defineProperty(e,n,{get:function(){const e=this;return{emit(o){const r=t||i.toDotCase(n);e.dispatchEvent(new CustomEvent(r,o))}}}})}},5773:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const i=n(3804);e.Prop=()=>(t,e)=>{const n=i.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(n)},set:function(t){if(this.__connected){const o=this.props[e];this.props[e]=i.tryParseInt(t),"object"!=typeof t?this.setAttribute(n,t):this.onAttributeChange(n,o,t,!1)}else this.hasAttribute(i.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})},e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let n of(t=>{const e=t.constructor.watchAttributes,n=Object.assign({},e);Object.keys(n).forEach((t=>n[t]=""));const i=Object.assign(Object.assign({},n),t.constructor.propsInit);return Object.keys(i)})(t)){if(e)if(null==e[i.toKebabCase(n)])e[i.toKebabCase(n)]="";else{const o=t.props[n]||t.getAttribute(i.toKebabCase(n));"function"==typeof t[e[n]]&&t[e[n]]({new:o})}t.constructor.propsInit[n]&&(t.hasAttribute(i.toKebabCase(n))||(t[n]=t.constructor.propsInit[n]))}}},4271:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const i=n(3804);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const n=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==n&&null!==n?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(i.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},9766:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0})},3804:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,(t=>t[1].toUpperCase())),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},4938:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const i=n(3804);e.Watch=t=>(e,n)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[i.toKebabCase(t)]=n,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},2635:t=>{t.exports='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><style type="text/css"> .__158ibJ0__st0{fill:currentColor;} </style><path class="__158ibJ0__st0 " d="M5.2,11.2C4.4,10.1,4,8.8,4,7.3C4,3.3,7.3,0,11.4,0s7.3,3.3,7.3,7.3c0,1.5-0.4,2.8-1.1,3.9L11.4,22L5.2,11.2z M15.5,7.3c0-2.3-1.9-4.2-4.2-4.2S7.2,5.1,7.2,7.3c0,0.8,0.2,1.5,0.7,2.2c0.7,1.1,2,2,3.5,2s2.8-0.7,3.5-2 C15.3,8.9,15.5,8.1,15.5,7.3z"></path></svg>'},2374:t=>{t.exports='<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash" class="__2fgqV-u__svg-inline--fa __2fgqV-u__fa-trash __2fgqV-u__fa-w-14 __2fgqV-u__ " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"></path></svg>'},1422:function(t,e,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MapItems=void 0;const p=n(406),c=s(n(2635)),l=s(n(2374)),d=n(8586),u=n(1406);let m=class extends p.CustomElement{constructor(){super(),this.hideListContainer=()=>{this.showList=!1},this.renderMapItems=t=>{const e=t.map((t=>{if(t){const e=document.createElement("span");e.innerText=t.Title;const n=document.createElement("button");return n.classList.add("list-icon"),n.innerHTML=l.default,n.dataset.mapItem=JSON.stringify(t),n.setAttribute("aria-label","en"===this.language?`Remove ${t.Title} from map`:`Fjern ${t.Title} fra kart`),e.appendChild(n),`<li>${e.innerHTML}</li>`}return null})).filter((t=>t)).join("");let n;this.preventRedirect?(n=document.createElement("span"),n.addEventListener("click",(()=>{this.onOpenEmptyMapItemsList.emit()}))):(n=document.createElement("a"),n.href=`${u.getKartkatalogUrl(this.environment)}/kart`),n.innerText="en"===this.language?"Show map":"Vis kart",n.classList.add("page-link-element"),this.mapItemListContainer.innerHTML=`<ul>${e}</ul>`,this.mapItemListContainer.prepend(n)},this.clickOutsideMapItemsContainer=this.clickOutsideMapItemsContainer.bind(this),this.updateDomElements=this.updateDomElements.bind(this),this.getUpdatedMapItems=this.getUpdatedMapItems.bind(this)}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.mapButton=p.getShadowRootElement(this,"#map-toggle-button"),this.mapIcon=p.getShadowRootElement(this,"#map-toggle-button-icon"),this.mapIconCounter=p.getShadowRootElement(this,"#map-toggle-button-counter"),this.mapItemListContainer=p.getShadowRootElement(this,"#map-item-list-container"),this.getUpdatedMapItems(),this.mapIcon.innerHTML=c.default,this.renderMapItemsCounter(),document.addEventListener("click",this.clickOutsideMapItemsContainer),document.addEventListener("mapItemsChanged",this.updateDomElements)}updateDomElements(){this.getUpdatedMapItems(),this.renderMapItems(this.mapItems),this.renderMapItemsCounter()}getUpdatedMapItems(){this.mapItems=d.getMapItems()}disconnectedCallback(){document.removeEventListener("click",this.clickOutsideMapItemsContainer)}clickOutsideMapItemsContainer(t){const e=t.composedPath()[0];e.closest("#map-item-list-container")||e.closest("#map-toggle-button")||this.hideListContainer()}renderMapItemsCounter(){const t=d.getMapItemsCount();t?(this.mapIconCounter.innerHTML=t.toString(),this.mapIconCounter.classList.remove("hidden"),this.mapButton.setAttribute("aria-label","en"===this.language?"Show map item list":"Vis liste med elementer lagt til i kart")):(this.mapIconCounter.innerHTML="",this.mapIconCounter.classList.add("hidden"),this.mapButton.setAttribute("aria-label","en"===this.language?"Show map":"Vis kart"))}buttonClicked(t){this.mapItems&&this.mapItems.length?this.showList=!this.showList:(this.showList=!1,this.preventRedirect?this.onOpenEmptyMapItemsList.emit():window.location.href=`${u.getKartkatalogUrl(this.environment)}/kart`)}removeMapItemClicked(t){const e=t.composedPath()[0];e.closest("#menu-container");const n=e.closest("button");if(n){const e=n.dataset&&n.dataset.mapItem?JSON.parse(n.dataset.mapItem):null;e&&(t.stopPropagation(),d.removeMapItem(e),this.getUpdatedMapItems(),this.renderMapItems(this.mapItems),this.renderMapItemsCounter(),this.mapItems&&this.mapItems.length||(this.showList=!1))}}showMenuChanged(){this.showList?this.mapItemListContainer.classList.add("open"):this.mapItemListContainer.classList.remove("open"),this.showList?this.mapButton.classList.add("open"):this.mapButton.classList.remove("open")}mapItemsChanged(){this.mapItems&&this.mapItems.length&&(this.renderMapItems(this.mapItems),this.renderMapItemsCounter())}languageChanged(){this.mapItems&&this.mapItems.length&&(this.renderMapItems(this.mapItems),this.renderMapItemsCounter())}preventRedirectChanged(){this.mapItems&&this.mapItems.length&&(this.renderMapItems(this.mapItems),this.renderMapItemsCounter())}static setup(t,e){const n=p.getElement(t);e.active&&(n.showList=e.active)}};m.elementSelector="map-items",r([p.Prop()],m.prototype,"id",void 0),r([p.Prop()],m.prototype,"environment",void 0),r([p.Prop()],m.prototype,"language",void 0),r([p.Toggle()],m.prototype,"showList",void 0),r([p.Toggle()],m.prototype,"preventRedirect",void 0),r([p.Dispatch("onOpenEmptyMapItemsList")],m.prototype,"onOpenEmptyMapItemsList",void 0),r([p.Listen("click","#map-toggle-button")],m.prototype,"buttonClicked",null),r([p.Listen("click","#map-item-list-container")],m.prototype,"removeMapItemClicked",null),r([p.Watch("showlist")],m.prototype,"showMenuChanged",null),r([p.Watch("mapItems")],m.prototype,"mapItemsChanged",null),r([p.Watch("language")],m.prototype,"languageChanged",null),r([p.Watch("preventredirect")],m.prototype,"preventRedirectChanged",null),m=r([p.Component({tag:"map-items",template:Promise.resolve().then((()=>a(n(7814)))),style:Promise.resolve().then((()=>a(n(2895))))})],m),e.MapItems=m},4724:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setLanguage=e.getLanguage=e.setCookie=e.getCookie=void 0,e.getCookie=t=>{const e=`${t}=`,n=decodeURIComponent(document.cookie).split(";");for(var i=0;i<n.length;i++){let t=n[i];for(;" "==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return""},e.setCookie=(t,e,n)=>{let i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);const o=`expires=${i.toUTCString()}`,r="localhost"===window.location.hostname?"":"domain=-geonorge.no";document.cookie=`${t}=${e};${o};path=/;${r}`},e.getLanguage=()=>e.getCookie("_culture"),e.setLanguage=t=>{e.setCookie("_culture",t,7)}},8586:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeMapItem=e.getMapItemsCount=e.getMapItems=void 0;const i=n(4724);e.getMapItems=()=>localStorage.mapItems&&Array.isArray(JSON.parse(localStorage.mapItems))?JSON.parse(localStorage.mapItems).filter((t=>t)):[],e.getMapItemsCount=()=>{if(-1!==window.location.hostname.toLowerCase().indexOf("kartkatalog"))return e.getMapItems().length;{const t=parseInt(i.getCookie("mapItems"));return t&&!isNaN(t)?t:0}},e.removeMapItem=t=>{let e=localStorage.mapItems&&Array.isArray(JSON.parse(localStorage.mapItems))?JSON.parse(localStorage.mapItems):[];localStorage.mapItems=JSON.stringify(e.filter((e=>e.Uuid!==t.Uuid)))}},1406:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.renderDropdownResultLink=e.convertTextToUrlSlug=e.getGeonorgeNedlastingUrl=e.getGeonorgeUrl=e.getKartkatalogUrl=void 0,e.getKartkatalogUrl=t=>`https://kartkatalog.${"dev"===t||"test"===t?t+".":""}geonorge.no`,e.getGeonorgeUrl=t=>`https://www.${"dev"===t||"test"===t?"test.":""}geonorge.no`,e.getGeonorgeNedlastingUrl=t=>`https://nedlasting.${"dev"===t||"test"===t?"test.":""}geonorge.no`;const n=(t,e,n)=>(t=(t=(t=t.replace(new RegExp(`([^s])([${e}])([^s])`,"ig"),`$1 ${n} $3`)).replace(new RegExp(`([^s])([${e}])`,"ig"),`$1 ${n}`)).replace(new RegExp(`([${e}])([^s])`,"ig"),`${n} $2`)).replace(new RegExp(`[${e}]`,"ig"),n);e.convertTextToUrlSlug=(t="")=>(t=t.toLowerCase(),t=n(t,"&","and"),(t=(t=(t=(t=(t=(t=(t=(t=(t=n(t,"+","plus")).replace("æ","ae")).replace("ä","ae")).replace("ø","oe")).replace("ö","oe")).replace("å","aa")).replace(/( - )/g,"-")).replace(/[\s]+/g,"-")).replace(/[^a-z0-9-]+/gi,"")).replace(/^[^A-Z0-9]*|[^a-z0-9]*$/gi,""));const i=(t,e)=>{if(!e)return!1;e({event:"updateSearchString",category:"metadataSearch",activity:"dropDownResultsClick",searchString:t})};e.renderDropdownResultLink=(t,n,o,r,a)=>"articles"===n?`<a onClick="${i(o,a)}" href="${t.ShowDetailsUrl?t.ShowDetailsUrl:"#"}">${t.Title}</a>`:`<a onClick="${i(o,a)}" href="${e.getKartkatalogUrl(r)}/metadata/${e.convertTextToUrlSlug(t.Title)}/${t.Uuid}">${t.Title}</a>`}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(1422)})()}));
//# sourceMappingURL=MapItem.js.map