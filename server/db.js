const mysql2 = require("mysql2/promise");
require("dotenv").config();

const pool = mysql2.createPool({
  user: "root",
  password: process.env.DB_KEY,
  port: 3306,
  database: "notes",
  host: "localhost",
});

module.exports = pool;
