'use strict';

app.controller('GameCtrl', function ($scope, $timeout, GameManager, GameMapService) {

	var selectedIdx = null;
	var errorNotify = function(str) {
		$scope.notifyMessage = str;
		$scope.showMessage = true;
		$timeout(function() {
			$scope.showMessage = false;
			$scope.notifyMessage = '';
		}, 3000);
	};

	GameManager.onAlert(errorNotify);

	$scope.player = GameManager.getPlayer();
	$scope.blackMarket = GameManager.getBlackM();

	$scope.notifyBuy = GameManager.buy;
	$scope.notifySell = GameManager.sell;
  $scope.notifyAnalyze = GameManager.analysis;
	
	$scope.selectInv = function(idx) {
		if (selectedIdx !== null) {
			$scope.player.inventory[selectedIdx].selected = false;
		}
		selectedIdx = idx;
		$scope.player.inventory[idx].selected = true;
	};


	GameMapService.addClickListeners(function(event) {

		if($scope.player.inventory.length === 0) {
			errorNotify('You do not have inventory!');
		} 
		else if (selectedIdx === null) {
			errorNotify('You did not select a key logger.');
		}
		else {
      var temp = selectedIdx;
      if (Math.random() < 0.8 && temp !== null) {
        GameMapService.putKeylogger(event.latLng, function (length, marker) {
          GameManager.infect(marker, temp, length);
          $scope.player = GameManager.getPlayer();
        });
      }
    }
	});
});
