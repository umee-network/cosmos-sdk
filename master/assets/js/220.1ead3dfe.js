(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{800:function(c,b,g){"use strict";g.r(b);var o=g(1),v=Object(o.a)({},(function(){var c=this,b=c.$createElement,g=c._self._c||b;return g("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[g("h1",{attrs:{id:"messages"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[c._v("#")]),c._v(" Messages")]),c._v(" "),g("h2",{attrs:{id:"proposal-submission"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#proposal-submission"}},[c._v("#")]),c._v(" Proposal Submission")]),c._v(" "),g("p",[c._v("Proposals can be submitted by any account via a "),g("code",[c._v("MsgSubmitProposal")]),c._v("\ntransaction.")]),c._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnU3VibWl0UHJvcG9zYWwgZGVmaW5lcyBhbiBzZGsuTXNnIHR5cGUgdGhhdCBzdXBwb3J0cyBzdWJtaXR0aW5nIGFyYml0cmFyeQovLyBwcm9wb3NhbCBDb250ZW50LgptZXNzYWdlIE1zZ1N1Ym1pdFByb3Bvc2FsIHsKICBvcHRpb24gKGNvc21vcy5tc2cudjEuc2lnbmVyKSA9ICZxdW90O3Byb3Bvc2VyJnF1b3Q7OwoKICByZXBlYXRlZCBnb29nbGUucHJvdG9idWYuQW55IG1lc3NhZ2VzICAgICAgICAgICAgID0gMTsKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gaW5pdGlhbF9kZXBvc2l0ID0gMiBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CiAgc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2VyICAgICAgICA9IDMgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIGF0dGFjaGVkIHRvIHRoZSBwcm9wb3NhbC4KICBzdHJpbmcgbWV0YWRhdGEgPSA0Owp9"}})],1),c._v(" "),g("p",[c._v("All "),g("code",[c._v("sdk.Msgs")]),c._v(" passed into the "),g("code",[c._v("messages")]),c._v(" field of a "),g("code",[c._v("MsgSubmitProposal")]),c._v(" message\nmust be registered in the app's "),g("code",[c._v("MsgServiceRouter")]),c._v(". Each of these messages must\nhave one signer, namely the gov module account. And finally, the metadata length\nmust not be larger than the "),g("code",[c._v("maxMetadataLen")]),c._v(" config passed into the gov keeper.")]),c._v(" "),g("p",[g("strong",[c._v("State modifications:")])]),c._v(" "),g("ul",[g("li",[c._v("Generate new "),g("code",[c._v("proposalID")])]),c._v(" "),g("li",[c._v("Create new "),g("code",[c._v("Proposal")])]),c._v(" "),g("li",[c._v("Initialise "),g("code",[c._v("Proposal")]),c._v("'s attributes")]),c._v(" "),g("li",[c._v("Decrease balance of sender by "),g("code",[c._v("InitialDeposit")])]),c._v(" "),g("li",[c._v("If "),g("code",[c._v("MinDeposit")]),c._v(" is reached:\n"),g("ul",[g("li",[c._v("Push "),g("code",[c._v("proposalID")]),c._v(" in "),g("code",[c._v("ProposalProcessingQueue")])])])]),c._v(" "),g("li",[c._v("Transfer "),g("code",[c._v("InitialDeposit")]),c._v(" from the "),g("code",[c._v("Proposer")]),c._v(" to the governance "),g("code",[c._v("ModuleAccount")])])]),c._v(" "),g("p",[c._v("A "),g("code",[c._v("MsgSubmitProposal")]),c._v(" transaction can be handled according to the following\npseudocode.")]),c._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUFNFVURPQ09ERSAvLwovLyBDaGVjayBpZiBNc2dTdWJtaXRQcm9wb3NhbCBpcyB2YWxpZC4gSWYgaXQgaXMsIGNyZWF0ZSBwcm9wb3NhbCAvLwoKdXBvbiByZWNlaXZpbmcgdHhHb3ZTdWJtaXRQcm9wb3NhbCBmcm9tIHNlbmRlciBkbwoKICBpZiAhY29ycmVjdGx5Rm9ybWF0dGVkKHR4R292U3VibWl0UHJvcG9zYWwpCiAgICAvLyBjaGVjayBpZiBwcm9wb3NhbCBpcyBjb3JyZWN0bHkgZm9ybWF0dGVkIGFuZCB0aGUgbWVzc2FnZXMgaGF2ZSByb3V0ZXMgdG8gb3RoZXIgbW9kdWxlcy4gSW5jbHVkZXMgZmVlIHBheW1lbnQuCiAgICAvLyBjaGVjayBpZiBhbGwgbWVzc2FnZXMnIHVuaXF1ZSBTaWduZXIgaXMgdGhlIGdvdiBhY2N0LgogICAgLy8gY2hlY2sgaWYgdGhlIG1ldGFkYXRhIGlzIG5vdCB0b28gbG9uZy4KICAgIHRocm93CgogIGluaXRpYWxEZXBvc2l0ID0gdHhHb3ZTdWJtaXRQcm9wb3NhbC5Jbml0aWFsRGVwb3NpdAogIGlmIChpbml0aWFsRGVwb3NpdC5BdG9tcyAmbHQ7PSAwKSBPUiAoc2VuZGVyLkF0b21CYWxhbmNlICZsdDsgaW5pdGlhbERlcG9zaXQuQXRvbXMpCiAgICAvLyBJbml0aWFsRGVwb3NpdCBpcyBuZWdhdGl2ZSBvciBudWxsIE9SIHNlbmRlciBoYXMgaW5zdWZmaWNpZW50IGZ1bmRzCiAgICB0aHJvdwoKICBpZiAodHhHb3ZTdWJtaXRQcm9wb3NhbC5UeXBlICE9IFByb3Bvc2FsVHlwZVBsYWluVGV4dCkgT1IgKHR4R292U3VibWl0UHJvcG9zYWwuVHlwZSAhPSBQcm9wb3NhbFR5cGVTb2Z0d2FyZVVwZ3JhZGUpCgogIHNlbmRlci5BdG9tQmFsYW5jZSAtPSBpbml0aWFsRGVwb3NpdC5BdG9tcwoKICBkZXBvc2l0UGFyYW0gPSBsb2FkKEdsb2JhbFBhcmFtcywgJ0RlcG9zaXRQYXJhbScpCgogIHByb3Bvc2FsSUQgPSBnZW5lcmF0ZSBuZXcgcHJvcG9zYWxJRAogIHByb3Bvc2FsID0gTmV3UHJvcG9zYWwoKQoKICBwcm9wb3NhbC5NZXNzYWdlcyA9IHR4R292U3VibWl0UHJvcG9zYWwuTWVzc2FnZXMKICBwcm9wb3NhbC5NZXRhZGF0YSA9IHR4R292U3VibWl0UHJvcG9zYWwuTWV0YWRhdGEKICBwcm9wb3NhbC5Ub3RhbERlcG9zaXQgPSBpbml0aWFsRGVwb3NpdAogIHByb3Bvc2FsLlN1Ym1pdFRpbWUgPSAmbHQ7Q3VycmVudFRpbWUmZ3Q7CiAgcHJvcG9zYWwuRGVwb3NpdEVuZFRpbWUgPSAmbHQ7Q3VycmVudFRpbWUmZ3Q7LkFkZChkZXBvc2l0UGFyYW0uTWF4RGVwb3NpdFBlcmlvZCkKICBwcm9wb3NhbC5EZXBvc2l0cy5hcHBlbmQoe2luaXRpYWxEZXBvc2l0LCBzZW5kZXJ9KQogIHByb3Bvc2FsLlN1Ym1pdHRlciA9IHNlbmRlcgogIHByb3Bvc2FsLlllc1ZvdGVzID0gMAogIHByb3Bvc2FsLk5vVm90ZXMgPSAwCiAgcHJvcG9zYWwuTm9XaXRoVmV0b1ZvdGVzID0gMAogIHByb3Bvc2FsLkFic3RhaW5Wb3RlcyA9IDAKICBwcm9wb3NhbC5DdXJyZW50U3RhdHVzID0gUHJvcG9zYWxTdGF0dXNPcGVuCgogIHN0b3JlKFByb3Bvc2FscywgJmx0O3Byb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDssIHByb3Bvc2FsKSAvLyBTdG9yZSBwcm9wb3NhbCBpbiBQcm9wb3NhbHMgbWFwcGluZwogIHJldHVybiBwcm9wb3NhbElECg=="}}),c._v(" "),g("h2",{attrs:{id:"deposit"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[c._v("#")]),c._v(" Deposit")]),c._v(" "),g("p",[c._v("Once a proposal is submitted, if\n"),g("code",[c._v("Proposal.TotalDeposit < ActiveParam.MinDeposit")]),c._v(", Atom holders can send\n"),g("code",[c._v("MsgDeposit")]),c._v(" transactions to increase the proposal's deposit.")]),c._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRGVwb3NpdCBkZWZpbmVzIGEgbWVzc2FnZSB0byBzdWJtaXQgYSBkZXBvc2l0IHRvIGFuIGV4aXN0aW5nIHByb3Bvc2FsLgptZXNzYWdlIE1zZ0RlcG9zaXQgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7ZGVwb3NpdG9yJnF1b3Q7OwoKICB1aW50NjQgICBwcm9wb3NhbF9pZCAgICAgICAgICAgICAgICAgICAgID0gMSBbKGdvZ29wcm90by5qc29udGFnKSA9ICZxdW90O3Byb3Bvc2FsX2lkJnF1b3Q7XTsKICBzdHJpbmcgICBkZXBvc2l0b3IgICAgICAgICAgICAgICAgICAgICAgID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgPSAzIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKfQ=="}})],1),c._v(" "),g("p",[g("strong",[c._v("State modifications:")])]),c._v(" "),g("ul",[g("li",[c._v("Decrease balance of sender by "),g("code",[c._v("deposit")])]),c._v(" "),g("li",[c._v("Add "),g("code",[c._v("deposit")]),c._v(" of sender in "),g("code",[c._v("proposal.Deposits")])]),c._v(" "),g("li",[c._v("Increase "),g("code",[c._v("proposal.TotalDeposit")]),c._v(" by sender's "),g("code",[c._v("deposit")])]),c._v(" "),g("li",[c._v("If "),g("code",[c._v("MinDeposit")]),c._v(" is reached:\n"),g("ul",[g("li",[c._v("Push "),g("code",[c._v("proposalID")]),c._v(" in "),g("code",[c._v("ProposalProcessingQueueEnd")])])])]),c._v(" "),g("li",[c._v("Transfer "),g("code",[c._v("Deposit")]),c._v(" from the "),g("code",[c._v("proposer")]),c._v(" to the governance "),g("code",[c._v("ModuleAccount")])])]),c._v(" "),g("p",[c._v("A "),g("code",[c._v("MsgDeposit")]),c._v(" transaction has to go through a number of checks to be valid.\nThese checks are outlined in the following pseudocode.")]),c._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUFNFVURPQ09ERSAvLwovLyBDaGVjayBpZiBNc2dEZXBvc2l0IGlzIHZhbGlkLiBJZiBpdCBpcywgaW5jcmVhc2UgZGVwb3NpdCBhbmQgY2hlY2sgaWYgTWluRGVwb3NpdCBpcyByZWFjaGVkCgp1cG9uIHJlY2VpdmluZyB0eEdvdkRlcG9zaXQgZnJvbSBzZW5kZXIgZG8KICAvLyBjaGVjayBpZiBwcm9wb3NhbCBpcyBjb3JyZWN0bHkgZm9ybWF0dGVkLiBJbmNsdWRlcyBmZWUgcGF5bWVudC4KCiAgaWYgIWNvcnJlY3RseUZvcm1hdHRlZCh0eEdvdkRlcG9zaXQpCiAgICB0aHJvdwoKICBwcm9wb3NhbCA9IGxvYWQoUHJvcG9zYWxzLCAmbHQ7dHhHb3ZEZXBvc2l0LlByb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDspIC8vIHByb3Bvc2FsIGlzIGEgY29uc3Qga2V5LCBwcm9wb3NhbElEIGlzIHZhcmlhYmxlCgogIGlmIChwcm9wb3NhbCA9PSBuaWwpCiAgICAvLyBUaGVyZSBpcyBubyBwcm9wb3NhbCBmb3IgdGhpcyBwcm9wb3NhbElECiAgICB0aHJvdwoKICBpZiAodHhHb3ZEZXBvc2l0LkRlcG9zaXQuQXRvbXMgJmx0Oz0gMCkgT1IgKHNlbmRlci5BdG9tQmFsYW5jZSAmbHQ7IHR4R292RGVwb3NpdC5EZXBvc2l0LkF0b21zKSBPUiAocHJvcG9zYWwuQ3VycmVudFN0YXR1cyAhPSBQcm9wb3NhbFN0YXR1c09wZW4pCgogICAgLy8gZGVwb3NpdCBpcyBuZWdhdGl2ZSBvciBudWxsCiAgICAvLyBPUiBzZW5kZXIgaGFzIGluc3VmZmljaWVudCBmdW5kcwogICAgLy8gT1IgcHJvcG9zYWwgaXMgbm90IG9wZW4gZm9yIGRlcG9zaXQgYW55bW9yZQoKICAgIHRocm93CgogIGRlcG9zaXRQYXJhbSA9IGxvYWQoR2xvYmFsUGFyYW1zLCAnRGVwb3NpdFBhcmFtJykKCiAgaWYgKEN1cnJlbnRCbG9jayAmZ3Q7PSBwcm9wb3NhbC5TdWJtaXRCbG9jayArIGRlcG9zaXRQYXJhbS5NYXhEZXBvc2l0UGVyaW9kKQogICAgcHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9IFByb3Bvc2FsU3RhdHVzQ2xvc2VkCgogIGVsc2UKICAgIC8vIHNlbmRlciBjYW4gZGVwb3NpdAogICAgc2VuZGVyLkF0b21CYWxhbmNlIC09IHR4R292RGVwb3NpdC5EZXBvc2l0LkF0b21zCgogICAgcHJvcG9zYWwuRGVwb3NpdHMuYXBwZW5kKHt0eEdvdlZvdGUuRGVwb3NpdCwgc2VuZGVyfSkKICAgIHByb3Bvc2FsLlRvdGFsRGVwb3NpdC5QbHVzKHR4R292RGVwb3NpdC5EZXBvc2l0KQoKICAgIGlmIChwcm9wb3NhbC5Ub3RhbERlcG9zaXQgJmd0Oz0gZGVwb3NpdFBhcmFtLk1pbkRlcG9zaXQpCiAgICAgIC8vIE1pbkRlcG9zaXQgaXMgcmVhY2hlZCwgdm90ZSBvcGVucwoKICAgICAgcHJvcG9zYWwuVm90aW5nU3RhcnRCbG9jayA9IEN1cnJlbnRCbG9jawogICAgICBwcm9wb3NhbC5DdXJyZW50U3RhdHVzID0gUHJvcG9zYWxTdGF0dXNBY3RpdmUKICAgICAgUHJvcG9zYWxQcm9jZXNzaW5nUXVldWUucHVzaCh0eEdvdkRlcG9zaXQuUHJvcG9zYWxJRCkKCiAgc3RvcmUoUHJvcG9zYWxzLCAmbHQ7dHhHb3ZWb3RlLlByb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDssIHByb3Bvc2FsKQo="}}),c._v(" "),g("h2",{attrs:{id:"vote"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[c._v("#")]),c._v(" Vote")]),c._v(" "),g("p",[c._v("Once "),g("code",[c._v("ActiveParam.MinDeposit")]),c._v(" is reached, voting period starts. From there,\nbonded Atom holders are able to send "),g("code",[c._v("MsgVote")]),c._v(" transactions to cast their\nvote on the proposal.")]),c._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVm90ZSBkZWZpbmVzIGEgbWVzc2FnZSB0byBjYXN0IGEgdm90ZS4KbWVzc2FnZSBNc2dWb3RlIHsKICBvcHRpb24gKGNvc21vcy5tc2cudjEuc2lnbmVyKSA9ICZxdW90O3ZvdGVyJnF1b3Q7OwoKICB1aW50NjQgICAgIHByb3Bvc2FsX2lkID0gMSBbKGdvZ29wcm90by5qc29udGFnKSA9ICZxdW90O3Byb3Bvc2FsX2lkJnF1b3Q7XTsKICBzdHJpbmcgICAgIHZvdGVyICAgICAgID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIFZvdGVPcHRpb24gb3B0aW9uICAgICAgPSAzOwogIHN0cmluZyAgICAgbWV0YWRhdGEgICAgPSA0Owp9"}})],1),c._v(" "),g("p",[g("strong",[c._v("State modifications:")])]),c._v(" "),g("ul",[g("li",[c._v("Record "),g("code",[c._v("Vote")]),c._v(" of sender")])]),c._v(" "),g("p",[g("em",[c._v("Note: Gas cost for this message has to take into account the future tallying of the vote in EndBlocker.")])]),c._v(" "),g("p",[c._v("Next is a pseudocode outline of the way "),g("code",[c._v("MsgVote")]),c._v(" transactions are\nhandled:")]),c._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAvLyBQU0VVRE9DT0RFIC8vCiAgLy8gQ2hlY2sgaWYgTXNnVm90ZSBpcyB2YWxpZC4gSWYgaXQgaXMsIGNvdW50IHZvdGUvLwoKICB1cG9uIHJlY2VpdmluZyB0eEdvdlZvdGUgZnJvbSBzZW5kZXIgZG8KICAgIC8vIGNoZWNrIGlmIHByb3Bvc2FsIGlzIGNvcnJlY3RseSBmb3JtYXR0ZWQuIEluY2x1ZGVzIGZlZSBwYXltZW50LgoKICAgIGlmICFjb3JyZWN0bHlGb3JtYXR0ZWQodHhHb3ZEZXBvc2l0KQogICAgICB0aHJvdwoKICAgIHByb3Bvc2FsID0gbG9hZChQcm9wb3NhbHMsICZsdDt0eEdvdkRlcG9zaXQuUHJvcG9zYWxJRHwncHJvcG9zYWwnJmd0OykKCiAgICBpZiAocHJvcG9zYWwgPT0gbmlsKQogICAgICAvLyBUaGVyZSBpcyBubyBwcm9wb3NhbCBmb3IgdGhpcyBwcm9wb3NhbElECiAgICAgIHRocm93CgoKICAgIGlmICAocHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9PSBQcm9wb3NhbFN0YXR1c0FjdGl2ZSkKCgogICAgICAgIC8vIFNlbmRlciBjYW4gdm90ZSBpZgogICAgICAgIC8vIFByb3Bvc2FsIGlzIGFjdGl2ZQogICAgICAgIC8vIFNlbmRlciBoYXMgc29tZSBib25kcwoKICAgICAgICBzdG9yZShHb3Zlcm5hbmNlLCAmbHQ7dHhHb3ZWb3RlLlByb3Bvc2FsSUR8J2FkZHJlc3Nlcyd8c2VuZGVyJmd0OywgdHhHb3ZWb3RlLlZvdGUpICAgLy8gVm90ZXJzIGNhbiB2b3RlIG11bHRpcGxlIHRpbWVzLiBSZS12b3Rpbmcgb3ZlcnJpZGVzIHByZXZpb3VzIHZvdGUuIFRoaXMgaXMgb2sgYmVjYXVzZSB0YWxseWluZyBpcyBkb25lIG9uY2UgYXQgdGhlIGVuZC4K"}})],1)}),[],!1,null,null,null);b.default=v.exports}}]);