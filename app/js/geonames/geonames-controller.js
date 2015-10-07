'use strict';

app.controller('GeoNamesController', ['$rootScope', '$scope', '$location','GeoNames',

    function($rootScope, $scope, $location, GeoNames) {

        var geoNamesSuccess = function (data) {
            if (data.length > 0) {
                $scope.countries = data;
                console.log($scope.countries);
            }
        }

        GeoNames.get({ cache: true}).success(function (response){
            return geoNamesSuccess(response.geonames);
        });

        $scope.countryDetail = function(country) {
            $rootScope.countryCode = country["countryCode"];
            $rootScope.countryPopulation = country["population"];
            $rootScope.area = country["areaInSqKm"];
            $rootScope.capital = country["capital"];
            $location.path('/countries/country/' + country["countryCode"]);

        }
    }
])
    .controller('HomeCtrl', function($scope) {
    })




