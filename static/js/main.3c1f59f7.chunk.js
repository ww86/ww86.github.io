(this["webpackJsonpworld-clock"]=this["webpackJsonpworld-clock"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),c=t.n(i),s=t(2),m=(t(14),t(1)),o=t.n(m),l=(t(4),{EST:"Eastern Standard Time",EDT:"Eastern Daylight Time",CST:"Central Standard Time",CDT:"Central Daylight Time",MST:"Mountain Standard Time",MDT:"Mountain Daylight Time",PST:"Pacific Standard Time",PDT:"Pacific Daylight Time",GMT:"Greenwich Mean Time",EAT:"East Africa Time",CET:"Central European Time",WAT:"West Africa Time",CAT:"Central Africa Time",EET:"Eastern European Time",CEST:"Central European Summer Time",SAST:"South African Standard Time",HDT:"Hawaii-Aleutian Daylight Time",AKDT:"Alaska Daylight Time",AST:"Atlantic Standard Time",ADT:"Atlantic Daylight Time",NDT:"Newfoundland Daylight Time",NZST:"New Zealand Standard Time",EEST:"Eastern European Summer Time",IST:"India Standard Time",HKT:"Hong Kong Time",WIB:"Western Indonesian Time",WIT:"Eastern Indonesian Time",IDT:"Israel Daylight Time",PKT:"Pakistan Standard Time",WITA:"Central Indonesian Time",KST:"Korea Standard Time",JST:"Japan Standard Time",WEST:"Western European Summer Time",AEST:"Australian Eastern Standard Time",ACST:"Australian Central Standard Time",AWST:"Australian Western Standard Time",UTC:"Coordinated Universal Time",BST:"British Summer Time",MSK:"Moscow Standard Time",HST:"Hawaii\u2013Aleutian Standard Time",MEST:"Middle European Summer Time",ChST:"Chamorro Standard Time",SST:"Samoa Standard Time"}),u=t(5),T=(t(18),t(3));function d(){var e=Object(u.a)(["\n              &:before {\n                transform: rotate(","deg);\n                transition: 500ms;\n              }\n            "]);return d=function(){return e},e}function f(){var e=Object(u.a)(["\n            &:before {\n              transform: rotate(","deg);\n              transition: 250ms;\n            }\n            &:after {\n              transform: rotate(","deg);\n              transition: 50ms;\n            }\n          "]);return f=function(){return e},e}var S=function(e){var a=e.hours,t=e.seconds,r=e.minutes,i=Object(n.useState)(t),c=Object(s.a)(i,2),m=c[0],o=c[1],l=Object(n.useState)(r),u=Object(s.a)(l,2),S=u[0],b=u[1],E=Object(n.useState)(a),h=Object(s.a)(E,2),j=h[0],O=h[1],v=function(e,a,t){var n=e*a-90;0===n&&t(360),t(n)};return Object(n.useEffect)((function(){v(t,6,o),v(r,6,b),v(a,30,O)})),Object(T.b)(n.Fragment,null,Object(T.b)("div",{className:"clock-container"},Object(T.b)("div",{className:"clock",css:Object(T.a)(f(),S,m)},Object(T.b)("span",{className:"clock__hour-hand",css:Object(T.a)(d(),j)}),Object(T.b)("span",{className:"clock__hand-hinge"}))))},b=(t(19),function(e){var a=e.zone,t=e.abbv,i=e.func;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"buttons__btn unselectable",onClick:function(){return i(a)}},t))}),E=function(e){var a=e.zones,t=e.func,i=function(e){for(var a=[],t=[],n=0;n<e.length;n++){var r=o.a.tz(e[n]).format("z");a[r]||(t.push([r,e[n]]),a[r]=!0)}return t}(a);return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"buttons-container"},r.a.createElement("div",{className:"buttons"},i.map((function(e,a){return r.a.createElement(b,{zone:e[1],abbv:e[0],func:t,key:a})})))))},h=function(){var e=o.a.tz.names(),a=Object(n.useState)(o.a.tz.guess()),t=Object(s.a)(a,2),i=t[0],c=t[1];o.a.fn.zoneName=function(){var e=this.zoneAbbr();return l[e]||e};var m=Object(n.useState)(o.a.tz(i).format("h")),u=Object(s.a)(m,2),T=u[0],d=u[1],f=Object(n.useState)(o.a.tz(i).format("m")),b=Object(s.a)(f,2),h=b[0],j=b[1],O=Object(n.useState)(o.a.tz(i).format("ss")),v=Object(s.a)(O,2),g=v[0],z=v[1],A=Object(n.useState)(o.a.tz(i).format("a")),p=Object(s.a)(A,2),k=p[0],C=p[1],D=Object(n.useState)(o.a.tz(i).format("zz")),N=Object(s.a)(D,2),w=N[0],I=N[1],y=Object(n.useState)(null),M=Object(s.a)(y,2),W=M[0],K=M[1],H=function(e){console.log("Start Clock"),K(setInterval((function(){a(e)}),500));var a=function(e){P(e||o.a.tz.guess())}},P=function(e){d(o.a.tz(e).format("h")),j(o.a.tz(e).format("mm")),z(o.a.tz(e).format("ss")),C(o.a.tz(e).format("a")),I(o.a.tz(e).format("zz"))};return Object(n.useEffect)((function(){c(o.a.tz.guess()),H()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"time"},r.a.createElement("div",{className:"zone"},w),r.a.createElement("span",null,T,":",h,":",g," ",k)),r.a.createElement(S,{hours:T,minutes:h,seconds:g}),r.a.createElement(E,{zones:e,func:function(e){c(e),P(e),console.log("Stop Clock"),clearInterval(W),H(e)}}),r.a.createElement("div",{className:"links"},r.a.createElement("a",{className:"link",href:"https://github.com/thnlsn/world-clock"},r.a.createElement("i",{class:"fab fa-github"})),r.a.createElement("a",{className:"link",href:"https://www.linkedin.com/in/thnlsn/"},r.a.createElement("i",{class:"fab fa-linkedin"}))))};t(20);c.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3c1f59f7.chunk.js.map