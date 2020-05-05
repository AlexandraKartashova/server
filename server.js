const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./app/models/user.model');

const server = express();
const PORT = process.env.PORT || 3000;
server.use(bodyParser.json());
server.use('/', require('./routings'));

mongoose.connect('mongodb+srv://Alexandra:restart987@cluster0-k46rv.mongodb.net/test', {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useFindAndModify: false 
})	.then(() => server.listen(PORT, () => {
		console.log('Server has been started...');
		})
	)
	 	.catch(	err => console.err('Error connecting to mongo')
	);