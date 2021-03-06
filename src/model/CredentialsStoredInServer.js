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
    root.SqlServer2017ReportingServicesRestApi.CredentialsStoredInServer = factory(root.SqlServer2017ReportingServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CredentialsStoredInServer model module.
   * @module model/CredentialsStoredInServer
   * @version 2.0
   */

  /**
   * Constructs a new <code>CredentialsStoredInServer</code>.
   * This object holds credentials for connections to an external data source. The object is stored on the Report Server for later retrieval and use. NOTE: This object represents a security risk as its properties can be seen in plain text over the HTTP protocol; HTTPS is recommended.
   * @alias module:model/CredentialsStoredInServer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CredentialsStoredInServer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CredentialsStoredInServer} obj Optional instance to populate.
   * @return {module:model/CredentialsStoredInServer} The populated <code>CredentialsStoredInServer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('UserName'))
        obj.userName = ApiClient.convertToType(data['UserName'], 'String');
      if (data.hasOwnProperty('Password'))
        obj.password = ApiClient.convertToType(data['Password'], 'String');
      if (data.hasOwnProperty('UseAsWindowsCredentials'))
        obj.useAsWindowsCredentials = ApiClient.convertToType(data['UseAsWindowsCredentials'], 'Boolean');
      if (data.hasOwnProperty('ImpersonateAuthenticatedUser'))
        obj.impersonateAuthenticatedUser = ApiClient.convertToType(data['ImpersonateAuthenticatedUser'], 'Boolean');
    }
    return obj;
  }

  /**
   * A string value that contains the user name to be used to connect to an external data source.
   * @member {String} userName
   */
  exports.prototype.userName = undefined;

  /**
   * A string value that contains the password to be used to connect to an external data source.
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * A boolean value that indicates whether the supplied credentials should be used as Windows credentials.
   * @member {Boolean} useAsWindowsCredentials
   */
  exports.prototype.useAsWindowsCredentials = undefined;

  /**
   * A boolean value that indicates whether the session should impersonate the user for the supplied credentials.
   * @member {Boolean} impersonateAuthenticatedUser
   */
  exports.prototype.impersonateAuthenticatedUser = undefined;

  return exports;

}));
