(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{2648:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),r=a(15),c=a(14),s=a(16),m=a(0),o=a.n(m),i=a(1),u=a(59),d=a(4),p=a(20),b=a(109),f=a(19),E=a(290),v=a(53),h=a.n(v),w="[PROJECT DASHBOARD APP] GET WIDGETS";function x(){var e=h.a.get("/api/project-dashboard-app/widgets");return function(t){return e.then(function(e){return t({type:w,payload:e.data})})}}var g="[PROJECT DASHBOARD APP] GET PROJECTS";function N(){var e=h.a.get("/api/project-dashboard-app/projects");return function(t){return e.then(function(e){return t({type:g,payload:e.data})})}}var j=a(6),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(j.a)({},t.payload);default:return e}},O=a(18),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(O.a)(t.payload);default:return e}},S=Object(f.d)({widgets:y,projects:C}),k=a(560),R=a.n(k),P=a(5),M=a.n(P),W=a(208),G=a(36),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={currentRange:a.props.widget.currentRange},a.handleChangeSelect=function(e){a.setState(Object(G.a)({},e.target.name,e.target.value))},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget,t=this.state.currentRange;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},o.a.createElement(i.bb,{native:!0,value:this.state.currentRange,onChange:this.handleChangeSelect,inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(e.ranges).map(function(e){var t=Object(W.a)(e,2),a=t[0],n=t[1];return o.a.createElement("option",{key:a,value:a},n)})),o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert"))),o.a.createElement("div",{className:"text-center pt-12 pb-28"},o.a.createElement(i.vb,{className:"text-72 leading-none text-blue"},e.data.count[t]),o.a.createElement(i.vb,{className:"text-16",color:"textSecondary"},e.data.label)),o.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},o.a.createElement(i.vb,{className:"text-15 flex w-full",color:"textSecondary"},o.a.createElement("span",{className:"truncate"},e.data.extra.label),":",o.a.createElement("b",{className:"pl-8"},e.data.extra.count[t]))))}}]),t}(m.Component),A=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},o.a.createElement(i.vb,{className:"text-16"},e.title),o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert"))),o.a.createElement("div",{className:"text-center pt-12 pb-28"},o.a.createElement(i.vb,{className:"text-72 leading-none text-red"},e.data.count),o.a.createElement(i.vb,{className:"text-16",color:"textSecondary"},e.data.label)),o.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},o.a.createElement(i.vb,{className:"text-15 flex w-full",color:"textSecondary"},o.a.createElement("span",{className:"truncate"},e.data.extra.label),":",o.a.createElement("b",{className:"pl-8"},e.data.extra.count))))}}]),t}(m.Component),H=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},o.a.createElement(i.vb,{className:"text-16"},e.title),o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert"))),o.a.createElement("div",{className:"text-center pt-12 pb-28"},o.a.createElement(i.vb,{className:"text-72 leading-none text-orange"},e.data.count),o.a.createElement(i.vb,{className:"text-16",color:"textSecondary"},e.data.label)),o.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},o.a.createElement(i.vb,{className:"text-15 flex w-full",color:"textSecondary"},o.a.createElement("span",{className:"truncate"},e.data.extra.label),":",o.a.createElement("b",{className:"pl-8"},e.data.extra.count))))}}]),t}(m.Component),U=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},o.a.createElement(i.vb,{className:"text-16"},e.title),o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert"))),o.a.createElement("div",{className:"text-center pt-12 pb-28"},o.a.createElement(i.vb,{className:"text-72 leading-none text-green"},e.data.count),o.a.createElement(i.vb,{className:"text-16",color:"textSecondary"},e.data.label)),o.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},o.a.createElement(i.vb,{className:"text-15 flex w-full",color:"textSecondary"},o.a.createElement("span",{className:"truncate"},e.data.extra.label),":",o.a.createElement("b",{className:"pl-8"},e.data.extra.count))))}}]),t}(m.Component),B=a(387),D=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={currentRange:"TW"},a.handleChangeRange=function(e){a.setState({currentRange:e})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.widget,a=this.state.currentRange,n=R.a.merge({},t);return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between px-16 py-16 border-b-1"},o.a.createElement(i.vb,{className:"text-16"},n.title),o.a.createElement("div",{className:"items-center"},Object.entries(n.ranges).map(function(t){var n=Object(W.a)(t,2),l=n[0],r=n[1];return o.a.createElement(i.c,{key:l,className:"normal-case shadow-none px-16",onClick:function(){return e.handleChangeRange(l)},color:a===l?"secondary":"default",variant:a===l?"contained":"text"},r)}))),o.a.createElement("div",{className:"flex flex-row flex-wrap"},o.a.createElement("div",{className:"w-full md:w-1/2 p-8 min-h-420 h-420"},o.a.createElement(B.a,{data:{labels:n.mainChart[a].labels,datasets:n.mainChart[a].datasets},options:n.mainChart.options})),o.a.createElement("div",{className:"flex w-full md:w-1/2 flex-wrap p-8"},Object.entries(n.supporting).map(function(e){var t=Object(W.a)(e,2),n=t[0],l=t[1];return o.a.createElement("div",{key:n,className:"w-full sm:w-1/2 p-12"},o.a.createElement(i.vb,{className:"text-15 whitespace-no-wrap",color:"textSecondary"},l.label),o.a.createElement(i.vb,{className:"text-32"},l.count[a]),o.a.createElement("div",{className:"h-64 w-full"},o.a.createElement(B.f,{data:{labels:l.chart[a].labels,datasets:l.chart[a].datasets},options:l.chart.options})))}))))}}]),t}(m.Component),L=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={currentRange:a.props.widget.currentRange},a.handleChangeSelect=function(e){a.setState(Object(G.a)({},e.target.name,e.target.value))},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget,t=this.state.currentRange,a=R.a.merge({},e);return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},o.a.createElement(i.vb,{className:"text-16"},a.title),o.a.createElement(i.bb,{native:!0,value:this.state.currentRange,onChange:this.handleChangeSelect,inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(a.ranges).map(function(e){var t=Object(W.a)(e,2),a=t[0],n=t[1];return o.a.createElement("option",{key:a,value:a},n)}))),o.a.createElement("div",{className:"h-400 w-full p-32"},o.a.createElement(B.d,{data:{labels:a.mainChart.labels,datasets:a.mainChart.datasets[t]},options:a.mainChart.options})),o.a.createElement("div",{className:"flex items-center p-8 border-t-1"},o.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center p-16 border-r-1"},o.a.createElement(i.vb,{className:"text-32 leading-none"},a.footerLeft.count[t]),o.a.createElement(i.vb,{className:"text-15",color:"textSecondary"},a.footerLeft.title)),o.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center p-16"},o.a.createElement(i.vb,{className:"text-32 leading-none"},a.footerRight.count[t]),o.a.createElement(i.vb,{className:"text-15",color:"textSecondary"},a.footerRight.title))))}}]),t}(m.Component),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={currentRange:a.props.widget.currentRange},a.handleChangeSelect=function(e){a.setState(Object(G.a)({},e.target.name,e.target.value))},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget,t=this.state.currentRange;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},o.a.createElement(i.vb,{className:"text-16"},e.title),o.a.createElement(i.bb,{native:!0,value:this.state.currentRange,onChange:this.handleChangeSelect,inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(e.ranges).map(function(e){var t=Object(W.a)(e,2),a=t[0],n=t[1];return o.a.createElement("option",{key:a,value:a},n)}))),o.a.createElement(i.M,null,e.schedule[t].map(function(e){return o.a.createElement(i.N,{key:e.id},o.a.createElement(i.Q,{primary:e.title,secondary:e.time}),o.a.createElement(i.P,null,o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert"))))})))}}]),t}(m.Component),I=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},o.a.createElement(i.vb,{className:"text-16"},e.title)),o.a.createElement("div",{className:"h-400 w-full p-32"},o.a.createElement(B.d,{data:{labels:e.mainChart.labels,datasets:e.mainChart.datasets},options:e.mainChart.options})))}}]),t}(m.Component),J=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={currentRange:a.props.widget.currentRange},a.handleChangeSelect=function(e){a.setState(Object(G.a)({},e.target.name,e.target.value))},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget,t=this.state.currentRange,a=R.a.merge({},e);return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},o.a.createElement(i.vb,{className:"text-16"},a.title),o.a.createElement(i.bb,{native:!0,value:this.state.currentRange,onChange:this.handleChangeSelect,inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries(a.ranges).map(function(e){var t=Object(W.a)(e,2),a=t[0],n=t[1];return o.a.createElement("option",{key:a,value:a},n)}))),["weeklySpent","totalSpent","remaining"].map(function(e){return o.a.createElement("div",{className:"flex flex-wrap items-center w-full p-8",key:e},o.a.createElement("div",{className:"flex flex-col w-full sm:w-1/2 p-8"},o.a.createElement(i.vb,{className:"text-14",color:"textSecondary"},a[e].title),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(i.vb,{className:"text-32 mr-4",color:"textSecondary"},"$"),o.a.createElement(i.vb,{className:"text-32"},a[e].count[t]))),o.a.createElement("div",{className:"flex w-full sm:w-1/2 p-8"},o.a.createElement("div",{className:"h-48 w-full"},o.a.createElement(B.f,{data:{labels:a[e].chart[t].labels,datasets:a[e].chart[t].datasets},options:a[e].chart.options}))))}),o.a.createElement(i.q,null),o.a.createElement("div",{className:"flex flex-col w-full px-16 py-24"},o.a.createElement(i.vb,{className:"text-14",color:"textSecondary"},a.totalBudget.title),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(i.vb,{className:"text-32 mr-4",color:"textSecondary"},"$"),o.a.createElement(i.vb,{className:"text-32"},a.totalBudget.count))))}}]),t}(m.Component),V=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},o.a.createElement(i.vb,{className:"text-16"},e.title)),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(i.kb,{className:"w-full min-w-full"},o.a.createElement(i.nb,null,o.a.createElement(i.pb,null,e.table.columns.map(function(e){return o.a.createElement(i.mb,{key:e.id,className:"whitespace-no-wrap"},e.title)}))),o.a.createElement(i.lb,null,e.table.rows.map(function(e){return o.a.createElement(i.pb,{key:e.id},e.cells.map(function(e){switch(e.id){case"budget_type":return o.a.createElement(i.mb,{key:e.id,component:"th",scope:"row"},o.a.createElement(i.vb,{className:M()(e.classes,"inline text-11 font-500 px-8 py-4 rounded-4")},e.value));case"spent_perc":return o.a.createElement(i.mb,{key:e.id,component:"th",scope:"row"},o.a.createElement(i.vb,{className:M()(e.classes,"flex items-center")},e.value,o.a.createElement(i.G,{className:"text-14 ml-4"},e.icon)));default:return o.a.createElement(i.mb,{key:e.id,component:"th",scope:"row"},o.a.createElement(i.vb,{className:e.classes},e.value))}}))})))))}}]),t}(m.Component),$=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},o.a.createElement(i.vb,{className:"text-16"},e.title),o.a.createElement(i.vb,{className:"text-11 font-500 rounded-4 text-white bg-blue px-8 py-4"},e.table.rows.length+" Members")),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(i.kb,{className:"w-full min-w-full",padding:"dense"},o.a.createElement(i.nb,null,o.a.createElement(i.pb,null,e.table.columns.map(function(e){switch(e.id){case"avatar":return o.a.createElement(i.mb,{key:e.id,className:"whitespace-no-wrap p-8 pl-16"},e.title);default:return o.a.createElement(i.mb,{key:e.id,className:"whitespace-no-wrap"},e.title)}}))),o.a.createElement(i.lb,null,e.table.rows.map(function(e){return o.a.createElement(i.pb,{key:e.id},e.cells.map(function(e){switch(e.id){case"avatar":return o.a.createElement(i.mb,{key:e.id,component:"th",scope:"row",className:"pl-16 pr-0"},o.a.createElement(i.b,{src:e.value}));case"name":return o.a.createElement(i.mb,{key:e.id,component:"th",scope:"row",className:"truncate font-600"},e.value);default:return o.a.createElement(i.mb,{key:e.id,component:"th",scope:"row",className:"truncate"},e.value)}}))})))))}}]),t}(m.Component),q=a(86),z=a.n(q),F=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={time:z()()},a.update=function(){a.setState({time:z()()})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.update,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.time;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},o.a.createElement(i.vb,{className:"text-16"},e.format("dddd, HH:mm:ss")),o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert"))),o.a.createElement("div",{className:"text-center px-24 py-32"},o.a.createElement(i.vb,{className:"text-24 leading-tight",color:"textSecondary"},e.format("MMMM")),o.a.createElement(i.vb,{className:"text-72 leading-tight",color:"textSecondary"},e.format("D")),o.a.createElement(i.vb,{className:"text-24 leading-tight",color:"textSecondary"},e.format("Y"))))}}]),t}(m.Component),Q=a(540),Y=a.n(Q),K=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.widget;return o.a.createElement(i.W,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(i.G,{className:"mr-8",color:"action"},"location_on"),o.a.createElement(i.vb,{className:"text-16"},e.locations[e.currentLocation].name)),o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert"))),o.a.createElement("div",{className:"flex items-center justify-center p-16 pb-32"},o.a.createElement(i.G,{className:"meteocons text-40",color:"action"},e.locations[e.currentLocation].icon),o.a.createElement(i.vb,{className:"text-44 ml-16",color:"textSecondary"},e.locations[e.currentLocation].temp[e.tempUnit]),o.a.createElement(i.vb,{className:"text-48 font-300 ml-8",color:"textSecondary"},"\xb0"),o.a.createElement(i.vb,{className:"text-44 font-300",color:"textSecondary"},"C")),o.a.createElement(Y.a,null),o.a.createElement("div",{className:"flex justify-between items-center p-16"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(i.G,{className:"meteocons text-14",color:"action"},"windy"),o.a.createElement(i.vb,{className:"ml-4"},e.locations[e.currentLocation].windSpeed[e.speedUnit]),o.a.createElement(i.vb,{className:"ml-4",color:"textSecondary"},e.speedUnit)),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(i.G,{className:"meteocons text-14",color:"action"},"compass"),o.a.createElement(i.vb,{className:"ml-4"},e.locations[e.currentLocation].windDirection)),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(i.G,{className:"meteocons text-14",color:"action"},"rainy"),o.a.createElement(i.vb,{className:"ml-4"},e.locations[e.currentLocation].rainProbability))),o.a.createElement(Y.a,null),o.a.createElement("div",{className:"w-full py-16"},e.locations[e.currentLocation].next3Days.map(function(t){return o.a.createElement("div",{className:"flex items-center justify-between w-full py-16 px-24",key:t.name},o.a.createElement(i.vb,{className:"text-15"},t.name),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(i.G,{className:"meteocons text-24 mr-16",color:"action"},t.icon),o.a.createElement(i.vb,{className:"text-20"},t.temp[e.tempUnit]),o.a.createElement(i.vb,{className:"text-20",color:"textSecondary"},"\xb0"),o.a.createElement(i.vb,{className:"text-20",color:"textSecondary"},e.tempUnit)))})))}}]),t}(m.Component),X=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={tabValue:0,selectedProjectId:1,projectMenuEl:null},a.handleChangeTab=function(e,t){a.setState({tabValue:t})},a.handleChangeProject=function(e){a.setState({selectedProjectId:e,projectMenuEl:null})},a.handleOpenProjectMenu=function(e){a.setState({projectMenuEl:e.currentTarget})},a.handleCloseProjectMenu=function(){a.setState({projectMenuEl:null})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getWidgets(),this.props.getProjects()}},{key:"render",value:function(){var e=this,t=this.props,a=t.widgets,n=t.projects,l=t.classes,r=this.state,c=r.tabValue,s=r.selectedProjectId,m=r.projectMenuEl;return a&&n?o.a.createElement(d.s,{classes:{header:"min-h-160 h-160",toolbar:"min-h-48 h-48",rightSidebar:"w-288",content:l.content},header:o.a.createElement("div",{className:"flex flex-col justify-between flex-1 px-24 pt-24"},o.a.createElement("div",{className:"flex justify-between items-start"},o.a.createElement(i.vb,{className:"py-0 sm:py-24",variant:"h4"},"Welcome back, John!"),o.a.createElement(i.F,{lgUp:!0},o.a.createElement(i.H,{onClick:function(t){return e.pageLayout.toggleRightSidebar()},"aria-label":"open left sidebar"},o.a.createElement(i.G,null,"menu")))),o.a.createElement("div",{className:"flex items-end"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement("div",{className:M()(l.selectedProject,"flex items-center h-40 px-16 text-16")},R.a.find(n,["id",s]).name),o.a.createElement(i.H,{className:M()(l.projectMenuButton,"h-40 w-40 p-0"),"aria-owns":m?"project-menu":void 0,"aria-haspopup":"true",onClick:this.handleOpenProjectMenu},o.a.createElement(i.G,null,"more_horiz")),o.a.createElement(i.S,{id:"project-menu",anchorEl:m,open:Boolean(m),onClose:this.handleCloseProjectMenu},n&&n.map(function(t){return o.a.createElement(i.T,{key:t.id,onClick:function(a){e.handleChangeProject(t.id)}},t.name)}))))),contentToolbar:o.a.createElement(i.rb,{value:c,onChange:this.handleChangeTab,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"off",className:"w-full border-b-1 px-24"},o.a.createElement(i.jb,{className:"text-14 font-600 normal-case",label:"Home"}),o.a.createElement(i.jb,{className:"text-14 font-600 normal-case",label:"Budget Summary"}),o.a.createElement(i.jb,{className:"text-14 font-600 normal-case",label:"Team Members"})),content:o.a.createElement("div",{className:"p-12"},0===c&&o.a.createElement(d.e,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},o.a.createElement(T,{widget:a.widget1})),o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},o.a.createElement(A,{widget:a.widget2})),o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},o.a.createElement(H,{widget:a.widget3})),o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/4 p-12"},o.a.createElement(U,{widget:a.widget4})),o.a.createElement("div",{className:"widget flex w-full p-12"},o.a.createElement(D,{widget:a.widget5})),o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},o.a.createElement(L,{widget:a.widget6})),o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},o.a.createElement(_,{widget:a.widget7}))),1===c&&o.a.createElement(d.e,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},o.a.createElement(I,{widget:a.widget8})),o.a.createElement("div",{className:"widget flex w-full sm:w-1/2 p-12"},o.a.createElement(J,{widget:a.widget9})),o.a.createElement("div",{className:"widget flex w-full p-12"},o.a.createElement(V,{widget:a.widget10}))),2===c&&o.a.createElement(d.e,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},o.a.createElement("div",{className:"widget flex w-full p-12"},o.a.createElement($,{widget:a.widget11})))),rightSidebarContent:o.a.createElement(d.e,{className:"w-full",enter:{animation:"transition.slideUpBigIn"}},o.a.createElement("div",{className:"widget w-full p-12"},o.a.createElement(F,null)),o.a.createElement("div",{className:"widget w-full p-12"},o.a.createElement(K,{widget:a.weatherWidget}))),onRef:function(t){e.pageLayout=t}}):null}}]),t}(m.Component);t.default=Object(E.a)("projectDashboardApp",S)(Object(u.withStyles)(function(e){return{content:{"& canvas":{maxHeight:"100%"}},selectedProject:{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 0 0 0"},projectMenuButton:{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"0 8px 0 0",marginLeft:1}}},{withTheme:!0})(Object(b.g)(Object(p.b)(function(e){var t=e.projectDashboardApp;return{widgets:t.widgets,projects:t.projects}},function(e){return Object(f.c)({getWidgets:x,getProjects:N},e)})(X))))}}]);