const jwt = require("jsonwebtoken");
const { getUserById } = require("./getUser");

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ errorCode: 401, error: "Unauthorised" });
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = await decoded.user_id;
    const user = await getUserById(userId);
    if (!user) return res.json({ error: "User not found" });
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    if (error.name === "TokenExpiredError")
      res.json({ error: "Token has expired. Please login again." });
  }
};

module.exports = verifyUser;
