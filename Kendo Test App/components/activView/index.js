'use strict';

//START_CUSTOM_CODE_activView
var activModel = kendo.data.Model.define({
	fields: {
		"firmanr": {type: "number"},
		"activnr": {type: "number"},
		"sessienr": {type: "number"},
		"datumact": {type: "string"},
		"cRowId": {type: "string"},
		"naamact": {type: "string"}
	}
});

var dataLocal = [];

dataLocal.push({cRowId: "1", firmanr: 1, activnr: 1, sessienr: 1, datumact: "05/09/2015" });
dataLocal.push({cRowId: "2", firmanr: 1, activnr: 2, sessienr: 1, datumact: "07/09/2015" });
dataLocal.push({cRowId: "3", firmanr: 1, activnr: 3, sessienr: 1, datumact: "08/09/2015" });
dataLocal.push({cRowId: "4", firmanr: 1, activnr: 4, sessienr: 1, datumact: "09/09/2015" });

console.log("array init finished");

app.activView = kendo.observable({
    onShow: function() {
    	console.log(app.orSession.serviceUrl);
    	
    },
    afterShow: function() {},
    
    Activiteiten: new kendo.data.DataSource({
    	transport:{
    		read: { 
    			url: "http://localhost:8086/api/activiteiten?groep=2229",    
    			type: "get",
    			dataType: "json"
    		}       		
    	},
    	schema: {
    		model: activModel,   
    		data: "activiteiten"
    	}    
    	
    }),
    ActivLocal: new kendo.data.DataSource({    	
    	data: dataLocal
    })
    
});


// END_CUSTOM_CODE_activView
