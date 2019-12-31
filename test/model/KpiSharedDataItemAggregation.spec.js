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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SqlServer2017ReportingServicesRestApi);
  }
}(this, function(expect, SqlServer2017ReportingServicesRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('KpiSharedDataItemAggregation', function() {
      beforeEach(function() {
        instance = SqlServer2017ReportingServicesRestApi.KpiSharedDataItemAggregation;
      });

      it('should create an instance of KpiSharedDataItemAggregation', function() {
        // TODO: update the code to test KpiSharedDataItemAggregation
        expect(instance).to.be.a('object');
      });

      it('should have the property none', function() {
        expect(instance).to.have.property('none');
        expect(instance.none).to.be("None");
      });

      it('should have the property first', function() {
        expect(instance).to.have.property('first');
        expect(instance.first).to.be("First");
      });

      it('should have the property last', function() {
        expect(instance).to.have.property('last');
        expect(instance.last).to.be("Last");
      });

      it('should have the property min', function() {
        expect(instance).to.have.property('min');
        expect(instance.min).to.be("Min");
      });

      it('should have the property max', function() {
        expect(instance).to.have.property('max');
        expect(instance.max).to.be("Max");
      });

      it('should have the property average', function() {
        expect(instance).to.have.property('average');
        expect(instance.average).to.be("Average");
      });

      it('should have the property sum', function() {
        expect(instance).to.have.property('sum');
        expect(instance.sum).to.be("Sum");
      });

    });
  });

}));