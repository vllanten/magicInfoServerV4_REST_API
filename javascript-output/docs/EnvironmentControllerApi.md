# MagicInfoServerV41RestApi.EnvironmentControllerApi

All URIs are relative to *http://127.0.0.1:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkLicenseStatusUsingGET1**](EnvironmentControllerApi.md#checkLicenseStatusUsingGET1) | **GET** /restapi/v1.0/ems/license/check | checkLicenseStatus
[**createDashboardUsingGET1**](EnvironmentControllerApi.md#createDashboardUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/create | createDashboard
[**createNoticeInfoUsingPOST**](EnvironmentControllerApi.md#createNoticeInfoUsingPOST) | **POST** /restapi/v1.0/ems/dashboard/notice/edit | createNoticeInfo
[**deleteDashboardUsingDELETE1**](EnvironmentControllerApi.md#deleteDashboardUsingDELETE1) | **DELETE** /restapi/v1.0/ems/dashboard | deleteDashboard
[**deleteNoticeInfoUsingDELETE**](EnvironmentControllerApi.md#deleteNoticeInfoUsingDELETE) | **DELETE** /restapi/v1.0/ems/dashboard/notice/edit | deleteNoticeInfo
[**getCategoryInfoUsingGET**](EnvironmentControllerApi.md#getCategoryInfoUsingGET) | **GET** /restapi/v1.0/ems/category/{categoryId} | getCategoryInfo
[**getDeviceStatusInfoUsingGET**](EnvironmentControllerApi.md#getDeviceStatusInfoUsingGET) | **GET** /restapi/v1.0/ems/device/check | getDeviceStatusInfo
[**getLicenseCheckDetailUsingGET1**](EnvironmentControllerApi.md#getLicenseCheckDetailUsingGET1) | **GET** /restapi/v1.0/ems/license/check/detail | getLicenseCheckDetail
[**getMenuItemCountUsingGET**](EnvironmentControllerApi.md#getMenuItemCountUsingGET) | **GET** /restapi/v1.0/ems/menu/count | getMenuItemCount
[**getServerSetupInfoUsingGET1**](EnvironmentControllerApi.md#getServerSetupInfoUsingGET1) | **GET** /restapi/v1.0/ems/setup | getServerSetupInfo
[**getTagListInfoUsingPOST1**](EnvironmentControllerApi.md#getTagListInfoUsingPOST1) | **POST** /restapi/v1.0/ems/tag | getTagListInfo
[**listDashboardInfoUsingGET1**](EnvironmentControllerApi.md#listDashboardInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard | listDashboardInfo
[**listDashboardLoginInfoUsingGET1**](EnvironmentControllerApi.md#listDashboardLoginInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/login | listDashboardLoginInfo
[**listDashboardNoticeInfoUsingGET1**](EnvironmentControllerApi.md#listDashboardNoticeInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/notice | listDashboardNoticeInfo
[**listDashboardStorageInfoUsingGET**](EnvironmentControllerApi.md#listDashboardStorageInfoUsingGET) | **GET** /restapi/v1.0/ems/dashboard/storage | listDashboardStorageInfo
[**listEditNoticeInfoUsingGET1**](EnvironmentControllerApi.md#listEditNoticeInfoUsingGET1) | **GET** /restapi/v1.0/ems/dashboard/notice/edit | listEditNoticeInfo
[**listLicenseUsingGET1**](EnvironmentControllerApi.md#listLicenseUsingGET1) | **GET** /restapi/v1.0/ems/license | listLicense
[**listMenuUsingGET**](EnvironmentControllerApi.md#listMenuUsingGET) | **GET** /restapi/v1.0/ems/menu | listMenu
[**updateDashboardPriorityUsingPUT**](EnvironmentControllerApi.md#updateDashboardPriorityUsingPUT) | **PUT** /restapi/v1.0/ems/dashboard | updateDashboardPriority
[**updateNoticeInfoUsingPUT1**](EnvironmentControllerApi.md#updateNoticeInfoUsingPUT1) | **PUT** /restapi/v1.0/ems/dashboard/notice/edit | updateNoticeInfo


<a name="checkLicenseStatusUsingGET1"></a>
# **checkLicenseStatusUsingGET1**
> ResponseBody checkLicenseStatusUsingGET1()

checkLicenseStatus

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkLicenseStatusUsingGET1(callback);
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

<a name="createDashboardUsingGET1"></a>
# **createDashboardUsingGET1**
> ResponseBody createDashboardUsingGET1(dashboardName)

createDashboard

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var dashboardName = "dashboardName_example"; // String | dashboardName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDashboardUsingGET1(dashboardName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardName** | **String**| dashboardName | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNoticeInfoUsingPOST"></a>
# **createNoticeInfoUsingPOST**
> ResponseBody createNoticeInfoUsingPOST(filter)

createNoticeInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var filter = new MagicInfoServerV41RestApi.EnvironmentNoticeFilter(); // EnvironmentNoticeFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNoticeInfoUsingPOST(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**EnvironmentNoticeFilter**](EnvironmentNoticeFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDashboardUsingDELETE1"></a>
# **deleteDashboardUsingDELETE1**
> ResponseBody deleteDashboardUsingDELETE1(dashboardName)

deleteDashboard

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var dashboardName = "dashboardName_example"; // String | dashboardName


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDashboardUsingDELETE1(dashboardName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardName** | **String**| dashboardName | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNoticeInfoUsingDELETE"></a>
# **deleteNoticeInfoUsingDELETE**
> ResponseBody deleteNoticeInfoUsingDELETE(noticeId)

deleteNoticeInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var noticeId = "noticeId_example"; // String | noticeId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteNoticeInfoUsingDELETE(noticeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noticeId** | **String**| noticeId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCategoryInfoUsingGET"></a>
# **getCategoryInfoUsingGET**
> ResponseBody getCategoryInfoUsingGET(categoryId)

getCategoryInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var categoryId = "categoryId_example"; // String | categoryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategoryInfoUsingGET(categoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| categoryId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceStatusInfoUsingGET"></a>
# **getDeviceStatusInfoUsingGET**
> ResponseBody getDeviceStatusInfoUsingGET()

getDeviceStatusInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceStatusInfoUsingGET(callback);
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

<a name="getLicenseCheckDetailUsingGET1"></a>
# **getLicenseCheckDetailUsingGET1**
> ResponseBody getLicenseCheckDetailUsingGET1()

getLicenseCheckDetail

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLicenseCheckDetailUsingGET1(callback);
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

<a name="getMenuItemCountUsingGET"></a>
# **getMenuItemCountUsingGET**
> ResponseBody getMenuItemCountUsingGET()

getMenuItemCount

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMenuItemCountUsingGET(callback);
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

<a name="getServerSetupInfoUsingGET1"></a>
# **getServerSetupInfoUsingGET1**
> ResponseBody getServerSetupInfoUsingGET1()

getServerSetupInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServerSetupInfoUsingGET1(callback);
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

<a name="getTagListInfoUsingPOST1"></a>
# **getTagListInfoUsingPOST1**
> ResponseBody getTagListInfoUsingPOST1(params)

getTagListInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var params = new MagicInfoServerV41RestApi.TagResource(); // TagResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTagListInfoUsingPOST1(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**TagResource**](TagResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDashboardInfoUsingGET1"></a>
# **listDashboardInfoUsingGET1**
> ResponseBody listDashboardInfoUsingGET1()

listDashboardInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDashboardInfoUsingGET1(callback);
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

<a name="listDashboardLoginInfoUsingGET1"></a>
# **listDashboardLoginInfoUsingGET1**
> ResponseBody listDashboardLoginInfoUsingGET1()

listDashboardLoginInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDashboardLoginInfoUsingGET1(callback);
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

<a name="listDashboardNoticeInfoUsingGET1"></a>
# **listDashboardNoticeInfoUsingGET1**
> ResponseBody listDashboardNoticeInfoUsingGET1()

listDashboardNoticeInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDashboardNoticeInfoUsingGET1(callback);
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

<a name="listDashboardStorageInfoUsingGET"></a>
# **listDashboardStorageInfoUsingGET**
> ResponseBody listDashboardStorageInfoUsingGET()

listDashboardStorageInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDashboardStorageInfoUsingGET(callback);
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

<a name="listEditNoticeInfoUsingGET1"></a>
# **listEditNoticeInfoUsingGET1**
> ResponseBody listEditNoticeInfoUsingGET1(noticeId)

listEditNoticeInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var noticeId = "noticeId_example"; // String | noticeId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listEditNoticeInfoUsingGET1(noticeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noticeId** | **String**| noticeId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listLicenseUsingGET1"></a>
# **listLicenseUsingGET1**
> ResponseBody listLicenseUsingGET1()

listLicense

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLicenseUsingGET1(callback);
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

<a name="listMenuUsingGET"></a>
# **listMenuUsingGET**
> ResponseBody listMenuUsingGET()

listMenu

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMenuUsingGET(callback);
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

<a name="updateDashboardPriorityUsingPUT"></a>
# **updateDashboardPriorityUsingPUT**
> ResponseBody updateDashboardPriorityUsingPUT(filter)

updateDashboardPriority

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var filter = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter(); // EnvironmentPriorityFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDashboardPriorityUsingPUT(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**EnvironmentPriorityFilter**](EnvironmentPriorityFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNoticeInfoUsingPUT1"></a>
# **updateNoticeInfoUsingPUT1**
> ResponseBody updateNoticeInfoUsingPUT1(filter)

updateNoticeInfo

### Example
```javascript
var MagicInfoServerV41RestApi = require('magic_info_server_v41___rest_api');
var defaultClient = MagicInfoServerV41RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV41RestApi.EnvironmentControllerApi();

var filter = new MagicInfoServerV41RestApi.EnvironmentNoticeFilter(); // EnvironmentNoticeFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNoticeInfoUsingPUT1(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**EnvironmentNoticeFilter**](EnvironmentNoticeFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

