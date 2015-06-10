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
			$scope.isLoaded = false;

			ProfileService.getProfileDetails(LoginService.getGroupId())
				.then(function(response) {
					$scope.profileData = response.data;
					$scope.isLoaded = true;
			});
	}])

	.controller('assessmentCtrl', ['$scope', 'AssessmentService', 'LoginService',
		function($scope, AssessmentService, LoginService) {
			$scope.assessmentData = [];
			$scope.isLoaded = false;

			AssessmentService.getAllAssessments(LoginService.getGroupId())
				.then(function(response) {
					$scope.assessmentData = response.data;
					$scope.isLoaded = true;
				});
	}])

	.controller('reportCtrl', ['$scope', 'AssessmentService', '$routeParams',
		function($scope, AssessmentService, $routeParams) {
			$scope.assessmentDetails = {};
			$scope.isLoaded = false;

			AssessmentService.getAssessmentDetails($routeParams.assessmentId)
				.then(function(response) {
					$scope.assessmentDetails = response.data;
					$scope.isLoaded = true;
				});
	}])

	.controller('donorCtrl', ['$scope', 'DonorService', 'LoginService',
		function($scope, DonorService, LoginService) {
			$scope.donorsList = [];
			$scope.isLoaded = false;

			DonorService.getDonors(LoginService.getGroupId())
				.then(function(response) {
					$scope.donorsList = response.data;
					$scope.isLoaded = true;
				});
		}]);
