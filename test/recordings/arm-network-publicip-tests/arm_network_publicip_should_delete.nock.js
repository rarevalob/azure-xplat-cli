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
    registeredProviders: ['mobileservice'],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew7314\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n  \"etag\": \"W/\\\"c592fdff-6fad-4808-9fcd-3e0ecba80a7d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19272\",\r\n      \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '629',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c592fdff-6fad-4808-9fcd-3e0ecba80a7d"',
  'x-ms-request-id': '7bc4921d-1c62-420b-b597-58bf2dda1382',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '3c9afb43-14a0-4d1c-a2f0-aa161098d5bd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173517Z:3c9afb43-14a0-4d1c-a2f0-aa161098d5bd',
  date: 'Wed, 22 Apr 2015 17:35:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew7314\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n  \"etag\": \"W/\\\"c592fdff-6fad-4808-9fcd-3e0ecba80a7d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19272\",\r\n      \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '629',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c592fdff-6fad-4808-9fcd-3e0ecba80a7d"',
  'x-ms-request-id': '7bc4921d-1c62-420b-b597-58bf2dda1382',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '3c9afb43-14a0-4d1c-a2f0-aa161098d5bd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173517Z:3c9afb43-14a0-4d1c-a2f0-aa161098d5bd',
  date: 'Wed, 22 Apr 2015 17:35:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/a0060b69-cb15-475d-a01b-a927fca24d94?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'a0060b69-cb15-475d-a01b-a927fca24d94',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/a0060b69-cb15-475d-a01b-a927fca24d94?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ef8bbedd-160c-4ce3-8bbd-8ec684d6abdd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173523Z:ef8bbedd-160c-4ce3-8bbd-8ec684d6abdd',
  date: 'Wed, 22 Apr 2015 17:35:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/a0060b69-cb15-475d-a01b-a927fca24d94?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'a0060b69-cb15-475d-a01b-a927fca24d94',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/a0060b69-cb15-475d-a01b-a927fca24d94?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'ef8bbedd-160c-4ce3-8bbd-8ec684d6abdd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173523Z:ef8bbedd-160c-4ce3-8bbd-8ec684d6abdd',
  date: 'Wed, 22 Apr 2015 17:35:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/a0060b69-cb15-475d-a01b-a927fca24d94?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd5cad805-5b48-4141-af05-18046459118e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': '41d238ec-6ce2-44d3-9eec-0888952b2278',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173535Z:41d238ec-6ce2-44d3-9eec-0888952b2278',
  date: 'Wed, 22 Apr 2015 17:35:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/a0060b69-cb15-475d-a01b-a927fca24d94?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd5cad805-5b48-4141-af05-18046459118e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-correlation-request-id': '41d238ec-6ce2-44d3-9eec-0888952b2278',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173535Z:41d238ec-6ce2-44d3-9eec-0888952b2278',
  date: 'Wed, 22 Apr 2015 17:35:34 GMT',
  connection: 'close' });
 return result; }]];