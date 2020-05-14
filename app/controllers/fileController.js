const mongoose = require('mongoose');
var express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); //worked with file system

//запрос на вход пользователя
module.exports.file = async function (req, res) {
	const { file } = req.body;
	console.log(req);
	console.log(file);
	if (!file) {
		res.send('error downloading file');
	} else {
		res.send('it is OK');
	}
}
