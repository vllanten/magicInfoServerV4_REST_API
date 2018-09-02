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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MagicInfoServerV4RestApi);
  }
}(this, function(expect, MagicInfoServerV4RestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
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

  describe('DeviceTimeTimerConf', function() {
    it('should create an instance of DeviceTimeTimerConf', function() {
      // uncomment below and update the code to test DeviceTimeTimerConf
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be.a(MagicInfoServerV4RestApi.DeviceTimeTimerConf);
    });

    it('should have the property timerDataCount (base name: "timerDataCount")', function() {
      // uncomment below and update the code to test the property timerDataCount
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerHolidayEnable (base name: "timerHolidayEnable")', function() {
      // uncomment below and update the code to test the property timerHolidayEnable
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerManualWeekday (base name: "timerManualWeekday")', function() {
      // uncomment below and update the code to test the property timerManualWeekday
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOffAmpm (base name: "timerOffAmpm")', function() {
      // uncomment below and update the code to test the property timerOffAmpm
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOffH (base name: "timerOffH")', function() {
      // uncomment below and update the code to test the property timerOffH
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOffM (base name: "timerOffM")', function() {
      // uncomment below and update the code to test the property timerOffM
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOffManualWeekday (base name: "timerOffManualWeekday")', function() {
      // uncomment below and update the code to test the property timerOffManualWeekday
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOffRepeat (base name: "timerOffRepeat")', function() {
      // uncomment below and update the code to test the property timerOffRepeat
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOffStatus (base name: "timerOffStatus")', function() {
      // uncomment below and update the code to test the property timerOffStatus
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOnAmpm (base name: "timerOnAmpm")', function() {
      // uncomment below and update the code to test the property timerOnAmpm
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOnH (base name: "timerOnH")', function() {
      // uncomment below and update the code to test the property timerOnH
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOnM (base name: "timerOnM")', function() {
      // uncomment below and update the code to test the property timerOnM
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerOnStatus (base name: "timerOnStatus")', function() {
      // uncomment below and update the code to test the property timerOnStatus
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerRepeat (base name: "timerRepeat")', function() {
      // uncomment below and update the code to test the property timerRepeat
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerSeq (base name: "timerSeq")', function() {
      // uncomment below and update the code to test the property timerSeq
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerSource (base name: "timerSource")', function() {
      // uncomment below and update the code to test the property timerSource
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

    it('should have the property timerVolume (base name: "timerVolume")', function() {
      // uncomment below and update the code to test the property timerVolume
      //var instane = new MagicInfoServerV4RestApi.DeviceTimeTimerConf();
      //expect(instance).to.be();
    });

  });

}));
