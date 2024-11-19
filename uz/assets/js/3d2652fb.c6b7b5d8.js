"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["9113"],{2039:function(e,i,n){n.r(i),n.d(i,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"reference/public-api","title":"Public API","description":"A public API is a contract between a group of modules, like a slice, and the code that uses it. It also acts as a gate, only allowing access to certain objects, and only through that public API.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/public-api.md","sourceDirName":"reference","slug":"/reference/public-api","permalink":"/uz/docs/reference/public-api","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/public-api.md","tags":[],"version":"current","lastUpdatedAt":1731974592000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"referenceSidebar","previous":{"title":"Slices and segments","permalink":"/uz/docs/reference/slices-segments"}}'),t=n("2676"),r=n("9938");let o={sidebar_position:3},a="Public API",l={},c=[{value:"What makes a good public API?",id:"what-makes-a-good-public-api",level:2},{value:"Public API for cross-imports",id:"public-api-for-cross-imports",level:2},{value:"Issues with index files",id:"issues-with-index-files",level:2},{value:"Circular imports",id:"circular-imports",level:3},{value:"Large bundles and broken tree-shaking in Shared",id:"large-bundles",level:3},{value:"No real protection against side-stepping the public API",id:"no-real-protection-against-side-stepping-the-public-api",level:3},{value:"Worse performance of bundlers on large projects",id:"worse-performance-of-bundlers-on-large-projects",level:3}];function d(e){let i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"public-api",children:"Public API"})}),"\n",(0,t.jsxs)(i.p,{children:["A public API is a ",(0,t.jsx)(i.em,{children:"contract"})," between a group of modules, like a slice, and the code that uses it. It also acts as a gate, only allowing access to certain objects, and only through that public API."]}),"\n",(0,t.jsx)(i.p,{children:"In practice, it's usually implemented as an index file with re-exports:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:'title="pages/auth/index.js"',children:'export { LoginPage } from "./ui/LoginPage";\nexport { RegisterPage } from "./ui/RegisterPage";\n'})}),"\n",(0,t.jsx)(i.h2,{id:"what-makes-a-good-public-api",children:"What makes a good public API?"}),"\n",(0,t.jsx)(i.p,{children:"A good public API makes using and integrating into other code a slice convenient and reliable. It can be achieved by setting these three goals:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"The rest of the application must be protected from structural changes to the slice, like a refactoring"}),"\n",(0,t.jsx)(i.li,{children:"Significant changes in the behavior of the slice that break the previous expectations should cause changes in the public API"}),"\n",(0,t.jsx)(i.li,{children:"Only the necessary parts of the slice should be exposed"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The last goal has some important practical implications. It may be tempting to create wildcard re-exports of everything, especially in early development of the slice, because any new objects you export from your files are also automatically exported from the slice:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:'title="Bad practice, features/comments/index.js"',children:'// \u274C BAD CODE BELOW, DON\'T DO THIS\nexport * from "./ui/Comment";  // \uD83D\uDC4E don\'t try this at home\nexport * from "./model/comments";  // \uD83D\uDCA9 this is bad practice\n'})}),"\n",(0,t.jsx)(i.p,{children:"This hurts the discoverability of a slice because you can't easily tell what the interface of this slice is. Not knowing the interface means that you have to dig deep into the code of a slice to understand how to integrate it. Another problem is that you might accidentally expose the module internals accidentally, which will make refactoring difficult if someone starts depending on them."}),"\n",(0,t.jsx)(i.h2,{id:"public-api-for-cross-imports",children:"Public API for cross-imports"}),"\n",(0,t.jsxs)(i.p,{children:["Cross-imports are a situation when one slice imports from another slice on the same layer. Usually that is prohibited by the ",(0,t.jsx)(i.a,{href:"/docs/reference/layers#import-rule-on-layers",children:"import rule on layers"}),", but often there are legitimate reasons to cross-import. For example, business entities often reference each other in the real world, and it's best to reflect these relationships in the code instead of working around them."]}),"\n",(0,t.jsxs)(i.p,{children:["For this purpose, there's a special kind of public API, also known as the ",(0,t.jsx)(i.code,{children:"@x"}),"-notation. If you have entities A and B, and entity B needs to import from entity A, then entity A can declare a separate public API just for entity B."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC2 entities"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC2 A"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC2 @x"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC4 B.ts"})," \u2014 a special public API just for code inside ",(0,t.jsx)(i.code,{children:"entities/B/"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC4 index.ts"})," \u2014 the regular public API"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Then the code inside ",(0,t.jsx)(i.code,{children:"entities/B/"})," can import from ",(0,t.jsx)(i.code,{children:"entities/A/@x/B"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:'import type { EntityA } from "entities/A/@x/B";\n'})}),"\n",(0,t.jsxs)(i.p,{children:["The notation ",(0,t.jsx)(i.code,{children:"A/@x/B"}),' is meant to be read as "A crossed with B".']}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Try to keep cross-imports to a minimum, and ",(0,t.jsx)(i.strong,{children:"only use this notation on the Entities layer"}),", where eliminating cross-imports is often unreasonable."]})}),"\n",(0,t.jsx)(i.h2,{id:"issues-with-index-files",children:"Issues with index files"}),"\n",(0,t.jsxs)(i.p,{children:["Index files like ",(0,t.jsx)(i.code,{children:"index.js"}),", also known as barrel files, are the most common way to define a public API. They are easy to make, but they are known to cause problems with certain bundlers and frameworks."]}),"\n",(0,t.jsx)(i.h3,{id:"circular-imports",children:"Circular imports"}),"\n",(0,t.jsx)(i.p,{children:"Circular import is when two or more files import each other in a circle."}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:"/img/circular-import-light.svg#light-mode-only",width:"60%",alt:"Three files importing each other in a circle"}),(0,t.jsx)("img",{src:"/img/circular-import-dark.svg#dark-mode-only",width:"60%",alt:"Three files importing each other in a circle"}),(0,t.jsx)("figcaption",{children:(0,t.jsxs)(i.p,{children:["Pictured above: three files, ",(0,t.jsx)(i.code,{children:"fileA.js"}),", ",(0,t.jsx)(i.code,{children:"fileB.js"}),", and ",(0,t.jsx)(i.code,{children:"fileC.js"}),", importing each other in a circle."]})})]}),"\n",(0,t.jsx)(i.p,{children:"These situations are often difficult for bundlers to deal with, and in some cases they might even lead to runtime errors that might be difficult to debug."}),"\n",(0,t.jsxs)(i.p,{children:["Circular imports can occur without index files, but having an index file presents a clear opporutnity to accidentally create a circular import. It often happens when you have two objects exposed in the public API of a slice, for example, ",(0,t.jsx)(i.code,{children:"HomePage"})," and ",(0,t.jsx)(i.code,{children:"loadUserStatistics"}),", and the ",(0,t.jsx)(i.code,{children:"HomePage"})," needs to access ",(0,t.jsx)(i.code,{children:"loadUserStatistics"}),", but it does it like this:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",metastring:'title="pages/home/ui/HomePage.jsx"',children:'import { loadUserStatistics } from "../"; // importing from pages/home/index.js\n\nexport function HomePage() { /* \u2026 */ }\n'})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:'title="pages/home/index.js"',children:'export { HomePage } from "./ui/HomePage";\nexport { loadUserStatistics } from "./api/loadUserStatistics";\n'})}),"\n",(0,t.jsxs)(i.p,{children:["This situation creates a circular import, because ",(0,t.jsx)(i.code,{children:"index.js"})," imports ",(0,t.jsx)(i.code,{children:"ui/HomePage.jsx"}),", but ",(0,t.jsx)(i.code,{children:"ui/HomePage.jsx"})," imports ",(0,t.jsx)(i.code,{children:"index.js"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"To prevent this issue, consider these two principles. If you have two files, and one imports from the other:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["When they are in the same slice, always use ",(0,t.jsx)(i.em,{children:"relative"})," imports and write the full import path"]}),"\n",(0,t.jsxs)(i.li,{children:["When they are in different slices, always use ",(0,t.jsx)(i.em,{children:"absolute"})," imports, for example, with an alias"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"large-bundles",children:"Large bundles and broken tree-shaking in Shared"}),"\n",(0,t.jsx)(i.p,{children:"Some bundlers might have a hard time tree-shaking (removing code that isn't imported) when you have an index file that re-exports everything."}),"\n",(0,t.jsxs)(i.p,{children:["Usually this isn't a problem for public APIs, because the contents of a module are usually quite closely related, so you would rarely need to import one thing and tree-shake away the other. However, there are two very common cases when the normal rules of public API in FSD may lead to issues \u2014 ",(0,t.jsx)(i.code,{children:"shared/ui"})," and ",(0,t.jsx)(i.code,{children:"shared/lib"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["These two folders are both collections of unrelated things that often aren't all needed in one place. For example, ",(0,t.jsx)(i.code,{children:"shared/ui"})," might have modules for every component in the UI library:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC2 shared/ui/"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"\uD83D\uDCC1 button"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"\uD83D\uDCC1 text-field"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"\uD83D\uDCC1 carousel"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"\uD83D\uDCC1 accordion"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["This problem is made worse when one of these modules has a heavy dependency, like a syntax highlighter or a drag'n'drop library. You don't want to pull those into every page that uses something from ",(0,t.jsx)(i.code,{children:"shared/ui"}),", for example, a button."]}),"\n",(0,t.jsxs)(i.p,{children:["If your bundles grow undesirably due to a single public API in ",(0,t.jsx)(i.code,{children:"shared/ui"})," or ",(0,t.jsx)(i.code,{children:"shared/lib"}),", it's recommended to instead have a separate index file for each component or library:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC2 shared/ui/"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC2 button"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"\uD83D\uDCC4 index.js"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"\uD83D\uDCC2 text-field"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"\uD83D\uDCC4 index.js"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Then the consumers of these components can import them directly like this:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:'title="pages/sign-in/ui/SignInPage.jsx"',children:"import { Button } from '@/shared/ui/button';\nimport { TextField } from '@/shared/ui/text-field';\n"})}),"\n",(0,t.jsx)(i.h3,{id:"no-real-protection-against-side-stepping-the-public-api",children:"No real protection against side-stepping the public API"}),"\n",(0,t.jsx)(i.p,{children:"When you create an index file for a slice, you don't actually forbid anyone from not using it and importing directly. This is especially a problem for auto-imports, because there are several places from which an object can be imported, so the IDE has to decide that for you. Sometimes it might choose to import directly, breaking the public API rule on slices."}),"\n",(0,t.jsxs)(i.p,{children:["To catch these issues automatically, we recommend using ",(0,t.jsx)(i.a,{href:"https://github.com/feature-sliced/steiger",children:"Steiger"}),", an architectural linter with a ruleset for Feature-Sliced Design."]}),"\n",(0,t.jsx)(i.h3,{id:"worse-performance-of-bundlers-on-large-projects",children:"Worse performance of bundlers on large projects"}),"\n",(0,t.jsxs)(i.p,{children:["Having a large amount of index files in a project can slow down the development server, as noted by TkDodo in ",(0,t.jsx)(i.a,{href:"https://tkdodo.eu/blog/please-stop-using-barrel-files",children:'his article "Please Stop Using Barrel Files"'}),"."]}),"\n",(0,t.jsx)(i.p,{children:"There are several things you can do to tackle this issue:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The same advice as in ",(0,t.jsx)(i.a,{href:"#large-bundles",children:'"Large bundles and broken tree-shaking in Shared" issue'})," \u2014 have separate index files for each component/library in ",(0,t.jsx)(i.code,{children:"shared/ui"})," and ",(0,t.jsx)(i.code,{children:"shared/lib"})," instead of one big one"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Avoid having index files in segments on layers that have slices.",(0,t.jsx)(i.br,{}),"\n",'For example, if you have an index for the feature "comments", ',(0,t.jsx)(i.code,{children:"\uD83D\uDCC4 features/comments/index.js"}),", there's no reason to have another index for the ",(0,t.jsx)(i.code,{children:"ui"})," segment of that feature, ",(0,t.jsx)(i.code,{children:"\uD83D\uDCC4 features/comments/ui/index.js"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["If you have a very big project, there's a good chance that your application can be split into several big chunks.",(0,t.jsx)(i.br,{}),"\n","For example, Google Docs has very different responsibilities for the document editor and for the file browser. You can create a monorepo setup where each package is a separate FSD root, with its own set of layers. Some packages can only have the Shared and Entities layers, others might only have Pages and App, others still might include their own small Shared, but still use the big one from another package too."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9938:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return o}});var s=n(5271);let t={},r=s.createContext(t);function o(e){let i=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);