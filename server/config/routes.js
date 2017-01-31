console.log("Routes...");
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){
    app.get('/', function (req, res) {
		console.log("Hello");
	});
    app.post('/reg', function (req, res) {
        users.register(req, res);
    });
    app.post('/log', function (req, res) {
        users.login(req, res);
    });
    app.post('/question', function (req, res) {
        questions.new(req, res);
    });
    app.get('/questions', function (req, res) {
        questions.getall(req, res);
    });
    app.post('/show', function (req, res) {
        questions.show(req, res);
    });
    app.post('/answer', function (req, res) {
        comments.new(req, res);
    });
    app.post('/getcomment', function (req, res) {
        comments.getall(req, res);
    });
    app.post('/like', function (req, res) {
        comments.like(req, res);
    });
};
