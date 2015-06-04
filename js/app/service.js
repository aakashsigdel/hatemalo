angular.module('HateMalo')
	.factory('AssessmentService', ['$http', function($http) {
		//dummy service data
		var AssessmentData = [
			{
				district: 'Gorkha', vdc: 'RamShah Gaun', groupId: 1,
				details: [
					{name: 'Ram Badhur', age: 33, sex: 'male', occupation: 'farmer', risk: 'moderate'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Hunu Maya Rai', age: 54, sex: 'female', occupation: 'Shopkeeper', risk: 'nominal'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'}
				]
			},
			{
				district: 'Sindhupalchow', vdc: 'Chiple Gaun', groupId: 2,
				details: [
					{name: 'Masine Gaire', age: 36, sex: 'male', occupation: 'farmer', risk: 'high'},
					{name: 'Lalit Pokhrel', age: 56, sex: 'male', occupation: 'Labour', risk: 'urgent'},
					{name: 'Jitendra Badhadur Thapa', age: 18, sex: 'male', occupation: 'Shopkeeper', risk: 'nominal'},
					{name: 'Masine Gaire', age: 36, sex: 'male', occupation: 'farmer', risk: 'high'},
					{name: 'Masine Gaire', age: 36, sex: 'male', occupation: 'farmer', risk: 'high'},
					{name: 'Masine Gaire', age: 36, sex: 'male', occupation: 'farmer', risk: 'high'},
					{name: 'Masine Gaire', age: 36, sex: 'male', occupation: 'farmer', risk: 'high'}
				]
			},
			{
				district: 'Gorkha', vdc: 'RamShah Gaun', groupId: 1,
				details: [
					{name: 'Ram Badhur', age: 33, sex: 'male', occupation: 'farmer', risk: 'moderate'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Hunu Maya Rai', age: 54, sex: 'female', occupation: 'Shopkeeper', risk: 'nominal'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'}
				]
			},
			{
				district: 'Gorkha', vdc: 'RamShah Gaun', groupId: 1,
				details: [
					{name: 'Ram Badhur', age: 33, sex: 'male', occupation: 'farmer', risk: 'moderate'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Hunu Maya Rai', age: 54, sex: 'female', occupation: 'Shopkeeper', risk: 'nominal'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'}
				]
			},
			{
				district: 'Gorkha', vdc: 'RamShah Gaun', groupId: 1,
				details: [
					{name: 'Ram Badhur', age: 33, sex: 'male', occupation: 'farmer', risk: 'moderate'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Hunu Maya Rai', age: 54, sex: 'female', occupation: 'Shopkeeper', risk: 'nominal'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'}
				]
			},
			{
				district: 'Gorkha', vdc: 'RamShah Gaun', groupId: 1,
				details: [
					{name: 'Ram Badhur', age: 33, sex: 'male', occupation: 'farmer', risk: 'moderate'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Hunu Maya Rai', age: 54, sex: 'female', occupation: 'Shopkeeper', risk: 'nominal'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'}
				]
			},
			{
				district: 'Gorkha', vdc: 'RamShah Gaun', groupId: 1,
				details: [
					{name: 'Ram Badhur', age: 33, sex: 'male', occupation: 'farmer', risk: 'moderate'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Hunu Maya Rai', age: 54, sex: 'female', occupation: 'Shopkeeper', risk: 'nominal'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'},
					{name: 'Jamuna Sapkota', age: 24, sex: 'female', occupation: 'house wife', risk: 'urgent'}
				]
			}
		];
		//dummy service functions
		return {
			getAllAssessments: function() {
				return AssessmentData;
			},
			getAssessmentDetails: function(assessmentId) {
				return AssessmentData[assessmentId];
			}
		};

		//Acutal AssesmentService code
		/*return {
			getAllAssessments: function() {
				return $http.get('/api/assessments');
			},
			getAssessmentDetails: function(assessmentId) {
				return  $http.geet('/api/assessments/' + assessmentId);
			},
		};*/


	}])

	//Service for data about donors
	.factory('DonorService', ['$http', function($http) {
		//dummy data
		var donorData = [
			{donorName: 'Aakash Sigdel', amount: 500, country: 'Nepal', groupId: 1},
			{donorName: 'Pravin Bashyal', amount: 1000, country: 'Andora', groupId: 2},
			{donorName: 'Nabeen khadka', amount: 300, country: 'Japan', groupId: 1},
			{donorName: 'Prakash Gaire', amount: 600, country: 'China', groupId: 1}
		];

		//dummy functions
		return {
			getAllDonors: function() {
				return donorData;
			},
			getDonorDetails: function(donorId) {
				return donorData[donorId];
			}
		};

		//Actual DonorService Code
		/*return {
			getAllDonors: function() {
				return $http.get('/api/donors');
			},
			getDonorDetails: function(donorId) {
				return $http.get('/api/donors/' + donorId);
			}
		};*/
	}])

	//service for data about profile of a group
	.factory('ProfileService', ['$http', function($http) {
		//dummy data
		var profileData = [
			{donorAgre: {noOfDonors: 3, totalDonation: 1400}, assessmentAgre: 1, profilePic: 'imgs/profile1.jpg', profileName: 'Kathmandu Club Club', profileDesc: 'Some people say my love canot be true, but believe me my love and i will show you'},
			{donorAgre: {noOfDonors:1, totalDonation: 1000}, assessmentAgre: 1, profilePic: 'imgs/profile2.jpg', profileName: 'Chitwan Youth Club', profileDesc: 'Bheta vayeau aaja hami syndicate ko gate ko maja hami'}
		];

		//dummy functions
		/*return {
			fetchDonorAgre: function(groupId) {
				return profileData[groupId].donorAgre;
			},
			fetchAssessmentAgre: function(groupId) {
				return profileData[groupId].assessmentAgre;
			},
			fetchProfileDetails: function(groupId) {
				return {profilePic: profileData[groupId].profilePic, profileName: profileData[groupId].profileName, profileDesc: profileData[groupId].profileDesc};
			}
		};*/
		return {
			getProfileDetails: function(groupId) {
				return profileData[groupId];
			}
		};

		//acutal ProfileService code
		/*var service = {
			fetchDonorAgre : function(groupId) {
					return $http.get('/api/donors/donorAgre/' + groupId);
				},
				fetchAssessmentAgre : function(groupId) {
					return $http.get('/api/assessments/assessmentAgre/' + groupId);
				},
				fetchProfileDetails : function(groupId) {
					return $http.get('api/profileDetails/' + groupId);
				}
		};

		return service;*/
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
		return {};
	}]);