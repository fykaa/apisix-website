"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30430],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),d=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return t?a.createElement(h,i(i({ref:r},s),{},{components:t})):a.createElement(h,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},74812:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const n={title:"Build an image from the source codes"},i=void 0,l={unversionedId:"build",id:"build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.",source:"@site/docs/apisix-docker/build.md",sourceDirName:".",slug:"/build",permalink:"/docs/docker/next/build",editUrl:"/edit#https://github.com/apache/apisix-docker/edit/master/docs/en/latest/build.md",tags:[],version:"current",frontMatter:{title:"Build an image from the source codes"},sidebar:"docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/next/manual"}},c=[{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Build a Docker image",id:"build-a-docker-image",children:[{value:"Build an image from a release",id:"build-an-image-from-a-release",children:[]},{value:"Build an image from master branch",id:"build-an-image-from-master-branch",children:[]},{value:"Build an image from locally customized/patched source code",id:"build-an-image-from-locally-customizedpatched-source-code",children:[]}]},{value:"Check Docker image",id:"check-docker-image",children:[]}],d={toc:c};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),(0,o.kt)("h2",{id:"clone-the-repository"},"Clone the repository"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker"},"apisix-docker")," repository and navigate into the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/apisix-docker.git\ncd apisix-docker\n")),(0,o.kt)("h2",{id:"build-a-docker-image"},"Build a Docker image"),(0,o.kt)("p",null,"Choose one of the following approaches to build a Docker image based on your requirements."),(0,o.kt)("h3",{id:"build-an-image-from-a-release"},"Build an image from a release"),(0,o.kt)("p",null,"Find an APISIX ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases"},"release version")," to build an image of."),(0,o.kt)("p",null,"Build a Docker image from the release:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_VERSION=3.9.0    # specify release version\nDISTRO=debian           # debian, redhat\nmake build-on-$DISTRO\n")),(0,o.kt)("h3",{id:"build-an-image-from-master-branch"},"Build an image from master branch"),(0,o.kt)("p",null,"This is provided for developer's convenience."),(0,o.kt)("p",null,"Build a Docker image from the master branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_VERSION=master   # master branch\nDISTRO=debian           # debian, redhat\nmake build-on-$DISTRO\n")),(0,o.kt)("h3",{id:"build-an-image-from-locally-customizedpatched-source-code"},"Build an image from locally customized/patched source code"),(0,o.kt)("p",null,"Build a Docker image from locally customized/patched source code with this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker/blob/master/debian-dev/Dockerfile.local"},"Dockerfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t apisix-dev-local -f /path/to/debian-dev/Dockerfile.local  .\n")),(0,o.kt)("h2",{id:"check-docker-image"},"Check Docker image"),(0,o.kt)("p",null,"Check the built Docker images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker images\n")),(0,o.kt)("p",null,"If the image was built successfully, you should see the image listed, similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"REPOSITORY        TAG            IMAGE ID       CREATED              SIZE\napache/apisix     3.5.0-debian   5c3b6ffdef06   About a minute ago   337MB\n")))}s.isMDXComponent=!0}}]);