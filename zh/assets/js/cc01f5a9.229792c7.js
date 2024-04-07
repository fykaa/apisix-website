"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[25436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85516:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u5165\u95e8\u6307\u5357",description:"\u672c\u6559\u7a0b\u4f7f\u7528\u811a\u672c\u5728\u672c\u5730\u73af\u5883\u5feb\u901f\u5b89\u88c5 Apache APISIX\uff0c\u5e76\u4e14\u901a\u8fc7\u7ba1\u7406 API \u6765\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"},l=void 0,p={unversionedId:"getting-started/README",id:"getting-started/README",isDocsHomePage:!1,title:"\u5165\u95e8\u6307\u5357",description:"\u672c\u6559\u7a0b\u4f7f\u7528\u811a\u672c\u5728\u672c\u5730\u73af\u5883\u5feb\u901f\u5b89\u88c5 Apache APISIX\uff0c\u5e76\u4e14\u901a\u8fc7\u7ba1\u7406 API \u6765\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/getting-started/README.md",sourceDirName:"getting-started",slug:"/getting-started/README",permalink:"/zh/docs/apisix/next/getting-started/README",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/getting-started/README.md",tags:[],version:"current",frontMatter:{title:"\u5165\u95e8\u6307\u5357",description:"\u672c\u6559\u7a0b\u4f7f\u7528\u811a\u672c\u5728\u672c\u5730\u73af\u5883\u5feb\u901f\u5b89\u88c5 Apache APISIX\uff0c\u5e76\u4e14\u901a\u8fc7\u7ba1\u7406 API \u6765\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"},sidebar:"docs",next:{title:"\u914d\u7f6e\u8def\u7531",permalink:"/zh/docs/apisix/next/getting-started/configure-routes"}},o=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[]},{value:"\u5b89\u88c5 APISIX",id:"\u5b89\u88c5-apisix",children:[]},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:o};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.api7.ai/apisix/getting-started/"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6559\u7a0b\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai")," \u7f16\u5199\u3002")),(0,a.kt)("p",null,"Apache APISIX \u662f Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u4e0b\u7684",(0,a.kt)("a",{parentName:"p",href:"https://projects.apache.org/project.html?apisix"},"\u9876\u7ea7\u9879\u76ee"),"\uff0c\u7531 API7.ai \u5f00\u53d1\u5e76\u6350\u8d60\u3002\u5b83\u662f\u4e00\u4e2a\u5177\u6709\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7b49\u7279\u70b9\u7684\u4e91\u539f\u751f API \u7f51\u5173\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 APISIX \u7f51\u5173\u4f5c\u4e3a\u6240\u6709\u4e1a\u52a1\u7684\u6d41\u91cf\u5165\u53e3\uff0c\u5b83\u63d0\u4f9b\u4e86\u52a8\u6001\u8def\u7531\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u52a8\u6001\u8bc1\u4e66\u3001A/B \u6d4b\u8bd5\u3001\u7070\u5ea6\u53d1\u5e03\uff08\u91d1\u4e1d\u96c0\u53d1\u5e03\uff09\u3001\u84dd\u7eff\u90e8\u7f72\u3001\u9650\u901f\u3001\u9632\u653b\u51fb\u3001\u6536\u96c6\u6307\u6807\u3001\u76d1\u63a7\u62a5\u8b66\u3001\u53ef\u89c2\u6d4b\u3001\u670d\u52a1\u6cbb\u7406\u7b49\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u4f7f\u7528\u811a\u672c\u5728\u672c\u5730\u73af\u5883\u5feb\u901f\u5b89\u88c5 Apache APISIX\uff0c\u5e76\u4e14\u901a\u8fc7\u7ba1\u7406 API \u6765\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("p",null,"\u5feb\u901f\u542f\u52a8\u811a\u672c\u9700\u8981\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"),"\uff0c\u7528\u4e8e\u90e8\u7f72  ",(0,a.kt)("strong",{parentName:"li"},"etcd")," \u548c ",(0,a.kt)("strong",{parentName:"li"},"APISIX"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://curl.se/"},"curl"),"\uff0c\u7528\u4e8e\u9a8c\u8bc1 APISIX \u662f\u5426\u5b89\u88c5\u6210\u529f\u3002")),(0,a.kt)("h2",{id:"\u5b89\u88c5-apisix"},"\u5b89\u88c5 APISIX"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u7ba1\u7406 API \u9ed8\u8ba4\u65e0\u9700\u6388\u6743\uff0c\u8bf7\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6253\u5f00\u6388\u6743\u5f00\u5173\u3002"))),(0,a.kt)("p",null,"APISIX \u53ef\u4ee5\u501f\u52a9 quickstart \u811a\u672c\u5feb\u901f\u5b89\u88c5\u5e76\u542f\u52a8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL https://run.api7.ai/apisix/quickstart | sh\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u542f\u52a8 ",(0,a.kt)("em",{parentName:"p"},"apisix-quickstart")," \u548c ",(0,a.kt)("em",{parentName:"p"},"etcd")," \u4e24\u4e2a\u5bb9\u5668\uff0cAPISIX \u4f7f\u7528 etcd \u4fdd\u5b58\u548c\u540c\u6b65\u914d\u7f6e\u3002APISIX \u548c etcd \u5bb9\u5668\u4f7f\u7528 Docker \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},(0,a.kt)("strong",{parentName:"a"},"host"))," \u7f51\u7edc\u6a21\u5f0f\uff0c\u56e0\u6b64\u53ef\u4ee5\u4ece\u672c\u5730\u76f4\u63a5\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u5c06\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u2714 APISIX is ready!\n")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 curl \u6765\u8bbf\u95ee\u6b63\u5728\u8fd0\u884c\u7684 APISIX \u5b9e\u4f8b\u3002\u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u53d1\u9001\u4e00\u4e2a\u7b80\u5355\u7684 HTTP \u8bf7\u6c42\u6765\u9a8c\u8bc1 APISIX \u8fd0\u884c\u72b6\u6001\u662f\u5426\u6b63\u5e38\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080" --head | grep Server\n')),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u5c06\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Server: APISIX/Version\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Version")," \u662f\u6307\u4f60\u5df2\u7ecf\u5b89\u88c5\u7684 APISIX \u7248\u672c\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX/3.3.0"),"\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u5e76\u8fd0\u884c\u4e86 APISIX\uff01"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6210\u529f\u5730\u5b89\u88c5\u4e86 APISIX \u5e76\u4e14\u6b63\u5e38\u8fd0\u884c\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u7ee7\u7eed\u8fdb\u884c\u4e0b\u9762\u7684\u6559\u7a0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/next/getting-started/configure-routes"},"\u914d\u7f6e\u8def\u7531")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/next/getting-started/load-balancing"},"\u8d1f\u8f7d\u5747\u8861")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/next/getting-started/rate-limiting"},"\u9650\u901f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/next/getting-started/key-authentication"},"\u5bc6\u94a5\u9a8c\u8bc1"))))}s.isMDXComponent=!0}}]);