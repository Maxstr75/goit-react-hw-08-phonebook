"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[890],{489:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,o,i,u=t(885),c=t(2007),s=t.n(c),l=t(2791),d=t(9434),m=t(1438),f=t(6052),x=t(168),p=t(225),h=p.Z.form(r||(r=(0,x.Z)(["\n  max-width: 360px;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: tomato;\n"]))),b=p.Z.label(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),v=p.Z.input(o||(o=(0,x.Z)(["\n  width: 200px;\n  margin-top: 2px;\n"]))),Z=p.Z.button(i||(i=(0,x.Z)(["\n  cursor: pointer;\n"]))),g=t(5264),j=t(184),y=function(){var n=(0,l.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,u.Z)(a,2),i=o[0],c=o[1],s=(0,d.v9)(m.S),x=(0,d.I0)(),p=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a)}},y=function(){r(""),c("")};return(0,j.jsxs)(h,{onSubmit:function(n){return n.preventDefault(),y(),function(n){var e=n.name,t=n.number;if(s.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))&&g.Notify.failure("".concat(e," is already in contacts.")),!s.find((function(n){return n.number===t})))return x(f.uK({name:e,number:t}));g.Notify.failure("".concat(t," number is already in use."))}({name:t,number:i})},autoComplete:"on",children:[(0,j.jsxs)(b,{children:["Name",(0,j.jsx)(v,{type:"text",name:"name",value:t,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)(b,{children:["Number",(0,j.jsx)(v,{type:"tel",name:"number",value:i,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)(Z,{type:"submit",children:"Add contact"})]})};y.porTypes={onSubmit:s().func.isRequired};var C=y},6849:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,a=t(1413),o=t(885),i=t(7247),u=t(1286),c=t(703),s=t(4554),l=t(6072),d=t(4879),m=t(7630),f=t(890),x=t(2791),p=t(9434),h=t(6052),b=t(5264),v=t(9913),Z=t(184),g=function(n){var e=n.id,t=n.changeModal,r=n.UserName,a=n.UserNumber,i=(0,x.useState)(r),u=(0,o.Z)(i,2),c=u[0],d=u[1],m=(0,x.useState)(a),g=(0,o.Z)(m,2),j=g[0],y=g[1],C=(0,p.I0)(),w=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":d(r);break;case"number":y(r);break;default:return}};return(0,Z.jsxs)(s.Z,{component:"form",onSubmit:function(n){if(n.preventDefault(),""!==c.trim()&&""!==j.trim())return C((0,h.Tk)({id:e,number:j,name:c})),t(!1);b.Notify.failure("Fill in the fields")},sx:{display:"flex",flexDirection:"column",padding:"15px"},children:[(0,Z.jsx)(f.Z,{variant:"h6",component:"h2",sx:{mb:2},children:"Edit Contact"}),(0,Z.jsx)(v.Z,{type:"text",name:"name",label:"Name",onChange:w,value:c,variant:"outlined",autoComplete:"off"}),(0,Z.jsx)(v.Z,{type:"tel",name:"number",label:"Number",onChange:w,value:j,variant:"outlined",sx:{mb:2,mt:2},autoComplete:"off"}),(0,Z.jsx)(l.Z,{type:"submit",variant:"contained",children:"Add contact"})]})},j={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},y=function(n){var e=n.name,t=n.number,r=n.id,p=n.onDeleteContacts,h=x.useState(!1),b=(0,o.Z)(h,2),v=b[0],y=b[1],C=(0,m.ZP)(c.Z)((function(n){var e=n.theme;return(0,a.Z)((0,a.Z)({backgroundColor:"dark"===e.palette.mode?"#1A2027":"#fff"},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(C,{component:"li",sx:{listStyle:"none",display:"flex",justifyContent:"space-between",padding:2,alignItems:"center",color:"black"},children:[(0,Z.jsxs)(s.Z,{sx:{minWidth:100,maxWidth:170,textAlign:"center",alignItems:"center"},children:[(0,Z.jsxs)(f.Z,{variant:"body1",component:"h2",sx:{overflow:"hidden"},children:[e,":"]}),(0,Z.jsx)(f.Z,{variant:"body1",component:"h2",sx:{overflow:"hidden"},children:t})]}),(0,Z.jsxs)(s.Z,{sx:{display:"flex"},children:[(0,Z.jsxs)(s.Z,{sx:{marginRight:1},children:[(0,Z.jsx)(l.Z,{variant:"outlined",onClick:function(){return y(!0)},children:(0,Z.jsx)(u.Z,{})}),(0,Z.jsx)(d.Z,{open:v,onClose:function(){return y(!1)},children:(0,Z.jsx)(s.Z,{sx:j,children:(0,Z.jsx)(g,{id:r,changeModal:y,UserName:e,UserNumber:t})})})]}),(0,Z.jsx)(l.Z,{variant:"outlined",onClick:function(){return p(r)},startIcon:(0,Z.jsx)(i.Z,{}),children:"Delete"})]})]})})},C=t(168),w=t(225).Z.ul(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 15px;\n  width: 360px;\n"]))),k=t(1438),N=function(){var n=(0,p.v9)(k.S),e=(0,p.v9)(k.Y),t=(0,p.I0)(),r=function(n){t(h.GK(n))};(0,x.useEffect)((function(){t(h.NJ())}),[t]),console.log(n);var a=function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();return(0,Z.jsx)(w,{children:a&&a.map((function(n){var e=n.id,t=n.name,a=n.number;return(0,Z.jsx)(y,{id:e,name:t,number:a,onDeleteContacts:r},e)}))})}},3715:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r,a,o=t(9434),i=t(1438),u=t(168),c=t(225),s=c.Z.label(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  margin-left: 15px;\n"]))),l=c.Z.input(a||(a=(0,u.Z)(["\n  width: 200px;\n  margin-top: 5px;\n  outline: none;\n  height: 15px;\n  padding: 2.5px;\n  &:hover,\n  &:focus {\n    border-color: #4b0082;\n  }\n"]))),d=t(1850),m=t(184),f=function(){var n=(0,o.I0)(),e=(0,o.v9)(i.Y);return(0,m.jsxs)(s,{children:["Find contacts by name",(0,m.jsx)(l,{type:"text",name:"filter",value:e,onChange:function(e){n(d.GQ(e.currentTarget.value))}})]})}},6890:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r=t(184),a=t(489).ContactForm,o=t(6849).default,i=t(3715).default,u=function(){return(0,r.jsxs)(r.Fragment,{children:["Phonebook",(0,r.jsx)(a,{}),(0,r.jsx)(r.Fragment,{children:"Contacts"}),(0,r.jsx)(i,{}),(0,r.jsx)(o,{})]})}},1438:function(n,e,t){t.d(e,{S:function(){return r},Y:function(){return a}});var r=function(n){return n.contacts.items},a=function(n){return n.contacts.filter}}}]);
//# sourceMappingURL=890.ad44eb1b.chunk.js.map