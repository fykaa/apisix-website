"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[81980],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,d=h["".concat(l,".").concat(c)]||h[c]||m[c]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const i={title:"API versioning",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["DevOps","Performance","Web Developent","Cost optimization","imgproxy"],description:"In my previous post Evolving your APIs, I mention the main API versioning approaches. During the talk of the same name, I sometimes get some questions on the subject. In this post, I'll detail each of them. I assume readers know the reasons behind versioning, semantic versioning, and product lifecycle. If not, I encourage you to read a bit about these themes; in particular, chapter 24 of the excellent API Design Patterns book focuses on them. I'll summarize the subject in a few words in any case.\n",tags:["Ecosystem"],image:"https://static.apiseven.com/uploads/2023/11/06/PjxXv0E9_signpost-3691159.jpg"},o=void 0,s={permalink:"/blog/2023/11/09/api-versioning",source:"@site/blog/2023/11/09/api-versioning.md",title:"API versioning",description:"In my previous post Evolving your APIs, I mention the main API versioning approaches. During the talk of the same name, I sometimes get some questions on the subject. In this post, I'll detail each of them. I assume readers know the reasons behind versioning, semantic versioning, and product lifecycle. If not, I encourage you to read a bit about these themes; in particular, chapter 24 of the excellent API Design Patterns book focuses on them. I'll summarize the subject in a few words in any case.\n",date:"2023-11-09T00:00:00.000Z",formattedDate:"November 9, 2023",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.155,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"Release Apache APISIX 3.7.0",permalink:"/blog/2023/11/21/release-apache-apisix-3.7.0"},nextItem:{title:"Biweekly Report (October 23 - November 05)",permalink:"/blog/2023/11/08/bi-weekly-report"}},l={authorsImageUrls:[void 0]},p=[{value:"Generalities",id:"generalities",children:[],level:2},{value:"Path-based versioning",id:"path-based-versioning",children:[],level:2},{value:"Query-based versioning",id:"query-based-versioning",children:[],level:2},{value:"Header-based versioning",id:"header-based-versioning",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In my previous post ",(0,r.kt)("a",{parentName:"p",href:"https://blog.frankel.ch/evolve-apis/"},"Evolving your APIs"),", I mention the main API versioning approaches. During the talk of the same name, I sometimes get some questions on the subject. In this post, I'll detail each of them."),(0,r.kt)("p",{parentName:"blockquote"},"I assume readers know the reasons behind versioning, semantic versioning, and product lifecycle. If not, I encourage you to read a bit about these themes; in particular, chapter 24 of the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://blog.frankel.ch/api-design-patterns/"},"API Design Patterns")," book focuses on them."),(0,r.kt)("p",{parentName:"blockquote"},"I'll summarize the subject in a few words in any case.")),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://blog.frankel.ch/api-versioning/"})),(0,r.kt)("h2",{id:"generalities"},"Generalities"),(0,r.kt)("p",null,"Software naturally evolves, because of business need or changing regulations. In some cases, the said software has no clients but humans, ",(0,r.kt)("em",{parentName:"p"},"e.g."),", a monolith with Server-Side Rendering. In all other cases, at least another software component interacts with your software:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A JavaScript front-end consumes the REST API"),(0,r.kt)("li",{parentName:"ul"},"A webservice consumes the REST API"),(0,r.kt)("li",{parentName:"ul"},"etc.")),(0,r.kt)("p",null,"Some changes are backward-compatible - you don't need to update the client; others are not. Removing an endpoint is not backward compatible; it's a breaking change. Removing a parameter, adding a required parameter, or changing a parameter type are also breaking changes."),(0,r.kt)("p",null,"When introducing a breaking change in regular software, you must increase its major version if you adhere to semantic versioning. It's the same in the realm of APIs. You let your customers keep using the v1 version while releasing breaking changes in the v2 version."),(0,r.kt)("p",null,"The crux of the problem is now how to use a specific version of the endpoint. Three options are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Path-based versioning"),(0,r.kt)("li",{parentName:"ul"},"Query-based versioning"),(0,r.kt)("li",{parentName:"ul"},"Header-based versioning")),(0,r.kt)("p",null,"Let's detail them in turn. It all boils down to routing; I'll demo the configuration with ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," to implement each versioning approach."),(0,r.kt)("h2",{id:"path-based-versioning"},"Path-based versioning"),(0,r.kt)("p",null,"Path-based versioning is so ubiquitous that it's the approach most people think about when they think about API versioning. The idea is to set the version in the path:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/v1/foo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/v2/foo"))),(0,r.kt)("p",null,"Path-based versioning seems easy to implement with Apache APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'upstreams:\n  - id: 1\n    nodes:\n      "upstream_1:8080": 1\n  - id: 2\n    nodes:\n      "upstream_2:8080": 1\n\nroutes:\n  - uri: /v1/*\n    upstream_id: 1\n  - uri: /v2/*\n    upstream_id: 2\n')),(0,r.kt)("p",null,"The above setup doesn't work unfortunately: as it stands, we forward ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/*")," to the upstream, whereas it probably can handle only ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," - the path behind the version prefix. We need to remove the version prefix before forwarding to the upstream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /v1/*\n    upstream_id: 1\n    plugins:\n      proxy-rewrite:\n        regex_uri: [ "/v1(.*)", "$1" ]        #1\n  - uri: /v2/*\n    upstream_id: 2\n    plugins:\n      proxy-rewrite:\n        regex_uri: [ "/v2(.*)", "$1" ]        #1\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove the version path prefix before forwarding")),(0,r.kt)("p",null,"Beware if you use other plugins, which may forward the request before the prefix is removed, ",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-mirror"),". In this case, we must apply ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," ",(0,r.kt)("em",{parentName:"p"},"before")," ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-mirror"),". Apache APISIX orders plugins by their default priority, so we need to increase the priority of the former:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /v1/*\n    upstream_id: 1\n    plugins:\n      proxy-rewrite:                          #1\n        regex_uri: [ "/v1(.*)", "$1" ]\n      proxy-mirror:                           #2\n        host: "http://api.v2:8080"\n        _meta:\n          priority: 1000                      #3\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy-rewrite")," default priority is ",(0,r.kt)("inlineCode",{parentName:"li"},"1008")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy-mirror")," default priority is ",(0,r.kt)("inlineCode",{parentName:"li"},"1010")),(0,r.kt)("li",{parentName:"ol"},"Set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"1000")," so that it now applies ",(0,r.kt)("em",{parentName:"li"},"after")," the rewrite takes place")),(0,r.kt)("h2",{id:"query-based-versioning"},"Query-based versioning"),(0,r.kt)("p",null,"Another way to version is to use query parameters, ",(0,r.kt)("em",{parentName:"p"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"?version=v1"),". While I've never seen it in the wild, it deserves a mention nonetheless. We can leverage the following Apache APISIX configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /*                                   #1\n    upstream_id: 1\n    vars: [[ "arg_version", "==", "v1" ]]     #2\n    priority: 2                               #1\n  - uri: /*                                   #1\n    upstream_id: 2\n    vars: [[ "arg_version", "==", "v2" ]]     #2\n    priority: 3                               #1\n  - uri: /*                                   #1-3\n    upstream_id: 1\n    priority: 1\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Both routes match the same URI, so we must evaluate them in order. That's the role of ",(0,r.kt)("inlineCode",{parentName:"li"},"priority"),": Apache APISIX evaluates the highest priority first"),(0,r.kt)("li",{parentName:"ol"},"Evaluate the query parameter named ",(0,r.kt)("inlineCode",{parentName:"li"},"version")),(0,r.kt)("li",{parentName:"ol"},"Default route when no ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," is provided. Here, I route to version 1, but you can also return an HTTP status ",(0,r.kt)("inlineCode",{parentName:"li"},"4xx")," to require a version.")),(0,r.kt)("h2",{id:"header-based-versioning"},"Header-based versioning"),(0,r.kt)("p",null,"The last alternative for versioning is to use HTTP headers. Here's a custom header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET / HTTP1.1\n\nVersion: 1\n")),(0,r.kt)("p",null,"From an HTTP point of view, asking for a version via a header is the definition of ",(0,r.kt)("em",{parentName:"p"},"content negotiation")," between the client and the server:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Content negotiation refers to mechanisms defined as a part of HTTP that make it possible to serve different versions of a document (or more generally, representations of a resource) at the same URI, so that user agents can specify which version fits their capabilities the best."),(0,r.kt)("p",{parentName:"blockquote"},"-- ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Content_negotiation"},"Content Negotiation on Wikipedia"))),(0,r.kt)("p",null,"The agreed-upon content type format follows the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"application/vnd.aaa.bbb.vX+format"),", where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aaa.bbb")," is a reversed domain name, ",(0,r.kt)("em",{parentName:"li"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ch.frankel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X")," is the version number, ",(0,r.kt)("em",{parentName:"li"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format")," is the accepted format, ",(0,r.kt)("em",{parentName:"li"},"e.g."),", ",(0,r.kt)("inlineCode",{parentName:"li"},"json"))),(0,r.kt)("p",null,"Hence, here's a possible request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET / HTTP1.1\n\nAccept: application/vnd.ch.frankel.myservice.v1+json\n")),(0,r.kt)("p",null,"Theoretically, the client can leverage the ",(0,r.kt)("em",{parentName:"p"},"quality"),"  of ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," headers to communicate that it can handle different versions. The following request tells that the client prefers version 2 but can handle version 1 if the need be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"GET / HTTP1.1\n\nAccept: application/vnd.ch.frankel.myservice.v2+json;q=0.8, application/vnd.ch.frankel.myservice.v1+json;q=0.2\n")),(0,r.kt)("p",null,"In practice, quality requires a high level of maturity, both on the server-side - handling qualities and on the client-side - handling two versions simultaneously."),(0,r.kt)("p",null,"Here's the APISIX configuration for quality-less content negotiation. It's very similar to the one above, the only difference being the Nginx variable in play, ",(0,r.kt)("inlineCode",{parentName:"p"},"http_X")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"arg_Y"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /*\n    upstream_id: 1\n    vars: [[ "http_accept", "==", "vnd.ch.frankel.myservice.v1+json" ]]\n    priority: 2\n  - uri: /*\n    upstream_id: 2\n    vars: [[ "http_accept", "==", "vnd.ch.frankel.myservice.v2+json" ]]\n    priority: 3\n  - uri: /*\n    upstream_id: 1\n    priority: 1\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this short post, we detailed the three options for versioning HTTP APIs: path-based, query-based, and header-based. They don't differ much, each having its little tricky parts. Whatever path you choose, though, make sure it's consistent across all the organization."),(0,r.kt)("p",null,"The complete source code for this post can be found on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajavageek/api-versioning"},"GitHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To go further:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://navendu.me/posts/api-deployment-strategies/"},"API deployment strategies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc9110.html#name-content-negotiation"},"Content Negotiation in RFC 9110")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/router-radixtree/"},"Routing in Apache APISIX"))))}m.isMDXComponent=!0}}]);