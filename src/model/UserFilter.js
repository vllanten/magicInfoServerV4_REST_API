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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MagicInfoApi) {
      root.MagicInfoApi = {};
    }
    root.MagicInfoApi.UserFilter = factory(root.MagicInfoApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserFilter model module.
   * @module model/UserFilter
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserFilter</code>.
   * @alias module:model/UserFilter
   * @class
   * @param confirmPassword {String} 
   * @param email {String} [optional] updateMyInfo
   * @param password {String} 
   * @param userId {String} [doNotUse] updateMyInfo
   * @param userName {String} 
   */
  var exports = function(confirmPassword, email, password, userId, userName) {
    var _this = this;

    _this['confirmPassword'] = confirmPassword;
    _this['email'] = email;


    _this['password'] = password;

    _this['userId'] = userId;
    _this['userName'] = userName;
  };

  /**
   * Constructs a <code>UserFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserFilter} obj Optional instance to populate.
   * @return {module:model/UserFilter} The populated <code>UserFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('confirmPassword')) {
        obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} confirmPassword
   */
  exports.prototype['confirmPassword'] = undefined;
  /**
   * [optional] updateMyInfo
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * [doNotUse] createUserSignUp, updateMyInfo
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * [doNotUse] updateMyInfo
   * @member {String} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * [doNotUse] createUserSignUp, updateMyInfo
   * @member {String} role
   */
  exports.prototype['role'] = undefined;
  /**
   * [doNotUse] updateMyInfo
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


