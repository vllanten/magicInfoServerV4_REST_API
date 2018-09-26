/**
 * magic info api
 * magic info api
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ContentApproveResource', 'model/ContentFilter', 'model/Error', 'model/ResponseBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContentApproveResource'), require('../model/ContentFilter'), require('../model/Error'), require('../model/ResponseBody'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoApi) {
      root.MagicInfoApi = {};
    }
    root.MagicInfoApi.ContentControllerApi = factory(root.MagicInfoApi.ApiClient, root.MagicInfoApi.ContentApproveResource, root.MagicInfoApi.ContentFilter, root.MagicInfoApi.Error, root.MagicInfoApi.ResponseBody);
  }
}(this, function(ApiClient, ContentApproveResource, ContentFilter, Error, ResponseBody) {
  'use strict';

  /**
   * ContentController service.
   * @module api/ContentControllerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ContentControllerApi. 
   * @alias module:api/ContentControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the approveContentsUsingPUT1 operation.
     * @callback module:api/ContentControllerApi~approveContentsUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * approveContents
     * @param {String} contentId contentId
     * @param {module:model/ContentApproveResource} resource resource
     * @param {module:api/ContentControllerApi~approveContentsUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.approveContentsUsingPUT1 = function(contentId, resource, callback) {
      var postBody = resource;

      // verify the required parameter 'contentId' is set
      if (contentId === undefined || contentId === null) {
        throw new Error("Missing the required parameter 'contentId' when calling approveContentsUsingPUT1");
      }

      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling approveContentsUsingPUT1");
      }


      var pathParams = {
        'contentId': contentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents/{contentId}/approval', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContentUsingDELETE1 operation.
     * @callback module:api/ContentControllerApi~deleteContentUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteContent
     * @param {String} contentId contentId
     * @param {module:api/ContentControllerApi~deleteContentUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.deleteContentUsingDELETE1 = function(contentId, callback) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId === undefined || contentId === null) {
        throw new Error("Missing the required parameter 'contentId' when calling deleteContentUsingDELETE1");
      }


      var pathParams = {
        'contentId': contentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents/{contentId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the forceDeleteContentUsingDELETE1 operation.
     * @callback module:api/ContentControllerApi~forceDeleteContentUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * forceDeleteContent
     * @param {String} contentId contentId
     * @param {module:api/ContentControllerApi~forceDeleteContentUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.forceDeleteContentUsingDELETE1 = function(contentId, callback) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId === undefined || contentId === null) {
        throw new Error("Missing the required parameter 'contentId' when calling forceDeleteContentUsingDELETE1");
      }


      var pathParams = {
        'contentId': contentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents/force/{contentId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getActiveContentInfoUsingGET operation.
     * @callback module:api/ContentControllerApi~getActiveContentInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getActiveContentInfo
     * @param {String} contentId contentId
     * @param {module:api/ContentControllerApi~getActiveContentInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.getActiveContentInfoUsingGET = function(contentId, callback) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId === undefined || contentId === null) {
        throw new Error("Missing the required parameter 'contentId' when calling getActiveContentInfoUsingGET");
      }


      var pathParams = {
        'contentId': contentId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents/{contentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllContentUsingGET operation.
     * @callback module:api/ContentControllerApi~listAllContentUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listAllContent
     * @param {Number} startIndex startIndex
     * @param {Number} pageSize pageSize
     * @param {module:api/ContentControllerApi~listAllContentUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listAllContentUsingGET = function(startIndex, pageSize, callback) {
      var postBody = null;

      // verify the required parameter 'startIndex' is set
      if (startIndex === undefined || startIndex === null) {
        throw new Error("Missing the required parameter 'startIndex' when calling listAllContentUsingGET");
      }

      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling listAllContentUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'startIndex': startIndex,
        'pageSize': pageSize,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listContentUsingPOST1 operation.
     * @callback module:api/ContentControllerApi~listContentUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listContent
     * @param {module:model/ContentFilter} filter filter
     * @param {module:api/ContentControllerApi~listContentUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listContentUsingPOST1 = function(filter, callback) {
      var postBody = filter;

      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling listContentUsingPOST1");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents/filter', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listDashboardContentInfoUsingGET operation.
     * @callback module:api/ContentControllerApi~listDashboardContentInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listDashboardContentInfo
     * @param {module:api/ContentControllerApi~listDashboardContentInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listDashboardContentInfoUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents/dashboard', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadContentUsingPOST operation.
     * @callback module:api/ContentControllerApi~uploadContentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * uploadContent
     * @param {String} groupId groupId
     * @param {module:api/ContentControllerApi~uploadContentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.uploadContentUsingPOST = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling uploadContentUsingPOST");
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseBody;

      return this.apiClient.callApi(
        '/restapi/v1.0/cms/contents/{groupId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
