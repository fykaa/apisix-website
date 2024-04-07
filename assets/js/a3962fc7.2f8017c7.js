"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[30382],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(t),h=i,d=g["".concat(p,".").concat(h)]||g[h]||c[h]||r;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},47859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(25773),i=(t(27378),t(35318));const r={title:"How to use Go to develop Apache APISIX plugin",slug:"2021/08/19/go-makes-apache-apisix-better",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Go","APISIX","Go Plugin","APISIX Go plugin","apisix-go-plugin-runner","Golang"],description:"This article explains in detail how to use Go to develop the plug-in and specific operation steps of the cloud native API gateway Apache APISIX.",tags:["Ecosystem","Plugins"]},l=void 0,o={permalink:"/blog/2021/08/19/go-makes-apache-apisix-better",source:"@site/blog/2021/08/19/go-makes-Apache-APISIX-better.md",title:"How to use Go to develop Apache APISIX plugin",description:"This article explains in detail how to use Go to develop the plug-in and specific operation steps of the cloud native API gateway Apache APISIX.",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:5.62,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Apache APISIX Meetup in Shanghai, welcome to register!",permalink:"/blog/2021/08/21/shanghai-meetup"},nextItem:{title:"Licensing with Casbin in Apache APISIX",permalink:"/blog/2021/08/18/auth-with-casbin-in-apache-apisix"}},p={authorsImageUrls:[void 0]},u=[{value:"Why Go",id:"why-go",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Development",id:"development",children:[{value:"Developing with the Go Runner SDK",id:"developing-with-the-go-runner-sdk",children:[],level:3},{value:"Setting up Apache APISIX (development)",id:"setting-up-apache-apisix-development",children:[],level:3},{value:"Setting up Apache APISIX (run)",id:"setting-up-apache-apisix-run",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2},{value:"Related reading",id:"related-reading",children:[],level:2}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article will explain in detail how to use Go to develop Apache APISIX plugins. By embracing the Go ecosystem and breaking new ground for Apache APISIX, we hope that Go will make Apache APISIX even better!")),(0,i.kt)("h2",{id:"why-go"},"Why Go"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," allows users to extend functionality by way of plugins. Core features such as authentication, flow restriction, request rewriting, etc. are implemented by way of plugins. Although the core code of Apache APISIX is written in Lua, Apache APISIX supports multi-language development of plugins, such as Go, Java."),(0,i.kt)("p",null,"This article will explain in detail how to develop Apache APISIX plugins in Go. By embracing the Go ecosystem, we are breaking new ground for Apache APISIX, and we hope that Go will make Apache APISIX even better!"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To use Go Runner as a library, the official ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd/go-runner")," example in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner"},"apisix-go-plugin-runner")," shows how to use the Go Runner SDK. The Go Runner SDK will also support loading pre-compiled plugins via the Go Plugin mechanism in the future."),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("h3",{id:"developing-with-the-go-runner-sdk"},"Developing with the Go Runner SDK"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ tree cmd/go-runner\ncmd/go-runner\n\u251c\u2500\u2500 main.go\n\u251c\u2500\u2500 main_test.go\n\u251c\u2500\u2500 plugins\n\u2502   \u251c\u2500\u2500 say.go\n\u2502   \u2514\u2500\u2500 say_test.go\n\u2514\u2500\u2500 version.go\n")),(0,i.kt)("p",null,"Above is the directory structure of the official example. ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," is the entry point, where the most critical part is."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cfg := runner.RunnerConfig{}\n...\nrunner.Run(cfg)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RunnerConfig")," can be used to control the log level and log output location."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"runner.Run")," will make the application listen to the target location, receive requests and execute the registered plugins. The application will remain in this state until it exits."),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/say.go"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\n  err := plugin.RegisterPlugin(&Say{})\n  if err != nil {\n    log.Fatalf("failed to register plugin say: %s", err)\n  }\n}\n')),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," imports the plugins package, the"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  ...\n  _ "github.com/apache/apisix-go-plugin-runner/cmd/go-runner/plugins"\n  ...\n)\n')),(0,i.kt)("p",null,"This registers ",(0,i.kt)("inlineCode",{parentName:"p"},"Say")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.RegisterPlugin")," before executing ",(0,i.kt)("inlineCode",{parentName:"p"},"runner.Run"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Say")," needs to implement the following methods."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," method returns the plugin name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (p *Say) Name() string {\n  return "say"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ParseConf")," will be called when the plugin configuration changes, parsing the configuration and returning a plugin-specific configuration context."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (p *Say) ParseConf(in []byte) (interface{}, error) {\n  conf := SayConf{}\n  err := json.Unmarshal(in, &conf)\n  return conf, err\n}\n")),(0,i.kt)("p",null,"The context of the plugin looks like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type SayConf struct {\n  Body string `json:"body"`\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," is executed on every request with the say plugin configured."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func (p *Say) Filter(conf interface{}, w http.ResponseWriter, r pkgHTTP.Request) {\n  body := conf.(SayConf).Body\n  if len(body) == 0 {\n    return\n  }\n\n  w.Header().Add("X-Resp-A6-Runner", "Go")\n  _, err := w.Write([]byte(body))\n  if err != nil {\n    log.Errorf("failed to write: %s", err)\n  }\n}\n')),(0,i.kt)("p",null,"You can see that Filter takes the value of the body inside the configuration as the response body. If the response is made directly in the plugin, it will break the request."),(0,i.kt)("p",null,"Go Runner SDK API documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner"},"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner")),(0,i.kt)("p",null,"After building the application (",(0,i.kt)("inlineCode",{parentName:"p"},"make build")," in the example), you need to set two environment variables at runtime."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"APISIX_CONF_EXPIRE_TIME=3600"))),(0,i.kt)("p",null,"Like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock APISIX_CONF_EXPIRE_TIME=3600 ./go-runner run\n")),(0,i.kt)("p",null,"The application will listen to ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/runner.sock")," when it runs."),(0,i.kt)("h3",{id:"setting-up-apache-apisix-development"},"Setting up Apache APISIX (development)"),(0,i.kt)("p",null,"The first step is to install Apache APISIX, which needs to be on the same instance as Go Runner."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639467846997-8be8195d-98ac-457d-8b7f-a7b78e55fef1.png",alt:"Apache APISIX work flow"})),(0,i.kt)("p",null,"The above diagram shows the workflow of Apache APISIX on the left, and the plugin runner on the right is responsible for running external plugins written in different languages. apisix-go-plugin-runner is such a runner that supports the Go language."),(0,i.kt)("p",null,"When you configure a plugin runner in Apache APISIX, Apache APISIX treats the plugin runner as a child of itself, which belongs to the same user as the Apache APISIX process, and when we restart or reload Apache APISIX, the plugin runner will be restarted as well."),(0,i.kt)("p",null,"If the ext-plugin-* plugin is configured for a given route, a request to hit that route will trigger Apache APISIX to make an RPC call to the plugin runner over a unix socket. The call is broken down into two phases."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ext-plugin-pre-req: before executing most of the Apache APISIX built-in plugins (Lua language plugins)"),(0,i.kt)("li",{parentName:"ul"},"ext-plugin-post-req: after the execution of the Apache APISIX built-in plugins (Lua language plugins)")),(0,i.kt)("p",null,"Configure the timing of plugin runner execution as needed."),(0,i.kt)("p",null,"The plugin runner processes the RPC call, creates a simulated request inside it, then runs the plugins written in other languages and returns the results to Apache APISIX."),(0,i.kt)("p",null,"The order of execution of these plugins is defined in the ext-plugin-* plugin configuration entry. Like other plugins, they can be enabled and redefined on the fly."),(0,i.kt)("p",null,"To show how to develop Go plugins, we first set up Apache APISIX to enter development mode. Add the following configuration to config.yaml."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ext-plugin:\n  path_for_test: /tmp/runner.sock\n")),(0,i.kt)("p",null,"This configuration means that after the routing rule is hit, Apache APISIX will make an RPC request to /tmp/runner.sock."),(0,i.kt)("p",null,"Next, set up the routing rules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "ext-plugin-pre-req": {\n      "conf": [\n        {"name":"say", "value":"{\\"body\\":\\"hello\\"}"}\n      ]\n    }\n  },\n  "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\n\'\n')),(0,i.kt)("p",null,"Note that the plugin name is configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and the plugin configuration (after JSON serialization) is placed in ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,i.kt)("p",null,"If you see ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh cache and try again")," warning on Apache APISIX side and ",(0,i.kt)("inlineCode",{parentName:"p"},"key not found")," warning on Runner side during development, this is due to configuration cache inconsistency. Since the Runner is not managed by Apache APISIX in the development state, the internal state may be inconsistent. Don't worry, Apache APISIX will retry."),(0,i.kt)("p",null,"Then we request: curl 127.0.0.1:9080/get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/get\nHTTP/1.1 200 OK\nDate: Mon, 26 Jul 2021 11:16:11 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nX-Resp-A6-Runner: Go\nServer: APISIX/2.7\n\nhello\n")),(0,i.kt)("p",null,"You can see that the interface returns hello and does not access any upstream."),(0,i.kt)("h3",{id:"setting-up-apache-apisix-run"},"Setting up Apache APISIX (run)"),(0,i.kt)("p",null,"Here is an example of go-runner, which can be run by simply configuring the run command line in ext-plugin: the"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ext-plugin:\n  # path_for_test: /tmp/runner.sock\n  cmd: ["/path/to/apisix-go-plugin-runner/go-runner", "run"]\n')),(0,i.kt)("p",null,"Apache APISIX will treat the plugin runner as a child process of its own, managing its entire lifecycle."),(0,i.kt)("p",null,"Note: Do not configure path_for_test at this point. Apache APISIX automatically assigns a unix socket address for the runner to listen to when it starts. You don't need to set them manually."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Go Plugin Runner is still in the early stages of development, we will continue to improve its functionality. We welcome you to participate in the development of apisix-go-plugin-runner, and let's build a bridge between Apache APISIX and Go together!\nClick to visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner"},"apisix-go-plugin-runner"),"."),(0,i.kt)("h2",{id:"related-reading"},"Related reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins"},"How to write Apache APISIX plugins in Java")))}c.isMDXComponent=!0}}]);