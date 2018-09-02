/**
 * MagicInfo Server V4 REST API
 * MagicInfo Server V4 REST API
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
    if (!root.MagicInfoServerV4RestApi) {
      root.MagicInfoServerV4RestApi = {};
    }
    root.MagicInfoServerV4RestApi.DeviceDisplayConfSubResource = factory(root.MagicInfoServerV4RestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceDisplayConfSubResource model module.
   * @module model/DeviceDisplayConfSubResource
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceDisplayConfSubResource</code>.
   * @alias module:model/DeviceDisplayConfSubResource
   * @class
   */
  var exports = function() {
    var _this = this;



































  };

  /**
   * Constructs a <code>DeviceDisplayConfSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDisplayConfSubResource} obj Optional instance to populate.
   * @return {module:model/DeviceDisplayConfSubResource} The populated <code>DeviceDisplayConfSubResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('advDownloadStatusOsd')) {
        obj['advDownloadStatusOsd'] = ApiClient.convertToType(data['advDownloadStatusOsd'], 'String');
      }
      if (data.hasOwnProperty('advMdcOsd')) {
        obj['advMdcOsd'] = ApiClient.convertToType(data['advMdcOsd'], 'String');
      }
      if (data.hasOwnProperty('advNoSignalOsd')) {
        obj['advNoSignalOsd'] = ApiClient.convertToType(data['advNoSignalOsd'], 'String');
      }
      if (data.hasOwnProperty('advOsdChanged')) {
        obj['advOsdChanged'] = ApiClient.convertToType(data['advOsdChanged'], 'String');
      }
      if (data.hasOwnProperty('advOsdChangedStatus')) {
        obj['advOsdChangedStatus'] = ApiClient.convertToType(data['advOsdChangedStatus'], 'String');
      }
      if (data.hasOwnProperty('advSourceOsd')) {
        obj['advSourceOsd'] = ApiClient.convertToType(data['advSourceOsd'], 'String');
      }
      if (data.hasOwnProperty('autoSourceChanged')) {
        obj['autoSourceChanged'] = ApiClient.convertToType(data['autoSourceChanged'], 'Boolean');
      }
      if (data.hasOwnProperty('autoSourceRecovery')) {
        obj['autoSourceRecovery'] = ApiClient.convertToType(data['autoSourceRecovery'], 'String');
      }
      if (data.hasOwnProperty('autoSourceSecondary')) {
        obj['autoSourceSecondary'] = ApiClient.convertToType(data['autoSourceSecondary'], 'String');
      }
      if (data.hasOwnProperty('autoSourceSwitching')) {
        obj['autoSourceSwitching'] = ApiClient.convertToType(data['autoSourceSwitching'], 'String');
      }
      if (data.hasOwnProperty('autoSourceprimary')) {
        obj['autoSourceprimary'] = ApiClient.convertToType(data['autoSourceprimary'], 'String');
      }
      if (data.hasOwnProperty('mntAutoChanged')) {
        obj['mntAutoChanged'] = ApiClient.convertToType(data['mntAutoChanged'], 'Boolean');
      }
      if (data.hasOwnProperty('mntAutoIsEnable')) {
        obj['mntAutoIsEnable'] = ApiClient.convertToType(data['mntAutoIsEnable'], 'String');
      }
      if (data.hasOwnProperty('mntAutoMaxTime')) {
        obj['mntAutoMaxTime'] = ApiClient.convertToType(data['mntAutoMaxTime'], 'String');
      }
      if (data.hasOwnProperty('mntAutoMaxValue')) {
        obj['mntAutoMaxValue'] = ApiClient.convertToType(data['mntAutoMaxValue'], 'String');
      }
      if (data.hasOwnProperty('mntAutoMinTime')) {
        obj['mntAutoMinTime'] = ApiClient.convertToType(data['mntAutoMinTime'], 'String');
      }
      if (data.hasOwnProperty('mntAutoMinValue')) {
        obj['mntAutoMinValue'] = ApiClient.convertToType(data['mntAutoMinValue'], 'String');
      }
      if (data.hasOwnProperty('pixelShiftChanged')) {
        obj['pixelShiftChanged'] = ApiClient.convertToType(data['pixelShiftChanged'], 'Boolean');
      }
      if (data.hasOwnProperty('pixelShiftEnable')) {
        obj['pixelShiftEnable'] = ApiClient.convertToType(data['pixelShiftEnable'], 'String');
      }
      if (data.hasOwnProperty('pixelShiftH')) {
        obj['pixelShiftH'] = ApiClient.convertToType(data['pixelShiftH'], 'String');
      }
      if (data.hasOwnProperty('pixelShiftTime')) {
        obj['pixelShiftTime'] = ApiClient.convertToType(data['pixelShiftTime'], 'String');
      }
      if (data.hasOwnProperty('pixelShiftV')) {
        obj['pixelShiftV'] = ApiClient.convertToType(data['pixelShiftV'], 'String');
      }
      if (data.hasOwnProperty('scrSafeChanged')) {
        obj['scrSafeChanged'] = ApiClient.convertToType(data['scrSafeChanged'], 'Boolean');
      }
      if (data.hasOwnProperty('scrSafeEndTime')) {
        obj['scrSafeEndTime'] = ApiClient.convertToType(data['scrSafeEndTime'], 'String');
      }
      if (data.hasOwnProperty('scrSafeMode')) {
        obj['scrSafeMode'] = ApiClient.convertToType(data['scrSafeMode'], 'String');
      }
      if (data.hasOwnProperty('scrSafePeriod')) {
        obj['scrSafePeriod'] = ApiClient.convertToType(data['scrSafePeriod'], 'String');
      }
      if (data.hasOwnProperty('scrSafeStartTime')) {
        obj['scrSafeStartTime'] = ApiClient.convertToType(data['scrSafeStartTime'], 'String');
      }
      if (data.hasOwnProperty('scrSafeTime')) {
        obj['scrSafeTime'] = ApiClient.convertToType(data['scrSafeTime'], 'String');
      }
      if (data.hasOwnProperty('scrSafeTimer')) {
        obj['scrSafeTimer'] = ApiClient.convertToType(data['scrSafeTimer'], 'String');
      }
      if (data.hasOwnProperty('webBrowserChanged')) {
        obj['webBrowserChanged'] = ApiClient.convertToType(data['webBrowserChanged'], 'Boolean');
      }
      if (data.hasOwnProperty('webBrowserHomepage')) {
        obj['webBrowserHomepage'] = ApiClient.convertToType(data['webBrowserHomepage'], 'String');
      }
      if (data.hasOwnProperty('webBrowserInterval')) {
        obj['webBrowserInterval'] = ApiClient.convertToType(data['webBrowserInterval'], 'String');
      }
      if (data.hasOwnProperty('webBrowserPageurl')) {
        obj['webBrowserPageurl'] = ApiClient.convertToType(data['webBrowserPageurl'], 'String');
      }
      if (data.hasOwnProperty('webBrowserZoom')) {
        obj['webBrowserZoom'] = ApiClient.convertToType(data['webBrowserZoom'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} advDownloadStatusOsd
   */
  exports.prototype['advDownloadStatusOsd'] = undefined;
  /**
   * @member {String} advMdcOsd
   */
  exports.prototype['advMdcOsd'] = undefined;
  /**
   * @member {String} advNoSignalOsd
   */
  exports.prototype['advNoSignalOsd'] = undefined;
  /**
   * @member {String} advOsdChanged
   */
  exports.prototype['advOsdChanged'] = undefined;
  /**
   * @member {String} advOsdChangedStatus
   */
  exports.prototype['advOsdChangedStatus'] = undefined;
  /**
   * @member {String} advSourceOsd
   */
  exports.prototype['advSourceOsd'] = undefined;
  /**
   * @member {Boolean} autoSourceChanged
   */
  exports.prototype['autoSourceChanged'] = undefined;
  /**
   * @member {String} autoSourceRecovery
   */
  exports.prototype['autoSourceRecovery'] = undefined;
  /**
   * @member {String} autoSourceSecondary
   */
  exports.prototype['autoSourceSecondary'] = undefined;
  /**
   * @member {String} autoSourceSwitching
   */
  exports.prototype['autoSourceSwitching'] = undefined;
  /**
   * @member {String} autoSourceprimary
   */
  exports.prototype['autoSourceprimary'] = undefined;
  /**
   * @member {Boolean} mntAutoChanged
   */
  exports.prototype['mntAutoChanged'] = undefined;
  /**
   * @member {String} mntAutoIsEnable
   */
  exports.prototype['mntAutoIsEnable'] = undefined;
  /**
   * @member {String} mntAutoMaxTime
   */
  exports.prototype['mntAutoMaxTime'] = undefined;
  /**
   * @member {String} mntAutoMaxValue
   */
  exports.prototype['mntAutoMaxValue'] = undefined;
  /**
   * @member {String} mntAutoMinTime
   */
  exports.prototype['mntAutoMinTime'] = undefined;
  /**
   * @member {String} mntAutoMinValue
   */
  exports.prototype['mntAutoMinValue'] = undefined;
  /**
   * @member {Boolean} pixelShiftChanged
   */
  exports.prototype['pixelShiftChanged'] = undefined;
  /**
   * @member {String} pixelShiftEnable
   */
  exports.prototype['pixelShiftEnable'] = undefined;
  /**
   * @member {String} pixelShiftH
   */
  exports.prototype['pixelShiftH'] = undefined;
  /**
   * @member {String} pixelShiftTime
   */
  exports.prototype['pixelShiftTime'] = undefined;
  /**
   * @member {String} pixelShiftV
   */
  exports.prototype['pixelShiftV'] = undefined;
  /**
   * @member {Boolean} scrSafeChanged
   */
  exports.prototype['scrSafeChanged'] = undefined;
  /**
   * @member {String} scrSafeEndTime
   */
  exports.prototype['scrSafeEndTime'] = undefined;
  /**
   * @member {String} scrSafeMode
   */
  exports.prototype['scrSafeMode'] = undefined;
  /**
   * @member {String} scrSafePeriod
   */
  exports.prototype['scrSafePeriod'] = undefined;
  /**
   * @member {String} scrSafeStartTime
   */
  exports.prototype['scrSafeStartTime'] = undefined;
  /**
   * @member {String} scrSafeTime
   */
  exports.prototype['scrSafeTime'] = undefined;
  /**
   * @member {String} scrSafeTimer
   */
  exports.prototype['scrSafeTimer'] = undefined;
  /**
   * @member {Boolean} webBrowserChanged
   */
  exports.prototype['webBrowserChanged'] = undefined;
  /**
   * @member {String} webBrowserHomepage
   */
  exports.prototype['webBrowserHomepage'] = undefined;
  /**
   * @member {String} webBrowserInterval
   */
  exports.prototype['webBrowserInterval'] = undefined;
  /**
   * @member {String} webBrowserPageurl
   */
  exports.prototype['webBrowserPageurl'] = undefined;
  /**
   * @member {String} webBrowserZoom
   */
  exports.prototype['webBrowserZoom'] = undefined;



  return exports;
}));


