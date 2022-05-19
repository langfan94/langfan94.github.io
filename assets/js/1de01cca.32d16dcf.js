"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2763],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],l={title:"\u8de8\u57df\u6280\u672f",date:new Date("2018-06-21T14:45:29.000Z"),tags:[]},i="\u5176\u4ed6\u8de8\u57df\u6280\u672f",u={permalink:"/cors",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/cors.md",source:"@site/blog/cors.md",title:"\u8de8\u57df\u6280\u672f",description:"\u56feping",date:"2018-06-21T14:45:29.000Z",formattedDate:"June 21, 2018",tags:[],readingTime:3.17,truncated:!1,authors:[],frontMatter:{title:"\u8de8\u57df\u6280\u672f",date:"2018-06-21T14:45:29.000Z",tags:[]},prevItem:{title:"\u6570\u636e\u5b58\u50a8",permalink:"/storage"},nextItem:{title:"Element-Clickoutside",permalink:"/element-clickoutside"}},p={authorsImageUrls:[]},s=[{value:"\u56feping",id:"\u56feping",level:2},{value:"demo",id:"demo",level:3},{value:"JSONP",id:"jsonp",level:2},{value:"demo",id:"demo-1",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u56feping"},"\u56feping"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\\<img",">","\u6807\u7b7e\u5b9e\u73b0\u8de8\u57df\uff0c\u4f7f\u7528\u5b83\u4eec\u7684onload\u548conerror\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6765\u786e\u5b9a\u662f\u5426\u6536\u5230\u4e86\u76f8\u5e94\uff0c\u901a\u8fc7\u56fe\u50cfPing,\u6d4f\u89c8\u5668\u5f97\u4e0d\u5230\u4efb\u4f55\u5177\u4f53\u7684\u6570\u636e,\u4f46\u901a\u8fc7\u76d1\u542cload\u548cerror\u4e8b\u4ef6,\u5b83\u80fd\u77e5\u9053\u54cd\u5e94\u662f\u4ec0\u4e48\u65f6\u5019\u63a5\u6536\u9053\u7684\u3002")),(0,a.kt)("h3",{id:"demo"},"demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    var img = new Image();\n    img.onload = img.onerror = function() {\n        alert('Done!');\n    }\n    img.src = \"http://www.example.com/test?name=Nicholas\";\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u521b\u5efa\u4e86\u4e00\u4e2aImage\u7684\u5b9e\u4f8b,\u7136\u540e\u5c06onload \u548c\u3000onerror\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6307\u5b9a\u4e3a\u540c\u4e00\u4e2a\u51fd\u6570\u3002\u8fd9\u6837\u65e0\u8bba\u662f\u4ec0\u4e48\u54cd\u5e94,\u53ea\u8981\u8bf7\u6c42\u5b8c\u6210,\u5c31\u80fd\u5f97\u5230\u901a\u77e5.\u8bf7\u6c42\u4ece\u8bbe\u7f6esrc\u5c5e\u6027\u7684\u90a3\u4e00\u523b\u5f00\u59cb,\u800c\u8fd9\u4e2a\u4f8b\u5b50\u5728\u8bf7\u6c42\u4e2d\u53d1\u9001\u4e86\u4e00\u4e2aname\u53c2\u6570\u3002\n\u56fe\u50cfping\u6700\u5e38\u7528\u4e8e\u8ddf\u8e2a\u7528\u6237\u70b9\u51fb\u9875\u9762\u6216\u52a8\u6001\u5e7f\u544a\u66dd\u5149\u6b21\u6570\u3002\u56fe\u50cfPing\u6709\u4e24\u4e2a\u4e3b\u8981\u7684\u7f3a\u70b9,\u4e00\u662f\u53ea\u80fd\u53d1\u9001Get\u8bf7\u6c42,\u4e8c\u662f\u65e0\u6cd5\u8bbf\u95ee\u670d\u52a1\u5668\u7684\u54cd\u5e94\u6587\u672c\u3002")),(0,a.kt)("h2",{id:"jsonp"},"JSONP"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"JSONP \u662fJSON with padding(\u586b\u5145\u5f0fJSON\u6216\u53c2\u6570\u5f0fJSON)\u7684\u7b80\u5199\uff0c\u662f\u5e94\u7528JSON\u7684\u4e00\u79cd\u65b0\u65b9\u6cd5")),(0,a.kt)("h3",{id:"demo-1"},"demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'    function handleResponse(response) {\n        alert(\'You` are at IP\' + response.ip + ", which is in" + response.city + ", " + response.response.regin_name);        \n    }\n    var script = document.createElement("script");\n    script.src = "http://freegeoip.net/json/?callback=handleResponse"\n    document.body.insertBefore(script, document.body.firstChild);\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f18\u70b9\u662f\u80fd\u591f\u76f4\u63a5\u8bbf\u95ee\u54cd\u5e94\u6587\u672c,\u652f\u6301\u5728\u6d4f\u89c8\u5668\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u53cc\u5411\u901a\u4fe1\u3002\u4f46\u662f\u7f3a\u70b9\u6709\u53ef\u80fd\u5728\u54cd\u5e94\u4e2d\u5939\u5e26\u4e00\u4e9b\u6076\u610f\u4ee3\u7801\u3002H5\u7ed9\\<script",">","\u5143\u7d20\u65b0\u589e\u4e86\u4e00\u4e2aonerror\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u4f46\u662f\u76ee\u524d\u8fd8\u6ca1\u6709\u5f97\u5230\u4efb\u4f55\u6d4f\u89c8\u5668\u7684\u652f\u6301\u3002")),(0,a.kt)("h1",{id:"comet"},"Comet"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6307\u7684\u662f\u4e00\u79cd\u66f4\u9ad8\u7ea7\u7684Ajax\u6280\u672f,Ajax\u662f\u4e00\u79cd\u4ece\u9875\u9762\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u6570\u636e\u7684\u6280\u672f,\u800cComet\u5219\u662f\u4e00\u79cd\u670d\u52a1\u5668\u5411\u9875\u9762\u63a8\u9001\u6570\u636e\u7684\u6280\u672f\u3002Comet\u80fd\u591f\u8ba9\u4fe1\u606f\u8fd1\u4e4e\u5b9e\u65f6\u7684\u88ab\u63a8\u9001\u5230\u9875\u9762\u4e0a,\u975e\u5e38\u9002\u5408\u5904\u7406\u4f53\u80b2\u6bd4\u8d5b\u7684\u5206\u6570\u548c\u80a1\u7968\u7684\u62a5\u4ef7\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u77ed\u8f6e\u8be2: \u6d4f\u89c8\u5668\u5b9a\u65f6\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\n\u957f\u8f6e\u8be2: \u9875\u9762\u53d1\u8d77\u4e00\u4e2a\u8bf7\u6c42,\u7136\u540e\u670d\u52a1\u5668\u4e00\u76f4\u4fdd\u6301\u8fde\u63a5\u6253\u5f00,\u76f4\u5230\u6709\u6570\u636e\u53ef\u53d1\u9001\u3002\u53d1\u9001\u5b8c\u6570\u636e\u4e4b\u540e,\u6d4f\u89c8\u5668\u5173\u95ed\u8fde\u63a5,\u968f\u5373\u53c8\u53d1\u8d77\u4e00\u4e2a\u5230\u670d\u52a1\u5668\u7684\u65b0\u8bf7\u6c42\u3002\nComet \u5b9e\u73b0\u7684\u662fHTTP\u6d41\u3002\u6d41\u4e0d\u540c\u4e8e\u4e0a\u8ff0\u4e24\u79cd\u8f6e\u8be2,\u56e0\u4e3a\u5b83\u5728\u9875\u9762\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u53ea\u4f7f\u7528\u4e00\u4e2aHTTP\u8fde\u63a5.\u5177\u4f53\u6765\u8bf4\u5c31\u662f\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42,\u800c\u670d\u52a1\u5668\u4fdd\u6301\u8fde\u63a5\u6253\u5f00,\u7136\u540e\u5468\u671f\u6027\u7684\u5411\u6d4f\u89c8\u5668\u53d1\u9001\u6570\u636e\u3002")))}d.isMDXComponent=!0}}]);