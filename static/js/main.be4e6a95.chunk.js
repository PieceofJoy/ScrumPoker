(this.webpackJsonpscrumpoker=this.webpackJsonpscrumpoker||[]).push([[0],{101:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(19),u=(a(70),a(56)),s=a(57),i=a.n(s).a.connect("http://localhost:80/"),m=function(e){i.emit("vote",e)},d=a(21),E=a(17),f=a(126),v=a(125),b=a(127),p=(a(101),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(d.a)(o,2),s=u[0],m=u[1],E=Object(n.useState)(""),p=Object(d.a)(E,2),k=p[0],N=p[1],h=Object(n.useState)(""),C=Object(d.a)(h,2),j=C[0],O=C[1];return r.a.createElement("div",{className:"main-page"},r.a.createElement("div",null,r.a.createElement("h1",null,"Scrum Poker")),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){return c(!0)}},"Join Room"),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){return m(!0)}},"Create Room")),r.a.createElement(v.a,{open:a,onClose:function(){return c(!1)}},r.a.createElement("div",{className:"create-modal"},r.a.createElement("div",null,"Room ID:",r.a.createElement(b.a,{value:k,onChange:function(e){return N(e.target.value)}})),r.a.createElement("div",null,"User Name:",r.a.createElement(b.a,{value:j,onChange:function(e){return O(e.target.value)}})),r.a.createElement(l.b,{to:"/room"},r.a.createElement(f.a,{id:"create-room-button",variant:"contained",color:"primary"},"Join")))),r.a.createElement(v.a,{open:s,onClose:function(){return m(!1)}},r.a.createElement("div",{className:"create-modal"},"User Name:",r.a.createElement(b.a,{value:j,onChange:function(e){return O(e.target.value)}}),r.a.createElement(f.a,{id:"create-room-button",variant:"contained",color:"primary",onClick:function(){return e=j,void i.emit("create",e);var e}},"Create"))))}),k=(a(106),function(e){var t=e.users;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h2",null," Scrum Poker Room "))),r.a.createElement("div",null,r.a.createElement("span",{className:"user-display"},r.a.createElement("div",{className:"user-header"}," Users "),r.a.createElement("div",{className:"user-list"},Object.keys(t).map((function(e,a){return r.a.createElement("div",{key:t.name+a},t[e].name," ",t[e].score)})))),r.a.createElement("span",{className:"cards-wrapper"},r.a.createElement("h3",null," Select a card "),r.a.createElement("div",{className:"cards-button"},r.a.createElement("button",{className:"cards",onClick:function(){return m(0)}}," 0 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(1)}}," 1 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(2)}}," 2 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(3)}}," 3 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(5)}}," 5 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(8)}}," 8 ")),r.a.createElement("div",{className:"cards-button"},r.a.createElement("button",{className:"cards",onClick:function(){return m(13)}}," 13 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(21)}}," 21 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(34)}}," 34 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(55)}}," 55 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(89)}}," 89 "),r.a.createElement("button",{className:"cards",onClick:function(){return m(null)}}," Skip ")))),r.a.createElement("div",null,r.a.createElement(f.a,{className:"show-btn",variant:"contained",color:"primary"},"Show Results"),r.a.createElement(f.a,{variant:"contained",color:"primary"},"Hide Results")))}),N=(a(107),function(){var e=Object(n.useState)({users:{}}),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(E.f)();return Object(n.useEffect)((function(){!function(e,t){i.on("created",(function(e){t.push("/room/".concat(e))})),i.on("update",(function(t){e((function(e){return Object(u.a)({},e,{users:t})}))}))}(c,o)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement(p,null)),r.a.createElement(E.a,{path:"/room/:roomId"},r.a.createElement(k,{users:a.users}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{basename:"/"},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,a){e.exports=a(108)},70:function(e,t,a){},98:function(e,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.be4e6a95.chunk.js.map