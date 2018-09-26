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
    instance = new MagicInfoApi.DeviceGeneralConfResource();
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

  describe('DeviceGeneralConfResource', function() {
    it('should create an instance of DeviceGeneralConfResource', function() {
      // uncomment below and update the code to test DeviceGeneralConfResource
      //var instane = new MagicInfoApi.DeviceGeneralConfResource();
      //expect(instance).to.be.a(MagicInfoApi.DeviceGeneralConfResource);
    });

    it('should have the property deviceModelName (base name: "deviceModelName")', function() {
      // uncomment below and update the code to test the property deviceModelName
      //var instane = new MagicInfoApi.DeviceGeneralConfResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceName (base name: "deviceName")', function() {
      // uncomment below and update the code to test the property deviceName
      //var instane = new MagicInfoApi.DeviceGeneralConfResource();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new MagicInfoApi.DeviceGeneralConfResource();
      //expect(instance).to.be();
    });

    it('should have the property modelNameList (base name: "modelNameList")', function() {
      // uncomment below and update the code to test the property modelNameList
      //var instane = new MagicInfoApi.DeviceGeneralConfResource();
      //expect(instance).to.be();
    });

    it('should have the property power (base name: "power")', function() {
      // uncomment below and update the code to test the property power
      //var instane = new MagicInfoApi.DeviceGeneralConfResource();
      //expect(instance).to.be();
    });

  });

}));
