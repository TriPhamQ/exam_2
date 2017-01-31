myApp.factory('dashboardFactory', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
	console.log('Dashboard Factory');
	var factory = {};

	factory.getall = function (callback) {
		console.log("Let's get all the users...");
		$http.get('/questions').then(function (output) {
			callback(output);
		});
	};

	return factory;
}]);
