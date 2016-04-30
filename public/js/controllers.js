'use strict';

var app = angular.module('apiApp');

app.controller('listCtrl', function($q, Characters, $scope, $state, $stateParams) {
	Characters.getAll()
	.then(result => {
		$scope.characters = result.data.results;
		$scope.next = result.data.next;
		$scope.previous = result.data.previous;
		console.log($scope.characters);
		
	})
	.catch(err => {
		console.log('err:', err);
	})

	$scope.nextPage = function() {
		console.log('next:', $scope.next);
		Characters.getNext($scope.next)
	.then(result => {
		$scope.previous = result.data.previous;
		console.log('prv:', $scope.previous);
		$scope.characters = result.data.results;
		$scope.next = result.data.next;
		console.log('Next result:', result);
	})
	.catch(err => {
		console.log('err:', err);
	})
	}	

	$scope.prevPage = function() {
		console.log('prev', $scope.previous);
		Characters.getPrev($scope.previous)
	.then(result => {
		$scope.characters = result.data.results;
		$scope.next = result.data.next;
		$scope.previous = result.data.previous;
		console.log('Prev result:', result);
	})
	.catch(err => {
		console.log('err:', err);
		})
	}
})

app.controller('detail', function($scope, $state, $q, Characters, $stateParams) {
	Characters.getAll()
	.then(result => {
		$scope.characters = result.data.results;
		$scope.next = result.data.next;
		$scope.previous = result.data.previous;
		console.log($scope.characters);
		
	})
	.catch(err => {
		console.log('err:', err);
	})

	$scope.getByName = function() {
		Characters.getByName($state.params.id)
		console.log($state.params.id)
		
	.then(result => {
		$scope.character = result.url
		console.log('result', $scope.character)
	
	})
	.catch(err => {
		console.log('err:', err);
	})
	}
});

