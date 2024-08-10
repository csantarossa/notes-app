const mysql2 = require("mysql2/promise");

const pool = mysql2.createPool({
  user: "root",
  password: "Root1234!!",
  port: 3306,
  database: "notes",
  host: "localhost",
});

module.exports = pool;
