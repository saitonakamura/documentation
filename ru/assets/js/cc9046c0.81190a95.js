"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[8820],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4703:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(7462),a=r(7294),i=r(4137),l=r(3699),o=r(7325);const c=e=>{let{ticket:t}=e;const r=`https://github.com/feature-sliced/documentation/issues/${t}`;return a.createElement("div",null,a.createElement("p",null,(0,o.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,o.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,o.I)({id:"shared.wip.var.feedback.base"}),a.createElement(l.Z,{to:r},(0,o.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,o.I)({id:"shared.wip.var.material.base"}),a.createElement(l.Z,{to:"https://t.me/feature_sliced"},(0,o.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,o.I)({id:"shared.wip.var.contribute.base"}),a.createElement(l.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,o.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},s={toc:[]};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"WIP",type:"caution"},(0,i.kt)(c,{ticket:r.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},8997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(4137)),i=r(4703);const l={sidebar_position:1,sidebar_class_name:"sidebar-item--wip"},o="\u0421\u0438\u0433\u043d\u0430\u043b\u044b \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",c={unversionedId:"concepts/signals",id:"concepts/signals",title:"\u0421\u0438\u0433\u043d\u0430\u043b\u044b \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",description:"\u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b - \u0437\u043d\u0430\u0447\u0438\u0442 \u043d\u0430 \u0442\u043e \u0435\u0441\u0442\u044c \u044f\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b, \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f, \u0435\u0441\u043b\u0438 \u0438\u0445 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/concepts/signals.mdx",sourceDirName:"concepts",slug:"/concepts/signals",permalink:"/ru/docs/concepts/signals",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/concepts/signals.mdx",tags:[],version:"current",lastUpdatedAt:1663830389,formattedLastUpdatedAt:"22 \u0441\u0435\u043d\u0442. 2022 \u0433.",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item--wip"},sidebar:"conceptsSidebar",previous:{title:"\ud83e\udde9 \u041a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438",permalink:"/ru/docs/concepts"},next:{title:"\u041e\u0431 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435",permalink:"/ru/docs/concepts/architecture"}},s={},u=[{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0441\u0438\u0433\u043d\u0430\u043b\u044b-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"},"\u0421\u0438\u0433\u043d\u0430\u043b\u044b \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"),(0,a.kt)(i.ZP,{ticket:"194",mdxType:"WIP"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b - \u0437\u043d\u0430\u0447\u0438\u0442 \u043d\u0430 \u0442\u043e \u0435\u0441\u0442\u044c \u044f\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b, \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f, \u0435\u0441\u043b\u0438 \u0438\u0445 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0434\u0430\u0435\u0442 \u0441\u0438\u0433\u043d\u0430\u043b\u044b, \u0430 \u0442\u043e \u043a\u0430\u043a \u0441 \u044d\u0442\u0438\u043c \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f - \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a\u0438\u0435 \u0440\u0438\u0441\u043a\u0438 \u0433\u043e\u0442\u043e\u0432\u044b \u0432\u0437\u044f\u0442\u044c \u043d\u0430 \u0441\u0435\u0431\u044f \u0438 \u0447\u0442\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435)")),(0,a.kt)("h2",{id:"see-also"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/2070"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0441\u0438\u0433\u043d\u0430\u043b\u044b \u043e\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u0438 \u0434\u0430\u0442\u0430-\u0444\u043b\u043e\u0443")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/2492"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3979"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0441\u043b\u0430\u0431\u044b\u0445 \u043c\u0435\u0441\u0442")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4228"},"(\u0422\u0440\u0435\u0434) \u041a\u0430\u043a \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0437\u0431\u0443\u0445\u043b\u0430"))))}d.isMDXComponent=!0}}]);