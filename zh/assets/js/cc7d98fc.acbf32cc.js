"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[13116],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||s[d]||l;return a?n.createElement(h,p(p({ref:t},m),{},{components:a})):n.createElement(h,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<l;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30300:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(25773),r=(a(27378),a(35318));const l={title:"\u5982\u4f55\u4f7f\u7528 DataAnt \u76d1\u63a7 Apache APISIX",authors:[{name:"\u97e9\u98de",title:"Author",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png"}],keywords:["Apache APISIX","API \u7f51\u5173","\u53ef\u89c2\u6d4b\u6027","\u76d1\u63a7","DataAnt"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 DataAnt Agent \u5c06\u4e91\u539f\u751f API Gateway Apache APISIX \u7684\u6307\u6807\u6570\u636e\u4e0a\u4f20\u5230 DataAnt \u76d1\u63a7\u7cfb\u7edf\uff0c\u5b9e\u73b0\u5bf9 Apache APISIX \u8fdb\u884c\u76d1\u63a7\u3002",tags:["Ecosystem"]},p=void 0,i={permalink:"/zh/blog/2022/07/05/use-dataant-to-monitor-apisix",source:"@site/blog/2022/07/05/use-dataant-to-monitor-apisix.md",title:"\u5982\u4f55\u4f7f\u7528 DataAnt \u76d1\u63a7 Apache APISIX",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 DataAnt Agent \u5c06\u4e91\u539f\u751f API Gateway Apache APISIX \u7684\u6307\u6807\u6570\u636e\u4e0a\u4f20\u5230 DataAnt \u76d1\u63a7\u7cfb\u7edf\uff0c\u5b9e\u73b0\u5bf9 Apache APISIX \u8fdb\u884c\u76d1\u63a7\u3002",date:"2022-07-05T00:00:00.000Z",formattedDate:"2022\u5e747\u67085\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:4.66,truncated:!0,authors:[{name:"\u97e9\u98de",title:"Author",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png",imageURL:"https://github.com/hf400159.png"}],prevItem:{title:"\u4f7f\u7528 Keycloak \u4e0e API \u7f51\u5173\u4fdd\u62a4\u4f60\u7684 API",permalink:"/zh/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis"},nextItem:{title:"APISIX \u4e0e Ory Hydra \u96c6\u6210\u4e30\u5bcc\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f",permalink:"/zh/blog/2022/07/04/apisix-integrates-with-hydra"}},o={authorsImageUrls:[void 0]},c=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",children:[],level:2},{value:"\u539f\u7406\u7b80\u4ecb",id:"\u539f\u7406\u7b80\u4ecb",children:[],level:2},{value:"\u914d\u7f6e\u6307\u5357",id:"\u914d\u7f6e\u6307\u5357",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],m={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 DataAnt Agent \u5c06 API Gateway Apache APISIX \u7684\u6307\u6807\u6570\u636e\u4e0a\u4f20\u5230 DATAANT \u76d1\u63a7\u7cfb\u7edf\u3002")),(0,r.kt)("h2",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,r.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u4e91\u539f\u751f API \u7f51\u5173\uff0c\u4f5c\u4e3a API \u7f51\u5173\uff0c\u5b83\u517c\u5177\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7b49\u7279\u70b9\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Apache APISIX \u6765\u5904\u7406\u4f20\u7edf\u7684\u5357\u5317\u5411\u6d41\u91cf\uff0c\u4ee5\u53ca\u670d\u52a1\u95f4\u7684\u4e1c\u897f\u5411\u6d41\u91cf\uff0c\u4e5f\u53ef\u4ee5\u5f53\u505a K8s Ingress controller \u6765\u4f7f\u7528\u3002\u5f97\u76ca\u4e8e APISIX \u5168\u52a8\u6001\u7684\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u968f\u65f6\u8fdb\u884c\u914d\u7f6e\u66f4\u6539\u5e76\u4e14\u5747\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002"),(0,r.kt)("p",null,"DataAnt \u5168\u6808\u4e91\u76d1\u63a7\u7cfb\u7edf\u901a\u8fc7\u5927\u6570\u636e\u548c\u673a\u5668\u5b66\u4e60\u80fd\u591f\u6c47\u603b IaaS\u3001PaaS \u548c SaaS \u5c42\u6240\u6709\u8fd0\u7ef4\u6570\u636e\uff0c\u7ed9\u7528\u6237\u63d0\u4f9b\u7edf\u4e00\u53ef\u89c6\u5316\u754c\u9762\u3002DataAnt \u5141\u8bb8\u7528\u6237\u5728\u76f8\u5173\u76d1\u63a7\u6570\u636e\u6e90\u4e4b\u95f4\u65e0\u7f1d\u5feb\u901f\u5730\u79fb\u52a8\uff0c\u800c\u65e0\u9700\u5207\u6362\u5de5\u5177\uff0c\u66f4\u7cbe\u7ec6\u5730\u4e86\u89e3\u5230\u81ea\u5df1 IT \u7cfb\u7edf\u7684\u72b6\u6001\u3002\u5176\u63d0\u4f9b\u7684 DataAnt Agent \u53ef\u4ee5\u5b9e\u65f6\u76d1\u63a7 APISIX \u5e76\u5c06\u5176\u76d1\u63a7\u6570\u636e\u4e0a\u4f20\u5230 DataAnt PaSS \u5e73\u53f0\uff0c\u5b9e\u73b0\u4e91\u7aef\u4e00\u7ad9\u5f0f\u76d1\u63a7\u3002"),(0,r.kt)("h2",{id:"\u539f\u7406\u7b80\u4ecb"},"\u539f\u7406\u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0705/1.svg",alt:"principle"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u91c7\u96c6\u914d\u7f6e"),(0,r.kt)("p",{parentName:"li"},"DataAnt Agent \u9996\u5148\u4f1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u7684\u914d\u7f6e\u7684 APISIX \u9879\u8fdb\u884c\u91c7\u96c6\u5668\u521d\u59cb\u5316\u548c\u6ce8\u518c\u3002\u540c\u4e00\u4e2a Agent \u53ef\u4ee5\u6ce8\u518c\u591a\u4e2a\u91c7\u96c6\u5668\u3002\u91c7\u96c6\u5668\u6536\u96c6 APISIX \u66b4\u9732\u7684\u6307\u6807\u540e\uff0c\u5bf9\u6307\u6807\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u4e0a\u4f20\u5230 DataAnt Cloud\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u53ef\u89c6\u5316"),(0,r.kt)("p",{parentName:"li"},"DataAnt Cloud \u5728\u63a5\u6536\u5230\u6570\u636e\u540e\uff0c\u6570\u636e\u7ecf\u8fc7\u521d\u6b65\u7684\u76d1\u63a7\u4fe1\u606f\u8865\u5145\u548c\u5904\u7406\u4f1a\u5b58\u653e\u5230\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\uff0c\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7 DataAnt \u7684 Dashboard \u5b9e\u65f6\u76d1\u63a7 APISIX\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u544a\u8b66\u901a\u77e5"),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u8fd8\u5c06\u901a\u8fc7\u6d88\u606f\u5206\u53d1\u5230\u544a\u8b66\u5339\u914d\u5904\u7406\uff0c\u7136\u540e\u518d\u8fdb\u884c\u901a\u77e5\u805a\u5408\u6700\u7ec8\u901a\u8fc7\u914d\u7f6e\u7684\u901a\u77e5\u65b9\u5f0f\u5c06\u544a\u8b66\u53d1\u9001\uff0c\u5373\u53ef\u4ee5\u5b9e\u65f6\u63a5\u6536\u5230 APISIX \u7684\u5f02\u5e38\u60c5\u51b5\u3002"))),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6307\u5357"},"\u914d\u7f6e\u6307\u5357"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u8bf7\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"http://139.224.11.158"},"DataAnt Cloud"),"\uff0c\u6ce8\u518c\u8d26\u6237\u5e76\u767b\u5f55\u5e73\u53f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1fabvSiDLDh8ZRTjpzINHLg?pwd=87d4"},"\u4e0b\u8f7d\u94fe\u63a5"),"\u83b7\u53d6 DataAnt \u7684 Agent\uff0c\u4e0b\u8f7d\u5b8c\u6210\u540e\u4e0a\u4f20\u5230 APISIX \u6240\u5728\u7684\u673a\u5668\u4e0a\u5e76\u7ed9 Agent \u6dfb\u52a0\u6267\u884c\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa DataAnt Agent \u6240\u9700\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"./config.yaml"),"\u3002\u8be6\u7ec6\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tenantId: 11       # \u8be5 ID \u662f\u60a8\u7684 DataAnt \u5e73\u53f0\u7684\u7528\u6237 ID\nhostIp: 127.0.0.1  # \u4e3b\u673a\u7684\u6807\u8bc6 IP\nhostName: apisix\nconfigs:\n  - uri: http://127.0.0.1:9091  # APISIX \u76d1\u63a7\u6307\u6807\u6240\u66b4\u9732\u7684\u7aef\u53e3\n    type: apisix                # \u76d1\u63a7\u7c7b\u578b\u9009\u62e9 APISIX\n    asName: apisix_test         # \u522b\u540d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 Agent\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./agent\n")),(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8\u6210\u529f\u540e\uff0c\u5219\u4f1a\u8fd4\u56de\u4ee5\u4e0b\u6570\u636e\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'2022/06/21 20:50:10 {"code":200,"msg":"\u8bf7\u6c42\u6210\u529f","data":null}\n2022/06/21 20:50:30 {"code":200,"msg":"\u8bf7\u6c42\u6210\u529f","data":null}\n2022-06-21 20:51:00:000        INFO        apisix/apisix.go:25        \u83b7\u53d6\u5bf9\u5e94\u76d1\u63a7\u6570\u636e\uff0c\u6570\u636e\u957f\u5ea61675\n2022-06-21 20:51:00:000        INFO        prometheus/prometheusCollector.go:43        \u83b7\u53d6\u5bf9\u5e94\u76d1\u63a7\u6570\u636e\u5f00\u59cb\u89e3\u67901675\n2022-06-21 20:51:00:000        INFO        prometheus/prometheusCollector.go:43        \u83b7\u53d6\u5bf9\u5e94\u76d1\u63a7\u6570\u636e\u5b8c\u6210\u89e3\u6790 \u89e3\u6790\u6307\u6807\u6570\u91cf21\n2022-06-21 20:51:00:000        INFO        collector/collector.go:82        apisix\u91c7\u96c6\u5230\u6570\u636e\u6570\u91cf21\n2022-06-21 20:51:00:000        INFO        runtime/asm_amd64.s:1581        apisix_test9091:\u6307\u6807\u6570:21\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 DataAnt \u5e73\u53f0\u9996\u9875\u5355\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u5b89\u88c5\u96c6\u6210\u63d2\u4ef6"),">",(0,r.kt)("inlineCode",{parentName:"p"},"\u76d1\u63a7\u63d2\u4ef6"),"\uff0c\u9009\u62e9 APISIX\uff0c\u5e76\u5355\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e"),"\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u70b9\u51fb\u914d\u7f6e"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 DataAnt \u5e73\u53f0\u9996\u9875\u5355\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u4eea\u8868\u76d8"),"\u5e76\u65b0\u5efa\u4eea\u8868\u76d8\u3002\u9009\u62e9\u81ea\u5df1\u9700\u8981\u7684\u6307\u6807\uff0c\u5e76\u62d6\u62fd\u5230\u4eea\u8868\u76d8\u4e0a\uff0c\u914d\u7f6e\u5b8c\u6210\u7684\u6307\u6807\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0705/2.PNG",alt:"dashboard"})),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"DataAnt Agent \u6bcf\u9694 30 \u79d2\u4f1a\u4e0a\u62a5\u4e00\u6b21\u6570\u636e\uff0c\u56e0\u6b64\u4f1a\u5b58\u5728\u4e00\u5b9a\u7684\u5ef6\u8fdf\u3002"))))),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 DataAnt Agent \u4e0a\u4f20 APISIX \u7684\u6307\u6807\u6570\u636e\u5230 DATAANT \u76d1\u63a7\u7cfb\u7edf\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u540e\u7eed\u4f7f\u7528\u4e2d\u914d\u7f6e\u76f8\u5173\u62a5\u8b66\u89c4\u5219\u53ca\u62a5\u8b66\u8054\u7cfb\u4eba\uff0c\u5f53\u670d\u52a1\u51fa\u73b0\u6545\u969c\u65f6\u53ef\u4ee5\u53ca\u65f6\u5730\u901a\u77e5\u5230\u4f60\u3002"))}s.isMDXComponent=!0}}]);