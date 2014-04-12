'use strict';


    app.service('GameManager', function() {

      // Player
      var player = {
        cash: 200,
        attentionLevel: 0, // 0 - 10
        ecData: 0,
        dataA: 0,
        dataB: 0,
        dataC: 0,
        inventory: [],
        marker: []
      };

      // Utilities
      var gametime = 0;

      // Player Private functions

      // Inventories


      // Black Market
      var blackm = {};
      blackm.onsale = [
        // Type => 0: Keylogger, 1: Analyzer
        // ------------ Keyloggers ------------
        {
          name: 'TT130',
          type: 0,
          price: 100,
          risk: 0.2,
          hitfactor: 0.1,
          expiryTime: 0
        },

        {
          name: 'XH-5',
          type: 0,
          price: 150,
          risk: 0.1,
          hitfactor: 0.1,
          expiryTime: 0
        },

        {
          name: 'TT230',
          type: 0,
          price: 200,
          risk: 0.4,
          hitfactor: 0.2,
          expiryTime: 15
        },

        {
          name: 'XH-7',
          type: 0,
          price: 350,
          risk: 0.4,
          hitfactor: 0.25,
          expiryTime: 15
        },

        {
          name: 'TT330',
          type: 0,
          price: 400,
          risk: 0.6,
          hitfactor: 0.4,
          expiryTime: 30
        },

        // ------------ Analyzers -------------
        {
          name: 'AZ9900',
          type: 1,
          price: 100,
          dataA: 0.4,
          dataB: 0.1,
          dataC: 0.01,
          duration: 6
        },

        {
          name: 'AZ8800',
          type: 1,
          price: 180,
          dataA: 0.4,
          dataB: 0.15,
          dataC: 0.05,
          duration: 7
        },

        {
          name: 'TM2230',
          type: 1,
          price: 250,
          dataA: 0.5,
          dataB: 0.2,
          dataC: 0.05,
          duration: 5
        },

        {
          name: 'SS8000',
          type: 1,
          price: 600,
          dataA: 0.7,
          dataB: 0.35,
          dataC: 0.15,
          duration: 7
        },

        {
          name: 'SS9999',
          type: 1,
          price: 1500,
          dataA: 0.85,
          dataB: 0.4,
          dataC: 0.2,
          duration: 8
        }
      ];

      this.updatetime = function () {
        return (gametime = setInterval(1000));
      }();


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
      }

      this.buy = function (a){   //buy from BlackM
        if (player.cash >= blackm.onsale[a].price) {
          player.cash -= blackm.onsale[a].price;
          player.inventory.push(blackm);
          cashCallback(player.cash);
          //blackm.onsale.delete(a);
          return;
        } else {
          alert("You do not have enough money!");
          return;
        }
      }

      this.sell = function(a) {
        function sell(){  // sell to BlackM
          return (
              blackm.sellprice.unencrypteddata * player.produce.unencrypteddata +
              blackm.sellprice.credentials * player.produce.credentials +
              blackm.sellprice.creditcard * player.produce.creditcard +
              blackm.sellprice.identity * player.produce.identity
              );
        }
      }

    });
