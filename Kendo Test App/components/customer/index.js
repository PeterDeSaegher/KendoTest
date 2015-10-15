'use strict';
/* Customer vm */
var localData ={response:{hdsCustomer:{dsCustomer:{ttCustomer:[{Address:"276 North Drive",Address2:"",Balance:903.64,City:"Burlington",Comments:"This customer is on credit hold.",Contact:"Gloria Shepley",Country:"USA",CreditLimit:66700.0,CustNum:1,Discount:35,EmailAddress:"",Fax:"",Name:"Lift Tours",Phone:"(617) 450-0086",PostalCode:"01730",SalesRep:"HXM",State:"MA",Terms:"Net30"}]}}}};

app.customer = kendo.observable({
    onShow: function() {   
    	console.log (app.orSession.serviceUrl);
    },
    afterShow: function() {},
    
    dsCustomers: new kendo.data.DataSource({
    	transport:{
    		read: { 
    			url: "http://orwit2008003:8980/pug/rest/pugService/readcustomer",    
    			type: "get",
    			dataType: "json",
    			data: {
    				accept: "application/json"
    			}    		
    		},
    		schema: {
    			data: "response.hdsCustomer.dsCustomer.ttCustomer",
    			model: {
    				id: "CustNum",
    				fields: {
    					CustNum: {
    						type: "number"    						
    					},
    					Contact: {
    						type: "string"    						
    					}
    					
    				}
    				
    			}
    		}
    	}    	
    }),
    dsCustomersLocal: new kendo.data.DataSource({
    	transport:{
    		read: function(options){
    			options.success(localData);
    			
    		},
    		schema: {
    			data: "response.hdsCustomer.dsCustomer.ttCustomer",
    			model: {
    				id: "CustNum",
    				fields: {
    					CustNum: {
    						type: "number"    						
    					},
    					Contact: {
    						type: "string"    						
    					}
    					
    				}
    				
    			}
    		}
    	}    	
    }),
    GetServiceUrl: function(){
    	return app.orSession.serviceUrl;
    }
});

// START_CUSTOM_CODE_customer
// END_CUSTOM_CODE_customer