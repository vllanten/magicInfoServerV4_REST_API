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
    instance = new MagicInfoApi.PlaylistResource();
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

  describe('PlaylistResource', function() {
    it('should create an instance of PlaylistResource', function() {
      // uncomment below and update the code to test PlaylistResource
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be.a(MagicInfoApi.PlaylistResource);
    });

    it('should have the property categoryList (base name: "categoryList")', function() {
      // uncomment below and update the code to test the property categoryList
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property contentCount (base name: "contentCount")', function() {
      // uncomment below and update the code to test the property contentCount
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property contentList (base name: "contentList")', function() {
      // uncomment below and update the code to test the property contentList
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property creatorId (base name: "creatorId")', function() {
      // uncomment below and update the code to test the property creatorId
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceTypeVersion (base name: "deviceTypeVersion")', function() {
      // uncomment below and update the code to test the property deviceTypeVersion
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "groupName")', function() {
      // uncomment below and update the code to test the property groupName
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property metaData (base name: "metaData")', function() {
      // uncomment below and update the code to test the property metaData
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property playTime (base name: "playTime")', function() {
      // uncomment below and update the code to test the property playTime
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property playlistId (base name: "playlistId")', function() {
      // uncomment below and update the code to test the property playlistId
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property playlistName (base name: "playlistName")', function() {
      // uncomment below and update the code to test the property playlistName
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property playlistType (base name: "playlistType")', function() {
      // uncomment below and update the code to test the property playlistType
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property shareFlag (base name: "shareFlag")', function() {
      // uncomment below and update the code to test the property shareFlag
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property shuffleFlag (base name: "shuffleFlag")', function() {
      // uncomment below and update the code to test the property shuffleFlag
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property thumbFileName (base name: "thumbFileName")', function() {
      // uncomment below and update the code to test the property thumbFileName
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property thumbFilePath (base name: "thumbFilePath")', function() {
      // uncomment below and update the code to test the property thumbFilePath
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property totalSize (base name: "totalSize")', function() {
      // uncomment below and update the code to test the property totalSize
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

    it('should have the property versionId (base name: "versionId")', function() {
      // uncomment below and update the code to test the property versionId
      //var instane = new MagicInfoApi.PlaylistResource();
      //expect(instance).to.be();
    });

  });

}));
