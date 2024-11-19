"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["1453"],{7363:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>o,default:()=>a,assets:()=>c,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"guides/migration/from-v1","title":"Migration from v1 to v2","description":"Why v2?","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-v1.md","sourceDirName":"guides/migration","slug":"/guides/migration/from-v1","permalink":"/kr/docs/guides/migration/from-v1","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-v1.md","tags":[],"version":"current","lastUpdatedAt":1731974592000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"guidesSidebar","previous":{"title":"From a custom architecture","permalink":"/kr/docs/guides/migration/from-custom"},"next":{"title":"Migration from v2.0 to v2.1","permalink":"/kr/docs/guides/migration/from-v2-0"}}'),r=n("2676"),t=n("9938");let l={sidebar_position:2},o="Migration from v1 to v2",c={},d=[{value:"Why v2?",id:"why-v2",level:2},{value:"Why does it make sense to migrate the project to v2?",id:"why-does-it-make-sense-to-migrate-the-project-to-v2",level:2},{value:"\uD83D\uDD0D More transparent and simple architecture",id:"-more-transparent-and-simple-architecture",level:4},{value:"\uD83D\uDCE6 More flexible and honest modularity",id:"-more-flexible-and-honest-modularity",level:4},{value:"\uD83D\uDE80 More specifications, plans, community",id:"-more-specifications-plans-community",level:4},{value:"Changelog",id:"changelog",level:2},{value:"<code>BREAKING</code> Layers",id:"breaking-layers",level:3},{value:"<code>BREAKING</code> Shared",id:"breaking-shared",level:3},{value:"<code>NEW</code> Entities, Processes",id:"new-entities-processes",level:3},{value:"<code>BREAKING</code> Abstractions &amp; Naming",id:"breaking-abstractions--naming",level:3},{value:"Layers",id:"layers",level:4},{value:"Segments",id:"segments",level:4},{value:"<code>REFINED</code> Low coupling",id:"refined-low-coupling",level:3},{value:"See also",id:"see-also",level:2}];function h(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"migration-from-v1-to-v2",children:"Migration from v1 to v2"})}),"\n",(0,r.jsx)(s.h2,{id:"why-v2",children:"Why v2?"}),"\n",(0,r.jsxs)(s.p,{children:["The original concept of ",(0,r.jsx)(s.strong,{children:"feature-slices"})," ",(0,r.jsx)(s.a,{href:"https://t.me/feature_slices",children:"was announced"})," in 2018."]}),"\n",(0,r.jsxs)(s.p,{children:["Since then, many transformations of the methodology have taken place, but at the same time ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://feature-sliced.github.io/featureslices.dev/v1.0.html",children:"the basic principles were preserved"})}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Using a ",(0,r.jsx)(s.em,{children:"standardized"})," frontend project structure"]}),"\n",(0,r.jsxs)(s.li,{children:["Splitting the application in the first place-according to ",(0,r.jsx)(s.em,{children:"business logic"})]}),"\n",(0,r.jsxs)(s.li,{children:["Use of ",(0,r.jsx)(s.em,{children:"isolated features"})," to prevent implicit side effects and cyclic dependencies"]}),"\n",(0,r.jsxs)(s.li,{children:["Using the ",(0,r.jsx)(s.em,{children:"Public API"}),' with a ban on climbing "into the insides" of the module']}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["At the same time, in the previous version of the methodology, there were still ",(0,r.jsx)(s.strong,{children:"weak points"})," that"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Sometimes it leads to boilerplate code"}),"\n",(0,r.jsx)(s.li,{children:"Sometimes it leads to excessive complication of the code base and non-obvious rules between abstractions"}),"\n",(0,r.jsx)(s.li,{children:"Sometimes it leads to implicit architectural solutions, which prevented the project from being pulled up and new people from onboarding"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The new version of the methodology (",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation",children:"v2"}),") is designed ",(0,r.jsx)(s.strong,{children:"to eliminate these shortcomings, while preserving the existing advantages"})," of the approach."]}),"\n",(0,r.jsxs)(s.p,{children:["Since 2018, ",(0,r.jsx)(s.a,{href:"https://github.com/kof/feature-driven-architecture/issues",children:"has also developed"})," another similar methodology - ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/tree/rc/feature-driven",children:(0,r.jsx)(s.strong,{children:"feature-driven"})}),", which was first announced by ",(0,r.jsx)(s.a,{href:"https://github.com/kof",children:"Oleg Isonen"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["After merging of the two approaches, we have ",(0,r.jsx)(s.strong,{children:"improved and refined existing practices"})," - towards greater flexibility, clarity and efficiency in application."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["As a result, this has even affected the name of the methodology - ",(0,r.jsxs)(s.em,{children:['"feature-slice',(0,r.jsx)(s.strong,{children:"d"}),'"']})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"why-does-it-make-sense-to-migrate-the-project-to-v2",children:"Why does it make sense to migrate the project to v2?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"WIP:"})," The current version of the methodology is under development and some details ",(0,r.jsx)(s.em,{children:"may change"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"-more-transparent-and-simple-architecture",children:"\uD83D\uDD0D More transparent and simple architecture"}),"\n",(0,r.jsxs)(s.p,{children:["The methodology (v2) offers ",(0,r.jsx)(s.strong,{children:"more intuitive and more common abstractions and ways of separating logic among developers."})]}),"\n",(0,r.jsx)(s.p,{children:"All this has an extremely positive effect on attracting new people, as well as studying the current state of the project, and distributing the business logic of the application."}),"\n",(0,r.jsx)(s.h4,{id:"-more-flexible-and-honest-modularity",children:"\uD83D\uDCE6 More flexible and honest modularity"}),"\n",(0,r.jsxs)(s.p,{children:["The methodology (v2) allows ",(0,r.jsx)(s.strong,{children:"to distribute logic in a more flexible way:"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"With the ability to refactor isolated parts from scratch"}),"\n",(0,r.jsx)(s.li,{children:"With the ability to rely on the same abstractions, but without unnecessary interweaving of dependencies"}),"\n",(0,r.jsxs)(s.li,{children:["With simpler requirements for the location of the new module ",(0,r.jsx)(s.em,{children:"(layer => slice => segment)"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"-more-specifications-plans-community",children:"\uD83D\uDE80 More specifications, plans, community"}),"\n",(0,r.jsxs)(s.p,{children:["At the moment, the ",(0,r.jsx)(s.code,{children:"core-team"})," is actively working on the latest (v2) version of the methodology"]}),"\n",(0,r.jsx)(s.p,{children:"So it is for her:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"there will be more described cases / problems"}),"\n",(0,r.jsx)(s.li,{children:"there will be more guides on the application"}),"\n",(0,r.jsx)(s.li,{children:"there will be more real examples"}),"\n",(0,r.jsx)(s.li,{children:"in general, there will be more documentation for onboarding new people and studying the concepts of the methodology"}),"\n",(0,r.jsx)(s.li,{children:"the toolkit will be developed in the future to comply with the concepts and conventions on architecture"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Of course, there will be user support for the first version as well - but the latest version is still a priority for us"}),"\n",(0,r.jsxs)(s.p,{children:["In the future, with the next major updates, you will still have access to the current version (v2) of the methodology, ",(0,r.jsx)(s.strong,{children:"without risks for your teams and projects"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsxs)(s.h3,{id:"breaking-layers",children:[(0,r.jsx)(s.code,{children:"BREAKING"})," Layers"]}),"\n",(0,r.jsx)(s.p,{children:"Now the methodology assumes explicit allocation of layers at the top level"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"/app"})," > ",(0,r.jsx)(s.code,{children:"/processes"})," > ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/pages"})})," > ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/features"})})," > ",(0,r.jsx)(s.code,{children:"/entities"})," > ",(0,r.jsx)(s.code,{children:"/shared"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"That is, not everything is now treated as features/pages"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["This approach allows you to ",(0,r.jsx)(s.a,{href:"https://t.me/atomicdesign/18708",children:"explicitly set rules for layers"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"higher the layer"})," of the module is located , the more ",(0,r.jsx)(s.strong,{children:"context"})," it has"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(in other words-each module of the layer - can import only the modules of the underlying layers, but not higher)"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"lower the layer of the"})," module is located , the more ",(0,r.jsx)(s.strong,{children:"danger and responsibility"})," to make changes to it"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(because it is usually the underlying layers that are more overused)"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"breaking-shared",children:[(0,r.jsx)(s.code,{children:"BREAKING"})," Shared"]}),"\n",(0,r.jsxs)(s.p,{children:["The infrastructure abstractions ",(0,r.jsx)(s.code,{children:"/ui"}),", ",(0,r.jsx)(s.code,{children:"/lib"}),", ",(0,r.jsx)(s.code,{children:"/api"}),", which used to lie in the src root of the project, are now separated by a separate directory ",(0,r.jsx)(s.code,{children:"/src/shared"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"shared/ui"})," - Still the same general uikit of the application (optional)","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["At the same time, no one forbids using ",(0,r.jsx)(s.code,{children:"Atomic Design"})," here as before"]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"shared/lib"})," - A set of auxiliary libraries for implementing logic","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"Still - without a dump of helpers"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"shared/api"})," - A common entry point for accessing the API","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"Can also be registered locally in each feature / page - but it is not recommended"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["As before - there should be no explicit binding to business logic in ",(0,r.jsx)(s.code,{children:"shared"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["If necessary, you need to take this relationship to the ",(0,r.jsx)(s.code,{children:"entities"})," level or even higher"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"new-entities-processes",children:[(0,r.jsx)(s.code,{children:"NEW"})," Entities, Processes"]}),"\n",(0,r.jsxs)(s.p,{children:["In v2 ",(0,r.jsx)(s.strong,{children:", other new abstractions"})," have been added to eliminate the problems of logic complexity and high coupling."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/entities"})," - layer ",(0,r.jsx)(s.strong,{children:"business entities"})," containing slices that are related directly to the business models or synthetic entities required only on frontend","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Examples: ",(0,r.jsx)(s.code,{children:"user"}),", ",(0,r.jsx)(s.code,{children:"i18n"}),", ",(0,r.jsx)(s.code,{children:"order"}),", ",(0,r.jsx)(s.code,{children:"blog"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/processes"})," - layer ",(0,r.jsx)(s.strong,{children:"business processes"}),", penetrating app","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"The layer is optional"}),", it is usually recommended to use it when ",(0,r.jsx)(s.em,{children:"the logic grows and begins to blur in several pages"})]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Examples: ",(0,r.jsx)(s.code,{children:"payment"}),", ",(0,r.jsx)(s.code,{children:"auth"}),", ",(0,r.jsx)(s.code,{children:"quick-tour"})]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"breaking-abstractions--naming",children:[(0,r.jsx)(s.code,{children:"BREAKING"})," Abstractions & Naming"]}),"\n",(0,r.jsxs)(s.p,{children:["Now specific abstractions and ",(0,r.jsx)(s.a,{href:"/docs/about/understanding/naming",children:"clear recommendations for naming them"}),"are defined"]}),"\n",(0,r.jsx)(s.h4,{id:"layers",children:"Layers"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/app"})," \u2014 ",(0,r.jsx)(s.strong,{children:"application initialization layer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"app"}),", ",(0,r.jsx)(s.code,{children:"core"}),",",(0,r.jsx)(s.code,{children:"init"}),", ",(0,r.jsx)(s.code,{children:"src/index"})," (and this happens)"]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/processes"})," \u2014 ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/20",children:(0,r.jsx)(s.strong,{children:"business process layer"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"processes"}),", ",(0,r.jsx)(s.code,{children:"flows"}),", ",(0,r.jsx)(s.code,{children:"workflows"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/pages"})," \u2014 ",(0,r.jsx)(s.strong,{children:"application page layer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"pages"}),", ",(0,r.jsx)(s.code,{children:"screens"}),", ",(0,r.jsx)(s.code,{children:"views"}),", ",(0,r.jsx)(s.code,{children:"layouts"}),", ",(0,r.jsx)(s.code,{children:"components"}),", ",(0,r.jsx)(s.code,{children:"containers"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/features"})," \u2014 ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/23",children:(0,r.jsx)(s.strong,{children:"functionality parts layer"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"features"}),", ",(0,r.jsx)(s.code,{children:"components"}),", ",(0,r.jsx)(s.code,{children:"containers"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/entities"})," \u2014 ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/18#discussioncomment-422649",children:(0,r.jsx)(s.strong,{children:"business entity layer"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"entities"}),", ",(0,r.jsx)(s.code,{children:"models"}),", ",(0,r.jsx)(s.code,{children:"shared"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/shared"})," \u2014 ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-453020",children:(0,r.jsx)(s.strong,{children:"layer of reused infrastructure code"})})," \uD83D\uDD25","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"shared"}),", ",(0,r.jsx)(s.code,{children:"common"}),", ",(0,r.jsx)(s.code,{children:"lib"})]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"segments",children:"Segments"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/ui"})," \u2014 ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-453132",children:(0,r.jsx)(s.strong,{children:"UI segment"})})," \uD83D\uDD25","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"ui"}),", ",(0,r.jsx)(s.code,{children:"components"}),", ",(0,r.jsx)(s.code,{children:"view"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/model"})," \u2014 ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-472645",children:(0,r.jsx)(s.strong,{children:"BL-segment"})})," \uD83D\uDD25","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"model"}),", ",(0,r.jsx)(s.code,{children:"store"}),", ",(0,r.jsx)(s.code,{children:"state"}),", ",(0,r.jsx)(s.code,{children:"services"}),", ",(0,r.jsx)(s.code,{children:"controller"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/lib"})," \u2014 segment ",(0,r.jsx)(s.strong,{children:"of auxiliary code"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"lib"}),", ",(0,r.jsx)(s.code,{children:"libs"}),", ",(0,r.jsx)(s.code,{children:"utils"}),", ",(0,r.jsx)(s.code,{children:"helpers"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/api"})," \u2014 ",(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/66",children:(0,r.jsx)(s.strong,{children:"API segment"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"api"}),", ",(0,r.jsx)(s.code,{children:"service"}),", ",(0,r.jsx)(s.code,{children:"requests"}),", ",(0,r.jsx)(s.code,{children:"queries"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/config"})," \u2014 ",(0,r.jsx)(s.strong,{children:"application configuration segment"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.em,{children:["Previous versions: ",(0,r.jsx)(s.code,{children:"config"}),", ",(0,r.jsx)(s.code,{children:"env"}),", ",(0,r.jsx)(s.code,{children:"get-env"})]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"refined-low-coupling",children:[(0,r.jsx)(s.code,{children:"REFINED"})," Low coupling"]}),"\n",(0,r.jsxs)(s.p,{children:["Now it is much easier to ",(0,r.jsx)(s.a,{href:"/docs/reference/slices-segments#zero-coupling-high-cohesion",children:"observe the principle of low coupling"})," between modules, thanks to the new layers."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:'At the same time, it is still recommended to avoid as much as possible cases where it is extremely difficult to "uncouple" modules'})}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://t.me/feature_slices",children:'Notes from the report "React SPB Meetup #1"'})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.youtube.com/watch?v=BWAeYuWFHhs",children:'React Berlin Talk - Oleg Isonen "Feature Driven Architecture"'})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://t.me/feature_sliced/493",children:"Comparison with v1 (community-chat)"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://t.me/atomicdesign/18708",children:"New ideas v2 with explanations (atomicdesign-chat)"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/feature-sliced/documentation/discussions/31",children:"Discussion of abstractions and naming for the new version of the methodology (v2)"})}),"\n"]})]})}function a(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9938:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return l}});var i=n(5271);let r={},t=i.createContext(r);function l(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);