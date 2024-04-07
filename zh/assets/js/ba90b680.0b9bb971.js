"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24309:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"jwe-decrypt",keywords:["Apache APISIX","API \u7f51\u5173","APISIX \u63d2\u4ef6","JWE Decrypt","jwe-decrypt"],description:"\u672c\u6587\u6863\u5305\u542b\u4e86\u5173\u4e8e APISIX jwe-decrypt \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},i=void 0,p={unversionedId:"plugins/jwe-decrypt",id:"plugins/jwe-decrypt",isDocsHomePage:!1,title:"jwe-decrypt",description:"\u672c\u6587\u6863\u5305\u542b\u4e86\u5173\u4e8e APISIX jwe-decrypt \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/jwe-decrypt.md",sourceDirName:"plugins",slug:"/plugins/jwe-decrypt",permalink:"/zh/docs/apisix/next/plugins/jwe-decrypt",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/jwe-decrypt.md",tags:[],version:"current",frontMatter:{title:"jwe-decrypt",keywords:["Apache APISIX","API \u7f51\u5173","APISIX \u63d2\u4ef6","JWE Decrypt","jwe-decrypt"],description:"\u672c\u6587\u6863\u5305\u542b\u4e86\u5173\u4e8e APISIX jwe-decrypt \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},sidebar:"docs",previous:{title:"jwt-auth",permalink:"/zh/docs/apisix/next/plugins/jwt-auth"},next:{title:"basic-auth",permalink:"/zh/docs/apisix/next/plugins/basic-auth"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u4f7f\u7528 JWE \u52a0\u5bc6\u6570\u636e",id:"\u4f7f\u7528-jwe-\u52a0\u5bc6\u6570\u636e",children:[]},{value:"\u4f7f\u7528 JWE \u89e3\u5bc6\u6570\u636e",id:"\u4f7f\u7528-jwe-\u89e3\u5bc6\u6570\u636e",children:[]}]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jwe-decrypt")," \u63d2\u4ef6\uff0c\u7528\u4e8e\u89e3\u5bc6 APISIX ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/service"},"Service")," \u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/route"},"Route")," \u8bf7\u6c42\u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7516"},"JWE")," \u6388\u6743\u8bf7\u6c42\u5934\u3002"),(0,r.kt)("p",null,"\u63d2\u4ef6\u589e\u52a0\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwe/encrypt")," \u7684\u5185\u90e8 API\uff0c\u63d0\u4f9b\u7ed9 JWE \u52a0\u5bc6\u4f7f\u7528\u3002\u89e3\u5bc6\u65f6\uff0c\u79d8\u94a5\u5e94\u8be5\u914d\u7f6e\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/consumer"},"Consumer"),"\u5185\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("p",null,"Consumer \u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer \u7684\u552f\u4e00 key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u89e3\u5bc6\u5bc6\u94a5\uff0c\u5fc5\u987b\u4e3a 32 \u4f4d\u3002\u79d8\u94a5\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/next/terminology/secret"},"Secret")," \u8d44\u6e90\u4fdd\u5b58\u5728\u5bc6\u94a5\u7ba1\u7406\u670d\u52a1\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_base64_encoded"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5bc6\u94a5\u662f Base64 \u7f16\u7801\uff0c\u5219\u9700\u8981\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c\u5728\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"is_base64_encoded")," \u540e\uff0c\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," \u957f\u5ea6\u53ef\u80fd\u4f1a\u8d85\u8fc7 32 \u4f4d\uff0c\u4f60\u53ea\u9700\u8981\u4fdd\u8bc1\u5728 Decode \u540e\u7684\u957f\u5ea6\u4ecd\u7136\u662f 32 \u4f4d\u5373\u53ef\u3002"))),(0,r.kt)("p",null,"Route \u914d\u7f6e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bf7\u6c42\u5934\uff0c\u7528\u4e8e\u83b7\u53d6\u52a0\u5bc6\u4ee4\u724c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forward_header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f20\u9012\u7ed9 Upstream \u7684\u8bf7\u6c42\u5934\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strict"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a\u914d\u7f6e\u4e3a true\uff0c\u8bf7\u6c42\u4e2d\u7f3a\u5931 JWE token \u5219\u629b\u51fa ",(0,r.kt)("inlineCode",{parentName:"td"},"403")," \u5f02\u5e38\u3002\u5982\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", \u5728\u7f3a\u5931 JWE token \u7684\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"jwe-decrypt")," \u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a Consumer\uff0c\u5e76\u4e14\u914d\u7f6e\u89e3\u5bc6\u5bc6\u94a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "jwe-decrypt": {\n            "key": "user-key",\n            "secret": "-secret-length-must-be-32-chars-"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4e0b\u4e00\u6b65\uff0c\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"jwe-decrypt")," \u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a\u8def\u7531\uff0c\u7528\u4e8e\u89e3\u5bc6 authorization \u8bf7\u6c42\u5934\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/anything*",\n    "plugins": {\n        "jwe-decrypt": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"\u4f7f\u7528-jwe-\u52a0\u5bc6\u6570\u636e"},"\u4f7f\u7528 JWE \u52a0\u5bc6\u6570\u636e"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u521b\u5efa\u4e86\u4e00\u4e2a\u5185\u90e8\u7684 API ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwe/encrypt")," \u4ee5\u4f7f\u7528 JWE \u8fdb\u884c\u52a0\u5bc6\u3002\u8981\u516c\u5f00\u5b83\uff0c\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94\u7684\u8def\u7531\uff0c\u5e76\u542f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/public-api"},"public-api")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/jwenew -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/plugin/jwe/encrypt",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5411 API \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5c06 Consumer \u4e2d\u914d\u7f6e\u7684\u5bc6\u94a5\uff0c\u4ee5\u53c2\u6570\u7684\u65b9\u5f0f\u4f20\u9012\u7ed9 URI\uff0c\u7528\u4e8e\u52a0\u5bc6 payload \u4e2d\u7684\u4e00\u4e9b\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -G --data-urlencode \'payload={"uid":10000,"uname":"test"}\' \'http://127.0.0.1:9080/apisix/plugin/jwe/encrypt?key=user-key\' -i\n')),(0,r.kt)("p",null,"\u60a8\u5e94\u8be5\u770b\u5230\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u5185\u5bb9\u7684\u54cd\u5e94\u7ed3\u679c\uff0c\u5176\u4e2d JWE \u52a0\u5bc6\u7684\u6570\u636e\u4f4d\u4e8e\u54cd\u5e94\u4f53\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Mon, 25 Sep 2023 02:38:16 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/3.5.0\nApisix-Plugins: public-api\n\neyJhbGciOiJkaXIiLCJraWQiOiJ1c2VyLWtleSIsImVuYyI6IkEyNTZHQ00ifQ..MTIzNDU2Nzg5MDEy.hfzMJ0YfmbMcJ0ojgv4PYAHxPjlgMivmv35MiA.7nilnBt2dxLR_O6kf-HQUA\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528-jwe-\u89e3\u5bc6\u6570\u636e"},"\u4f7f\u7528 JWE \u89e3\u5bc6\u6570\u636e"),(0,r.kt)("p",null,"\u5c06\u52a0\u5bc6\u6570\u636e\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," \u8bf7\u6c42\u5934\u4e2d\uff0c\u5411 API \u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/anything/hello -H 'Authorization: eyJhbGciOiJkaXIiLCJraWQiOiJ1c2VyLWtleSIsImVuYyI6IkEyNTZHQ00ifQ..MTIzNDU2Nzg5MDEy.hfzMJ0YfmbMcJ0ojgv4PYAHxPjlgMivmv35MiA.7nilnBt2dxLR_O6kf-HQUA' -i\n")),(0,r.kt)("p",null,"\u60a8\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u7684\u54cd\u5e94\u5185\u5bb9\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," \u54cd\u5e94\u5934\u663e\u793a\u4e86\u6709\u6548\u7684\u89e3\u5bc6\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 452\nConnection: keep-alive\nDate: Mon, 25 Sep 2023 02:38:59 GMT\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Credentials: true\nServer: APISIX/3.5.0\nApisix-Plugins: jwe-decrypt\n\n{\n  "args": {},\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Authorization": "{\\"uid\\":10000,\\"uname\\":\\"test\\"}",\n    "Host": "127.0.0.1",\n    "User-Agent": "curl/8.1.2",\n    "X-Amzn-Trace-Id": "Root=1-6510f2c3-1586ec011a22b5094dbe1896",\n    "X-Forwarded-Host": "127.0.0.1"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "127.0.0.1, 119.143.79.94",\n  "url": "http://127.0.0.1/anything/hello"\n}\n')),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u8981\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"jwe-decrypt")," \u63d2\u4ef6\uff0c\u60a8\u53ef\u4ee5\u4ece\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u63d2\u4ef6\u5bf9\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u4f1a\u81ea\u52a8\u52a0\u8f7d\uff0c\u60a8\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8\u5373\u53ef\u751f\u6548\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/anything*",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);