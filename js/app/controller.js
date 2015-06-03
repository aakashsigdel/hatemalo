angular.module('HateMalo')
	.controller('mainCtrl', ['$scope', 'LoginService', function($scope, LoginService) {
		$scope.loginService = LoginService;
		LoginService.session();
	}])
	.controller('introCtrl', ['$scope', 'ProfileService', function($scope, ProfileService) {
		$scope.profileData = ProfileService.getProfileDetails(0);
	}])
	.controller('assessmentCtrl', ['$scope', 'AssessmentService', function($scope, AssessmentService) {
		$scope.assessmentData = AssessmentService.getAllAssessments();
		$scope.getAssessmentDetails = AssessmentService.getAssessmentDetails(1);
	}]);