"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[64443],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const i={title:"Make your security policy auditable",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["Cross-cutting concerns","Architecture","Security","Spring Security","Solutions Architecture"],description:"Last week, I wrote about putting the right feature at the right place. I used rate limiting as an example, moving it from a library inside the application to the API Gateway. Today, I'll use another example: authentication and authorization.\n",tags:["Ecosystem"],image:"https://static.apiseven.com/uploads/2023/06/08/pzULiHZO_opa-horizontal-color.svg"},r=void 0,l={permalink:"/blog/2023/03/02/security-policy-auditable",source:"@site/blog/2023/03/02/security-policy-auditable.md",title:"Make your security policy auditable",description:"Last week, I wrote about putting the right feature at the right place. I used rate limiting as an example, moving it from a library inside the application to the API Gateway. Today, I'll use another example: authentication and authorization.\n",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.805,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"Authenticate with OpenID Connect and Apache APISIX",permalink:"/blog/2023/03/09/authenticate-openid-connect"},nextItem:{title:"Biweekly Report (Feb 13 - Feb 26)",permalink:"/blog/2023/03/02/weekly-report-0226"}},s={authorsImageUrls:[void 0]},p=[{value:"Securing a Spring Boot application",id:"securing-a-spring-boot-application",children:[],level:2},{value:"Introducing Open Policy Agent",id:"introducing-open-policy-agent",children:[],level:2},{value:"More Open Policy Agent goodness",id:"more-open-policy-agent-goodness",children:[],level:2},{value:"Moving authentication to the API Gateway",id:"moving-authentication-to-the-api-gateway",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Last week, I wrote about ",(0,o.kt)("a",{parentName:"p",href:"https://blog.frankel.ch/right-feature-right-place/"},"putting the right feature at the right place"),". I used rate limiting as an example, moving it from a library inside the application to the API Gateway. Today, I'll use another example: authentication and authorization.")),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://blog.frankel.ch/security-policy-auditable/"})),(0,o.kt)("h2",{id:"securing-a-spring-boot-application"},"Securing a Spring Boot application"),(0,o.kt)("p",null,"I'll keep using Spring Boot in the following because I'm familiar with it. The Spring Boot application offers a REST endpoint to check employees' salaries."),(0,o.kt)("p",null,"The specific use case is taken from the Open Policy Agent site (more later):"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Create a policy that allows users to request their own salary as well as the salary of their direct subordinates.")),(0,o.kt)("p",null,"We need a way to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Authenticate an HTTP request as coming from a known user"),(0,o.kt)("li",{parentName:"ol"},"Check whether the user has access to the salary data")),(0,o.kt)("p",null,"In any other case, return a ",(0,o.kt)("inlineCode",{parentName:"p"},"401"),"."),(0,o.kt)("p",null,"I'll pass an authentication token in the request to keep things simple. I won't rely on a dedicated authentication/authorization backend, such as Keycloak, but it should be a similar approach if you do."),(0,o.kt)("p",null,"To enable Spring Security on the app, we need to add the Spring Boot Security Starter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"We also need to enable Spring Security to work its magic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@SpringBootApplication\n@EnableWebSecurity\nclass SecureBootApplication\n")),(0,o.kt)("p",null,"With those two steps in place, we can start securing the application according to the above requirement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'internal fun security() = beans {                                       //1\n    bean {\n        val http = ref<HttpSecurity>()\n        http {\n            authorizeRequests {\n                authorize("/finance/salary/**", authenticated)          //2\n            }\n            addFilterBefore<UsernamePasswordAuthenticationFilter>(\n                TokenAuthenticationFilter(ref())                        //3\n            )\n            httpBasic { disable() }\n            csrf { disable() }\n            logout { disable() }\n            sessionManagement {\n                sessionCreationPolicy = SessionCreationPolicy.STATELESS\n            }\n        }\n        http.build()\n    }\n    bean { TokenAuthenticationManager(ref(), ref()) }                   //4\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the Kotlin Beans DSL - because I can"),(0,o.kt)("li",{parentName:"ol"},"Only allow access to the endpoint to authenticated users"),(0,o.kt)("li",{parentName:"ol"},"Add a filter in the filter chain to replace regular authentication"),(0,o.kt)("li",{parentName:"ol"},"Add a custom authentication manager")),(0,o.kt)("p",null,"Requests look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: xyz'  localhost:9080/finance/salary/bob\n")),(0,o.kt)("p",null,"The filter extracts from the request the necessary data used to decide whether to allow the request or not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'internal class TokenAuthenticationFilter(authManager: AuthenticationManager) :\n    AbstractAuthenticationProcessingFilter("/finance/salary/**", authManager) {\n\n    override fun attemptAuthentication(req: HttpServletRequest, resp: HttpServletResponse): Authentication {\n        val header = req.getHeader("Authorization")                   //1\n        val path = req.servletPath.split(\'/\')                         //2\n        val token = KeyToken(header, path)                            //3\n        return authenticationManager.authenticate(token)              //4\n    }\n\n    // override fun successfulAuthentication(\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the authentication token"),(0,o.kt)("li",{parentName:"ol"},"Get the path"),(0,o.kt)("li",{parentName:"ol"},"Wrap it under a dedicated structure"),(0,o.kt)("li",{parentName:"ol"},"Try to authenticate the token")),(0,o.kt)("p",null,"In turn, the manager tries to authenticate the token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'internal class TokenAuthenticationManager(\n    private val accountRepo: AccountRepository,\n    private val employeeRepo: EmployeeRepository\n) : AuthenticationManager {\n  override fun authenticate(authentication: Authentication): Authentication {\n    val token = authentication.credentials as String? ?:                       //1\n        throw BadCredentialsException("No token passed")\n    val account = accountRepo.findByPassword(token).orElse(null) ?:            //2\n        throw BadCredentialsException("Invalid token")\n    val path = authentication.details as List<String>\n    val accountId = account.id\n    val segment = path.last()\n    if (segment == accountId) return authentication.withPrincipal(accountId)   //3\n    val employee = employeeRepo.findById(segment).orElse(null)                 //4\n    val managerUserName = employee?.manager?.userName\n    if (managerUserName != null && managerUserName == accountId)               //5\n        return authentication.withPrincipal(accountId)                         //5\n    throw InsufficientAuthenticationException("Incorrect token")               //6\n  }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the authorization token passed from the filter"),(0,o.kt)("li",{parentName:"ol"},"Try to find the account that has this token. For simplicity's sake, the token is stored in plain text without hashing"),(0,o.kt)("li",{parentName:"ol"},"If the account tries to access its data, allow it"),(0,o.kt)("li",{parentName:"ol"},"If not, we must load the hierarchy from another repo."),(0,o.kt)("li",{parentName:"ol"},"If the account attempts to access data from an employee they manage, allow it."),(0,o.kt)("li",{parentName:"ol"},"Else, deny it.")),(0,o.kt)("p",null,"The whole flow can be summarized as the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.plantuml.com/plantuml/svg/VL9DIyD04BtlhnXoKh6qYgVYHui6AuYLfj3pT3CbmNHtsGzh_VMwsOIbA-QGXFbuyzwRoSnOrDRj6uRSIWtEa0Oqa476k1HMomPGgJOrLofZ9LhSeY50pgKJreHI5yGwq5uryaWK6l8-oZnH_OcMMYxM4exkFSaKdlCrZ7UrGC5fRB11VHmVAXaXg1JpSde0huX_mDpPIkhw6sqjnMbpIQVOniARF0KyC0YsRqUZC5MJTLh0pUIAKME80NISlUSf5Fbh_hY62zWiybKEx_EYs2nNJt07Vbpax01XH628gI0kRUmrXemVDw0Fe5COSCk3WABTMy3zWxoUJ7mvOdk7yMf_BBxqvW2YmTZV5gBBD5_I02Ivvw8cZPfNnpFZjbANjK1BvX8Kskey4U1XAKLCXgKKSKgodC7r90iQEaBe5IMBN__sJw8gXk7th-gIO2UbtSelDli5k7tp0m00",alt:"Spring Security Obfuscated Flow"})),(0,o.kt)("p",null,"Now, we can try some requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: bob' localhost:9080/finance/salary/bob\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bob")," asks for his own salary, and it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: bob' localhost:9080/finance/salary/alice\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bob")," asks for the salary of one of his subordinates, and it works as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: bob' localhost:9080/finance/salary/alice\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alice")," asks for her manager's salary, which is not allowed."),(0,o.kt)("p",null,"The code above works perfectly but has one big issue: there's no way to audit the logic. One must know Kotlin and how Spring Security works to ensure the implementation is sound."),(0,o.kt)("h2",{id:"introducing-open-policy-agent"},"Introducing Open Policy Agent"),(0,o.kt)("p",null,'Open Policy Agent, or OPA for short, describes itself as "Policy-based control for cloud native environments".'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Stop using a different policy language, policy model, and policy API for every product and service you use. Use OPA for a unified toolset and framework for policy across the cloud native stack."),(0,o.kt)("p",{parentName:"blockquote"},"Whether for one service or for all your services, use OPA to decouple policy from the service's code so you can release, analyze, and review policies (which security and compliance teams love) without sacrificing availability or performance."),(0,o.kt)("p",{parentName:"blockquote"},"-- ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"OPA Website"))),(0,o.kt)("p",null,"In short, OPA allows writing policies and offers a CLI and a daemon app to evaluate them."),(0,o.kt)("p",null,"You write policies in a specific interpreted language named ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"Rego"),", and I must admit it's not fun. Anyway, here's our above policy written in \"clear\" text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rego"},'package ch.frankel.blog.secureboot\n\nemployees := data.hierarchy                                 #1\n\ndefault allow := false\n\n# Allow users to get their own salaries.\nallow {\n    input.path == ["finance", "salary", input.user]         #2\n}\n\n# Allow managers to get their subordinates\' salaries.\nallow {\n    some username\n    input.path = ["finance", "salary", username]            #3\n    employees[input.user][_] == username                    #3\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the employee hierarchy somehow (see below)"),(0,o.kt)("li",{parentName:"ol"},"If the account requests their salary, allow access"),(0,o.kt)("li",{parentName:"ol"},"If the account requests the salary of a subordinate, allow access")),(0,o.kt)("p",null,"I used two variables in the above snippet: ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," is the payload that the application sends to OPA. It should be in JSON format and has the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "path": [\n        "finance",\n        "salary",\n        "alice"\n    ],\n    "user": "bob"\n}\n')),(0,o.kt)("h2",{id:"more-open-policy-agent-goodness"},"More Open Policy Agent goodness"),(0,o.kt)("p",null,"However, OPA can't decide on the input alone, as it doesn't know the employee's hierarchy. One approach would be to load the hierarchy data on the app and send it to OPA. A more robust approach is to let OPA access external data to separate responsibilities cleanly. OPA offers ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/external-data/"},"many options")," to achieve it. Here, I pretend to extract data from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Employee")," database, bundle it together with the policy file, serve the bundle via HTTP, and configure OPA to load it at regular intervals."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.plantuml.com/plantuml/svg/VLB1JiCm3BtdAwoUG6BZNb6q8are7DZ4E71D6tUDb3MLauwDhwTf6ZLK6wSwVlQpttDNndAotL4nNbfDW6TBFk86adLu9Knmomjk45gjP7aPuDqGHXWUMwKlYCPtXrV2IjrOqWfqomTekyiJLkYk4PnwhbOQUHw0lELbZP3lDllDLyHSzAKAMPR1YukcDHe1hWYop2cG9svn4i6KrYta5WWFdU84ih589wuCYvGkdaUs52gqPVqNcqJTWCCZXRVzzbrMbwc3mPMTGE2rR4pgV4f7pNT-juU9zNwYTOLnwzDYuNi9RKVDIE57nXqbeOizF9ljascewPFwXFHDqkADtR4HxZ8VM16QUYG85mb3_xc5Wzra_n-ayBh-X4VFOiRlqd9Q7duYvRwOZTzuSK8kFAUp8v1UiS93ONmmpelmhi-SdlleXCzIjHG8bTQsq6UswWkwe_e5",alt:"Bundle refresh"})),(0,o.kt)("p",null,"Note that you shouldn't use Apache APISIX only to serve static files. But since I'll be using it in the next evolution of my architecture, I want to avoid having a separate HTTP server to simplify the system."),(0,o.kt)("p",null,"Now that we moved the decision logic to OPA, we can replace our code with a request to the OPA service. The new version of the authentication manager is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'internal class OpaAuthenticationManager(\n    private val accountRepo: AccountRepository,\n    private val opaWebClient: WebClient\n) : AuthenticationManager {\n\n    override fun authenticate(authentication: Authentication): Authentication {\n        val token = authentication.credentials as String? ?:                       //1\n            throw BadCredentialsException("No token passed")\n        val account = accountRepo.findByPassword(token).orElse(null) ?:             //1\n            throw BadCredentialsException("Invalid token")\n        val path = authentication.details as List<String>\n        val decision = opaWebClient.post()                                         //2\n            .accept(MediaType.APPLICATION_JSON)\n            .contentType(MediaType.APPLICATION_JSON)\n            .bodyValue(OpaInput(DataInput(account.id, path)))                      //3\n            .exchangeToMono { it.bodyToMono(DecisionOutput::class.java) }          //4\n            .block() ?: DecisionOutput(ResultOutput(false))                        //5\n        if (decision.result.allow) return authentication.withPrincipal(account.id) //6\n        else throw InsufficientAuthenticationException("OPA disallow")             //6\n    }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Keep the initial ",(0,o.kt)("em",{parentName:"li"},"authentication")," logic"),(0,o.kt)("li",{parentName:"ol"},"Replace the authorization with a call to the OPA service"),(0,o.kt)("li",{parentName:"ol"},"Serialize the data to conform to the JSON input that the OPA policy expects"),(0,o.kt)("li",{parentName:"ol"},"Deserialize the result"),(0,o.kt)("li",{parentName:"ol"},"If something is wrong, the default should be to disallow"),(0,o.kt)("li",{parentName:"ol"},"Abide by OPA's result")),(0,o.kt)("p",null,"The flow is now the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.plantuml.com/plantuml/svg/VLB1RXCn4BtxAvxs18YGW3X551h12eHGKpMLUk7YsbDYuNeisqifNyzEt5ZPgirXlPetyzuRF_aq5vtASEkLDeKJXam9EgD3f-BOSSP57GfqZ3ju5MEdh2xwMcU2DeQ7K79jFHITCXnAOW-EUjTPdwywqNT_TA6TXP83iu-YkyJN_XBp6nTqC3JFskjqFx_RSgF8b1g_HZ1RCh-n6igMa_kdY-Cm7ROqvVg2CvuIFYdKstwOpQfgeZAaWFUBjufy9WLKptRD9JRzZ_xp9LxXwbj_qUDyjTbShI--u0GYrpptX2eX3eUGfQS6zpjMHEIEx0SyR0WSvlAB0YNH_RvPdy65E9GwSnY60DDy3dKuwYKo1VjYHtyvuKjN0FctuMPgoRZiE43UXlqPEDGLNYEoT-OUEbZ8stbQqz8Zg8KdTRl-tkLPZYzjvasYF8proOXwlfDGdutrtM8XxHRiyVW12bRLKxvfe59EdllMMS8DSxdcl-fq90ot_Zy0",alt:"Spring Security flow with OPA"})),(0,o.kt)("p",null,"At this point, we moved the authorization logic from the code to OPA."),(0,o.kt)("h2",{id:"moving-authentication-to-the-api-gateway"},"Moving authentication to the API Gateway"),(0,o.kt)("p",null,"The next and final step is to move the ",(0,o.kt)("em",{parentName:"p"},"authentication")," logic The obvious candidate is the API Gateway since we set Apache APISIX in the previous step. In general, we should use the capabilities of the API Gateway as much as possible and fall back to libraries for the rest."),(0,o.kt)("p",null,"Apache APISIX has multiple authentication plugins available. Because I used a bearer token, I'll use ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/key-auth/"},"key-auth"),". Let's create our users, or in Apache APISIX terms, ",(0,o.kt)("em",{parentName:"p"},"consumers"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers:\n  - username: alice\n    plugins:\n      key-auth:\n        key:  alice\n  - username: betty\n    plugins:\n      key-auth:\n        key:  betty\n  - username: bob\n    plugins:\n      key-auth:\n        key:  bob\n  - username: charlie\n    plugins:\n      key-auth:\n        key:  charlie\n")),(0,o.kt)("p",null,"Now, we can protect the Spring Boot upstream:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /finance/salary*\n    upstream:\n      type: roundrobin\n      nodes:\n        "boot:8080": 1\n    plugins:\n      key-auth:\n        header: Authorization                    #1\n      proxy-rewrite:\n        headers:\n          set:\n            X-Account: $consumer_name            #2\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Authenticate with ",(0,o.kt)("inlineCode",{parentName:"li"},"key-auth")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header"),(0,o.kt)("li",{parentName:"ol"},"Sets the consumer id in the ",(0,o.kt)("inlineCode",{parentName:"li"},"X-Account")," HTTP header for the upstream")),(0,o.kt)("p",null,"APISIX guarantees that requests that reach the Spring Boot app are authenticated. The code only needs to call the OPA service and follow the decision. We can entirely remove Spring Security and replace it with a ",(0,o.kt)("em",{parentName:"p"},"simple")," filter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'bean {\n    val repo = ref<EmployeeRepository>()\n    router {\n        val props = ref<AppProperties>()\n        val opaWebClient = WebClient.create(props.opaEndpoint)\n        filter { req, next -> validateOpa(opaWebClient, req, next) }\n        GET("/finance/salary/{user_name}") {\n          // ...\n        }\n    }\n}\n\ninternal fun validateOpa(\n    opaWebClient: WebClient,\n    req: ServerRequest,\n    next: (ServerRequest) -> ServerResponse\n): ServerResponse {\n    val httpReq = req.servletRequest()\n    val account = httpReq.getHeader("X-Account")                           //1\n    val path = httpReq.servletPath.split(\'/\').filter { it.isNotBlank() }\n    val decision = opaWebClient.post()                                     //2\n        .accept(MediaType.APPLICATION_JSON)\n        .contentType(MediaType.APPLICATION_JSON)\n        .bodyValue(OpaInput(DataInput(account, path)))\n        .exchangeToMono { it.bodyToMono(DecisionOutput::class.java) }\n        .block() ?: DecisionOutput(ResultOutput(false))\n    return if (decision.result.allow) next(req)\n    else ServerResponse.status(HttpStatus.UNAUTHORIZED).build()\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the account name from the API Gateway"),(0,o.kt)("li",{parentName:"ol"},"Nothing changes afterward")),(0,o.kt)("p",null,"The final flow is the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.plantuml.com/plantuml/svg/TL5DJp8n4BxtLqpszBw921fFH0KEnk01IF3WmSlG3cwJqZRz4FZtbhBMtIpiORlppFEndPdwW2x4dMB8Wt4GFJb03nLKR6EY5kYEW5PwUSZmp2Al2MQh-Nh-KJ5kT7169OPjslOFD1Opk5pDgfEz_CP0EO7bcC5pupo6rvTt66wbHirfw56brE6-DaNL4DdvQ2inXffqa3onUdH1FGCLO652HoOc3CuNVnmCYh6Z49s6Xz4T8-M9GNhQyVRgNsTgAzWsMbk4NwJ9dPflw-K2fBOnN1O9kkPZB8x1anR_iln_Lv-w6KXd8PTGGJnTmsZOe2VngTDNzhW1QvJaHq0jG630ovw2UX1QcsUNwj_1bPIh6XKAvzQHZwb-IgWo-qacT7PYY-_zQ9JRPIbzNbbSvcd1pk_kC5jbDc2r50HROyB67DWq2U9E_G00",alt:"Final flow without Spring Security"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Everything looks like a nail when all you've got is a hammer. Developers' mighty hammer of choice is code. I've written tons of code to solve problems, and later on, I've used even more libraries to solve even more problems. As you evolve from developer to architect, you increase the number of tools you have. In this regard, code is only one tool among many. Your organization has many infrastructure tools you can leverage to develop solutions at minimal costs."),(0,o.kt)("p",null,"In this post, I've shown how you can leverage OPA and Apache APISIX to move your authentication and authorization logic from the code to the infrastructure. The former allows you to audit your security policies, the latter coherence among all your upstream across all tech stacks."),(0,o.kt)("p",null,"The complete source code for this post can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ajavageek/secure-boot"},"GitHub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To go further:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-security/reference/index.html"},"Spring Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.openpolicyagent.org/"},"Open Policy Agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.openpolicyagent.org/docs/latest/management-bundles/"},"OPA Bundles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://play.openpolicyagent.org/"},"Rego playground")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.baeldung.com/spring-security-authorization-opa"},"Spring Security Authorization with OPA"))))}u.isMDXComponent=!0}}]);