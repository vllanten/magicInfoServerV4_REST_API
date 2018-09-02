# MagicInfoServerV4RestApi.PlaylistGroupControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroupUsingGET3**](PlaylistGroupControllerApi.md#getGroupUsingGET3) | **GET** /restapi/v1.0/cms/playlists/groups/{groupId} | getGroup
[**listChildGroupUsingGET2**](PlaylistGroupControllerApi.md#listChildGroupUsingGET2) | **GET** /restapi/v1.0/cms/playlists/groups/{groupId}/child | listChildGroup
[**listDefaultGroupUsingGET2**](PlaylistGroupControllerApi.md#listDefaultGroupUsingGET2) | **GET** /restapi/v1.0/cms/playlists/groups | listDefaultGroup


<a name="getGroupUsingGET3"></a>
# **getGroupUsingGET3**
> ResponseBody getGroupUsingGET3(groupId)

getGroup

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupUsingGET3(groupId, callback);
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

<a name="listChildGroupUsingGET2"></a>
# **listChildGroupUsingGET2**
> ResponseBody listChildGroupUsingGET2(groupId)

listChildGroup

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listChildGroupUsingGET2(groupId, callback);
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

<a name="listDefaultGroupUsingGET2"></a>
# **listDefaultGroupUsingGET2**
> ResponseBody listDefaultGroupUsingGET2()

listDefaultGroup

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistGroupControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDefaultGroupUsingGET2(callback);
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

