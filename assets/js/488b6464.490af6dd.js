"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2005],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7622),i=(n(9496),n(9613));const a={sidebar_position:1},r="Low Coupling & High Cohesion",l={unversionedId:"reference/isolation/coupling-cohesion",id:"reference/isolation/coupling-cohesion",title:"Low Coupling & High Cohesion",description:"Application modules should be designed according to high cohesion (should solve one specific task) and low coupling (independent of other modules) principles.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",sourceDirName:"reference/isolation",slug:"/reference/isolation/coupling-cohesion",permalink:"/docs/reference/isolation/coupling-cohesion",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",tags:[],version:"current",lastUpdatedAt:1697145941,formattedLastUpdatedAt:"Oct 12, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"Isolation of modules",permalink:"/docs/reference/isolation/"},next:{title:"Decouple entities",permalink:"/docs/reference/isolation/decouple-entities"}},s={},c=[{value:"Components composition (UI level)",id:"components-composition-ui-level",level:2},{value:"Example",id:"example",level:3},{value:"Laying the extensibility",id:"laying-the-extensibility",level:4},{value:"Using the composition",id:"using-the-composition",level:4},{value:"Layer composition (APP level)",id:"layer-composition-app-level",level:2},{value:"Example",id:"example-1",level:3},{value:"Let&#39;s tie it all together",id:"lets-tie-it-all-together",level:4},{value:"Data model",id:"data-model",level:4},{value:"Summary",id:"summary",level:2},{value:"See also",id:"see-also",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"low-coupling--high-cohesion"},"Low Coupling & High Cohesion"),(0,i.kt)("p",null,"Application modules should be designed according to ",(0,i.kt)("strong",{parentName:"p"},"high cohesion")," (should solve one specific task) and ",(0,i.kt)("strong",{parentName:"p"},"low coupling")," (independent of other modules) principles."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"coupling-cohesion-themed",src:n(4446).Z,width:"1024",height:"1024"})),(0,i.kt)("p",null,"Within the methodology, this is achieved through:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Splitting the application into layers and slices that implement specific functionality"),(0,i.kt)("li",{parentName:"ul"},"Providing a ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/public-api"},"public access interface")," for each module"),(0,i.kt)("li",{parentName:"ul"},"Setting up restrictions for ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/isolation"},"modules interactions")," - each module can depend only on the modules below it, but not on modules from the same or higher layer")),(0,i.kt)("h2",{id:"components-composition-ui-level"},"Components composition (UI level)"),(0,i.kt)("p",null,"The majority of modern UI frameworks and libraries provide a component model in which each component can have its own properties, state, child components, and even slots."),(0,i.kt)("p",null,"This model allows you to design an interface as a ",(0,i.kt)("strong",{parentName:"p"},"composition of various components that are not directly related to each other")," and, thereby, achieve ",(0,i.kt)("strong",{parentName:"p"},"low coupling")," of the interface components."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's consider such a composition using the example of a ",(0,i.kt)("strong",{parentName:"p"},"list with a header:")),(0,i.kt)("h4",{id:"laying-the-extensibility"},"Laying the extensibility"),(0,i.kt)("p",null,"List component will not itself define the look and structure of the header components and list elements, instead it will accept them as parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'interface ListProps {\n    Header: React.ReactNode;\n    Items: React.ReactNode;\n}\n\nconst List: Component<ListProps> = ({ Header, Items }) => (\n    <div class="wrapper">\n        {Header}\n        <ul class="...">\n            {Items}\n        </ul>\n    </div>\n)\n\n')),(0,i.kt)("h4",{id:"using-the-composition"},"Using the composition"),(0,i.kt)("p",null,"This allows you to ",(0,i.kt)("strong",{parentName:"p"},"reuse and independently change")," components with different Header and list Items. Header and Items components can have both their own local state and their binding to the general state of the application - the List component will not know anything about it, and therefore will not depend on it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<List Header={<FancyHeader />} Items={<ToDoItems />} />\n\n<List Items={<CartItems />} />\n\n<List Header={<FancyHeaderV2 color="red" />} Items={<FancyItems />} />\n\n')),(0,i.kt)("h2",{id:"layer-composition-app-level"},"Layer composition (APP level)"),(0,i.kt)("p",null,"The methodology suggests putting the functionality that is valuable for the user into ",(0,i.kt)("strong",{parentName:"p"},"features slice"),", and the logic related to business entities - into ",(0,i.kt)("strong",{parentName:"p"},"entities"),". Both features and entities ",(0,i.kt)("strong",{parentName:"p"},"should be designed as modules with high cohesion"),", i.e. aimed at solving ",(0,i.kt)("strong",{parentName:"p"},"one specific task")," or related to ",(0,i.kt)("strong",{parentName:"p"},"one specific entity.")),(0,i.kt)("p",null,"All interactions between such modules, similar to the UI components from the example above, should be coordinated via a ",(0,i.kt)("strong",{parentName:"p"},"modules composition"),"."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Let's use an example of a chat application with the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"user can open a contact list and select a friend"),(0,i.kt)("li",{parentName:"ul"},"user can open a conversation with a selected friend")),(0,i.kt)("p",null,"According to methodology principles, it can be represented as:"),(0,i.kt)("p",null,"Entities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User (contains user's state)"),(0,i.kt)("li",{parentName:"ul"},"Contact (state of the contact list, utilities for working with an individual contact)"),(0,i.kt)("li",{parentName:"ul"},"Chat (the state of the current chat and utilies for it)")),(0,i.kt)("p",null,"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Form for sending a message"),(0,i.kt)("li",{parentName:"ul"},"Chat selection menu")),(0,i.kt)("h4",{id:"lets-tie-it-all-together"},"Let's tie it all together"),(0,i.kt)("p",null,"The application, to begin with, will have one page, and the interface will be slightly modified from the first example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=page/main/ui.tsx",title:"page/main/ui.tsx"},"<List\n    Header={<ConversationSwitch />}\n    Items={<Messages />}\n    Footer={<MessageInput />}\n/>\n")),(0,i.kt)("h4",{id:"data-model"},"Data model"),(0,i.kt)("p",null,"The page data model will be organized as a ",(0,i.kt)("strong",{parentName:"p"},"composition of features and entities"),". In this example, the features will be implemented as factories and they will access the interface of entities through the parameters of these factories."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"However, the implementation using factory is optional - the feature may directly depend on the lower layers.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=pages/main/model.ts",title:"pages/main/model.ts"},'import { userModel } from "entitites/user"\nimport { conversationModel } from "entities/conversation"\nimport { contactModel } from "entities/contact"\n\nimport { createMessageInput } from "features/message-input"\nimport { createConversationSwitch } from "features/conversation-switch"\n\nimport { beautifiy } from "shared/lib/beautify-text"\n\nexport const { allConversations, setConversation } = createConversationSwitch({\n    contacts: contactModel.allContacts,\n    setConversation: conversationModel.setConversation,\n    currentConversation: conversationModel.conversation,\n    currentUser: userModel.currentUser\n})\n\nexport const { sendMessage, attachFile } = createMessageInput({\n    author: userModel.currentUser\n    send: conversationModel.sendMessage,\n    formatMessage: beautify\n})\n')),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Modules must have ",(0,i.kt)("strong",{parentName:"li"},"high cohesion")," (have one responsibility, solve one specific task) and provide a ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/public-api"},(0,i.kt)("strong",{parentName:"a"},"public interface"))," access"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Low coupling")," is achieved through the composition of elements - UI components, features and entities"),(0,i.kt)("li",{parentName:"ol"},"To reduce entanglement, modules ",(0,i.kt)("strong",{parentName:"li"},"should interact with each other only through a public interfaces")," - this makes modules independent of each other's internal implementation")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/"},"(Article) Low Coupling and High Cohesion in details"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The diagram at the beginning is inspired by this article")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9"},"(Article) Low Coupling and High Cohesion. The Law of Demeter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.slideshare.net/cristalngo/software-design-principles-57388843"},"(Presentation) On design principles (including Low Coupling & High Cohesion)"))))}m.isMDXComponent=!0},4446:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/coupling-ca24ecbbb9b4595e100e3e990025ed73.png"}}]);