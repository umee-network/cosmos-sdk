(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{638:function(e,t,o){"use strict";o.r(t);var s=o(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-031-protobuf-msg-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-031-protobuf-msg-services"}},[e._v("#")]),e._v(" ADR 031: Protobuf Msg Services")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2020-10-05: Initial Draft")]),e._v(" "),o("li",[e._v("2021-04-21: Remove "),o("code",[e._v("ServiceMsg")]),e._v("s to follow Protobuf "),o("code",[e._v("Any")]),e._v("'s spec, see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/9063",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9063"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Accepted")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("We want to leverage protobuf "),o("code",[e._v("service")]),e._v(" definitions for defining "),o("code",[e._v("Msg")]),e._v("s which will give us significant developer UX\nimprovements in terms of the code that is generated and the fact that return types will now be well defined.")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Currently "),o("code",[e._v("Msg")]),e._v(" handlers in the Cosmos SDK do have return values that are placed in the "),o("code",[e._v("data")]),e._v(" field of the response.\nThese return values, however, are not specified anywhere except in the golang handler code.")]),e._v(" "),o("p",[e._v("In early conversations "),o("a",{attrs:{href:"https://docs.google.com/document/d/1eEgYgvgZqLE45vETjhwIw4VOqK-5hwQtZtjVbiXnIGc/edit",target:"_blank",rel:"noopener noreferrer"}},[e._v("it was proposed"),o("OutboundLink")],1),e._v("\nthat "),o("code",[e._v("Msg")]),e._v(" return types be captured using a protobuf extension field, ex:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"cGFja2FnZSBjb3Ntb3MuZ292OwoKbWVzc2FnZSBNc2dTdWJtaXRQcm9wb3NhbAoJb3B0aW9uIChjb3Ntb3NfcHJvdG8ubXNnX3JldHVybikgPSDigJx1aW50NjTigJ07CglzdHJpbmcgZGVsZWdhdG9yX2FkZHJlc3MgPSAxOwoJc3RyaW5nIHZhbGlkYXRvcl9hZGRyZXNzID0gMjsKCXJlcGVhdGVkIHNkay5Db2luIGFtb3VudCA9IDM7Cn0K"}}),e._v(" "),o("p",[e._v("This was never adopted, however.")]),e._v(" "),o("p",[e._v("Having a well-specified return value for "),o("code",[e._v("Msg")]),e._v("s would improve client UX. For instance,\nin "),o("code",[e._v("x/gov")]),e._v(",  "),o("code",[e._v("MsgSubmitProposal")]),e._v(" returns the proposal ID as a big-endian "),o("code",[e._v("uint64")]),e._v(".\nThis isn’t really documented anywhere and clients would need to know the internals\nof the Cosmos SDK to parse that value and return it to users.")]),e._v(" "),o("p",[e._v("Also, there may be cases where we want to use these return values programatically.\nFor instance, https://github.com/cosmos/cosmos-sdk/issues/7093 proposes a method for\ndoing inter-module Ocaps using the "),o("code",[e._v("Msg")]),e._v(" router. A well-defined return type would\nimprove the developer UX for this approach.")]),e._v(" "),o("p",[e._v("In addition, handler registration of "),o("code",[e._v("Msg")]),e._v(" types tends to add a bit of\nboilerplate on top of keepers and is usually done through manual type switches.\nThis isn't necessarily bad, but it does add overhead to creating modules.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("We decide to use protobuf "),o("code",[e._v("service")]),e._v(" definitions for defining "),o("code",[e._v("Msg")]),e._v("s as well as\nthe code generated by them as a replacement for "),o("code",[e._v("Msg")]),e._v(" handlers.")]),e._v(" "),o("p",[e._v("Below we define how this will look for the "),o("code",[e._v("SubmitProposal")]),e._v(" message from "),o("code",[e._v("x/gov")]),e._v(" module.\nWe start with a "),o("code",[e._v("Msg")]),e._v(" "),o("code",[e._v("service")]),e._v(" definition:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"cGFja2FnZSBjb3Ntb3MuZ292OwoKc2VydmljZSBNc2cgewogIHJwYyBTdWJtaXRQcm9wb3NhbChNc2dTdWJtaXRQcm9wb3NhbCkgcmV0dXJucyAoTXNnU3VibWl0UHJvcG9zYWxSZXNwb25zZSk7Cn0KCi8vIE5vdGUgdGhhdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgdGhpcyB1c2VzIE1zZ1N1Ym1pdFByb3Bvc2FsIGFzIHRoZSByZXF1ZXN0Ci8vIHR5cGUgaW5zdGVhZCBvZiB0aGUgbW9yZSBjYW5vbmljYWwgTXNnU3VibWl0UHJvcG9zYWxSZXF1ZXN0Cm1lc3NhZ2UgTXNnU3VibWl0UHJvcG9zYWwgewogIGdvb2dsZS5wcm90b2J1Zi5BbnkgY29udGVudCA9IDE7CiAgc3RyaW5nIHByb3Bvc2VyID0gMjsKfQoKbWVzc2FnZSBNc2dTdWJtaXRQcm9wb3NhbFJlc3BvbnNlIHsKICB1aW50NjQgcHJvcG9zYWxfaWQ7Cn0K"}}),e._v(" "),o("p",[e._v("While this is most commonly used for gRPC, overloading protobuf "),o("code",[e._v("service")]),e._v(" definitions like this does not violate\nthe intent of the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf spec"),o("OutboundLink")],1),e._v(" which says:")]),e._v(" "),o("blockquote",[o("p",[e._v("If you don’t want to use gRPC, it’s also possible to use protocol buffers with your own RPC implementation.\nWith this approach, we would get an auto-generated "),o("code",[e._v("MsgServer")]),e._v(" interface:")])]),e._v(" "),o("p",[e._v("In addition to clearly specifying return types, this has the benefit of generating client and server code. On the server\nside, this is almost like an automatically generated keeper method and could maybe be used intead of keepers eventually\n(see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7093",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7093"),o("OutboundLink")],1),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBnb3YKCnR5cGUgTXNnU2VydmVyIGludGVyZmFjZSB7CiAgU3VibWl0UHJvcG9zYWwoY29udGV4dC5Db250ZXh0LCAqTXNnU3VibWl0UHJvcG9zYWwpICgqTXNnU3VibWl0UHJvcG9zYWxSZXNwb25zZSwgZXJyb3IpCn0K"}}),e._v(" "),o("p",[e._v("On the client side, developers could take advantage of this by creating RPC implementations that encapsulate transaction\nlogic. Protobuf libraries that use asynchronous callbacks, like "),o("a",{attrs:{href:"https://github.com/protobufjs/protobuf.js#using-services",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf.js"),o("OutboundLink")],1),e._v("\ncould use this to register callbacks for specific messages even for transactions that include multiple "),o("code",[e._v("Msg")]),e._v("s.")]),e._v(" "),o("p",[e._v("Each "),o("code",[e._v("Msg")]),e._v(" service method should have exactly one request parameter: its corresponding "),o("code",[e._v("Msg")]),e._v(" type. For example, the "),o("code",[e._v("Msg")]),e._v(" service method "),o("code",[e._v("/cosmos.gov.v1beta1.Msg/SubmitProposal")]),e._v(" above has exactly one request parameter, namely the "),o("code",[e._v("Msg")]),e._v(" type "),o("code",[e._v("/cosmos.gov.v1beta1.MsgSubmitProposal")]),e._v(". It is important the reader understands clearly the nomenclature difference between a "),o("code",[e._v("Msg")]),e._v(" service (a Protobuf service) and a "),o("code",[e._v("Msg")]),e._v(" type (a Protobuf message), and the differences in their fully-qualified name.")]),e._v(" "),o("p",[e._v("This convention has been decided over the more canonical "),o("code",[e._v("Msg...Request")]),e._v(" names mainly for backwards compatibility, but also for better readability in "),o("code",[e._v("TxBody.messages")]),e._v(" (see "),o("a",{attrs:{href:"#encoding"}},[e._v("Encoding section")]),e._v(" below): transactions containing "),o("code",[e._v("/cosmos.gov.MsgSubmitProposal")]),e._v(" read better than those containing "),o("code",[e._v("/cosmos.gov.v1beta1.MsgSubmitProposalRequest")]),e._v(".")]),e._v(" "),o("p",[e._v("One consequence of this convention is that each "),o("code",[e._v("Msg")]),e._v(" type can be the request parameter of only one "),o("code",[e._v("Msg")]),e._v(" service method. However, we consider this limitation a good practice in explicitness.")]),e._v(" "),o("h3",{attrs:{id:"encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),o("p",[e._v("Encoding of transactions generated with "),o("code",[e._v("Msg")]),e._v(" services do not differ from current Protobuf transaction encoding as defined in "),o("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR-020")]),e._v(". We are encoding "),o("code",[e._v("Msg")]),e._v(" types (which are exactly "),o("code",[e._v("Msg")]),e._v(" service methods' request parameters) as "),o("code",[e._v("Any")]),e._v(" in "),o("code",[e._v("Tx")]),e._v("s which involves packing the\nbinary-encoded "),o("code",[e._v("Msg")]),e._v(" with its type URL.")],1),e._v(" "),o("h3",{attrs:{id:"decoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decoding"}},[e._v("#")]),e._v(" Decoding")]),e._v(" "),o("p",[e._v("Since "),o("code",[e._v("Msg")]),e._v(" types are packed into "),o("code",[e._v("Any")]),e._v(", decoding transactions messages are done by unpacking "),o("code",[e._v("Any")]),e._v("s into "),o("code",[e._v("Msg")]),e._v(" types. For more information, please refer to "),o("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html#transactions"}},[e._v("ADR-020")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"routing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),o("p",[e._v("We propose to add a "),o("code",[e._v("msg_service_router")]),e._v(" in BaseApp. This router is a key/value map which maps "),o("code",[e._v("Msg")]),e._v(" types' "),o("code",[e._v("type_url")]),e._v("s to their corresponding "),o("code",[e._v("Msg")]),e._v(" service method handler. Since there is a 1-to-1 mapping between "),o("code",[e._v("Msg")]),e._v(" types and "),o("code",[e._v("Msg")]),e._v(" service method, the "),o("code",[e._v("msg_service_router")]),e._v(" has exactly one entry per "),o("code",[e._v("Msg")]),e._v(" service method.")]),e._v(" "),o("p",[e._v("When a transaction is processed by BaseApp (in CheckTx or in DeliverTx), its "),o("code",[e._v("TxBody.messages")]),e._v(" are decoded as "),o("code",[e._v("Msg")]),e._v("s. Each "),o("code",[e._v("Msg")]),e._v("'s "),o("code",[e._v("type_url")]),e._v(" is matched against an entry in the "),o("code",[e._v("msg_service_router")]),e._v(", and the respective "),o("code",[e._v("Msg")]),e._v(" service method handler is called.")]),e._v(" "),o("p",[e._v("For backward compatability, the old handlers are not removed yet. If BaseApp receives a legacy "),o("code",[e._v("Msg")]),e._v(" with no correspoding entry in the "),o("code",[e._v("msg_service_router")]),e._v(", it will be routed via its legacy "),o("code",[e._v("Route()")]),e._v(" method into the legacy handler.")]),e._v(" "),o("h3",{attrs:{id:"module-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-configuration"}},[e._v("#")]),e._v(" Module Configuration")]),e._v(" "),o("p",[e._v("In "),o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")]),e._v(", we introduced a method "),o("code",[e._v("RegisterQueryService")]),e._v("\nto "),o("code",[e._v("AppModule")]),e._v(" which allows for modules to register gRPC queriers.")],1),e._v(" "),o("p",[e._v("To register "),o("code",[e._v("Msg")]),e._v(" services, we attempt a more extensible approach by converting "),o("code",[e._v("RegisterQueryService")]),e._v("\nto a more generic "),o("code",[e._v("RegisterServices")]),e._v(" method:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGUgaW50ZXJmYWNlIHsKICBSZWdpc3RlclNlcnZpY2VzKENvbmZpZ3VyYXRvcikKICAuLi4KfQoKdHlwZSBDb25maWd1cmF0b3IgaW50ZXJmYWNlIHsKICBRdWVyeVNlcnZlcigpIGdycGMuU2VydmVyCiAgTXNnU2VydmVyKCkgZ3JwYy5TZXJ2ZXIKfQoKLy8gZXhhbXBsZSBtb2R1bGU6CmZ1bmMgKGFtIEFwcE1vZHVsZSkgUmVnaXN0ZXJTZXJ2aWNlcyhjZmcgQ29uZmlndXJhdG9yKSB7Cgl0eXBlcy5SZWdpc3RlclF1ZXJ5U2VydmVyKGNmZy5RdWVyeVNlcnZlcigpLCBrZWVwZXIpCgl0eXBlcy5SZWdpc3Rlck1zZ1NlcnZlcihjZmcuTXNnU2VydmVyKCksIGtlZXBlcikKfQo="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("RegisterServices")]),e._v(" method and the "),o("code",[e._v("Configurator")]),e._v(" interface are intended to\nevolve to satisfy the use cases discussed in "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7093",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7093"),o("OutboundLink")],1),e._v("\nand "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7421",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7122"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("Msg")]),e._v(" services are registered, the framework "),o("em",[e._v("should")]),e._v(" verify that all "),o("code",[e._v("Msg")]),e._v(" types\nimplement the "),o("code",[e._v("sdk.Msg")]),e._v(" interface and throw an error during initialization rather\nthan later when transactions are processed.")]),e._v(" "),o("h3",{attrs:{id:"msg-service-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#msg-service-implementation"}},[e._v("#")]),e._v(" "),o("code",[e._v("Msg")]),e._v(" Service Implementation")]),e._v(" "),o("p",[e._v("Just like query services, "),o("code",[e._v("Msg")]),e._v(" service methods can retrieve the "),o("code",[e._v("sdk.Context")]),e._v("\nfrom the "),o("code",[e._v("context.Context")]),e._v(" parameter method using the "),o("code",[e._v("sdk.UnwrapSDKContext")]),e._v("\nmethod:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBnb3YKCmZ1bmMgKGsgS2VlcGVyKSBTdWJtaXRQcm9wb3NhbChnb0N0eCBjb250ZXh0LkNvbnRleHQsIHBhcmFtcyAqdHlwZXMuTXNnU3VibWl0UHJvcG9zYWwpICgqTXNnU3VibWl0UHJvcG9zYWxSZXNwb25zZSwgZXJyb3IpIHsKCWN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCkKICAgIC4uLgp9Cg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("sdk.Context")]),e._v(" should have an "),o("code",[e._v("EventManager")]),e._v(" already attached by BaseApp's "),o("code",[e._v("msg_service_router")]),e._v(".")]),e._v(" "),o("p",[e._v("Separate handler definition is no longer needed with this approach.")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("p",[e._v("This design changes how a module functionality is exposed and accessed. It deprecates the existing "),o("code",[e._v("Handler")]),e._v(" interface and "),o("code",[e._v("AppModule.Route")]),e._v(" in favor of "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffer Services"),o("OutboundLink")],1),e._v(" and Service Routing described above. This dramatically simplifies the code. We don't need to create handlers and keepers any more. Use of Protocol Buffer auto-generated clients clearly separates the communication interfaces between the module and a modules user. The control logic (aka handlers and keepers) is not exposed any more. A module interface can be seen as a black box accessible through a client API. It's worth to note that the client interfaces are also generated by Protocol Buffers.")]),e._v(" "),o("p",[e._v("This also allows us to change how we perform functional tests. Instead of mocking AppModules and Router, we will mock a client (server will stay hidden). More specifically: we will never mock "),o("code",[e._v("moduleA.MsgServer")]),e._v(" in "),o("code",[e._v("moduleB")]),e._v(", but rather "),o("code",[e._v("moduleA.MsgClient")]),e._v(". One can think about it as working with external services (eg DBs, or online servers...). We assume that the transmission between clients and servers is correctly handled by generated Protocol Buffers.")]),e._v(" "),o("p",[e._v('Finally, closing a module to client API opens desirable OCAP patterns discussed in ADR-033. Since server implementation and interface is hidden, nobody can hold "keepers"/servers and will be forced to relay on the client interface, which will drive developers for correct encapsulation and software engineering patterns.')]),e._v(" "),o("h3",{attrs:{id:"pros"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pros"}},[e._v("#")]),e._v(" Pros")]),e._v(" "),o("ul",[o("li",[e._v("communicates return type clearly")]),e._v(" "),o("li",[e._v("manual handler registration and return type marshaling is no longer needed, just implement the interface and register it")]),e._v(" "),o("li",[e._v("communication interface is automatically generated, the developer can now focus only on the state transition methods - this would improve the UX of "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7093",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7093"),o("OutboundLink")],1),e._v(" approach (1) if we chose to adopt that")]),e._v(" "),o("li",[e._v("generated client code could be useful for clients and tests")]),e._v(" "),o("li",[e._v("dramatically reduces and simplifies the code")])]),e._v(" "),o("h3",{attrs:{id:"cons"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cons"}},[e._v("#")]),e._v(" Cons")]),e._v(" "),o("ul",[o("li",[e._v("using "),o("code",[e._v("service")]),e._v(" definitions outside the context of gRPC could be confusing (but doesn’t violate the proto3 spec)")])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7122",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial Github Issue #7122"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#services",target:"_blank",rel:"noopener noreferrer"}},[e._v("proto 3 Language Guide: Defining Services"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.google.com/document/d/1eEgYgvgZqLE45vETjhwIw4VOqK-5hwQtZtjVbiXnIGc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial pre-"),o("code",[e._v("Any")]),e._v(" "),o("code",[e._v("Msg")]),e._v(" designs"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ADR 020")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")])],1)])],1)}),[],!1,null,null,null);t.default=r.exports}}]);