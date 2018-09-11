goog.provide('API.Client.Error');

/**
 * @record
 */
API.Client.Error = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.Error.prototype.description;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Error.prototype.examples;

/**
 * @type {!Object<!string, API.Client.Property>}
 * @export
 */
API.Client.Error.prototype.headers;

/**
 * @type {!API.Client.Property}
 * @export
 */
API.Client.Error.prototype.schema;

