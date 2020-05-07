const bcrypt = require('bcrypt');
const User = require('../models/user.model');

module.exports.register = async function (req, res) {
	const candidate = await User.findOne({ email: req.body.email })
	if(candidate) {
		res.status(409).json({ 
			message: 'User with this email registered!' 
		}); 
	} else {
		//создаем пользователя
		const salt = bcrypt.genSaltSync(10);
		const password = req.body.password;
		const user = new User({
			email: req.body.email,
			password: bcrypt.hashSync(password, salt),
			firstName: req.body.firstName,
			lastName: req.body.lastName
		})

		try{
			await user.save();
			res.status(201).json(user);
		} catch(e) {
			res.status(500).json({
				success: fslse,
				message: error.message ? error.message : error
			})
		}
	}
}
