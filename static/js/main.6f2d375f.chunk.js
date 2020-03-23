(this.webpackJsonpscrumpoker=this.webpackJsonpscrumpoker||[]).push([[0],{101:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=n(19),u=(n(70),n(31)),i=n(57),s=n.n(i).a.connect("http://localhost:80/"),m=function(e){s.emit("create",e)},d=function(e){s.emit("vote",e)},E=function(){s.emit("showScore")},f=function(){s.emit("hideScore")},b=n(21),v=n(17),h=n(126),p=n(125),k=n(127),N=(n(101),function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),i=u[0],s=u[1],d=Object(a.useState)(""),E=Object(b.a)(d,2),f=E[0],v=E[1],N=Object(a.useState)(""),S=Object(b.a)(N,2),C=S[0],w=S[1];return c.a.createElement("div",{className:"main-page"},c.a.createElement("div",null,c.a.createElement("h1",null,"Scrum Poker")),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){return r(!0)}},"Join Room"),c.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){return s(!0)}},"Create Room")),c.a.createElement(p.a,{open:n,onClose:function(){return r(!1)}},c.a.createElement("div",{className:"create-modal"},c.a.createElement("div",null,"Room ID:",c.a.createElement(k.a,{value:f,onChange:function(e){return v(e.target.value)}})),c.a.createElement("div",null,"User Name:",c.a.createElement(k.a,{value:C,onChange:function(e){return w(e.target.value)}})),c.a.createElement(l.b,{to:"/room"},c.a.createElement(h.a,{id:"create-room-button",variant:"contained",color:"primary",onClick:function(){return m(C)}},"Join")))),c.a.createElement(p.a,{open:i,onClose:function(){return s(!1)}},c.a.createElement("div",{className:"create-modal"},"User Name:",c.a.createElement(k.a,{value:C,onChange:function(e){return w(e.target.value)}}),c.a.createElement(h.a,{id:"create-room-button",variant:"contained",color:"primary",onClick:function(){return m(C)}},"Create"))))}),S=(n(106),function(e){var t=e.users,n=e.isScoreShown;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(l.b,{to:"/"},c.a.createElement("h2",null," Scrum Poker Room "))),c.a.createElement("div",null,c.a.createElement("span",{className:"user-display"},c.a.createElement("div",{className:"user-header"}," Users "),c.a.createElement("div",{className:"user-list"},Object.keys(t).map((function(e,a){return c.a.createElement("div",{key:t.name+a},t[e].name," ",n?t[e].score:"")})))),c.a.createElement("span",{className:"cards-wrapper"},c.a.createElement("h3",null," Select a card "),c.a.createElement("div",{className:"cards-button"},c.a.createElement("button",{className:"cards",onClick:function(){return d(0)}}," 0 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(1)}}," 1 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(2)}}," 2 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(3)}}," 3 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(5)}}," 5 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(8)}}," 8 ")),c.a.createElement("div",{className:"cards-button"},c.a.createElement("button",{className:"cards",onClick:function(){return d(13)}}," 13 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(21)}}," 21 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(34)}}," 34 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(55)}}," 55 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(89)}}," 89 "),c.a.createElement("button",{className:"cards",onClick:function(){return d(null)}}," Skip ")))),c.a.createElement("div",null,c.a.createElement(h.a,{className:"show-btn",variant:"contained",color:"primary",onClick:E},"Show Results"),c.a.createElement(h.a,{className:"hide-btn",variant:"contained",color:"primary",onClick:f},"Hide Results")))}),C=(n(107),function(){var e=Object(a.useState)({users:{},isScoreShown:!1}),t=Object(b.a)(e,2),n=t[0],r=t[1],o=Object(v.f)();return Object(a.useEffect)((function(){!function(e,t){s.on("created",(function(e){t.push("/room/".concat(e))})),s.on("update",(function(t){e((function(e){return Object(u.a)({},e,{users:t})}))})),s.on("onShowScore",(function(){e((function(e){return Object(u.a)({},e,{isScoreShown:!0})}))})),s.on("onHideScore",(function(){e((function(e){return Object(u.a)({},e,{isScoreShown:!1})}))}))}(r,o)}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/"},c.a.createElement(N,null)),c.a.createElement(v.a,{path:"/room/:roomId"},c.a.createElement(S,{users:n.users,isScoreShown:n.isScoreShown}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(l.a,{basename:"/"},c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,n){e.exports=n(108)},70:function(e,t,n){},98:function(e,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.6f2d375f.chunk.js.map