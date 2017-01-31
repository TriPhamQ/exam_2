console.log('questions controller');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function () {
	return {
		new: function (req, res) {
			console.log("In the new question");
			console.log(req.body);
			req.body.answers = 0;
			Question.create(req.body, function (err, results) {
				if (err) {
					console.log(err);
				}
				else {
					console.log("New question created");
					res.json(results);
				};
			});
		},
		getall: function (req, res) {
			console.log("Lets get all the trivias");
			Question.find({},function (err, results) {
				if (err) {
					console.log("Something went wrong while getting all trivias");
				}
				else {
					console.log("Found trivias from DB");
					res.json(results);
				};
			});
		},
		show: function (req, res) {
			console.log("IDDDDDDDD", req.body.questionid);
			// Question.findOne({_id: req.body.questionid}, function (err, result) {
			// 	if (err) {
			// 		console.log("Something went wrong while getting question");
			// 	}
			// 	else {
			// 		console.log("Found question from DB");
			// 		res.json(result);
			// 	}
			// });
			Question.find({_id: req.body.questionid}).populate("_user").exec(function (err, result) {
				if (err) {
					console.log("Something went wrong with DB");
				}
				else {
					console.log("Success!");
					res.json(result);
				}
			})
		}
	}
})();
