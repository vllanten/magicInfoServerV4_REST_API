# MagicInfoServerV41RestApi.ContentGroupControllerApi

All URIs are relative to *http://127.0.0.1:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroupUsingGET**](ContentGroupControllerApi.md#getGroupUsingGET) | **GET** /restapi/v1.0/cms/contents/groups/{groupId} | getGroup
[**listChildGroupUsingGET1**](ContentGroupControllerApi.md#listChildGroupUsingGET1) | **GET** /restapi/v1.0/cms/contents/groups/{groupId}/child | listChildGroup
[**listDefaultGroupUsingGET1**](ContentGroupControllerApi.md#listDefaultGroupUsingGET1) | **GET** /restapi/v1.0/cms/contents/groups | listDefaultGroup


<a name="getGroupUsingGET"></a>
# **getGroupUsingGET**
> ResponseBody getGroupUsingGET(groupId)

getGroup

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupUsingGET(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| groupId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listChildGroupUsingGET1"></a>
# **listChildGroupUsingGET1**
> ResponseBody listChildGroupUsingGET1(groupId)

listChildGroup

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listChildGroupUsingGET1(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| groupId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDefaultGroupUsingGET1"></a>
# **listDefaultGroupUsingGET1**
> ResponseBody listDefaultGroupUsingGET1()

listDefaultGroup

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentGroupControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDefaultGroupUsingGET1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

