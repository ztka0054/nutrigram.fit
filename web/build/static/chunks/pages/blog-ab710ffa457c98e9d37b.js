_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"0Zjm":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("nKUr"),o=(n("q1tI"),n("Otrq"));function i(t){var e=t.title,n=void 0===e?"":e;return Object(r.jsx)("section",{className:"class-heightNavBar class-height-b-2",children:Object(r.jsxs)(o.Parallax,{strength:300,className:"sty-cont-parallax",children:[Object(r.jsx)("div",{className:"sty-courtain-b-3"}),Object(r.jsx)("div",{className:"container-fluid sty-home",children:Object(r.jsx)("div",{className:"row sty-justify-content class-height-b-2",children:Object(r.jsx)("div",{className:"sty-u-sub-2 sty-w sty-u-u-title",children:n})})}),Object(r.jsx)(o.Background,{className:"sty-custom-bg fix-2 class-autoheight-p",children:Object(r.jsx)("img",{src:"/static/img/utility/title.jpg",alt:"fill murray"})})]})})}},"27xF":function(t,e,n){"use strict";var r=n("r6wT"),o={url:"".concat(r.a.api_url,"/nutritionist/blog/"),typeRequest:"post-form"},i={url:"".concat(r.a.api_url,"/nutritionist/blog/#/images/"),typeRequest:"post-form"},a={url:"".concat(r.a.api_url,"/nutritionist/blog/#/images/#/"),typeRequest:"patch-form"},c={url:"".concat(r.a.api_url,"/nutritionist/blog/#/images/#/"),typeRequest:"delete"},s={url:"".concat(r.a.api_url,"/nutritionist/blog/"),typeRequest:"get"},u={url:"".concat(r.a.api_url,"/nutritionist/blog/#/"),typeRequest:"get"},l={url:"".concat(r.a.api_url,"/nutritionist/blog/#/"),typeRequest:"patch-form"},f={url:"".concat(r.a.api_url,"/nutritionist/blog/#/"),typeRequest:"patch"},g={url:"".concat(r.a.api_url,"/nutritionist/blog/#/"),typeRequest:"delete"},d={url:"".concat(r.a.api_url,"/nutritionist/blog/public/"),typeRequest:"get"},p={url:"".concat(r.a.api_url,"/nutritionist/blog/public/#/"),typeRequest:"get"};e.a={get_blogs:s,get_blog:u,post_blog:o,post_blog_img:i,patch_blog_img:a,delete_blog_img:c,patch_blog:l,patch_n_blog:f,delete_blog:g,get_posts_staff:d,get_post_staff:p}},BR8T:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("YbiN")}])},Otrq:function(t,e,n){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Background=e.Parallax=void 0;var f=l(n(0)),g=function(t){i(n,t);var e=c(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(f.default.Component);e.Parallax=g;var d=function(t){i(n,t);var e=c(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(f.default.Component);e.Background=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.canUseDOM=e.getNodeHeight=e.isScrolledIntoView=e.getWindowHeight=void 0,e.getWindowHeight=function(t){if(!t)return 0;var e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return e.innerHeight||r.clientHeight||o.clientHeight},e.isScrolledIntoView=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=t.getBoundingClientRect().top-n,i=t.getBoundingClientRect().bottom+n;return o<=e.getWindowHeight(r)&&i>=0},e.getNodeHeight=function(t,n){return t?n&&"clientHeight"in n?n.clientHeight:e.getWindowHeight(t):0},e.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Background=e.Parallax=void 0;var o=r(n(4));e.Parallax=o.default;var i=r(n(7));e.Background=i.default},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=s(n(0)),l=n(1),f=n(5),g=n(2),d=s(n(6)),p={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,t)).onWindowResize=function(){r.parentHeight=g.getNodeHeight(r.canUseDOM,r.parent),r.updatePosition()},r.onWindowLoad=function(){r.updatePosition()},r.onScroll=function(){if(r.canUseDOM){var t=Date.now();t-r.timestamp>=10&&g.isScrolledIntoView(r.node,100,r.canUseDOM)&&(window.requestAnimationFrame(r.updatePosition),r.timestamp=t)}},r.onContentMount=function(t){r.content=t},r.updatePosition=function(){if(r.content){var t=!1;r.contentHeight=r.content.getBoundingClientRect().height,r.contentWidth=r.node.getBoundingClientRect().width,r.img&&r.img.naturalWidth/r.img.naturalHeight<r.contentWidth/r.getImageHeight()&&(t=!0);var e=f.getRelativePosition(r.node,r.canUseDOM),n=!!r.img,o=r.bg&&r.state.splitChildren.bgChildren.length>0;n&&r.setImagePosition(e,t),o&&r.setBackgroundPosition(e),n||o||r.setState({percentage:e})}},r.state={bgImage:t.bgImage,bgImageSrcSet:t.bgImageSrcSet,bgImageSizes:t.bgImageSizes,imgStyle:p,bgStyle:Object.assign(Object.assign({},p),t.bgStyle),percentage:0,splitChildren:f.getSplitChildren(t)},r.canUseDOM=g.canUseDOM(),r.node=null,r.content=null,r.bgImageLoaded=!1,r.bgImageRef=void 0,r.parent=t.parent,r.parentHeight=g.getNodeHeight(r.canUseDOM,r.parent),r.timestamp=Date.now(),r.isDynamicBlur=f.getHasDynamicBlur(t.blur),r}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(n,[{key:"componentDidMount",value:function(){var t=this.props.parent,e=this.state,n=e.bgImage,r=e.bgImageSrcSet,o=e.bgImageSizes;this.parent=t||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.parent,r=e.bgImage,o=e.bgImageSrcSet,i=e.bgImageSizes,a=this.state.bgImage;t.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=g.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(t){var e=this.props,n=e.disabled,r=e.strength,o=Object.assign({},this.state.bgStyle);if(!n){var i="translate3d(-50%, ".concat((r<0?r:0)-r*t,"px, 0)");o.WebkitTransform=i,o.transform=i}this.setState({bgStyle:o,percentage:t})}},{key:"setImagePosition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,a=e?"auto":"".concat(this.getImageHeight(),"px"),c=e?"".concat(this.contentWidth,"px"):"auto",s=Object.assign(Object.assign({},this.state.imgStyle),{height:a,width:c});if(!r){var u=o<0,l=(u?o:0)-o*t,g="translate3d(-50%, ".concat(l,"px, 0)"),d="none";i&&(d="blur(".concat(f.getBlurValue(this.isDynamicBlur,i,t),"px)")),s.WebkitTransform=g,s.transform=g,s.WebkitFilter=d,s.filter=d}this.setState({imgStyle:s,percentage:t})}},{key:"getImageHeight",value:function(){var t=this.props.strength,e=(t<0?2.5:1)*Math.abs(t);return Math.floor(this.contentHeight+e)}},{key:"loadImage",value:function(t,e,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){r.setState({bgImage:t,bgImageSrcSet:e,bgImageSizes:n},(function(){return r.updatePosition()})),r.props.onLoad&&r.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=t,this.bgImageRef.srcset=e||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(t){this.canUseDOM&&(t&&t.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=e.style,o=e.bgClassName,i=e.contentClassName,a=e.bgImageAlt,c=e.renderLayer,s=e.bgImageStyle,l=e.lazy,f=this.state,g=f.bgImage,p=f.bgImageSrcSet,b=f.bgImageSizes,h=f.percentage,m=f.imgStyle,y=f.bgStyle,v=f.splitChildren;return u.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function(e){t.node=e}},g?u.default.createElement("img",{className:o,src:g,srcSet:p,sizes:b,ref:function(e){t.img=e},alt:a,style:Object.assign(Object.assign({},m),s),loading:l?"lazy":"eager"}):null,c?c(-(h-1)):null,v.bgChildren.length>0?u.default.createElement("div",{className:"react-parallax-background-children",ref:function(e){t.bg=e},style:y},v.bgChildren):null,u.default.createElement(d.default,{onMount:this.onContentMount,className:i},v.children))}}],[{key:"getDerivedStateFromProps",value:function(t){return{splitChildren:f.getSplitChildren(t)}}}]),n}(l.Parallax);b.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},e.default=b},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.setBlur=e.getBlurValue=e.getHasDynamicBlur=e.getSplitChildren=e.getRelativePosition=e.getPercentage=void 0;var o=n(0),i=n(2);e.getPercentage=function(t,e,n){return(n-t)/(e-t)||0},e.getRelativePosition=function(t,n){if(!n)return 0;var r=t.getBoundingClientRect(),o=r.top,a=r.height,c=i.getNodeHeight(n),s=a>c?a:c,u=Math.round(o>s?s:o);return e.getPercentage(0,s,u)},e.getSplitChildren=function(t){var e=[],n=o.Children.toArray(t.children);return n.forEach((function(t,r){var o=t;o.type&&o.type.isParallaxBackground&&(e=e.concat(n.splice(r,1)))})),{bgChildren:e,children:n}},e.getHasDynamicBlur=function(t){return"object"===r(t)&&void 0!==t.min&&void 0!==t.max},e.getBlurValue=function(t,e,n){return t?e.min+(1-n)*e.max:e},e.setBlur=function(t,e){t.style.webkitFilter="blur(".concat(e,"px)"),t.style.filter="blur(".concat(e,"px)")}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0));e.default=function(t){var e=t.children,n=t.onMount,r=t.className;return o.default.createElement("div",{ref:function(t){return n(t)},className:r||"react-parallax-content",style:{position:"relative"}},e)}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=u(n(0)),f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}(n);function n(){return o(this,n),e.apply(this,arguments)}return function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(n,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.children;return l.default.createElement("div",{className:"react-parallax-background ".concat(e)},n)}}]),n}(n(1).Background);f.defaultProps={className:""},f.isParallaxBackground=!0,e.default=f}])},t.exports=r(n("q1tI"))},YbiN:function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),o=n("q1tI"),i=n("bq+c"),a=n("0Zjm"),c=n("o0o1"),s=n.n(c),u=n("HaE+"),l=n("LvDl"),f=n("wd/R"),g=n.n(f),d=n("pEOT"),p=n("H91H"),b=n("sjcq"),h=n("veiu"),m=n("27xF");function y(){var t=Object(p.a)().locale,e=Object(o.useState)([]),n=e[0],i=e[1];Object(o.useEffect)((function(){a()}),[]);var a=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(m.a.get_posts_staff,null,null,{locale:t});case 2:null!=(n=e.sent)&&c(n.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(e){var n=Object(l.map)(e,(function(e,n){var o=e.id,i=e.created.replace("Z",""),a=g()(i).format("DD"),c=g()(i).locale(t).format("MMMM").slice(0,3);c=Object(b.a)(c);var s=null==e.image?defaultPic:e.image,u=e.title,l="es"==t?e.content.es:e.content["en-us"];return Object(r.jsx)("div",{className:"col-12 col-md-4",children:Object(r.jsx)(d.a,{route:"/blog_detail",params:{id:o},children:Object(r.jsxs)("div",{className:"sty-card-blog",children:[Object(r.jsxs)("div",{className:"sty-calendar",children:[Object(r.jsx)("div",{className:"sty-day text-center",children:a}),Object(r.jsx)("div",{className:"sty-month text-center",children:c})]}),Object(r.jsx)("div",{className:"sty-cont-pic",children:Object(r.jsx)("img",{src:s})}),Object(r.jsx)("div",{className:"sty-blog-title",children:u}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"sty-blog-content line-clamp",children:l})]})})},"blog_".concat(n,"}"))}));i(n)};return Object(r.jsx)("section",{className:"sty-blog",children:Object(r.jsx)("div",{className:"row justify-content-center sty-cont-blog-1",children:Object(r.jsx)("div",{className:"col-11",children:Object(r.jsx)("div",{className:"row",children:n})})})})}var v=n("3GKT");function j(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{title:Object(v.a)("blog","title")}),Object(r.jsx)(y,{})]})}e.default=function(){return Object(r.jsx)(i.a,{header:{title:"Blog"},children:Object(r.jsx)(j,{})})}},"bq+c":function(t,e,n){"use strict";var r=n("ek3Q");n.d(e,"a",(function(){return r.a}))},sjcq:function(t,e,n){"use strict";e.a=function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)}}},[["BR8T",0,2,6,4,9,1,3,5,7,10]]]);