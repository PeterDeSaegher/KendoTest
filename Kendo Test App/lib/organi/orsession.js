/**
 * Prototype of organi session object
 */

var OrSession = function() {		
			this.companyId = 0;
			this.sessionId = undefined;
			this.userId = 0;
			this.serviceUrl = undefined;										
};
OrSession.prototype.GenerateUrl = function(controller){
	return this.serviceUrl + controller;		
};