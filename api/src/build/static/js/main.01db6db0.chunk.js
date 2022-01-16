(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(8),r=n.n(c),i=n(20),o=n(132),l=n(138),u=n(143),d=(n(77),n(47)),x=n(41),b=n(46),j=n.n(b),p=n(58),h=n(141),f=n(144),g=n(145),m=n(135),O=n(136),k=n(137),w=function(t){var e=t.split("T")[0].split("-");return e[2]+"."+e[1]+"."+e[0].substr(2)},v=n(4),C=Object(o.a)((function(t){return{text:{color:"#040111",display:"inline"}}})),y=function(t){var e=C(),n=!0===t.bold?"700":"400",a="";switch(t.size){case"sm":a="0.78em";break;case"lg":a="1.5em";break;default:a="0.95em"}var s=e.text+" "+t.className;return Object(v.jsx)("p",{className:s,style:{fontSize:a,fontWeight:n},children:t.text})},N=Object(o.a)((function(t){return{text:{color:"#040111",fontSize:"0.92em"},createdAt:{display:"block",marginTop:"8px"},iconsContainer:{display:"flex",justifyContent:"space-around"},icon:{color:"#D2D2D2",fontSize:"21px",transition:"color 0.2s ease",cursor:"pointer","&:hover":{color:"#969696"}}}})),E=function(t){var e=t.tasks,n=t.deleteTaskFunc,a=t.showUpdateTaskView,s=N();return e.map((function(t,e){return Object(v.jsxs)(f.a,{className:s.taskContainer,divider:!0,children:[Object(v.jsx)(g.a,{className:s.text,disableTypography:!0,primary:t.text.length>120?t.text.substr(0,120)+"...":t.text,secondary:Object(v.jsx)(y,{className:s.createdAt,text:w(t.createdAt)})}),Object(v.jsxs)(m.a,{className:s.iconsContainer,children:[Object(v.jsx)(O.a,{className:s.icon,onClick:function(){return n(t._id)}}),Object(v.jsx)(k.a,{className:s.icon,onClick:function(){return a(t._id,t.status,t.text)}})]})]},e)}))},T=Object(o.a)((function(t){return{container:{width:"100%",backgroundColor:"#EFEFEF",padding:"6px",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",borderRadius:"3px",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}},input:{backgroundColor:"#DADADD",border:"none",width:"90%",height:"35px",fontSize:"0.8em",padding:"5px",borderRadius:"3px",outline:"none"},img:{width:"28px",margin:"0 auto 0",cursor:"pointer"}}})),S=function(t){var e=t.addTaskFunc,n=T(),a=s.a.createRef();function c(){var t=a.current.value;!t.length>0||(e(t),a.current.value="")}return Object(v.jsxs)(l.a,{container:!0,justifyContent:"space-between",alignItems:"center",className:n.container,children:[Object(v.jsx)("input",{className:n.input,ref:a,onKeyPress:function(t){"Enter"===t.key&&c()},type:"text",maxLength:"255",placeholder:"Adicionar novo item"}),Object(v.jsx)("img",{onClick:c,src:"/send.svg",className:n.img})]})},F=n(34),R=n.n(F),A=n(63),D=n.n(A),z=n(142),I=n(139),L=n(140),_=Object(o.a)((function(t){return{wrapper:{position:"absolute",top:"50%",left:"50%",width:"320px",minHeight:"300px",padding:"10px",transform:"translate(-50%,-50%)",backgroundColor:"white",borderRadius:"3px",paddingRight:"30px",paddingLeft:"30px",boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"},icons:{cursor:"pointer"}}})),H=function(t){var e=t.id,n=t.status,s=t.text,c=t.setShowEdit,r=t.updateTask,o=_(),u=Object(a.useState)(s),d=Object(i.a)(u,2),x=d[0],b=d[1];return Object(v.jsxs)(l.a,{className:o.wrapper,container:!0,direction:"column",justifyContent:"space-around",alignItems:"flex-start",children:[Object(v.jsxs)(l.a,{container:!0,item:!0,direction:"row",justifyContent:"space-between",alignItems:"flex-start",children:[Object(v.jsx)("h2",{children:"Editar task"}),Object(v.jsxs)(l.a,{item:!0,children:[Object(v.jsx)(I.a,{className:o.icons,titleAccess:"Salvar",style:{marginRight:"5px"},onClick:function(){return r(e,n,x)},htmlColor:"#6b58f3"}),Object(v.jsx)(L.a,{className:o.icons,titleAccess:"Fechar",onClick:function(){return c(!1)},htmlColor:"#6b58f3"})]})]}),Object(v.jsx)(z.a,{label:"Editar texto",variant:"standard",onChange:function(t){return b(t.target.value)},value:x,multiline:!0,maxRows:5,minRows:5})]})},P=Object(o.a)((function(t){return{container:{width:"100%",height:"440px",backgroundColor:"#EFEFEF",padding:"15px",marginTop:"15px",borderRadius:"3px"},tasksList:{overflowY:"scroll",display:"flex",flexDirection:"column-reverse",minHeight:"100%",maxHeight:"100%",paddingRight:"20px"}}})),U="http://localhost:3000/tasks/",W=function(t){var e=t.setTasksCount,n=P(),s=Object(a.useState)([]),c=Object(i.a)(s,2),r=c[0],o=c[1],l=Object(a.useState)(!1),b=Object(i.a)(l,2),f=b[0],g=b[1],m=Object(a.useState)({}),O=Object(i.a)(m,2),k=O[0],w=O[1],C=Object(a.useRef)();Object(a.useEffect)((function(){return Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R()(U).then((function(t){o(t.data.tasks),e(t.data.tasks.length)}));case 2:case"end":return t.stop()}}),t)})))()}),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{className:n.container,children:Object(v.jsx)(h.a,{className:n.tasksList,ref:C,children:Object(v.jsx)(D.a,{children:Object(v.jsx)(E,{tasks:r,deleteTaskFunc:function(t){R()({method:"DELETE",url:U+t}).then((function(){o(Object(x.a)(r).filter((function(e){return e._id!==t}))),e(r.length-1)}))},showUpdateTaskView:function(t,e,n){g(!0),w({id:t,status:e,text:n})}})})})}),Object(v.jsx)(S,{addTaskFunc:function(t){if(0!==t.length){var n={status:"done",text:t,createdAt:(new Date).toISOString()};R()({method:"POST",url:U,headers:{"Content-Type":"application/json"},data:n}).then((function(t){n._id=t.data.id,o([].concat(Object(x.a)(r),[n])),e(r.length+1)})).catch((function(t){return console.log(t)}))}else console.log("O input deve ser preenchido.")}}),f&&Object(v.jsx)(H,Object(d.a)(Object(d.a)({},k),{},{setShowEdit:g,updateTask:function(t,e,n){g(!1),R()({method:"PUT",url:U+t,data:{status:e,text:n}}).then((function(){r.forEach((function(a,s){a._id===t&&(r[s].text=n,r[s].status=e,o(Object(x.a)(r)))}))}))}}))]})},B=Object(o.a)((function(t){return{container:{backgroundColor:"#040111",height:"100vh",padding:"15px"},subContainer:{textAlign:"center"},white:{color:"white"},contentWrapper:{backgroundColor:"rgba(255, 255, 255, 0.92)",borderRadius:"3px",padding:"15px",textAlign:"left"},header:{width:"100%",backgroundColor:"#EFEFEF",padding:"15px"}}}));var J=function(){var t=B(),e=Object(a.useState)(0),n=Object(i.a)(e,2),s=n[0],c=n[1];return Object(v.jsxs)(l.a,{className:t.container,container:!0,justifyContent:"space-around",alignItems:"center",children:[Object(v.jsx)(l.a,{className:t.subContainer,item:!0,xs:!0,children:Object(v.jsx)("img",{src:"/logo.svg",width:"190px"})}),Object(v.jsx)(l.a,{className:t.subContainer,item:!0,xs:!0,children:Object(v.jsxs)(u.a,{id:"content-wrapper",className:t.contentWrapper,children:[Object(v.jsx)(u.a,{className:t.header,children:Object(v.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)(y,{text:"Ol\xe1, ",size:"lg"}),Object(v.jsx)(y,{text:"Bruno",bold:!0,size:"lg"})]}),Object(v.jsx)(y,{text:(null!==s&&void 0!==s?s:"*")+" Tasks",size:"sm"})]})}),Object(v.jsx)(W,{setTasksCount:c})]})})]})};r.a.render(Object(v.jsx)(J,{}),document.getElementById("root"))},77:function(t,e,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.01db6db0.chunk.js.map