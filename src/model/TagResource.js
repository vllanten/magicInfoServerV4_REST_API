/**
 * magic info api
 * magic info api
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Map'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Map'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoApi) {
      root.MagicInfoApi = {};
    }
    root.MagicInfoApi.TagResource = factory(root.MagicInfoApi.ApiClient, root.MagicInfoApi.Map);
  }
}(this, function(ApiClient, Map) {
  'use strict';




  /**
   * The TagResource model module.
   * @module model/TagResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TagResource</code>.
   * @alias module:model/TagResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TagResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagResource} obj Optional instance to populate.
   * @return {module:model/TagResource} The populated <code>TagResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pageSize')) {
        obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
      }
      if (data.hasOwnProperty('startIndex')) {
        obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
      }
      if (data.hasOwnProperty('tagList')) {
        obj['tagList'] = ApiClient.convertToType(data['tagList'], [Map]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} pageSize
   */
  exports.prototype['pageSize'] = undefined;
  /**
   * @member {Number} startIndex
   */
  exports.prototype['startIndex'] = undefined;
  /**
   * @member {Array.<module:model/Map>} tagList
   */
  exports.prototype['tagList'] = undefined;



  return exports;
}));


