/**
 * MagicInfo Server V4 REST API
 * MagicInfo Server V4 REST API
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
    factory(root.expect, root.MagicInfoServerV4RestApi);
  }
}(this, function(expect, MagicInfoServerV4RestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MagicInfoServerV4RestApi.TagResource();
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

  describe('TagResource', function() {
    it('should create an instance of TagResource', function() {
      // uncomment below and update the code to test TagResource
      //var instane = new MagicInfoServerV4RestApi.TagResource();
      //expect(instance).to.be.a(MagicInfoServerV4RestApi.TagResource);
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instane = new MagicInfoServerV4RestApi.TagResource();
      //expect(instance).to.be();
    });

    it('should have the property startIndex (base name: "startIndex")', function() {
      // uncomment below and update the code to test the property startIndex
      //var instane = new MagicInfoServerV4RestApi.TagResource();
      //expect(instance).to.be();
    });

    it('should have the property tagList (base name: "tagList")', function() {
      // uncomment below and update the code to test the property tagList
      //var instane = new MagicInfoServerV4RestApi.TagResource();
      //expect(instance).to.be();
    });

  });

}));
