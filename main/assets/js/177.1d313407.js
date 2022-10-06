(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{805:function(e,c,a){"use strict";a.r(c);var s=a(1),l=Object(s.a)({},(function(){var e=this,c=e.$createElement,a=e._self._c||c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keepers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepers"}},[e._v("#")]),e._v(" Keepers")]),e._v(" "),a("p",[e._v("The bank module provides these exported keeper interfaces that can be\npassed to other modules that read or update account balances. Modules\nshould use the least-permissive interface that provides the functionality they\nrequire.")]),e._v(" "),a("p",[e._v("Best practices dictate careful review of "),a("code",[e._v("bank")]),e._v(" module code to ensure that\npermissions are limited in the way that you expect.")]),e._v(" "),a("h2",{attrs:{id:"blocklisting-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocklisting-addresses"}},[e._v("#")]),e._v(" Blocklisting Addresses")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/bank")]),e._v(" module accepts a map of addresses that are considered blocklisted\nfrom directly and explicitly receiving funds through means such as "),a("code",[e._v("MsgSend")]),e._v(" and\n"),a("code",[e._v("MsgMultiSend")]),e._v(" and direct API calls like "),a("code",[e._v("SendCoinsFromModuleToAccount")]),e._v(".")]),e._v(" "),a("p",[e._v("Typically, these addresses are module accounts. If these addresses receive funds\noutside the expected rules of the state machine, invariants are likely to be\nbroken and could result in a halted network.")]),e._v(" "),a("p",[e._v("By providing the "),a("code",[e._v("x/bank")]),e._v(" module with a blocklisted set of addresses, an error occurs for the operation if a user or client attempts to directly or indirectly send funds to a blocklisted account, for example, by using "),a("a",{attrs:{href:"https://ibc.cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"common-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-types"}},[e._v("#")]),e._v(" Common Types")]),e._v(" "),a("h3",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[e._v("#")]),e._v(" Input")]),e._v(" "),a("p",[e._v("An input of a multiparty transfer")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gSW5wdXQgbW9kZWxzIHRyYW5zYWN0aW9uIGlucHV0LgptZXNzYWdlIElucHV0IHsKICBzdHJpbmcgICBhZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgPSAxOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBjb2lucyA9IDI7Cn0K"}}),e._v(" "),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),a("p",[e._v("An output of a multiparty transfer.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gT3V0cHV0IG1vZGVscyB0cmFuc2FjdGlvbiBvdXRwdXRzLgptZXNzYWdlIE91dHB1dCB7CiAgc3RyaW5nICAgYWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgID0gMTsKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gY29pbnMgPSAyOwp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"basekeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basekeeper"}},[e._v("#")]),e._v(" BaseKeeper")]),e._v(" "),a("p",[e._v("The base keeper provides full-permission access: the ability to arbitrary modify any account's balance and mint or burn coins.")]),e._v(" "),a("p",[e._v("Restricted permission to mint per module could be achieved by using baseKeeper with "),a("code",[e._v("WithMintCoinsRestriction")]),e._v(" to give specific restrictions to mint (e.g. only minting certain denom).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS2VlcGVyIGRlZmluZXMgYSBtb2R1bGUgaW50ZXJmYWNlIHRoYXQgZmFjaWxpdGF0ZXMgdGhlIHRyYW5zZmVyIG9mIGNvaW5zCi8vIGJldHdlZW4gYWNjb3VudHMuCnR5cGUgS2VlcGVyIGludGVyZmFjZSB7CiAgICBTZW5kS2VlcGVyCiAgICBXaXRoTWludENvaW5zUmVzdHJpY3Rpb24oTWludGluZ1Jlc3RyaWN0aW9uRm4pIEJhc2VLZWVwZXIKCiAgICBJbml0R2VuZXNpcyhzZGsuQ29udGV4dCwgKnR5cGVzLkdlbmVzaXNTdGF0ZSkKICAgIEV4cG9ydEdlbmVzaXMoc2RrLkNvbnRleHQpICp0eXBlcy5HZW5lc2lzU3RhdGUKCiAgICBHZXRTdXBwbHkoY3R4IHNkay5Db250ZXh0LCBkZW5vbSBzdHJpbmcpIHNkay5Db2luCiAgICBIYXNTdXBwbHkoY3R4IHNkay5Db250ZXh0LCBkZW5vbSBzdHJpbmcpIGJvb2wKICAgIEdldFBhZ2luYXRlZFRvdGFsU3VwcGx5KGN0eCBzZGsuQ29udGV4dCwgcGFnaW5hdGlvbiAqcXVlcnkuUGFnZVJlcXVlc3QpIChzZGsuQ29pbnMsICpxdWVyeS5QYWdlUmVzcG9uc2UsIGVycm9yKQogICAgSXRlcmF0ZVRvdGFsU3VwcGx5KGN0eCBzZGsuQ29udGV4dCwgY2IgZnVuYyhzZGsuQ29pbikgYm9vbCkKICAgIEdldERlbm9tTWV0YURhdGEoY3R4IHNkay5Db250ZXh0LCBkZW5vbSBzdHJpbmcpICh0eXBlcy5NZXRhZGF0YSwgYm9vbCkKICAgIEhhc0Rlbm9tTWV0YURhdGEoY3R4IHNkay5Db250ZXh0LCBkZW5vbSBzdHJpbmcpIGJvb2wKICAgIFNldERlbm9tTWV0YURhdGEoY3R4IHNkay5Db250ZXh0LCBkZW5vbU1ldGFEYXRhIHR5cGVzLk1ldGFkYXRhKQogICAgSXRlcmF0ZUFsbERlbm9tTWV0YURhdGEoY3R4IHNkay5Db250ZXh0LCBjYiBmdW5jKHR5cGVzLk1ldGFkYXRhKSBib29sKQoKICAgIFNlbmRDb2luc0Zyb21Nb2R1bGVUb0FjY291bnQoY3R4IHNkay5Db250ZXh0LCBzZW5kZXJNb2R1bGUgc3RyaW5nLCByZWNpcGllbnRBZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgogICAgU2VuZENvaW5zRnJvbU1vZHVsZVRvTW9kdWxlKGN0eCBzZGsuQ29udGV4dCwgc2VuZGVyTW9kdWxlLCByZWNpcGllbnRNb2R1bGUgc3RyaW5nLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgogICAgU2VuZENvaW5zRnJvbUFjY291bnRUb01vZHVsZShjdHggc2RrLkNvbnRleHQsIHNlbmRlckFkZHIgc2RrLkFjY0FkZHJlc3MsIHJlY2lwaWVudE1vZHVsZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCiAgICBEZWxlZ2F0ZUNvaW5zRnJvbUFjY291bnRUb01vZHVsZShjdHggc2RrLkNvbnRleHQsIHNlbmRlckFkZHIgc2RrLkFjY0FkZHJlc3MsIHJlY2lwaWVudE1vZHVsZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCiAgICBVbmRlbGVnYXRlQ29pbnNGcm9tTW9kdWxlVG9BY2NvdW50KGN0eCBzZGsuQ29udGV4dCwgc2VuZGVyTW9kdWxlIHN0cmluZywgcmVjaXBpZW50QWRkciBzZGsuQWNjQWRkcmVzcywgYW10IHNkay5Db2lucykgZXJyb3IKICAgIE1pbnRDb2lucyhjdHggc2RrLkNvbnRleHQsIG1vZHVsZU5hbWUgc3RyaW5nLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgogICAgQnVybkNvaW5zKGN0eCBzZGsuQ29udGV4dCwgbW9kdWxlTmFtZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCgogICAgRGVsZWdhdGVDb2lucyhjdHggc2RrLkNvbnRleHQsIGRlbGVnYXRvckFkZHIsIG1vZHVsZUFjY0FkZHIgc2RrLkFjY0FkZHJlc3MsIGFtdCBzZGsuQ29pbnMpIGVycm9yCiAgICBVbmRlbGVnYXRlQ29pbnMoY3R4IHNkay5Db250ZXh0LCBtb2R1bGVBY2NBZGRyLCBkZWxlZ2F0b3JBZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoKICAgIC8vIEdldEF1dGhvcml0eSBnZXRzIHRoZSBhZGRyZXNzIGNhcGFibGUgb2YgZXhlY3V0aW5nIGdvdmVybmFuY2UgcHJvcG9zYWwgbWVzc2FnZXMuIFVzdWFsbHkgdGhlIGdvdiBtb2R1bGUgYWNjb3VudC4KICAgIEdldEF1dGhvcml0eSgpIHN0cmluZwoKICAgIHR5cGVzLlF1ZXJ5U2VydmVyCn0K"}}),e._v(" "),a("h2",{attrs:{id:"sendkeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendkeeper"}},[e._v("#")]),e._v(" SendKeeper")]),e._v(" "),a("p",[e._v("The send keeper provides access to account balances and the ability to transfer coins between\naccounts. The send keeper does not alter the total supply (mint or burn coins).")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2VuZEtlZXBlciBkZWZpbmVzIGEgbW9kdWxlIGludGVyZmFjZSB0aGF0IGZhY2lsaXRhdGVzIHRoZSB0cmFuc2ZlciBvZiBjb2lucwovLyBiZXR3ZWVuIGFjY291bnRzIHdpdGhvdXQgdGhlIHBvc3NpYmlsaXR5IG9mIGNyZWF0aW5nIGNvaW5zLgp0eXBlIFNlbmRLZWVwZXIgaW50ZXJmYWNlIHsKICAgIFZpZXdLZWVwZXIKCiAgICBJbnB1dE91dHB1dENvaW5zKGN0eCBzZGsuQ29udGV4dCwgaW5wdXRzIFtddHlwZXMuSW5wdXQsIG91dHB1dHMgW110eXBlcy5PdXRwdXQpIGVycm9yCiAgICBTZW5kQ29pbnMoY3R4IHNkay5Db250ZXh0LCBmcm9tQWRkciBzZGsuQWNjQWRkcmVzcywgdG9BZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoKICAgIEdldFBhcmFtcyhjdHggc2RrLkNvbnRleHQpIHR5cGVzLlBhcmFtcwogICAgU2V0UGFyYW1zKGN0eCBzZGsuQ29udGV4dCwgcGFyYW1zIHR5cGVzLlBhcmFtcykgZXJyb3IKCiAgICBJc1NlbmRFbmFibGVkRGVub20oY3R4IHNkay5Db250ZXh0LCBkZW5vbSBzdHJpbmcpIGJvb2wKICAgIFNldFNlbmRFbmFibGVkKGN0eCBzZGsuQ29udGV4dCwgZGVub20gc3RyaW5nLCB2YWx1ZSBib29sKQogICAgU2V0QWxsU2VuZEVuYWJsZWQoY3R4IHNkay5Db250ZXh0LCBzZW5kRW5hYmxlZHMgW10qdHlwZXMuU2VuZEVuYWJsZWQpCiAgICBEZWxldGVTZW5kRW5hYmxlZChjdHggc2RrLkNvbnRleHQsIGRlbm9tIHN0cmluZykKICAgIEl0ZXJhdGVTZW5kRW5hYmxlZEVudHJpZXMoY3R4IHNkay5Db250ZXh0LCBjYiBmdW5jKGRlbm9tIHN0cmluZywgc2VuZEVuYWJsZWQgYm9vbCkgKHN0b3AgYm9vbCkpCiAgICBHZXRBbGxTZW5kRW5hYmxlZEVudHJpZXMoY3R4IHNkay5Db250ZXh0KSBbXXR5cGVzLlNlbmRFbmFibGVkCgogICAgSXNTZW5kRW5hYmxlZENvaW4oY3R4IHNkay5Db250ZXh0LCBjb2luIHNkay5Db2luKSBib29sCiAgICBJc1NlbmRFbmFibGVkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBjb2lucyAuLi5zZGsuQ29pbikgZXJyb3IKCiAgICBCbG9ja2VkQWRkcihhZGRyIHNkay5BY2NBZGRyZXNzKSBib29sCn0K"}}),e._v(" "),a("h2",{attrs:{id:"viewkeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewkeeper"}},[e._v("#")]),e._v(" ViewKeeper")]),e._v(" "),a("p",[e._v("The view keeper provides read-only access to account balances. The view keeper does not have balance alteration functionality. All balance lookups are "),a("code",[e._v("O(1)")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmlld0tlZXBlciBkZWZpbmVzIGEgbW9kdWxlIGludGVyZmFjZSB0aGF0IGZhY2lsaXRhdGVzIHJlYWQgb25seSBhY2Nlc3MgdG8KLy8gYWNjb3VudCBiYWxhbmNlcy4KdHlwZSBWaWV3S2VlcGVyIGludGVyZmFjZSB7CiAgICBWYWxpZGF0ZUJhbGFuY2UoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBlcnJvcgogICAgSGFzQmFsYW5jZShjdHggc2RrLkNvbnRleHQsIGFkZHIgc2RrLkFjY0FkZHJlc3MsIGFtdCBzZGsuQ29pbikgYm9vbAoKICAgIEdldEFsbEJhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgc2RrLkNvaW5zCiAgICBHZXRBY2NvdW50c0JhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCkgW110eXBlcy5CYWxhbmNlCiAgICBHZXRCYWxhbmNlKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcywgZGVub20gc3RyaW5nKSBzZGsuQ29pbgogICAgTG9ja2VkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBzZGsuQ29pbnMKICAgIFNwZW5kYWJsZUNvaW5zKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgc2RrLkNvaW5zCiAgICBTcGVuZGFibGVDb2luKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcywgZGVub20gc3RyaW5nKSBzZGsuQ29pbgoKICAgIEl0ZXJhdGVBY2NvdW50QmFsYW5jZXMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzLCBjYiBmdW5jKGNvaW4gc2RrLkNvaW4pIChzdG9wIGJvb2wpKQogICAgSXRlcmF0ZUFsbEJhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCwgY2IgZnVuYyhhZGRyZXNzIHNkay5BY2NBZGRyZXNzLCBjb2luIHNkay5Db2luKSAoc3RvcCBib29sKSkKfQo="}})],1)}),[],!1,null,null,null);c.default=l.exports}}]);