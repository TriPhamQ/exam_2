myApp.run(function ($rootScope, $cookies) {
    if ($cookies.get('token') && $cookies.get('currentuser') && $cookies.get('currentuser_id')) {
        $rootScope.token = $cookies.get('token');
        $rootScope.currentuser = $cookies.get('currentuser');
        $rootScope.currentuser_id = $cookies.get('currentuser_id');
    };

    if ($cookies.get('showquestion')) {
        $rootScope.showquestion = $cookies.get('showquestion');
    };

    if (!$rootScope.triviaID) {
        $rootScope.triviaID = 1;
    };
});
