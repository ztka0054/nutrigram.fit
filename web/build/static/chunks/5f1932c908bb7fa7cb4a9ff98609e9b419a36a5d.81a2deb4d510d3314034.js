(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"27xF":function(e,t,c){"use strict";var a=c("r6wT"),n={url:"".concat(a.a.api_url,"/nutritionist/blog/"),typeRequest:"post-form"},s={url:"".concat(a.a.api_url,"/nutritionist/blog/#/images/"),typeRequest:"post-form"},i={url:"".concat(a.a.api_url,"/nutritionist/blog/#/images/#/"),typeRequest:"patch-form"},r={url:"".concat(a.a.api_url,"/nutritionist/blog/#/images/#/"),typeRequest:"delete"},o={url:"".concat(a.a.api_url,"/nutritionist/blog/"),typeRequest:"get"},l={url:"".concat(a.a.api_url,"/nutritionist/blog/#/"),typeRequest:"get"},u={url:"".concat(a.a.api_url,"/nutritionist/blog/#/"),typeRequest:"patch-form"},d={url:"".concat(a.a.api_url,"/nutritionist/blog/#/"),typeRequest:"patch"},j={url:"".concat(a.a.api_url,"/nutritionist/blog/#/"),typeRequest:"delete"},b={url:"".concat(a.a.api_url,"/nutritionist/blog/public/"),typeRequest:"get"},m={url:"".concat(a.a.api_url,"/nutritionist/blog/public/#/"),typeRequest:"get"};t.a={get_blogs:o,get_blog:l,post_blog:n,post_blog_img:s,patch_blog_img:i,delete_blog_img:r,patch_blog:u,patch_n_blog:d,delete_blog:j,get_posts_staff:b,get_post_staff:m}},"38iW":function(e,t,c){"use strict";function a(e){var t=window.innerHeight;e.style.minHeight="".concat(t,"px")}function n(e){var t=document.getElementById("navBarFirst").offsetHeight,c=window.innerHeight;e.style.minHeight="".concat(c-t,"px")}c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return n}))},FIQW:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a=c("nKUr"),n=(c("q1tI"),c("kK77"),c("TSYQ")),s=c.n(n),i=c("N/Cw");function r(e){var t=e.error;return Object(a.jsx)(a.Fragment,{children:t&&Object(a.jsx)("div",{className:"tag-error ".concat(s()({active:t})),children:Object(a.jsx)("div",{className:"text",children:Object(a.jsx)(i.a,{group:"validation",tag:t})})})})}},KQm4:function(e,t,c){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,a=new Array(t);c<t;c++)a[c]=e[c];return a}function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(t,"a",(function(){return n}))},MRKt:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var a=c("nKUr"),n=c("q1tI"),s=c("20a2"),i=c("2+Dk"),r=c("ek3Q"),o=c("TSYQ"),l=c.n(o),u=c("38iW"),d=c("pEOT"),j=c("N/Cw"),b=c("ivJU");function m(e){var t=e.children,c=Object(s.useRouter)().pathname,i=Object(n.useState)(!1),r=i[0],o=i[1],m=Object(n.useState)(0),p=m[0],v=m[1],g=Object(n.useRef)();Object(n.useEffect)((function(){Object(u.b)(g.current)}),[]),Object(n.useEffect)((function(){c&&h(c)}),[c]);var h=function(e){var t=0;switch(e.split("/")[2]){case"patients":t=1;break;case"equivalents":t=2;break;case"recipes":t=3;break;case"menus":t=4;break;case"quotes":t=5;break;case"blogs":t=6;break;default:t=0}v(t)};return Object(a.jsx)("div",{className:"container-fluid class-heightNavBar",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-10 col-md-2 sty-menu-dashboard ".concat(l()({active:!0===r})),children:[Object(a.jsx)("div",{className:"sty-button-show-menu sty-show-resp-1",children:Object(a.jsx)("div",{className:"sty-cont-button ".concat(l()({active:!0===r})),onClick:function(){o(!r)},children:Object(a.jsx)(b.a,{className:"sty-icon",viewBox:"0 0 492.004 492.004",name:"icon-next"})})}),Object(a.jsxs)("div",{className:"sty-cont-menu",ref:g,children:[Object(a.jsx)(d.a,{route:"/dashboard/patients",children:Object(a.jsxs)("div",{className:"sty-cont-section ".concat(l()({active:1===p})),children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/dashboard/icon_1.png"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(j.a,{group:"dashboard",tag:"menu_1"})})]})}),Object(a.jsx)(d.a,{route:"/dashboard/equivalents",children:Object(a.jsxs)("div",{className:"sty-cont-section ".concat(l()({active:2===p})),children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/dashboard/icon_2.png"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(j.a,{group:"dashboard",tag:"menu_2"})})]})}),Object(a.jsx)(d.a,{route:"/dashboard/recipes",children:Object(a.jsxs)("div",{className:"sty-cont-section ".concat(l()({active:3===p})),children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/dashboard/icon_3.png"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(j.a,{group:"dashboard",tag:"menu_3"})})]})}),Object(a.jsx)(d.a,{route:"/dashboard/menus",children:Object(a.jsxs)("div",{className:"sty-cont-section ".concat(l()({active:4===p})),children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/dashboard/icon_4.png"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(j.a,{group:"dashboard",tag:"menu_4"})})]})}),Object(a.jsx)(d.a,{route:"/dashboard/quotes",children:Object(a.jsxs)("div",{className:"sty-cont-section ".concat(l()({active:5===p})),children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/dashboard/icon_5.png"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(j.a,{group:"dashboard",tag:"menu_5"})})]})}),Object(a.jsx)(d.a,{route:"/dashboard/blogs",children:Object(a.jsxs)("div",{className:"sty-cont-section ".concat(l()({active:6===p})),children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/dashboard/icon_6.png"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(j.a,{group:"dashboard",tag:"menu_6"})})]})})]})]}),Object(a.jsx)("div",{className:"col-12 col-md-10 sty-dashboard",children:t})]})})}function p(e){var t=e.children,c=Object(s.useRouter)(),o=Object(i.a)();return Object(n.useEffect)((function(){o.isReady&&void 0==(null===o||void 0===o?void 0:o.auth)&&c.push("/login")}),[o]),Object(a.jsx)(a.Fragment,{children:(null===o||void 0===o?void 0:o.flagLogin)&&Object(a.jsx)(r.a,{typeNav:2,header:{title:"Dashboard"},children:Object(a.jsx)(m,{children:t})})})}},RULz:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a=c("nKUr"),n=c("q1tI"),s=c("TSYQ"),i=c.n(s);function r(e){var t=e.formik,c=e.name,s=e.tag,r=Object(n.useState)(!1),o=r[0],l=r[1];Object(n.useEffect)((function(){l(t.values[c])}),[t.values[c]]);return Object(a.jsxs)("div",{className:"check-content",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"check-1 ".concat(i()({active:o})),onClick:function(){t.setFieldValue(c,!o)},children:[Object(a.jsx)("span",{className:"input_inside"}),Object(a.jsx)("input",{name:c,value:t.values[c],onChange:t.handleChange,type:"checkbox"})]})}),Object(a.jsx)("div",{className:"tag",children:s})]})}},TACw:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));c("wd/R");var a=function(){Array.prototype.sortBy=function(e){return this.slice(0).sort((function(t,c){return t[e]>c[e]?1:t[e]<c[e]?-1:0}))}}},bXbK:function(e,t,c){"use strict";c.d(t,"a",(function(){return F}));var a=c("nKUr"),n=c("KQm4"),s=c("o0o1"),i=c.n(s),r=c("HaE+"),o=c("q1tI"),l=c("20a2"),u=c("KYPV"),d=c("UGp+"),j=c("LvDl"),b=c("H91H"),m=c("N/Cw"),p=c("FIQW"),v=c("3GKT"),g=c("veiu"),h=c("27xF"),O=c("0FtN"),f=c("TACw"),x="/static/img/favicons/app/pic_1.png";function y(e){var t,c=e.formik,n=e.name,s=Object(o.useState)(x),i=s[0],r=s[1],l=Object(o.useRef)();Object(o.useEffect)((function(){var e,t;null!==(e=c.values)&&void 0!==e&&e["".concat(n,"_pic_preview")]&&r(null===(t=c.values)||void 0===t?void 0:t["".concat(n,"_pic_preview")])}),[null===(t=c.values)||void 0===t?void 0:t["".concat(n,"_pic_preview")]]);return Object(a.jsxs)("div",{className:"sty-cont-load-img-1",onClick:function(e){l.current.click()},children:[Object(a.jsx)("div",{className:"sty-pic",children:Object(a.jsx)("img",{src:i})}),Object(a.jsxs)("div",{className:"sty-tag",children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/add_b.svg"})}),Object(a.jsx)("div",{className:"sty-name",children:Object(a.jsx)(m.a,{group:"input",tag:"tag_add_img"})})]}),Object(a.jsx)("input",{ref:l,name:n,type:"file",accept:"image/x-png,image/gif,image/jpeg",className:"sty-hide-element",onChange:function(e){return function(e){Object(j.size)(e.target.files)>0?(c.setFieldValue(n,e.target.files[0]),c.setFieldValue("".concat(n,"_check"),URL.createObjectURL(e.target.files[0])),r(URL.createObjectURL(e.target.files[0]))):(c.setFieldValue(n,""),c.setFieldValue("".concat(n,"_check"),""),r(x))}(e)}}),Object(a.jsx)("input",{name:"".concat(n,"_check"),type:"text",className:"sty-hide-element"}),Object(a.jsx)(p.a,{error:c.errors["".concat(n,"_check")]})]})}c("ivJU");var _="/static/img/favicons/app/pic_1.png";function N(e){var t=e.formik,c=e.name,n=Object(o.useState)(_),s=n[0],i=n[1],r=Object(o.useState)(!1),l=r[0],u=r[1],d=Object(o.useRef)(),b=Object(o.useRef)();Object(o.useEffect)((function(){p()}),[t.values[c]]);var p=function(){var e=t.values[c];e?"string"==typeof e?(i(e),u(!0)):(i(URL.createObjectURL(e)),u(!0)):i(_),null!==b&&void 0!==b&&b.current&&b.current.load()};return Object(a.jsxs)("div",{className:"sty-cont-load-img-1",onClick:function(){d.current.click()},children:[Object(a.jsxs)("div",{className:"sty-pic",children:[!l&&Object(a.jsx)("img",{src:s}),l&&Object(a.jsx)("video",{id:"video-element",controls:!0,ref:b,children:Object(a.jsx)("source",{type:"video/mp4",src:s})})]}),Object(a.jsxs)("div",{className:"sty-tag",children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/add_b.svg"})}),Object(a.jsx)("div",{className:"sty-name",children:Object(a.jsx)(m.a,{group:"input",tag:"tag_add_video"})})]}),Object(a.jsx)("input",{ref:d,type:"file",accept:"video/mp4",className:"sty-hide-element",onChange:function(e){return function(e){Object(j.size)(e.target.files)>0?t.setFieldValue(c,e.target.files[0]):t.setFieldValue(null)}(e)}})]})}var k=c("RULz"),w="/static/img/favicons/app/human.png";function R(e){var t,c,n=e.formik,s=e.father,i=e.name,r=e.index,l=Object(o.useState)(w),u=l[0],d=l[1],b=Object(o.useRef)();Object(o.useEffect)((function(){v()}),[n.values[s][r]]);var v=function(){var e,t=null===(e=n.values[s][r])||void 0===e?void 0:e[i];"string"==typeof t?d(t):t&&d(URL.createObjectURL(t))};return Object(a.jsxs)("div",{className:"sty-cont-load-img-1",onClick:function(e){b.current.click()},children:[Object(a.jsx)("div",{className:"sty-pic",children:Object(a.jsx)("img",{src:u})}),Object(a.jsxs)("div",{className:"sty-tag",children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/add_b.svg"})}),Object(a.jsx)("div",{className:"sty-name",children:Object(a.jsx)(m.a,{group:"input",tag:"tag_add_img"})})]}),Object(a.jsx)("input",{ref:b,name:"".concat(s,"[").concat(r,"].").concat(i),type:"file",accept:"image/x-png,image/gif,image/jpeg",className:"sty-hide-element",onChange:function(e){return function(e){Object(j.size)(e.target.files)>0?(n.setFieldValue("".concat(s,"[").concat(r,"].").concat(i),e.target.files[0]),n.setFieldValue("".concat(s,"[").concat(r,"].").concat(i,"_check"),URL.createObjectURL(e.target.files[0])),d(URL.createObjectURL(e.target.files[0]))):(n.setFieldValue("".concat(s,"[").concat(r,"].").concat(i),""),n.setFieldValue("".concat(s,"[").concat(r,"].").concat(i,"_check"),""),d(w))}(e)}}),Object(a.jsx)("input",{name:"".concat(s,"[").concat(r,"].").concat(i,"_check"),type:"text",className:"sty-hide-element"}),Object(a.jsx)(p.a,{error:null===(t=n.errors[s])||void 0===t||null===(c=t[r])||void 0===c?void 0:c["".concat(i,"_check")]})]})}function C(e){var t,c,n=e.formik,s=e.arrayHelpers,i=e.index,r=e.content,o=e.father;return Object(a.jsxs)(a.Fragment,{children:[1==r.type&&Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-10",children:Object(a.jsx)(R,{formik:n,father:o,name:"image",index:i})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("button",{className:"sty-button-dash-1 fix-icon",type:"button",onClick:function(){return s.remove(i)},children:Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/rem_w.svg"})})})})]},i),2==r.type&&Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-10",children:Object(a.jsxs)("div",{className:"sty-cont-input-2",children:[Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(m.a,{group:"input",tag:"text"})}),Object(a.jsxs)("div",{className:"sty-input",children:[Object(a.jsx)("textarea",{name:"".concat(o,"[").concat(i,"].text"),value:n.values[o][i].text,onChange:n.handleChange}),Object(a.jsx)(p.a,{error:null===(t=n.errors[o])||void 0===t||null===(c=t[i])||void 0===c?void 0:c.text})]})]})}),Object(a.jsx)("div",{className:"col-2 sty-cont-sub-1",children:Object(a.jsx)("button",{className:"sty-button-dash-1 fix-icon",type:"button",onClick:function(){return s.remove(i)},children:Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/rem_w.svg"})})})})]},i)]})}function q(e){var t=e.formik,c=e.arrayHelpers,n=e.father;return Object(a.jsxs)(a.Fragment,{children:[Object(j.map)(t.values[n],(function(e,s){return Object(a.jsx)("div",{children:Object(a.jsx)(C,{formik:t,arrayHelpers:c,index:s,content:e,father:n})},s)})),Object(a.jsx)("div",{className:"sty-cont-buttons-1",children:Object(a.jsxs)("div",{className:"row justify-content-end",children:[Object(a.jsx)("div",{className:"col-4",children:Object(a.jsxs)("button",{className:"sty-button-dash-1 fix-25",type:"button",onClick:function(){return c.push({type:2,text:" "})},children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/add_w.svg"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(v.a)("button","tag_d_add_text")})]})}),Object(a.jsx)("div",{className:"col-4",children:Object(a.jsxs)("button",{className:"sty-button-dash-1 fix-25",type:"button",onClick:function(){return c.push({type:1})},children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/add_w.svg"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(v.a)("button","tag_d_add_image")})]})})]})})]})}function F(e){var t=e.idElement,c=Object(l.useRouter)(),s=Object(b.a)().locale,x=Object(u.c)({validateOnChange:!1,initialValues:{image_check:"",title:"",instagramLink:"",isActive:!1,isPublic:!1,content:"",contents:[]},validationSchema:d.d({image_check:d.e().required("required"),title:d.e().required("required"),content:d.e().required("required"),contents:d.a().of(d.d().shape({image_check:d.e().ensure().when("text",{is:void 0,then:d.e().required("required")})}))}),onSubmit:function(){var e=Object(r.a)(i.a.mark((function e(t,c){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.resetForm,null!==t&&void 0!==t&&t.id?F(t):R(t,a);case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()});Object(o.useEffect)((function(){t&&_()}),[t]);var _=function(){var e=Object(r.a)(i.a.mark((function e(){var c,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)(h.a.get_blog,null,[t],{locale:s});case 2:null!=(c=e.sent)&&(a=Object(j.map)(c.images,(function(e){return e.image_check="up",e.type=1,e})),r=Object(j.map)(c.paragraphs,(function(e){return e.type=2,e})),o=[].concat(Object(n.a)(a),Object(n.a)(r)),Object(f.a)(),o=o.sortBy("order"),w(c,o));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e,t){var c={id:e.id,image_check:null==e.image?"":e.image,image_pic_preview:e.image,video:e.video,title:e.title,instagramLink:e.instagramLink,isActive:e.isActive,isPublic:e.isPublic,content:e.content,contents:t};x.setValues(c)},R=function(){var e=Object(r.a)(i.a.mark((function e(t,c){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){return null==t[e]&&delete t[e]})),Object(O.a)(!0),e.next=4,Object(g.a)(h.a.post_blog,t,null,{locale:s});case 4:a=e.sent,Object(O.a)(!1),null!=a&&C(t,a);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),C=function(){var e=Object(r.a)(i.a.mark((function e(t,a){var n,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={content:t.content,paragraphs:[]},o=a.id,"undefined"==typeof t.contents){e.next=11;break}return l=[],Object(j.map)(t.contents,function(){var e=Object(r.a)(i.a.mark((function e(t,c){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!=typeof t.text&&n.paragraphs.push({order:c,text:t.text}),"undefined"!=typeof t.image&&(a={order:c,image:t.image},l.push(Object(g.a)(h.a.post_blog_img,a,[o],{locale:s})));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),Object(O.a)(!0),e.next=8,Promise.all(l);case 8:return e.next=10,Object(g.a)(h.a.patch_n_blog,n,[o],{locale:s});case 10:Object(O.a)(!1);case 11:c.push("/dashboard/blogs");case 12:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),F=function(){var e=Object(r.a)(i.a.mark((function e(c){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(O.a)(!0),null===c.video&&delete c.video,"string"===typeof c.video&&delete c.video,e.next=5,Object(g.a)(h.a.patch_blog,c,[t],{locale:s});case 5:a=e.sent,Object(O.a)(!1),null!=a&&U(c,a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(i.a.mark((function e(a,n){var o,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],Object(j.map)(n.images,(function(e){void 0===a.contents.find((function(t){return t.id==e.id}))&&o.push(Object(g.a)(h.a.delete_blog_img,{},[t,e.id],{locale:s}))})),e.next=4,Promise.all(o);case 4:if(l={content:a.content,paragraphs:[]},u=t,null===a||void 0===a||!a.contents){e.next=17;break}return d=[],Object(j.map)(a.contents,function(){var e=Object(r.a)(i.a.mark((function e(t,c){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:2===t.type&&l.paragraphs.push({order:c,text:t.text}),1===t.type&&(null!==t&&void 0!==t&&t.id?(a={order:c},"string"==typeof value&&(a.image=t.image),d.push(Object(g.a)(h.a.patch_blog_img,a,[u,t.id],{locale:s}))):(a={order:c,image:t.image},d.push(Object(g.a)(h.a.post_blog_img,a,[u],{locale:s}))));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),Object(O.a)(!0),e.next=12,Promise.all(o);case 12:return e.next=14,Promise.all(d);case 14:return e.next=16,Object(g.a)(h.a.patch_n_blog,l,[u],{locale:s});case 16:Object(O.a)(!1);case 17:c.push("/dashboard/blogs");case 18:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(a.jsx)("form",{onSubmit:x.handleSubmit,children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-5",children:[Object(a.jsx)(y,{formik:x,name:"image"}),Object(a.jsx)(N,{formik:x,name:"video"})]}),Object(a.jsxs)("div",{className:"col-7",children:[Object(a.jsxs)("div",{className:"sty-cont-input-2",children:[Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(m.a,{group:"input",tag:"title"})}),Object(a.jsxs)("div",{className:"sty-input",children:[Object(a.jsx)("input",{name:"title",type:"text",value:x.values.title,onChange:x.handleChange}),Object(a.jsx)(p.a,{error:x.errors.title})]})]}),Object(a.jsxs)("div",{className:"sty-cont-input-2",children:[Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(m.a,{group:"input",tag:"instagram"})}),Object(a.jsx)("div",{className:"sty-input",children:Object(a.jsx)("input",{name:"instagramLink",value:x.values.instagramLink,onChange:x.handleChange,type:"text"})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(k.a,{formik:x,name:"isActive",tag:Object(v.a)("input","active")})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(k.a,{formik:x,name:"isPublic",tag:Object(v.a)("input","public")})})]}),Object(a.jsxs)("div",{className:"sty-cont-input-2",children:[Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(m.a,{group:"input",tag:"text"})}),Object(a.jsxs)("div",{className:"sty-input",children:[Object(a.jsx)("textarea",{name:"content",value:x.values.content,onChange:x.handleChange}),Object(a.jsx)(p.a,{error:x.errors.content})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(u.b,{value:x,children:Object(a.jsx)(u.a,{name:"contents",render:function(e){return Object(a.jsx)(q,{formik:x,arrayHelpers:e,father:"contents"})}})})]}),Object(a.jsx)("div",{className:"col-12 text-center sty-magin-b-1",children:Object(a.jsxs)("button",{className:"sty-button-dash-1",type:"submit",children:[Object(a.jsx)("div",{className:"sty-icon",children:Object(a.jsx)("img",{src:"/static/img/favicons/app/save_w.svg"})}),Object(a.jsx)("div",{className:"sty-tag",children:Object(a.jsx)(m.a,{group:"button",tag:"save"})})]})})]})})}}}]);