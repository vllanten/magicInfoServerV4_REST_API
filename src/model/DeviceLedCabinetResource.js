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
    root.MagicInfoServerV4xRestApi.DeviceLedCabinetResource = factory(root.MagicInfoServerV4xRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceLedCabinetResource model module.
   * @module model/DeviceLedCabinetResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceLedCabinetResource</code>.
   * @alias module:model/DeviceLedCabinetResource
   * @class
   */
  var exports = function() {
    var _this = this;






























  };

  /**
   * Constructs a <code>DeviceLedCabinetResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceLedCabinetResource} obj Optional instance to populate.
   * @return {module:model/DeviceLedCabinetResource} The populated <code>DeviceLedCabinetResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('abl')) {
        obj['abl'] = ApiClient.convertToType(data['abl'], 'Number');
      }
      if (data.hasOwnProperty('aspectRatio')) {
        obj['aspectRatio'] = ApiClient.convertToType(data['aspectRatio'], 'String');
      }
      if (data.hasOwnProperty('autoSource')) {
        obj['autoSource'] = ApiClient.convertToType(data['autoSource'], 'Number');
      }
      if (data.hasOwnProperty('backlight')) {
        obj['backlight'] = ApiClient.convertToType(data['backlight'], 'Number');
      }
      if (data.hasOwnProperty('cabinetGroupId')) {
        obj['cabinetGroupId'] = ApiClient.convertToType(data['cabinetGroupId'], 'Number');
      }
      if (data.hasOwnProperty('cabinetId')) {
        obj['cabinetId'] = ApiClient.convertToType(data['cabinetId'], 'Number');
      }
      if (data.hasOwnProperty('childAlarmTemperature')) {
        obj['childAlarmTemperature'] = ApiClient.convertToType(data['childAlarmTemperature'], 'Number');
      }
      if (data.hasOwnProperty('childIdList')) {
        obj['childIdList'] = ApiClient.convertToType(data['childIdList'], ['String']);
      }
      if (data.hasOwnProperty('currentTemperature')) {
        obj['currentTemperature'] = ApiClient.convertToType(data['currentTemperature'], 'Number');
      }
      if (data.hasOwnProperty('edgeCorrection')) {
        obj['edgeCorrection'] = ApiClient.convertToType(data['edgeCorrection'], 'Number');
      }
      if (data.hasOwnProperty('fault')) {
        obj['fault'] = ApiClient.convertToType(data['fault'], 'String');
      }
      if (data.hasOwnProperty('fpgaVersion')) {
        obj['fpgaVersion'] = ApiClient.convertToType(data['fpgaVersion'], 'String');
      }
      if (data.hasOwnProperty('fwVersion')) {
        obj['fwVersion'] = ApiClient.convertToType(data['fwVersion'], 'String');
      }
      if (data.hasOwnProperty('gamut')) {
        obj['gamut'] = ApiClient.convertToType(data['gamut'], 'Number');
      }
      if (data.hasOwnProperty('hdbt')) {
        obj['hdbt'] = ApiClient.convertToType(data['hdbt'], 'String');
      }
      if (data.hasOwnProperty('ic')) {
        obj['ic'] = ApiClient.convertToType(data['ic'], 'String');
      }
      if (data.hasOwnProperty('inputSource')) {
        obj['inputSource'] = ApiClient.convertToType(data['inputSource'], 'Number');
      }
      if (data.hasOwnProperty('lastScannedTime')) {
        obj['lastScannedTime'] = ApiClient.convertToType(data['lastScannedTime'], 'Date');
      }
      if (data.hasOwnProperty('luminance')) {
        obj['luminance'] = ApiClient.convertToType(data['luminance'], 'Number');
      }
      if (data.hasOwnProperty('moduleRgbCc')) {
        obj['moduleRgbCc'] = ApiClient.convertToType(data['moduleRgbCc'], 'Number');
      }
      if (data.hasOwnProperty('modules')) {
        obj['modules'] = ApiClient.convertToType(data['modules'], 'String');
      }
      if (data.hasOwnProperty('openDetection')) {
        obj['openDetection'] = ApiClient.convertToType(data['openDetection'], 'String');
      }
      if (data.hasOwnProperty('parentDeviceId')) {
        obj['parentDeviceId'] = ApiClient.convertToType(data['parentDeviceId'], 'String');
      }
      if (data.hasOwnProperty('phySize')) {
        obj['phySize'] = ApiClient.convertToType(data['phySize'], 'String');
      }
      if (data.hasOwnProperty('pitch')) {
        obj['pitch'] = ApiClient.convertToType(data['pitch'], 'String');
      }
      if (data.hasOwnProperty('pixelRgbCc')) {
        obj['pixelRgbCc'] = ApiClient.convertToType(data['pixelRgbCc'], 'Number');
      }
      if (data.hasOwnProperty('power')) {
        obj['power'] = ApiClient.convertToType(data['power'], 'String');
      }
      if (data.hasOwnProperty('resolution')) {
        obj['resolution'] = ApiClient.convertToType(data['resolution'], 'String');
      }
      if (data.hasOwnProperty('voltageStatus')) {
        obj['voltageStatus'] = ApiClient.convertToType(data['voltageStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} abl
   */
  exports.prototype['abl'] = undefined;
  /**
   * @member {String} aspectRatio
   */
  exports.prototype['aspectRatio'] = undefined;
  /**
   * @member {Number} autoSource
   */
  exports.prototype['autoSource'] = undefined;
  /**
   * @member {Number} backlight
   */
  exports.prototype['backlight'] = undefined;
  /**
   * @member {Number} cabinetGroupId
   */
  exports.prototype['cabinetGroupId'] = undefined;
  /**
   * @member {Number} cabinetId
   */
  exports.prototype['cabinetId'] = undefined;
  /**
   * @member {Number} childAlarmTemperature
   */
  exports.prototype['childAlarmTemperature'] = undefined;
  /**
   * @member {Array.<String>} childIdList
   */
  exports.prototype['childIdList'] = undefined;
  /**
   * @member {Number} currentTemperature
   */
  exports.prototype['currentTemperature'] = undefined;
  /**
   * @member {Number} edgeCorrection
   */
  exports.prototype['edgeCorrection'] = undefined;
  /**
   * @member {String} fault
   */
  exports.prototype['fault'] = undefined;
  /**
   * @member {String} fpgaVersion
   */
  exports.prototype['fpgaVersion'] = undefined;
  /**
   * @member {String} fwVersion
   */
  exports.prototype['fwVersion'] = undefined;
  /**
   * @member {Number} gamut
   */
  exports.prototype['gamut'] = undefined;
  /**
   * @member {String} hdbt
   */
  exports.prototype['hdbt'] = undefined;
  /**
   * @member {String} ic
   */
  exports.prototype['ic'] = undefined;
  /**
   * @member {Number} inputSource
   */
  exports.prototype['inputSource'] = undefined;
  /**
   * @member {Date} lastScannedTime
   */
  exports.prototype['lastScannedTime'] = undefined;
  /**
   * @member {Number} luminance
   */
  exports.prototype['luminance'] = undefined;
  /**
   * @member {Number} moduleRgbCc
   */
  exports.prototype['moduleRgbCc'] = undefined;
  /**
   * @member {String} modules
   */
  exports.prototype['modules'] = undefined;
  /**
   * @member {String} openDetection
   */
  exports.prototype['openDetection'] = undefined;
  /**
   * @member {String} parentDeviceId
   */
  exports.prototype['parentDeviceId'] = undefined;
  /**
   * @member {String} phySize
   */
  exports.prototype['phySize'] = undefined;
  /**
   * @member {String} pitch
   */
  exports.prototype['pitch'] = undefined;
  /**
   * @member {Number} pixelRgbCc
   */
  exports.prototype['pixelRgbCc'] = undefined;
  /**
   * @member {String} power
   */
  exports.prototype['power'] = undefined;
  /**
   * @member {String} resolution
   */
  exports.prototype['resolution'] = undefined;
  /**
   * @member {String} voltageStatus
   */
  exports.prototype['voltageStatus'] = undefined;



  return exports;
}));


