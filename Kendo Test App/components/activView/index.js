'use strict';

app.activView = kendo.observable({
    onShow: function() {},
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
    		model:{
    			id: "cRowId",
    			fields: {
    				firmanr: {type: "number"},
    				activnr: {type: "number"},
    				sessienr: {type: "number"},
    				datumact: {type: "string"},
    				cRowId: {type: "string"}
    				
    			}
    			
    		}                		
    	},
    	batch: true
    
    	
    }),
    ActivLocal: new kendo.data.DataSource({
    	data: [
    	       {cRowId: "1", firmanr: 1, activnr: 1, sessienr: 1, datumact: "05/09/2015" },
    	       {cRowId: "2", firmanr: 1, activnr: 2, sessienr: 1, datumact: "07/09/2015" },
    	       {cRowId: "3", firmanr: 1, activnr: 3, sessienr: 1, datumact: "09/09/2015" },
    	       {cRowId: "4", firmanr: 1, activnr: 4, sessienr: 1, datumact: "10/09/2015" }    	
    	],
    	schema: {
            model: {
                id: "cRowId",
                fields: {
                    firmanr: {
                        type: "number"
                    },
                    activnr: {
                        type: "number"
                    },
                    sessienr: {
                        type: "number"
                    },
                    datumact: {
                        type: "string"
                    },
                    cRowId: {
                        type: "string"
                    }

                }

            }

        }
    	
    	
    })
    
});

// START_CUSTOM_CODE_activView
// END_CUSTOM_CODE_activView