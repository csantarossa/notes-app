const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = async (id) => {
  try {
    const token = jwt.sign({ user_id: id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    console.error(error);
  }
};

module.exports = generateToken;
