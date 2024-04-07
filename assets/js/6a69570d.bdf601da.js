"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[74317],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=o,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(25773),o=(n(27378),n(35318));const i={title:"Biweekly Report (December 04 - December 17)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/12/20/XSUtxSaY_EN.png"},a=void 0,l={permalink:"/blog/2023/12/20/bi-weekly-report",source:"@site/blog/2023/12/20/bi-weekly-report.md",title:"Biweekly Report (December 04 - December 17)",description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",date:"2023-12-20T00:00:00.000Z",formattedDate:"December 20, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.425,truncated:!0,authors:[],prevItem:{title:"Building a Robust 'Highway' with APISIX: Gateway and Protocol Performance Optimization",permalink:"/blog/2023/12/26/zhengcaiyun-uses-apisix"},nextItem:{title:"Enhancing Security and Performance: DataVisor's Dynamic Use of APISIX",permalink:"/blog/2023/12/19/datavisor-uses-apisix"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We have recently made some additions and improvements to specific features within Apache APISIX. The updates include adding ",(0,o.kt)("inlineCode",{parentName:"p"},"jwe decrypt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"brotli")," plugins, adding more attributes to ",(0,o.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin, allowing ",(0,o.kt)("inlineCode",{parentName:"p"},"CORS")," plugin to support Timing-Allow-Origin, and using lua-resty-events as the default event mechanism. For additional information, please consult the bi-weekly report.")))}u.isMDXComponent=!0}}]);