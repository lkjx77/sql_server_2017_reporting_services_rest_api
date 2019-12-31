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

  beforeEach(function() {
    instance = new SqlServer2017ReportingServicesRestApi.SubscriptionsApi();
  });

  describe('(package)', function() {
    describe('SubscriptionsApi', function() {
      describe('addSubscription', function() {
        it('should call addSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for addSubscription call and complete the assertions
          /*
          var subscription = new SqlServer2017ReportingServicesRestApi.Subscription();
          subscription.id = "01234567-89ab-cdef-0123-456789abcdef";
          subscription.owner = "";
          subscription.isDataDriven = false;
          subscription.description = "";
          subscription.report = "";
          subscription.isActive = false;
          subscription.eventType = "";
          subscription.scheduleDescription = "";
          subscription.lastRunTime = 2017-04-13T15:51:04Z;
          subscription.lastStatus = "";
          subscription.extensionSettings = new SqlServer2017ReportingServicesRestApi.ExtensionSettings();
          subscription.extensionSettings.extension = "";
          subscription.extensionSettings.parameterValues = new SqlServer2017ReportingServicesRestApi.ParameterValue();
          subscription.extensionSettings.parameterValues.name = "";
          subscription.extensionSettings.parameterValues.value = "";
          subscription.extensionSettings.parameterValues.isValueFieldReference = false;
          subscription.deliveryExtension = "";
          subscription.localizedDeliveryExtensionName = "";
          subscription.modifiedBy = "";
          subscription.modifiedDate = 2017-04-13T15:51:04Z;
          subscription.parameterValues = [new SqlServer2017ReportingServicesRestApi.ParameterValue()];
          subscription.parameterValues[0].name = "";
          subscription.parameterValues[0].value = "";
          subscription.parameterValues[0].isValueFieldReference = false;

          instance.addSubscription(subscription, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Subscription);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("01234567-89ab-cdef-0123-456789abcdef");
            expect(data.owner).to.be.a('string');
            expect(data.owner).to.be("");
            expect(data.isDataDriven).to.be.a('boolean');
            expect(data.isDataDriven).to.be(false);
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.report).to.be.a('string');
            expect(data.report).to.be("");
            expect(data.isActive).to.be.a('boolean');
            expect(data.isActive).to.be(false);
            expect(data.eventType).to.be.a('string');
            expect(data.eventType).to.be("");
            expect(data.scheduleDescription).to.be.a('string');
            expect(data.scheduleDescription).to.be("");
            expect(data.lastRunTime).to.be.a(Date);
            expect(data.lastRunTime).to.be(2017-04-13T15:51:04Z);
            expect(data.lastStatus).to.be.a('string');
            expect(data.lastStatus).to.be("");
            expect(data.extensionSettings).to.be.a(SqlServer2017ReportingServicesRestApi.ExtensionSettings);
                  expect(data.extensionSettings.extension).to.be.a('string');
              expect(data.extensionSettings.extension).to.be("");
              expect(data.extensionSettings.parameterValues).to.be.a(SqlServer2017ReportingServicesRestApi.ParameterValue);
                    expect(data.extensionSettings.parameterValues.name).to.be.a('string');
                expect(data.extensionSettings.parameterValues.name).to.be("");
                expect(data.extensionSettings.parameterValues.value).to.be.a('string');
                expect(data.extensionSettings.parameterValues.value).to.be("");
                expect(data.extensionSettings.parameterValues.isValueFieldReference).to.be.a('boolean');
                expect(data.extensionSettings.parameterValues.isValueFieldReference).to.be(false);
            expect(data.deliveryExtension).to.be.a('string');
            expect(data.deliveryExtension).to.be("");
            expect(data.localizedDeliveryExtensionName).to.be.a('string');
            expect(data.localizedDeliveryExtensionName).to.be("");
            expect(data.modifiedBy).to.be.a('string');
            expect(data.modifiedBy).to.be("");
            expect(data.modifiedDate).to.be.a(Date);
            expect(data.modifiedDate).to.be(2017-04-13T15:51:04Z);
            {
              let dataCtr = data.parameterValues;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.ParameterValue);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("");
                expect(data.isValueFieldReference).to.be.a('boolean');
                expect(data.isValueFieldReference).to.be(false);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteSubscription', function() {
        it('should call deleteSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteSubscription call
          /*
          var id = "id_example";

          instance.deleteSubscription(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('disableSubscription', function() {
        it('should call disableSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for disableSubscription call
          /*
          var id = "id_example";

          instance.disableSubscription(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('enableSubscription', function() {
        it('should call enableSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for enableSubscription call
          /*
          var id = "id_example";

          instance.enableSubscription(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('executeSubscription', function() {
        it('should call executeSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for executeSubscription call
          /*
          var id = "id_example";

          instance.executeSubscription(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSubscription', function() {
        it('should call getSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for getSubscription call and complete the assertions
          /*
          var id = "id_example";

          instance.getSubscription(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Subscription);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("01234567-89ab-cdef-0123-456789abcdef");
            expect(data.owner).to.be.a('string');
            expect(data.owner).to.be("");
            expect(data.isDataDriven).to.be.a('boolean');
            expect(data.isDataDriven).to.be(false);
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.report).to.be.a('string');
            expect(data.report).to.be("");
            expect(data.isActive).to.be.a('boolean');
            expect(data.isActive).to.be(false);
            expect(data.eventType).to.be.a('string');
            expect(data.eventType).to.be("");
            expect(data.scheduleDescription).to.be.a('string');
            expect(data.scheduleDescription).to.be("");
            expect(data.lastRunTime).to.be.a(Date);
            expect(data.lastRunTime).to.be(2017-04-13T15:51:04Z);
            expect(data.lastStatus).to.be.a('string');
            expect(data.lastStatus).to.be("");
            expect(data.extensionSettings).to.be.a(SqlServer2017ReportingServicesRestApi.ExtensionSettings);
                  expect(data.extensionSettings.extension).to.be.a('string');
              expect(data.extensionSettings.extension).to.be("");
              expect(data.extensionSettings.parameterValues).to.be.a(SqlServer2017ReportingServicesRestApi.ParameterValue);
                    expect(data.extensionSettings.parameterValues.name).to.be.a('string');
                expect(data.extensionSettings.parameterValues.name).to.be("");
                expect(data.extensionSettings.parameterValues.value).to.be.a('string');
                expect(data.extensionSettings.parameterValues.value).to.be("");
                expect(data.extensionSettings.parameterValues.isValueFieldReference).to.be.a('boolean');
                expect(data.extensionSettings.parameterValues.isValueFieldReference).to.be(false);
            expect(data.deliveryExtension).to.be.a('string');
            expect(data.deliveryExtension).to.be("");
            expect(data.localizedDeliveryExtensionName).to.be.a('string');
            expect(data.localizedDeliveryExtensionName).to.be("");
            expect(data.modifiedBy).to.be.a('string');
            expect(data.modifiedBy).to.be("");
            expect(data.modifiedDate).to.be.a(Date);
            expect(data.modifiedDate).to.be(2017-04-13T15:51:04Z);
            {
              let dataCtr = data.parameterValues;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.ParameterValue);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("");
                expect(data.isValueFieldReference).to.be.a('boolean');
                expect(data.isValueFieldReference).to.be(false);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSubscriptions', function() {
        it('should call getSubscriptions successfully', function(done) {
          // TODO: uncomment, update parameter values for getSubscriptions call and complete the assertions
          /*
          var opts = {};
          opts.top = 56;
          opts.skip = 56;
          opts.filter = "filter_example";
          opts.count = "count_example";
          opts.orderBy = "orderBy_example";
          opts.expand = "expand_example";
          opts.select = "select_example";

          instance.getSubscriptions(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Subscription);
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("01234567-89ab-cdef-0123-456789abcdef");
              expect(data.owner).to.be.a('string');
              expect(data.owner).to.be("");
              expect(data.isDataDriven).to.be.a('boolean');
              expect(data.isDataDriven).to.be(false);
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.report).to.be.a('string');
              expect(data.report).to.be("");
              expect(data.isActive).to.be.a('boolean');
              expect(data.isActive).to.be(false);
              expect(data.eventType).to.be.a('string');
              expect(data.eventType).to.be("");
              expect(data.scheduleDescription).to.be.a('string');
              expect(data.scheduleDescription).to.be("");
              expect(data.lastRunTime).to.be.a(Date);
              expect(data.lastRunTime).to.be(2017-04-13T15:51:04Z);
              expect(data.lastStatus).to.be.a('string');
              expect(data.lastStatus).to.be("");
              expect(data.extensionSettings).to.be.a(SqlServer2017ReportingServicesRestApi.ExtensionSettings);
                    expect(data.extensionSettings.extension).to.be.a('string');
                expect(data.extensionSettings.extension).to.be("");
                expect(data.extensionSettings.parameterValues).to.be.a(SqlServer2017ReportingServicesRestApi.ParameterValue);
                      expect(data.extensionSettings.parameterValues.name).to.be.a('string');
                  expect(data.extensionSettings.parameterValues.name).to.be("");
                  expect(data.extensionSettings.parameterValues.value).to.be.a('string');
                  expect(data.extensionSettings.parameterValues.value).to.be("");
                  expect(data.extensionSettings.parameterValues.isValueFieldReference).to.be.a('boolean');
                  expect(data.extensionSettings.parameterValues.isValueFieldReference).to.be(false);
              expect(data.deliveryExtension).to.be.a('string');
              expect(data.deliveryExtension).to.be("");
              expect(data.localizedDeliveryExtensionName).to.be.a('string');
              expect(data.localizedDeliveryExtensionName).to.be("");
              expect(data.modifiedBy).to.be.a('string');
              expect(data.modifiedBy).to.be("");
              expect(data.modifiedDate).to.be.a(Date);
              expect(data.modifiedDate).to.be(2017-04-13T15:51:04Z);
              {
                let dataCtr = data.parameterValues;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.ParameterValue);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.value).to.be.a('string');
                  expect(data.value).to.be("");
                  expect(data.isValueFieldReference).to.be.a('boolean');
                  expect(data.isValueFieldReference).to.be(false);
                }
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('setSubscription', function() {
        it('should call setSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for setSubscription call
          /*
          var id = "id_example";
          var subscription = new SqlServer2017ReportingServicesRestApi.Subscription();
          subscription.id = "01234567-89ab-cdef-0123-456789abcdef";
          subscription.owner = "";
          subscription.isDataDriven = false;
          subscription.description = "";
          subscription.report = "";
          subscription.isActive = false;
          subscription.eventType = "";
          subscription.scheduleDescription = "";
          subscription.lastRunTime = 2017-04-13T15:51:04Z;
          subscription.lastStatus = "";
          subscription.extensionSettings = new SqlServer2017ReportingServicesRestApi.ExtensionSettings();
          subscription.extensionSettings.extension = "";
          subscription.extensionSettings.parameterValues = new SqlServer2017ReportingServicesRestApi.ParameterValue();
          subscription.extensionSettings.parameterValues.name = "";
          subscription.extensionSettings.parameterValues.value = "";
          subscription.extensionSettings.parameterValues.isValueFieldReference = false;
          subscription.deliveryExtension = "";
          subscription.localizedDeliveryExtensionName = "";
          subscription.modifiedBy = "";
          subscription.modifiedDate = 2017-04-13T15:51:04Z;
          subscription.parameterValues = [new SqlServer2017ReportingServicesRestApi.ParameterValue()];
          subscription.parameterValues[0].name = "";
          subscription.parameterValues[0].value = "";
          subscription.parameterValues[0].isValueFieldReference = false;

          instance.setSubscription(id, subscription, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateSubscription', function() {
        it('should call updateSubscription successfully', function(done) {
          // TODO: uncomment, update parameter values for updateSubscription call
          /*
          var id = "id_example";
          var subscription = new SqlServer2017ReportingServicesRestApi.Subscription();
          subscription.id = "01234567-89ab-cdef-0123-456789abcdef";
          subscription.owner = "";
          subscription.isDataDriven = false;
          subscription.description = "";
          subscription.report = "";
          subscription.isActive = false;
          subscription.eventType = "";
          subscription.scheduleDescription = "";
          subscription.lastRunTime = 2017-04-13T15:51:04Z;
          subscription.lastStatus = "";
          subscription.extensionSettings = new SqlServer2017ReportingServicesRestApi.ExtensionSettings();
          subscription.extensionSettings.extension = "";
          subscription.extensionSettings.parameterValues = new SqlServer2017ReportingServicesRestApi.ParameterValue();
          subscription.extensionSettings.parameterValues.name = "";
          subscription.extensionSettings.parameterValues.value = "";
          subscription.extensionSettings.parameterValues.isValueFieldReference = false;
          subscription.deliveryExtension = "";
          subscription.localizedDeliveryExtensionName = "";
          subscription.modifiedBy = "";
          subscription.modifiedDate = 2017-04-13T15:51:04Z;
          subscription.parameterValues = [new SqlServer2017ReportingServicesRestApi.ParameterValue()];
          subscription.parameterValues[0].name = "";
          subscription.parameterValues[0].value = "";
          subscription.parameterValues[0].isValueFieldReference = false;

          instance.updateSubscription(id, subscription, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
