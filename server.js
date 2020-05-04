const express = require('express');
const mongoose = require('mongoose');
const server = express();
const loginControl = require('./controllers/loginController');

const PORT = process.env.PORT || 3000;

async function start() {
	try {
		await mongoose.connect('mongodb+srv://Alexandra:restart987@cluster0-k46rv.mongodb.net/test', {
			useNewUrlParser: true, 
			useUnifiedTopology: true,
			useFindAndModify: false 
		})
		server.listen(PORT, () => {
			console.log('Server has been started...');
		});
	} catch (e) {
		console.log(e);
	}
}

server.use('/', require('./routings'));

start();
