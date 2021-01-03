(this.webpackJsonpex=this.webpackJsonpex||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t(15),a=t.n(o),r=t(6),u=t(3),i=t(2),s=function(e){return Object(c.jsxs)("div",{children:["Contacts shown with ",Object(c.jsx)("input",{value:e.value,onChange:e.handleSearchChange})]})},l=function(e){return Object(c.jsxs)("form",{onSubmit:e.addName,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.name,onChange:e.nameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.number,onChange:e.numberChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.contacts,t=e.handleDelete;return n.map((function(e){return Object(c.jsxs)("div",{onClick:t,children:[e.name," ",e.number,Object(c.jsx)("button",{type:"button",value:e.name,children:"delete"})]},e.name)}))},f=t(4),h=t.n(f),b="/api/persons",j=function(){return h.a.get(b).then((function(e){return e.data}))},m=function(e){return h.a.post(b,e).then((function(e){return e.data}))},O=function(e,n){var t=h.a.put("".concat(b,"/").concat(e),n);return console.log("This is axios request: ",t),t.then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},x=function(e){var n=e.message,t=e.error;return null===n?null:t?Object(c.jsx)("div",{className:"error",children:n}):Object(c.jsx)("div",{className:"non-error",children:n})},p=function(){var e=Object(i.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],a=Object(i.useState)(""),f=Object(u.a)(a,2),h=f[0],b=f[1],p=Object(i.useState)(""),g=Object(u.a)(p,2),w=g[0],C=g[1],S=Object(i.useState)(""),T=Object(u.a)(S,2),y=T[0],k=T[1],D=Object(i.useState)(null),N=Object(u.a)(D,2),I=N[0],A=N[1],E=Object(i.useState)(!1),J=Object(u.a)(E,2),L=J[0],q=J[1],B=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));Object(i.useEffect)((function(){console.log("effect"),j().then((function(e){o(e)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{message:I,error:L}),Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(s,{value:y,handleSearchChange:function(e){k(e.target.value)}}),Object(c.jsx)("h3",{children:"Add Contact"}),Object(c.jsx)(l,{addName:function(e){if(e.preventDefault(),t.some((function(e){return e.name===h}))){if(window.confirm("".concat(h," is already added to phonebook! Do you want to replace the old number with a new one?"))){var n=t.find((function(e){return e.name===h})),c=Object(r.a)(Object(r.a)({},n),{},{number:w}),a=n.id;console.log("This is the frontend"),O(a,c).then((function(e){console.log("This is what axios returns: ",e),o(t.map((function(n){return n.id!==a?n:e}))),A("New number put for ".concat(h)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){A("Information of '".concat(h,"' has already been removed from server")),console.log("The updated person: ",c),console.log("The list now: ",t),q(!0),setTimeout((function(){A(null),q(!1)}),5e3)}))}}else m({name:h,number:w}).then((function(e){o(t.concat(e)),b(""),C(""),A("Added ".concat(h," to the phonebook")),setTimeout((function(){A(null)}),5e3)})).catch((function(e){A("Information of '".concat(h,"' has already been removed from server")),q(!0),setTimeout((function(){A(null),q(!1)}),5e3)}))},name:h,nameChange:function(e){b(e.target.value)},number:w,numberChange:function(e){C(e.target.value)}}),Object(c.jsx)("h3",{children:"Contacts"}),Object(c.jsx)(d,{contacts:B,handleDelete:function(e){return function(e){e.preventDefault();var n=t.find((function(n){return n.name===e.target.value}));window.confirm("Delete ".concat(n.name," ?"))&&v(n.id).then((function(){return o(t.filter((function(e){return e.name!==n.name})))}))}(e)}})]})};t(38);a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f81ff809.chunk.js.map