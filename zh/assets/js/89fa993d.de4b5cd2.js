"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78809:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"\u9650\u901f",slug:"/getting-started/rate-limiting"},l=void 0,o={unversionedId:"getting-started/rate-limiting",id:"version-3.6/getting-started/rate-limiting",isDocsHomePage:!1,title:"\u9650\u901f",description:"\u672c\u6559\u7a0b\u7531 API7.ai \u7f16\u5199\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.6/getting-started/rate-limiting.md",sourceDirName:"getting-started",slug:"/getting-started/rate-limiting",permalink:"/zh/docs/apisix/3.6/getting-started/rate-limiting",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.6/docs/zh/latest/getting-started/rate-limiting.md",tags:[],version:"3.6",frontMatter:{title:"\u9650\u901f",slug:"/getting-started/rate-limiting"},sidebar:"version-3.6/docs",previous:{title:"\u5bc6\u94a5\u9a8c\u8bc1",permalink:"/zh/docs/apisix/3.6/getting-started/key-authentication"},next:{title:"APISIX \u5b89\u88c5\u6307\u5357",permalink:"/zh/docs/apisix/3.6/installation-guide"}},p=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[]},{value:"\u542f\u7528 Rate Limiting",id:"\u542f\u7528-rate-limiting",children:[{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[]}]},{value:"\u7981\u7528 Rate Limiting",id:"\u7981\u7528-rate-limiting",children:[{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1-1",children:[]}]},{value:"\u66f4\u591a",id:"\u66f4\u591a",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.api7.ai/apisix/getting-started/rate-limiting"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6559\u7a0b\u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai")," \u7f16\u5199\u3002")),(0,r.kt)("p",null,"APISIX \u662f\u4e00\u4e2a\u7edf\u4e00\u7684\u63a7\u5236\u4e2d\u5fc3\uff0c\u5b83\u7ba1\u7406 API \u548c\u5fae\u670d\u52a1\u7684\u8fdb\u51fa\u6d41\u91cf\u3002\u9664\u4e86\u5ba2\u6237\u7aef\u53d1\u6765\u7684\u5408\u7406\u7684\u8bf7\u6c42\uff0c\u8fd8\u53ef\u80fd\u5b58\u5728\u7f51\u7edc\u722c\u866b\u4ea7\u751f\u7684\u4e0d\u5fc5\u8981\u7684\u6d41\u91cf\uff0c\u6b64\u5916\uff0c\u7f51\u7edc\u653b\u51fb\uff08\u6bd4\u5982 DDos\uff09\u4e5f\u53ef\u80fd\u4ea7\u751f\u975e\u6cd5\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"APISIX \u63d0\u4f9b\u9650\u901f\u529f\u80fd\uff0c\u901a\u8fc7\u9650\u5236\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u53d1\u9001\u5230\u4e0a\u6e38\u670d\u52a1\u7684\u8bf7\u6c42\u6570\u91cf\u6765\u4fdd\u62a4 APIs \u548c\u5fae\u670d\u52a1\u3002\u8bf7\u6c42\u7684\u8ba1\u6570\u5728\u5185\u5b58\u4e2d\u5b8c\u6210\uff0c\u5177\u6709\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u6027\u80fd\u7684\u7279\u70b9\u3002"),(0,r.kt)("br",null),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://static.apiseven.com/uploads/2023/02/20/l9G9Kq41_rate-limiting.png",alt:"Routes Diagram"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u6765\u9650\u5236\u4f20\u5165\u6d41\u91cf\u7684\u901f\u7387\u3002"),(0,r.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.6/getting-started/README"},"\u5165\u95e8\u6307\u5357"),"\u5b8c\u6210 APISIX \u7684\u5b89\u88c5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.6/getting-started/configure-routes#route-%E6%98%AF%E4%BB%80%E4%B9%88"},"\u914d\u7f6e\u8def\u7531"),"\u3002")),(0,r.kt)("h2",{id:"\u542f\u7528-rate-limiting"},"\u542f\u7528 Rate Limiting"),(0,r.kt)("p",null,"\u5728\u6559\u7a0b",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.6/getting-started/configure-routes"},"\u914d\u7f6e\u8def\u7531"),"\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"getting-started-ip"),"\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," \u65b9\u6cd5\u4e3a\u8be5\u8def\u7531\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n  "plugins": {\n    "limit-count": {\n        "count": 2,\n        "time_window": 10,\n        "rejected_code": 503\n     }\n  }\n}\'\n')),(0,r.kt)("p",null,"\u5982\u679c\u589e\u52a0\u63d2\u4ef6\u6210\u529f\uff0c\u4f60\u5c06\u5f97\u5230\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 201 OK"),"\u3002\u4e0a\u8ff0\u914d\u7f6e\u5c06\u4f20\u5165\u6d41\u91cf\u7684\u901f\u7387\u9650\u5236\u4e3a\u6bcf 10 \u79d2\u6700\u591a 2 \u4e2a\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u6211\u4eec\u540c\u65f6\u751f\u6210 100 \u4e2a\u8bf7\u6c42\u6765\u6d4b\u8bd5\u9650\u901f\u63d2\u4ef6\u7684\u6548\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'count=$(seq 100 | xargs -i curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \\"200\\": $((100 - $count)), \\"503\\": $count\n')),(0,r.kt)("p",null,"\u8bf7\u6c42\u7ed3\u679c\u540c\u9884\u671f\u4e00\u81f4\uff1a\u5728\u8fd9 100 \u4e2a\u8bf7\u6c42\u4e2d\uff0c\u6709 2 \u4e2a\u8bf7\u6c42\u53d1\u9001\u6210\u529f\uff08\u72b6\u6001\u7801\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"\uff09\uff0c\u5176\u4ed6\u8bf7\u6c42\u5747\u88ab\u62d2\u7edd\uff08\u72b6\u6001\u7801\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"503"),"\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"200": 2, "503": 98\n')),(0,r.kt)("h2",{id:"\u7981\u7528-rate-limiting"},"\u7981\u7528 Rate Limiting"),(0,r.kt)("p",null,"\u5c06\u53c2\u6570\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"_meta.disable")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5373\u53ef\u7981\u7528\u9650\u901f\u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "_meta": {\n                "disable": true\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"\u9a8c\u8bc1-1"},"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u6211\u4eec\u518d\u6b21\u540c\u65f6\u751f\u6210 100 \u4e2a\u8bf7\u6c42\u6765\u6d4b\u8bd5\u9650\u901f\u63d2\u4ef6\u662f\u5426\u5df2\u88ab\u7981\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'count=$(seq 100 | xargs -i curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \\"200\\": $((100 - $count)), \\"503\\": $count\n')),(0,r.kt)("p",null,"\u7ed3\u679c\u663e\u793a\u6240\u6709\u7684\u8bf7\u6c42\u5747\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"200": 100, "503": 0\n')),(0,r.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 APISIX \u7684\u53d8\u91cf\u6765\u914d\u7f6e\u9650\u901f\u63d2\u4ef6\u7684\u89c4\u5219\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"$host")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"$uri"),"\u3002\u6b64\u5916\uff0cAPISIX \u4e5f\u652f\u6301\u4f7f\u7528 Redis \u96c6\u7fa4\u8fdb\u884c\u9650\u901f\u914d\u7f6e\uff0c\u5373\u901a\u8fc7 Redis \u6765\u8fdb\u884c\u8ba1\u6570\u3002"),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u606d\u559c\u4f60\uff01\u4f60\u5df2\u7ecf\u5b66\u4e60\u4e86\u5982\u4f55\u914d\u7f6e\u9650\u901f\u63d2\u4ef6\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u6240\u6709\u7684\u5165\u95e8\u6559\u7a0b\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u7ee7\u7eed\u5b66\u4e60\u5176\u4ed6\u6587\u6863\u6765\u5b9a\u5236 APISIX\uff0c\u4ee5\u6ee1\u8db3\u4f60\u7684\u751f\u4ea7\u73af\u5883\u9700\u8981\u3002"))}s.isMDXComponent=!0}}]);