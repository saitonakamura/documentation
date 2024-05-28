"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3366],{1800:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>a});var s=i(6070),t=i(7468),o=(i(758),i(2992)),r=i(3920);const c=e=>{let{ticket:n}=e;const i=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:(0,r.T)({id:"shared.wip.title"})}),(0,s.jsx)("p",{children:(0,r.T)({id:"shared.wip.subtitle"})}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,r.T)({id:"shared.wip.var.feedback.base"}),(0,s.jsx)(o.A,{to:i,children:(0,r.T)({id:"shared.wip.var.feedback.link"})})]}),(0,s.jsxs)("li",{children:[(0,r.T)({id:"shared.wip.var.material.base"}),(0,s.jsx)(o.A,{to:"https://t.me/feature_sliced",children:(0,r.T)({id:"shared.wip.var.material.link"})})]}),(0,s.jsxs)("li",{children:[(0,r.T)({id:"shared.wip.var.contribute.base"}),(0,s.jsx)(o.A,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,r.T)({id:"shared.wip.var.contribute.link"})})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:(0,s.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})},a=[];function l(e){const n={admonition:"admonition",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,s.jsx)(c,{ticket:e.ticket})})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1443:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(6070),t=i(7468),o=i(1800);const r={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},c="Desegemented",a={id:"guides/issues/desegmented",title:"Desegemented",description:"Situation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/desegmented",permalink:"/uz/docs/guides/issues/desegmented",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/desegmented.mdx",tags:[],version:"current",lastUpdatedAt:1716915004e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Usage with React Query",permalink:"/uz/docs/guides/tech/with-react-query"},next:{title:"Routing",permalink:"/uz/docs/guides/issues/routes"}},l={},d=[...o.RM,{value:"Situation",id:"situation",level:2},{value:"Problem",id:"problem",level:2},{value:"If you ignore it",id:"if-you-ignore-it",level:2},{value:"Solution",id:"solution",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"desegemented",children:"Desegemented"}),"\n",(0,s.jsx)(o.Ay,{ticket:"148"}),"\n",(0,s.jsx)(n.h2,{id:"situation",children:"Situation"}),"\n",(0,s.jsx)(n.p,{children:"Very often, there is a situation on projects when modules related to a specific domain from the subject area are unnecessarily desegmented and scattered around the project"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"\u251c\u2500\u2500 components/\n|    \u251c\u2500\u2500 DeliveryCard\n|    \u251c\u2500\u2500 DeliveryChoice\n|    \u251c\u2500\u2500 RegionSelect\n|    \u251c\u2500\u2500 UserAvatar\n\u251c\u2500\u2500 actions/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 epics/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 constants/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 helpers/\n|    \u251c\u2500\u2500 delivery.js\n|    \u251c\u2500\u2500 region.js\n|    \u251c\u2500\u2500 user.js\n\u251c\u2500\u2500 entities/\n|    \u251c\u2500\u2500 delivery/\n|    |      \u251c\u2500\u2500 getters.js\n|    |      \u251c\u2500\u2500 selectors.js\n|    \u251c\u2500\u2500 region/\n|    \u251c\u2500\u2500 user/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"problem",children:"Problem"}),"\n",(0,s.jsx)(n.p,{children:"The problem manifests itself at least in violation of the principle of * * High Cohesion** and excessive stretching * * of the axis of changes**"}),"\n",(0,s.jsx)(n.h2,{id:"if-you-ignore-it",children:"If you ignore it"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If necessary, touch on the logic, for example, delivery - we will have to keep in mind that it lies in several places and touch on several places in the code-which unnecessarily stretches our * * Axis of changes**"}),"\n",(0,s.jsx)(n.li,{children:"If we need to study the logic of the user, we will have to go through the whole project to study in detail * * actions, epics, constants, entities, components** - instead of it lying in one place"}),"\n",(0,s.jsx)(n.li,{children:"Implicit connections and the uncontrollability of a growing subject area"}),"\n",(0,s.jsx)(n.li,{children:'With this approach, the eye is very often blurred and you may not notice how we "create constants for the sake of constants", creating a dump in the corresponding project directory'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"Place all modules related to a specific domain/user case - directly next to each other"}),"\n",(0,s.jsx)(n.p,{children:"So that when studying a particular module, all its components lie side by side, and are not scattered around the project"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"It also increases the discoverability and clarity of the code base and the relationships between modules"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"- \u251c\u2500\u2500 components/\n- |    \u251c\u2500\u2500 DeliveryCard\n- |    \u251c\u2500\u2500 DeliveryChoice\n- |    \u251c\u2500\u2500 RegionSelect\n- |    \u251c\u2500\u2500 UserAvatar\n- \u251c\u2500\u2500 actions/\n- |    \u251c\u2500\u2500 delivery.js\n- |    \u251c\u2500\u2500 region.js\n- |    \u251c\u2500\u2500 user.js\n- \u251c\u2500\u2500 epics/{...}\n- \u251c\u2500\u2500 constants/{...}\n- \u251c\u2500\u2500 helpers/{...}\n  \u251c\u2500\u2500 entities/\n  |    \u251c\u2500\u2500 delivery/\n+ |    |      \u251c\u2500\u2500 ui/ # ~ components/\n+ |    |      |   \u251c\u2500\u2500 card.js\n+ |    |      |   \u251c\u2500\u2500 choice.js\n+ |    |      \u251c\u2500\u2500 model/\n+ |    |      |   \u251c\u2500\u2500 actions.js\n+ |    |      |   \u251c\u2500\u2500 constants.js\n+ |    |      |   \u251c\u2500\u2500 epics.js\n+ |    |      |   \u251c\u2500\u2500 getters.js\n+ |    |      |   \u251c\u2500\u2500 selectors.js\n+ |    |      \u251c\u2500\u2500 lib/ # ~ helpers\n  |    \u251c\u2500\u2500 region/\n  |    \u251c\u2500\u2500 user/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"(Article) About Low Coupling and High Cohesion clearly"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9",children:"(Article) Low Coupling and High Cohesion. The Law of Demeter"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7468:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(758);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);