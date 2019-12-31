/*
 * SQL Server 2017 Reporting Services REST API
 * The SQL Server 2017 Reporting Services REST API provides programmatic access to the report server catalog.  For example, basic CRUD operations can be done on folders, reports, KPIs, data sources, datasets, refresh plans, subscriptions, etc.     The REST API can also be used to provide more advanced functionality, such as: * Navigate the folder hierarchy * Discover the contents of a folder * Download a report definition * Modify default report parameters * Change or execute a refresh plan * A whole lot more  The REST API is a RESTful successor to the legacy [SOAP API](https://msdn.microsoft.com/library/reportservice2010.reportingservice2010.aspx).  Happy coding!  __API samples:__ https://github.com/Microsoft/Reporting-Services  __Developer documentation:__ https://docs.microsoft.com/sql/reporting-services/reporting-services-developer-documentation  __Team Blog:__ https://blogs.msdn.microsoft.com/sqlrsteamblog  __Support forums:__ https://social.msdn.microsoft.com/Forums/en-US/home?forum=sqlreportingservices 
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DailyRecurrence', 'model/MinuteRecurrence', 'model/MonthlyDOWRecurrence', 'model/MonthlyRecurrence', 'model/WeeklyRecurrence'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DailyRecurrence'), require('./MinuteRecurrence'), require('./MonthlyDOWRecurrence'), require('./MonthlyRecurrence'), require('./WeeklyRecurrence'));
  } else {
    // Browser globals (root is window)
    if (!root.SqlServer2017ReportingServicesRestApi) {
      root.SqlServer2017ReportingServicesRestApi = {};
    }
    root.SqlServer2017ReportingServicesRestApi.ScheduleRecurrence = factory(root.SqlServer2017ReportingServicesRestApi.ApiClient, root.SqlServer2017ReportingServicesRestApi.DailyRecurrence, root.SqlServer2017ReportingServicesRestApi.MinuteRecurrence, root.SqlServer2017ReportingServicesRestApi.MonthlyDOWRecurrence, root.SqlServer2017ReportingServicesRestApi.MonthlyRecurrence, root.SqlServer2017ReportingServicesRestApi.WeeklyRecurrence);
  }
}(this, function(ApiClient, DailyRecurrence, MinuteRecurrence, MonthlyDOWRecurrence, MonthlyRecurrence, WeeklyRecurrence) {
  'use strict';

  /**
   * The ScheduleRecurrence model module.
   * @module model/ScheduleRecurrence
   * @version 2.0
   */

  /**
   * Constructs a new <code>ScheduleRecurrence</code>.
   * An object that defines the recurrence of a schedule. When defining the recurrence, only one of the recurrence types can be set.
   * @alias module:model/ScheduleRecurrence
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScheduleRecurrence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduleRecurrence} obj Optional instance to populate.
   * @return {module:model/ScheduleRecurrence} The populated <code>ScheduleRecurrence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('MinuteRecurrence'))
        obj.minuteRecurrence = MinuteRecurrence.constructFromObject(data['MinuteRecurrence']);
      if (data.hasOwnProperty('DailyRecurrence'))
        obj.dailyRecurrence = DailyRecurrence.constructFromObject(data['DailyRecurrence']);
      if (data.hasOwnProperty('WeeklyRecurrence'))
        obj.weeklyRecurrence = WeeklyRecurrence.constructFromObject(data['WeeklyRecurrence']);
      if (data.hasOwnProperty('MonthlyRecurrence'))
        obj.monthlyRecurrence = MonthlyRecurrence.constructFromObject(data['MonthlyRecurrence']);
      if (data.hasOwnProperty('MonthlyDOWRecurrence'))
        obj.monthlyDOWRecurrence = MonthlyDOWRecurrence.constructFromObject(data['MonthlyDOWRecurrence']);
    }
    return obj;
  }

  /**
   * @member {module:model/MinuteRecurrence} minuteRecurrence
   */
  exports.prototype.minuteRecurrence = undefined;

  /**
   * @member {module:model/DailyRecurrence} dailyRecurrence
   */
  exports.prototype.dailyRecurrence = undefined;

  /**
   * @member {module:model/WeeklyRecurrence} weeklyRecurrence
   */
  exports.prototype.weeklyRecurrence = undefined;

  /**
   * @member {module:model/MonthlyRecurrence} monthlyRecurrence
   */
  exports.prototype.monthlyRecurrence = undefined;

  /**
   * @member {module:model/MonthlyDOWRecurrence} monthlyDOWRecurrence
   */
  exports.prototype.monthlyDOWRecurrence = undefined;

  return exports;

}));