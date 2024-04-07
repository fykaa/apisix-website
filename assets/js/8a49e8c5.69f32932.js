"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[26809],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(n),g=a,m=h["".concat(c,".").concat(g)]||h[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(25773),a=(n(27378),n(35318));const i={title:"HashiCorp Vault Secure Storage Backend in Apache APISIX Ecosystem",authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","HashiCorp","Vault","jwt-auth","authentication"],description:"This article describe the upcoming release of the Vault with Apache APISIX integration, and show the details of configuration.",tags:["Authentication","Ecosystem","Plugins"],image:"https://static.apiseven.com/2022/blog/0818/plugins/vault.png"},o=void 0,l={permalink:"/blog/2022/01/21/apisix-hashicorp-vault-integration",source:"@site/blog/2022/01/21/apisix-hashicorp-vault-integration.md",title:"HashiCorp Vault Secure Storage Backend in Apache APISIX Ecosystem",description:"This article describe the upcoming release of the Vault with Apache APISIX integration, and show the details of configuration.",date:"2022-01-21T00:00:00.000Z",formattedDate:"January 21, 2022",tags:[{label:"Authentication",permalink:"/blog/tags/authentication"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:12.245,truncated:!0,authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"Webinar | APISIX in QingCloud! ",permalink:"/blog/2022/01/24/apisix-with-qingcloud-meetup"},nextItem:{title:"Get More Details About xRPC",permalink:"/blog/2022/01/21/apisix-xrpc-details-and-miltilingual"}},c={authorsImageUrls:[void 0,void 0]},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article describe the upcoming release of the Vault with Apache APISIX integration, and show the details of configuration.")))}p.isMDXComponent=!0}}]);