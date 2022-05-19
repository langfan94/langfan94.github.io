"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4787],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(r),f=o,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4932:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Merge-Sort",date:new Date("2021-12-20T16:09:15.000Z"),tags:["algorithm"]},u="Timsort",c={permalink:"/Merge-Sort",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/Merge-Sort.md",source:"@site/blog/Merge-Sort.md",title:"Merge-Sort",description:'Timsort \u662f\u4e00\u79cd\u6df7\u5408\u7a33\u5b9a\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u6e90\u81ea\u5408\u5e76\u6392\u5e8f\u548c\u63d2\u5165\u6392\u5e8f\uff0c\u65e8\u5728\u8f83\u597d\u5730\u5904\u7406\u771f\u5b9e\u4e16\u754c\u4e2d\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u3002\u5b83\u4f7f\u7528\u4e86 Peter Mcllroy \u7684"\u4e50\u89c2\u6392\u5e8f\u548c\u4fe1\u606f\u7406\u8bba\u4e0a\u590d\u6742\u6027"\u4e2d\u7684\u6280\u672f\uff0c\u53c2\u89c1 \u7b2c\u56db\u5c4a\u5e74\u5ea6ACM-SIAM\u79bb\u6563\u7b97\u6cd5\u7814\u8ba8\u4f1a\u8bba\u6587\u96c6\uff0c\u7b2c467-474\u9875\uff0c1993\u5e74\u3002 \u5b83\u7531 Tim Peters \u57282002\u5e74\u5b9e\u73b0\uff0c\u5e76\u5e94\u7528\u4e8e Python\u7f16\u7a0b\u8bed\u8a00\u3002\u8be5\u7b97\u6cd5\u901a\u8fc7\u67e5\u627e\u5df2\u7ecf\u6392\u597d\u5e8f\u7684\u6570\u636e\u5b50\u5e8f\u5217\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u5bf9\u5269\u4f59\u90e8\u5206\u66f4\u6709\u6548\u5730\u6392\u5e8f\u3002 \u8be5\u7b97\u6cd5\u901a\u8fc7\u4e0d\u65ad\u5730\u5c06\u7279\u5b9a\u5b50\u5e8f\u5217\uff08\u79f0\u4e3a\u4e00\u4e2a run \uff09\u4e0e\u73b0\u6709\u7684 run \u5408\u5e76\uff0c\u76f4\u5230\u6ee1\u8db3\u67d0\u4e9b\u6761\u4ef6\u4e3a\u6b62\u6765\u8fbe\u6210\u7684\u66f4\u6709\u6548\u7684\u6392\u5e8f\u3002 \u4ece 2.3 \u7248\u672c\u8d77\uff0cTimsort \u4e00\u76f4\u662f Python \u7684\u6807\u51c6\u6392\u5e8f\u7b97\u6cd5\u3002 \u5b83\u8fd8\u88ab Java SE7[4], Android platform[5], GNU Octave,[6] \u8c37\u6b4c\u6d4f\u89c8\u5668,[7] \u548c Swift[8] \u7528\u4e8e\u5bf9\u975e\u539f\u59cb\u7c7b\u578b\u7684\u6570\u7ec4\u6392\u5e8f\u3002',date:"2021-12-20T16:09:15.000Z",formattedDate:"December 20, 2021",tags:[{label:"algorithm",permalink:"/tags/algorithm"}],readingTime:2.39,truncated:!1,authors:[],frontMatter:{title:"Merge-Sort",date:"2021-12-20T16:09:15.000Z",tags:["algorithm"]},prevItem:{title:"TimSort",permalink:"/TimSort"},nextItem:{title:"two-eggs",permalink:"/two-eggs"}},s={authorsImageUrls:[]},p=[{value:"\u5408\u5e76\u6392\u5e8f\u5b9e\u73b0",id:"\u5408\u5e76\u6392\u5e8f\u5b9e\u73b0",level:2},{value:"TimSort \u548c quicksort",id:"timsort-\u548c-quicksort",level:2}],m={toc:p};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Timsort \u662f\u4e00\u79cd\u6df7\u5408\u7a33\u5b9a\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u6e90\u81ea\u5408\u5e76\u6392\u5e8f\u548c\u63d2\u5165\u6392\u5e8f\uff0c\u65e8\u5728\u8f83\u597d\u5730\u5904\u7406\u771f\u5b9e\u4e16\u754c\u4e2d\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u3002\u5b83\u4f7f\u7528\u4e86 Peter Mcllroy \u7684"\u4e50\u89c2\u6392\u5e8f\u548c\u4fe1\u606f\u7406\u8bba\u4e0a\u590d\u6742\u6027"\u4e2d\u7684\u6280\u672f\uff0c\u53c2\u89c1 \u7b2c\u56db\u5c4a\u5e74\u5ea6ACM-SIAM\u79bb\u6563\u7b97\u6cd5\u7814\u8ba8\u4f1a\u8bba\u6587\u96c6\uff0c\u7b2c467-474\u9875\uff0c1993\u5e74\u3002 \u5b83\u7531 Tim Peters \u57282002\u5e74\u5b9e\u73b0\uff0c\u5e76\u5e94\u7528\u4e8e Python\u7f16\u7a0b\u8bed\u8a00\u3002\u8be5\u7b97\u6cd5\u901a\u8fc7\u67e5\u627e\u5df2\u7ecf\u6392\u597d\u5e8f\u7684\u6570\u636e\u5b50\u5e8f\u5217\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u5bf9\u5269\u4f59\u90e8\u5206\u66f4\u6709\u6548\u5730\u6392\u5e8f\u3002 \u8be5\u7b97\u6cd5\u901a\u8fc7\u4e0d\u65ad\u5730\u5c06\u7279\u5b9a\u5b50\u5e8f\u5217\uff08\u79f0\u4e3a\u4e00\u4e2a run \uff09\u4e0e\u73b0\u6709\u7684 run \u5408\u5e76\uff0c\u76f4\u5230\u6ee1\u8db3\u67d0\u4e9b\u6761\u4ef6\u4e3a\u6b62\u6765\u8fbe\u6210\u7684\u66f4\u6709\u6548\u7684\u6392\u5e8f\u3002 \u4ece 2.3 \u7248\u672c\u8d77\uff0cTimsort \u4e00\u76f4\u662f Python \u7684\u6807\u51c6\u6392\u5e8f\u7b97\u6cd5\u3002 \u5b83\u8fd8\u88ab Java SE7',"[4]",", Android platform","[5]",", GNU Octave,","[6]"," \u8c37\u6b4c\u6d4f\u89c8\u5668,","[7]"," \u548c Swift","[8]"," \u7528\u4e8e\u5bf9\u975e\u539f\u59cb\u7c7b\u578b\u7684\u6570\u7ec4\u6392\u5e8f\u3002")),(0,a.kt)("h2",{id:"\u5408\u5e76\u6392\u5e8f\u5b9e\u73b0"},"\u5408\u5e76\u6392\u5e8f\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  /* Merge-sort */\n  function merge(left, right) {\n    const arr = [];\n    while (left.length > 0 && right.length > 0) {\n      if (left[0] < right[0]) {\n        arr.push(left.shift());\n      } else {\n        arr.push(right.shift());\n      }\n    }\n\n    return [...arr, ...left, ...right];\n  }\n\n  function divSort(array) {\n    const half = array.length / 2;\n    if (array.length < 2) {\n      return array;\n    }\n\n    const left = array.splice(0, half);\n    return merge(divSort(left), divSort(array));\n  }\n\n  const testArray = [4, 8, 7, 2, 11, 1, 3];\n  console.log(divSort(testArray));\n")),(0,a.kt)("h2",{id:"timsort-\u548c-quicksort"},"TimSort \u548c quicksort"),(0,a.kt)("p",null,"TimSort\u662f\u9ad8\u5ea6\u4f18\u5316\u7684mergesort\uff0c\u5b83\u6bd4\u65e7\u7684mergesort\u66f4\u7a33\u5b9a\uff0c\u66f4\u5feb\u3002"),(0,a.kt)("p",null,"\u4e0equicksort\u76f8\u6bd4\uff0c\u5b83\u6709\u4e24\u4e2a\u4f18\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u51e0\u4e4e\u6392\u5e8f\u7684\u6570\u636e\u5e8f\u5217\uff08\u5305\u62ec\u53cd\u5411\u6392\u5e8f\u6570\u636e\uff09\u6765\u8bf4\uff0c\u901f\u5ea6\u5feb\u5f97\u4ee4\u4eba\u96be\u4ee5\u7f6e\u4fe1;"),(0,a.kt)("li",{parentName:"ol"},"\u6700\u574f\u7684\u60c5\u51b5\u4ecd\u7136\u662fO\uff08N * LOG\uff08N\uff09\uff09\u3002\n\u8001\u5b9e\u8bf4\uff0c\u6211\u4e0d\u8ba4\u4e3a\uff031\u662f\u4e00\u4e2a\u4f18\u52bf\uff0c\u4f46\u5b83\u7ed9\u6211\u7559\u4e0b\u4e86\u6df1\u523b\u7684\u5370\u8c61\u3002")),(0,a.kt)("p",null,"\u8fd9\u662fQuickSort\u7684\u4f18\u52bf"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"QuickSort\u975e\u5e38\u7b80\u5355\uff0c\u5373\u4f7f\u662f\u9ad8\u5ea6\u4f18\u5316\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u572820\u884c\u5185\u5199\u4e0b\u5b83\u7684pseduo\u4ee3\u7801;"),(0,a.kt)("li",{parentName:"ol"},"QuickSort\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u662f\u6700\u5feb\u7684;"),(0,a.kt)("li",{parentName:"ol"},"\u5185\u5b58\u6d88\u8017\u4e3aLOG\uff08N\uff09\u3002")))}f.isMDXComponent=!0}}]);