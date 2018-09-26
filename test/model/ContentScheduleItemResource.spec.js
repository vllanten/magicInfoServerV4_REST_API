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
    instance = new MagicInfoApi.ContentScheduleItemResource();
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

  describe('ContentScheduleItemResource', function() {
    it('should create an instance of ContentScheduleItemResource', function() {
      // uncomment below and update the code to test ContentScheduleItemResource
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be.a(MagicInfoApi.ContentScheduleItemResource);
    });

    it('should have the property channelNo (base name: "channelNo")', function() {
      // uncomment below and update the code to test the property channelNo
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property cifsSlideTime (base name: "cifsSlideTime")', function() {
      // uncomment below and update the code to test the property cifsSlideTime
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property contentId (base name: "contentId")', function() {
      // uncomment below and update the code to test the property contentId
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property contentName (base name: "contentName")', function() {
      // uncomment below and update the code to test the property contentName
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "contentType")', function() {
      // uncomment below and update the code to test the property contentType
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property frameId (base name: "frameId")', function() {
      // uncomment below and update the code to test the property frameId
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property frameIndex (base name: "frameIndex")', function() {
      // uncomment below and update the code to test the property frameIndex
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property inputSource (base name: "inputSource")', function() {
      // uncomment below and update the code to test the property inputSource
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property isSync (base name: "isSync")', function() {
      // uncomment below and update the code to test the property isSync
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property monthday (base name: "monthday")', function() {
      // uncomment below and update the code to test the property monthday
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property playerMode (base name: "playerMode")', function() {
      // uncomment below and update the code to test the property playerMode
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property repeatType (base name: "repeatType")', function() {
      // uncomment below and update the code to test the property repeatType
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property safetyLock (base name: "safetyLock")', function() {
      // uncomment below and update the code to test the property safetyLock
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property scheduleType (base name: "scheduleType")', function() {
      // uncomment below and update the code to test the property scheduleType
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property stopDate (base name: "stopDate")', function() {
      // uncomment below and update the code to test the property stopDate
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

    it('should have the property weekdays (base name: "weekdays")', function() {
      // uncomment below and update the code to test the property weekdays
      //var instane = new MagicInfoApi.ContentScheduleItemResource();
      //expect(instance).to.be();
    });

  });

}));
