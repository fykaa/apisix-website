"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[45650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66993:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Install Ingress APISIX on Google Cloud GKE"},i=void 0,o={unversionedId:"deployments/gke",id:"version-0.4.0/deployments/gke",isDocsHomePage:!1,title:"Install Ingress APISIX on Google Cloud GKE",description:"This document explains how to install Ingress APISIX on Google Cloud GKE.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-0.4.0/deployments/gke.md",sourceDirName:"deployments",slug:"/deployments/gke",permalink:"/docs/ingress-controller/0.4.0/deployments/gke",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v0.4.0/docs/en/latest/deployments/gke.md",tags:[],version:"0.4.0",frontMatter:{title:"Install Ingress APISIX on Google Cloud GKE"},sidebar:"version-0.4.0/docs",previous:{title:"Install Ingress APISIX on Azure AKS",permalink:"/docs/ingress-controller/0.4.0/deployments/azure"},next:{title:"Install Ingress APISIX on K3S and Rancher RKE",permalink:"/docs/ingress-controller/0.4.0/deployments/k3s-rke"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine"},"Google Cloud GKE"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an Kubernetes Service on GKE."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk"},"Google Cloud SDK")," and get the credentials or you can just use the ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/shell"},"Cloud Shell"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,a.kt)("li",{parentName:"ul"},"Clone ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,a.kt)("h2",{id:"install-apisix"},"Install APISIX"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm dependency update ./charts/apisix\nhelm install apisix ./charts/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),(0,a.kt)("p",null,"Two Service resources were created, one is ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,a.kt)("p",null,"The gateway service type is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", so that clients can access Apache APISIX through the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/service#services_of_type_loadbalancer"},"GKE Load Balancer")," . You can find the load balancer IP by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,a.kt)("p",null,"Another thing should be concerned that the ",(0,a.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr"},"Pod CIRD configuration of GKE"),", so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),(0,a.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,a.kt)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller ./charts/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix\n")),(0,a.kt)("p",null,"Change the ",(0,a.kt)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to wait for while until the corresponding pods are running."),(0,a.kt)("p",null,"Now try to create some ",(0,a.kt)("a",{parentName:"p",href:"../CRD-specification.md"},"resources")," to verify the running status. As a minimalist example, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/0.4.0/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}p.isMDXComponent=!0}}]);