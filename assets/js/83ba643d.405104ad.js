"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"How to write your own Virtual DOM",date:new Date("2018-06-13T14:26:50.000Z"),tags:[]},l="How to write your own Virtual DOM",i={permalink:"/Virtual-DOM",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/Virtual-DOM.md",source:"@site/blog/Virtual-DOM.md",title:"How to write your own Virtual DOM",description:"\u5f15\u7528\u6587\u7ae0\u94fe\u63a5",date:"2018-06-13T14:26:50.000Z",formattedDate:"June 13, 2018",tags:[],readingTime:.655,truncated:!1,authors:[],frontMatter:{title:"How to write your own Virtual DOM",date:"2018-06-13T14:26:50.000Z",tags:[]},prevItem:{title:"Element-Clickoutside",permalink:"/element-clickoutside"},nextItem:{title:"js \u5192\u6ce1\u548c\u6355\u83b7\u4e8b\u4ef6",permalink:"/captch-bubbling"}},u={authorsImageUrls:[]},c=[{value:"Representing our DOM Tree",id:"representing-our-dom-tree",level:2}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060"},"\u5f15\u7528\u6587\u7ae0\u94fe\u63a5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Virtual DOM is any kind of representation of a real DOM"),(0,a.kt)("li",{parentName:"ul"},"When we change something in our Virtual DOM Tree, we get a new Virtual Tree. Algorithm compares these two trees (old and new), finds differences and makes only necessary small changes to real DOM so it reflects virtual")),(0,a.kt)("h2",{id:"representing-our-dom-tree"},"Representing our DOM Tree"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"    <ul class=\u201dlist\u201d>\n        <li>item 1</li>\n        <li>item 2</li>\n    </ul>\n")),(0,a.kt)("p",null,"turn to Js Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    { type: \u2018ul\u2019, props: { \u2018class\u2019: \u2018list\u2019 }, children: [\n        { type: \u2018li\u2019, props: {}, children: [\u2018item 1\u2019] },\n        { type: \u2018li\u2019, props: {}, children: [\u2018item 2\u2019] }\n    ] }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We represent DOM elements with objects like")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    { type: \u2018\u2026\u2019, props: { \u2026 }, children: [ \u2026 ] }\n")))}s.isMDXComponent=!0}}]);