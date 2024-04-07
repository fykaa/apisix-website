"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29968],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),l=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(f,s(s({ref:n},c),{},{components:t})):i.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68117:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>a});var i=t(87462),r=(t(67294),t(3905));const o={id:"support-fips-in-apisix",title:"Support FIPS in APISIX",keywords:["API Gateway","Apache APISIX","Code Contribution","Building APISIX","OpenSSL 3.0 FIPS"],description:"Compile apisix-runtime with OpenSSL 3.0 (FIPS enabled)"},s=void 0,p={unversionedId:"support-fips-in-apisix",id:"version-3.9/support-fips-in-apisix",isDocsHomePage:!1,title:"Support FIPS in APISIX",description:"Compile apisix-runtime with OpenSSL 3.0 (FIPS enabled)",source:"@site/docs-apisix_versioned_docs/version-3.9/support-fips-in-apisix.md",sourceDirName:".",slug:"/support-fips-in-apisix",permalink:"/docs/apisix/support-fips-in-apisix",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.9/docs/en/latest/support-fips-in-apisix.md",tags:[],version:"3.9",frontMatter:{id:"support-fips-in-apisix",title:"Support FIPS in APISIX",keywords:["API Gateway","Apache APISIX","Code Contribution","Building APISIX","OpenSSL 3.0 FIPS"],description:"Compile apisix-runtime with OpenSSL 3.0 (FIPS enabled)"},sidebar:"version-3.9/docs",previous:{title:"Build development environment on Mac",permalink:"/docs/apisix/build-apisix-dev-environment-on-mac"},next:{title:"External Plugin",permalink:"/docs/apisix/external-plugin"}},a=[{value:"Compilation",id:"compilation",children:[]}],l={toc:a};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenSSL 3.0 ",(0,r.kt)("a",{parentName:"p",href:"https://www.openssl.org/blog/blog/2022/08/24/FIPS-validation-certificate-issued/"},"supports")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FIPS_140-2"},"FIPS")," mode. To support FIPS in APISIX, you can compile apisix-runtime with OpenSSL 3.0."),(0,r.kt)("h2",{id:"compilation"},"Compilation"),(0,r.kt)("p",null,"To compile apisix-runtime with OpenSSL 3.0, run the commands below as root user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd $(mktemp -d)\nOPENSSL3_PREFIX=${OPENSSL3_PREFIX-/usr/local}\napt install -y build-essential\ngit clone https://github.com/openssl/openssl\ncd openssl\n./Configure --prefix=$OPENSSL3_PREFIX/openssl-3.0 enable-fips\nmake install\necho $OPENSSL3_PREFIX/openssl-3.0/lib64 > /etc/ld.so.conf.d/openssl3.conf\nldconfig\n$OPENSSL3_PREFIX/openssl-3.0/bin/openssl fipsinstall -out $OPENSSL3_PREFIX/openssl-3.0/ssl/fipsmodule.cnf -module $OPENSSL3_PREFIX/openssl-3.0/lib64/ossl-modules/fips.so\nsed -i \'s@# .include fipsmodule.cnf@.include \'"$OPENSSL3_PREFIX"\'/openssl-3.0/ssl/fipsmodule.cnf@g; s/# \\(fips = fips_sect\\)/\\1\\nbase = base_sect\\n\\n[base_sect]\\nactivate=1\\n/g\' $OPENSSL3_PREFIX/openssl-3.0/ssl/openssl.cnf\ncd ..\n\nexport cc_opt="-I$OPENSSL3_PREFIX/openssl-3.0/include"\nexport ld_opt="-L$OPENSSL3_PREFIX/openssl-3.0/lib64 -Wl,-rpath,$OPENSSL3_PREFIX/openssl-3.0/lib64"\n\nwget --no-check-certificate https://raw.githubusercontent.com/api7/apisix-build-tools/master/build-apisix-runtime.sh\nchmod +x build-apisix-runtime.sh\n./build-apisix-runtime.sh\n')),(0,r.kt)("p",null,"This will install apisix-runtime to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/openresty"),"."))}c.isMDXComponent=!0}}]);