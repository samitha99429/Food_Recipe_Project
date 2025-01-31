const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  email: { type: String, required: true, unique: true },
  phonenumber:{type:String,required:true},
  password: { type: String, required: true },
  favoriteRecipes: [{ type: String }]
});

// Hashing the password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match user-entered password with the hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
