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
    define(['ApiClient', 'model/ContentScheduleItemResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentScheduleItemResource'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoServerV4xRestApi) {
      root.MagicInfoServerV4xRestApi = {};
    }
    root.MagicInfoServerV4xRestApi.ContentScheduleResource = factory(root.MagicInfoServerV4xRestApi.ApiClient, root.MagicInfoServerV4xRestApi.ContentScheduleItemResource);
  }
}(this, function(ApiClient, ContentScheduleItemResource) {
  'use strict';




  /**
   * The ContentScheduleResource model module.
   * @module model/ContentScheduleResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContentScheduleResource</code>.
   * @alias module:model/ContentScheduleResource
   * @class
   * @param deviceType {String} 
   * @param deviceTypeVersion {Number} 
   * @param scheduleGroupId {String} 
   */
  var exports = function(deviceType, deviceTypeVersion, scheduleGroupId) {
    var _this = this;








    _this['deviceType'] = deviceType;
    _this['deviceTypeVersion'] = deviceTypeVersion;


    _this['scheduleGroupId'] = scheduleGroupId;



  };

  /**
   * Constructs a <code>ContentScheduleResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentScheduleResource} obj Optional instance to populate.
   * @return {module:model/ContentScheduleResource} The populated <code>ContentScheduleResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backgroundMusic')) {
        obj['backgroundMusic'] = ApiClient.convertToType(data['backgroundMusic'], 'String');
      }
      if (data.hasOwnProperty('contentMute')) {
        obj['contentMute'] = ApiClient.convertToType(data['contentMute'], 'String');
      }
      if (data.hasOwnProperty('contentSyncOn')) {
        obj['contentSyncOn'] = ApiClient.convertToType(data['contentSyncOn'], 'String');
      }
      if (data.hasOwnProperty('deployReserve')) {
        obj['deployReserve'] = ApiClient.convertToType(data['deployReserve'], 'String');
      }
      if (data.hasOwnProperty('deployReserveResource')) {
        obj['deployReserveResource'] = ApiClient.convertToType(data['deployReserveResource'], Object);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('deviceGroupIds')) {
        obj['deviceGroupIds'] = ApiClient.convertToType(data['deviceGroupIds'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('deviceTypeVersion')) {
        obj['deviceTypeVersion'] = ApiClient.convertToType(data['deviceTypeVersion'], 'Number');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('itemList')) {
        obj['itemList'] = ApiClient.convertToType(data['itemList'], [ContentScheduleItemResource]);
      }
      if (data.hasOwnProperty('scheduleGroupId')) {
        obj['scheduleGroupId'] = ApiClient.convertToType(data['scheduleGroupId'], 'String');
      }
      if (data.hasOwnProperty('scheduleName')) {
        obj['scheduleName'] = ApiClient.convertToType(data['scheduleName'], 'String');
      }
      if (data.hasOwnProperty('syncPlay')) {
        obj['syncPlay'] = ApiClient.convertToType(data['syncPlay'], 'Boolean');
      }
      if (data.hasOwnProperty('vwlType')) {
        obj['vwlType'] = ApiClient.convertToType(data['vwlType'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} backgroundMusic
   */
  exports.prototype['backgroundMusic'] = undefined;
  /**
   * @member {String} contentMute
   */
  exports.prototype['contentMute'] = undefined;
  /**
   * @member {String} contentSyncOn
   */
  exports.prototype['contentSyncOn'] = undefined;
  /**
   * @member {String} deployReserve
   */
  exports.prototype['deployReserve'] = undefined;
  /**
   * @member {Object} deployReserveResource
   */
  exports.prototype['deployReserveResource'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} deviceGroupIds
   */
  exports.prototype['deviceGroupIds'] = undefined;
  /**
   * @member {String} deviceType
   */
  exports.prototype['deviceType'] = undefined;
  /**
   * @member {Number} deviceTypeVersion
   */
  exports.prototype['deviceTypeVersion'] = undefined;
  /**
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * @member {Array.<module:model/ContentScheduleItemResource>} itemList
   */
  exports.prototype['itemList'] = undefined;
  /**
   * @member {String} scheduleGroupId
   */
  exports.prototype['scheduleGroupId'] = undefined;
  /**
   * @member {String} scheduleName
   */
  exports.prototype['scheduleName'] = undefined;
  /**
   * @member {Boolean} syncPlay
   */
  exports.prototype['syncPlay'] = undefined;
  /**
   * @member {Boolean} vwlType
   */
  exports.prototype['vwlType'] = undefined;



  return exports;
}));


