myApp.controller('dashboardController', ['$scope', 'dashboardFactory', '$location', '$rootScope', '$cookies', function ($scope, dashboardFactory, $location, $rootScope, $cookies) {
    console.log('dashboardController loaded');

	$scope.logOut = function () {
        $cookies.remove('token');
        $cookies.remove('currentuser');
        $cookies.remove('currentuser_id');
        $rootScope.token = null;
        $rootScope.currentuser = null;
        $rootScope.currentuser_id = null;
        $location.url('/');
    };

	$scope.show = function (id) {
		console.log(id);
		$rootScope.showquestion = id;
        $cookies.put('showquestion', $rootScope.showquestion);
		$location.url('/show')
	};

    $scope.answer = function (id) {
		console.log(id);
		$rootScope.showquestion = id;
		$location.url('/answer')
	};

	dashboardFactory.getall(function (output) {
		console.log("Got back questions from factory:", output.data);
		$scope.questions = output.data;
	});
	console.log("ROOT USER IS", $rootScope.currentuser);
}]);
