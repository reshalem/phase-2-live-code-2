const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const encryptPassword = require('../helpers/encryptPassword.js');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already exists']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    liked: [{
      type: String
    }]
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    this.password = encryptPassword(this.password);
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;