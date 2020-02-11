(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{2539:function(e,a,t){"use strict";t.r(a);var n=t(6),l=t(12),s=t(13),r=t(15),c=t(14),i=t(16),m=t(0),o=t.n(m),d=t(1),u=t(59),h=t(80),p=t(4),f=t(5),b=t.n(f),g=t(26),w=t(9),C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),m=0;m<s;m++)i[m]=arguments[m];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).state={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1},t.handleChange=function(e){t.setState(w.a.set(Object(n.a)({},t.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"canBeSubmitted",value:function(){var e=this.state,a=e.email,t=e.password,n=e.passwordConfirm,l=e.acceptTermsConditions;return a.length>0&&t.length>0&&t.length>3&&t===n&&l}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.name,n=a.email,l=a.password,s=a.passwordConfirm,r=a.acceptTermsConditions;return o.a.createElement("div",{className:b()(e.root,"flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")},o.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},o.a.createElement(p.d,{animation:"transition.expandIn"},o.a.createElement(d.d,{className:"w-full max-w-384"},o.a.createElement(d.f,{className:"flex flex-col items-center justify-center p-32"},o.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),o.a.createElement(d.vb,{variant:"h6",className:"mt-16 mb-32"},"CREATE AN ACCOUNT"),o.a.createElement("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full"},o.a.createElement(d.sb,{className:"mb-16",label:"Name",autoFocus:!0,type:"name",name:"name",value:t,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.sb,{className:"mb-16",label:"Email",type:"email",name:"email",value:n,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.sb,{className:"mb-16",label:"Password",type:"password",name:"password",value:l,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.sb,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:s,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.x,{className:"items-center"},o.a.createElement(d.y,{control:o.a.createElement(d.h,{name:"acceptTermsConditions",checked:r,onChange:this.handleChange}),label:"I read and accept terms and conditions"})),o.a.createElement(d.c,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Register",disabled:!this.canBeSubmitted()},"CREATE AN ACCOUNT")),o.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},o.a.createElement("span",{className:"font-medium"},"Already have an account?"),o.a.createElement(g.a,{className:"font-medium",to:"/pages/auth/login"},"Login")))))))}}]),a}(m.Component);a.default=Object(u.withStyles)(function(e){return{root:{background:"radial-gradient("+Object(h.darken)(e.palette.primary.dark,.5)+" 0%, "+e.palette.primary.dark+" 80%)",color:e.palette.primary.contrastText}}},{withTheme:!0})(C)}}]);