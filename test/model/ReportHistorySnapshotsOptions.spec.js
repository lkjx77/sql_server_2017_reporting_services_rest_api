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
    describe('ReportHistorySnapshotsOptions', function() {
      beforeEach(function() {
        instance = new SqlServer2017ReportingServicesRestApi.ReportHistorySnapshotsOptions();
      });

      it('should create an instance of ReportHistorySnapshotsOptions', function() {
        // TODO: update the code to test ReportHistorySnapshotsOptions
        expect(instance).to.be.a(SqlServer2017ReportingServicesRestApi.ReportHistorySnapshotsOptions);
      });

      it('should have the property manualCreationEnabled (base name: "ManualCreationEnabled")', function() {
        // TODO: update the code to test the property manualCreationEnabled
        expect(instance).to.have.property('manualCreationEnabled');
        // expect(instance.manualCreationEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property keepExecutionSnapshots (base name: "KeepExecutionSnapshots")', function() {
        // TODO: update the code to test the property keepExecutionSnapshots
        expect(instance).to.have.property('keepExecutionSnapshots');
        // expect(instance.keepExecutionSnapshots).to.be(expectedValueLiteral);
      });

      it('should have the property useDefaultSystemLimit (base name: "UseDefaultSystemLimit")', function() {
        // TODO: update the code to test the property useDefaultSystemLimit
        expect(instance).to.have.property('useDefaultSystemLimit');
        // expect(instance.useDefaultSystemLimit).to.be(expectedValueLiteral);
      });

      it('should have the property scopedLimit (base name: "ScopedLimit")', function() {
        // TODO: update the code to test the property scopedLimit
        expect(instance).to.have.property('scopedLimit');
        // expect(instance.scopedLimit).to.be(expectedValueLiteral);
      });

      it('should have the property systemLimit (base name: "SystemLimit")', function() {
        // TODO: update the code to test the property systemLimit
        expect(instance).to.have.property('systemLimit');
        // expect(instance.systemLimit).to.be(expectedValueLiteral);
      });

      it('should have the property schedule (base name: "Schedule")', function() {
        // TODO: update the code to test the property schedule
        expect(instance).to.have.property('schedule');
        // expect(instance.schedule).to.be(expectedValueLiteral);
      });

    });
  });

}));
