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
    instance = new SqlServer2017ReportingServicesRestApi.KpisApi();
  });

  describe('(package)', function() {
    describe('KpisApi', function() {
      describe('addKpi', function() {
        it('should call addKpi successfully', function(done) {
          // TODO: uncomment, update parameter values for addKpi call and complete the assertions
          /*
          var kpi = new SqlServer2017ReportingServicesRestApi.Kpi();
          kpi.id = "01234567-89ab-cdef-0123-456789abcdef";
          kpi.name = "";
          kpi.description = "";
          kpi.path = "";
          kpi.type = new SqlServer2017ReportingServicesRestApi.CatalogItemType();
          kpi.hidden = false;
          kpi.size = "0";
          kpi.modifiedBy = "";
          kpi.modifiedDate = 2017-04-13T15:51:04Z;
          kpi.createdBy = "";
          kpi.createdDate = 2017-04-13T15:51:04Z;
          kpi.parentFolderId = "01234567-89ab-cdef-0123-456789abcdef";
          kpi.contentType = "";
          kpi.content = "";
          kpi.isFavorite = false;
          kpi.valueFormat = new SqlServer2017ReportingServicesRestApi.KpiValueFormat();
          kpi.visualization = new SqlServer2017ReportingServicesRestApi.KpiVisualization();
          kpi.drillthroughTarget = new SqlServer2017ReportingServicesRestApi.DrillthroughTarget();
          kpi.drillthroughTarget.drillthroughTargetType = new SqlServer2017ReportingServicesRestApi.DrillthroughTargetType();
          kpi.currency = "";
          kpi.values = new SqlServer2017ReportingServicesRestApi.KpiValues();
          kpi.values.value = "";
          kpi.values.goal = 0.0;
          kpi.values.status = 0.0;
          kpi.values.trendSet = [0];
          kpi.data = new SqlServer2017ReportingServicesRestApi.KpiData();
          kpi.data.value = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.value.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();
          kpi.data.goal = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.goal.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();
          kpi.data.status = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.status.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();
          kpi.data.trendSet = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.trendSet.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();

          instance.addKpi(kpi, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Kpi);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("01234567-89ab-cdef-0123-456789abcdef");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.path).to.be.a('string');
            expect(data.path).to.be("");
            expect(data.type).to.be.a(SqlServer2017ReportingServicesRestApi.CatalogItemType);
                expect(data.hidden).to.be.a('boolean');
            expect(data.hidden).to.be(false);
            expect(data.size).to.be.a('number');
            expect(data.size).to.be("0");
            expect(data.modifiedBy).to.be.a('string');
            expect(data.modifiedBy).to.be("");
            expect(data.modifiedDate).to.be.a(Date);
            expect(data.modifiedDate).to.be(2017-04-13T15:51:04Z);
            expect(data.createdBy).to.be.a('string');
            expect(data.createdBy).to.be("");
            expect(data.createdDate).to.be.a(Date);
            expect(data.createdDate).to.be(2017-04-13T15:51:04Z);
            expect(data.parentFolderId).to.be.a('string');
            expect(data.parentFolderId).to.be("01234567-89ab-cdef-0123-456789abcdef");
            expect(data.contentType).to.be.a('string');
            expect(data.contentType).to.be("");
            expect(data.content).to.be.a('string');
            expect(data.content).to.be("");
            expect(data.isFavorite).to.be.a('boolean');
            expect(data.isFavorite).to.be(false);
            expect(data.valueFormat).to.be.a(SqlServer2017ReportingServicesRestApi.KpiValueFormat);
                expect(data.visualization).to.be.a(SqlServer2017ReportingServicesRestApi.KpiVisualization);
                expect(data.drillthroughTarget).to.be.a(SqlServer2017ReportingServicesRestApi.DrillthroughTarget);
                  expect(data.drillthroughTarget.drillthroughTargetType).to.be.a(SqlServer2017ReportingServicesRestApi.DrillthroughTargetType);
      
            expect(data.currency).to.be.a('string');
            expect(data.currency).to.be("");
            expect(data.values).to.be.a(SqlServer2017ReportingServicesRestApi.KpiValues);
                  expect(data.values.value).to.be.a('string');
              expect(data.values.value).to.be("");
              expect(data.values.goal).to.be.a('number');
              expect(data.values.goal).to.be(0.0);
              expect(data.values.status).to.be.a('number');
              expect(data.values.status).to.be(0.0);
              {
                let dataCtr = data.values.trendSet;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
            expect(data.data).to.be.a(SqlServer2017ReportingServicesRestApi.KpiData);
                  expect(data.data.value).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.value.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        
              expect(data.data.goal).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.goal.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        
              expect(data.data.status).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.status.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        
              expect(data.data.trendSet).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.trendSet.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteKpi', function() {
        it('should call deleteKpi successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteKpi call
          /*
          var id = "id_example";

          instance.deleteKpi(id, function(error, data, response) {
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
      describe('getKpi', function() {
        it('should call getKpi successfully', function(done) {
          // TODO: uncomment, update parameter values for getKpi call and complete the assertions
          /*
          var id = "id_example";

          instance.getKpi(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Kpi);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("01234567-89ab-cdef-0123-456789abcdef");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.path).to.be.a('string');
            expect(data.path).to.be("");
            expect(data.type).to.be.a(SqlServer2017ReportingServicesRestApi.CatalogItemType);
                expect(data.hidden).to.be.a('boolean');
            expect(data.hidden).to.be(false);
            expect(data.size).to.be.a('number');
            expect(data.size).to.be("0");
            expect(data.modifiedBy).to.be.a('string');
            expect(data.modifiedBy).to.be("");
            expect(data.modifiedDate).to.be.a(Date);
            expect(data.modifiedDate).to.be(2017-04-13T15:51:04Z);
            expect(data.createdBy).to.be.a('string');
            expect(data.createdBy).to.be("");
            expect(data.createdDate).to.be.a(Date);
            expect(data.createdDate).to.be(2017-04-13T15:51:04Z);
            expect(data.parentFolderId).to.be.a('string');
            expect(data.parentFolderId).to.be("01234567-89ab-cdef-0123-456789abcdef");
            expect(data.contentType).to.be.a('string');
            expect(data.contentType).to.be("");
            expect(data.content).to.be.a('string');
            expect(data.content).to.be("");
            expect(data.isFavorite).to.be.a('boolean');
            expect(data.isFavorite).to.be(false);
            expect(data.valueFormat).to.be.a(SqlServer2017ReportingServicesRestApi.KpiValueFormat);
                expect(data.visualization).to.be.a(SqlServer2017ReportingServicesRestApi.KpiVisualization);
                expect(data.drillthroughTarget).to.be.a(SqlServer2017ReportingServicesRestApi.DrillthroughTarget);
                  expect(data.drillthroughTarget.drillthroughTargetType).to.be.a(SqlServer2017ReportingServicesRestApi.DrillthroughTargetType);
      
            expect(data.currency).to.be.a('string');
            expect(data.currency).to.be("");
            expect(data.values).to.be.a(SqlServer2017ReportingServicesRestApi.KpiValues);
                  expect(data.values.value).to.be.a('string');
              expect(data.values.value).to.be("");
              expect(data.values.goal).to.be.a('number');
              expect(data.values.goal).to.be(0.0);
              expect(data.values.status).to.be.a('number');
              expect(data.values.status).to.be(0.0);
              {
                let dataCtr = data.values.trendSet;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
            expect(data.data).to.be.a(SqlServer2017ReportingServicesRestApi.KpiData);
                  expect(data.data.value).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.value.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        
              expect(data.data.goal).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.goal.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        
              expect(data.data.status).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.status.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        
              expect(data.data.trendSet).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                    expect(data.data.trendSet.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
        

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getKpiAllowedActions', function() {
        it('should call getKpiAllowedActions successfully', function(done) {
          // TODO: uncomment, update parameter values for getKpiAllowedActions call and complete the assertions
          /*
          var id = "id_example";

          instance.getKpiAllowedActions(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.ODataAllowedActions);
            expect(data.odataContext).to.be.a('string');
            expect(data.odataContext).to.be("");
            {
              let dataCtr = data.value;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.AllowedAction);
                expect(data.action).to.be.a('string');
                expect(data.action).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getKpiPolicies', function() {
        it('should call getKpiPolicies successfully', function(done) {
          // TODO: uncomment, update parameter values for getKpiPolicies call and complete the assertions
          /*
          var id = "id_example";

          instance.getKpiPolicies(id, function(error, data, response) {
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
              expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.ItemPolicy);
              expect(data.inheritParentPolicy).to.be.a('boolean');
              expect(data.inheritParentPolicy).to.be(false);
              {
                let dataCtr = data.policies;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Policy);
                  expect(data.groupUserName).to.be.a('string');
                  expect(data.groupUserName).to.be("");
                  {
                    let dataCtr = data.roles;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Role);
                      expect(data.name).to.be.a('string');
                      expect(data.name).to.be("");
                      expect(data.description).to.be.a('string');
                      expect(data.description).to.be("");
                    }
                  }
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
      describe('getKpiProperties', function() {
        it('should call getKpiProperties successfully', function(done) {
          // TODO: uncomment, update parameter values for getKpiProperties call and complete the assertions
          /*
          var id = "id_example";
          var opts = {};
          opts.properties = ["properties_example"];

          instance.getKpiProperties(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.ODataProperties);
            expect(data.odataContext).to.be.a('string');
            expect(data.odataContext).to.be("");
            {
              let dataCtr = data.value;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Property);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getKpis', function() {
        it('should call getKpis successfully', function(done) {
          // TODO: uncomment, update parameter values for getKpis call and complete the assertions
          /*
          var opts = {};
          opts.top = 56;
          opts.skip = 56;
          opts.filter = "filter_example";
          opts.count = "count_example";
          opts.orderBy = "orderBy_example";
          opts.select = "select_example";

          instance.getKpis(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.ODataKpis);
            expect(data.odataContext).to.be.a('string');
            expect(data.odataContext).to.be("");
            expect(data.odataCount).to.be.a('number');
            expect(data.odataCount).to.be(0);
            {
              let dataCtr = data.value;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SqlServer2017ReportingServicesRestApi.Kpi);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("01234567-89ab-cdef-0123-456789abcdef");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.path).to.be.a('string');
                expect(data.path).to.be("");
                expect(data.type).to.be.a(SqlServer2017ReportingServicesRestApi.CatalogItemType);
                    expect(data.hidden).to.be.a('boolean');
                expect(data.hidden).to.be(false);
                expect(data.size).to.be.a('number');
                expect(data.size).to.be("0");
                expect(data.modifiedBy).to.be.a('string');
                expect(data.modifiedBy).to.be("");
                expect(data.modifiedDate).to.be.a(Date);
                expect(data.modifiedDate).to.be(2017-04-13T15:51:04Z);
                expect(data.createdBy).to.be.a('string');
                expect(data.createdBy).to.be("");
                expect(data.createdDate).to.be.a(Date);
                expect(data.createdDate).to.be(2017-04-13T15:51:04Z);
                expect(data.parentFolderId).to.be.a('string');
                expect(data.parentFolderId).to.be("01234567-89ab-cdef-0123-456789abcdef");
                expect(data.contentType).to.be.a('string');
                expect(data.contentType).to.be("");
                expect(data.content).to.be.a('string');
                expect(data.content).to.be("");
                expect(data.isFavorite).to.be.a('boolean');
                expect(data.isFavorite).to.be(false);
                expect(data.valueFormat).to.be.a(SqlServer2017ReportingServicesRestApi.KpiValueFormat);
                    expect(data.visualization).to.be.a(SqlServer2017ReportingServicesRestApi.KpiVisualization);
                    expect(data.drillthroughTarget).to.be.a(SqlServer2017ReportingServicesRestApi.DrillthroughTarget);
                      expect(data.drillthroughTarget.drillthroughTargetType).to.be.a(SqlServer2017ReportingServicesRestApi.DrillthroughTargetType);
          
                expect(data.currency).to.be.a('string');
                expect(data.currency).to.be("");
                expect(data.values).to.be.a(SqlServer2017ReportingServicesRestApi.KpiValues);
                      expect(data.values.value).to.be.a('string');
                  expect(data.values.value).to.be("");
                  expect(data.values.goal).to.be.a('number');
                  expect(data.values.goal).to.be(0.0);
                  expect(data.values.status).to.be.a('number');
                  expect(data.values.status).to.be(0.0);
                  {
                    let dataCtr = data.values.trendSet;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                expect(data.data).to.be.a(SqlServer2017ReportingServicesRestApi.KpiData);
                      expect(data.data.value).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                        expect(data.data.value.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
            
                  expect(data.data.goal).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                        expect(data.data.goal.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
            
                  expect(data.data.status).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                        expect(data.data.status.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
            
                  expect(data.data.trendSet).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItem);
                        expect(data.data.trendSet.type).to.be.a(SqlServer2017ReportingServicesRestApi.KpiDataItemType);
            
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('setKpiPolicies', function() {
        it('should call setKpiPolicies successfully', function(done) {
          // TODO: uncomment, update parameter values for setKpiPolicies call
          /*
          var id = "id_example";
          var itemPolicies = [new SqlServer2017ReportingServicesRestApi.ItemPolicy()];
          itemPolicies[0].inheritParentPolicy = false;
          itemPolicies[0].policies = [new SqlServer2017ReportingServicesRestApi.Policy()];
          itemPolicies[0].policies[0].groupUserName = "";
          itemPolicies[0].policies[0].roles = [new SqlServer2017ReportingServicesRestApi.Role()];
          itemPolicies[0].policies[0].roles[0].name = "";
          itemPolicies[0].policies[0].roles[0].description = "";

          instance.setKpiPolicies(id, itemPolicies, function(error, data, response) {
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
      describe('updateKpi', function() {
        it('should call updateKpi successfully', function(done) {
          // TODO: uncomment, update parameter values for updateKpi call
          /*
          var id = "id_example";
          var kpi = new SqlServer2017ReportingServicesRestApi.Kpi();
          kpi.id = "01234567-89ab-cdef-0123-456789abcdef";
          kpi.name = "";
          kpi.description = "";
          kpi.path = "";
          kpi.type = new SqlServer2017ReportingServicesRestApi.CatalogItemType();
          kpi.hidden = false;
          kpi.size = "0";
          kpi.modifiedBy = "";
          kpi.modifiedDate = 2017-04-13T15:51:04Z;
          kpi.createdBy = "";
          kpi.createdDate = 2017-04-13T15:51:04Z;
          kpi.parentFolderId = "01234567-89ab-cdef-0123-456789abcdef";
          kpi.contentType = "";
          kpi.content = "";
          kpi.isFavorite = false;
          kpi.valueFormat = new SqlServer2017ReportingServicesRestApi.KpiValueFormat();
          kpi.visualization = new SqlServer2017ReportingServicesRestApi.KpiVisualization();
          kpi.drillthroughTarget = new SqlServer2017ReportingServicesRestApi.DrillthroughTarget();
          kpi.drillthroughTarget.drillthroughTargetType = new SqlServer2017ReportingServicesRestApi.DrillthroughTargetType();
          kpi.currency = "";
          kpi.values = new SqlServer2017ReportingServicesRestApi.KpiValues();
          kpi.values.value = "";
          kpi.values.goal = 0.0;
          kpi.values.status = 0.0;
          kpi.values.trendSet = [0];
          kpi.data = new SqlServer2017ReportingServicesRestApi.KpiData();
          kpi.data.value = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.value.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();
          kpi.data.goal = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.goal.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();
          kpi.data.status = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.status.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();
          kpi.data.trendSet = new SqlServer2017ReportingServicesRestApi.KpiDataItem();
          kpi.data.trendSet.type = new SqlServer2017ReportingServicesRestApi.KpiDataItemType();

          instance.updateKpi(id, kpi, function(error, data, response) {
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
      describe('updateKpiProperties', function() {
        it('should call updateKpiProperties successfully', function(done) {
          // TODO: uncomment, update parameter values for updateKpiProperties call
          /*
          var id = "id_example";
          var properties = [new SqlServer2017ReportingServicesRestApi.Property()];
          properties[0].name = "";
          properties[0].value = "";

          instance.updateKpiProperties(id, properties, function(error, data, response) {
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
