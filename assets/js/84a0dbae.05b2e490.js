"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7660],{1849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(6070),o=n(5710);const i={sidebar_position:10},r="Usage with NextJS",c={id:"guides/tech/with-nextjs",title:"Usage with NextJS",description:"It is possible to implement FSD in a NextJS project, but conflicts arise due to differences between the requirements for the NextJS project structure and the principles of FSD in two points:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx",sourceDirName:"guides/tech",slug:"/guides/tech/with-nextjs",permalink:"/docs/guides/tech/with-nextjs",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx",tags:[],version:"current",lastUpdatedAt:1725188328e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"guidesSidebar",previous:{title:"Migration from v1",permalink:"/docs/guides/migration/from-v1"},next:{title:"Usage with NuxtJS",permalink:"/docs/guides/tech/with-nuxtjs"}},d={},a=[{value:"Conflict between FSD and NextJS on <code>pages</code> layer",id:"pages-conflict",level:2},{value:"Moving the <code>pages</code> folder of NextJS to the root folder of the project (recommended)",id:"moving-the-pages-folder-of-nextjs-to-the-root-folder-of-the-project-recommended",level:3},{value:"Renaming the <code>pages</code> layer within the FSD structure",id:"renaming-the-pages-layer-within-the-fsd-structure",level:3},{value:"The absence of the <code>app</code> folder in NextJS",id:"app-absence",level:2},{value:"Importing app functionality to <code>pages/_app.tsx</code> file",id:"importing-app-functionality-to-pages_apptsx-file",level:3},{value:"Dealing with App Router",id:"app-router",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"usage-with-nextjs",children:"Usage with NextJS"})}),"\n",(0,s.jsx)(t.p,{children:"It is possible to implement FSD in a NextJS project, but conflicts arise due to differences between the requirements for the NextJS project structure and the principles of FSD in two points:\xa0"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Routing files in the ",(0,s.jsx)(t.code,{children:"pages"})," layer"]}),"\n",(0,s.jsxs)(t.li,{children:["Conflict or absence of the ",(0,s.jsx)(t.code,{children:"app"})," layer in NextJS"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"pages-conflict",children:["Conflict between FSD and NextJS on ",(0,s.jsx)(t.code,{children:"pages"})," layer"]}),"\n",(0,s.jsxs)(t.p,{children:["NextJS suggests using the ",(0,s.jsx)(t.code,{children:"pages"})," folder to define application routes. NextJS expects files in the ",(0,s.jsx)(t.code,{children:"pages"})," folder to match URLs.\nThis routing mechanism ",(0,s.jsx)(t.strong,{children:"does not correspond"})," to the FSD concept, since it is not possible to maintain a flat slice structure in such a routing mechanism."]}),"\n",(0,s.jsxs)(t.h3,{id:"moving-the-pages-folder-of-nextjs-to-the-root-folder-of-the-project-recommended",children:["Moving the ",(0,s.jsx)(t.code,{children:"pages"})," folder of NextJS to the root folder of the project (recommended)"]}),"\n",(0,s.jsxs)(t.p,{children:["The approach is to move the ",(0,s.jsx)(t.code,{children:"pages"})," NextJS folder to the root folder of the project and import the FSD pages into the ",(0,s.jsx)(t.code,{children:"pages"})," NextJS folder. This saves\nthe FSD project structure inside the ",(0,s.jsx)(t.code,{children:"src"})," folder."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"\u251c\u2500\u2500 pages              # NextJS pages folder\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 entities\n\u2502   \u251c\u2500\u2500 features\n\u2502   \u251c\u2500\u2500 pages          # FSD pages folder\n\u2502   \u251c\u2500\u2500 shared\n\u2502   \u251c\u2500\u2500 widgets\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"renaming-the-pages-layer-within-the-fsd-structure",children:["Renaming the ",(0,s.jsx)(t.code,{children:"pages"})," layer within the FSD structure"]}),"\n",(0,s.jsxs)(t.p,{children:["Another way to solve the problem is to rename the ",(0,s.jsx)(t.code,{children:"pages"})," layer in the FSD structure to avoid conflicts with the NextJS ",(0,s.jsx)(t.code,{children:"pages"})," folder.\nYou can rename the ",(0,s.jsx)(t.code,{children:"pages"})," layer in FSD to ",(0,s.jsx)(t.code,{children:"views"}),".\nIn that way, the structure of the project in the ",(0,s.jsx)(t.code,{children:"src"})," folder is preserved without contradiction with the requirements of NextJS."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"\u251c\u2500\u2500 app\n\u251c\u2500\u2500 entities\n\u251c\u2500\u2500 features\n\u251c\u2500\u2500 pages              # NextJS pages folder\n\u251c\u2500\u2500 views              # Renamed FSD pages folder\n\u251c\u2500\u2500 shared\n\u251c\u2500\u2500 widgets\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Keep in mind that it's highly recommended to document this rename prominently in your project's README or internal documentation. This rename is a part of your ",(0,s.jsx)(t.a,{href:"/docs/about/understanding/knowledge-types",children:'"project knowledge"'}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"app-absence",children:["The absence of the ",(0,s.jsx)(t.code,{children:"app"})," folder in NextJS"]}),"\n",(0,s.jsxs)(t.p,{children:["In NextJS below version 13, there is no explicit ",(0,s.jsx)(t.code,{children:"app"})," folder, instead NextJS provides the ",(0,s.jsx)(t.code,{children:"_app.tsx"})," file,\nwhich plays the role of a wrapping component for all project pages."]}),"\n",(0,s.jsxs)(t.h3,{id:"importing-app-functionality-to-pages_apptsx-file",children:["Importing app functionality to ",(0,s.jsx)(t.code,{children:"pages/_app.tsx"})," file"]}),"\n",(0,s.jsxs)(t.p,{children:["To solve the problem of missing the ",(0,s.jsx)(t.code,{children:"app"})," folder in the NextJS structure, you can create an ",(0,s.jsx)(t.code,{children:"App"})," component inside the ",(0,s.jsx)(t.code,{children:"app"})," layer and import the ",(0,s.jsx)(t.code,{children:"App"})," component into ",(0,s.jsx)(t.code,{children:"pages/_app.tsx"})," so that NextJS can work with it.\nFor example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"// app/providers/index.tsx\n\nconst App = ({ Component, pageProps }: AppProps) => {\n  return (\n    <Provider1>\n      <Provider2>\n        <BaseLayout>\n            <Component {...pageProps} />\n        </BaseLayout>\n      </Provider2>\n    </Provider1>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then you can import the ",(0,s.jsx)(t.code,{children:"App"})," component and global project styles into ",(0,s.jsx)(t.code,{children:"pages/_app.tsx"})," as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"// pages/_app.tsx\n\nimport 'app/styles/index.scss'\n\nexport { default } from 'app/providers';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"app-router",children:"Dealing with App Router"}),"\n",(0,s.jsxs)(t.p,{children:["App Router has become stable in NextJS version 13.4. App Router allows you to use the ",(0,s.jsx)(t.code,{children:"app"})," folder for routing instead of the ",(0,s.jsx)(t.code,{children:"pages"})," folder.\nTo comply with the principles of FSD, you should treat the NextJS ",(0,s.jsx)(t.code,{children:"app"})," folder in the same way as recommended\nto resolve a conflict with the NextJS ",(0,s.jsx)(t.code,{children:"pages"})," folder."]}),"\n",(0,s.jsxs)(t.p,{children:["The approach is to move the NextJS ",(0,s.jsx)(t.code,{children:"app"})," folder to the root folder of the project and import the FSD pages into the NextJS ",(0,s.jsx)(t.code,{children:"app"})," folder. This saves\nthe FSD project structure inside the ",(0,s.jsx)(t.code,{children:"src"})," folder. You should still also add the ",(0,s.jsx)(t.code,{children:"pages"})," folder to the root, because the App router is compatible with the Pages router."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\u251c\u2500\u2500 app                # NextJS app folder\n\u251c\u2500\u2500 pages              # Stub NextJS pages folder\n\u2502   \u251c\u2500\u2500 README.md      # Description of why this folder exists\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app            # FSD app folder\n\u2502   \u251c\u2500\u2500 entities\n\u2502   \u251c\u2500\u2500 features\n\u2502   \u251c\u2500\u2500 pages          # FSD app folder\n\u2502   \u251c\u2500\u2500 shared\n\u2502   \u251c\u2500\u2500 widgets\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://stackblitz.com/edit/stackblitz-starters-aiez55?file=README.md",children:(0,s.jsx)(t.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz"})})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://t.me/feature_sliced/3623",children:"(Thread) About the pages directory in NextJS"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(758);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);