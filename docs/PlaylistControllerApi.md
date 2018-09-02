# MagicInfoServerV4RestApi.PlaylistControllerApi

All URIs are relative to *http://127.0.0.2:7001/MagicInfo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyPlaylistUsingPUT1**](PlaylistControllerApi.md#copyPlaylistUsingPUT1) | **PUT** /restapi/v1.0/cms/playlists/{playlistId}/copy | copyPlaylist
[**createPlaylistUsingPOST**](PlaylistControllerApi.md#createPlaylistUsingPOST) | **POST** /restapi/v1.0/cms/playlists | createPlaylist
[**deletePlaylistUsingDELETE**](PlaylistControllerApi.md#deletePlaylistUsingDELETE) | **DELETE** /restapi/v1.0/cms/playlists/{playlistId} | deletePlaylist
[**editPlaylistUsingPUT**](PlaylistControllerApi.md#editPlaylistUsingPUT) | **PUT** /restapi/v1.0/cms/playlists/{playlistId} | editPlaylist
[**getActivePlaylistInfoUsingGET**](PlaylistControllerApi.md#getActivePlaylistInfoUsingGET) | **GET** /restapi/v1.0/cms/playlists/{playlistId} | getActivePlaylistInfo
[**getDashboardPlaylistInfoUsingGET1**](PlaylistControllerApi.md#getDashboardPlaylistInfoUsingGET1) | **GET** /restapi/v1.0/cms/playlists/dashboard | getDashboardPlaylistInfo
[**listAllPlaylistUsingGET1**](PlaylistControllerApi.md#listAllPlaylistUsingGET1) | **GET** /restapi/v1.0/cms/playlists | listAllPlaylist
[**listPlaylistUsingPOST1**](PlaylistControllerApi.md#listPlaylistUsingPOST1) | **POST** /restapi/v1.0/cms/playlists/filter | listPlaylist


<a name="copyPlaylistUsingPUT1"></a>
# **copyPlaylistUsingPUT1**
> ResponseBody copyPlaylistUsingPUT1(playlistId, params)

copyPlaylist

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var playlistId = "playlistId_example"; // String | playlistId

var params = new MagicInfoServerV4RestApi.PlaylistResource(); // PlaylistResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.copyPlaylistUsingPUT1(playlistId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **String**| playlistId | 
 **params** | [**PlaylistResource**](PlaylistResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPlaylistUsingPOST"></a>
# **createPlaylistUsingPOST**
> ResponseBody createPlaylistUsingPOST(params)

createPlaylist

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var params = new MagicInfoServerV4RestApi.PlaylistResource(); // PlaylistResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPlaylistUsingPOST(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**PlaylistResource**](PlaylistResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePlaylistUsingDELETE"></a>
# **deletePlaylistUsingDELETE**
> ResponseBody deletePlaylistUsingDELETE(playlistId)

deletePlaylist

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var playlistId = "playlistId_example"; // String | playlistId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePlaylistUsingDELETE(playlistId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **String**| playlistId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editPlaylistUsingPUT"></a>
# **editPlaylistUsingPUT**
> ResponseBody editPlaylistUsingPUT(playlistId, params)

editPlaylist

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var playlistId = "playlistId_example"; // String | playlistId

var params = new MagicInfoServerV4RestApi.PlaylistResource(); // PlaylistResource | params


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editPlaylistUsingPUT(playlistId, params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **String**| playlistId | 
 **params** | [**PlaylistResource**](PlaylistResource.md)| params | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivePlaylistInfoUsingGET"></a>
# **getActivePlaylistInfoUsingGET**
> ResponseBody getActivePlaylistInfoUsingGET(playlistId)

getActivePlaylistInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var playlistId = "playlistId_example"; // String | playlistId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getActivePlaylistInfoUsingGET(playlistId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistId** | **String**| playlistId | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDashboardPlaylistInfoUsingGET1"></a>
# **getDashboardPlaylistInfoUsingGET1**
> ResponseBody getDashboardPlaylistInfoUsingGET1()

getDashboardPlaylistInfo

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDashboardPlaylistInfoUsingGET1(callback);
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

<a name="listAllPlaylistUsingGET1"></a>
# **listAllPlaylistUsingGET1**
> ResponseBody listAllPlaylistUsingGET1(startIndex, pageSize)

listAllPlaylist

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var startIndex = 56; // Number | startIndex

var pageSize = 56; // Number | pageSize


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAllPlaylistUsingGET1(startIndex, pageSize, callback);
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

<a name="listPlaylistUsingPOST1"></a>
# **listPlaylistUsingPOST1**
> ResponseBody listPlaylistUsingPOST1(filter)

listPlaylist

### Example
```javascript
var MagicInfoServerV4RestApi = require('magic_info_server_v4_rest_api');
var defaultClient = MagicInfoServerV4RestApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new MagicInfoServerV4RestApi.PlaylistControllerApi();

var filter = new MagicInfoServerV4RestApi.PlaylistFilter(); // PlaylistFilter | filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPlaylistUsingPOST1(filter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**PlaylistFilter**](PlaylistFilter.md)| filter | 

### Return type

[**ResponseBody**](ResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

