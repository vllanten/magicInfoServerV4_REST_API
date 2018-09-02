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
    instance = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
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

  describe('DeviceDisplayConfSubResource', function() {
    it('should create an instance of DeviceDisplayConfSubResource', function() {
      // uncomment below and update the code to test DeviceDisplayConfSubResource
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.DeviceDisplayConfSubResource);
    });

    it('should have the property advDownloadStatusOsd (base name: "advDownloadStatusOsd")', function() {
      // uncomment below and update the code to test the property advDownloadStatusOsd
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property advMdcOsd (base name: "advMdcOsd")', function() {
      // uncomment below and update the code to test the property advMdcOsd
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property advNoSignalOsd (base name: "advNoSignalOsd")', function() {
      // uncomment below and update the code to test the property advNoSignalOsd
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property advOsdChanged (base name: "advOsdChanged")', function() {
      // uncomment below and update the code to test the property advOsdChanged
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property advOsdChangedStatus (base name: "advOsdChangedStatus")', function() {
      // uncomment below and update the code to test the property advOsdChangedStatus
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property advSourceOsd (base name: "advSourceOsd")', function() {
      // uncomment below and update the code to test the property advSourceOsd
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property autoSourceChanged (base name: "autoSourceChanged")', function() {
      // uncomment below and update the code to test the property autoSourceChanged
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property autoSourceRecovery (base name: "autoSourceRecovery")', function() {
      // uncomment below and update the code to test the property autoSourceRecovery
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property autoSourceSecondary (base name: "autoSourceSecondary")', function() {
      // uncomment below and update the code to test the property autoSourceSecondary
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property autoSourceSwitching (base name: "autoSourceSwitching")', function() {
      // uncomment below and update the code to test the property autoSourceSwitching
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property autoSourceprimary (base name: "autoSourceprimary")', function() {
      // uncomment below and update the code to test the property autoSourceprimary
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property mntAutoChanged (base name: "mntAutoChanged")', function() {
      // uncomment below and update the code to test the property mntAutoChanged
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property mntAutoIsEnable (base name: "mntAutoIsEnable")', function() {
      // uncomment below and update the code to test the property mntAutoIsEnable
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property mntAutoMaxTime (base name: "mntAutoMaxTime")', function() {
      // uncomment below and update the code to test the property mntAutoMaxTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property mntAutoMaxValue (base name: "mntAutoMaxValue")', function() {
      // uncomment below and update the code to test the property mntAutoMaxValue
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property mntAutoMinTime (base name: "mntAutoMinTime")', function() {
      // uncomment below and update the code to test the property mntAutoMinTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property mntAutoMinValue (base name: "mntAutoMinValue")', function() {
      // uncomment below and update the code to test the property mntAutoMinValue
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property pixelShiftChanged (base name: "pixelShiftChanged")', function() {
      // uncomment below and update the code to test the property pixelShiftChanged
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property pixelShiftEnable (base name: "pixelShiftEnable")', function() {
      // uncomment below and update the code to test the property pixelShiftEnable
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property pixelShiftH (base name: "pixelShiftH")', function() {
      // uncomment below and update the code to test the property pixelShiftH
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property pixelShiftTime (base name: "pixelShiftTime")', function() {
      // uncomment below and update the code to test the property pixelShiftTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property pixelShiftV (base name: "pixelShiftV")', function() {
      // uncomment below and update the code to test the property pixelShiftV
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property scrSafeChanged (base name: "scrSafeChanged")', function() {
      // uncomment below and update the code to test the property scrSafeChanged
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property scrSafeEndTime (base name: "scrSafeEndTime")', function() {
      // uncomment below and update the code to test the property scrSafeEndTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property scrSafeMode (base name: "scrSafeMode")', function() {
      // uncomment below and update the code to test the property scrSafeMode
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property scrSafePeriod (base name: "scrSafePeriod")', function() {
      // uncomment below and update the code to test the property scrSafePeriod
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property scrSafeStartTime (base name: "scrSafeStartTime")', function() {
      // uncomment below and update the code to test the property scrSafeStartTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property scrSafeTime (base name: "scrSafeTime")', function() {
      // uncomment below and update the code to test the property scrSafeTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property scrSafeTimer (base name: "scrSafeTimer")', function() {
      // uncomment below and update the code to test the property scrSafeTimer
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property webBrowserChanged (base name: "webBrowserChanged")', function() {
      // uncomment below and update the code to test the property webBrowserChanged
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property webBrowserHomepage (base name: "webBrowserHomepage")', function() {
      // uncomment below and update the code to test the property webBrowserHomepage
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property webBrowserInterval (base name: "webBrowserInterval")', function() {
      // uncomment below and update the code to test the property webBrowserInterval
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property webBrowserPageurl (base name: "webBrowserPageurl")', function() {
      // uncomment below and update the code to test the property webBrowserPageurl
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

    it('should have the property webBrowserZoom (base name: "webBrowserZoom")', function() {
      // uncomment below and update the code to test the property webBrowserZoom
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfSubResource();
      //expect(instance).to.be();
    });

  });

}));
