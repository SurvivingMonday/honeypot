var app = {};

app.prototype = function (){    
    
	// Variables here
  var player = {};
  player.cash = 0;
  player.attentionLevel = 0;
  player.inventory = {};
  player.produce = {};
  player.produce.credentials = 0;
  player.produce.unencrypteddata = 0;
  player.produce.creditcard = 0;
  player.produce.identity = 0;

	// 3 Types of Keylogger( Beginner, Medium, Hard)
	// hitfactor and risk to be generate depending on type.
	// Keylogger Begin
	var Easy = {
    name: "TT130",
    type: "Keylogger",
    level: 0,
    price: 100,
    risk: 0.2,
    hitfactor: 0.4
  };
	
	// Keylogger Medium
	var Medium = {
    name: "TT230",
    type: "Keylogger",
    level: 1,
    price: 200,
    risk: 0.4,
    hitfactor: 0.6
  };

	
	// Keylogger Hard
	var Hard = {
    name: "TT330",
    type: "Keylogger",
    level: 2,
    price: 400,
    risk: 0.6,
    hitfactor: 0.8
  };

	
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
      for (var i=0;i<player.inventory.length;i++)
      {	 
        alert(player.inventory[i].type + " " +player.inventory[i].name);
      }
      if(player.inventory.length==0)
          alert("Player has not bought anything");
      return;
    },
    getBlackM: function() { //getBlackM displays on screen
      return
    },
    getRisk: function() { //getRisk displays on screen
      return
    },
    buy: function(a){   //buy from BlackM
      if (player.cash >= a.price){
        player.cash -= a.price;
        player.inventory.push(a);
        blackm.onsale.delete(a);
        return;
      } else {
        alert("You do not have enough money!");
        return;
      }
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
};

//infect
// decrements cash, increase risk, increase active keyloggers


//updateCash
// updates cash received depening on active keylogger

//updateBlackMItem

//updateRisk
// called within infect


