"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5687],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(6600),a=(n(9496),n(9613));const r={sidebar_position:4},o="Naming",s={unversionedId:"about/understanding/naming",id:"about/understanding/naming",title:"Naming",description:"Different developers have different experiences and contexts, which can lead to misunderstandings on the team when the same entities are called differently. For example:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/naming.md",sourceDirName:"about/understanding",slug:"/about/understanding/naming",permalink:"/uz/docs/about/understanding/naming",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/naming.md",tags:[],version:"current",lastUpdatedAt:1693685730,formattedLastUpdatedAt:"2-sen, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"aboutSidebar",previous:{title:"Knowledge types",permalink:"/uz/docs/about/understanding/knowledge-types"},next:{title:"Signals of architecture",permalink:"/uz/docs/about/understanding/signals"}},l={},c=[{value:"Naming in Feature-Sliced Design",id:"naming-in-fsd",level:2},{value:"Naming Conflicts",id:"when-can-naming-interfere",level:2},{value:"See also",id:"see-also",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"naming"},"Naming"),(0,a.kt)("p",null,"Different developers have different experiences and contexts, which can lead to misunderstandings on the team when the same entities are called differently. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Components for display can be called "ui", "components", "ui-kit", "views", \u2026'),(0,a.kt)("li",{parentName:"ul"},'The code that is reused throughout the application can be called "core", "shared", "app", \u2026'),(0,a.kt)("li",{parentName:"ul"},'Business logic code can be called "store", "model", "state", \u2026')),(0,a.kt)("h2",{id:"naming-in-fsd"},"Naming in Feature-Sliced Design"),(0,a.kt)("p",null,"The methodology uses specific terms such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"app", "process", "page", "feature", "entity", "shared" as layer names,'),(0,a.kt)("li",{parentName:"ul"},'"ui\', "model", "lib", "api", "config" as segment names.')),(0,a.kt)("p",null,"It is very important to stick to these terms to prevent confusion among team members and new developers joining the project. Using standard names also helps when asking for help from the community."),(0,a.kt)("h2",{id:"when-can-naming-interfere"},"Naming Conflicts"),(0,a.kt)("p",null,"Naming conflicts can occur when terms used in the FSD methodology overlap with terms used in the business:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FSD#process")," vs simulated process in an application,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FSD#page")," vs log page,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FSD#model")," vs car model.")),(0,a.kt)("p",null,'For example, a developer who sees the word "process" in the code will spend extra time trying to figure out what process is meant. Such ',(0,a.kt)("strong",{parentName:"p"},"collisions can disrupt the development process"),"."),(0,a.kt)("p",null,"When the project glossary contains terminology specific to FSD, it is critical to be careful when discussing these terms with the team and technical disinterested parties."),(0,a.kt)("p",null,'To communicate effectively with the team, it is recommended that the abbreviation "FSD" be used to prefix the methodology terms. For example, when talking about a process, you might say, "We can put this process on the FSD features layer."'),(0,a.kt)("p",null,"Conversely, when communicating with non-technical stakeholders, it is better to limit the use of FSD terminology and refrain from mentioning the internal structure of the code base."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/16"},"(Discussion) Adaptability of naming")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-464894"},"(Discussion) Entity Naming Survey")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},'(Discussion) "processes" vs "flows" vs ...')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/68"},'(Discussion) "model" vs "store" vs ...'))))}d.isMDXComponent=!0}}]);