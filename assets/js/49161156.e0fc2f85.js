"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["5824"],{9131:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"about/understanding/naming","title":"Naming","description":"Different developers have different experiences and contexts, which can lead to misunderstandings on the team when the same entities are called differently. For example:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/naming.md","sourceDirName":"about/understanding","slug":"/about/understanding/naming","permalink":"/docs/about/understanding/naming","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/naming.md","tags":[],"version":"current","lastUpdatedAt":1731974592000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"aboutSidebar","previous":{"title":"Knowledge types","permalink":"/docs/about/understanding/knowledge-types"},"next":{"title":"Signals of architecture","permalink":"/docs/about/understanding/signals"}}'),s=t("2676"),o=t("9938");let r={sidebar_position:4},a="Naming",c={},d=[{value:"Naming in Feature-Sliced Design",id:"naming-in-fsd",level:2},{value:"Naming Conflicts",id:"when-can-naming-interfere",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"naming",children:"Naming"})}),"\n",(0,s.jsx)(n.p,{children:"Different developers have different experiences and contexts, which can lead to misunderstandings on the team when the same entities are called differently. For example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Components for display can be called "ui", "components", "ui-kit", "views", \u2026'}),"\n",(0,s.jsx)(n.li,{children:'The code that is reused throughout the application can be called "core", "shared", "app", \u2026'}),"\n",(0,s.jsx)(n.li,{children:'Business logic code can be called "store", "model", "state", \u2026'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"naming-in-fsd",children:"Naming in Feature-Sliced Design"}),"\n",(0,s.jsx)(n.p,{children:"The methodology uses specific terms such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"app", "process", "page", "feature", "entity", "shared" as layer names,'}),"\n",(0,s.jsx)(n.li,{children:'"ui\', "model", "lib", "api", "config" as segment names.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is very important to stick to these terms to prevent confusion among team members and new developers joining the project. Using standard names also helps when asking for help from the community."}),"\n",(0,s.jsx)(n.h2,{id:"when-can-naming-interfere",children:"Naming Conflicts"}),"\n",(0,s.jsx)(n.p,{children:"Naming conflicts can occur when terms used in the FSD methodology overlap with terms used in the business:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FSD#process"})," vs simulated process in an application,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FSD#page"})," vs log page,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FSD#model"})," vs car model."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['For example, a developer who sees the word "process" in the code will spend extra time trying to figure out what process is meant. Such ',(0,s.jsx)(n.strong,{children:"collisions can disrupt the development process"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When the project glossary contains terminology specific to FSD, it is critical to be careful when discussing these terms with the team and technical disinterested parties."}),"\n",(0,s.jsx)(n.p,{children:'To communicate effectively with the team, it is recommended that the abbreviation "FSD" be used to prefix the methodology terms. For example, when talking about a process, you might say, "We can put this process on the FSD features layer."'}),"\n",(0,s.jsx)(n.p,{children:"Conversely, when communicating with non-technical stakeholders, it is better to limit the use of FSD terminology and refrain from mentioning the internal structure of the code base."}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/16",children:"(Discussion) Adaptability of naming"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894",children:"(Discussion) Entity Naming Survey"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/20",children:'(Discussion) "processes" vs "flows" vs ...'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/feature-sliced/documentation/discussions/68",children:'(Discussion) "model" vs "store" vs ...'})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(5271);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);