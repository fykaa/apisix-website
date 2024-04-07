"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[24150],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),m=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=m(n),u=a,k=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(k,p(p({ref:e},s),{},{components:n})):r.createElement(k,p({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,p[1]=l;for(var m=2;m<o;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71614:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"mqtt-proxy",keywords:["APISIX","API \u7f51\u5173","Plugin","MQTT Proxy"],description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX mqtt-proxy \u63d2\u4ef6\u7684\u4fe1\u606f\uff0c\u901a\u8fc7 `mqtt-proxy` \u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528 MQTT \u7684 `client_id` \u8fdb\u884c\u52a8\u6001\u8d1f\u8f7d\u5e73\u8861\u3002"},p=void 0,l={unversionedId:"plugins/mqtt-proxy",id:"version-3.6/plugins/mqtt-proxy",isDocsHomePage:!1,title:"mqtt-proxy",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX mqtt-proxy \u63d2\u4ef6\u7684\u4fe1\u606f\uff0c\u901a\u8fc7 `mqtt-proxy` \u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528 MQTT \u7684 `client_id` \u8fdb\u884c\u52a8\u6001\u8d1f\u8f7d\u5e73\u8861\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.6/plugins/mqtt-proxy.md",sourceDirName:"plugins",slug:"/plugins/mqtt-proxy",permalink:"/zh/docs/apisix/3.6/plugins/mqtt-proxy",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.6/docs/zh/latest/plugins/mqtt-proxy.md",tags:[],version:"3.6",frontMatter:{title:"mqtt-proxy",keywords:["APISIX","API \u7f51\u5173","Plugin","MQTT Proxy"],description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX mqtt-proxy \u63d2\u4ef6\u7684\u4fe1\u606f\uff0c\u901a\u8fc7 `mqtt-proxy` \u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528 MQTT \u7684 `client_id` \u8fdb\u884c\u52a8\u6001\u8d1f\u8f7d\u5e73\u8861\u3002"},sidebar:"version-3.6/docs",previous:{title:"dubbo-proxy",permalink:"/zh/docs/apisix/3.6/plugins/dubbo-proxy"},next:{title:"kafka-proxy",permalink:"/zh/docs/apisix/3.6/plugins/kafka-proxy"}},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u4f7f\u7528 mqtt-proxy \u63d2\u4ef6\u542f\u7528 mTLS",id:"\u4f7f\u7528-mqtt-proxy-\u63d2\u4ef6\u542f\u7528-mtls",children:[{value:"\u521b\u5efa stream_route \u5e76\u914d\u7f6e mqtt-proxy \u63d2\u4ef6\u548c mTLS",id:"\u521b\u5efa-stream_route-\u5e76\u914d\u7f6e-mqtt-proxy-\u63d2\u4ef6\u548c-mtls",children:[]}]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],m={toc:i};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," \u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528 MQTT \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," \u8fdb\u884c\u52a8\u6001\u8d1f\u8f7d\u5e73\u8861\u3002\u5b83\u4ec5\u9002\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"stream")," \u6a21\u5f0f\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u652f\u6301 MQTT ",(0,a.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html"},"3.1.*")," \u53ca ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html"},"5.0")," \u4e24\u4e2a\u534f\u8bae\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"protocol_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u540d\u79f0\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u5e94\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"MQTT"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"protocol_level"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u7ea7\u522b\uff0cMQTT ",(0,a.kt)("inlineCode",{parentName:"td"},"3.1.*")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"4"),"\uff0cMQTT ",(0,a.kt)("inlineCode",{parentName:"td"},"5.0")," \u5e94\u662f",(0,a.kt)("inlineCode",{parentName:"td"},"5"),"\u3002")))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4e3a\u4e86\u542f\u7528\u8be5\u63d2\u4ef6\uff0c\u9700\u8981\u5148\u5728\u914d\u7f6e\u6587\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml"),"\uff09\u4e2d\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_proxy")," \u76f8\u5173\u914d\u7f6e\u3002\u4ee5\u4e0b\u914d\u7f6e\u4ee3\u8868\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"9100")," TCP \u7aef\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./conf/config.yaml"',title:'"./conf/config.yaml"'},"    ...\n    router:\n        http: 'radixtree_uri'\n        ssl: 'radixtree_sni'\n    stream_proxy:                 # TCP/UDP proxy\n      tcp:                        # TCP proxy port list\n        - 9100\n    dns_resolver:\n    ...\n")),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5c06\u8bf7\u6c42\u53d1\u9001\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"9100")," \u7aef\u53e3\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a stream \u8def\u7531\u5e76\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," \u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": [{\n            "host": "127.0.0.1",\n            "port": 1980,\n            "weight": 1\n        }]\n    }\n}\'\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 macOS \u4e2d\u4f7f\u7528 Docker\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," \u7684\u6b63\u786e\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u66b4\u9732\u4e86\u4e00\u4e2a\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt_client_id"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u901a\u8fc7\u5ba2\u6237\u7aef ID \u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "upstream": {\n        "type": "chash",\n        "key": "mqtt_client_id",\n        "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1995,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1995,\n            "weight": 1\n        }\n        ]\n    }\n}\'\n')),(0,a.kt)("p",null,"\u4e0d\u540c\u5ba2\u6237\u7aef ID \u7684 MQTT \u8fde\u63a5\u5c06\u901a\u8fc7\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5\u88ab\u8f6c\u53d1\u5230\u4e0d\u540c\u7684\u8282\u70b9\u3002\u5982\u679c\u5ba2\u6237\u7aef ID \u4e3a\u7a7a\uff0c\u5c06\u4f1a\u901a\u8fc7\u5ba2\u6237\u7aef IP \u8fdb\u884c\u5747\u8861\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-mqtt-proxy-\u63d2\u4ef6\u542f\u7528-mtls"},"\u4f7f\u7528 mqtt-proxy \u63d2\u4ef6\u542f\u7528 mTLS"),(0,a.kt)("p",null,"Stream \u4ee3\u7406\u53ef\u4ee5\u4f7f\u7528 TCP \u8fde\u63a5\u5e76\u4e14\u652f\u6301 TLS\u3002\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.6/stream-proxy/#accept-tls-over-tcp-connection"},"\u5982\u4f55\u901a\u8fc7 tcp \u8fde\u63a5\u63a5\u53d7 tls")," \u6253\u5f00\u542f\u7528\u4e86 TLS \u7684 stream \u4ee3\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," \u63d2\u4ef6\u901a\u8fc7 Stream \u4ee3\u7406\u7684\u6307\u5b9a\u7aef\u53e3\u7684 TCP \u901a\u4fe1\u542f\u7528\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u8fd8\u8981\u6c42\u5ba2\u6237\u7aef\u901a\u8fc7 TLS \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," \u63d0\u4f9b CA \u8bc1\u4e66\u548c\u670d\u52a1\u5668\u8bc1\u4e66\uff0c\u4ee5\u53ca SNI \u5217\u8868\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl")," \u4fdd\u62a4 ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_routes")," \u7684\u6b65\u9aa4\u7b49\u540c\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.6/mtls/#protect-route"},"protect Routes"),"\u3002"),(0,a.kt)("h3",{id:"\u521b\u5efa-stream_route-\u5e76\u914d\u7f6e-mqtt-proxy-\u63d2\u4ef6\u548c-mtls"},"\u521b\u5efa stream_route \u5e76\u914d\u7f6e mqtt-proxy \u63d2\u4ef6\u548c mTLS"),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u793a\u4f8b\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," \u63d2\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_route"),"\uff0c\u9700\u8981\u63d0\u4f9b CA \u8bc1\u4e66\u3001\u5ba2\u6237\u7aef\u8bc1\u4e66\u548c\u5ba2\u6237\u7aef\u5bc6\u94a5\uff08\u5bf9\u4e8e\u4e0d\u53d7\u4e3b\u673a\u4fe1\u4efb\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u8bf7\u4f7f\u7528 -k \u9009\u9879\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl 127.0.0.1:9180/apisix/admin/stream_routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 4\n        }\n    },\n    "sni": "${your_sni_name}",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"sni")," \u540d\u79f0\u5fc5\u987b\u4e0e\u63d0\u4f9b\u7684 CA \u548c\u670d\u52a1\u5668\u8bc1\u4e66\u521b\u5efa\u7684 SSL \u5bf9\u8c61\u7684\u4e00\u4e2a\u200b\u200b\u6216\u591a\u4e2a SNI \u5339\u914d\u3002"))),(0,a.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")))}s.isMDXComponent=!0}}]);