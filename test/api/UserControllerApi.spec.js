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
    instance = new MagicInfoServerV4xRestApi.UserControllerApi();
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

  describe('UserControllerApi', function() {
    describe('createUserSignUpUsingPOST', function() {
      it('should call createUserSignUpUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createUserSignUpUsingPOST
        //instance.createUserSignUpUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserUsingPOST', function() {
      it('should call createUserUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createUserUsingPOST
        //instance.createUserUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDashboardUserInfoUsingGET', function() {
      it('should call listDashboardUserInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test listDashboardUserInfoUsingGET
        //instance.listDashboardUserInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMyInfoUsingGET', function() {
      it('should call listMyInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test listMyInfoUsingGET
        //instance.listMyInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listUserOrganUsingGET1', function() {
      it('should call listUserOrganUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listUserOrganUsingGET1
        //instance.listUserOrganUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMyInfoUsingPUT1', function() {
      it('should call updateMyInfoUsingPUT1 successfully', function(done) {
        //uncomment below and update the code to test updateMyInfoUsingPUT1
        //instance.updateMyInfoUsingPUT1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
