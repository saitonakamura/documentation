"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3449],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(6600),a=(n(9496),n(9613));const o={sidebar_position:1},i="About architecture",l={unversionedId:"about/understanding/architecture",id:"about/understanding/architecture",title:"About architecture",description:"Problems",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/architecture.md",sourceDirName:"about/understanding",slug:"/about/understanding/architecture",permalink:"/uz/docs/about/understanding/architecture",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/architecture.md",tags:[],version:"current",lastUpdatedAt:1693685730,formattedLastUpdatedAt:"2-sen, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"aboutSidebar",previous:{title:"Alternatives",permalink:"/uz/docs/about/alternatives"},next:{title:"Needs driven",permalink:"/uz/docs/about/understanding/needs-driven"}},s={},u=[{value:"Problems",id:"problems",level:2},{value:"Bus-factor &amp; Onboarding",id:"bus-factor--onboarding",level:3},{value:"Implicit and uncontrolled consequences",id:"implicit-and-uncontrolled-consequences",level:3},{value:"Uncontrolled reuse of logic",id:"uncontrolled-reuse-of-logic",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Explicitness",id:"explicitness",level:3},{value:"Control",id:"control",level:3},{value:"Adaptability",id:"adaptability",level:3},{value:"See also",id:"see-also",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-architecture"},"About architecture"),(0,a.kt)("h2",{id:"problems"},"Problems"),(0,a.kt)("p",null,"Usually, the conversation about architecture is raised when the development stops due to certain problems in the project."),(0,a.kt)("h3",{id:"bus-factor--onboarding"},"Bus-factor & Onboarding"),(0,a.kt)("p",null,"Only a limited number of people understand the project and its architecture"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"It\'s difficult to add a person to the development"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"For every problem, everyone has their own opinion on how to get around" (let\'s envy the angular)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"I don\'t understand what is happening in this big piece of monolith"'))),(0,a.kt)("h3",{id:"implicit-and-uncontrolled-consequences"},"Implicit and uncontrolled consequences"),(0,a.kt)("p",null,"A lot of implicit side effects during development/refactoring ",(0,a.kt)("em",{parentName:"p"},'("everything depends on everything")')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"The feature imports the feature"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"I updated the store of one page, and the functionality fell off on the other"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"The logic is smeared all over the application, and it is impossible to track where the beginning is, where the end is"'))),(0,a.kt)("h3",{id:"uncontrolled-reuse-of-logic"},"Uncontrolled reuse of logic"),(0,a.kt)("p",null,"It is difficult to reuse/modify existing logic"),(0,a.kt)("p",null,"At the same time, there are usually ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/14"},"two extremes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Either the logic is written completely from scratch for each module ",(0,a.kt)("em",{parentName:"li"},"(with possible repetitions in the existing codebase)")),(0,a.kt)("li",{parentName:"ul"},"Either there is a tendency to transfer all-all implemented modules to ",(0,a.kt)("inlineCode",{parentName:"li"},"shared")," folders, thereby creating a large dump of modules ",(0,a.kt)("em",{parentName:"li"},"from it (where most are used only in one place)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"I have ',(0,a.kt)("strong",{parentName:"em"},"N"),' implementations of the same business logic in my project, for which I still pay"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"There are 6 different components of the button/pop-up/... In the project"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'"Dump of helpers"'))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Therefore, it seems logical to present the desired ",(0,a.kt)("em",{parentName:"p"},"requirements for an ideal architecture:")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'Wherever it says "easy", it means "relatively easy for a wide range of developers", because it is clear that ',(0,a.kt)("a",{parentName:"p",href:"/docs/about/mission#restrictions"},"it will not be possible to make an ideal solution for absolutely everyone"))),(0,a.kt)("h3",{id:"explicitness"},"Explicitness"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It should be ",(0,a.kt)("strong",{parentName:"li"},"easy to master and explain")," the project and its architecture to the team"),(0,a.kt)("li",{parentName:"ul"},"The structure should reflect the real ",(0,a.kt)("strong",{parentName:"li"},"business values of the project")),(0,a.kt)("li",{parentName:"ul"},"There must be explicit ",(0,a.kt)("strong",{parentName:"li"},"side effects and connections")," between abstractions"),(0,a.kt)("li",{parentName:"ul"},"It should be ",(0,a.kt)("strong",{parentName:"li"},"easy to detect duplicate logic")," without interfering with unique implementations"),(0,a.kt)("li",{parentName:"ul"},"There should be no ",(0,a.kt)("strong",{parentName:"li"},"dispersion of logic")," throughout the project"),(0,a.kt)("li",{parentName:"ul"},"There should not be ",(0,a.kt)("strong",{parentName:"li"},"too many heterogeneous abstractions and rules")," for a good architecture")),(0,a.kt)("h3",{id:"control"},"Control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A good architecture should ",(0,a.kt)("strong",{parentName:"li"},"speed up the solution of tasks, the introduction of features")),(0,a.kt)("li",{parentName:"ul"},"It should be possible to control the development of the project"),(0,a.kt)("li",{parentName:"ul"},"It should be easy to ",(0,a.kt)("strong",{parentName:"li"},"expand, modify, delete the code")),(0,a.kt)("li",{parentName:"ul"},"The * decomposition and isolation of** functionality must be observed"),(0,a.kt)("li",{parentName:"ul"},"Each component of the system must be ",(0,a.kt)("strong",{parentName:"li"},"easily replaceable and removable"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://youtu.be/BWAeYuWFHhs?t=1631"},"No need to optimize for changes")," - we can't predict the future")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://youtu.be/BWAeYuWFHhs?t=1666"},"Better-optimize for deletion")," - based on the context that already exists"))))),(0,a.kt)("h3",{id:"adaptability"},"Adaptability"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A good architecture should be applicable ",(0,a.kt)("strong",{parentName:"li"},"to most projects"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"With existing infrastructure solutions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"At any stage of development")))),(0,a.kt)("li",{parentName:"ul"},"There should be no dependence on the framework and platform"),(0,a.kt)("li",{parentName:"ul"},"It should be possible to ",(0,a.kt)("strong",{parentName:"li"},"easily scale the project and the team"),", with the possibility of parallelization of development"),(0,a.kt)("li",{parentName:"ul"},"It should be easy ",(0,a.kt)("strong",{parentName:"li"},"to adapt to changing requirements and circumstances"))),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/BWAeYuWFHhs"},"(React Berlin Talk) Oleg Isonen - Feature Driven Architecture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://t.me/feature_slices"},"(React SPB Meetup #1) Sergey Sova - Feature Slices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://alexmngn.medium.com/why-react-developers-should-modularize-their-applications-d26d381854c1"},"(Article) About project modularization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/"},"(Article) About Separation of Concerns and structuring by features"))))}c.isMDXComponent=!0}}]);