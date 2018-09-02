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
    root.MagicInfoServerV4xRestApi.EnvironmentNoticeFilter = factory(root.MagicInfoServerV4xRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EnvironmentNoticeFilter model module.
   * @module model/EnvironmentNoticeFilter
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EnvironmentNoticeFilter</code>.
   * @alias module:model/EnvironmentNoticeFilter
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>EnvironmentNoticeFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvironmentNoticeFilter} obj Optional instance to populate.
   * @return {module:model/EnvironmentNoticeFilter} The populated <code>EnvironmentNoticeFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('important')) {
        obj['important'] = ApiClient.convertToType(data['important'], 'Boolean');
      }
      if (data.hasOwnProperty('noticeEndDate')) {
        obj['noticeEndDate'] = ApiClient.convertToType(data['noticeEndDate'], 'String');
      }
      if (data.hasOwnProperty('noticeId')) {
        obj['noticeId'] = ApiClient.convertToType(data['noticeId'], 'String');
      }
      if (data.hasOwnProperty('noticeStartDate')) {
        obj['noticeStartDate'] = ApiClient.convertToType(data['noticeStartDate'], 'String');
      }
      if (data.hasOwnProperty('noticeSubject')) {
        obj['noticeSubject'] = ApiClient.convertToType(data['noticeSubject'], 'String');
      }
      if (data.hasOwnProperty('noticeTitle')) {
        obj['noticeTitle'] = ApiClient.convertToType(data['noticeTitle'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} important
   */
  exports.prototype['important'] = undefined;
  /**
   * @member {String} noticeEndDate
   */
  exports.prototype['noticeEndDate'] = undefined;
  /**
   * @member {String} noticeId
   */
  exports.prototype['noticeId'] = undefined;
  /**
   * @member {String} noticeStartDate
   */
  exports.prototype['noticeStartDate'] = undefined;
  /**
   * @member {String} noticeSubject
   */
  exports.prototype['noticeSubject'] = undefined;
  /**
   * @member {String} noticeTitle
   */
  exports.prototype['noticeTitle'] = undefined;



  return exports;
}));


