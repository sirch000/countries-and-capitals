'use strict';

app.factory('GeoNames', function($http) {
    var base = 'http://api.geonames.org';
    var username = 'teachme10code';
    var config = {
        'params': {
            'username': username,
            'callback': 'JSON_CALLBACK'
        }
    };

    return {

        'getCountries': function() {
            var service = 'countryInfoJSON';
            var url = base + '/' + service + '?';
            return $http.jsonp(url, config);
        },

        'getCapitalDetails': function(countryCode, capital) {
            var service = 'searchJSON';
            var url = base + '/' + service + '?country=' + countryCode + '&name_equals=' + capital + '&maxRows=1';
            return $http.jsonp(url, config);
        },

        'getNeighbors': function(geoNameId) {
            var service = 'neighboursJSON';
            var url = base + '/' + service + '?geonameId=' + geoNameId;
            return $http.jsonp(url, config);
        }
    };
});
