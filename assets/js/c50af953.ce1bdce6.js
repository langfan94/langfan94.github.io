"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(n),g=a,f=s["".concat(c,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"golang/Mutex",date:new Date("2019-12-26T15:56:47.000Z"),tags:["golang"]},l="Mutex",u={permalink:"/golang-Mutex",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/golang-Mutex.md",source:"@site/blog/golang-Mutex.md",title:"golang/Mutex",description:"* Mutex \u662f\u4e92\u65a5\u9501\u3002",date:"2019-12-26T15:56:47.000Z",formattedDate:"December 26, 2019",tags:[{label:"golang",permalink:"/tags/golang"}],readingTime:.62,truncated:!1,authors:[],frontMatter:{title:"golang/Mutex",date:"2019-12-26T15:56:47.000Z",tags:["golang"]},prevItem:{title:"two-eggs",permalink:"/two-eggs"},nextItem:{title:"Javascript-decorators",permalink:"/Javascript-decorators"}},c={authorsImageUrls:[]},i=[{value:"func(* Mutex) Lock",id:"func-mutex-lock",level:2},{value:"func(* Mutex) Unlock",id:"func-mutex-unlock",level:2}],p={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mutex \u662f\u4e92\u65a5\u9501\u3002"),(0,a.kt)("li",{parentName:"ul"},"0\u503c\u5c31\u662f unlocked \u72b6\u6001\u7684 Mutex"),(0,a.kt)("li",{parentName:"ul"},"Mutex \u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\u4e4b\u540e\u4e0d\u80fd\u88ab\u590d\u5236")),(0,a.kt)("h2",{id:"func-mutex-lock"},"func(* Mutex) Lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"    func (m *Mutex) Lock()\n")),(0,a.kt)("h2",{id:"func-mutex-unlock"},"func(* Mutex) Unlock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"    func (m *Mutex) Unlock()\n")),(0,a.kt)("p",null,"\u89e3\u9501\u5df2\u7ecf\u89e3\u9501\u7684Mutex, \u8fd0\u884c\u65f6\u5019\u62a5\u9519"),(0,a.kt)("p",null,"\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u9501,\u7136\u540e\u53e6\u5916\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u89e3\u9501\u5b83"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'    package main\n\nimport (\n    "sync"\n    "time"\n)\n\n// Mutex lock \u53ef\u4ee5\u88ab\u522b\u7684\u7ebf\u7a0b unlock --------\nfunc main() {\n    var mu sync.Mutex\n    go func() {\n        mu.Lock()\n        time.Sleep(10 * time.Second)\n        mu.Unlock()\n    }()\n    time.Sleep(time.Second)\n    mu.Unlock()\n    select {}\n}\n')))}m.isMDXComponent=!0}}]);