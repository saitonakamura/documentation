"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([["565"],{9533:function(e,t,a){a.d(t,{CS:()=>f,wj:()=>s,nO:()=>u,iZ:()=>x,n4:()=>c,Ne:()=>Z,ci:()=>k,cH:()=>C});var n=a("2676"),l=a("5271"),r=a("7173"),i=a("8849");function s(){let e=(0,i.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=l.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:r=!1}=e,i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:r});return(0,n.jsx)(o.Provider,{value:i,children:t})}function u(){let e=(0,l.useContext)(o);if(null===e)throw new r.i6("BlogPostProvider");return e}var m=a("1380"),d=a("8600");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(j);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:n,blogTitle:l,permalink:r}}=e,i=`${t.url}${r}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:l,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:l,metadata:r}=e,{date:i,title:s,description:o,lastUpdatedAt:c}=r,u=n.image??l.image,m=l.keywords??[],d=`${t.url}${r.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:s,name:s,description:o,datePublished:i,...f?{dateModified:f}:{},...h(r.authors),...p(u,a,s),...m?{keywords:m}:{}}})(e.content,t,a))}}function x(){let e=s(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:l}=(0,m.Cg)(),{date:r,title:i,description:o,frontMatter:c,lastUpdatedAt:f}=a,x=t.image??c.image,j=c.keywords??[],b=f?g(f):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:i,name:i,description:o,datePublished:r,...b?{dateModified:b}:{},...h(a.authors),...p(x,l,i),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var b=a("3225"),v=a("7431"),N=a("8067"),_=a("5914");function C(e){let{pathname:t}=(0,b.TH)();return(0,l.useMemo)(()=>e.filter(e=>{var a,n;return a=e,n=t,(!a.unlisted||!!(0,_.Mg)(a.permalink,n))&&!0}),[e,t])}function k(e){let t=Object.entries((0,N.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function Z(e){let{items:t,ulClassName:a,liClassName:l,linkClassName:r,linkActiveClassName:i}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:l,children:(0,n.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:r,activeClassName:i,children:e.title})},e.permalink))})}},3557:function(e,t,a){a.d(t,{Z:()=>I});var n=a("2676"),l=a("5271"),r=a("4461"),i=a("8270"),s=a("7549"),o=a("8978"),c=a("9533"),u=a("6310"),m=a("4597");function d(e){let{year:t,yearGroupHeadingClassName:a,children:l}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:a,children:t}),l]})}let g=(0,l.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:l}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(l,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,r]=e;return(0,n.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(l,{items:r})},t)})})}}),h="sidebar_iolm",p="sidebarItemTitle_yluB",f="sidebarItemList_IGH_",x="sidebarItem_oP7O",j="sidebarItemLink_G4Ca",b="sidebarItemLinkActive_giEZ",v="yearGroupHeading_d3zr",N=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,r.Z)(f,"clean-list"),liClassName:x,linkClassName:j,linkActiveClassName:b})},_=(0,l.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,r.Z)(h,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,r.Z)(p,"margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:a,ListComponent:N,yearGroupHeadingClassName:v})]})})});var C=a("7518");let k="yearGroupHeading_J5kx",Z=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function y(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:a,ListComponent:Z,yearGroupHeadingClassName:k})}let P=(0,l.memo)(function(e){return(0,n.jsx)(C.Zo,{component:y,props:e})});function w(e){let{sidebar:t}=e,a=(0,s.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(P,{sidebar:t}):(0,n.jsx)(_,{sidebar:t}):null}function I(e){let{sidebar:t,toc:a,children:l,...s}=e,o=t&&t.items.length>0;return(0,n.jsx)(i.Z,{...s,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(w,{sidebar:t}),(0,n.jsx)("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:l}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},2815:function(e,t,a){a.r(t),a.d(t,{default:()=>f});var n=a("2676");a("5271");var l=a("4461"),r=a("8978");let i=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a("2151"),o=a("7659"),c=a("3557"),u=a("2362"),m=a("4597");let d="tag__rO2";function g(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:d,children:(0,n.jsx)(u.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function h(e){let{tags:t}=e,a=function(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(g,{letterEntry:e},e.letter))})}var p=a("4513");function f(e){let{tags:t,sidebar:a}=e,r=i();return(0,n.jsxs)(s.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage),children:[(0,n.jsx)(s.d,{title:r}),(0,n.jsx)(p.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsx)(m.Z,{as:"h1",children:r}),(0,n.jsx)(h,{tags:t})]})]})}},2362:function(e,t,a){a.d(t,{Z:()=>s});var n=a("2676");a("5271");var l=a("4461"),r=a("7431");let i={tag:"tag_I_cU",tagRegular:"tagRegular__r8u",tagWithCount:"tagWithCount_k3X2"};function s(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,n.jsxs)(r.Z,{href:t,title:o,className:(0,l.Z)(i.tag,s?i.tagWithCount:i.tagRegular),children:[a,s&&(0,n.jsx)("span",{children:s})]})}}}]);