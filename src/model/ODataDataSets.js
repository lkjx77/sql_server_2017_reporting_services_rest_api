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
    define(['ApiClient', 'model/DataSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataSet'));
  } else {
    // Browser globals (root is window)
    if (!root.SqlServer2017ReportingServicesRestApi) {
      root.SqlServer2017ReportingServicesRestApi = {};
    }
    root.SqlServer2017ReportingServicesRestApi.ODataDataSets = factory(root.SqlServer2017ReportingServicesRestApi.ApiClient, root.SqlServer2017ReportingServicesRestApi.DataSet);
  }
}(this, function(ApiClient, DataSet) {
  'use strict';

  /**
   * The ODataDataSets model module.
   * @module model/ODataDataSets
   * @version 2.0
   */

  /**
   * Constructs a new <code>ODataDataSets</code>.
   * @alias module:model/ODataDataSets
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ODataDataSets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ODataDataSets} obj Optional instance to populate.
   * @return {module:model/ODataDataSets} The populated <code>ODataDataSets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('@odata.context'))
        obj.odataContext = ApiClient.convertToType(data['@odata.context'], 'String');
      if (data.hasOwnProperty('@odata.count'))
        obj.odataCount = ApiClient.convertToType(data['@odata.count'], 'Number');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], [DataSet]);
    }
    return obj;
  }

  /**
   * @member {String} odataContext
   */
  exports.prototype.odataContext = undefined;

  /**
   * @member {Number} odataCount
   */
  exports.prototype.odataCount = undefined;

  /**
   * @member {Array.<module:model/DataSet>} value
   */
  exports.prototype.value = undefined;

  return exports;

}));
