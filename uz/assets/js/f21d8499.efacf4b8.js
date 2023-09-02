"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5358],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7658:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(6600),r=n(9496),i=n(9613),l=n(2484),s=n(4643);const o=e=>{let{ticket:t}=e;const n=`https://github.com/feature-sliced/documentation/issues/${t}`;return r.createElement("div",null,r.createElement("p",null,(0,s.I)({id:"shared.wip.title"})),r.createElement("p",null,(0,s.I)({id:"shared.wip.subtitle"})),r.createElement("ul",null,r.createElement("li",null,(0,s.I)({id:"shared.wip.var.feedback.base"}),r.createElement(l.Z,{to:n},(0,s.I)({id:"shared.wip.var.feedback.link"}))),r.createElement("li",null,(0,s.I)({id:"shared.wip.var.material.base"}),r.createElement(l.Z,{to:"https://t.me/feature_sliced"},(0,s.I)({id:"shared.wip.var.material.link"}))),r.createElement("li",null,(0,s.I)({id:"shared.wip.var.contribute.base"}),r.createElement(l.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,s.I)({id:"shared.wip.var.contribute.link"})))),r.createElement("br",null),r.createElement("p",null,r.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},u={toc:[]};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"WIP",type:"caution"},(0,i.kt)(o,{ticket:n.ticket,mdxType:"WIP"})))}p.isMDXComponent=!0},2338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>C,frontMatter:()=>b,metadata:()=>N,toc:()=>x});var a=n(6600),r=n(9496),i=n(9613),l=n(7658),s=n(5924),o=n(6789),u=n(2759),p=n(7180),c=n(4827);const m="tabList_oenh",d="tabItem_UhVP";function h(e){var t;const{lazy:n,block:i,defaultValue:l,values:o,groupId:h,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=o??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,u.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,p.U)(),[x,w]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=N[h];null!=e&&e!==x&&f.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==x&&(E(t),w(a),null!=h&&y(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},k)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:T,onClick:T},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,o.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}const g="tabItem_kON0";function f(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(g,a),hidden:n},t)}const b={sidebar_position:1},v="Auth",N={unversionedId:"guides/examples/auth",id:"guides/examples/auth",title:"Auth",description:"Every application has business logic related with the current authorized user.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/auth.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/auth",permalink:"/uz/docs/guides/examples/auth",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/auth.mdx",tags:[],version:"current",lastUpdatedAt:1693685730,formattedLastUpdatedAt:"2-sen, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Examples",permalink:"/uz/docs/guides/examples/"},next:{title:"PageLayout",permalink:"/uz/docs/guides/examples/page-layout"}},y={},x=[{value:"Entities",id:"entities",level:2},{value:"Examples",id:"examples",level:3},{value:"<code>index.ts</code>",id:"indexts",level:3},{value:"<code>ui</code>",id:"ui",level:3},{value:"<code>model</code>",id:"model",level:3},{value:"Features",id:"features",level:2},{value:"Examples",id:"examples-1",level:3},{value:"<code>ui</code>",id:"ui-1",level:3},{value:"Pages",id:"pages",level:2},{value:"Examples",id:"examples-2",level:3},{value:"<code>ui</code>",id:"ui-2",level:3},{value:"Processes",id:"processes",level:2},{value:"Examples",id:"examples-3",level:3},{value:"App",id:"app",level:2},{value:"Examples",id:"examples-4",level:3},{value:"Conclusions",id:"conclusions",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to pass a token",id:"how-to-pass-a-token",level:3},{value:"Login",id:"login",level:3},{value:"Logout",id:"logout",level:3},{value:"See also",id:"see-also",level:2}],w={toc:x};function C(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auth"},"Auth"),(0,i.kt)("p",null,"Every application has business logic related ",(0,i.kt)("strong",{parentName:"p"},"with the current authorized user.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Usually such an entity is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Viewer")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"Principle")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," - but within the framework of the article, we will focus on ",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),", but it all depends on your project and team")),(0,i.kt)("p",null,"Also, this is one of the illustrative examples when a business entity generates business features, then pages, and even business processes"),(0,i.kt)("p",null,"Let's look at them in more detail below with examples"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The names of the directories inside the segments (ui, model) may differ from project to project"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"The methodology does not regulate this level of nesting in any way yet"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It should also be understood that the examples below are abstract and synthetic, and are formed to demonstrate only the concepts of the methodology"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"FSD does not regulate the best practices of a particular data-fetcher or state-manager"))))),(0,i.kt)("h2",{id:"entities"},"Entities"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The business entity of the user")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Represents the most atomic abstraction for design"),(0,i.kt)("li",{parentName:"ul"},"Here the authorization context is formed, which is then usually relied on by all the overlying layers of the application")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'It should be understood that often there is a public "external" user (',(0,i.kt)("inlineCode",{parentName:"p"},"entities/user"),') in the application, and there is an authorized "internal" user (',(0,i.kt)("inlineCode",{parentName:"p"},"entities/viewer"),")"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Do not forget to take this difference into account when designing architecture and logic"))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Segments can be both files and directories\n|\n\u251c\u2500\u2500 entities/viewer              # Layer: Business entities\n|         |                      #     Slice: Current user\n|         \u251c\u2500\u2500 ui/                #      Segment: UI-logic (components)\n|         \u251c\u2500\u2500 lib/               #      Segment: Infrastructure-logic (helpers/utils)\n|         \u251c\u2500\u2500 model/             #      Segment: Business Logic\n|         \u2514\u2500\u2500 index.ts           #      [Public API Declaration]\n|   ...           \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entities/viewer")," - the entity of the current user ",(0,i.kt)("em",{parentName:"li"},"(Session / Principle)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entities/user")," - the essence of public user ",(0,i.kt)("em",{parentName:"li"},"(not necessarily associated with the current)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Depending on the complexity of your application - you can use the ",(0,i.kt)("inlineCode",{parentName:"em"},"user")," for naming the current user")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"But it can cause serious problems when/if I have to separate the logic of a normal user and current, who came into the system"))))),(0,i.kt)("h3",{id:"indexts"},(0,i.kt)("inlineCode",{parentName:"h3"},"index.ts")),(0,i.kt)("p",null,"The usual ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/public-api"},"Public API of the module")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Largely repeats the API declaration for the layers described below")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/ui/index.ts",title:"entities/user/ui/index.ts"},'export { ViewerCard } from "./card";\nexport { ViewerAvatar } from "./avatar";\n...\n')),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(f,{value:"redux",label:"Redux",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"In redux, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/erikras/ducks-modular-redux"},"redux-ducks")," approach is generally accepted when its units (selectors/actions/...) they lie side by side and are clearly decomposed"),(0,i.kt)("p",null,"But explicit decomposition is not required"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/model/index.ts",title:"entities/user/model/index.ts"},'export * as selectors from "./selectors";\nexport * as events from "./events";\nexport * as stores from "./stores";\n...\n'))),(0,i.kt)(f,{value:"effector",label:"Effector",mdxType:"TabItem"},(0,i.kt)("p",null,"The effector model will most often consist of a single file - because it is customary to store all units side by side there"),(0,i.kt)("p",null,"If the units in the model can be schematically divided into several submodels, then ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/examples/pull/1#discussion_r654841332"},"you can explicitly do this")," denote in the Public API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/model/index.ts",title:"entities/user/model/index.ts"},'export * as submodel1 from "./submodel1"\nexport * as submodel2 from "./submodel2"\n...\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/user/index.ts",title:"entities/user/index.ts"},'export * from "./ui"\nexport * as viewerModel from "./model";\n')),(0,i.kt)("h3",{id:"ui"},(0,i.kt)("inlineCode",{parentName:"h3"},"ui")),(0,i.kt)("p",null,"It may contain components that are not related to a specific page/feature, but directly to the user's entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=entities/user/ui/card/index.tsx",title:"entities/user/ui/card/index.tsx"},'import { Card } from "shared/ui/card";\n\n// It is considered a good practice not to link ui components from entitites directly to the model\n// So that it can be used not only for the current model,\n// But also for externally received props\n\nexport type UserCardProps = {\n    data: User;\n    className?: string;\n    // And other card-props\n};\n\nexport const UserCard = ({ data, ... }: UserCardProps) => {\n    return (\n        <Card \n            title={data.fullName}\n            description={data.bio}\n            ...\n        />\n    )\n}\n')),(0,i.kt)("h3",{id:"model"},(0,i.kt)("inlineCode",{parentName:"h3"},"model")),(0,i.kt)("p",null,"At this level, the entity of the current user is usually created, with the re-export of hooks/contracts/selectors for use by the overlying layers"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(f,{value:"redux",label:"Redux",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// entities/viewer/model/selectors.ts\nexport const useViewer = () => {\n    return useSelector((store) => store.entities.userSlice);\n}\nexport const useAuth = () => {\n    const viewer = useViewer();\n    return !!viewer\n}\n// entities/viewer/model/store.ts\nexport const userSlice = createSlice(...)\n"))),(0,i.kt)(f,{value:"effector",label:"Effector",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// entities/viewer/model/index.ts\nexport const $viewer = createStore(...);\nexport const $isAuth = $viewer.map((viewer) => !!viewer);\n// **/**/ui.tsx\nconst viewer = useStore($viewer);\n")))),(0,i.kt)("p",null,"Also, other logic can be implemented here"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateUserDetails")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logoutUser")),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Features tied to the current user")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uses business entities (often ",(0,i.kt)("inlineCode",{parentName:"li"},"entities/viewer"),") and shared resources in the implementation"),(0,i.kt)("li",{parentName:"ul"},"Features may not be directly related to the viewer, but they can use its context when implementing logic")),(0,i.kt)("h3",{id:"examples-1"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# Segments can be both files and directories\n|\n\u251c\u2500\u2500 features/auth                # Layer: Business features\n|        |                       #    Slice Group: The structural group "User authorization"\n|        \u251c\u2500\u2500 by-phone/           #      Slice: Feature "Authorization by phone"\n|        |     \u251c\u2500\u2500 ui/           #         Segment: UI-logic (components)\n|        |     \u251c\u2500\u2500 lib/          #         Segment: Infrastructure-logic (helpers/utils)\n|        |     \u251c\u2500\u2500 model/        #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 by-oauth/           #      Slice: Feature "Authorization by an external resource"\n|   ...           \n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"features/auth/{by-phone, by-oauth, logout ...}")," - ",(0,i.kt)("strong",{parentName:"li"},"structural")," group of authorization features ",(0,i.kt)("em",{parentName:"li"},"(by phone, by external resource, logout,...)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"features/wallet/{add-funds,...}")," - ",(0,i.kt)("strong",{parentName:"li"},"structural")," group of features for working with the user's internal account ",(0,i.kt)("em",{parentName:"li"},"(adding funds to the account,...)"))),(0,i.kt)("h3",{id:"ui-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"ui")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authorization by an external resource")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=features/auth/by-oauth/ui.tsx",title:"features/auth/by-oauth/ui.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const AuthByOAuth = () => {\n    return (\n        <OAuth\n            domain={...}\n            scope={...}\n            ...\n            // for redux, you additionally need dispatch\n            onSuccess={(user) => viewerModel.setUser(user)}\n        />\n    )\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the user's context in features")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=features/wallet/ui.tsx",title:"features/wallet/ui.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const Wallet = () => {\n    const viewer = viewerModel.useViewer();\n    const { moneyCount } = viewer;\n    \n    ...\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the viewer components")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=features/header/ui.tsx",title:"features/header/ui.tsx"},'import { ViewerAvatar } from "entities/viewer";\n...\nexport const Header = () => {\n    ...\n    return (\n        <Layout.Header>\n            ...\n            <ViewerAvatar\n                onClick={...}\n                onLogout={...}\n                ...\n            />\n        </Layout.Header>\n    )\n}\n')),(0,i.kt)("h2",{id:"pages"},"Pages"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pages related to the current user in one way or another")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They can both directly affect the functionality of the viewer"),(0,i.kt)("li",{parentName:"ul"},"And use it indirectly (including its context / features)")),(0,i.kt)("h3",{id:"examples-2"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# Segments can be both files and directories\n|\n\u251c\u2500\u2500 pages/viewer                 # Layer: Application pages\n|        |                       #    Slice Group: The "Current User" structural group\n|        \u251c\u2500\u2500 profile/            #     Slice: The viewer profile page\n|        |     \u251c\u2500\u2500 ui.tsx        #         Segment: UI-logic (components)\n|        |     \u251c\u2500\u2500 lib.ts        #         Segment: Infrastructure-logic (helpers/utils)\n|        |     \u251c\u2500\u2500 model.ts      #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 settings/           #     Slice: The viewer account settings page\n|   ...           \n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/viewer/profile")," - the user's LC page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/viewer/settings")," - user account settings page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/user")," - the user's page (not necessarily the current one)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/auth/{sign-in, sign-up, reset}")," ",(0,i.kt)("strong",{parentName:"li"},"structural")," group of authorization pages ",(0,i.kt)("em",{parentName:"li"},"(login / registration / password recovery)"))),(0,i.kt)("h3",{id:"ui-2"},(0,i.kt)("inlineCode",{parentName:"h3"},"ui")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the viewer components and ",(0,i.kt)("em",{parentName:"li"},"viewer-based")," features on the pages")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/user/ui.tsx",title:"pages/user/ui.tsx"},'import { Wallet } from "features/wallet";\nimport { ViewerCard } from "entities/viewer";\n...\nexport const UserPage = () => {\n    ...\n    return (\n        <Layout>\n            <Header\n                extra={<Wallet.AddFunds />}\n            />\n            ...\n            <ViewerCard />\n        </Layout>\n    )\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the viewer model")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/some/ui.tsx",title:"pages/some/ui.tsx"},'import { viewerModel } from "entities/viewer";\n...\nexport const SomePage = () => {\n    ...\n    return (\n        <Layout>\n            ...\n            <Settings onSave={(payload) => viewerModel.saveChanges(payload)} />\n        </Layout>\n    )\n}\n')),(0,i.kt)("h2",{id:"processes"},"Processes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Business processes affecting the current user")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Affects user cases that permeate the pages of the system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The process layer is optional"),", and is usually used ",(0,i.kt)("em",{parentName:"li"},"only when the logic grows in pages")," and you need ",(0,i.kt)("em",{parentName:"li"},"separate context management")," on several pages at once")),(0,i.kt)("h3",{id:"examples-3"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Segments can be both files and directories\n|\n\u251c\u2500\u2500 processes                    # Layer: Business processes\n|        \u251c\u2500\u2500 auth/               #     Slice: User authorization process\n|        |     \u251c\u2500\u2500 lib.ts        #         Segment: Infrastructure-logic (helpers/utils)\n|        |     \u251c\u2500\u2500 model.ts      #         Segment: Business Logic\n|        |     \u2514\u2500\u2500 index.ts      #         [Public API Declaration]\n|        |\n|        \u251c\u2500\u2500 quick-tour/         #     Slice: The process of onboarding a new user\n|   ...           \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processes/auth")," - the business process of user authorization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"processes/quick-tour")," - a business process for familiarizing the user with the system ",(0,i.kt)("em",{parentName:"li"},"(~ UserOnboard)"))),(0,i.kt)("h2",{id:"app"},"App"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Initialization of user account data")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is usually a check on whether the user ",(0,i.kt)("strong",{parentName:"li"},"was already logged in")," before he entered the service",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"If yes")," - the provider replenishes the user's context for further use in the system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"If not")," - the authorization process is started or the context of the viewer is changed so that the authorization page takes the necessary actions")))),(0,i.kt)("h3",{id:"examples-4"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# The `app` structure is unique for each project and is not regulated by the methodology\n|\n\u251c\u2500\u2500 app/providers                # Layer: Initializing the application (HOCs providers)\n|        \u251c\u2500\u2500 withAuth.tsx        #    HOC: Initializing the authorization context\n|        |   ...                 #\n|   ...           \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app/providers/withAuth")," - HOC for user authorization",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Used ",(0,i.kt)("strong",{parentName:"li"},"only at the top level, as a provider")," with logic initialization, to which only ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"app"),"-layer")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Not to be confused with the ",(0,i.kt)("inlineCode",{parentName:"strong"},"useViewer")," hook"),", which is accessed by all other layers ",(0,i.kt)("em",{parentName:"li"},"(processes / pages / features)"))),(0,i.kt)("h2",{id:"conclusions"},"Conclusions"),(0,i.kt)("p",null,"As we can see in the examples above - ",(0,i.kt)("strong",{parentName:"p"},"all business logic begins to be built from a single entity, and can spread to the very top layer.")),(0,i.kt)("p",null,"Therefore, you need to be able to ",(0,i.kt)("strong",{parentName:"p"},"correctly allocate the scope of the module's influence"),", and depending on this, choose the appropriate layer for the location of the logic."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Thus, we will get the most supported, readable and reused code.")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)(l.ZP,{ticket:"176",mdxType:"WIP"}),(0,i.kt)("h3",{id:"how-to-pass-a-token"},"How to pass a token"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/4618"},"https://t.me/feature_sliced/4618"))),(0,i.kt)("h3",{id:"login"},"Login"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/3227"},"https://t.me/feature_sliced/3227"))),(0,i.kt)("h3",{id:"logout"},"Logout"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/3227"},"https://t.me/feature_sliced/3227"))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/65"},'Discussion "The applicability of Feature-Sliced Design in combat"')," (",(0,i.kt)("em",{parentName:"li"},"there are also examples with viewer")," inside)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/342"},"Question about the user's profile and identity (community-chat)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/552"},"Explanation about UIKIT#Card and User#Card (community-chat)"))))}C.isMDXComponent=!0}}]);