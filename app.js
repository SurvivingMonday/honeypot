var app = {};

// to test -> consule.log - button onclick call function
// begin duplicate
	// Variables here
 /*   var player = {};
    player.cash = 0;
    player.inventory = [];
	document.write(player.cash);
	// 3 Types of Keylogger( Beginner, Medium, Hard)
	// hitfactor and risk to be generate depending on type.
	// Keylogger Begin
	var Easy = {};
	Easy.type="Easy";
	Easy.price = 100; 
	Easy.risk = 0.2; 
	Easy.hitfactor = 0.4;
	document.write(player.cash);
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
	document.write(player.cash);
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
	document.write(player.cash);
		

function getCash(){
	alert(player.cash);
	return player.cash;
}

function getInventory(){
	for (var i=0;i<player.inventory.length;i++)
	{	 
		alert(player.inventory[i].type + " " + player.inventory[i].name);
	}
	if(player.inventory.length==0)
    alert("Player has not bought anything");
	return;
}
*/	
// end duplicate


app.prototype = function (){    
    
	// Variables here
  var player = {};
  player.cash = 0;
  player.attentionLevel = 0;  // scale: 0-10
  player.inventory = {};  
  player.marker = {};
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
    level: 1,
    price: 100,
    risk: 0.2,
    hitfactor: 0.4
  };
	
	// Keylogger Medium
	var Medium = {
    name: "TT230",
    type: "Keylogger",
    level: 2,
    price: 200,
    risk: 0.4,
    hitfactor: 0.6
  };

	
	// Keylogger Hard
	var Hard = {
    name: "TT330",
    type: "Keylogger",
    level: 3,
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
  
  //Marker
  var Marker = {};
  Marker.type;
  Marker.duration; // scale 0-100
  Marker.generation; // scale 40-80
  Marker.timer;   // if timer == 0;
  
	//var asset ={}; // Assets Uncrypted data(credentials,uncrypted data)	
	//asset.uncrypteddata=0;
	//asset.credentials=0;
		
 // Private functions

  return {
      // Public functions
    getCash: function () {    //display cash
      return player.cash;
    },
    getAttention: function () {    //display cash
      return player.attentionLevel;
    },
    getInventory: function() {   //getInventory displays on screen
      for (var i=0;i<player.inventory.length;i++){	 
        alert(player.inventory[i].type + " " +player.inventory[i].name);
      }
      if(player.inventory.length==0){
          alert("Player has not bought anything");
      }
      return;
    },
    getProduce: function() {   //getProduce displays on screen 
      alert(player.produce.credentials);
      alert(player.produce.uncrypteddata);
      alert(creditcard);
      alert(identity);
      return;
    }, 
    getBlackM: function() { //getBlackM displays on screen
      for (var i=0;i<blackm.onsale.length;i++){	 
        alert(blackm.onsale[i].type+ " " +blackm.onsale[i].name);
      }
      if(blackm.onsale.length==0){
          alert("Market Close");
      }
      return;
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
    },
    infect: function(a){
      player.inventory.delete(a);
      if(Math.random()> 0.5){   // success of infecting
        var b = new Marker;  // needs to be dynamic
        b.type = a.level;
        b.duration = Math.floor((Math.random()*100))%(30*b.type); // better type has higher duration
        b.generation = Math.floor(100*a.hitrate);
        player.attentionLevel+= a.risk;
        player.marker.push(b);
      }
      return;
    }
    updateTime: function(){
      for (var i=0;i<player.marker.length;i++){	 
        player.marker[i].timer-=1;
        player.marker[i].duration-=1;
        if(player.marker[i].timer==0){
          player.cash+=player.marker[i].generate;
          player.marker[i].timer=10;
        }
        if(player.marker[i].duration<0){
          player.marker.delete(player.marker[i]);
          i--;
        }
      }
      return;
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


