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
    define(['ApiClient', 'model/BulkOperationsResult', 'model/CatalogItem', 'model/DeleteItemsRequest', 'model/ItemPolicy', 'model/MoveItemsRequest', 'model/ODataCatalogItems', 'model/ODataProperties', 'model/ODataProperties1', 'model/OdataError', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BulkOperationsResult'), require('../model/CatalogItem'), require('../model/DeleteItemsRequest'), require('../model/ItemPolicy'), require('../model/MoveItemsRequest'), require('../model/ODataCatalogItems'), require('../model/ODataProperties'), require('../model/ODataProperties1'), require('../model/OdataError'), require('../model/Property'));
  } else {
    // Browser globals (root is window)
    if (!root.SqlServer2017ReportingServicesRestApi) {
      root.SqlServer2017ReportingServicesRestApi = {};
    }
    root.SqlServer2017ReportingServicesRestApi.CatalogItemsApi = factory(root.SqlServer2017ReportingServicesRestApi.ApiClient, root.SqlServer2017ReportingServicesRestApi.BulkOperationsResult, root.SqlServer2017ReportingServicesRestApi.CatalogItem, root.SqlServer2017ReportingServicesRestApi.DeleteItemsRequest, root.SqlServer2017ReportingServicesRestApi.ItemPolicy, root.SqlServer2017ReportingServicesRestApi.MoveItemsRequest, root.SqlServer2017ReportingServicesRestApi.ODataCatalogItems, root.SqlServer2017ReportingServicesRestApi.ODataProperties, root.SqlServer2017ReportingServicesRestApi.ODataProperties1, root.SqlServer2017ReportingServicesRestApi.OdataError, root.SqlServer2017ReportingServicesRestApi.Property);
  }
}(this, function(ApiClient, BulkOperationsResult, CatalogItem, DeleteItemsRequest, ItemPolicy, MoveItemsRequest, ODataCatalogItems, ODataProperties, ODataProperties1, OdataError, Property) {
  'use strict';

  /**
   * CatalogItems service.
   * @module api/CatalogItemsApi
   * @version 2.0
   */

  /**
   * Constructs a new CatalogItemsApi. 
   * @alias module:api/CatalogItemsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCatalogItem operation.
     * @callback module:api/CatalogItemsApi~addCatalogItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new CatalogItem.
     * @param {module:model/CatalogItem} catalogItem The definition of the new CatalogItem.
     * @param {module:api/CatalogItemsApi~addCatalogItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogItem}
     */
    this.addCatalogItem = function(catalogItem, callback) {
      var postBody = catalogItem;

      // verify the required parameter 'catalogItem' is set
      if (catalogItem === undefined || catalogItem === null) {
        throw new Error("Missing the required parameter 'catalogItem' when calling addCatalogItem");
      }


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
      var returnType = CatalogItem;

      return this.apiClient.callApi(
        '/CatalogItems', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCatalogItem operation.
     * @callback module:api/CatalogItemsApi~deleteCatalogItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified CatalogItem.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {module:api/CatalogItemsApi~deleteCatalogItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCatalogItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCatalogItem");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/CatalogItems({Id})', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCatalogItems operation.
     * @callback module:api/CatalogItemsApi~deleteCatalogItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkOperationsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the given list of items
     * @param {module:model/DeleteItemsRequest} deleteItemsRequest List of catalog item paths to delete.
     * @param {module:api/CatalogItemsApi~deleteCatalogItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkOperationsResult}
     */
    this.deleteCatalogItems = function(deleteItemsRequest, callback) {
      var postBody = deleteItemsRequest;

      // verify the required parameter 'deleteItemsRequest' is set
      if (deleteItemsRequest === undefined || deleteItemsRequest === null) {
        throw new Error("Missing the required parameter 'deleteItemsRequest' when calling deleteCatalogItems");
      }


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
      var returnType = BulkOperationsResult;

      return this.apiClient.callApi(
        '/CatalogItems/Model.DeleteItems', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogItem operation.
     * @callback module:api/CatalogItemsApi~getCatalogItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a CatalogItem specified by the Id.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {module:api/CatalogItemsApi~getCatalogItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogItem}
     */
    this.getCatalogItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCatalogItem");
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
      var returnType = CatalogItem;

      return this.apiClient.callApi(
        '/CatalogItems({Id})', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogItemContent operation.
     * @callback module:api/CatalogItemsApi~getCatalogItemContentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the content of the specified CatalogItem specified by the Id.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {module:api/CatalogItemsApi~getCatalogItemContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.getCatalogItemContent = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCatalogItemContent");
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
      var accepts = ['application/octet-stream'];
      var returnType = File;

      return this.apiClient.callApi(
        '/CatalogItems({Id})/Content/$value', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogItemPolicies operation.
     * @callback module:api/CatalogItemsApi~getCatalogItemPoliciesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ItemPolicy>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets ItemPolicies associated with the specified CatalogItem.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {module:api/CatalogItemsApi~getCatalogItemPoliciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ItemPolicy>}
     */
    this.getCatalogItemPolicies = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCatalogItemPolicies");
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
      var returnType = [ItemPolicy];

      return this.apiClient.callApi(
        '/CatalogItems({Id})/Policies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogItemProperties operation.
     * @callback module:api/CatalogItemsApi~getCatalogItemPropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ODataProperties} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the specified Properties for the CatalogItem (takes list of Property names to retrieve the values)
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.properties Comma-separated list of Property names to be returned.
     * @param {module:api/CatalogItemsApi~getCatalogItemPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ODataProperties}
     */
    this.getCatalogItemProperties = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCatalogItemProperties");
      }


      var pathParams = {
        'Id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'Properties': {
          value: opts['properties'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ODataProperties;

      return this.apiClient.callApi(
        '/CatalogItems({Id})/Properties', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogItemRoles operation.
     * @callback module:api/CatalogItemsApi~getCatalogItemRolesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ODataProperties1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the list of available Roles for the CatalogItem
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {module:api/CatalogItemsApi~getCatalogItemRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ODataProperties1}
     */
    this.getCatalogItemRoles = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCatalogItemRoles");
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
      var returnType = ODataProperties1;

      return this.apiClient.callApi(
        '/CatalogItems({Id})/Roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCatalogItems operation.
     * @callback module:api/CatalogItemsApi~getCatalogItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ODataCatalogItems} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an array of CatalogItems.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.top Show only the first n items, see [OData Paging - Top](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html#_Toc445374630)
     * @param {Number} opts.skip Skip the first n items, see [OData Paging - Skip](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html#_Toc445374631)
     * @param {String} opts.filter Filter items by property values, see [OData Filtering](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html#_Toc445374625)
     * @param {String} opts.count Include count of items, see [OData Count](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html#_Toc445374632)
     * @param {String} opts.orderBy Order items by property values, see [OData Sorting](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html#_Toc445374629)
     * @param {String} opts.select Select properties to be returned, see [OData Select](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html#_Toc445374620)
     * @param {module:api/CatalogItemsApi~getCatalogItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ODataCatalogItems}
     */
    this.getCatalogItems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '$top': opts['top'],
        '$skip': opts['skip'],
        '$filter': opts['filter'],
        '$count': opts['count'],
        '$orderBy': opts['orderBy'],
        '$select': opts['select'],
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
      var returnType = ODataCatalogItems;

      return this.apiClient.callApi(
        '/CatalogItems', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the moveCatalogItems operation.
     * @callback module:api/CatalogItemsApi~moveCatalogItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkOperationsResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Moves given list of items to target folder.
     * @param {module:model/MoveItemsRequest} moveItemsRequest List of catalog item paths and target folder.
     * @param {module:api/CatalogItemsApi~moveCatalogItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkOperationsResult}
     */
    this.moveCatalogItems = function(moveItemsRequest, callback) {
      var postBody = moveItemsRequest;

      // verify the required parameter 'moveItemsRequest' is set
      if (moveItemsRequest === undefined || moveItemsRequest === null) {
        throw new Error("Missing the required parameter 'moveItemsRequest' when calling moveCatalogItems");
      }


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
      var returnType = BulkOperationsResult;

      return this.apiClient.callApi(
        '/CatalogItems/Model.MoveItems', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setCatalogItemPolicies operation.
     * @callback module:api/CatalogItemsApi~setCatalogItemPoliciesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replaces ItemPolicies associated with the specified CatalogItem.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {Array.<module:model/ItemPolicy>} catalogItem The ItemPolicy definitions that will be replaced.
     * @param {module:api/CatalogItemsApi~setCatalogItemPoliciesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setCatalogItemPolicies = function(id, catalogItem, callback) {
      var postBody = catalogItem;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setCatalogItemPolicies");
      }

      // verify the required parameter 'catalogItem' is set
      if (catalogItem === undefined || catalogItem === null) {
        throw new Error("Missing the required parameter 'catalogItem' when calling setCatalogItemPolicies");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/CatalogItems({Id})/Policies', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCatalogItem operation.
     * @callback module:api/CatalogItemsApi~updateCatalogItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified CatalogItem using the provided definition.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {module:model/CatalogItem} catalogItem Definition of the CatalogItem that updates the current item on the server. The type for the defintion can be any of the supported CatalogItemTypes. It is only necessary to include properties to be updated. All other property values will be left unchanged.
     * @param {module:api/CatalogItemsApi~updateCatalogItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCatalogItem = function(id, catalogItem, callback) {
      var postBody = catalogItem;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCatalogItem");
      }

      // verify the required parameter 'catalogItem' is set
      if (catalogItem === undefined || catalogItem === null) {
        throw new Error("Missing the required parameter 'catalogItem' when calling updateCatalogItem");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/CatalogItems({Id})', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCatalogItemProperties operation.
     * @callback module:api/CatalogItemsApi~updateCatalogItemPropertiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a CatalogItem's Properties with the list of given properties.
     * @param {String} id The key (GUID or path) that uniquely identifies the object. GUID example: 01234567-89ab-cdef-0123-456789abcdef path example: path='/folder1/folder2/item' If the path itself contains single quote, it should be escaped - add another single quote.
     * @param {Array.<module:model/Property>} properties The Properties that will be updated. It is only necessary to include properties to be updated. All other property values will be left unchanged.
     * @param {module:api/CatalogItemsApi~updateCatalogItemPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCatalogItemProperties = function(id, properties, callback) {
      var postBody = properties;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCatalogItemProperties");
      }

      // verify the required parameter 'properties' is set
      if (properties === undefined || properties === null) {
        throw new Error("Missing the required parameter 'properties' when calling updateCatalogItemProperties");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/CatalogItems({Id})/Properties', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
