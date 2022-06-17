"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[918],{5332:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(7294),l=a(6010),i=a(7213),s=a(8746),r=a(1614);const o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};var c=a(6832),d=a(9099),m=a(8303);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,i=e.versionMetadata,s=(0,c.Z)().siteConfig.title,r=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(r).savePreferredVersionName,u=(0,d.Jo)(r),h=u.latestDocSuggestion,p=u.latestVersionSuggestion,E=null!=h?h:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:p.label,to:E.path,onClick:function(){return o(p.name)}})))}function p(e){var t=e.className,a=(0,m.E6)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}function E(e){var t=e.className,a=(0,m.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var b=a(7027);function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(7462),L=a(3366);const Z="iconEdit_mS5F";var U=["className"];const C=function(e){var t=e.className,a=(0,L.Z)(e,U);return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(C,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const y="tag_WK-t",w="tagRegular_LXbV",A="tagWithCount_S5Zl";const M=function(e){var t,a=e.permalink,i=e.name,r=e.count;return n.createElement(s.Z,{href:a,className:(0,l.Z)(y,(t={},t[w]=!r,t[A]=r,t))},i,r&&n.createElement("span",null,r))},H="tags_NBRY",x="tag_F03v";function S(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(H,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:x},n.createElement(M,{name:t,permalink:a}))}))))}const B="lastUpdated_mt2f";function V(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(S,e)))}function F(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",B)},(a||i)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:i})))}function D(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,r=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||r);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(V,{tags:o}),d&&n.createElement(F,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:r,formattedLastUpdatedAt:s})):null}var O=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function I(e){var t=e.toc,a=e.className,l=e.linkClassName,i=e.isChild;return t.length?n.createElement("ul",{className:i?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(I,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function R(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,i=e.linkClassName,s=void 0===i?"table-of-contents__link":i,r=e.linkActiveClassName,o=void 0===r?void 0:r,c=e.minHeadingLevel,d=e.maxHeadingLevel,u=(0,L.Z)(e,O),v=(0,m.LU)(),g=null!=c?c:v.tableOfContents.minHeadingLevel,h=null!=d?d:v.tableOfContents.maxHeadingLevel,p=(0,m.DA)({toc:t,minHeadingLevel:g,maxHeadingLevel:h}),E=(0,n.useMemo)((function(){if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:h}}),[s,o,g,h]);return(0,m.Si)(E),n.createElement(I,(0,_.Z)({toc:p,className:l,linkClassName:s},u))}const z="tableOfContents_vrFS";var P=["className"];const W=function(e){var t=e.className,a=(0,L.Z)(e,P);return n.createElement("div",{className:(0,l.Z)(z,"thin-scrollbar",t)},n.createElement(R,(0,_.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},q="tocCollapsible_aw-L",J="tocCollapsibleButton_zr6a",Y="tocCollapsibleContent_0dom",j="tocCollapsibleExpanded_FSiv";function K(e){var t,a=e.toc,i=e.className,s=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(q,(t={},t[j]=!d,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",J),onClick:u},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:Y,collapsed:d},n.createElement(R,{toc:a,minHeadingLevel:s,maxHeadingLevel:o})))}var X=a(8676);const G="docItemContainer_oiyr",Q="docItemCol_zHA2",$="tocMobile_Tx6Y";function ee(e){var t,a=e.content,s=a.metadata,r=a.frontMatter,c=r.image,d=r.keywords,u=r.hide_title,v=r.hide_table_of_contents,g=r.toc_min_heading_level,h=r.toc_max_heading_level,f=s.description,N=s.title,k=!u&&void 0===a.contentTitle,_=(0,i.Z)(),L=!v&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:N,description:f,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[Q]=!v,t))},n.createElement(p,null),n.createElement("div",{className:G},n.createElement("article",null,n.createElement(E,null),L&&n.createElement(K,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:(0,l.Z)(m.kM.docs.docTocMobile,$)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(X.N,null,N),n.createElement(a,null)),n.createElement(D,e)),n.createElement(o,{previous:s.previous,next:s.next}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(W,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:m.kM.docs.docTocDesktop}))))}},8676:(e,t,a)=>{a.d(t,{N:()=>u,Z:()=>v});var n=a(3366),l=a(7462),i=a(7294),s=a(6010),r=a(1614),o=a(8303);const c="anchorWithStickyNavbar_y2LR",d="anchorWithHideOnScrollNavbar_3ly5";var m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))};const v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,s.Z)("anchor",(a={},a[d]=g,a[c]=!g,a)),id:u}),v.children,i.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}}}]);