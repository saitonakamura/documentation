"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5397],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7622),a=(n(9496),n(9613));const o={sidebar_position:1},i="Low Coupling & High Cohesion",l={unversionedId:"reference/isolation/coupling-cohesion",id:"reference/isolation/coupling-cohesion",title:"Low Coupling & High Cohesion",description:"\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e (\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u0447\u0435\u0442\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438) \u0438 \u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e (\u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u0435\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439)",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",sourceDirName:"reference/isolation",slug:"/reference/isolation/coupling-cohesion",permalink:"/ru/docs/reference/isolation/coupling-cohesion",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",tags:[],version:"current",lastUpdatedAt:1697145941,formattedLastUpdatedAt:"12 \u043e\u043a\u0442. 2023 \u0433.",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"\u0418\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u0435\u0439",permalink:"/ru/docs/reference/isolation/"},next:{title:"Decouple entities",permalink:"/ru/docs/reference/isolation/decouple-entities"}},s={},p=[{value:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 (UI level)",id:"components-composition-ui-level",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"example",level:3},{value:"\u0417\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0441\u0442\u044c",id:"laying-the-extensibility",level:4},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e",id:"using-the-composition",level:4},{value:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0441\u043b\u043e\u0435\u0432 (APP level)",id:"layer-composition-app-level",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"example",level:3},{value:"\u0421\u0432\u044f\u0436\u0435\u043c \u0432\u0441\u0435 \u044d\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u0435",id:"lets-tie-it-all-together",level:4},{value:"\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445",id:"data-model",level:4},{value:"\u0418\u0442\u043e\u0433\u043e",id:"summary",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"low-coupling--high-cohesion"},"Low Coupling & High Cohesion"),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0438\u0435 ",(0,a.kt)("strong",{parentName:"p"},"\u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e")," (\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u0447\u0435\u0442\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438) \u0438 ",(0,a.kt)("strong",{parentName:"p"},"\u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e")," (\u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u0435\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"coupling-cohesion-themed",src:n(4446).Z,width:"1024",height:"1024"})),(0,a.kt)("p",null,"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u044d\u0442\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u043b\u043e\u0438 \u0438 \u0441\u043b\u0430\u0439\u0441\u044b - \u043c\u043e\u0434\u0443\u043b\u0438, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c."),(0,a.kt)("li",{parentName:"ul"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0435 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044e - \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/public-api"},"\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430")),(0,a.kt)("li",{parentName:"ul"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043d\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/isolation"},"\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439"),' - \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 "\u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445" \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043d\u043e \u043d\u0435 \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441 \u0442\u043e\u0433\u043e \u0436\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0441\u043b\u043e\u044f.')),(0,a.kt)("h2",{id:"components-composition-ui-level"},"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 (UI level)"),(0,a.kt)("p",null,"\u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 UI-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435, \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044e, \u0441\u043b\u043e\u0442\u044b."),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043a\u0430\u043a ",(0,a.kt)("strong",{parentName:"p"},"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445, \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432")," \u0438, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c, \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c ",(0,a.kt)("strong",{parentName:"p"},"\u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"),(0,a.kt)("h3",{id:"example"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u043a\u0443\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 ",(0,a.kt)("strong",{parentName:"p"},"\u0441\u043f\u0438\u0441\u043a\u0430 \u0441 \u0445\u0435\u0434\u0435\u0440\u043e\u043c:")),(0,a.kt)("h4",{id:"laying-the-extensibility"},"\u0417\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0441\u0442\u044c"),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0432\u0438\u0434 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430, \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0438\u0445 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'interface ListProps {\n    Header: React.ReactNode;\n    Items: React.ReactNode;\n}\n\nconst List: Component<ListProps> = ({ Header, Items }) => (\n    <div class="wrapper">\n        {Header}\n        <ul class="...">\n            {Items}\n        </ul>\n    </div>\n)\n\n')),(0,a.kt)("h4",{id:"using-the-composition"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e"),(0,a.kt)("p",null,"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u043a\u0430\u043a \u0441\u0432\u043e\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u0442\u0430\u043a \u0438 \u0441\u0432\u043e\u044e \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0443 \u043a \u043b\u044e\u0431\u044b\u043c \u0447\u0430\u0441\u0442\u044f\u043c \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f - \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043f\u0440\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0442\u044c, \u0430 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<List Header={<FancyHeader />} Items={<ToDoItems />} />\n\n<List Items={<CartItems />} />\n\n<List Header={<FancyHeaderV2 color="red" />} Items={<FancyItems />} />\n\n')),(0,a.kt)("h2",{id:"layer-composition-app-level"},"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0441\u043b\u043e\u0435\u0432 (APP level)"),(0,a.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c \u0446\u0435\u043d\u043d\u0443\u044e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 - ",(0,a.kt)("strong",{parentName:"p"},"\u0444\u0438\u0447\u0438 (features)"),", \u0430 \u043b\u043e\u0433\u0438\u043a\u0443, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0443\u044e\u0441\u044f \u043a \u0431\u0438\u0437\u043d\u0435\u0441 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c - \u0432 ",(0,a.kt)("strong",{parentName:"p"},"\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 (entities)"),". \u0418 \u0444\u0438\u0447\u0438, \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 ",(0,a.kt)("strong",{parentName:"p"},"\u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0432\u044b\u0441\u043e\u043a\u043e-\u0441\u0432\u044f\u0437\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438"),", \u0442.\u0435. \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 ",(0,a.kt)("strong",{parentName:"p"},"\u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438")," \u0438\u043b\u0438 \u0441\u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u043e\u043a\u0440\u0443\u0433 ",(0,a.kt)("strong",{parentName:"p"},"\u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438.")),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0442\u0430\u043a\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e UI-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c \u0438\u0437 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u0448\u0435, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a ",(0,a.kt)("strong",{parentName:"p"},"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439.")),(0,a.kt)("h3",{id:"example"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("p",null,"\u041d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0447\u0430\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443 \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0434\u0440\u0443\u0433\u043e\u043c")),(0,a.kt)("p",null,"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a:"),(0,a.kt)("p",null,"Entities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c (\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 (\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u043c)"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0430 (\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0438 \u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0439)")),(0,a.kt)("p",null,"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u0435\u043d\u044e \u0432\u044b\u0431\u043e\u0440\u0430 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0438")),(0,a.kt)("h4",{id:"lets-tie-it-all-together"},"\u0421\u0432\u044f\u0436\u0435\u043c \u0432\u0441\u0435 \u044d\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u0435"),(0,a.kt)("p",null,"\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430, \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u0441\u043b\u0435\u0433\u043a\u0430 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=page/main/ui.tsx",title:"page/main/ui.tsx"},"<List\n    Header={<ConversationSwitch />}\n    Items={<Messages />}\n    Footer={<MessageInput />}\n/>\n")),(0,a.kt)("h4",{id:"data-model"},"\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0431\u0443\u0434\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u043a\u0430\u043a ",(0,a.kt)("strong",{parentName:"p"},"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"),". \u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0444\u0438\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044d\u0442\u0438\u0445 \u0444\u0430\u0431\u0440\u0438\u043a."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u041e\u0434\u043d\u0430\u043a\u043e, \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 - \u0444\u0438\u0447\u0430 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445 \u0441\u043b\u043e\u0435\u0432 \u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=pages/main/model.ts",title:"pages/main/model.ts"},'import { userModel } from "entitites/user"\nimport { conversationModel } from "entities/conversation"\nimport { contactModel } from "entities/contact"\n\nimport { createMessageInput } from "features/message-input"\nimport { createConversationSwitch } from "features/conversation-switch"\n\nimport { beautifiy } from "shared/lib/beautify-text"\n\nexport const { allConversations, setConversation } = createConversationSwitch({\n    contacts: contactModel.allContacts,\n    setConversation: conversationModel.setConversation,\n    currentConversation: conversationModel.conversation,\n    currentUser: userModel.currentUser\n})\n\nexport const { sendMessage, attachFile } = createMessageInput({\n    author: userModel.currentUser\n    send: conversationModel.sendMessage,\n    formatMessage: beautify\n})\n')),(0,a.kt)("h2",{id:"summary"},"\u0418\u0442\u043e\u0433\u043e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u044c ",(0,a.kt)("strong",{parentName:"li"},"\u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e")," (\u0438\u043c\u0435\u0442\u044c \u043e\u0434\u043d\u0443 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u0440\u0435\u0448\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443) \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/public-api"},(0,a.kt)("strong",{parentName:"a"},"\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"))," \u0434\u043e\u0441\u0442\u0443\u043f\u0430"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u0421\u043b\u0430\u0431\u0430\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c")," \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 - \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 UI, \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"),(0,a.kt)("li",{parentName:"ol"},"\u0422\u0430\u043a\u0436\u0435, \u0434\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043c\u043e\u0434\u0443\u043b\u0438 ",(0,a.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b")," - \u0442\u0430\u043a \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043e\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430")),(0,a.kt)("h2",{id:"see-also"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/"},"(\u0421\u0442\u0430\u0442\u044c\u044f) \u041f\u0440\u043e Low Coupling \u0438 High Cohesion \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\u0421\u0445\u0435\u043c\u0430 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435\u0439")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9"},"(\u0421\u0442\u0430\u0442\u044c\u044f) Low Coupling \u0438 High Cohesion. \u0417\u0430\u043a\u043e\u043d \u0414\u0435\u043c\u0435\u0442\u0440\u044b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.slideshare.net/cristalngo/software-design-principles-57388843"},"(\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f) \u041f\u0440\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f (\u0432\u043a\u043b\u044e\u0447\u0430\u044f Low Coupling & High Cohesion)"))))}m.isMDXComponent=!0},4446:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/coupling-ca24ecbbb9b4595e100e3e990025ed73.png"}}]);