const User = require('../models/user.model');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'exceed team';

//запрос на вход пользователя
const login = (req, res) => {
	const { email, password } = req.body;
	User.findOne({ email })
		.then((user) => {
			console.log(user)
			console.log(user.password)
			if (!user) {
				return res.status(401).json({ message: 'User does not exist!' });
			}
			const isValid = bCrypt.compareSync(user.password, password);
			if (isValid) {
				const token = jwt.sign(user._id.toString(), jwtSecret);
				res.json({ token });
			} else {
				return res.status(401).json({ message: 'Invalid email or !' });
			}
		})
		.catch(err => res.status(500).json({ message: err.message }));
}

// const all = User.find()
// .then(user => {
// 	console.log(user)
// 	})

module.exports = {
	login,
};
// login(); 