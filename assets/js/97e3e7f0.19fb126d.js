"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77578],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27598:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={title:"Upstream",keywords:["Apache APISIX","API Gateway","APISIX Upstream","Upstream"],description:"This article describes the role of the Apache APISIX Upstream object and how to use the Upstream."},i=void 0,s={unversionedId:"terminology/upstream",id:"version-3.4/terminology/upstream",isDocsHomePage:!1,title:"Upstream",description:"This article describes the role of the Apache APISIX Upstream object and how to use the Upstream.",source:"@site/docs-apisix_versioned_docs/version-3.4/terminology/upstream.md",sourceDirName:"terminology",slug:"/terminology/upstream",permalink:"/docs/apisix/3.4/terminology/upstream",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/terminology/upstream.md",tags:[],version:"3.4",frontMatter:{title:"Upstream",keywords:["Apache APISIX","API Gateway","APISIX Upstream","Upstream"],description:"This article describes the role of the Apache APISIX Upstream object and how to use the Upstream."},sidebar:"version-3.4/docs",previous:{title:"Service",permalink:"/docs/apisix/3.4/terminology/service"},next:{title:"Secret",permalink:"/docs/apisix/3.4/terminology/secret"}},l=[{value:"Description",id:"description",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Example",id:"example",children:[{value:"Consumer",id:"consumer",children:[]},{value:"Cookie",id:"cookie",children:[]},{value:"Header",id:"header",children:[]}]}],c={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Upstream is a virtual host abstraction that performs load balancing on a given set of service nodes according to the configured rules."),(0,r.kt)("p",null,"Although Upstream can be directly configured to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/terminology/route"},"Route")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/terminology/route"},"Service"),", using an Upstream object is recommended when there is duplication as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.4/docs/assets/images/upstream-example.png",alt:"upstream-example"})),(0,r.kt)("p",null,"By creating an Upstream object and referencing it by ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_id")," in the Route, you can ensure that there is only a single value of the object that needs to be maintained."),(0,r.kt)("p",null,"An Upstream configuration can be directly bound to a Route or a Service, but the configuration in Route has a higher priority. This behavior is consistent with priority followed by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/terminology/plugin"},"Plugin")," object."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"In addition to the equalization algorithm selections, Upstream also supports passive health check and retry for the upstream. You can learn more about this ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/admin-api#upstream"},"Admin API Upstream"),"."),(0,r.kt)("p",null,"To create an Upstream object, you can use the Admin API as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "type": "chash",\n    "key": "remote_addr",\n    "nodes": {\n        "127.0.0.1:80": 1,\n        "foo.com:80": 2\n    }\n}\'\n')),(0,r.kt)("p",null,"After creating an Upstream object, it can be referenced by a specific Route or Service as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream_id": 1\n}\'\n')),(0,r.kt)("p",null,"For convenience, you can directly bind the upstream address to a Route or Service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The example below shows how you can configure a health check."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1\n        }\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can learn more about health checks ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/tutorials/health-check"},"health-check"),"."),(0,r.kt)("p",null,"The examples below show configurations that use different ",(0,r.kt)("inlineCode",{parentName:"p"},"hash_on")," types."),(0,r.kt)("h3",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,"Creating a Consumer object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n       "key-auth": {\n            "key": "auth-jack"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Creating a Route object and enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," authentication Plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        },\n        "type": "chash",\n        "hash_on": "consumer"\n    },\n    "uri": "/server_port"\n}\'\n')),(0,r.kt)("p",null,"To test the request, the ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer_name")," passed for authentication will be used as the hash value of the load balancing hash algorithm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/server_port -H "apikey: auth-jack"\n')),(0,r.kt)("h3",{id:"cookie"},"Cookie"),(0,r.kt)("p",null,"Creating a Route and an upstream object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_cookie",\n    "upstream": {\n        "key": "sid",\n        "type": "chash",\n        "hash_on": "cookie",\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The client can then send a request with a cookie."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},' curl http://127.0.0.1:9080/hash_on_cookie \\\n -H "Cookie: sid=3c183a30cffcda1408daf1c61d47b274"\n')),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("p",null,"Creating a Route and an upstream object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_header",\n    "upstream": {\n        "key": "content-type",\n        "type": "chash",\n        "hash_on": "header",\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The client can now send requests with a header. The example below shows using the header ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," curl http://127.0.0.1:9080/hash_on_header \\\n -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \\\n -H \"Content-Type: application/json\"\n")))}p.isMDXComponent=!0}}]);