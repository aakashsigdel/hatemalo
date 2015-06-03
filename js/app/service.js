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


	}])

	//Service for data about donors
	.factory('DonorService', ['$http', function($http) {
		return {
			getAllDonors: function() {
				return $http.get('/api/donors');
			},
			getDonorDetails: function(donorId) {
				return $http.get('/api/donors/' + donorId);
			}
		};
	}])

	//service for data about profile of a group
	.factory('ProfileService', ['$http', function($http) {
		var profileData = {donorAgre:{}, assessmentAgre: {}, profilePic: '', profileName: '', profileDesc: ''};

		var fetchDonorAgre = function() {
				return $http.get('/api/donors/donorAgre')
							.then(function(response) {
								profileData.donorAgre = response.data;

								return response;
							});
			}(); //calling inline

			var fetchAssessmentAgre = function() {
				return $http.get('/api/assessments/assessmentAgre')
							.then(function(response) {
								profileData.assessmentAgre = response.data;

								return response;
							});
			}(); //calling inline

			var fetchProfileDetails = function(){
				return $http.get('api/profileDetails')
								.then(function(response) {
									profileData.profilePic = response.data.profilePic;
									profileData.profileName = response.data.profileName;
									profileData.profileDesc = response.data.profileDesc;

									return response;
								});
			}();

		return profileData;
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