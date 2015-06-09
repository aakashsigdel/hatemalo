angular.module('HateMalo')
	.factory('AssessmentService', ['APIDOMAIN', '$http', 'LoginService', function(APIDOMAIN, $http, LoginService) {
		//Acutal AssesmentService code
		return {
			getAllAssessments: function(groupId) {
				return $http.get(APIDOMAIN + '/api/group_assessments/' + groupId);
			},
			getAssessmentDetails: function(assessmentId) {
				return  $http.get(APIDOMAIN + '/api/assessment/' + assessmentId);
			},
		};


	}])

	//Service for data about donors
	.factory('DonorService', ['$http', 'APIDOMAIN', function($http, APIDOMAIN) {
		//Actual DonorService Code
		return {
			getDonors: function(groupId) {
				return $http.get(APIDOMAIN + '/api/donors/' + groupId);
			}
		};
	}])

	//service for data about profile of a group
	.factory('ProfileService', ['$http', 'APIDOMAIN', function($http, APIDOMAIN) {
		return {
			getProfileDetails: function(groupId) {
				return $http.get(APIDOMAIN + '/api/group/' + groupId);
			}
		};
	}])




/*
	//Login service for loging in to the system and checking the session
	.factory('LoginService', ['$http', function($http) {
		var service = {
			loginStatus: false,

			session: function() {
				return $http.get('/api/session')
								.then(function(response){
									service.loginStatus = true;
									return response;
								});
			},

			login: function(user) {
				return $http.post('/api/login', user)
								.then(function(response) {
									service.loginStatus = true;
								});
			}
		};
		return service;
	}]);
*/
	.factory('LoginService', ['$http', function() {
		var groupId = 1;
		var groupName = "Ktm Club Club";
		return {
			getGroupId: function() {
				return groupId;
			},
			setGroupId: function(_groupId) {
				groupId = _groupId;
			},
			getGroupName: function() {
				return groupName;
			},
			setGroupName: function(_groupName) {
				groupName = _groupName;
			}
		};
	}]);
