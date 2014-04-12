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

app.factory('GameMapService', function(PlacesApi, MapsApi, $, maps) {

	var map;
	var startPointAnnArbor = new maps.LatLng(42.2814, -83.7483);

	var initMap = function() {

		// Create an array of styles.
		var styles = [
		{
			featureType: 'all',
			stylers: [
			{ saturation: -100 }
			]
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels',

			stylers: [
			{ hue: '#00ffee' },
			{ saturation: -50 }
			]
		},
		{
			featureType: 'poi.business',
			elementType: 'labels',

			stylers: [
			{ visibility: 'simplified' }
			]
		}
		];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,
		{
			name: 'Styled Map',
			minZoom: 11,
			maxZoom: 15
		});

		// Set the map options.
		var mapOptions = {
			zoom: 15,
			center : startPointAnnArbor
		};

		// Make the map object.
		map = new MapsApi(document.getElementById('map-canvas'),
			mapOptions);
		
		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	};

	var addClickListeners = function(callback, markerCallback) {
		maps.event.addListener(map, 'click', function(event) {
			putKeylogger(event.latLong, callback, markerCallback);
		});
	};

	var putKeylogger = function(location, callback, markerCallback) {
		markerCallback = markerCallback || angular.noop;

		var image = {

		  url: '/images/computers.png',
		  // This marker is 20 pixels wide by 32 pixels tall.
		  size: new google.maps.Size(32, 35),
		  // The origin for this image is 0,0.
		  origin: new google.maps.Point(0,0),
		  // The anchor for this image is the base of the icon at 0,32.
		  anchor: new google.maps.Point(0, 32)
		};

		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: image
		});

		maps.event.addListener(marker, 'click', markerCallback);

		var service = new PlacesApi(map);

		var request = {
			location: location,
			radius: 30,
			types:['store', 'school', 'cafe', 'food', 'night_club', 'post_office',
			'restaurant', 'school', 'hospital', 'library', 'lodging']
		};

		service.nearbySearch(request, function(results) {
			callback(results.length, marker);
		});
	};

	// This should be called when keylogger successfully takes in data.
	var animateMarker = function(marker) {

		marker.animation = google.maps.Animation.BOUNCE;
	};

	// Called when key logger is broken.
	var brokenKeyLogger = function(marker) {

		var newImage = {

			url: '/images/ant-export.png',
			// This marker is 20 pixels wide by 32 pixels tall.
			size: new google.maps.Size(32, 35),
			// The origin for this image is 0,0.
			origin: new google.maps.Point(0,0),
			// The anchor for this image is the base of the icon at 0,32.
			anchor: new google.maps.Point(0, 32)
		};

		marker.icon = newImage;
	};

	initMap();

	return {
		addClickListeners: addClickListeners,
		putKeylogger: putKeylogger,
		animateMarker : animateMarker,
		brokenKeyLogger: brokenKeyLogger
	};
});



