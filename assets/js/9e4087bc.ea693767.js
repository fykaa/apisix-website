"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3608,2139],{6876:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(7378),n=a(8539),r=a(4142),o=a(1787);function s(e){let{year:t,posts:a}=e;return l.createElement(l.Fragment,null,l.createElement("h3",null,t),l.createElement("ul",null,a.map((e=>l.createElement("li",{key:e.metadata.date},l.createElement(r.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function c(e){let{years:t}=e;return l.createElement("section",{className:"margin-vert--lg"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},t.map(((e,t)=>l.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},l.createElement(s,e)))))))}function i(e){let{archive:t}=e;const a=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],l=e.get(a)||[];return e.set(a,[t,...l])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return l.createElement(n.Z,{title:a,description:r},l.createElement("header",{className:"hero hero--primary"},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},a),l.createElement("p",{className:"hero__subtitle"},r))),l.createElement("main",null,s.length>0&&l.createElement(c,{years:s})))}},4058:(e,t,a)=>{a.d(t,{Z:()=>S});var l=a(5773),n=a(7378),r=a(4142),o=a(8948),s=a(8374),c=a(5423),i=a(5519),m=a(7645),h=a(9861);const u={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"};var p=a(353),g=a(4338),d=a(4146);const f=JSON.parse('{"$schema":"./event-poster-card-schema.json","show":true,"expire":"2023-07-04","width":400,"config":{"en":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"},"zh":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"}}}'),b="picWrapper_K7bz",w="closeBtn_QOpn",E="SHOW_EVENT_ENTRY",v=e=>{const{config:t,width:a}=e,{i18n:{currentLocale:l}}=(0,p.Z)(),r=(0,n.useMemo)((()=>t[l]),[l]),[,o]=(0,d.Z)(E,!0),[s,c]=(0,g.useSpring)((()=>({from:{x:500,opacity:0}})));(0,n.useEffect)((()=>{c.start({to:{x:0,opacity:1},delay:800})}),[]);const i=(0,n.useCallback)((async()=>Promise.all(c.start({to:{x:500,opacity:0}})).then((()=>o(!1)))),[c]);return!0===(null==r?void 0:r.disable)?null:n.createElement(g.animated.div,{className:b,style:s},n.createElement("button",{className:w,onClick:i,type:"button"},n.createElement("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},n.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),n.createElement("a",{href:r.link,onClick:i,target:"_blank",rel:"noreferrer"},n.createElement(h.LazyLoadImage,{src:r.image,alt:r.description,width:a,style:{maxWidth:"100vw"}})))},k=()=>{const[e]=(0,d.Z)(E,!0),{show:t,expire:a,...l}=f,r=new Date(a).getTime();return t&&e&&r>Date.now()?n.createElement(v,l):null},y={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:i.Z,label:"Slack",to:"/docs/general/join"},{icon:"ri:twitter-x-fill",label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:m.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"},{label:"Roadmap",to:"https://github.com/apache/apisix/milestones",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},C=e=>{let{to:t,icon:a,href:c,label:i,prependBaseUrlToHref:m,...h}=e;const u=(0,o.Z)(t),p=(0,o.Z)(c,{forcePrependBaseUrl:!0}),g=c?{href:m?p:c}:{to:u};return n.createElement(r.Z,(0,l.Z)({},g,h),n.createElement(s.JO,{icon:a}),n.createElement("span",null,i))},S=()=>{const{copyright:e,links:t,logo:a}=y;return y?n.createElement("footer",{className:u.container},t&&t.length>0&&n.createElement("div",{className:u.linksRow},t.map((e=>{let{title:t,items:a}=e;return n.createElement("div",{key:t,className:u.linksCol},n.createElement("div",null,t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.to,className:"footer__item"},n.createElement(C,e))))))}))),n.createElement("div",{className:u.copyright},n.createElement(r.Z,{href:a.href},n.createElement(h.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),n.createElement("div",{className:u.text},e)),n.createElement(k,null)):null}},4867:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(5773),n=a(7378),r=a(3727),o=a(6281),s=a(353),c=a(5013),i=a(9635),m=a(4142);const h="iconLanguage_zID8",u="localizedBlogLink_cE-3",p=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:p,...g}=e,{i18n:{currentLocale:d,locales:f,localeConfigs:b}}=(0,s.Z)(),w=(0,c.l5)(),{pathname:E}=(0,i.TH)();if(E.startsWith("/zh/blog"))return n.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(E.startsWith("/blog"))return n.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function v(e){return b[e].label}const k=[...a,...f.map((e=>{const t="pathname://"+w.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...p],y=t?"Languages":v(d);return n.createElement(r.Z,(0,l.Z)({},g,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(o.Z,{className:h}),n.createElement("span",null,y)),items:k}))}},5403:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(5773),n=a(7378),r=a(1542),o=a(353),s=a(8948),c=a(4142),i=a(5361),m=a(9033),h=a(9495),u=a(2492),p=a(7489),g=a(1787);const d="searchBox_fBfG";let f=null;function b(e){let{hit:t,children:a}=e;return n.createElement("a",{href:t.url,target:"_parent"},a)}function w(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:l}=(0,m.Z)();return n.createElement(c.Z,{to:l(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function E(e){var t,c;let{contextualSearch:m,...E}=e;const{siteMetadata:v}=(0,o.Z)(),k=(0,p.Z)(),y=null!=(t=null==(c=E.searchParameters)?void 0:c.facetFilters)?t:[],C=m?[...k,...y]:y,S={...E.searchParameters,facetFilters:C},{withBaseUrl:_}=(0,s.C)(),A=(0,n.useRef)(null),Z=(0,n.useRef)(null),[I,N]=(0,n.useState)(!1),[P,x]=(0,n.useState)(null),L=(0,n.useCallback)((()=>f?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,6295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,9127)),Promise.all([a.e(532),a.e(160)]).then(a.bind(a,160))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),B=(0,n.useCallback)((()=>{L().then((()=>{A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),N(!0)}))}),[L,N]),T=(0,n.useCallback)((()=>{N(!1),A.current.remove()}),[N]),R=(0,n.useCallback)((e=>{L().then((()=>{N(!0),x(e.key)}))}),[L,N,x]),F=(0,n.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,M=(0,n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:_(""+t.pathname+t.hash)}})))).current,z=(0,n.useMemo)((()=>e=>n.createElement(w,(0,l.Z)({},e,{onClose:T}))),[T]),X=(0,n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e)),[v.docusaurusVersion]);(0,h.D)({isOpen:I,onOpen:B,onClose:T,onInput:R,searchButtonRef:Z});const O=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return n.createElement(n.Fragment,null,n.createElement(i.Z,null,n.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),n.createElement("div",{className:d},n.createElement(u.a,{onTouchStart:L,onFocus:L,onMouseOver:L,onClick:B,ref:Z,translations:{buttonText:O,buttonAriaLabel:O}})),I&&(0,r.createPortal)(n.createElement(f,(0,l.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:P,navigator:F,transformItems:M,hitComponent:b,resultsFooterComponent:z,transformSearchClient:X},E,{searchParameters:S})),A.current))}const v=function(){const{siteConfig:e}=(0,o.Z)();return n.createElement(E,e.themeConfig.algolia)}}}]);