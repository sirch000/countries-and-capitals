"use strict";

var app = angular.module('app', ['ngRoute'])
	.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: './home.html',
            controller : 'HomeCtrl'
        })
        .when('/countries', {
            templateUrl : './countries.html',
            controller : 'GeoNamesController',
        })
        .when('/countries/country/:country', {
            templateUrl : './country-detail.html',
            controller : 'GeoNamesController',
        })
        .when('/error', {
		    template : '<p>Error Page Not Found</p>'
		});
    })