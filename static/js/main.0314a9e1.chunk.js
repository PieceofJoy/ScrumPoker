(this.webpackJsonpscrumpoker=this.webpackJsonpscrumpoker||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=(a(68),a(55)),s=a.n(o).a.connect("http://localhost:80/"),m=function(){s.emit("create","")},u=a(20),i=a(17),d=a(25),E=a(124),v=a(123),b=a(125),p=c.a.createContext({}),f=(a(99),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),o=Object(d.a)(l,2),f=o[0],h=o[1],k=Object(n.useState)(""),C=Object(d.a)(k,2),g=C[0],j=C[1],w=Object(n.useState)(""),O=Object(d.a)(w,2),y=O[0],S=O[1],N=(Object(n.useContext)(p),Object(i.f)());return Object(n.useEffect)((function(){!function(e,t){s.on("created",(function(e){t.push("/room/".concat(e))}))}(0,N)}),[]),c.a.createElement("div",{className:"main-page"},c.a.createElement("div",null,c.a.createElement("h1",null,"Scrum Poker")),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){return r(!0)}},"Join Room"),c.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){return h(!0)}},"Create Room")),c.a.createElement(v.a,{open:a,onClose:function(){return r(!1)}},c.a.createElement("div",{className:"create-modal"},c.a.createElement("div",null,"Room ID:",c.a.createElement(b.a,{value:g,onChange:function(e){return j(e.target.value)}})),c.a.createElement("div",null,"User Name:",c.a.createElement(b.a,{value:y,onChange:function(e){return S(e.target.value)}})),c.a.createElement(u.b,{to:"/room"},c.a.createElement(E.a,{id:"create-room-button",variant:"contained",color:"primary"},"Join")))),c.a.createElement(v.a,{open:f,onClose:function(){return h(!1)}},c.a.createElement("div",{className:"create-modal"},"User Name:",c.a.createElement(b.a,{value:y,onChange:function(e){return S(e.target.value)}}),c.a.createElement(E.a,{id:"create-room-button",variant:"contained",color:"primary",onClick:m},"Create"))))}),h=(a(104),function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(u.b,{to:"/"},c.a.createElement("h2",null,"  Scrum Poker Room "))),c.a.createElement("div",{class:"user-display"},c.a.createElement("div",{class:"user-header"}," Users "),c.a.createElement("div",{class:"user-list"}," ")),c.a.createElement("div",null,c.a.createElement("h3",null," Select a card "),c.a.createElement("div",{class:"cards-button"},c.a.createElement("button",{class:"cards"}," 0 "),c.a.createElement("button",{class:"cards"}," 1 "),c.a.createElement("button",{class:"cards"}," 2 "),c.a.createElement("button",{class:"cards"}," 3 "),c.a.createElement("button",{class:"cards"}," 5 "),c.a.createElement("button",{class:"cards"}," 8 ")),c.a.createElement("div",{class:"cards-button"},c.a.createElement("button",{class:"cards"}," 13 "),c.a.createElement("button",{class:"cards"}," 21 "),c.a.createElement("button",{class:"cards"}," 34 "),c.a.createElement("button",{class:"cards"}," 55 "),c.a.createElement("button",{class:"cards"}," 89 "),c.a.createElement("button",{class:"cards"}," Skip "))),c.a.createElement("div",null,c.a.createElement(E.a,{className:"show-btn",variant:"contained",color:"primary"},"Show Results"),c.a.createElement(E.a,{variant:"contained",color:"primary"},"Hide Results")))}),k=(a(105),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u.a,{basename:"/"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(f,null)),c.a.createElement(i.a,{path:"/room/:roomId"},c.a.createElement(h,null)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,a){e.exports=a(106)},68:function(e,t,a){},96:function(e,t){},99:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.0314a9e1.chunk.js.map