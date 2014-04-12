var app = {};

// begin duplicate
	// Variables here
  var gametime;
  var player = {};
  player.cash = 1000;
  player.attentionLevel = 0;  // scale: 0-10
  player.inventory = [];  
  player.marker = [];
  player.produce = {};
  player.produce.credentials = 0;
  player.produce.crypteddata = 0;
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
	var blackm={};
	blackm.onsale=[];
	blackm.onsale.push(Easy);
	blackm.onsale.push(Medium);
	blackm.onsale.push(Hard);



  
  //Marker
  var MarkerEasy= {};
  MarkerEasy.type=Easy.level;
  MarkerEasy.timer=10
  MarkerEasy.duration= 30;
  MarkerEasy.generation= 40; 
  MarkerEasy.pub=1; // 1 == public area to generate, 0 private area

  var MarkerMedium= {};
  MarkerMedium.type=Medium.level;
  MarkerMedium.timer=10
  MarkerMedium.duration= 60;
  MarkerMedium.generation= 60; 
  MarkerMedium.pub=1;
  
  var MarkerHard= {};
  MarkerHard.type=Hard.level;
  MarkerHard.timer=10;
  MarkerHard.duration= 90;
  MarkerHard.generation=80; 
  MarkerHard.pub=1;
  
  //utility functions
  gametime= setInterval(updateTime,1000);

  
function getCash(){    //display cash
      alert("Player Cash:" + " " + player.cash);
      return player.cash;
    }
    
function getAttention(){    //display cash
      alert(player.attentionLevel);
      return player.attentionLevel;
    }  

function getInventory(){   //getInventory displays on screen
      for (var i=0;i<player.inventory.length;i++){	 
        alert(player.inventory[i].name);
      }
      if(player.inventory.length==0){
          alert("Player has not bought anything");
      }
      return;
    }
function getProduce(){   //getProduce displays on screen 
      alert("Player credentials" + " " + player.produce.credentials);
      alert("Player crypteddata" + " " + player.produce.crypteddata);
      alert("Player creditcard" + " " + player.produce.creditcard);
      alert("Player identity" + " " + player.produce.identity);
      return;
    }
    
function getBlackM(){ //getBlackM displays on screen
      for (var i=0;i<blackm.onsale.length;i++){	 
        alert(blackm.onsale[i].type+ " " +blackm.onsale[i].name);
      }
      if(blackm.onsale.length==0){
          alert("Market Close");
      }
      return;
    }
function keyloggerEasy(){
      alert("Buying Easy keylogger");
      alert(Easy.price);
      buy(Easy);
      return;
    }
function keyloggerMedium(){
      alert("Buying Medium keylogger");
      alert(Medium.price);
      buy(Medium);
      return;
    }

function keyloggerHard(){
      alert("Buying Hard keylogger");
      alert(Hard.price);
      buy(Hard);
      return;
    }    
    
function buy(a){   //buy from BlackM
      if (player.cash >= a.price){
        player.cash -= a.price;
        player.inventory.push(a);
        //blackm.onsale.delete(a);
        return;
      } else {
        alert("You do not have enough money!");
        return;
      }
    }
/*
function sell(){  // sell to BlackM
      return (
      blackm.sellprice.unencrypteddata * player.produce.unencrypteddata +
      blackm.sellprice.credentials * player.produce.credentials +
      blackm.sellprice.creditcard * player.produce.creditcard +
      blackm.sellprice.identity * player.produce.identity
      );
    }
*/
function infectEasy(){
      alert("Infecting location with easy keylogger");
      infect(Easy);
    }
function infectMedium(){
      alert("Infecting location with Medium keylogger");
      infect(Medium);
    }
function infectHard(){
      alert("Infecting location with Hard keylogger");
      infect(Hard);
    }
    
function infect(a){
      if(player.inventory.indexOf(a) != -1){
        player.inventory.pop(a);
        if(Math.random()> 0.5){   // success of infecting
          alert("Infect Successful");
          player.attentionLevel+=a.risk*100;
          switch(a.level){
            case 1:
                 player.marker.push(MarkerEasy);
                 break;
            case 2:
                 player.marker.push(MarkerMedium);
                 break;
            case 3:
                 player.marker.push(MarkerHard);
                 break;
             default:
                  break;
          }
        }
        else{
          alert("Unsuccessful infect");
        }
       }
       else{
          alert("Player does not have keylogger of this type");
       }
      return;
    }


    
function updateTime(){
       for (var i=0;i<player.marker.length;i++){	 
        player.marker[i].timer-=1;
        player.marker[i].duration-=1;
        if(player.marker[i].timer==0){
          player.produce.crypteddata+=player.marker[i].generation;
          player.marker[i].timer=10;
        }
        if(player.marker[i].duration<0){
          player.marker.pop(player.marker[i]);
          i--;
        }
      }
      return;
    }
  
// end duplicate

/*
app.prototype = function (){    
    
	// Variables here
  var gametime;
  var player = {};
  player.cash = 1000;
  player.attentionLevel = 0;  // scale: 0-10
  player.inventory = [];  
  player.marker = [];
  player.produce = {};
  player.produce.credentials = 0;
  player.produce.crypteddata = 0;
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
	var blackm={};
	blackm.onsale=[];
	blackm.onsale.push(Easy);
	blackm.onsale.push(Medium);
	blackm.onsale.push(Hard);

  //Marker
  var MarkerEasy= {};
  MarkerEasy.type=Easy.level;
  MarkerEasy.timer=10
  MarkerEasy.duration= 30;
  MarkerEasy.generation= 40; 
  MarkerEasy.pub=1; // 1 == public area to generate, 0 private area

  var MarkerMedium= {};
  MarkerMedium.type=Medium.level;
  MarkerMedium.timer=10
  MarkerMedium.duration= 60;
  MarkerMedium.generation= 60; 
  MarkerMedium.pub=1;
  
  var MarkerHard= {};
  MarkerHard.type=Hard.level;
  MarkerHard.timer=10;
  MarkerHard.duration= 90;
  MarkerHard.generation=80; 
  MarkerHard.pub=1;
  
  gametime= setInterval(updateTime,1000);

		
 // Private functions

  return {
      // Public functions
    getCash: function () {    //display cash
      alert("Player Cash:" + " " + player.cash);
      return player.cash;
    },
    getAttention: function () {    //display cash
      alert(player.attentionLevel);
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
    },
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
*/
//infect
// decrements cash, increase risk, increase active keyloggers


//updateCash
// updates cash received depening on active keylogger

//updateBlackMItem

//updateRisk
// called within infect


