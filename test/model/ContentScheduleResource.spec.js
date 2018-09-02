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
    instance = new MagicInfoServerV4RestApi.ContentScheduleResource();
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

  describe('ContentScheduleResource', function() {
    it('should create an instance of ContentScheduleResource', function() {
      // uncomment below and update the code to test ContentScheduleResource
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be.a(MagicInfoServerV4RestApi.ContentScheduleResource);
    });

    it('should have the property backgroundMusic (base name: "backgroundMusic")', function() {
      // uncomment below and update the code to test the property backgroundMusic
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property contentMute (base name: "contentMute")', function() {
      // uncomment below and update the code to test the property contentMute
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property contentSyncOn (base name: "contentSyncOn")', function() {
      // uncomment below and update the code to test the property contentSyncOn
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deployReserve (base name: "deployReserve")', function() {
      // uncomment below and update the code to test the property deployReserve
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deployReserveResource (base name: "deployReserveResource")', function() {
      // uncomment below and update the code to test the property deployReserveResource
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceGroupIds (base name: "deviceGroupIds")', function() {
      // uncomment below and update the code to test the property deviceGroupIds
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceTypeVersion (base name: "deviceTypeVersion")', function() {
      // uncomment below and update the code to test the property deviceTypeVersion
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ipAddress")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property itemList (base name: "itemList")', function() {
      // uncomment below and update the code to test the property itemList
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property scheduleGroupId (base name: "scheduleGroupId")', function() {
      // uncomment below and update the code to test the property scheduleGroupId
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property scheduleName (base name: "scheduleName")', function() {
      // uncomment below and update the code to test the property scheduleName
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property syncPlay (base name: "syncPlay")', function() {
      // uncomment below and update the code to test the property syncPlay
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property vwlType (base name: "vwlType")', function() {
      // uncomment below and update the code to test the property vwlType
      //var instane = new MagicInfoServerV4RestApi.ContentScheduleResource();
      //expect(instance).to.be();
    });

  });

}));
