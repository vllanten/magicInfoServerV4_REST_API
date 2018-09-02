/**
 * MagicInfo Server V4.1 - REST API
 * MagicInfo Server V4.1 - REST API
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
    if (!root.MagicInfoServerV41RestApi) {
      root.MagicInfoServerV41RestApi = {};
    }
    root.MagicInfoServerV41RestApi.DeviceFilter = factory(root.MagicInfoServerV41RestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceFilter model module.
   * @module model/DeviceFilter
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceFilter</code>.
   * Deviec List Filter Model
   * @alias module:model/DeviceFilter
   * @class
   */
  var exports = function() {
    var _this = this;





































  };

  /**
   * Constructs a <code>DeviceFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceFilter} obj Optional instance to populate.
   * @return {module:model/DeviceFilter} The populated <code>DeviceFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
      if (data.hasOwnProperty('asState')) {
        obj['asState'] = ApiClient.convertToType(data['asState'], 'String');
      }
      if (data.hasOwnProperty('cmd')) {
        obj['cmd'] = ApiClient.convertToType(data['cmd'], 'String');
      }
      if (data.hasOwnProperty('commonSearchKeyword')) {
        obj['commonSearchKeyword'] = ApiClient.convertToType(data['commonSearchKeyword'], 'String');
      }
      if (data.hasOwnProperty('consoleId')) {
        obj['consoleId'] = ApiClient.convertToType(data['consoleId'], 'String');
      }
      if (data.hasOwnProperty('customInputVal')) {
        obj['customInputVal'] = ApiClient.convertToType(data['customInputVal'], 'String');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('deviceModelName')) {
        obj['deviceModelName'] = ApiClient.convertToType(data['deviceModelName'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('deviceTypeArr')) {
        obj['deviceTypeArr'] = ApiClient.convertToType(data['deviceTypeArr'], ['String']);
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
      }
      if (data.hasOwnProperty('filterGroupIds')) {
        obj['filterGroupIds'] = ApiClient.convertToType(data['filterGroupIds'], 'String');
      }
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
      }
      if (data.hasOwnProperty('groupMode')) {
        obj['groupMode'] = ApiClient.convertToType(data['groupMode'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('hasAlarmFilter')) {
        obj['hasAlarmFilter'] = ApiClient.convertToType(data['hasAlarmFilter'], ['String']);
      }
      if (data.hasOwnProperty('hasFunctionFilter')) {
        obj['hasFunctionFilter'] = ApiClient.convertToType(data['hasFunctionFilter'], ['String']);
      }
      if (data.hasOwnProperty('imageViewMode')) {
        obj['imageViewMode'] = ApiClient.convertToType(data['imageViewMode'], 'String');
      }
      if (data.hasOwnProperty('isApproved')) {
        obj['isApproved'] = ApiClient.convertToType(data['isApproved'], 'String');
      }
      if (data.hasOwnProperty('isRoot')) {
        obj['isRoot'] = ApiClient.convertToType(data['isRoot'], 'Boolean');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('menu')) {
        obj['menu'] = ApiClient.convertToType(data['menu'], 'String');
      }
      if (data.hasOwnProperty('orderDir')) {
        obj['orderDir'] = ApiClient.convertToType(data['orderDir'], 'String');
      }
      if (data.hasOwnProperty('orgId')) {
        obj['orgId'] = ApiClient.convertToType(data['orgId'], 'Number');
      }
      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
      }
      if (data.hasOwnProperty('sortName')) {
        obj['sortName'] = ApiClient.convertToType(data['sortName'], 'String');
      }
      if (data.hasOwnProperty('srcName')) {
        obj['srcName'] = ApiClient.convertToType(data['srcName'], 'String');
      }
      if (data.hasOwnProperty('startIndex')) {
        obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
      }
      if (data.hasOwnProperty('statusViewMode')) {
        obj['statusViewMode'] = ApiClient.convertToType(data['statusViewMode'], 'String');
      }
      if (data.hasOwnProperty('status_view_mode')) {
        obj['status_view_mode'] = ApiClient.convertToType(data['status_view_mode'], 'String');
      }
      if (data.hasOwnProperty('tagFilter')) {
        obj['tagFilter'] = ApiClient.convertToType(data['tagFilter'], 'String');
      }
      if (data.hasOwnProperty('tagFilterList')) {
        obj['tagFilterList'] = ApiClient.convertToType(data['tagFilterList'], ['Number']);
      }
      if (data.hasOwnProperty('tagMode')) {
        obj['tagMode'] = ApiClient.convertToType(data['tagMode'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('vwlGroup')) {
        obj['vwlGroup'] = ApiClient.convertToType(data['vwlGroup'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * @member {String} asState
   */
  exports.prototype['asState'] = undefined;
  /**
   * @member {String} cmd
   */
  exports.prototype['cmd'] = undefined;
  /**
   * @member {String} commonSearchKeyword
   */
  exports.prototype['commonSearchKeyword'] = undefined;
  /**
   * @member {String} consoleId
   */
  exports.prototype['consoleId'] = undefined;
  /**
   * @member {String} customInputVal
   */
  exports.prototype['customInputVal'] = undefined;
  /**
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * @member {String} deviceModelName
   */
  exports.prototype['deviceModelName'] = undefined;
  /**
   * device type for filter
   * @member {module:model/DeviceFilter.DeviceTypeEnum} deviceType
   */
  exports.prototype['deviceType'] = undefined;
  /**
   * @member {Array.<String>} deviceTypeArr
   */
  exports.prototype['deviceTypeArr'] = undefined;
  /**
   * @member {String} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * @member {String} filterGroupIds
   */
  exports.prototype['filterGroupIds'] = undefined;
  /**
   * @member {String} groupId
   */
  exports.prototype['groupId'] = undefined;
  /**
   * @member {String} groupMode
   */
  exports.prototype['groupMode'] = undefined;
  /**
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * @member {Array.<String>} hasAlarmFilter
   */
  exports.prototype['hasAlarmFilter'] = undefined;
  /**
   * @member {Array.<String>} hasFunctionFilter
   */
  exports.prototype['hasFunctionFilter'] = undefined;
  /**
   * @member {String} imageViewMode
   */
  exports.prototype['imageViewMode'] = undefined;
  /**
   * @member {String} isApproved
   */
  exports.prototype['isApproved'] = undefined;
  /**
   * @member {Boolean} isRoot
   */
  exports.prototype['isRoot'] = undefined;
  /**
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * @member {String} menu
   */
  exports.prototype['menu'] = undefined;
  /**
   * @member {String} orderDir
   */
  exports.prototype['orderDir'] = undefined;
  /**
   * @member {Number} orgId
   */
  exports.prototype['orgId'] = undefined;
  /**
   * @member {Number} pageSize
   */
  exports.prototype['pageSize'] = undefined;
  /**
   * @member {String} roleName
   */
  exports.prototype['roleName'] = undefined;
  /**
   * @member {String} sortName
   */
  exports.prototype['sortName'] = undefined;
  /**
   * @member {String} srcName
   */
  exports.prototype['srcName'] = undefined;
  /**
   * @member {Number} startIndex
   */
  exports.prototype['startIndex'] = undefined;
  /**
   * @member {String} statusViewMode
   */
  exports.prototype['statusViewMode'] = undefined;
  /**
   * @member {String} status_view_mode
   */
  exports.prototype['status_view_mode'] = undefined;
  /**
   * @member {String} tagFilter
   */
  exports.prototype['tagFilter'] = undefined;
  /**
   * @member {Array.<Number>} tagFilterList
   */
  exports.prototype['tagFilterList'] = undefined;
  /**
   * @member {String} tagMode
   */
  exports.prototype['tagMode'] = undefined;
  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} vwlGroup
   */
  exports.prototype['vwlGroup'] = undefined;


  /**
   * Allowed values for the <code>deviceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeviceTypeEnum = {
    /**
     * value: "iPLAYER"
     * @const
     */
    "iPLAYER": "iPLAYER",
    /**
     * value: "SPLAYER"
     * @const
     */
    "SPLAYER": "SPLAYER",
    /**
     * value: "MPLAYER"
     * @const
     */
    "MPLAYER": "MPLAYER",
    /**
     * value: "LPLAYER"
     * @const
     */
    "LPLAYER": "LPLAYER",
    /**
     * value: "3rdPartyPLAYER"
     * @const
     */
    "3rdPartyPLAYER": "3rdPartyPLAYER",
    /**
     * value: "SIGNAGE"
     * @const
     */
    "SIGNAGE": "SIGNAGE",
    /**
     * value: "SIG_CHILD"
     * @const
     */
    "SIG_CHILD": "SIG_CHILD",
    /**
     * value: "APLAYER"
     * @const
     */
    "APLAYER": "APLAYER"  };


  return exports;
}));


