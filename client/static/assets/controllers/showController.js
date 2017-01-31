myApp.controller('showController', ['$scope', 'questionsFactory', '$location', '$rootScope', '$cookies', function ($scope, questionsFactory, $location, $rootScope, $cookies) {
    console.log('showController loaded');

	$scope.logOut = function () {
        $cookies.remove('token');
        $cookies.remove('currentuser');
        $cookies.remove('currentuser_id');
        $rootScope.token = null;
        $rootScope.currentuser = null;
        $rootScope.currentuser_id = null;
        $location.url('/');
    };
	console.log($rootScope.showquestion);
    questionsFactory.show($rootScope.showquestion, function (output) {
        console.log("Got back questions from factory:", output.data);
        $scope.question = output.data;
        console.log($scope.question);
    });
    var showall =function () {
        questionsFactory.showcomment($rootScope.showquestion, function (output) {
            console.log("Got back comments from factory:", output.data);
            $scope.comments = output.data;
            console.log("output comment:", $scope.comments);
        });
    }
    showall();
    console.log("questionid", $rootScope.showquestion);

    $scope.answer = function () {
		$location.url('/answer');
	};
    $scope.like = function (commentid) {
        questionsFactory.like(commentid, $rootScope.showquestion, function (output) {
            $scope.comments = output.data;
        });
    };
	console.log("ROOT USER IS", $rootScope.currentuser);
}]);
