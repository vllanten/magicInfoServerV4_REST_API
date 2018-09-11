goog.provide('API.Client.DeviceGeneralConfResource');

/**
 * @record
 */
API.Client.DeviceGeneralConfResource = function() {}

/**
 * [Required] : updateSetupInfo api
 * @type {!string}
 * @export
 */
API.Client.DeviceGeneralConfResource.prototype.deviceModelName;

/**
 * [Required] : updateSetup api
 * @type {!string}
 * @export
 */
API.Client.DeviceGeneralConfResource.prototype.deviceName;

/**
 * [Required] : updateSetupInfo api
 * @type {!string}
 * @export
 */
API.Client.DeviceGeneralConfResource.prototype.location;

/**
 * @type {!Array<!string>}
 * @export
 */
API.Client.DeviceGeneralConfResource.prototype.modelNameList;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DeviceGeneralConfResource.prototype.power;

