'use strict';

angular.module('honeypotGame', ['ngCookies'])
    .service('GameManager', function($q, $cookieStore) {

      // Player
      this.cash = 0;
      this.inventory = {};

      // Inventories
      // - Keyloggers

      // -- Begin
      var Begin = {
        type: 0,
        price: 100,
        risk: 0.2,
        hitfactor: 0.4
      };

      // Black Market
      var blackm = {};
      blackm.onsale = {};
      blackm.onsale.keylogger = {};

      this.initGame = function () {
        this.cash = 0;
        this.inventory = {};
        blackm.onsale.keylogger.push(Begin);
      };

      this.newGame = function () {
        this.initGame();
      };

    });
