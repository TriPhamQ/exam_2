myApp.controller('questionsController', ['$scope', 'questionsFactory', '$location', '$rootScope', '$cookies', function ($scope, questionsFactory, $location, $rootScope, $cookies) {
    console.log('questionsController loaded');

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
		console.log($scope.newQuestion);
		questionsFactory.new($scope.newQuestion, function (output) {
            console.log("New question created");
            $scope.newQuestion = {};
			$location.url('/dashboard');
		});
	};
	console.log($rootScope.triviaID);
	console.log("ROOT USER IS", $rootScope.currentuser);
}]);
