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
    root.MagicInfoServerV41RestApi.ContentApproveResource = factory(root.MagicInfoServerV41RestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContentApproveResource model module.
   * @module model/ContentApproveResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContentApproveResource</code>.
   * @alias module:model/ContentApproveResource
   * @class
   * @param status {String} 
   */
  var exports = function(status) {
    var _this = this;



    _this['status'] = status;
  };

  /**
   * Constructs a <code>ContentApproveResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentApproveResource} obj Optional instance to populate.
   * @return {module:model/ContentApproveResource} The populated <code>ContentApproveResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contentId')) {
        obj['contentId'] = ApiClient.convertToType(data['contentId'], 'String');
      }
      if (data.hasOwnProperty('opinion')) {
        obj['opinion'] = ApiClient.convertToType(data['opinion'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} contentId
   */
  exports.prototype['contentId'] = undefined;
  /**
   * @member {String} opinion
   */
  exports.prototype['opinion'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));

