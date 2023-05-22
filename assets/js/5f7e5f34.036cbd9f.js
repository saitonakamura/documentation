"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1186],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7658:(e,t,n)=>{n.d(t,{ZP:()=>u});var r=n(6600),i=n(9496),s=n(9613),o=n(2484),a=n(4643);const l=e=>{let{ticket:t}=e;const n=`https://github.com/feature-sliced/documentation/issues/${t}`;return i.createElement("div",null,i.createElement("p",null,(0,a.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,a.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,a.I)({id:"shared.wip.var.feedback.base"}),i.createElement(o.Z,{to:n},(0,a.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,a.I)({id:"shared.wip.var.material.base"}),i.createElement(o.Z,{to:"https://t.me/feature_sliced"},(0,a.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,a.I)({id:"shared.wip.var.contribute.base"}),i.createElement(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,a.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},c={toc:[]};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"WIP",type:"caution"},(0,s.kt)(l,{ticket:n.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},9317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(6600),i=(n(9496),n(9613)),s=n(7658);const o={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},a="Desegemented",l={unversionedId:"guides/issues/desegmented",id:"guides/issues/desegmented",title:"Desegemented",description:"Situation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/desegmented",permalink:"/docs/guides/issues/desegmented",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",tags:[],version:"current",lastUpdatedAt:1684740855,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Usage with NextJS",permalink:"/docs/guides/tech/with-nextjs"},next:{title:"Routing",permalink:"/docs/guides/issues/routes"}},c={},u=[{value:"Situation",id:"situation",level:2},{value:"Problem",id:"problem",level:2},{value:"If you ignore it",id:"if-you-ignore-it",level:2},{value:"Solution",id:"solution",level:2},{value:"See also",id:"see-also",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"desegemented"},"Desegemented"),(0,i.kt)(s.ZP,{ticket:"148",mdxType:"WIP"}),(0,i.kt)("h2",{id:"situation"},"Situation"),(0,i.kt)("p",null,"Very often, there is a situation on projects when modules related to a specific domain from the subject area are unnecessarily desegmented and scattered around the project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 components/\n|    \u251c\u2500\u2500 DeliveryCard\n|    \u251c\u2500\u2500 DeliveryChoice\n|    \u251c\u2500\u2500 RegionSelect\n|    \u251c\u2500\u2500 UserAvatar\n\u251c\u2500\u2500 actions/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 epics/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 constants/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 helpers/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 entities/\n|    \u251c\u2500\u2500 delivery/\n|    |      \u251c\u2500\u2500 getters.js\n|    |      \u251c\u2500\u2500 selectors.js\n|    \u251c\u2500\u2500 region/\n|    \u251c\u2500\u2500 user/\n")),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"The problem manifests itself at least in violation of the principle of * ",(0,i.kt)("em",{parentName:"p"}," High Cohesion** and excessive stretching ")," * of the axis of changes**"),(0,i.kt)("h2",{id:"if-you-ignore-it"},"If you ignore it"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If necessary, touch on the logic, for example, delivery - we will have to keep in mind that it lies in several places and touch on several places in the code-which unnecessarily stretches our * * Axis of changes**"),(0,i.kt)("li",{parentName:"ul"},"If we need to study the logic of the user, we will have to go through the whole project to study in detail * * actions, epics, constants, entities, components** - instead of it lying in one place"),(0,i.kt)("li",{parentName:"ul"},"Implicit connections and the uncontrollability of a growing subject area"),(0,i.kt)("li",{parentName:"ul"},'With this approach, the eye is very often blurred and you may not notice how we "create constants for the sake of constants", creating a dump in the corresponding project directory')),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Place all modules related to a specific domain/user case - directly next to each other"),(0,i.kt)("p",null,"So that when studying a particular module, all its components lie side by side, and are not scattered around the project"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It also increases the discoverability and clarity of the code base and the relationships between modules")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- \u251c\u2500\u2500 components/\n- |    \u251c\u2500\u2500 DeliveryCard\n- |    \u251c\u2500\u2500 DeliveryChoice\n- |    \u251c\u2500\u2500 RegionSelect\n- |    \u251c\u2500\u2500 UserAvatar\n- \u251c\u2500\u2500 actions/\n- |    \u251c\u2500\u2500 delivery.js\n- |    \u251c\u2500\u2500 region.js\n- |    \u251c\u2500\u2500 user.js\n- \u251c\u2500\u2500 epics/{...}\n- \u251c\u2500\u2500 constants/{...}\n- \u251c\u2500\u2500 helpers/{...}\n  \u251c\u2500\u2500 entities/\n  |    \u251c\u2500\u2500 delivery/\n+ |    |      \u251c\u2500\u2500 ui/ # ~ components/\n+ |    |      |   \u251c\u2500\u2500 card.js\n+ |    |      |   \u251c\u2500\u2500 choice.js\n+ |    |      \u251c\u2500\u2500 model/\n+ |    |      |   \u251c\u2500\u2500 actions.js\n+ |    |      |   \u251c\u2500\u2500 constants.js\n+ |    |      |   \u251c\u2500\u2500 epics.js\n+ |    |      |   \u251c\u2500\u2500 getters.js\n+ |    |      |   \u251c\u2500\u2500 selectors.js\n+ |    |      \u251c\u2500\u2500 lib/ # ~ helpers\n  |    \u251c\u2500\u2500 region/\n  |    \u251c\u2500\u2500 user/\n")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/"},"(Article) About Low Coupling and High Cohesion clearly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9"},"(Article) Low Coupling and High Cohesion. The Law of Demeter"))))}p.isMDXComponent=!0}}]);