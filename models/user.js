let mongoose = require('mongoose');




let UserSchema = mongoose.Schema({
    name: String,
    lastname: String,
    dni: Number,
    nationality: String,
    isAuthor:Boolean,
    username:String,
    password:String
});

UserSchema.methods.fullname = function () {
    return this.name + ' ' + this.lastname;
};
User = mongoose.model('User', UserSchema);
module.exports = User;