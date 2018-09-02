/**
 * MagicInfo Server V4x REST API
 * MagicInfo Server V4x REST API
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
    factory(root.expect, root.MagicInfoServerV4xRestApi);
  }
}(this, function(expect, MagicInfoServerV4xRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MagicInfoServerV4xRestApi.PlaylistItemResource();
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

  describe('PlaylistItemResource', function() {
    it('should create an instance of PlaylistItemResource', function() {
      // uncomment below and update the code to test PlaylistItemResource
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be.a(MagicInfoServerV4xRestApi.PlaylistItemResource);
    });

    it('should have the property contentDuration (base name: "contentDuration")', function() {
      // uncomment below and update the code to test the property contentDuration
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property contentDurationMilli (base name: "contentDurationMilli")', function() {
      // uncomment below and update the code to test the property contentDurationMilli
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property contentId (base name: "contentId")', function() {
      // uncomment below and update the code to test the property contentId
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property contentName (base name: "contentName")', function() {
      // uncomment below and update the code to test the property contentName
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property contentOrder (base name: "contentOrder")', function() {
      // uncomment below and update the code to test the property contentOrder
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property expiredDate (base name: "expiredDate")', function() {
      // uncomment below and update the code to test the property expiredDate
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property hasDefaultPlayTime (base name: "hasDefaultPlayTime")', function() {
      // uncomment below and update the code to test the property hasDefaultPlayTime
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "mediaType")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property playTime (base name: "playTime")', function() {
      // uncomment below and update the code to test the property playTime
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property playlistId (base name: "playlistId")', function() {
      // uncomment below and update the code to test the property playlistId
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property resolution (base name: "resolution")', function() {
      // uncomment below and update the code to test the property resolution
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property subPlaylist (base name: "subPlaylist")', function() {
      // uncomment below and update the code to test the property subPlaylist
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property tagList (base name: "tagList")', function() {
      // uncomment below and update the code to test the property tagList
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property tagMatchType (base name: "tagMatchType")', function() {
      // uncomment below and update the code to test the property tagMatchType
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property tagValue (base name: "tagValue")', function() {
      // uncomment below and update the code to test the property tagValue
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property thumbFileId (base name: "thumbFileId")', function() {
      // uncomment below and update the code to test the property thumbFileId
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property thumbFileName (base name: "thumbFileName")', function() {
      // uncomment below and update the code to test the property thumbFileName
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property thumbFilePath (base name: "thumbFilePath")', function() {
      // uncomment below and update the code to test the property thumbFilePath
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

    it('should have the property versionId (base name: "versionId")', function() {
      // uncomment below and update the code to test the property versionId
      //var instane = new MagicInfoServerV4xRestApi.PlaylistItemResource();
      //expect(instance).to.be();
    });

  });

}));
