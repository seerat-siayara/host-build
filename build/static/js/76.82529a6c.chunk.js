(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{2619:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),c=a(4),i=a(20),s=a(19),l=a(25);t.default=Object(i.b)(null,function(e){return Object(s.c)({showMessage:l.p,hideMessage:l.c},e)})(function(e){var t=e.showMessage;return r.a.createElement(c.s,{header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(o.G,{className:"text-18",color:"action"},"home"),r.a.createElement(o.G,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(o.vb,{color:"textSecondary"},"Components"),r.a.createElement(o.G,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(o.vb,{color:"textSecondary"},"Fuse Components")),r.a.createElement(o.vb,{variant:"h6"},"FuseMessage"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(o.vb,{className:"mb-16",component:"p"},r.a.createElement("code",null,"FuseMessage")," is a simple snackbar trigger for easily showing messages via redux action. It should be located in the theme layouts."),r.a.createElement(o.vb,{className:"mt-32 mb-8",variant:"h5"},"Usage"),r.a.createElement(o.vb,{className:"mb-16",component:"p"},"You can show messages anywhere with dispatching the action showMessage, its using Material-UI's snackbar so you can pass the props in the object:"),r.a.createElement(c.k,{component:"pre",className:"language-jsx"},"\n                                    <Button onClick={() => showMessage({\n                                        message     : 'Hi, how are you?',//text or html\n                                        autoHideDuration: 6000,//ms\n                                        anchorOrigin: {\n                                            vertical  : 'top',//top bottom\n                                            horizontal: 'right'//left center right\n                                        },\n                                        variant: 'success'//success error info warning null\n                                    })}>\n                                        Top - Right\n                                    </Button>\n                            "),r.a.createElement(o.vb,{className:"mt-32 mb-8",variant:"h5"},"Example"),r.a.createElement(o.vb,{className:"mt-32 mb-8",variant:"h6"},"Position"),r.a.createElement("div",null,r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"right"}})}},"Top - Right"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"center"}})}},"Top-Center"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"left"}})}},"Top-Left"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}},"Bottom-Right"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"center"}})}},"Bottom-Center"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"left"}})}},"Bottom-Left")),r.a.createElement(o.vb,{className:"mt-32 mb-8",variant:"h6"},"Variants"),r.a.createElement("div",null,r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?"})}},"Default"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",variant:"success"})}},"Success"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",variant:"warning"})}},"Warning"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",variant:"error"})}},"Error"),r.a.createElement(o.c,{onClick:function(){return t({message:"Hi, how are you?",variant:"info"})}},"Info")))})})}}]);