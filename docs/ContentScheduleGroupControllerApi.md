# MagicInfoServerV4xRestApi.ContentScheduleGroupControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChildGroupsUsingGET**](ContentScheduleGroupControllerApi.md#getChildGroupsUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/groups/{groupId}/child | getChildGroups
[**getRootGroupsUsingGET**](ContentScheduleGroupControllerApi.md#getRootGroupsUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/groups | getRootGroups
[**listContentScheduleGroupInfoUsingGET**](ContentScheduleGroupControllerApi.md#listContentScheduleGroupInfoUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/groups/{groupId} | listContentScheduleGroupInfo


<a name="getChildGroupsUsingGET"></a>
# **getChildGroupsUsingGET**
> ResponseBody getChildGroupsUsingGET(groupId)

getChildGroups

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.ContentScheduleGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChildGroupsUsingGET(groupId, callback);
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

<a name="getRootGroupsUsingGET"></a>
# **getRootGroupsUsingGET**
> ResponseBody getRootGroupsUsingGET()

getRootGroups

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.ContentScheduleGroupControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRootGroupsUsingGET(callback);
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

<a name="listContentScheduleGroupInfoUsingGET"></a>
# **listContentScheduleGroupInfoUsingGET**
> ResponseBody listContentScheduleGroupInfoUsingGET(groupId)

listContentScheduleGroupInfo

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.ContentScheduleGroupControllerApi();

var groupId = 789; // Number | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listContentScheduleGroupInfoUsingGET(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| groupId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

