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
    instance = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
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

  describe('EnvironmentPriorityFilter', function() {
    it('should create an instance of EnvironmentPriorityFilter', function() {
      // uncomment below and update the code to test EnvironmentPriorityFilter
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.EnvironmentPriorityFilter);
    });

    it('should have the property contentInfoDashboard (base name: "contentInfoDashboard")', function() {
      // uncomment below and update the code to test the property contentInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property deviceInfoDashboard (base name: "deviceInfoDashboard")', function() {
      // uncomment below and update the code to test the property deviceInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property noticeInfoDashboard (base name: "noticeInfoDashboard")', function() {
      // uncomment below and update the code to test the property noticeInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property playlistInfoDashboard (base name: "playlistInfoDashboard")', function() {
      // uncomment below and update the code to test the property playlistInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property scheduleInfoDashboard (base name: "scheduleInfoDashboard")', function() {
      // uncomment below and update the code to test the property scheduleInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property signInfoDashboard (base name: "signInfoDashboard")', function() {
      // uncomment below and update the code to test the property signInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property storageInfoDashboard (base name: "storageInfoDashboard")', function() {
      // uncomment below and update the code to test the property storageInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property userInfoDashboard (base name: "userInfoDashboard")', function() {
      // uncomment below and update the code to test the property userInfoDashboard
      //var instane = new MagicInfoServerV41RestApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

  });

}));