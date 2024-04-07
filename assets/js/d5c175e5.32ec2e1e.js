"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[169],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const i={title:"Biweekly Report (August 28 - September 10)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/09/11/HoTbyoDz_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E5%85%AC%E4%BC%97%E5%8F%B7%E5%A4%B4%E5%9B%BE-%E8%8B%B1%E6%96%87-0911.png"},o=void 0,p={permalink:"/blog/2023/09/13/biweekly-report",source:"@site/blog/2023/09/13/biweekly-report.md",title:"Biweekly Report (August 28 - September 10)",description:"The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.",date:"2023-09-13T00:00:00.000Z",formattedDate:"September 13, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.04,truncated:!0,authors:[],prevItem:{title:"Charting the Future of Urban Connectivity: WeCity Collaborates with APISIX",permalink:"/blog/2023/09/20/wecity-uses-apisix"},nextItem:{title:"Coraza: Elevating APISIX with Cutting-Edge WAF Features",permalink:"/blog/2023/09/08/APISIX-integrates-with-Coraza"}},l={authorsImageUrls:[]},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Contributor Statistics",id:"contributor-statistics",children:[],level:2},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"APISIX Ingress Controller",id:"apisix-ingress-controller",children:[],level:3}],level:2},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[],level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We have recently made fixes and improvements to certain features of Apache APISIX and APISIX Ingress Controller. These include providing native JSON data structure input support for the wasm plugin, adding UNIX socket listening support for the ",(0,a.kt)("inlineCode",{parentName:"p"},"chaitin-waf")," plugin, and introducing the ability to remove the etcd dependency required by APISIX within the APISIX Ingress to reduce architectural complexity. For more details, please refer to the biweekly report.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Apache APISIX grew up as a community from the first day it was open-sourced, and quickly became the most active open-source API gateway project in the world. These achievements are inseparable from the joint efforts of community partners."),(0,a.kt)("p",null,"From 8.28 to 9.10, 16 contributors submitted 47 commits for Apache APISIX. Thank you for your contributions to Apache APISIX."),(0,a.kt)("p",null,"We have recently fixed and improved some features, and the summary of the updates is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide native JSON data structure input support for the wasm plugin")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add UNIX socket listening support for the ",(0,a.kt)("inlineCode",{parentName:"p"},"chaitin-waf")," plugin")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Introduce the ability to remove the etcd dependency required by APISIX within the APISIX Ingress to reduce architectural complexity (Experimental Feature)"))),(0,a.kt)("p",null,'"If you want to go fast, go alone. If you want to go far, go together." The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.'),(0,a.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/09/26/afJdz8VA_Group%204.png",alt:"Apache APISIX Contributors List"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/09/26/KLSzp6dh_0910.png",alt:"Apache APISIX New Contributors"})),(0,a.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,a.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10072"},"Provides native JSON data structure input support for the wasm plugin")," (Contributor: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sn0rt"},"Sn0rt"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10161"},"Add UNIX socket listening support for the ",(0,a.kt)("inlineCode",{parentName:"a"},"chaitin-waf")," plugin")," (Contributor: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zclaiqcc"},"zclaiqcc"),")"))),(0,a.kt)("h3",{id:"apisix-ingress-controller"},"APISIX Ingress Controller"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/1803"},"Introduce the ability to remove the etcd dependency required by APISIX within the APISIX Ingress to reduce architectural complexity")," (Contributor: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AlinsRan"},"AlinsRan"),")")),(0,a.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/09/08/APISIX-integrates-with-Coraza/"},"Coraza: Elevating APISIX with Cutting-Edge WAF Features")),(0,a.kt)("p",{parentName:"li"},"The integration of APISIX and Coraza provides reliable security protection and ensures the integrity and reliability of API services.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/09/01/release-apache-apisix-3.5.0/"},"Release Apache APISIX 3.5.0")),(0,a.kt)("p",{parentName:"li"},"We are pleased to present Apache APISIX 3.5.0 with exciting new features and improvements to user experiences."))),(0,a.kt)("p",null,"A wealth of documentation tutorials and experience has been accumulated on the Apache APISIX official website and GitHub. If you encounter problems, you can look into the documentation, search keywords in the issues, or participate in the discussion on the issues, proposing your own ideas and practical experience."))}u.isMDXComponent=!0}}]);