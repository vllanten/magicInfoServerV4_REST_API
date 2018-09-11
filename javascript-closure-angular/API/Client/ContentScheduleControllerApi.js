/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.ContentScheduleControllerApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * MagicInfo Server V4 REST API
 * Version: 1.0.0
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.ContentScheduleControllerApi');

goog.require('API.Client.ContentScheduleResource');
goog.require('API.Client.Error');
goog.require('API.Client.ResponseBody');
goog.require('API.Client.ScheduleFilter');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.ContentScheduleControllerApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('ContentScheduleControllerApiBasePath') ?
                   /** @type {!string} */ ($injector.get('ContentScheduleControllerApiBasePath')) :
                   'http://magicinfo.icluster.cl:7001/MagicInfo';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('ContentScheduleControllerApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('ContentScheduleControllerApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.ContentScheduleControllerApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * copyContentSchedule
 * 
 * @param {!string} programId programId
 * @param {!ContentScheduleResource} params params
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.copyContentScheduleUsingPUT1 = function(programId, params, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/{programId}/copy'
      .replace('{' + 'programId' + '}', String(programId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'programId' is set
  if (!programId) {
    throw new Error('Missing required parameter programId when calling copyContentScheduleUsingPUT1');
  }
  // verify required parameter 'params' is set
  if (!params) {
    throw new Error('Missing required parameter params when calling copyContentScheduleUsingPUT1');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: params,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * createContentSchedule
 * 
 * @param {!ContentScheduleResource} params params
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.createContentScheduleUsingPOST1 = function(params, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'params' is set
  if (!params) {
    throw new Error('Missing required parameter params when calling createContentScheduleUsingPOST1');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: params,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * deleteContentSchedule
 * 
 * @param {!string} programId programId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.deleteContentScheduleUsingDELETE = function(programId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/{programId}'
      .replace('{' + 'programId' + '}', String(programId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'programId' is set
  if (!programId) {
    throw new Error('Missing required parameter programId when calling deleteContentScheduleUsingDELETE');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'DELETE',
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
 * deployContentSchedule
 * 
 * @param {!string} programId programId
 * @param {!ContentScheduleResource} params params
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.deployContentScheduleUsingPUT = function(programId, params, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/{programId}/deploy'
      .replace('{' + 'programId' + '}', String(programId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'programId' is set
  if (!programId) {
    throw new Error('Missing required parameter programId when calling deployContentScheduleUsingPUT');
  }
  // verify required parameter 'params' is set
  if (!params) {
    throw new Error('Missing required parameter params when calling deployContentScheduleUsingPUT');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: params,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * editContentSchedule
 * 
 * @param {!string} programId programId
 * @param {!ContentScheduleResource} params params
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.editContentScheduleUsingPUT = function(programId, params, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/{programId}'
      .replace('{' + 'programId' + '}', String(programId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'programId' is set
  if (!programId) {
    throw new Error('Missing required parameter programId when calling editContentScheduleUsingPUT');
  }
  // verify required parameter 'params' is set
  if (!params) {
    throw new Error('Missing required parameter params when calling editContentScheduleUsingPUT');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: params,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * getProgramInfo
 * 
 * @param {!string} programId programId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.getProgramInfoUsingGET1 = function(programId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/{programId}'
      .replace('{' + 'programId' + '}', String(programId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'programId' is set
  if (!programId) {
    throw new Error('Missing required parameter programId when calling getProgramInfoUsingGET1');
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
 * getPublishStatus
 * 
 * @param {!string} programId programId
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.getPublishStatusUsingGET = function(programId, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/{programId}/publishStatus'
      .replace('{' + 'programId' + '}', String(programId));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'programId' is set
  if (!programId) {
    throw new Error('Missing required parameter programId when calling getPublishStatusUsingGET');
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
 * listContentScheduleAll
 * 
 * @param {!number} startIndex startIndex
 * @param {!number} pageSize pageSize
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.listContentScheduleAllUsingGET1 = function(startIndex, pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'startIndex' is set
  if (!startIndex) {
    throw new Error('Missing required parameter startIndex when calling listContentScheduleAllUsingGET1');
  }
  // verify required parameter 'pageSize' is set
  if (!pageSize) {
    throw new Error('Missing required parameter pageSize when calling listContentScheduleAllUsingGET1');
  }
  if (startIndex !== undefined) {
    queryParameters['startIndex'] = startIndex;
  }

  if (pageSize !== undefined) {
    queryParameters['pageSize'] = pageSize;
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
 * listContentScheduleByGroup
 * 
 * @param {!ScheduleFilter} filter filter
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.listContentScheduleByGroupUsingPOST1 = function(filter, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/filter';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'filter' is set
  if (!filter) {
    throw new Error('Missing required parameter filter when calling listContentScheduleByGroupUsingPOST1');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: filter,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * listDashboardScheduleInfo
 * 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.ResponseBody>}
 */
API.Client.ContentScheduleControllerApi.prototype.listDashboardScheduleInfoUsingGET = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/restapi/v1.0/dms/schedule/contents/dashboard';

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