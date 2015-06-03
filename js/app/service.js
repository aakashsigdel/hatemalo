angular.module('HateMalo')
	.factory('AssessmentService', ['$http', function($http) {
		//dummy service data
		var data = [
			{
				district: 'Gorkha', vdc: 'RamShah Gaun',
				details: [
					{name: 'Ram Badhur', age: 33, sex: 'male', occupation: 'farmer', risk: 'moderate'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Hunu Maya Rai', age: 54, sex: 'female', occupation: 'Shopkeeper', risk: 'nominal'}
				]
			},
			{
				district: 'Sindhupalchow', vdc: 'Chiple Gaun',
				details: [
					{name: 'Masine Gaire', age: 36, sex: 'male', occupation: 'farmer', risk: 'high'},
					{name: 'Lalit Pokhrel', age: 56, sex: 'male', occupation: 'Labour', risk: 'urgent'},
					{name: 'Jitendra Badhadur Thapa', age: 18, sex: 'male', occupation: 'Shopkeeper', risk: 'nominal'}
				]
			}
		];
		//dummy service functions
		return {
			getAllAssessment: function() {
				return data;
			},
			getAssessmentDetails: function(assessmentId) {
				return data[assessmentId];
			}
		};

		//Acutal service code
		/*return {
			getAllAssessment: function() {
				return $http.get('/api/assessments');
			},
			getAssessmentDetails: function(assessmentId) {
				return  $http.geet('/api/assessments/' + assessmentId);
			},
		};*/


	}]);

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