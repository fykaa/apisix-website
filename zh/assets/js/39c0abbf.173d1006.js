"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[97098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42846:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Add multiple API versions",keywords:["API Versioning","Apache APISIX","API Gateway","Multiple APIs","Proxy rewrite","Request redirect","Route API requests"],description:"In this tutorial, you will learn how to publish and manage multiple versions of your API with Apache APISIX."},i=void 0,s={unversionedId:"tutorials/add-multiple-api-versions",id:"version-3.9/tutorials/add-multiple-api-versions",isDocsHomePage:!1,title:"Add multiple API versions",description:"In this tutorial, you will learn how to publish and manage multiple versions of your API with Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.9/tutorials/add-multiple-api-versions.md",sourceDirName:"tutorials",slug:"/tutorials/add-multiple-api-versions",permalink:"/zh/docs/apisix/tutorials/add-multiple-api-versions",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.9/docs/zh/latest/tutorials/add-multiple-api-versions.md",tags:[],version:"3.9",frontMatter:{title:"Add multiple API versions",keywords:["API Versioning","Apache APISIX","API Gateway","Multiple APIs","Proxy rewrite","Request redirect","Route API requests"],description:"In this tutorial, you will learn how to publish and manage multiple versions of your API with Apache APISIX."},sidebar:"version-3.9/docs",previous:{title:"Cache API responses",permalink:"/zh/docs/apisix/tutorials/cache-api-responses"},next:{title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",permalink:"/zh/docs/apisix/tutorials/client-to-apisix-mtls"}},l=[{value:"What is API versioning?",id:"what-is-api-versioning",children:[]},{value:"Types of API versioning",id:"types-of-api-versioning",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Create a route and upstream for the API.",id:"create-a-route-and-upstream-for-the-api",children:[]},{value:"Add a new version",id:"add-a-new-version",children:[]}]},{value:"Route API requests from the old version to the new one",id:"route-api-requests-from-the-old-version-to-the-new-one",children:[]},{value:"Next steps",id:"next-steps",children:[]}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-api-versioning"},"What is API versioning?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API versioning")," is the practice of managing changes to an API and ensuring that these changes are made without disrupting clients. A good API versioning strategy clearly communicates the changes made and allows API consumers to decide when to upgrade to the latest version at their own pace."),(0,a.kt)("h2",{id:"types-of-api-versioning"},"Types of API versioning"),(0,a.kt)("h4",{id:"uri-path"},"URI Path"),(0,a.kt)("p",null,'The most common way to version an API is in the URI path and is often done with the prefix "v". This method employs URI routing to direct requests to a specific version of the API.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http://apisix.org/v1/hello\nhttp://apisix.org/v2/hello\n")),(0,a.kt)("h4",{id:"query-parameters"},"Query parameters"),(0,a.kt)("p",null,"In this method, the version number is included in the URI, but as a query parameter instead of in the path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http://apisix.org/hello?version=1\nhttp://apisix.org/hello?version=2\n")),(0,a.kt)("h4",{id:"custom-request-header"},"Custom request Header"),(0,a.kt)("p",null,"You can also set the version number using custom headers in requests and responses. This leaves the URI of your resources unchanged."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http://apisix.org/hello -H 'Version: 1'\nhttp://apisix.org/hello -H 'Version: 2'\n")),(0,a.kt)("p",null,"The primary goal of versioning is to provide users of an API with the most functionality possible while causing minimal inconvenience. Keeping this goal in mind, let\u2019s have a look in this tutorial at how to ",(0,a.kt)("em",{parentName:"p"},"publish and manage multiple versions of your API")," with Apache APISIX."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In this tutorial"),", you learn how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a route and upstream for our sample API."),(0,a.kt)("li",{parentName:"ul"},"Add a new version to the existing API."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/proxy-rewrite/"},"proxy-rewrite")," plugin to rewrite the path in a plugin configuration."),(0,a.kt)("li",{parentName:"ul"},"Route API requests from the old version to the new one.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"For the demo case, we will leverage the sample repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nfrankel/evolve-apis"},"Evolve APIs")," on GitHub built on the Spring boot that demonstrates our API. You can see the complete source code there."),(0,a.kt)("p",null,"To execute and customize the example project per your need shown in this tutorial, here are the minimum requirements you need to install in your system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Docker")," - you need ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"Docker")," installed locally to complete this tutorial. It is available for ",(0,a.kt)("a",{parentName:"li",href:"https://desktop.docker.com/win/edge/Docker%20Desktop%20Installer.exe"},"Windows")," or ",(0,a.kt)("a",{parentName:"li",href:"https://desktop.docker.com/mac/edge/Docker.dmg"},"macOS"),".")),(0,a.kt)("p",null,"Also, complete the following steps to run the sample project with Docker."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git")," to clone the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone 'https://github.com/nfrankel/evolve-apis'\n")),(0,a.kt)("p",null,"Go to root directory of ",(0,a.kt)("em",{parentName:"p"},"evolve-apis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd evolve-apis\n")),(0,a.kt)("p",null,"Now we can start our application by running ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose up")," command from the root folder of the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up -d\n")),(0,a.kt)("h3",{id:"create-a-route-and-upstream-for-the-api"},"Create a route and upstream for the API."),(0,a.kt)("p",null,"You first need to ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/route/"},"Route")," your HTTP requests from the gateway to an ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/upstream/"},"Upstream")," (your API). With APISIX, you can create a route by sending an HTTP request to the gateway."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://apisix:9180/apisix/admin/routes/1 -H \'X-API-KEY: xyz\' -X PUT -d \'\n{\n  "name": "Direct Route to Old API",\n  "methods": ["GET"],\n  "uris": ["/hello", "/hello/", "/hello/*"],\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "oldapi:8081": 1\n    }\n  }\n}\'\n')),(0,a.kt)("p",null,"At this stage, we do not have yet any version and you can query the gateway as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://apisix.org/hello\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="output"',title:'"output"'},"Hello world\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://apisix.org/hello/Joe\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="output"',title:'"output"'},"Hello Joe\n")),(0,a.kt)("p",null,"In the previous step, we created a route that wrapped an upstream inside its configuration. Also, APISIX allows us to create an upstream with a dedicated ID to reuse it across several routes."),(0,a.kt)("p",null,"Let's create the shared upstream by running below curl cmd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://apisix:9180/apisix/admin/upstreams/1 -H \'X-API-KEY: xyz\' -X PUT -d \'\n{\n  "name": "Old API",\n  "type": "roundrobin",\n  "nodes": {\n    "oldapi:8081": 1\n  }\n}\'\n')),(0,a.kt)("h3",{id:"add-a-new-version"},"Add a new version"),(0,a.kt)("p",null,"In the scope of this tutorial, we will use ",(0,a.kt)("em",{parentName:"p"},"URI path-based versioning")," because it\u2019s the most widespread. We are going to add ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," version for our existing ",(0,a.kt)("inlineCode",{parentName:"p"},"oldapi")," in this section."),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/13/639875780e094.png",alt:"Apache APISIX Multiple API versions"})),(0,a.kt)("p",null,"Before introducing the new version, we also need to rewrite the query that comes to the API gateway before forwarding it to the upstream. Because both the old and new versions should point to the same upstream and the upstream exposes endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"/hello"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/hello"),". Let\u2019s create a plugin configuration to rewrite the path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://apisix:9180/apisix/admin/plugin_configs/1 -H \'X-API-KEY: xyz\' -X PUT -d \'\n{\n  "plugins": {\n    "proxy-rewrite": {\n      "regex_uri": ["/v1/(.*)", "/$1"]\n    }\n  }\n}\'\n')),(0,a.kt)("p",null,"We can now create the second versioned route that references the existing  upstream and plugin config."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that we can create routes for different API versions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://apisix:9180/apisix/admin/routes/2 -H \'X-API-KEY: xyz\' -X PUT -d \'\n{\n  "name": "Versioned Route to Old API",\n  "methods": ["GET"],\n  "uris": ["/v1/hello", "/v1/hello/", "/v1/hello/*"],\n  "upstream_id": 1,\n  "plugin_config_id": 1\n}\'\n')),(0,a.kt)("p",null,"At this stage, we have configured two routes, one versioned and the other non-versioned:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://apisix.org/hello\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="output"',title:'"output"'},"Hello world\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://apisix.org/v1/hello\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="output"',title:'"output"'},"Hello world\n")),(0,a.kt)("h2",{id:"route-api-requests-from-the-old-version-to-the-new-one"},"Route API requests from the old version to the new one"),(0,a.kt)("p",null,"We have versioned our API, but our API consumers probably still use the legacy non-versioned API. We want them to migrate, but we cannot just delete the legacy route as our users are unaware of it. Fortunately, the ",(0,a.kt)("inlineCode",{parentName:"p"},"301 HTTP")," status code is our friend: we can let users know that the resource has moved from ",(0,a.kt)("inlineCode",{parentName:"p"},"http://apisix.org/hello")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://apisix.org/v1/hello"),". It requires configuring the ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/redirect/"},"redirect plugin")," on the initial route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://apisix:9180/apisix/admin/routes/1 -H \'X-API-KEY: xyz\' -X PATCH -d \'\n{\n  "plugins": {\n    "redirect": {\n      "uri": "/v1$uri",\n      "ret_code": 301\n    }\n  }\n}\'\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/13/63987577a9e66.png",alt:"Apache APISIX Multiple API versions with two routes"})),(0,a.kt)("p",null,"Now when we try to request the first non-versioned API endpoint, you will get an expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://apisix.org/hello\n\n<html>\n<head><title>301 Moved Permanently</title></head>\n<body>\n<center><h1>301 Moved Permanently</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,a.kt)("p",null,"Either API consumers will transparently use the new endpoint because they will follow, or their integration breaks and they will notice the 301 status and the new API location to use."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"As you followed throughout the tutorial, it is very easy to publish multiple versions of your API with Apache APISIX and it does not require setting up actual API endpoints for each version of your API in the backend. It also allows your clients to switch between two versions without any downtime and save assets if there\u2019s ever an update."),(0,a.kt)("p",null,"Learn more about how to ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/tutorials/manage-api-consumers"},"manage")," API consumers and ",(0,a.kt)("a",{parentName:"p",href:"./protect-api.md"},"protect")," your APIs."))}u.isMDXComponent=!0}}]);