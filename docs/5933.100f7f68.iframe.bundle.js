"use strict";(self.webpackChunk_kartverket_geonorge_web_components=self.webpackChunk_kartverket_geonorge_web_components||[]).push([[5933],{"./src/stories/gn-accordion/template.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@keyframes show{0%{opacity:0;margin-top:0px;padding:0 15px 0;line-height:0;max-height:0}100%{opacity:1;margin-top:0px;padding:8px 15px 15px;line-height:inherit;max-height:1000px}}@keyframes hide{100%{opacity:0;margin-top:0px;padding:0 15px 0;line-height:0;max-height:0}0%{opacity:1;margin-top:0px;padding:8px 15px 15px;line-height:inherit;max-height:1000px}}@media(min-width: 37.5em){@keyframes show{0%{opacity:0;margin-top:0px;padding:0 30px 0;line-height:0;max-height:0}100%{opacity:1;margin-top:0px;padding:8px 30px 15px;line-height:inherit;max-height:1000px}}@keyframes hide{100%{opacity:0;margin-top:0px;padding:0 30px 0;line-height:0;max-height:0}0%{opacity:1;margin-top:0px;padding:8px 30px 15px;line-height:inherit;max-height:1000px}}}:host{background-color:#f6f5f4}.panel{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-border-radius:0;border-radius:0;font-family:"Open Sans",sans-serif;color:#2f3940;padding:15px 15px;display:flex;align-items:center;position:relative;text-decoration:none;overflow-wrap:break-word;line-height:1.7;cursor:pointer;border:none;width:100%;background:none;text-align:left}@media(min-width: 37.5em){.panel{padding:15px 30px}}.panel:focus-visible{outline-color:#3767c7;outline-style:auto;outline-width:2px;outline-offset:0px}.panel .panelText{font-family:"Raleway",sans-serif;font-weight:bold;font-size:18px;flex:1}.panel .panelChevron{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;border-radius:100px;margin-right:6px}@media(min-width: 37.5em){.panel .panelChevron{margin-right:0}}.panel .panelChevron::after{content:"";display:block;box-sizing:border-box;position:absolute;width:18px;height:18px;border-bottom:2px solid;border-right:2px solid;transform:translateY(-30%) rotate(45deg);transition:transform .3s ease-in-out}.panel .panelChevron.expanded::after{transform:translateY(30%) rotate(225deg)}.content{opacity:0;margin-top:0px;line-height:0;max-height:0;overflow:hidden;padding:0 15px 0}@media(min-width: 37.5em){.content{padding:0 30px 0}}.content.initialized{animation:hide .3s ease-in-out}.content.expanded{animation:show .3s ease-in-out;opacity:1;margin-top:0px;padding:8px 15px 15px;line-height:inherit;max-height:10000px}@media(min-width: 37.5em){.content.expanded{padding:8px 30px 15px}}',"",{version:3,sources:["webpack://./src/stories/gn-accordion/template.scss","webpack://./src/style/mixins/_breakpoints.scss","webpack://./src/style/variables/_colors.scss","webpack://./src/style/mixins/_appearance.scss","webpack://./src/style/mixins/_border-radius.scss","webpack://./src/style/variables/_typography.scss"],names:[],mappings:"AAEA,gBACI,GACI,SAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CACA,YAAA,CAEJ,KACI,SAAA,CACA,cAAA,CACA,qBAAA,CACA,mBAAA,CACA,iBAAA,CAAA,CAIR,gBACI,KACI,SAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CACA,YAAA,CAEJ,GACI,SAAA,CACA,cAAA,CACA,qBAAA,CACA,mBAAA,CACA,iBAAA,CAAA,CClBA,0BDwBJ,gBACI,GACI,SAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CACA,YAAA,CAEJ,KACI,SAAA,CACA,cAAA,CACA,qBAAA,CACA,mBAAA,CACA,iBAAA,CAAA,CAGR,gBACI,KACI,SAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CACA,YAAA,CAEJ,GACI,SAAA,CACA,cAAA,CACA,qBAAA,CACA,mBAAA,CACA,iBAAA,CAAA,CAAA,CAKZ,MACI,wBEhES,CFkET,OG1EA,uBH2EwB,CG1ExB,oBH0EwB,CGzExB,eHyEwB,CI3E1B,uBJ4E6B,CI3E7B,eJ2E6B,CACvB,kCK9EO,CL+EP,aExEM,CFyEN,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,oBAAA,CACA,wBAAA,CACA,eAAA,CACA,cAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,eAAA,CC7EA,0BD6DJ,OAkBQ,iBAAA,CAAA,CAEJ,qBACI,qBEjFG,CFkFH,kBAAA,CACA,iBAAA,CACA,kBAAA,CAEJ,kBACI,gCKrGE,CLsGF,gBAAA,CACA,cAAA,CACA,MAAA,CAEJ,qBACI,qBAAA,CACA,iBAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,gBAAA,CCpGJ,0BD6FA,qBASQ,cAAA,CAAA,CAEJ,4BACI,UAAA,CACA,aAAA,CACA,qBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,uBAAA,CACA,sBAAA,CACA,wCAAA,CACA,oCAAA,CAGA,qCACI,wCAAA,CAKhB,SACI,SAAA,CACA,cAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,gBAAA,CCjIA,0BD2HJ,SAQQ,gBAAA,CAAA,CAEJ,qBACI,8BAAA,CAGJ,kBACI,8BAAA,CACA,SAAA,CACA,cAAA,CACA,qBAAA,CACA,mBAAA,CACA,kBAAA,CC/IJ,0BDyIA,kBAQQ,qBAAA,CAAA",sourcesContent:['@import "../../style/all";\r\n\r\n@keyframes show {\r\n    0% {\r\n        opacity: 0;\r\n        margin-top: 0px;\r\n        padding: 0 15px 0;\r\n        line-height: 0;\r\n        max-height: 0;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        margin-top: 0px;\r\n        padding: 8px 15px 15px;\r\n        line-height: inherit;\r\n        max-height: 1000px;\r\n    }\r\n}\r\n\r\n@keyframes hide {\r\n    100% {\r\n        opacity: 0;\r\n        margin-top: 0px;\r\n        padding: 0 15px 0;\r\n        line-height: 0;\r\n        max-height: 0;\r\n    }\r\n    0% {\r\n        opacity: 1;\r\n        margin-top: 0px;\r\n        padding: 8px 15px 15px;\r\n        line-height: inherit;\r\n        max-height: 1000px;\r\n    }\r\n}\r\n\r\n\r\n@include breakpoint(phablet) {\r\n    @keyframes show {\r\n        0% {\r\n            opacity: 0;\r\n            margin-top: 0px;\r\n            padding: 0 30px 0;\r\n            line-height: 0;\r\n            max-height: 0;\r\n        }\r\n        100% {\r\n            opacity: 1;\r\n            margin-top: 0px;\r\n            padding: 8px 30px 15px;\r\n            line-height: inherit;\r\n            max-height: 1000px;\r\n        }\r\n    }\r\n    @keyframes hide {\r\n        100% {\r\n            opacity: 0;\r\n            margin-top: 0px;\r\n            padding: 0 30px 0;\r\n            line-height: 0;\r\n            max-height: 0;\r\n        }\r\n        0% {\r\n            opacity: 1;\r\n            margin-top: 0px;\r\n            padding: 8px 30px 15px;\r\n            line-height: inherit;\r\n            max-height: 1000px;\r\n        }\r\n    }\r\n}\r\n\r\n:host {\r\n    background-color: $light-gray;\r\n}\r\n    .panel {\r\n        @include appearance(none);\r\n        @include border-radius(0);\r\n        font-family: $default-font;\r\n        color: $default-text;\r\n        padding: 15px 15px;\r\n        display: flex;\r\n        align-items: center;\r\n        position: relative;\r\n        text-decoration: none;\r\n        overflow-wrap: break-word;\r\n        line-height: 1.7;\r\n        cursor: pointer;\r\n        border: none;\r\n        width: 100%;\r\n        background: none;\r\n        text-align: left;\r\n        @include breakpoint(phablet) {\r\n            padding: 15px 30px;\r\n        }\r\n        &:focus-visible {\r\n            outline-color: $primary-text;\r\n            outline-style: auto;\r\n            outline-width: 2px;\r\n            outline-offset: 0px;\r\n        }\r\n        .panelText {\r\n            font-family: $header-font;\r\n            font-weight: bold;\r\n            font-size: 18px;\r\n            flex: 1;\r\n        }\r\n        .panelChevron {\r\n            box-sizing: border-box;\r\n            position: relative;\r\n            display: block;\r\n            width: 18px;\r\n            height: 18px;\r\n            border-radius: 100px;\r\n            margin-right: 6px;\r\n            @include breakpoint(phablet) {\r\n                margin-right: 0;\r\n            }\r\n            &::after {\r\n                content: "";\r\n                display: block;\r\n                box-sizing: border-box;\r\n                position: absolute;\r\n                width: 18px;\r\n                height: 18px;\r\n                border-bottom: 2px solid;\r\n                border-right: 2px solid;\r\n                transform: translateY(-30%) rotate(45deg);\r\n                transition: transform 0.3s ease-in-out;\r\n            }\r\n            &.expanded {\r\n                &::after {\r\n                    transform: translateY(30%) rotate(225deg);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    .content {\r\n        opacity: 0;\r\n        margin-top: 0px;\r\n        line-height: 0;\r\n        max-height: 0;\r\n        overflow: hidden;\r\n        padding: 0 15px 0;\r\n        @include breakpoint(phablet) {\r\n            padding: 0 30px 0;\r\n        }\r\n        &.initialized {\r\n            animation: hide 0.3s ease-in-out;\r\n        }\r\n\r\n        &.expanded {\r\n            animation: show 0.3s ease-in-out;\r\n            opacity: 1;\r\n            margin-top: 0px;\r\n            padding: 8px 15px 15px;\r\n            line-height: inherit;\r\n            max-height: 10000px;\r\n            @include breakpoint(phablet) {\r\n                padding: 8px 30px 15px;\r\n            }\r\n        }\r\n    }\r\n',"@mixin breakpoint($point) {\r\n    @if $point == desktop {\r\n        @media (min-width: $screen-desktop) {\r\n            @content;\r\n        }\r\n    } @else if $point == laptop {\r\n        @media (min-width: $screen-laptop) {\r\n            @content;\r\n        }\r\n    } @else if $point == tablet {\r\n        @media (min-width: $screen-tablet) {\r\n            @content;\r\n        }\r\n    } @else if $point == phablet {\r\n        @media (min-width: $screen-phablet) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n","$body-background: #ffffff;\r\n$navigation-bar-background:  #f7f7f7;\r\n$hover-background: rgba(0,0,0,.05);\r\n$default-border: #d8d8d8;\r\n\r\n$default-background: #eee;\r\n$default-background-hover: #ddd;\r\n$default-text:#2F3940;\r\n\r\n$light-gray: #f6f5f4;\r\n\r\n$primary-brand: #FE5000;\r\n\r\n$primary-background: #3767C7;\r\n$primary-background-hover: #FE5000;\r\n$primary-text: #3767C7;\r\n$primary-text-hover:#0056b3;\r\n\r\n\r\n$success-background: #06A755;\r\n$success-background-hover: #009745;\r\n$success-text: #06A755;\r\n\r\n\r\n$warning-background: #C38621;\r\n$warning-background-hover: #B37611;\r\n$warning-text: #C38621;\r\n\r\n$danger-background: #E00d0D;\r\n$danger-background-hover: #D00000;\r\n$danger-text: #E00d0D;\r\n\r\n$disabled-background: #f4f4f4;\r\n$disabled-border: #dedede;\r\n$disabled-text: #707070;\r\n\r\n\r\n$light-green: #8fff33;\r\n$light-yellow: #ffEb3b;\r\n$light-red: #ff4a2e;\r\n","\ufeff@mixin appearance ($value) {\r\n    -webkit-appearance: $value;\r\n    -moz-appearance: $value;\r\n    appearance: $value;\r\n}\r\n","@mixin border-radius($radius) {\r\n  -webkit-border-radius: $radius;\r\n  border-radius: $radius;\r\n}\r\n\r\n// Single side border-radius\r\n\r\n@mixin border-top-radius($radius) {\r\n  -webkit-border-top-right-radius: $radius;\r\n  border-top-right-radius: $radius;\r\n  -webkit-border-top-left-radius: $radius;\r\n  border-top-left-radius: $radius;\r\n}\r\n@mixin border-right-radius($radius) {\r\n  -webkit-border-bottom-right-radius: $radius;\r\n  border-bottom-right-radius: $radius;\r\n  -webkit-border-top-right-radius: $radius;\r\n  border-top-right-radius: $radius;\r\n}\r\n@mixin border-bottom-radius($radius) {\r\n  -webkit-border-bottom-right-radius: $radius;\r\n  border-bottom-right-radius: $radius;\r\n  -webkit-border-bottom-left-radius: $radius;\r\n  border-bottom-left-radius: $radius;\r\n}\r\n@mixin border-left-radius($radius) {\r\n  -webkit-border-bottom-left-radius: $radius;\r\n  border-bottom-left-radius: $radius;\r\n  -webkit-border-top-left-radius: $radius;\r\n  border-top-left-radius: $radius;\r\n}",'$default-font: "Open Sans", sans-serif;\r\n$header-font: "Raleway", sans-serif;\r\n$default-font-size: 15px;\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);