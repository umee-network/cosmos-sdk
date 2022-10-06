(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{702:function(e,o,r){"use strict";r.r(o);var a=r(1),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("group")]),e._v(" module uses the "),r("code",[e._v("orm")]),e._v(" package which provides table storage with support for\nprimary keys and secondary indexes. "),r("code",[e._v("orm")]),e._v(" also defines "),r("code",[e._v("Sequence")]),e._v(" which is a persistent unique key generator based on a counter that can be used along with "),r("code",[e._v("Table")]),e._v("s.")]),e._v(" "),r("p",[e._v("Here's the list of tables and associated sequences and indexes stored as part of the "),r("code",[e._v("group")]),e._v(" module.")]),e._v(" "),r("h2",{attrs:{id:"group-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#group-table"}},[e._v("#")]),e._v(" Group Table")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("groupTable")]),e._v(" stores "),r("code",[e._v("GroupInfo")]),e._v(": "),r("code",[e._v("0x0 | BigEndian(GroupId) -> ProtocolBuffer(GroupInfo)")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"groupseq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#groupseq"}},[e._v("#")]),e._v(" groupSeq")]),e._v(" "),r("p",[e._v("The value of "),r("code",[e._v("groupSeq")]),e._v(" is incremented when creating a new group and corresponds to the new "),r("code",[e._v("GroupId")]),e._v(": "),r("code",[e._v("0x1 | 0x1 -> BigEndian")]),e._v(".")]),e._v(" "),r("p",[e._v("The second "),r("code",[e._v("0x1")]),e._v(" corresponds to the ORM "),r("code",[e._v("sequenceStorageKey")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"groupbyadminindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#groupbyadminindex"}},[e._v("#")]),e._v(" groupByAdminIndex")]),e._v(" "),r("p",[r("code",[e._v("groupByAdminIndex")]),e._v(" allows to retrieve groups by admin address:\n"),r("code",[e._v("0x2 | len([]byte(group.Admin)) | []byte(group.Admin) | BigEndian(GroupId) -> []byte()")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"group-member-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#group-member-table"}},[e._v("#")]),e._v(" Group Member Table")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("groupMemberTable")]),e._v(" stores "),r("code",[e._v("GroupMember")]),e._v("s: "),r("code",[e._v("0x10 | BigEndian(GroupId) | []byte(member.Address) -> ProtocolBuffer(GroupMember)")]),e._v(".")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("groupMemberTable")]),e._v(" is a primary key table and its "),r("code",[e._v("PrimaryKey")]),e._v(" is given by\n"),r("code",[e._v("BigEndian(GroupId) | []byte(member.Address)")]),e._v(" which is used by the following indexes.")]),e._v(" "),r("h3",{attrs:{id:"groupmemberbygroupindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#groupmemberbygroupindex"}},[e._v("#")]),e._v(" groupMemberByGroupIndex")]),e._v(" "),r("p",[r("code",[e._v("groupMemberByGroupIndex")]),e._v(" allows to retrieve group members by group id:\n"),r("code",[e._v("0x11 | BigEndian(GroupId) | PrimaryKey -> []byte()")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"groupmemberbymemberindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#groupmemberbymemberindex"}},[e._v("#")]),e._v(" groupMemberByMemberIndex")]),e._v(" "),r("p",[r("code",[e._v("groupMemberByMemberIndex")]),e._v(" allows to retrieve group members by member address:\n"),r("code",[e._v("0x12 | len([]byte(member.Address)) | []byte(member.Address) | PrimaryKey -> []byte()")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"group-policy-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#group-policy-table"}},[e._v("#")]),e._v(" Group Policy Table")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("groupPolicyTable")]),e._v(" stores "),r("code",[e._v("GroupPolicyInfo")]),e._v(": "),r("code",[e._v("0x20 | len([]byte(Address)) | []byte(Address) -> ProtocolBuffer(GroupPolicyInfo)")]),e._v(".")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("groupPolicyTable")]),e._v(" is a primary key table and its "),r("code",[e._v("PrimaryKey")]),e._v(" is given by\n"),r("code",[e._v("len([]byte(Address)) | []byte(Address)")]),e._v(" which is used by the following indexes.")]),e._v(" "),r("h3",{attrs:{id:"grouppolicyseq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grouppolicyseq"}},[e._v("#")]),e._v(" groupPolicySeq")]),e._v(" "),r("p",[e._v("The value of "),r("code",[e._v("groupPolicySeq")]),e._v(" is incremented when creating a new group policy and is used to generate the new group policy account "),r("code",[e._v("Address")]),e._v(":\n"),r("code",[e._v("0x21 | 0x1 -> BigEndian")]),e._v(".")]),e._v(" "),r("p",[e._v("The second "),r("code",[e._v("0x1")]),e._v(" corresponds to the ORM "),r("code",[e._v("sequenceStorageKey")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"grouppolicybygroupindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grouppolicybygroupindex"}},[e._v("#")]),e._v(" groupPolicyByGroupIndex")]),e._v(" "),r("p",[r("code",[e._v("groupPolicyByGroupIndex")]),e._v(" allows to retrieve group policies by group id:\n"),r("code",[e._v("0x22 | BigEndian(GroupId) | PrimaryKey -> []byte()")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"grouppolicybyadminindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grouppolicybyadminindex"}},[e._v("#")]),e._v(" groupPolicyByAdminIndex")]),e._v(" "),r("p",[r("code",[e._v("groupPolicyByAdminIndex")]),e._v(" allows to retrieve group policies by admin address:\n"),r("code",[e._v("0x23 | len([]byte(Address)) | []byte(Address) | PrimaryKey -> []byte()")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"proposal-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposal-table"}},[e._v("#")]),e._v(" Proposal Table")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("proposalTable")]),e._v(" stores "),r("code",[e._v("Proposal")]),e._v("s: "),r("code",[e._v("0x30 | BigEndian(ProposalId) -> ProtocolBuffer(Proposal)")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"proposalseq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposalseq"}},[e._v("#")]),e._v(" proposalSeq")]),e._v(" "),r("p",[e._v("The value of "),r("code",[e._v("proposalSeq")]),e._v(" is incremented when creating a new proposal and corresponds to the new "),r("code",[e._v("ProposalId")]),e._v(": "),r("code",[e._v("0x31 | 0x1 -> BigEndian")]),e._v(".")]),e._v(" "),r("p",[e._v("The second "),r("code",[e._v("0x1")]),e._v(" corresponds to the ORM "),r("code",[e._v("sequenceStorageKey")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"proposalbygrouppolicyindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposalbygrouppolicyindex"}},[e._v("#")]),e._v(" proposalByGroupPolicyIndex")]),e._v(" "),r("p",[r("code",[e._v("proposalByGroupPolicyIndex")]),e._v(" allows to retrieve proposals by group policy account address:\n"),r("code",[e._v("0x32 | len([]byte(account.Address)) | []byte(account.Address) | BigEndian(ProposalId) -> []byte()")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"proposalsbyvotingperiodendindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposalsbyvotingperiodendindex"}},[e._v("#")]),e._v(" ProposalsByVotingPeriodEndIndex")]),e._v(" "),r("p",[r("code",[e._v("proposalsByVotingPeriodEndIndex")]),e._v(" allows to retrieve proposals sorted by chronological "),r("code",[e._v("voting_period_end")]),e._v(":\n"),r("code",[e._v("0x33 | sdk.FormatTimeBytes(proposal.VotingPeriodEnd) | BigEndian(ProposalId) -> []byte()")]),e._v(".")]),e._v(" "),r("p",[e._v("This index is used when tallying the proposal votes at the end of the voting period, and for pruning proposals at "),r("code",[e._v("VotingPeriodEnd + MaxExecutionPeriod")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"vote-table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vote-table"}},[e._v("#")]),e._v(" Vote Table")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("voteTable")]),e._v(" stores "),r("code",[e._v("Vote")]),e._v("s: "),r("code",[e._v("0x40 | BigEndian(ProposalId) | []byte(voter.Address) -> ProtocolBuffer(Vote)")]),e._v(".")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("voteTable")]),e._v(" is a primary key table and its "),r("code",[e._v("PrimaryKey")]),e._v(" is given by\n"),r("code",[e._v("BigEndian(ProposalId) | []byte(voter.Address)")]),e._v(" which is used by the following indexes.")]),e._v(" "),r("h3",{attrs:{id:"votebyproposalindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#votebyproposalindex"}},[e._v("#")]),e._v(" voteByProposalIndex")]),e._v(" "),r("p",[r("code",[e._v("voteByProposalIndex")]),e._v(" allows to retrieve votes by proposal id:\n"),r("code",[e._v("0x41 | BigEndian(ProposalId) | PrimaryKey -> []byte()")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"votebyvoterindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#votebyvoterindex"}},[e._v("#")]),e._v(" voteByVoterIndex")]),e._v(" "),r("p",[r("code",[e._v("voteByVoterIndex")]),e._v(" allows to retrieve votes by voter address:\n"),r("code",[e._v("0x42 | len([]byte(voter.Address)) | []byte(voter.Address) | PrimaryKey -> []byte()")]),e._v(".")])])}),[],!1,null,null,null);o.default=s.exports}}]);