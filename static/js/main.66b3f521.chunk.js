(this["webpackJsonpworld-clock"]=this["webpackJsonpworld-clock"]||[]).push([[0],{13:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),c=t.n(i),s=t(2),m=(t(13),t(1)),T=t.n(m),o=(t(6),{EST:"Eastern Standard Time",EDT:"Eastern Daylight Time",CST:"Central Standard Time",CDT:"Central Daylight Time",MST:"Mountain Standard Time",MDT:"Mountain Daylight Time",PST:"Pacific Standard Time",PDT:"Pacific Daylight Time",GMT:"Greenwich Mean Time",EAT:"East Africa Time",CET:"Central European Time",WAT:"West Africa Time",CAT:"Central Africa Time",EET:"Eastern European Time",CEST:"Central European Summer Time",SAST:"South African Standard Time",HDT:"Hawaii-Aleutian Daylight Time",AKDT:"Alaska Daylight Time",AST:"Atlantic Standard Time",ADT:"Atlantic Daylight Time",NDT:"Newfoundland Daylight Time",NZST:"New Zealand Standard Time",EEST:"Eastern European Summer Time",IST:"India Standard Time",HKT:"Hong Kong Time",WIB:"Western Indonesian Time",WIT:"Eastern Indonesian Time",IDT:"Israel Daylight Time",PKT:"Pakistan Standard Time",WITA:"Central Indonesian Time",KST:"Korea Standard Time",JST:"Japan Standard Time",WEST:"Western European Summer Time",AEST:"Australian Eastern Standard Time",ACST:"Australian Central Standard Time",AWST:"Australian Western Standard Time",UTC:"Coordinated Universal Time",BST:"British Summer Time",MSK:"Moscow Standard Time",HST:"Hawaii\u2013Aleutian Standard Time",MEST:"Middle European Summer Time",ChST:"Chamorro Standard Time",SST:"Samoa Standard Time",AKST:"Alaskan Standard Time",NST:"Newfoundland Standard Time",AEDT:"Australian Eastern Daylight Time",NZDT:"New Zealand Daylight Time",WET:"Western European Time",MET:"Middle European Time",ACDT:"Australian Central Daylight Time","-01":"UTC -1","-02":"UTC -2","-03":"UTC -3","-04":"UTC -4","-05":"UTC -5","-06":"UTC -6","-07":"UTC -7","-08":"UTC -8","-09":"UTC -9","-0930":"UTC -9:30","-10":"UTC -0","-11":"UTC -11","-12":"UTC -12","+00":"UTC +0","+01":"UTC +1","+02":"UTC +2","+03":"UTC +3","+0330":"UTC +3:30","+04":"UTC +4","+0430":"UTC +4:30","+05":"UTC +5","+0530":"UTC +5:30","+0545":"UTC +5:45","+06":"UTC +6","+0630":"UTC +6:30","+07":"UTC +7","+08":"UTC +8","+0845":"UTC +8:45","+09":"UTC +9","+10":"UTC +10","+11":"UTC +11","+12":"UTC +12","+13":"UTC +13","+1345":"UTC +13:45","+14":"UTC +14"}),l=t(4),u=t(3);function d(){var e=Object(l.a)(["\n            &:before {\n              transform: rotate(","deg);\n              transition: 500ms;\n            }\n          "]);return d=function(){return e},e}function f(){var e=Object(l.a)(["\n          &:before {\n            transform: rotate(","deg);\n            transition: 250ms;\n          }\n          &:after {\n            transform: rotate(","deg);\n            transition: 50ms;\n          }\n        "]);return f=function(){return e},e}var S=function(e){var a=e.hours,t=e.seconds,r=e.minutes,i=Object(n.useState)(t),c=Object(s.a)(i,2),m=c[0],T=c[1],o=Object(n.useState)(r),l=Object(s.a)(o,2),S=l[0],b=l[1],C=Object(n.useState)(a),E=Object(s.a)(C,2),h=E[0],U=E[1],g=function(e,a,t){var n=e*a-90;0===n&&t(360),t(n)};return Object(n.useEffect)((function(){g(t,6,T),g(r,6,b),g(a,30,U)}),[t,r,a]),Object(u.b)("div",{className:"clock-container"},Object(u.b)("div",{className:"clock",css:Object(u.a)(f(),S,m)},Object(u.b)("span",{className:"clock__hour-hand",css:Object(u.a)(d(),h)}),Object(u.b)("span",{className:"clock__hand-hinge"})))},b=function(e){var a=e.zone,t=e.abbv,n=e.func;return r.a.createElement("div",{className:"buttons__btn unselectable",onClick:function(){return n(a)}},t)},C=function(e){var a=e.zones,t=e.func,n=function(e){for(var a=[],t=[],n=0;n<e.length;n++){var r=T.a.tz(e[n]).format("z");a[r]||(t.push([r,e[n]]),a[r]=!0)}return t}(a);return r.a.createElement("div",{className:"buttons-container"},r.a.createElement("div",{className:"buttons"},n.map((function(e,a){return r.a.createElement(b,{zone:e[1],abbv:e[0],func:t,key:a})}))))},E=function(){var e=T.a.tz.names(),a=Object(n.useState)(T.a.tz.guess()),t=Object(s.a)(a,2),i=t[0],c=t[1];T.a.fn.zoneName=function(){var e=this.zoneAbbr();return o[e]||e};var m=Object(n.useState)(T.a.tz(i).format("h")),l=Object(s.a)(m,2),u=l[0],d=l[1],f=Object(n.useState)(T.a.tz(i).format("m")),b=Object(s.a)(f,2),E=b[0],h=b[1],U=Object(n.useState)(T.a.tz(i).format("ss")),g=Object(s.a)(U,2),p=g[0],A=g[1],j=Object(n.useState)(T.a.tz(i).format("a")),v=Object(s.a)(j,2),O=v[0],z=v[1],N=Object(n.useState)(T.a.tz(i).format("zz")),D=Object(s.a)(N,2),k=D[0],w=D[1],y=Object(n.useState)(null),I=Object(s.a)(y,2),M=I[0],W=I[1],_=function(e){W(setInterval((function(){a(e)}),500));var a=function(e){K(e||T.a.tz.guess())}},K=function(e){d(T.a.tz(e).format("h")),h(T.a.tz(e).format("mm")),A(T.a.tz(e).format("ss")),z(T.a.tz(e).format("a")),w(T.a.tz(e).format("zz"))};return Object(n.useEffect)((function(){c(T.a.tz.guess()),_()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"time u-bg-gradient-down"},r.a.createElement("span",{className:"time__exact heading-secondary"},u,":",E,":",p," ",r.a.createElement("span",null,O))),r.a.createElement(S,{hours:u,minutes:E,seconds:p}),r.a.createElement("div",{className:"time u-pd-small u-bg-gradient-up"},r.a.createElement("div",{className:"time__zone heading-primary"},k)),r.a.createElement(C,{zones:e,func:function(e){c(e),K(e),clearInterval(M),_(e)}}),r.a.createElement("div",{className:"u-spacer"},"\xa0"),r.a.createElement("div",{className:"links"},r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/thnlsn/world-clock"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/thnlsn/"},r.a.createElement("i",{className:"fab fa-linkedin"}))))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.66b3f521.chunk.js.map