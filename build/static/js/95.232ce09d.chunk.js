(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{2644:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(12),r=a(13),i=a(15),m=a(14),c=a(16),o=a(0),s=a.n(o),d=a(1),u=a(59),f=a(80),h=a(4),b=a(5),p=a.n(b),x=a(20),v=a(26),g=a(9),w=a(164),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={email:""},a.handleChange=function(e){a.setState(g.a.set(Object(n.a)({},a.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.email;(0,a.props.forgotPassword)({email:t})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"canBeSubmitted",value:function(){return this.state.email.length>0}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.isLoading,n=this.state.email;return s.a.createElement("div",{className:p()(t.root,"flex flex-col flex-auto flex-no-shrink p-24 md:flex-row md:p-0")},s.a.createElement("div",{className:"flex flex-col flex-no-grow items-center text-white p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left"},s.a.createElement(h.d,{animation:"transition.slideUpIn",delay:300},s.a.createElement(d.vb,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to JASP")),s.a.createElement(h.d,{delay:400},s.a.createElement(d.vb,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"Start your live streaming now!"))),s.a.createElement(h.d,{animation:{translateX:[0,"100%"]}},s.a.createElement(d.d,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},s.a.createElement(d.f,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},s.a.createElement(d.vb,{variant:"h6",className:"md:w-full mb-32"},"RECOVER YOUR PASSWORD"),s.a.createElement("form",{name:"recoverForm",onSubmit:this.handleSubmit,noValidate:!0,className:"flex flex-col justify-center w-full"},s.a.createElement(d.sb,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:n,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),s.a.createElement(d.c,{type:"submit",variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:!this.canBeSubmitted()||a},"SEND RESET LINK")),s.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},s.a.createElement(v.a,{className:"font-medium",to:"/login"},"Go back to login"))))))}}]),t}(o.Component);t.default=Object(x.b)(function(e){return{isLoading:e.user.isLoading}},{forgotPassword:w.b})(Object(u.withStyles)(function(e){return{root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+Object(f.darken)(e.palette.primary.dark,.5)+" 100%)",color:e.palette.primary.contrastText}}},{withTheme:!0})(E))}}]);