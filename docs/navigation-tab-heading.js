!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.geonorge=e():t.geonorge=e()}(self,(function(){return(()=>{"use strict";var t={3341:(t,e,o)=>{o.r(e),o.d(e,{default:()=>a});var n=o(3062),r=o.n(n),s=o(7638),i=o.n(s)()(r());i.push([t.id,':host{font-family:"Open Sans",sans-serif;display:inline-flex;cursor:pointer}:host slot{display:block;background-color:#7da1c4;padding:10px 12px;transition:all .35s linear 0s;color:#fff;border-bottom:1px solid transparent;background-clip:padding-box;border-radius:0;font-size:13px;margin-bottom:0;margin-bottom:-1px;margin-right:2px}:host slot:hover{background-color:#fe5000;color:#fff;border-color:transparent}:host slot.selected{border:1px solid #414042;border-bottom:1px solid #fff;background-color:#fff;color:#555;cursor:default}',"",{version:3,sources:["webpack://custom-elements/navigation-tabs/navigation-tab-heading/navigation-tab-heading.scss","webpack://style/variables/_typography.scss","webpack://style/variables/_colors.scss"],names:[],mappings:"AAEA,MACI,kCCHW,CDIX,mBAAA,CACA,cAAA,CAEA,WACI,aAAA,CACA,wBEDU,CFEV,iBAAA,CACA,6BAAA,CACA,UAAA,CACA,mCAAA,CACA,2BAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CAEA,iBACI,wBElBI,CFmBJ,UAAA,CACA,wBAAA,CAGJ,oBACI,wBAAA,CACA,4BAAA,CACA,qBAAA,CACA,UAAA,CACA,cAAA",sourcesContent:['@import "../../../style/all";\n\n:host {\n    font-family: $default-font;\n    display: inline-flex;\n    cursor: pointer;\n\n    slot {\n        display: block;\n        background-color: $secondary-brand;\n        padding: 10px 12px;\n        transition: all 0.35s linear 0s;\n        color: #fff;\n        border-bottom: 1px solid transparent;\n        background-clip: padding-box;\n        border-radius: 0;\n        font-size: 13px;\n        margin-bottom: 0;\n        margin-bottom: -1px;\n        margin-right: 2px;\n\n        &:hover {\n            background-color: $primary-brand;\n            color: #fff;\n            border-color: transparent;\n        }\n\n        &.selected {\n            border: 1px solid #414042;\n            border-bottom: 1px solid #fff;\n            background-color: #fff;\n            color: #555;\n            cursor: default;\n        }\n    }\n}\n','$default-font: "Open Sans", sans-serif;\n$header-font: "Raleway";',"$body-background: #ffffff;\n$primary-background:  #f7f7f7;\n$hover-background: rgba(0,0,0,.08);\n$primary-border: #d8d8d8;\n$primary-brand: #FE5000;\n$primary-danger: #e00d0d;\n$primary-warning: #C38621;\n$icon-disabled: #C2BBBA;\n$secondary-brand: #7da1c4;\n$icon-enabled: #333;\n$primary-success: #06A755;\n$anchor-active:#3767C7;\n$anchor-active-hover:#0056b3;\n$default-text:#2f3940;"],sourceRoot:""}]);const a=i},6290:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});const n='<template>\n    <slot name="tab-heading"></slot>\n</template>'},7638:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),e.push(c))}},e}},3062:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}t.exports=function(t){var o,n,r=(n=4,function(t){if(Array.isArray(t))return t}(o=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var o=[],n=!0,r=!1,s=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(o.push(i.value),!e||o.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return o}}(o,n)||function(t,o){if(t){if("string"==typeof t)return e(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,o):void 0}}(o,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=r[1],i=r[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),l="/*# ".concat(c," */"),u=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[s].concat(u).concat([l]).join("\n")}return[s].join("\n")}},1397:function(t,e,o){var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(r,s){function i(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(i,a)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const r=o(5969),s=o(5773),i=o(3804);e.Component=t=>e=>{var o;const a=t.tag||i.toKebabCase(e.prototype.constructor.name),c=((o=class extends e{constructor(){super(),this.props={},this.showShadowRoot=null==t.shadow||t.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((t=>i.toKebabCase(t)))}attributeChangedCallback(t,e,o){this.onAttributeChange(t,e,o)}onAttributeChange(t,e,o,n=!0){if(e!=o){n&&(this[i.toCamelCase(t)]=o);const r=this.constructor.watchAttributes;if(r&&r[t]){const n=r[t];this.__connected&&"function"==typeof this[n]&&this[n]({old:e,new:o})}}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return n(this,void 0,void 0,(function*(){yield this.render(),t.connectedCallback&&t.connectedCallback.call(this),this.__connected=!0,r.addEventListeners(this),s.initializeProps(this)}))}render(){return n(this,void 0,void 0,(function*(){if(this.__connected)return;const e=document.createElement("template");e.innerHTML=yield this.getStyle(),t.template instanceof Promise?e.content.appendChild(yield this.getExternalTemplate()):"string"==typeof t.template&&(e.innerHTML+=t.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(e.content.cloneNode(!0))}))}getExternalTemplate(){return n(this,void 0,void 0,(function*(){const e=(yield t.template).default.toString(),o=document.createRange().createContextualFragment(e);return 1===o.children.length&&"TEMPLATE"===o.children[0].nodeName?o.firstChild.content:o}))}getStyle(){return n(this,void 0,void 0,(function*(){let e;return t.style instanceof Promise?e=(yield t.style).default.toString():"string"==typeof t.style&&(e=t.style),e?`<style>${e}</style>`:""}))}}).__connected=!1,o.ready=new Promise(((t,e)=>t(!0))),o);return customElements.get(a)||customElements.define(a,c),c}},985:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CustomElement=void 0;class o extends HTMLElement{constructor(){super()}connect(t){this.isConnected||document.querySelector(t).appendChild(this)}}e.CustomElement=o},265:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getShadowRootElement=e.getElement=void 0,e.getElement=t=>document.querySelector(t),e.getShadowRootElement=(t,e)=>t.shadowRoot.querySelector(e)},406:function(t,e,o){var n=this&&this.__createBinding||(Object.create?function(t,e,o,n){void 0===n&&(n=o),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[o]}})}:function(t,e,o,n){void 0===n&&(n=o),t[n]=e[o]}),r=this&&this.__exportStar||function(t,e){for(var o in t)"default"===o||Object.prototype.hasOwnProperty.call(e,o)||n(e,t,o)};Object.defineProperty(e,"__esModule",{value:!0}),r(o(1397),e),r(o(985),e),r(o(265),e),r(o(5969),e),r(o(5773),e),r(o(4271),e),r(o(9766),e),r(o(4938),e)},5969:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Dispatch=e.addEventListeners=e.Listen=void 0;const n=o(3804);e.Listen=(t,e)=>(o,n)=>{o.constructor.listeners||(o.constructor.listeners=[]),o.constructor.listeners.push({selector:e,eventName:t,handler:o[n]})},e.addEventListeners=t=>{if(t.constructor.listeners){const e=t.shadowRoot||t;for(const o of t.constructor.listeners){const n=o.selector?e.querySelector(o.selector)?e.querySelector(o.selector):null:t;n&&n.addEventListener(o.eventName,(e=>{o.handler.call(t,e)}))}}},e.Dispatch=t=>(e,o)=>{Object.defineProperty(e,o,{get:function(){const e=this;return{emit(r){const s=t||n.toDotCase(o);e.dispatchEvent(new CustomEvent(s,r))}}}})}},5773:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.initializeProps=e.Prop=void 0;const n=o(3804);e.Prop=()=>(t,e)=>{const o=n.toKebabCase(e);t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return this.props[e]?this.props[e]:this.getAttribute(o)},set:function(t){if(this.__connected){const r=this.props[e];this.props[e]=n.tryParseInt(t),"object"!=typeof t?this.setAttribute(o,t):this.onAttributeChange(o,r,t,!1)}else this.hasAttribute(n.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})},e.initializeProps=t=>{const e=t.constructor.watchAttributes;for(let o of(t=>{const e=t.constructor.watchAttributes,o=Object.assign({},e);Object.keys(o).forEach((t=>o[t]=""));const n=Object.assign(Object.assign({},o),t.constructor.propsInit);return Object.keys(n)})(t)){if(e)if(null==e[n.toKebabCase(o)])e[n.toKebabCase(o)]="";else{const r=t.props[o]||t.getAttribute(n.toKebabCase(o));"function"==typeof t[e[o]]&&t[e[o]]({new:r})}t.constructor.propsInit[o]&&(t.hasAttribute(n.toKebabCase(o))||(t[o]=t.constructor.propsInit[o]))}}},4271:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Toggle=void 0;const n=o(3804);e.Toggle=()=>(t,e)=>{t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null,Object.defineProperty(t,e,{get:function(){return(t=>{if(this.hasAttribute(t)){const e=this.getAttribute(t);return!!/^(true|false|^$)$/.test(e)&&("true"==e||""==e)}return!1})(e)},set:function(t){const o=t;if(null!=t)switch(typeof t){case"boolean":break;case"string":/^(true|false|^$)$/.test(t)?t="true"==o||""==o:(console.warn(`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`),t=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${e}' to '${t}'`}this.__connected?(this.props[e]=t||!1,""!==o&&null!==o?this.setAttribute(e,t):t?this.setAttribute(e,""):this.removeAttribute(e)):this.hasAttribute(n.toKebabCase(e))||(this.constructor.propsInit[e]=t)}})}},9766:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},3804:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.tryParseInt=e.toDotCase=e.toCamelCase=e.toKebabCase=void 0,e.toKebabCase=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),e.toCamelCase=t=>t.toLowerCase().replace(/(\-\w)/g,(t=>t[1].toUpperCase())),e.toDotCase=t=>t.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),e.tryParseInt=t=>parseInt(t)==t&&NaN!==parseFloat(t)?parseInt(t):t},4938:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Watch=void 0;const n=o(3804);e.Watch=t=>(e,o)=>{e.constructor.watchAttributes||(e.constructor.watchAttributes={}),e.constructor.watchAttributes[n.toKebabCase(t)]=o,e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null}},913:function(t,e,o){var n=this&&this.__createBinding||(Object.create?function(t,e,o,n){void 0===n&&(n=o),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[o]}})}:function(t,e,o,n){void 0===n&&(n=o),t[n]=e[o]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__decorate||function(t,e,o,n){var r,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(s<3?r(i):s>3?r(e,o,i):r(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.prototype.hasOwnProperty.call(t,o)&&n(e,t,o);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.NavigationTabHeading=void 0;const a=o(406);let c=0,l=class extends a.CustomElement{constructor(){super()}setup(t){this.connect(t.container),t.id&&(this.id=t.id)}connectedCallback(){this.setAttribute("role","tab"),this.id||(this.id="navigation-tab-heading-"+c++),this.tabHeadingElement=a.getShadowRootElement(this,"slot[name=tab-heading]"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex","-1"),this._upgradeProperty("selected")}disconnectedCallback(){}_upgradeProperty(t){if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(){}selectedChanged(){this.selected?this.setAttribute("aria-selected",""):this.removeAttribute("aria-selected"),this.selected?this.tabHeadingElement.classList.add("selected"):this.tabHeadingElement.classList.remove("selected"),this.setAttribute("tabindex",this.selected?"0":"-1")}static setup(t,e){a.getElement(t)}};l.elementSelector="navigation-tab-heading",s([a.Prop()],l.prototype,"id",void 0),s([a.Toggle()],l.prototype,"selected",void 0),s([a.Watch("selected")],l.prototype,"selectedChanged",null),l=s([a.Component({tag:"navigation-tab-heading",template:Promise.resolve().then((()=>i(o(6290)))),style:Promise.resolve().then((()=>i(o(3341))))})],l),e.NavigationTabHeading=l}},e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.exports}return o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(913)})()}));
//# sourceMappingURL=navigation-tab-heading.js.map