angular.module('HateMalo', ['ngRoute'])
	.constant('APIDOMAIN', 'http://tomcat8-aakashsigdel.rhcloud.com')
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
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'loginCtrl'
			})
			.when('/donors', {
				templateUrl: 'views/donor.html',
				controller: 'donorCtrl'
			})
			.otherwise({redirectTo: '/home'});
	}]);

