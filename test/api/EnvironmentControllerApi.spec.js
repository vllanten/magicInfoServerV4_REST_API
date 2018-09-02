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
    instance = new MagicInfoServerV4RestApi.EnvironmentControllerApi();
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

  describe('EnvironmentControllerApi', function() {
    describe('checkLicenseStatusUsingGET1', function() {
      it('should call checkLicenseStatusUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test checkLicenseStatusUsingGET1
        //instance.checkLicenseStatusUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDashboardUsingGET1', function() {
      it('should call createDashboardUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test createDashboardUsingGET1
        //instance.createDashboardUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNoticeInfoUsingPOST', function() {
      it('should call createNoticeInfoUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createNoticeInfoUsingPOST
        //instance.createNoticeInfoUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDashboardUsingDELETE1', function() {
      it('should call deleteDashboardUsingDELETE1 successfully', function(done) {
        //uncomment below and update the code to test deleteDashboardUsingDELETE1
        //instance.deleteDashboardUsingDELETE1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNoticeInfoUsingDELETE', function() {
      it('should call deleteNoticeInfoUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteNoticeInfoUsingDELETE
        //instance.deleteNoticeInfoUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryInfoUsingGET', function() {
      it('should call getCategoryInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test getCategoryInfoUsingGET
        //instance.getCategoryInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceStatusInfoUsingGET', function() {
      it('should call getDeviceStatusInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test getDeviceStatusInfoUsingGET
        //instance.getDeviceStatusInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLicenseCheckDetailUsingGET1', function() {
      it('should call getLicenseCheckDetailUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getLicenseCheckDetailUsingGET1
        //instance.getLicenseCheckDetailUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMenuItemCountUsingGET', function() {
      it('should call getMenuItemCountUsingGET successfully', function(done) {
        //uncomment below and update the code to test getMenuItemCountUsingGET
        //instance.getMenuItemCountUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServerSetupInfoUsingGET1', function() {
      it('should call getServerSetupInfoUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getServerSetupInfoUsingGET1
        //instance.getServerSetupInfoUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagListInfoUsingPOST1', function() {
      it('should call getTagListInfoUsingPOST1 successfully', function(done) {
        //uncomment below and update the code to test getTagListInfoUsingPOST1
        //instance.getTagListInfoUsingPOST1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDashboardInfoUsingGET1', function() {
      it('should call listDashboardInfoUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listDashboardInfoUsingGET1
        //instance.listDashboardInfoUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDashboardLoginInfoUsingGET1', function() {
      it('should call listDashboardLoginInfoUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listDashboardLoginInfoUsingGET1
        //instance.listDashboardLoginInfoUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDashboardNoticeInfoUsingGET1', function() {
      it('should call listDashboardNoticeInfoUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listDashboardNoticeInfoUsingGET1
        //instance.listDashboardNoticeInfoUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDashboardStorageInfoUsingGET', function() {
      it('should call listDashboardStorageInfoUsingGET successfully', function(done) {
        //uncomment below and update the code to test listDashboardStorageInfoUsingGET
        //instance.listDashboardStorageInfoUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listEditNoticeInfoUsingGET1', function() {
      it('should call listEditNoticeInfoUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listEditNoticeInfoUsingGET1
        //instance.listEditNoticeInfoUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listLicenseUsingGET1', function() {
      it('should call listLicenseUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test listLicenseUsingGET1
        //instance.listLicenseUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMenuUsingGET', function() {
      it('should call listMenuUsingGET successfully', function(done) {
        //uncomment below and update the code to test listMenuUsingGET
        //instance.listMenuUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDashboardPriorityUsingPUT', function() {
      it('should call updateDashboardPriorityUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateDashboardPriorityUsingPUT
        //instance.updateDashboardPriorityUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNoticeInfoUsingPUT1', function() {
      it('should call updateNoticeInfoUsingPUT1 successfully', function(done) {
        //uncomment below and update the code to test updateNoticeInfoUsingPUT1
        //instance.updateNoticeInfoUsingPUT1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
