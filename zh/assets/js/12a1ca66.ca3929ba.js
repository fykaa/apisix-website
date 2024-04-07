"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[20600],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||i;return t?a.createElement(m,p(p({ref:n},c),{},{components:t})):a.createElement(m,p({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37019:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={title:"zipkin",keywords:["APISIX","Plugin","Zipkin","zipkin"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX zipkin \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},p=void 0,l={unversionedId:"plugins/zipkin",id:"version-3.2/plugins/zipkin",isDocsHomePage:!1,title:"zipkin",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX zipkin \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.2/plugins/zipkin.md",sourceDirName:"plugins",slug:"/plugins/zipkin",permalink:"/zh/docs/apisix/3.2/plugins/zipkin",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.2/docs/zh/latest/plugins/zipkin.md",tags:[],version:"3.2",frontMatter:{title:"zipkin",keywords:["APISIX","Plugin","Zipkin","zipkin"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX zipkin \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.2/docs",previous:{title:"client-control",permalink:"/zh/docs/apisix/3.2/plugins/client-control"},next:{title:"skywalking",permalink:"/zh/docs/apisix/3.2/plugins/skywalking"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b",id:"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b",children:[]}]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u4e0a\u62a5\u5230 Jaeger",id:"\u4e0a\u62a5\u5230-jaeger",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:o};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openzipkin/zipkin"},"Zipkin")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u8c03\u7528\u94fe\u8ffd\u8e2a\u7cfb\u7edf\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"zipkin")," \u63d2\u4ef6\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/instrumenting.html"},"Zipkin API \u89c4\u8303"),"\uff0c\u652f\u6301\u6536\u96c6\u8ddf\u8e2a\u4fe1\u606f\u5e76\u4e0a\u62a5\u7ed9 Zipkin Collector\u3002"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u4e5f\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/docs/main/latest/en/setup/backend/zipkin-trace/#zipkin-receiver"},"Apache SkyWalking")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.31/getting-started/#migrating-from-zipkin"},"Jaeger"),"\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u652f\u6301\u4e86 Zipkin ",(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/zipkin-api/zipkin-api.yaml"},"v1")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/zipkin-api/zipkin2-api.yaml"},"v2")," API\u3002\u5f53\u7136 ",(0,r.kt)("inlineCode",{parentName:"p"},"zipkin")," \u63d2\u4ef6\u4e5f\u53ef\u4ee5\u4e0e\u5176\u4ed6\u652f\u6301\u4e86 Zipkin v1 \u548c v2 API \u683c\u5f0f\u7684\u8c03\u7528\u94fe\u8ffd\u8e2a\u7cfb\u7edf\u96c6\u6210\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Zipkin \u7684 HTTP \u8282\u70b9\u3002\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:9411/api/v2/spans"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8bf7\u6c42\u8fdb\u884c\u91c7\u6837\u7684\u6bd4\u4f8b\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," \u65f6\uff0c\u5c06\u5bf9\u6240\u6709\u8bf7\u6c42\u8fdb\u884c\u91c7\u6837\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u5728 Zipkin \u4e2d\u663e\u793a\u7684\u670d\u52a1\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"$server_addr"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d APISIX \u5b9e\u4f8b\u7684 IPv4 \u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"span_version"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, 2]"),(0,r.kt)("td",{parentName:"tr",align:null},"span \u7c7b\u578b\u7684\u7248\u672c\u3002")))),(0,r.kt)("p",null,"\u5728\u5f53\u524d\u7248\u672c\u4e2d\uff0c\u6bcf\u4e2a\u88ab\u8ddf\u8e2a\u7684\u8bf7\u6c42\u90fd\u4f1a\u521b\u5efa\u5982\u4e0b\u6240\u793a\u7684 span\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 proxy: from the beginning of the request to the beginning of header filter\n\u2514\u2500\u2500 response: from the beginning of header filter to the beginning of log\n")),(0,r.kt)("p",null,"\u5728\u65e7\u7248\u672c\uff08\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"span_version")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff09\u4e2d\uff0c\u5c06\u521b\u5efa\u5982\u4e0b span\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 rewrite\n\u251c\u2500\u2500 access\n\u2514\u2500\u2500 proxy\n    \u2514\u2500\u2500 body_filter\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e0a\u8ff0 span \u7684\u540d\u79f0\u4e0e\u540c\u540d\u7684 NGINX phase \u6ca1\u6709\u8054\u7cfb\u3002"))),(0,r.kt)("h3",{id:"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b"},"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Go with Gin"',title:'"Go',with:!0,'Gin"':!0},'func GetTracer(serviceName string, port int, enpoitUrl string, rate float64) *zipkin.Tracer {\n    // create a reporter to be used by the tracer\n    reporter := httpreporter.NewReporter(enpoitUrl)\n    // set-up the local endpoint for our service host is  ip:host\n\n    thisip, _ := GetLocalIP()\n\n    host := fmt.Sprintf("%s:%d", thisip, port)\n    endpoint, _ := zipkin.NewEndpoint(serviceName, host)\n    // set-up our sampling strategy\n    sampler, _ := zipkin.NewCountingSampler(rate)\n    // initialize the tracer\n    tracer, _ := zipkin.NewTracer(\n        reporter,\n        zipkin.WithLocalEndpoint(endpoint),\n        zipkin.WithSampler(sampler),\n    )\n    return tracer\n}\n\nfunc main(){\n    r := gin.Default()\n\n    tracer := GetTracer(...)\n\n    // use middleware to extract parentID from http header that injected by APISIX\n    r.Use(func(c *gin.Context) {\n        span := this.Tracer.Extract(b3.ExtractHTTP(c.Request))\n        childSpan := this.Tracer.StartSpan(spanName, zipkin.Parent(span))\n        defer childSpan.Finish()\n        c.Next()\n    })\n\n}\n')),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"zipkin")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\u4f60\u9700\u8981\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a Zipkin \u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d -p 9411:9411 openzipkin/zipkin\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53d1\u8d77\u8bf7\u6c42\uff0c\u8be5\u8bf7\u6c42\u8bb0\u5f55\u4f1a\u51fa\u73b0\u5728 Zipkin \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"\u6700\u540e\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9411/zipkin")," \u8bbf\u95ee Zipkin UI \u67e5\u8be2 traces\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.2/docs/assets/images/plugin/zipkin-1.jpg",alt:"zipkin web-ui"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.2/docs/assets/images/plugin/zipkin-2.jpg",alt:"zipkin web-ui list view"})),(0,r.kt)("h3",{id:"\u4e0a\u62a5\u5230-jaeger"},"\u4e0a\u62a5\u5230 Jaeger"),(0,r.kt)("p",null,"\u9664\u4e86\u5bf9\u63a5 Zipkin\uff0c\u8be5\u63d2\u4ef6\u4e5f\u652f\u6301\u5c06 traces \u4e0a\u62a5\u5230 Jaeger\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c Jaeger \u540e\u7aef\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d --name jaeger \\\n  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \\\n  -p 16686:16686 \\\n  -p 9411:9411 \\\n  jaegertracing/all-in-one:1.31\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u8def\u7531\u5e76\u542f\u7528\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53d1\u8d77\u8bf7\u6c42\uff0c\u8be5\u6761\u8bf7\u6c42\u8bb0\u5f55\u5c06\u4f1a\u51fa\u73b0\u5728 Jaeger \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"\u6700\u540e\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:16686")," \u8bbf\u95ee Jaeger UI \u67e5\u770b traces\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.2/docs/assets/images/plugin/jaeger-1.png",alt:"jaeger web-ui"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.2/docs/assets/images/plugin/jaeger-2.png",alt:"jaeger web-ui trace"})),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"zipkin")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);