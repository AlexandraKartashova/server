const User = require('../models/user.model');

const { _id } = req.body;
module.exports.updateUser = async function(req, res) {
	try {
		const user = await User.findOneAndUpdate(
			{	_id	},
			{ $set: req.body }, //key say that we will be change something in this obeject
			{ new: true }	//update user and return it
		)
		res.status(200),json(user);
	} catch (e) {
		res.status(500).json({
			success: faslse,
			message: error.message ? error.message : error
		})
	}
}

module.exports.removeUser = async function(req, res) {
	try {
		await User.remove({
			_id
		})
		res.status(200).json({
			message: "User has been deleted"
		})
	} catch (e) {
		res.status(500).json({
			success: false,
			message: error.message ? error.message : error
		})
	}
}