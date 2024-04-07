"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[53654],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,g=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92713:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"loki-logger",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Loki-logger","Grafana Loki"],description:"\u672c\u6587\u4ef6\u5305\u542b\u5173\u4e8e Apache APISIX loki-logger \u63d2\u4ef6\u7684\u4fe1\u606f\u3002"},i=void 0,o={unversionedId:"plugins/loki-logger",id:"version-3.9/plugins/loki-logger",isDocsHomePage:!1,title:"loki-logger",description:"\u672c\u6587\u4ef6\u5305\u542b\u5173\u4e8e Apache APISIX loki-logger \u63d2\u4ef6\u7684\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.9/plugins/loki-logger.md",sourceDirName:"plugins",slug:"/plugins/loki-logger",permalink:"/zh/docs/apisix/plugins/loki-logger",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.9/docs/zh/latest/plugins/loki-logger.md",tags:[],version:"3.9",frontMatter:{title:"loki-logger",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Loki-logger","Grafana Loki"],description:"\u672c\u6587\u4ef6\u5305\u542b\u5173\u4e8e Apache APISIX loki-logger \u63d2\u4ef6\u7684\u4fe1\u606f\u3002"},sidebar:"version-3.9/docs",previous:{title:"tencent-cloud-cls",permalink:"/zh/docs/apisix/plugins/tencent-cloud-cls"},next:{title:"serverless",permalink:"/zh/docs/apisix/plugins/serverless"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]}]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u793a\u4f8b\u7528\u6cd5",id:"\u793a\u4f8b\u7528\u6cd5",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u65e5\u5fd7\u672a\u6b63\u786e\u63a8\u9001",id:"\u65e5\u5fd7\u672a\u6b63\u786e\u63a8\u9001",children:[]},{value:"\u5f53\u8bf7\u6c42\u6bcf\u79d2 (RPS) \u8f83\u9ad8\u65f6\u51fa\u73b0\u9519\u8bef\uff1f",id:"\u5f53\u8bf7\u6c42\u6bcf\u79d2-rps-\u8f83\u9ad8\u65f6\u51fa\u73b0\u9519\u8bef",children:[]}]}],d={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," \u63d2\u4ef6\u7528\u4e8e\u5c06\u65e5\u5fd7\u8f6c\u53d1\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Grafana Loki")," \u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u5f53\u542f\u7528\u8be5\u63d2\u4ef6\u65f6\uff0cAPISIX \u5c06\u628a\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\u5e8f\u5217\u5316\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/api/#push-log-entries-to-loki"},"JSON \u4e2d\u7684\u65e5\u5fd7\u6761\u76ee")," \u5e76\u5c06\u5176\u63d0\u4ea4\u5230\u6279\u5904\u7406\u961f\u5217\u4e2d\u3002\u5f53\u961f\u5217\u4e2d\u7684\u6570\u636e\u91cf\u8d85\u8fc7\u6700\u5927\u6279\u5904\u7406\u5927\u5c0f\u65f6\uff0c\u6570\u636e\u5c06\u88ab\u63a8\u9001\u5230 Grafana Loki\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6279\u5904\u7406\u5904\u7406\u5668 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor"},"batch processor"),"\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_addrs"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Loki API \u57fa\u7840 URL\uff0c\u683c\u5f0f\u5982 ",(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:3100%EF%BC%8C%E6%94%AF%E6%8C%81"},"http://127.0.0.1:3100\uff0c\u652f\u6301")," HTTPS \u548c\u57df\u540d\u3002\u5982\u679c\u914d\u7f6e\u4e86\u591a\u4e2a\u7aef\u70b9\uff0c\u5b83\u4eec\u5c06\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u8fdb\u884c\u5199\u5165")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"/loki/api/v1/push"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528\u4e0e Loki Push API \u517c\u5bb9\u7684\u65e5\u5fd7\u6536\u96c6\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u914d\u7f6e\u9879\u81ea\u5b9a\u4e49 API \u8def\u5f84\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenant_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"fake"),(0,r.kt)("td",{parentName:"tr",align:null},"Loki \u79df\u6237 ID\u3002\u6839\u636e Loki \u7684 ",(0,r.kt)("a",{parentName:"td",href:"https://grafana.com/docs/loki/latest/operations/multi-tenancy/#multi-tenancy"},"\u591a\u79df\u6237\u6587\u6863"),"\uff0c\u5728\u5355\u79df\u6237\u6a21\u5f0f\u4e0b\uff0c\u9ed8\u8ba4\u503c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"fake"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_labels"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'{job = "apisix"}'),(0,r.kt)("td",{parentName:"tr",align:null},"Loki \u65e5\u5fd7\u6807\u7b7e\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u548c ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u53d8\u91cf")," \u53ea\u9700\u5728\u5b57\u7b26\u4e32\u524d\u9762\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u7b26\u53f7\u5373\u53ef\uff0c\u53ef\u4ee5\u4f7f\u7528\u5355\u4e2a\u53d8\u91cf\u6216\u7ec4\u5408\u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"$host")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr:$remote_port"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u9a8c\u8bc1 SSL \u8bc1\u4e66\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Loki \u670d\u52a1 HTTP \u8c03\u7528\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u8303\u56f4\u4ece 1 \u5230 60,000 \u6beb\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u4f1a\u4fdd\u6301\u8fde\u63a5\u4ee5\u4f9b\u591a\u4e2a\u8bf7\u6c42\u4f7f\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u7a7a\u95f2\u65f6\u95f4\u540e\u5173\u95ed\u8fde\u63a5\u3002\u8303\u56f4\u5927\u4e8e\u6216\u7b49\u4e8e 1000 \u6beb\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6c60\u9650\u5236\u3002\u8303\u56f4\u5927\u4e8e\u6216\u7b49\u4e8e 1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u58f0\u660e\u7684\u952e\u503c\u5bf9\u5f62\u5f0f\u7684\u65e5\u5fd7\u683c\u5f0f\u3002\u503c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u53ef\u4ee5\u901a\u8fc7\u5728\u5b57\u7b26\u4e32\u524d\u9762\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u6765\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u548c ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u53d8\u91cf")," \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u65e5\u5fd7\u4e2d\u5c06\u5305\u542b\u8bf7\u6c42\u4f53\u3002\u5982\u679c\u8bf7\u6c42\u4f53\u592a\u5927\u800c\u65e0\u6cd5\u5728\u5185\u5b58\u4e2d\u4fdd\u5b58\uff0c\u5219\u7531\u4e8e Nginx \u7684\u9650\u5236\uff0c\u65e0\u6cd5\u8bb0\u5f55\u8bf7\u6c42\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"include_req_body")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u7684\u8fc7\u6ee4\u5668\u3002\u53ea\u6709\u5f53\u6b64\u5904\u8bbe\u7f6e\u7684\u8868\u8fbe\u5f0f\u6c42\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u624d\u4f1a\u8bb0\u5f55\u8bf7\u6c42\u4f53\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u65e5\u5fd7\u4e2d\u5c06\u5305\u542b\u54cd\u5e94\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"include_resp_body")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u7684\u8fc7\u6ee4\u5668\u3002\u53ea\u6709\u5f53\u6b64\u5904\u8bbe\u7f6e\u7684\u8868\u8fbe\u5f0f\u6c42\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u624d\u4f1a\u8bb0\u5f55\u54cd\u5e94\u4f53\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," \u3002")))),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u5bf9\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u8fdb\u884c\u6279\u91cf\u805a\u5408\u548c\u5904\u7406\uff0c\u907f\u514d\u4e86\u9891\u7e41\u63d0\u4ea4\u6570\u636e\u7684\u9700\u6c42\u3002\u6279\u5904\u7406\u5668\u6bcf\u9694 ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u6216\u5f53\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," \u65f6\u63d0\u4ea4\u6570\u636e\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\u6216\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor#configuration"},"\u6279\u5904\u7406\u5668"),"\u3002"),(0,r.kt)("h3",{id:"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "headers": {\n      "connection": "close",\n      "host": "localhost",\n      "test-header": "only-for-test#1"\n    },\n    "method": "GET",\n    "uri": "/hello",\n    "url": "http://localhost:1984/hello",\n    "size": 89,\n    "querystring": {}\n  },\n  "client_ip": "127.0.0.1",\n  "start_time": 1704525701293,\n  "apisix_latency": 100.99994659424,\n  "response": {\n    "headers": {\n      "content-type": "text/plain",\n      "server": "APISIX/3.7.0",\n      "content-length": "12",\n      "connection": "close"\n    },\n    "status": 200,\n    "size": 118\n  },\n  "route_id": "1",\n  "loki_log_time": "1704525701293000000",\n  "upstream_latency": 5,\n  "latency": 105.99994659424,\n  "upstream": "127.0.0.1:1980",\n  "server": {\n    "hostname": "localhost",\n    "version": "3.7.0"\n  },\n  "service_id": ""\n}\n')),(0,r.kt)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e\u6765\u8bbe\u7f6e\u65e5\u5fd7\u7684\u683c\u5f0f\u3002\u4ee5\u4e0b\u914d\u7f6e\u9879\u53ef\u4f9b\u9009\u62e9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u683c\u5f0f\u4ee5 JSON \u683c\u5f0f\u58f0\u660e\u4e3a\u952e\u503c\u5bf9\u3002\u503c\u53ea\u652f\u6301\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u53ef\u4ee5\u901a\u8fc7\u5728\u5b57\u7b26\u4e32\u524d\u9762\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u6765\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u548c ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u53d8\u91cf")," \u3002")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u91cd\u8981\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e\u5177\u6709\u5168\u5c40\u8303\u56f4\u3002\u8fd9\u610f\u5473\u7740\u5b83\u5c06\u5bf9\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," \u63d2\u4ef6\u7684\u6240\u6709\u8def\u7531\u548c\u670d\u52a1\u751f\u6548\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7 Admin API \u8fdb\u884c\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/loki-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u914d\u7f6e\uff0c\u60a8\u7684\u65e5\u5fd7\u5c06\u88ab\u683c\u5f0f\u5316\u4e3a\u4ee5\u4e0b\u5f62\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u7279\u5b9a\u7684\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "loki-logger": {\n            "endpoint_addrs" : ["http://127.0.0.1:3100"]\n        }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"\u793a\u4f8b\u7528\u6cd5"},"\u793a\u4f8b\u7528\u6cd5"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\uff0c\u8be5\u8bf7\u6c42\u5c06\u88ab\u8bb0\u5f55\u5728\u60a8\u7684 Loki \u670d\u52a1\u5668\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u60a8\u9700\u8981\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," \u63d2\u4ef6\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u800c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"\u65e5\u5fd7\u672a\u6b63\u786e\u63a8\u9001"},"\u65e5\u5fd7\u672a\u6b63\u786e\u63a8\u9001"),(0,r.kt)("p",null,"\u8bf7\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},"error.log")," \u6587\u4ef6\u4ee5\u83b7\u53d6\u6b64\u7c7b\u65e5\u5fd7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2023/04/30 13:45:46 [error] 19381#19381: *1075673 [lua] batch-processor.lua:95: Batch Processor[loki logger] failed to process entries: loki server returned status: 401, body: no org id, context: ngx.timer, client: 127.0.0.1, server: 0.0.0.0:9081\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u6839\u636e\u9519\u8bef\u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"failed to process entries: loki server returned status: 401, body: no org id")," \u548c loki \u670d\u52a1\u5668\u7684\u54cd\u5e94\u6b63\u6587\u6765\u8bca\u65ad\u9519\u8bef\u3002"),(0,r.kt)("h3",{id:"\u5f53\u8bf7\u6c42\u6bcf\u79d2-rps-\u8f83\u9ad8\u65f6\u51fa\u73b0\u9519\u8bef"},"\u5f53\u8bf7\u6c42\u6bcf\u79d2 (RPS) \u8f83\u9ad8\u65f6\u51fa\u73b0\u9519\u8bef\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"keepalive")," \u76f8\u5173\u7684\u914d\u7f6e\u5df2\u6b63\u786e\u8bbe\u7f6e\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"#%E5%B1%9E%E6%80%A7"},"\u5c5e\u6027")," \u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"error.log")," \u4e2d\u7684\u65e5\u5fd7\uff0c\u67e5\u627e\u6b64\u7c7b\u65e5\u5fd7\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2023/04/30 13:49:34 [error] 19381#19381: *1082680 [lua] batch-processor.lua:95: Batch Processor[loki logger] failed to process entries: loki server returned status: 429, body: Ingestion rate limit exceeded for user tenant_1 (limit: 4194304 bytes/sec) while attempting to ingest '1000' lines totaling '616307' bytes, reduce log volume or contact your Loki administrator to see if the limit can be increased, context: ngx.timer, client: 127.0.0.1, server: 0.0.0.0:9081\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u5e38\u4e0e\u9ad8 QPS \u76f8\u5173\u7684\u65e5\u5fd7\u5982\u4e0a\u6240\u793a\u3002\u9519\u8bef\u4fe1\u606f\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Ingestion rate limit exceeded for user tenant_1 (limit: 4194304 bytes/sec) while attempting to ingest '1000' lines totaling '616307' bytes, reduce log volume or contact your Loki administrator to see if the limit can be increased"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/configuration/#limits_config"},"Loki \u6587\u6863")," \uff0c\u6dfb\u52a0\u9ed8\u8ba4\u65e5\u5fd7\u91cf\u548c\u7a81\u53d1\u65e5\u5fd7\u91cf\u7684\u9650\u5236\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"ingestion_rate_mb")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ingestion_burst_size_mb"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u6d4b\u8bd5\u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"ingestion_burst_size_mb")," \u8bbe\u7f6e\u4e3a 100 \u53ef\u4ee5\u786e\u4fdd APISIX \u4ee5\u81f3\u5c11 10000 RPS \u7684\u901f\u7387\u6b63\u786e\u63a8\u9001\u65e5\u5fd7\u3002"))))))}s.isMDXComponent=!0}}]);