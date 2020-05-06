const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'exceed team';

//запрос на вход пользователя
const login = (req, res) => {
	const { email, password } = req.body;
	User.findOne({ email }) 
		.then((user) => {
			console.log(user)
			if (!user) {
				res.status(401).json({ message: 'User does not exist!' });
			}
			const isValid = bcrypt.compareSync(password, user.password);
			console.log(isValid);
			console.log(password);
			console.log(user.password);
			if (isValid) {
				const token = jwt.sign(user._id.toString(), jwtSecret);
				res.json({ token });
			} else {
				res.status(401).json({ message: 'Invalid email or password!' });
			}
		})
		.catch(err => res.status(500).json({ message: err.message }));
}

module.exports = {
	login,
};
