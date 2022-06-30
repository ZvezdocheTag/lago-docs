"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2202],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010),o="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),o=t(2389),i=t(7392),l=t(7094),s=t(2466),c=t(6010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var n,t,o,d=e.lazy,m=e.block,h=e.defaultValue,b=e.values,v=e.groupId,_=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,i.l)(g,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(n=null!=h?h:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,E=(0,r.useState)(y),O=E[0],C=E[1],j=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=w[v];null!=x&&x!==O&&g.some((function(e){return e.value===x}))&&C(x)}var R=function(e){var n=e.currentTarget,t=j.indexOf(n),a=g[t].value;a!==O&&(P(n),C(a),null!=v&&T(v,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,c.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},_)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:R,onClick:R},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function m(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},8657:function(e,n,t){t.r(n),t.d(n,{Comment:function(){return v},NotNullable:function(){return b},Type:function(){return h},assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(9877),l=t(2360),s=["components"],c={sidebar_position:10},u="Webhooks",p={unversionedId:"api/webhooks",id:"api/webhooks",title:"Webhooks",description:"Webhooks are HTTP notifications sent from Lago to your application.",source:"@site/docs/api/10_webhooks.mdx",sourceDirName:"api",slug:"/api/webhooks",permalink:"/docs/api/webhooks",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"api",previous:{title:"Apply an add-on to a customer",permalink:"/docs/api/applied_add_ons/apply-add-on"},next:{title:"Invoices",permalink:"/docs/api/invoices"}},d={},m=[{value:"Message format",id:"message-format",level:2},{value:"Signature",id:"signature",level:2},{value:"Messages",id:"messages",level:2},{value:"Invoice created",id:"invoice-created",level:3},{value:"Add-on applied to customer",id:"add-on-applied-to-customer",level:3},{value:"Event error",id:"event-error",level:3}],h=function(e){var n=e.children;e.color;return(0,o.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},n)},b=function(e){var n=e.children;e.color;return(0,o.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},n)},v=function(e){var n=e.children;e.color;return(0,o.kt)("span",{style:{fontSize:"12px"}},n)},_={toc:m,Type:h,NotNullable:b,Comment:v};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"Webhooks are HTTP notifications sent from Lago to your application."),(0,o.kt)("p",null,"The messages are sent as a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," to the URL defined in the settings of your Lago workspace."),(0,o.kt)("h2",{id:"message-format"},"Message format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST __WEBHOOK_URL__")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "__TYPE__",\n  "object_type": "OBJECT_TYPE",\n  "__OBJECT__": {}\n}\n')),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("p",null,"Allong with the payload the message contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Lago-Signature")," HTTP header."),(0,o.kt)("p",null,"It is used to ensure the message is Coming from Lago and that the message has not been altered."),(0,o.kt)("p",null,"To verify the signature, you must decode the signature and compare the result with the body of the webhook."),(0,o.kt)(i.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Retrieve the public key:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\nwebhooks_public_key = client.webhooks().public_key()\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should persist the public key on you side to prevent querying it for each webhook")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Decode and validate the signature:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import jwt\n\ndecoded_signature = jwt.decode(\n  request.headers.get('X-Lago-Signature'),\n  webhooks_public_key,\n  algorithms=['RS256'],\n  issuer=\"https://api.getlago.com\"\n)\n\ndecoded_signature['data'] == request.body\n"))))),(0,o.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Retrieve the public key:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import Client from 'lago-nodejs-client'\n\nlet client = new Client('__YOUR_API_KEY__')\nlet webhooksPublicKey = client.webhookPublicKey()\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should persist the public key on you side to prevent querying it for each webhook")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Decode and validate the signature:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import jwt from 'jsonwebtoken';\n\nlet token = request.header('X-Lago-Signature')\n\njwt.verify(token, webhooksPublicKey, {\n  algorithms: ['RS256'],\n  issuer: 'https://api.getlago.com' },\n  function (err, payload) {\n    payload === request.body\n});\n"))))),(0,o.kt)(l.Z,{value:"ruby",label:"Ruby",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Retrieve the public key:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'net/http'\n\napi_key = \"__YOUR_API_KEY__\"\nuri = URI('https://api.getlago.com/api/v1/webhooks/public_key')\n\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nresponse = http.send_request(\n  'GET',\n  uri.request_uri,\n  '',\n  { 'Authorization' => \"Bearer #{api_key}\" }\n)\n\nwebhooks_public_key = response.body\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should persist the public key on you side to prevent querying it for each webhook")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Decode and validate the signature:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'openssl'\nrequire 'jwt'\n\ndecoded_signature = JWT.decode(\n  request.headers['X-Lago-Signature'],\n  OpenSSL::PKey::RSA.new(Base64.decode64(webhooks_public_key)),\n  true,\n  {\n    algorithm: 'RS256',\n    iss: \"https://api.getlago.com\",\n    verify_iss: true,\n  },\n).first\n\ndecoded_signature['data'] == request.body\n")))))),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"invoice-created"},"Invoice created"),(0,o.kt)("p",null,"Sent when a new invoice has been generated for a customer."),(0,o.kt)("p",null,"It will allow your application to perform the billing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.created",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "from_date": "2022-04-01",\n    "to_date": "2022-04-30",\n    "charges_from_date": "2022-04-01",\n    "issuing_date": "",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscription": {\n      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n      "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "canceled_at": "2022-04-29T08:59:51Z",\n      "created_at": "2022-04-29T08:59:51Z",\n      "plan_code": "new_code",\n      "started_at": "2022-04-29T08:59:51Z",\n      "status": "active",\n      "terminated_at": null\n    },\n    "fees": [\n      {\n        "item": {\n          "type": "subscription",\n          "code": "plan_code",\n          "name": "Plan"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR",\n        "units": "0.32"\n      }\n    ],\n    "credits": [\n      {\n        "item": {\n          "type": "coupon",\n          "code": "coupon_code",\n          "name": "Coupon"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"add-on-applied-to-customer"},"Add-on applied to customer"),(0,o.kt)("p",null,"Sent when an add-on has been applied to customer."),(0,o.kt)("p",null,"You can use this information to generate a PDF invoice or collect the payment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.add_on_added",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "from_date": "2022-04-30",\n    "to_date": "2022-04-30",\n    "issuing_date": "2022-04-30",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscription": {\n      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n      "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "canceled_at": "2022-04-29T08:59:51Z",\n      "created_at": "2022-04-29T08:59:51Z",\n      "plan_code": "new_code",\n      "started_at": "2022-04-29T08:59:51Z",\n      "status": "active",\n      "terminated_at": null\n    },\n    "fees": [\n      {\n        "item": {\n          "type": "add_on",\n          "code": "add_on_code",\n          "name": "add_on_name"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR",\n        "units": "1"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"event-error"},"Event error"),(0,o.kt)("p",null,"This webhook type is sent when there is an error with event creation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "event.error",\n  "object_type": "event_error",\n  "event_error": {\n    "status": 422,\n    "error": "Unprocessable entity",\n    "message": "code does not exist",\n    "input_params": {\n      "transaction_id": "__transaction_id__",\n      "customer_id": "customer123",\n      "code": "code123"\n    }\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"invoice")," ","\xa0"," ","\xa0"," ",(0,o.kt)(h,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,o.kt)(b,{mdxType:"NotNullable"},"Not nullable")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./invoices"},"Invoice object"))))))}k.isMDXComponent=!0}}]);