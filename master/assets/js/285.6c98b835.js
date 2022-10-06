(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{686:function(e,t,s){"use strict";s.r(t);var o=s(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"bech32-on-cosmos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bech32-on-cosmos"}},[e._v("#")]),e._v(" Bech32 on Cosmos")]),e._v(" "),s("p",[e._v("The Cosmos network prefers to use the Bech32 address format wherever users must handle binary data. Bech32 encoding provides robust integrity checks on data and the human readable part (HRP) provides contextual hints that can assist UI developers with providing informative error messages.")]),e._v(" "),s("p",[e._v("In the Cosmos network, keys and addresses may refer to a number of different roles in the network like accounts, validators etc.")]),e._v(" "),s("h2",{attrs:{id:"hrp-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hrp-table"}},[e._v("#")]),e._v(" HRP table")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("HRP")]),e._v(" "),s("th",[e._v("Definition")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("cosmos")]),e._v(" "),s("td",[e._v("Cosmos Account Address")])]),e._v(" "),s("tr",[s("td",[e._v("cosmosvalcons")]),e._v(" "),s("td",[e._v("Cosmos Validator Consensus Address")])]),e._v(" "),s("tr",[s("td",[e._v("cosmosvaloper")]),e._v(" "),s("td",[e._v("Cosmos Validator Operator Address")])])])]),e._v(" "),s("h2",{attrs:{id:"encoding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),s("p",[e._v("While all user facing interfaces to Cosmos software should exposed Bech32 interfaces, many internal interfaces encode binary value in hex or base64 encoded form.")]),e._v(" "),s("p",[e._v("To covert between other binary representation of addresses and keys, it is important to first apply the Amino encoding process before Bech32 encoding.")]),e._v(" "),s("p",[e._v("A complete implementation of the Amino serialization format is unnecessary in most cases. Simply prepending bytes from this "),s("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/blockchain/encoding.md#public-key-cryptography",target:"_blank",rel:"noopener noreferrer"}},[e._v("table"),s("OutboundLink")],1),e._v(" to the byte string payload before Bech32 encoding will sufficient for compatible representation.")])])}),[],!1,null,null,null);t.default=r.exports}}]);