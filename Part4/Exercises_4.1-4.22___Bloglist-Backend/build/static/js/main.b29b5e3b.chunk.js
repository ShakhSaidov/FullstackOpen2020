(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),l=n.n(u),c=n(2),o=n.n(c),s=n(4),i=n(3),m=function(e){var t=e.blog;return r.a.createElement("div",null,'"',t.title,'" by ',t.author)},p=n(5),f=n.n(p),b=function(){return f.a.get("/api/blogs").then((function(e){return e.data}))},v={login:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=(n(39),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(null),c=Object(i.a)(l,2),p=c[0],f=c[1],d=Object(a.useState)(""),g=Object(i.a)(d,2),E=g[0],h=g[1],j=Object(a.useState)(""),O=Object(i.a)(j,2),w=O[0],y=O[1],x=Object(a.useState)(null),k=Object(i.a)(x,2),S=k[0],B=k[1],C=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.login({username:E,password:w});case 4:n=e.sent,B(n),h(""),y(""),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),f("Wrong credentials"),setTimeout((function(){f(null)}),5e3);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b().then((function(e){return u(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Bloglist"),r.a.createElement((function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)}),{message:p}),null===S?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:C},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",value:E,name:"Username",onChange:function(e){var t=e.target;return h(t.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",value:w,name:"Password",onChange:function(e){var t=e.target;return y(t.value)}})),r.a.createElement("button",{type:"submit"},"Login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"Blogs by ",S.name)),n.map((function(e){return r.a.createElement(m,{key:e.id,blog:e})})))});l.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b29b5e3b.chunk.js.map