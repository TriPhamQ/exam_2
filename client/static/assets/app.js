var myApp = angular.module('app', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/logreg.html',
		controller: 'logregController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/new-question', {
		templateUrl: 'partials/new_question.html',
		controller: 'questionsController'
	})
	.when('/show', {
		templateUrl: 'partials/show.html',
		controller: 'showController'
	})
	.when('/answer', {
		templateUrl: 'partials/answer.html',
		controller: 'answersController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
