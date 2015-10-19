"use strict";

var app = angular.module('app', ['ngRoute'])
	.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: './home.html',
            controller : 'HomeCtrl'
        })
        .when('/countries', {
            templateUrl : './countries.html',
            controller : 'CountriesController'
        })
        .when('/countries/country/:country', {
            templateUrl : './country-detail.html',
            controller : 'CountryDetailsController'
        })
        .when('/error', {
		    template : '<p>Error Page Not Found</p>'
		})

        .otherwise({ redirectTo: '/' });
    })