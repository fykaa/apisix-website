"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7199],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},68719:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"opentelemetry",keywords:["Apache APISIX","API Gateway","Plugin","OpenTelemetry"],description:"This document contains information about the Apache opentelemetry Plugin."},i=void 0,o={unversionedId:"plugins/opentelemetry",id:"version-3.8/plugins/opentelemetry",isDocsHomePage:!1,title:"opentelemetry",description:"This document contains information about the Apache opentelemetry Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.8/plugins/opentelemetry.md",sourceDirName:"plugins",slug:"/plugins/opentelemetry",permalink:"/docs/apisix/3.8/plugins/opentelemetry",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.8/docs/en/latest/plugins/opentelemetry.md",tags:[],version:"3.8",frontMatter:{title:"opentelemetry",keywords:["Apache APISIX","API Gateway","Plugin","OpenTelemetry"],description:"This document contains information about the Apache opentelemetry Plugin."},sidebar:"version-3.8/docs",previous:{title:"skywalking",permalink:"/docs/apisix/3.8/plugins/skywalking"},next:{title:"prometheus",permalink:"/docs/apisix/3.8/plugins/prometheus"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Configuring the collector",id:"configuring-the-collector",children:[]}]},{value:"Variables",id:"variables",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],d={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"opentelemetry")," Plugin can be used to report tracing data according to the ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/reference/specification/"},"OpenTelemetry specification"),"."),(0,r.kt)("p",null,"The Plugin only supports binary-encoded ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/reference/specification/protocol/otlp/#otlphttp"},"OLTP over HTTP"),"."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Sampling configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler.name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"always_off"),(0,r.kt)("td",{parentName:"tr",align:null},'["always_on", "always_off", "trace_id_ratio", "parent_base"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Sampling strategy. ",(0,r.kt)("inlineCode",{parentName:"td"},"always_on"),": always samples, ",(0,r.kt)("inlineCode",{parentName:"td"},"always_off"),": never samples, ",(0,r.kt)("inlineCode",{parentName:"td"},"trace_id_ratio"),": random sampling result based on given sampling probability, ",(0,r.kt)("inlineCode",{parentName:"td"},"parent_base"),": use parent decision if given, else determined by the root sampler.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler.options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'{fraction = 0, root = {name = "always_off"}}'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters for sampling strategy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler.options.fraction"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 1]"),(0,r.kt)("td",{parentName:"tr",align:null},"Sampling probability for ",(0,r.kt)("inlineCode",{parentName:"td"},"trace_id_ratio"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler.options.root"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'{name = "always_off", options = {fraction = 0}}'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Root sampler for ",(0,r.kt)("inlineCode",{parentName:"td"},"parent_base")," strategy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler.options.root.name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"always_off"),(0,r.kt)("td",{parentName:"tr",align:null},'["always_on", "always_off", "trace_id_ratio"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Root sampling strategy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler.options.root.options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"{fraction = 0}"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Root sampling strategy parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sampler.options.root.options.fraction"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 1]"),(0,r.kt)("td",{parentName:"tr",align:null},"Root sampling probability for ",(0,r.kt)("inlineCode",{parentName:"td"},"trace_id_ratio"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"additional_attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Variables and its values which will be appended to the trace span.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"additional_attributes","[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX or Nginx variables. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"http_header")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"route_id"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"additional_header_prefix_attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Headers or headers prefixes to be appended to the trace span's attributes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"additional_header_prefix_attributes","[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Request headers. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},'x-my-header"')," or ",(0,r.kt)("inlineCode",{parentName:"td"},"x-my-headers-*")," to include all headers with the prefix ",(0,r.kt)("inlineCode",{parentName:"td"},"x-my-headers-"),".")))),(0,r.kt)("h3",{id:"configuring-the-collector"},"Configuring the collector"),(0,r.kt)("p",null,"You can set up the collector by configuring it in you configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trace_id_source"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"random"),(0,r.kt)("td",{parentName:"tr",align:null},"Source of the trace ID. Valid values are ",(0,r.kt)("inlineCode",{parentName:"td"},"random")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"x-request-id"),". When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"x-request-id"),", the value of the ",(0,r.kt)("inlineCode",{parentName:"td"},"x-request-id")," header will be used as trace ID. Make sure that is matches the regex pattern ",(0,r.kt)("inlineCode",{parentName:"td"},"[0-9a-f]{32}"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Additional ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/resource/sdk.md"},"resource")," appended to the trace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collector"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},'{address = "127.0.0.1:4318", request_timeout = 3}'),(0,r.kt)("td",{parentName:"tr",align:null},"OpenTelemetry Collector configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collector.address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1:4318"),(0,r.kt)("td",{parentName:"tr",align:null},"Collector address. If the collector serves on https, use ",(0,r.kt)("a",{parentName:"td",href:"https://127.0.0.1:4318"},"https://127.0.0.1:4318")," as the address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collector.request_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Report request timeout in seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collector.request_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Report request HTTP headers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_span_processor"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Trace span processor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_span_processor.drop_on_queue_full"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", drops the span when queue is full. Otherwise, force process batches.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_span_processor.max_queue_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2048"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum queue size for buffering spans for delayed processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_span_processor.batch_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum time in seconds for constructing a batch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_span_processor.max_export_batch_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"256"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of spans to process in a single batch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_span_processor.inactive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Time interval in seconds between processing batches.")))),(0,r.kt)("p",null,"You can configure these as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugin_attr:\n  opentelemetry:\n    resource:\n      service.name: APISIX\n      tenant.id: business_id\n    collector:\n      address: 192.168.8.211:4318\n      request_timeout: 3\n      request_headers:\n        foo: bar\n    batch_span_processor:\n      drop_on_queue_full: false\n      max_queue_size: 6\n      batch_timeout: 2\n      inactive_timeout: 1\n      max_export_batch_size: 2\n")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"The following nginx variables are set by OpenTelemetry:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opentelemetry_context_traceparent")," -  ",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/trace-context/#trace-context-http-headers-format"},"W3C trace context"),", e.g.: ",(0,r.kt)("inlineCode",{parentName:"li"},"00-0af7651916cd43dd8448eb211c80319c-b9c7c989f97918e1-01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opentelemetry_trace_id")," - Trace Id of the current span"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opentelemetry_span_id")," -  Span Id of the current span")),(0,r.kt)("p",null,"How to use variables? you have to add it to your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},'http:\n    enable_access_log: true\n    access_log: "/dev/stdout"\n    access_log_format: \'{"time": "$time_iso8601","opentelemetry_context_traceparent": "$opentelemetry_context_traceparent","opentelemetry_trace_id": "$opentelemetry_trace_id","opentelemetry_span_id": "$opentelemetry_span_id","remote_addr": "$remote_addr","uri": "$uri"}\'\n    access_log_format_escape: json\nplugins:\n  - opentelemetry\nplugin_attr:\n  opentelemetry:\n    set_ngx_var: true\n')),(0,r.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,r.kt)("p",null,"To enable the Plugin, you have to add it to your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - ...\n  - opentelemetry\n")),(0,r.kt)("p",null,"Now, you can enable the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n        "opentelemetry": {\n            "sampler": {\n                "name": "always_on"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,r.kt)("p",null,"To remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"opentelemetry")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);