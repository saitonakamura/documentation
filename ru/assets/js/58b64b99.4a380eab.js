"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[8056],{3870:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=n(6070),d=n(1100);const c={sidebar_position:10},r="\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 NextJS",i={id:"guides/tech/with-nextjs",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 NextJS",description:"\u0412 NextJS \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c FSD, \u043d\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0438\u0437-\u0437\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043a \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 NextJS \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c\u0438 FSD \u0432 \u0434\u0432\u0443\u0445 \u043f\u0443\u043d\u043a\u0442\u0430\u0445:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx",sourceDirName:"guides/tech",slug:"/guides/tech/with-nextjs",permalink:"/ru/docs/guides/tech/with-nextjs",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx",tags:[],version:"current",lastUpdatedAt:1731528322e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"guidesSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0441 v2.0 \u043d\u0430 v2.1",permalink:"/ru/docs/guides/migration/from-v2-0"},next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 NuxtJS",permalink:"/ru/docs/guides/tech/with-nuxtjs"}},p={},a=[{value:"\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442 \u043c\u0435\u0436\u0434\u0443 FSD \u0438 NextJS \u0432 \u0441\u043b\u043e\u0435 <code>pages</code>",id:"pages-conflict",level:2},{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 <code>pages</code> NextJS \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f)",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435-\u043f\u0430\u043f\u043a\u0438-pages-nextjs-\u0432-\u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e-\u043f\u0430\u043f\u043a\u0443-\u043f\u0440\u043e\u0435\u043a\u0442\u0430-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f",level:3},{value:"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 <code>pages</code> \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 FSD",id:"\u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043f\u043a\u0438-pages-\u0432-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435-fsd",level:3},{value:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 <code>app</code> \u0432 NextJS",id:"app-absence",level:2},{value:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432 <code>pages/_app.tsx</code>",id:"\u0438\u043c\u043f\u043e\u0440\u0442-\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438-\u0432-pages_apptsx",level:3},{value:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 App Router",id:"app-router",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0441-nextjs",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 NextJS"})}),"\n",(0,t.jsx)(s.p,{children:"\u0412 NextJS \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c FSD, \u043d\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0438\u0437-\u0437\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043a \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 NextJS \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c\u0438 FSD \u0432 \u0434\u0432\u0443\u0445 \u043f\u0443\u043d\u043a\u0442\u0430\u0445:\xa0"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0441\u043b\u043e\u0435 ",(0,t.jsx)(s.code,{children:"pages"})]}),"\n",(0,t.jsxs)(s.li,{children:["\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442 \u0438\u043b\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u043b\u043e\u044f ",(0,t.jsx)(s.code,{children:"app"})," \u0432 NextJS"]}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"pages-conflict",children:["\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442 \u043c\u0435\u0436\u0434\u0443 FSD \u0438 NextJS \u0432 \u0441\u043b\u043e\u0435 ",(0,t.jsx)(s.code,{children:"pages"})]}),"\n",(0,t.jsxs)(s.p,{children:["NextJS \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043f\u043a\u0443 ",(0,t.jsx)(s.code,{children:"pages"})," \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. NextJS \u043e\u0436\u0438\u0434\u0430\u0435\u0442, \u0447\u0442\u043e \u0444\u0430\u0439\u043b\u044b \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,t.jsx)(s.code,{children:"pages"})," \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c URL-\u0430\u0434\u0440\u0435\u0441\u0430\u043c.\n\u042d\u0442\u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 ",(0,t.jsx)(s.strong,{children:"\u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})," \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 FSD, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0432 \u0442\u0430\u043a\u043e\u043c \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c \u0441\u043e\u0431\u043b\u044e\u0441\u0442\u0438 \u043f\u043b\u043e\u0441\u043a\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0441\u043b\u0430\u0439\u0441\u043e\u0432."]}),"\n",(0,t.jsxs)(s.h3,{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435-\u043f\u0430\u043f\u043a\u0438-pages-nextjs-\u0432-\u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e-\u043f\u0430\u043f\u043a\u0443-\u043f\u0440\u043e\u0435\u043a\u0442\u0430-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f",children:["\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"pages"})," NextJS \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f)"]}),"\n",(0,t.jsxs)(s.p,{children:["\u041f\u043e\u0434\u0445\u043e\u0434 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0438 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"pages"})," NextJS \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 FSD \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,t.jsx)(s.code,{children:"pages"})," NextJS. \u042d\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\n\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 FSD \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"src"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"\u251c\u2500\u2500 pages              # \u041f\u0430\u043f\u043a\u0430 pages (NextJS)\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 entities\n\u2502   \u251c\u2500\u2500 features\n\u2502   \u251c\u2500\u2500 pages          # \u041f\u0430\u043f\u043a\u0430 pages (FSD)\n\u2502   \u251c\u2500\u2500 shared\n\u2502   \u251c\u2500\u2500 widgets\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"\u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043f\u043a\u0438-pages-\u0432-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435-fsd",children:["\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"pages"})," \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 FSD"]}),"\n",(0,t.jsxs)(s.p,{children:["\u0414\u0440\u0443\u0433\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 - \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0439 ",(0,t.jsx)(s.code,{children:"pages"})," \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 FSD, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432 \u0441 \u043f\u0430\u043f\u043a\u043e\u0439 ",(0,t.jsx)(s.code,{children:"pages"})," NextJS.\n\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0439 ",(0,t.jsx)(s.code,{children:"pages"})," \u0432 FSD \u0432 ",(0,t.jsx)(s.code,{children:"views"}),".\xa0\n\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,t.jsx)(s.code,{children:"src"})," \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0440\u0435\u0447\u0438\u0439 \u0441 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 NextJS."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"\u251c\u2500\u2500 app\n\u251c\u2500\u2500 entities\n\u251c\u2500\u2500 features\n\u251c\u2500\u2500 pages              # \u041f\u0430\u043f\u043a\u0430 pages (NextJS)\n\u251c\u2500\u2500 views              # \u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0430\u043f\u043a\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 FSD\n\u251c\u2500\u2500 shared\n\u251c\u2500\u2500 widgets\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0432\u0438\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u2014 \u0432 README \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438\u043b\u0438 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438. \u042d\u0442\u043e \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u2014 \u0447\u0430\u0441\u0442\u044c ",(0,t.jsx)(s.a,{href:"/docs/about/understanding/knowledge-types",children:'"\u043f\u0440\u043e\u0435\u043a\u0442\u043d\u044b\u0445 \u0437\u043d\u0430\u043d\u0438\u0439"'}),"."]}),"\n",(0,t.jsxs)(s.h2,{id:"app-absence",children:["\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"app"})," \u0432 NextJS"]}),"\n",(0,t.jsxs)(s.p,{children:["\u0412 NextJS \u043d\u0438\u0436\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 13 \u043d\u0435\u0442 \u044f\u0432\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"app"}),", \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e NextJS \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0444\u0430\u0439\u043b ",(0,t.jsx)(s.code,{children:"_app.tsx"}),",\n\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0433\u0440\u0430\u0435\u0442 \u0440\u043e\u043b\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043e\u0431\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."]}),"\n",(0,t.jsxs)(s.h3,{id:"\u0438\u043c\u043f\u043e\u0440\u0442-\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438-\u0432-pages_apptsx",children:["\u0418\u043c\u043f\u043e\u0440\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432 ",(0,t.jsx)(s.code,{children:"pages/_app.tsx"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u0427\u0442\u043e\u0431\u044b \u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"app"})," \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 NextJS, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,t.jsx)(s.code,{children:"App"})," \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u043b\u043e\u044f ",(0,t.jsx)(s.code,{children:"app"})," \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,t.jsx)(s.code,{children:"App"})," \u0432 ",(0,t.jsx)(s.code,{children:"pages/_app.tsx"}),", \u0447\u0442\u043e\u0431\u044b NextJS \u043c\u043e\u0433 \u0441 \u043d\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"// app/providers/index.tsx\n\nconst App = ({ Component, pageProps }: AppProps) => {\n  return (\n    <Provider1>\n      <Provider2>\n        <BaseLayout>\n            <Component {...pageProps} />\n        </BaseLayout>\n      </Provider2>\n    </Provider1>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0417\u0430\u0442\u0435\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,t.jsx)(s.code,{children:"App"})," \u0438 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0432 ",(0,t.jsx)(s.code,{children:"pages/_app.tsx"})," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"// pages/_app.tsx\n\nimport 'app/styles/index.scss'\n\nexport { default } from 'app/providers';\n"})}),"\n",(0,t.jsx)(s.h2,{id:"app-router",children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 App Router"}),"\n",(0,t.jsxs)(s.p,{children:["App Router \u0441\u0442\u0430\u043b \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u043c \u0432 NextJS \u0432\u0435\u0440\u0441\u0438\u0438 13.4. App Router \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043f\u043a\u0443 ",(0,t.jsx)(s.code,{children:"app"})," \u0434\u043b\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"pages"}),".\n\u0414\u043b\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c FSD, \u0432\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u0441 \u043f\u0430\u043f\u043a\u043e\u0439 ",(0,t.jsx)(s.code,{children:"app"})," NextJS \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f\n\u0434\u043b\u044f \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0430 \u0441 \u043f\u0430\u043f\u043a\u043e\u0439 ",(0,t.jsx)(s.code,{children:"pages"})," NextJS."]}),"\n",(0,t.jsxs)(s.p,{children:["\u041f\u043e\u0434\u0445\u043e\u0434 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0438 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"app"})," NextJS \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 FSD \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,t.jsx)(s.code,{children:"app"})," NextJS. \u042d\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\n\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 FSD \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0430\u043f\u043a\u0438 ",(0,t.jsx)(s.code,{children:"src"}),". \u0412\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u0441\u0442\u043e\u0438\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043f\u0430\u043f\u043a\u0443 ",(0,t.jsx)(s.code,{children:"pages"}),", \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e App Router \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c \u0441 Pages Router."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\u251c\u2500\u2500 app                # \u041f\u0430\u043f\u043a\u0430 app (NextJS)\n\u251c\u2500\u2500 pages              # \u041f\u0443\u0441\u0442\u0430\u044f \u043f\u0430\u043f\u043a\u0430 pages (NextJS)\n\u2502   \u251c\u2500\u2500 README.md      # \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0433\u043e, \u0437\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u043d\u0430 \u044d\u0442\u0430 \u043f\u0430\u043f\u043a\u0430\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app            # \u041f\u0430\u043f\u043a\u0430 app (FSD)\n\u2502   \u251c\u2500\u2500 entities\n\u2502   \u251c\u2500\u2500 features\n\u2502   \u251c\u2500\u2500 pages          # \u041f\u0430\u043f\u043a\u0430 pages (FSD)\n\u2502   \u251c\u2500\u2500 shared\n\u2502   \u251c\u2500\u2500 widgets\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://stackblitz.com/edit/stackblitz-starters-aiez55?file=README.md",children:(0,t.jsx)(s.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 StackBlitz"})})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://t.me/feature_sliced/3623",children:"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e pages \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0432 NextJS"})}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1100:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var t=n(758);const d={},c=t.createContext(d);function r(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);