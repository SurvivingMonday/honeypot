'use strict';

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};



app.controller('GameCtrl', function ($scope, $timeout, GameManager, GameMapService, $modal, $log) {

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
      if (Math.random() < 0.7 && temp !== null) {
        GameMapService.putKeylogger(event.latLng, function (length, marker) {
          GameManager.infect(marker, temp, length);
          $scope.player = GameManager.getPlayer();
        });
      } else {
      	errorNotify('Keylogger deployment failed!!');
      }
    }
	});

  $scope.items = ['item1', 'item2', 'item3'];
  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  GameManager.onGameOver($scope.open);
});


app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.