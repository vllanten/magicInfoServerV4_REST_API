/**
 * MagicInfo Server V4x REST API
 * MagicInfo Server V4x REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/ResponseBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ResponseBody'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoServerV4xRestApi) {
      root.MagicInfoServerV4xRestApi = {};
    }
    root.MagicInfoServerV4xRestApi.ContentScheduleGroupControllerApi = factory(root.MagicInfoServerV4xRestApi.ApiClient, root.MagicInfoServerV4xRestApi.Error, root.MagicInfoServerV4xRestApi.ResponseBody);
  }
}(this, function(ApiClient, Error, ResponseBody) {
  'use strict';

  /**
   * ContentScheduleGroupController service.
   * @module api/ContentScheduleGroupControllerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ContentScheduleGroupControllerApi. 
   * @alias module:api/ContentScheduleGroupControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getChildGroupsUsingGET operation.
     * @callback module:api/ContentScheduleGroupControllerApi~getChildGroupsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getChildGroups
     * @param {String} groupId groupId
     * @param {module:api/ContentScheduleGroupControllerApi~getChildGroupsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.getChildGroupsUsingGET = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getChildGroupsUsingGET");
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
        '/restapi/v1.0/dms/schedule/contents/groups/{groupId}/child', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRootGroupsUsingGET operation.
     * @callback module:api/ContentScheduleGroupControllerApi~getRootGroupsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRootGroups
     * @param {module:api/ContentScheduleGroupControllerApi~getRootGroupsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.getRootGroupsUsingGET = function(callback) {
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
        '/restapi/v1.0/dms/schedule/contents/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listContentScheduleGroupInfoUsingGET operation.
     * @callback module:api/ContentScheduleGroupControllerApi~listContentScheduleGroupInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listContentScheduleGroupInfo
     * @param {Number} groupId groupId
     * @param {module:api/ContentScheduleGroupControllerApi~listContentScheduleGroupInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listContentScheduleGroupInfoUsingGET = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling listContentScheduleGroupInfoUsingGET");
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
        '/restapi/v1.0/dms/schedule/contents/groups/{groupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
