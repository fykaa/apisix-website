"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=l,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,p(p({ref:t},o),{},{components:n})):a.createElement(m,p({ref:t},o))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,p[1]=s;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21616:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>o,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(87462),l=(n(67294),n(3905));const r={title:"ocsp-stapling",keywords:["Apache APISIX","API \u7f51\u5173","\u63d2\u4ef6","ocsp-stapling"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX ocsp-stapling \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},p=void 0,s={unversionedId:"plugins/ocsp-stapling",id:"version-3.9/plugins/ocsp-stapling",isDocsHomePage:!1,title:"ocsp-stapling",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX ocsp-stapling \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.9/plugins/ocsp-stapling.md",sourceDirName:"plugins",slug:"/plugins/ocsp-stapling",permalink:"/zh/docs/apisix/plugins/ocsp-stapling",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.9/docs/zh/latest/plugins/ocsp-stapling.md",tags:[],version:"3.9",frontMatter:{title:"ocsp-stapling",keywords:["Apache APISIX","API \u7f51\u5173","\u63d2\u4ef6","ocsp-stapling"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX ocsp-stapling \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},sidebar:"version-3.9/docs",previous:{title:"inspect",permalink:"/zh/docs/apisix/plugins/inspect"},next:{title:"response-rewrite",permalink:"/zh/docs/apisix/plugins/response-rewrite"}},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],c={toc:i};function o(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ocsp-stapling")," \u63d2\u4ef6\u53ef\u4ee5\u52a8\u6001\u5730\u8bbe\u7f6e Nginx \u4e2d ",(0,l.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_stapling"},"OCSP stapling")," \u7684\u76f8\u5173\u884c\u4e3a\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u662f\u9ed8\u8ba4\u7981\u7528\u7684\uff0c\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u6765\u542f\u7528\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  - ...\n  - ocsp-stapling\n")),(0,l.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u4e4b\u540e\uff0c\u91cd\u542f APISIX \u6216\u8005\u901a\u8fc7\u63d2\u4ef6\u70ed\u52a0\u8f7d\u63a5\u53e3\u6765\u4f7f\u914d\u7f6e\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("p",null,"\u63d2\u4ef6\u5c5e\u6027\u5b58\u50a8\u5728 SSL \u8d44\u6e90\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ocsp_stapling")," \u5b57\u6bb5\u4e2d\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"ssl_stapling")," \u6307\u4ee4\u7c7b\u4f3c\uff0c\u7528\u4e8e\u542f\u7528\u6216\u7981\u7528 OCSP stapling \u7279\u6027")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"ssl_stapling_verify")," \u6307\u4ee4\u7c7b\u4f3c\uff0c\u7528\u4e8e\u542f\u7528\u6216\u7981\u7528\u5bf9\u4e8e OCSP \u54cd\u5e94\u7ed3\u679c\u7684\u6821\u9a8c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache_ttl"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"3600"),(0,l.kt)("td",{parentName:"tr",align:null},">= 60"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a OCSP \u54cd\u5e94\u7ed3\u679c\u7684\u7f13\u5b58\u65f6\u95f4")))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,"\u9996\u5148\u60a8\u5e94\u8be5\u521b\u5efa\u4e00\u4e2a SSL \u8d44\u6e90\uff0c\u5e76\u4e14\u8bc1\u4e66\u8d44\u6e90\u4e2d\u5e94\u8be5\u5305\u542b\u9881\u53d1\u8005\u7684\u8bc1\u4e66\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5168\u94fe\u8def\u8bc1\u4e66\u5c31\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"\u5982\u4e0b\u793a\u4f8b\u4e2d\uff0c\u751f\u6210\u76f8\u5173\u7684 SSL \u8d44\u6e90\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "cert" : "\'"$(cat server.crt)"\'",\n    "key": "\'"$(cat server.key)"\'",\n    "snis": ["test.com"],\n    "ocsp_stapling": {\n        "enabled": true\n    }\n}\'\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u751f\u6210 SSL \u8d44\u6e90\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo -n "Q" | openssl s_client -status -connect localhost:9443 -servername test.com 2>&1 | cat\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\nCONNECTED(00000003)\nOCSP response:\n======================================\nOCSP Response Data:\n    OCSP Response Status: successful (0x0)\n...\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u7981\u7528\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "cert" : "\'"$(cat server.crt)"\'",\n    "key": "\'"$(cat server.key)"\'",\n    "snis": ["test.com"],\n    "ocsp_stapling": {\n        "enabled": false\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u5220\u9664\u63d2\u4ef6\u4e4b\u524d\uff0c\u9700\u8981\u786e\u4fdd\u6240\u6709\u7684 SSL \u8d44\u6e90\u90fd\u5df2\u7ecf\u79fb\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"ocsp_stapling")," \u5b57\u6bb5\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b9e\u73b0\u5bf9\u5355\u4e2a SSL \u8d44\u6e90\u7684\u5bf9\u5e94\u5b57\u6bb5\u79fb\u9664\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PATCH -d '\n{\n    \"ocsp_stapling\": null\n}'\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u6765\u7981\u7528\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  - ...\n  # - ocsp-stapling\n")),(0,l.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u4e4b\u540e\uff0c\u91cd\u542f APISIX \u6216\u8005\u901a\u8fc7\u63d2\u4ef6\u70ed\u52a0\u8f7d\u63a5\u53e3\u6765\u4f7f\u914d\u7f6e\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")))}o.isMDXComponent=!0}}]);