"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[12012],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},60202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(25773),o=(a(27378),a(35318));const r={title:"Why do you need Apache APISIX when you have NGINX and Kong?",author:"Fei Han",authorURL:"https://github.com/hf400159",authorImageURL:"https://github.com/hf400159.png",keywords:["APISIX","API Gateway","Kong","Nginx","Open Source","API Management"],description:"This article introduces how the cloud native API gateway Apache APISIX solves the business pain points and usage scenarios brought by Nginx and Kong.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/11/07/636916ea65769.png"},i=void 0,s={permalink:"/blog/2022/07/30/why-we-need-apache-apisix",source:"@site/blog/2022/07/30/why-we-need-apache-apisix.md",title:"Why do you need Apache APISIX when you have NGINX and Kong?",description:"This article introduces how the cloud native API gateway Apache APISIX solves the business pain points and usage scenarios brought by Nginx and Kong.",date:"2022-07-30T00:00:00.000Z",formattedDate:"July 30, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:6.93,truncated:!0,authors:[{name:"Fei Han",url:"https://github.com/hf400159",imageURL:"https://github.com/hf400159.png"}],prevItem:{title:"Release Apache APISIX Ingress v1.5-rc1",permalink:"/blog/2022/08/05/apisix-ingress-1.5rc1-release"},nextItem:{title:"Release Apache APISIX 2.15",permalink:"/blog/2022/07/29/release-apache-apisix-2.15"}},l={authorsImageUrls:[void 0]},c=[{value:"NGINX and Kong&#39;s Disadvantages",id:"nginx-and-kongs-disadvantages",children:[],level:2},{value:"Advantages of Apache APISIX",id:"advantages-of-apache-apisix",children:[{value:"Excellent architecture",id:"excellent-architecture",children:[],level:3},{value:"Perfect ecosystem",id:"perfect-ecosystem",children:[],level:3},{value:"Active community",id:"active-community",children:[],level:3}],level:2},{value:"APISIX Application Scenario",id:"apisix-application-scenario",children:[{value:"Load Balancer and API Gateway",id:"load-balancer-and-api-gateway",children:[],level:3},{value:"Microservice Gateway",id:"microservice-gateway",children:[],level:3},{value:"Kubernetes Ingress",id:"kubernetes-ingress",children:[],level:3},{value:"Service mesh",id:"service-mesh",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],h={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes the history of the open source API Gateway Apache APISIX architecture's evolution and compares the advantages of the two frameworks, Apache APISIX and Nginx.")),(0,o.kt)("p",null,"In the cloud-native era, dynamic capability and observability have become the standards for measuring API gateways. Apache APISIX has been following in the footsteps of cloud-native since its inception. However, as a new-generation API gateway that was born just three years ago, why can Apache APISIX stand out from NGINX, which has been born for more than 20 years, and Kong, which has been open source for 8 years, and become the most popular and active gateway in the cloud-native era? The most important reason is that it solves the pain points of developers and enterprises in using NGINX and Kong."),(0,o.kt)("h2",{id:"nginx-and-kongs-disadvantages"},"NGINX and Kong's Disadvantages"),(0,o.kt)("p",null,"In the era of monolithic services, NGINX can handle most scenarios, but in the cloud-native era, NGINX has two problems due to its architecture:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, NGINX does not support cluster management. Almost every Internet manufacturer has its own NGINX configuration management system, and there is no unified solution."),(0,o.kt)("li",{parentName:"ul"},"The second is that NGINX does not support hot reloading of configurations. If a company modifies the configuration of NGINX, it can take more than half an hour to reload NGINX. And under the Kubernetes system, the upstream will change frequently. If NGINX is used, the service needs to be restarted frequently, which is unacceptable for enterprises.")),(0,o.kt)("p",null,"The emergence of Kong solves the shortcomings of NGINX, but brings new problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kong needs to rely on PostgreSQL or Cassandra database, which makes Kong's entire architecture very bloated and will bring a high availability problem to the enterprise. If the database fails, the entire API Gateway fails."),(0,o.kt)("li",{parentName:"ul"},"Kong's routing uses traversal lookup. When there are more than a thousand routes in the gateway, its performance will drop dramatically.")),(0,o.kt)("p",null,"The emergence of APISIX solves all the above problems and becomes the most perfect API gateway in the cloud-native era. So what exactly are the advantages of Apache APISIX? Why can it become the most active API gateway in the world in just three years?"),(0,o.kt)("h2",{id:"advantages-of-apache-apisix"},"Advantages of Apache APISIX"),(0,o.kt)("h3",{id:"excellent-architecture"},"Excellent architecture"),(0,o.kt)("p",null,"First, Apache APISIX has excellent architecture, and many applications are now migrating to microservices and containerization, forming a new cloud-native era. Cloud-native, as the current technology trend, will rewrite the technical architecture of traditional enterprises. And APISIX has followed the technology trend since its inception and designed it as cloud-native architecture:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/1.png",alt:"APISIX"})),(0,o.kt)("p",null,"As shown in the figure above, the left and right are the Data Plane and the Control Plane of APISIX:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Plane: Based on NGINX's network library (without using NGINX's route matching, static configuration, and C modules), use Lua and NGINX to dynamically control request traffic;"),(0,o.kt)("li",{parentName:"ul"},"Control Plane: use etcd to store and synchronize gateway configuration data, administrators can notify all data plane nodes in milliseconds through Admin API or Dashboard.")),(0,o.kt)("p",null,"When updating data, Kong uses the polling method of the database, but it may take 5-10 seconds to obtain the latest configuration; while APISIX uses the method of monitoring etcd configuration changes, which can control the time in milliseconds."),(0,o.kt)("p",null,"Since both APISIX and etcd support multi-point deployment, in the current architecture of APISIX, any unexpected downtime of any service will not affect the ability of APISIX to provide services accurately."),(0,o.kt)("h3",{id:"perfect-ecosystem"},"Perfect ecosystem"),(0,o.kt)("p",null,"The following figure shows the ecological map of APISIX. From this figure, we can accurately see that the L7 protocols that APISIX already supports include HTTP(S), HTTP2, Dubbo and IoT protocol MQTT, etc. The L4 protocol includes TCP/UDP."),(0,o.kt)("p",null,"The right part is some open source or SaaS services, such as SkyWalking, Prometheus, Vault, etc. At the bottom are the more common operating system environments, cloud vendors, and hardware environments. As open source software, APISIX also supports running on ARM64 servers."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/2.PNG",alt:"APISIX's Ecosystem"})),(0,o.kt)("p",null,"APISIX not only supports many protocols and operating systems, but also supports multi-language programming plug-ins. When it first came out, APISIX only supported the use of the Lua language to write plug-ins. In this case, developers need to master the technology stack related to Lua and NGINX. However, Lua and NGINX are relatively niche technologies with few developers. Therefore, we have supported multi-language development plug-ins on APISIX, and have officially supported languages such as Java, Golang, Node.js, and Python."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/3.png",alt:"programming language"})),(0,o.kt)("h3",{id:"active-community"},"Active community"),(0,o.kt)("p",null,"The figure below is the contributor growth curve, where the horizontal axis represents the timeline and the vertical axis represents the total number of contributors. We can see that the two projects, Apache APISIX and Kong, are relatively more active. Apache APISIX has maintained a very good growth rate from the first day, and is growing rapidly at a rate close to twice that of Kong, and the number of contributors has exceeded Kong, which shows the popularity of APISIX. Of course, there are many other ways to evaluate the activity of a project, such as checking the monthly active issues, the total number of PRs, etc. The good news is that APISIX is also unrivaled in these aspects."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/4.png",alt:"Contributor graph"})),(0,o.kt)("h2",{id:"apisix-application-scenario"},"APISIX Application Scenario"),(0,o.kt)("p",null,"From the figure below, I believe you have already seen the goal of APISIX: ",(0,o.kt)("strong",{parentName:"p"},"unified proxy infrastructure"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/5.png",alt:"APISIX Application scenarios"})),(0,o.kt)("p",null,"You may have questions: APISIX has to support so many scenarios, will APISIX become different?"),(0,o.kt)("p",null,"Because the core of APISIX is a high-performance proxy service, it does not bind any environment properties. When it evolves into products such as Ingress, service mesh, etc., all external services cooperate with APISIX, and it is the external program that changes rather than APISIX itself. The following will introduce to you step-by-step how APISIX supports these scenarios."),(0,o.kt)("h3",{id:"load-balancer-and-api-gateway"},"Load Balancer and API Gateway"),(0,o.kt)("p",null,"The first is for traditional LB and API gateway scenarios. Because APISIX is implemented based on NGINX + LuaJIT, it has features such as high performance and security, and also supports dynamic SSL certificate offloading, SSL handshake optimization and other functions. In terms of load balancing service capabilities, it also performs better. Switching from NGINX to APISIX will not degrade performance, but also enjoy the improved management efficiency brought about by features such as dynamic and unified management."),(0,o.kt)("h3",{id:"microservice-gateway"},"Microservice Gateway"),(0,o.kt)("p",null,"APISIX currently supports the writing of extension plug-ins in multiple languages, which can solve the main problems faced by east-west microservice API gateways - heterogeneous multi-language and general problems. The built-in supported service registries include Nacos, etcd, Eureka, etc., as well as the standard DNS method, which can smoothly replace the microservice API gateways such as Zuul, Spring Cloud Gateway, and Dubbo."),(0,o.kt)("h3",{id:"kubernetes-ingress"},"Kubernetes Ingress"),(0,o.kt)("p",null,"At present, the official Kubernetes Ingress Controller project of K8s is mainly based on the NGINX configuration file method, so it is slightly insufficient in routing capability and loading mode and has some obvious disadvantages. For example, when adding or modifying any API, you need to restart the service to complete the update of the new NGINX configuration, but the restart of the service has a great impact on the online traffic."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/ingress-controller/getting-started/"},"APISIX Ingress Controller")," perfectly solves all the problems mentioned above: it supports full dynamics and does not need to restart loading. At the same time, it inherits all the advantages of APISIX and also supports native Kubernetes CRD, which is convenient for users to migrate."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/6.png",alt:"APISIX Kubernetes Ingress"})),(0,o.kt)("h3",{id:"service-mesh"},"Service mesh"),(0,o.kt)("p",null,"In the next five to ten years, the service mesh architecture based on the cloud-native model architecture will begin to emerge. APISIX also started to lock the track in advance. After research and technical analysis, APISIX has supported the xDS protocol, and APISIX Mesh was born, and APISIX also has a place in the field of service mesh."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0729/7.png",alt:"APISXI Mesh"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"It has been three years since the first day when Apache APISIX was open-sourced. The highly active community and actual user cases have proved that APISIX is the most perfect API gateway in the cloud-native era. By reading this article, I believe you have a more comprehensive understanding of APISIX and look forward to using APISIX as your API gateway in a production environment."),(0,o.kt)("p",null,"If you have any questions, you can leave a message in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"Github issue"),", community contributors will respond quickly, of course, you can also join the APISIX Slack channel and mailing list, Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join/"},"Join Us"),"."))}u.isMDXComponent=!0}}]);