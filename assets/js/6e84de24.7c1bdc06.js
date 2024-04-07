"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6361:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Kubernetes",keywords:["Kubernetes","Apache APISIX","Service discovery","Cluster","API Gateway"],description:"This article introduce how to perform service discovery based on Kubernetes in Apache APISIX and summarize related issues."},o=void 0,i={unversionedId:"discovery/kubernetes",id:"version-3.8/discovery/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"This article introduce how to perform service discovery based on Kubernetes in Apache APISIX and summarize related issues.",source:"@site/docs-apisix_versioned_docs/version-3.8/discovery/kubernetes.md",sourceDirName:"discovery",slug:"/discovery/kubernetes",permalink:"/docs/apisix/3.8/discovery/kubernetes",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.8/docs/en/latest/discovery/kubernetes.md",tags:[],version:"3.8",frontMatter:{title:"Kubernetes",keywords:["Kubernetes","Apache APISIX","Service discovery","Cluster","API Gateway"],description:"This article introduce how to perform service discovery based on Kubernetes in Apache APISIX and summarize related issues."},sidebar:"version-3.8/docs",previous:{title:"Control Plane Service Discovery",permalink:"/docs/apisix/3.8/discovery/control-plane-service-discovery"},next:{title:"PubSub",permalink:"/docs/apisix/3.8/pubsub"}},l=[{value:"Summary",id:"summary",children:[]},{value:"How To Use",id:"how-to-use",children:[{value:"Single-Cluster Mode Configuration",id:"single-cluster-mode-configuration",children:[]},{value:"Single-Cluster Mode Query Interface",id:"single-cluster-mode-query-interface",children:[]},{value:"Multi-Cluster Mode Configuration",id:"multi-cluster-mode-configuration",children:[]},{value:"Multi-Cluster Mode Query Interface",id:"multi-cluster-mode-query-interface",children:[]}]},{value:"Q&amp;A",id:"qa",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},(0,a.kt)("em",{parentName:"a"},"Kubernetes"))," service discovery ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/"},(0,a.kt)("em",{parentName:"a"},"List-Watch"))," real-time changes of ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},(0,a.kt)("em",{parentName:"a"},"Endpoints"))," resources, then store theirs value into ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT"),"."),(0,a.kt)("p",null,"Discovery also provides a node query interface in accordance with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.8/discovery"},(0,a.kt)("em",{parentName:"a"},"APISIX Discovery Specification")),"."),(0,a.kt)("h2",{id:"how-to-use"},"How To Use"),(0,a.kt)("p",null,"Kubernetes service discovery both support single-cluster and multi-cluster modes, applicable to the case where the service is distributed in single or multiple Kubernetes clusters."),(0,a.kt)("h3",{id:"single-cluster-mode-configuration"},"Single-Cluster Mode Configuration"),(0,a.kt)("p",null,"A detailed configuration for single-cluster mode Kubernetes service discovery is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  kubernetes:\n    service:\n      # apiserver schema, options [http, https]\n      schema: https #default https\n\n      # apiserver host, options [ipv4, ipv6, domain, environment variable]\n      host: ${KUBERNETES_SERVICE_HOST} #default ${KUBERNETES_SERVICE_HOST}\n\n      # apiserver port, options [port number, environment variable]\n      port: ${KUBERNETES_SERVICE_PORT}  #default ${KUBERNETES_SERVICE_PORT}\n\n    client:\n      # serviceaccount token or token_file\n      token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n\n      #token: |-\n       # eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEif\n       # 6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEifeyJhbGciOiJSUzI1NiIsImtpZCI\n\n    default_weight: 50 # weight assigned to each discovered endpoint. default 50, minimum 0\n\n    # kubernetes discovery support namespace_selector\n    # you can use one of [equal, not_equal, match, not_match] filter namespace\n    namespace_selector:\n      # only save endpoints with namespace equal default\n      equal: default\n\n      # only save endpoints with namespace not equal default\n      #not_equal: default\n\n      # only save endpoints with namespace match one of [default, ^my-[a-z]+$]\n      #match:\n       #- default\n       #- ^my-[a-z]+$\n\n      # only save endpoints with namespace not match one of [default, ^my-[a-z]+$ ]\n      #not_match:\n       #- default\n       #- ^my-[a-z]+$\n\n    # kubernetes discovery support label_selector\n    # for the expression of label_selector, please refer to https://kubernetes.io/docs/concepts/overview/working-with-objects/labels\n    label_selector: |-\n      first="a",second="b"\n\n    # reserved lua shared memory size,1m memory can store about 1000 pieces of endpoint\n    shared_size: 1m #default 1m\n')),(0,a.kt)("p",null,"If the Kubernetes service discovery runs inside a pod, you can use minimal configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes: { }\n")),(0,a.kt)("p",null,"If the Kubernetes service discovery runs outside a pod, you need to create or select a specified ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,a.kt)("em",{parentName:"a"},"ServiceAccount")),", then get its token value, and use following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes:\n    service:\n      schema: https\n      host: # enter apiserver host value here\n      port: # enter apiserver port value here\n    client:\n      token: # enter serviceaccount token value here\n      #token_file: # enter file path here\n")),(0,a.kt)("h3",{id:"single-cluster-mode-query-interface"},"Single-Cluster Mode Query Interface"),(0,a.kt)("p",null,"The Kubernetes service discovery provides a query interface in accordance with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.8/discovery"},(0,a.kt)("em",{parentName:"a"},"APISIX Discovery Specification")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"function:"),"\nnodes(service_name)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"description:"),"\nnodes() function attempts to look up the ngx.shared.DICT for nodes corresponding to service",(0,a.kt)("em",{parentName:"p"},"name, \\\nservice_name should match pattern: "),"[namespace]","/","[name]",":","[portName]","_"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"namespace: The namespace where the Kubernetes endpoints is located")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"name: The name of the Kubernetes endpoints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"portName: The ",(0,a.kt)("inlineCode",{parentName:"p"},"ports.name")," value in the Kubernetes endpoints, if there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"ports.name"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"targetPort"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," instead. If ",(0,a.kt)("inlineCode",{parentName:"p"},"ports.name")," exists, then port number cannot be used."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"return value:"),"\nif the Kubernetes endpoints value is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: plat-dev\n  namespace: default\nsubsets:\n  - addresses:\n      - ip: "10.5.10.109"\n      - ip: "10.5.10.110"\n    ports:\n      - port: 3306\n        name: port\n')),(0,a.kt)("p",null,'  a nodes("default/plat-dev:port") call will get follow result:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' {\n     {\n         host="10.5.10.109",\n         port= 3306,\n         weight= 50,\n     },\n     {\n         host="10.5.10.110",\n         port= 3306,\n         weight= 50,\n     },\n }\n')),(0,a.kt)("h3",{id:"multi-cluster-mode-configuration"},"Multi-Cluster Mode Configuration"),(0,a.kt)("p",null,"A detailed configuration for multi-cluster mode Kubernetes service discovery is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  kubernetes:\n  - id: release  # a custom name refer to the cluster, pattern ^[a-z0-9]{1,8}\n    service:\n      # apiserver schema, options [http, https]\n      schema: https #default https\n\n      # apiserver host, options [ipv4, ipv6, domain, environment variable]\n      host: "1.cluster.com"\n\n      # apiserver port, options [port number, environment variable]\n      port: "6443"\n\n    client:\n      # serviceaccount token or token_file\n      token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n\n      #token: |-\n       # eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEif\n       # 6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEifeyJhbGciOiJSUzI1NiIsImtpZCI\n\n    default_weight: 50 # weight assigned to each discovered endpoint. default 50, minimum 0\n\n    # kubernetes discovery support namespace_selector\n    # you can use one of [equal, not_equal, match, not_match] filter namespace\n    namespace_selector:\n      # only save endpoints with namespace equal default\n      equal: default\n\n      # only save endpoints with namespace not equal default\n      #not_equal: default\n\n      # only save endpoints with namespace match one of [default, ^my-[a-z]+$]\n      #match:\n       #- default\n       #- ^my-[a-z]+$\n\n      # only save endpoints with namespace not match one of [default, ^my-[a-z]+$]\n      #not_match:\n       #- default\n       #- ^my-[a-z]+$\n\n    # kubernetes discovery support label_selector\n    # for the expression of label_selector, please refer to https://kubernetes.io/docs/concepts/overview/working-with-objects/labels\n    label_selector: |-\n      first="a",second="b"\n\n    # reserved lua shared memory size,1m memory can store about 1000 pieces of endpoint\n    shared_size: 1m #default 1m\n')),(0,a.kt)("p",null,"Multi-Kubernetes service discovery does not fill default values for service and client fields, you need to fill them according to the cluster configuration."),(0,a.kt)("h3",{id:"multi-cluster-mode-query-interface"},"Multi-Cluster Mode Query Interface"),(0,a.kt)("p",null,"The Kubernetes service discovery provides a query interface in accordance with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/3.8/discovery"},(0,a.kt)("em",{parentName:"a"},"APISIX Discovery Specification")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"function:"),"\nnodes(service_name)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"description:"),"\nnodes() function attempts to look up the ngx.shared.DICT for nodes corresponding to service",(0,a.kt)("em",{parentName:"p"},"name, \\\nservice_name should match pattern: "),"[id]","/","[namespace]","/","[name]",":","[portName]","_"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"id: value defined in service discovery configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"namespace: The namespace where the Kubernetes endpoints is located")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"name: The name of the Kubernetes endpoints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"portName: The ",(0,a.kt)("inlineCode",{parentName:"p"},"ports.name")," value in the Kubernetes endpoints, if there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"ports.name"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"targetPort"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," instead. If ",(0,a.kt)("inlineCode",{parentName:"p"},"ports.name")," exists, then port number cannot be used."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"return value:"),"\nif the Kubernetes endpoints value is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: plat-dev\n  namespace: default\nsubsets:\n  - addresses:\n      - ip: "10.5.10.109"\n      - ip: "10.5.10.110"\n    ports:\n      - port: 3306\n        name: port\n')),(0,a.kt)("p",null,'a nodes("release/default/plat-dev:port") call will get follow result:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' {\n     {\n         host="10.5.10.109",\n         port= 3306,\n         weight= 50,\n     },\n     {\n         host="10.5.10.110",\n         port= 3306,\n         weight= 50,\n     },\n }\n')),(0,a.kt)("h2",{id:"qa"},"Q&A"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: Why only support configuration token to access ",(0,a.kt)("em",{parentName:"strong"},"Kubernetes APIServer"),"?")),(0,a.kt)("p",null,"A: Usually, we will use three ways to complete the authentication of ",(0,a.kt)("em",{parentName:"p"},"Kubernetes APIServer"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mTLS"),(0,a.kt)("li",{parentName:"ul"},"Token"),(0,a.kt)("li",{parentName:"ul"},"Basic authentication")),(0,a.kt)("p",null,"Because lua-resty-http does not currently support mTLS, and basic authentication is not recommended, so currently only the token authentication method is implemented."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: APISIX inherits Nginx's multiple process model, does it mean that each nginx worker process will ",(0,a.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/"},(0,a.kt)("em",{parentName:"a"},"List-Watch"))," kubernetes endpoints resources?")),(0,a.kt)("p",null,"A: The Kubernetes service discovery only uses privileged processes to ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/"},(0,a.kt)("em",{parentName:"a"},"List-Watch"))," Kubernetes endpoints resources, then store theirs value into ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT"),", worker processes get results by querying ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: What permissions do ",(0,a.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,a.kt)("em",{parentName:"a"},"ServiceAccount"))," require?")),(0,a.kt)("p",null,"A: ServiceAccount requires the permissions of cluster-level ","[ get, list, watch ]"," endpoints resources, the declarative definition is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n name: apisix-test\n namespace: default\n---\n\nkind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n name: apisix-test\nrules:\n- apiGroups: [ "" ]\n  resources: [ endpoints ]\n  verbs: [ get,list,watch ]\n---\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n name: apisix-test\nroleRef:\n apiGroup: rbac.authorization.k8s.io\n kind: ClusterRole\n name: apisix-test\nsubjects:\n - kind: ServiceAccount\n   name: apisix-test\n   namespace: default\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q: How to get ",(0,a.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,a.kt)("em",{parentName:"a"},"ServiceAccount"))," token value?")),(0,a.kt)("p",null,"A: Assume your ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,a.kt)("em",{parentName:"a"},"ServiceAccount"))," located in namespace apisix and name is Kubernetes-discovery, you can use the following steps to get token value."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get secret name. You can execute the following command, the output of the first column is the secret name we want:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secrets | grep kubernetes-discovery\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get token value. Assume secret resources name is kubernetes-discovery-token-c64cv, you can execute the following command, the output is the service account token value we want:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secret kubernetes-discovery-token-c64cv -o jsonpath={.data.token} | base64 -d\n")))))}p.isMDXComponent=!0}}]);