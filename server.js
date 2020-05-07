const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./app/models/user.model');

const server = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://Alexandra:restart987@cluster0-k46rv.mongodb.net/test', {
	useNewUrlParser: true,
	useUnifiedTopology: true
	// useFindAndModify: false 
})	.then(() => console.log('MongoDB connected.'))
	 	.catch(	err => console.log(err));
server.listen(PORT, () => {
	console.log('Server has been started...');
	})
server.use(bodyParser.json());
server.use('/', require('./routings'));