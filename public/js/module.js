var app = angular.module('apiApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('list', {
			url: '/list',
			templateUrl: '/html/list.html',
			controller: 'listCtrl'
		})
		.state('detail', {
			url: '/detail/:character',
			templateUrl: '/html/detail.html',
			controller: 'detail',
			// resolve: {
			// 	character: 
			// 		function(Characters, $stateParams) {
			// 		return Characters.getAll($stateParams.result.data.results)
			// 	}
			// }
		})






$urlRouterProvider.otherwise('/');

});