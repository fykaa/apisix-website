"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[48563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35621:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"ip-restriction",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","IP restriction","ip-restriction"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX ip-restriction \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},l=void 0,p={unversionedId:"plugins/ip-restriction",id:"version-3.8/plugins/ip-restriction",isDocsHomePage:!1,title:"ip-restriction",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX ip-restriction \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/plugins/ip-restriction.md",sourceDirName:"plugins",slug:"/plugins/ip-restriction",permalink:"/zh/docs/apisix/3.8/plugins/ip-restriction",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/plugins/ip-restriction.md",tags:[],version:"3.8",frontMatter:{title:"ip-restriction",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","IP restriction","ip-restriction"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX ip-restriction \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.8/docs",previous:{title:"uri-blocker",permalink:"/zh/docs/apisix/3.8/plugins/uri-blocker"},next:{title:"ua-restriction",permalink:"/zh/docs/apisix/3.8/plugins/ua-restriction"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],s={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5c06 IP \u5730\u5740\u5217\u5165\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u6765\u9650\u5236\u5bf9\u670d\u52a1\u6216\u8def\u7531\u7684\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u5bf9\u5355\u4e2a IP \u5730\u5740\u3001\u591a\u4e2a IP \u5730\u5740\u548c\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"10.10.10.0/24")," \u7684 CIDR\uff08\u65e0\u7c7b\u522b\u57df\u95f4\u8def\u7531\uff09\u8303\u56f4\u7684\u9650\u5236\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a0\u5165\u767d\u540d\u5355\u7684 IP \u5730\u5740\u6216 CIDR \u8303\u56f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"blacklist"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a0\u5165\u9ed1\u540d\u5355\u7684 IP \u5730\u5740\u6216 CIDR \u8303\u56f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},'"Your IP address is not allowed"'),(0,a.kt)("td",{parentName:"tr",align:null},"[1, 1024]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u672a\u5141\u8bb8\u7684 IP \u8bbf\u95ee\u7684\u60c5\u51b5\u4e0b\u8fd4\u56de\u7684\u4fe1\u606f\u3002")))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"whitelist")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"blacklist")," \u5c5e\u6027\u65e0\u6cd5\u540c\u65f6\u5728\u540c\u4e00\u4e2a\u670d\u52a1\u6216\u8def\u7531\u4e0a\u4f7f\u7528\uff0c\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u4e4b\u4e00\u3002"))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u7279\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u63d2\u4ef6\uff0c\u5e76\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"whitelist")," \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.1",\n                "113.74.26.106/24"\n            ]\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528\u767d\u540d\u5355\u4e4b\u5916\u7684 IP \u8bbf\u95ee\u65f6\uff0c\u9ed8\u8ba4\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},'{"message":"Your IP address is not allowed"}'),"\u3002\u5982\u679c\u60f3\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),"\uff0c\u53ef\u4ee5\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u8fdb\u884c\u8c03\u6574\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"plugins": {\n    "ip-restriction": {\n        "whitelist": [\n            "127.0.0.1",\n            "113.74.26.106/24"\n        ],\n        "message": "Do you want to do something bad?"\n    }\n}\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bbf\u95ee APISIX \u5b9e\u4f8b\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -i\n")),(0,a.kt)("p",null,"\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," HTTP \u72b6\u6001\u7801\uff0c\u4ee3\u8868\u8bbf\u95ee\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,a.kt)("p",null,"\u518d\u4ece IP \u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.2")," \u53d1\u51fa\u8bf7\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -i --interface 127.0.0.2\n")),(0,a.kt)("p",null,"\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"403")," HTTP \u72b6\u6001\u7801\uff0c\u4ee3\u8868\u8bbf\u95ee\u88ab\u963b\u6b62\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\n...\n{"message":"Your IP address is not allowed"}\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u66f4\u6539\u767d\u540d\u5355\u6216\u9ed1\u540d\u5355\u7684 IP \u5730\u5740\uff0c\u4f60\u53ea\u9700\u66f4\u65b0\u63d2\u4ef6\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.2",\n                "113.74.26.106/24"\n            ]\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);