"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["1901"],{8757:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>r,default:()=>l,assets:()=>p,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"guides/tech/with-nextjs","title":"NextJS\u3068\u306E\u4F75\u7528","description":"NextJS\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067FSD\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u306F\u53EF\u80FD\u3067\u3059\u304C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u69CB\u9020\u306B\u95A2\u3059\u308BNextJS\u306E\u8981\u4EF6\u3068FSD\u306E\u539F\u5247\u306E\u9593\u306B2\u3064\u306E\u70B9\u3067\u5BFE\u7ACB\u304C\u751F\u3058\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx","sourceDirName":"guides/tech","slug":"/guides/tech/with-nextjs","permalink":"/ja/docs/guides/tech/with-nextjs","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/ja/docusaurus-plugin-content-docs/current/guides/tech/with-nextjs.mdx","tags":[],"version":"current","lastUpdatedAt":1733265793000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"guidesSidebar","previous":{"title":"v2.0\u304B\u3089v2.1\u3078\u306E\u79FB\u884C","permalink":"/ja/docs/guides/migration/from-v2-0"},"next":{"title":"NuxtJS\u3068\u306E\u4F75\u7528","permalink":"/ja/docs/guides/tech/with-nuxtjs"}}'),d=n("2676"),c=n("9938");let i={sidebar_position:10},r="NextJS\u3068\u306E\u4F75\u7528",p={},a=[{value:"<code>pages</code>\u306B\u304A\u3051\u308BFSD\u3068NextJS\u306E\u5BFE\u7ACB",id:"pages-conflict",level:2},{value:"NextJS\u306E<code>pages</code>\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u79FB\u52D5\u3059\u308B\uFF08\u63A8\u5968\uFF09",id:"nextjs\u306Epages\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u79FB\u52D5\u3059\u308B\u63A8\u5968",level:3},{value:"FSD\u69CB\u9020\u306B\u304A\u3051\u308B<code>pages</code>\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u540D\u524D\u5909\u66F4",id:"fsd\u69CB\u9020\u306B\u304A\u3051\u308Bpages\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u540D\u524D\u5909\u66F4",level:3},{value:"NextJS\u306B\u304A\u3051\u308B<code>app</code>\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u6B20\u5982",id:"app-absence",level:2},{value:"<code>pages/_app.tsx</code>\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u6A5F\u80FD\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",id:"pages_apptsx\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u6A5F\u80FD\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",level:3},{value:"App Router\u306E\u4F7F\u7528",id:"app-router",level:2}];function o(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"nextjs\u3068\u306E\u4F75\u7528",children:"NextJS\u3068\u306E\u4F75\u7528"})}),"\n",(0,d.jsx)(s.p,{children:"NextJS\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067FSD\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u306F\u53EF\u80FD\u3067\u3059\u304C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u69CB\u9020\u306B\u95A2\u3059\u308BNextJS\u306E\u8981\u4EF6\u3068FSD\u306E\u539F\u5247\u306E\u9593\u306B2\u3064\u306E\u70B9\u3067\u5BFE\u7ACB\u304C\u751F\u3058\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"pages"}),"\u306E\u30D5\u30A1\u30A4\u30EB\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0"]}),"\n",(0,d.jsxs)(s.li,{children:["NextJS\u306B\u304A\u3051\u308B",(0,d.jsx)(s.code,{children:"app"}),"\u306E\u5BFE\u7ACB\u3001\u307E\u305F\u306F\u6B20\u5982"]}),"\n"]}),"\n",(0,d.jsxs)(s.h2,{id:"pages-conflict",children:[(0,d.jsx)(s.code,{children:"pages"}),"\u306B\u304A\u3051\u308BFSD\u3068NextJS\u306E\u5BFE\u7ACB"]}),"\n",(0,d.jsxs)(s.p,{children:["NextJS\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30EB\u30FC\u30C8\u3092\u5B9A\u7FA9\u3059\u308B\u305F\u3081\u306B",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u63D0\u6848\u3057\u3066\u3044\u307E\u3059\u3002",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306E\u30D5\u30A1\u30A4\u30EB\u304CURL\u306B\u5BFE\u5FDC\u3059\u308B\u3053\u3068\u3092\u671F\u5F85\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30E1\u30AB\u30CB\u30BA\u30E0\u306F\u3001FSD\u306E\u6982\u5FF5\u306B",(0,d.jsx)(s.strong,{children:"\u9069\u5408\u3057\u307E\u305B\u3093"}),"\u3002\u306A\u305C\u306A\u3089\u3001\u3053\u306E\u3088\u3046\u306A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30E1\u30AB\u30CB\u30BA\u30E0\u3067\u306F\u3001\u30B9\u30E9\u30A4\u30B9\u306E\u5E73\u5766\u306A\u69CB\u9020\u3092\u7DAD\u6301\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u3044\u304B\u3089\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(s.h3,{id:"nextjs\u306Epages\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u79FB\u52D5\u3059\u308B\u63A8\u5968",children:["NextJS\u306E",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u79FB\u52D5\u3059\u308B\uFF08\u63A8\u5968\uFF09"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001NextJS\u306E",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u79FB\u52D5\u3057\u3001FSD\u306E\u30DA\u30FC\u30B8\u3092NextJS\u306E",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u306B\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001",(0,d.jsx)(s.code,{children:"src"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u3067FSD\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u69CB\u9020\u3092\u7DAD\u6301\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sh",children:"\u251C\u2500\u2500 pages              # NextJS\u306Epages\u30D5\u30A9\u30EB\u30C0\u30FC\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 app\n\u2502   \u251C\u2500\u2500 entities\n\u2502   \u251C\u2500\u2500 features\n\u2502   \u251C\u2500\u2500 pages          # FSD\u306Epages\u30D5\u30A9\u30EB\u30C0\u30FC\n\u2502   \u251C\u2500\u2500 shared\n\u2502   \u251C\u2500\u2500 widgets\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"fsd\u69CB\u9020\u306B\u304A\u3051\u308Bpages\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u540D\u524D\u5909\u66F4",children:["FSD\u69CB\u9020\u306B\u304A\u3051\u308B",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u540D\u524D\u5909\u66F4"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3082\u3046\u4E00\u3064\u306E\u89E3\u6C7A\u7B56\u306F\u3001FSD\u69CB\u9020\u5185\u306E",(0,d.jsx)(s.code,{children:"pages"}),"\u5C64\u306E\u540D\u524D\u3092\u5909\u66F4\u3057\u3066\u3001NextJS\u306E",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u306E\u540D\u524D\u885D\u7A81\u3092\u907F\u3051\u308B\u3053\u3068\u3067\u3059\u3002\nFSD\u306E",(0,d.jsx)(s.code,{children:"pages"}),"\u5C64\u3092",(0,d.jsx)(s.code,{children:"views"}),"\u5C64\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\u3053\u306E\u3088\u3046\u306B\u3059\u308B\u3053\u3068\u3067\u3001",(0,d.jsx)(s.code,{children:"src"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u69CB\u9020\u306F\u3001NextJS\u306E\u8981\u4EF6\u3068\u77DB\u76FE\u3059\u308B\u3053\u3068\u306A\u304F\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sh",children:"\u251C\u2500\u2500 app\n\u251C\u2500\u2500 entities\n\u251C\u2500\u2500 features\n\u251C\u2500\u2500 pages              # NextJS\u306Epages\u30D5\u30A9\u30EB\u30C0\u30FC\n\u251C\u2500\u2500 views              # \u540D\u524D\u304C\u5909\u66F4\u3055\u308C\u305FFSD\u306E\u30DA\u30FC\u30B8\u30D5\u30A9\u30EB\u30C0\u30FC\n\u251C\u2500\u2500 shared\n\u251C\u2500\u2500 widgets\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u306E\u5834\u5408\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306EREADME\u3084\u5185\u90E8\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306A\u3069\u3001\u76EE\u7ACB\u3064\u5834\u6240\u306B\u3053\u306E\u540D\u524D\u5909\u66F4\u3092\u6587\u66F8\u5316\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u3053\u306E\u540D\u524D\u5909\u66F4\u306F\u3001",(0,d.jsx)(s.a,{href:"/docs/about/understanding/knowledge-types",children:"\u300C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u77E5\u8B58\u300D"}),"\u306E\u4E00\u90E8\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(s.h2,{id:"app-absence",children:["NextJS\u306B\u304A\u3051\u308B",(0,d.jsx)(s.code,{children:"app"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u6B20\u5982"]}),"\n",(0,d.jsxs)(s.p,{children:["NextJS\u306E\u30D0\u30FC\u30B8\u30E7\u30F313\u672A\u6E80\u3067\u306F\u3001\u660E\u793A\u7684\u306A",(0,d.jsx)(s.code,{children:"app"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u306F\u5B58\u5728\u305B\u305A\u3001\u4EE3\u308F\u308A\u306BNextJS\u306F",(0,d.jsx)(s.code,{children:"_app.tsx"}),"\u30D5\u30A1\u30A4\u30EB\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3059\u3079\u3066\u306E\u30DA\u30FC\u30B8\u306E\u30E9\u30C3\u30D4\u30F3\u30B0\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u3057\u3066\u6A5F\u80FD\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.h3,{id:"pages_apptsx\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u6A5F\u80FD\u306E\u30A4\u30F3\u30DD\u30FC\u30C8",children:[(0,d.jsx)(s.code,{children:"pages/_app.tsx"}),"\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u6A5F\u80FD\u306E\u30A4\u30F3\u30DD\u30FC\u30C8"]}),"\n",(0,d.jsxs)(s.p,{children:["NextJS\u306E\u69CB\u9020\u306B\u304A\u3051\u308B",(0,d.jsx)(s.code,{children:"app"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u6B20\u5982\u306E\u554F\u984C\u3092\u89E3\u6C7A\u3059\u308B\u305F\u3081\u306B\u3001",(0,d.jsx)(s.code,{children:"app"}),"\u5C64\u5185\u306B",(0,d.jsx)(s.code,{children:"App"}),"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F5C\u6210\u3057\u3001NextJS\u304C\u305D\u308C\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u306B",(0,d.jsx)(s.code,{children:"pages/_app.tsx"}),"\u306B",(0,d.jsx)(s.code,{children:"App"}),"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-tsx",children:"// app/providers/index.tsx\n\nconst App = ({ Component, pageProps }: AppProps) => {\n  return (\n    <Provider1>\n      <Provider2>\n        <BaseLayout>\n            <Component {...pageProps} />\n        </BaseLayout>\n      </Provider2>\n    </Provider1>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u305D\u306E\u5F8C\u3001",(0,d.jsx)(s.code,{children:"App"}),"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3068\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30A4\u30EB\u3092",(0,d.jsx)(s.code,{children:"pages/_app.tsx"}),"\u306B\u6B21\u306E\u3088\u3046\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-tsx",children:"// pages/_app.tsx\n\nimport 'app/styles/index.scss'\n\nexport { default } from 'app/providers';\n"})}),"\n",(0,d.jsx)(s.h2,{id:"app-router",children:"App Router\u306E\u4F7F\u7528"}),"\n",(0,d.jsxs)(s.p,{children:["App Router\u306F\u3001Next.js\u306E\u30D0\u30FC\u30B8\u30E7\u30F313.4\u3067\u5B89\u5B9A\u7248\u3068\u3057\u3066\u767B\u5834\u3057\u307E\u3057\u305F\u3002App Router\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u4EE3\u308F\u308A\u306B",(0,d.jsx)(s.code,{children:"app"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\nFSD\u306E\u539F\u5247\u306B\u5F93\u3046\u305F\u3081\u306B\u3001NextJS\u306E",(0,d.jsx)(s.code,{children:"app"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u306E\u540D\u524D\u885D\u7A81\u3092\u89E3\u6D88\u3059\u308B\u305F\u3081\u306B\u63A8\u5968\u3055\u308C\u308B\u65B9\u6CD5\u3067\u6271\u3046\u3079\u304D\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u3001NextJS\u306E",(0,d.jsx)(s.code,{children:"app"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u79FB\u52D5\u3057\u3001FSD\u306E\u30DA\u30FC\u30B8\u3092NextJS\u306E",(0,d.jsx)(s.code,{children:"app"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001",(0,d.jsx)(s.code,{children:"src"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306EFSD\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u69CB\u9020\u304C\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306B",(0,d.jsx)(s.code,{children:"pages"}),"\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3082\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u306A\u305C\u306A\u3089\u3001App Router\u306FPages Router\u3068\u4E92\u63DB\u6027\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"\u251C\u2500\u2500 app                # NextJS\u306Eapp\u30D5\u30A9\u30EB\u30C0\u30FC\n\u251C\u2500\u2500 pages              # \u7A7A\u306ENextJS\u306Epages\u30D5\u30A9\u30EB\u30C0\u30FC\n\u2502   \u251C\u2500\u2500 README.md      # \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u76EE\u7684\u306B\u95A2\u3059\u308B\u8AAC\u660E\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 app            # FSD\u306Eapp\u30D5\u30A9\u30EB\u30C0\u30FC\n\u2502   \u251C\u2500\u2500 entities\n\u2502   \u251C\u2500\u2500 features\n\u2502   \u251C\u2500\u2500 pages          # FSD\u306Epages\u30D5\u30A9\u30EB\u30C0\u30FC\n\u2502   \u251C\u2500\u2500 shared\n\u2502   \u251C\u2500\u2500 widgets\n"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://stackblitz.com/edit/stackblitz-starters-aiez55?file=README.md",children:(0,d.jsx)(s.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"StackBlitz\u3067\u958B\u304F"})})})]})}function l(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},9938:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return i}});var t=n(5271);let d={},c=t.createContext(d);function i(e){let s=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);