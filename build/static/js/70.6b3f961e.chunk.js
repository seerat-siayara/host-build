(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{2622:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(13),l=a(15),s=a(14),c=a(16),r=a(0),m=a.n(r),o=a(1),u=a(4),p=["List Item 1","List Item 2","List Item 3","List Item 4","List Item 5","List Item 6","List Item 7","List Item 8","List Item 9","List Item 10","List Item 11","List Item 12","List Item 13","List Item 14","List Item 15"],f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={intervalId:null,list:p,selectedEffect:"fade",customAnimation:{translateX:[0,"100%"],opacity:[1,0]}},a.handleChange=function(e){a.setState({selectedEffect:e.target.value})},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){return e.setState({list:0!==e.state.list.length?[]:p})},2e3);this.setState({intervalId:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){return m.a.createElement(u.s,{header:m.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},m.a.createElement("div",{className:"flex flex-col"},m.a.createElement("div",{className:"flex items-center mb-16"},m.a.createElement(o.G,{className:"text-18",color:"action"},"home"),m.a.createElement(o.G,{className:"text-16",color:"action"},"chevron_right"),m.a.createElement(o.vb,{color:"textSecondary"},"Components"),m.a.createElement(o.G,{className:"text-16",color:"action"},"chevron_right"),m.a.createElement(o.vb,{color:"textSecondary"},"Fuse Components")),m.a.createElement(o.vb,{variant:"h6"},"FuseAnimateGroup"))),content:m.a.createElement("div",{className:"p-24 max-w-2xl"},m.a.createElement(o.vb,{className:"mb-16",component:"p"},m.a.createElement("code",null,"FuseAnimateGroup")," is a container component which uses ",m.a.createElement("code",null,"VelocityTransitionGroup")," of ",m.a.createElement("code",null,"velocity-react")," library. Delegates to the React TransitionGroup addon."),m.a.createElement(o.vb,{className:"mt-32 mb-8",variant:"h5"},"Sample Usage"),m.a.createElement("div",{className:"flex flex-wrap p-48 items-start"},m.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},m.a.createElement(o.M,null,m.a.createElement(u.e,{enter:{animation:"transition.slideUpBigIn"},leave:{animation:"transition.slideUpBigOut"}},this.state.list.map(function(e){return m.a.createElement(o.N,{key:e},e)})))),m.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},m.a.createElement(u.k,{component:"pre",className:"language-jsx"},'\n                                     <List>\n                                        <FuseAnimateGroup\n                                            enter={{\n                                                animation: "transition.slideUpBigIn"\n                                            }}\n                                            leave={{\n                                                animation: "transition.slideUpBigOut"\n                                            }}\n                                        >\n                                            {\n                                                this.state.list.map((item) => (\n                                                        <ListItem key={item}>\n                                                            {item}\n                                                        </ListItem>\n                                                    )\n                                                )\n                                            }\n                                        </FuseAnimateGroup>\n                                    </List>\n                                    '))),m.a.createElement(o.vb,{className:"mb-16",component:"p"},"For more information checkout the",m.a.createElement("a",{href:"https://github.com/google-fabric/velocity-react",target:"_blank",rel:"noopener noreferrer",className:"ml-8 font-bold"},"velocity-react"),"."))})}}]),t}(r.Component);t.default=f}}]);