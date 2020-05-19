const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
	// id: {
	// 	type: Schema.Types.ObjectId
	// },
	// name: {
	// 	type: String,
	// 	required: true
	// },
	file: {
		type: String,
		require: true
	},
	// key: {
	// 	type: String,
	// 	required: true
	// },
	// user: {
	// 	ref: 'users',
	// 	type: Schema.Types.ObjectId
	// }
})

module.exports = File = mongoose.model('files', fileSchema);