_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[67],{E0NJ:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup_step_4",function(){return c("UwPn")}])},UwPn:function(e,t,c){"use strict";c.r(t);var s=c("nKUr"),n=c("q1tI"),a=c("20a2"),r=c("bq+c"),i=c("H91H"),o=c("eWwy"),l=c("v4r+"),d=c("N/Cw"),u=c("r6wT"),j=c("o0o1"),b=c.n(j),m=c("HaE+"),p=c("veiu"),O=c("/ZRg"),f=c("8++J"),v=c("sjcq"),x=c("3GKT");function h(){var e=Object(i.a)(),t=e.locale,c=e.objectsSignUp,a=Object(n.useState)(null),r=a[0],o=a[1];Object(n.useEffect)((function(){null!==c&&void 0!==c&&c.selectedPlan&&l()}),[t,c]);var l=function(){var e=Object(m.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(O.a.get_subcriptions,null,null,{locale:t});case 2:null!=(c=e.sent)&&d(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(e){var t=e.find((function(e){return e.id===c.selectedPlan.id}));if("undefined"!=typeof t){var n=t.description.split("\r\n");n=n.map((function(e,t){return Object(s.jsx)("div",{className:"sty-feature",children:e})}));var a=t.prices.find((function(e){return e.id===c.selectedSubscritpion.id})),r=Object(s.jsxs)("div",{className:"sty-select-plan",children:[Object(s.jsx)("div",{className:"sty-title-plan sty-color-1",children:t.name}),Object(s.jsx)("div",{className:"sty-features",children:n}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"sty-price",children:[Object(v.a)(a.name),Object(s.jsx)("br",{}),Object(x.a)("input","cost"),": $"," ",Object(f.a)(parseFloat(a.price.amount).toFixed(2))]})]});o(r)}};return Object(s.jsx)(s.Fragment,{children:r})}var g=c("0FtN"),y=c("BkJ1");function N(){var e=Object(o.useStripe)(),t=Object(a.useRouter)(),c=Object(o.useElements)(),r=E(),l=Object(i.a)(),u=l.locale,j=l.objectsSignUp,f=Object(n.useState)(null),v=f[0],h=f[1],N=Object(n.useState)(null),_=N[0],w=N[1],C=function(){var t=Object(m.a)(b.a.mark((function t(s){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),Object(g.a)(!0),e&&c){t.next=5;break}return Object(g.a)(!1),t.abrupt("return");case 5:return t.next=7,e.createPaymentMethod({type:"card",card:c.getElement(o.CardNumberElement)});case 7:n=t.sent,console.log(n),k(n);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(b.a.mark((function e(c){var s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(c),"undefined"==typeof c.paymentMethod){e.next=9;break}return s={paymentMethodId:c.paymentMethod.id,price:j.selectedSubscritpion.id},Object(g.a)(!0),e.next=6,Object(p.a)(O.a.post_subscription,s,null,{locale:u},!0,!1);case 6:n=e.sent,Object(g.a)(!1),null!=n&&(Object(y.a)(Object(x.a)("validation","pay_message_1")),null!==n&&void 0!==n&&n.code||t.push("/dashboard/patients"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{onSubmit:function(e){return C(e)},children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"sty-cont-input-2",children:[Object(s.jsx)("div",{className:"sty-tag",children:Object(s.jsx)(d.a,{group:"input",tag:"cardNumber"})}),Object(s.jsxs)("div",{className:"sty-input",children:[Object(s.jsx)(o.CardNumberElement,{className:"sty-input-card",options:r,onReady:function(){console.log("CardNumberElement [ready]")},onChange:function(e){console.log("CardNumberElement [change]",e),function(e){if("cardNumber"==e.elementType)switch(e.brand){case"visa":w(1);break;case"mastercard":w(2);break;case"amex":w(3);break;default:w(0)}"undefined"!=typeof e.error?h(e.error.code):h(null)}(e)},onBlur:function(){console.log("CardNumberElement [blur]")},onFocus:function(){console.log("CardNumberElement [focus]")}}),Object(s.jsxs)("div",{className:"sty-brand",children:[0==_&&Object(s.jsx)(s.Fragment,{}),1==_&&Object(s.jsx)("div",{className:"sty-cont-icon",children:Object(s.jsx)("img",{src:"/static/img/favicons/card/visa.svg"})}),2==_&&Object(s.jsx)("div",{className:"sty-cont-icon",children:Object(s.jsx)("img",{src:"/static/img/favicons/card/master.svg"})}),3==_&&Object(s.jsx)("div",{className:"sty-cont-icon",children:Object(s.jsx)("img",{src:"/static/img/favicons/card/america.svg"})})]})]})]})}),Object(s.jsx)("div",{className:"col-6",children:Object(s.jsxs)("div",{className:"sty-cont-input-2",children:[Object(s.jsx)("div",{className:"sty-tag",children:Object(s.jsx)(d.a,{group:"input",tag:"expirationDate"})}),Object(s.jsx)("div",{className:"sty-input",children:Object(s.jsx)(o.CardExpiryElement,{className:"sty-input-card",options:r,onReady:function(){console.log("CardNumberElement [ready]")},onChange:function(e){console.log("CardNumberElement [change]",e)},onBlur:function(){console.log("CardNumberElement [blur]")},onFocus:function(){console.log("CardNumberElement [focus]")}})})]})}),Object(s.jsx)("div",{className:"col-6",children:Object(s.jsxs)("div",{className:"sty-cont-input-2",children:[Object(s.jsx)("div",{className:"sty-tag",children:Object(s.jsx)(d.a,{group:"input",tag:"cvc"})}),Object(s.jsx)("div",{className:"sty-input",children:Object(s.jsx)(o.CardCvcElement,{className:"sty-input-card",options:r,onReady:function(){console.log("CardNumberElement [ready]")},onChange:function(e){console.log("CardNumberElement [change]",e)},onBlur:function(){console.log("CardNumberElement [blur]")},onFocus:function(){console.log("CardNumberElement [focus]")}})})]})})]}),Object(s.jsx)("div",{className:"col-12 sty-card-message",children:v&&Object(s.jsx)("div",{className:"sty-mesage text-center",children:Object(x.a)("validation",v)})}),Object(s.jsx)("button",{className:"sty-button-dash-1 color_3 fix-24",type:"submit",disabled:!e,children:Object(s.jsx)(d.a,{group:"button",tag:"pay"})})]})}var E=function(){return Object(n.useMemo)((function(){return{style:{base:{fontSize:"20.25px",color:"#424770",letterSpacing:"0.025em",fontFamily:"Roboto, monospace","::placeholder":{color:"#aab7c4"}},invalid:{color:"#9e2146"}}}}))},_=Object(l.a)(u.a.strip_key);function w(){return Object(s.jsx)(o.Elements,{stripe:_,children:Object(s.jsxs)("section",{className:"class-heightNavBar class-autoheight-m sty-cont-back-img sty-login",children:[Object(s.jsx)("div",{className:"sty-back-img-1",children:Object(s.jsx)("img",{src:"/static/img/login/back_login_1.jpg"})}),Object(s.jsx)("div",{className:"sty-courtain-b-2"}),Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)("div",{className:"row justify-content-center sty-justify-content class-autoheight-m",children:Object(s.jsx)("div",{className:"col-11 col-md-9",children:Object(s.jsxs)("div",{className:"sty-card-login-2",children:[Object(s.jsx)("div",{className:"sty-card-title",children:Object(s.jsx)(d.a,{group:"dashboard",tag:"tit_pay_1"})}),Object(s.jsx)("div",{className:"sty-card-cont-content sty-dashboard sty-content-data-1",children:Object(s.jsxs)("div",{className:"row justify-content-center",children:[Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)(h,{})}),Object(s.jsxs)("div",{className:"col-6",children:[Object(s.jsx)("div",{className:"sty-logo-sripe",children:Object(s.jsx)("div",{className:"sty-icon",children:Object(s.jsx)("img",{src:"/static/img/favicons/card/logoStripe.svg"})})}),Object(s.jsx)("div",{className:"sty-cont-pay-stripe",children:Object(s.jsx)(N,{})})]})]})})]})})})})]})})}t.default=function(){var e=Object(a.useRouter)(),t=Object(i.a)().objectsSignUp,c=Object(n.useState)(!1),o=c[0],l=c[1],d=Object(n.useState)(!1),u=d[0],j=d[1];return Object(n.useEffect)((function(){o&&(null!==t&&void 0!==t&&t.selectedPlan?j(!0):e.push("/signup_step_3")),l(!0)}),[t,o]),Object(s.jsx)(r.a,{header:{title:"SignUp"},children:u&&Object(s.jsx)(w,{})})}},"bq+c":function(e,t,c){"use strict";var s=c("ek3Q");c.d(t,"a",(function(){return s.a}))}},[["E0NJ",0,2,6,4,1,3,5,7,22]]]);