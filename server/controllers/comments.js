console.log('comments controller');
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Question = mongoose.model('Question');

module.exports = (function () {
	return {
		new: function (req, res) {
			console.log("In the new question");
			console.log(req.body);
            req.body.like = 0;
			Comment.create(req.body, function (err, results) {
				if (err) {
					console.log(err);
				}
				else {
					console.log("New question created");
                    Question.findOne({_id: req.body._question}, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log("CHECK THIS OUT", result);
                            result.answers ++;
                            result.save();
                        };
                    });
					res.json(results);
				};
			});
		},
		getall: function (req, res) {
			console.log("Lets get all the comments");
			Comment.find({_question: req.body.questionid}).populate("_user").exec(function (err, results) {
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
			Comment.find({}).populate("_user").exec(function (err, result) {
				if (err) {
					console.log("Something went wrong with DB");
				}
				else {
					console.log("Success!");
					res.json(result);
				}
			})
		},
        like: function (req, res) {
            Comment.findOne({_id: req.body.commentid}, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    result.like ++;
                    result.save(function () {
                        Comment.find({_question: req.body.question}).populate("_user").exec(function (err, results) {
            				if (err) {
            				}
            				else {
            					res.json(results);
            				};
            			});
                    });
                };
            });
        }
	}
})();
