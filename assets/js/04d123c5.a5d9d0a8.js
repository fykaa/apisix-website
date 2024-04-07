"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[68805],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(25773),i=(n(27378),n(35318));const l={title:"Secure your API with these 16 Practices with Apache APISIX - part 1",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["APISIX","Security","Good practices"],description:"A couple of months ago, I stumbled upon this list of  Secure your API with these 16 practices to secure your API. Authentication. Authorization. Data Redaction. Encryption. Error Handling. Input Validation & Data Sanitization. Intrusion Detection Systems. IP Whitelisting. Logging and Monitoring. Rate Limiting. Secure Dependencies. Security Headers. Token Expiry. Use of Security Standards and Frameworks. Web Application Firewall. API Versioning\n",tags:["Ecosystem"],image:"https://static.apiseven.com/uploads/2024/02/15/kgIjhRXf_img-BuLDzx81CexYQAzkaF36h_large.webp"},r=void 0,o={permalink:"/blog/2024/02/20/secure-api-practices-apisix-1",source:"@site/blog/2024/02/20/secure-api-practices-apisix-1.md",title:"Secure your API with these 16 Practices with Apache APISIX - part 1",description:"A couple of months ago, I stumbled upon this list of  Secure your API with these 16 practices to secure your API. Authentication. Authorization. Data Redaction. Encryption. Error Handling. Input Validation & Data Sanitization. Intrusion Detection Systems. IP Whitelisting. Logging and Monitoring. Rate Limiting. Secure Dependencies. Security Headers. Token Expiry. Use of Security Standards and Frameworks. Web Application Firewall. API Versioning\n",date:"2024-02-20T00:00:00.000Z",formattedDate:"February 20, 2024",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.05,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"Secure your API with these 16 Practices with Apache APISIX - part 2",permalink:"/blog/2024/02/27/secure-api-practices-apisix-2"},nextItem:{title:"Hardening Apache APISIX with the OWASP's Coraza and Core Ruleset",permalink:"/blog/2024/02/13/apisix-owasp-coraza-core-ruleset"}},s={authorsImageUrls:[void 0]},u=[{value:"Authentication",id:"authentication",children:[],level:2},{value:"Authorization",id:"authorization",children:[],level:2},{value:"Input validation",id:"input-validation",children:[],level:2},{value:"IP Whitelisting",id:"ip-whitelisting",children:[],level:2},{value:"Logging and Monitoring",id:"logging-and-monitoring",children:[],level:2},{value:"Rate Limiting",id:"rate-limiting",children:[],level:2},{value:"Security Headers",id:"security-headers",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://blog.frankel.ch/secure-api-practices-apisix/1/"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A couple of months ago, I stumbled upon this list of  Secure your API with these ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/posts/brijpandeyji_secure-your-api-with-these-16-practices-activity-7094020647529369601-5kzQ/"},"16 practices to secure your API"),":"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Authentication \ud83d\udd75\ufe0f\ufe0f - Verifies the identity of users accessing APIs."),(0,i.kt)("li",{parentName:"ol"},"Authorization \ud83d\udea6 - Determines permissions of authenticated users."),(0,i.kt)("li",{parentName:"ol"},"Data Redaction \ud83d\udd8d\ufe0f - Obscures sensitive data for protection."),(0,i.kt)("li",{parentName:"ol"},"Encryption \ud83d\udd12 - Encodes data so only authorized parties can decode it."),(0,i.kt)("li",{parentName:"ol"},"Error Handling \u274c - Manages responses when things go wrong, avoiding revealing sensitive info."),(0,i.kt)("li",{parentName:"ol"},"Input Validation & Data Sanitization \ud83e\uddf9 - Checks input data and removes harmful parts."),(0,i.kt)("li",{parentName:"ol"},"Intrusion Detection Systems \ud83d\udc40 - Monitor networks for suspicious activities."),(0,i.kt)("li",{parentName:"ol"},"IP Whitelisting \ud83d\udcdd - Permits API access only from trusted IP addresses."),(0,i.kt)("li",{parentName:"ol"},"Logging and Monitoring \ud83d\udda5\ufe0f - Keeps detailed logs and regularly monitors APIs."),(0,i.kt)("li",{parentName:"ol"},"Rate Limiting \u23f1\ufe0f - Limits user requests to prevent overload."),(0,i.kt)("li",{parentName:"ol"},"Secure Dependencies \ud83d\udce6 - Ensures third-party code is free from vulnerabilities."),(0,i.kt)("li",{parentName:"ol"},"Security Headers \ud83d\udccb - Enhances site security against types of attacks like XSS."),(0,i.kt)("li",{parentName:"ol"},"Token Expiry \u23f3 - Regularly expiring and renewing tokens prevents unauthorized access."),(0,i.kt)("li",{parentName:"ol"},"Use of Security Standards and Frameworks \ud83d\udcd8 - Guides your API security strategy."),(0,i.kt)("li",{parentName:"ol"},"Web Application Firewall \ud83d\udd25 - Protects your site from HTTP-specific attacks."),(0,i.kt)("li",{parentName:"ol"},"API Versioning \ud83d\udd04 - Maintains different versions of your API for seamless updates.")),(0,i.kt)("p",{parentName:"blockquote"},"While it's debatable whether some points relate to security, ",(0,i.kt)("em",{parentName:"p"},"e.g.,"),", versioning, the list is a good starting point anyway. In this two-post series, I'd like to describe how we can implement each point with Apache APISXI (or not).")),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Authentication is about identifying yourself with a system. It requires a proof."),(0,i.kt)("p",null,"Apache APISIX provides two kinds of authentications: internal, with APISIX checking credentials, and external, when delegated to a third party. All authentication mechanisms work via plugins. Here's the current list of available authentication plugins."),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"3"},"Internal"),(0,i.kt)("td",null,(0,i.kt)("code",null,"key-auth")),(0,i.kt)("td",null,"Authenticate via an HTTP Header")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"basic-auth")),(0,i.kt)("td",null,"Relies on a browser callback")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"jwt-auth")),(0,i.kt)("td",null,"Uses a JWT token to authenticate")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"10"},"External"),(0,i.kt)("td",null,(0,i.kt)("code",null,"authz-keycloak")),(0,i.kt)("td",null,"Delegates to ",(0,i.kt)("a",{href:"https://www.keycloak.org/"},"Keycloak"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"authz-casdoor")),(0,i.kt)("td",null,"Delegates to ",(0,i.kt)("a",{href:"https://casdoor.org/"},"Casdoor"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"wolf-rbac")),(0,i.kt)("td",null,"Delegates to ",(0,i.kt)("a",{href:"https://github.com/iGeeky/wolf"},"wolf"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"openid-connect")),(0,i.kt)("td",null,"Delegates to an ",(0,i.kt)("a",{href:"https://openid.net/connect/"},"OpenID Connect"),"-compliant third-party")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"cas-auth")),(0,i.kt)("td",null,"Delegates to a ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Central_Authentication_Service"},"CAS"),"-compliant third-party")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"hmac-auth")),(0,i.kt)("td",null,"Delegates to an ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/HMAC"},"HMAC"),"-compliant third-party")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"authz-casbin")),(0,i.kt)("td",null,"Delegates to a ",(0,i.kt)("a",{href:"https://github.com/casbin/lua-casbin/"},"Lua Casbin"),"-compliant third-party")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"ldap-auth")),(0,i.kt)("td",null,"Delegates to an LDAP")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"opa")),(0,i.kt)("td",null,"Delegates to an ",(0,i.kt)("a",{href:"https://www.openpolicyagent.org/"},"Open Policy Agent")," endpoint")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"forward-auth")),(0,i.kt)("td",null,"Forwards the authentication to a third-party endpoint")))),(0,i.kt)("p",null,"APISIX assigns authenticated calls to a ",(0,i.kt)("em",{parentName:"p"},"consumer"),". For example, we can create a consumer authenticated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"key-auth")," plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers:\n  - username: john\n    plugins:\n      key-auth:\n        key: mykey\n")),(0,i.kt)("p",null,"Every request containing the header ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"mykey")," will be assigned to the consumer ",(0,i.kt)("inlineCode",{parentName:"p"},"john"),"."),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"Authentication alone isn't enough. Once a request to a URL has been authenticated, we need to decide whether it's allowed to proceed further. That's the role of authorization."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Authorization ","[...]",' is the function of specifying access rights/privileges to resources, which is related to general information security and computer security, and to access control in particular. More formally, "to authorize" is to define an access policy.'),(0,i.kt)("p",{parentName:"blockquote"},"-- ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Authorization"},"Authorization on Wikipedia"))),(0,i.kt)("p",null,"Apache APISIX implements authorization mainly via the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/consumer-restriction/"},"consumer-restriction")," plugin. Here's the most straightforward usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers:\n  - username: johndoe                     #1\n    plugins:\n      keyauth:\n        key: mykey\n\nroutes:\n  - upstream_id: 1                        #2\n    plugins:\n      keyauth: ~\n      consumer-restriction:\n        whitelist:                        #3\n          - johndoe\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a consumer"),(0,i.kt)("li",{parentName:"ol"},"Reference an already existing upstream"),(0,i.kt)("li",{parentName:"ol"},"Only allows defined consumers to access the route")),(0,i.kt)("p",null,"Most real-world authorization models avoid binding an identity directly to a permission. They generally bind a group (and even a role) so that it becomes easier to manage many identities. Apache APISIX provides the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/consumer-group/"},"consumer group")," abstraction for this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"consumer_groups:\n  - id: accountants                      #1\n\nconsumers:\n  - username: johndoe\n    group_id: accountants                #2\n    plugins:\n      keyauth:\n        key: mykey\n\nroutes:\n  - upstream_id: 1\n    plugins:\n      keyauth: ~\n      consumer-restriction:\n        type: consumer_group_id          #3\n        whitelist:\n          - accountants\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a consumer group"),(0,i.kt)("li",{parentName:"ol"},"Assign the consumer to the previously defined consumer group"),(0,i.kt)("li",{parentName:"ol"},"Restrict the access to members of the defined consumer group, ",(0,i.kt)("em",{parentName:"li"},"i.e."),", ",(0,i.kt)("inlineCode",{parentName:"li"},"accountants"))),(0,i.kt)("h2",{id:"input-validation"},"Input validation"),(0,i.kt)("p",null,"With Apache APISIX, you can define a set of JSON schemas and validate a request against any of them. My colleague Navendu has written an exhaustive blog post on the subject: ",(0,i.kt)("a",{parentName:"p",href:"https://navendu.me/posts/request-validation/"},"Your API Requests Should Be Validated"),"."),(0,i.kt)("p",null,"I think it's not the API Gateway's responsibility to handle request validation. Each upstream has specific logic, and moving the validation responsibility from the upstream to the Gateway ties the latter to the logic for no actual benefit."),(0,i.kt)("p",null,"In any case, the checkbox is ticked."),(0,i.kt)("h2",{id:"ip-whitelisting"},"IP Whitelisting"),(0,i.kt)("p",null,"Apache APISIX implements IP Whitelisting via the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/ip-restriction/"},"ip-restriction")," plugin. You can define either regular IPs or CIDR blocks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"routes:\n  - upstream_id: 1\n    plugins:\n      ip-restriction:\n        whitelist:\n          - 127.0.0.1\n          - 13.74.26.106/24\n")),(0,i.kt)("h2",{id:"logging-and-monitoring"},"Logging and Monitoring"),(0,i.kt)("p",null,"Logging and Monitoring fall into the broader ",(0,i.kt)("em",{parentName:"p"},"Observability")," category, also encompassing ",(0,i.kt)("em",{parentName:"p"},"Tracing"),". Apache APISIX offers a broad range of Observability plugins in each category."),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"3"},"Tracing"),(0,i.kt)("td",null,(0,i.kt)("code",null,"zipkin")),(0,i.kt)("td",null,"Collect and send traces according to the Zipkin specification")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"skywalking")),(0,i.kt)("td",null,"Integrate with the ",(0,i.kt)("a",{href:"https://skywalking.apache.org/"},"Apache SkyWalking")," project")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"opentelemetry")),(0,i.kt)("td",null,"Report data according to the OpenTelemetry specification")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"3"},"Metrics"),(0,i.kt)("td",null,(0,i.kt)("code",null,"prometheus")),(0,i.kt)("td",null,"Expose metrics in the Prometheus format")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"node-status")),(0,i.kt)("td",null,"Expose metrics in JSON format")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"datadog")),(0,i.kt)("td",null,"Integrate with Datadog")),(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"14"},"Logging"),(0,i.kt)("td",null,(0,i.kt)("code",null,"file-logger")),(0,i.kt)("td",null,"Push log streams to a local file")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"syslog")),(0,i.kt)("td",null,"Push logs to a Syslog server")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"http-logger")),(0,i.kt)("td",null,"Push JSON-encoded logs to an HTTP server")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tcp-logger")),(0,i.kt)("td",null,"Push JSON-encoded logs to a TCP server")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"udp-logger")),(0,i.kt)("td",null,"Push JSON-encoded logs to a UDP server")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"kafka-logger")),(0,i.kt)("td",null,"Push JSON-encoded logs to a Kafka cluster")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"rocketmq-logger")),(0,i.kt)("td",null,"Push JSON-encoded logs to a RocketMQ cluster")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"loki-logger")),(0,i.kt)("td",null,"Push JSON-encoded logs to a Loki instance")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"splunk-hec-logging")),(0,i.kt)("td",null,"Push logs to a Splunk instance")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"loggly")),(0,i.kt)("td",null,"Push logs to a Loggly instance")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"elasticsearch-logger")),(0,i.kt)("td",null,"Push logs to an Elasticsearch instance")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"sls-logger")),(0,i.kt)("td",null,"Push logs to Alibaba Cloud Log Service")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"google-cloud-logging")),(0,i.kt)("td",null,"Push access logs to Google Cloud Logging Service")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tencent-cloud-cls")),(0,i.kt)("td",null,"Push access logs to Tencent Cloud CLS")))),(0,i.kt)("h2",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"Rate Limiting protects upstreams from Distributed Denial of Services attacks, ",(0,i.kt)("em",{parentName:"p"},"a.k.a")," DDoS. It's one of the main features of reverse proxies and API Gateways. APISIX implements rate limiting through three different plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/limit-conn/"},"limit-conn")," Plugin limits the number of concurrent requests to your services"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/limit-req/"},"limit-req")," Plugin limits the number of requests to your service using the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Leaky_bucket"},"leaky bucket algorithm")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/limit-count/"},"limit-count")," Plugin limits the number of requests to your service by a given count per time. The plugin is using ",(0,i.kt)("em",{parentName:"li"},"Fixed Window")," algorithm")),(0,i.kt)("p",null,"Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-count")," for the sake of example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"routes:\n  - upstream_id: 1\n    plugins:\n      limit-count:\n        count: 10\n        time_window: 1\n        rejected_code: 429\n")),(0,i.kt)("p",null,"The above configuration snippet protects the upstream from being hit by more than ten requests per second. It applies to every IP address because of the default configuration. The complete snippet would look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"routes:\n  - upstream_id: 1\n    plugins:\n      limit-count:\n        count: 10\n        time_window: 1\n        rejected_code: 429\n        key_type: var\n        key: remote_addr\n")),(0,i.kt)("p",null,"When dealing with APIs, there's a considerable chance you want to differentiate between your clients. Some might get a better rate for different reasons: they paid a premium offer; they are considered strategic; they are internal clients, etc. The same consumer could also use different IP addresses because they run on various machines with other APIs. Allowing the same consumer more calls because they execute their requests on a distributed infrastructure would be unfair."),(0,i.kt)("p",null,"As it stands, the IP is not a great way to assign the limit; we prefer to use a named consumer or, even better, a consumer group. It's perfectly possible with APISIX:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"consumer_groups:\n  - id: basic\n    plugins:\n      limit-count:\n        count: 1\n        time_window: 1\n        rejected_code: 429\n  - id: premium\n    plugins:\n      limit-count:\n        count: 10\n        time_window: 1\n        rejected_code: 429\n\nconsumers:\n  - username: johndoe\n    group_id: basic\n    plugins:\n      keyauth:\n        key: mykey1\n  - username: janedoe\n    group_id: premium\n    plugins:\n      keyauth:\n        key: mykey2\n\nroutes:\n  - upstream_id: 1\n    plugins:\n      key-auth: ~\n")),(0,i.kt)("p",null,"Now, ",(0,i.kt)("inlineCode",{parentName:"p"},"johndoe")," can only send a request every second, as he's part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"basic")," plan, while ",(0,i.kt)("inlineCode",{parentName:"p"},"janedoe")," can request ten times as much as part of the premium plan."),(0,i.kt)("h2",{id:"security-headers"},"Security Headers"),(0,i.kt)("p",null,"The OWASP lists plenty of ",(0,i.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html"},"HTTP Headers")," you can set to improve the security of your web apps and APIs. Apache APISIX provides two dedicated plugins for specific security risks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/cors/"},"CORS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/csrf/"},"CSRF"))),(0,i.kt)("p",null,"For any other header, you can use the more generic ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/response-rewrite/"},"response-rewrite")," plugin to add them. Finally, we can also remove default HTTP response headers, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Server"),", to make targeted attacks less likely."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"global_rules:                               #1\n  - id: 1\n    plugins:\n      response-rewrite:\n        headers:\n          set:\n            X-Content-Type-Options: nosniff #2\n          remove:\n            - Server                        #3\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Do on every route - security by default! It still can be overridden on a per-route basis, in case of need"),(0,i.kt)("li",{parentName:"ol"},"Tell the browser not to infer the content type if it's not explicitly set"),(0,i.kt)("li",{parentName:"ol"},"Don't advertise the server")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"We've seen how to configure Apache APISIX to secure your APIs against 7 of the 16 rules in the original list. The rules left could be less straightforward to implement; we will cover them in the second installment."))}p.isMDXComponent=!0}}]);