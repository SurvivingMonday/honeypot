'use strict';

app.factory('$', function() {
	return $;
});

app.factory('PlacesApi', function() {
	return google.maps.places;
});

app.factory('MapsApi', function() {
	return google.maps.Map;
});

app.factory('maps', function() {
	return google.maps;
});

app.factory('gameMapService', function(PlacesApi, MapsApi, $, maps) {
	var map;
	var startPointAnnArbor = new maps.LatLng(42.2814, -83.7483);

	var initMap = function() {
		var mapOptions = {
			zoom: 15,
			center : startPointAnnArbor
		};
		map = new MapsApi($('#map-canvas')[0], mapOptions);
	};

	var addClickListeners = function(callback) {
		maps.event.addListener(map, 'click', callback);
	};

	var putKeylogger = function(location, title, callback, markerCallback) {
		markerCallback = markerCallback || angular.noop;
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title:title
		});
		maps.event.addListener(marker, 'click', markerCallback);
		var service = new PlacesApi(map);
		var request = {
			location: location,
			radius: 30,
			types:['store', 'school', 'cafe', 'food', 'night_club', 'post_office', 'restaurant', 'school', 'hospital', 'library', 'lodging']
		};
		service.nearbySearch(request, function(results) {
			if (results.length) {
				callback(true, marker);
			}
			else {
				callback(false, marker);
			}
		});
	};

	setTimeout(initMap, 1000);
	return {
		addClickListeners: addClickListeners,
		putKeylogger: putKeylogger
	};
});



