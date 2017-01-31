console.log('Comments Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
	comment: {
		type: String,
		minlength: 5,
		required: true
	},
	support: {
		type: String,
	},
	like: {
		type: Number
	},
	_user: {
		type: Schema.Types.ObjectId, ref: 'User'
	},
	_question: {
		type: Schema.Types.ObjectId, ref: 'Question'
	}
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
