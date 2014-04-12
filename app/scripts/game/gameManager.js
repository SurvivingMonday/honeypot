'use strict';

app.service('GameManager', function($interval) {

  // Player
  var player = {
    cash: 200,
    attentionLevel: 0, // 0 - 10
    ecData: 0,
    dataA: 0,
    dataB: 0,
    dataC: 0,
    bestKL: 0,
    inventory: [],
    marker: []
  };

  // Utilities
  var gametime = 0;

  // Player Private functions

  // Inventories


  // Black Market
  var blackm = {};
  blackm.sellprice = {
    ecData: 4,
    dataA: 8,
    dataB: 15,
    dataC: 25
  };

  blackm.onsale = [
    // Type => 0: Keylogger, 1: Analyzer
    // ------------ Keyloggers ------------
    {
      name: 'TT130',
      type: 0,
      quality: 1,
      price: 100,
      risk: 0.2,
      hitfactor: 0.1,
      expiryTime: 0
    },

    {
      name: 'XH-5',
      type: 0,
      quality: 2,
      price: 150,
      risk: 0.1,
      hitfactor: 0.1,
      expiryTime: 0
    },

    {
      name: 'TT230',
      type: 0,
      quality: 3,
      price: 200,
      risk: 0.4,
      hitfactor: 0.2,
      expiryTime: 15
    },

    {
      name: 'XH-7',
      type: 0,
      quality: 4,
      price: 350,
      risk: 0.4,
      hitfactor: 0.25,
      expiryTime: 15
    },

    {
      name: 'TT330',
      type: 0,
      quality: 5,
      price: 400,
      risk: 0.6,
      hitfactor: 0.4,
      expiryTime: 30
    }

    // ------------ Analyzers -------------
    /*{
      name: 'AZ9900',
      type: 1,
      quality: 1,
      price: 100,
      dataA: 0.4,
      dataB: 0.1,
      dataC: 0.01,
      duration: 6
    },

    {
      name: 'AZ8800',
      type: 1,
      quality: 2,
      price: 180,
      dataA: 0.4,
      dataB: 0.15,
      dataC: 0.05,
      duration: 7
    },

    {
      name: 'TM2230',
      type: 1,
      quality: 3,
      price: 250,
      dataA: 0.5,
      dataB: 0.2,
      dataC: 0.05,
      duration: 5
    },

    {
      name: 'SS8000',
      type: 1,
      quality: 4,
      price: 600,
      dataA: 0.7,
      dataB: 0.35,
      dataC: 0.15,
      duration: 7
    },

    {
      name: 'SS9999',
      type: 1,
      quality: 5,
      price: 1500,
      dataA: 0.85,
      dataB: 0.4,
      dataC: 0.2,
      duration: 8
    }*/
  ];

  this.updatetime = function () {
    gametime = setInterval(1000);
  };


  // Public functions
  this.initGame = function () {
    player.cash = 200;
    player.inventory = {};
  };

  this.newGame = function () {
    this.initGame();
  };

  this.getPlayer = function () {
    return player;
  };

  this.getBlackM = function () {
    return blackm;
  };

  this.buy = function (a){   //buy from BlackM
    if (player.cash >= blackm.onsale[a].price) {
      player.cash -= blackm.onsale[a].price;
      for (var i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].name === blackm.onsale[a].name) {
          alert('You already have this item!');
          return;
        }
      }
      player.inventory.push(blackm.onsale[a]);
    } else {
      alert('You do not have enough money!');
    }
  };

  this.sell = function() {
    player.cash += (
      blackm.sellprice.ecData * player.ecData +
      blackm.sellprice.dataA * player.dataA +
      blackm.sellprice.dataB * player.dataB +
      blackm.sellprice.dataC * player.dataC
    );
    player.ecData = 0;
    player.dataA = 0;
    player.dataB = 0;
    player.dataC = 0;
  };

  this.infect = function (a) {
    if(player.inventory.length !== -1) {
      // TODO append a into marker array
    }
    else{
      alert('Player does not have keylogger!');
    }
  };

  this.updateAtt = function (a) {
    player.attentionLevel += player.inventory[a].risk * 100;
  };

  this.update = function () {
    for (var i = 0; i < player.marker.length; i++){
      player.marker[i].timer -= 1;
      player.marker[i].duration -= 1;
      if(player.marker[i].timer === 0) {
        player.ecData += player.marker[i].generation;
        player.marker[i].timer = 10;
      }
      if(player.marker[i].duration < 0){
        player.marker.pop(player.marker[i]);
      }
    }
  };

  $interval(

  );
});
