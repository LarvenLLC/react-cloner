(this["webpackJsonpreact-cloner-example"]=this["webpackJsonpreact-cloner-example"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);a(4),a(5);var n=a(0),l=a.n(n),o=a(1),r=a.n(o),c=a(2);function m(e){var t=e.title,a=e.initialItems,o=e.addButtonClassName,r=e.component,c=e.componentWrapperStyle,m=e.componentWrapperClassName,u=e.deleteButtonClassName,i=e.deleteButtonWrapperClassName,p=e.addButtonPosition,d=e.labelClassName,f=e.onDelete,b=e.showLabel,E=Object(n.useState)([]),N=E[0],v=E[1];return Object(n.useEffect)((function(){for(var e=[],t=0;t<a;t++)e.push(t);v(e)}),[a]),l.a.createElement(n.Fragment,null,N.map((function(e,a){return Object(n.cloneElement)(l.a.createElement(s,{title:t,component:r,componentWrapperStyle:c,componentWrapperClassName:m,deleteButtonClassName:u,deleteButtonWrapperClassName:i,labelClassName:d,onDelete:function(){!function(e){var t=N;t=t.filter((function(t){return t!=e})),v(t)}(e),f&&f()},showLabel:b}),{increment:a+1,key:e},null)})),l.a.createElement("div",{style:{textAlign:""+p}},l.a.createElement("button",{type:"button",className:o,onClick:function(e){e.preventDefault();for(var t=[],a=N.length+1,n=2;n<=a;n++)t.push(n);v([].concat(N,[t]))}},"Add ",t)))}function s(e){var t=e.title,a=e.component,o=e.increment,r=e.componentWrapperStyle,c=e.componentWrapperClassName,m=e.deleteButtonClassName,s=e.deleteButtonWrapperClassName,u=e.labelClassName,i=e.showLabel,p=e.onDelete;return l.a.createElement(n.Fragment,null,o>1&&i?l.a.createElement("div",{className:u},t+" "+o):null,l.a.createElement("div",{className:c,style:r},l.a.createElement(n.Fragment,null,Object(n.cloneElement)(a,{increment:o})),l.a.createElement("div",{className:s},1!=o?l.a.createElement("button",{type:"button",onClick:p,className:m},"Delete"):null)))}m.defaultProps={initialItems:1,addButtonPosition:"right",showLabel:!0};var u=m;function i({increment:e}){return l.a.createElement("div",{className:"row w-100 mx-auto"},l.a.createElement("div",{className:"pl-0 col col-12 col-md-4 form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{name:"contact-person-name-".concat(e),class:"form-control"})),l.a.createElement("div",{className:"px-0 col col-12 col-md-5 form-group"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{name:"contact-person-email-".concat(e),class:"form-control"})),l.a.createElement("div",{className:"".concat(1===e?"pr-0":""," col col-12 col-md-3 form-group")},l.a.createElement("label",null,"Phone"),l.a.createElement("input",{name:"contact-person-phone-".concat(e),class:"form-control"})))}var p=()=>l.a.createElement("div",{className:"col py-3"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t,a={},n=new FormData(e.target),l=Object(c.a)(n.entries());try{for(l.s();!(t=l.n()).done;){var o=t.value,r=o[0],m=o[1];a[r]=m}}catch(s){l.e(s)}finally{l.f()}alert(JSON.stringify(a,0,2))}},l.a.createElement(u,{title:"Contact Person",addButtonClassName:"btn btn-outline-primary",deleteButtonClassName:"btn btn-outline-danger",deleteButtonWrapperClassName:"form-group",component:l.a.createElement(i,null),componentWrapperClassName:"d-flex w-100 align-items-end justify-content-between mb-3"}),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")));r.a.render(l.a.createElement(p,null),document.getElementById("root"))},3:function(e,t,a){e.exports=a(12)},4:function(e,t,a){}},[[3,1,2]]]);
//# sourceMappingURL=main.ee55b1fd.chunk.js.map