(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(15),r=a.n(c),i=a(6),o=a(12),l=a.n(o),d=a(17),u=a(149),j=a(138),m=(a(141),a(153),a(144),a(143),a(57),a(1));Object(j.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));var b=a(61),p=a.n(b),O=(a(94),a(19)),h=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/activity",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n._id);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var f=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),s=(a[0],a[1],Object(n.useState)(void 0)),c=Object(i.a)(s,2);return c[0],c[1],Array(5).fill(0),Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"post__header",children:[Object(m.jsxs)("h2",{children:["Activity:",e.activity]}),Object(m.jsxs)("p",{children:["Type: ",e.type]}),Object(m.jsxs)("p",{children:["Participants: ",e.participants]}),Object(m.jsx)("p",{children:"Comments:"}),Object(m.jsx)("div",{className:"getComment",children:e.comments.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:e.text},e._id),Object(m.jsxs)("p",{children:["Posted by: ",e.postedBy.username]})]})}))}),Object(m.jsxs)("form",{className:"post__form",children:[Object(m.jsx)(u.a,{label:"add comment",size:"small",variant:"outlined",className:"post__input",placeholder:"add comment"}),Object(m.jsx)("button",{variant:"contained",className:"buttonStars",size:"small",endIcon:Object(m.jsx)(p.a,{}),children:"Send"})]})]})})};function g(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/activity",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("No Activities");case 6:return e.next=8,t.json();case 8:a=e.sent,console.log(a),s(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"homeFeed",children:a.map((function(e){return Object(m.jsx)(f,{activity:e.activity,type:e.type,participants:e.participants,comments:e.comments},e._id)}))})})}var y=a(145),N=a(146),S=a(147),k=(a(26),a(63)),w=a(10),C=a(73),L=a(74),F=a(64),P=a.n(F),I=new(function(){function e(){Object(C.a)(this,e)}return Object(L.a)(e,[{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"getProfile",value:function(){return P()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return P()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),E=Object(n.createContext)(),q=function(){return Object(n.useContext)(E)},T=function(e){var t=e.children,a=Object(n.useState)({}),s=Object(i.a)(a,2),c=s[0],r=s[1],o=(Object(O.a)(Object(O.a)({},c),{},{setAuthState:r}),function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null;try{t=I.getProfile()}catch(a){console.log(a)}r(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){o()}),[]),Object(m.jsx)(E.Provider,{value:{authState:c,setAuthState:r},children:t})},_=(E.Consumer,"#FFBA5A"),A="#a9a9a9",B={containerStars:{display:"flex",flexDirection:"column",alignItems:"center"},stars:{display:"flex",flexDirection:"row"},textareaStarts:{border:"1px solid #a9a9a9",borderRadius:5,padding:10,margin:"20px 0",minHeight:100,width:300},buttonStars:{border:"1px solid #a9a9a9",borderRadius:5,width:300,padding:10}};function Y(){var e=q(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),j=o[0],b=o[1],p=Object(n.useState)(""),x=Object(i.a)(p,2),v=x[0],f=x[1],g=Object(n.useState)(0),y=Object(i.a)(g,2),N=y[0],S=y[1],C=Object(n.useState)(void 0),L=Object(i.a)(C,2),F=L[0],P=L[1],I=Object(n.useState)({activity:"",type:"",participants:0,actkey:""}),E=Object(i.a)(I,2),T=E[0],Y=E[1],H=Object(n.useState)(!1),M=Object(i.a)(H,2),D=M[0],R=M[1],J=(Object(w.f)(),Array(5).fill(0)),U=function(){P(void 0)},z=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"http://www.boredapi.com/api/activity?type=",fetch("http://www.boredapi.com/api/activity?type=").then((function(e){return e.json()})).then((function(e){console.log(e),G(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(O.a)(Object(O.a)({},t),{},{actkey:t.key}),Y(a),e.next=4,h(a);case 4:return n=e.sent,f(n),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var t=Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/user/addactivity/".concat(e.authState.data._id),{method:"PUT",body:JSON.stringify({actId:v}),headers:{"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,console.log(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){c(!s)};s?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal");var K=function(){var t=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.authState.data._id,K({comment:j},T.actkey,a);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),z(),W()},className:"btn-modal",children:"Random!"}),s&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:W,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("h2",{children:["Activity: ",T.activity,":"]}),Object(m.jsxs)("p",{children:["Type: ",T.type]}),Object(m.jsxs)("p",{children:["Participants ",T.participants]}),null!==e.authState&&Object(m.jsxs)("form",{className:"post__form",children:[!1===D&&Object(m.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),R(!0),V()},children:"Add Activity"}),!0===D&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{onChange:function(e){b(e.target.value)},name:"text",value:j,label:"add comment",size:"small",variant:"outlined",className:"post__input",placeholder:"add comment"}),Object(m.jsx)("button",{className:"btn",onClick:K,children:"Add Comment"})]})]}),Object(m.jsx)("div",{style:B.stars,children:J.map((function(e,t){return Object(m.jsx)(k.a,{size:24,onClick:function(){S(t+1)},onMouseOver:function(){P(t+1)},onMouseLeave:U,color:(F||N)>t?_:A,style:{marginRight:10,cursor:"pointer"}},t)}))}),Object(m.jsx)("button",{className:"close-modal",onClick:W,children:"CLOSE"})]})]})]})}function H(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){s(!a)};return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:c,className:"btn-modal",children:"Busy Work"}),a&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:c,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Acivity"}),Object(m.jsx)("div",{className:"type",children:"type"}),Object(m.jsx)("div",{className:"participants",children:"participants"}),Object(m.jsx)("button",{className:"close-modal",onClick:c,children:"CLOSE"})]})]})]})}function M(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){s(!a)};return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:c,className:"btn-modal",children:"DIY"}),a&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:c,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Hello Modal"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."}),Object(m.jsx)("button",{className:"close-modal",onClick:c,children:"CLOSE"})]})]})]})}function D(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){s(!a)};return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:c,className:"btn-modal",children:"Recreational"}),a&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:c,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Hello Modal"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."}),Object(m.jsx)("button",{className:"close-modal",onClick:c,children:"CLOSE"})]})]})]})}function R(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){s(!a)};return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:c,className:"btn-modal",children:"Education"}),a&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:c,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Hello Modal"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."}),Object(m.jsx)("button",{className:"close-modal",onClick:c,children:"CLOSE"})]})]})]})}function J(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){s(!a)};return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:c,className:"btn-modal",children:" Music"}),a&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:c,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Hello Modal"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."}),Object(m.jsx)("button",{className:"close-modal",onClick:c,children:"CLOSE"})]})]})]})}function U(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){s(!a)};return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:c,className:"btn-modal",children:"Relaxation"}),a&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:c,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Hello Modal"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."}),Object(m.jsx)("button",{className:"close-modal",onClick:c,children:"CLOSE"})]})]})]})}function z(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=function(){s(!a)};return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:c,className:"btn-modal",children:"Social"}),a&&Object(m.jsxs)("div",{className:"modal",children:[Object(m.jsx)("div",{onClick:c,className:"overlay"}),Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"Hello Modal"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."}),Object(m.jsx)("button",{className:"close-modal",onClick:c,children:"CLOSE"})]})]})]})}a(101);function G(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(e){a&&c.current&&!c.current.contains(e.target)&&s(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[a]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"hero",children:[Object(m.jsx)("img",{className:"heroImg",src:"/assets/images/hero.jpg",alt:"Hero"}),Object(m.jsx)("div",{className:"modalPosition",children:Object(m.jsx)(Y,{})}),Object(m.jsxs)("div",{className:"surrounding",children:[Object(m.jsx)("div",{className:"wrapper",ref:c}),Object(m.jsx)("button",{className:"button",onClick:function(){return s(!a)},children:"Find By Category"}),a&&Object(m.jsxs)("ul",{className:"list",children:[Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)(z,{})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)(J,{})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)(R,{})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)(U,{})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)(M,{})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)(D,{})}),Object(m.jsx)("li",{className:"list-item",children:Object(m.jsx)(H,{})})]})]})]}),Object(m.jsx)("div",{class:"homeHeader",children:"Top Activities"}),Object(m.jsx)("div",{class:"homeFeedCards",children:Object(m.jsx)(g,{})}),Object(m.jsxs)("div",{className:"featureContainer",children:[Object(m.jsx)("div",{class:"homeHeader",children:"Features"}),Object(m.jsx)("div",{class:"site-section",children:Object(m.jsxs)("div",{class:"site-section-inside",children:[Object(m.jsxs)("div",{class:"feature-box",children:[Object(m.jsx)(y.a,{}),Object(m.jsx)("h5",{children:"Find an Activity"}),Object(m.jsx)("p",{children:"Just think of how easy this is to use. Toddlers can do it. So can you!"})]}),Object(m.jsxs)("div",{class:"feature-box",children:[Object(m.jsx)(N.a,{}),Object(m.jsx)("h5",{children:"Share Your Activty "}),Object(m.jsx)("p",{children:"Show your Friends the awesome skills you have learned!"})]}),Object(m.jsxs)("div",{class:"feature-box",children:[Object(m.jsx)(S.a,{}),Object(m.jsx)("h5",{children:"You'll Love It"}),Object(m.jsx)("p",{children:"See What Your Friends Are Up To!"})]})]})})]})]})}var V=a(36),W=a(151),K=a(150),Q=a(148),X=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),o=r[0],u=(r[1],Object(n.useState)(!1)),j=Object(i.a)(u,2),b=j[0],p=j[1],h=function(e){var t=e.target,n=t.name,c=t.value;s(Object(O.a)(Object(O.a)({},a),{},Object(V.a)({},n,c)))},x=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,v(a);case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("something went wrong!");case 8:return e.next=10,n.json();case 10:c=e.sent,console.log(c),r=c.token,c.user,I.login(r),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0),p(!0);case 20:s({username:"",email:"",password:""});case 21:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"formPageContainer",children:Object(m.jsx)("div",{className:"formPageCard",children:Object(m.jsx)("div",{className:"formContainer",children:Object(m.jsxs)(W.a,{noValidate:!0,validated:o,onSubmit:x,className:"formPageContainer",children:[Object(m.jsx)(K.a,{dismissible:!0,onClose:function(){return p(!1)},show:b,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(m.jsxs)(W.a.Group,{children:[Object(m.jsx)(W.a.Label,{htmlFor:"email",children:"Email"}),Object(m.jsx)(W.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:h,value:a.email,required:!0,className:"formInput"})]}),Object(m.jsxs)(W.a.Group,{children:[Object(m.jsx)(W.a.Label,{htmlFor:"password",children:"Password"}),Object(m.jsx)(W.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:a.password,required:!0,className:"formInput"})]}),Object(m.jsx)(Q.a,{className:"formBtn",disabled:!(a.email&&a.password),type:"submit",variant:"success",children:"Submit"})]})})})})})};a(103);function Z(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1],r=function(){var t=Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/user/".concat(e.user._id));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c(n.activities);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(e),r()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"feedContainer",children:s.map((function(e){return Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"post__header",children:[Object(m.jsxs)("h2",{children:["Activity:",e.activity]}),Object(m.jsxs)("p",{children:["Type: ",e.type]}),Object(m.jsxs)("p",{children:["Participants: ",e.participants]})]})},e._id)}))})})}var $=a(22);function ee(){var e=q();return Object(n.useEffect)((function(){console.log(e.authState)}),[]),Object(m.jsx)(m.Fragment,{children:null!==e.authState?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"banner",children:Object(m.jsx)("img",{className:"bannerImg",src:"/assets/images/banner.jpg",alt:"Banner"})}),Object(m.jsx)("div",{className:"profilePicture",children:Object(m.jsx)("img",{className:"profilePictureImg",src:"/assets/images/default-profile.jpg",alt:"Profile"})}),Object(m.jsx)("div",{className:"profileInfo",children:Object(m.jsx)("div",{className:"profileName",children:e.authState.data.username})}),Object(m.jsx)("div",{className:"profileFeed",children:Object(m.jsx)(Z,{user:e.authState.data})})]}):Object(m.jsxs)("div",{className:"profileRedirct",children:["Please",Object(m.jsx)($.b,{to:"/Signup",children:"Sign Up"}),"or",Object(m.jsx)($.b,{to:"/Login",children:"Log In"}),"To Access Your Profile."]})})}var te=a(152),ae=function(){var e=Object(n.useState)({username:"",email:"",password:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,1)[0],o=Object(n.useState)(!1),u=Object(i.a)(o,2),j=u[0],b=u[1],p=function(e){var t=e.target,n=t.name,c=t.value;s(Object(O.a)(Object(O.a)({},a),{},Object(V.a)({},n,c)))},h=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,x(a);case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:c=e.sent,r=c.token,c.user,I.login(r),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),console.error(e.t0),b(!0);case 21:s({username:"",email:"",password:""});case 22:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"formPageContainer",children:Object(m.jsx)("div",{className:"formPageCard",children:Object(m.jsx)("div",{className:"formContainer",children:Object(m.jsxs)(W.a,{noValidate:!0,validated:r,onSubmit:h,children:[Object(m.jsx)(K.a,{dismissible:!0,onClose:function(){return b(!1)},show:j,variant:"danger",children:"Something went wrong with your signup!"}),Object(m.jsx)(W.a.Label,{htmlFor:"username",children:"Username"}),Object(m.jsx)(W.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:p,value:a.username,required:!0,className:"formInput"}),Object(m.jsx)(W.a.Label,{htmlFor:"email",children:"Email"}),Object(m.jsx)(W.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:p,value:a.email,required:!0,className:"formInput"}),Object(m.jsx)(W.a.Label,{htmlFor:"password",children:"Password"}),Object(m.jsx)(W.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:a.password,required:!0,className:"formInput"}),Object(m.jsx)(Q.a,{className:"formBtn",disabled:!(a.username&&a.email&&a.password),type:"submit",variant:"success",children:"Submit"})]})})})})})},ne=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2);t[0],t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"navbarContainer",children:[Object(m.jsx)("div",{className:"navbarLogo",children:Object(m.jsx)($.b,{to:"/",children:Object(m.jsx)("div",{className:"logo",children:"Bored?"})})}),Object(m.jsx)("div",{className:"navbarBtn",children:I.loggedIn()?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(te.a.Link,{as:$.b,to:"/profile",children:"Your Profile"}),Object(m.jsx)(te.a.Link,{onClick:I.logout,children:"Logout"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"navbarBtn",children:Object(m.jsx)($.b,{to:"/login",children:"Log In"})}),Object(m.jsx)("div",{className:"navbarBtn",children:Object(m.jsx)($.b,{to:"/signup",children:"Sign Up"})})]})})]})})};function se(){return Object(m.jsx)("div",{className:"footerContainer"})}a(104);function ce(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ne,{}),Object(m.jsx)("div",{className:"formPageContainer",children:Object(m.jsx)("div",{className:"formPageCard",children:Object(m.jsxs)("div",{className:"formContainer",children:[Object(m.jsx)("input",{placeholder:"Name",className:"formInput"}),Object(m.jsx)("input",{placeholder:"Email",className:"formInput"}),Object(m.jsx)("input",{placeholder:"Bio",className:"formInput"}),Object(m.jsx)("button",{className:"formBtn",children:"Update"})]})})}),Object(m.jsx)(se,{})]})}var re=function(){return Object(m.jsx)($.a,{children:Object(m.jsxs)(T,{children:[Object(m.jsx)(ne,{}),Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{exact:!0,path:"/",element:Object(m.jsx)(G,{})}),Object(m.jsx)(w.a,{path:"/login",element:Object(m.jsx)(X,{})}),Object(m.jsx)(w.a,{path:"/signup",element:Object(m.jsx)(ae,{})}),Object(m.jsx)(w.a,{path:"/setting",element:Object(m.jsx)(ce,{})}),Object(m.jsx)(w.a,{exact:!0,path:"/profile",element:Object(m.jsx)(ee,{})})]})]})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(re,{})}),document.getElementById("root"))},26:function(e,t,a){},94:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.dc344072.chunk.js.map