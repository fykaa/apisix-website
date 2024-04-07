"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29521],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),l=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,S=d["".concat(a,".").concat(f)]||d[f]||u[f]||s;return t?i.createElement(S,p(p({ref:n},c),{},{components:t})):i.createElement(S,p({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=d;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<s;l++)p[l]=t[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6930:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(87462),r=(t(67294),t(3905));const s={id:"support-fips-in-apisix",title:"\u901a\u8fc7 OpenSSL 3.0 \u4f7f APISIX \u652f\u6301 FIPS \u6a21\u5f0f",keywords:["API \u7f51\u5173","Apache APISIX","\u8d21\u732e\u4ee3\u7801","\u6784\u5efa APISIX","OpenSSL 3.0 FIPS"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 OpenSSL 3.0 \u6765\u7f16\u8bd1 apisix-runtime\uff0c\u5373\u53ef\u542f\u7528 FIPS \u6a21\u5f0f\u3002"},p=void 0,o={unversionedId:"support-fips-in-apisix",id:"version-3.8/support-fips-in-apisix",isDocsHomePage:!1,title:"\u901a\u8fc7 OpenSSL 3.0 \u4f7f APISIX \u652f\u6301 FIPS \u6a21\u5f0f",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 OpenSSL 3.0 \u6765\u7f16\u8bd1 apisix-runtime\uff0c\u5373\u53ef\u542f\u7528 FIPS \u6a21\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/support-fips-in-apisix.md",sourceDirName:".",slug:"/support-fips-in-apisix",permalink:"/zh/docs/apisix/3.8/support-fips-in-apisix",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/support-fips-in-apisix.md",tags:[],version:"3.8",frontMatter:{id:"support-fips-in-apisix",title:"\u901a\u8fc7 OpenSSL 3.0 \u4f7f APISIX \u652f\u6301 FIPS \u6a21\u5f0f",keywords:["API \u7f51\u5173","Apache APISIX","\u8d21\u732e\u4ee3\u7801","\u6784\u5efa APISIX","OpenSSL 3.0 FIPS"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u4f7f\u7528 OpenSSL 3.0 \u6765\u7f16\u8bd1 apisix-runtime\uff0c\u5373\u53ef\u542f\u7528 FIPS \u6a21\u5f0f\u3002"},sidebar:"version-3.8/docs",previous:{title:"\u6e90\u7801\u5b89\u88c5 APISIX",permalink:"/zh/docs/apisix/3.8/building-apisix"},next:{title:"External Plugin",permalink:"/zh/docs/apisix/3.8/external-plugin"}},a=[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]}],l={toc:a};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76ee\u524d\uff0cOpenSSL 3.0 ",(0,r.kt)("a",{parentName:"p",href:"https://www.openssl.org/blog/blog/2022/08/24/FIPS-validation-certificate-issued/"},"\u652f\u6301\u4e86")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FIPS_140-2"},"FIPS")," \u6a21\u5f0f\u3002\u4e3a\u4e86\u5728 APISIX \u4e2d\u652f\u6301 FIPS \u6a21\u5f0f\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 OpenSSL 3.0 \u6765\u7f16\u8bd1 apisix-runtime\u3002"),(0,r.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 OpenSSL 3.0 \u6765\u7f16\u8bd1 apisix-runtime\uff0c\u8bf7\u4ee5 root \u7528\u6237\u89d2\u8272\u6765\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd $(mktemp -d)\nOPENSSL3_PREFIX=${OPENSSL3_PREFIX-/usr/local}\napt install -y build-essential\ngit clone https://github.com/openssl/openssl\ncd openssl\n./Configure --prefix=$OPENSSL3_PREFIX/openssl-3.0 enable-fips\nmake install\necho $OPENSSL3_PREFIX/openssl-3.0/lib64 > /etc/ld.so.conf.d/openssl3.conf\nldconfig\n$OPENSSL3_PREFIX/openssl-3.0/bin/openssl fipsinstall -out $OPENSSL3_PREFIX/openssl-3.0/ssl/fipsmodule.cnf -module $OPENSSL3_PREFIX/openssl-3.0/lib64/ossl-modules/fips.so\nsed -i \'s@# .include fipsmodule.cnf@.include \'"$OPENSSL3_PREFIX"\'/openssl-3.0/ssl/fipsmodule.cnf@g; s/# \\(fips = fips_sect\\)/\\1\\nbase = base_sect\\n\\n[base_sect]\\nactivate=1\\n/g\' $OPENSSL3_PREFIX/openssl-3.0/ssl/openssl.cnf\ncd ..\n\nexport cc_opt="-I$OPENSSL3_PREFIX/openssl-3.0/include"\nexport ld_opt="-L$OPENSSL3_PREFIX/openssl-3.0/lib64 -Wl,-rpath,$OPENSSL3_PREFIX/openssl-3.0/lib64"\n\nwget --no-check-certificate https://raw.githubusercontent.com/api7/apisix-build-tools/master/build-apisix-runtime.sh\nchmod +x build-apisix-runtime.sh\n./build-apisix-runtime.sh\n')),(0,r.kt)("p",null,"apisix-runtime \u5c06\u5b89\u88c5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/openresty"),"\u3002"))}c.isMDXComponent=!0}}]);