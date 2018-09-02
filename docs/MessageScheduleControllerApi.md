# MagicInfoServerV4xRestApi.MessageScheduleControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyMessageScheduleUsingPUT1**](MessageScheduleControllerApi.md#copyMessageScheduleUsingPUT1) | **PUT** /restapi/v1.0/dms/schedule/messages/{messageId}/copy | copyMessageSchedule
[**createMessageScheduleUsingPOST**](MessageScheduleControllerApi.md#createMessageScheduleUsingPOST) | **POST** /restapi/v1.0/dms/schedule/messages | createMessageSchedule
[**deleteMessageScheduleUsingDELETE1**](MessageScheduleControllerApi.md#deleteMessageScheduleUsingDELETE1) | **DELETE** /restapi/v1.0/dms/schedule/messages/{messageId} | deleteMessageSchedule
[**deployMessageScheduleUsingPUT**](MessageScheduleControllerApi.md#deployMessageScheduleUsingPUT) | **PUT** /restapi/v1.0/dms/schedule/messages/{messageId}/deploy | deployMessageSchedule
[**editMessageScheduleUsingPUT1**](MessageScheduleControllerApi.md#editMessageScheduleUsingPUT1) | **PUT** /restapi/v1.0/dms/schedule/messages/{messageId} | editMessageSchedule
[**getMessageInfoUsingGET1**](MessageScheduleControllerApi.md#getMessageInfoUsingGET1) | **GET** /restapi/v1.0/dms/schedule/messages/{messageId} | getMessageInfo
[**listAllMessageScheduleUsingGET**](MessageScheduleControllerApi.md#listAllMessageScheduleUsingGET) | **GET** /restapi/v1.0/dms/schedule/messages | listAllMessageSchedule
[**listMessageUsingPOST**](MessageScheduleControllerApi.md#listMessageUsingPOST) | **POST** /restapi/v1.0/dms/schedule/messages/filter | listMessage


<a name="copyMessageScheduleUsingPUT1"></a>
# **copyMessageScheduleUsingPUT1**
> ResponseBody copyMessageScheduleUsingPUT1(messageId, params)

copyMessageSchedule

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var messageId = "messageId_example"; // String | messageId

var params = new MagicInfoServerV4xRestApi.MessageScheduleResource(); // MessageScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyMessageScheduleUsingPUT1(messageId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| messageId | 
 **params** | [**MessageScheduleResource**](MessageScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMessageScheduleUsingPOST"></a>
# **createMessageScheduleUsingPOST**
> ResponseBody createMessageScheduleUsingPOST(params)

createMessageSchedule

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var params = new MagicInfoServerV4xRestApi.MessageScheduleResource(); // MessageScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMessageScheduleUsingPOST(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**MessageScheduleResource**](MessageScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMessageScheduleUsingDELETE1"></a>
# **deleteMessageScheduleUsingDELETE1**
> ResponseBody deleteMessageScheduleUsingDELETE1(messageId)

deleteMessageSchedule

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var messageId = "messageId_example"; // String | messageId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteMessageScheduleUsingDELETE1(messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| messageId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deployMessageScheduleUsingPUT"></a>
# **deployMessageScheduleUsingPUT**
> ResponseBody deployMessageScheduleUsingPUT(messageId, params)

deployMessageSchedule

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var messageId = "messageId_example"; // String | messageId

var params = new MagicInfoServerV4xRestApi.MessageScheduleResource(); // MessageScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deployMessageScheduleUsingPUT(messageId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| messageId | 
 **params** | [**MessageScheduleResource**](MessageScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editMessageScheduleUsingPUT1"></a>
# **editMessageScheduleUsingPUT1**
> ResponseBody editMessageScheduleUsingPUT1(messageId, params)

editMessageSchedule

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var messageId = "messageId_example"; // String | messageId

var params = new MagicInfoServerV4xRestApi.MessageScheduleResource(); // MessageScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editMessageScheduleUsingPUT1(messageId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| messageId | 
 **params** | [**MessageScheduleResource**](MessageScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessageInfoUsingGET1"></a>
# **getMessageInfoUsingGET1**
> ResponseBody getMessageInfoUsingGET1(messageId)

getMessageInfo

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var messageId = "messageId_example"; // String | messageId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMessageInfoUsingGET1(messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| messageId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllMessageScheduleUsingGET"></a>
# **listAllMessageScheduleUsingGET**
> ResponseBody listAllMessageScheduleUsingGET(startIndex, pageSize)

listAllMessageSchedule

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var startIndex = 56; // Number | startIndex

var pageSize = 56; // Number | pageSize


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllMessageScheduleUsingGET(startIndex, pageSize, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startIndex** | **Number**| startIndex | 
 **pageSize** | **Number**| pageSize | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listMessageUsingPOST"></a>
# **listMessageUsingPOST**
> ResponseBody listMessageUsingPOST(filter)

listMessage

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.MessageScheduleControllerApi();

var filter = new MagicInfoServerV4xRestApi.MessageScheduleFilter(); // MessageScheduleFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMessageUsingPOST(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**MessageScheduleFilter**](MessageScheduleFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

