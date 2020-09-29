(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=(a(12),a(1)),l=a(4),i=a.n(l);var u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("a",{className:"header__logo-link",href:"#root"},o.a.createElement("img",{className:"header__logo-img",src:i.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"}))))};var p=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen)},o.a.createElement("form",{className:"popup__container popup__container_form",method:"GET",action:"#",name:"".concat(e.name),noValidate:!0},o.a.createElement("button",{className:"popup__close",type:"button",onClick:e.onClose}),o.a.createElement("h2",{className:"popup__title popup__title_profile"},"".concat(e.title)),e.children,o.a.createElement("button",{type:"submit",className:"popup__button"},e.button))))},m=a(5),d=a(6),_=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(m.a)(this,e),this.baseUrl=a,this.headers=n}return Object(d.a)(e,[{key:"getMe",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"createCards",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCards",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"likeCards",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"unLikeCards",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"9eba132f-f547-4f26-8f5f-732456ccc9d1","Content-Type":"application/json"}});var h=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"element"},o.a.createElement("button",{type:"button",className:"element__basket"}),o.a.createElement("img",{className:"element__image",src:e.card.src,alt:e.card.alt,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("div",{className:"element__group"},o.a.createElement("h2",{className:"element__title"},e.card.title),o.a.createElement("div",{className:"element__likebox"},o.a.createElement("button",{className:"element__like",type:"button"}),o.a.createElement("p",{className:"element__like-number"},e.card.likes)))))};var f=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen)},o.a.createElement("figure",{className:"popup__container popup__container_figure"},o.a.createElement("button",{className:"popup__close",type:"button",onClick:e.onClose}),o.a.createElement("img",{className:"popup__img",src:e.card.src,alt:e.card.alt}),o.a.createElement("figcaption",{className:"popup__text"},e.card.title))))};var E=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(),E=Object(s.a)(d,2),b=E[0],g=E[1],k=Object(n.useState)([]),N=Object(s.a)(k,2),v=N[0],C=N[1];return Object(n.useEffect)((function(){_.getMe().then((function(e){c(e.avatar),m(e.name),g(e.about)})),_.getInitialCards().then((function(e){var t=e.map((function(e){return{id:e._id,src:e.link,alt:e.name,title:e.name,likes:e.likes.length}}));C(t)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__overlay"},o.a.createElement("img",{className:"profile__avatar",onClick:e.onEditAvatar,src:r,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})),o.a.createElement("div",{className:"profile__text"},o.a.createElement("div",{className:"profile__topline"},o.a.createElement("h1",{className:"profile__name"},u),o.a.createElement("button",{className:"profile__button profile__button_edit",type:"button",onClick:e.onEditProfile})),o.a.createElement("p",{className:"profile__about"},b))),o.a.createElement("button",{className:"profile__button profile__button_add",onClick:e.onAddPlace,type:"button"})),o.a.createElement("section",{className:"elements"},v.map((function(t){return o.a.createElement(h,{key:t.id,onCardClick:e.onSelectedCard,card:t})}))),o.a.createElement(p,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpenProfile?"popup_on":"",onClose:e.onClose},o.a.createElement("input",{type:"text",name:"name",className:"popup__input popup__input_name",id:"name-input",required:!0,minLength:"2",maxLength:"40"}),o.a.createElement("span",{className:"popup__input-error",id:"name-input-error"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),o.a.createElement("input",{type:"text",name:"about",className:"popup__input popup__input_about",id:"about-input",required:!0,minLength:"2",maxLength:"200"}),o.a.createElement("span",{className:"popup__input-error",id:"about-input-error"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")),o.a.createElement(p,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpenPlace?"popup_on":"",onClose:e.onClose},o.a.createElement("input",{type:"text",name:"name",className:"popup__input popup__input_title",id:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30"}),o.a.createElement("span",{className:"popup__input-error",id:"title-input-error"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),o.a.createElement("input",{type:"url",name:"link",className:"popup__input popup__input_link",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"link-input-error"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")),o.a.createElement(p,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpenAvatar?"popup_on":"",onClose:e.onClose},o.a.createElement("input",{type:"url",name:"link",className:"popup__input popup__input_link",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"link-input-error"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")),o.a.createElement(p,{name:"agree",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:"\u0414\u0430",onClose:e.onClose}),o.a.createElement(f,{name:"figure",card:e.selectedCard,isOpen:e.isSelectedCard?"popup_on":"",onClose:e.onClose}))};var b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia")))};var g=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(s.a)(r,2),l=c[0],i=c[1],p=o.a.useState(!1),m=Object(s.a)(p,2),d=m[0],_=m[1],h=o.a.useState(!1),f=Object(s.a)(h,2),g=f[0],k=f[1],N=o.a.useState({src:"",alt:"",title:""}),v=Object(s.a)(N,2),C=v[0],y=v[1];return o.a.createElement("div",{className:"page"},o.a.createElement(u,null),o.a.createElement(E,{onEditProfile:function(){n(!0)},onAddPlace:function(){i(!0)},onEditAvatar:function(){_(!0)},onSelectedCard:function(e){k(!0),y({src:e.src,alt:e.alt,title:e.title})},isOpenProfile:a,isOpenAvatar:d,isOpenPlace:l,isSelectedCard:g,selectedCard:C,onClose:function(){n(!1),i(!1),_(!1),k(!1),y({})}}),o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9cc1f204.chunk.js.map