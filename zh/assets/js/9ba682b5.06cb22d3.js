"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[57387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(g,i(i({ref:t},o),{},{components:n})):r.createElement(g,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23780:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"request-id",keywords:["APISIX","API \u7f51\u5173","Request ID"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-id \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u6765\u8ffd\u8e2a API \u8bf7\u6c42\u3002"},i=void 0,p={unversionedId:"plugins/request-id",id:"version-3.8/plugins/request-id",isDocsHomePage:!1,title:"request-id",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-id \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u6765\u8ffd\u8e2a API \u8bf7\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/plugins/request-id.md",sourceDirName:"plugins",slug:"/plugins/request-id",permalink:"/zh/docs/apisix/3.8/plugins/request-id",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/plugins/request-id.md",tags:[],version:"3.8",frontMatter:{title:"request-id",keywords:["APISIX","API \u7f51\u5173","Request ID"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-id \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u6765\u8ffd\u8e2a API \u8bf7\u6c42\u3002"},sidebar:"version-3.8/docs",previous:{title:"traffic-split",permalink:"/zh/docs/apisix/3.8/plugins/traffic-split"},next:{title:"proxy-control",permalink:"/zh/docs/apisix/3.8/plugins/proxy-control"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],d={toc:u};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\u901a\u8fc7 APISIX \u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u7528\u4e8e\u8ffd\u8e2a API \u8bf7\u6c42\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u8bf7\u6c42\u5df2\u7ecf\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"header_name")," \u5c5e\u6027\u7684\u8bf7\u6c42\u5934\uff0c\u8be5\u63d2\u4ef6\u5c06\u4e0d\u4f1a\u4e3a\u8bf7\u6c42\u6dfb\u52a0 unique ID\u3002"))),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"header_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},'"X-Request-Id"'),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"unique ID \u7684\u8bf7\u6c42\u5934\u7684\u540d\u79f0\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"include_in_response"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06 unique ID \u52a0\u5165\u8fd4\u56de\u5934\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},'"uuid"'),(0,a.kt)("td",{parentName:"tr",align:null},'["uuid", "nanoid", "range_id"]'),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684 unique ID \u751f\u6210\u7b97\u6cd5\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"range_id.char_set"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},'"abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789'),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u957f\u5ea6\u6700\u5c0f\u4e3a 6"),(0,a.kt)("td",{parentName:"tr",align:null},"range_id \u7b97\u6cd5\u7684\u5b57\u7b26\u96c6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"range_id.length"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"16"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u503c\u4e3a 6"),(0,a.kt)("td",{parentName:"tr",align:null},"range_id \u7b97\u6cd5\u7684 id \u957f\u5ea6")))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "request-id": {\n            "include_in_response": true\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u6309\u4e0a\u8ff0\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\u540e\uff0cAPISIX \u5c06\u4e3a\u4f60\u7684\u6bcf\u4e2a\u8bf7\u6c42\u521b\u5efa\u4e00\u4e2a unique ID\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42\u8be5\u8def\u7531\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4e2d\u5982\u679c\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," \u72b6\u6001\u7801\uff0c\u4e14\u6bcf\u6b21\u8fd4\u56de\u4e0d\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Request-Id"),"\uff0c\u5219\u8868\u793a\u63d2\u4ef6\u751f\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nX-Request-Id: fe32076a-d0a5-49a6-a361-6c244c1df956\n")),(0,a.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}o.isMDXComponent=!0}}]);