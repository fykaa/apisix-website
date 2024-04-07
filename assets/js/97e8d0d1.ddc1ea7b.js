"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[67003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(m,o(o({ref:t},g),{},{components:r})):n.createElement(m,o({ref:t},g))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77359:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"log-rotate",keywords:["Apache APISIX","API Gateway","Plugin","Log rotate"],description:"This document contains information about the Apache APISIX log-rotate Plugin."},o=void 0,i={unversionedId:"plugins/log-rotate",id:"version-3.7/plugins/log-rotate",isDocsHomePage:!1,title:"log-rotate",description:"This document contains information about the Apache APISIX log-rotate Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.7/plugins/log-rotate.md",sourceDirName:"plugins",slug:"/plugins/log-rotate",permalink:"/docs/apisix/3.7/plugins/log-rotate",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/plugins/log-rotate.md",tags:[],version:"3.7",frontMatter:{title:"log-rotate",keywords:["Apache APISIX","API Gateway","Plugin","Log rotate"],description:"This document contains information about the Apache APISIX log-rotate Plugin."},sidebar:"version-3.7/docs",previous:{title:"syslog",permalink:"/docs/apisix/3.7/plugins/syslog"},next:{title:"error-log-logger",permalink:"/docs/apisix/3.7/plugins/error-log-logger"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],p={toc:s};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"log-rotate")," Plugin is used to keep rotating access and error log files in the log directory at regular intervals."),(0,a.kt)("p",null,"You can configure how often the logs are rotated and how many logs to keep. When the number of logs exceeds, older logs are automatically deleted."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"60 * 60"),(0,a.kt)("td",{parentName:"tr",align:null},"Time in seconds specifying how often to rotate the logs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_kept"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"24 * 7"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of historical logs to keep. If this number is exceeded, older logs are deleted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_size"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"Max size(Bytes) of log files to be rotated, size check would be skipped with a value less than 0 or time is up specified by interval.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable_compression"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", compresses the log file (gzip). Requires ",(0,a.kt)("inlineCode",{parentName:"td"},"tar")," to be installed.")))),(0,a.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,a.kt)("p",null,"To enable the Plugin, add it in your configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n    - log-rotate\n\nplugin_attr:\n    log-rotate:\n        interval: 3600    # rotate interval (unit: second)\n        max_kept: 168     # max number of log files will be kept\n        max_size: -1      # max size of log files will be kept\n        enable_compression: false    # enable log file compression(gzip) or not, default false\n")),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Once you enable the Plugin as shown above, the logs will be stored and rotated based on your configuration."),(0,a.kt)("p",null,"In the example below the ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_kept")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),". This will create logs as shown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ll logs\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"total 44K\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-40_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:32 2020-03-20_20-32-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-50_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:32 2020-03-20_20-32-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-33-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-20_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-20_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-30_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-30_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-40_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:33 2020-03-20_20-33-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-50_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-34-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 2020-03-20_20-34-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 access.log\n-rw-r--r--. 1 resty resty 1.5K Mar 20 21:31 error.log\n")),(0,a.kt)("p",null,"If you have enabled compression, the logs will be as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"total 10.5K\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-33-50_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-33-50_error.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-34-00_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-00_error.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-10_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-10_error.log.tar.gz\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 access.log\n-rw-r--r--. 1 resty resty 1.5K Mar 20 21:31 error.log\n")),(0,a.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,a.kt)("p",null,"To remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"log-rotate")," Plugin, you can remove it from your configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n    # - log-rotate\n")))}g.isMDXComponent=!0}}]);