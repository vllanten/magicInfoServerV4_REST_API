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
    instance = new MagicInfoServerV4RestApi.DeviceDisplayCustomLogoResource();
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

  describe('DeviceDisplayCustomLogoResource', function() {
    it('should create an instance of DeviceDisplayCustomLogoResource', function() {
      // uncomment below and update the code to test DeviceDisplayCustomLogoResource
      //var instane = new MagicInfoServerV4RestApi.DeviceDisplayCustomLogoResource();
      //expect(instance).to.be.a(MagicInfoServerV4RestApi.DeviceDisplayCustomLogoResource);
    });

    it('should have the property changed (base name: "changed")', function() {
      // uncomment below and update the code to test the property changed
      //var instane = new MagicInfoServerV4RestApi.DeviceDisplayCustomLogoResource();
      //expect(instance).to.be();
    });

    it('should have the property displayTime (base name: "displayTime")', function() {
      // uncomment below and update the code to test the property displayTime
      //var instane = new MagicInfoServerV4RestApi.DeviceDisplayCustomLogoResource();
      //expect(instance).to.be();
    });

    it('should have the property fileType (base name: "fileType")', function() {
      // uncomment below and update the code to test the property fileType
      //var instane = new MagicInfoServerV4RestApi.DeviceDisplayCustomLogoResource();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new MagicInfoServerV4RestApi.DeviceDisplayCustomLogoResource();
      //expect(instance).to.be();
    });

  });

}));
