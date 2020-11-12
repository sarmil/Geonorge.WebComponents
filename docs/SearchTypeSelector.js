!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.geonorge=t():(e.geonorge=e.geonorge||{},e.geonorge.SearchTypeSelector=t())}(self,(function(){return(()=>{"use strict";var e={372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(3062),r=n.n(o),a=n(7638),s=n.n(a)()(r());s.push([e.id,'.search-type-selector{width:180px}.search-type-selector label{display:block;cursor:pointer}.search-type-selector label .search-type-counter{font-size:.9em}.search-type-selector label .search-type-counter::before{content:"("}.search-type-selector label .search-type-counter::after{content:")"}',"",{version:3,sources:["webpack://./custom-elements/main-navigation/search-type-selector/search-type-selector.scss"],names:[],mappings:"AAAA,sBACI,WAAA,CACA,4BACI,aAAA,CACA,cAAA,CACA,iDACI,cAAA,CACA,yDACI,WAAA,CAEJ,wDACI,WAAA",sourcesContent:['.search-type-selector{\n    width: 180px;\n    label {\n        display: block;\n        cursor: pointer;\n        .search-type-counter {\n            font-size: .9em;\n            &::before{\n                content: "(";\n            }\n            &::after{\n                content: ")";\n            }\n        }\n    }\n}\n'],sourceRoot:""}]);const c=s},3650:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o='<template>\n    <div id="search-type-selector" class="search-type-selector">\n        <label for="search-type-metadata">\n            <input name="search-type" type="radio" id="search-type-metadata" value="metadata" />\n            <span id="search-type-metadata-name">Kartkatalogen</span>\n            <span id="search-type-metadata-counter" class="search-type-counter"></span>\n        </label>\n        <label for="search-type-article">\n            <input name="search-type" type="radio" id="search-type-article" value="articles" />\n            <span id="search-type-article-name">Artikler</span>\n            <span id="search-type-article-counter" class="search-type-counter"></span>\n        </label>\n    </div>\n</template>'},7638:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var i=[].concat(e[c]);o&&r[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},3062:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.exports=function(e){var n,o,r=(o=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}(n,o)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[1],s=r[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(i," */"),u=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[a].concat(u).concat([l]).join("\n")}return[a].join("\n")}},1397:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{i(o.next(e))}catch(e){a(e)}}function c(e){try{i(o.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}i((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;const r=n(5969),a=n(5773),s=n(3804);t.Component=e=>t=>{var n;const c=e.tag||s.toKebabCase(t.prototype.constructor.name),i=((n=class extends t{constructor(){super(),this.props={},this.showShadowRoot=null==e.shadow||e.shadow,!this.shadowRoot&&this.showShadowRoot&&this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(this.propsInit||{}).map((e=>s.toKebabCase(e)))}attributeChangedCallback(e,t,n){this.onAttributeChange(e,t,n)}onAttributeChange(e,t,n,o=!0){if(t!=n){o&&(this[s.toCamelCase(e)]=n);const r=this.constructor.watchAttributes;if(r&&r[e]){const o=r[e];this.__connected&&"function"==typeof this[o]&&this[o]({old:t,new:n})}}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return o(this,void 0,void 0,(function*(){yield this.render(),e.connectedCallback&&e.connectedCallback.call(this),this.__connected=!0,r.addEventListeners(this),a.initializeProps(this)}))}render(){return o(this,void 0,void 0,(function*(){if(this.__connected)return;const t=document.createElement("template");t.innerHTML=yield this.getStyle(),e.template instanceof Promise?t.content.appendChild(yield this.getExternalTemplate()):"string"==typeof e.template&&(t.innerHTML+=e.template),(this.showShadowRoot?this.shadowRoot:this).appendChild(t.content.cloneNode(!0))}))}getExternalTemplate(){return o(this,void 0,void 0,(function*(){const t=(yield e.template).default.toString(),n=document.createRange().createContextualFragment(t);return 1===n.children.length&&"TEMPLATE"===n.children[0].nodeName?n.firstChild.content:n}))}getStyle(){return o(this,void 0,void 0,(function*(){let t;return e.style instanceof Promise?t=(yield e.style).default.toString():"string"==typeof e.style&&(t=e.style),t?`<style>${t}</style>`:""}))}}).__connected=!1,n.ready=new Promise(((e,t)=>e(!0))),n);return customElements.get(c)||customElements.define(c,i),i}},985:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CustomElement=void 0;class n extends HTMLElement{constructor(){super()}connect(e){this.isConnected||document.querySelector(e).appendChild(this)}}t.CustomElement=n},265:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getShadowRootElement=t.getElement=void 0,t.getElement=e=>document.querySelector(e),t.getShadowRootElement=(e,t)=>e.shadowRoot.querySelector(t)},406:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(1397),t),r(n(985),t),r(n(265),t),r(n(5969),t),r(n(5773),t),r(n(4271),t),r(n(9766),t),r(n(4938),t)},5969:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Dispatch=t.addEventListeners=t.Listen=void 0;const o=n(3804);t.Listen=(e,t)=>(n,o)=>{n.constructor.listeners||(n.constructor.listeners=[]),n.constructor.listeners.push({selector:t,eventName:e,handler:n[o]})},t.addEventListeners=e=>{if(e.constructor.listeners){const t=e.shadowRoot||e;for(const n of e.constructor.listeners){const o=n.selector?t.querySelector(n.selector)?t.querySelector(n.selector):null:e;o&&o.addEventListener(n.eventName,(t=>{n.handler.call(e,t)}))}}},t.Dispatch=e=>(t,n)=>{Object.defineProperty(t,n,{get:function(){const t=this;return{emit(r){const a=e||o.toDotCase(n);t.dispatchEvent(new CustomEvent(a,r))}}}})}},5773:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initializeProps=t.Prop=void 0;const o=n(3804);t.Prop=()=>(e,t)=>{const n=o.toKebabCase(t);e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null,Object.defineProperty(e,t,{get:function(){return this.props[t]?this.props[t]:this.getAttribute(n)},set:function(e){if(this.__connected){const r=this.props[t];this.props[t]=o.tryParseInt(e),"object"!=typeof e?this.setAttribute(n,e):this.onAttributeChange(n,r,e,!1)}else this.hasAttribute(o.toKebabCase(t))||(this.constructor.propsInit[t]=e)}})},t.initializeProps=e=>{const t=e.constructor.watchAttributes;for(let n of(e=>{const t=e.constructor.watchAttributes,n=Object.assign({},t);Object.keys(n).forEach((e=>n[e]=""));const o=Object.assign(Object.assign({},n),e.constructor.propsInit);return Object.keys(o)})(e)){if(t)if(null==t[o.toKebabCase(n)])t[o.toKebabCase(n)]="";else{const r=e.props[n]||e.getAttribute(o.toKebabCase(n));"function"==typeof e[t[n]]&&e[t[n]]({new:r})}e.constructor.propsInit[n]&&(e.hasAttribute(o.toKebabCase(n))||(e[n]=e.constructor.propsInit[n]))}}},4271:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const o=n(3804);t.Toggle=()=>(e,t)=>{e.constructor.propsInit||(e.constructor.propsInit={}),e.constructor.propsInit[t]=null,Object.defineProperty(e,t,{get:function(){return(e=>{if(this.hasAttribute(e)){const t=this.getAttribute(e);return!!/^(true|false|^$)$/.test(t)&&("true"==t||""==t)}return!1})(t)},set:function(e){const n=e;if(null!=e)switch(typeof e){case"boolean":break;case"string":/^(true|false|^$)$/.test(e)?e="true"==n||""==n:(console.warn(`TypeError: Cannot set boolean toggle property '${t}' to '${e}'`),e=!1);break;default:throw`TypeError: Cannot set boolean toggle property '${t}' to '${e}'`}this.__connected?(this.props[t]=e||!1,""!==n&&null!==n?this.setAttribute(t,e):e?this.setAttribute(t,""):this.removeAttribute(t)):this.hasAttribute(o.toKebabCase(t))||(this.constructor.propsInit[t]=e)}})}},9766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3804:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tryParseInt=t.toDotCase=t.toCamelCase=t.toKebabCase=void 0,t.toKebabCase=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),t.toCamelCase=e=>e.toLowerCase().replace(/(\-\w)/g,(e=>e[1].toUpperCase())),t.toDotCase=e=>e.replace(/(?!^)([A-Z])/g," $1").replace(/[_\s]+(?=[a-zA-Z])/g,".").toLowerCase(),t.tryParseInt=e=>parseInt(e)==e&&NaN!==parseFloat(e)?parseInt(e):e},4938:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;const o=n(3804);t.Watch=e=>(t,n)=>{t.constructor.watchAttributes||(t.constructor.watchAttributes={}),t.constructor.watchAttributes[o.toKebabCase(e)]=n,t.constructor.propsInit||(t.constructor.propsInit={}),t.constructor.propsInit[e]=null}},8310:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchTypeSelector=void 0;const c=n(406);let i=class extends c.CustomElement{constructor(){super(),this.handleSearchTypeOnChange=this.handleSearchTypeOnChange.bind(this)}setup(e){this.connect(e.container),e.id&&(this.id=e.id)}connectedCallback(){this.searchTypeSelector=c.getShadowRootElement(this,"#search-type-selector"),this.metadataNameElement=c.getShadowRootElement(this,"#search-type-metadata-name"),this.metadataCounterElement=c.getShadowRootElement(this,"#search-type-metadata-counter"),this.articleNameElement=c.getShadowRootElement(this,"#search-type-article-name"),this.articleCounterElement=c.getShadowRootElement(this,"#search-type-article-counter"),this.searchTypeSelector.querySelectorAll("input[name=search-type]").forEach((e=>{e.onchange=this.handleSearchTypeOnChange}))}disconnectedCallback(){}updateNameElements(e){this.metadataNameElement.innerHTML="en"===e?"Map catalog":"Kartkatalogen",this.articleNameElement.innerHTML="en"===e?"Articles":"Artikler"}handleSearchTypeOnChange(e){if(this.onSearchTypeChange){const t=e.composedPath()[0];this.onSearchTypeChange.emit({detail:{value:t.value}})}}languageChanged(){this.updateNameElements(this.language)}metadataResultsFoundChanged(){this.metadataCounterElement.innerHTML=this.metadataresultsfound}articleResultsFoundChanged(){this.articleCounterElement.innerHTML=this.articleresultsfound}static setup(e,t){c.getElement(e)}};i.elementSelector="search-type-selector",a([c.Prop()],i.prototype,"id",void 0),a([c.Prop()],i.prototype,"metadataresultsfound",void 0),a([c.Prop()],i.prototype,"articleresultsfound",void 0),a([c.Prop()],i.prototype,"language",void 0),a([c.Dispatch("onSearchTypeChange")],i.prototype,"onSearchTypeChange",void 0),a([c.Watch("language")],i.prototype,"languageChanged",null),a([c.Watch("metadataresultsfound")],i.prototype,"metadataResultsFoundChanged",null),a([c.Watch("articleresultsfound")],i.prototype,"articleResultsFoundChanged",null),i=a([c.Component({tag:"search-type-selector",template:Promise.resolve().then((()=>s(n(3650)))),style:Promise.resolve().then((()=>s(n(372))))})],i),t.SearchTypeSelector=i}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(8310)})()}));
//# sourceMappingURL=SearchTypeSelector.js.map