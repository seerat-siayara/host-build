(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{2552:function(e,t,a){"use strict";a.r(t);var l=a(12),n=a(13),r=a(15),c=a(14),m=a(16),i=a(0),o=a.n(i),s=a(1),u=a(59),b=a(80),d=a(4),E=a(5),v=a.n(E),p=a(53),f=a.n(p),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,m=new Array(n),i=0;i<n;i++)m[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(m)))).state={invoice:null},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/invoices/get-invoice",{params:{id:"5725a6802d"}}).then(function(t){e.setState({invoice:t.data})})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.invoice,a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return o.a.createElement("div",{className:v()(e.root,"flex-grow flex-no-shrink p-0 sm:p-64 print:p-0")},t&&o.a.createElement(d.d,{animation:{translateY:[0,"100%"]},duration:600},o.a.createElement(s.d,{className:"mx-auto w-xl print:w-full print:p-8 print:shadow-none"},o.a.createElement(s.f,{className:"p-88 print:p-0"},o.a.createElement(s.vb,{color:"textSecondary",className:"mb-32"},t.date),o.a.createElement("div",{className:"flex justify-between"},o.a.createElement("div",null,o.a.createElement("table",{className:"mb-16"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"pr-16 pb-4"},o.a.createElement(s.vb,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),o.a.createElement("td",{className:"pb-4"},o.a.createElement(s.vb,{className:"font-light",variant:"h6"},t.number))),o.a.createElement("tr",null,o.a.createElement("td",{className:"pr-16"},o.a.createElement(s.vb,{color:"textSecondary"},"INVOICE DATE")),o.a.createElement("td",null,o.a.createElement(s.vb,null,t.date))),o.a.createElement("tr",null,o.a.createElement("td",{className:"pr-16"},o.a.createElement(s.vb,{color:"textSecondary"},"DUE DATE")),o.a.createElement("td",null,o.a.createElement(s.vb,null,t.dueDate))))),o.a.createElement(s.vb,{color:"textSecondary"},t.client.title),t.client.address&&o.a.createElement(s.vb,{color:"textSecondary"},t.client.address),t.client.phone&&o.a.createElement(s.vb,{color:"textSecondary"},t.client.phone),t.client.email&&o.a.createElement(s.vb,{color:"textSecondary"},t.client.email),t.client.website&&o.a.createElement(s.vb,{color:"textSecondary"},t.client.website)),o.a.createElement("div",{className:v()(e.seller,"flex items-center p-16")},o.a.createElement("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),o.a.createElement("div",{className:v()(e.divider,"w-px ml-8 mr-16 h-96 opacity-50")}),o.a.createElement("div",null,o.a.createElement(s.vb,{color:"inherit"},t.from.title),t.from.address&&o.a.createElement(s.vb,{color:"inherit"},t.from.address),t.from.phone&&o.a.createElement(s.vb,{color:"inherit"},t.from.phone),t.from.email&&o.a.createElement(s.vb,{color:"inherit"},t.from.email),t.from.website&&o.a.createElement(s.vb,{color:"inherit"},t.from.website)))),o.a.createElement("div",{className:"mt-64"},o.a.createElement(s.kb,{className:"simple"},o.a.createElement(s.nb,null,o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,"SERVICE"),o.a.createElement(s.mb,null,"UNIT"),o.a.createElement(s.mb,{align:"right"},"UNIT PRICE"),o.a.createElement(s.mb,{align:"right"},"QUANTITY"),o.a.createElement(s.mb,{align:"right"},"TOTAL"))),o.a.createElement(s.lb,null,t.services.map(function(e){return o.a.createElement(s.pb,{key:e.id},o.a.createElement(s.mb,null,o.a.createElement(s.vb,{variant:"subtitle1"},e.title)),o.a.createElement(s.mb,null,e.unit),o.a.createElement(s.mb,{align:"right"},a.format(e.unitPrice)),o.a.createElement(s.mb,{align:"right"},e.quantity),o.a.createElement(s.mb,{align:"right"},a.format(e.total)))}))),o.a.createElement(s.kb,{className:"simple mt-32"},o.a.createElement(s.lb,null,o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(t.subtotal)))),o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(t.tax)))),o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(t.discount)))),o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-light",variant:"h4",color:"textSecondary"},a.format(t.total))))))),o.a.createElement("div",{className:"mt-96"},o.a.createElement(s.vb,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"flex-no-shrink mr-24"},o.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),o.a.createElement(s.vb,{className:"font-medium mb-64",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros.")))))))}}]),t}(i.Component);t.default=Object(u.withStyles)(function(e){return{root:{background:"radial-gradient("+Object(b.darken)(e.palette.primary.dark,.5)+" 0%, "+e.palette.primary.dark+" 80%)"},divider:{backgroundColor:e.palette.getContrastText(e.palette.primary.dark)},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480}}},{withTheme:!0})(g)}}]);