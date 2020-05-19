const mongoose = require('mongoose');
var express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); //worked with file system
const File = require('../models/file.model');
const FileReader = require('filereader');

// add files in dir proj
// module.exports.createFile = async function (req, res) {
// 	const { file } = req.body;
// 	console.log(req);
// 	if (!file) {
// 		res.send('error downloading file');
// 	} else {
// 		res.send('it is OK');
// 	}
// }

module.exports.createFile = async (req, res, error) => {
	const { file } = req.body;
	const fileData = new File({
		file
	});
	try {
		await fileData.save();
		res.status(201).json(fileData);
	} catch (e) {
		res.status(500).json({
			success: false,
			message: "Something went wrong...",
		});
	}
};


module.exports.getAllFiles = async function(req, res, error) {
	try{
		const file = File = await File.find()
		res.status(200).json(file);
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
		const file = File = await File.findById({
			_id
		})
		res.status(200).json(file);
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
// 		const file = File = await new File({
// 			email,
// 			password,
// 			firstName,
// 			lastName,
// 			file: file._id
// 		}).save();
// 		res.status(201).json(file);
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
// 		const file = await File.findOneAndUpdate(
// 			{	_id	},
// 			{ $set: req.body }, //key say that we will be change something in this obeject
// 			{ new: true }	//update file and return it
// 		)
// 		res.status(200).json(file);
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
		await File.remove({
			_id
		})
		res.status(200).json({
			message: "File has been deleted"
		})
	} catch (e) {
		res.status(500).json({
			success: false,
			message: error.message ? error.message : error
		})
	}
}
