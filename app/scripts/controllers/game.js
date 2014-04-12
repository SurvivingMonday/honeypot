'use strict';

angular.module('honeypotApp')
    .controller('GameCtrl', function ($scope, GameManager, GameMapService) {
    	var selectedIdx = null;
    	$scope.player = GameManager.getPlayer();
    	$scope.blackMarket = GameManager.getBlackM();
    	console.log($scope.player.inventory);

    	$scope.notifyBuy = GameManager.buy;
    	$scope.notifySell = GameManager.sell;
    	
    	$scope.selectInv = function(idx) {
    		if (selectedIdx !== null) {
    			$scope.player.inventory[selectedIdx].selected = false;
    		}
    		selectedIdx = idx;
    		$scope.player.inventory[idx].selected = true;
    	};
    });
