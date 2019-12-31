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
    describe('Kpi', function() {
      beforeEach(function() {
        instance = new SqlServer2017ReportingServicesRestApi.Kpi();
      });

      it('should create an instance of Kpi', function() {
        // TODO: update the code to test Kpi
        expect(instance).to.be.a(SqlServer2017ReportingServicesRestApi.Kpi);
      });

      it('should have the property valueFormat (base name: "ValueFormat")', function() {
        // TODO: update the code to test the property valueFormat
        expect(instance).to.have.property('valueFormat');
        // expect(instance.valueFormat).to.be(expectedValueLiteral);
      });

      it('should have the property visualization (base name: "Visualization")', function() {
        // TODO: update the code to test the property visualization
        expect(instance).to.have.property('visualization');
        // expect(instance.visualization).to.be(expectedValueLiteral);
      });

      it('should have the property drillthroughTarget (base name: "DrillthroughTarget")', function() {
        // TODO: update the code to test the property drillthroughTarget
        expect(instance).to.have.property('drillthroughTarget');
        // expect(instance.drillthroughTarget).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "Currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property values (base name: "Values")', function() {
        // TODO: update the code to test the property values
        expect(instance).to.have.property('values');
        // expect(instance.values).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "Data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

    });
  });

}));
