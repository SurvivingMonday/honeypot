'use strict';

app.service('GameManager', function($interval, GameMapService) {

  // Player
  var player = {
    cash: 10000,
    attentionLevel: 0, // 0 - 10
    ecData: 10,
    ecDataTemp: 10,
    dataA: 10,
    dataB: 10,
    dataC: 10,
    points: 0,
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
      hitfactor: 0.4,
      expiryTime: 0,
      installationCost: 10
    },

    {
      name: 'XH-5',
      type: 0,
      quality: 2,
      price: 150,
      risk: 0.1,
      hitfactor: 0.4,
      expiryTime: 0,
      installationCost: 12
    },

    {
      name: 'TT230',
      type: 0,
      quality: 3,
      price: 200,
      risk: 0.4,
      hitfactor: 0.8,
      expiryTime: 15,
      installationCost: 16
    },

    {
      name: 'XH-7',
      type: 0,
      quality: 4,
      price: 350,
      risk: 0.4,
      hitfactor: 1,
      expiryTime: 15,
      installationCost: 19
    },

    {
      name: 'TT330',
      type: 0,
      quality: 5,
      price: 400,
      risk: 0.6,
      hitfactor: 1.6,
      expiryTime: 30,
      installationCost: 25
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

  var AlertCallBack = angular.noop;

  this.onAlert = function (callback) {
    AlertCallBack = callback;
  };

  this.buy = function (a){   //buy from BlackM
    if (player.cash >= blackm.onsale[a].price) {
      player.cash -= blackm.onsale[a].price;
      for (var i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].name === blackm.onsale[a].name) {
          AlertCallBack('You already have this item!');
          return;
        }
      }
      player.inventory.push(blackm.onsale[a]);
    } else {
      AlertCallBack('You do not have enough money!');
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

  this.infect = function (a, b, c) {
    a.countdown = 0;
    a.duration = player.inventory[b].expiryTime + Math.floor((Math.random()*30)+1);
    a.timer = 0;
    a.gps = player.inventory[b].hitfactor;
    a.index = b;
    if(c === 0) {
      a.public = true;
    } else {
      a.public = false;
    }

    player.marker.push(a);
    console.log(b);
    player.cash -= player.inventory[b].installationCost;
    console.log(player.cash);
    player.attentionLevel += player.inventory[b].risk * 10;
    player.points += c * 100;
  };

  this.update = function () {
    for (var i = 0; i < player.marker.length; i++){
      player.marker[i].duration -= 1;
      if (player.marker[i].countdown === 0) {
        player.marker[i].countdown -= 1;
        player.marker[i].timer = player.marker[i].duration;
      } else if (player.marker[i].countdown === -1) {
        player.marker[i].timer -= 1;
        if(player.marker[i].public === true) {
          player.ecDataTemp += player.marker[i].gps;
          player.ecData = Math.floor(player.ecDataTemp);
        }

      }
      if(player.marker[i].duration === 5) {

        GameMapService.brokenKeyLogger(player.marker[i]);
      }
      if(player.marker[i].duration < 0){
        player.marker[i].setMap(null);
        player.marker.splice(player.marker[i].index, 1);
      }
    }
  };

  $interval(this.update, 1000);
});
