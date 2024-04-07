"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[62699],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(a),h=n,d=m["".concat(c,".").concat(h)]||m[h]||s[h]||i;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(25773),n=(a(27378),a(35318));const i={title:"Apache APISIX 3.2.2 \u6b63\u5f0f\u53d1\u5e03",authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://avatars.githubusercontent.com/u/79972061?v=4"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://avatars.githubusercontent.com/u/39619599?v=4"}],keywords:["Apache APISIX","API Gateway","API Management Platform","New Release","Cloud Native"],description:"Apache APISIX 3.2.2 \u7248\u672c\u4e8e 2023 \u5e74 7 \u6708 23 \u65e5\u53d1\u5e03\u3002\u6b64\u7248\u672c\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u7684\u4fee\u590d\u548c\u4f18\u5316\u3002",tags:["Community"]},l=void 0,p={permalink:"/zh/blog/2023/07/23/release-apache-apisix-3.2.2",source:"@site/blog/2023/07/23/release-apache-apisix-3.2.2.md",title:"Apache APISIX 3.2.2 \u6b63\u5f0f\u53d1\u5e03",description:"Apache APISIX 3.2.2 \u7248\u672c\u4e8e 2023 \u5e74 7 \u6708 23 \u65e5\u53d1\u5e03\u3002\u6b64\u7248\u672c\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u7684\u4fee\u590d\u548c\u4f18\u5316\u3002",date:"2023-07-23T00:00:00.000Z",formattedDate:"2023\u5e747\u670823\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:1.845,truncated:!0,authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://avatars.githubusercontent.com/u/79972061?v=4",imageURL:"https://avatars.githubusercontent.com/u/79972061?v=4"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://avatars.githubusercontent.com/u/39619599?v=4",imageURL:"https://avatars.githubusercontent.com/u/39619599?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (7.17 - 7.30)",permalink:"/zh/blog/2023/08/02/weekly-report"},nextItem:{title:"Apache APISIX 3.4.1 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2023/07/21/release-apache-apisix-3.4.1"}},c={authorsImageUrls:[void 0,void 0]},o=[{value:"\u4fee\u590d",id:"\u4fee\u590d",children:[{value:"\u5347\u7ea7 <code>lua-resty-jwt</code> \u4f9d\u8d56\u7248\u672c",id:"\u5347\u7ea7-lua-resty-jwt-\u4f9d\u8d56\u7248\u672c",children:[],level:3},{value:"etcd \u4f18\u5316",id:"etcd-\u4f18\u5316",children:[],level:3},{value:"\u4fee\u590d <code>opentelemetry</code> \u548c <code>grpc-transcode</code> \u63d2\u4ef6\u540c\u65f6\u4f7f\u7528\u65f6\u7684\u95ee\u9898",id:"\u4fee\u590d-opentelemetry-\u548c-grpc-transcode-\u63d2\u4ef6\u540c\u65f6\u4f7f\u7528\u65f6\u7684\u95ee\u9898",children:[],level:3},{value:"\u4fee\u590d\u4f7f\u7528\u57df\u540d\u8282\u70b9\u914d\u7f6e\u4e0a\u6e38\u8282\u70b9\u65f6\u7684\u5065\u5eb7\u68c0\u67e5\u6cc4\u6f0f\u95ee\u9898",id:"\u4fee\u590d\u4f7f\u7528\u57df\u540d\u8282\u70b9\u914d\u7f6e\u4e0a\u6e38\u8282\u70b9\u65f6\u7684\u5065\u5eb7\u68c0\u67e5\u6cc4\u6f0f\u95ee\u9898",children:[],level:3},{value:"\u4fee\u590d <code>wolf-rbac</code> \u63d2\u4ef6\u4e0e\u5176\u4ed6\u63d2\u4ef6\u4e00\u540c\u4f7f\u7528\u5728 consumer \u4e0a\u7684\u95ee\u9898",id:"\u4fee\u590d-wolf-rbac-\u63d2\u4ef6\u4e0e\u5176\u4ed6\u63d2\u4ef6\u4e00\u540c\u4f7f\u7528\u5728-consumer-\u4e0a\u7684\u95ee\u9898",children:[],level:3},{value:"\u4fee\u590d\u5728\u8d1f\u8f7d\u5747\u8861\u4e2d\u4f7f\u7528 <code>mqtt_client_id</code> \u4f5c\u4e3a key \u7684\u95ee\u9898",id:"\u4fee\u590d\u5728\u8d1f\u8f7d\u5747\u8861\u4e2d\u4f7f\u7528-mqtt_client_id-\u4f5c\u4e3a-key-\u7684\u95ee\u9898",children:[],level:3},{value:"\u4fee\u590d <code>traffic-split</code> \u63d2\u4ef6\u4e2d\u7684\u4e3b\u673a\u540d\u89e3\u6790\u95ee\u9898",id:"\u4fee\u590d-traffic-split-\u63d2\u4ef6\u4e2d\u7684\u4e3b\u673a\u540d\u89e3\u6790\u95ee\u9898",children:[],level:3}],level:2},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",children:[],level:2}],u={toc:o};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u4ecb\u7ecd Apache APISIX 3.2.2\u3002\u6b64\u7248\u672c\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u7684\u4fee\u590d\u548c\u4f18\u5316\u3002"),(0,n.kt)("h2",{id:"\u4fee\u590d"},"\u4fee\u590d"),(0,n.kt)("h3",{id:"\u5347\u7ea7-lua-resty-jwt-\u4f9d\u8d56\u7248\u672c"},"\u5347\u7ea7 ",(0,n.kt)("inlineCode",{parentName:"h3"},"lua-resty-jwt")," \u4f9d\u8d56\u7248\u672c"),(0,n.kt)("p",null,"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"lua-resty-jwt")," \u7684\u4f9d\u8d56\u7248\u672c\u4ece ",(0,n.kt)("inlineCode",{parentName:"p"},"0.2.4")," \u5347\u7ea7\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"0.2.5"),"\uff0c\u907f\u514d APISIX ",(0,n.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u4e2d\u8eab\u4efd\u9a8c\u8bc1\u7ed5\u8fc7\u7684\u5b89\u5168\u98ce\u9669\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9837"},"PR #9837"),")"),(0,n.kt)("h3",{id:"etcd-\u4f18\u5316"},"etcd \u4f18\u5316"),(0,n.kt)("p",null,"\u652f\u6301\u5355\u4e2a HTTP \u957f\u8fde\u63a5\u76d1\u542c etcd \u7684\u5168\u90e8\u8d44\u6e90\uff0c\u8be5\u4f18\u5316\u964d\u4f4e\u4e86\u8bbf\u95ee etcd \u7684\u8d44\u6e90\u635f\u8017\uff0c\u4f7f watch \u6027\u80fd\u53ef\u8fbe\u5230 \u4e0e gRPC \u4e00\u6837\u7684\u6548\u679c\u3002\uff08",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9456"},"PR \uff039456"),"\uff09"),(0,n.kt)("p",null,"\u4e3a etcd calls \u542f\u7528 keep-alive \u8fde\u63a5\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9420"},"PR #9420"),")"),(0,n.kt)("h3",{id:"\u4fee\u590d-opentelemetry-\u548c-grpc-transcode-\u63d2\u4ef6\u540c\u65f6\u4f7f\u7528\u65f6\u7684\u95ee\u9898"},"\u4fee\u590d ",(0,n.kt)("inlineCode",{parentName:"h3"},"opentelemetry")," \u548c ",(0,n.kt)("inlineCode",{parentName:"h3"},"grpc-transcode")," \u63d2\u4ef6\u540c\u65f6\u4f7f\u7528\u65f6\u7684\u95ee\u9898"),(0,n.kt)("p",null,"\u4fee\u590d opentelemetry \u548c grpc-transcode \u63d2\u4ef6\u540c\u65f6\u4f7f\u7528\u65f6\u51fa\u73b0\u7684\u9519\u8bef\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9606"},"PR #9606"),")"),(0,n.kt)("h3",{id:"\u4fee\u590d\u4f7f\u7528\u57df\u540d\u8282\u70b9\u914d\u7f6e\u4e0a\u6e38\u8282\u70b9\u65f6\u7684\u5065\u5eb7\u68c0\u67e5\u6cc4\u6f0f\u95ee\u9898"},"\u4fee\u590d\u4f7f\u7528\u57df\u540d\u8282\u70b9\u914d\u7f6e\u4e0a\u6e38\u8282\u70b9\u65f6\u7684\u5065\u5eb7\u68c0\u67e5\u6cc4\u6f0f\u95ee\u9898"),(0,n.kt)("p",null,"\u4fee\u590d\u5f53\u4f7f\u7528\u57df\u540d\u8282\u70b9\u914d\u7f6e\u4e0a\u6e38\u8282\u70b9\u65f6\uff0c\u5065\u5eb7\u68c0\u67e5\u4e2d\u51fa\u73b0\u7684\u5185\u5b58\u6cc4\u6f0f\u95ee\u9898\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9090"},"PR #9090"),")"),(0,n.kt)("h3",{id:"\u4fee\u590d-wolf-rbac-\u63d2\u4ef6\u4e0e\u5176\u4ed6\u63d2\u4ef6\u4e00\u540c\u4f7f\u7528\u5728-consumer-\u4e0a\u7684\u95ee\u9898"},"\u4fee\u590d ",(0,n.kt)("inlineCode",{parentName:"h3"},"wolf-rbac")," \u63d2\u4ef6\u4e0e\u5176\u4ed6\u63d2\u4ef6\u4e00\u540c\u4f7f\u7528\u5728 consumer \u4e0a\u7684\u95ee\u9898"),(0,n.kt)("p",null,"\u4fee\u590d ",(0,n.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," \u63d2\u4ef6\u5728 consumer \u4e0a\u4f7f\u7528\u65f6\uff0c\u5bfc\u81f4 consumer \u4e0a\u7684\u5176\u4ed6\u63d2\u4ef6\u65e0\u6548\u7684\u95ee\u9898\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9298"},"PR #9298"),")"),(0,n.kt)("h3",{id:"\u4fee\u590d\u5728\u8d1f\u8f7d\u5747\u8861\u4e2d\u4f7f\u7528-mqtt_client_id-\u4f5c\u4e3a-key-\u7684\u95ee\u9898"},"\u4fee\u590d\u5728\u8d1f\u8f7d\u5747\u8861\u4e2d\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"h3"},"mqtt_client_id")," \u4f5c\u4e3a key \u7684\u95ee\u9898"),(0,n.kt)("p",null,"\u4fee\u590d\u5728\u4e0a\u6e38\u8d1f\u8f7d\u5747\u8861\u4e2d\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"mqtt_client_id")," \u4f5c\u4e3a key \u7684\u76f8\u5173\u95ee\u9898\u3002(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9450"},"PR #9450"),")"),(0,n.kt)("h3",{id:"\u4fee\u590d-traffic-split-\u63d2\u4ef6\u4e2d\u7684\u4e3b\u673a\u540d\u89e3\u6790\u95ee\u9898"},"\u4fee\u590d ",(0,n.kt)("inlineCode",{parentName:"h3"},"traffic-split")," \u63d2\u4ef6\u4e2d\u7684\u4e3b\u673a\u540d\u89e3\u6790\u95ee\u9898"),(0,n.kt)("p",null,"\u4fee\u590d ",(0,n.kt)("inlineCode",{parentName:"p"},"traffic-split")," \u63d2\u4ef6\u4e2d\u914d\u7f6e\u7684\u57df\u540d\u53ea\u89e3\u6790\u4e00\u6b21\u7684\u95ee\u9898\u3002 (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9332"},"PR #9332"),")"),(0,n.kt)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,n.kt)("p",null,"\u6709\u5173\u6b64\u7248\u672c\u4e2d\u5305\u542b\u7684\u6240\u6709\u66f4\u65b0\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/release/3.2/CHANGELOG.md#322"},"CHANGELOG"),"."))}s.isMDXComponent=!0}}]);