"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[572],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(h,r(r({ref:t},s),{},{components:o})):n.createElement(h,r({ref:t},s))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2125:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],p={sidebar_position:7},l="Coupons",c={unversionedId:"guide/coupons",id:"guide/coupons",title:"Coupons",description:"Coupons allow you to offer discounts to your customers. When you apply a coupon to a customer, its value will be deducted from their next invoice(s).",source:"@site/docs/guide/07_coupons.md",sourceDirName:"guide",slug:"/guide/coupons",permalink:"/docs/guide/coupons",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guide",previous:{title:"Customers",permalink:"/docs/guide/customers"},next:{title:"Add-ons",permalink:"/docs/guide/addons"}},s={},u=[{value:"Create coupons",id:"create-coupons",level:2},{value:"Apply coupons",id:"apply-coupons",level:2},{value:"Validity and application periods",id:"validity-and-application-periods",level:3},{value:"Application scope",id:"application-scope",level:3},{value:"Edit, terminate and delete coupons",id:"edit-terminate-and-delete-coupons",level:2},{value:"Remove coupons",id:"remove-coupons",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coupons"},"Coupons"),(0,i.kt)("p",null,"Coupons allow you to offer discounts to your customers. When you apply a coupon to a customer, its value will be deducted from their next invoice(s)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The value of the coupon is deducted from the amount of the invoice before tax."))),(0,i.kt)("h2",{id:"create-coupons"},"Create coupons"),(0,i.kt)("p",null,"To create a coupon through the user interface:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access the ",(0,i.kt)("strong",{parentName:"li"},'"Coupons"')," section via the side menu;"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Add a coupon"'),";"),(0,i.kt)("li",{parentName:"ol"},"Choose a name and a code for your coupon;"),(0,i.kt)("li",{parentName:"ol"},"Define its value and period of validity; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Add coupon"')," to confirm.")),(0,i.kt)("h2",{id:"apply-coupons"},"Apply coupons"),(0,i.kt)("p",null,"Here is what you should know about coupons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can only apply a coupon to a customer if this customer has an active ",(0,i.kt)("a",{parentName:"li",href:"../guide/plans/subscription"},"subscription"),";"),(0,i.kt)("li",{parentName:"ol"},"The currency of the coupon must match the currency of the subscription; and"),(0,i.kt)("li",{parentName:"ol"},"A customer can only benefit from one coupon at a time.")),(0,i.kt)("p",null,"To apply a coupon to a customer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Actions"')," in the upper-right corner and select ",(0,i.kt)("strong",{parentName:"li"},'"Apply coupon"'),";"),(0,i.kt)("li",{parentName:"ol"},"Select a coupon; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Apply coupon"')," to confirm.")),(0,i.kt)("p",null,"You can also apply coupons via the API (",(0,i.kt)("a",{parentName:"p",href:"../api/applied_coupons/apply-coupon"},"learn more"),")."),(0,i.kt)("h3",{id:"validity-and-application-periods"},"Validity and application periods"),(0,i.kt)("p",null,"The validity period defines how much time you have to apply a coupon to a customer before it expires. If the validity period is ",(0,i.kt)("strong",{parentName:"p"},'"Forever"'),", you can apply the coupon at any time. If the validity period is ",(0,i.kt)("strong",{parentName:"p"},'"Multiple days"'),", you must apply the coupon to a customer before the end of the period, otherwise it will be lost."),(0,i.kt)("p",null,"Once a coupon has been applied to a customer, its application periods depends on the customer's subscription. A coupon that has been applied to a customer continues to apply after the end of its validity period."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example:"),(0,i.kt)("p",{parentName:"blockquote"},"On June 16th, you create a $20 coupon that is valid for 10 days."),(0,i.kt)("p",{parentName:"blockquote"},"On June 25th, you decide to apply the coupon to a customer whose subscription is based on a $10 monthly plan that is paid in arrears."),(0,i.kt)("p",{parentName:"blockquote"},"Therefore, the coupon will be applied to both invoices generated at the end of June and at the end of July. Their total amount will be $0.")),(0,i.kt)("h3",{id:"application-scope"},"Application scope"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Coupons are deducted from the total amount of the following invoice(s)"),", including the ",(0,i.kt)("em",{parentName:"p"},"subscription")," (plan amount) and the ",(0,i.kt)("em",{parentName:"p"},"charge")," fees (used for usage-based billing). In case of a coupon's value greater than an invoice, the remaining amount of discount will be applied to the following invoices, until the coupon is totally consumed or removed from a customer."),(0,i.kt)("p",null,"As mentioned previously, the value of the coupon is deducted from the amount of the invoice before tax."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Coupons cannot be applied to Add-ons")," or any other one-off fees"))),(0,i.kt)("h2",{id:"edit-terminate-and-delete-coupons"},"Edit, terminate and delete coupons"),(0,i.kt)("p",null,"In the coupon view, you can click the ",(0,i.kt)("strong",{parentName:"p"},"ellipsis icon")," to see all available actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Edit"),": allows you to modify the name, code and settings of the coupon;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Terminate"),": allows you to deactivate the coupon so that it cannot be applied to any new customer (customers to whom the coupon has already been applied continue to benefit from it); and"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Delete"),": allows you to delete the coupon and remove it from the list (this action cannot be undone).")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You cannot modify the value and validity period of a coupon, or delete it, if it is currently applied to a customer."))),(0,i.kt)("h2",{id:"remove-coupons"},"Remove coupons"),(0,i.kt)("p",null,"To remove a coupon that has been applied to a customer and is still active:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the customer;"),(0,i.kt)("li",{parentName:"ol"},"Locate the coupon under ",(0,i.kt)("strong",{parentName:"li"},'"Overview"'),";"),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"bin icon")," on the right; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Remove coupon"')," to confirm.")),(0,i.kt)("p",null,"The coupon will instantly disappear from the customer view and will not be applied to the next invoice."))}m.isMDXComponent=!0}}]);