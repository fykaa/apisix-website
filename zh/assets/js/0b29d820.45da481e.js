"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82144:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const a={title:"ApisixGlobalRule/v2",keywords:["APISIX ingress","Apache APISIX","ApisixGlobalRule"],description:"Reference for ApisixGlobalRule/v2 custom Kubernetes resource."},i=void 0,o={unversionedId:"references/apisix_global_rule_v2",id:"version-1.8.0/references/apisix_global_rule_v2",isDocsHomePage:!1,title:"ApisixGlobalRule/v2",description:"Reference for ApisixGlobalRule/v2 custom Kubernetes resource.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.8.0/references/apisix_global_rule_v2.md",sourceDirName:"references",slug:"/references/apisix_global_rule_v2",permalink:"/zh/docs/ingress-controller/references/apisix_global_rule_v2",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.8.0/docs/zh/latest/references/apisix_global_rule_v2.md",tags:[],version:"1.8.0",frontMatter:{title:"ApisixGlobalRule/v2",keywords:["APISIX ingress","Apache APISIX","ApisixGlobalRule"],description:"Reference for ApisixGlobalRule/v2 custom Kubernetes resource."},sidebar:"version-1.8.0/docs",previous:{title:"v2 API Reference",permalink:"/zh/docs/ingress-controller/references/v2"},next:{title:"ApisixRoute",permalink:"/zh/docs/ingress-controller/concepts/apisix_route"}},s=[{value:"Spec",id:"spec",children:[]}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"spec"},"Spec"),(0,l.kt)("p",null,",See the ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/concepts/apisix_global_rule"},"definition")," on GitHub."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugins"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugins that will be executed on the all requests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugins[].name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the Plugin. See ",(0,l.kt)("a",{parentName:"td",href:"https://apisix.apache.org/plugins/"},"Plugin hub")," for a list of available Plugins.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugins[].enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", enables the Plugin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugins[].config"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration of the Plugin, the schema is totally same to the one in APISIX.")))))}c.isMDXComponent=!0}}]);