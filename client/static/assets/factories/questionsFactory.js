myApp.factory('questionsFactory', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
	console.log('Questions Factory');
	var factory = {};

	factory.new = function (question, callback) {
		if ($rootScope.currentuser) {
			console.log("Inside the question factory", question);
			question._user = $rootScope.currentuser_id;
			$http.post('/question', question).then(function (output) {
				callback(output);
			});
		};
	};

	factory.getall = function (callback) {
		console.log("Let's get all the questions...");
		$http.get('/questions').then(function (output) {
			callback(output);
		});
	};

	factory.show = function (id, callback) {
		console.log("ID IS", id);
		$http.post('/show', {questionid: id}).then(function (output) {
			callback(output)
		});
	};

	factory.showcomment = function (id, callback) {
		console.log("ID IS", id);
		$http.post('/getcomment', {questionid: id}).then(function (output) {
			console.log("COMMENTS",output.data);
			callback(output)
		});
	};
	factory.like = function (id, questionid, callback) {
		if ($rootScope.currentuser) {
			$http.post('/like', {commentid: id, question: questionid}).then(function (output) {
				callback(output);
			})
		};
	};
	return factory;
}]);
