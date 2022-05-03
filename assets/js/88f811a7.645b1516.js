"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8408],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),a=t(7294),o=t(2389),i=t(5979),l=t(6010),u="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,i.UB)(),y=_.tabGroupChoices,k=_.setTabGroupChoices,w=(0,a.useState)(g),T=w[0],E=w[1],O=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==T&&v.some((function(e){return e.value===j}))&&E(j)}var P=function(e){var n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==T&&(N(n),E(r),null!=m&&k(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function s(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},3113:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(9877),l=t(8215),u=["components"],c={sidebar_position:5},s="Webhooks",d={unversionedId:"api-reference/webhooks",id:"api-reference/webhooks",title:"Webhooks",description:"Webhooks are HTTP notifications sent from Lago to your application.",source:"@site/docs/09_api-reference/05_webhooks.md",sourceDirName:"09_api-reference",slug:"/api-reference/webhooks",permalink:"/docs/api-reference/webhooks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09_api-reference/05_webhooks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/api-reference/events"},next:{title:"Invoices",permalink:"/docs/api-reference/invoices"}},p={},m=[{value:"Message format",id:"message-format",level:2},{value:"Signature",id:"signature",level:2},{value:"Messages",id:"messages",level:2},{value:"Invoice created",id:"invoice-created",level:3},{value:"invoice",id:"invoice",level:4}],f={toc:m};function b(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"Webhooks are HTTP notifications sent from Lago to your application."),(0,o.kt)("p",null,"The messages are sent as a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," to the URL defined in the settings of your Lago workspace."),(0,o.kt)("h2",{id:"message-format"},"Message format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST __WEBHOOK_URL__")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "__TYPE__",\n  "object_type": "OBJECT_TYPE",\n  "__OBJECT__": {}\n')),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("p",null,"Allong with the payload the message contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Lago-Signature")," HTTP header."),(0,o.kt)("p",null,"It is used to ensure the message is comming from Lago and that the message has not been altered."),(0,o.kt)("p",null,"To verify the signature, you must decode the signature and compare the result with the body of the webhook."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ruby",label:"Ruby",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"decoded_signature = JWT.decode(\n  request.header['X-Lago-Signature'],\n  __PUBLIC_KEY__,\n  true,\n  {\n    algorithm: 'RS256',\n    iss: \"https://api.getlago.com\",\n    verify_iss: true,\n  },\n).first\n\ndecoded_signature['data'] == request.body\n")))),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"invoice-created"},"Invoice created"),(0,o.kt)("p",null,"Sent when a new invoice has been generated for a customer."),(0,o.kt)("p",null,"It will allow your application to perform the billing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.created",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "from_date": "2022-04-01",\n    "to_date": "2022-04-30",\n    "issuing_date": "",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscription": {\n      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n      "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "canceled_at": "2022-04-29T08:59:51Z",\n      "created_at": "2022-04-29T08:59:51Z",\n      "plan_code": "new_code",\n      "started_at": "2022-04-29T08:59:51Z",\n      "status": "active",\n      "terminated_at": null\n    },\n    "fees": [\n      {\n        "item": {\n          "type": "subscription",\n          "code": "plan_code",\n          "name": "Plan"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h4",{id:"invoice"},"invoice"),(0,o.kt)("p",null,"| ",(0,o.kt)("inlineCode",{parentName:"p"},"type: json")," | ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/invoices#invoice-object"},"Invoice object")," | ",(0,o.kt)("strong",{parentName:"p"},"not null")))}b.isMDXComponent=!0}}]);