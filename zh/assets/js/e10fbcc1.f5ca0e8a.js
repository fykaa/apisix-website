"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[27421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,s=u["".concat(d,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35533:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"limit-conn",keywords:["APISIX","API \u7f51\u5173","Limit Connection"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX limit-conn \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9650\u5236\u5ba2\u6237\u7aef\u5bf9\u670d\u52a1\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002"},i=void 0,p={unversionedId:"plugins/limit-conn",id:"version-3.7/plugins/limit-conn",isDocsHomePage:!1,title:"limit-conn",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX limit-conn \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9650\u5236\u5ba2\u6237\u7aef\u5bf9\u670d\u52a1\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.7/plugins/limit-conn.md",sourceDirName:"plugins",slug:"/plugins/limit-conn",permalink:"/zh/docs/apisix/3.7/plugins/limit-conn",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.7/docs/zh/latest/plugins/limit-conn.md",tags:[],version:"3.7",frontMatter:{title:"limit-conn",keywords:["APISIX","API \u7f51\u5173","Limit Connection"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX limit-conn \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9650\u5236\u5ba2\u6237\u7aef\u5bf9\u670d\u52a1\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002"},sidebar:"version-3.7/docs",previous:{title:"limit-req",permalink:"/zh/docs/apisix/3.7/plugins/limit-req"},next:{title:"limit-count",permalink:"/zh/docs/apisix/3.7/plugins/limit-count"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]},{value:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",id:"\u5e94\u7528\u573a\u666f\u793a\u4f8b",children:[{value:"\u9650\u5236 WebSocket \u8fde\u63a5\u7684\u5e76\u53d1\u6570",id:"\u9650\u5236-websocket-\u8fde\u63a5\u7684\u5e76\u53d1\u6570",children:[]}]}],o={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," \u63d2\u4ef6\u7528\u4e8e\u9650\u5236\u5ba2\u6237\u7aef\u5bf9\u5355\u4e2a\u670d\u52a1\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u3002\u5f53\u5ba2\u6237\u7aef\u5bf9\u8def\u7531\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u8fbe\u5230\u9650\u5236\u65f6\uff0c\u53ef\u4ee5\u8fd4\u56de\u81ea\u5b9a\u4e49\u7684\u72b6\u6001\u7801\u548c\u54cd\u5e94\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conn"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"conn > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6700\u5927\u5e76\u53d1\u8bf7\u6c42\u6570\u3002\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"conn")," \u7684\u9650\u5236\u3001\u4f46\u662f\u4f4e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst")," \u7684\u8bf7\u6c42\uff0c\u5c06\u88ab\u5ef6\u8fdf\u5904\u7406\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burst"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u5141\u8bb8\u88ab\u5ef6\u8fdf\u5904\u7406\u7684\u989d\u5916\u5e76\u53d1\u8bf7\u6c42\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default_conn_delay"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"default_conn_delay > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684\u5178\u578b\u8fde\u63a5\uff08\u6216\u8bf7\u6c42\uff09\u7684\u5904\u7406\u5ef6\u8fdf\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"only_use_default_delay"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4\u7684\u4e25\u683c\u6a21\u5f0f\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u4f1a\u4e25\u683c\u6309\u7167\u8bbe\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"default_conn_delay")," \u65f6\u95f4\u6765\u8fdb\u884c\u5ef6\u8fdf\u5904\u7406\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"var"'),(0,r.kt)("td",{parentName:"tr",align:null},'["var", "var_combination"]'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")," \u7684\u7c7b\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u505a\u8bf7\u6c42\u8ba1\u6570\u7684\u4f9d\u636e\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},'"var"'),"\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," \u4f1a\u88ab\u5f53\u4f5c\u53d8\u91cf\u540d\u79f0\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),"\uff1b\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},'"var_combination"'),"\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," \u4f1a\u5f53\u4f5c\u53d8\u91cf\u7ec4\u5408\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr $consumer_name"),"\uff1b\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," \u7684\u503c\u4e3a\u7a7a\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr")," \u4f1a\u88ab\u4f5c\u4e3a\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"td"},"key"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"503"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u6570\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst")," \u9608\u503c\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u6570\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst")," \u9608\u503c\u65f6\uff0c\u8fd4\u56de\u7684\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u542f\u7528\u63d2\u4ef6\u964d\u7ea7\u5e76\u81ea\u52a8\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"var"'),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"var_combination"'),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u6309\u4e0a\u8ff0\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u5728\u8fd9\u6761\u8def\u7531\u8d44\u6e90\u4e0a\uff0cAPISIX \u5c06\u53ea\u5141\u8bb8\u4e00\u4e2a\u8fde\u63a5\uff1b\u5f53\u6709\u66f4\u591a\u8fde\u63a5\u8fdb\u5165\u65f6\uff0cAPISIX \u4f1a\u76f4\u63a5\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," HTTP \u72b6\u6001\u7801\uff0c\u62d2\u7edd\u8fde\u63a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html?sleep=20 &\n\ncurl -i http://127.0.0.1:9080/index.html?sleep=20\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u5e94\u7528\u573a\u666f\u793a\u4f8b"},"\u5e94\u7528\u573a\u666f\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u9650\u5236-websocket-\u8fde\u63a5\u7684\u5e76\u53d1\u6570"},"\u9650\u5236 WebSocket \u8fde\u63a5\u7684\u5e76\u53d1\u6570"),(0,r.kt)("p",null,"Apache APISIX \u652f\u6301 WebSocket \u4ee3\u7406\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," \u63d2\u4ef6\u9650\u5236 WebSocket \u8fde\u63a5\u7684\u5e76\u53d1\u6570\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u8def\u7531\u5e76\u542f\u7528 WebSocket \u4ee3\u7406\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," \u63d2\u4ef6\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/ws",\n    "enable_websocket": true,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",{parentName:"li"},"\u4e0a\u8ff0\u8def\u7531\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/ws")," \u4e0a\u5f00\u542f\u4e86 WebSocket \u4ee3\u7406\uff0c\u5e76\u9650\u5236\u4e86 WebSocket \u8fde\u63a5\u5e76\u53d1\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5f53 WebSocket \u8fde\u63a5\u5e76\u53d1\u6570\u8d85\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u65f6\uff0cAPISIX \u5c06\u4f1a\u62d2\u7edd\u8bf7\u6c42\uff0c\u5e76\u8fd4\u56de HTTP \u72b6\u6001\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"503"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53d1\u8d77 WebSocket \u8bf7\u6c42\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"101")," HTTP \u72b6\u6001\u7801\u8868\u793a\u8fde\u63a5\u5efa\u7acb\u6210\u529f\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --include \\\n    --no-buffer \\\n    --header "Connection: Upgrade" \\\n    --header "Upgrade: websocket" \\\n    --header "Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==" \\\n    --header "Sec-WebSocket-Version: 13" \\\n    --http1.1 \\\n    http://127.0.0.1:9080/ws\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 101 Switching Protocols\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u4e2d\u518d\u6b21\u53d1\u8d77 WebSocket \u8bf7\u6c42\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," HTTP \u72b6\u6001\u7801\u8868\u793a\u8bf7\u6c42\u5c06\u88ab\u62d2\u7edd\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\n\xb7\xb7\xb7\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")))))}m.isMDXComponent=!0}}]);