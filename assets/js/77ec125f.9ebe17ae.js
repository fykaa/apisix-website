"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[14651],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),y=o,f=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const i={title:"Biweekly Report (December 18 - December 31)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",tags:["Community"],image:"https://static.apiseven.com/uploads/2024/01/03/7NwLI3ky_ENG.png"},a=void 0,l={permalink:"/blog/2024/01/03/bi-weekly-report",source:"@site/blog/2024/01/03/bi-weekly-report.md",title:"Biweekly Report (December 18 - December 31)",description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",date:"2024-01-03T00:00:00.000Z",formattedDate:"January 3, 2024",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.21,truncated:!0,authors:[],prevItem:{title:"Release Apache APISIX 3.8.0",permalink:"/blog/2024/01/15/release-apache-apisix-3.8.0"},nextItem:{title:"Building a Robust 'Highway' with APISIX: Gateway and Protocol Performance Optimization",permalink:"/blog/2023/12/26/zhengcaiyun-uses-apisix"}},p={authorsImageUrls:[]},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We have recently made some additions and improvements to specific features within Apache APISIX. The updates include the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin configuration supporting environment variables, the ",(0,o.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin supporting gzip when using the filters.regex option, and upgrading OpenSSL 1.1.1 to OpenSSL 3.0 version. For additional information, please consult the bi-weekly report.")))}u.isMDXComponent=!0}}]);