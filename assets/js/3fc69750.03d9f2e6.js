"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79347:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"proxy-cache",keywords:["Apache APISIX","API Gateway","Proxy Cache"],description:"This document contains information about the Apache APISIX proxy-cache Plugin, you can use it to cache the response from the Upstream."},l=void 0,o={unversionedId:"plugins/proxy-cache",id:"version-3.7/plugins/proxy-cache",isDocsHomePage:!1,title:"proxy-cache",description:"This document contains information about the Apache APISIX proxy-cache Plugin, you can use it to cache the response from the Upstream.",source:"@site/docs-apisix_versioned_docs/version-3.7/plugins/proxy-cache.md",sourceDirName:"plugins",slug:"/plugins/proxy-cache",permalink:"/docs/apisix/3.7/plugins/proxy-cache",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/plugins/proxy-cache.md",tags:[],version:"3.7",frontMatter:{title:"proxy-cache",keywords:["Apache APISIX","API Gateway","Proxy Cache"],description:"This document contains information about the Apache APISIX proxy-cache Plugin, you can use it to cache the response from the Upstream."},sidebar:"version-3.7/docs",previous:{title:"limit-count",permalink:"/docs/apisix/3.7/plugins/limit-count"},next:{title:"request-validation",permalink:"/docs/apisix/3.7/plugins/request-validation"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[{value:"Use disk-based caching",id:"use-disk-based-caching",children:[]},{value:"Use memory-based caching",id:"use-memory-based-caching",children:[]}]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," Plugin can be used to cache the response from the Upstream. It can be used with other Plugins and currently supports disk-based and memory-based caching."),(0,r.kt)("p",null,"The data to be cached can be filtered with response codes, request modes, or more complex methods using the ",(0,r.kt)("inlineCode",{parentName:"p"},"no_cache")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_bypass")," attributes."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_strategy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"disk"),(0,r.kt)("td",{parentName:"tr",align:null},'["disk","memory"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies where the cached data should be stored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_zone"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"disk_cache_one"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies which cache area to use. Each cache area can be configured with different paths. Cache areas can be predefined in your configuration file (",(0,r.kt)("inlineCode",{parentName:"td"},"conf/config.yaml"),"). If the specified cache area is inconsistent with the pre-defined cache area in your configuration file, the cache is invalid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_key"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'["$host", "$request_uri"]'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Key to use for caching. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},'["$host", "$uri", "-cache-id"]'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_bypass"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions in which response from cache is bypassed. Whether to skip cache retrieval. If at least one value of the string parameters is not empty and is not equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," then the response will not be taken from the cache. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},'["$arg_bypass"]'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_method"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'["GET", "HEAD"]'),(0,r.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "HEAD"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Request methods for which the response will be cached.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_http_status"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 301, 404]"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 599]"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status codes of the Upstream response for which the response will be cached.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hide_cache_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," adds the ",(0,r.kt)("inlineCode",{parentName:"td"},"Expires")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Cache-Control")," headers to the client response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_control"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", complies with Cache-Control behavior in the HTTP specification. Used only for memory strategy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no_cache"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions in which the response will not be cached. If at least one value of the string parameters is not empty and is not equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," then the response will not be saved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"300 seconds"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Time that a response is cached until it is deleted or refreshed. Comes in to effect when the ",(0,r.kt)("inlineCode",{parentName:"td"},"cache_control")," attribute is not enabled or the proxied server does not return cache header. Used only for memory strategy.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The cache expiration time cannot be configured dynamically. It can only be set by the Upstream response header ",(0,r.kt)("inlineCode",{parentName:"li"},"Expires")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache-Control"),". The default expiration time is 10s if there is no ",(0,r.kt)("inlineCode",{parentName:"li"},"Expires")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache-Control")," in the Upstream response header."),(0,r.kt)("li",{parentName:"ul"},"If the Upstream service is not available and APISIX returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"502")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"504")," status code, it will be cached for 10s."),(0,r.kt)("li",{parentName:"ul"},"Variables (start with ",(0,r.kt)("inlineCode",{parentName:"li"},"$"),") can be specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"cache_key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cache_bypass")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"no_cache"),". It's worth mentioning that the variable value will be an empty string if it doesn't exist."),(0,r.kt)("li",{parentName:"ul"},"You can also combine a number of variables and strings (constants), by writing them into an array, eventually, variables will be parsed and stitched together with strings.")))),(0,r.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,r.kt)("p",null,"You can add your cache configuration in you APISIX configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),") as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'apisix:\n  proxy_cache:\n    cache_ttl: 10s  # default cache TTL for caching on disk\n    zones:\n      - name: disk_cache_one\n        memory_size: 50m\n        disk_size: 1G\n        disk_path: /tmp/disk_cache_one\n        cache_levels: 1:2\n    #   - name: disk_cache_two\n    #     memory_size: 50m\n    #     disk_size: 1G\n    #     disk_path: "/tmp/disk_cache_two"\n    #     cache_levels: "1:2"\n      - name: memory_cache\n        memory_size: 50m\n')),(0,r.kt)("h3",{id:"use-disk-based-caching"},"Use disk-based caching"),(0,r.kt)("p",null,"You can enable the Plugin on a Route as shown below. The Plugin uses the disk-based ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_strategy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"disk_cache_one")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_zone")," by default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/ip",\n    "plugins": {\n        "proxy-cache": {\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,r.kt)("h3",{id:"use-memory-based-caching"},"Use memory-based caching"),(0,r.kt)("p",null,"You can enable the Plugin on a Route with in-memory ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_strategy")," and a corresponding in-memory ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_zone")," as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/ip",\n    "plugins": {\n        "proxy-cache": {\n            "cache_strategy": "memory",\n            "cache_zone": "memory_cache",\n            "cache_ttl": 10\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Once you have configured the Plugin as shown above, you can make an initial request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ip -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\xb7\xb7\xb7\nApisix-Cache-Status: MISS\n\nhello\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status")," in the response shows ",(0,r.kt)("inlineCode",{parentName:"p"},"MISS")," meaning that the response is not cached, as expected. Now, if you make another request, you will see that you get a cached response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ip -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\xb7\xb7\xb7\nApisix-Cache-Status: HIT\n\nhello\n")),(0,r.kt)("p",null,"If you set ",(0,r.kt)("inlineCode",{parentName:"p"},'"cache_zone": "invalid_disk_cache"')," attribute to an invalid value (cache not configured in the your configuration file), then it will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," response."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To clear the cached data, you can send a request with ",(0,r.kt)("inlineCode",{parentName:"p"},"PURGE")," method:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/ip -X PURGE\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,r.kt)("p",{parentName:"div"},"If the response code is ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),", the deletion is successful. If the cached data is not found, a ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," response code will be returned."))),(0,r.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,r.kt)("p",null,"To remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/ip",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);