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
    define(['ApiClient', 'model/DaysOfWeekSelector', 'model/MonthsOfYearSelector', 'model/WeekNumberEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DaysOfWeekSelector'), require('./MonthsOfYearSelector'), require('./WeekNumberEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.SqlServer2017ReportingServicesRestApi) {
      root.SqlServer2017ReportingServicesRestApi = {};
    }
    root.SqlServer2017ReportingServicesRestApi.MonthlyDOWRecurrence = factory(root.SqlServer2017ReportingServicesRestApi.ApiClient, root.SqlServer2017ReportingServicesRestApi.DaysOfWeekSelector, root.SqlServer2017ReportingServicesRestApi.MonthsOfYearSelector, root.SqlServer2017ReportingServicesRestApi.WeekNumberEnum);
  }
}(this, function(ApiClient, DaysOfWeekSelector, MonthsOfYearSelector, WeekNumberEnum) {
  'use strict';

  /**
   * The MonthlyDOWRecurrence model module.
   * @module model/MonthlyDOWRecurrence
   * @version 2.0
   */

  /**
   * Constructs a new <code>MonthlyDOWRecurrence</code>.
   * Represents the dates on which a scheduled report runs, typically by month, week, and day of the week.
   * @alias module:model/MonthlyDOWRecurrence
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MonthlyDOWRecurrence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonthlyDOWRecurrence} obj Optional instance to populate.
   * @return {module:model/MonthlyDOWRecurrence} The populated <code>MonthlyDOWRecurrence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('WhichWeek'))
        obj.whichWeek = WeekNumberEnum.constructFromObject(data['WhichWeek']);
      if (data.hasOwnProperty('WhichWeekSpecified'))
        obj.whichWeekSpecified = ApiClient.convertToType(data['WhichWeekSpecified'], 'Boolean');
      if (data.hasOwnProperty('DaysOfWeek'))
        obj.daysOfWeek = DaysOfWeekSelector.constructFromObject(data['DaysOfWeek']);
      if (data.hasOwnProperty('MonthsOfYear'))
        obj.monthsOfYear = MonthsOfYearSelector.constructFromObject(data['MonthsOfYear']);
    }
    return obj;
  }

  /**
   * @member {module:model/WeekNumberEnum} whichWeek
   */
  exports.prototype.whichWeek = undefined;

  /**
   * Specifies whether week is specified
   * @member {Boolean} whichWeekSpecified
   */
  exports.prototype.whichWeekSpecified = undefined;

  /**
   * @member {module:model/DaysOfWeekSelector} daysOfWeek
   */
  exports.prototype.daysOfWeek = undefined;

  /**
   * @member {module:model/MonthsOfYearSelector} monthsOfYear
   */
  exports.prototype.monthsOfYear = undefined;

  return exports;

}));
