'use strict';

app.service('GameManager', function($interval, GameMapService) {

  // Player
  var player = {
    cash: 210,
    attentionLevel: 0, // 0 - 100
    ecData: 0,
    ecDataTemp: 0,
    dataA: 0,
    dataB: 0,
    dataC: 0,
    points: 0,
    gameover: false,
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
      hitfactor: 0.75,
      expiryTime: 6,
      installationCost: 10
    },

    {
      name: 'XH-5',
      type: 0,
      quality: 2,
      price: 150,
      risk: 0.1,
      hitfactor: 0.75,
      expiryTime: 6,
      installationCost: 20
    },

    {
      name: 'TT230',
      type: 0,
      quality: 3,
      price: 200,
      risk: 0.4,
      hitfactor: 1.2,
      expiryTime: 18,
      installationCost: 30
    },

    {
      name: 'XH-7',
      type: 0,
      quality: 4,
      price: 350,
      risk: 0.4,
      hitfactor: 1.4,
      expiryTime: 18,
      installationCost: 40
    },

    {
      name: 'TT330',
      type: 0,
      quality: 5,
      price: 400,
      risk: 0.6,
      hitfactor: 2.2,
      expiryTime: 30,
      installationCost: 50
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
    player.cash = 210;
    player.attentionLevel = 0; // 0 - 100
    player.ecData = 0;
    player.ecDataTemp = 0;
    player.dataA = 0;
    player.dataB = 0;
    player.dataC = 0;
    player.points = 0;
    player.gameover = false;
    player.inventory = [];
    player.marker = [];
  };

  this.getPlayer = function () {
    return player;
  };

  this.getBlackM = function () {
    return blackm;
  };

  var alertCallBack = angular.noop;

  this.onAlert = function (callback) {
    alertCallBack = callback;
  };

  this.buy = function (a) { //buy from BlackM
    if (player.cash >= blackm.onsale[a].price) {
      player.cash -= blackm.onsale[a].price;
      for (var i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].name === blackm.onsale[a].name) {
          alertCallBack('You already have this item!');
          return;
        }
      }
      player.inventory.push(blackm.onsale[a]);
    } else {
      alertCallBack('You do not have enough money!');
    }
  };

  this.sell = function () {
    player.cash += (
        blackm.sellprice.ecData * player.ecData +
        blackm.sellprice.dataA * player.dataA +
        blackm.sellprice.dataB * player.dataB +
        blackm.sellprice.dataC * player.dataC
        );
    player.ecData = 0;
    player.ecDataTemp = 0;
    player.dataA = 0;
    player.dataB = 0;
    player.dataC = 0;
  };

  this.infect = function (a, b, c) {
    if (player.cash >= player.inventory[b].installationCost) {
      a.countdown = Math.round(Math.random() + 1);
      a.duration = player.inventory[b].expiryTime + Math.floor((Math.random() * 30) + 1);
      a.timer = 0;
      a.gps = player.inventory[b].hitfactor;
      a.producing = false; // false -> not producing, true -> producing
      a.lastbreath = false;
      if (c > 0) {
        a.public = true;
        player.points = c * 100;
      } else {
        a.public = false;
      }

      player.marker.push(a);
      player.cash -= player.inventory[b].installationCost;
      player.attentionLevel += player.inventory[b].risk * 20;
      player.points += c * 100;
    } else {
      alertCallBack('You don\'t have enough money!');
    }
  };

  this.analysis = function () {
    player.dataA += Math.round(0.6 * player.ecData);
    player.dataB += Math.round(0.3 * player.ecData);
    player.dataC += Math.round(0.1 * player.ecData);
    player.ecData = 0;
    player.ecDataTemp = 0;
  };

  this.update = function () {
    for (var i = 0; i < player.marker.length; i++) {
      player.marker[i].duration -= 1;
      if (player.marker[i].countdown >= 0) {
        player.marker[i].countdown -= 1;
        player.marker[i].timer = player.marker[i].duration;
      } else if (player.marker[i].countdown === -1) {
        player.marker[i].timer -= 1;
        if (player.marker[i].producing === true) {
          GameMapService.animateMarkerBounce(player.marker[i]);
          player.ecDataTemp += player.marker[i].gps;
          player.ecData = Math.floor(player.ecDataTemp);
        } else if (player.marker[i].public === true && player.marker[i].producing === false && player.marker[i].lastbreath === false) {
          player.marker[i].producing = true;

        }
      }
      if (player.marker[i].duration === 5) {
        GameMapService.brokenKeyLogger(player.marker[i]);
      } else if (player.marker[i].duration === 1 && player.marker[i].lastbreath === false) {
        GameMapService.animateMarkerStop(player.marker[i]);
        player.marker[i].producing = 0;
        player.marker[i].lastbreath = false;
      }
      if (player.marker[i].duration < 0) {
        player.marker[i].setMap(null);
        player.marker.splice(i, 1);
      }
    }
    $interval(this.update, 1000);
  };
});
