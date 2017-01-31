console.log('Questions Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
	question: {
		type: String,
		minlength: 10,
		required: true
	},
	description: {
		type: String || Number
	},
	_user: {
		type: Schema.Types.ObjectId, ref: 'User'
	},
	comments: {
		type: Schema.Types.ObjectId, ref: 'Comment'
	},
	answers: {
		type: Number
	}
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);
