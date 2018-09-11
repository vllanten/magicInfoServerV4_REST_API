goog.provide('API.Client.Response');

/**
 * @record
 */
API.Client.Response = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.Response.prototype.description;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Response.prototype.examples;

/**
 * @type {!Object<!string, API.Client.Property>}
 * @export
 */
API.Client.Response.prototype.headers;

/**
 * @type {!API.Client.Property}
 * @export
 */
API.Client.Response.prototype.schema;

