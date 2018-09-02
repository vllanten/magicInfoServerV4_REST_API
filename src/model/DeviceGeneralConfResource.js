/**
 * MagicInfo Server V4x REST API
 * MagicInfo Server V4x REST API
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoServerV4xRestApi) {
      root.MagicInfoServerV4xRestApi = {};
    }
    root.MagicInfoServerV4xRestApi.DeviceGeneralConfResource = factory(root.MagicInfoServerV4xRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceGeneralConfResource model module.
   * @module model/DeviceGeneralConfResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceGeneralConfResource</code>.
   * @alias module:model/DeviceGeneralConfResource
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DeviceGeneralConfResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceGeneralConfResource} obj Optional instance to populate.
   * @return {module:model/DeviceGeneralConfResource} The populated <code>DeviceGeneralConfResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceModelName')) {
        obj['deviceModelName'] = ApiClient.convertToType(data['deviceModelName'], 'String');
      }
      if (data.hasOwnProperty('deviceName')) {
        obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('modelNameList')) {
        obj['modelNameList'] = ApiClient.convertToType(data['modelNameList'], ['String']);
      }
      if (data.hasOwnProperty('power')) {
        obj['power'] = ApiClient.convertToType(data['power'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * [Required] : updateSetupInfo api
   * @member {String} deviceModelName
   */
  exports.prototype['deviceModelName'] = undefined;
  /**
   * [Required] : updateSetup api
   * @member {String} deviceName
   */
  exports.prototype['deviceName'] = undefined;
  /**
   * [Required] : updateSetupInfo api
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {Array.<String>} modelNameList
   */
  exports.prototype['modelNameList'] = undefined;
  /**
   * @member {Boolean} power
   */
  exports.prototype['power'] = undefined;



  return exports;
}));


