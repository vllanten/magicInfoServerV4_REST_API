/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.UserGroupControllerApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * MagicInfo Server V4 REST API
 * Version: 1.0.0
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.UserGroupControllerApi');

goog.require('API.Client.Error');
goog.require('API.Client.ResponseBody');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.UserGroupControllerApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('UserGroupControllerApiBasePath') ?
                   /** @type {!string} */ ($injector.get('UserGroupControllerApiBasePath')) :
                   'http://magicinfo.icluster.cl:7001/MagicInfo';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('UserGroupControllerApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('UserGroupControllerApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.UserGroupControllerApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * listUserGroupChild
 * 
 * @param {!string} groupId groupId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.UserGroupControllerApi.prototype.listUserGroupChildUsingGET1 = function(groupId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/ums/users/groups/{groupId}/child'
      .replace('{' + 'groupId' + '}', String(groupId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'groupId' is set
  if (!groupId) {
    throw new Error('Missing required parameter groupId when calling listUserGroupChildUsingGET1');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * listUserGroupInfo
 * 
 * @param {!string} groupId groupId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.UserGroupControllerApi.prototype.listUserGroupInfoUsingGET1 = function(groupId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/ums/users/groups/{groupId}'
      .replace('{' + 'groupId' + '}', String(groupId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'groupId' is set
  if (!groupId) {
    throw new Error('Missing required parameter groupId when calling listUserGroupInfoUsingGET1');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * listUserGroupOrgan
 * 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.UserGroupControllerApi.prototype.listUserGroupOrganUsingGET1 = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/ums/users/groups';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}