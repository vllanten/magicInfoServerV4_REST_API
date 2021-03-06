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
    define(['ApiClient', 'model/AuthResource', 'model/Error', 'model/TokenAuth'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthResource'), require('../model/Error'), require('../model/TokenAuth'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoApi) {
      root.MagicInfoApi = {};
    }
    root.MagicInfoApi.AuthApi = factory(root.MagicInfoApi.ApiClient, root.MagicInfoApi.AuthResource, root.MagicInfoApi.Error, root.MagicInfoApi.TokenAuth);
  }
}(this, function(ApiClient, AuthResource, Error, TokenAuth) {
  'use strict';

  /**
   * Auth service.
   * @module api/AuthApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:api/AuthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the authorization operation.
     * @callback module:api/AuthApi~authorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenAuth} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorization
     * @param {module:model/AuthResource} userLogin resource
     * @param {module:api/AuthApi~authorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TokenAuth}
     */
    this.authorization = function(userLogin, callback) {
      var postBody = userLogin;

      // verify the required parameter 'userLogin' is set
      if (userLogin === undefined || userLogin === null) {
        throw new Error("Missing the required parameter 'userLogin' when calling authorization");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TokenAuth;

      return this.apiClient.callApi(
        '/auth', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshAuthorization operation.
     * @callback module:api/AuthApi~refreshAuthorizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenAuth} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh Authorization Token
     * @param {module:api/AuthApi~refreshAuthorizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TokenAuth}
     */
    this.refreshAuthorization = function(callback) {
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
      var returnType = TokenAuth;

      return this.apiClient.callApi(
        '/auth/refresh', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
