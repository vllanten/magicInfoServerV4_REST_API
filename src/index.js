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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthResource', 'model/ContentApproveResource', 'model/ContentFilter', 'model/ContentScheduleItemResource', 'model/ContentScheduleResource', 'model/DeviceApproveResource', 'model/DeviceDisplayConfResource', 'model/DeviceDisplayConfSubResource', 'model/DeviceDisplayCustomLogoResource', 'model/DeviceDownloadServerResource', 'model/DeviceFilter', 'model/DeviceGeneralConfResource', 'model/DeviceLedCabinetResource', 'model/DeviceSecurityConfResource', 'model/DeviceSystemSetupConfResource', 'model/DeviceTimeClockConf', 'model/DeviceTimeHolidayResource', 'model/DeviceTimeTimerConf', 'model/DeviceTimeconfResource', 'model/EnvironmentNoticeFilter', 'model/EnvironmentPriorityFilter', 'model/Error', 'model/HashMapstringobject', 'model/Map', 'model/MessageResource', 'model/MessageScheduleFilter', 'model/MessageScheduleResource', 'model/PlaylistFilter', 'model/PlaylistItemResource', 'model/PlaylistResource', 'model/Property', 'model/Response', 'model/ResponseBody', 'model/ScheduleFilter', 'model/TagResource', 'model/Timestamp', 'model/TokenAuth', 'model/UserFilter', 'model/Xml', 'api/AuthApi', 'api/ContentControllerApi', 'api/ContentGroupControllerApi', 'api/ContentScheduleControllerApi', 'api/ContentScheduleGroupControllerApi', 'api/DeviceControllerApi', 'api/DeviceGroupControllerApi', 'api/EnvironmentControllerApi', 'api/MessageScheduleControllerApi', 'api/MessageScheduleGroupControllerApi', 'api/PlaylistControllerApi', 'api/PlaylistGroupControllerApi', 'api/UserControllerApi', 'api/UserGroupControllerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthResource'), require('./model/ContentApproveResource'), require('./model/ContentFilter'), require('./model/ContentScheduleItemResource'), require('./model/ContentScheduleResource'), require('./model/DeviceApproveResource'), require('./model/DeviceDisplayConfResource'), require('./model/DeviceDisplayConfSubResource'), require('./model/DeviceDisplayCustomLogoResource'), require('./model/DeviceDownloadServerResource'), require('./model/DeviceFilter'), require('./model/DeviceGeneralConfResource'), require('./model/DeviceLedCabinetResource'), require('./model/DeviceSecurityConfResource'), require('./model/DeviceSystemSetupConfResource'), require('./model/DeviceTimeClockConf'), require('./model/DeviceTimeHolidayResource'), require('./model/DeviceTimeTimerConf'), require('./model/DeviceTimeconfResource'), require('./model/EnvironmentNoticeFilter'), require('./model/EnvironmentPriorityFilter'), require('./model/Error'), require('./model/HashMapstringobject'), require('./model/Map'), require('./model/MessageResource'), require('./model/MessageScheduleFilter'), require('./model/MessageScheduleResource'), require('./model/PlaylistFilter'), require('./model/PlaylistItemResource'), require('./model/PlaylistResource'), require('./model/Property'), require('./model/Response'), require('./model/ResponseBody'), require('./model/ScheduleFilter'), require('./model/TagResource'), require('./model/Timestamp'), require('./model/TokenAuth'), require('./model/UserFilter'), require('./model/Xml'), require('./api/AuthApi'), require('./api/ContentControllerApi'), require('./api/ContentGroupControllerApi'), require('./api/ContentScheduleControllerApi'), require('./api/ContentScheduleGroupControllerApi'), require('./api/DeviceControllerApi'), require('./api/DeviceGroupControllerApi'), require('./api/EnvironmentControllerApi'), require('./api/MessageScheduleControllerApi'), require('./api/MessageScheduleGroupControllerApi'), require('./api/PlaylistControllerApi'), require('./api/PlaylistGroupControllerApi'), require('./api/UserControllerApi'), require('./api/UserGroupControllerApi'));
  }
}(function(ApiClient, AuthResource, ContentApproveResource, ContentFilter, ContentScheduleItemResource, ContentScheduleResource, DeviceApproveResource, DeviceDisplayConfResource, DeviceDisplayConfSubResource, DeviceDisplayCustomLogoResource, DeviceDownloadServerResource, DeviceFilter, DeviceGeneralConfResource, DeviceLedCabinetResource, DeviceSecurityConfResource, DeviceSystemSetupConfResource, DeviceTimeClockConf, DeviceTimeHolidayResource, DeviceTimeTimerConf, DeviceTimeconfResource, EnvironmentNoticeFilter, EnvironmentPriorityFilter, Error, HashMapstringobject, Map, MessageResource, MessageScheduleFilter, MessageScheduleResource, PlaylistFilter, PlaylistItemResource, PlaylistResource, Property, Response, ResponseBody, ScheduleFilter, TagResource, Timestamp, TokenAuth, UserFilter, Xml, AuthApi, ContentControllerApi, ContentGroupControllerApi, ContentScheduleControllerApi, ContentScheduleGroupControllerApi, DeviceControllerApi, DeviceGroupControllerApi, EnvironmentControllerApi, MessageScheduleControllerApi, MessageScheduleGroupControllerApi, PlaylistControllerApi, PlaylistGroupControllerApi, UserControllerApi, UserGroupControllerApi) {
  'use strict';

  /**
   * magic_info_api.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MagicInfoApi = require('index'); // See note below*.
   * var xxxSvc = new MagicInfoApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MagicInfoApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MagicInfoApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MagicInfoApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthResource model constructor.
     * @property {module:model/AuthResource}
     */
    AuthResource: AuthResource,
    /**
     * The ContentApproveResource model constructor.
     * @property {module:model/ContentApproveResource}
     */
    ContentApproveResource: ContentApproveResource,
    /**
     * The ContentFilter model constructor.
     * @property {module:model/ContentFilter}
     */
    ContentFilter: ContentFilter,
    /**
     * The ContentScheduleItemResource model constructor.
     * @property {module:model/ContentScheduleItemResource}
     */
    ContentScheduleItemResource: ContentScheduleItemResource,
    /**
     * The ContentScheduleResource model constructor.
     * @property {module:model/ContentScheduleResource}
     */
    ContentScheduleResource: ContentScheduleResource,
    /**
     * The DeviceApproveResource model constructor.
     * @property {module:model/DeviceApproveResource}
     */
    DeviceApproveResource: DeviceApproveResource,
    /**
     * The DeviceDisplayConfResource model constructor.
     * @property {module:model/DeviceDisplayConfResource}
     */
    DeviceDisplayConfResource: DeviceDisplayConfResource,
    /**
     * The DeviceDisplayConfSubResource model constructor.
     * @property {module:model/DeviceDisplayConfSubResource}
     */
    DeviceDisplayConfSubResource: DeviceDisplayConfSubResource,
    /**
     * The DeviceDisplayCustomLogoResource model constructor.
     * @property {module:model/DeviceDisplayCustomLogoResource}
     */
    DeviceDisplayCustomLogoResource: DeviceDisplayCustomLogoResource,
    /**
     * The DeviceDownloadServerResource model constructor.
     * @property {module:model/DeviceDownloadServerResource}
     */
    DeviceDownloadServerResource: DeviceDownloadServerResource,
    /**
     * The DeviceFilter model constructor.
     * @property {module:model/DeviceFilter}
     */
    DeviceFilter: DeviceFilter,
    /**
     * The DeviceGeneralConfResource model constructor.
     * @property {module:model/DeviceGeneralConfResource}
     */
    DeviceGeneralConfResource: DeviceGeneralConfResource,
    /**
     * The DeviceLedCabinetResource model constructor.
     * @property {module:model/DeviceLedCabinetResource}
     */
    DeviceLedCabinetResource: DeviceLedCabinetResource,
    /**
     * The DeviceSecurityConfResource model constructor.
     * @property {module:model/DeviceSecurityConfResource}
     */
    DeviceSecurityConfResource: DeviceSecurityConfResource,
    /**
     * The DeviceSystemSetupConfResource model constructor.
     * @property {module:model/DeviceSystemSetupConfResource}
     */
    DeviceSystemSetupConfResource: DeviceSystemSetupConfResource,
    /**
     * The DeviceTimeClockConf model constructor.
     * @property {module:model/DeviceTimeClockConf}
     */
    DeviceTimeClockConf: DeviceTimeClockConf,
    /**
     * The DeviceTimeHolidayResource model constructor.
     * @property {module:model/DeviceTimeHolidayResource}
     */
    DeviceTimeHolidayResource: DeviceTimeHolidayResource,
    /**
     * The DeviceTimeTimerConf model constructor.
     * @property {module:model/DeviceTimeTimerConf}
     */
    DeviceTimeTimerConf: DeviceTimeTimerConf,
    /**
     * The DeviceTimeconfResource model constructor.
     * @property {module:model/DeviceTimeconfResource}
     */
    DeviceTimeconfResource: DeviceTimeconfResource,
    /**
     * The EnvironmentNoticeFilter model constructor.
     * @property {module:model/EnvironmentNoticeFilter}
     */
    EnvironmentNoticeFilter: EnvironmentNoticeFilter,
    /**
     * The EnvironmentPriorityFilter model constructor.
     * @property {module:model/EnvironmentPriorityFilter}
     */
    EnvironmentPriorityFilter: EnvironmentPriorityFilter,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The HashMapstringobject model constructor.
     * @property {module:model/HashMapstringobject}
     */
    HashMapstringobject: HashMapstringobject,
    /**
     * The Map model constructor.
     * @property {module:model/Map}
     */
    Map: Map,
    /**
     * The MessageResource model constructor.
     * @property {module:model/MessageResource}
     */
    MessageResource: MessageResource,
    /**
     * The MessageScheduleFilter model constructor.
     * @property {module:model/MessageScheduleFilter}
     */
    MessageScheduleFilter: MessageScheduleFilter,
    /**
     * The MessageScheduleResource model constructor.
     * @property {module:model/MessageScheduleResource}
     */
    MessageScheduleResource: MessageScheduleResource,
    /**
     * The PlaylistFilter model constructor.
     * @property {module:model/PlaylistFilter}
     */
    PlaylistFilter: PlaylistFilter,
    /**
     * The PlaylistItemResource model constructor.
     * @property {module:model/PlaylistItemResource}
     */
    PlaylistItemResource: PlaylistItemResource,
    /**
     * The PlaylistResource model constructor.
     * @property {module:model/PlaylistResource}
     */
    PlaylistResource: PlaylistResource,
    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property: Property,
    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response: Response,
    /**
     * The ResponseBody model constructor.
     * @property {module:model/ResponseBody}
     */
    ResponseBody: ResponseBody,
    /**
     * The ScheduleFilter model constructor.
     * @property {module:model/ScheduleFilter}
     */
    ScheduleFilter: ScheduleFilter,
    /**
     * The TagResource model constructor.
     * @property {module:model/TagResource}
     */
    TagResource: TagResource,
    /**
     * The Timestamp model constructor.
     * @property {module:model/Timestamp}
     */
    Timestamp: Timestamp,
    /**
     * The TokenAuth model constructor.
     * @property {module:model/TokenAuth}
     */
    TokenAuth: TokenAuth,
    /**
     * The UserFilter model constructor.
     * @property {module:model/UserFilter}
     */
    UserFilter: UserFilter,
    /**
     * The Xml model constructor.
     * @property {module:model/Xml}
     */
    Xml: Xml,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The ContentControllerApi service constructor.
     * @property {module:api/ContentControllerApi}
     */
    ContentControllerApi: ContentControllerApi,
    /**
     * The ContentGroupControllerApi service constructor.
     * @property {module:api/ContentGroupControllerApi}
     */
    ContentGroupControllerApi: ContentGroupControllerApi,
    /**
     * The ContentScheduleControllerApi service constructor.
     * @property {module:api/ContentScheduleControllerApi}
     */
    ContentScheduleControllerApi: ContentScheduleControllerApi,
    /**
     * The ContentScheduleGroupControllerApi service constructor.
     * @property {module:api/ContentScheduleGroupControllerApi}
     */
    ContentScheduleGroupControllerApi: ContentScheduleGroupControllerApi,
    /**
     * The DeviceControllerApi service constructor.
     * @property {module:api/DeviceControllerApi}
     */
    DeviceControllerApi: DeviceControllerApi,
    /**
     * The DeviceGroupControllerApi service constructor.
     * @property {module:api/DeviceGroupControllerApi}
     */
    DeviceGroupControllerApi: DeviceGroupControllerApi,
    /**
     * The EnvironmentControllerApi service constructor.
     * @property {module:api/EnvironmentControllerApi}
     */
    EnvironmentControllerApi: EnvironmentControllerApi,
    /**
     * The MessageScheduleControllerApi service constructor.
     * @property {module:api/MessageScheduleControllerApi}
     */
    MessageScheduleControllerApi: MessageScheduleControllerApi,
    /**
     * The MessageScheduleGroupControllerApi service constructor.
     * @property {module:api/MessageScheduleGroupControllerApi}
     */
    MessageScheduleGroupControllerApi: MessageScheduleGroupControllerApi,
    /**
     * The PlaylistControllerApi service constructor.
     * @property {module:api/PlaylistControllerApi}
     */
    PlaylistControllerApi: PlaylistControllerApi,
    /**
     * The PlaylistGroupControllerApi service constructor.
     * @property {module:api/PlaylistGroupControllerApi}
     */
    PlaylistGroupControllerApi: PlaylistGroupControllerApi,
    /**
     * The UserControllerApi service constructor.
     * @property {module:api/UserControllerApi}
     */
    UserControllerApi: UserControllerApi,
    /**
     * The UserGroupControllerApi service constructor.
     * @property {module:api/UserGroupControllerApi}
     */
    UserGroupControllerApi: UserGroupControllerApi
  };

  return exports;
}));
