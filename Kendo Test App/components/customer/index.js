'use strict';

app.customer = kendo.observable({
    onShow: function() {   	
    },
    afterShow: function() {},
    
    dsCustomers: new kendo.data.DataSource({
    	transport:{
    		read: { 
    			url: "http://orwit2008003:8980/pug/rest/pugService/readcustomer",    
    			type: "get",
    			dataType: "json"
    		}      
    		
    	}    	
    })        	    
});

// START_CUSTOM_CODE_customer
// END_CUSTOM_CODE_customer