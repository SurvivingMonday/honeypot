var app = {};

app.prototype = function () {
//push element and delete element and transfering between market    
    // Variables here
    var player = {};
    player.cash = 0;
    player.inventory = [];
	
	// 3 Types of Keylogger( Beginner, Medium, Hard)
	// hitfactor and risk to be generate depending on type.
	// Keylogger Begin
	var Begin = {};
	Begin.price = 100; 
	Begin.risk = 0.2; 
	Begin.hitfactor = 0.4;
	
	// Keylogger Medium
	var Medium ={};
	Medium.price = 200;
	Medium.risk = 0.4;
	Medium.hitfactor = 0.6;
	
	// Keylogger Hard
	var Hard ={};
	Hard.price = 400;
	Hard.risk = 0.6;
	Hard.hitfactor = 0.8;
	
	//BlackM
	var blackm = {};
	blackm.credentials=[];
	blackm.creditcard=[];
	blackm.unencrypteddata=[];
	blackm.identity=[];
	blackm.keylogger=[];
	blackm.keylogger.push("keyloggerA": Begin);
	blackm.keylogger.push("keyloggerB": Medium);
	blackm.keylogger.push("keyloggerC": Hard);

	//var asset ={}; // Assets Uncrypted data(credentials,uncrypted data)	
	//asset.uncrypteddata=0;
	//asset.credentials=0;
		
 // Private functions

    return {
        // Public functions
        getCash: function () {    //display cash
            return player.cash;    
        },
		getinventory: function(){   // buy from
		
			player.cash-=player.inventory.price;
			return  
		}
	}
}
