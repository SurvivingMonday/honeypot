'use strict';

angular.module('honeypotApp')
    .controller('GameCtrl', function (GameManager) {
      this.game = GameManager;

      this.newGame = function () {
        this.game.newGame();
      };

      this.newGame();
    });
