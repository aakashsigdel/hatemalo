angular.module('HateMalo', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'views/intro.html',
				controller: 'introCtrl'
			})
			.when('/assessment', {
				templateUrl: 'views/assessment.html',
				controller: 'assessmentCtrl'
			})
			.when('/inventory',{
				templateUrl: 'views/inventory.html'
			})
			.when('/reports/assessmentId/:assessmentId', {
				templateUrl: 'views/reports.html',
				controller: 'reportCtrl'
			})
			.otherwise({redirectTo: '/home'});
	}]);