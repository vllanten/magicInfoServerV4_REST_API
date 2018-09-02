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
    instance = new MagicInfoServerV4RestApi.MessageScheduleResource();
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

  describe('MessageScheduleResource', function() {
    it('should create an instance of MessageScheduleResource', function() {
      // uncomment below and update the code to test MessageScheduleResource
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be.a(MagicInfoServerV4RestApi.MessageScheduleResource);
    });

    it('should have the property creatorId (base name: "creatorId")', function() {
      // uncomment below and update the code to test the property creatorId
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceGroupIds (base name: "deviceGroupIds")', function() {
      // uncomment below and update the code to test the property deviceGroupIds
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceGroupNames (base name: "deviceGroupNames")', function() {
      // uncomment below and update the code to test the property deviceGroupNames
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceTypeVersion (base name: "deviceTypeVersion")', function() {
      // uncomment below and update the code to test the property deviceTypeVersion
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property isInstant (base name: "isInstant")', function() {
      // uncomment below and update the code to test the property isInstant
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property messageGroupId (base name: "messageGroupId")', function() {
      // uncomment below and update the code to test the property messageGroupId
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property messageGroupName (base name: "messageGroupName")', function() {
      // uncomment below and update the code to test the property messageGroupName
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "messageId")', function() {
      // uncomment below and update the code to test the property messageId
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property messageList (base name: "messageList")', function() {
      // uncomment below and update the code to test the property messageList
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property messageName (base name: "messageName")', function() {
      // uncomment below and update the code to test the property messageName
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property messageStatus (base name: "messageStatus")', function() {
      // uncomment below and update the code to test the property messageStatus
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

    it('should have the property modifiedDate (base name: "modifiedDate")', function() {
      // uncomment below and update the code to test the property modifiedDate
      //var instane = new MagicInfoServerV4RestApi.MessageScheduleResource();
      //expect(instance).to.be();
    });

  });

}));
