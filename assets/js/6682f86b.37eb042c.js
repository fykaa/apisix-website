"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[98531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52543:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={title:"Global Rules",keywords:["API Gateway","Apache APISIX","Global Rules"],description:"This article describes how to use global rules."},i=void 0,a={unversionedId:"terminology/global-rule",id:"version-3.8/terminology/global-rule",isDocsHomePage:!1,title:"Global Rules",description:"This article describes how to use global rules.",source:"@site/docs-apisix_versioned_docs/version-3.8/terminology/global-rule.md",sourceDirName:"terminology",slug:"/terminology/global-rule",permalink:"/docs/apisix/3.8/terminology/global-rule",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.8/docs/en/latest/terminology/global-rule.md",tags:[],version:"3.8",frontMatter:{title:"Global Rules",keywords:["API Gateway","Apache APISIX","Global Rules"],description:"This article describes how to use global rules."},sidebar:"version-3.8/docs",previous:{title:"Consumer Group",permalink:"/docs/apisix/3.8/terminology/consumer-group"},next:{title:"Plugin",permalink:"/docs/apisix/3.8/terminology/plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/3.8/terminology/plugin"},"Plugin")," configuration can be bound directly to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/3.8/terminology/route"},"Route"),", a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/3.8/terminology/service"},"Service")," or a ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/3.8/terminology/consumer"},"Consumer"),". But what if we want a Plugin to work on all requests? This is where we register a global Plugin with Global Rule."),(0,o.kt)("p",null,"Compared with the plugin configuration in Route, Service, Plugin Config, and Consumer, the plugin in the Global Rules is always executed first."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The example below shows how you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-count")," Plugin on all requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  http://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),(0,o.kt)("p",null,"You can also list all the Global rules by making this request with the Admin API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://{apisix_listen_address}/apisix/admin/global_rules -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}u.isMDXComponent=!0}}]);