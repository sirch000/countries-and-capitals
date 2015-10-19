'use strict';

app.controller('CountriesController', ['$scope', '$location', 'GeoNames', 'CountryProperties',
        function($scope, $location, GeoNames, CountryProperties) {

            var countriesSuccess = function (data) {
                if (data.length > 0) {
                    $scope.countries = data;
                }
            };

            GeoNames.getCountries().success(function (response){
                return countriesSuccess(response.geonames);
            });

            $scope.setCountryDetails = function(country) {
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
    .controller('CountryDetailsController', ['$scope', 'GeoNames', 'CountryProperties',
        function($scope, GeoNames, CountryProperties) {

            $scope.getCountryDetails = function() {
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
                    if (data.length > 0) {
                        $scope.neighbors = data;
                    } else {
                        $scope.neighbors = "n/a";
                    }
                };

                GeoNames.getNeighbors($scope.geoNameId).success(function (response) {
                    return neighborsSuccess(response.geonames);
                });
            };
        }
    ])

    .controller('HomeCtrl', function($scope) {
    });