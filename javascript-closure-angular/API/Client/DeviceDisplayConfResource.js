goog.provide('API.Client.DeviceDisplayConfResource');

/**
 * @record
 */
API.Client.DeviceDisplayConfResource = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedAutoPower;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedFanControl;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedFanSpeed;

/**
 * @type {!API.Client.DeviceDisplayConfSubResource}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedOsdDisplayType;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedReset;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedRj45SettingRefresh;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedStandBy;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.advancedUserAutoColor;

/**
 * @type {!API.Client.DeviceDisplayConfSubResource}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.autoSourceSwitching;

/**
 * 1;chkAtvDtv(0:false, 1:true);chkAirCable(0:false, 1:true);tv_channel_major_channel;tv_channel_minor_channel[Channel] button on display list tab. (Modification is only allowed with TV or DTV inpusource
 * @type {!string}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.basicDirectChannel;

/**
 * 0 : mute off
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.basicMute;

/**
 * 0 : panel off
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.basicPanelStatus;

/**
 * 0 : power off
 * @type {!string}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.basicPower;

/**
 * MagicInfo-Lite/S
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.basicSource;

/**
 * volume value
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.basicVolume;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.blackTone;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.brightnessLimit;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.chkSchChannel;

/**
 * @type {!API.Client.DeviceDisplayCustomLogoResource}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.customLogo;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.diagnosisAlarmTemperature;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.diagnosisDisplayStatus;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.diagnosisMonitorTemperature;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.diagnosisPanelOnTime;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.fleshTone;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.imageAuto;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.imageCoarse;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.imageFine;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.imageHpos;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.imageVpos;

/**
 * @type {!Array<!API.Client.HashMap«string,object»>}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.inputSourceList;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.maxPowerSaving;

/**
 * @type {!API.Client.Timestamp}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mdcUpdateTime;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.miscAllLock;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.miscOsd;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.miscPanelLock;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.miscRemocon;

/**
 * @type {!API.Client.DeviceDisplayConfSubResource}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntAuto;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntFormat;

/**
 * 0~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntManual;

/**
 * @type {!API.Client.DeviceDisplayConfSubResource}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntPixelShift;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntSafetyLock;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntSafetyScreenRun;

/**
 * @type {!API.Client.DeviceDisplayConfSubResource}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntSafetyScreenTimer;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.mntVideoWall;

/**
 * N: not supported, 0: off, 1: on
 * @type {!string}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.networkStandbyMode;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pcMode;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pipControl;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pipPosition;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pipSize;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pipSource;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pipSwap;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcBlue;

/**
 * 0~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcBrightness;

/**
 * if ppc_colortone not null - 253:254:35:255:45:0:55:1:65:2:75:3:85:4:95:5:105:6:115:7:125:8:135:9:145:16:155:160 - 2,800K:3,000K:3,500K:4,000K:4,500K:5,000K:5,500K:6,000K:6,500K:7,000K:7,500K:8,000K:8,500K:9,000K:9,500K:10,000K:10,500K:11,000K:11,500K:12,000K:12,500K:13,000K:13,500K:14,000K:14,500K:15,000K:15,500K:16,000K
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcColorTemperature;

/**
 * if ppc_colortone not null - 1: cool1, 0: cool2, 2: normal, 3: warm1, 4: warm2, 80: off
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcColortone;

/**
 * 0~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcContrast;

/**
 * 0: natural, 1: gammaMode1, 2: gammaMode2, 3: gammaMode3, 4: gammaMode4, 5: gammaMode5, 17: -1, 18: -2, 19: -3, 20: -4, 21: -5, 32: custom
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcGamma;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcGreen;

/**
 * if Pv_hdmi_black_level value is null - 0: low, 1: normalelse 1: normal, 0: low
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcHdmiBlackLevel;

/**
 * 16: entertainment, 17: internet, 18: text, 19: custom, 20: advertisement, 21: information, 22: calibration, 32: shopAndMall_video, 33: shopAndMall_text, 34: officeAndSchool_video, 35: officeAndSchool_text, 36: terminalAndStation_video, 37: terminalAndStation_text, 38: videowall_video, 39: videowall_text
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcMagicBright;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcRed;

/**
 * 16: 16:9, 24: 4:3, 32: psize_original_ratio
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.ppcSize;

/**
 * 1~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvBrightness;

/**
 * 1~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvColor;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvColorTemperature;

/**
 * 80:off, 1: cool, 2:normal
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvColortone;

/**
 * 1~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvContrast;

/**
 * 1: on, 0: off, 2: mdc_medium, 3: mdc_high, 4: autho, 5: mdc_auto_visual
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvDigitalnr;

/**
 * 1: on, 0: off, 2: auto2, 3: mdc_cinema_smooth
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvFilmmode;

/**
 * if pv_hdmi_black_level value is null : not supported - 0: low, 1: normalelse 0: normal, 1: low, 2: auto
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvHdmiBlackLevel;

/**
 * 0: dynamic, 1: mdc_pv_standard, 2: mdc_pv_movie, 3: custom, 4: mdc_pv_natural, 5: calibration, 32: shopAndMall_video, 33: shopAndMall_text, 34: officeAndSchool_video, 35: officeAndSchool_text, 36:terminalAndStation_video, 37: terminalAndStation_text, 38: videowall_video, 39: videowall_text
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvMode;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvMpegNoiseFilter;

/**
 * 1~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvSharpness;

/**
 * 1: 16:9, 4: zoom, 5: zoom1, 6: zoom2, 9: screen_fit_just_scan1, 11: 4:3,12: wide_fit, 49: wide_zoom, 13: custom, 14: mdc_smart_view1, 15: mdc_smart_view2, 32: psize_original_ratio
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvSize;

/**
 * 1~100
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvTint;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.pvVideoPicturePositionSize;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.rgbOnlyMode;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbBgain;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbBoffset;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbGain;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbGgain;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbGoffset;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbRgain;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbRoffset;

/**
 * 0~255
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbSharp;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.sbStatus;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.screenFreeze;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.screenMute;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.soundBalance;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.soundBass;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.soundEffect;

/**
 * 0: mdc_sound_standard, 1: mdc_sound_music, 2: mdc_sound_movie, 3: mdc_sound_speech, 4: custom, 5: amplify
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.soundMode;

/**
 * 0: off, 1: on
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.soundSrs;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.soundTreble;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.touchControlLock;

/**
 * @type {!API.Client.DeviceDisplayConfSubResource}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.webBrowserUrl;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DeviceDisplayConfResource.prototype.webcam;

