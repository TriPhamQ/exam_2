myApp.factory('answersFactory', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
	console.log('Questions Factory');
	var factory = {};

	factory.new = function (answer, callback) {
        if ($rootScope.currentuser) {
            console.log("Inside the answer factory", answer);
            console.log($rootScope.showquestion);
            answer._user = $rootScope.currentuser_id;
    		answer._question = $rootScope.showquestion;
    		$http.post('/answer', answer).then(function (output) {
    			callback(output);
    		});
        }
	};

	// factory.getall = function (callback) {
	// 	console.log("Let's get all the answers...");
	// 	$http.get('/answers').then(function (output) {
	// 		callback(output);
	// 	});
	// };
    //
	// factory.show = function (id, callback) {
	// 	console.log("ID IS", id);
	// 	$http.post('/show', {answerid: id}).then(function (output) {
	// 		callback(output)
	// 	});
	// };
	return factory;
}]);
