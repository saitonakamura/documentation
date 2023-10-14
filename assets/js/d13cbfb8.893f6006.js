"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[630],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,c(c({ref:t},d),{},{components:a})):n.createElement(f,c({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},696:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7622),r=(a(9496),a(9613)),o=a(9815);const c={toc:[]},i="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,(0,n.Z)({},a,{mdxType:"NavCard"})))}s.isMDXComponent=!0},8662:(e,t,a)=>{a.d(t,{ga:()=>n});var n={};a.r(n),a.d(n,{CATEGORIES:()=>o,sendEvent:()=>r});const r=e=>{let{category:t,action:a,label:n,value:r}=e;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:a,eventLabel:n,eventValue:r})},o={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},9815:(e,t,a)=>{a.d(t,{J:()=>s,Z:()=>d});var n=a(9496),r=a(1626),o=a(1803),c=a(8662);const i={root:"root_GfON",rootDisabled:"rootDisabled_SFUB",details:"details_xxkR",detailsTags:"detailsTags_uTQx",icon:"icon_ciqP",title:"title_pSH5",description:"description__Fep",miniTheme:"miniTheme_ePfp",primaryTheme:"primaryTheme_CilO",defaultTheme:"defaultTheme_j3I8"},s=e=>{const{title:t,description:a,to:s,Icon:d,tags:u,className:p,disabled:m,theme:f="default"}=e,h=(0,n.useCallback)((()=>{c.ga.sendEvent({category:c.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return n.createElement(o.Z,{className:(0,r.Z)(i.root,p,m&&i.rootDisabled,i[`${f}Theme`]),to:s,onClick:h},n.createElement(l,{Icon:d}),n.createElement("div",{className:i.details},n.createElement("div",{className:i.detailsMain},n.createElement("span",{className:i.title},t),n.createElement("p",{className:i.description},a)),u&&n.createElement("div",{className:i.detailsTags},u.join(" \u2022 "))))},l=e=>{let{Icon:t}=e;return t?"string"==typeof t?n.createElement("span",{className:i.icon},t):n.createElement(t,{className:i.icon}):null},d=s},1459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>y,default:()=>T,frontMatter:()=>g,metadata:()=>b,toc:()=>O});var n=a(7622),r=a(9496),o=a(9613),c=a(696);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M759 335c0-137-111-248-248-248S263 198 263 335c0 82.8 40.6 156.2 103 201.2-.4.2-.7.3-.9.4-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00136 874.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C356 614.2 431 583 511 583c137 0 248-111 248-248zM511 507c-95 0-172-77-172-172s77-172 172-172 172 77 172 172-77 172-172 172zm105 221h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H703.5l47.2-60.1a8.1 8.1 0 001.7-4.9c0-4.4-3.6-8-8-8h-72.6c-4.9 0-9.5 2.3-12.6 6.1l-68.5 87.1c-4.4 5.6-6.8 12.6-6.8 19.8.1 17.7 14.4 32 32.1 32zm240 64H592c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h176.5l-47.2 60.1a8.1 8.1 0 00-1.7 4.9c0 4.4 3.6 8 8 8h72.6c4.9 0 9.5-2.3 12.6-6.1l68.5-87.1c4.4-5.6 6.8-12.6 6.8-19.8-.1-17.7-14.4-32-32.1-32z"}}]},name:"user-switch",theme:"outlined"};var s=a(1865),l=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:i}))};l.displayName="UserSwitchOutlined";const d=r.forwardRef(l);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"}}]},name:"layout",theme:"outlined"};var p=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:u}))};p.displayName="LayoutOutlined";const m=r.forwardRef(p);const f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"}}]},name:"font-size",theme:"outlined"};var h=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:f}))};h.displayName="FontSizeOutlined";const v=r.forwardRef(h),g={hide_table_of_contents:!0},y="Examples",b={unversionedId:"guides/examples/index",id:"guides/examples/index",title:"Examples",description:"Small practical examples of the methodology application",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/index.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/",permalink:"/docs/guides/examples/",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/index.mdx",tags:[],version:"current",lastUpdatedAt:1697315785,formattedLastUpdatedAt:"Oct 14, 2023",frontMatter:{hide_table_of_contents:!0},sidebar:"guidesSidebar",previous:{title:"\ud83c\udfaf Guides",permalink:"/docs/guides/"},next:{title:"Auth",permalink:"/docs/guides/examples/auth"}},x={},O=[{value:"Main",id:"main",level:2}],w={toc:O},E="wrapper";function T(e){let{components:t,...a}=e;return(0,o.kt)(E,(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("p",{class:"summary"},"Small practical examples of the methodology application"),(0,o.kt)("h2",{id:"main"},"Main"),(0,o.kt)(c.ZP,{title:"Auth",description:"Decomposition of auth logic",to:"/docs/guides/examples/auth",Icon:d,tags:["Viewer","AuthForm","ProfilePage","AuthProvider","AuthToken"],mdxType:"NavCard"}),(0,o.kt)(c.ZP,{title:"PageLayout",description:"Main cases with page layout widgets",to:"/docs/guides/examples/page-layout",Icon:m,tags:["Header","Sidebar"],mdxType:"NavCard"}),(0,o.kt)(c.ZP,{title:"Types",description:"Where should we locate types? Which kind of types exists in the context of FSD?",to:"/docs/guides/examples/types",Icon:v,mdxType:"NavCard"}))}T.isMDXComponent=!0}}]);