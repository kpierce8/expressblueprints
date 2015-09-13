var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

userSchema.pre('save', function(next){
	if (!this.isModified('password')) {
			return next();
		},
		this.password = User.encryptPassword(this.password);
		next();
});

var validator = require('validator');

var User = mongoose.model('User', userSchema);

User.schema.path('email').validate(function(email) {
	return validator.isEmail(email);
});
User.schema.path('email').validate(function(password) {
	return validator.islength(password, 6);
});



module.exports = User;



