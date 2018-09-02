/**
 * MagicInfo Server V4.1 - REST API
 * MagicInfo Server V4.1 - REST API
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
    define(['ApiClient', 'model/Error', 'model/Response', 'model/ResponseBody', 'model/UserFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Response'), require('../model/ResponseBody'), require('../model/UserFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoServerV41RestApi) {
      root.MagicInfoServerV41RestApi = {};
    }
    root.MagicInfoServerV41RestApi.UserControllerApi = factory(root.MagicInfoServerV41RestApi.ApiClient, root.MagicInfoServerV41RestApi.Error, root.MagicInfoServerV41RestApi.Response, root.MagicInfoServerV41RestApi.ResponseBody, root.MagicInfoServerV41RestApi.UserFilter);
  }
}(this, function(ApiClient, Error, Response, ResponseBody, UserFilter) {
  'use strict';

  /**
   * UserController service.
   * @module api/UserControllerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserControllerApi. 
   * @alias module:api/UserControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUserSignUpUsingPOST operation.
     * @callback module:api/UserControllerApi~createUserSignUpUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createUserSignUp
     * @param {module:model/UserFilter} filter filter
     * @param {module:api/UserControllerApi~createUserSignUpUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.createUserSignUpUsingPOST = function(filter, callback) {
      var postBody = filter;

      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling createUserSignUpUsingPOST");
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
        '/restapi/v1.0/ums/users/signup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserUsingPOST operation.
     * @callback module:api/UserControllerApi~createUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createUser
     * @param {module:model/UserFilter} filter filter
     * @param {module:api/UserControllerApi~createUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.createUserUsingPOST = function(filter, callback) {
      var postBody = filter;

      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling createUserUsingPOST");
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
        '/restapi/v1.0/ums/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listDashboardUserInfoUsingGET operation.
     * @callback module:api/UserControllerApi~listDashboardUserInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listDashboardUserInfo
     * @param {module:api/UserControllerApi~listDashboardUserInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listDashboardUserInfoUsingGET = function(callback) {
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
        '/restapi/v1.0/ums/users/dashboard', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listMyInfoUsingGET operation.
     * @callback module:api/UserControllerApi~listMyInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get specific admin
     * Fetch the admin user details
     * @param {module:api/UserControllerApi~listMyInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    this.listMyInfoUsingGET = function(callback) {
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
      var returnType = Response;

      return this.apiClient.callApi(
        '/restapi/v1.0/ums/users/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listUserOrganUsingGET1 operation.
     * @callback module:api/UserControllerApi~listUserOrganUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listUserOrgan
     * @param {module:api/UserControllerApi~listUserOrganUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.listUserOrganUsingGET1 = function(callback) {
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
        '/restapi/v1.0/ums/users/organization', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMyInfoUsingPUT1 operation.
     * @callback module:api/UserControllerApi~updateMyInfoUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateMyInfo
     * @param {module:model/UserFilter} filter filter
     * @param {module:api/UserControllerApi~updateMyInfoUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseBody}
     */
    this.updateMyInfoUsingPUT1 = function(filter, callback) {
      var postBody = filter;

      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling updateMyInfoUsingPUT1");
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
        '/restapi/v1.0/ums/users/me', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
