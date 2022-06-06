"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6090],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],d={sidebar_position:8},l="Add-ons",s={unversionedId:"guide/addons",id:"guide/addons",title:"Add-ons",description:"Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and elligble for collection straight away.",source:"@site/docs/guide/08_addons.md",sourceDirName:"guide",slug:"/guide/addons",permalink:"/docs/guide/addons",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"guide",previous:{title:"Coupons",permalink:"/docs/guide/coupons"},next:{title:"Ingesting Events",permalink:"/docs/guide/ingesting-events"}},p={},c=[{value:"Create Add-ons",id:"create-add-ons",level:2},{value:"Assign an add-on to a customer",id:"assign-an-add-on-to-a-customer",level:2},{value:"Application scope",id:"application-scope",level:3},{value:"Edit, delete add-ons",id:"edit-delete-add-ons",level:2},{value:"Invoicing the add-ons",id:"invoicing-the-add-ons",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-ons"},"Add-ons"),(0,i.kt)("p",null,"Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and elligble for collection straight away."),(0,i.kt)("p",null,'For instance, Add-ons are really helpful for one time fees, such as "setup fee", "one-time payment" or "customer success fee".'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The value of a coupon is ",(0,i.kt)("strong",{parentName:"p"},"not")," deducted to an add-on. If you want to know more, make sure to read the ",(0,i.kt)("a",{parentName:"p",href:"coupons#application-scope"},"Coupons application scope"),"."))),(0,i.kt)("h2",{id:"create-add-ons"},"Create Add-ons"),(0,i.kt)("p",null,"To create an Add-on through the user interface:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access the ",(0,i.kt)("strong",{parentName:"li"},'"Add-ons"')," section via the side menu;"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Add an Add-on"'),";"),(0,i.kt)("li",{parentName:"ol"},"Choose a ",(0,i.kt)("strong",{parentName:"li"},"name"),", a ",(0,i.kt)("strong",{parentName:"li"},"code")," and a description (optional) for your Add-on;"),(0,i.kt)("li",{parentName:"ol"},"Define its value and currency; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Add add-on"')," to confirm.")),(0,i.kt)("h2",{id:"assign-an-add-on-to-a-customer"},"Assign an add-on to a customer"),(0,i.kt)("p",null,"Here is what you should know about Add-on:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can only apply an add-on to a customer if this customer has an active ",(0,i.kt)("a",{parentName:"li",href:"../guide/plans/subscription"},"subscription"),";"),(0,i.kt)("li",{parentName:"ol"},"The currency of the add-on must match the currency of the subscription; and"),(0,i.kt)("li",{parentName:"ol"},"You can apply ad-libitum an add-on to a customer.")),(0,i.kt)("p",null,"To apply an ad-on to a customer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Actions"')," in the upper-right corner and select ",(0,i.kt)("strong",{parentName:"li"},'"Apply add-on"'),";"),(0,i.kt)("li",{parentName:"ol"},"Select an add-on from the list; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Apply add-on"')," to confirm.")),(0,i.kt)("p",null,"Obviously, you can also apply add-ons via the API (",(0,i.kt)("a",{parentName:"p",href:"../api/applied_add_ons/apply-add-on"},"learn more"),")."),(0,i.kt)("h3",{id:"application-scope"},"Application scope"),(0,i.kt)("p",null,"You can apply the same add-on to a customer ",(0,i.kt)("strong",{parentName:"p"},"as much as you want"),". Add-ons are one-off fees that are invoiced immediately."),(0,i.kt)("p",null,"By assigning an add-on to a customer, you can ",(0,i.kt)("strong",{parentName:"p"},"change the amount and the currency")," for an add-on applied to a customer."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This enables you to apply the same add-on for several customers having a different currency, or if you want to apply a different amount for one of these customers. By using the API endpoint, if the amount and currency are null, Lago will apply the default amount and currency defined by the UI."))),(0,i.kt)("h2",{id:"edit-delete-add-ons"},"Edit, delete add-ons"),(0,i.kt)("p",null,"In the Add-ons section, you can click the ",(0,i.kt)("strong",{parentName:"p"},"ellipsis icon")," to see all available actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Edit"),": allows you to modify the name, code, description and settings of the add-on;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Delete"),": allows you to delete the add-on and remove it from the list (this action cannot be undone).")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You ",(0,i.kt)("strong",{parentName:"p"},"cannot")," edit or delete an add-on if it has been applied to a customer."))),(0,i.kt)("h2",{id:"invoicing-the-add-ons"},"Invoicing the add-ons"),(0,i.kt)("p",null,"As told previously, an ",(0,i.kt)("strong",{parentName:"p"},"add-on is invoiced straigh away"),". You are able to find an assigned add-on through a webhook with ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook_type = invoice.add_on_added")," "),(0,i.kt)("p",null,"By assiging an add-on to a customer, an invoice is generated immediately.\nIt's important to say that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add-ons are ellible to the taxes defined for a customer;"),(0,i.kt)("li",{parentName:"ol"},"Coupons cannot be used to discount the add-on amount.")))}m.isMDXComponent=!0}}]);