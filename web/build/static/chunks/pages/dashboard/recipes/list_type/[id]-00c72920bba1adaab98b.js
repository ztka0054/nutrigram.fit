_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"+OJ3":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n("nKUr"),a=(n("q1tI"),n("DCcX")),r=n("vkoW"),s=n("CaDr"),o=n("OBzv"),i=n("N/Cw");function u(e){var t=e.flagModal,n=e.toogleModalChild,u=e.functionButton;return Object(c.jsxs)(a.a,{isOpen:t,toggle:n,className:"modal_dashboard_delete",children:[Object(c.jsx)(r.a,{toggle:n}),Object(c.jsx)(s.a,{children:Object(c.jsx)("div",{className:"text_modal",children:Object(c.jsx)(i.a,{group:"input",tag:"delete_modal"})})}),Object(c.jsxs)(o.a,{children:[Object(c.jsx)("button",{className:"sty-button-dash-1 color-3",onClick:n,children:Object(c.jsx)(i.a,{group:"button",tag:"cancel"})})," ",Object(c.jsx)("button",{className:"sty-button-dash-1 color-2",onClick:function(){return u()},children:Object(c.jsx)(i.a,{group:"button",tag:"accept"})})]})]})}},"0FtN":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(e){var t=document.getElementById("id-load-element");e&&t.classList.add("show"),e||t.classList.remove("show")}},"6Lwk":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/recipes/list_type/[id]",function(){return n("Gr25")}])},BkJ1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("FGyW"),a=function(e){Object(c.b)(e,{className:"toast-container",closeButton:!1,autoClose:5e3})}},CaDr:function(e,t,n){"use strict";var c=n("wx14"),a=n("zLVn"),r=n("q1tI"),s=n.n(r),o=n("17x9"),i=n.n(o),u=n("TSYQ"),l=n.n(u),b=n("33Jr"),j=["className","cssModule","tag"],d={tag:b.n,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,o=Object(a.a)(e,j),i=Object(b.j)(l()(t,"modal-body"),n);return s.a.createElement(r,Object(c.a)({},o,{className:i}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},Gr25:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),a=n("q1tI"),r=n("MRKt"),s=n("20a2"),o=n("N/Cw"),i=n("pEOT"),u=n("3GKT"),l=n("OGmE"),b=n("qHbH"),j=n("o0o1"),d=n.n(j),p=n("HaE+"),O=n("2+Dk"),f=n("H91H"),g=n("+OJ3"),h=n("veiu"),m=n("0FtN");function v(e){var t=e.row,n=e.values,r=e.UpdateTable,i=Object(s.useRouter)(),u=Object(O.a)().auth,b=Object(f.a)().locale,j=Object(a.useState)(!1),v=j[0],y=j[1],x=Object(a.useState)(null),w=x[0],_=x[1],N=Object(a.useState)(""),k=N[0],E=N[1],T=Object(a.useState)(!1),C=T[0],S=T[1];Object(a.useEffect)((function(){"en"==b&&E(t.name["en-us"]),"es"==b&&E(t.name.es)}),[b,t]),Object(a.useEffect)((function(){"".concat(t.nutritionist)==="".concat(u.idNutritionist)?S(!0):S(!1)}),[t,u]);var P=function(e){i.push("/dashboard/recipes/detail/2/".concat(n.region,"/").concat(e))},q=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),Object(m.a)(!0),e.next=4,Object(h.a)(l.a.delete_recipes,{},[w],{locale:b});case 4:t=e.sent,Object(m.a)(!1),null!=t&&r();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){y(!v)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:k}),Object(c.jsxs)("td",{children:[!C&&Object(c.jsx)("button",{className:"sty-button-table-1 color-1 margin-1",onClick:function(){return P(t.id)},children:Object(c.jsx)("div",{className:"sty-tag",children:Object(c.jsx)(o.a,{group:"button",tag:"see"})})}),C&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("button",{className:"sty-button-table-1 color-1 margin-1",onClick:function(){return P(t.id)},children:[Object(c.jsx)("div",{className:"sty-icon",children:Object(c.jsx)("img",{src:"/static/img/favicons/dashboard/edit_w.svg"})}),Object(c.jsx)("div",{className:"sty-tag",children:Object(c.jsx)(o.a,{group:"button",tag:"edit"})})]}),Object(c.jsxs)("button",{className:"sty-button-table-1 color-2",onClick:function(){return e=t.id,R(),void _(e);var e},children:[Object(c.jsx)("div",{className:"sty-icon",children:Object(c.jsx)("img",{src:"/static/img/favicons/dashboard/delete_w.svg"})}),Object(c.jsx)("div",{className:"sty-tag",children:Object(c.jsx)(o.a,{group:"button",tag:"delete"})})]})]})]})]}),Object(c.jsx)(g.a,{flagModal:v,toogleModalChild:R,functionButton:q})]})}function y(){var e=Object(s.useRouter)().query,t=Object(c.jsx)(i.a,{route:"/dashboard/recipes/new/".concat(2,"/",e.id),children:Object(c.jsxs)("button",{className:"sty-button-dash-1",children:[Object(c.jsx)("div",{className:"sty-icon",children:Object(c.jsx)("img",{src:"/static/img/favicons/app/add_w.svg"})}),Object(c.jsx)("div",{className:"sty-tag",children:Object(c.jsx)(o.a,{group:"button",tag:"add"})})]})});return Object(c.jsx)(c.Fragment,{children:(null===e||void 0===e?void 0:e.id)&&Object(c.jsx)(b.a,{titles:[Object(u.a)("input","name"),Object(u.a)("input","options")],titleTable:Object(u.a)("dashboard","tit_recipe_1_2"),tagCount:Object(u.a)("input","recipes"),pageSize:10,elementTitle:t,endpoint:l.a.get_recipes,Rows:v,params:{regions:e.id},values:{region:e.id}})})}function x(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(y,{})})}t.default=function(){return Object(c.jsx)(r.a,{children:Object(c.jsx)(x,{})})}},OBzv:function(e,t,n){"use strict";var c=n("wx14"),a=n("zLVn"),r=n("q1tI"),s=n.n(r),o=n("17x9"),i=n.n(o),u=n("TSYQ"),l=n.n(u),b=n("33Jr"),j=["className","cssModule","tag"],d={tag:b.n,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,o=Object(a.a)(e,j),i=Object(b.j)(l()(t,"modal-footer"),n);return s.a.createElement(r,Object(c.a)({},o,{className:i}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},OGmE:function(e,t,n){"use strict";var c=n("r6wT"),a={url:"".concat(c.a.api_url,"/nutritionist/recipes/categories/"),typeRequest:"get"},r={url:"".concat(c.a.api_url,"/nutritionist/recipes/"),typeRequest:"get"},s={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/"),typeRequest:"get"},o={url:"".concat(c.a.api_url,"/nutritionist/recipes/regions/"),typeRequest:"get"},i={url:"".concat(c.a.api_url,"/nutritionist/recipes/"),typeRequest:"post"},u={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/"),typeRequest:"patch"},l={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/"),typeRequest:"delete"},b={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/images/"),typeRequest:"post-form"},j={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/images/#"),typeRequest:"delete"},d={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/equivalents/"),typeRequest:"post"},p={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/equivalents/"),typeRequest:"get"},O={url:"".concat(c.a.api_url,"/nutritionist/recipes/#/equivalents/#/"),typeRequest:"delete"};t.a={get_categories:a,get_recipes:r,get_recipe:s,get_regions:o,post_create_recipes:i,patch_update_recipes:u,delete_recipes:l,post_image:b,delete_image:j,post_equivalent:d,get_equivalents:p,delete_equivalents:O}},gHec:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("nKUr"),a=n("q1tI"),r=n("LvDl"),s=n("N/Cw");function o(e){var t=e.pageSize,n=e.total,o=e.page,i=e.setPage,u=Object(a.useState)(0),l=u[0],b=u[1],j=Object(a.useState)([]),d=j[0],p=j[1],O=Object(a.useState)([]),f=O[0],g=O[1];Object(a.useEffect)((function(){var e=n/t;b(Math.ceil(e))}),[n,t]),Object(a.useEffect)((function(){0!=l&&(l<=5?h():m())}),[l,o]),Object(a.useEffect)((function(){var e=Object(r.map)(d,(function(e,t){var n=e==o;return Object(c.jsx)("div",{className:"".concat(o==e?"sty-pag-ele":"sty-pag-points"," ").concat(n?"sty-select":""),onClick:function(){i(e)},children:e},"number_".concat(t))}));g(e)}),[d]);var h=function(){for(var e=[],t=1;t<=l;t++)e.push(t);p(e)},m=function(){var e=[];if(o<=2)for(var t=1;t<=5;t++)e.push(t);if(o>2&&o<=l-2)for(var n=o-2;n<=o+2;n++)e.push(n);if(o>l-2)for(var c=l-5+1;c<=l;c++)e.push(c);p(e)};return Object(c.jsx)(c.Fragment,{children:l>0&&Object(c.jsxs)("div",{className:"row sty-cont-pagination",children:[Object(c.jsxs)("div",{className:"col-12 text-center sty-cont-pag",children:[Object(c.jsx)("div",{className:"sty-pag-ele",onClick:function(){o>1&&i(o-1)},children:Object(c.jsx)("img",{src:"/static/img/favicons/app/prev.svg"})},"right_tabL_arrow"),f,Object(c.jsx)("div",{className:"sty-pag-ele",onClick:function(){o<l&&i(o+1)},children:Object(c.jsx)("img",{src:"/static/img/favicons/app/next.svg"})},"right_tabR_row")]}),Object(c.jsxs)("div",{className:"col-12 text-right sty-cont-total",children:[Object(c.jsx)("div",{className:"sty-tag",children:Object(c.jsx)(s.a,{group:"input",tag:"table_tag_1"})}),Object(c.jsx)("div",{className:"sty-data",children:n})]})]})})}},qHbH:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c=n("nKUr"),a=n("o0o1"),r=n.n(a),s=n("rePB"),o=n("HaE+"),i=n("q1tI"),u=n("LvDl"),l=n("H91H"),b=n("ivJU"),j=n("3GKT"),d=n("veiu"),p=n("gHec");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=Object(l.a)().locale,n=e.elementTitle,a=e.titleTable,s=(e.tagCount,e.classCustomTitle),O=e.pageSize,g=void 0===O?20:O,h=e.titles,m=e.Rows,v=e.endpoint,y=e.params,x=e.ids,w=void 0===x?null:x,_=e.customFunction,N=e.customFunction2,k=e.values,E=e.showSearch,T=void 0===E||E,C=Object(i.useState)([]),S=C[0],P=C[1],q=Object(i.useState)(""),R=q[0],D=q[1],H=Object(i.useState)(1),M=H[0],L=H[1],F=Object(i.useState)([]),J=F[0],A=F[1],G=Object(i.useState)(1),B=G[0],I=G[1],U=Object(i.useState)(1),z=(U[0],U[1]),K=Object(i.useState)(!1),V=K[0],Q=K[1];Object(i.useEffect)((function(){W()}),[]),Object(i.useEffect)((function(){t&&0!=M&&X()}),[t,y,M,k]),Object(i.useEffect)((function(){0==M&&L(1)}),[M]),Object(i.useEffect)((function(){V&&(L(0),Q(!1))}),[V]),Object(i.useEffect)((function(){var e=setTimeout((function(){L(0)}),200);return function(){return clearTimeout(e)}}),[R]);var W=function(){var e=Object(u.map)(h,(function(e,t){return Object(c.jsx)("th",{children:e},"cell_".concat(t))}));P(e)},X=function(){var e=Object(o.a)(r.a.mark((function e(){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},null!=y&&(n=f({},y)),n.page_size=g,n.page=M,""!=R&&(n.search=R),e.next=7,Object(d.a)(v,n,w,{locale:t},!0,!1);case 7:null!=(c=e.sent)&&(Z(c),I(c.page.count),z(Math.ceil(c.page.count/g)));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==(n=Object(u.map)(t.result,(function(e,t){return Object(c.jsx)(m,{row:e,UpdateTable:Y,index:t,customFunction:_,customFunction2:N,values:k},"row_table_".concat(t))}))).length&&(n=Object(c.jsx)("tr",{children:Object(c.jsx)("td",{className:"sty-notResult",colSpan:h.length,children:Object(j.a)("input","table_empty")})})),A(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){Q(!0)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"row sty-cont-option-1",children:[Object(c.jsx)("div",{className:"col-12 col-md-6 text-center text-md-left",children:n}),1==T&&Object(c.jsx)("div",{className:"col-12 col-md-6 text-center text-md-right sty-cont-search-1",children:Object(c.jsxs)("div",{className:"sty-search-input",children:[Object(c.jsx)("div",{className:"sty-cont-icon",children:Object(c.jsx)(b.a,{className:"sty-icon",viewBox:"0 0 515.558 515.558",name:"icon-search"})}),Object(c.jsx)("input",{placeholder:Object(j.a)("input","search"),type:"text",onChange:function(e){return function(e){D(e.currentTarget.value)}(e)}})]})})]}),Object(c.jsxs)("div",{className:"sty-content-data-1",children:[Object(c.jsx)("div",{className:"sty-card-title ".concat(s),children:a}),Object(c.jsx)("div",{className:"sty-cont-table-1",children:Object(c.jsxs)("table",{className:"sty-table-1",children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{children:S})}),Object(c.jsx)("tbody",{children:J})]})}),Object(c.jsx)("div",{className:"col-12 sty-all-pagination",children:Object(c.jsx)(p.a,{pageSize:g,total:B,page:M,setPage:L})})]})]})}},r6wT:function(e,t,n){"use strict";var c=n("rePB");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=r(r({},{api_url:"http://34.197.204.7:3000/",strip_key:"pk_test_51HCSuVAZmpwA1ahJhg8GobymlTQBfVDmGgCg98wIZ8IVaUjZ3JlmEAj64dnIkGC7m6vHGLMD4kb9f8x49wQCUZA5005lrLGi5s"}),{},{debug:0})},veiu:function(e,t,n){"use strict";var c=n("o0o1"),a=n.n(c),r=n("HaE+"),s=n("8WVE");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=e.url,r=e.typeRequest,o={headers:{Accept:"application/json"}};switch(void 0!=c&&null!=c&&Object.keys(c).forEach((function(e){"locale"==e&&null!=c[e]&&(o.headers["Accept-Language"]=c[e]),"currency"==e&&(o.headers["X-Currency"]=c[e])})),null!=Object(s.c)()&&(o.headers.Authorization="Token ".concat(Object(s.c)())),null!=n&&n.map((function(e,t){a=a.replaceAt(a.indexOf("#"),e)})),r){case"get":if(o.headers["Content-Type"]="application/json",o.method="GET",null!==t){var i=[];Object.keys(t).forEach((function(e){i.push("".concat(e,"=").concat(encodeURIComponent(t[e])))})),a="".concat(a,"?").concat(i.join("&"))}break;case"post":o.headers["Content-Type"]="application/json",o.method="POST",null!=t&&(o.body=JSON.stringify(t));break;case"post-form":if(o.method="POST",null!==t){var u=new FormData;i=[];Object.keys(t).forEach((function(e){u.append(e,t[e])})),o.body=u}break;case"put":o.headers["Content-Type"]="application/json",o.method="PUT",null!=t&&(o.body=JSON.stringify(t));break;case"put-form":if(o.method="PUT",null!==t){u=new FormData,i=[];Object.keys(t).forEach((function(e){u.append(e,t[e])})),o.body=u}break;case"patch":o.headers["Content-Type"]="application/json",o.method="PATCH",null!=t&&(o.body=JSON.stringify(t));break;case"patch-form":if(o.method="PATCH",null!==t){u=new FormData,i=[];Object.keys(t).forEach((function(e){u.append(e,t[e])})),o.body=u}break;case"delete":o.headers["Content-Type"]="application/json",o.method="DELETE",null!=t&&(o.body=JSON.stringify(t))}return fetch(a,o).then((function(e){var t={error:!1};switch(t.statusHttp=e.status,e.status){case 404:t.error=!0,t.errorMessage=e.statusText;break;case 400:t.error=!0,t.errorMessage=e.json();break;default:t.response={}}return e.status>=200&&e.status<204&&(t.response=e.json()),t})).catch((function(e){return console.error("Error:",e),null}))}String.prototype.replaceAt=function(e,t){return e>=this.length?this.valueOf():this.substring(0,e)+t+this.substring(e+1)};var i=n("BkJ1"),u=n("0FtN"),l=n("3GKT");t.a=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,c,r,s,b,j,d,p,O=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.length>1&&void 0!==O[1]?O[1]:{},c=O.length>2&&void 0!==O[2]?O[2]:null,r=O.length>3&&void 0!==O[3]?O[3]:{},s=!(O.length>4&&void 0!==O[4])||O[4],(b=O.length>5&&void 0!==O[5]&&O[5])&&Object(u.a)(!0),e.next=8,o(t,n,c,r);case 8:if(j=e.sent,b&&Object(u.a)(!1),!(j.statusHttp>=500&&j.statusHttp<600)){e.next=13;break}return s&&Object(i.a)(Object(l.a)("validation","unexpected_error")),e.abrupt("return",null);case 13:if(null!=j){e.next=16;break}return s&&Object(i.a)("Error inesperado"),e.abrupt("return",null);case 16:if(j.error){e.next=28;break}return e.next=19,j.response;case 19:if("undefined"==typeof(d=e.sent).success||d.success){e.next=25;break}return s&&Object(i.a)(d.message),e.abrupt("return",null);case 25:return e.abrupt("return",d);case 26:e.next=34;break;case 28:if(!s){e.next=34;break}return e.next=31,j.errorMessage;case 31:return"undefined"!=typeof(p=e.sent).message?Object(i.a)(p.message):Object(i.a)(p),e.abrupt("return",null);case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},vkoW:function(e,t,n){"use strict";var c=n("wx14"),a=n("zLVn"),r=n("q1tI"),s=n.n(r),o=n("17x9"),i=n.n(o),u=n("TSYQ"),l=n.n(u),b=n("33Jr"),j=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"],d={tag:b.n,wrapTag:b.n,toggle:i.a.func,className:i.a.string,cssModule:i.a.object,children:i.a.node,closeAriaLabel:i.a.string,charCode:i.a.oneOfType([i.a.string,i.a.number]),close:i.a.object},p=function(e){var t,n=e.className,r=e.cssModule,o=e.children,i=e.toggle,u=e.tag,d=e.wrapTag,p=e.closeAriaLabel,O=e.charCode,f=e.close,g=Object(a.a)(e,j),h=Object(b.j)(l()(n,"modal-header"),r);if(!f&&i){var m="number"===typeof O?String.fromCharCode(O):O;t=s.a.createElement("button",{type:"button",onClick:i,className:Object(b.j)("close",r),"aria-label":p},s.a.createElement("span",{"aria-hidden":"true"},m))}return s.a.createElement(d,Object(c.a)({},g,{className:h}),s.a.createElement(u,{className:Object(b.j)("modal-title",r)},o),f||t)};p.propTypes=d,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p}},[["6Lwk",0,2,6,4,1,3,5,7,11]]]);