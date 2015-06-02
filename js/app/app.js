angular.module('HateMalo', [ngRoute])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'intro.html'
			})
			.when('/assessment', {
				templateUrl: 'assessment.html'
			})
			.when('/inventory',{
				templateUrl: 'inventory.html'
			})
			.when('reports', {
				templateUrl: 'reports.html'
			})
			.otherwise({redirectTo: '/home'});
	}]);