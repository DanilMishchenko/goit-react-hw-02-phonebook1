(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={Phonebook:"Container_Phonebook__Gu4Je"}},13:function(t,e,n){t.exports={Filter__label:"Filter_Filter__label__3BzJA"}},2:function(t,e,n){t.exports={Phonebook__form:"Form_Phonebook__form__Kwlb5",Phonebook__label:"Form_Phonebook__label__2vKui",Phonebook__button:"Form_Phonebook__button__2Pjqe"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(10),r=n.n(c),s=n(14),i=n(4),l=n(5),u=n(7),b=n(6),_=n(23),d=n(11),h=n.n(d),m=n(0),j=function(t){var e=t.children;return Object(m.jsx)("div",{className:h.a.Phonebook,children:e})},f=n(12),p=n(2),C=n.n(p),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.nameInputId=Object(_.a)(),t.numderInputId=Object(_.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,o=n.value;t.setState(Object(f.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(m.jsxs)("form",{className:C.a.Phonebook__form,onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,className:C.a.Phonebook__label,children:[Object(m.jsx)("span",{children:"Name"}),Object(m.jsx)("input",{type:"text",value:e,onChange:this.handleChange,id:this.nameInputId,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{htmlFor:this.numderInputId,className:C.a.Phonebook__label,children:[Object(m.jsx)("span",{children:"Number"}),Object(m.jsx)("input",{type:"tel",value:n,onChange:this.handleChange,id:this.numderInputId,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:C.a.Phonebook__button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=n(3),v=n.n(x),k=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(m.jsx)("ul",{className:v.a.Contacts__list,children:e.map((function(t){var e=t.id,a=t.name,o=t.number;return Object(m.jsxs)("li",{className:v.a.Contacts__item,children:[Object(m.jsxs)("p",{className:v.a.Contacts__data,children:[a,": ",o]}),Object(m.jsx)("button",{type:"button",className:v.a.Contacts__button,onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},g=n(13),P=n.n(g),F=function(t){var e=t.filter,n=t.onChangeFilter;return Object(m.jsxs)("label",{className:P.a.Filter__label,children:[Object(m.jsx)("span",{children:"Find contacts by name"}),Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})};F.defaultProps={value:""};var y=F,N=(n(21),n(9)),I=n.n(N),S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,o={id:Object(_.a)(),name:n,number:a};if(t.state.contacts.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts"));t.setState((function(t){return{contacts:[o].concat(Object(s.a)(t.contacts))}}))},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilteredContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(m.jsxs)(j,{children:[Object(m.jsx)("h1",{className:I.a.Phonebook__title,children:"Phonebook"}),Object(m.jsx)(O,{onSubmit:this.addContact}),Object(m.jsx)("h2",{className:I.a.Phonebook__title,children:"Contacts"}),Object(m.jsx)(y,{value:t,onChangeFilter:this.changeFilter}),Object(m.jsx)(k,{contacts:this.getFilteredContacts(),onDeleteContacts:this.deleteContacts})]})}}]),n}(a.Component);r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={Contacts__list:"ContactList_Contacts__list__3qQms",Contacts__item:"ContactList_Contacts__item__3ch-Q",Contacts__data:"ContactList_Contacts__data__1S74z",Contacts__button:"ContactList_Contacts__button__2NJXb"}},9:function(t,e,n){t.exports={Phonebook__title:"styles_Phonebook__title__2Cvio"}}},[[22,1,2]]]);
//# sourceMappingURL=main.5d94a015.chunk.js.map