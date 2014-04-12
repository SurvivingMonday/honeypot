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

    	GameMapService.addClickListeners(function(event)) {

    		var temp = selectedIdx;

    		if (Math.random() < 0.8) {
    			GameMapService.putKeylogger(event.latLng, function(length, marker){
					GameManager.infect(marker, temp, length);
    			});
    		}
    	})
    });
