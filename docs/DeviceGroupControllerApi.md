# MagicInfoServerV4xRestApi.DeviceGroupControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDeviceGroupChildUsingGET**](DeviceGroupControllerApi.md#listDeviceGroupChildUsingGET) | **GET** /restapi/v1.0/rms/devices/groups/{groupId}/child | listDeviceGroupChild
[**listDeviceGroupInfoUsingGET1**](DeviceGroupControllerApi.md#listDeviceGroupInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/groups/{groupId} | listDeviceGroupInfo
[**listDeviceGroupOrganUsingGET**](DeviceGroupControllerApi.md#listDeviceGroupOrganUsingGET) | **GET** /restapi/v1.0/rms/devices/groups | listDeviceGroupOrgan


<a name="listDeviceGroupChildUsingGET"></a>
# **listDeviceGroupChildUsingGET**
> ResponseBody listDeviceGroupChildUsingGET(groupId)

listDeviceGroupChild

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.DeviceGroupControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeviceGroupChildUsingGET(groupId, callback);
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

<a name="listDeviceGroupInfoUsingGET1"></a>
# **listDeviceGroupInfoUsingGET1**
> ResponseBody listDeviceGroupInfoUsingGET1(groupId)

listDeviceGroupInfo

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.DeviceGroupControllerApi();

var groupId = 789; // Number | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeviceGroupInfoUsingGET1(groupId, callback);
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

<a name="listDeviceGroupOrganUsingGET"></a>
# **listDeviceGroupOrganUsingGET**
> ResponseBody listDeviceGroupOrganUsingGET()

listDeviceGroupOrgan

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.DeviceGroupControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeviceGroupOrganUsingGET(callback);
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

