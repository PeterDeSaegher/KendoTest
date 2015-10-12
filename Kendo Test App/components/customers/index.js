'use strict';

app.customer = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
    customers: new kendo.data.DataSource({
    	type: "jsdo",
    	transport: {
            jsdo: "Customer",
            tableRef: "ttCustomer",
            countFnName: "count",
          },
    	schema :{
    		model:{
    			id: "CustNum",
    			fields: {
    				CustNum: {type: "number"},
    				Name: {type: "string"},
    				Address: {type: "string"}
    				
    			}    			
    		}
    		
    	},
    fetchData: function(){
    	
    	
    } 
    	
    })
    
});

// START_CUSTOM_CODE_home
// END_CUSTOM_CODE_home