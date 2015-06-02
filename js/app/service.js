angular.module('HateMalo')
	.factory('AssessmentService', ['$http', function($http) {
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
		return {
			getAllAssessment: function() {
				return data;
			},
			getAssessmentDetails: function(assessmentId) {
				return data[assessmentId];
			}
		};
	}]);