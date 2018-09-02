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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MagicInfoServerV41RestApi);
  }
}(this, function(expect, MagicInfoServerV41RestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeviceLedCabinetResource', function() {
    it('should create an instance of DeviceLedCabinetResource', function() {
      // uncomment below and update the code to test DeviceLedCabinetResource
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.DeviceLedCabinetResource);
    });

    it('should have the property abl (base name: "abl")', function() {
      // uncomment below and update the code to test the property abl
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property aspectRatio (base name: "aspectRatio")', function() {
      // uncomment below and update the code to test the property aspectRatio
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property autoSource (base name: "autoSource")', function() {
      // uncomment below and update the code to test the property autoSource
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property backlight (base name: "backlight")', function() {
      // uncomment below and update the code to test the property backlight
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property cabinetGroupId (base name: "cabinetGroupId")', function() {
      // uncomment below and update the code to test the property cabinetGroupId
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property cabinetId (base name: "cabinetId")', function() {
      // uncomment below and update the code to test the property cabinetId
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property childAlarmTemperature (base name: "childAlarmTemperature")', function() {
      // uncomment below and update the code to test the property childAlarmTemperature
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property childIdList (base name: "childIdList")', function() {
      // uncomment below and update the code to test the property childIdList
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property currentTemperature (base name: "currentTemperature")', function() {
      // uncomment below and update the code to test the property currentTemperature
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property edgeCorrection (base name: "edgeCorrection")', function() {
      // uncomment below and update the code to test the property edgeCorrection
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property fault (base name: "fault")', function() {
      // uncomment below and update the code to test the property fault
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property fpgaVersion (base name: "fpgaVersion")', function() {
      // uncomment below and update the code to test the property fpgaVersion
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property fwVersion (base name: "fwVersion")', function() {
      // uncomment below and update the code to test the property fwVersion
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property gamut (base name: "gamut")', function() {
      // uncomment below and update the code to test the property gamut
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property hdbt (base name: "hdbt")', function() {
      // uncomment below and update the code to test the property hdbt
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property ic (base name: "ic")', function() {
      // uncomment below and update the code to test the property ic
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property inputSource (base name: "inputSource")', function() {
      // uncomment below and update the code to test the property inputSource
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property lastScannedTime (base name: "lastScannedTime")', function() {
      // uncomment below and update the code to test the property lastScannedTime
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property luminance (base name: "luminance")', function() {
      // uncomment below and update the code to test the property luminance
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property moduleRgbCc (base name: "moduleRgbCc")', function() {
      // uncomment below and update the code to test the property moduleRgbCc
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property modules (base name: "modules")', function() {
      // uncomment below and update the code to test the property modules
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property openDetection (base name: "openDetection")', function() {
      // uncomment below and update the code to test the property openDetection
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property parentDeviceId (base name: "parentDeviceId")', function() {
      // uncomment below and update the code to test the property parentDeviceId
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property phySize (base name: "phySize")', function() {
      // uncomment below and update the code to test the property phySize
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property pitch (base name: "pitch")', function() {
      // uncomment below and update the code to test the property pitch
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property pixelRgbCc (base name: "pixelRgbCc")', function() {
      // uncomment below and update the code to test the property pixelRgbCc
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property power (base name: "power")', function() {
      // uncomment below and update the code to test the property power
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property resolution (base name: "resolution")', function() {
      // uncomment below and update the code to test the property resolution
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

    it('should have the property voltageStatus (base name: "voltageStatus")', function() {
      // uncomment below and update the code to test the property voltageStatus
      //var instane = new MagicInfoServerV41RestApi.DeviceLedCabinetResource();
      //expect(instance).to.be();
    });

  });

}));
