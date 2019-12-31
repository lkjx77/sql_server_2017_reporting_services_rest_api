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
    describe('DataSource', function() {
      beforeEach(function() {
        instance = new SqlServer2017ReportingServicesRestApi.DataSource();
      });

      it('should create an instance of DataSource', function() {
        // TODO: update the code to test DataSource
        expect(instance).to.be.a(SqlServer2017ReportingServicesRestApi.DataSource);
      });

      it('should have the property isEnabled (base name: "IsEnabled")', function() {
        // TODO: update the code to test the property isEnabled
        expect(instance).to.have.property('isEnabled');
        // expect(instance.isEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property connectionString (base name: "ConnectionString")', function() {
        // TODO: update the code to test the property connectionString
        expect(instance).to.have.property('connectionString');
        // expect(instance.connectionString).to.be(expectedValueLiteral);
      });

      it('should have the property dataSourceType (base name: "DataSourceType")', function() {
        // TODO: update the code to test the property dataSourceType
        expect(instance).to.have.property('dataSourceType');
        // expect(instance.dataSourceType).to.be(expectedValueLiteral);
      });

      it('should have the property isOriginalConnectionStringExpressionBased (base name: "IsOriginalConnectionStringExpressionBased")', function() {
        // TODO: update the code to test the property isOriginalConnectionStringExpressionBased
        expect(instance).to.have.property('isOriginalConnectionStringExpressionBased');
        // expect(instance.isOriginalConnectionStringExpressionBased).to.be(expectedValueLiteral);
      });

      it('should have the property isConnectionStringOverridden (base name: "IsConnectionStringOverridden")', function() {
        // TODO: update the code to test the property isConnectionStringOverridden
        expect(instance).to.have.property('isConnectionStringOverridden');
        // expect(instance.isConnectionStringOverridden).to.be(expectedValueLiteral);
      });

      it('should have the property credentialsByUser (base name: "CredentialsByUser")', function() {
        // TODO: update the code to test the property credentialsByUser
        expect(instance).to.have.property('credentialsByUser');
        // expect(instance.credentialsByUser).to.be(expectedValueLiteral);
      });

      it('should have the property credentialsInServer (base name: "CredentialsInServer")', function() {
        // TODO: update the code to test the property credentialsInServer
        expect(instance).to.have.property('credentialsInServer');
        // expect(instance.credentialsInServer).to.be(expectedValueLiteral);
      });

      it('should have the property isReference (base name: "IsReference")', function() {
        // TODO: update the code to test the property isReference
        expect(instance).to.have.property('isReference');
        // expect(instance.isReference).to.be(expectedValueLiteral);
      });

      it('should have the property subscriptions (base name: "Subscriptions")', function() {
        // TODO: update the code to test the property subscriptions
        expect(instance).to.have.property('subscriptions');
        // expect(instance.subscriptions).to.be(expectedValueLiteral);
      });

    });
  });

}));
