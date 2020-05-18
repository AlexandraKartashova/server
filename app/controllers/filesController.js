const mongoose = require('mongoose');
var express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); //worked with file system

//add files in dir proj
module.exports.createFile = async function (req, res) {
	const { file } = req.body;
	console.log(req);
	console.log(file);
	if (!file) {
		res.send('error downloading file');
	} else {
		res.send('it is OK');
	}
}

module.exports.getAllFiles = async function(req, res, error) {
	try{
		const user = User = await User.find()
		res.status(200),json(user);
	} catch (e) {
		res.status(500).json({
			success: false, 
			message: error.message ? error.message : error
		})
	}
}

module.exports.getFileById = async function(req, res, error) {
	const { _id } = req.body; 
	try{
		const user = User = await User.findById({
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

// module.exports.createFile = async function(req, res, error) {
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

// module.exports.updateFile = async function(req, res) {
// 	const { _id } = req.body;
// 	try {
// 		const user = await User.findOneAndUpdate(
// 			{	_id	},
// 			{ $set: req.body }, //key say that we will be change something in this obeject
// 			{ new: true }	//update user and return it
// 		)
// 		res.status(200),json(user);
// 	} catch (e) {
// 		res.status(500).json({
// 			success: faslse,
// 			message: error.message ? error.message : error
// 		})
// 	}
// }

module.exports.removeFile = async function(req, res) {
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
