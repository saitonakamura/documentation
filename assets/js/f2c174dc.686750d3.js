"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[4861],{8595:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(6070),t=i(1100);const r={sidebar_position:3,sidebar_label:"From a custom architecture"},o="Migration from a custom architecture",l={id:"guides/migration/from-custom",title:"Migration from a custom architecture",description:"This guide describes an approach that might be helpful when migrating from a custom self-made architecture to Feature-Sliced Design.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-custom.md",sourceDirName:"guides/migration",slug:"/guides/migration/from-custom",permalink:"/docs/guides/migration/from-custom",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-custom.md",tags:[],version:"current",lastUpdatedAt:1727545393e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"From a custom architecture"},sidebar:"guidesSidebar",previous:{title:"Page layouts",permalink:"/docs/guides/examples/page-layout"},next:{title:"Migration from v1",permalink:"/docs/guides/migration/from-v1"}},a={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Step 1. Divide the code by pages",id:"divide-code-by-pages",level:2},{value:"Step 2. Separate everything else from the pages",id:"separate-everything-else-from-pages",level:2},{value:"Step 3. Tackle cross-imports between pages",id:"tackle-cross-imports-between-pages",level:2},{value:"Step 4. Unpack the Shared layer",id:"unpack-shared-layer",level:2},{value:"Step 5. Organize code by technical purpose",id:"organize-by-technical-purpose",level:2},{value:"Optional steps",id:"optional-steps",level:2},{value:"Step 6. Form entities/features from Redux slices that are used on several pages",id:"form-entities-features-from-redux",level:3},{value:"Step 7. Refactor your modules",id:"refactor-your-modules",level:3},{value:"Step 8. Form a clean UI foundation in <code>shared/ui</code>",id:"form-clean-ui-foundation",level:3},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"migration-from-a-custom-architecture",children:"Migration from a custom architecture"})}),"\n",(0,n.jsx)(s.p,{children:"This guide describes an approach that might be helpful when migrating from a custom self-made architecture to Feature-Sliced Design."}),"\n",(0,n.jsxs)(s.p,{children:["Here is the folder structure of a typical custom architecture. We will be using it as an example in this guide.",(0,n.jsx)(s.br,{}),"\n","Click on the blue arrow to open the folder."]}),"\n",(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 src"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 actions"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 product"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 order"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 api"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 components"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 containers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 constants"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 i18n"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 modules"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 helpers"}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 routes"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 products.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 products.[id].jsx"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 utils"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 styles"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 App.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]}),"\n",(0,n.jsx)(s.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,n.jsxs)(s.p,{children:["The most important question to ask your team when considering to switch to Feature-Sliced Design is \u2014 ",(0,n.jsx)(s.em,{children:"do you really need it?"})," We love Feature-Sliced Design, but even we recognize that some projects are perfectly fine without it."]}),"\n",(0,n.jsx)(s.p,{children:"Here are some reasons to consider making the switch:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"New team members are complaining that it's hard to get to a productive level"}),"\n",(0,n.jsxs)(s.li,{children:["Making modifications to one part of the code ",(0,n.jsx)(s.strong,{children:"often"})," causes another unrelated part to break"]}),"\n",(0,n.jsx)(s.li,{children:"Adding new functionality is difficult due to the sheer amount of things you need to think about"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Avoid switching to FSD against the will of your teammates"}),", even if you are the lead.",(0,n.jsx)(s.br,{}),"\n","First, convince your teammates that the benefits outweigh the cost of migration and the cost of learning a new architecture instead of the established one."]}),"\n",(0,n.jsx)(s.p,{children:"Also keep in mind that any kind of architectural changes are not immediately observable to the management. Make sure they are on board with the switch before starting and explain to them why it might benefit the project."}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsx)(s.p,{children:"If you need help convincing the project manager that FSD is beneficial, consider some of these points:"}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Migration to FSD can happen incrementally, so it will not halt the development of new features"}),"\n",(0,n.jsx)(s.li,{children:"A good architecture can significantly decrease the time that a new developer needs to get productive"}),"\n",(0,n.jsx)(s.li,{children:"FSD is a documented architecture, so the team doesn't have to continuously spend time on maintaining their own documentation"}),"\n"]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:["If you made the decision to start migrating, then the first thing you want to do is to set up an alias for ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 src"}),". It will be helpful later to refer to top-level folders. We will consider ",(0,n.jsx)(s.code,{children:"@"})," as an alias for ",(0,n.jsx)(s.code,{children:"./src"})," for the rest of this guide."]}),"\n",(0,n.jsx)(s.h2,{id:"divide-code-by-pages",children:"Step 1. Divide the code by pages"}),"\n",(0,n.jsxs)(s.p,{children:["Most custom architectures already have a division by pages, however small or large in logic. If you already have ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 pages"}),", you may skip this step."]}),"\n",(0,n.jsxs)(s.p,{children:["If you only have ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 routes"}),", create ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 pages"})," and try to move as much component code from ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 routes"})," as possible. Ideally, you would have a tiny route and a larger page. As you're moving code, create a folder for each page and add an index file:"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"For now, it's okay if your pages reference each other. You can tackle that later, but for now, focus on establishing a prominent division by pages."})}),"\n",(0,n.jsx)(s.p,{children:"Route file:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="src/routes/products.[id].js"',children:'export { ProductPage as default } from "@/pages/product"\n'})}),"\n",(0,n.jsx)(s.p,{children:"Page index file:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="src/pages/product/index.js"',children:'export { ProductPage } from "./ProductPage.jsx"\n'})}),"\n",(0,n.jsx)(s.p,{children:"Page component file:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="src/pages/product/ProductPage.jsx"',children:"export function ProductPage(props) {\n  return <div />;\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"separate-everything-else-from-pages",children:"Step 2. Separate everything else from the pages"}),"\n",(0,n.jsxs)(s.p,{children:["Create a folder ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 src/shared"})," and move everything that doesn't import from ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 pages"})," or ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 routes"})," there. Create a folder ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 src/app"})," and move everything that does import the pages or routes there, including the routes themselves."]}),"\n",(0,n.jsx)(s.p,{children:"Remember that the Shared layer doesn't have slices, so it's fine if segments import from each other."}),"\n",(0,n.jsx)(s.p,{children:"You should end up with a file structure like this:"}),"\n",(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 src"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 app"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 routes"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc4 products.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 products.[id].jsx"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc4 App.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 pages"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 product"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 ui"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"\ud83d\udcc4 ProductPage.jsx"})})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 catalog"})]})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 shared"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 actions"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 api"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 components"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 containers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 constants"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 i18n"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 modules"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 helpers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 utils"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 styles"})]})]})})]})]}),"\n",(0,n.jsx)(s.h2,{id:"tackle-cross-imports-between-pages",children:"Step 3. Tackle cross-imports between pages"}),"\n",(0,n.jsx)(s.p,{children:"Find all instances where one page is importing from the other and do one of the two things:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Copy-paste the imported code into the depending page to remove the dependency"}),"\n",(0,n.jsxs)(s.li,{children:["Move the code to a proper segment in Shared:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["if it's a part of the UI kit, move it to ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/ui"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:["if it's a configuration constant, move it to ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/config"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:["if it's a backend interaction, move it to ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/api"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Copy-pasting isn't architecturally wrong"}),", in fact, sometimes it may be more correct to duplicate than to abstract into a new reusable module. The reason is that sometimes the shared parts of pages start drifting apart, and you don't want dependencies getting in your way in these cases."]}),(0,n.jsx)(s.p,{children:"However, there is still sense in the DRY (\"don't repeat yourself\") principle, so make sure you're not copy-pasting business logic. Otherwise you will need to remember to fix bugs in several places at once."})]}),"\n",(0,n.jsx)(s.h2,{id:"unpack-shared-layer",children:"Step 4. Unpack the Shared layer"}),"\n",(0,n.jsx)(s.p,{children:"You might have a lot of stuff in the Shared layer on this step, and you generally want to avoid that. The reason is that the Shared layer may be a dependency for any other layer in your codebase, so making changes to that code is automatically more prone to unintended consequences."}),"\n",(0,n.jsxs)(s.p,{children:["Find all the objects that are only used on one page and move it to the slice of that page. And yes, ",(0,n.jsx)(s.em,{children:"that applies to actions, reducers, and selectors, too"}),". There is no benefit in grouping all actions together, but there is benefit in colocating relevant actions close to their usage."]}),"\n",(0,n.jsx)(s.p,{children:"You should end up with a file structure like this:"}),"\n",(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 src"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 app (unchanged)"}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 pages"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 product"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 actions"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 ui"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc4 Component.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 Container.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 ProductPage.jsx"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 catalog"})]})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 shared (only objects that are reused)"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 actions"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 api"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 components"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 containers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 constants"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 i18n"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 modules"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 helpers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 utils"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 styles"})]})]})})]})]}),"\n",(0,n.jsx)(s.h2,{id:"organize-by-technical-purpose",children:"Step 5. Organize code by technical purpose"}),"\n",(0,n.jsxs)(s.p,{children:["In FSD, division by technical purpose is done with ",(0,n.jsx)(s.em,{children:"segments"}),". There are a few common ones:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ui"})," \u2014 everything related to UI display: UI components, date formatters, styles, etc."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"api"})," \u2014 backend interactions: request functions, data types, mappers, etc."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"model"})," \u2014 the data model: schemas, interfaces, stores, and business logic."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"lib"})," \u2014 library code that other modules on this slice need."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"config"})," \u2014 configuration files and feature flags."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You can create your own segments, too, if you need. Make sure not to create segments that group code by what it is, like ",(0,n.jsx)(s.code,{children:"components"}),", ",(0,n.jsx)(s.code,{children:"actions"}),", ",(0,n.jsx)(s.code,{children:"types"}),", ",(0,n.jsx)(s.code,{children:"utils"}),". Instead, group the code by what it's for."]}),"\n",(0,n.jsxs)(s.p,{children:["Reorganize your pages to separate code by segments. You should already have a ",(0,n.jsx)(s.code,{children:"ui"})," segment, now it's time to create other segments, like ",(0,n.jsx)(s.code,{children:"model"})," for your actions, reducers, and selectors, or ",(0,n.jsx)(s.code,{children:"api"})," for your thunks and mutations."]}),"\n",(0,n.jsx)(s.p,{children:"Also reorganize the Shared layer to remove these folders:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 components"}),", ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 containers"})," \u2014 most of it should become ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/ui"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 helpers"}),", ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 utils"})," \u2014 if there are some reused helpers left, group them together by function, like dates or type conversions, and move theses groups to ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/lib"}),";"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 constants"})," \u2014 again, group by function and move to ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/config"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"optional-steps",children:"Optional steps"}),"\n",(0,n.jsx)(s.h3,{id:"form-entities-features-from-redux",children:"Step 6. Form entities/features from Redux slices that are used on several pages"}),"\n",(0,n.jsx)(s.p,{children:"Usually, these reused Redux slices will describe something relevant to the business, for example, products or users, so these can be moved to the Entities layer, one entity per one folder. If the Redux slice is related to an action that your users want to do in your app, like comments, then you can move it to the Features layer."}),"\n",(0,n.jsxs)(s.p,{children:["Entities and features are meant to be independent from each other. If your business domain contains inherent connections between entities, refer to the ",(0,n.jsx)(s.a,{href:"/docs/guides/examples/types#business-entities-and-their-cross-references",children:"guide on business entities"})," for advice on how to organize these connections."]}),"\n",(0,n.jsxs)(s.p,{children:["The API functions related to these slices can stay in ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/api"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"refactor-your-modules",children:"Step 7. Refactor your modules"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 modules"})," folder is commonly used for business logic, so it's already pretty similar in nature to the Features layer from FSD. Some modules might also be describe large chunks of the UI, like an app header. In that case, you should migrate them to the Widgets layer."]}),"\n",(0,n.jsxs)(s.h3,{id:"form-clean-ui-foundation",children:["Step 8. Form a clean UI foundation in ",(0,n.jsx)(s.code,{children:"shared/ui"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/ui"})," should ideally contain a set of UI elements that don't have any business logic encoded in them. They should also be highly reusable."]}),"\n",(0,n.jsxs)(s.p,{children:["Refactor the UI components that used to be in ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 components"})," and ",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 containers"})," to separate out the business logic. Move that business logic to the higher layers. If it's not used in too many places, you could even consider copy-pasting."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://youtu.be/aOiJ3k2UvO4",children:"(Talk in Russian) Ilya Klimov \u2014 \u041a\u0440\u044b\u0441\u0438\u043d\u044b\u0435 \u0431\u0435\u0433\u0430 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430: \u043a\u0430\u043a \u043d\u0435 \u0434\u0430\u0442\u044c \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0434\u043e\u043b\u0433\u0443 \u0443\u0431\u0438\u0442\u044c \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044e \u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1100:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>l});var n=i(758);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);