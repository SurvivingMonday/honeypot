var app = {};


// to test -> consule.log - button onclick call function
// begin duplicate
	// Variables here
    var player = {};
    player.cash = 0;
    player.inventory = [];

	// 3 Types of Keylogger( Beginner, Medium, Hard)
	// hitfactor and risk to be generate depending on type.
	// Keylogger Begin
	var Easy = {};
	Easy.type="Easy";
	Easy.price = 100; 
	Easy.risk = 0.2; 
	Easy.hitfactor = 0.4;
	
	// Keylogger Medium
	var Medium ={};
	Medium.type="Medium";
	Medium.price = 200;
	Medium.risk = 0.4;
	Medium.hitfactor = 0.6;
	
	// Keylogger Hard
	var Hard ={};
	Hard.type="Hard";
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
	blackm.keylogger.push(Begin);
	blackm.keylogger.push(Medium);
	blackm.keylogger.push(Hard);
	

function getCash(
	alert(player.cash);
	return player.cash;
}
	
// end duplicate
/*
app.prototype = function () {    
    
	// Variables here
  var player = {};
  player.cash = 0;
  player.inventory = [];
  player.produce = {};
  player.produce.credentials = 0;
  player.produce.unencrypteddata = 0;
  player.produce.creditcard = 0;
  player.produce.identity = 0;


	
	// 3 Types of Keylogger( Beginner, Medium, Hard)
	// hitfactor and risk to be generate depending on type.
	// Keylogger Begin
	var Easy = {};
	Easy.type="Easy";
	Easy.price = 100; 
	Easy.risk = 0.2; 
	Easy.hitfactor = 0.4;
	
	// Keylogger Medium
	var Medium ={};
	Medium.type="Medium";
	Medium.price = 200;
	Medium.risk = 0.4;
	Medium.hitfactor = 0.6;
	
	// Keylogger Hard
	var Hard ={};
	Hard.type="Hard";
	Hard.price = 400;
	Hard.risk = 0.6;
	Hard.hitfactor = 0.8;
	
	//BlackM
	var blackm = {};
	blackm.onsale = {};
	blackm.onsale.push(Begin);
	blackm.onsale.push(Medium);
	blackm.onsale.push(Hard);

	//var asset ={}; // Assets Uncrypted data(credentials,uncrypted data)	
	//asset.uncrypteddata=0;
	//asset.credentials=0;
		
 // Private functions
	
    return {
        // Public functions
        getCash: function () {    //display cash
            return player.cash;    
        },
		getInventory: function() {   //getInventory displays on screen
			return
		},
		getBlackM: function() { //getBlackM displays on screen
			return
		},
		getRisk: function() { //getRisk displays on screen
			return
		},
		buy: function(a){   //buy from BlackM

			return (
        if(player.cash >= a.price){
          player.cash -= a.price;
          player.inventory.push(a);
          blackm.onsale.delete(a);
        } else {
          alert("You do not have enough money!");
        }
			);
		},
    sell: function(){  // sell to BlackM

      return (
      blackm.sellprice.unencrypteddata * player.produce.unencrypteddata +
      blackm.sellprice.credentials * player.produce.credentials +
      blackm.sellprice.creditcard * player.produce.creditcard +
      blackm.sellprice.identity * player.produce.identity
      );
    }
	}
}
*/

//infect
// decrements cash, increase risk, increase active keyloggers


//updateCash
// updates cash received depening on active keylogger

//updateBlackMItem

//updateRisk
// called within infect


