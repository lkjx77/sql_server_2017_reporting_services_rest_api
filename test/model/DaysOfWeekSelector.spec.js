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
    describe('DaysOfWeekSelector', function() {
      beforeEach(function() {
        instance = new SqlServer2017ReportingServicesRestApi.DaysOfWeekSelector();
      });

      it('should create an instance of DaysOfWeekSelector', function() {
        // TODO: update the code to test DaysOfWeekSelector
        expect(instance).to.be.a(SqlServer2017ReportingServicesRestApi.DaysOfWeekSelector);
      });

      it('should have the property sunday (base name: "Sunday")', function() {
        // TODO: update the code to test the property sunday
        expect(instance).to.have.property('sunday');
        // expect(instance.sunday).to.be(expectedValueLiteral);
      });

      it('should have the property monday (base name: "Monday")', function() {
        // TODO: update the code to test the property monday
        expect(instance).to.have.property('monday');
        // expect(instance.monday).to.be(expectedValueLiteral);
      });

      it('should have the property tuesday (base name: "Tuesday")', function() {
        // TODO: update the code to test the property tuesday
        expect(instance).to.have.property('tuesday');
        // expect(instance.tuesday).to.be(expectedValueLiteral);
      });

      it('should have the property wednesday (base name: "Wednesday")', function() {
        // TODO: update the code to test the property wednesday
        expect(instance).to.have.property('wednesday');
        // expect(instance.wednesday).to.be(expectedValueLiteral);
      });

      it('should have the property thursday (base name: "Thursday")', function() {
        // TODO: update the code to test the property thursday
        expect(instance).to.have.property('thursday');
        // expect(instance.thursday).to.be(expectedValueLiteral);
      });

      it('should have the property friday (base name: "Friday")', function() {
        // TODO: update the code to test the property friday
        expect(instance).to.have.property('friday');
        // expect(instance.friday).to.be(expectedValueLiteral);
      });

      it('should have the property saturday (base name: "Saturday")', function() {
        // TODO: update the code to test the property saturday
        expect(instance).to.have.property('saturday');
        // expect(instance.saturday).to.be(expectedValueLiteral);
      });

    });
  });

}));