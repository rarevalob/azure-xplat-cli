// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"111a0b04-6166-44c3-870b-84e2f6c0a1d2"',
  'x-ms-request-id': '9062498d-b2c4-43a5-916b-9ee9c59ab2f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31985',
  'x-ms-correlation-request-id': '197da292-2b34-42f7-8d87-d506b7179d81',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120124Z:197da292-2b34-42f7-8d87-d506b7179d81',
  date: 'Tue, 28 Apr 2015 12:01:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"111a0b04-6166-44c3-870b-84e2f6c0a1d2"',
  'x-ms-request-id': '9062498d-b2c4-43a5-916b-9ee9c59ab2f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31985',
  'x-ms-correlation-request-id': '197da292-2b34-42f7-8d87-d506b7179d81',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120124Z:197da292-2b34-42f7-8d87-d506b7179d81',
  date: 'Tue, 28 Apr 2015 12:01:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Udp\",\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '300d6f4c-bfb2-43c0-89d8-31174eb75aca',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/300d6f4c-bfb2-43c0-89d8-31174eb75aca?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '24a5e293-6946-40d9-897c-4fe9c9dbb822',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120125Z:24a5e293-6946-40d9-897c-4fe9c9dbb822',
  date: 'Tue, 28 Apr 2015 12:01:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Udp\",\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '300d6f4c-bfb2-43c0-89d8-31174eb75aca',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/300d6f4c-bfb2-43c0-89d8-31174eb75aca?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '24a5e293-6946-40d9-897c-4fe9c9dbb822',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120125Z:24a5e293-6946-40d9-897c-4fe9c9dbb822',
  date: 'Tue, 28 Apr 2015 12:01:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/300d6f4c-bfb2-43c0-89d8-31174eb75aca?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '40cd9a1a-df50-4cf9-9da5-5fd8d8a53a26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31979',
  'x-ms-correlation-request-id': '833704ba-0ac2-4900-ad26-0c6230d49478',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120127Z:833704ba-0ac2-4900-ad26-0c6230d49478',
  date: 'Tue, 28 Apr 2015 12:01:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/300d6f4c-bfb2-43c0-89d8-31174eb75aca?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '40cd9a1a-df50-4cf9-9da5-5fd8d8a53a26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31979',
  'x-ms-correlation-request-id': '833704ba-0ac2-4900-ad26-0c6230d49478',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120127Z:833704ba-0ac2-4900-ad26-0c6230d49478',
  date: 'Tue, 28 Apr 2015 12:01:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Udp\",\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cf4296e1-80a7-4c62-bef6-555534b1ed07"',
  'x-ms-request-id': 'eba2df1c-20d3-4734-ba01-3ad2602117ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': 'c4c373ac-d4a1-4bfd-9ca3-174dec181a2e',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120128Z:c4c373ac-d4a1-4bfd-9ca3-174dec181a2e',
  date: 'Tue, 28 Apr 2015 12:01:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"cf4296e1-80a7-4c62-bef6-555534b1ed07\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Udp\",\r\n          \"frontendPort\": 3381,\r\n          \"backendPort\": 3381,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"cf4296e1-80a7-4c62-bef6-555534b1ed07"',
  'x-ms-request-id': 'eba2df1c-20d3-4734-ba01-3ad2602117ca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': 'c4c373ac-d4a1-4bfd-9ca3-174dec181a2e',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120128Z:c4c373ac-d4a1-4bfd-9ca3-174dec181a2e',
  date: 'Tue, 28 Apr 2015 12:01:28 GMT',
  connection: 'close' });
 return result; }]];