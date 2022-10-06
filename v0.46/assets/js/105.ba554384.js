(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{632:function(e,t,o){"use strict";o.r(t);var s=o(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-044-guidelines-for-updating-protobuf-definitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-044-guidelines-for-updating-protobuf-definitions"}},[e._v("#")]),e._v(" ADR 044: Guidelines for Updating Protobuf Definitions")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("28.06.2021: Initial Draft")]),e._v(" "),o("li",[e._v("02.12.2021: Add "),o("code",[e._v("Since:")]),e._v(" comment for new fields")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Draft")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("This ADR provides guidelines and recommended practices when updating Protobuf definitions. These guidelines are targeting module developers.")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("The Cosmos SDK maintains a set of "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/main/proto/cosmos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf definitions"),o("OutboundLink")],1),e._v(". It is important to correctly design Protobuf definitions to avoid any breaking changes within the same version. The reasons are to not break tooling (including indexers and explorers), wallets and other third-party integrations.")]),e._v(" "),o("p",[e._v("When making changes to these Protobuf definitions, the Cosmos SDK currently only follows "),o("a",{attrs:{href:"https://docs.buf.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf's"),o("OutboundLink")],1),e._v(" recommendations. We noticed however that Buf's recommendations might still result in breaking changes in the SDK in some cases. For example:")]),e._v(" "),o("ul",[o("li",[e._v("Adding fields to "),o("code",[e._v("Msg")]),e._v("s. Adding fields is a not a Protobuf spec-breaking operation. However, when adding new fields to "),o("code",[e._v("Msg")]),e._v("s, the unknown field rejection will throw an error when sending the new "),o("code",[e._v("Msg")]),e._v(" to an older node.")]),e._v(" "),o("li",[e._v("Marking fields as "),o("code",[e._v("reserved")]),e._v(". Protobuf proposes the "),o("code",[e._v("reserved")]),e._v(" keyword for removing fields without the need to bump the package version. However, by doing so, client backwards compatibility is broken as Protobuf doesn't generate anything for "),o("code",[e._v("reserved")]),e._v(" fields. See "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/9446",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9446"),o("OutboundLink")],1),e._v(" for more details on this issue.")])]),e._v(" "),o("p",[e._v('Moreover, module developers often face other questions around Protobuf definitions such as "Can I rename a field?" or "Can I deprecate a field?" This ADR aims to answer all these questions by providing clear guidelines about allowed updates for Protobuf definitions.')]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("We decide to keep "),o("a",{attrs:{href:"https://docs.buf.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf's"),o("OutboundLink")],1),e._v(" recommendations with the following exceptions:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("UNARY_RPC")]),e._v(": the Cosmos SDK currently does not support streaming RPCs.")]),e._v(" "),o("li",[o("code",[e._v("COMMENT_FIELD")]),e._v(": the Cosmos SDK allows fields with no comments.")]),e._v(" "),o("li",[o("code",[e._v("SERVICE_SUFFIX")]),e._v(": we use the "),o("code",[e._v("Query")]),e._v(" and "),o("code",[e._v("Msg")]),e._v(" service naming convention, which doesn't use the "),o("code",[e._v("-Service")]),e._v(" suffix.")]),e._v(" "),o("li",[o("code",[e._v("PACKAGE_VERSION_SUFFIX")]),e._v(": some packages, such as "),o("code",[e._v("cosmos.crypto.ed25519")]),e._v(", don't use a version suffix.")]),e._v(" "),o("li",[o("code",[e._v("RPC_REQUEST_STANDARD_NAME")]),e._v(": Requests for the "),o("code",[e._v("Msg")]),e._v(" service don't have the "),o("code",[e._v("-Request")]),e._v(" suffix to keep backwards compatibility.")])]),e._v(" "),o("p",[e._v("On top of Buf's recommendations we add the following guidelines that are specific to the Cosmos SDK.")]),e._v(" "),o("h3",{attrs:{id:"updating-protobuf-definition-without-bumping-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-protobuf-definition-without-bumping-version"}},[e._v("#")]),e._v(" Updating Protobuf Definition Without Bumping Version")]),e._v(" "),o("h4",{attrs:{id:"_1-msgs-must-not-have-new-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-msgs-must-not-have-new-fields"}},[e._v("#")]),e._v(" 1. "),o("code",[e._v("Msg")]),e._v("s MUST NOT have new fields")]),e._v(" "),o("p",[e._v("When processing "),o("code",[e._v("Msg")]),e._v("s, the Cosmos SDK's antehandlers are strict and don't allow unknown fields in "),o("code",[e._v("Msg")]),e._v("s. This is checked by the unknown field rejection in the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/codec/unknownproto",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("codec/unknownproto")]),e._v(" package"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Now imagine a v0.43 node accepting a "),o("code",[e._v("MsgExample")]),e._v(" transaction, and in v0.44 the chain developer decides to add a field to "),o("code",[e._v("MsgExample")]),e._v(". A client developer, which only manipulates Protobuf definitions, would see that "),o("code",[e._v("MsgExample")]),e._v(" has a new field, and will populate it. However, sending the new "),o("code",[e._v("MsgExample")]),e._v(" to an old v0.43 node would cause the v0.43 node to reject the "),o("code",[e._v("MsgExample")]),e._v(" because of the unknown field. The expectation that the same Protobuf version can be used across multiple node versions MUST be guaranteed.")]),e._v(" "),o("p",[e._v("For this reason, module developers MUST NOT add new fields to existing "),o("code",[e._v("Msg")]),e._v("s.")]),e._v(" "),o("p",[e._v("It is worth mentioning that this does not limit adding fields to a "),o("code",[e._v("Msg")]),e._v(", but also to all nested structs and "),o("code",[e._v("Any")]),e._v("s inside a "),o("code",[e._v("Msg")]),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"_2-non-msg-related-protobuf-definitions-may-have-new-fields-but-must-add-a-since-comment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-non-msg-related-protobuf-definitions-may-have-new-fields-but-must-add-a-since-comment"}},[e._v("#")]),e._v(" 2. Non-"),o("code",[e._v("Msg")]),e._v("-related Protobuf definitions MAY have new fields, but MUST add a "),o("code",[e._v("Since:")]),e._v(" comment")]),e._v(" "),o("p",[e._v("On the other hand, module developers MAY add new fields to Protobuf definitions related to the "),o("code",[e._v("Query")]),e._v(" service or to objects which are saved in the store. This recommendation follows the Protobuf specification, but is added in this document for clarity.")]),e._v(" "),o("p",[e._v("The SDK requires the Protobuf comment of the new field to contain one line with the following format:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gU2luY2U6IGNvc21vcy1zZGsgJmx0O3ZlcnNpb24mZ3Q7eywgJmx0O3ZlcnNpb24mZ3Q7Li4ufQo="}}),e._v(" "),o("p",[e._v("Where each "),o("code",[e._v("version")]),e._v(' denotes a minor ("0.45") or patch ("0.44.5") version from which the field is available. This will greatly help client libraries, who can optionally use reflection or custom code generation to show/hide these fields depending on the targetted node version.')]),e._v(" "),o("p",[e._v("As examples, the following comments are valid:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gU2luY2U6IGNvc21vcy1zZGsgMC40NAoKLy8gU2luY2U6IGNvc21vcy1zZGsgMC40Mi4xMSwgMC40NC41Cg=="}}),e._v(" "),o("p",[e._v("and the following ones are NOT valid:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gU2luY2UgY29zbW9zLXNkayB2MC40NAoKLy8gc2luY2U6IGNvc21vcy1zZGsgMC40NAoKLy8gU2luY2U6IGNvc21vcy1zZGsgMC40Mi4xMSAwLjQ0LjUKCi8vIFNpbmNlOiBDb3Ntb3MgU0RLIDAuNDIuMTEsIDAuNDQuNQo="}}),e._v(" "),o("h4",{attrs:{id:"_3-fields-may-be-marked-as-deprecated-and-nodes-may-implement-a-protocol-breaking-change-for-handling-these-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-fields-may-be-marked-as-deprecated-and-nodes-may-implement-a-protocol-breaking-change-for-handling-these-fields"}},[e._v("#")]),e._v(" 3. Fields MAY be marked as "),o("code",[e._v("deprecated")]),e._v(", and nodes MAY implement a protocol-breaking change for handling these fields")]),e._v(" "),o("p",[e._v("Protobuf supports the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto#options",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("deprecated")]),e._v(" field option"),o("OutboundLink")],1),e._v(", and this option MAY be used on any field, including "),o("code",[e._v("Msg")]),e._v(" fields. If a node handles a Protobuf message with a non-empty deprecated field, the node MAY change its behavior upon processing it, even in a protocol-breaking way. When possible, the node MUST handle backwards compatibility without breaking the consensus (unless we increment the proto version).")]),e._v(" "),o("p",[e._v("As an example, the Cosmos SDK v0.42 to v0.43 update contained two Protobuf-breaking changes, listed below. Instead of bumping the package versions from "),o("code",[e._v("v1beta1")]),e._v(" to "),o("code",[e._v("v1")]),e._v(", the SDK team decided to follow this guideline, by reverting the breaking changes, marking those changes as deprecated, and modifying the node implementation when processing messages with deprecated fields. More specifically:")]),e._v(" "),o("ul",[o("li",[e._v("The Cosmos SDK recently removed support for "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/8849",target:"_blank",rel:"noopener noreferrer"}},[e._v("time-based software upgrades"),o("OutboundLink")],1),e._v(". As such, the "),o("code",[e._v("time")]),e._v(" field has been marked as deprecated in "),o("code",[e._v("cosmos.upgrade.v1beta1.Plan")]),e._v(". Moreover, the node will reject any proposal containing an upgrade Plan whose "),o("code",[e._v("time")]),e._v(" field is non-empty.")]),e._v(" "),o("li",[e._v("The Cosmos SDK now supports "),o("RouterLink",{attrs:{to:"/architecture/adr-037-gov-split-vote.html"}},[e._v("governance split votes")]),e._v(". When querying for votes, the returned "),o("code",[e._v("cosmos.gov.v1beta1.Vote")]),e._v(" message has its "),o("code",[e._v("option")]),e._v(" field (used for 1 vote option) deprecated in favor of its "),o("code",[e._v("options")]),e._v(" field (allowing multiple vote options). Whenever possible, the SDK still populates the deprecated "),o("code",[e._v("option")]),e._v(" field, that is, if and only if the "),o("code",[e._v("len(options) == 1")]),e._v(" and "),o("code",[e._v("options[0].Weight == 1.0")]),e._v(".")],1)]),e._v(" "),o("h4",{attrs:{id:"_4-fields-must-not-be-renamed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-fields-must-not-be-renamed"}},[e._v("#")]),e._v(" 4. Fields MUST NOT be renamed")]),e._v(" "),o("p",[e._v("Whereas the official Protobuf recommendations do not prohibit renaming fields, as it does not break the Protobuf binary representation, the SDK explicitly forbids renaming fields in Protobuf structs. The main reason for this choice is to avoid introducing breaking changes for clients, which often rely on hard-coded fields from generated types. Moreover, renaming fields will lead to client-breaking JSON representations of Protobuf definitions, used in REST endpoints and in the CLI.")]),e._v(" "),o("h3",{attrs:{id:"incrementing-protobuf-package-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#incrementing-protobuf-package-version"}},[e._v("#")]),e._v(" Incrementing Protobuf Package Version")]),e._v(" "),o("p",[e._v("TODO, needs architecture review. Some topics:")]),e._v(" "),o("ul",[o("li",[e._v("Bumping versions frequency")]),e._v(" "),o("li",[e._v("When bumping versions, should the Cosmos SDK support both versions?\n"),o("ul",[o("li",[e._v("i.e. v1beta1 -> v1, should we have two folders in the Cosmos SDK, and handlers for both versions?")])])]),e._v(" "),o("li",[e._v("mention ADR-023 Protobuf naming")])]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("blockquote",[o("p",[e._v('This section describes the resulting context, after applying the decision. All consequences should be listed here, not just the "positive" ones. A particular decision may have positive, negative, and neutral consequences, but all of them affect the team and project in the future.')])]),e._v(" "),o("h3",{attrs:{id:"backwards-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),o("blockquote",[o("p",[e._v("All ADRs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The ADR must explain how the author proposes to deal with these incompatibilities. ADR submissions without a sufficient backwards compatibility treatise may be rejected outright.")])]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("less pain to tool developers")]),e._v(" "),o("li",[e._v("more compatibility in the ecosystem")]),e._v(" "),o("li",[e._v("...")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("p"),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("ul",[o("li",[e._v("more rigor in Protobuf review")])]),e._v(" "),o("h2",{attrs:{id:"further-discussions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),o("p",[e._v('This ADR is still in the DRAFT stage, and the "Incrementing Protobuf Package Version" will be filled in once we make a decision on how to correctly do it.')]),e._v(" "),o("h2",{attrs:{id:"test-cases-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-cases-optional"}},[e._v("#")]),e._v(" Test Cases [optional]")]),e._v(" "),o("p",[e._v("Test cases for an implementation are mandatory for ADRs that are affecting consensus changes. Other ADRs can choose to include links to test cases if applicable.")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/9445",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9445"),o("OutboundLink")],1),e._v(" Release proto definitions v1")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/9446",target:"_blank",rel:"noopener noreferrer"}},[e._v("#9446"),o("OutboundLink")],1),e._v(" Address v1beta1 proto breaking changes")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);