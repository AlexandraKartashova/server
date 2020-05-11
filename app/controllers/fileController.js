const mongoose = require('mongoose');
var express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); //worked with file system

//запрос на вход пользователя
module.exports.file = async function (req, res) {
	const { file } = req.body;
	
	// File imageFile = new File(file);
	// GridFS gfsPhoto = new GridFS(db, "photo");
	// GridFSInputFile gfsFile = gfsPhoto.createFile(imageFile);
	gfsFile.setFilename(newFileName);
	gfsFile.save();
	
	// 	User.save(req.params.id, { photo: fs.readFileSync(`upload/${file}`)
	//  }, {safe: true, new: true})
	// 	 .exec()
	// 	 .then(() => {
	// 			 sendJsonResponse(res, 200, {"message": "photo uploaded"})
	// 	 })
	// 	 .catch(err => {
	// 			 sendJsonResponse(res, 500, err)
	// 	 })

}
