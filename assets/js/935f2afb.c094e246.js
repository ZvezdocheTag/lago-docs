"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"guide":[{"type":"link","label":"Welcome to Lago","href":"/docs/guide/intro","docId":"guide/intro"},{"type":"category","label":"Lago Self Hosted","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Docker","href":"/docs/guide/self-hosting/docker","docId":"guide/self-hosting/docker"}]},{"type":"link","label":"Lago Cloud","href":"/docs/guide/lago-cloud","docId":"guide/lago-cloud"},{"type":"category","label":"Billable Metrics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/guide/billable-metrics/overview","docId":"guide/billable-metrics/overview"},{"type":"link","label":"Aggregation Types","href":"/docs/guide/billable-metrics/aggregation-types","docId":"guide/billable-metrics/aggregation-types"},{"type":"link","label":"Aggregation examples","href":"/docs/guide/billable-metrics/aggregation-examples","docId":"guide/billable-metrics/aggregation-examples"}]},{"type":"category","label":"Plans","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/guide/plans/overview","docId":"guide/plans/overview"},{"type":"link","label":"Plan Model","href":"/docs/guide/plans/plan-model","docId":"guide/plans/plan-model"},{"type":"link","label":"Charges","href":"/docs/guide/plans/charges","docId":"guide/plans/charges"},{"type":"link","label":"Subscriptions","href":"/docs/guide/plans/subscription","docId":"guide/plans/subscription"},{"type":"link","label":"Upgrades & Downgrades","href":"/docs/guide/plans/upgrades-downgrades","docId":"guide/plans/upgrades-downgrades"}]},{"type":"link","label":"Ingesting Events","href":"/docs/guide/ingesting-events","docId":"guide/ingesting-events"},{"type":"category","label":"Invoicing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/guide/invoicing/overview","docId":"guide/invoicing/overview"},{"type":"link","label":"Taxes","href":"/docs/guide/invoicing/taxes","docId":"guide/invoicing/taxes"},{"type":"link","label":"Fees","href":"/docs/guide/invoicing/fees","docId":"guide/invoicing/fees"},{"type":"link","label":"Payments","href":"/docs/guide/invoicing/payments","docId":"guide/invoicing/payments"}]},{"type":"link","label":"Customers","href":"/docs/guide/customers","docId":"guide/customers"},{"type":"link","label":"Integration Testing","href":"/docs/guide/testing-integration","docId":"guide/testing-integration"}],"api":[{"type":"link","label":"Getting started","href":"/docs/api/intro","docId":"api/intro"},{"type":"category","label":"Customers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The customer object","href":"/docs/api/customers/customer-object","docId":"api/customers/customer-object"},{"type":"link","label":"Create or update a customer","href":"/docs/api/customers/create-update-customer","docId":"api/customers/create-update-customer"}]},{"type":"category","label":"Subscriptions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The subscription object","href":"/docs/api/subscriptions/subscription-object","docId":"api/subscriptions/subscription-object"},{"type":"link","label":"Assign a plan to a customer","href":"/docs/api/subscriptions/create-subscription","docId":"api/subscriptions/create-subscription"},{"type":"link","label":"Terminate a subscription","href":"/docs/api/subscriptions/terminate-subscription","docId":"api/subscriptions/terminate-subscription"}]},{"type":"link","label":"Events","href":"/docs/api/events","docId":"api/events"},{"type":"category","label":"Coupons","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"The applied coupon object","href":"/docs/api/applied_coupons/applied-coupon-object","docId":"api/applied_coupons/applied-coupon-object"},{"type":"link","label":"Apply a coupon to a customer","href":"/docs/api/applied_coupons/apply-coupon","docId":"api/applied_coupons/apply-coupon"}]},{"type":"link","label":"Webhooks","href":"/docs/api/webhooks","docId":"api/webhooks"},{"type":"link","label":"Invoices","href":"/docs/api/invoices","docId":"api/invoices"}]},"docs":{"api/applied_coupons/applied-coupon-object":{"id":"api/applied_coupons/applied-coupon-object","title":"The applied coupon object","description":"This object represents a coupon assigned to a customer of your business.","sidebar":"api"},"api/applied_coupons/apply-coupon":{"id":"api/applied_coupons/apply-coupon","title":"Apply a coupon to a customer","description":"Route","sidebar":"api"},"api/customers/create-update-customer":{"id":"api/customers/create-update-customer","title":"Create or update a customer","description":"Route","sidebar":"api"},"api/customers/customer-object":{"id":"api/customers/customer-object","title":"The customer object","description":"This object represents a customer of your business.","sidebar":"api"},"api/events":{"id":"api/events","title":"Events","description":"Events represents the data delivered to lago application that will then be aggregated into billable metrics.","sidebar":"api"},"api/intro":{"id":"api/intro","title":"Getting started","description":"Lago API allows your application to push customer information and metrics (events) from your application to the billing application.","sidebar":"api"},"api/invoices":{"id":"api/invoices","title":"Invoices","description":"Lago automatically generates invoices for each of your customers at the end of a billing period (monthly or yearly depending on the plan assigned to the customers).","sidebar":"api"},"api/subscriptions/create-subscription":{"id":"api/subscriptions/create-subscription","title":"Assign a plan to a customer","description":"Route","sidebar":"api"},"api/subscriptions/subscription-object":{"id":"api/subscriptions/subscription-object","title":"The subscription object","description":"This object represents the assignation of plan to one of the customer of your business.","sidebar":"api"},"api/subscriptions/terminate-subscription":{"id":"api/subscriptions/terminate-subscription","title":"Terminate a subscription","description":"Route","sidebar":"api"},"api/webhooks":{"id":"api/webhooks","title":"Webhooks","description":"Webhooks are HTTP notifications sent from Lago to your application.","sidebar":"api"},"guide/billable-metrics/aggregation-examples":{"id":"guide/billable-metrics/aggregation-examples","title":"Aggregation examples","description":"Image you are a Tracking API company (such as Segment.com). For the same events received, the result provided by the aggregation types proposed by Lago is completely different. This result is used to charge your customers.","sidebar":"guide"},"guide/billable-metrics/aggregation-types":{"id":"guide/billable-metrics/aggregation-types","title":"Aggregation Types","description":"By selecting one of the aggregation types for a Billable metric, you define how the ingested events are compiled and calculated at the end of a billable period.","sidebar":"guide"},"guide/billable-metrics/overview":{"id":"guide/billable-metrics/overview","title":"Overview","description":"Billable metrics define how incoming events are aggregated in order to measure consumption. If you want to charge your customers for the use of a particular feature, then you should create the corresponding billable metric.","sidebar":"guide"},"guide/customers":{"id":"guide/customers","title":"Customers","description":"Create a customer","sidebar":"guide"},"guide/ingesting-events":{"id":"guide/ingesting-events","title":"Ingesting Events","description":"This guide explains how Lago ingests usage-based events coming from you product.","sidebar":"guide"},"guide/intro":{"id":"guide/intro","title":"Welcome to Lago","description":"Lago is an open-source Stripe Billing alternative.","sidebar":"guide"},"guide/invoicing/fees":{"id":"guide/invoicing/fees","title":"Fees","description":"If a charge is related to how much you price the usage of a billable metric, a fee is when this charge is invoiced and ready to be paid.","sidebar":"guide"},"guide/invoicing/overview":{"id":"guide/invoicing/overview","title":"Overview","description":"Lago automatically generates invoices for each of your customers at the end of a billing period (monthly or yearly depending on the plan assigned to the customers). These invoices are generated under the webhook type invoice.created. You can use this webhook to build a proper PDF invoice or to print the information on a webpage.","sidebar":"guide"},"guide/invoicing/payments":{"id":"guide/invoicing/payments","title":"Payments","description":"Lago is not a payment provider. This means Lago calculates how much a customer owes you at the end of each billing period, sends a webhook with all the items to be paid alongside the invoice, but we do not trigger the payment.","sidebar":"guide"},"guide/invoicing/taxes":{"id":"guide/invoicing/taxes","title":"Taxes","description":"By creating invoices, you might need to append taxes to your customers regarding their required tax rate.","sidebar":"guide"},"guide/lago-cloud":{"id":"guide/lago-cloud","title":"Lago Cloud","description":"Lago Cloud is the fully hosted version of Lago, currently available on a per request basis. Request access to Lago Cloud here.","sidebar":"guide"},"guide/plans/charges":{"id":"guide/plans/charges","title":"Charges","description":"In addition to the price of a Plan, your Customers could pay for per-usage features. For instance, they could pay for API calls, storage, computes...","sidebar":"guide"},"guide/plans/overview":{"id":"guide/plans/overview","title":"Overview","description":"If Billable metrics are made to measure customer usage, Plans are made to apply prices to this usage.","sidebar":"guide"},"guide/plans/plan-model":{"id":"guide/plans/plan-model","title":"Plan Model","description":"The plan model is crucial to define how and how much a Customer is charged by choosing a Plan. It is also defining the frequency of invoicing to your customers.","sidebar":"guide"},"guide/plans/subscription":{"id":"guide/plans/subscription","title":"Subscriptions","description":"By creating a subscription, you assign a Plan to a Customer. Subscriptions can be added when creating a customer or added seperately later on.","sidebar":"guide"},"guide/plans/upgrades-downgrades":{"id":"guide/plans/upgrades-downgrades","title":"Upgrades & Downgrades","description":"To modify an active subscription through the user interface:","sidebar":"guide"},"guide/self-hosting/docker":{"id":"guide/self-hosting/docker","title":"Docker","description":"Docker is the easiest way to get started with the self-hosted version of Lago.","sidebar":"guide"},"guide/testing-integration":{"id":"guide/testing-integration","title":"Integration Testing","description":"This step-by-step integration guide will help you get started with Lago.","sidebar":"guide"}}}')}}]);