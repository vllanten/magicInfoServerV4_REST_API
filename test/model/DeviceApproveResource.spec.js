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
    instance = new MagicInfoServerV41RestApi.DeviceApproveResource();
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

  describe('DeviceApproveResource', function() {
    it('should create an instance of DeviceApproveResource', function() {
      // uncomment below and update the code to test DeviceApproveResource
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.DeviceApproveResource);
    });

    it('should have the property calDate (base name: "calDate")', function() {
      // uncomment below and update the code to test the property calDate
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property childCnt (base name: "childCnt")', function() {
      // uncomment below and update the code to test the property childCnt
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceName (base name: "deviceName")', function() {
      // uncomment below and update the code to test the property deviceName
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property hasChild (base name: "hasChild")', function() {
      // uncomment below and update the code to test the property hasChild
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ipAddress")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

    it('should have the property slaveNumber (base name: "slaveNumber")', function() {
      // uncomment below and update the code to test the property slaveNumber
      //var instane = new MagicInfoServerV41RestApi.DeviceApproveResource();
      //expect(instance).to.be();
    });

  });

}));
