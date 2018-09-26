# MagicInfoApi.UserGroupControllerApi

All URIs are relative to *http://127.0.0.1:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUserGroupChildUsingGET1**](UserGroupControllerApi.md#listUserGroupChildUsingGET1) | **GET** /restapi/v1.0/ums/users/groups/{groupId}/child | listUserGroupChild
[**listUserGroupInfoUsingGET1**](UserGroupControllerApi.md#listUserGroupInfoUsingGET1) | **GET** /restapi/v1.0/ums/users/groups/{groupId} | listUserGroupInfo
[**listUserGroupOrganUsingGET1**](UserGroupControllerApi.md#listUserGroupOrganUsingGET1) | **GET** /restapi/v1.0/ums/users/groups | listUserGroupOrgan


<a name="listUserGroupChildUsingGET1"></a>
# **listUserGroupChildUsingGET1**
> ResponseBody listUserGroupChildUsingGET1(groupId)

listUserGroupChild

### Example
```javascript
var MagicInfoApi = require('magic_info_api');
var defaultClient = MagicInfoApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoApi.UserGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUserGroupChildUsingGET1(groupId, callback);
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

<a name="listUserGroupInfoUsingGET1"></a>
# **listUserGroupInfoUsingGET1**
> ResponseBody listUserGroupInfoUsingGET1(groupId)

listUserGroupInfo

### Example
```javascript
var MagicInfoApi = require('magic_info_api');
var defaultClient = MagicInfoApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoApi.UserGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUserGroupInfoUsingGET1(groupId, callback);
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

<a name="listUserGroupOrganUsingGET1"></a>
# **listUserGroupOrganUsingGET1**
> ResponseBody listUserGroupOrganUsingGET1()

listUserGroupOrgan

### Example
```javascript
var MagicInfoApi = require('magic_info_api');
var defaultClient = MagicInfoApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoApi.UserGroupControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUserGroupOrganUsingGET1(callback);
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

