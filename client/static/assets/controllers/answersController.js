myApp.controller('answersController', ['$scope', 'answersFactory', '$location', '$rootScope', '$cookies', function ($scope, answersFactory, $location, $rootScope, $cookies) {
    console.log('answersController loaded');

	$scope.logOut = function () {
        $cookies.remove('token');
        $cookies.remove('currentuser');
        $cookies.remove('currentuser_id');
        $rootScope.token = null;
        $rootScope.currentuser = null;
        $rootScope.currentuser_id = null;
        $location.url('/');
    };

	$scope.new = function () {
		console.log($scope.newAnswer);
		answersFactory.new($scope.newAnswer, function (output) {
            console.log("New answer created");
            $scope.newAnswer = {};
			$location.url('/dashboard');
		});
	};
	console.log($rootScope.triviaID);
	console.log("ROOT USER IS", $rootScope.currentuser);
}]);
