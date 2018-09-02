# MagicInfoServerV41RestApi.ContentControllerApi

All URIs are relative to *http://127.0.0.1:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveContentsUsingPUT1**](ContentControllerApi.md#approveContentsUsingPUT1) | **PUT** /restapi/v1.0/cms/contents/{contentId}/approval | approveContents
[**deleteContentUsingDELETE1**](ContentControllerApi.md#deleteContentUsingDELETE1) | **DELETE** /restapi/v1.0/cms/contents/{contentId} | deleteContent
[**forceDeleteContentUsingDELETE1**](ContentControllerApi.md#forceDeleteContentUsingDELETE1) | **DELETE** /restapi/v1.0/cms/contents/force/{contentId} | forceDeleteContent
[**getActiveContentInfoUsingGET**](ContentControllerApi.md#getActiveContentInfoUsingGET) | **GET** /restapi/v1.0/cms/contents/{contentId} | getActiveContentInfo
[**listAllContentUsingGET**](ContentControllerApi.md#listAllContentUsingGET) | **GET** /restapi/v1.0/cms/contents | listAllContent
[**listContentUsingPOST1**](ContentControllerApi.md#listContentUsingPOST1) | **POST** /restapi/v1.0/cms/contents/filter | listContent
[**listDashboardContentInfoUsingGET**](ContentControllerApi.md#listDashboardContentInfoUsingGET) | **GET** /restapi/v1.0/cms/contents/dashboard | listDashboardContentInfo
[**uploadContentUsingPOST**](ContentControllerApi.md#uploadContentUsingPOST) | **POST** /restapi/v1.0/cms/contents/{groupId} | uploadContent


<a name="approveContentsUsingPUT1"></a>
# **approveContentsUsingPUT1**
> ResponseBody approveContentsUsingPUT1(contentId, resource)

approveContents

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var contentId = "contentId_example"; // String | contentId

var resource = new MagicInfoServerV41RestApi.ContentApproveResource(); // ContentApproveResource | resource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.approveContentsUsingPUT1(contentId, resource, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **String**| contentId | 
 **resource** | [**ContentApproveResource**](ContentApproveResource.md)| resource | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentUsingDELETE1"></a>
# **deleteContentUsingDELETE1**
> ResponseBody deleteContentUsingDELETE1(contentId)

deleteContent

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var contentId = "contentId_example"; // String | contentId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteContentUsingDELETE1(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **String**| contentId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="forceDeleteContentUsingDELETE1"></a>
# **forceDeleteContentUsingDELETE1**
> ResponseBody forceDeleteContentUsingDELETE1(contentId)

forceDeleteContent

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var contentId = "contentId_example"; // String | contentId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.forceDeleteContentUsingDELETE1(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **String**| contentId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActiveContentInfoUsingGET"></a>
# **getActiveContentInfoUsingGET**
> ResponseBody getActiveContentInfoUsingGET(contentId)

getActiveContentInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var contentId = "contentId_example"; // String | contentId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActiveContentInfoUsingGET(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **String**| contentId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllContentUsingGET"></a>
# **listAllContentUsingGET**
> ResponseBody listAllContentUsingGET(startIndex, pageSize)

listAllContent

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var startIndex = 56; // Number | startIndex

var pageSize = 56; // Number | pageSize


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllContentUsingGET(startIndex, pageSize, callback);
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

<a name="listContentUsingPOST1"></a>
# **listContentUsingPOST1**
> ResponseBody listContentUsingPOST1(filter)

listContent

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var filter = new MagicInfoServerV41RestApi.ContentFilter(); // ContentFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listContentUsingPOST1(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**ContentFilter**](ContentFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDashboardContentInfoUsingGET"></a>
# **listDashboardContentInfoUsingGET**
> ResponseBody listDashboardContentInfoUsingGET()

listDashboardContentInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDashboardContentInfoUsingGET(callback);
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

<a name="uploadContentUsingPOST"></a>
# **uploadContentUsingPOST**
> ResponseBody uploadContentUsingPOST(groupId)

uploadContent

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.ContentControllerApi();

var groupId = "groupId_example"; // String | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadContentUsingPOST(groupId, callback);
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

