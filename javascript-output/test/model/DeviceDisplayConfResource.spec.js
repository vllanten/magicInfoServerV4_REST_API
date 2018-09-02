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
    instance = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
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

  describe('DeviceDisplayConfResource', function() {
    it('should create an instance of DeviceDisplayConfResource', function() {
      // uncomment below and update the code to test DeviceDisplayConfResource
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be.a(MagicInfoServerV41RestApi.DeviceDisplayConfResource);
    });

    it('should have the property advancedAutoPower (base name: "advancedAutoPower")', function() {
      // uncomment below and update the code to test the property advancedAutoPower
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property advancedFanControl (base name: "advancedFanControl")', function() {
      // uncomment below and update the code to test the property advancedFanControl
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property advancedFanSpeed (base name: "advancedFanSpeed")', function() {
      // uncomment below and update the code to test the property advancedFanSpeed
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property advancedOsdDisplayType (base name: "advancedOsdDisplayType")', function() {
      // uncomment below and update the code to test the property advancedOsdDisplayType
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property advancedReset (base name: "advancedReset")', function() {
      // uncomment below and update the code to test the property advancedReset
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property advancedRj45SettingRefresh (base name: "advancedRj45SettingRefresh")', function() {
      // uncomment below and update the code to test the property advancedRj45SettingRefresh
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property advancedStandBy (base name: "advancedStandBy")', function() {
      // uncomment below and update the code to test the property advancedStandBy
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property advancedUserAutoColor (base name: "advancedUserAutoColor")', function() {
      // uncomment below and update the code to test the property advancedUserAutoColor
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property autoSourceSwitching (base name: "autoSourceSwitching")', function() {
      // uncomment below and update the code to test the property autoSourceSwitching
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property basicDirectChannel (base name: "basicDirectChannel")', function() {
      // uncomment below and update the code to test the property basicDirectChannel
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property basicMute (base name: "basicMute")', function() {
      // uncomment below and update the code to test the property basicMute
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property basicPanelStatus (base name: "basicPanelStatus")', function() {
      // uncomment below and update the code to test the property basicPanelStatus
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property basicPower (base name: "basicPower")', function() {
      // uncomment below and update the code to test the property basicPower
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property basicSource (base name: "basicSource")', function() {
      // uncomment below and update the code to test the property basicSource
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property basicVolume (base name: "basicVolume")', function() {
      // uncomment below and update the code to test the property basicVolume
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property blackTone (base name: "blackTone")', function() {
      // uncomment below and update the code to test the property blackTone
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property brightnessLimit (base name: "brightnessLimit")', function() {
      // uncomment below and update the code to test the property brightnessLimit
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property chkSchChannel (base name: "chkSchChannel")', function() {
      // uncomment below and update the code to test the property chkSchChannel
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property customLogo (base name: "customLogo")', function() {
      // uncomment below and update the code to test the property customLogo
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property diagnosisAlarmTemperature (base name: "diagnosisAlarmTemperature")', function() {
      // uncomment below and update the code to test the property diagnosisAlarmTemperature
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property diagnosisDisplayStatus (base name: "diagnosisDisplayStatus")', function() {
      // uncomment below and update the code to test the property diagnosisDisplayStatus
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property diagnosisMonitorTemperature (base name: "diagnosisMonitorTemperature")', function() {
      // uncomment below and update the code to test the property diagnosisMonitorTemperature
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property diagnosisPanelOnTime (base name: "diagnosisPanelOnTime")', function() {
      // uncomment below and update the code to test the property diagnosisPanelOnTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property fleshTone (base name: "fleshTone")', function() {
      // uncomment below and update the code to test the property fleshTone
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property imageAuto (base name: "imageAuto")', function() {
      // uncomment below and update the code to test the property imageAuto
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property imageCoarse (base name: "imageCoarse")', function() {
      // uncomment below and update the code to test the property imageCoarse
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property imageFine (base name: "imageFine")', function() {
      // uncomment below and update the code to test the property imageFine
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property imageHpos (base name: "imageHpos")', function() {
      // uncomment below and update the code to test the property imageHpos
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property imageVpos (base name: "imageVpos")', function() {
      // uncomment below and update the code to test the property imageVpos
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property inputSourceList (base name: "inputSourceList")', function() {
      // uncomment below and update the code to test the property inputSourceList
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property maxPowerSaving (base name: "maxPowerSaving")', function() {
      // uncomment below and update the code to test the property maxPowerSaving
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mdcUpdateTime (base name: "mdcUpdateTime")', function() {
      // uncomment below and update the code to test the property mdcUpdateTime
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscAllLock (base name: "miscAllLock")', function() {
      // uncomment below and update the code to test the property miscAllLock
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscOsd (base name: "miscOsd")', function() {
      // uncomment below and update the code to test the property miscOsd
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscPanelLock (base name: "miscPanelLock")', function() {
      // uncomment below and update the code to test the property miscPanelLock
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property miscRemocon (base name: "miscRemocon")', function() {
      // uncomment below and update the code to test the property miscRemocon
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntAuto (base name: "mntAuto")', function() {
      // uncomment below and update the code to test the property mntAuto
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntFormat (base name: "mntFormat")', function() {
      // uncomment below and update the code to test the property mntFormat
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntManual (base name: "mntManual")', function() {
      // uncomment below and update the code to test the property mntManual
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntPixelShift (base name: "mntPixelShift")', function() {
      // uncomment below and update the code to test the property mntPixelShift
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntSafetyLock (base name: "mntSafetyLock")', function() {
      // uncomment below and update the code to test the property mntSafetyLock
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntSafetyScreenRun (base name: "mntSafetyScreenRun")', function() {
      // uncomment below and update the code to test the property mntSafetyScreenRun
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntSafetyScreenTimer (base name: "mntSafetyScreenTimer")', function() {
      // uncomment below and update the code to test the property mntSafetyScreenTimer
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property mntVideoWall (base name: "mntVideoWall")', function() {
      // uncomment below and update the code to test the property mntVideoWall
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property networkStandbyMode (base name: "networkStandbyMode")', function() {
      // uncomment below and update the code to test the property networkStandbyMode
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pcMode (base name: "pcMode")', function() {
      // uncomment below and update the code to test the property pcMode
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pipControl (base name: "pipControl")', function() {
      // uncomment below and update the code to test the property pipControl
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pipPosition (base name: "pipPosition")', function() {
      // uncomment below and update the code to test the property pipPosition
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pipSize (base name: "pipSize")', function() {
      // uncomment below and update the code to test the property pipSize
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pipSource (base name: "pipSource")', function() {
      // uncomment below and update the code to test the property pipSource
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pipSwap (base name: "pipSwap")', function() {
      // uncomment below and update the code to test the property pipSwap
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcBlue (base name: "ppcBlue")', function() {
      // uncomment below and update the code to test the property ppcBlue
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcBrightness (base name: "ppcBrightness")', function() {
      // uncomment below and update the code to test the property ppcBrightness
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcColorTemperature (base name: "ppcColorTemperature")', function() {
      // uncomment below and update the code to test the property ppcColorTemperature
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcColortone (base name: "ppcColortone")', function() {
      // uncomment below and update the code to test the property ppcColortone
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcContrast (base name: "ppcContrast")', function() {
      // uncomment below and update the code to test the property ppcContrast
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcGamma (base name: "ppcGamma")', function() {
      // uncomment below and update the code to test the property ppcGamma
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcGreen (base name: "ppcGreen")', function() {
      // uncomment below and update the code to test the property ppcGreen
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcHdmiBlackLevel (base name: "ppcHdmiBlackLevel")', function() {
      // uncomment below and update the code to test the property ppcHdmiBlackLevel
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcMagicBright (base name: "ppcMagicBright")', function() {
      // uncomment below and update the code to test the property ppcMagicBright
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcRed (base name: "ppcRed")', function() {
      // uncomment below and update the code to test the property ppcRed
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property ppcSize (base name: "ppcSize")', function() {
      // uncomment below and update the code to test the property ppcSize
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvBrightness (base name: "pvBrightness")', function() {
      // uncomment below and update the code to test the property pvBrightness
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvColor (base name: "pvColor")', function() {
      // uncomment below and update the code to test the property pvColor
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvColorTemperature (base name: "pvColorTemperature")', function() {
      // uncomment below and update the code to test the property pvColorTemperature
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvColortone (base name: "pvColortone")', function() {
      // uncomment below and update the code to test the property pvColortone
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvContrast (base name: "pvContrast")', function() {
      // uncomment below and update the code to test the property pvContrast
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvDigitalnr (base name: "pvDigitalnr")', function() {
      // uncomment below and update the code to test the property pvDigitalnr
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvFilmmode (base name: "pvFilmmode")', function() {
      // uncomment below and update the code to test the property pvFilmmode
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvHdmiBlackLevel (base name: "pvHdmiBlackLevel")', function() {
      // uncomment below and update the code to test the property pvHdmiBlackLevel
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvMode (base name: "pvMode")', function() {
      // uncomment below and update the code to test the property pvMode
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvMpegNoiseFilter (base name: "pvMpegNoiseFilter")', function() {
      // uncomment below and update the code to test the property pvMpegNoiseFilter
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvSharpness (base name: "pvSharpness")', function() {
      // uncomment below and update the code to test the property pvSharpness
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvSize (base name: "pvSize")', function() {
      // uncomment below and update the code to test the property pvSize
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvTint (base name: "pvTint")', function() {
      // uncomment below and update the code to test the property pvTint
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property pvVideoPicturePositionSize (base name: "pvVideoPicturePositionSize")', function() {
      // uncomment below and update the code to test the property pvVideoPicturePositionSize
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property rgbOnlyMode (base name: "rgbOnlyMode")', function() {
      // uncomment below and update the code to test the property rgbOnlyMode
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbBgain (base name: "sbBgain")', function() {
      // uncomment below and update the code to test the property sbBgain
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbBoffset (base name: "sbBoffset")', function() {
      // uncomment below and update the code to test the property sbBoffset
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbGain (base name: "sbGain")', function() {
      // uncomment below and update the code to test the property sbGain
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbGgain (base name: "sbGgain")', function() {
      // uncomment below and update the code to test the property sbGgain
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbGoffset (base name: "sbGoffset")', function() {
      // uncomment below and update the code to test the property sbGoffset
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbRgain (base name: "sbRgain")', function() {
      // uncomment below and update the code to test the property sbRgain
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbRoffset (base name: "sbRoffset")', function() {
      // uncomment below and update the code to test the property sbRoffset
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbSharp (base name: "sbSharp")', function() {
      // uncomment below and update the code to test the property sbSharp
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property sbStatus (base name: "sbStatus")', function() {
      // uncomment below and update the code to test the property sbStatus
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property screenFreeze (base name: "screenFreeze")', function() {
      // uncomment below and update the code to test the property screenFreeze
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property screenMute (base name: "screenMute")', function() {
      // uncomment below and update the code to test the property screenMute
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property soundBalance (base name: "soundBalance")', function() {
      // uncomment below and update the code to test the property soundBalance
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property soundBass (base name: "soundBass")', function() {
      // uncomment below and update the code to test the property soundBass
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property soundEffect (base name: "soundEffect")', function() {
      // uncomment below and update the code to test the property soundEffect
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property soundMode (base name: "soundMode")', function() {
      // uncomment below and update the code to test the property soundMode
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property soundSrs (base name: "soundSrs")', function() {
      // uncomment below and update the code to test the property soundSrs
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property soundTreble (base name: "soundTreble")', function() {
      // uncomment below and update the code to test the property soundTreble
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property touchControlLock (base name: "touchControlLock")', function() {
      // uncomment below and update the code to test the property touchControlLock
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property webBrowserUrl (base name: "webBrowserUrl")', function() {
      // uncomment below and update the code to test the property webBrowserUrl
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

    it('should have the property webcam (base name: "webcam")', function() {
      // uncomment below and update the code to test the property webcam
      //var instane = new MagicInfoServerV41RestApi.DeviceDisplayConfResource();
      //expect(instance).to.be();
    });

  });

}));