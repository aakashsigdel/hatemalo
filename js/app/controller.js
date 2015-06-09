angular.module('HateMalo')

	.controller('mainCtrl', ['$scope', 'LoginService',
		function($scope, LoginService) {
			$scope.loginService = LoginService;
			LoginService.session();

	}])

	.controller('loginCtrl', ['$scope', 'LoginService',
		function($scope, LoginService) {
			$scope.submit = function() {
				console.log($scope.user);
			};
	}])

	.controller('introCtrl', ['$scope', 'ProfileService', 'LoginService',
		function($scope, ProfileService, LoginService) {
			$scope.profileData = {};

			ProfileService.getProfileDetails(LoginService.getGroupId())
				.then(function(response) {
					$scope.profileData = response.data;
			});
	}])

	.controller('assessmentCtrl', ['$scope', 'AssessmentService', 'LoginService',
		function($scope, AssessmentService, LoginService) {
			$scope.assessmentData = [];

			AssessmentService.getAllAssessments(LoginService.getGroupId())
				.then(function(response) {
					$scope.assessmentData = response.data;
				});
	}])

	.controller('reportCtrl', ['$scope', 'AssessmentService', '$routeParams',
		function($scope, AssessmentService, $routeParams) {
			$scope.assessmentDetails = {};

			AssessmentService.getAssessmentDetails($routeParams.assessmentId)
				.then(function(response) {
					$scope.assessmentDetails = response.data;
				});
	}]);
