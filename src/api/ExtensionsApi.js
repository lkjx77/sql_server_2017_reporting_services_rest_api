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
    define(['ApiClient', 'model/Extension', 'model/ExtensionParameter', 'model/ExtensionSettings', 'model/OdataError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Extension'), require('../model/ExtensionParameter'), require('../model/ExtensionSettings'), require('../model/OdataError'));
  } else {
    // Browser globals (root is window)
    if (!root.SqlServer2017ReportingServicesRestApi) {
      root.SqlServer2017ReportingServicesRestApi = {};
    }
    root.SqlServer2017ReportingServicesRestApi.ExtensionsApi = factory(root.SqlServer2017ReportingServicesRestApi.ApiClient, root.SqlServer2017ReportingServicesRestApi.Extension, root.SqlServer2017ReportingServicesRestApi.ExtensionParameter, root.SqlServer2017ReportingServicesRestApi.ExtensionSettings, root.SqlServer2017ReportingServicesRestApi.OdataError);
  }
}(this, function(ApiClient, Extension, ExtensionParameter, ExtensionSettings, OdataError) {
  'use strict';

  /**
   * Extensions service.
   * @module api/ExtensionsApi
   * @version 2.0
   */

  /**
   * Constructs a new ExtensionsApi. 
   * @alias module:api/ExtensionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getExtensionParameters operation.
     * @callback module:api/ExtensionsApi~getExtensionParametersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ExtensionParameter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the ExtensionParameter list for given extension.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {module:api/ExtensionsApi~getExtensionParametersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ExtensionParameter>}
     */
    this.getExtensionParameters = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getExtensionParameters");
      }


      var pathParams = {
        'Id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ExtensionParameter];

      return this.apiClient.callApi(
        '/Extensions({Id})/Parameters', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExtensions operation.
     * @callback module:api/ExtensionsApi~getExtensionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Extension>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retreives all Extension items.
     * @param {module:api/ExtensionsApi~getExtensionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Extension>}
     */
    this.getExtensions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Extension];

      return this.apiClient.callApi(
        '/Extensions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateExtensionParameters operation.
     * @callback module:api/ExtensionsApi~validateExtensionParametersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ExtensionParameter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validates extension parameters and returns collection of ExtensionParameter.
     * @param {Object} opts Optional parameters
     * @param {module:model/ExtensionSettings} opts.extensionSettings 
     * @param {module:api/ExtensionsApi~validateExtensionParametersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ExtensionParameter>}
     */
    this.validateExtensionParameters = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['extensionSettings'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ExtensionParameter];

      return this.apiClient.callApi(
        '/Extensions/Model.ValidateExtensionSettings', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));