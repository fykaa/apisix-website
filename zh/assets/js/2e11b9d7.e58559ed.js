"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35586],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var p=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,p,a=function(e,t){if(null==e)return{};var n,p,a={},o=Object.keys(e);for(p=0;p<o.length;p++)n=o[p],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)n=o[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=p.createContext({}),s=function(e){var t=p.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return p.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},c=p.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?p.createElement(h,r(r({ref:t},u),{},{components:n})):p.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return p.createElement.apply(null,r)}return p.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var p=n(25773),a=(n(27378),n(35318));const o={title:"\u57fa\u4e8e DeepFlow \u6784\u5efa APISIX \u7684\u7edf\u4e00\u53ef\u89c2\u6d4b\u6027\u80fd\u529b",authors:[{name:"\u674e\u5029",title:"Author"},{name:"\u5f6d\u658c",title:"Author"}],keywords:["APISIX","DeepFlow"],description:"\u672c\u6587\u65e8\u5728\u9610\u8ff0\u5982\u4f55\u5229\u7528 DeepFlow \u57fa\u4e8e eBPF \u7684\u96f6\u4fb5\u6270\u7279\u6027\u6784\u5efa APISIX \u53ef\u89c2\u6d4b\u6027\u89e3\u51b3\u65b9\u6848\u3002",tags:["Ecosystem"],image:"https://static.apiseven.com/uploads/2024/02/07/9QAMhtmJ_deepflow-cover.jpeg"},r=void 0,l={permalink:"/zh/blog/2024/02/07/unlock-observability-for-apisix-with-deepflow",source:"@site/blog/2024/02/07/unlock-observability-for-apisix-with-deepflow.md",title:"\u57fa\u4e8e DeepFlow \u6784\u5efa APISIX \u7684\u7edf\u4e00\u53ef\u89c2\u6d4b\u6027\u80fd\u529b",description:"\u672c\u6587\u65e8\u5728\u9610\u8ff0\u5982\u4f55\u5229\u7528 DeepFlow \u57fa\u4e8e eBPF \u7684\u96f6\u4fb5\u6270\u7279\u6027\u6784\u5efa APISIX \u53ef\u89c2\u6d4b\u6027\u89e3\u51b3\u65b9\u6848\u3002",date:"2024-02-07T00:00:00.000Z",formattedDate:"2024\u5e742\u67087\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:15.8,truncated:!0,authors:[{name:"\u674e\u5029",title:"Author"},{name:"\u5f6d\u658c",title:"Author"}],prevItem:{title:"\u793e\u533a\u6708\u62a5 (01.29 - 02.29)",permalink:"/zh/blog/2024/03/05/monthly-report"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (01.15 - 01.28)",permalink:"/zh/blog/2024/01/31/bi-weekly-report"}},i={authorsImageUrls:[void 0,void 0]},s=[{value:"1. \u5b89\u88c5 APISIX \u548c DeepFlow",id:"1-\u5b89\u88c5-apisix-\u548c-deepflow",children:[],level:2},{value:"2. \u5206\u5e03\u5f0f\u8ffd\u8e2a",id:"2-\u5206\u5e03\u5f0f\u8ffd\u8e2a",children:[{value:"2.1 \u65b9\u5f0f\u4e00\uff1aDeepFlow eBPF AutoTracing",id:"21-\u65b9\u5f0f\u4e00deepflow-ebpf-autotracing",children:[],level:3},{value:"2.2 \u65b9\u5f0f\u4e8c\uff1aDeepFlow eBPF + OpenTelemetry",id:"22-\u65b9\u5f0f\u4e8cdeepflow-ebpf--opentelemetry",children:[],level:3}],level:2},{value:"3. \u6027\u80fd\u6307\u6807",id:"3-\u6027\u80fd\u6307\u6807",children:[{value:"3.1 \u5f00\u7bb1\u5373\u7528\u7684 eBPF \u6027\u80fd\u6307\u6807",id:"31-\u5f00\u7bb1\u5373\u7528\u7684-ebpf-\u6027\u80fd\u6307\u6807",children:[],level:3},{value:"3.2 \u5728 APISIX \u4e2d\u5f00\u542f Prometheus \u63d2\u4ef6",id:"32-\u5728-apisix-\u4e2d\u5f00\u542f-prometheus-\u63d2\u4ef6",children:[],level:3},{value:"3.3 \u4f7f\u7528 Prometheus \u62c9\u53d6 APISIX \u6307\u6807\u6570\u636e",id:"33-\u4f7f\u7528-prometheus-\u62c9\u53d6-apisix-\u6307\u6807\u6570\u636e",children:[],level:3},{value:"3.4 \u4f7f\u7528 DeepFlow \u96c6\u6210 Prometheus \u6307\u6807\u6570\u636e",id:"34-\u4f7f\u7528-deepflow-\u96c6\u6210-prometheus-\u6307\u6807\u6570\u636e",children:[],level:3},{value:"3.5 Prometheus \u96c6\u6210\u6548\u679c\u5c55\u793a",id:"35-prometheus-\u96c6\u6210\u6548\u679c\u5c55\u793a",children:[],level:3}],level:2},{value:"4. \u8bbf\u95ee\u65e5\u5fd7\u548c\u6301\u7eed\u5256\u6790",id:"4-\u8bbf\u95ee\u65e5\u5fd7\u548c\u6301\u7eed\u5256\u6790",children:[],level:2},{value:"5. \u4ec0\u4e48\u662f APISIX",id:"5-\u4ec0\u4e48\u662f-apisix",children:[],level:2},{value:"6. \u4ec0\u4e48\u662f DeepFlow",id:"6-\u4ec0\u4e48\u662f-deepflow",children:[],level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,p.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u65e8\u5728\u9610\u8ff0\u5982\u4f55\u5229\u7528 DeepFlow \u57fa\u4e8e eBPF \u7684\u96f6\u4fb5\u6270\u7279\u6027\u6784\u5efa APISIX \u53ef\u89c2\u6d4b\u6027\u89e3\u51b3\u65b9\u6848\u3002")),(0,a.kt)("p",null,"\u968f\u7740\u5e94\u7528\u7ec4\u4ef6\u7684\u53ef\u89c2\u6d4b\u6027\u9010\u6e10\u53d7\u5230\u91cd\u89c6\uff0cApache APISIX \u5f15\u5165\u63d2\u4ef6\u673a\u5236\u4e30\u5bcc\u4e86\u53ef\u89c2\u6d4b\u6570\u636e\u6e90\u3002\u7136\u800c\uff0c\u8fd9\u4e9b\u6570\u636e\u5206\u6563\u5728\u591a\u4e2a\u5e73\u53f0\uff0c\u5f62\u6210\u4e86\u6570\u636e\u5b64\u5c9b\u3002\u672c\u6587\u65e8\u5728\u9610\u8ff0\u5982\u4f55\u5229\u7528 DeepFlow \u57fa\u4e8e eBPF \u7684\u96f6\u4fb5\u6270\u7279\u6027\u6784\u5efa APISIX \u53ef\u89c2\u6d4b\u6027\u89e3\u51b3\u65b9\u6848\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u7edf\u4e00\u96c6\u6210 APISIX \u63d2\u4ef6\u5df2\u6709\u7684\u4e30\u5bcc\u6570\u636e\u6e90\uff0c\u6d88\u9664\u5b64\u5c9b\u3001\u6784\u5efa\u7edf\u4e00\u7684\u53ef\u89c2\u6d4b\u6027\u5e73\u53f0\uff0c\u4ee5\u5168\u9762\u76d1\u63a7\u548c\u5206\u6790 APISIX \u7f51\u5173\u3002\u901a\u8fc7 DeepFlow\uff0cAPISIX \u53ef\u4ee5\u5b9e\u73b0\u4ece\u6d41\u91cf\u76d1\u63a7\u3001\u8ffd\u8e2a\u5206\u6790\u3001\u5230\u6027\u80fd\u4f18\u5316\u7684\u5168\u9762\u53ef\u89c2\u6d4b\u6027\uff0c\u6d88\u9664\u6570\u636e\u5206\u6563\u5e76\u63d0\u4f9b\u4e2d\u5fc3\u5316\u7684\u76d1\u63a7\u89c6\u56fe\uff0c\u52a0\u901f\u6545\u969c\u6392\u67e5\u548c\u6027\u80fd\u8c03\u4f18\uff0c\u8ba9 DevOps \u548c SRE \u56e2\u961f\u7684\u5de5\u4f5c\u66f4\u52a0\u9ad8\u6548\u3002\u672c\u6587\u5c06\u91cd\u70b9\u68b3\u7406 APISIX \u7684\u8ffd\u8e2a\u6570\u636e\u3001\u6307\u6807\u6570\u636e\u3001\u8bbf\u65e5\u65e5\u5fd7\u53ca\u6027\u80fd\u5256\u6790\u6570\u636e\u5982\u4f55\u5bf9\u63a5 DeepFlow\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/klRaMpb4_deepflow-1.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h2",{id:"1-\u5b89\u88c5-apisix-\u548c-deepflow"},"1. \u5b89\u88c5 APISIX \u548c DeepFlow"),(0,a.kt)("p",null,"\u57fa\u4e8e DeepFlow \u5efa\u6784 APISIX \u7684\u7edf\u4e00\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\uff0c\u9700\u8981\u5148\u5c06 DeepFlow \u53ca APISIX \u90fd\u90e8\u7f72\u8d77\u6765\u3002\u672c\u6587\u4e3a\u4e86\u65b9\u4fbf\uff0c\u5c06 DeepFlow \u548c APISIX \u90fd\u4ee5 K8s \u670d\u52a1\u7684\u5f62\u5f0f\u90e8\u7f72\u5728\u4e00\u4e2a All-in-One \u7684 K8s \u96c6\u7fa4\u4e2d\uff0c\u6574\u4e2a\u90e8\u7f72\u8fc7\u7a0b\u5927\u6982 5 \u5206\u949f\u5de6\u53f3\u5b8c\u6210\u3002\u8be6\u7ec6\u7684\u90e8\u7f72\u8fc7\u7a0b\uff0c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/3.2/installation-guide/"},"DeepFlow \u5b98\u65b9\u90e8\u7f72\u6587\u6863"),"\u53ca ",(0,a.kt)("a",{parentName:"p",href:"https://deepflow.io/docs/zh/ce-install/all-in-one/"},"APISIX \u5b98\u65b9\u90e8\u7f72\u6587\u6863"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e3a\u4e86\u53d1\u6325 DeepFlow \u57fa\u4e8e eBPF \u7684\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\uff0c\u8bf7\u786e\u4fdd\u670d\u52a1\u5668 Linux \u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u5728 4.14 \u4e4b\u4e0a\u3002")),(0,a.kt)("h2",{id:"2-\u5206\u5e03\u5f0f\u8ffd\u8e2a"},"2. \u5206\u5e03\u5f0f\u8ffd\u8e2a"),(0,a.kt)("p",null,"\u4f7f\u7528 DeepFlow \u5b9e\u73b0 APISIX \u53ca\u540e\u7aef\u670d\u52a1\u7684\u5206\u5e03\u5f0f\u8ffd\u8e2a\u80fd\u529b\u6709\u4e24\u79cd\u65b9\u6848\uff1a\u5229\u7528 eBPF\uff0cDeepFlow \u53ef\u4ee5\u5728\u4e0d\u4fee\u6539 APISIX \u53ca\u540e\u7aef\u670d\u52a1\u914d\u7f6e\u53ca\u4ee3\u7801\u7684\u524d\u63d0\u4e0b\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\u7684 RPC \u7c92\u5ea6\u5206\u5e03\u5f0f\u8ffd\u8e2a\uff1b\u800c\u5f53\u540e\u7aef\u670d\u52a1\u5df2\u5177\u5907 APM\uff08Application Performance Monitoring\uff09 \u80fd\u529b \u2014\u2014 \u6bd4\u5982\u5df2\u7ecf\u4f7f\u7528\u4e86 OpenTelemetry \u6216\u8005 SkyWalking \u7b49\u5de5\u5177\u65f6\uff0c\u53ef\u7ed3\u5408 APISIX \u7684 Tracers \u63d2\u4ef6\uff0c\u5c06\u6240\u6709\u8ffd\u8e2a\u6570\u636e\u7edf\u4e00\u96c6\u6210\u5230 DeepFlow\uff0c\u5b9e\u73b0\u5168\u94fe\u8def\u7684\u5e94\u7528\u51fd\u6570\u7c92\u5ea6\u7684\u5206\u5e03\u5f0f\u8ffd\u8e2a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/hA587UwF_deepflow-2.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h3",{id:"21-\u65b9\u5f0f\u4e00deepflow-ebpf-autotracing"},"2.1 \u65b9\u5f0f\u4e00\uff1aDeepFlow eBPF AutoTracing"),(0,a.kt)("p",null,"DeepFlow \u7684\u5206\u5e03\u5f0f\u8ffd\u8e2a\uff08AutoTracing\uff09\u80fd\u529b\u662f\u5f00\u7bb1\u5373\u7528\u7684\uff0c\u65e0\u9700 APISIX \u5f00\u542f\u4efb\u4f55\u63d2\u4ef6\uff0c\u4ec5\u9700\u8981\u5c06 deepflow-agent \u90e8\u7f72\u5728 APSIX \u6240\u5728\u7684\u670d\u52a1\u5668\u5373\u53ef\u3002\u5728 Grafana \u4e2d\u627e\u5230 DeepFlow \u63d0\u4f9b\u7684 Distributed Tracing Dashboard\uff0c\u5373\u53ef\u5bf9\u67d0\u4e00\u4e2a\u8c03\u7528\u70b9\u51fb\u53d1\u8d77\u8ffd\u8e2a\uff0c\u5e76\u770b\u5230\u8fd9\u4e2a\u8c03\u7528\u5728 APISIX \u53ca\u5176\u540e\u7aef\u670d\u52a1\u4e2d\u7684\u5168\u94fe\u8def\u8ffd\u8e2a\u8fc7\u7a0b\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,"\u2460\uff1a\u901a\u8fc7 nodeport \u7684\u5f62\u5f0f\u8bbf\u95ee\u5230 APISIX \u7f51\u5173\u670d\u52a1\u6240\u5728 K8s Node \u7684\u7aef\u53e3\n\u2461\uff1a\u8fdb\u5165\u5230 APISIX \u7f51\u5173\u670d\u52a1\u6240\u5bf9\u5e94\u7684 POD \u7684\u7f51\u5361\n\u2462\uff1a\u8fdb\u5165\u5230 APISIX \u7f51\u5173\u670d\u52a1\u4e2d\u7684 OpenResty \u8fdb\u7a0b\n\u2463\uff1a\u5b8c\u6210\u4e1a\u52a1\u5904\u7406\uff0c\u7ecf\u7531 OpenResty \u8fdb\u7a0b\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u540e\u7aef\u670d\u52a1\n\u2464\uff1a\u7ecf\u7531 APISIX \u7f51\u5173\u670d\u52a1\u6240\u5bf9\u5e94\u7684 POD \u7f51\u5361\u8f6c\u53d1\n\u2465/\u2466\uff1a\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u540e\u7aef\u670d\u52a1"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/XNkYJZ13_deepflow-3.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h3",{id:"22-\u65b9\u5f0f\u4e8cdeepflow-ebpf--opentelemetry"},"2.2 \u65b9\u5f0f\u4e8c\uff1aDeepFlow eBPF + OpenTelemetry"),(0,a.kt)("p",null,"\u6b64\u65b9\u5f0f\u4e3a APISIX \u5229\u7528 OpenTelemetry \u63d2\u4ef6\u751f\u6210 Trace \u6570\u636e\uff0c\u540e\u7aef\u670d\u52a1\u4e5f\u5177\u5907 APM \u80fd\u529b\u5e76\u4e14\u53ef\u5c06\u751f\u6210\u7684 Trace \u6570\u636e\u8f6c\u5316\u4e3a OpenTelemetry \u683c\u5f0f\u3002\u5f53 APISIX \u4e0e\u540e\u7aef\u670d\u52a1\u90fd\u5c06 Trace \u6570\u636e\u53d1\u9001\u7ed9 DeepFlow \u65f6\uff0cDeepFlow \u80fd\u591f\u751f\u6210\u5305\u542b APM ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528 SPAN"),"\u3001eBPF ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7cfb\u7edf SPAN"),"\u3001cBPF ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7f51\u7edc SPAN")," \u7684\u65e0\u76f2\u70b9\u5168\u6808\u8c03\u7528\u94fe\u8ffd\u8e2a\u706b\u7130\u56fe\u3002"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u5e0c\u671b\u5f97\u5230\u5e94\u7528\u8fdb\u7a0b\u5185\u90e8\u51fd\u6570\u7c92\u5ea6\u7684\u5206\u5e03\u5f0f\u8ffd\u8e2a\u94fe\u8def\uff0c\u6216\u8005\u540e\u7aef\u670d\u52a1\u5728\u5904\u7406\u4e00\u4e2a\u8c03\u7528\u65f6\u4f7f\u7528\u4e86\u7ebf\u7a0b\u6c60\uff08\u4f1a\u5bfc\u81f4 DeepFlow AutoTracing \u65ad\u94fe\uff09\u65f6\uff0c\u53ef\u4ee5\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.2.1 \u90e8\u7f72\u5177\u5907 APM \u80fd\u529b\u7684\u540e\u7aef\u670d\u52a1")),(0,a.kt)("p",null,"\u4e3a\u4e86\u5c55\u793a\u5b8c\u6574\u7684\u8ffd\u8e2a\u6548\u679c\uff0c\u6211\u4eec\u9996\u5148\u5728 APISIX \u7f51\u5173\u540e\u9762\u90e8\u7f72\u4e86\u4e00\u4e2a\u652f\u6301 OpenTelemetry \u80fd\u529b\u7684 Demo \u5e94\u7528\u3002Demo \u5e94\u7528\u7684\u90e8\u7f72\u53ef\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://deepflow.io/docs/zh/integration/input/tracing/opentelemetry/#%E5%9F%BA%E4%BA%8E-spring-boot-demo-%E4%BD%93%E9%AA%8C"},"DeepFlow Demo - \u4e00\u952e\u90e8\u7f72\u57fa\u4e8e Spring Boot \u7f16\u5199\u7684\u4e94\u4e2a\u5fae\u670d\u52a1\u7ec4\u6210\u7684 WebShop \u5e94\u7528"),"\u3002\u5728 APISIX \u4e0a\u521b\u5efa\u8bbf\u95ee\u540e\u7aef\u670d\u52a1\u7684\u8def\u7531\uff0c\u8bbf\u95ee\u57df\u540d\u4e3a apisix.deepflow.demo\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: deepflow-apisix-demo\n  namespace: deepflow-otel-spring-demo\nspec:\n  http:\n    - name: deepflow-apisix-demo\n      match:\n        hosts:\n          - apisix.deepflow.demo\n        paths:\n          - "/*"\n      backends:\n        - serviceName: web-shop\n          servicePort: 18090\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.2.2 \u5728 APSIX \u4e2d\u5f00\u542f OpenTelemetry \u63d2\u4ef6")),(0,a.kt)("p",null,"\u5728 APISIX \u914d\u7f6e\u4e2d\u6dfb\u52a0 opentelemetry plugins\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## vim ./apisix/.values.yaml\nplugins:\n  - opentelemetry\n#...\npluginAttrs:\n  opentelemetry:\n    resource:\n      service.name: APISIX\n    collector:\n      ## \u5c06\u6570\u636e\u4f20\u7ed9 deepflow-agent\n      ## \u5f53\u7136\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u53d1\u7ed9 otel-collector \u8fdb\u884c\u5904\u7406\u540e\uff0c\u518d\u7531 otel-collectorf\u53d1\u9001\u81f3 deepflow-agent\n      address: deepflow-agent.deepflow.svc.cluster.local/api/v1/otel/trace\n      request_timeout: 3\n\n## \u6dfb\u52a0\u540e\u66f4\u65b0 helm upgrade --install -n apisix apisix ./apisix\n")),(0,a.kt)("p",null,"\u9488\u5bf9\u6307\u5b9a\u8def\u7531\u5f00\u542f OpenTelemetry \u529f\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## \u67e5\u770b\u8def\u7531 ID\n## \u627e\u5230\u5bf9\u5e94\u57df\u540d\u7684\u8def\u7531 ID\ncurl -s http://10.109.77.186:9180/apisix/admin/routes -H 'X-API-KEY: \u6b64\u5904\u4e3a apisix-admin token' | jq\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'## \u9488\u5bf9\u5177\u4f53\u8def\u7531\u5f00\u542f otel \u529f\u80fd\ncurl http://10.109.77.186:9180/apisix/admin/routes/\u6b64\u5904\u4e3a\u8def\u7531ID -H \'X-API-KEY: \u6b64\u5904\u4e3a apisix-admin token\' -X PUT -d \'\n{\n    "name": "deepflow-apisix-demo",            ## \u7ed9\u8fd9\u4e2a\u8def\u7531\u914d\u7f6e\u4e2a\u540d\u5b57\n    "methods": ["GET"],\n    "uris": ["/*"],\n    "plugins": {\n        "opentelemetry": {\n            "sampler": {\n                "name": "always_on"\n            },\n            "additional_attributes": [        ## \u53ef\u901a\u8fc7 additional_attributes \u81ea\u5b9a\u4e49 Span \u6807\u7b7e\n                "deepflow=demo"\n            ]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",                 ## RR \u8f6e\u8be2\n        "nodes": {                            ## \u4e0a\u6e38\u5730\u5740\n            "10.1.23.200:18090": 1            ## \u670d\u52a1\u8bbf\u95ee\u5730\u5740:\u4e0a\u6e38\u7f16\u53f7\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.2.3 \u4f7f\u7528 DeepFlow \u96c6\u6210 OpenTelemetry \u8ffd\u8e2a\u6570\u636e")),(0,a.kt)("p",null,"\u901a\u8fc7 DeepFlow Agent \u96c6\u6210 OpenTelemetry \u7684 Span \u6570\u636e\uff0c\u529f\u80fd\u9ed8\u8ba4\u5f00\u542f\uff0c\u65e0\u9700\u989d\u5916\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## \u67e5\u770b deepflow-agent \u9ed8\u8ba4\u914d\u7f6e\n## deepflow-ctl agent-group-config example\n\n## \u8fd9\u4e2a\u53c2\u6570\u63a7\u5236\u662f\u5426\u542f\u63a5\u6536\u5916\u90e8\u6570\u636e\u6e90\uff0c\u5305\u62ec Prometheus Telegraf OpenTelemetry \u548c SkyWalking\n## Data Integration Socket\n## Default: 1. Options: 0 (disabled), 1 (enabled).\n## Note: Whether to enable receiving external data sources such as Prometheus,\n##   Telegraf, OpenTelemetry, and SkyWalking.\n#external_agent_http_proxy_enabled: 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.2.4 OpenTelemetry \u96c6\u6210\u6548\u679c\u5c55\u793a")),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u6761\u8bbf\u95ee WebShop \u670d\u52a1\u7684\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -H "Host: apisix.deepflow.demo" 10.1.23.200:44640/shop/full-test\n## \u6b64\u5904 IP \u4e3a k8s \u96c6\u7fa4\u8282\u70b9 IP\uff0c44640 \u7aef\u53e3\u4e3a APISIX 9180 \u66b4\u9732\u7684 NodePort\n')),(0,a.kt)("p",null,"\u5728 Grafana \u4e2d\u6253\u5f00 DeepFlow \u63d0\u4f9b\u7684 Distributed Tracing Dashboard\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u8c03\u7528\u70b9\u51fb\u53d1\u8d77\u8ffd\u8e2a\uff0c\u80fd\u770b\u5230 APISIX \u4e0e\u540e\u7aef\u670d\u52a1\u90fd\u80fd\u8ffd\u8e2a\u51fa\u6765\uff0c\u4e14 APM \u751f\u6210\u7684\u5e94\u7528 SPAN \u4e0e DeepFlow \u751f\u6210\u7684\u7f51\u7edc SPAN \u53ca\u7cfb\u7edf SPAN \u90fd\u5b8c\u6574\u7684\u5173\u8054\u5728\u4e00\u5f20\u706b\u7130\u56fe\u4e0a\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u706b\u7130\u56fe\u4e2d\u7684 A \u8868\u793a APM \u751f\u6210\u7684\u5e94\u7528 SPAN\uff0cN \u548c S \u8868\u793a DeepFLow \u751f\u6210\u7684\u7f51\u7edc SPAN \u53ca\u7cfb\u7edf SPAN\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/UqbPnqST_deepflow-4.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h2",{id:"3-\u6027\u80fd\u6307\u6807"},"3. \u6027\u80fd\u6307\u6807"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6027\u80fd\u6307\u6807\uff0c\u5728 DeepFlow \u4e2d\u540c\u6837\u80fd\u5f00\u7bb1\u5373\u7528\u67e5\u770b Endpoint \u7c92\u5ea6\u7684 RED\uff08\u541e\u5410\u3001\u65f6\u5ef6\u3001\u5f02\u5e38\uff09\u6027\u80fd\u6307\u6807\uff0c\u4ee5\u53ca\u4e30\u5bcc\u7684 TCP \u7f51\u7edc\u6027\u80fd\u6307\u6807\uff08\u541e\u5410\u3001\u91cd\u4f20\u3001\u96f6\u7a97\u3001\u5efa\u8fde\u5f02\u5e38\u7b49\uff09\u3002\u540c\u6837\uff0cAPISIX \u7684 Metrics \u7c7b\u7684\u63d2\u4ef6 \u2014\u2014 \u6bd4\u5982 Prometheus\u3001node-status \u7b49\u63d2\u4ef6\u83b7\u53d6\u5230\u7684\u5b9e\u4f8b\u3001\u8def\u7531\u7c92\u5ea6\u7684 HTTP \u72b6\u6001\u7801\u3001\u5e26\u5bbd\u3001\u8fde\u63a5\u6570\u3001\u65f6\u5ef6\u7b49\u6307\u6807\u6570\u636e\uff0c\u53ef\u96c6\u6210\u5230 DeepFlow \u4e2d\uff0c\u5e76\u5728 APISIX \u63d0\u4f9b\u7684 Grafana Dashboard \u4e2d\u67e5\u770b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/moFwGgPH_deepflow-5.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h3",{id:"31-\u5f00\u7bb1\u5373\u7528\u7684-ebpf-\u6027\u80fd\u6307\u6807"},"3.1 \u5f00\u7bb1\u5373\u7528\u7684 eBPF \u6027\u80fd\u6307\u6807"),(0,a.kt)("p",null,"\u5728 APISIX \u6240\u5728\u7684\u670d\u52a1\u5668\u4e0a\u90e8\u7f72 deepflow-agent \u540e\uff0c\u53ef\u81ea\u52a8\u91c7\u96c6\u5e94\u7528\u53ca\u7f51\u7edc\u5c42\u9762\u975e\u5e38\u7ec6\u7c92\u5ea6\u7684\u6307\u6807\u91cf\uff0c\u4f8b\u5982\u7cbe\u7ec6\u5230\u67d0\u4e2a\u5ba2\u6237\u7aef\u3001\u67d0\u4e2a Endpoint \u7684\u8bf7\u6c42\u901f\u7387\u3001\u54cd\u5e94\u65f6\u5ef6\u3001\u5f02\u5e38\u72b6\u6001\uff1b\u67d0\u4e00\u6b21 TCP \u5efa\u8fde\u65f6\u5ef6\uff0c\u5efa\u8fde\u5f02\u5e38\u7b49\u7b49\u3002\u8be6\u7ec6\u7684\u6307\u6807\u91cf\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://deepflow.io/docs/zh/features/universal-map/metrics-and-operators/"},"DeepFlow \u5b98\u7f51\u5173\u4e8e\u6307\u6807\u91cf\u7684\u4ecb\u7ecd"),"\u3002\u5728 Grafana \u4e2d\u6253\u5f00 DeepFlow \u63d0\u4f9b\u7684 Applicaiton - xxx Ingress  Dashboard\uff0c\u53ef\u67e5\u770b APISIX \u76f8\u5173\u7684\u5e94\u7528\u5c42\u6027\u80fd\u6307\u6807\uff0c\u5728 Network xxx Dashboard \u4e2d\u53ef\u67e5\u770b\u7f51\u7edc\u76f8\u5173\u7684\u6307\u6807\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/lbVMAzAa_deepflow-6.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/3615sk3K_deepflow-7.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h3",{id:"32-\u5728-apisix-\u4e2d\u5f00\u542f-prometheus-\u63d2\u4ef6"},"3.2 \u5728 APISIX \u4e2d\u5f00\u542f Prometheus \u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728 APISIX \u914d\u7f6e\u4e2d\u6dfb\u52a0 Prometheus \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## vim ./apisix/.values.yaml\nplugins:\n  - prometheus\n# ...\npluginAttrs:\n  prometheus:\n    export_uri: /metrics    ## \u9ed8\u8ba4 uri \u4e3a /apisix/prometheus/metrics\n    export_addr:\n      ip: 0.0.0.0           ## \u6293\u53d6\u5730\u5740\n      port: 9091            ## \u9ed8\u8ba4\u7aef\u53e3 9091\n    metrics:\n      http_status:          ## \u5177\u4f53\u4f5c\u7528\u5728 apisix_http_status \u6307\u6807\u4e2d\n        extra_labels:       ## \u6dfb\u52a0\u989d\u5916\u5185\u5bb9\n          - upstream_addr: $upstream_addr        ## \u4f8b\u5982\u6b64\u5904\u6dfb\u52a0\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\u5668\u5730\u5740(\u6b64\u5904\u7684\u53d8\u91cf\u662fNGINX\u53d8\u91cf)\n          - upstream_status: $upstream_status    ## \u4f8b\u5982\u6b64\u5904\u6dfb\u52a0\u4e00\u4e2a\u4e0a\u6e38\u670d\u52a1\u5668\u72b6\u6001(\u6b64\u5904\u7684\u53d8\u91cf\u662fNGINX\u53d8\u91cf)\n                                                 ## APISIX \u81ea\u5e26\u53d8\u91cf\uff1ahttps://apisix.apache.org/docs/apisix/3.2/apisix-variable/\n                                                 ## NGINX \u81ea\u5e26\u53d8\u91cf\uff1ahttps://nginx.org/en/docs/varindex.html\n")),(0,a.kt)("p",null,"\u542f\u7528 Prometheus \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'## \u6ce8\uff1a\u4e0a\u9762\u542f\u7528\u4e86 otel \u529f\u80fd\uff0c\u6240\u4ee5\u6b64\u5904\u8981\u5728\u542f\u7528 otel \u7684\u57fa\u7840\u4e0a\u5f00\u542f prometheus\n\ncurl http://10.109.77.186:9180/apisix/admin/routes/\u6b64\u5904\u4e3a\u8def\u7531ID -H \'X-API-KEY: \u6b64\u5904\u4e3a apisix-admin token\' -X PUT -d \'\n{\n    "name": "deepflow-apisix-demo",       ## \u7ed9\u8fd9\u4e2a\u8def\u7531\u914d\u7f6e\u4e2a\u540d\u5b57\n    "methods": ["GET"],\n    "uris": ["/*"],\n    "plugins": {\n        "prometheus":{                    ## \u542f\u7528 prometheus\n            "prefer_name": true           ## \u4e3a"true"\u65f6\uff0cPrometheus \u6307\u6807\u4e2d\uff0c\u6253\u5370\u8def\u7531/\u670d\u52a1\u540d\u79f0\u800c\u4e0d\u662f ID\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.1.23.200:18090": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h3",{id:"33-\u4f7f\u7528-prometheus-\u62c9\u53d6-apisix-\u6307\u6807\u6570\u636e"},"3.3 \u4f7f\u7528 Prometheus \u62c9\u53d6 APISIX \u6307\u6807\u6570\u636e"),(0,a.kt)("p",null,"Prometheus \u91c7\u96c6 APISIX metrics\uff08\u6b64\u5904\u4ee5 Prometheus CRD \u90e8\u7f72\u65b9\u5f0f\u4e3e\u4f8b\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'## ServiceMonitor \u65b9\u5f0f\u91c7\u96c6 (Prometheus \u4ee5 CRD \u5f62\u5f0f\u90e8\u7f72\u5728 k8s \u4e2d)\n## APISIX values.yaml \u6587\u4ef6\u4e2d\u63d0\u4f9b\u4e86\u5bf9\u5e94\u6a21\u5757\nserviceMonitor:\n  ## \u662f\u5426\u542f\u7528\n  enabled: true\n  ## \u521b\u5efa\u5728\u54ea\u4e2a\u547d\u540d\u7a7a\u95f4\n      namespace: "apisix"\n  ## servicemonitor \u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a fullname\n  name: ""\n  ## \u6293\u53d6\u95f4\u9694\n  interval: 15s\n  ## metrics \u66b4\u9732\u7684 uri\n  path: /metrics\n  ## \u7ed9\u6293\u53d6\u5230\u7684\u6307\u6807\u6dfb\u52a0\u524d\u7f00\n  metricPrefix: apisix_\n  ## \u6293\u53d6\u7aef\u53e3\n  containerPort: 9091\n  ## \u6dfb\u52a0 labels\n  labels:\n    ## \u6b64\u6b21\u4f7f\u7528\u9879\u76ee\u4e3a kube-prometheus\uff0c\u4f7f\u7528\u6b64\u6807\u7b7e\u4f7f kube-prometheus \u8bc6\u522b servicemonitor\n    app.kubernetes.io/part-of: kube-prometheus\n  annotations: {}\n')),(0,a.kt)("p",null,"\u6b64\u65f6\u9700\u8981\u4e00\u4e2a Prometheus \u540e\u7aef\u670d\u52a1\u7528\u4e8e\u91c7\u96c6 APISIX \u63d2\u4ef6\u751f\u6210\u7684\u6307\u6807\uff0c\u6240\u4ee5\u9700\u8981\u5148\u90e8\u7f72\u4e00\u4e2a prometheus-server\u3002\u4f46\u5b9e\u9645\u4e0a\u7531\u4e8e\u4e0d\u4f9d\u8d56 prometheus-server \u5b58\u50a8\u8fd9\u4e9b\u6307\u6807\uff0c\u56e0\u6b64\u53ef\u4ee5\u90e8\u7f72\u4e00\u4e2a Agent Mode \u7684 prometheus-server\uff0c\u6216\u8005\u4f7f\u7528\u66f4\u52a0\u8f7b\u91cf\u7ea7\u7684 grafana-agent \u66ff\u4ee3 prometheus-server\u3002\u5047\u8bbe\u5df2\u7ecf\u90e8\u7f72\u4e86 prometheus-server\uff0c\u5f00\u542f RemoteWrite \u53ef\u5c06\u6307\u6807\u6570\u636e\u53d1\u9001\u7ed9 DeepFlow\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'## https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write\n## https://deepflow.io/docs/zh/integration/input/metrics/prometheus/#\u914d\u7f6e-remote-write\n\n## kube-prometheus \u65b9\u5f0f\u53d1\u9001\u81f3 DeepFlow (yaml \u6e05\u5355\u4e2d\u6dfb\u52a0\u8fdc\u7a0b\u5199\u5165)\napiVersion: monitoring.coreos.com/v1\nkind: Prometheus\nmetadata:\n  labels:\n    ...\n  name: k8s\n  namespace: monitoring\nspec:\n  enableRemoteWriteReceiver: true\n  remoteWrite:\n    ## \u6ce8\uff1a\u6b64\u5904\u4e3a deepflow-agent svc \u5730\u5740\uff0c\u8981\u6309\u5b9e\u9645\u4f4d\u7f6e\u5199\n    - url: "http://deepflow-agent.deepflow.svc.cluster.local/api/v1/prometheus"\n')),(0,a.kt)("h3",{id:"34-\u4f7f\u7528-deepflow-\u96c6\u6210-prometheus-\u6307\u6807\u6570\u636e"},"3.4 \u4f7f\u7528 DeepFlow \u96c6\u6210 Prometheus \u6307\u6807\u6570\u636e"),(0,a.kt)("p",null,"\u901a\u8fc7 DeepFlow Agent \u96c6\u6210 Prometheus \u6307\u6807\u6570\u636e\uff0c\u529f\u80fd\u9ed8\u8ba4\u5f00\u542f\uff0c\u65e0\u9700\u989d\u5916\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## \u67e5\u770b deepflow-agent \u9ed8\u8ba4\u914d\u7f6e\n## deepflow-ctl agent-group-config example\n\n## \u8fd9\u4e2a\u53c2\u6570\u63a7\u5236\u662f\u5426\u542f\u63a5\u6536\u5916\u90e8\u6570\u636e\u6e90\uff0c\u5305\u62ec Prometheus Telegraf OpenTelemetry \u548c SkyWalking\n## Data Integration Socket\n## Default: 1. Options: 0 (disabled), 1 (enabled).\n## Note: Whether to enable receiving external data sources such as Prometheus,\n##   Telegraf, OpenTelemetry, and SkyWalking.\n#external_agent_http_proxy_enabled: 1\n")),(0,a.kt)("h3",{id:"35-prometheus-\u96c6\u6210\u6548\u679c\u5c55\u793a"},"3.5 Prometheus \u96c6\u6210\u6548\u679c\u5c55\u793a"),(0,a.kt)("p",null,"\u7531\u4e8e DeepFlow \u652f\u6301 PromQL\uff0c\u53ea\u9700\u8981\u5c06 Grafana \u4e2d APISIX \u63d0\u4f9b\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/assets/other/json/apisix-grafana-dashboard.json"},"Grafana Dashboard")," \u7684\u6570\u636e\u6e90\u6539\u4e3a DeepFlow\uff0c\u5373\u53ef\u67e5\u770b APISIX \u539f\u751f\u7684\u4e30\u5bcc\u6027\u80fd\u6307\u6807\u4e86\uff0c\u6307\u6807\u7684\u4f7f\u7528\u8bf4\u660e\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus/"},"\u5b98\u65b9\u6587\u6863\u4e2d\u5173\u4e8e Prometheus \u63d2\u4ef6\u7684\u8bf4\u660e"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/3S4sUpX2_deepflow-8.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h2",{id:"4-\u8bbf\u95ee\u65e5\u5fd7\u548c\u6301\u7eed\u5256\u6790"},"4. \u8bbf\u95ee\u65e5\u5fd7\u548c\u6301\u7eed\u5256\u6790"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/7KO1FcJL_deepflow-8.1.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("p",null,"\u5bf9\u4e8e\u8bbf\u95ee\u65e5\u5fd7\uff0c\u6b64\u65f6\u65e0\u9700 APISIX \u505a\u4ec0\u4e48\u4fee\u6539\uff0c\u4ec5\u9700\u8981\u5c06 deepflow-agent \u90e8\u7f72\u5728 APSIX \u6240\u5728\u7684\u670d\u52a1\u5668\u5373\u53ef\uff0c\u5728 Grafana \u4e2d\u6253\u5f00 DeepFlow \u63d0\u4f9b\u7684 Application - Request Log Dashboard \u5373\u53ef\u67e5\u770b\u8bbf\u95ee\u65e5\u5fd7\uff0c\u5305\u542b\u4e86 Request \u53ca Response \u4e2d header \u4fe1\u606f\uff0c\u5e76\u53ef\u5206\u6790\u6bcf\u4e00\u6b21\u8bf7\u6c42\u7684\u54cd\u5e94\u65f6\u5ef6\u548c\u9519\u8bef\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/4bOa7VKs_deepflow-9.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("p",null,"DeepFlow \u8fd8\u901a\u8fc7 eBPF \u83b7\u53d6\u5e94\u7528\u7a0b\u5e8f\u7684\u51fd\u6570\u8c03\u7528\u6808\u5feb\u7167\uff08\u4f01\u4e1a\u7248\u529f\u80fd\uff09\uff0c\u53ef\u7ed8\u5236 APISIX \u8fdb\u7a0b\u7684 On-CPU Profile\uff0c\u51fd\u6570\u8c03\u7528\u6808\u4e2d\u9664\u4e86\u5305\u542b\u4e1a\u52a1\u51fd\u6570\u4ee5\u5916\uff0c\u8fd8\u53ef\u5c55\u73b0\u52a8\u6001\u94fe\u63a5\u5e93\u3001\u5185\u6838\u7cfb\u7edf\u8c03\u7528\u51fd\u6570\u7684\u8017\u65f6\u60c5\u51b5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/02/07/KveTMwaQ_deepflow-10.jpeg",alt:"Integrating APISIX with DeepFlow"})),(0,a.kt)("h2",{id:"5-\u4ec0\u4e48\u662f-apisix"},"5. \u4ec0\u4e48\u662f APISIX"),(0,a.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684\u5f00\u6e90 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002Apache APISIX \u57fa\u4e8e NGINX \u548c LuaJIT \u6784\u5efa\uff0c\u5177\u6709\u8d85\u9ad8\u6027\u80fd\uff0c\u5355\u6838 QPS \u9ad8\u8fbe 23000\uff0c\u5e73\u5747\u5ef6\u8fdf\u4ec5\u4e3a 0.2 \u6beb\u79d2\u3002"),(0,a.kt)("p",null,"Apache APISIX \u7684\u5e94\u7528\u573a\u666f\u975e\u5e38\u5e7f\u6cdb\uff0c\u53ef\u5e94\u7528\u4e8e API \u7f51\u5173\u3001Kubernetes Ingress \u548c\u670d\u52a1\u7f51\u683c\u7b49\u573a\u666f\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5feb\u901f\u3001\u5b89\u5168\u5730\u5904\u7406 API \u548c\u5fae\u670d\u52a1\u6d41\u91cf\u3002\u76ee\u524d\u5df2\u83b7\u5f97 Zoom\u3001Airwallex\u3001Lotus Cars\u3001vivo\u3001\u6b27\u6d32\u6570\u5b57\u5de5\u5382\u7b49\u5168\u7403\u4f01\u4e1a\u548c\u7ec4\u7ec7\u7684\u6d4b\u8bd5\u548c\u9ad8\u5ea6\u8ba4\u53ef\u3002"),(0,a.kt)("p",null,"Apache APISIX \u4e8e 2019 \u5e74\u5f00\u6e90\u5e76\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai")," \u6350\u8d60\u7ed9 Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\uff0c\u76ee\u524d\u662f GitHub \u4e0a\u6700\u6d3b\u8dc3\u7684 API \u7f51\u5173\u9879\u76ee\uff0c\u6bcf\u5929\u5904\u7406\u8d85\u4e07\u4ebf\u6b21\u7684 API \u8c03\u7528\uff0c\u5e76\u4e14\u8fd9\u4e00\u6570\u5b57\u4ecd\u5728\u589e\u957f\u3002"),(0,a.kt)("p",null,"GitHub \u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"https://github.com/apache/apisix")),(0,a.kt)("h2",{id:"6-\u4ec0\u4e48\u662f-deepflow"},"6. \u4ec0\u4e48\u662f DeepFlow"),(0,a.kt)("p",null,"DeepFlow \u662f\u4e91\u6749\u7f51\u7edc\u5f00\u53d1\u7684\u4e00\u6b3e\u53ef\u89c2\u6d4b\u6027\u4ea7\u54c1\uff0c\u65e8\u5728\u4e3a\u590d\u6742\u7684\u4e91\u57fa\u7840\u8bbe\u65bd\u53ca\u4e91\u539f\u751f\u5e94\u7528\u63d0\u4f9b\u6df1\u5ea6\u53ef\u89c2\u6d4b\u6027\u3002DeepFlow \u57fa\u4e8e eBPF \u5b9e\u73b0\u4e86\u5e94\u7528\u6027\u80fd\u6307\u6807\u3001\u5206\u5e03\u5f0f\u8ffd\u8e2a\u3001\u6301\u7eed\u6027\u80fd\u5256\u6790\u7b49\u89c2\u6d4b\u4fe1\u53f7\u7684\u96f6\u4fb5\u6270\uff08Zero Code\uff09\u91c7\u96c6\uff0c\u5e76\u7ed3\u5408\u667a\u80fd\u6807\u7b7e\uff08SmartEncoding\uff09\u6280\u672f\u5b9e\u73b0\u4e86\u6240\u6709\u89c2\u6d4b\u4fe1\u53f7\u7684\u5168\u6808\uff08Full Stack\uff09\u5173\u8054\u548c\u9ad8\u6548\u5b58\u53d6\u3002\u4f7f\u7528 DeepFlow\uff0c\u53ef\u4ee5\u8ba9\u4e91\u539f\u751f\u5e94\u7528\u81ea\u52a8\u5177\u6709\u6df1\u5ea6\u53ef\u89c2\u6d4b\u6027\uff0c\u4ece\u800c\u6d88\u9664\u5f00\u53d1\u8005\u4e0d\u65ad\u63d2\u6869\u7684\u6c89\u91cd\u8d1f\u62c5\uff0c\u5e76\u4e3a DevOps/SRE \u56e2\u961f\u63d0\u4f9b\u4ece\u4ee3\u7801\u5230\u57fa\u7840\u8bbe\u65bd\u7684\u76d1\u63a7\u53ca\u8bca\u65ad\u80fd\u529b\u3002"),(0,a.kt)("p",null,"GitHub \u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/deepflowio/deepflow"},"https://github.com/deepflowio/deepflow")),(0,a.kt)("p",null,"\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://deepflow.io/docs/zh/ce-install/overview/"},"DeepFlow Demo"),"\uff0c\u4f53\u9a8c\u96f6\u63d2\u6869\u3001\u5168\u8986\u76d6\u3001\u5168\u5173\u8054\u7684\u53ef\u89c2\u6d4b\u6027\u3002"))}m.isMDXComponent=!0}}]);