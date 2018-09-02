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
    instance = new MagicInfoServerV4RestApi.MessageScheduleGroupControllerApi();
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

  describe('MessageScheduleGroupControllerApi', function() {
    describe('getChildGroupsUsingGET3', function() {
      it('should call getChildGroupsUsingGET3 successfully', function(done) {
        //uncomment below and update the code to test getChildGroupsUsingGET3
        //instance.getChildGroupsUsingGET3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRootGroupsUsingGET2', function() {
      it('should call getRootGroupsUsingGET2 successfully', function(done) {
        //uncomment below and update the code to test getRootGroupsUsingGET2
        //instance.getRootGroupsUsingGET2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMessageScheduleGroupInfoUsingGET', function() {
      it('should call listMessageScheduleGroupInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test listMessageScheduleGroupInfoUsingGET
        //instance.listMessageScheduleGroupInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
