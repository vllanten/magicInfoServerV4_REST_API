goog.provide('API.Client.UserFilter');

/**
 * @record
 */
API.Client.UserFilter = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.confirmPassword;

/**
 * [optional] updateMyInfo
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.email;

/**
 * [doNotUse] createUserSignUp, updateMyInfo
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.groupName;

/**
 * [doNotUse] updateMyInfo
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.organization;

/**
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.password;

/**
 * [doNotUse] createUserSignUp, updateMyInfo
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.role;

/**
 * [doNotUse] updateMyInfo
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.userId;

/**
 * @type {!string}
 * @export
 */
API.Client.UserFilter.prototype.userName;

