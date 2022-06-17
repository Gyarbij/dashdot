"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[514,4],{4369:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(7462),a=n(7294),o=n(6010);const l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c={Prism:n(7410).default,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=s({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?s({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=s({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?s({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,p=t[l],h=n[l][o];if("string"==typeof h?(p=l>0?p:["plain"],s=h):(p=m(p,h.type),h.alias&&(p=m(p,h.alias)),s=h.content),"string"==typeof s){var b=s.split(u),f=b.length;c.push({types:p,content:b[0]});for(var y=1;y<f;y++)d(c),i.push(c=[]),c.push({types:p,content:b[y]})}else l++,t.push(p),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return d(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var f=n(1614),y=n(8303);const v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var g=n(6266);const k=function(){var e=(0,y.LU)().prism,t=(0,g.Z)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},E="codeBlockContainer_J+bg",Z="codeBlockContent_csEI",N="codeBlockTitle_oQzk",T="codeBlock_rtdJ",C="copyButton_M3SB",_="codeBlockLines_1zSZ";function S(e){var t,n=e.children,l=e.className,i=e.metastring,s=e.title,u=(0,y.LU)().prism,d=(0,a.useState)(!1),m=d[0],p=d[1],h=(0,a.useState)(!1),v=h[0],g=h[1];(0,a.useEffect)((function(){g(!0)}),[]);var S=(0,y.bc)(i)||s,O=k(),P=Array.isArray(n)?n.join(""):n,I=null!=(t=(0,y.Vo)(l))?t:u.defaultLanguage,w=(0,y.nZ)(P,i,I),L=w.highlightLines,x=w.code,j=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(x),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.createElement(b,(0,r.Z)({},c,{key:String(v),theme:O,code:x,language:I}),(function(e){var t=e.className,n=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return a.createElement("div",{className:(0,o.Z)(E,l)},S&&a.createElement("div",{style:n,className:N},S),a.createElement("div",{className:(0,o.Z)(Z,I)},a.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,T,"thin-scrollbar"),style:n},a.createElement("code",{className:_},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return L.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,f.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(C,"clean-btn"),onClick:j},m?a.createElement(f.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(f.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},5491:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));m.displayName="MDXCreateElement";var p=n(3610),h=n(6454),b=n(6010),f=n(8303),y=n(7213),v=n(974),g=n(7462);const k=function(e){return r.createElement("svg",(0,g.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var E=n(1614),Z=n(3366),N=n(8746),T=n(1699),C=n(3617);const _="menuLinkText_OKON",S="hasHref_TwRn";var O=n(5730),P=["items"],I=["item"],w=["item","onItemClick","activePath","level"],L=["item","onItemClick","activePath","level"],x=(0,r.memo)((function(e){var t=e.items,n=(0,Z.Z)(e,P);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(j,(0,g.Z)({key:t,item:e},n))})))}));function j(e){var t=e.item,n=(0,Z.Z)(e,I);return"category"===t.type?0===t.items.length?null:r.createElement(A,(0,g.Z)({item:t},n)):r.createElement(D,(0,g.Z)({item:t},n))}function A(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=e.level,c=(0,Z.Z)(e,w),i=n.items,s=n.label,u=n.collapsible,d=n.className,m=n.href,p=function(e){var t=(0,O.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,f.Wl)(e):void 0}),[e,t])}(n),h=(0,f._F)(n,o),y=(0,f.uR)({initialState:function(){return!!u&&(!h&&n.collapsed)}}),v=y.collapsed,k=y.setCollapsed,T=y.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,f.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:h,collapsed:v,setCollapsed:k}),r.createElement("li",{className:(0,b.Z)(f.kM.docs.docSidebarItemCategory,f.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":v},d)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(N.Z,(0,g.Z)({className:(0,b.Z)("menu__link",(t={"menu__link--sublist":u&&!m,"menu__link--active":h},t[_]=!u,t[S]=!!p,t)),onClick:u?function(e){null==a||a(n),m?k(!1):(e.preventDefault(),T())}:function(){null==a||a(n)},href:u?null!=p?p:"#":p},c),s),m&&u&&r.createElement("button",{"aria-label":(0,E.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:s}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),T()}})),r.createElement(f.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},r.createElement(x,{items:i,tabIndex:v?-1:0,onItemClick:a,activePath:o,level:l+1})))}function D(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(0,Z.Z)(e,L),c=t.href,i=t.label,s=t.className,u=(0,f._F)(t,a);return r.createElement("li",{className:(0,b.Z)(f.kM.docs.docSidebarItemLink,f.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",s),key:i},r.createElement(N.Z,(0,g.Z)({className:(0,b.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:c},(0,T.Z)(c)&&{onClick:n?function(){return n(t)}:void 0},l),(0,T.Z)(c)?i:r.createElement("span",null,i,r.createElement(C.Z,null))))}const M="sidebar_a3j0",B="sidebarWithHideableNavbar_VlPv",F="sidebarHidden_OqfG",R="sidebarLogo_hmkv",z="menu_cyFh",H="menuWithAnnouncementBar_+O1J",W="collapseSidebarButton_eoK2",V="collapseSidebarButtonIcon_e+kA";function U(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,b.Z)("button button--secondary button--outline",W),onClick:t},r.createElement(k,{className:V}))}function q(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,c=e.isHidden,i=function(){var e=(0,f.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,f.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),s=(0,f.LU)(),u=s.navbar.hideOnScroll,d=s.hideableSidebar;return r.createElement("div",{className:(0,b.Z)(M,(t={},t[B]=u,t[F]=c,t))},u&&r.createElement(v.Z,{tabIndex:-1,className:R}),r.createElement("nav",{className:(0,b.Z)("menu thin-scrollbar",z,(n={},n[H]=i,n))},r.createElement("ul",{className:(0,b.Z)(f.kM.docs.docSidebarMenu,"menu__list")},r.createElement(x,{items:o,activePath:a,level:1}))),d&&r.createElement(U,{onClick:l}))}var Y=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,b.Z)(f.kM.docs.docSidebarMenu,"menu__list")},r.createElement(x,{items:n,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function J(e){return r.createElement(f.Cv,{component:Y,props:e})}var K=r.memo(q),Q=r.memo(J);function X(e){var t=(0,y.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(K,e),a&&r.createElement(Q,e))}var G=n(1300),$=n(4369),ee=n(8676);const te="details_h+cY";function ne(e){var t=Object.assign({},e);return r.createElement(f.PO,(0,g.Z)({},t,{className:(0,b.Z)("alert alert--info",te,t.className)}))}var re=["mdxType","originalType"];const ae={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,Z.Z)(a,re));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(G.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement($.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(N.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement($.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ne,(0,g.Z)({},e,{summary:n}),a)},h1:(0,ee.Z)("h1"),h2:(0,ee.Z)("h2"),h3:(0,ee.Z)("h3"),h4:(0,ee.Z)("h4"),h5:(0,ee.Z)("h5"),h6:(0,ee.Z)("h6")};var oe=n(2004);const le="backToTopButton_i9tI",ce="backToTopButtonShow_wCmF";function ie(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}const se=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=ie(),c=l.smoothScrollTop,i=l.cancelScrollToTop;return(0,f.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||i(),n<300)a(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&a(!0)}else a(!1)}})),(0,f.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,E.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,b.Z)("clean-btn",f.kM.common.backToTopButton,le,(e={},e[ce]=n,e)),type:"button",onClick:function(){return c()}})};var ue=n(6775);const de={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};function me(e){var t,n,a,o=e.currentDocRoute,l=e.versionMetadata,c=e.children,i=e.sidebarName,s=(0,f.Vq)(),d=l.pluginId,m=l.version,p=(0,r.useState)(!1),y=p[0],v=p[1],g=(0,r.useState)(!1),Z=g[0],N=g[1],T=(0,r.useCallback)((function(){Z&&N(!1),v((function(e){return!e}))}),[Z]);return r.createElement(h.Z,{wrapperClassName:f.kM.wrapper.docsPages,pageClassName:f.kM.page.docsDocPage,searchMetadata:{version:m,tag:(0,f.os)(d,m)}},r.createElement("div",{className:de.docPage},r.createElement(se,null),s&&r.createElement("aside",{className:(0,b.Z)(de.docSidebarContainer,(t={},t[de.docSidebarContainerHidden]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&y&&N(!0)}},r.createElement(X,{key:i,sidebar:s,path:o.path,onCollapse:T,isHidden:Z}),Z&&r.createElement("div",{className:de.collapsedDocSidebar,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},r.createElement(k,{className:de.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,b.Z)(de.docMainContainer,(n={},n[de.docMainContainerEnhanced]=y||!s,n))},r.createElement("div",{className:(0,b.Z)("container padding-top--md padding-bottom--lg",de.docItemWrapper,(a={},a[de.docItemWrapperEnhanced]=y,a))},r.createElement(u,{components:ae},c)))))}const pe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,ue.LX)(a.pathname,e)}));if(!o)return r.createElement(oe.default,null);var l=o.sidebar,c=l?n.docsSidebars[l]:null;return r.createElement(r.Fragment,null,r.createElement(G.Z,null,r.createElement("html",{className:n.className})),r.createElement(f.qu,{version:n},r.createElement(f.bT,{sidebar:c},r.createElement(me,{currentDocRoute:o,versionMetadata:n,sidebarName:l},(0,p.Z)(t,{versionMetadata:n})))))}},8676:(e,t,n)=>{n.d(t,{N:()=>m,Z:()=>p});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),c=n(1614),i=n(8303);const s="anchorWithStickyNavbar_y2LR",u="anchorWithHideOnScrollNavbar_3ly5";var d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))};const p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,r.Z)(e,d),h=(0,i.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=h,n[s]=!h,n)),id:m}),p.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},2004:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(7294),a=n(6454),o=n(1614);const l=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);