"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,l(l({ref:t},i),{},{components:n})):r.createElement(g,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"co",date:new Date("2019-12-05T18:24:31.000Z"),tags:["generator"]},l="generator function",c={permalink:"/co",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/co.md",source:"@site/blog/co.md",title:"co",description:"read tree files in order:f1.txt, f2.txt, f3.txt",date:"2019-12-05T18:24:31.000Z",formattedDate:"December 5, 2019",tags:[{label:"generator",permalink:"/tags/generator"}],readingTime:.68,truncated:!1,authors:[],frontMatter:{title:"co",date:"2019-12-05T18:24:31.000Z",tags:["generator"]},prevItem:{title:"Javascript-decorators",permalink:"/Javascript-decorators"},nextItem:{title:"ios-input-bug",permalink:"/ios-input-bug"}},s={authorsImageUrls:[]},u=[{value:"read.js",id:"readjs",level:2},{value:"f1.txt",id:"f1txt",level:2}],i={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"read tree files in order:f1.txt, f2.txt, f3.txt "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"fs.readFile: asynchronous return file data")),(0,a.kt)("h2",{id:"readjs"},"read.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\n\nfunction getFileResult(path) {\n  return new Promise((resolve, reject) => {\n    fs.readFile(path, (err, data) => {\n      if(err) {\n        reject(err);\n      }\n      resolve(data);\n    })\n  })\n}\n\nfunction* read() {\n  yield getFileResult('./f1.txt');\n  yield getFileResult('./f2.txt');\n  yield getFileResult('./f3.txt');\n}\n\n// Manual Execution\n// const g = read();\n// g.next().value.then(res => {\n//   console.log('ressss1', res.toString());\n// })\n\n// g.next().value.then(res => {\n//   console.log('resss2', res.toString());\n// })\n\n// Auto Execution\nfunction autoRun(gen) {\n  const g = gen();\n  let arr = [];\n  function run(gObject) {\n    const {\n      value,\n      done\n    } = gObject.next();\n    console.log('value', value);\n\n    if(done) {\n      console.log('arr', arr);\n      return arr;\n    }\n    value.then(res => {\n      console.log('res', res);\n      arr.push(res.toString());\n      run(gObject);\n    })\n  }\n  run(g);\n}\n\nautoRun(read);\n\n")),(0,a.kt)("h2",{id:"f1txt"},"f1.txt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"11111111\n")),(0,a.kt)("p",null,"f2.txt and f3.txt as same as f1.txt"))}p.isMDXComponent=!0}}]);