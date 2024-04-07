"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>S,kt:()=>T});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),i=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},S=function(e){var t=i(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,S=o(e,["components","mdxType","originalType","parentName"]),h=i(n),T=r,u=h["".concat(c,".").concat(T)]||h[T]||p[T]||l;return n?s.createElement(u,a(a({ref:t},S),{},{components:n})):s.createElement(u,a({ref:t},S))}));function T(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var i=2;i<l;i++)a[i]=n[i];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51356:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>S,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const l={title:"SSL \u534f\u8bae"},a=void 0,o={unversionedId:"ssl-protocol",id:"version-3.8/ssl-protocol",isDocsHomePage:!1,title:"SSL \u534f\u8bae",description:"APISIX \u652f\u6301 TLS \u534f\u8bae\uff0c\u8fd8\u652f\u6301\u52a8\u6001\u7684\u4e3a\u6bcf\u4e00\u4e2a SNI \u6307\u5b9a\u4e0d\u540c\u7684 TLS \u534f\u8bae\u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/ssl-protocol.md",sourceDirName:".",slug:"/ssl-protocol",permalink:"/zh/docs/apisix/3.8/ssl-protocol",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/ssl-protocol.md",tags:[],version:"3.8",frontMatter:{title:"SSL \u534f\u8bae"},sidebar:"version-3.8/docs",previous:{title:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u6587\u4ef6\u5207\u6362",permalink:"/zh/docs/apisix/3.8/profile"},next:{title:"\u5347\u7ea7\u6307\u5357",permalink:"/zh/docs/apisix/3.8/upgrade-guide-from-2.15.x-to-3.0.0"}},c=[{value:"ssl_protocols \u914d\u7f6e",id:"ssl_protocols-\u914d\u7f6e",children:[{value:"\u9759\u6001\u914d\u7f6e",id:"\u9759\u6001\u914d\u7f6e",children:[]},{value:"\u52a8\u6001\u914d\u7f6e",id:"\u52a8\u6001\u914d\u7f6e",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[{value:"\u5982\u4f55\u6307\u5b9a TLSv1.1 \u534f\u8bae",id:"\u5982\u4f55\u6307\u5b9a-tlsv11-\u534f\u8bae",children:[]},{value:"\u8bc1\u4e66\u5173\u8054\u591a\u4e2a\u57df\u540d\uff0c\u4f46\u57df\u540d\u4e4b\u95f4\u4f7f\u7528\u4e0d\u540c\u7684 TLS \u534f\u8bae",id:"\u8bc1\u4e66\u5173\u8054\u591a\u4e2a\u57df\u540d\u4f46\u57df\u540d\u4e4b\u95f4\u4f7f\u7528\u4e0d\u540c\u7684-tls-\u534f\u8bae",children:[]}]}],i={toc:c};function S(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APISIX")," \u652f\u6301 TLS \u534f\u8bae\uff0c\u8fd8\u652f\u6301\u52a8\u6001\u7684\u4e3a\u6bcf\u4e00\u4e2a SNI \u6307\u5b9a\u4e0d\u540c\u7684 TLS \u534f\u8bae\u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u4e86\u5b89\u5168\u8003\u8651\uff0cAPISIX \u9ed8\u8ba4\u4f7f\u7528\u7684\u52a0\u5bc6\u5957\u4ef6\u4e0d\u652f\u6301 TLSv1.1 \u4ee5\u53ca\u66f4\u4f4e\u7684\u7248\u672c\u3002"),"\n",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u9700\u8981\u542f\u7528 TLSv1.1 \u534f\u8bae\uff0c\u8bf7\u5728 config.yaml \u7684\u914d\u7f6e\u9879 apisix.ssl.ssl_ciphers \u589e\u52a0 TLSv1.1 \u534f\u8bae\u6240\u652f\u6301\u7684\u52a0\u5bc6\u5957\u4ef6\u3002")),(0,r.kt)("h2",{id:"ssl_protocols-\u914d\u7f6e"},"ssl_protocols \u914d\u7f6e"),(0,r.kt)("h3",{id:"\u9759\u6001\u914d\u7f6e"},"\u9759\u6001\u914d\u7f6e"),(0,r.kt)("p",null,"\u9759\u6001\u914d\u7f6e\u4e2d config.yaml \u7684 ssl_protocols \u53c2\u6570\u4f1a\u4f5c\u7528\u4e8e APISIX \u5168\u5c40\uff0c\u4f46\u662f\u4e0d\u80fd\u52a8\u6001\u4fee\u6539\uff0c\u4ec5\u5f53\u5339\u914d\u7684 SSL \u8d44\u6e90\u672a\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl_protocols"),"\uff0c\u9759\u6001\u914d\u7f6e\u624d\u4f1a\u751f\u6548\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  ssl:\n    ssl_protocols: TLSv1.2 TLSv1.3 # default TLSv1.2 TLSv1.3\n")),(0,r.kt)("h3",{id:"\u52a8\u6001\u914d\u7f6e"},"\u52a8\u6001\u914d\u7f6e"),(0,r.kt)("p",null,"\u4f7f\u7528 ssl \u8d44\u6e90\u4e2d ssl_protocols \u5b57\u6bb5\u52a8\u6001\u7684\u4e3a\u6bcf\u4e00\u4e2a SNI \u6307\u5b9a\u4e0d\u540c\u7684 TLS \u534f\u8bae\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u6307\u5b9a test.com \u57df\u540d\u4f7f\u7528 TLSv1.2 TLSv1.3 \u534f\u8bae\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "cert": "$cert",\n    "key": "$key",\n    "snis": ["test.com"],\n    "ssl_protocols": [\n        "TLSv1.2",\n        "TLSv1.3"\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u914d\u7f6e\u4f18\u5148\u7ea7\u6bd4\u9759\u6001\u914d\u7f6e\u66f4\u9ad8\uff0c\u5f53 ssl \u8d44\u6e90\u914d\u7f6e\u9879 ssl_protocols \u4e0d\u4e3a\u7a7a\u65f6 \u9759\u6001\u914d\u7f6e\u5c06\u4f1a\u88ab\u8986\u76d6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u914d\u7f6e\u4f5c\u7528\u4e8e\u5168\u5c40\u9700\u8981\u91cd\u542f apisix \u624d\u80fd\u751f\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u914d\u7f6e\u53ef\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u6bcf\u4e2a SNI \u7684 TLS \u534f\u8bae\u7248\u672c\uff0c\u5e76\u4e14\u80fd\u591f\u52a8\u6001\u4fee\u6539\uff0c\u76f8\u6bd4\u4e8e\u9759\u6001\u914d\u7f6e\u66f4\u52a0\u7075\u6d3b\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u5982\u4f55\u6307\u5b9a-tlsv11-\u534f\u8bae"},"\u5982\u4f55\u6307\u5b9a TLSv1.1 \u534f\u8bae"),(0,r.kt)("p",null,"\u5b58\u5728\u4e00\u4e9b\u8001\u65e7\u7684\u5ba2\u6237\u7aef\uff0c\u4ecd\u7136\u91c7\u7528\u8f83\u4f4e\u7ea7\u522b\u7684 TLSv1.1 \u534f\u8bae\u7248\u672c\uff0c\u800c\u65b0\u7684\u4ea7\u54c1\u5219\u4f7f\u7528\u8f83\u9ad8\u5b89\u5168\u7ea7\u522b\u7684 TLS \u534f\u8bae\u7248\u672c\u3002\u5982\u679c\u8ba9\u65b0\u4ea7\u54c1\u652f\u6301 TLSv1.1 \u53ef\u80fd\u4f1a\u5e26\u6765\u4e00\u4e9b\u5b89\u5168\u9690\u60a3\u3002\u4e3a\u4e86\u4fdd\u8bc1 API \u7684\u5b89\u5168\u6027\uff0c\u6211\u4eec\u9700\u8981\u5728\u534f\u8bae\u7248\u672c\u4e4b\u95f4\u8fdb\u884c\u7075\u6d3b\u8f6c\u6362\u3002\n\u4f8b\u5982\uff1atest.com \u662f\u8001\u65e7\u5ba2\u6237\u7aef\u6240\u4f7f\u7528\u7684\u57df\u540d\uff0c\u9700\u8981\u5c06\u5176\u914d\u7f6e\u4e3a TLSv1.1 \u800c test2.com \u5c5e\u4e8e\u65b0\u4ea7\u54c1\uff0c\u540c\u65f6\u652f\u6301\u4e86 TLSv1.2\uff0cTLSv1.3 \u534f\u8bae\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"config.yaml \u914d\u7f6e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  ssl:\n    ssl_protocols: TLSv1.3\n    # ssl_ciphers is for reference only\n    ssl_ciphers: ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES256-SHA:DHE-DSS-AES256-SHA\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4e3a test.com \u57df\u540d\u6307\u5b9a TLSv1.1 \u534f\u8bae\u7248\u672c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n     "cert" : "\'"$(cat server.crt)"\'",\n     "key": "\'"$(cat server.key)"\'",\n     "snis": ["test.com"],\n     "ssl_protocols": [\n         "TLSv1.1"\n     ]\n}\'\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4e3a test.com \u521b\u5efa SSL \u5bf9\u8c61\uff0c\u672a\u6307\u5b9a TLS \u534f\u8bae\u7248\u672c\uff0c\u5c06\u9ed8\u8ba4\u4f7f\u7528\u9759\u6001\u914d\u7f6e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n     "cert" : "\'"$(cat server2.crt)"\'",\n     "key": "\'"$(cat server2.key)"\'",\n     "snis": ["test2.com"]\n}\'\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u9a8c\u8bc1")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.3 \u8bbf\u95ee test.com \u5931\u8d25\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl --tls-max 1.3 --tlsv1.3  https://test.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.3 (OUT), TLS handshake, Client hello (1):\n* TLSv1.3 (IN), TLS alert, protocol version (582):\n* error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n* Closing connection 0\ncurl: (35) error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.1 \u8bbf\u95ee test.com \u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl --tls-max 1.1 --tlsv1.1  https://test.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.1 (OUT), TLS handshake, Client hello (1):\n* TLSv1.1 (IN), TLS handshake, Server hello (2):\n* TLSv1.1 (IN), TLS handshake, Certificate (11):\n* TLSv1.1 (IN), TLS handshake, Server key exchange (12):\n* TLSv1.1 (IN), TLS handshake, Server finished (14):\n* TLSv1.1 (OUT), TLS handshake, Client key exchange (16):\n* TLSv1.1 (OUT), TLS change cipher, Change cipher spec (1):\n* TLSv1.1 (OUT), TLS handshake, Finished (20):\n* TLSv1.1 (IN), TLS handshake, Finished (20):\n* SSL connection using TLSv1.1 / ECDHE-RSA-AES256-SHA\n")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.3 \u8bbf\u95ee test2.com \u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl --tls-max 1.3 --tlsv1.3  https://test2.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test2.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.3 (OUT), TLS handshake, Client hello (1):\n* TLSv1.3 (IN), TLS handshake, Server hello (2):\n* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):\n* TLSv1.3 (IN), TLS handshake, Certificate (11):\n* TLSv1.3 (IN), TLS handshake, CERT verify (15):\n* TLSv1.3 (IN), TLS handshake, Finished (20):\n* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):\n* TLSv1.3 (OUT), TLS handshake, Finished (20):\n* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384\n")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.1 \u8bbf\u95ee test2.com \u5931\u8d25\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --tls-max 1.1 --tlsv1.1  https://test2.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test2.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.1 (OUT), TLS handshake, Client hello (1):\n* TLSv1.1 (IN), TLS alert, protocol version (582):\n* error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n* Closing connection 0\ncurl: (35) error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n")),(0,r.kt)("h3",{id:"\u8bc1\u4e66\u5173\u8054\u591a\u4e2a\u57df\u540d\u4f46\u57df\u540d\u4e4b\u95f4\u4f7f\u7528\u4e0d\u540c\u7684-tls-\u534f\u8bae"},"\u8bc1\u4e66\u5173\u8054\u591a\u4e2a\u57df\u540d\uff0c\u4f46\u57df\u540d\u4e4b\u95f4\u4f7f\u7528\u4e0d\u540c\u7684 TLS \u534f\u8bae"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u9047\u5230\u8fd9\u6837\u4e00\u79cd\u60c5\u51b5\uff0c\u5373\u4e00\u4e2a\u8bc1\u4e66\u5173\u8054\u4e86\u591a\u4e2a\u57df\u540d\uff0c\u4f46\u662f\u5b83\u4eec\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684 TLS \u534f\u8bae\u6765\u4fdd\u8bc1\u5b89\u5168\u6027\u3002\u4f8b\u5982 test.com \u57df\u540d\u9700\u8981\u4f7f\u7528 TlSv1.2 \u534f\u8bae\uff0c\u800c test2.com \u57df\u540d\u5219\u9700\u8981\u4f7f\u7528 TLSv1.3 \u534f\u8bae\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u80fd\u7b80\u5355\u5730\u4e3a\u6240\u6709\u7684\u57df\u540d\u521b\u5efa\u4e00\u4e2a SSL \u5bf9\u8c61\uff0c\u800c\u662f\u9700\u8981\u4e3a\u6bcf\u4e2a\u57df\u540d\u5355\u72ec\u521b\u5efa\u4e00\u4e2a SSL \u5bf9\u8c61\uff0c\u5e76\u6307\u5b9a\u76f8\u5e94\u7684\u534f\u8bae\u7248\u672c\u3002\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u57df\u540d\u548c\u534f\u8bae\u7248\u672c\u6765\u8fdb\u884c\u6b63\u786e\u7684 SSL \u63e1\u624b\u548c\u52a0\u5bc6\u901a\u4fe1\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8bc1\u4e66\u4e3a test.com \u521b\u5efa ssl \u5bf9\u8c61\uff0c\u5e76\u6307\u5b9a TLSv1.2 \u534f\u8bae\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n     "cert" : "\'"$(cat server.crt)"\'",\n     "key": "\'"$(cat server.key)"\'",\n     "snis": ["test.com"],\n     "ssl_protocols": [\n         "TLSv1.2"\n     ]\n}\'\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e0e test.com \u540c\u4e00\u8bc1\u4e66\uff0c\u4e3a test2.com \u521b\u5efa ssl \u5bf9\u8c61\uff0c\u5e76\u6307\u5b9a TLSv1.3 \u534f\u8bae\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/ssls/2 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n     "cert" : "\'"$(cat server.crt)"\'",\n     "key": "\'"$(cat server.key)"\'",\n     "snis": ["test2.com"],\n     "ssl_protocols": [\n         "TLSv1.3"\n     ]\n}\'\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u9a8c\u8bc1")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.2 \u8bbf\u95ee test.com \u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl --tls-max 1.2 --tlsv1.2  https://test.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.2 (OUT), TLS handshake, Client hello (1):\n* TLSv1.2 (IN), TLS handshake, Server hello (2):\n* TLSv1.2 (IN), TLS handshake, Certificate (11):\n* TLSv1.2 (IN), TLS handshake, Server key exchange (12):\n* TLSv1.2 (IN), TLS handshake, Server finished (14):\n* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):\n* TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):\n* TLSv1.2 (OUT), TLS handshake, Finished (20):\n* TLSv1.2 (IN), TLS handshake, Finished (20):\n* SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256\n* ALPN, server accepted to use h2\n* Server certificate:\n*  subject: C=AU; ST=Some-State; O=Internet Widgits Pty Ltd; CN=test.com\n*  start date: Jul 20 15:50:08 2023 GMT\n*  expire date: Jul 17 15:50:08 2033 GMT\n*  issuer: C=AU; ST=Some-State; O=Internet Widgits Pty Ltd; CN=test.com\n*  SSL certificate verify result: EE certificate key too weak (66), continuing anyway.\n* Using HTTP2, server supports multi-use\n* Connection state changed (HTTP/2 confirmed)\n* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0\n* Using Stream ID: 1 (easy handle 0x5608905ee2e0)\n> HEAD / HTTP/2\n> Host: test.com:9443\n> user-agent: curl/7.74.0\n> accept: */*\n\n")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.3 \u534f\u8bae\u8bbf\u95ee test.com \u5931\u8d25\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl --tls-max 1.3 --tlsv1.3  https://test.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.3 (OUT), TLS handshake, Client hello (1):\n* TLSv1.3 (IN), TLS alert, protocol version (582):\n* error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n* Closing connection 0\ncurl: (35) error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n\n")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.3 \u534f\u8bae\u8bbf\u95ee test2.com \u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl --tls-max 1.3 --tlsv1.3  https://test2.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test2.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.3 (OUT), TLS handshake, Client hello (1):\n* TLSv1.3 (IN), TLS handshake, Server hello (2):\n* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):\n* TLSv1.3 (IN), TLS handshake, Certificate (11):\n* TLSv1.3 (IN), TLS handshake, CERT verify (15):\n* TLSv1.3 (IN), TLS handshake, Finished (20):\n* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):\n* TLSv1.3 (OUT), TLS handshake, Finished (20):\n* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384\n* ALPN, server accepted to use h2\n* Server certificate:\n*  subject: C=AU; ST=Some-State; O=Internet Widgits Pty Ltd; CN=test2.com\n*  start date: Jul 20 16:05:47 2023 GMT\n*  expire date: Jul 17 16:05:47 2033 GMT\n*  issuer: C=AU; ST=Some-State; O=Internet Widgits Pty Ltd; CN=test2.com\n*  SSL certificate verify result: EE certificate key too weak (66), continuing anyway.\n* Using HTTP2, server supports multi-use\n* Connection state changed (HTTP/2 confirmed)\n* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0\n* Using Stream ID: 1 (easy handle 0x55569cbe42e0)\n> HEAD / HTTP/2\n> Host: test2.com:9443\n> user-agent: curl/7.74.0\n> accept: */*\n>\n* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):\n* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):\n* old SSL session ID is stale, removing\n")),(0,r.kt)("p",null,"\u4f7f\u7528 TLSv1.2 \u534f\u8bae\u8bbf\u95ee test2.com \u5931\u8d25\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl --tls-max 1.2 --tlsv1.2  https://test2.com:9443 -v -k -I\n*   Trying 127.0.0.1:9443...\n* Connected to test2.com (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*  CAfile: /etc/ssl/certs/ca-certificates.crt\n*  CApath: /etc/ssl/certs\n* TLSv1.2 (OUT), TLS handshake, Client hello (1):\n* TLSv1.2 (IN), TLS alert, protocol version (582):\n* error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n* Closing connection 0\ncurl: (35) error:1409442E:SSL routines:ssl3_read_bytes:tlsv1 alert protocol version\n")))}S.isMDXComponent=!0}}]);