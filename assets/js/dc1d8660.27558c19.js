"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2521],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(r),f=o,m=g["".concat(l,".").concat(f)]||g[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9235:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},l="Package pricing for charges",p={permalink:"/changelog/package-pricing",editUrl:"changelog/changelog/package-pricing.md",source:"@site/changelog/package-pricing.md",title:"Package pricing for charges",description:"It is now possible to apply a package pricing model to a charge. To do so:",date:"2022-05-31T12:15:30.000Z",formattedDate:"May 31, 2022",tags:[],readingTime:.38,truncated:!1,authors:[],frontMatter:{},nextItem:{title:"Subscription changes",permalink:"/changelog/subscription-changes"}},u={authorsImageUrls:[]},s=[],g={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is now possible to apply a ",(0,a.kt)("a",{parentName:"p",href:"../docs/guide/plans/charges#the-package-charge-model"},"package pricing model")," to a charge. To do so:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select an existing plan (or create a new one);"),(0,a.kt)("li",{parentName:"ol"},"Add a charge; and"),(0,a.kt)("li",{parentName:"ol"},"Select the package pricing model.")),(0,a.kt)("p",null,"This new pricing model allows you to apply a flat fee to a range of units. The price will be fixed for the entire range, regardless of the number of units consumed by the customer during the billing period."))}f.isMDXComponent=!0}}]);