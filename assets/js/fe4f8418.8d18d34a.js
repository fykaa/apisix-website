"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[19612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86251:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"gRPC Proxy"},i=void 0,l={unversionedId:"grpc-proxy",id:"version-3.9/grpc-proxy",isDocsHomePage:!1,title:"gRPC Proxy",description:"proxying gRPC traffic:\ngRPC client -> APISIX -> gRPC/gRPCS server",source:"@site/docs-apisix_versioned_docs/version-3.9/grpc-proxy.md",sourceDirName:".",slug:"/grpc-proxy",permalink:"/docs/apisix/grpc-proxy",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.9/docs/en/latest/grpc-proxy.md",tags:[],version:"3.9",frontMatter:{title:"gRPC Proxy"},sidebar:"version-3.9/docs",previous:{title:"Stream Proxy",permalink:"/docs/apisix/stream-proxy"},next:{title:"Customize Nginx configuration",permalink:"/docs/apisix/customize-nginx-configuration"}},p=[{value:"Parameters",id:"parameters",children:[{value:"Example",id:"example",children:[]},{value:"gRPCS",id:"grpcs",children:[]}]}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"proxying gRPC traffic:\ngRPC client -> APISIX -> gRPC/gRPCS server"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scheme"),": the ",(0,o.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,o.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uri"),": format likes /service/method, Example\uff1a/helloworld.Greeter/SayHello")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("h4",{id:"create-proxying-grpc-route"},"create proxying gRPC route"),(0,o.kt)("p",null,"Here's an example, to proxying gRPC service by specified route:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"attention: the ",(0,o.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,o.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,o.kt)("li",{parentName:"ul"},"attention: APISIX use TLS\u2011encrypted HTTP/2 to expose gRPC service, so need to ",(0,o.kt)("a",{parentName:"li",href:"/docs/apisix/certificate"},"config SSL certificate")),(0,o.kt)("li",{parentName:"ul"},"attention: APISIX also support to expose gRPC service with plaintext HTTP/2, which does not rely on TLS, usually used to proxy gRPC service in intranet environment"),(0,o.kt)("li",{parentName:"ul"},"the grpc server example\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/api7/grpc_server_example"},"grpc_server_example"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,o.kt)("h4",{id:"testing-http2-with-tlsencrypted"},"testing HTTP/2 with TLS\u2011encrypted"),(0,o.kt)("p",null,"Invoking the route created before\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -insecure -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9443 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"grpcurl is a CLI tool, similar to curl, that acts as a gRPC client and lets you interact with a gRPC server. For installation, please check out the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl#installation"},"documentation"),".")),(0,o.kt)("p",null,"This means that the proxying is working."),(0,o.kt)("h4",{id:"testing-http2-with-plaintext"},"testing HTTP/2 with plaintext"),(0,o.kt)("p",null,"By default, the APISIX only listens to ",(0,o.kt)("inlineCode",{parentName:"p"},"9443")," for TLS\u2011encrypted HTTP/2. You can support HTTP/2 with plaintext via the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_listen")," section under ",(0,o.kt)("inlineCode",{parentName:"p"},"apisix")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    node_listen:\n        - port: 9080\n        - port: 9081\n    enable_http2: true\n")),(0,o.kt)("p",null,"Invoking the route created before\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -plaintext -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9081 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,o.kt)("p",null,"This means that the proxying is working."),(0,o.kt)("h3",{id:"grpcs"},"gRPCS"),(0,o.kt)("p",null,"If your gRPC service encrypts with TLS by itself (so called ",(0,o.kt)("inlineCode",{parentName:"p"},"gPRCS"),", gPRC + TLS), you need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"scheme")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"grpcs"),". The example above runs gRPCS service on port 50052, to proxy gRPC request, we need to use the configuration below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpcs",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50052": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);