(this["webpackJsonpsw-teams"]=this["webpackJsonpsw-teams"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),i=a(11),s=a.n(i),c=(a(93),a(7)),o=a(22),m=a(21),d=a(25),p=a(26),u=a(29),h=(a(94),a(155)),f=a(139),b=a(149),g=a(148),v=a(151),E=a(101),y=a(76),x=a.n(y),T=a(52),C=a.n(T),w=a(49),S=a.n(w),O=a(48),k=a.n(O),j=a(75),N=a.n(j),A="sw-tab-panel";!function(e){e.narwhal="narwhal",e.chat="chat",e.teams="teams",e.people="people",e.statistics="statistics"}(n||(n={}));var F=n,L="ProximaNova, Segoe UI, Roboto, Helvetica, Arial, sans-serif",B=function(e){var t=a(45),n=e.tabValue===e.selectedTab;return l.createElement(E.a,{component:"div",role:"tabpanel",className:A,hidden:!n,style:{fontFamily:L}},n?l.createElement("header",{className:"App-header"},l.createElement("img",{src:t,className:"App-logo",alt:"logo"}),l.createElement("p",null,"Narwhal"),l.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")):void 0)},R=function(e){var t=a(45),n=e.tabValue===e.selectedTab;return l.createElement(E.a,{component:"div",role:"tabpanel",className:A,hidden:!n,style:{fontFamily:L}},n?l.createElement("header",{className:"App-header"},l.createElement("img",{src:t,className:"App-logo",alt:"logo"}),l.createElement("p",null,"Chat"),l.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")):void 0)},H=a(57),z=a.n(H),D=a(67),M=a(146),_=a(147),W=a(144),P=a(153),U=a(72),V=a.n(U),I=a(71),J=a.n(I),q=a(50),Q=a.n(q),Y=a(73),$=a.n(Y),G=a(156),K=a(77),X=a(154),Z=a(68),ee=a.n(Z),te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).render=function(){var e=function(){a.setState(Object(c.a)({},a.state,{isOpen:!1,anchorElement:void 0}))};return l.createElement("div",{style:{display:"inline-flex",paddingRight:"20px"}},l.createElement(E.a,{variant:"h6",style:{fontFamily:L,fontSize:"14px",lineHeight:"36px",color:"#000000",mixBlendMode:"normal",opacity:.5,paddingLeft:"22px"}},l.createElement("b",null,"Hello, ",a.props.userToDisplay.name)),l.createElement(G.a,{alt:a.props.userToDisplay.name,src:a.props.userToDisplay.avatar,style:{width:"36px",height:"36px",paddingLeft:"8px"}}),l.createElement("div",{style:{width:"36px",height:"36px"}},l.createElement(f.a,{onClick:function(e){a.setState(Object(c.a)({},a.state,{isOpen:!0,anchorElement:e.currentTarget}))},style:{width:"36px",height:"36px"}},l.createElement(ee.a,null))),l.createElement(K.a,{anchorEl:a.state.anchorElement,keepMounted:!0,open:a.state.isOpen,onClose:e},l.createElement(X.a,{onClick:e},"Profile"),l.createElement(X.a,{onClick:e},"My account"),l.createElement(X.a,{onClick:e},"Logout")))},a.state={isOpen:!1,anchorElement:void 0},a}return Object(u.a)(t,e),t}(l.Component),ae=a(141),ne=a(140),le=a(69),re=a.n(le),ie=a(70),se=a.n(ie),ce=function(e){var t=e.displayedTeam;return l.createElement(ne.a,{style:{marginLeft:"6px",marginRight:"6px",marginTop:"8px",width:"307px",height:"181px",border:"1.5px solid #e4e7ec",boxShadow:"unset"},className:t.isArchived?"sw-archived-team":"sw-normal-team"},l.createElement("div",{style:{position:"relative",display:"inline-block",width:"100%"}},l.createElement("div",{style:{float:"left",width:"75%",marginTop:"16px",marginLeft:"16px",marginRight:"16px"}},l.createElement(G.a,{alt:e.displayedTeam.name,variant:"rounded",src:e.displayedTeam.iconSource,style:{float:"left",marginTop:"5px",marginRight:"9px"}}),l.createElement("div",null,l.createElement("span",{style:{fontFamily:L,fontSize:"16px",lineHeight:"19px",color:"#444444"}},l.createElement("b",null,t.name)),l.createElement("br",null),l.createElement("span",{style:{fontFamily:L,fontSize:"13px",color:"#565656",opacity:.5,mixBlendMode:"normal"}},t.createdAt?"Created "+t.createdAt:void 0))),l.createElement("div",{onClick:e.handleFavourite,style:{float:"right",marginTop:"16px",marginRight:"16px"}},t.isArchived?void 0:t.isFavourite?l.createElement(re.a,{style:{color:"#f8ce43"}}):l.createElement(se.a,{style:{color:"#c7c7c7"}}))),l.createElement("br",null),l.createElement("div",{style:{marginLeft:"16px",marginRight:"16px",marginBottom:"8px"}},l.createElement("span",{style:{wordWrap:"break-word",fontFamily:L,fontSize:"14px",color:"#565656",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflowY:"hidden"}},t.description)),l.createElement(ae.a,null),l.createElement("div",{style:{display:"inline-flex",position:"relative",top:"7px"}},l.createElement("span",{style:{display:"flex",marginLeft:"16px"}},l.createElement("div",{style:{display:"flex"}},l.createElement(k.a,{style:{color:"#000000",opacity:.3,marginRight:"6px"}})),l.createElement("span",{style:{lineHeight:"24px",fontFamily:L,fontSize:"13px",color:"#000000",mixBlendMode:"normal",opacity:.45}},t.numberOfCampaigns," Campaigns")),l.createElement("span",{style:{display:"flex",marginLeft:"16px"}},l.createElement("div",{style:{display:"flex"}},l.createElement(S.a,{style:{color:"#000000",opacity:.3,marginRight:"6px"}})),l.createElement("span",{style:{lineHeight:"24px",fontFamily:L,fontSize:"13px",color:"#000000",mixBlendMode:"normal",opacity:.45}},t.numberOfLeads," Leads"))))};var oe,me=function(e){var t=function(t){var a=e.teamsToDisplay[t].isFavourite,n=function(e,n){return n===t?Object(c.a)({},e,{isFavourite:!a}):e};return function(){return e.updateTeams(e.teamsToDisplay.map(n))}},a=function(e,a){var n=e[0],r=e[1];return l.createElement(ce,{displayedTeam:n,key:a,handleFavourite:t(r)})};var n,r,i=e.mode===pe.favourites?e.teamsToDisplay.map((function(e,t){return[e,t]})).filter((function(e){return e[0].isFavourite})).map(a):e.mode===pe.archived?e.teamsToDisplay.map((function(e,t){return[e,t]})).filter((function(e){return e[0].isArchived})).map(a):e.mode===pe.search?e.teamsToDisplay.map((function(e,t){return[e,t]})).filter((function(t){var a=t[0],n=e.searchTerm?e.searchTerm.toLowerCase():"";return!e.searchTerm||a.description.toLowerCase().includes(n)||a.name.toLowerCase().includes(n)||a.createdAt&&a.createdAt.toLowerCase().includes(n)})).map(a):e.teamsToDisplay.map((function(e,t){return[e,t]})).map(a);return l.createElement("div",{className:"sw-all-teams",style:{width:"75%",marginLeft:"32px",marginRight:"16px"}},l.createElement("div",{style:{display:"inline-block",position:"relative",width:"100%"}},l.createElement(E.a,{variant:"h6",style:{float:"left",paddingTop:"25px",paddingLeft:"25px",paddingBottom:"17px",fontFamily:L,fontSize:"18px",lineHeight:"22px"}},l.createElement("b",null,(n=e.mode,r=e.searchTerm,n===pe.all?"All Teams":n===pe.favourites?"Favourites":n===pe.archived?"Archived":n===pe.search&&r?"Search: "+r:"? Teams"))),l.createElement(E.a,{variant:"h6",style:{float:"right",paddingTop:"25px",paddingRight:"25px",paddingBottom:"17px",fontFamily:L,fontSize:"14px",lineHeight:"17px",color:"#7f7f7f"}},"Showing ",i.length," out of ",e.numberOfTotalTeams," teams")),l.createElement(ae.a,{style:{border:"1px solid #efefef",height:"0px",marginBottom:"20px"}}),l.createElement("div",{style:{alignItems:"center",display:"flex",justifyContent:"center"}},l.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"space-between",justifyContent:"center"}},i)))};!function(e){e.addedLeads="added_leads",e.archivedTeam="archived_team",e.increasedQuota="increased_quota"}(oe||(oe={}));var de=oe;var pe,ue=function(e){var t=e.displayedActivity;return l.createElement(ne.a,{style:{borderRadius:"unset",boxShadow:"unset",marginTop:"4px",marginBottom:"4px",marginLeft:"30px"}},l.createElement("table",{style:{width:"90%"}},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{style:{wordWrap:"break-word"}},l.createElement(G.a,{src:t.user.avatar,style:{float:"left",marginRight:"9px"}}))),l.createElement("td",{style:{width:"80%"}},l.createElement("span",null,function(e,t,a){var n="",r="";return t===de.addedLeads?(n=" added new leads to ",r="."):t===de.archivedTeam?(n=" archived the team ",r="."):t===de.increasedQuota?(n=" increased ",r="'s quota."):console.error("Unknown action in ActivityCard.tsx"),l.createElement("span",{style:{fontFamily:L,fontSize:"14px",lineHeight:"17px",color:"#444444"}},l.createElement("b",null,e.name),n,l.createElement("b",null,a),r)}(t.user,t.action,t.team)))),l.createElement("tr",null,l.createElement("td",null),l.createElement("td",null,l.createElement("span",{style:{display:"block",minWidth:"1px",minHeight:"21.6667px",color:"#565656",mixBlendMode:"normal",opacity:.5,fontFamily:L,fontSize:"13px",lineHeight:"16px"}},t.createdAt||""))))))},he=function(e){var t=e.activitiesToDisplay.map((function(e,t){return l.createElement(ue,{key:t,displayedActivity:e})}));return l.createElement("div",{className:"sw-all-teams",style:{width:"25%",marginLeft:"16px",marginRight:"32px"}},l.createElement("div",{style:{display:"inline-block",position:"relative",width:"100%"}},l.createElement(E.a,{variant:"h6",style:{float:"left",paddingTop:"25px",paddingLeft:"25px",paddingBottom:"17px",fontFamily:L,fontSize:"18px",lineHeight:"22px"}},l.createElement("b",null,"Activity"))),l.createElement(ae.a,{style:{border:"1px solid #efefef",height:"0px",marginBottom:"20px"}}),l.createElement("div",null,t))},fe=a(10),be=a(152),ge=a(143),ve=a(142),Ee=a(150),ye=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).clearState={createdAt:"",description:"",iconSource:"",isFavourite:!1,isArchived:!1,name:"",numberOfCampaigns:0,numberOfLeads:0,hasTriedToSubmit:!1},a.handleSubmit=function(){if(a.state.description&&a.state.iconSource&&a.state.name){var e={createdAt:a.state.createdAt||void 0,description:a.state.description,iconSource:a.state.iconSource,id:a.props.numberOfTeams+1,isFavourite:a.state.isFavourite,isArchived:a.state.isArchived,name:a.state.name,numberOfCampaigns:a.state.numberOfCampaigns,numberOfLeads:a.state.numberOfLeads};a.props.handleCreateTeam(e),a.setState(Object.assign({},a.clearState))}else a.setState((function(e){return Object(c.a)({},e,{hasTriedToSubmit:!0})}))},a.handleChangeText=function(e){return function(t){var n=t.target.value;a.setState((function(t){return Object(c.a)({},t,Object(fe.a)({},e,n))}))}},a.handleChangeBoolean=function(e){return function(t){var n=t.target.checked;a.setState((function(t){return Object(c.a)({},t,Object(fe.a)({},e,n))}))}},a.handleChangeNumber=function(e){return function(t){var n=parseInt(t.target.value);a.setState((function(t){return Object(c.a)({},t,Object(fe.a)({},e,isNaN(n)?0:n))}))}},a.state=Object.assign({},a.clearState),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement(h.a,{open:!this.props.hidden,style:{zIndex:6e3}},l.createElement("div",{className:"sw-create-team-menu",style:{backgroundColor:"#ffffff"}},l.createElement("table",{style:{borderSpacing:"20px",marginLeft:"-20px",marginTop:"-20px",marginRight:"-10px"}},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,l.createElement(f.a,{onClick:this.props.handleCloseMenu},l.createElement(Q.a,null))),l.createElement("td",{colSpan:2},l.createElement("span",{style:{fontFamily:L,fontSize:"18px",color:"#565656"}},l.createElement("b",null,"Create A Team")))),l.createElement("tr",null,l.createElement("td",null),l.createElement("td",null,l.createElement(Ee.a,{label:"Name",value:this.state.name,onChange:this.handleChangeText("name"),error:this.state.hasTriedToSubmit&&!this.state.name})),l.createElement("td",null,l.createElement(Ee.a,{label:"Description",value:this.state.description,onChange:this.handleChangeText("description"),error:this.state.hasTriedToSubmit&&!this.state.description}))),l.createElement("tr",null,l.createElement("td",null),l.createElement("td",null,l.createElement(Ee.a,{label:"Icon URL",value:this.state.iconSource,onChange:this.handleChangeText("iconSource"),error:this.state.hasTriedToSubmit&&!this.state.iconSource})),l.createElement("td",null,l.createElement(Ee.a,{label:"Created at (optional)",value:this.state.createdAt,onChange:this.handleChangeText("createdAt")}))),l.createElement("tr",null,l.createElement("td",null),l.createElement("td",null,l.createElement(ve.a,null,l.createElement(ge.a,{control:l.createElement(be.a,{checked:this.state.isFavourite,onChange:this.handleChangeBoolean("isFavourite")}),label:"Favourite"}),l.createElement(ge.a,{control:l.createElement(be.a,{checked:this.state.isArchived,onChange:this.handleChangeBoolean("isArchived")}),label:"Archived"}))),l.createElement("td",null,l.createElement(Ee.a,{label:"Number of campaigns",type:"number",value:this.state.numberOfCampaigns,onChange:this.handleChangeNumber("numberOfCampaigns")}),l.createElement("br",null),l.createElement(Ee.a,{label:"Number of leads",type:"number",value:this.state.numberOfLeads,onChange:this.handleChangeNumber("numberOfLeads")}))),l.createElement("tr",null,l.createElement("td",{colSpan:3,style:{textAlign:"right"}},l.createElement(W.a,{variant:"contained",color:"secondary",onClick:this.handleSubmit,style:{fontFamily:L,backgroundColor:"#40d2bf",boxShadow:"unset"}},l.createElement("b",null,"Submit"))))))))}}]),t}(l.Component),xe={action:"action",activities:"activities",avatar:"avatar",campaigns_count:"numberOfCampaigns",created_at:"createdAt",description:"description",id:"id",image:"iconSource",is_archived:"isArchived",is_favorited:"isFavourite",leads_count:"numberOfLeads",name:"name",notifications_count:"notificationsCount",person:"user",target:"team",teams:"teams",current_user:"currentUser"},Te=function e(t){for(var a={},n=Object.keys(t),l=0;l<n.length;l++){var r=n[l];if(r in t){var i=xe[r];if(t[r]instanceof Array){var s=t[r],c=[];a[i]=c;for(var o=0;o<s.length;o++)c[o]=e(s[o])}else t[r]instanceof Object?(a[i]={},Object.assign(a[i],e(t[r]))):a[i]=t[r]}}return a},Ce=function(){return l.createElement(E.a,{component:"div",role:"tabpanel",className:A,style:{fontFamily:L}},l.createElement("header",{className:"sw-loading-screen"},l.createElement("p",null,"Failed to load data :(")))},we=a(145),Se=function(e){return l.createElement(E.a,{component:"div",role:"tabpanel",className:A,style:{fontFamily:L}},l.createElement("header",{className:"sw-loading-screen"},l.createElement(we.a,{color:"inherit",variant:"determinate",value:e.progress,size:"20%",thickness:5}),l.createElement("p",null,"Loading...")))};function Oe(){return(Oe=Object(D.a)(z.a.mark((function e(t,a){var n,l,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(10),e.prev=1,e.next=4,fetch("../sw-teams/data/data.json");case 4:return n=e.sent,t(50),e.next=8,n.json();case 8:l=e.sent,r=Te(l),t(100),a(r),e.next=19;break;case 14:throw e.prev=14,e.t0=e.catch(1),t(0),console.error(e.t0),new Error("Could not load JSON from file");case 19:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}!function(e){e.all="all",e.favourites="favourites",e.archived="archived",e.search="search"}(pe||(pe={}));var ke=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleUpdateTeams=function(e){a.setState((function(t){return t.data?Object(c.a)({},t,{data:{activities:t.data.activities,currentUser:t.data.currentUser,teams:e}}):t}))},a.handleChangeTab=function(e,t){a.setState(Object(c.a)({},a.state,{selectedTab:t}))},a.handleSearch=function(e){var t=e.target.value;t?a.setState((function(e){return Object(c.a)({},e,{selectedTab:pe.search,searchTerm:t,previousTabBeforeSearch:e.selectedTab===pe.search?e.previousTabBeforeSearch:e.selectedTab})})):a.setState((function(e){return Object(c.a)({},e,{selectedTab:e.previousTabBeforeSearch||a.props.defaultTab,searchTerm:void 0})}))},a.handleClearSearch=function(){a.setState((function(e){return Object(c.a)({},e,{searchTerm:"",selectedTab:e.previousTabBeforeSearch||a.props.defaultTab})}))},a.handleAddTeam=function(e){a.setState((function(t){return Object(c.a)({},t,{isCreateTeam:!1,data:t.data?Object(c.a)({},t.data,{teams:a.addNewTeam(t.data.teams,e)}):void 0})}))},a.openCreateTeamMenu=function(){a.setState((function(e){return Object(c.a)({},e,{isCreateTeam:!0})}))},a.closeCreateTeamMenu=function(){a.setState((function(e){return Object(c.a)({},e,{isCreateTeam:!1})}))},a.updateProgress=function(e){a.setState(Object(c.a)({},a.state,{loadProgress:e}))},a.updateData=function(e){a.setState(Object(c.a)({},a.state,{data:e}))},a.unset="unset",a.tabStyle={minWidth:"unset",marginLeft:"25px",fontFamily:L,fontSize:"18px",fontWeight:"bold",lineHeight:"22px",textTransform:a.unset},a.state={didLoadingFail:!1,loadProgress:0,selectedTab:a.props.defaultTab,isCreateTeam:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"addNewTeam",value:function(e,t){return e.unshift(t),e}},{key:"componentDidMount",value:function(){var e=this;(function(e,t){return Oe.apply(this,arguments)})(this.updateProgress,this.updateData).catch((function(t){console.error(t),e.setState(Object(c.a)({},e.state,{didLoadingFail:!0}))}))}},{key:"render",value:function(){return this.state.data?l.createElement("div",{className:"sw-teams-page"},l.createElement("div",{className:"sw-teams-all-bars"},l.createElement(M.a,{className:"sw-teams-top-bar"},l.createElement("div",{className:"sw-teams-top-words"},l.createElement("div",{style:{display:"flex",height:"100%"}},l.createElement("div",{style:{borderRight:"1px solid #e2e2e2",paddingLeft:"40px",paddingRight:"40px",paddingTop:"30px",paddingBottom:"30px"}},l.createElement(E.a,{variant:"h6",style:{fontFamily:L,fontSize:"18px",lineHeight:"22px",color:"#1a1919",mixBlendMode:"normal",opacity:.5}},l.createElement("b",null,"NARWHAL"))),l.createElement("div",{style:{paddingLeft:"40px",paddingTop:"30px"}},l.createElement(E.a,{variant:"h6",style:{fontFamily:L,fontSize:"18px",lineHeight:"22px",color:"#000000"}},"Teams")))),l.createElement("div",{className:"sw-teams-top-user"},l.createElement("div",null,l.createElement(f.a,null,l.createElement(_.a,{badgeContent:this.state.data.currentUser.notificationsCount},l.createElement(J.a,{style:{width:"36px",height:"36px"}}))),l.createElement(te,{userToDisplay:this.state.data.currentUser})))),l.createElement(M.a,{className:"sw-teams-create-bar"},l.createElement("div",{className:"sw-teams-create-bar-icon"},l.createElement(C.a,{style:{fontSize:"35px",color:"#a4a6a8",marginRight:"9px",paddingTop:"2px"}}),l.createElement(E.a,{variant:"h6",style:{fontFamily:L,fontSize:"30px",lineHeight:"36px",color:"#1a1919"}},l.createElement("b",null,"Teams"))),l.createElement("div",{className:"sw-teams-create-bar-create-a-team"},l.createElement(W.a,{variant:"contained",onClick:this.openCreateTeamMenu,style:{fontFamily:L,fontSize:"14px",lineHeight:"16px"}},l.createElement(V.a,{style:{paddingRight:"5px"}}),l.createElement("b",null,"Create New Team")))),l.createElement(M.a,{className:"sw-teams-tab-bar"},l.createElement("div",{className:"sw-teams-tabs"},this.state.selectedTab===pe.search?void 0:l.createElement(v.a,{value:this.state.selectedTab,onChange:this.handleChangeTab,TabIndicatorProps:{style:{backgroundColor:"#0083e3"}}},l.createElement(g.a,{value:pe.all,label:"All",style:this.tabStyle}),l.createElement(g.a,{value:pe.favourites,label:"Favourites",style:this.tabStyle}),l.createElement(g.a,{value:pe.archived,label:"Archived",style:this.tabStyle}))),l.createElement("div",{className:"sw-teams-search"},l.createElement("div",{style:{display:"inline-flex"}},this.state.selectedTab===pe.search?l.createElement("div",{style:{float:"right",height:"48px",paddingRight:"10px"}},l.createElement(W.a,{variant:"contained",onClick:this.handleClearSearch,style:{fontFamily:L,backgroundColor:"#ba1029",color:"#ffffff",boxShadow:"unset",paddingLeft:"9px",paddingRight:"11px"}},l.createElement(Q.a,{style:{paddingRight:"5px"}}),l.createElement("div",{style:{paddingBottom:"1px"}},l.createElement("b",null,"Clear")))):void 0,l.createElement("div",{style:{color:"#999999",marginRight:"15px",paddingTop:"7px"}},l.createElement($.a,null)),l.createElement(P.a,{placeholder:"Search team name\u2026",onChange:this.handleSearch,value:this.state.searchTerm,style:{fontFamily:L,fontSize:"16px",fontWeight:"bold",lineHeight:"19px",color:"#999999",height:"36.3333px"}}))))),l.createElement("div",{className:"sw-teams-main"},l.createElement(me,{mode:this.state.selectedTab,teamsToDisplay:this.state.data.teams,numberOfTotalTeams:this.state.data.teams.length,updateTeams:this.handleUpdateTeams,searchTerm:this.state.searchTerm}),l.createElement(he,{activitiesToDisplay:this.state.data.activities})),l.createElement(ye,{handleCloseMenu:this.closeCreateTeamMenu,handleCreateTeam:this.handleAddTeam,hidden:!this.state.isCreateTeam,numberOfTeams:this.state.data.teams.length})):this.state.didLoadingFail?l.createElement(Ce,null):l.createElement(Se,{progress:this.state.loadProgress})}}]),t}(l.Component),je=function(e){var t=e.tabValue===e.selectedTab;return l.createElement(E.a,{component:"div",role:"tabpanel",className:A,hidden:!t,style:{fontFamily:L}},t?l.createElement(ke,{defaultTab:pe.all}):void 0)},Ne=function(e){var t=a(45),n=e.tabValue===e.selectedTab;return l.createElement(E.a,{component:"div",role:"tabpanel",className:A,hidden:!n,style:{fontFamily:L}},n?l.createElement("header",{className:"App-header"},l.createElement("img",{src:t,className:"App-logo",alt:"logo"}),l.createElement("p",null,"People"),l.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")):void 0)},Ae=function(e){var t=a(45),n=e.tabValue===e.selectedTab;return l.createElement(E.a,{component:"div",role:"tabpanel",className:A,hidden:!n,style:{fontFamily:L}},n?l.createElement("header",{className:"App-header"},l.createElement("img",{src:t,className:"App-logo",alt:"logo"}),l.createElement("p",null,"Statistics"),l.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")):void 0)},Fe=a(74),Le=a.n(Fe),Be=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleTabChange=function(e,t){a.setState(Object(c.a)({},a.state,{selectedTab:t}))},a.handleHelpButtonClick=function(){a.setState(Object(c.a)({},a.state,{isBackdropOpen:!0}))},a.handleOverlayClose=function(){a.setState(Object(c.a)({},a.state,{isBackdropOpen:!1}))},a.state={selectedTab:F.teams,isBackdropOpen:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement("div",{className:"sw-app"},l.createElement("div",{className:"sw-tabs"},l.createElement(v.a,{orientation:"vertical",value:this.state.selectedTab,onChange:this.handleTabChange,TabIndicatorProps:{style:{display:"none"}}},l.createElement(g.a,{value:F.narwhal,icon:l.createElement(b.a,{style:{display:"flex"}},l.createElement("img",{src:Le.a,alt:"whale",style:{width:"24px"}})),"aria-label":"narwhal"}),l.createElement(g.a,{value:F.chat,icon:l.createElement(k.a,null),"aria-label":"chat"}),l.createElement(g.a,{value:F.teams,icon:l.createElement(C.a,null),"aria-label":"teams"}),l.createElement(g.a,{value:F.people,icon:l.createElement(S.a,null),"aria-label":"people"}),l.createElement(g.a,{value:F.statistics,icon:l.createElement(N.a,null),"aria-label":"statistics"}),l.createElement(f.a,{id:"sw-help-icon",onClick:this.handleHelpButtonClick},l.createElement(x.a,null))),l.createElement(B,{tabValue:F.narwhal,selectedTab:this.state.selectedTab}),l.createElement(R,{tabValue:F.chat,selectedTab:this.state.selectedTab}),l.createElement(je,{tabValue:F.teams,selectedTab:this.state.selectedTab}),l.createElement(Ne,{tabValue:F.people,selectedTab:this.state.selectedTab}),l.createElement(Ae,{tabValue:F.statistics,selectedTab:this.state.selectedTab})),l.createElement(h.a,{id:"sw-backdrop",open:this.state.isBackdropOpen,onClick:this.handleOverlayClose},l.createElement("div",{style:{backgroundColor:"#ffffff",width:"30%",height:"200px"}},l.createElement(E.a,{style:{fontFamily:L,fontSize:"32px",lineHeight:"100px",textAlign:"center"}},l.createElement("b",null,"Help Page")),l.createElement(E.a,{style:{fontFamily:L,fontSize:"24px",lineHeight:"100px",textAlign:"center"}},"Click anywhere to close"))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},74:function(e,t,a){e.exports=a.p+"static/media/sw-logo-white.6a5c384b.svg"},88:function(e,t,a){e.exports=a(100)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.d80ca5fb.chunk.js.map