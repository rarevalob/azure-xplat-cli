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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestNic\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n      \"etag\": \"W/\\\"72ff4c1f-72f9-4005-ab8b-1b21827e39f5\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"NIC-config\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n            \"etag\": \"W/\\\"72ff4c1f-72f9-4005-ab8b-1b21827e39f5\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.31.254.254\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/publicIPAddresses/xplatTestIpNic\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {},\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n        }\r\n      },\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"priority\": \"high\"\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1762',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd67cb46d-54d2-4228-abb1-5ab38a560d5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31923',
  'x-ms-correlation-request-id': '4562fac7-462b-4a34-b72f-17ee10eb7bdf',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111924Z:4562fac7-462b-4a34-b72f-17ee10eb7bdf',
  date: 'Mon, 27 Apr 2015 11:19:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestNic\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n      \"etag\": \"W/\\\"72ff4c1f-72f9-4005-ab8b-1b21827e39f5\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"NIC-config\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n            \"etag\": \"W/\\\"72ff4c1f-72f9-4005-ab8b-1b21827e39f5\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.31.254.254\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/publicIPAddresses/xplatTestIpNic\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {},\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n        }\r\n      },\r\n      \"location\": \"westus\",\r\n      \"tags\": {\r\n        \"priority\": \"high\"\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1762',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd67cb46d-54d2-4228-abb1-5ab38a560d5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31923',
  'x-ms-correlation-request-id': '4562fac7-462b-4a34-b72f-17ee10eb7bdf',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111924Z:4562fac7-462b-4a34-b72f-17ee10eb7bdf',
  date: 'Mon, 27 Apr 2015 11:19:23 GMT',
  connection: 'close' });
 return result; }]];