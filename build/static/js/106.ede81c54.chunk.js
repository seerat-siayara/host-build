(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{2558:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),l=a(15),i=a(14),s=a(16),c=a(0),o=a.n(c),m=a(1),d=a(59),p=a(4),u=a(5),h=a.n(u),x=a(53),f=a.n(x),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={data:[],expanded:null,searchText:""},a.toogleExpansion=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},a.handleSearch=function(e){a.setState({searchText:e.target.value})},a.getFilteredArray=function(e,t){return 0===t.length?e:p.A.filterArrayByString(e,t)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/faq").then(function(t){e.setState({data:t.data})})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.data,r=a.expanded,l=a.searchText,i=this.getFilteredArray(n,l);return o.a.createElement("div",{className:"w-full"},o.a.createElement("div",{className:h()(t.header,"flex flex-col items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")},o.a.createElement(p.d,{animation:"transition.slideUpIn",duration:400,delay:100},o.a.createElement(m.vb,{color:"inherit",className:"text-36 sm:text-56 font-light"},"We're here to help")),o.a.createElement(p.d,{duration:400,delay:600},o.a.createElement(m.vb,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-8 sm:mt-16 mx-auto max-w-512"},"Frequently asked questions")),o.a.createElement(m.W,{className:"flex items-center h-56 w-full max-w-md mt-16 sm:mt-32",elevation:1},o.a.createElement(m.G,{color:"action",className:"ml-16"},"search"),o.a.createElement(m.I,{placeholder:"Search in faqs...",className:"px-16",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"},value:l,onChange:this.handleSearch}))),o.a.createElement("div",{className:"max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32"},o.a.createElement(p.e,{enter:{animation:"transition.slideUpBigIn"}},i.map(function(a){return o.a.createElement(m.s,{className:t.panel,key:a.id,expanded:r===a.id,onChange:e.toogleExpansion(a.id),elevation:0},o.a.createElement(m.u,{expandIcon:o.a.createElement(m.G,null,"expand_more")},o.a.createElement("div",{className:"flex items-center"},o.a.createElement(m.G,{className:"mr-8",color:"action"},"help_outline"),o.a.createElement(m.vb,{className:""},a.question))),o.a.createElement(m.t,null,o.a.createElement(m.vb,{className:""},a.answer)))}))))}}]),t}(c.Component);t.default=Object(d.withStyles)(function(e){return{header:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)",color:e.palette.primary.contrastText},panel:{margin:0,borderWidth:"1px 1px 0 1px",borderStyle:"solid",borderColor:e.palette.divider,"&:first-child":{borderRadius:"16px 16px 0 0"},"&:last-child":{borderRadius:"0 0 16px 16px",borderWidth:"0 1px 1px 1px"}}}},{withTheme:!0})(b)}}]);