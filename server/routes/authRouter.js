const express = require("express");
const {
  userLogin,
  userSignup,
  getProfile,
  userLogout,
} = require("../controllers/authController");
const verifyUser = require("../utils/authUtils/verifyUser");

const authRouter = express.Router();

// Users signup
authRouter.post("/signup", userSignup);
// Users login
authRouter.post("/login", userLogin);
// User verification
authRouter.get("/verify", verifyUser, getProfile);
// User logout
authRouter.post("/logout", verifyUser, userLogout);

module.exports = authRouter;
