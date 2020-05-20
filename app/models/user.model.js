const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	// id: {
	// 	type: Schema.Types.ObjectId
	// },
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true 
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String //fom front string base64
	}
});

module.exports = User = mongoose.model('users', UserSchema);