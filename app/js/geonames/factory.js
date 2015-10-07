'use strict';

app.factory('GeoNames', ['$http',
	function($http) {
		var base = 'http://api.geonames.org';
		var service = 'countryInfoJSON';
		var username = 'teachme10code';

		return {
			'get': function() {
				var url = base + '/' + service + '?';
				var config = {
					'params': {
                        'username': username,
						'callback': 'JSON_CALLBACK'
					}
				};
				return $http.jsonp(url, config);
			}
		};
	}
]);


//capital info:
//http://api.geonames.org/searchJSON?country=AF&name_equals=kabul&lang=en&maxRows=1&username=username