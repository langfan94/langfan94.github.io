"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),b=l,y=m["".concat(u,".").concat(b)]||m[b]||c[b]||a;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const a={title:"gulp",date:new Date("2018-07-26T14:32:21.000Z"),tags:[]},o="gulp\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177",i={permalink:"/mygulp",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/mygulp.md",source:"@site/blog/mygulp.md",title:"gulp",description:"\u8f93\u51fa\uff08Emits\uff09\u7b26\u5408\u6240\u63d0\u4f9b\u7684\u5339\u914d\u6a21\u5f0f\uff08glob\uff09\u6216\u8005\u5339\u914d\u6a21\u5f0f\u7684\u6570\u7ec4\uff08array of globs\uff09\u7684\u6587\u4ef6\u3002 \u5c06\u8fd4\u56de\u4e00\u4e2a Vinyl files \u7684 stream \u5b83\u53ef\u4ee5\u88ab piped \u5230\u522b\u7684\u63d2\u4ef6\u4e2d\u3002",date:"2018-07-26T14:32:21.000Z",formattedDate:"July 26, 2018",tags:[],readingTime:1.835,truncated:!1,authors:[],frontMatter:{title:"gulp",date:"2018-07-26T14:32:21.000Z",tags:[]},prevItem:{title:"input_iview",permalink:"/input-iview"},nextItem:{title:"\u56fd\u5185\u6709\u540d\u7684\u524d\u7aef\u6280\u672f\u56e2\u961f\u6280\u672fblog",permalink:"/front-team"}},u={authorsImageUrls:[]},p=[{value:"browserify",id:"browserify",level:2},{value:"vinyl-source-stream",id:"vinyl-source-stream",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8f93\u51fa\uff08Emits\uff09\u7b26\u5408\u6240\u63d0\u4f9b\u7684\u5339\u914d\u6a21\u5f0f\uff08glob\uff09\u6216\u8005\u5339\u914d\u6a21\u5f0f\u7684\u6570\u7ec4\uff08array of globs\uff09\u7684\u6587\u4ef6\u3002 \u5c06\u8fd4\u56de\u4e00\u4e2a Vinyl files \u7684 stream \u5b83\u53ef\u4ee5\u88ab piped \u5230\u522b\u7684\u63d2\u4ef6\u4e2d\u3002")),(0,l.kt)("p",null,"gulp\u662f\u4e00\u4e2a\u6709\u5173Stream\uff08\u6570\u636e\u6d41\uff09\u7684\u6784\u5efa\u7cfb\u7edf,gulp\u672c\u8eab\u4f7f\u7528\u4e86Node\u7684Stream."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'gulp.src("app.js").pipe(babel())\n')),(0,l.kt)("p",null,'\u8fd9\u91ccsrc("app.js")\u4f5c\u4e3a\u6e90\uff0c\u4f5c\u4e3a\u8f93\u5165\u6d41\u5230babel()\u53bb\u8fdb\u884c\u5904\u7406\u3002\n\u8fd9\u79cd\u6d41\u7684\u6784\u5efa\u65b9\u5f0f\u7ed9\u6211\u4eec\u5e26\u6765\u4e86\u65b9\u4fbf\u3002'),(0,l.kt)("p",null,"\u800c\u8fd9\u4e2astream \u662f Vinyl files\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Vinyl is a very simple metadata object that describes a file.\n\u7ffb\u8bd1:Vinyl \u662f\u4e00\u79cd\u7528\u6765\u63cf\u8ff0\u6587\u4ef6\u7684\u975e\u5e38\u7b80\u4fbf\u7684\u4e2d\u4ecb\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"\u5e38\u7528\u7684\u51e0\u4e2aplugin:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"browserify"),(0,l.kt)("li",{parentName:"ul"},"vinyl-source-stream"),(0,l.kt)("li",{parentName:"ul"},"rename"),(0,l.kt)("li",{parentName:"ul"},"gulp-babel")),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u4e00\u4e0bbrowserify\u548cvinyl-source-stream"),(0,l.kt)("h2",{id:"browserify"},"browserify"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Browserify lets you require('modules') in the browser by bundling up all of your dependencies.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Browserify \u901a\u8fc7\u6253\u5305\u6240\u6709\u7684\u4f9d\u8d56,\u8ba9\u4f60\u4eec\u7528require('modules')\u7684\u65b9\u5f0f\u5728\u6d4f\u89c8\u5668\u4e2d\u83b7\u53d6\u6a21\u5757\u3002")),(0,l.kt)("h2",{id:"vinyl-source-stream"},"vinyl-source-stream"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Take, for example, browserify. There are the gulp-browserify and gulpify plugins, which you can use in combination with gulp to get browserify working in your build. Unfortunately, these plugins come with additional overhead: an extra GitHub repository, npm module, maintainer, tests, semantics, etc.")),(0,l.kt)("p",null,"\u4f7f\u7528vinyl-source-stream\u3000\u80fd\u591f\u5f88\u5feb\u7684\u5e2e\u6211\u4eec\u5904\u7406\u4f8b\u5982browserify\u8fd9\u4e9b\u63d2\u4ef6\u7684\u989d\u5916\u7684\u5934\uff0c\u4f8b\u5982an extra GitHub repository"),(0,l.kt)("p",null,"\u81ea\u5df1\u914d\u7f6e\u7684\u4e00\u4e2a\u7b80\u5355\u7684gulp\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var gulp = require(\"gulp\");\nvar babel = require(\"gulp-babel\");\nvar rename = require(\"gulp-rename\");\nvar browserify = require(\"browserify\");\nvar source = require('vinyl-source-stream')\n\ngulp.task(\"babel\", function (cb) {\n  return gulp.src(\"app.js\")\n    .pipe(babel())\n    .pipe(rename('main.js'))\n    .pipe(gulp.dest(\"./\"));\n    cb(err);\n});\n\ngulp.task('browserify', function() {\n  return browserify({\n    entries: 'main.js',\n    debug: true\n  })\n    .bundle()\n    .pipe(source('main.js'))\n    .pipe(gulp.dest('dist'));\n})\n\ngulp.task('default', ['babel', 'browserify'])\n")))}c.isMDXComponent=!0}}]);