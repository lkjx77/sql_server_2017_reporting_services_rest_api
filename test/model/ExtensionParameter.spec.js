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
    describe('ExtensionParameter', function() {
      beforeEach(function() {
        instance = new SqlServer2017ReportingServicesRestApi.ExtensionParameter();
      });

      it('should create an instance of ExtensionParameter', function() {
        // TODO: update the code to test ExtensionParameter
        expect(instance).to.be.a(SqlServer2017ReportingServicesRestApi.ExtensionParameter);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "DisplayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property required (base name: "Required")', function() {
        // TODO: update the code to test the property required
        expect(instance).to.have.property('required');
        // expect(instance.required).to.be(expectedValueLiteral);
      });

      it('should have the property readOnly (base name: "ReadOnly")', function() {
        // TODO: update the code to test the property readOnly
        expect(instance).to.have.property('readOnly');
        // expect(instance.readOnly).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "Value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "Error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

      it('should have the property encrypted (base name: "Encrypted")', function() {
        // TODO: update the code to test the property encrypted
        expect(instance).to.have.property('encrypted');
        // expect(instance.encrypted).to.be(expectedValueLiteral);
      });

      it('should have the property isPassword (base name: "IsPassword")', function() {
        // TODO: update the code to test the property isPassword
        expect(instance).to.have.property('isPassword');
        // expect(instance.isPassword).to.be(expectedValueLiteral);
      });

      it('should have the property validValues (base name: "ValidValues")', function() {
        // TODO: update the code to test the property validValues
        expect(instance).to.have.property('validValues');
        // expect(instance.validValues).to.be(expectedValueLiteral);
      });

      it('should have the property validValuesIsNull (base name: "ValidValuesIsNull")', function() {
        // TODO: update the code to test the property validValuesIsNull
        expect(instance).to.have.property('validValuesIsNull');
        // expect(instance.validValuesIsNull).to.be(expectedValueLiteral);
      });

    });
  });

}));