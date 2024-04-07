"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10642],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),y=o,d=m["".concat(p,".").concat(y)]||m[y]||s[y]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={title:"Biweekly Report (January 01 - January 14)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",tags:["Community"],image:"https://static.apiseven.com/uploads/2024/01/18/3j9gLLve_Cover_ENG.png"},i=void 0,l={permalink:"/blog/2024/01/18/bi-weekly-report",source:"@site/blog/2024/01/18/bi-weekly-report.md",title:"Biweekly Report (January 01 - January 14)",description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",date:"2024-01-18T00:00:00.000Z",formattedDate:"January 18, 2024",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.41,truncated:!0,authors:[],prevItem:{title:"Biweekly Report (January 15 - January 28)",permalink:"/blog/2024/01/31/bi-weekly-report"},nextItem:{title:"Release Apache APISIX 3.8.0",permalink:"/blog/2024/01/15/release-apache-apisix-3.8.0"}},p={authorsImageUrls:[]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We have recently made some additions and improvements to specific features within Apache APISIX. The updates include the newly added include",(0,o.kt)("em",{parentName:"p"},"req_body option for some log-related plugins, supporting one-click compilation and installation of apisix and apisix-runtime from source code, the ",(0,o.kt)("inlineCode",{parentName:"em"},"response-rewrite")," plugin supporting Brotli compression when using the filters.regex option, and supporting the uri_param")," variable when using the radixtree_uri_with_parameter routing engine. For additional information, please consult the bi-weekly report.")))}s.isMDXComponent=!0}}]);