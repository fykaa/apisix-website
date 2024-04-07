"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8870],{5318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(r),f=a,m=h["".concat(l,".").concat(f)]||h[f]||u[f]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(5773),a=(r(7378),r(5318));const c={title:"\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u5b9e\u73b0",date:new Date("2021-08-07T14:50:00.000Z"),keywords:["APISIX","Ingress Controller","Kubernetes"],description:"\u4ecb\u7ecd\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u4f18\u52bf\u4ee5\u53ca Apache APISIX Ingress \u7684\u7279\u70b9\u3002"},i=void 0,o={permalink:"/zh/articles/Apache-APISIX-Kubernetes-Ingress",source:"@site/articles/Apache-APISIX-Kubernetes-Ingress.md",title:"\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u5b9e\u73b0",description:"\u4ecb\u7ecd\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u4f18\u52bf\u4ee5\u53ca Apache APISIX Ingress \u7684\u7279\u70b9\u3002",date:"2021-08-07T14:50:00.000Z",formattedDate:"2021\u5e748\u67087\u65e5",tags:[],readingTime:.55,truncated:!1,authors:[],prevItem:{title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8 EOS \u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/zh/articles/Apache-APISIX-in-China-Mobile-Cloud"},nextItem:{title:"\u5f00\u6e90\u7684\u9b45\u529b",permalink:"/zh/articles/The-Appeal-of-OpenSource"}},l={authorsImageUrls:[]},p=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=632600503&bvid=BV1Wb4y1m76g&cid=394698230&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,a.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,a.kt)("p",null,"\u91d1\u536b\uff0cApache APISIX PMC / Apache apisix-ingress-controller Founder / Apache Skywalking Committer\u3002"),(0,a.kt)("p",null,"\u9886\u5bfc Apache ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"apisix-ingress-controller")," \u9879\u76ee\u3002\u53c2\u4e0e\u5bf9 Apache APISIX / Apache Skywalking \u7b49\u9879\u76ee\u7684\u8d21\u732e\u3002"),(0,a.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u4ecb\u7ecd\u57fa\u4e8e Apache APISIX \u7684 Kubernetes Ingress \u7684\u4f18\u52bf\u4ee5\u53ca Apache APISIX Ingress \u7684\u7279\u70b9\u3002"),(0,a.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,a.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,a.kt)("img",{src:"https://static.apiseven.com/202108/1639468506819-7f829080-19de-4d94-b103-e1d967e0baea.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}u.isMDXComponent=!0}}]);