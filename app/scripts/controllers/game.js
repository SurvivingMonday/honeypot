'use strict';

angular.module('honeypotApp')
    .controller('GameCtrl', function ($scope, GameManager, GameMapService) {

    	var selectedIdx = null;
    	$scope.player = GameManager.getPlayer();
    	$scope.blackMarket = GameManager.getBlackM();

    	$scope.notifyBuy = GameManager.buy;
    	$scope.notifySell = GameManager.sell;
    	
    	$scope.selectInv = function(idx) {
    		if (selectedIdx !== null) {
    			$scope.player.inventory[selectedIdx].selected = false;
    		}
    		selectedIdx = idx;
    		$scope.player.inventory[idx].selected = true;
    	};


    	GameMapService.addClickListeners(function(event) {

        if($scope.player.inventory.length === 0) {

        } else {
          var temp = selectedIdx;
          if (Math.random() < 0.8 && temp !== null) {
            GameMapService.putKeylogger(event.latLng, function(length, marker) {
              console.log(length);
              console.log(marker);
              GameManager.infect(marker, temp, length);
              console.log(asdfa);
              $scope.player = GameManager.getPlayer();
            });
          } else {
            // TODO: Google tag here 'Select a keylogger first'

          }
        }
    	})
    });
