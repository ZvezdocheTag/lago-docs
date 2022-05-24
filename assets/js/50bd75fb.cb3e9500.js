"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8129],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_OmH5";function o(t){var e=t.children,n=t.hidden,o=t.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(2389),o=n(7392),u=n(7094),i=n(2466),s=n(6010),p="tabList_uSqn",c="tabItem_LplD";function m(t){var e,n,l,m=t.lazy,d=t.block,f=t.defaultValue,g=t.values,b=t.groupId,k=t.className,y=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:y.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),h=(0,o.l)(N,(function(t,e){return t.value===e.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===f?f:null!=(e=null!=f?f:null==(n=y.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=y[0])?void 0:l.props.value;if(null!==v&&!N.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),x=T.tabGroupChoices,S=T.setTabGroupChoices,O=(0,a.useState)(v),_=O[0],j=O[1],w=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=x[b];null!=C&&C!==_&&N.some((function(t){return t.value===C}))&&j(C)}var P=function(t){var e=t.currentTarget,n=w.indexOf(e),r=N[n].value;r!==_&&(E(e),j(r),null!=b&&S(b,r))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=w.indexOf(t.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(t.currentTarget)-1;n=w[a]||w[w.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},k)},N.map((function(t){var e=t.value,n=t.label,l=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:function(t){return w.push(t)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":_===e})}),null!=n?n:e)}))),m?(0,a.cloneElement)(y.filter((function(t){return t.props.value===_}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==_})}))))}function d(t){var e=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(e)},t))}},8575:function(t,e,n){n.r(e),n.d(e,{Comment:function(){return f},NotNullable:function(){return d},Type:function(){return m},assets:function(){return p},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=(n(9877),n(2360),["components"]),u={sidebar_position:1},i="The customer object",s={unversionedId:"api/customers/customer-object",id:"api/customers/customer-object",title:"The customer object",description:"This object represents a customer of your business.",source:"@site/docs/api/02_customers/customer-object.mdx",sourceDirName:"api/02_customers",slug:"/api/customers/customer-object",permalink:"/docs/api/customers/customer-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Getting started",permalink:"/docs/api/intro"},next:{title:"Create or update a customer",permalink:"/docs/api/customers/create-update-customer"}},p={},c=[{value:"Schema",id:"schema",level:2}],m=function(t){var e=t.children;t.color;return(0,l.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},d=function(t){var e=t.children;t.color;return(0,l.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},f=function(t){var e=t.children;t.color;return(0,l.kt)("span",{style:{fontSize:"12px"}},e)},g={toc:c,Type:m,NotNullable:d,Comment:f};function b(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-customer-object"},"The customer object"),(0,l.kt)("p",null,"This object represents a customer of your business.",(0,l.kt)("br",null),"\nIt lets you create a customer, but also track usage and create invoices for the same customer."),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customer": {\n    "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "address_line1": "5230 Penfield Ave",\n    "address_line2": null,\n    "city": "Woodland Hills",\n    "country": "US",\n    "created_at": "2022-04-29T08:59:51Z",\n    "email": "dinesh@piedpiper.test",\n    "legal_name": "Coleman-Blair",\n    "legal_number": "49-008-2965",\n    "logo_url": "http://hooli.com/logo.png",\n    "name": "Gavin Belson",\n    "phone": "1-171-883-3711 x245",\n    "state": "CA",\n    "url": "http://hooli.com",\n    "vat_rate": 12.5,\n    "zipcode": "91364"\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(d,{mdxType:"NotNullable"},"Not nullable")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"customer_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(d,{mdxType:"NotNullable"},"Not nullable")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"address_line1")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"First line of the billing address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"address_line2")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Second line of the billing address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"address_line2")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Second line of the billing address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"city")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"City of the customer's billing address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"country")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String"),(0,l.kt)("br",null),(0,l.kt)(f,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"ISO 3166 alpha 2 Country code."))),(0,l.kt)("td",{parentName:"tr",align:null},"Country code of the customer's billing address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"email")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Email of the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"legal_name")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Legal company name of the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"legal_number")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Legal company number of the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"logo_url")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Logo URL of the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Full name of the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"phone")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Phone number of the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"state")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"State of the customer's billing address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"url")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom URL of the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"vat_rate")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Float")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom VAT rate applied to the customer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"zipcode")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Zipcode of the customer's billing address")))))}b.isMDXComponent=!0}}]);