const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'exceed team';
const User = require('../models/user.model');

//запрос на вход пользователя
module.exports.login = async function(req, res) {
	const { email, password } = req.body;
	await  User.findOne({ email }) 
		.then((user) => {
			if (!user) {
				res.status(404 ).json({ 
					message: 'User does not exist!' 
				});
			}
			const isValid = bcrypt.compareSync(password, user.password);
			if (isValid) {
				const token = jwt.sign(
					{uId: user._id,
					email: user.email}, 
					jwtSecret, 
					{expiresIn: 60 * 60}
					);
				res.status(200).json({ token });
			} else {
				res.status(401).json({ 
					message: 'Invalid email or password!' 
				});
			}
		})
		.catch(err => res.status(500).json({ 
			message: err.message 
		}));
}