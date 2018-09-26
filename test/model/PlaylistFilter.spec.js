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
    instance = new MagicInfoApi.PlaylistFilter();
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

  describe('PlaylistFilter', function() {
    it('should create an instance of PlaylistFilter', function() {
      // uncomment below and update the code to test PlaylistFilter
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be.a(MagicInfoApi.PlaylistFilter);
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property creatorId (base name: "creatorId")', function() {
      // uncomment below and update the code to test the property creatorId
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property listType (base name: "listType")', function() {
      // uncomment below and update the code to test the property listType
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property playlistType (base name: "playlistType")', function() {
      // uncomment below and update the code to test the property playlistType
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property searchText (base name: "searchText")', function() {
      // uncomment below and update the code to test the property searchText
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property sortColumn (base name: "sortColumn")', function() {
      // uncomment below and update the code to test the property sortColumn
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sortOrder")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property startIndex (base name: "startIndex")', function() {
      // uncomment below and update the code to test the property startIndex
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new MagicInfoApi.PlaylistFilter();
      //expect(instance).to.be();
    });

  });

}));
