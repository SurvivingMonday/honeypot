'use strict';

angular.module('honeypotApp')
    .controller('GameCtrl', function ($scope, GameMapService) {

		GameMapService.addClickListeners(function(event) {
			GameMapService.putKeylogger(event.latLng, "title",
				function(len, marker) {
					console.log(len);
					console.log(marker);
				}, 
				function(len, marker) {
					console.log(len);
					console.log(marker);
				});
		});
    });
