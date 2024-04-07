"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40584],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70939:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"sls-logger"},i=void 0,o={unversionedId:"plugins/sls-logger",id:"version-3.7/plugins/sls-logger",isDocsHomePage:!1,title:"sls-logger",description:"sls-logger \u662f\u4f7f\u7528 RF5424 \u6807\u51c6\u5c06\u65e5\u5fd7\u6570\u636e\u4ee5 JSON \u683c\u5f0f\u53d1\u9001\u5230 \u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.7/plugins/sls-logger.md",sourceDirName:"plugins",slug:"/plugins/sls-logger",permalink:"/zh/docs/apisix/3.7/plugins/sls-logger",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.7/docs/zh/latest/plugins/sls-logger.md",tags:[],version:"3.7",frontMatter:{title:"sls-logger"},sidebar:"version-3.7/docs",previous:{title:"error-log-logger",permalink:"/zh/docs/apisix/3.7/plugins/error-log-logger"},next:{title:"google-cloud-logging",permalink:"/zh/docs/apisix/3.7/plugins/google-cloud-logging"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[{value:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]}]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],s={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sls-logger")," \u662f\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"RF5424")," \u6807\u51c6\u5c06\u65e5\u5fd7\u6570\u636e\u4ee5 JSON \u683c\u5f0f\u53d1\u9001\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/112903.html?spm=a2c4g.11186623.6.763.21321b47wcwt1u"},"\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u63d0\u4f9b\u4e86\u5c06 Log Data \u4f5c\u4e3a\u6279\u5904\u7406\u63a8\u9001\u5230\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u5668\u7684\u529f\u80fd\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u65e5\u5fd7\u6570\u636e\uff0c\u8bf7\u653e\u5fc3\u4e00\u4e9b\u65f6\u95f4\uff0c\u5b83\u4f1a\u5728\u6211\u4eec\u7684\u6279\u5904\u7406\u5904\u7406\u5668\u4e2d\u7684\u8ba1\u65f6\u5668\u529f\u80fd\u5230\u671f\u540e\u81ea\u52a8\u53d1\u9001\u65e5\u5fd7\u3002"),(0,r.kt)("p",null,"\u6709\u5173 Apache APISIX \u4e2d Batch-Processor \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.7/batch-processor"},"Batch-Processor")),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP \u670d\u52a1\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/29008.html?spm=a2c4g.11186623.2.14.49301b4793uX0z#reference-wgx-pwq-zdb"},"\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u5217\u8868"),"\uff0c\u5efa\u8bae\u914d\u7f6e IP \u53d6\u4ee3\u914d\u7f6e\u57df\u540d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3\uff0c\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u9ed8\u8ba4\u7aef\u53e3\u4e3a 10009\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u8d85\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/3.7/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"NGINX \u5185\u7f6e\u53d8\u91cf"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u8981\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u670d\u52a1 Project \u540d\u79f0\uff0c\u8bf7\u63d0\u524d\u5728\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u4e2d\u521b\u5efa Project\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logstore"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u670d\u52a1 Logstore \u540d\u79f0\uff0c\u8bf7\u63d0\u524d\u5728\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u4e2d\u521b\u5efa Logstore\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"AccessKey ID\u3002\u5efa\u8bae\u4f7f\u7528\u963f\u91cc\u4e91\u5b50\u8d26\u53f7 AK\uff0c\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/47664.html?spm=a2c4g.11186623.2.15.49301b47lfvxXP#task-xsk-ttc-ry"},"\u6388\u6743"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"AccessKey Secret\u3002\u5efa\u8bae\u4f7f\u7528\u963f\u91cc\u4e91\u5b50\u8d26\u53f7 AK\uff0c\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/47664.html?spm=a2c4g.11186623.2.15.49301b47lfvxXP#task-xsk-ttc-ry"},"\u6388\u6743"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5305\u542b\u8bf7\u6c42\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7684"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6279\u5904\u7406\u540d\u5b57\u3002")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aschema \u4e2d\u8fd8\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"access_key_secret"}'),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5b57\u6bb5\u5c06\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u5177\u4f53\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.7/plugin-develop#%E5%8A%A0%E5%AF%86%E5%AD%98%E5%82%A8%E5%AD%97%E6%AE%B5"},"\u52a0\u5bc6\u5b58\u50a8\u5b57\u6bb5"),"\u3002"),(0,r.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.7/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u5185\u7f6e\u53d8\u91cf"),"\u3002\u7279\u522b\u7684\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u8be5\u8bbe\u7f6e\u662f\u5168\u5c40\u751f\u6548\u7684"),"\uff0c\u610f\u5473\u7740\u6307\u5b9a log_format \u540e\uff0c\u5c06\u5bf9\u6240\u6709\u7ed1\u5b9a sls-logger \u7684 Route \u6216 Service \u751f\u6548\u3002")))),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/sls-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u65e5\u5fd7\u6536\u96c6\u5904\uff0c\u5c06\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u9762\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4e3a\u6307\u5b9a\u8def\u7531\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"li"},"sls-logger")," \u63d2\u4ef6\u7684\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "sls-logger": {\n            "host": "100.100.99.135",\n            "port": 10009,\n            "project": "your_project",\n            "logstore": "your_logstore",\n            "access_key_id": "your_access_key_id",\n            "access_key_secret": "your_access_key_secret",\n            "timeout": 30000\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6ce8\u91ca\uff1a\u8fd9\u91cc\u7684 100.100.99.135 \u662f\u963f\u91cc\u4e91\u534e\u5317 3 \u5185\u5916\u5730\u5740\u3002\n")),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6210\u529f\u7684\u60c5\u51b5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u4e0a\u4f20\u8bb0\u5f55\n",(0,r.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/apache/apisix/release/3.7/docs/assets/images/plugin/sls-logger-1.png",alt:"sls logger view",title:"\u963f\u91cc\u4e91\u65e5\u5fd7\u670d\u52a1\u9884\u89c8"}))),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u60f3\u8981\u7981\u7528\u201csls-logger\u201d\u63d2\u4ef6\uff0c\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u5c06\u5bf9\u5e94\u7684\u63d2\u4ef6\u914d\u7f6e\u4ece json \u914d\u7f6e\u5220\u9664\uff0c\u5c31\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);