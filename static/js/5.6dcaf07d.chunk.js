"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5],{3005:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(9439),s=r(7757),c=r.n(s),u=r(2791),o=r(1087),i=r(7689),l="SearchForm_form__MjH4b",h="SearchForm_input__VJN8H",f="SearchForm_searchBtn__UH5-h",m=r(184),p=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],n=t[1],s=(0,o.lr)(),c=(0,a.Z)(s,2)[1];return(0,m.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),c({keyword:r})},children:[(0,m.jsx)("input",{className:h,type:"text",name:"input",placeholder:"Search movies...",value:r,onChange:function(e){return n(e.target.value)}}),(0,m.jsx)("button",{className:f,type:"submit",children:"Submit"})]})},v=r(1243);v.Z.defaults.baseURL="https://api.themoviedb.org/3";var _=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.get("/search/movie?api_key=".concat("c8cf41cbc51b38c2e1c60ca8bf6e538a","&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=_,x="Movies_container__sNK5N",b="Movies_searchTitle__PLn64",k="Movies_searchList__6eDvk",w="Movies_searchItem__aEEd+",j="Movies_searchLink__pllYy",y=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],l=(0,o.lr)(),h=(0,a.Z)(l,1)[0],f=(0,i.TH)(),v=h.get("keyword");return(0,u.useEffect)((function(){if(v){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(v);case 3:if(0!==(t=e.sent).results.length){e.next=7;break}return alert("Sorry we dont have movies on ".concat(v," keyword")),e.abrupt("return");case 7:s(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{}),r.length>0&&(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("h2",{className:b,children:"Search results"}),(0,m.jsx)("ul",{className:k,children:r.map((function(e){var t=e.title,r=e.id;return(0,m.jsx)("li",{className:w,children:(0,m.jsx)(o.rU,{className:j,to:"".concat(r),state:{from:f},children:t})},r)}))})]})]})}}}]);
//# sourceMappingURL=5.6dcaf07d.chunk.js.map