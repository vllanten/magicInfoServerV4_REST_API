goog.provide('API.Client.ResponseBody');

/**
 * @record
 */
API.Client.ResponseBody = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.ResponseBody.prototype.apiVersion;

/**
 * @type {!string}
 * @export
 */
API.Client.ResponseBody.prototype.errorCode;

/**
 * @type {!string}
 * @export
 */
API.Client.ResponseBody.prototype.errorMessage;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.ResponseBody.prototype.items;

/**
 * @type {!number}
 * @export
 */
API.Client.ResponseBody.prototype.pageSize;

/**
 * @type {!number}
 * @export
 */
API.Client.ResponseBody.prototype.startIndex;

/**
 * @type {!string}
 * @export
 */
API.Client.ResponseBody.prototype.status;

/**
 * @type {!number}
 * @export
 */
API.Client.ResponseBody.prototype.totalCount;

