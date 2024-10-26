"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[6422],{4813:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(6070),o=i(1100);const r={},t="Isolation of modules",l={id:"reference/isolation/index",title:"Isolation of modules",description:"Within the framework of the methodology, all modules are distributed by scopes of responsibility (layer, slice, segment)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/isolation/index.md",sourceDirName:"reference/isolation",slug:"/reference/isolation/",permalink:"/uz/docs/reference/isolation/",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/isolation/index.md",tags:[],version:"current",lastUpdatedAt:172996169e4,frontMatter:{},sidebar:"referenceSidebar",previous:{title:"Public API",permalink:"/uz/docs/reference/public-api"},next:{title:"Low Coupling & High Cohesion",permalink:"/uz/docs/reference/isolation/coupling-cohesion"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Rule",id:"rule",level:2},{value:"Identifying problems",id:"identifying-problems",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"isolation-of-modules",children:"Isolation of modules"})}),"\n",(0,s.jsx)(n.p,{children:"Within the framework of the methodology, all modules are distributed by scopes of responsibility (layer, slice, segment)"}),"\n",(0,s.jsx)(n.p,{children:"The layers, in turn, are organized vertically:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"At the bottom" are the reused modules (ui-kit, internal libraries of the project), as the most abstract'}),"\n",(0,s.jsx)(n.li,{children:'And as you move "up", more specific modules are located.'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Regardless of whether it belongs to any slice, each module ",(0,s.jsx)(n.a,{href:"/docs/reference/public-api",children:(0,s.jsx)(n.strong,{children:"is required to provide a public access interface"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"The interaction of each module with the rest of the application is designed taking into account a number of requirements:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Low coupling"})," with other modules"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"A change in one module should have a weak and predictable effect on others"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"High cohesion"}),' - the responsibilities of each module are "focused" on one task']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'If the module has too many responsibilities (starts "doing too much") - this should be noticed as soon as possible'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Absence of cyclic dependencies"})," on the scale of the entire application"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Often lead to unexpected, undesirable behavior, it is better to avoid them altogether"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rule",children:"Rule"}),"\n",(0,s.jsx)(n.p,{children:"To meet these requirements, within the framework of the methodology, it is necessary to observe the basic rule:"}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"info",children:(0,s.jsx)(n.p,{children:'A module can depend only on "underlying" modules, but not on modules from the same or higher layer'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"features/auth"})," ",(0,s.jsx)(n.strong,{children:"cannot"})," depend on ",(0,s.jsx)(n.code,{children:"features/filters"})," ",(0,s.jsx)(n.strong,{children:"and vice versa"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"features/auth"})," ",(0,s.jsx)(n.strong,{children:"may"})," depend on ",(0,s.jsx)(n.code,{children:"shared/ui/button"}),", ",(0,s.jsx)(n.strong,{children:"but not vice versa"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Following this rule allows you to keep dependencies ",(0,s.jsx)(n.strong,{children:'"unidirectional"'})," - which automatically ",(0,s.jsx)(n.strong,{children:"eliminates cyclic imports"})," and significantly ",(0,s.jsx)(n.strong,{children:"simplifies tracking dependencies"})," between modules in the application."]}),"\n",(0,s.jsx)(n.h2,{id:"identifying-problems",children:"Identifying problems"}),"\n",(0,s.jsx)(n.p,{children:"Violation of this rule is a signal of problems:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The module has ",(0,s.jsx)(n.strong,{children:"import from another module"})," from its own layer"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Perhaps the module was ",(0,s.jsx)(n.strong,{children:"unnecessarily fragmented"})," or has ",(0,s.jsx)(n.strong,{children:"unnecessary responsibility."})]}),"\n",(0,s.jsxs)(n.li,{children:["You should ",(0,s.jsx)(n.strong,{children:"combine"})," it with the imported module or ",(0,s.jsx)(n.strong,{children:"move it (partially or completely) to the layer below"})," or transfer the logic of relationships to modules on higher layers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The module ",(0,s.jsx)(n.strong,{children:"is imported by many modules"})," from its own layer"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Perhaps the module has ",(0,s.jsx)(n.strong,{children:"extra responsibility."})]}),"\n",(0,s.jsxs)(n.li,{children:["You should ",(0,s.jsx)(n.strong,{children:"move it (partially or entirely) to the layer below"}),", or transfer the logic of connections to modules on higher layers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The module ",(0,s.jsx)(n.strong,{children:"has imports from many modules"})," from its own layer"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Perhaps the module belongs to ",(0,s.jsx)(n.strong,{children:"another scope of responsibility."})]}),"\n",(0,s.jsxs)(n.li,{children:["You should ",(0,s.jsx)(n.strong,{children:"move it (partially or completely) to the layer above"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/reference/isolation/coupling-cohesion",children:"(Guide) About achieving low coupling"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/49",children:"(Discussion) Coupled entities"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/65#discussioncomment-480822",children:"(Discussion) About cross-imports and analysis \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)",children:[(0,s.jsx)(n.strong,{children:"GRASP"})," Patterns"]})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1100:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(758);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);