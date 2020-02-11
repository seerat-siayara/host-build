(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{2551:function(e,t,a){"use strict";a.r(t);var l=a(12),n=a(13),r=a(15),c=a(14),m=a(16),i=a(0),o=a.n(i),s=a(1),u=a(59),E=a(80),d=a(4),b=a(5),v=a.n(b),p=a(53),f=a.n(p),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,m=new Array(n),i=0;i<n;i++)m[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(m)))).state={invoice:null},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/invoices/get-invoice",{params:{id:"5725a6802d"}}).then(function(t){e.setState({invoice:t.data})})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.invoice,a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return o.a.createElement("div",{className:v()(e.root,"flex-grow flex-no-shrink p-0 sm:p-64 print:p-0")},t&&o.a.createElement(d.d,{animation:{translateY:[0,"100%"]},duration:600},o.a.createElement(s.d,{className:"mx-auto w-xl print:w-full print:shadow-none"},o.a.createElement(s.f,{className:"p-88 print:p-0"},o.a.createElement("div",{className:"flex flex-row justify-between items-start"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-80 print:mb-0"},o.a.createElement("img",{className:"w-160 print:w-60",src:"assets/images/logos/fuse.svg",alt:"logo"}),o.a.createElement("div",{className:v()(e.divider,"mx-48 w-px h-128 print:mx-16")}),o.a.createElement("div",{className:"max-w-160"},o.a.createElement(s.vb,{color:"textSecondary"},t.from.title),t.from.address&&o.a.createElement(s.vb,{color:"textSecondary"},t.from.address),t.from.phone&&o.a.createElement(s.vb,{color:"textSecondary"},o.a.createElement("span",null,"Phone:"),t.from.phone),t.from.email&&o.a.createElement(s.vb,{color:"textSecondary"},o.a.createElement("span",null,"Email:"),t.from.email),t.from.website&&o.a.createElement(s.vb,{color:"textSecondary"},o.a.createElement("span",null,"Web:"),t.from.website))),o.a.createElement("div",{className:"flex items-center"},o.a.createElement("div",{className:"flex justify-end items-center w-160 print:w-60"},o.a.createElement(s.vb,{variant:"h5",className:"font-light print:text-16",color:"textSecondary"},"CLIENT")),o.a.createElement("div",{className:v()(e.divider,"mx-48 w-px h-128 print:mx-16")}),o.a.createElement("div",{className:"max-w-160"},o.a.createElement(s.vb,{color:"textSecondary"},t.client.title),t.client.address&&o.a.createElement(s.vb,{color:"textSecondary"},t.client.address),t.client.phone&&o.a.createElement(s.vb,{color:"textSecondary"},o.a.createElement("span",null,"Phone:"),t.client.phone),t.client.email&&o.a.createElement(s.vb,{color:"textSecondary"},o.a.createElement("span",null,"Email:"),t.client.email),t.client.website&&o.a.createElement(s.vb,{color:"textSecondary"},o.a.createElement("span",null,"Web:"),t.client.website)))),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"pr-16 pb-32"},o.a.createElement(s.vb,{className:"font-light",variant:"h4",color:"textSecondary"},"INVOICE")),o.a.createElement("td",{className:"pb-32"},o.a.createElement(s.vb,{className:"font-light",variant:"h4"},t.number))),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right pr-16"},o.a.createElement(s.vb,{color:"textSecondary"},"INVOICE DATE")),o.a.createElement("td",null,o.a.createElement(s.vb,null,t.date))),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right pr-16"},o.a.createElement(s.vb,{color:"textSecondary"},"DUE DATE")),o.a.createElement("td",null,o.a.createElement(s.vb,null,t.dueDate))),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right pr-16"},o.a.createElement(s.vb,{color:"textSecondary"},"TOTAL DUE")),o.a.createElement("td",null,o.a.createElement(s.vb,null,a.format(t.total))))))),o.a.createElement("div",{className:"mt-96 print:mt-0"},o.a.createElement(s.kb,{className:"simple"},o.a.createElement(s.nb,null,o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,"SERVICE"),o.a.createElement(s.mb,null,"UNIT"),o.a.createElement(s.mb,{align:"right"},"UNIT PRICE"),o.a.createElement(s.mb,{align:"right"},"QUANTITY"),o.a.createElement(s.mb,{align:"right"},"TOTAL"))),o.a.createElement(s.lb,null,t.services.map(function(e){return o.a.createElement(s.pb,{key:e.id},o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"mb-8",variant:"subtitle1"},e.title),o.a.createElement(s.vb,{variant:"caption",color:"textSecondary"},e.detail)),o.a.createElement(s.mb,null,e.unit),o.a.createElement(s.mb,{align:"right"},a.format(e.unitPrice)),o.a.createElement(s.mb,{align:"right"},e.quantity),o.a.createElement(s.mb,{align:"right"},a.format(e.total)))}))),o.a.createElement(s.kb,{className:"simple"},o.a.createElement(s.lb,null,o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(t.subtotal)))),o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(t.tax)))),o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},a.format(t.discount)))),o.a.createElement(s.pb,null,o.a.createElement(s.mb,null,o.a.createElement(s.vb,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),o.a.createElement(s.mb,{align:"right"},o.a.createElement(s.vb,{className:"font-light",variant:"h4",color:"textSecondary"},a.format(t.total))))))),o.a.createElement("div",{className:"mt-96 print:mt-0 print:px-16"},o.a.createElement(s.vb,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"flex-no-shrink mr-24"},o.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),o.a.createElement(s.vb,{className:"font-medium mb-64",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros.")))))))}}]),t}(i.Component);t.default=Object(u.withStyles)(function(e){return{root:{background:"radial-gradient("+Object(E.darken)(e.palette.primary.dark,.5)+" 0%, "+e.palette.primary.dark+" 80%)"},divider:{backgroundColor:e.palette.divider}}},{withTheme:!0})(x)}}]);