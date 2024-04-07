"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,u=c["".concat(d,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61339:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"cors",keywords:["APISIX","API Gateway","CORS"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX cors \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,o={unversionedId:"plugins/cors",id:"version-3.2/plugins/cors",isDocsHomePage:!1,title:"cors",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX cors \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.2/plugins/cors.md",sourceDirName:"plugins",slug:"/plugins/cors",permalink:"/zh/docs/apisix/3.2/plugins/cors",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.2/docs/zh/latest/plugins/cors.md",tags:[],version:"3.2",frontMatter:{title:"cors",keywords:["APISIX","API Gateway","CORS"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX cors \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.2/docs",previous:{title:"forward-auth",permalink:"/zh/docs/apisix/3.2/plugins/forward-auth"},next:{title:"uri-blocker",permalink:"/zh/docs/apisix/3.2/plugins/uri-blocker"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cors")," \u63d2\u4ef6\u53ef\u4ee5\u8ba9\u4f60\u8f7b\u677e\u5730\u4e3a\u670d\u52a1\u7aef\u542f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS"),"\uff08Cross-Origin Resource Sharing\uff0c\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u7684\u8fd4\u56de\u5934\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_origins"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"*"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684 Origin\uff0c\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"scheme://host:port"),"\uff0c\u793a\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"https://somedomain.com:8081"),"\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a Origin\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},",")," \u5206\u9694\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," \u6765\u8868\u793a\u5141\u8bb8\u6240\u6709 Origin \u901a\u8fc7\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u542f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"**")," \u5f3a\u5236\u5141\u8bb8\u6240\u6709 Origin \u5747\u901a\u8fc7\uff0c\u4f46\u8bf7\u6ce8\u610f\u8fd9\u6837\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_methods"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"*"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684 Method\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"GET"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"POST")," \u7b49\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a Method\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},",")," \u5206\u5272\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," \u6765\u8868\u793a\u5141\u8bb8\u6240\u6709 Method \u901a\u8fc7\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u542f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"**")," \u5f3a\u5236\u5141\u8bb8\u6240\u6709 Method \u90fd\u901a\u8fc7\uff0c\u4f46\u8bf7\u6ce8\u610f\u8fd9\u6837\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"*"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u65f6\u8bf7\u6c42\u65b9\u643a\u5e26\u54ea\u4e9b\u975e ",(0,r.kt)("inlineCode",{parentName:"td"},"CORS \u89c4\u8303")," \u4ee5\u5916\u7684 Header\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a Header\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},",")," \u5206\u5272\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," \u6765\u8868\u793a\u5141\u8bb8\u6240\u6709 Header \u901a\u8fc7\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u542f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"**")," \u5f3a\u5236\u5141\u8bb8\u6240\u6709 Header \u90fd\u901a\u8fc7\uff0c\u4f46\u8bf7\u6ce8\u610f\u8fd9\u6837\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expose_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"*"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u65f6\u54cd\u5e94\u65b9\u643a\u5e26\u54ea\u4e9b\u975e ",(0,r.kt)("inlineCode",{parentName:"td"},"CORS \u89c4\u8303")," \u4ee5\u5916\u7684 Header\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a Header\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},",")," \u5206\u5272\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"*")," \u6765\u8868\u793a\u5141\u8bb8\u4efb\u610f Header\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u542f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_credential")," \u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"**")," \u5f3a\u5236\u5141\u8bb8\u4efb\u610f Header\uff0c\u4f46\u8bf7\u6ce8\u610f\u8fd9\u6837\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_age"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u7f13\u5b58 CORS \u7ed3\u679c\u7684\u6700\u5927\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u5728\u8fd9\u4e2a\u65f6\u95f4\u8303\u56f4\u5185\uff0c\u6d4f\u89c8\u5668\u4f1a\u590d\u7528\u4e0a\u4e00\u6b21\u7684\u68c0\u67e5\u7ed3\u679c\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," \u8868\u793a\u4e0d\u7f13\u5b58\u3002\u8bf7\u6ce8\u610f\u5404\u4e2a\u6d4f\u89c8\u5668\u5141\u8bb8\u7684\u6700\u5927\u65f6\u95f4\u4e0d\u540c\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age#directives"},"Access-Control-Max-Age - MDN"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_credential"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684\u8bf7\u6c42\u65b9\u643a\u5e26\u51ed\u636e\uff08\u5982 Cookie \u7b49\uff09\u3002\u6839\u636e CORS \u89c4\u8303\uff0c\u5982\u679c\u8bbe\u7f6e\u8be5\u9009\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u90a3\u4e48\u5c06\u4e0d\u80fd\u5728\u5176\u4ed6\u5c5e\u6027\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"*"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_origins_by_regex"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"nil"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6570\u7ec4\u6765\u5339\u914d\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684 Origin\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},'[".*\\.test.com"]')," \u53ef\u4ee5\u5339\u914d\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"td"},"test.com")," \u7684\u5b50\u57df\u540d ",(0,r.kt)("inlineCode",{parentName:"td"},"*"),"\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_origins_by_regex")," \u5c5e\u6027\u5df2\u7ecf\u6307\u5b9a\uff0c\u5219\u4f1a\u5ffd\u7565 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_origins")," \u5c5e\u6027\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_origins_by_metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"nil"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u5f15\u7528\u63d2\u4ef6\u5143\u6570\u636e\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_origins")," \u914d\u7f6e\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684 Origin\u3002\u6bd4\u5982\u5f53\u63d2\u4ef6\u5143\u6570\u636e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},'"allow_origins": {"EXAMPLE": "https://example.com"}')," \u65f6\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},'["EXAMPLE"]')," \u5c06\u5141\u8bb8 Origin ",(0,r.kt)("inlineCode",{parentName:"td"},"https://example.com")," \u7684\u8bbf\u95ee\u3002")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"allow_credential")," \u662f\u4e00\u4e2a\u5f88\u654f\u611f\u7684\u9009\u9879\uff0c\u8bf7\u8c28\u614e\u5f00\u542f\u3002\u5f00\u542f\u4e4b\u540e\uff0c\u5176\u4ed6\u53c2\u6570\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," \u5c06\u5931\u6548\uff0c\u4f60\u5fc5\u987b\u663e\u5f0f\u6307\u5b9a\u5b83\u4eec\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"**")," \u65f6\uff0c\u9700\u8981\u6e05\u695a\u8be5\u53c2\u6570\u5f15\u5165\u7684\u4e00\u4e9b\u5b89\u5168\u9690\u60a3\uff0c\u6bd4\u5982 CSRF\uff0c\u5e76\u786e\u4fdd\u8fd9\u6837\u7684\u5b89\u5168\u7b49\u7ea7\u7b26\u5408\u81ea\u5df1\u9884\u671f\u3002")))),(0,r.kt)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_origins"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684 Origin\uff1b\u5b83\u7684\u952e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_origins_by_metadata")," \u4f7f\u7528\u7684\u5f15\u7528\u952e\uff0c\u503c\u5219\u4e3a\u5141\u8bb8\u8de8\u57df\u8bbf\u95ee\u7684 Origin\uff0c\u5176\u8bed\u4e49\u4e0e\u5c5e\u6027\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"allow_origins")," \u76f8\u540c\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8def\u7531\u6216\u670d\u52a1\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"cors")," \u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"cors")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "cors": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u63d2\u4ef6\u662f\u5426\u542f\u7528\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -v\n")),(0,r.kt)("p",null,"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e2d\u51fa\u73b0 CORS \u76f8\u5173\u7684 header\uff0c\u5219\u4ee3\u8868\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"...\n< Server: APISIX web server\n< Access-Control-Allow-Origin: *\n< Access-Control-Allow-Methods: *\n< Access-Control-Allow-Headers: *\n< Access-Control-Expose-Headers: *\n< Access-Control-Max-Age: 5\n...\n")),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"cors")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);