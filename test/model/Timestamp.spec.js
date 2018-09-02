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
    instance = new MagicInfoServerV41RestApi.Timestamp();
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

  describe('Timestamp', function() {
    it('should create an instance of Timestamp', function() {
      // uncomment below and update the code to test Timestamp
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.Timestamp);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

    it('should have the property hours (base name: "hours")', function() {
      // uncomment below and update the code to test the property hours
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

    it('should have the property minutes (base name: "minutes")', function() {
      // uncomment below and update the code to test the property minutes
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

    it('should have the property month (base name: "month")', function() {
      // uncomment below and update the code to test the property month
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

    it('should have the property nanos (base name: "nanos")', function() {
      // uncomment below and update the code to test the property nanos
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

    it('should have the property seconds (base name: "seconds")', function() {
      // uncomment below and update the code to test the property seconds
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instane = new MagicInfoServerV41RestApi.Timestamp();
      //expect(instance).to.be();
    });

  });

}));