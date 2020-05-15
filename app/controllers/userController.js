const express = require('express');
const User = require('../models/user.model');

module.exports.getUserById = async function(req, res, error) {
	const { _id } = req.body; 
	try{
		const user = User = await User.find({
			_id
		})
		res.status(200),json(user);
	} catch (e) {
		res.status(500).json({
			success: false, 
			message: error.message ? error.message : error
		})
	}
}

// module.exports.createUser = async function(req, res, error) {
// 	const { email, password, firstName, lastName } = req.body;
// 	try{
// 		const user = User = await new User({
// 			email,
// 			password,
// 			firstName,
// 			lastName,
// 			user: user._id
// 		}).save();
// 		res.status(201),json(user);
// 	} catch (e) {
// 		res.status(500).json({
// 			success: false,
// 			message: error.message ? error.message : error
// 		})
// 	}
// }

module.exports.updateUser = async function(req, res) {
	const { _id } = req.body;
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
	const { _id } = req.body;
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