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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SqlServer2017ReportingServicesRestApi) {
      root.SqlServer2017ReportingServicesRestApi = {};
    }
    root.SqlServer2017ReportingServicesRestApi.DataSourceCheckResult = factory(root.SqlServer2017ReportingServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DataSourceCheckResult model module.
   * @module model/DataSourceCheckResult
   * @version 2.0
   */

  /**
   * Constructs a new <code>DataSourceCheckResult</code>.
   * Represents the result of testing a DataSource connection
   * @alias module:model/DataSourceCheckResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DataSourceCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSourceCheckResult} obj Optional instance to populate.
   * @return {module:model/DataSourceCheckResult} The populated <code>DataSourceCheckResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('IsSuccessful'))
        obj.isSuccessful = ApiClient.convertToType(data['IsSuccessful'], 'Boolean');
      if (data.hasOwnProperty('ErrorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['ErrorMessage'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} isSuccessful
   */
  exports.prototype.isSuccessful = undefined;

  /**
   * @member {String} errorMessage
   */
  exports.prototype.errorMessage = undefined;

  return exports;

}));