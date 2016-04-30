'use strict';

var app = angular.module('apiApp');

app.service('Characters', function($http) {
	this.getAll = function () { 	
		return $http.get('http://swapi.co/api/people/');	
	};

	this.getNext = function (next) {
		return $http.get(next);
	};
	this.getPrev = function (previous) {
		return $http.get(previous);
	};
	this.getByName = function (character) {
		return $http.get('http://swapi.co/api/people/1/');
	}
});