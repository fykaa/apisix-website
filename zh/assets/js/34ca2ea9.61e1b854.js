"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[44010],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35547:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"node-status",keywords:["Apache APISIX","API \u7f51\u5173","\u63d2\u4ef6","Node status"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX node-status \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},i=void 0,p={unversionedId:"plugins/node-status",id:"version-3.1/plugins/node-status",isDocsHomePage:!1,title:"node-status",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX node-status \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/node-status.md",sourceDirName:"plugins",slug:"/plugins/node-status",permalink:"/zh/docs/apisix/3.1/plugins/node-status",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/node-status.md",tags:[],version:"3.1",frontMatter:{title:"node-status",keywords:["Apache APISIX","API \u7f51\u5173","\u63d2\u4ef6","Node status"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX node-status \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},sidebar:"version-3.1/docs",previous:{title:"prometheus",permalink:"/zh/docs/apisix/3.1/plugins/prometheus"},next:{title:"datadog",permalink:"/zh/docs/apisix/3.1/plugins/datadog"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u63d2\u4ef6\u5c5e\u6027",id:"\u63d2\u4ef6\u5c5e\u6027",children:[]},{value:"\u63d2\u4ef6\u63a5\u53e3",id:"\u63d2\u4ef6\u63a5\u53e3",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:o};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"node-status")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u901a\u8fc7\u66b4\u9732\u7684 API \u67e5\u8be2 APISIX \u7684\u8bf7\u6c42\u72b6\u6001\uff0c\u5e76\u8fd4\u56de\u57fa\u672c\u7684\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5c5e\u6027"},"\u63d2\u4ef6\u5c5e\u6027"),(0,r.kt)("p",null,"\u65e0\u3002"),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u63a5\u53e3"},"\u63d2\u4ef6\u63a5\u53e3"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u5c06\u4f1a\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/status")," \u7684\u63a5\u53e3\u7528\u6765\u66b4\u9732 APISIX \u7684\u72b6\u6001\uff0c\u4f60\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/plugins/public-api"},"public-api")," \u63d2\u4ef6\u6765\u66b4\u9732\u8be5\u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"node-status")," \u63d2\u4ef6\u9ed8\u8ba4\u4e3a\u7981\u7528\u72b6\u6001\uff0c\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528\u8be5\u63d2\u4ef6\uff0c\u8bf7\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u4e2d\u542f\u7528\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},"plugins:\n  - limit-req\n  - node-status\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/status")," API \u914d\u7f6e\u8def\u7531\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/plugins/public-api"},"public-api")," \u63d2\u4ef6\u66b4\u9732\u5b83\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/ns -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/status",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u914d\u7f6e\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/status")," \u53d1\u9001\u8bf7\u6c42\u4ee5\u83b7\u53d6\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/status -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Tue, 03 Nov 2020 11:12:55 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"status":{"total":"23","waiting":"0","accepted":"22","writing":"1","handled":"22","active":"1","reading":"0"},"id":"6790a064-8f61-44ba-a6d3-5df42f2b1bb3"}\n')),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u53c2\u6570\u91ca\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX \u7684\u72b6\u6001\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u603b\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waiting"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7b49\u5f85\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u7a7a\u95f2\u8fde\u63a5\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepted"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5df2\u7ecf\u63a5\u53d7\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u603b\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"writing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u5199\u7ed9\u5ba2\u6237\u7aef\u54cd\u5e94\u7684\u8fde\u63a5\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5df2\u7ecf\u5904\u7406\u7684\u8fde\u63a5\u603b\u6570\uff0c\u9664\u975e\u8fbe\u5230\u5176\u4ed6\u8d44\u6e90\u7684\u9650\u5236\uff0c\u5426\u5219\u6b64\u503c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"accepted")," \u76f8\u540c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6d3b\u8dc3\u7684\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reading"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6b63\u5728\u8bfb\u53d6\u8bf7\u6c42\u5934\u7684\u8fde\u63a5\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX UID \u4fe1\u606f\uff0c\u4fdd\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"td"},"./conf/apisix.uid")," \u6587\u4ef6\u4e2d\u3002")))),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u518d\u9700\u8981\u8be5\u63d2\u4ef6\uff0c\u53ef\u4ee5\u4ece\u914d\u7f6e\u6587\u4ef6 (",(0,r.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),") \u4e2d\u5220\u9664\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"  - limit-req\n  - jwt-auth\n  - zipkin\n  ......\n")),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u79fb\u9664\u66b4\u9732 ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/status")," \u63a5\u53e3\u7684\u8def\u7531\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/routes/ns -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")))}u.isMDXComponent=!0}}]);