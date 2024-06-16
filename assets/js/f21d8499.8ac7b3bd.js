"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2250],{1800:(e,n,s)=>{s.d(n,{Ay:()=>d,RM:()=>o});var t=s(6070),r=s(7468),i=(s(758),s(2992)),l=s(3920);const a=e=>{let{ticket:n}=e;const s=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,l.T)({id:"shared.wip.title"})}),(0,t.jsx)("p",{children:(0,l.T)({id:"shared.wip.subtitle"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,l.T)({id:"shared.wip.var.feedback.base"}),(0,t.jsx)(i.A,{to:s,children:(0,l.T)({id:"shared.wip.var.feedback.link"})})]}),(0,t.jsxs)("li",{children:[(0,l.T)({id:"shared.wip.var.material.base"}),(0,t.jsx)(i.A,{to:"https://t.me/feature_sliced",children:(0,l.T)({id:"shared.wip.var.material.link"})})]}),(0,t.jsxs)("li",{children:[(0,l.T)({id:"shared.wip.var.contribute.base"}),(0,t.jsx)(i.A,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,l.T)({id:"shared.wip.var.contribute.link"})})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})},o=[];function c(e){const n={admonition:"admonition",...(0,r.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,t.jsx)(a,{ticket:e.ticket})})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6277:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>E,contentTitle:()=>C,default:()=>V,frontMatter:()=>T,metadata:()=>N,toc:()=>P});var t=s(6070),r=s(7468),i=s(1800),l=s(758),a=s(8923),o=s(9960),c=s(5557),d=s(7211),u=s(2469),h=s(2074),p=s(6514);function x(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return x(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,h.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:s}=e;const t=(0,c.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,u.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=m(e),[i,a]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,c]=g({queryString:s,groupId:t}),[u,h]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,p.Dv)(s);return[t,(0,l.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),x=(()=>{const e=o??u;return j({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{x&&a(x)}),[x]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),c(e),h(e)}),[c,h,r]),tabValues:r}}var b=s(377);const v={tabList:"tabList_rnjY",tabItem:"tabItem_Uaqs"};function y(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),t=l[s].value;t!==r&&(d(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=f(e);return(0,t.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,t.jsx)(y,{...n,...e}),(0,t.jsx)(w,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,t.jsx)(S,{...e,children:x(e.children)},String(n))}const A={tabItem:"tabItem_Rsk1"};function I(e){let{children:n,hidden:s,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(A.tabItem,r),hidden:s,children:n})}const T={sidebar_position:1},C="Auth",N={id:"guides/examples/auth",title:"Auth",description:"Every application has business logic related with the current authorized user.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/auth.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/auth",permalink:"/docs/guides/examples/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/auth.mdx",tags:[],version:"current",lastUpdatedAt:171853934e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Examples",permalink:"/docs/guides/examples/"},next:{title:"PageLayout",permalink:"/docs/guides/examples/page-layout"}},E={},P=[{value:"Entities",id:"entities",level:2},{value:"Examples",id:"examples",level:3},{value:"<code>index.ts</code>",id:"indexts",level:3},{value:"<code>ui</code>",id:"ui",level:3},{value:"<code>model</code>",id:"model",level:3},{value:"Features",id:"features",level:2},{value:"Examples",id:"examples-1",level:3},{value:"<code>ui</code>",id:"ui-1",level:3},{value:"Pages",id:"pages",level:2},{value:"Examples",id:"examples-2",level:3},{value:"<code>ui</code>",id:"ui-2",level:3},{value:"Processes",id:"processes",level:2},{value:"Examples",id:"examples-3",level:3},{value:"App",id:"app",level:2},{value:"Examples",id:"examples-4",level:3},{value:"Conclusions",id:"conclusions",level:2},{value:"FAQ",id:"faq",level:2},...i.RM,{value:"How to pass a token",id:"how-to-pass-a-token",level:3},{value:"Login",id:"login",level:3},{value:"Logout",id:"logout",level:3},{value:"See also",id:"see-also",level:2}];function U(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"auth",children:"Auth"}),"\n","\n",(0,t.jsxs)(n.p,{children:["Every application has business logic related ",(0,t.jsx)(n.strong,{children:"with the current authorized user."})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Usually such an entity is called ",(0,t.jsx)(n.code,{children:"Viewer"})," / ",(0,t.jsx)(n.code,{children:"Principle"})," / ",(0,t.jsx)(n.code,{children:"Session"})," - but within the framework of the article, we will focus on ",(0,t.jsx)(n.code,{children:"viewer"}),", but it all depends on your project and team"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Also, this is one of the illustrative examples when a business entity generates business features, then pages, and even business processes"}),"\n",(0,t.jsx)(n.p,{children:"Let's look at them in more detail below with examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The names of the directories inside the segments (ui, model) may differ from project to project"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The methodology does not regulate this level of nesting in any way yet"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"It should also be understood that the examples below are abstract and synthetic, and are formed to demonstrate only the concepts of the methodology"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"FSD does not regulate the best practices of a particular data-fetcher or state-manager"})}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"entities",children:"Entities"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The business entity of the user"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Represents the most atomic abstraction for design"}),"\n",(0,t.jsx)(n.li,{children:"Here the authorization context is formed, which is then usually relied on by all the overlying layers of the application"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:['It should be understood that often there is a public "external" user (',(0,t.jsx)(n.code,{children:"entities/user"}),') in the application, and there is an authorized "internal" user (',(0,t.jsx)(n.code,{children:"entities/viewer"}),")"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Do not forget to take this difference into account when designing architecture and logic"})})]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Segments can be both files and directories\n|\n\u251c\u2500\u2500 entities/viewer              # Layer: Business entities\n|         |                      #     Slice: Current user\n|         \u251c\u2500\u2500 ui/                #      Segment: UI-logic (components)\n|         \u251c\u2500\u2500 lib/               #      Segment: Infrastructure-logic (helpers/utils)\n|         \u251c\u2500\u2500 model/             #      Segment: Business Logic\n|         \u2514\u2500\u2500 index.ts           #      [Public API Declaration]\n|   ...           \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entities/viewer"})," - the entity of the current user ",(0,t.jsx)(n.em,{children:"(Session / Principle)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entities/user"})," - the essence of public user ",(0,t.jsx)(n.em,{children:"(not necessarily associated with the current)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["Depending on the complexity of your application - you can use the ",(0,t.jsx)(n.code,{children:"user"})," for naming the current user"]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"But it can cause serious problems when/if I have to separate the logic of a normal user and current, who came into the system"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"indexts",children:(0,t.jsx)(n.code,{children:"index.ts"})}),"\n",(0,t.jsxs)(n.p,{children:["The usual ",(0,t.jsx)(n.a,{href:"/docs/reference/public-api",children:"Public API of the module"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Largely repeats the API declaration for the layers described below"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="entities/user/ui/index.ts"',children:'export { ViewerCard } from "./card";\nexport { ViewerAvatar } from "./avatar";\n...\n'})}),"\n",(0,t.jsxs)(k,{children:[(0,t.jsxs)(I,{value:"redux",label:"Redux",default:!0,children:[(0,t.jsxs)(n.p,{children:["In redux, the ",(0,t.jsx)(n.a,{href:"https://github.com/erikras/ducks-modular-redux",children:"redux-ducks"})," approach is generally accepted when its units (selectors/actions/...) they lie side by side and are clearly decomposed"]}),(0,t.jsx)(n.p,{children:"But explicit decomposition is not required"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="entities/user/model/index.ts"',children:'export * as selectors from "./selectors";\nexport * as events from "./events";\nexport * as stores from "./stores";\n...\n'})})]}),(0,t.jsxs)(I,{value:"effector",label:"Effector",children:[(0,t.jsx)(n.p,{children:"The effector model will most often consist of a single file - because it is customary to store all units side by side there"}),(0,t.jsxs)(n.p,{children:["If the units in the model can be schematically divided into several submodels, then ",(0,t.jsx)(n.a,{href:"https://github.com/feature-sliced/examples/pull/1#discussion_r654841332",children:"you can explicitly do this"})," denote in the Public API"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="entities/user/model/index.ts"',children:'export * as submodel1 from "./submodel1"\nexport * as submodel2 from "./submodel2"\n...\n'})})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="entities/user/index.ts"',children:'export * from "./ui"\nexport * as viewerModel from "./model";\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ui",children:(0,t.jsx)(n.code,{children:"ui"})}),"\n",(0,t.jsx)(n.p,{children:"It may contain components that are not related to a specific page/feature, but directly to the user's entity"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="entities/user/ui/card/index.tsx"',children:'import { Card } from "shared/ui/card";\n\n// It is considered a good practice not to link ui components from entitites directly to the model\n// So that it can be used not only for the current model,\n// But also for externally received props\n\nexport type UserCardProps = {\n    data: User;\n    className?: string;\n    // And other card-props\n};\n\nexport const UserCard = ({ data, ... }: UserCardProps) => {\n    return (\n        <Card \n            title={data.fullName}\n            description={data.bio}\n            ...\n        />\n    )\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"model",children:(0,t.jsx)(n.code,{children:"model"})}),"\n",(0,t.jsx)(n.p,{children:"At this level, the entity of the current user is usually created, with the re-export of hooks/contracts/selectors for use by the overlying layers"}),"\n",(0,t.jsxs)(k,{children:[(0,t.jsx)(I,{value:"redux",label:"Redux",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// entities/viewer/model/selectors.ts\nexport const useViewer = () => {\n    return useSelector((store) => store.entities.userSlice);\n}\nexport const useAuth = () => {\n    const viewer = useViewer();\n    return !!viewer\n}\n// entities/viewer/model/store.ts\nexport const userSlice = createSlice(...)\n"})})}),(0,t.jsx)(I,{value:"effector",label:"Effector",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// entities/viewer/model/index.ts\nexport const $viewer = createStore(...);\nexport const $isAuth = $viewer.map((viewer) => !!viewer);\n// **/**/ui.tsx\nconst viewer = useStore($viewer);\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Also, other logic can be implemented here"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"updateUserDetails"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"logoutUser"})}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Features tied to the current user"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Uses business entities (often ",(0,t.jsx)(n.code,{children:"entities/viewer"}),") and shared resources in the implementation"]}),"\n",(0,t.jsx)(n.li,{children:"Features may not be directly related to the viewer, but they can use its context when implementing logic"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'# Segments can be both files and directories\n|\n\u251c\u2500\u2500 features/auth                # Layer: Business features\n|        |                       #    Slice Group: The structural group "User authorization"\n|        \u251c\u2500\u2500 by-phone/           #      Slice: Feature "Authorization by phone"\n|        |     \u251c\u2500\u2500 ui/           #         Segment: UI-logic (components)\n|        |     \u251c\u2500\u2500 lib/          #         Segment: Infrastructure-logic (helpers/utils)\n|        |     \u251c\u2500\u2500 model/        #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 by-oauth/           #      Slice: Feature "Authorization by an external resource"\n|   ...           \n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"features/auth/{by-phone, by-oauth, logout ...}"})," - ",(0,t.jsx)(n.strong,{children:"structural"})," group of authorization features ",(0,t.jsx)(n.em,{children:"(by phone, by external resource, logout,...)"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"features/wallet/{add-funds,...}"})," - ",(0,t.jsx)(n.strong,{children:"structural"})," group of features for working with the user's internal account ",(0,t.jsx)(n.em,{children:"(adding funds to the account,...)"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ui-1",children:(0,t.jsx)(n.code,{children:"ui"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Authorization by an external resource"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="features/auth/by-oauth/ui.tsx"',children:'import { viewerModel } from "entities/viewer";\n\nexport const AuthByOAuth = () => {\n    return (\n        <OAuth\n            domain={...}\n            scope={...}\n            ...\n            // for redux, you additionally need dispatch\n            onSuccess={(user) => viewerModel.setUser(user)}\n        />\n    )\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using the user's context in features"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="features/wallet/ui.tsx"',children:'import { viewerModel } from "entities/viewer";\n\nexport const Wallet = () => {\n    const viewer = viewerModel.useViewer();\n    const { moneyCount } = viewer;\n    \n    ...\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using the viewer components"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="features/header/ui.tsx"',children:'import { ViewerAvatar } from "entities/viewer";\n...\nexport const Header = () => {\n    ...\n    return (\n        <Layout.Header>\n            ...\n            <ViewerAvatar\n                onClick={...}\n                onLogout={...}\n                ...\n            />\n        </Layout.Header>\n    )\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"pages",children:"Pages"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Pages related to the current user in one way or another"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"They can both directly affect the functionality of the viewer"}),"\n",(0,t.jsx)(n.li,{children:"And use it indirectly (including its context / features)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-2",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'# Segments can be both files and directories\n|\n\u251c\u2500\u2500 pages/viewer                 # Layer: Application pages\n|        |                       #    Slice Group: The "Current User" structural group\n|        \u251c\u2500\u2500 profile/            #     Slice: The viewer profile page\n|        |     \u251c\u2500\u2500 ui.tsx        #         Segment: UI-logic (components)\n|        |     \u251c\u2500\u2500 lib.ts        #         Segment: Infrastructure-logic (helpers/utils)\n|        |     \u251c\u2500\u2500 model.ts      #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 settings/           #     Slice: The viewer account settings page\n|   ...           \n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pages/viewer/profile"})," - the user's LC page"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pages/viewer/settings"})," - user account settings page"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pages/user"})," - the user's page (not necessarily the current one)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pages/auth/{sign-in, sign-up, reset}"})," ",(0,t.jsx)(n.strong,{children:"structural"})," group of authorization pages ",(0,t.jsx)(n.em,{children:"(login / registration / password recovery)"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ui-2",children:(0,t.jsx)(n.code,{children:"ui"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using the viewer components and ",(0,t.jsx)(n.em,{children:"viewer-based"})," features on the pages"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="pages/user/ui.tsx"',children:'import { Wallet } from "features/wallet";\nimport { ViewerCard } from "entities/viewer";\n...\nexport const UserPage = () => {\n    ...\n    return (\n        <Layout>\n            <Header\n                extra={<Wallet.AddFunds />}\n            />\n            ...\n            <ViewerCard />\n        </Layout>\n    )\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using the viewer model"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="pages/some/ui.tsx"',children:'import { viewerModel } from "entities/viewer";\n...\nexport const SomePage = () => {\n    ...\n    return (\n        <Layout>\n            ...\n            <Settings onSave={(payload) => viewerModel.saveChanges(payload)} />\n        </Layout>\n    )\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"processes",children:"Processes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Business processes affecting the current user"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Affects user cases that permeate the pages of the system"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"The process layer is optional"}),", and is usually used ",(0,t.jsx)(n.em,{children:"only when the logic grows in pages"})," and you need ",(0,t.jsx)(n.em,{children:"separate context management"})," on several pages at once"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-3",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Segments can be both files and directories\n|\n\u251c\u2500\u2500 processes                    # Layer: Business processes\n|        \u251c\u2500\u2500 auth/               #     Slice: User authorization process\n|        |     \u251c\u2500\u2500 lib.ts        #         Segment: Infrastructure-logic (helpers/utils)\n|        |     \u251c\u2500\u2500 model.ts      #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 quick-tour/         #     Slice: The process of onboarding a new user\n|   ...           \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"processes/auth"})," - the business process of user authorization"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"processes/quick-tour"})," - a business process for familiarizing the user with the system ",(0,t.jsx)(n.em,{children:"(~ UserOnboard)"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"app",children:"App"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Initialization of user account data"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["There is usually a check on whether the user ",(0,t.jsx)(n.strong,{children:"was already logged in"})," before he entered the service","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"If yes"})," - the provider replenishes the user's context for further use in the system"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"If not"})," - the authorization process is started or the context of the viewer is changed so that the authorization page takes the necessary actions"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-4",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# The `app` structure is unique for each project and is not regulated by the methodology\n|\n\u251c\u2500\u2500 app/providers                # Layer: Initializing the application (HOCs providers)\n|        \u251c\u2500\u2500 withAuth.tsx        #    HOC: Initializing the authorization context\n|        |   ...                 #\n|   ...           \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"app/providers/withAuth"})," - HOC for user authorization","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Used ",(0,t.jsx)(n.strong,{children:"only at the top level, as a provider"})," with logic initialization, to which only ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.strong,{children:"app"}),"-layer"]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Not to be confused with the ",(0,t.jsx)(n.code,{children:"useViewer"})," hook"]}),", which is accessed by all other layers ",(0,t.jsx)(n.em,{children:"(processes / pages / features)"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusions",children:"Conclusions"}),"\n",(0,t.jsxs)(n.p,{children:["As we can see in the examples above - ",(0,t.jsx)(n.strong,{children:"all business logic begins to be built from a single entity, and can spread to the very top layer."})]}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, you need to be able to ",(0,t.jsx)(n.strong,{children:"correctly allocate the scope of the module's influence"}),", and depending on this, choose the appropriate layer for the location of the logic."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Thus, we will get the most supported, readable and reused code."})}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(i.Ay,{ticket:"176"}),"\n",(0,t.jsx)(n.h3,{id:"how-to-pass-a-token",children:"How to pass a token"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/4618",children:"https://t.me/feature_sliced/4618"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"login",children:"Login"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/3227",children:"https://t.me/feature_sliced/3227"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"logout",children:"Logout"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/3227",children:"https://t.me/feature_sliced/3227"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/65",children:'Discussion "The applicability of Feature-Sliced Design in combat"'})," (",(0,t.jsx)(n.em,{children:"there are also examples with viewer"})," inside)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/342",children:"Question about the user's profile and identity (community-chat)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://t.me/feature_sliced/552",children:"Explanation about UIKIT#Card and User#Card (community-chat)"})}),"\n"]})]})}function V(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(U,{...e})}):U(e)}},7468:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(758);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);