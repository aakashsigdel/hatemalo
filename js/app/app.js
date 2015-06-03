angular.module('HateMalo', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'views/intro.html',
				controller: 'introCtrl'
			})
			.when('/assessment', {
				templateUrl: 'views/assessment.html'
			})
			.when('/inventory',{
				templateUrl: 'views/inventory.html'
			})
			.when('reports', {
				templateUrl: 'views/reports.html'
			})
			.otherwise({redirectTo: '/home'});
	}]);