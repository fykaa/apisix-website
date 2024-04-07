"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[51667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,m=c["".concat(g,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16078:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var a=n(87462),l=(n(67294),n(3905));const o={title:"google-cloud-logging",keywords:["Apache APISIX","API Gateway","Plugin","Google Cloud logging"],description:"This document contains information about the Apache APISIX google-cloud-logging Plugin."},r=void 0,i={unversionedId:"plugins/google-cloud-logging",id:"version-3.9/plugins/google-cloud-logging",isDocsHomePage:!1,title:"google-cloud-logging",description:"This document contains information about the Apache APISIX google-cloud-logging Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.9/plugins/google-cloud-logging.md",sourceDirName:"plugins",slug:"/plugins/google-cloud-logging",permalink:"/docs/apisix/plugins/google-cloud-logging",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.9/docs/en/latest/plugins/google-cloud-logging.md",tags:[],version:"3.9",frontMatter:{title:"google-cloud-logging",keywords:["Apache APISIX","API Gateway","Plugin","Google Cloud logging"],description:"This document contains information about the Apache APISIX google-cloud-logging Plugin."},sidebar:"version-3.9/docs",previous:{title:"sls-logger",permalink:"/docs/apisix/plugins/sls-logger"},next:{title:"splunk-hec-logging",permalink:"/docs/apisix/plugins/splunk-hec-logging"}},g=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Example of default log format",id:"example-of-default-log-format",children:[]}]},{value:"Metadata",id:"metadata",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimal configuration",id:"minimal-configuration",children:[]}]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],s={toc:g};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," Plugin is used to send APISIX access logs to ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/"},"Google Cloud Logging Service"),"."),(0,l.kt)("p",null,"This plugin also allows to push logs as a batch to your Google Cloud Logging Service. It might take some time to receive the log data. It will be automatically sent after the timer function in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"batch processor")," expires."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Either ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_config")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_file")," must be provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.client_email"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Email address of the Google Cloud service account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.private_key"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Private key of the Google Cloud service account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.project_id"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Project ID in the Google Cloud service account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.token_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://oauth2.googleapis.com/token"},"https://oauth2.googleapis.com/token")),(0,l.kt)("td",{parentName:"tr",align:null},"Token URI of the Google Cloud service account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.entries_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://logging.googleapis.com/v2/entries:write"},"https://logging.googleapis.com/v2/entries:write")),(0,l.kt)("td",{parentName:"tr",align:null},"Google Cloud Logging Service API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.scopes"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},'["https://www.googleapis.com/auth/logging.read", "https://www.googleapis.com/auth/logging.write", "https://www.googleapis.com/auth/logging.admin", "https://www.googleapis.com/auth/cloud-platform"]'),(0,l.kt)("td",{parentName:"tr",align:null},"Access scopes of the Google Cloud service account. See ",(0,l.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/oauth2/scopes#logging"},"OAuth 2.0 Scopes for Google APIs"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_file"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the Google Cloud service account authentication JSON file. Either ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_config")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_file")," must be provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", enables SSL verification as mentioned in ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},'{"type": "global"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Google monitor resource. See ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource"},"MonitoredResource")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_id"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"apisix.apache.org%2Flogs"),(0,l.kt)("td",{parentName:"tr",align:null},"Google Cloud logging ID. See ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"},"LogEntry")," for details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,l.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX")," or ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,l.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,l.kt)("p",null,"NOTE: ",(0,l.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"auth_config.private_key"}')," is also defined in the schema, which means that the field will be stored encrypted in etcd. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/plugin-develop#encrypted-storage-fields"},"encrypted storage fields"),"."),(0,l.kt)("p",null,"This Plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."),(0,l.kt)("h3",{id:"example-of-default-log-format"},"Example of default log format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "insertId": "0013a6afc9c281ce2e7f413c01892bdc",\n    "labels": {\n        "source": "apache-apisix-google-cloud-logging"\n    },\n    "logName": "projects/apisix/logs/apisix.apache.org%2Flogs",\n    "httpRequest": {\n        "requestMethod": "GET",\n        "requestUrl": "http://localhost:1984/hello",\n        "requestSize": 59,\n        "responseSize": 118,\n        "status": 200,\n        "remoteIp": "127.0.0.1",\n        "serverIp": "127.0.0.1:1980",\n        "latency": "0.103s"\n    },\n    "resource": {\n        "type": "global"\n    },\n    "jsonPayload": {\n        "service_id": "",\n        "route_id": "1"\n    },\n    "timestamp": "2024-01-06T03:34:45.065Z"\n}\n')),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("p",null,"You can also set the format of the logs by configuring the Plugin metadata. The following configurations are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,l.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX")," or ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,l.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Configuring the Plugin metadata is global in scope. This means that it will take effect on all Routes and Services which use the ",(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," Plugin."))),(0,l.kt)("p",null,"The example below shows how you can configure through the Admin API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/google-cloud-logging -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,l.kt)("p",null,"With this configuration, your logs would be formatted as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"partialSuccess":false,"entries":[{"jsonPayload":{"client_ip":"127.0.0.1","host":"localhost","@timestamp":"2023-01-09T14:47:25+08:00","route_id":"1"},"resource":{"type":"global"},"insertId":"942e81f60b9157f0d46bc9f5a8f0cc40","logName":"projects/apisix/logs/apisix.apache.org%2Flogs","timestamp":"2023-01-09T14:47:25+08:00","labels":{"source":"apache-apisix-google-cloud-logging"}}]}\n')),(0,l.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,l.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,l.kt)("p",null,"The example below shows a complete configuration of the Plugin on a specific Route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "client_email":"your service account email@apisix.iam.gserviceaccount.com",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----",\n                "token_uri":"https://oauth2.googleapis.com/token",\n                "scopes":[\n                    "https://www.googleapis.com/auth/logging.admin"\n                ],\n                "entries_uri":"https://logging.googleapis.com/v2/entries:write"\n            },\n            "resource":{\n                "type":"global"\n            },\n            "log_id":"apisix.apache.org%2Flogs",\n            "inactive_timeout":10,\n            "max_retry_count":0,\n            "buffer_duration":60,\n            "retry_delay":1,\n            "batch_max_size":1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h3",{id:"minimal-configuration"},"Minimal configuration"),(0,l.kt)("p",null,"The example below shows a bare minimum configuration of the Plugin on a Route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "client_email":"your service account email@apisix.iam.gserviceaccount.com",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"example-usage"},"Example usage"),(0,l.kt)("p",null,"Now, if you make a request to APISIX, it will be logged in your Google Cloud Logging Service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,l.kt)("p",null,"You can then login and view the logs in ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/logs/viewer"},"Google Cloud Logging Service"),"."),(0,l.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,l.kt)("p",null,"To remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);