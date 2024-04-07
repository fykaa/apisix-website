"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32712:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"grpc-transcode",keywords:["APISIX","Plugin","gRPC Transcode","grpc-transcode"],description:"This document contains information about the Apache APISIX grpc-transcode Plugin."},l=void 0,i={unversionedId:"plugins/grpc-transcode",id:"version-2.14/plugins/grpc-transcode",isDocsHomePage:!1,title:"grpc-transcode",description:"This document contains information about the Apache APISIX grpc-transcode Plugin.",source:"@site/docs-apisix_versioned_docs/version-2.14/plugins/grpc-transcode.md",sourceDirName:"plugins",slug:"/plugins/grpc-transcode",permalink:"/docs/apisix/2.14/plugins/grpc-transcode",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.14/docs/en/latest/plugins/grpc-transcode.md",tags:[],version:"2.14",frontMatter:{title:"grpc-transcode",keywords:["APISIX","Plugin","gRPC Transcode","grpc-transcode"],description:"This document contains information about the Apache APISIX grpc-transcode Plugin."},sidebar:"version-2.14/docs",previous:{title:"proxy-rewrite",permalink:"/docs/apisix/2.14/plugins/proxy-rewrite"},next:{title:"grpc-web",permalink:"/docs/apisix/2.14/plugins/grpc-web"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Options for pb_option",id:"options-for-pb_option",children:[]}]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," Plugin converts between HTTP and gRPC requests."),(0,r.kt)("p",null,"APISIX takes in an HTTP request, transcodes it and forwards it to a gRPC service, gets the response and returns it back to the client in HTTP format."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proto_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string/integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"id of the the proto content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the gRPC service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Method name of the gRPC service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadline"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Deadline for the gRPC service in ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pb_option"),(0,r.kt)("td",{parentName:"tr",align:null},"array[string(",(0,r.kt)("a",{parentName:"td",href:"#options-for-pb_option"},"pb_option_def"),")]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"protobuf options.")))),(0,r.kt)("h3",{id:"options-for-pb_option"},"Options for pb_option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum as result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enum_as_name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"enum_as_value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int64 as result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int64_as_number"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int64_as_string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"int64_as_hexstring"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default values"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auto_default_values"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"no_default_values"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"use_default_values"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"use_default_metatable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hooks"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enable_hooks"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"disable_hooks"))))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"Before enabling the Plugin, you have to add the content of your ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".pb")," files to APISIX."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"/admin/proto/id")," endpoint and add the contents of the file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/proto/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "content" : "syntax = \\"proto3\\";\n    package helloworld;\n    service Greeter {\n        rpc SayHello (HelloRequest) returns (HelloReply) {}\n    }\n    message HelloRequest {\n        string name = 1;\n    }\n    message HelloReply {\n        string message = 1;\n    }"\n}\'\n')),(0,r.kt)("p",null,"If your proto file contains imports, or if you want to combine multiple proto files, you can generate a ",(0,r.kt)("inlineCode",{parentName:"p"},".pb")," file and use it in APISIX."),(0,r.kt)("p",null,"For example, if we have a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"proto/helloworld.proto")," which imports another proto file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'syntax = "proto3";\n\npackage helloworld;\nimport "proto/import.proto";\n...\n')),(0,r.kt)("p",null,"We first generate a ",(0,r.kt)("inlineCode",{parentName:"p"},".pb")," file from the proto files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"protoc --include_imports --descriptor_set_out=proto.pb proto/helloworld.proto\n")),(0,r.kt)("p",null,"The output binary file, ",(0,r.kt)("inlineCode",{parentName:"p"},"proto.pb")," will contain both ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld.proto")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"import.proto"),"."),(0,r.kt)("p",null,"We can now use the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"proto.pb")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," field of the API request."),(0,r.kt)("p",null,"As the content of the proto is binary, we encode it in ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," using this Python script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="upload_pb.py"',title:'"upload_pb.py"'},'#!/usr/bin/env python\n# coding: utf-8\n\nimport base64\nimport sys\n\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) <= 1:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[1], \'rb\') as f:\n    content = base64.b64encode(f.read())\nid = sys.argv[2]\napi_key = "edd1c9f034335f136f87ad84b625c8f1" # use a different API key\n\nreqParam = {\n    "content": content,\n}\nresp = requests.put("http://127.0.0.1:9080/apisix/admin/proto/" + id, json=reqParam, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,r.kt)("p",null,"This script will take in a ",(0,r.kt)("inlineCode",{parentName:"p"},".pb")," file and the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to create, encodes the content of the proto to ",(0,r.kt)("inlineCode",{parentName:"p"},"base64"),", and calls the Admin API with this encoded content."),(0,r.kt)("p",null,"To run the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x ./upload_pb.pb\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./upload_pb.py proto.pb 1\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# 200\n# {"node":{"value":{"create_time":1643879753,"update_time":1643883085,"content":"CmgKEnByb3RvL2ltcG9ydC5wcm90bxIDcGtnIhoKBFVzZXISEgoEbmFtZRgBIAEoCVIEbmFtZSIeCghSZXNwb25zZRISCgRib2R5GAEgASgJUgRib2R5QglaBy4vcHJvdG9iBnByb3RvMwq9AQoPcHJvdG8vc3JjLnByb3RvEgpoZWxsb3dvcmxkGhJwcm90by9pbXBvcnQucHJvdG8iPAoHUmVxdWVzdBIdCgR1c2VyGAEgASgLMgkucGtnLlVzZXJSBHVzZXISEgoEYm9keRgCIAEoCVIEYm9keTI5CgpUZXN0SW1wb3J0EisKA1J1bhITLmhlbGxvd29ybGQuUmVxdWVzdBoNLnBrZy5SZXNwb25zZSIAQglaBy4vcHJvdG9iBnByb3RvMw=="},"key":"\\/apisix\\/proto\\/1"},"action":"set"}\n')),(0,r.kt)("p",null,"Now, we can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," Plugin to a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/111 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/grpctest",\n    "plugins": {\n        "grpc-transcode": {\n            "proto_id": "1",\n            "service": "helloworld.Greeter",\n            "method": "SayHello"\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Upstream service used here should be a gRPC service. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc"),"."),(0,r.kt)("p",{parentName:"div"},"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/grpc_server_example"},"grpc_server_example")," for testing."))),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Once you configured the Plugin as mentioned above, you can make a request to APISIX to get a response back from the gRPC service (through APISIX):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/grpctest?name=world\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Fri, 16 Aug 2019 11:55:36 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\nProxy-Connection: keep-alive\n\n{"message":"Hello world"}\n')),(0,r.kt)("p",null,"You can also configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"pb_option")," as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/23 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/zeebe/WorkflowInstanceCreate",\n    "plugins": {\n        "grpc-transcode": {\n            "proto_id": "1",\n            "service": "gateway_protocol.Gateway",\n            "method": "CreateWorkflowInstance",\n            "pb_option":["int64_as_string"]\n        }\n    },\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:26500": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now if you check the configured Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/zeebe/WorkflowInstanceCreate?bpmnProcessId=order-process&version=1&variables=\\{\\"orderId\\":\\"7\\",\\"ordervalue\\":99\\}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Wed, 13 Nov 2019 03:38:27 GMT\nContent-Type: application/json\nTransfer-Encoding: chunked\nConnection: keep-alive\ngrpc-encoding: identity\ngrpc-accept-encoding: gzip\nServer: APISIX web server\nTrailer: grpc-status\nTrailer: grpc-message\n\n{"workflowKey":"#2251799813685260","workflowInstanceKey":"#2251799813688013","bpmnProcessId":"order-process","version":1}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/111 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/grpctest",\n    "plugins": {},\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);