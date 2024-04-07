"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[12366],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),k=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=k(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=k(t),u=l,m=g["".concat(o,".").concat(u)]||g[u]||c[u]||r;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=t[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},89315:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={title:"skywalking",keywords:["APISIX","Plugin","SkyWalking"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 skywalking \u63d2\u4ef6\u5c06 metrics \u4e0a\u62a5\u5230 Apache SkyWalking\uff08\u4e00\u4e2a\u5f00\u6e90\u7684 APM\uff09\u3002"},i=void 0,p={unversionedId:"plugins/skywalking",id:"version-3.0/plugins/skywalking",isDocsHomePage:!1,title:"skywalking",description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 skywalking \u63d2\u4ef6\u5c06 metrics \u4e0a\u62a5\u5230 Apache SkyWalking\uff08\u4e00\u4e2a\u5f00\u6e90\u7684 APM\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugins/skywalking.md",sourceDirName:"plugins",slug:"/plugins/skywalking",permalink:"/zh/docs/apisix/3.0/plugins/skywalking",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugins/skywalking.md",tags:[],version:"3.0",frontMatter:{title:"skywalking",keywords:["APISIX","Plugin","SkyWalking"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 skywalking \u63d2\u4ef6\u5c06 metrics \u4e0a\u62a5\u5230 Apache SkyWalking\uff08\u4e00\u4e2a\u5f00\u6e90\u7684 APM\uff09\u3002"},sidebar:"version-3.0/docs",previous:{title:"zipkin",permalink:"/zh/docs/apisix/3.0/plugins/zipkin"},next:{title:"opentelemetry",permalink:"/zh/docs/apisix/3.0/plugins/opentelemetry"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"\u5982\u4f55\u8bbe\u7f6e Endpoint",id:"\u5982\u4f55\u8bbe\u7f6e-endpoint",children:[]},{value:"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b\u4ee3\u7801",id:"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b\u4ee3\u7801",children:[]}]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],k={toc:o};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"skywalking")," \u63d2\u4ef6\u7528\u4e8e\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},"Apache SkyWalking")," \u96c6\u6210\u3002"),(0,l.kt)("p",null,"SkyWalking \u4f7f\u7528\u5176\u539f\u751f\u7684 NGINX Lua tracer \u4ece\u670d\u52a1\u548c URI \u89d2\u5ea6\u63d0\u4f9b\u4e86\u5206\u5e03\u5f0f\u8ffd\u8e2a\u3001\u62d3\u6251\u5206\u6790\u4ee5\u53ca metrics \u3002"),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u76ee\u524d\u652f\u6301 HTTP \u548c gRPC \u4e24\u79cd\u534f\u8bae\uff0c\u5728 APISIX \u4e2d\u76ee\u524d\u53ea\u652f\u6301 HTTP \u534f\u8bae\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91c7\u6837\u7684\u6bd4\u4f8b\u3002\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u65f6\uff0c\u5c06\u5bf9\u6240\u6709\u8bf7\u6c42\u8fdb\u884c\u91c7\u6837\u3002")))),(0,l.kt)("h3",{id:"\u5982\u4f55\u8bbe\u7f6e-endpoint"},"\u5982\u4f55\u8bbe\u7f6e Endpoint"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u4e2d\u914d\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,l.kt)("td",{parentName:"tr",align:null},"SkyWalking \u4e0a\u62a5\u7684\u670d\u52a1\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service_instance_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"APISIX Instance Name"'),(0,l.kt)("td",{parentName:"tr",align:null},"SkyWalking \u4e0a\u62a5\u7684\u670d\u52a1\u5b9e\u4f8b\u540d\u3002\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"$hostname")," \u65f6\uff0c\u5c06\u83b7\u53d6\u672c\u673a\u4e3b\u673a\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"',(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12800%22"},'http://127.0.0.1:12800"')),(0,l.kt)("td",{parentName:"tr",align:null},"SkyWalking \u7684 HTTP endpoint \u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:12800"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"report_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"SkyWalking \u5ba2\u6237\u7aef\u5185\u7f6e\u7684\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u62a5\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002")))),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},'plugin_attr:\n  skywalking:\n    service_name: APISIX\n    service_instance_name: "APISIX Instance Name"\n    endpoint_addr: http://127.0.0.1:12800\n')),(0,l.kt)("h3",{id:"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b\u4ee3\u7801"},"\u4e0a\u6e38\u670d\u52a1\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Java with Spring Boot"',title:'"Java',with:!0,Spring:!0,'Boot"':!0},'package com.lenovo.ai.controller;\n\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport javax.servlet.http.HttpServletRequest;\n\n/**\n * @author cyxinda\n * @create 2020-05-29 14:02\n * @desc skywalking test controller\n **/\n@RestController\npublic class TestController {\n    @RequestMapping("/uid/{count}")\n    public String getUidList(@PathVariable("count") String countStr, HttpServletRequest request) {\n        System.out.println("counter:::::"+countStr);\n       return "OK";\n    }\n}\n\n')),(0,l.kt)("p",null,"\u5728\u542f\u52a8\u670d\u52a1\u524d\uff0c\u9700\u8981\u914d\u7f6e SkyWalking agent\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="agent/config/agent.config"',title:'"agent/config/agent.config"'},"agent.service_name=yourservername\ncollector.backend_service=10.110.149.175:11800\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u670d\u52a1\u811a\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nohup java -javaagent:/root/skywalking/app/agent/skywalking-agent.jar \\\n-jar /root/skywalking/app/app.jar \\\n--server.port=8089 \\\n2>&1 > /root/skywalking/app/logs/nohup.log &\n")),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u9ed8\u8ba4\u662f\u7981\u7528\u72b6\u6001\uff0c\u4f60\u9700\u8981\u5c06\u5176\u6dfb\u52a0\u5230\u914d\u7f6e\u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u4e2d\u624d\u53ef\u4ee5\u542f\u7528\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},"plugins:\n  - ...\n  - skywalking\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u52a0\u8f7d APISIX\uff0c\u6b64\u65f6 APISIX \u4f1a\u521b\u5efa\u4e00\u4e2a\u540e\u53f0\u5b9a\u65f6\u5668\uff0c\u5411 SkyWalking OAP \u670d\u52a1\u5b9a\u671f\u4e0a\u62a5\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"skywalking")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n        "skywalking": {\n            "sample_ratio": 1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9996\u5148\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," \u542f\u52a8 SkyWalking OAP \u548c SkyWalking UI\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728 usr/local \u4e2d\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"skywalking.yaml")," \u6587\u4ef6\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\noap:\n    image: apache/skywalking-oap-server:8.9.1\n    restart: always\n    ports:\n    - "12800:12800/tcp"\n\nui:\n    image: apache/skywalking-ui:8.9.1\n    restart: always\n    ports:\n    - "8080:8080/tcp"\n    environment:\n    SW_OAP_ADDRESS: http://oap:12800\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u4e0a\u8ff0\u521b\u5efa\u7684\u6587\u4ef6\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f skywalking.yaml up -d\n")),(0,l.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u540e\uff0c\u5c31\u5df2\u7ecf\u542f\u52a8\u4e86 SkyWalking \u4ee5\u53ca SkyWalking  Web UI\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u786e\u8ba4\u5bb9\u5668\u662f\u5426\u6b63\u5e38\u8fd0\u884c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps\n")))),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8bbf\u95ee APISIX\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -v http://10.110.149.192:9080/uid/12\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nOK\n...\n")),(0,l.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee SkyWalking \u7684 UI \u9875\u9762\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u670d\u52a1\u62d3\u6251\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.0/docs/assets/images/plugin/skywalking-4.png",alt:"plugin_skywalking"})),(0,l.kt)("p",null,"\u5e76\u4e14\u53ef\u4ee5\u770b\u5230\u670d\u52a1\u8ffd\u8e2a\u5217\u8868\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.0/docs/assets/images/plugin/skywalking-5.png",alt:"plugin_skywalking"})),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"skywalking")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5b8c\u5168\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"skywalking")," \u63d2\u4ef6\uff0c\u5373\u505c\u6389\u540e\u53f0\u4e0a\u62a5\u6570\u636e\u7684\u5b9a\u65f6\u5668\uff0c\u5c31\u9700\u8981\u4ece\u914d\u7f6e\u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u6ce8\u91ca\u8be5\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},"plugins:\n  - ...\n  #- skywalking\n")))}s.isMDXComponent=!0}}]);