# MagicInfoServerV4RestApi.ContentScheduleControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyContentScheduleUsingPUT1**](ContentScheduleControllerApi.md#copyContentScheduleUsingPUT1) | **PUT** /restapi/v1.0/dms/schedule/contents/{programId}/copy | copyContentSchedule
[**createContentScheduleUsingPOST1**](ContentScheduleControllerApi.md#createContentScheduleUsingPOST1) | **POST** /restapi/v1.0/dms/schedule/contents | createContentSchedule
[**deleteContentScheduleUsingDELETE**](ContentScheduleControllerApi.md#deleteContentScheduleUsingDELETE) | **DELETE** /restapi/v1.0/dms/schedule/contents/{programId} | deleteContentSchedule
[**deployContentScheduleUsingPUT**](ContentScheduleControllerApi.md#deployContentScheduleUsingPUT) | **PUT** /restapi/v1.0/dms/schedule/contents/{programId}/deploy | deployContentSchedule
[**editContentScheduleUsingPUT**](ContentScheduleControllerApi.md#editContentScheduleUsingPUT) | **PUT** /restapi/v1.0/dms/schedule/contents/{programId} | editContentSchedule
[**getProgramInfoUsingGET1**](ContentScheduleControllerApi.md#getProgramInfoUsingGET1) | **GET** /restapi/v1.0/dms/schedule/contents/{programId} | getProgramInfo
[**getPublishStatusUsingGET**](ContentScheduleControllerApi.md#getPublishStatusUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/{programId}/publishStatus | getPublishStatus
[**listContentScheduleAllUsingGET1**](ContentScheduleControllerApi.md#listContentScheduleAllUsingGET1) | **GET** /restapi/v1.0/dms/schedule/contents | listContentScheduleAll
[**listContentScheduleByGroupUsingPOST1**](ContentScheduleControllerApi.md#listContentScheduleByGroupUsingPOST1) | **POST** /restapi/v1.0/dms/schedule/contents/filter | listContentScheduleByGroup
[**listDashboardScheduleInfoUsingGET**](ContentScheduleControllerApi.md#listDashboardScheduleInfoUsingGET) | **GET** /restapi/v1.0/dms/schedule/contents/dashboard | listDashboardScheduleInfo


<a name="copyContentScheduleUsingPUT1"></a>
# **copyContentScheduleUsingPUT1**
> ResponseBody copyContentScheduleUsingPUT1(programId, params)

copyContentSchedule

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var programId = "programId_example"; // String | programId

var params = new MagicInfoServerV4RestApi.ContentScheduleResource(); // ContentScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyContentScheduleUsingPUT1(programId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **String**| programId | 
 **params** | [**ContentScheduleResource**](ContentScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContentScheduleUsingPOST1"></a>
# **createContentScheduleUsingPOST1**
> ResponseBody createContentScheduleUsingPOST1(params)

createContentSchedule

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var params = new MagicInfoServerV4RestApi.ContentScheduleResource(); // ContentScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContentScheduleUsingPOST1(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**ContentScheduleResource**](ContentScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentScheduleUsingDELETE"></a>
# **deleteContentScheduleUsingDELETE**
> ResponseBody deleteContentScheduleUsingDELETE(programId)

deleteContentSchedule

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var programId = "programId_example"; // String | programId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteContentScheduleUsingDELETE(programId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **String**| programId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deployContentScheduleUsingPUT"></a>
# **deployContentScheduleUsingPUT**
> ResponseBody deployContentScheduleUsingPUT(programId, params)

deployContentSchedule

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var programId = "programId_example"; // String | programId

var params = new MagicInfoServerV4RestApi.ContentScheduleResource(); // ContentScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deployContentScheduleUsingPUT(programId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **String**| programId | 
 **params** | [**ContentScheduleResource**](ContentScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editContentScheduleUsingPUT"></a>
# **editContentScheduleUsingPUT**
> ResponseBody editContentScheduleUsingPUT(programId, params)

editContentSchedule

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var programId = "programId_example"; // String | programId

var params = new MagicInfoServerV4RestApi.ContentScheduleResource(); // ContentScheduleResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editContentScheduleUsingPUT(programId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **String**| programId | 
 **params** | [**ContentScheduleResource**](ContentScheduleResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProgramInfoUsingGET1"></a>
# **getProgramInfoUsingGET1**
> ResponseBody getProgramInfoUsingGET1(programId)

getProgramInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var programId = "programId_example"; // String | programId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProgramInfoUsingGET1(programId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **String**| programId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPublishStatusUsingGET"></a>
# **getPublishStatusUsingGET**
> ResponseBody getPublishStatusUsingGET(programId)

getPublishStatus

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var programId = "programId_example"; // String | programId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPublishStatusUsingGET(programId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **String**| programId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listContentScheduleAllUsingGET1"></a>
# **listContentScheduleAllUsingGET1**
> ResponseBody listContentScheduleAllUsingGET1(startIndex, pageSize)

listContentScheduleAll

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var startIndex = 56; // Number | startIndex

var pageSize = 56; // Number | pageSize


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listContentScheduleAllUsingGET1(startIndex, pageSize, callback);
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

<a name="listContentScheduleByGroupUsingPOST1"></a>
# **listContentScheduleByGroupUsingPOST1**
> ResponseBody listContentScheduleByGroupUsingPOST1(filter)

listContentScheduleByGroup

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var filter = new MagicInfoServerV4RestApi.ScheduleFilter(); // ScheduleFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listContentScheduleByGroupUsingPOST1(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**ScheduleFilter**](ScheduleFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDashboardScheduleInfoUsingGET"></a>
# **listDashboardScheduleInfoUsingGET**
> ResponseBody listDashboardScheduleInfoUsingGET()

listDashboardScheduleInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.ContentScheduleControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDashboardScheduleInfoUsingGET(callback);
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

