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
    instance = new MagicInfoApi.EnvironmentPriorityFilter();
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
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be.a(MagicInfoApi.EnvironmentPriorityFilter);
    });

    it('should have the property contentInfoDashboard (base name: "contentInfoDashboard")', function() {
      // uncomment below and update the code to test the property contentInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property deviceInfoDashboard (base name: "deviceInfoDashboard")', function() {
      // uncomment below and update the code to test the property deviceInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property noticeInfoDashboard (base name: "noticeInfoDashboard")', function() {
      // uncomment below and update the code to test the property noticeInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property playlistInfoDashboard (base name: "playlistInfoDashboard")', function() {
      // uncomment below and update the code to test the property playlistInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property scheduleInfoDashboard (base name: "scheduleInfoDashboard")', function() {
      // uncomment below and update the code to test the property scheduleInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property signInfoDashboard (base name: "signInfoDashboard")', function() {
      // uncomment below and update the code to test the property signInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property storageInfoDashboard (base name: "storageInfoDashboard")', function() {
      // uncomment below and update the code to test the property storageInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

    it('should have the property userInfoDashboard (base name: "userInfoDashboard")', function() {
      // uncomment below and update the code to test the property userInfoDashboard
      //var instane = new MagicInfoApi.EnvironmentPriorityFilter();
      //expect(instance).to.be();
    });

  });

}));
