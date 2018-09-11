goog.provide('API.Client.TagResource');

/**
 * @record
 */
API.Client.TagResource = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.TagResource.prototype.pageSize;

/**
 * @type {!number}
 * @export
 */
API.Client.TagResource.prototype.startIndex;

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.TagResource.prototype.tagList;

