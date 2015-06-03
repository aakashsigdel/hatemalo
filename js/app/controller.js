angular.module('HateMalo')
	.controller('mainCtrl', ['$scope', 'LoginService', function($scope, LoginService) {
		$scope.loginService = LoginService;
		LoginService.session();
	}])
	.controller('introCtrl', ['$scope', 'ProfileService', function($scope, ProfileService) {
		$scope.profileService = ProfileService;
	}]);