const pool = require("../db");
const bcrypt = require("bcrypt");
const { getUserByEmail, getUserById } = require("../utils/authUtils/getUser");
const generateToken = require("../utils/authUtils/createToken");
require("dotenv").config();

const userSignup = async (req, res) => {
  try {
    const { email, firstname, lastname, password } = req.body;
    // Email Validation
    if (!email) return res.json({ error: "You must include an email." });
    const emailExists = (await getUserByEmail(email)).length;
    console.log(emailExists);
    if (emailExists)
      return res.json({ error: "Email address is already used." });
    // Name Validation
    if (!firstname) return res.json({ error: "You must include a firstname." });
    if (!lastname) return res.json({ error: "You must include a lastname." });

    // Password Validation
    if (!password) return res.json({ error: "You must include a password." });
    if (password.length < 6)
      return res.json({ error: "Password must have 6+ characters" });
    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    // If all is good, post to db.
    await pool.query(
      "insert into users (email, firstname, lastname, password) values ($1, $2, $3, $4);",
      [email, firstname, lastname, hashedPassword]
    );
    res.json("Signup Successful");
  } catch (error) {
    console.error(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.json({ error: "Must enter email." });
    if (!password) return res.json({ error: "Must enter password." });
    const response = await getUserByEmail(email);
    if (response.error) return res.json(response);
    const user = response[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ error: "Password is incorrect." });
    // If all passes
    const token = await generateToken(user.user_id);
    return res
      .cookie("token", token)
      .json({
        user_id: user.user_id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        created_at: user.created_at,
      });
  } catch (error) {
    console.error(error);
  }
};

const getProfile = async (req, res) => {
  try {
    const user = req.user;
    if (user) return res.json(user);
  } catch (error) {
    console.error(error);
  }
};

const userLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json("Logged Out Successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { userSignup, userLogin, getProfile, userLogout };
