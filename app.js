var app = {};

app.prototype = function () {
    
    // Variables here
    var player = {};
    player.cash = 0;
    player.inventory = [];
	
	var keylogger = [];
	
	// Keylogger Begin
	keylogger.Begin = {}
	keylogger.Begin.price = 100; // 3 Types of Keylogger( Beginner, Medium, Pro)
	keylogger.Begin.risk = 0.2; // 
	Keylogger.Begin.hitfactor = 0.4;
	
	// Keylogger Medium
	keylogger.Medium ={};
	keylogger.Medium.price = 200;
	keylogger.Medium.risk = 0.4;
	keylogger.Medium.hitfactor = 0.6;
	
	// Keylogger Hard
	keylogger.Hard ={};
	keylogger.Hard.price = 400;
	keylogger.Hard.risk = 0.6;
	keylogger.Hard.hitfactor = 0.8;
	
 // Private functions
 

    return {
        // Public functions
        getCash: function () {
            return player.cash;    
        }



    }


}
