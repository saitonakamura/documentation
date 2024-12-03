"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["7696"],{4954:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>j,assets:()=>t,toc:()=>h,frontMatter:()=>d});var i=JSON.parse('{"id":"get-started/overview","title":"\u6982\u8981","description":"Feature-Sliced Design (FSD) \u3068\u306F\u3001\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A2D\u8A08\u65B9\u6CD5\u8AD6\u3067\u3059\u3002\u7C21\u5358\u306B\u8A00\u3048\u3070\u3001\u30B3\u30FC\u30C9\u3092\u6574\u7406\u3059\u308B\u305F\u3081\u306E\u30EB\u30FC\u30EB\u3068\u898F\u7D04\u306E\u96C6\u5927\u6210\u3067\u3059\u3002FSD\u306E\u4E3B\u306A\u76EE\u7684\u306F\u3001\u30D3\u30B8\u30CD\u30B9\u8981\u4EF6\u304C\u7D76\u3048\u305A\u5909\u5316\u3059\u308B\u4E2D\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u3088\u308A\u7406\u89E3\u3057\u3084\u3059\u304F\u3001\u69CB\u9020\u5316\u3055\u308C\u305F\u3082\u306E\u306B\u3059\u308B\u3053\u3068\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/get-started/overview.mdx","sourceDirName":"get-started","slug":"/get-started/overview","permalink":"/ja/docs/get-started/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/feature-sliced/documentation/edit/master/i18n/ja/docusaurus-plugin-content-docs/current/get-started/overview.mdx","tags":[],"version":"current","lastUpdatedAt":1733265793000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"getstartedSidebar","previous":{"title":"\uD83D\uDE80 \u30AF\u30A4\u30C3\u30AF\u30B9\u30BF\u30FC\u30C8","permalink":"/ja/docs/get-started/"},"next":{"title":"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB","permalink":"/ja/docs/get-started/tutorial"}}'),r=s("2676"),l=s("9938");let d={sidebar_position:1},c="\u6982\u8981",t={},h=[{value:"FSD\u306F\u79C1\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u9069\u3057\u3066\u3044\u308B\u306E\u304B\uFF1F",id:"is-it-right-for-me",level:2},{value:"\u57FA\u672C\u7684\u306A\u4F8B",id:"basic-example",level:2},{value:"\u6982\u5FF5",id:"concepts",level:2},{value:"\u30EC\u30A4\u30E4\u30FC",id:"layers",level:3},{value:"\u30B9\u30E9\u30A4\u30B9",id:"slices",level:3},{value:"\u30BB\u30B0\u30E1\u30F3\u30C8",id:"segments",level:3},{value:"\u5229\u70B9",id:"advantages",level:2},{value:"\u6BB5\u968E\u7684\u306A\u5C0E\u5165",id:"incremental-adoption",level:2},{value:"\u6B21\u306E\u30B9\u30C6\u30C3\u30D7",id:"next-steps",level:2}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6982\u8981",children:"\u6982\u8981"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Feature-Sliced Design"})," (FSD) \u3068\u306F\u3001\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A2D\u8A08\u65B9\u6CD5\u8AD6\u3067\u3059\u3002\u7C21\u5358\u306B\u8A00\u3048\u3070\u3001\u30B3\u30FC\u30C9\u3092\u6574\u7406\u3059\u308B\u305F\u3081\u306E\u30EB\u30FC\u30EB\u3068\u898F\u7D04\u306E\u96C6\u5927\u6210\u3067\u3059\u3002FSD\u306E\u4E3B\u306A\u76EE\u7684\u306F\u3001\u30D3\u30B8\u30CD\u30B9\u8981\u4EF6\u304C\u7D76\u3048\u305A\u5909\u5316\u3059\u308B\u4E2D\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u3088\u308A\u7406\u89E3\u3057\u3084\u3059\u304F\u3001\u69CB\u9020\u5316\u3055\u308C\u305F\u3082\u306E\u306B\u3059\u308B\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30EB\u30FC\u30EB\u306E\u30BB\u30C3\u30C8\u306B\u52A0\u3048\u3066\u3001FSD\u306F\u30C4\u30FC\u30EB\u30C1\u30A7\u30FC\u30F3\u3067\u3082\u3042\u308A\u307E\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u305F\u3081\u306E",(0,r.jsx)(n.a,{href:"https://github.com/feature-sliced/steiger",children:"\u30EA\u30F3\u30BF\u30FC"}),"\u3001CLI\u3084IDE\u3092\u901A\u3058\u305F",(0,r.jsx)(n.a,{href:"https://github.com/feature-sliced/awesome?tab=readme-ov-file#tools",children:"\u30D5\u30A9\u30EB\u30C0\u30FC\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC"}),"\u3001\u304A\u3088\u3073\u8C4A\u5BCC\u306A",(0,r.jsx)(n.a,{href:"/examples",children:"\u5B9F\u88C5\u4F8B\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"is-it-right-for-me",children:"FSD\u306F\u79C1\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u9069\u3057\u3066\u3044\u308B\u306E\u304B\uFF1F"}),"\n",(0,r.jsx)(n.p,{children:"FSD\u306F\u3001\u3042\u3089\u3086\u308B\u898F\u6A21\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3084\u30C1\u30FC\u30E0\u306B\u5C0E\u5165\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u5834\u5408\u3001\u3042\u306A\u305F\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9"}),"\u958B\u767A\u3067\u306E\u4F7F\u7528\uFF08\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3001\u30E2\u30D0\u30A4\u30EB/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u4F5C\u6210\u306A\u3069\uFF09"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"}),"\u958B\u767A\u3067\u306E\u4F7F\u7528\uFF08\u30E9\u30A4\u30D6\u30E9\u30EA\u958B\u767A\u3067\u306F\u306A\u3044\uFF09"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308C\u3060\u3051\u3067\u3059\uFF01\u4F7F\u7528\u3059\u308B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u8A00\u8A9E\u3001\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3001\u72B6\u614B\u7BA1\u7406\u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u306F\u5236\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5C1A\u3001FSD\u3092\u6BB5\u968E\u7684\u306B\u5C0E\u5165\u3057\u305F\u308A\u3001\u30E2\u30CE\u30EC\u30DD\u3067\u4F7F\u7528\u3057\u305F\u308A\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30D1\u30C3\u30B1\u30FC\u30B8\u306B\u5206\u5272\u3057\u3001\u305D\u308C\u305E\u308C\u306BFSD\u3092\u500B\u5225\u306B\u5C0E\u5165\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\uFF01"}),"\n",(0,r.jsxs)(n.p,{children:["\u65E2\u5B58\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u304B\u3089FSD\u306B\u79FB\u884C\u3059\u308B\u3053\u3068\u3092\u691C\u8A0E\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u73FE\u5728\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u304C\u30C1\u30FC\u30E0\u306B",(0,r.jsx)(n.strong,{children:"\u652F\u969C\u3092\u304D\u305F\u3057\u3066\u3044\u308B"}),"\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4F8B\u3048\u3070\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u5927\u304D\u304F\u306A\u308A\u3059\u304E\u3066\u65B0\u6A5F\u80FD\u306E\u958B\u767A\u304C\u52B9\u7387\u7684\u306B\u884C\u3048\u306A\u3044\u5834\u5408\u3084\u3001\u591A\u304F\u306E\u65B0\u3057\u3044\u30E1\u30F3\u30D0\u30FC\u304C\u30C1\u30FC\u30E0\u306B\u52A0\u308F\u308B\u3053\u3068\u304C\u4E88\u60F3\u3055\u308C\u308B\u5834\u5408\u3067\u3059\u3002\u73FE\u5728\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u304C\u6B63\u5E38\u306B\u6A5F\u80FD\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u5909\u66F4\u3059\u308B\u5FC5\u8981\u306F\u306A\u3044\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u3057\u304B\u3057\u3001\u79FB\u884C\u3092\u6C7A\u5B9A\u3057\u305F\u5834\u5408\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/guides/migration/from-custom",children:"\u79FB\u884C\u30BB\u30AF\u30B7\u30E7\u30F3"}),"\u306E\u63A8\u5968\u4E8B\u9805\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-example",children:"\u57FA\u672C\u7684\u306A\u4F8B"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306F\u3001FSD\u3092\u5B9F\u88C5\u3057\u305F\u30B7\u30F3\u30D7\u30EB\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 app"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 pages"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 shared"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308C\u3089\u306E\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F",(0,r.jsx)(n.em,{children:"\u30EC\u30A4\u30E4\u30FC"}),"\u3068\u547C\u3070\u308C\u307E\u3059\u3002\u8A73\u3057\u304F\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 app"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 routes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 analytics"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 pages"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 home"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 article-reader"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 ui"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 api"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 settings"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 shared"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 ui"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"\uD83D\uDCC1 api"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 pages"}),"\u5185\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F",(0,r.jsx)(n.em,{children:"\u30B9\u30E9\u30A4\u30B9"}),"\u3068\u547C\u3070\u308C\u307E\u3059\u3002\u30B9\u30E9\u30A4\u30B9\u306F\u30C9\u30E1\u30A4\u30F3\uFF08\u3053\u306E\u5834\u5408\u306F\u30DA\u30FC\u30B8\uFF09\u3054\u3068\u306B\u30EC\u30A4\u30E4\u30FC\u3092\u5206\u5272\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 app"}),"\u3001",(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 shared"}),"\u3001\u304A\u3088\u3073",(0,r.jsx)(n.code,{children:"\uD83D\uDCC2 pages/article-reader"}),"\u5185\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306F",(0,r.jsx)(n.em,{children:"\u30BB\u30B0\u30E1\u30F3\u30C8"}),"\u3068\u547C\u3070\u308C\u3001\u30B9\u30E9\u30A4\u30B9\uFF08\u307E\u305F\u306F\u30EC\u30A4\u30E4\u30FC\uFF09\u3092\u6280\u8853\u7684\u306A\u76EE\u7684\u306B\u5FDC\u3058\u3066\u5206\u5272\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"concepts",children:"\u6982\u5FF5"}),"\n",(0,r.jsx)(n.p,{children:"\u30EC\u30A4\u30E4\u30FC\u3001\u30B9\u30E9\u30A4\u30B9\u3001\u30BB\u30B0\u30E1\u30F3\u30C8\u306F\u3001\u4EE5\u4E0B\u306E\u56F3\u306B\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u968E\u5C64\u3092\u5F62\u6210\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"FSD\u306E\u6982\u5FF5\u306E\u968E\u5C64\u3001\u4EE5\u4E0B\u306B\u8AAC\u660E",src:s(8117).Z+"",width:"1355",height:"754"})}),(0,r.jsxs)("figcaption",{style:{fontStyle:"italic",fontSize:"0.9em"},children:[(0,r.jsx)("p",{children:"\u4E0A\u306E\u56F3\u306B\u306F\u3001\u5DE6\u304B\u3089\u53F3\u306B\u300C\u30EC\u30A4\u30E4\u30FC\u300D\u3001\u300C\u30B9\u30E9\u30A4\u30B9\u300D\u3001\u300C\u30BB\u30B0\u30E1\u30F3\u30C8\u300D\u3068\u30E9\u30D9\u30EB\u4ED8\u3051\u3055\u308C\u305F3\u3064\u306E\u5217\u304C\u3042\u308A\u307E\u3059\u3002"}),(0,r.jsx)("p",{children:"\u300C\u30EC\u30A4\u30E4\u30FC\u300D\u5217\u306B\u306F\u3001\u4E0A\u304B\u3089\u4E0B\u306B\u300Capp\u300D\u3001\u300Cprocesses\u300D\u3001\u300Cpages\u300D\u3001\u300Cwidgets\u300D\u3001\u300Cfeatures\u300D\u3001\u300Centities\u300D\u3001\u300Cshared\u300D\u3068\u30E9\u30D9\u30EB\u4ED8\u3051\u3055\u308C\u305F7\u3064\u306E\u533A\u5206\u304C\u3042\u308A\u307E\u3059\u3002\u300Cprocesses\u300D\u533A\u5206\u306F\u53D6\u308A\u6D88\u3057\u7DDA\u304C\u5F15\u304B\u308C\u3066\u3044\u307E\u3059\u3002\u300Centities\u300D\u533A\u5206\u306F2\u756A\u76EE\u306E\u5217\u300C\u30B9\u30E9\u30A4\u30B9\u300D\u3068\u63A5\u7D9A\u3055\u308C\u3066\u3044\u3066\u30012\u756A\u76EE\u306E\u5217\u304C\u300Centities\u300D\u306E\u5185\u5BB9\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002"}),(0,r.jsx)("p",{children:"\u300C\u30B9\u30E9\u30A4\u30B9\u300D\u5217\u306B\u306F\u3001\u4E0A\u304B\u3089\u4E0B\u306B\u300Cuser\u300D\u3001\u300Cpost\u300D\u3001\u300Ccomment\u300D\u3068\u30E9\u30D9\u30EB\u4ED8\u3051\u3055\u308C\u305F3\u3064\u306E\u533A\u5206\u304C\u3042\u308A\u307E\u3059\u3002\u300Cpost\u300D\u533A\u5206\u306F\u300C\u30BB\u30B0\u30E1\u30F3\u30C8\u300D\u5217\u3068\u540C\u69D8\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u3066\u3001\u300Cpost\u300D\u306E\u5185\u5BB9\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002"}),(0,r.jsx)("p",{children:"\u300C\u30BB\u30B0\u30E1\u30F3\u30C8\u300D\u5217\u306B\u306F\u3001\u4E0A\u304B\u3089\u4E0B\u306B\u300Cui\u300D\u3001\u300Cmodel\u300D\u3001\u300Capi\u300D\u3068\u30E9\u30D9\u30EB\u4ED8\u3051\u3055\u308C\u305F3\u3064\u306E\u533A\u5206\u304C\u3042\u308A\u307E\u3059\u3002"})]})]}),"\n",(0,r.jsx)(n.h3,{id:"layers",children:"\u30EC\u30A4\u30E4\u30FC"}),"\n",(0,r.jsx)(n.p,{children:"\u30EC\u30A4\u30E4\u30FC\u306F\u3059\u3079\u3066\u306EFSD\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u6A19\u6E96\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u30EC\u30A4\u30E4\u30FC\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30CD\u30FC\u30DF\u30F3\u30B0\u306F\u91CD\u8981\u3067\u3059\u3002\u73FE\u5728\u30017\u3064\u306E\u30EC\u30A4\u30E4\u30FC\u304C\u5B58\u5728\u3057\u3066\u3044\u307E\u3059\uFF08\u4E0A\u304B\u3089\u4E0B\u3078\uFF09\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"App\uFF0A\uFF08\u30A2\u30C3\u30D7\uFF09 \u2014 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5\u306B\u5FC5\u8981\u306A\u3059\u3079\u3066\u306E\u3082\u306E\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u3001\u30A8\u30F3\u30C8\u30EA\u30FC\u30DD\u30A4\u30F3\u30C8\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u30B9\u30BF\u30A4\u30EB\u3001\u30D7\u30ED\u30D0\u30A4\u30C0\u30FC\u306A\u3069\uFF09"}),"\n",(0,r.jsx)(n.li,{children:"Processes\uFF08\u30D7\u30ED\u30BB\u30B9\u3001\u975E\u63A8\u5968\uFF09 \u2014 \u8907\u96D1\u306A\u30DA\u30FC\u30B8\u9593\u306E\u30B7\u30CA\u30EA\u30AA"}),"\n",(0,r.jsx)(n.li,{children:"Pages\uFF08\u30DA\u30FC\u30B8\uFF09 \u2014 \u30DA\u30FC\u30B8\u5168\u4F53\u3001\u307E\u305F\u306F\u30CD\u30B9\u30C8\u3055\u308C\u305F\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u5834\u5408\u3001\u30DA\u30FC\u30B8\u306E\u5927\u90E8\u5206"}),"\n",(0,r.jsx)(n.li,{children:"Widgets\uFF08\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\uFF09 \u2014 \u5927\u304D\u306A\u81EA\u5DF1\u5B8C\u7D50\u578B\u306E\u6A5F\u80FD\u90E8\u5206\u3001\u307E\u305F\u306F\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u5927\u90E8\u5206\u3002\u901A\u5E38\u306F\u30E6\u30FC\u30B6\u30FC\u30B7\u30CA\u30EA\u30AA\u5168\u4F53\u3092\u5B9F\u88C5\u3059\u308B"}),"\n",(0,r.jsx)(n.li,{children:"Features\uFF08\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\uFF09 \u2014 \u30D7\u30ED\u30C0\u30AF\u30C8\u6A5F\u80FD\u306E\u518D\u5229\u7528\u53EF\u80FD\u306A\u5B9F\u88C5\u3001\u3064\u307E\u308A\u30E6\u30FC\u30B6\u30FC\u306B\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u3082\u305F\u3089\u3059\u30A2\u30AF\u30B7\u30E7\u30F3"}),"\n",(0,r.jsxs)(n.li,{children:["Entities\uFF08\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\uFF09 \u2014 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u6271\u3046\u30D3\u30B8\u30CD\u30B9\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3001\u4F8B\u3048\u3070",(0,r.jsx)(n.code,{children:"user"}),"\u3084",(0,r.jsx)(n.code,{children:"product"})]}),"\n",(0,r.jsx)(n.li,{children:"Shared\uFF0A\uFF08\u30B7\u30A7\u30A2\u30FC\u30C9\uFF09 \u2014 \u518D\u5229\u7528\u53EF\u80FD\u306A\u30B3\u30FC\u30C9\u3002\u7279\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8/\u30D3\u30B8\u30CD\u30B9\u306E\u8A73\u7D30\u304B\u3089\u5207\u308A\u96E2\u3055\u308C\u305F\u3082\u306E"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\uFF0A \u2014 App\u5C64\u3068Shared\u5C64\u306E\u30EC\u30A4\u30E4\u30FC\u306F\u4ED6\u306E\u30EC\u30A4\u30E4\u30FC\u3068\u306F\u7570\u306A\u308A\u3001\u30B9\u30E9\u30A4\u30B9\u3092\u6301\u305F\u305A\u3001\u76F4\u63A5\u30BB\u30B0\u30E1\u30F3\u30C8\u3067\u69CB\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u30EC\u30A4\u30E4\u30FC\u306E\u7279\u5FB4\u306F\u3001\u30EC\u30A4\u30E4\u30FC\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u306F\u3001\u4E0B\u5C64\u306E\u30EC\u30A4\u30E4\u30FC\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u307F\u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u305D\u306E\u7D50\u679C\u3001\u30EC\u30A4\u30E4\u30FC\u304C\u4E0B\u5C64\u306E\u30EC\u30A4\u30E4\u30FC\u304B\u3089\u306E\u307F\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u308B\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"slices",children:"\u30B9\u30E9\u30A4\u30B9"}),"\n",(0,r.jsx)(n.p,{children:"\u6B21\u306B\u30B9\u30E9\u30A4\u30B9\u304C\u3042\u308A\u3001\u30EC\u30A4\u30E4\u30FC\u3092\u30C9\u30E1\u30A4\u30F3\u3054\u3068\u306B\u5206\u5272\u3057\u307E\u3059\u3002\u30B9\u30E9\u30A4\u30B9\u306E\u540D\u524D\u306F\u81EA\u7531\u306B\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u3044\u304F\u3064\u3067\u3082\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002\u30B9\u30E9\u30A4\u30B9\u306F\u3001\u610F\u5473\u7684\u306B\u95A2\u9023\u3059\u308B\u30B3\u30FC\u30C9\u3092\u30B0\u30EB\u30FC\u30D7\u5316\u3059\u308B\u3053\u3068\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u3057\u3084\u3059\u304F\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30B9\u30E9\u30A4\u30B9\u306F\u540C\u3058\u30EC\u30A4\u30E4\u30FC\u306E\u4ED6\u306E\u30B9\u30E9\u30A4\u30B9\u3092\u4F7F\u7528\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u30B9\u30E9\u30A4\u30B9\u5185\u306E\u30B3\u30FC\u30C9\u306E\u5F37\u3044\u7D50\u5408\u3068\u30B9\u30E9\u30A4\u30B9\u9593\u306E\u5F31\u3044\u7D50\u5408\u304C\u4FDD\u8A3C\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"segments",children:"\u30BB\u30B0\u30E1\u30F3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u30B9\u30E9\u30A4\u30B9\u3001\u304A\u3088\u3073App\u5C64\u3068Shared\u5C64\u306E\u30EC\u30A4\u30E4\u30FC\u306F\u30BB\u30B0\u30E1\u30F3\u30C8\u3067\u69CB\u6210\u3055\u308C\u3001\u30BB\u30B0\u30E1\u30F3\u30C8\u306F\u305D\u306E\u76EE\u7684\u306B\u5FDC\u3058\u3066\u30B3\u30FC\u30C9\u3092\u30B0\u30EB\u30FC\u30D7\u5316\u3057\u307E\u3059\u3002\u30BB\u30B0\u30E1\u30F3\u30C8\u306E\u540D\u524D\u306F\u6A19\u6E96\u3067\u56FA\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u304C\u3001\u6700\u3082\u4E00\u822C\u7684\u306A\u76EE\u7684\u306E\u305F\u3081\u306B\u3044\u304F\u3064\u304B\u306E\u5171\u901A\u306E\u540D\u524D\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui"})," \u2014 \u8868\u793A\u306B\u95A2\u9023\u3059\u308B\u3059\u3079\u3066: UI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30BF\u30FC\u3001\u30B9\u30BF\u30A4\u30EB\u306A\u3069"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api"})," \u2014 \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3068\u306E\u3084\u308A\u53D6\u308A: \u30EA\u30AF\u30A8\u30B9\u30C8\u95A2\u6570\u3001\u30C7\u30FC\u30BF\u578B\u3001\u30DE\u30C3\u30D1\u30FC"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"model"})," \u2014 \u30C7\u30FC\u30BF\u30E2\u30C7\u30EB: \u30D0\u30EA\u30C7\u30FC\u30B7\u30E7\u30F3\u30B9\u30AD\u30FC\u30DE\u3001\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3001\u30B9\u30C8\u30EC\u30FC\u30B8\u3001\u30D3\u30B8\u30CD\u30B9\u30ED\u30B8\u30C3\u30AF"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib"})," \u2014 \u4ED6\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u304C\u5FC5\u8981\u3068\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u30B3\u30FC\u30C9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config"})," \u2014 \u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3068\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u30D5\u30E9\u30B0"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u5E38\u3001\u3053\u308C\u3089\u306E\u30BB\u30B0\u30E1\u30F3\u30C8\u306F\u307B\u3068\u3093\u3069\u306E\u30EC\u30A4\u30E4\u30FC\u306B\u5341\u5206\u3067\u3042\u308B\u305F\u3081\u3001\u72EC\u81EA\u306E\u30BB\u30B0\u30E1\u30F3\u30C8\u306FShared\u5C64\u3084App\u5C64\u3067\u306E\u307F\u4F5C\u6210\u3055\u308C\u308B\u3053\u3068\u304C\u591A\u3044\u3067\u3059\u3002\u3057\u304B\u3057\u3001\u3053\u308C\u306F\u53B3\u683C\u306A\u30EB\u30FC\u30EB\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"advantages",children:"\u5229\u70B9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4E00\u8CAB\u6027"}),(0,r.jsx)(n.br,{}),"\n","\u69CB\u9020\u304C\u6A19\u6E96\u5316\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u3088\u308A\u4E00\u8CAB\u6027\u3092\u6301\u3061\u3001\u65B0\u3057\u3044\u30E1\u30F3\u30D0\u30FC\u306E\u30C1\u30FC\u30E0\u3078\u306E\u53C2\u52A0\u304C\u5BB9\u6613\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5909\u66F4\u3068\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0\u3078\u306E\u8010\u6027"}),(0,r.jsx)(n.br,{}),"\n","\u30EC\u30A4\u30E4\u30FC\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u306F\u3001\u540C\u3058\u30EC\u30A4\u30E4\u30FC\u3084\u4E0A\u5C64\u30EC\u30A4\u30E4\u30FC\u306E\u4ED6\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u4F7F\u7528\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4ED6\u306E\u90E8\u5206\u306B\u4E88\u671F\u3057\u306A\u3044\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u3053\u3068\u306A\u304F\u3001\u5206\u96E2\u3055\u308C\u305F\u5909\u66F4\u3092\u52A0\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30ED\u30B8\u30C3\u30AF\u306E\u518D\u5229\u7528\u5236\u5FA1"}),(0,r.jsx)(n.br,{}),"\n","\u30EC\u30D9\u30EB\u306B\u5FDC\u3058\u3066\u3001\u30B3\u30FC\u30C9\u3092\u975E\u5E38\u306B\u518D\u5229\u7528\u53EF\u80FD\u306B\u3059\u308B\u3053\u3068\u3082\u3001\u975E\u5E38\u306B\u30ED\u30FC\u30AB\u30EB\u306B\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n","\u3053\u308C\u306B\u3088\u308A\u3001",(0,r.jsx)(n.strong,{children:"DRY"}),"\u539F\u5247\u3068\u5B9F\u7528\u6027\u306E\u30D0\u30E9\u30F3\u30B9\u304C\u4FDD\u305F\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30D3\u30B8\u30CD\u30B9\u3068\u30E6\u30FC\u30B6\u30FC\u306E\u30CB\u30FC\u30BA\u306B\u7126\u70B9\u3092\u5F53\u3066\u308B"}),(0,r.jsx)(n.br,{}),"\n","\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u30D3\u30B8\u30CD\u30B9\u30C9\u30E1\u30A4\u30F3\u306B\u5206\u5272\u3055\u308C\u3001\u547D\u540D\u306B\u306F\u30D3\u30B8\u30CD\u30B9\u7528\u8A9E\u306E\u4F7F\u7528\u304C\u5968\u52B1\u3055\u308C\u308B\u305F\u3081\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4ED6\u306E\u7121\u95A2\u4FC2\u306A\u90E8\u5206\u306B\u5B8C\u5168\u306B\u7CBE\u901A\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u30D7\u30ED\u30C0\u30AF\u30C8\u3067\u6709\u7528\u306A\u4F5C\u696D\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"incremental-adoption",children:"\u6BB5\u968E\u7684\u306A\u5C0E\u5165"}),"\n",(0,r.jsx)(n.p,{children:"\u65E2\u5B58\u306E\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u3092FSD\u306B\u79FB\u884C\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u4EE5\u4E0B\u306E\u6226\u7565\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u79C1\u305F\u3061\u81EA\u8EAB\u306E\u79FB\u884C\u7D4C\u9A13\u304B\u3089\u3001\u3053\u306E\u65B9\u6CD5\u306F\u975E\u5E38\u306B\u52B9\u679C\u7684\u3067\u3042\u308B\u3053\u3068\u304C\u5206\u304B\u308A\u307E\u3057\u305F\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"App\u5C64\u3068Shared\u5C64\u306E\u30EC\u30A4\u30E4\u30FC\u3092\u5F90\u3005\u306B\u5F62\u6210\u3057\u3001\u57FA\u76E4\u3092\u4F5C\u308B\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u65E2\u5B58\u306E\u3059\u3079\u3066\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3068\u30DA\u30FC\u30B8\u306B\u5206\u6563\u3055\u305B\u308B\u3002FSD\u306E\u30EB\u30FC\u30EB\u306B\u9055\u53CD\u3059\u308B\u4F9D\u5B58\u95A2\u4FC2\u304C\u3042\u3063\u3066\u3082\u826F\u3044\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30A4\u30F3\u30DD\u30FC\u30C8\u306E\u30EB\u30FC\u30EB\u9055\u53CD\u3092\u5F90\u3005\u306B\u4FEE\u6B63\u3057\u306A\u304C\u3089\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3084\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u3092\u62BD\u51FA\u3059\u308B\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0\u4E2D\u306B\u65B0\u3057\u3044\u5927\u304D\u306A\u306A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3084\u3001\u90E8\u5206\u7684\u306A\u30EA\u30D5\u30A1\u30AF\u30BF\u30EA\u30F3\u30B0\u306F\u907F\u3051\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"\u6B21\u306E\u30B9\u30C6\u30C3\u30D7"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FSD\u306E\u8003\u3048\u65B9\u3092\u7406\u89E3\u3057\u305F\u3044\uFF1F"})," ",(0,r.jsx)(n.a,{href:"/docs/get-started/tutorial",children:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB"}),"\u3092\u8AAD\u3093\u3067\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u4F8B\u3092\u898B\u3066\u5B66\u3073\u305F\u3044\uFF1F"})," ",(0,r.jsx)(n.a,{href:"/examples",children:"\u5B9F\u88C5\u4F8B\u30BB\u30AF\u30B7\u30E7\u30F3"}),"\u306B\u305F\u304F\u3055\u3093\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8CEA\u554F\u304C\u3042\u308B\uFF1F"})," ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/S8MzWTUsmp",children:"Discord\u30C1\u30E3\u30F3\u30CD\u30EB"}),"\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u8CEA\u554F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8117:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg"},9938:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var i=s(5271);let r={},l=i.createContext(r);function d(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);