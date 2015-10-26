'use strict';

app.controller('CountriesController', ['$scope', '$rootScope', '$location', 'GeoNames', 'CountryProperties',
        function($scope, $rootScope, $location, GeoNames, CountryProperties) {
            $rootScope.style='no-scroll';

            var countriesSuccess = function (data) {
                if (data.length > 0) {
                    $scope.countries = data;
                }
            };

            GeoNames.getCountries().success(function (response){
                return countriesSuccess(response.geonames);
            });

            $scope.setCountryDetails = function(country) {
                CountryProperties.setCountryName(country["countryName"]);
                CountryProperties.setCountryCode(country["countryCode"]);
                CountryProperties.setCountryPopulation(country["population"]);
                CountryProperties.setArea(country["areaInSqKm"]);
                CountryProperties.setCapital(country["capital"]);
                CountryProperties.setGeoNameId(country["geonameId"]);
                CountryProperties.setCountryFlag(country["countryCode"]);
                CountryProperties.setMapImage(country["countryCode"]);
                $location.path('/countries/country/' + country["countryCode"]);
            };
    }
])
    .controller('CountryDetailsController', ['$scope', '$rootScope', 'GeoNames', 'CountryProperties',
        function($scope, $rootScope, GeoNames, CountryProperties) {

            $scope.init = function() {
                $rootScope.style = 'scroll'; //show vertical scroll bar
                $scope.getCountryDetails();
            };

            $scope.getCountryDetails = function() {
                $scope.countryName = CountryProperties.getCountryName();
                $scope.countryCode = CountryProperties.getCountryCode();
                $scope.countryPopulation = CountryProperties.getCountryPopulation();
                $scope.area = CountryProperties.getArea();
                $scope.capital = CountryProperties.getCapital();
                $scope.geoNameId = CountryProperties.getGeoNameId();
                $scope.countryFlag = CountryProperties.getCountryFlag();
                $scope.mapImage = CountryProperties.getMapImage();

                 var capitalDetailsSuccess = function (data) {
                     if (data.length > 0) {
                         $scope.capitalDetails = data;
                         $scope.capitalPopulation = $scope.capitalDetails[0].population;
                    }
                 };

                 GeoNames.getCapitalDetails($scope.countryCode, $scope.capital).success(function (response) {
                    return capitalDetailsSuccess(response.geonames);
                 });

                var neighborsSuccess = function (data) {
                    if (data === undefined) {
                        $scope.neighbors === false;
                    } else if (data.length > 0) {
                        $scope.neighbors = data;
                    } else {
                        return
                    }
                };

                GeoNames.getNeighbors($scope.geoNameId).success(function (response) {
                    return neighborsSuccess(response.geonames);
                });
            };
        }
    ])

    .controller('HomeCtrl', function($scope, $rootScope) {
        $rootScope.style = "no-scroll";
    });