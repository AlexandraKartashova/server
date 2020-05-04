const User = require('../user.model');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const email = 'krauch@small.com';
const password = 'aaSS11';



User.find({email: email})
.then(users => {
	console.log(users)
	if (users[0].password === password) {
		console.log(true);
	}
});

// exports.getUser = async(req, reply) => {
// 	await User.find({email: email})
// 		.then(users => {
// 			console.log(users);
// 		})
// 	try {
// 		// const users = await User.find({email: email})
// 		// return users;
// 	} catch(err) {
// 		console.warn('Error', err.message)
// 	}
// 	}



//Добавление пользователей в бд
// User.insertMany(
// 	[{firstName: 'Smith', lastName: 'Jon', email: 'smith@small.com', password: 'SSaa11'},
// 	{firstName: 'Dow', lastName: 'Jim', email: 'dow@small.com', password: 'aAsS11'}].forEach(u => {
// 	new User(u).save();
// })
// )

//получаем всех пользователей
// exports.getUser = async(req, reply) => {
// 	try {
// 		const users = await User.find();
// 		return users;
// 	} catch(err) {
// 		console.warn('Error', err.message)
// 	}
// }

// //получаем одного пользователя по id
// exports.getUserById = async(req, reply) => {
// 	try {
// 		const id = req.params.is;
// 		const user = await User.findById(id);
// 		return user;
// 	} catch(err) {
// 		console.warn('Error', err.message);
// 	}
// }

// //добавляем пользователя
// exports.addUser = async(req, reply) => {
// 	try {
// 		const user = new User(req.body);
// 		return user.save();
// 	} catch(err) {
// 		console.warn('Error', err.message);
// 	}
// }

// //обновляем данные о пользователе
// exports.upDateUser = async(req, reply) => {
// 	try {
// 		const id = req.params.id;
// 		const user = req.body;
// 		const { ...upDateData} = user;
// 		const upDate = await User.findByIdAndUpdate(id, upDateData, {new: true});
// 		return upDate;
// 	} catch(err) {
// 		console.warn('Error', err.message);
// 	}
// }

// //удаляем пользователя из базы
// exports.deleteUser = async(req, reply) => {
// 	try {
// 		const id = req.params.id;
// 		const user = await User.findByIdAndRemove(id);
// 		return user; 
// 	} catch(err) {
// 		console.warn('Error', err.message);
// 	}
// }