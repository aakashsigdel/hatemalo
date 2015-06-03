angular.module('HateMalo')
	.controller('mainCtrl', ['$scope', 'LoginService', function($scope, LoginService) {
		$scope.loginService = LoginService;
		LoginService.session();
	}]);
	