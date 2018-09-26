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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MagicInfoApi);
  }
}(this, function(expect, MagicInfoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MagicInfoApi.DeviceTimeconfResource();
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

  describe('DeviceTimeconfResource', function() {
    it('should create an instance of DeviceTimeconfResource', function() {
      // uncomment below and update the code to test DeviceTimeconfResource
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be.a(MagicInfoApi.DeviceTimeconfResource);
    });

    it('should have the property deviceTimeHolidayList (base name: "deviceTimeHolidayList")', function() {
      // uncomment below and update the code to test the property deviceTimeHolidayList
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property holidayCnt (base name: "holidayCnt")', function() {
      // uncomment below and update the code to test the property holidayCnt
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property inputSourceList (base name: "inputSourceList")', function() {
      // uncomment below and update the code to test the property inputSourceList
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property mdcUpdateTime (base name: "mdcUpdateTime")', function() {
      // uncomment below and update the code to test the property mdcUpdateTime
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property separatableDevice (base name: "separatableDevice")', function() {
      // uncomment below and update the code to test the property separatableDevice
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timeClockConf (base name: "timeClockConf")', function() {
      // uncomment below and update the code to test the property timeClockConf
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timeCurrentTime (base name: "timeCurrentTime")', function() {
      // uncomment below and update the code to test the property timeCurrentTime
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerClock (base name: "timerClock")', function() {
      // uncomment below and update the code to test the property timerClock
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerConfTimer1 (base name: "timerConfTimer1")', function() {
      // uncomment below and update the code to test the property timerConfTimer1
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerConfTimer2 (base name: "timerConfTimer2")', function() {
      // uncomment below and update the code to test the property timerConfTimer2
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerConfTimer3 (base name: "timerConfTimer3")', function() {
      // uncomment below and update the code to test the property timerConfTimer3
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerConfTimer4 (base name: "timerConfTimer4")', function() {
      // uncomment below and update the code to test the property timerConfTimer4
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerConfTimer5 (base name: "timerConfTimer5")', function() {
      // uncomment below and update the code to test the property timerConfTimer5
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerConfTimer6 (base name: "timerConfTimer6")', function() {
      // uncomment below and update the code to test the property timerConfTimer6
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerConfTimer7 (base name: "timerConfTimer7")', function() {
      // uncomment below and update the code to test the property timerConfTimer7
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerCount (base name: "timerCount")', function() {
      // uncomment below and update the code to test the property timerCount
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerHoliday (base name: "timerHoliday")', function() {
      // uncomment below and update the code to test the property timerHoliday
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

    it('should have the property timerHoliday (base name: "timer_holiday")', function() {
      // uncomment below and update the code to test the property timerHoliday
      //var instane = new MagicInfoApi.DeviceTimeconfResource();
      //expect(instance).to.be();
    });

  });

}));
