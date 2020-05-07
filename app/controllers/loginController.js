const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'exceed team';
const User = require('../models/user.model');

//запрос на вход пользователя
module.exports.login = async function (req, res) {
	const candidate = await User.findOne({ email: req.body.email })
	if (!candidate) { 
		res.status(404).json({ 
			message: 'User does not exist!' 
		});
	}
	const isValid = bcrypt.compareSync(req.body.password, candidate.password);
	if (isValid) {
		const token = jwt.sign(
			{ cId: candidate._id,
			email: candidate.email }, 
			jwtSecret, 
			{ expiresIn: 60 * 60 }
			);
		res.status(200).json({ token });
	} else {
		res.status(401).json({ 
			message: 'Invalid email or password!' 
		});
	}
}