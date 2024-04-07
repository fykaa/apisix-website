"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[27598],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,s=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81410:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"rocketmq-logger",keywords:["APISIX","API \u7f51\u5173","Plugin","RocketMQ"],description:"API \u7f51\u5173 Apache APISIX \u7684 rocketmq-logger \u63d2\u4ef6\u7528\u4e8e\u5c06\u65e5\u5fd7\u4f5c\u4e3a JSON \u5bf9\u8c61\u63a8\u9001\u5230 Apache RocketMQ \u96c6\u7fa4\u4e2d\u3002"},i=void 0,p={unversionedId:"plugins/rocketmq-logger",id:"version-3.5/plugins/rocketmq-logger",isDocsHomePage:!1,title:"rocketmq-logger",description:"API \u7f51\u5173 Apache APISIX \u7684 rocketmq-logger \u63d2\u4ef6\u7528\u4e8e\u5c06\u65e5\u5fd7\u4f5c\u4e3a JSON \u5bf9\u8c61\u63a8\u9001\u5230 Apache RocketMQ \u96c6\u7fa4\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.5/plugins/rocketmq-logger.md",sourceDirName:"plugins",slug:"/plugins/rocketmq-logger",permalink:"/zh/docs/apisix/3.5/plugins/rocketmq-logger",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.5/docs/zh/latest/plugins/rocketmq-logger.md",tags:[],version:"3.5",frontMatter:{title:"rocketmq-logger",keywords:["APISIX","API \u7f51\u5173","Plugin","RocketMQ"],description:"API \u7f51\u5173 Apache APISIX \u7684 rocketmq-logger \u63d2\u4ef6\u7528\u4e8e\u5c06\u65e5\u5fd7\u4f5c\u4e3a JSON \u5bf9\u8c61\u63a8\u9001\u5230 Apache RocketMQ \u96c6\u7fa4\u4e2d\u3002"},sidebar:"version-3.5/docs",previous:{title:"kafka-logger",permalink:"/zh/docs/apisix/3.5/plugins/kafka-logger"},next:{title:"udp-logger",permalink:"/zh/docs/apisix/3.5/plugins/udp-logger"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"meta_format \u793a\u4f8b",id:"meta_format-\u793a\u4f8b",children:[]}]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],d={toc:o};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," \u63d2\u4ef6\u53ef\u4ee5\u5c06\u65e5\u5fd7\u4ee5 JSON \u7684\u5f62\u5f0f\u63a8\u9001\u7ed9\u5916\u90e8 RocketMQ \u96c6\u7fa4\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nameserver_list"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RocketMQ \u7684 nameserver \u5217\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8981\u63a8\u9001\u7684 topic \u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6d88\u606f\u7684 keys\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6d88\u606f\u7684 tags\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/3.5/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"NGINX \u5185\u7f6e\u53d8\u91cf"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_tls"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5f00\u542f TLS \u52a0\u5bc6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ACL \u8ba4\u8bc1\u7684 Access key\uff0c\u7a7a\u5b57\u7b26\u4e32\u8868\u793a\u4e0d\u5f00\u542f ACL\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ACL \u8ba4\u8bc1\u7684 Secret key\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"rocketmq logger"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Batch Processor \u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta_format"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"default"'),(0,r.kt)("td",{parentName:"tr",align:null},'["default"\uff0c"origin"]'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"),"\uff1a\u83b7\u53d6\u8bf7\u6c42\u4fe1\u606f\u4ee5\u9ed8\u8ba4\u7684 JSON \u7f16\u7801\u65b9\u5f0f\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"origin"),"\uff1a\u83b7\u53d6\u8bf7\u6c42\u4fe1\u606f\u4ee5 HTTP \u539f\u59cb\u8bf7\u6c42\u65b9\u5f0f\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"#meta_format-%E7%A4%BA%E4%BE%8B"},"meta_format"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5305\u542b\u8bf7\u6c42\u4f53\u3002",(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u8bf7\u6c42\u4f53\u65e0\u6cd5\u5b8c\u5168\u5b58\u653e\u5728\u5185\u5b58\u4e2d\uff0c\u7531\u4e8e NGINX \u7684\u9650\u5236\uff0cAPISIX \u65e0\u6cd5\u5c06\u5b83\u8bb0\u5f55\u4e0b\u6765\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"include_req_body")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u8fdb\u884c\u8fc7\u6ee4\u8bf7\u6c42\u4f53\uff0c\u5e76\u4e14\u53ea\u6709\u5f53\u6b64\u5904\u8bbe\u7f6e\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u624d\u4f1a\u8bb0\u5f55\u8bf7\u6c42\u4f53\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5305\u542b\u54cd\u5e94\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"include_resp_body")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u8fdb\u884c\u8fc7\u6ee4\u54cd\u5e94\u4f53\uff0c\u5e76\u4e14\u53ea\u6709\u5f53\u6b64\u5904\u8bbe\u7f6e\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u624d\u4f1a\u8bb0\u5f55\u54cd\u5e94\u4f53\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),"\u3002")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aschema \u4e2d\u8fd8\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"secret_key"}'),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5b57\u6bb5\u5c06\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u5177\u4f53\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.5/plugin-develop#%E5%8A%A0%E5%AF%86%E5%AD%98%E5%82%A8%E5%AD%97%E6%AE%B5"},"\u52a0\u5bc6\u5b58\u50a8\u5b57\u6bb5"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.5/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6570\u636e\u9996\u5148\u5199\u5165\u7f13\u51b2\u533a\u3002\u5f53\u7f13\u51b2\u533a\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"batch_max_size")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer_duration")," \u8bbe\u7f6e\u7684\u503c\u65f6\uff0c\u5219\u4f1a\u5c06\u6570\u636e\u53d1\u9001\u5230 RocketMQ \u670d\u52a1\u5668\u5e76\u5237\u65b0\u7f13\u51b2\u533a\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u53d1\u9001\u6210\u529f\uff0c\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5219\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"\uff0c\u5e76\u5e26\u6709\u63cf\u8ff0\u9519\u8bef\u7684\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer overflow"),"\u3002"))),(0,r.kt)("h3",{id:"meta_format-\u793a\u4f8b"},"meta_format \u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n     "upstream": "127.0.0.1:1980",\n     "start_time": 1619414294760,\n     "client_ip": "127.0.0.1",\n     "service_id": "",\n     "route_id": "1",\n     "request": {\n       "querystring": {\n         "ab": "cd"\n       },\n       "size": 90,\n       "uri": "/hello?ab=cd",\n       "url": "http://localhost:1984/hello?ab=cd",\n       "headers": {\n         "host": "localhost",\n         "content-length": "6",\n         "connection": "close"\n       },\n       "body": "abcdef",\n       "method": "GET"\n     },\n     "response": {\n       "headers": {\n         "connection": "close",\n         "content-type": "text/plain; charset=utf-8",\n         "date": "Mon, 26 Apr 2021 05:18:14 GMT",\n         "server": "APISIX/2.5",\n         "transfer-encoding": "chunked"\n       },\n       "size": 190,\n       "status": 200\n     },\n     "server": {\n       "hostname": "localhost",\n       "version": "2.5"\n     },\n     "latency": 0\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"origin:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"    GET /hello?ab=cd HTTP/1.1\n    host: localhost\n    content-length: 6\n    connection: close\n\n    abcdef\n")),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"NGINX \u5185\u7f6e\u53d8\u91cf"),"\u3002")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be5\u8bbe\u7f6e\u5168\u5c40\u751f\u6548\u3002\u5982\u679c\u6307\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"log_format"),"\uff0c\u5219\u6240\u6709\u7ed1\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," \u7684\u8def\u7531\u6216\u670d\u52a1\u90fd\u5c06\u4f7f\u7528\u8be5\u65e5\u5fd7\u683c\u5f0f\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7 Admin API \u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/rocketmq-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u65e5\u5fd7\u6536\u96c6\u5904\uff0c\u5c06\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "rocketmq-logger": {\n           "nameserver_list" : [ "127.0.0.1:9876" ],\n           "topic" : "test2",\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u8fd8\u652f\u6301\u4e00\u6b21\u63a8\u9001\u5230\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"nameserver"),"\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "127.0.0.1:9876",\n    "127.0.0.2:9876"\n]\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);