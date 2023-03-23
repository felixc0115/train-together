const mongoose = require("mongoose");
const bcrpyt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  favoritedPrograms: {
    type: Array,
  },
});

//static signup  method
userSchema.statics.signup = async function (email, password, username) {
  //validation
  if (!email || !password || !username) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrpyt.genSalt(10);
  const hash = await bcrpyt.hash(password, salt);

  const user = await this.create({ email, password: hash, username });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrpyt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

//find user method

userSchema.statics.favoriteProgram = async function (programId, username) {
  const filter = { username };
  const update = { programId };

  await this.findOneAndUpdate(filter, update);
};

module.exports = mongoose.model("User", userSchema);
