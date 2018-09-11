goog.provide('API.Client.DeviceFilter');

/**
 * Deviec List Filter Model
 * @record
 */
API.Client.DeviceFilter = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.agentId;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.asState;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.cmd;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.commonSearchKeyword;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.consoleId;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.customInputVal;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.deviceId;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.deviceModelName;

/**
 * device type for filter
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.deviceType;

/**
 * @type {!Array<!string>}
 * @export
 */
API.Client.DeviceFilter.prototype.deviceTypeArr;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.expirationDate;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.filterGroupIds;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.groupId;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.groupMode;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.groupName;

/**
 * @type {!Array<!string>}
 * @export
 */
API.Client.DeviceFilter.prototype.hasAlarmFilter;

/**
 * @type {!Array<!string>}
 * @export
 */
API.Client.DeviceFilter.prototype.hasFunctionFilter;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.imageViewMode;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.isApproved;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DeviceFilter.prototype.isRoot;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.locale;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.menu;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.orderDir;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceFilter.prototype.orgId;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceFilter.prototype.pageSize;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.roleName;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.sortName;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.srcName;

/**
 * @type {!number}
 * @export
 */
API.Client.DeviceFilter.prototype.startIndex;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.statusViewMode;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.statusViewMode;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.tagFilter;

/**
 * @type {!Array<!number>}
 * @export
 */
API.Client.DeviceFilter.prototype.tagFilterList;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.tagMode;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.userId;

/**
 * @type {!string}
 * @export
 */
API.Client.DeviceFilter.prototype.vwlGroup;

/** @enum {string} */
API.Client.DeviceFilter.DeviceTypeEnum = { 
  iPLAYER: 'iPLAYER',
  SPLAYER: 'SPLAYER',
  MPLAYER: 'MPLAYER',
  LPLAYER: 'LPLAYER',
  3rdPartyPLAYER: '3rdPartyPLAYER',
  SIGNAGE: 'SIGNAGE',
  SIG_CHILD: 'SIG_CHILD',
  APLAYER: 'APLAYER',
}
