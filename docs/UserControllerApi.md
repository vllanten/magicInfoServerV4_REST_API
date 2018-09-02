# MagicInfoServerV4xRestApi.UserControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserSignUpUsingPOST**](UserControllerApi.md#createUserSignUpUsingPOST) | **POST** /restapi/v1.0/ums/users/signup | createUserSignUp
[**createUserUsingPOST**](UserControllerApi.md#createUserUsingPOST) | **POST** /restapi/v1.0/ums/users | createUser
[**listDashboardUserInfoUsingGET**](UserControllerApi.md#listDashboardUserInfoUsingGET) | **GET** /restapi/v1.0/ums/users/dashboard | listDashboardUserInfo
[**listMyInfoUsingGET**](UserControllerApi.md#listMyInfoUsingGET) | **GET** /restapi/v1.0/ums/users/me | Get specific admin
[**listUserOrganUsingGET1**](UserControllerApi.md#listUserOrganUsingGET1) | **GET** /restapi/v1.0/ums/users/organization | listUserOrgan
[**updateMyInfoUsingPUT1**](UserControllerApi.md#updateMyInfoUsingPUT1) | **PUT** /restapi/v1.0/ums/users/me | updateMyInfo


<a name="createUserSignUpUsingPOST"></a>
# **createUserSignUpUsingPOST**
> ResponseBody createUserSignUpUsingPOST(filter)

createUserSignUp

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.UserControllerApi();

var filter = new MagicInfoServerV4xRestApi.UserFilter(); // UserFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserSignUpUsingPOST(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**UserFilter**](UserFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserUsingPOST"></a>
# **createUserUsingPOST**
> ResponseBody createUserUsingPOST(filter)

createUser

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.UserControllerApi();

var filter = new MagicInfoServerV4xRestApi.UserFilter(); // UserFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserUsingPOST(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**UserFilter**](UserFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDashboardUserInfoUsingGET"></a>
# **listDashboardUserInfoUsingGET**
> ResponseBody listDashboardUserInfoUsingGET()

listDashboardUserInfo

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.UserControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDashboardUserInfoUsingGET(callback);
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

<a name="listMyInfoUsingGET"></a>
# **listMyInfoUsingGET**
> Response listMyInfoUsingGET()

Get specific admin

Fetch the admin user details

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.UserControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMyInfoUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response**](Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUserOrganUsingGET1"></a>
# **listUserOrganUsingGET1**
> ResponseBody listUserOrganUsingGET1()

listUserOrgan

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.UserControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listUserOrganUsingGET1(callback);
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

<a name="updateMyInfoUsingPUT1"></a>
# **updateMyInfoUsingPUT1**
> ResponseBody updateMyInfoUsingPUT1(filter)

updateMyInfo

### Example
```javascript
var MagicInfoServerV4xRestApi = require('magic_info_server_v4x_rest_api');
var defaultClient = MagicInfoServerV4xRestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4xRestApi.UserControllerApi();

var filter = new MagicInfoServerV4xRestApi.UserFilter(); // UserFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMyInfoUsingPUT1(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**UserFilter**](UserFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

