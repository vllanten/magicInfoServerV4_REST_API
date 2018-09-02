# MagicInfoServerV4RestApi.DeviceControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveDeviceUsingPUT**](DeviceControllerApi.md#approveDeviceUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/approval | approveDevice
[**deleteDeviceUsingDELETE**](DeviceControllerApi.md#deleteDeviceUsingDELETE) | **DELETE** /restapi/v1.0/rms/devices/{deviceId} | deleteDevice
[**filterDeviceListUsingPOST**](DeviceControllerApi.md#filterDeviceListUsingPOST) | **POST** /restapi/v1.0/rms/devices/filter | filterDeviceList
[**getCabinetListUsingPOST1**](DeviceControllerApi.md#getCabinetListUsingPOST1) | **POST** /restapi/v1.0/rms/devices/{deviceId}/cabinet | getCabinetList
[**getCurrentStatusDisplayUsingGET1**](DeviceControllerApi.md#getCurrentStatusDisplayUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/display/{requestId} | getCurrentStatusDisplay
[**getCurrentStatusDisplayUsingGET3**](DeviceControllerApi.md#getCurrentStatusDisplayUsingGET3) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/display | getCurrentStatusDisplay
[**getCurrentStatusSecurityUsingGET1**](DeviceControllerApi.md#getCurrentStatusSecurityUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/security/{requestId} | getCurrentStatusSecurity
[**getCurrentStatusSecurityUsingGET3**](DeviceControllerApi.md#getCurrentStatusSecurityUsingGET3) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/security | getCurrentStatusSecurity
[**getCurrentStatusTimeUsingGET**](DeviceControllerApi.md#getCurrentStatusTimeUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/time/{requestId} | getCurrentStatusTime
[**getCurrentStatusTimeUsingGET3**](DeviceControllerApi.md#getCurrentStatusTimeUsingGET3) | **GET** /restapi/v1.0/rms/devices/{deviceId}/status/time | getCurrentStatusTime
[**getDashboardDeviceInfoUsingGET**](DeviceControllerApi.md#getDashboardDeviceInfoUsingGET) | **GET** /restapi/v1.0/rms/devices/dashboard | getDashboardDeviceInfo
[**getDeviceUsingGET1**](DeviceControllerApi.md#getDeviceUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId} | getDevice
[**getDisplayControlInfoUsingGET1**](DeviceControllerApi.md#getDisplayControlInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/display | getDisplayControlInfo
[**getGeneralInfoUsingGET1**](DeviceControllerApi.md#getGeneralInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/general | getGeneralInfo
[**getSecurityControlInfoUsingGET1**](DeviceControllerApi.md#getSecurityControlInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/security | getSecurityControlInfo
[**getSetupInfoUsingGET1**](DeviceControllerApi.md#getSetupInfoUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/setup | getSetupInfo
[**getTimeInfoUsingGET**](DeviceControllerApi.md#getTimeInfoUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/time | getTimeInfo
[**getUpdatedDisplayInfoResultUsingGET1**](DeviceControllerApi.md#getUpdatedDisplayInfoResultUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/display/{requestId} | getUpdatedDisplayInfoResult
[**getUpdatedGeneralInfoResultUsingGET**](DeviceControllerApi.md#getUpdatedGeneralInfoResultUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/general/{requestId} | getUpdatedGeneralInfoResult
[**getUpdatedSetupInfoResultUsingGET1**](DeviceControllerApi.md#getUpdatedSetupInfoResultUsingGET1) | **GET** /restapi/v1.0/rms/devices/{deviceId}/setup/{requestId} | getUpdatedSetupInfoResult
[**getUpdatedTimeInfoResultUsingGET**](DeviceControllerApi.md#getUpdatedTimeInfoResultUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/time/{requestId} | getUpdatedTimeInfoResult
[**listAllDeviceUsingGET**](DeviceControllerApi.md#listAllDeviceUsingGET) | **GET** /restapi/v1.0/rms/devices | listAllDevice
[**moveDeviceUsingPUT**](DeviceControllerApi.md#moveDeviceUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/move | moveDevice
[**startRmServerVncUsingGET**](DeviceControllerApi.md#startRmServerVncUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/rmserver/start | startRmServerVnc
[**stopRmServerVncUsingGET**](DeviceControllerApi.md#stopRmServerVncUsingGET) | **GET** /restapi/v1.0/rms/devices/{deviceId}/rmserver/stop | stopRmServerVnc
[**updateCabinetInfoUsingPUT**](DeviceControllerApi.md#updateCabinetInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/cabinet | updateCabinetInfo
[**updateDisplayInfoUsingPUT**](DeviceControllerApi.md#updateDisplayInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/display | updateDisplayInfo
[**updateGeneralInfoUsingPUT**](DeviceControllerApi.md#updateGeneralInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/general/info | updateGeneralInfo
[**updateGeneralUsingPUT**](DeviceControllerApi.md#updateGeneralUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/general | updateGeneral
[**updateSecurityInfoUsingPUT**](DeviceControllerApi.md#updateSecurityInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/security | updateSecurityInfo
[**updateSetupInfoUsingPUT**](DeviceControllerApi.md#updateSetupInfoUsingPUT) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/setup | updateSetupInfo
[**updateTimeInfoUsingPUT1**](DeviceControllerApi.md#updateTimeInfoUsingPUT1) | **PUT** /restapi/v1.0/rms/devices/{deviceId}/time | updateTimeInfo


<a name="approveDeviceUsingPUT"></a>
# **approveDeviceUsingPUT**
> ResponseBody approveDeviceUsingPUT(deviceId, params)

approveDevice

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceApproveResource(); // DeviceApproveResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.approveDeviceUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceApproveResource**](DeviceApproveResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeviceUsingDELETE"></a>
# **deleteDeviceUsingDELETE**
> ResponseBody deleteDeviceUsingDELETE(deviceId, params)

deleteDevice

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceFilter(); // DeviceFilter | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDeviceUsingDELETE(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceFilter**](DeviceFilter.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterDeviceListUsingPOST"></a>
# **filterDeviceListUsingPOST**
> ResponseBody filterDeviceListUsingPOST(params)

filterDeviceList

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var params = new MagicInfoServerV4RestApi.DeviceFilter(); // DeviceFilter | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterDeviceListUsingPOST(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**DeviceFilter**](DeviceFilter.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCabinetListUsingPOST1"></a>
# **getCabinetListUsingPOST1**
> ResponseBody getCabinetListUsingPOST1(deviceId, params)

getCabinetList

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceFilter(); // DeviceFilter | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCabinetListUsingPOST1(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceFilter**](DeviceFilter.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentStatusDisplayUsingGET1"></a>
# **getCurrentStatusDisplayUsingGET1**
> ResponseBody getCurrentStatusDisplayUsingGET1(deviceId, requestId)

getCurrentStatusDisplay

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var requestId = "requestId_example"; // String | requestId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentStatusDisplayUsingGET1(deviceId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **requestId** | **String**| requestId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentStatusDisplayUsingGET3"></a>
# **getCurrentStatusDisplayUsingGET3**
> ResponseBody getCurrentStatusDisplayUsingGET3(deviceId)

getCurrentStatusDisplay

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentStatusDisplayUsingGET3(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentStatusSecurityUsingGET1"></a>
# **getCurrentStatusSecurityUsingGET1**
> ResponseBody getCurrentStatusSecurityUsingGET1(deviceId, requestId)

getCurrentStatusSecurity

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var requestId = "requestId_example"; // String | requestId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentStatusSecurityUsingGET1(deviceId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **requestId** | **String**| requestId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentStatusSecurityUsingGET3"></a>
# **getCurrentStatusSecurityUsingGET3**
> ResponseBody getCurrentStatusSecurityUsingGET3(deviceId)

getCurrentStatusSecurity

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentStatusSecurityUsingGET3(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentStatusTimeUsingGET"></a>
# **getCurrentStatusTimeUsingGET**
> ResponseBody getCurrentStatusTimeUsingGET(deviceId, requestId)

getCurrentStatusTime

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var requestId = "requestId_example"; // String | requestId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentStatusTimeUsingGET(deviceId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **requestId** | **String**| requestId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentStatusTimeUsingGET3"></a>
# **getCurrentStatusTimeUsingGET3**
> ResponseBody getCurrentStatusTimeUsingGET3(deviceId)

getCurrentStatusTime

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurrentStatusTimeUsingGET3(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDashboardDeviceInfoUsingGET"></a>
# **getDashboardDeviceInfoUsingGET**
> ResponseBody getDashboardDeviceInfoUsingGET()

getDashboardDeviceInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDashboardDeviceInfoUsingGET(callback);
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

<a name="getDeviceUsingGET1"></a>
# **getDeviceUsingGET1**
> ResponseBody getDeviceUsingGET1(deviceId)

getDevice

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceUsingGET1(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDisplayControlInfoUsingGET1"></a>
# **getDisplayControlInfoUsingGET1**
> ResponseBody getDisplayControlInfoUsingGET1(deviceId)

getDisplayControlInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDisplayControlInfoUsingGET1(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeneralInfoUsingGET1"></a>
# **getGeneralInfoUsingGET1**
> ResponseBody getGeneralInfoUsingGET1(deviceId)

getGeneralInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeneralInfoUsingGET1(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSecurityControlInfoUsingGET1"></a>
# **getSecurityControlInfoUsingGET1**
> ResponseBody getSecurityControlInfoUsingGET1(deviceId)

getSecurityControlInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSecurityControlInfoUsingGET1(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSetupInfoUsingGET1"></a>
# **getSetupInfoUsingGET1**
> ResponseBody getSetupInfoUsingGET1(deviceId)

getSetupInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSetupInfoUsingGET1(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTimeInfoUsingGET"></a>
# **getTimeInfoUsingGET**
> ResponseBody getTimeInfoUsingGET(deviceId)

getTimeInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTimeInfoUsingGET(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUpdatedDisplayInfoResultUsingGET1"></a>
# **getUpdatedDisplayInfoResultUsingGET1**
> ResponseBody getUpdatedDisplayInfoResultUsingGET1(deviceId, requestId)

getUpdatedDisplayInfoResult

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var requestId = "requestId_example"; // String | requestId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUpdatedDisplayInfoResultUsingGET1(deviceId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **requestId** | **String**| requestId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUpdatedGeneralInfoResultUsingGET"></a>
# **getUpdatedGeneralInfoResultUsingGET**
> ResponseBody getUpdatedGeneralInfoResultUsingGET(deviceId, requestId)

getUpdatedGeneralInfoResult

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var requestId = "requestId_example"; // String | requestId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUpdatedGeneralInfoResultUsingGET(deviceId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **requestId** | **String**| requestId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUpdatedSetupInfoResultUsingGET1"></a>
# **getUpdatedSetupInfoResultUsingGET1**
> ResponseBody getUpdatedSetupInfoResultUsingGET1(deviceId, requestId)

getUpdatedSetupInfoResult

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var requestId = "requestId_example"; // String | requestId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUpdatedSetupInfoResultUsingGET1(deviceId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **requestId** | **String**| requestId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUpdatedTimeInfoResultUsingGET"></a>
# **getUpdatedTimeInfoResultUsingGET**
> ResponseBody getUpdatedTimeInfoResultUsingGET(deviceId, requestId)

getUpdatedTimeInfoResult

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var requestId = "requestId_example"; // String | requestId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUpdatedTimeInfoResultUsingGET(deviceId, requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **requestId** | **String**| requestId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAllDeviceUsingGET"></a>
# **listAllDeviceUsingGET**
> ResponseBody listAllDeviceUsingGET(startIndex, pageSize)

listAllDevice

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var startIndex = 56; // Number | startIndex

var pageSize = 56; // Number | pageSize


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllDeviceUsingGET(startIndex, pageSize, callback);
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

<a name="moveDeviceUsingPUT"></a>
# **moveDeviceUsingPUT**
> ResponseBody moveDeviceUsingPUT(deviceId, params)

moveDevice

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceFilter(); // DeviceFilter | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.moveDeviceUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceFilter**](DeviceFilter.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startRmServerVncUsingGET"></a>
# **startRmServerVncUsingGET**
> ResponseBody startRmServerVncUsingGET(deviceId)

startRmServerVnc

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startRmServerVncUsingGET(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stopRmServerVncUsingGET"></a>
# **stopRmServerVncUsingGET**
> ResponseBody stopRmServerVncUsingGET(deviceId)

stopRmServerVnc

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stopRmServerVncUsingGET(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCabinetInfoUsingPUT"></a>
# **updateCabinetInfoUsingPUT**
> ResponseBody updateCabinetInfoUsingPUT(deviceId, params)

updateCabinetInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceLedCabinetResource(); // DeviceLedCabinetResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCabinetInfoUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceLedCabinetResource**](DeviceLedCabinetResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDisplayInfoUsingPUT"></a>
# **updateDisplayInfoUsingPUT**
> ResponseBody updateDisplayInfoUsingPUT(deviceId, params)

updateDisplayInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceDisplayConfResource(); // DeviceDisplayConfResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDisplayInfoUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceDisplayConfResource**](DeviceDisplayConfResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGeneralInfoUsingPUT"></a>
# **updateGeneralInfoUsingPUT**
> ResponseBody updateGeneralInfoUsingPUT(deviceId, params)

updateGeneralInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceGeneralConfResource(); // DeviceGeneralConfResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGeneralInfoUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceGeneralConfResource**](DeviceGeneralConfResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGeneralUsingPUT"></a>
# **updateGeneralUsingPUT**
> ResponseBody updateGeneralUsingPUT(deviceId, params)

updateGeneral

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceGeneralConfResource(); // DeviceGeneralConfResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGeneralUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceGeneralConfResource**](DeviceGeneralConfResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSecurityInfoUsingPUT"></a>
# **updateSecurityInfoUsingPUT**
> ResponseBody updateSecurityInfoUsingPUT(deviceId, params)

updateSecurityInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceSecurityConfResource(); // DeviceSecurityConfResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSecurityInfoUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceSecurityConfResource**](DeviceSecurityConfResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSetupInfoUsingPUT"></a>
# **updateSetupInfoUsingPUT**
> ResponseBody updateSetupInfoUsingPUT(deviceId, params)

updateSetupInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceSystemSetupConfResource(); // DeviceSystemSetupConfResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSetupInfoUsingPUT(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceSystemSetupConfResource**](DeviceSystemSetupConfResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTimeInfoUsingPUT1"></a>
# **updateTimeInfoUsingPUT1**
> ResponseBody updateTimeInfoUsingPUT1(deviceId, params)

updateTimeInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.DeviceControllerApi();

var deviceId = "deviceId_example"; // String | deviceId

var params = new MagicInfoServerV4RestApi.DeviceTimeconfResource(); // DeviceTimeconfResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTimeInfoUsingPUT1(deviceId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| deviceId | 
 **params** | [**DeviceTimeconfResource**](DeviceTimeconfResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

