"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,k=h["".concat(o,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6357:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={title:"\u5bc6\u94a5\u9a8c\u8bc1",slug:"/getting-started/key-authentication"},p=void 0,l={unversionedId:"getting-started/key-authentication",id:"version-3.8/getting-started/key-authentication",isDocsHomePage:!1,title:"\u5bc6\u94a5\u9a8c\u8bc1",description:"\u672c\u6559\u7a0b\u7531 API7.ai \u7f16\u5199\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/getting-started/key-authentication.md",sourceDirName:"getting-started",slug:"/getting-started/key-authentication",permalink:"/zh/docs/apisix/3.8/getting-started/key-authentication",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/getting-started/key-authentication.md",tags:[],version:"3.8",frontMatter:{title:"\u5bc6\u94a5\u9a8c\u8bc1",slug:"/getting-started/key-authentication"},sidebar:"version-3.8/docs",previous:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/zh/docs/apisix/3.8/getting-started/load-balancing"},next:{title:"\u9650\u901f",permalink:"/zh/docs/apisix/3.8/getting-started/rate-limiting"}},o=[{value:"Consumer \u662f\u4ec0\u4e48",id:"consumer-\u662f\u4ec0\u4e48",children:[]},{value:"Key Authentication \u662f\u4ec0\u4e48",id:"key-authentication-\u662f\u4ec0\u4e48",children:[]},{value:"\u542f\u7528 Key Authentication",id:"\u542f\u7528-key-authentication",children:[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[]},{value:"\u521b\u5efa\u6d88\u8d39\u8005",id:"\u521b\u5efa\u6d88\u8d39\u8005",children:[]},{value:"\u542f\u7528 Authentication",id:"\u542f\u7528-authentication",children:[]},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[]},{value:"\u7981\u7528 Authentication",id:"\u7981\u7528-authentication",children:[]}]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],s={toc:o};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.api7.ai/apisix/getting-started/key-authentication"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u6559\u7a0b\u7531 ",(0,i.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai")," \u7f16\u5199\u3002")),(0,i.kt)("p",null,"API \u7f51\u5173\u4e3b\u8981\u4f5c\u7528\u662f\u8fde\u63a5 API \u6d88\u8d39\u8005\u548c\u63d0\u4f9b\u8005\u3002\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u5728\u8bbf\u95ee\u5185\u90e8\u8d44\u6e90\u4e4b\u524d\uff0c\u5e94\u5148\u5bf9\u6d88\u8d39\u8005\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/02/08/8mRaK3v1_consumer.png",alt:"\u8eab\u4efd\u9a8c\u8bc1"})),(0,i.kt)("p",null,"APISIX \u62e5\u6709\u7075\u6d3b\u7684\u63d2\u4ef6\u6269\u5c55\u7cfb\u7edf\uff0c\u76ee\u524d\u6709\u5f88\u591a\u53ef\u7528\u4e8e\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u7684\u63d2\u4ef6\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/key-auth/"},"Key Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/basic-auth/"},"Basic Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/jwt-auth/"},"JSON Web Token (JWT) Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/authz-keycloak/"},"Keycloak")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/authz-casdoor/"},"Casdoor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/wolf-rbac/"},"Wolf RBAC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/openid-connect/"},"OpenID Connect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/cas-auth/"},"Central Authentication Service (CAS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/hmac-auth/"},"HMAC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/authz-casbin/"},"Casbin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/ldap-auth/"},"LDAP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/opa/"},"Open Policy Agent (OPA)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/plugins/forward-auth/"},"Forward Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/multi-auth/"},"Multiple Authentications"))),(0,i.kt)("p",null,"\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u521b\u5efa\u4e00\u4e2a\u5e26\u6709 ",(0,i.kt)("em",{parentName:"p"},"\u5bc6\u94a5\u9a8c\u8bc1")," \u63d2\u4ef6\u7684 ",(0,i.kt)("em",{parentName:"p"},"\u6d88\u8d39\u8005"),"\uff0c\u5e76\u5b66\u4e60\u5982\u4f55\u542f\u7528\u548c\u505c\u7528\u8eab\u4efd\u9a8c\u8bc1\u63d2\u4ef6\u3002"),(0,i.kt)("h2",{id:"consumer-\u662f\u4ec0\u4e48"},"Consumer \u662f\u4ec0\u4e48"),(0,i.kt)("p",null,"Consumer\uff08\u4e5f\u79f0\u4e4b\u4e3a\u6d88\u8d39\u8005\uff09\u662f\u6307\u4f7f\u7528 API \u7684\u5e94\u7528\u6216\u5f00\u53d1\u4eba\u5458\u3002"),(0,i.kt)("p",null,"\u5728 APISIX \u4e2d\uff0c\u6d88\u8d39\u8005\u9700\u8981\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684 ",(0,i.kt)("em",{parentName:"p"},"\u540d\u79f0"),"\uff0c\u5e76\u4ece\u4e0a\u9762\u7684\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\u8eab\u4efd\u9a8c\u8bc1 ",(0,i.kt)("em",{parentName:"p"},"\u63d2\u4ef6"),"\u3002"),(0,i.kt)("h2",{id:"key-authentication-\u662f\u4ec0\u4e48"},"Key Authentication \u662f\u4ec0\u4e48"),(0,i.kt)("p",null,"Key Authentication\uff08\u4e5f\u79f0\u4e4b\u4e3a\u5bc6\u94a5\u9a8c\u8bc1\uff09\u662f\u4e00\u4e2a\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\u4f46\u662f\u5e94\u7528\u5e7f\u6cdb\u7684\u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5\uff0c\u5b83\u7684\u8bbe\u8ba1\u601d\u8def\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u4e3a\u8def\u7531\u6dfb\u52a0\u4e00\u4e2a\u8eab\u4efd\u9a8c\u8bc1\u5bc6\u94a5\uff08API \u5bc6\u94a5\uff09\u3002"),(0,i.kt)("li",{parentName:"ol"},"API \u6d88\u8d39\u8005\u5728\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u5728\u67e5\u8be2\u5b57\u7b26\u4e32\u6216\u8005\u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0\u5bc6\u94a5\u3002")),(0,i.kt)("h2",{id:"\u542f\u7528-key-authentication"},"\u542f\u7528 Key Authentication"),(0,i.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.8/getting-started/README"},"\u5feb\u5165\u95e8\u6307\u5357"),"\u5b8c\u6210 APISIX \u7684\u5b89\u88c5\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5b8c\u6210",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.8/getting-started/configure-routes#route-%E6%98%AF%E4%BB%80%E4%B9%88"},"\u914d\u7f6e\u8def\u7531"),"\u3002")),(0,i.kt)("h3",{id:"\u521b\u5efa\u6d88\u8d39\u8005"},"\u521b\u5efa\u6d88\u8d39\u8005"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"tom")," \u7684\u6d88\u8d39\u8005\uff0c\u5e76\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\uff0c\u5bc6\u94a5\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"secret-key"),"\u3002\u6240\u6709\u643a\u5e26\u5bc6\u94a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"secret-key")," \u7684\u8bf7\u6c42\u90fd\u4f1a\u88ab\u8bc6\u522b\u4e3a\u6d88\u8d39\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"tom"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u751f\u4ea7\u73af\u5883\u8bf7\u4f7f\u7528\u590d\u6742\u7684\u5bc6\u94a5\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/consumers" -X PUT -d \'\n{\n  "username": "tom",\n  "plugins": {\n    "key-auth": {\n      "key": "secret-key"\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"\u5982\u679c\u6d88\u8d39\u8005\u521b\u5efa\u6210\u529f\uff0c\u4f60\u5c06\u5f97\u5230\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 201 Created"),"\u3002"),(0,i.kt)("h3",{id:"\u542f\u7528-authentication"},"\u542f\u7528 Authentication"),(0,i.kt)("p",null,"\u5728\u6559\u7a0b",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.8/getting-started/configure-routes"},"\u914d\u7f6e\u8def\u7531"),"\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u8def\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"getting-started-ip"),"\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," \u65b9\u6cd5\u4e3a\u8be5\u8def\u7531\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n  "plugins": {\n    "key-auth": {}\n  }\n}\'\n')),(0,i.kt)("p",null,"\u5982\u679c\u589e\u52a0\u63d2\u4ef6\u6210\u529f\uff0c\u4f60\u5c06\u5f97\u5230\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 201 Created"),"\u3002"),(0,i.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\u8fdb\u884c\u9a8c\u8bc1\uff1a"),(0,i.kt)("h4",{id:"1-\u53d1\u9001\u4e0d\u5e26\u4efb\u4f55\u5bc6\u94a5\u7684\u8bf7\u6c42"},"1. \u53d1\u9001\u4e0d\u5e26\u4efb\u4f55\u5bc6\u94a5\u7684\u8bf7\u6c42"),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u4e0d\u5e26\u8bf7\u6c42\u5934 ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," \u7684\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/ip"\n')),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u542f\u7528\u4e86\u5bc6\u94a5\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u5c06\u4f1a\u5f97\u5230\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 401 Unauthorized"),"\uff0c\u5373\u672a\u6388\u6743\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 401 Unauthorized\nDate: Wed, 08 Feb 2023 09:38:36 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/3.1.0\n")),(0,i.kt)("h4",{id:"2-\u53d1\u9001\u643a\u5e26\u9519\u8bef\u5bc6\u94a5\u7684\u8bf7\u6c42"},"2. \u53d1\u9001\u643a\u5e26\u9519\u8bef\u5bc6\u94a5\u7684\u8bf7\u6c42"),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u643a\u5e26\u9519\u8bef\u5bc6\u94a5\uff08\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"wrong-key"),"\uff09\u7684\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i \"http://127.0.0.1:9080/ip\" -H 'apikey: wrong-key'\n")),(0,i.kt)("p",null,"\u5982\u679c\u5bc6\u94a5\u9519\u8bef\uff0c\u4f60\u4e5f\u5c06\u5f97\u5230\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 401 Unauthorized"),"\uff0c\u5373\u672a\u6388\u6743\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 401 Unauthorized\nDate: Wed, 08 Feb 2023 09:38:27 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/3.1.0\n")),(0,i.kt)("h4",{id:"3-\u53d1\u9001\u643a\u5e26\u6b63\u786e\u5bc6\u94a5\u7684\u8bf7\u6c42"},"3. \u53d1\u9001\u643a\u5e26\u6b63\u786e\u5bc6\u94a5\u7684\u8bf7\u6c42"),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u643a\u5e26\u6b63\u786e\u5bc6\u94a5\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"secret-key"),"\uff09\u7684\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i \"http://127.0.0.1:9080/ip\" -H 'apikey: secret-key'\n")),(0,i.kt)("p",null,"\u4f60\u5c06\u4f1a\u5f97\u5230\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 200 OK"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"HTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 44\nConnection: keep-alive\nDate: Thu, 09 Feb 2023 03:27:57 GMT\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Credentials: true\nServer: APISIX/3.1.0\n")),(0,i.kt)("h3",{id:"\u7981\u7528-authentication"},"\u7981\u7528 Authentication"),(0,i.kt)("p",null,"\u5c06\u53c2\u6570\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"_meta.disable")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5373\u53ef\u7981\u7528\u5bc6\u94a5\u9a8c\u8bc1\u63d2\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n  "plugins": {\n    "key-auth": {\n      "_meta": {\n        "disable": true\n      }\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u53d1\u9001\u4e00\u4e2a\u4e0d\u5e26\u4efb\u4f55\u5bc6\u94a5\u7684\u8bf7\u6c42\u6765\u9a8c\u8bc1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/ip"\n')),(0,i.kt)("p",null,"\u56e0\u4e3a\u4f60\u5df2\u7ecf\u7981\u7528\u4e86\u5bc6\u94a5\u9a8c\u8bc1\u63d2\u4ef6\uff0c\u6240\u4ee5\u4f60\u5c06\u4f1a\u5f97\u5230\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 200 OK"),"\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,i.kt)("p",null,"\u4f60\u5df2\u7ecf\u5b66\u4e60\u4e86\u5982\u4f55\u4e3a\u8def\u7531\u914d\u7f6e\u5bc6\u94a5\u9a8c\u8bc1\u3002\u5728\u4e0b\u4e2a\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u914d\u7f6e\u9650\u901f\u3002"))}c.isMDXComponent=!0}}]);