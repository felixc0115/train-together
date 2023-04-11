const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "365d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const user = await User.signup(email, password, username);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token, username });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//add program to favorites

const modifyFavoritePrograms = async (req, res) => {
  console.log(req.body);
  const { favoritedPrograms, username } = req.body;

  try {
    await User.modifyFavoritePrograms(favoritedPrograms, username);
    res.status(200).json({ favoritedPrograms, username });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser, modifyFavoritePrograms };
