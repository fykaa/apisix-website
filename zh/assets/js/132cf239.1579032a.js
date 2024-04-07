"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[85406],{35318:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(k,p(p({ref:t},o),{},{components:n})):a.createElement(k,p({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(25773),l=(n(27378),n(35318));const r={title:"Apache APISIX 3.1.0 \u6b63\u5f0f\u53d1\u5e03",authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","\u63d2\u4ef6\u914d\u7f6e","\u5b89\u5168","gRPC","Consul"],description:"Apache APISIX 3.1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u5f88\u591a\u5173\u4e8e\u5b89\u5168\u5c42\u9762\u7684\u529f\u80fd\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u5185\u7f6e\u8c03\u8bd5\u63d2\u4ef6\uff0c\u65e8\u5728\u4f18\u5316\u5bf9 APISIX \u7684\u4f7f\u7528\u4f53\u9a8c\u3002",tags:["Community"]},p=void 0,i={permalink:"/zh/blog/2022/12/30/release-apache-apisix-3.1.0",source:"@site/blog/2022/12/30/release-apache-apisix-3.1.0.md",title:"Apache APISIX 3.1.0 \u6b63\u5f0f\u53d1\u5e03",description:"Apache APISIX 3.1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u5f88\u591a\u5173\u4e8e\u5b89\u5168\u5c42\u9762\u7684\u529f\u80fd\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u5185\u7f6e\u8c03\u8bd5\u63d2\u4ef6\uff0c\u65e8\u5728\u4f18\u5316\u5bf9 APISIX \u7684\u4f7f\u7528\u4f53\u9a8c\u3002",date:"2022-12-30T00:00:00.000Z",formattedDate:"2022\u5e7412\u670830\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:9.07,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png",imageURL:"https://github.com/spacewander.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"2022 Apache APISIX \u5e74\u5ea6\u8bb0\u5fc6",permalink:"/zh/blog/2023/01/02/2022-summary"},nextItem:{title:"APISIX Ingress + Flagger \u5b9e\u73b0\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03",permalink:"/zh/blog/2022/12/27/apisix-ingress-with-Flagger"}},u={authorsImageUrls:[void 0,void 0]},c=[{value:"\u65b0\u7279\u6027\uff1a\u63d2\u4ef6\u914d\u7f6e\u7684\u52a0\u5bc6\u5b58\u50a8",id:"\u65b0\u7279\u6027\u63d2\u4ef6\u914d\u7f6e\u7684\u52a0\u5bc6\u5b58\u50a8",children:[],level:2},{value:"\u65b0\u7279\u6027\uff1a\u5c06\u654f\u611f\u4fe1\u606f\u5b58\u50a8\u5728\u5916\u90e8\u5b89\u5168\u670d\u52a1",id:"\u65b0\u7279\u6027\u5c06\u654f\u611f\u4fe1\u606f\u5b58\u50a8\u5728\u5916\u90e8\u5b89\u5168\u670d\u52a1",children:[{value:"\u76f8\u5173\u793a\u4f8b",id:"\u76f8\u5173\u793a\u4f8b",children:[{value:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8",id:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8",children:[],level:4},{value:"\u57fa\u4e8e Vault \u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8",id:"\u57fa\u4e8e-vault-\u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8",children:[],level:4}],level:3}],level:2},{value:"\u65b0\u7279\u6027\uff1a\u5b9e\u9a8c\u6027\u57fa\u4e8e gRPC \u7684 etcd \u914d\u7f6e\u540c\u6b65",id:"\u65b0\u7279\u6027\u5b9e\u9a8c\u6027\u57fa\u4e8e-grpc-\u7684-etcd-\u914d\u7f6e\u540c\u6b65",children:[],level:2},{value:"\u65b0\u7279\u6027\uff1a\u57fa\u4e8e Consul \u7684\u670d\u52a1\u53d1\u73b0",id:"\u65b0\u7279\u6027\u57fa\u4e8e-consul-\u7684\u670d\u52a1\u53d1\u73b0",children:[],level:2},{value:"\u65b0\u7279\u6027\uff1a\u5185\u7f6e\u7684\u8c03\u8bd5\u63d2\u4ef6",id:"\u65b0\u7279\u6027\u5185\u7f6e\u7684\u8c03\u8bd5\u63d2\u4ef6",children:[],level:2},{value:"\u65b0\u529f\u80fd\uff1a\u4f18\u5316\u4ee5\u53ca\u66f4\u591a\u5c0f\u529f\u80fd",id:"\u65b0\u529f\u80fd\u4f18\u5316\u4ee5\u53ca\u66f4\u591a\u5c0f\u529f\u80fd",children:[],level:2}],o={toc:c};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apache APISIX 3.1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u5f88\u591a\u5173\u4e8e\u5b89\u5168\u5c42\u9762\u7684\u529f\u80fd\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u5185\u7f6e\u8c03\u8bd5\u63d2\u4ef6\uff0c\u65e8\u5728\u4f18\u5316\u5bf9 APISIX \u7684\u4f7f\u7528\u4f53\u9a8c\u3002")),(0,l.kt)("p",null,"\u65f6\u9694\u4e00\u4e2a\u6708\uff0c\u65b0\u7248\u672c\u53c8\u6765\u4e86\u3002\u8fd9\u6b21\u7684 APISIX 3.1.0 \u662f 3.0 \u5927\u7248\u672c\u4ee5\u6765\u7684\u7b2c\u4e00\u4e2a\u65b0\u7248\u672c\uff0c\u5728 3.x \u7684\u65b0\u65f6\u4ee3\u91cc\uff0c\u6211\u4eec\u4e00\u5982\u65e2\u5f80\u5730\u5728\u6bcf\u4e2a\u7248\u672c\u4e2d\u7ed9\u5927\u5bb6\u5949\u4e0a\u66f4\u591a\u7684\u65b0\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u6b64\u6b21\u53d1\u5e03\u7684 3.1.0 \u7248\u672c\uff0c\u6dfb\u52a0\u4e86\u5bf9\u63d2\u4ef6\u914d\u7f6e\u7684\u52a0\u5bc6\u5b58\u50a8\u548c\u5b58\u50a8\u5728\u5916\u90e8\u5b89\u5168\u670d\u52a1\u7684\u652f\u6301\uff0c\u7740\u91cd\u4e8e\u8ba9\u7528\u6237\u80fd\u591f\u66f4\u5b89\u5168\u3001\u66f4\u653e\u5fc3\u5730\u4f7f\u7528\u4ed6\u4eec\u7684\u914d\u7f6e\u3002\u5728\u8fd9\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u5f15\u5165\u4e86\u8bb8\u591a\u65b0\u7684\u7279\u6027\uff0c\u65e8\u5728\u4f18\u5316\u5bf9 APISIX \u7684\u4f7f\u7528\u4f53\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u65b0\u7279\u6027\u63d2\u4ef6\u914d\u7f6e\u7684\u52a0\u5bc6\u5b58\u50a8"},"\u65b0\u7279\u6027\uff1a\u63d2\u4ef6\u914d\u7f6e\u7684\u52a0\u5bc6\u5b58\u50a8"),(0,l.kt)("p",null,"\u65b0\u7248\u672c\u652f\u6301\u5c06\u63d2\u4ef6\u7684\u7279\u5b9a\u5b57\u6bb5\u52a0\u5bc6\u4fdd\u5b58\u5230 etcd \u4e2d\u3002"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0cAPISIX \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"key_encrypt_salt")," \u7684\u914d\u7f6e\u9879\uff0c\u652f\u6301\u5bf9 etcd \u91cc\u9762\u5b58\u50a8\u7684 SSL key \u8fdb\u884c\u52a0\u5bc6\uff0c\u907f\u514d\u660e\u6587\u5b58\u50a8\u79c1\u94a5\u6570\u636e\u3002\u6bd5\u7adf\u50cf\u79c1\u94a5\u8fd9\u6837\u7684\u654f\u611f\u6570\u636e\uff0c\u5c11\u4e00\u4e2a\u5730\u65b9\u5b58\u50a8\u660e\u6587\uff0c\u5c31\u80fd\u591a\u4e00\u4efd\u5b89\u5fc3\u3002\u90a3\u4e48\u5bf9\u4e8e\u5176\u4ed6\u540c\u6837\u654f\u611f\u7684\u914d\u7f6e\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u4e2d\u7684 secret\uff0c\u6211\u4eec\u80fd\u4e0d\u80fd\u4e5f\u52a0\u5bc6\u8d77\u6765\uff0c\u907f\u514d\u5728 etcd \u91cc\u9762\u5b58\u50a8\u660e\u6587\u5462\uff1f"),(0,l.kt)("p",null,"3.1 \u7248\u672c\u4e2d\u5c31\u628a\u52a0\u5bc6\u5b58\u50a8\u7684\u529f\u80fd\u62d3\u5c55\u5230\u5176\u4ed6\u5b57\u6bb5\u4e0a\u3002\u6709\u4e86\u8fd9\u4e2a\u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u67d0\u4e2a\u7279\u5b9a\u7684\u63d2\u4ef6\u4e0a\u6307\u5b9a\u9700\u8981\u52a0\u5bc6\u7684\u5b57\u6bb5\uff0c\u7136\u540e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u4e2d\u5f00\u542f\u52a0\u5bc6\uff0c\u5373\u53ef\u907f\u514d\u660e\u6587\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u65b0\u589e\u4e86\u5982\u4e0b\u7684\u6807\u8bb0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'     encrypt_fields = {"secret", "private_key"},\n')),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u91cc\u5f00\u542f\u4e86\u5b57\u6bb5\u7684\u52a0\u5bc6\u529f\u80fd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    data_encryption:\n        enable: true\n        keyring:\n            - edd1c9f0985e76a2\n")),(0,l.kt)("p",null,"\u90a3\u4e48\u5199\u5165\u5230 etcd \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u7684 secret \u548c private_key\uff0c\u5c31\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u3002\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcdctl get --prefix /"),' \u770b\u5230\u7684\u914d\u7f6e\uff0c\u4f1a\u662f\u8bf8\u5982 \u201c"secret":"77+NmbYqNfN+oL..."\u201d \u8fd9\u6837\u7684\u6570\u636e\uff0c\u800c\u4e0d\u662f\u539f\u59cb\u7684\u914d\u7f6e\u4fe1\u606f\u3002'),(0,l.kt)("h2",{id:"\u65b0\u7279\u6027\u5c06\u654f\u611f\u4fe1\u606f\u5b58\u50a8\u5728\u5916\u90e8\u5b89\u5168\u670d\u52a1"},"\u65b0\u7279\u6027\uff1a\u5c06\u654f\u611f\u4fe1\u606f\u5b58\u50a8\u5728\u5916\u90e8\u5b89\u5168\u670d\u52a1"),(0,l.kt)("p",null,"\u9664\u4e86\u53ef\u4ee5\u5c06\u654f\u611f\u4fe1\u606f\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u9009\u62e9\u4ece\u522b\u7684\u7cfb\u7edf\u4e2d\u52a8\u6001\u83b7\u53d6\u654f\u611f\u4fe1\u606f\uff0c\u800c\u4e0d\u518d\u8981\u6c42\u654f\u611f\u4fe1\u606f\u5fc5\u987b\u5b58\u50a8\u5728 APISIX \u7684\u914d\u7f6e\u5b58\u50a8\uff08\u5982 etcd\uff09\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728 3.1 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4e0a\u7ebf\u4e86\u540d\u4e3a APISIX Secret \u7684\u529f\u80fd\u3002APISIX Secret \u5141\u8bb8\u7528\u6237\u5728 APISIX \u4e2d\u901a\u8fc7\u4e00\u4e9b\u5bc6\u94a5\u7ba1\u7406\u670d\u52a1\uff08Vault \u7b49\uff09\u6765\u5b58\u50a8 secret\uff0c\u5728\u4f7f\u7528\u7684\u65f6\u5019\u6839\u636e key \u8fdb\u884c\u8bfb\u53d6\uff0c\u786e\u4fdd secret \u5728\u6574\u4e2a\u5e73\u53f0\u4e2d\u4e0d\u4ee5\u660e\u6587\u7684\u5f62\u5f0f\u5b58\u5728\u3002"),(0,l.kt)("p",null,"APISIX \u76ee\u524d\u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b58\u50a8 secret\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ul"},"HashiCorp Vault")),(0,l.kt)("h3",{id:"\u76f8\u5173\u793a\u4f8b"},"\u76f8\u5173\u793a\u4f8b"),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u6211\u4eec\u6765\u793a\u8303\u4e0b\u5982\u4f55\u4f7f\u7528\u7279\u6027\u3002"),(0,l.kt)("h4",{id:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8"},"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1aAPISIX \u5b9e\u4f8b\u542f\u52a8\u524d\u521b\u5efa\u73af\u5883\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"export JACK_AUTH_KEY=abc\n")),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e2d\u5f15\u7528\u73af\u5883\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$ENV://JACK_AUTH_KEY"\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e2d\u7684 key \u914d\u7f6e\u4fdd\u5b58\u5728\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u800c\u4e0d\u662f\u5728\u914d\u7f6e\u63d2\u4ef6\u65f6\u660e\u6587\u663e\u793a\u3002"),(0,l.kt)("h4",{id:"\u57fa\u4e8e-vault-\u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8"},"\u57fa\u4e8e Vault \u7684\u654f\u611f\u4fe1\u606f\u5b58\u50a8"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1a\u5728 Vault \u4e2d\u521b\u5efa\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vault kv put apisix/jack auth-key=value\n")),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff1a\u901a\u8fc7 Admin API \u6dfb\u52a0 Secret \u8d44\u6e90\uff0c\u914d\u7f6e Vault \u7684\u5730\u5740\u7b49\u8fde\u63a5\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/secrets/vault/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "https://127.0.0.1:8200"\uff0c\n    "prefix": "apisix",\n    "token": "root"\n}\'\n')),(0,l.kt)("p",null,"\u7b2c\u4e09\u6b65\uff1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e2d\u5f15\u7528 APISIX Secret \u8d44\u6e90\uff0c\u586b\u5145\u914d\u7f6e\u5728 Vault \u4e2d\u7684\u4f4d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "$secret://vault/1/jack/auth-key"\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\u4e2d\u7684 key \u914d\u7f6e\u4fdd\u5b58\u5728 Vault \u4e2d\uff0c\u800c\u4e0d\u662f\u5728\u914d\u7f6e\u63d2\u4ef6\u65f6\u660e\u6587\u663e\u793a\u3002"),(0,l.kt)("h2",{id:"\u65b0\u7279\u6027\u5b9e\u9a8c\u6027\u57fa\u4e8e-grpc-\u7684-etcd-\u914d\u7f6e\u540c\u6b65"},"\u65b0\u7279\u6027\uff1a\u5b9e\u9a8c\u6027\u57fa\u4e8e gRPC \u7684 etcd \u914d\u7f6e\u540c\u6b65"),(0,l.kt)("p",null,"\u5728\u672c\u6b21\u65b0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u8fd8\u5f15\u5165\u4e86\u5b9e\u9a8c\u6027\u7684\u57fa\u4e8e gRPC \u7684 etcd \u914d\u7f6e\u540c\u6b65\u3002\u5f53\u524d APISIX \u540c\u6b65 etcd \u7684\u914d\u7f6e\uff0c\u662f\u57fa\u4e8e HTTP long pulling\uff0c\u8fd9\u5c31\u8981\u6c42 etcd \u5f00\u542f gRPC-gateway \uff08\u6240\u5e78\u7684\u662f\u9ed8\u8ba4\u5c31\u662f\u5f00\u542f\u7684\uff09\u3002"),(0,l.kt)("p",null,"\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9047\u5230\u4e86 etcd \u7684 HTTP API \u51fa\u73b0\u95ee\u9898\uff0c\u4e5f\u8bb8\u662f\u56e0\u4e3a\u901a\u8fc7 HTTP \u540c\u6b65\u914d\u7f6e\u5e76\u975e etcd \u7684\u4e3b\u6d41\u4f7f\u7528\u65b9\u5f0f\uff0c\u6240\u4ee5\u4f1a\u66f4\u5bb9\u6613\u9047\u5230 bug\u3002\u901a\u8fc7\u628a etcd \u914d\u7f6e\u540c\u6b65\u7531 HTTP long pulling \u5207\u6362\u5230 gRPC \u4e0a\u9762\u6765\uff0cAPISIX \u5b9e\u73b0\u4e86\u540c\u6b65\u65b9\u5f0f\u4e0e\u4e3b\u6d41\u63a5\u8f68\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\u7531\u4e8e gRPC \u672c\u8eab\u63d0\u4f9b\u4e86\u591a\u8def\u590d\u7528\u7684\u652f\u6301\uff0c\u6539\u7528 gRPC \u540c\u6b65\u914d\u7f6e\u80fd\u5927\u5e45\u964d\u4f4e APISIX \u5230 etcd \u7684\u8fde\u63a5\u6570\u3002\u5f53\u524d APISIX \u540c\u6b65\u6bcf\u4e00\u7c7b\u914d\u7f6e\u90fd\u8981\u6709\u72ec\u7acb\u7684 HTTP \u8fde\u63a5\uff0c\u5207\u6362\u5230 gRPC \u540e\u6bcf\u4e2a\u8fdb\u7a0b\u53ea\u6709\u4e00\u6761\u7528\u4e8e\u914d\u7f6e\u540c\u6b65\u7684\u8fde\u63a5\uff08\u5982\u679c\u5f00\u542f\u4e86 L4 \u4ee3\u7406\uff0c\u90a3\u4e48\u662f\u4e24\u6761\uff09\u3002"),(0,l.kt)("p",null,"\u542f\u7528\u5b9e\u9a8c\u6027\u7684\u57fa\u4e8e gRPC \u7684\u914d\u7f6e\u540c\u6b65\uff0c\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"use_grpc: true"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  etcd:\n    use_grpc: true\n    timeout: 3600\n    host:\n      - "http://127.0.0.1:2379"\n    prefix: "/apisix"\n')),(0,l.kt)("h2",{id:"\u65b0\u7279\u6027\u57fa\u4e8e-consul-\u7684\u670d\u52a1\u53d1\u73b0"},"\u65b0\u7279\u6027\uff1a\u57fa\u4e8e Consul \u7684\u670d\u52a1\u53d1\u73b0"),(0,l.kt)("p",null,"\u5728 APISIX \u4e4b\u524d\u7684\u7248\u672c\u91cc\uff0c\u6709\u70ed\u5fc3\u7684\u8d21\u732e\u8005\u63d0\u4f9b\u4e86\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u5b9e\u73b0\u3002\u4e0d\u8fc7 Consul KV \u8ddf Consul \u81ea\u8eab\u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u6709\u4e9b\u4e0d\u540c\u3002Consul \u81ea\u8eab\u7684\u670d\u52a1\u53d1\u73b0\u652f\u6301\u989d\u5916\u7684\u4e00\u4e9b\u529f\u80fd\uff0c\u6bd4\u5982\u5bf9\u6ce8\u518c\u670d\u52a1\u7684\u5065\u5eb7\u68c0\u67e5\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u4e0a\u4f1a\u66f4\u4e3a\u5e7f\u6cdb\u4e9b\u3002\u672c\u6b21 3.1 \u7248\u672c\u4e2d\uff0c\u53e6\u4e00\u4f4d\u70ed\u5fc3\u8d21\u732e\u8005\u63d0\u4f9b\u4e86\u57fa\u4e8e Consul \u7684\u670d\u52a1\u53d1\u73b0\uff0c\u586b\u8865\u4e86\u8fd9\u4e00\u7a7a\u7f3a\u3002"),(0,l.kt)("p",null,"\u57fa\u4e8e Consul \u7684\u670d\u52a1\u53d1\u73b0\u548c\u4e4b\u524d\u7248\u672c\u91cc\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u6709\u7740\u76f8\u4f3c\u7684\u914d\u7f6e\u3002\u9996\u5148\uff0c\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u4e2d\u542f\u7528\u8be5\u670d\u52a1\u53d1\u73b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul:\n    servers:\n      - "http://127.0.0.1:8500"\n')),(0,l.kt)("p",null,"\u7136\u540e\u5728\u5177\u4f53\u7684 upstream \u4e2d\u914d\u7f6e\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"service_name")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"discovery_type"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "service_name": "service_a",\n    "discovery_type": "consul"\n}\'\n')),(0,l.kt)("p",null,"\u5bf9\u5e94\u7684 upstream \u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5c31\u4f1a\u6839\u636e Consul \u91cc\u9762\u914d\u7f6e\u7684\u503c\u53bb\u5f97\u5230\u771f\u6b63\u7684\u4e0a\u6e38\u8282\u70b9\u3002"),(0,l.kt)("h2",{id:"\u65b0\u7279\u6027\u5185\u7f6e\u7684\u8c03\u8bd5\u63d2\u4ef6"},"\u65b0\u7279\u6027\uff1a\u5185\u7f6e\u7684\u8c03\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5de5\u6b32\u5584\u5176\u4e8b\uff0c\u5fc5\u5148\u5229\u5176\u5668\u3002\u8c03\u8bd5\u662f\u7a0b\u5e8f\u5458\u65e5\u5e38\u5de5\u4f5c\u7684\u4e00\u90e8\u5206\u3002\u4f5c\u4e3a\u6ce8\u91cd\u8c03\u8bd5\u4f53\u9a8c\u7684\u7f51\u5173\uff0cAPISIX \u5728 3.1 \u7248\u672c\u4e2d\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u5185\u7f6e\u4e86\u4e00\u4e2a Lua \u8c03\u8bd5\u5668\u63d2\u4ef6\uff0c\u652f\u6301\u52a8\u6001\u8bbe\u7f6e\u65ad\u70b9\u3001\u6dfb\u52a0\u56de\u8c03\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'plugins:\n    ...\n    - inspect\n    ...\n\nplugin_attr:\n  inspect:\n    delay: 3\n    hooks_file: "/usr/local/apisix/plugin_inspect_hooks.lua"\n')),(0,l.kt)("p",null,"APISIX \u5728\u542f\u52a8\u540e\uff0c\u4f1a\u5b9a\u671f\u67e5\u770b\u914d\u7f6e\u7684 hooks_file \uff08\u8fd9\u91cc\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/apisix/plugin_inspect_hooks.lua")," \u6587\u4ef6\uff09\uff0c\u5982\u679c\u6587\u4ef6\u91cc\u9762\u6709\u5185\u5bb9\uff0c\u5c31\u4f1a\u6839\u636e\u91cc\u9762\u7684\u5185\u5bb9\u8bbe\u7f6e\u65ad\u70b9\u548c\u56de\u8c03\u3002\u6bd4\u5982\u4e0b\u65b9\u5185\u5bb9\u4f1a\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-req.lua")," \u6587\u4ef6\u7684 88 \u884c\u4e0a\u8bbe\u7f6e\u4e00\u4e2a\u65ad\u70b9\uff0c\u5e76\u5728\u8be5\u65ad\u70b9\u4e0a\u6ce8\u518c\u4e86\u56de\u8c03\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"function(info) ... end"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local dbg = require "apisix.inspect.dbg"\n\ndbg.set_hook("limit-req.lua", 88, require("apisix.plugins.limit-req").access, function(info)\n    ngx.log(ngx.INFO, debug.traceback("foo traceback", 3))\n    return true\nend)\n')),(0,l.kt)("h2",{id:"\u65b0\u529f\u80fd\u4f18\u5316\u4ee5\u53ca\u66f4\u591a\u5c0f\u529f\u80fd"},"\u65b0\u529f\u80fd\uff1a\u4f18\u5316\u4ee5\u53ca\u66f4\u591a\u5c0f\u529f\u80fd"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u63d0\u5230\u7684\u51e0\u4e2a\u5927\u7684\u529f\u80fd\u5916\uff0c\u6b64\u6b21\u53d1\u5e03\u4e5f\u5305\u542b\u8bb8\u591a\u503c\u5f97\u8ff0\u8bf4\u7684\u6539\u52a8\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316 Prometheus \u6307\u6807\u91c7\u96c6\u7684\u8d44\u6e90\u5360\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728 L4 \u7684\u4ee3\u7406\u4e2d\uff0c\u914d\u7f6e\u57df\u540d\u4f5c\u4e3a\u4e0a\u6e38")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u65b0\u7248\u672c\u7684\u5b8c\u6574\u66f4\u65b0\u7ec6\u8282\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u8003 3.1.0 \u53d1\u5e03\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/release/3.1/docs/zh/latest/CHANGELOG.md#310"},"CHANGELOG"),"\u3002"))}s.isMDXComponent=!0}}]);