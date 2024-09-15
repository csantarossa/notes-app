const pool = require("../../db");

const getUserByEmail = async (email) => {
  try {
    const response = await pool.query("select * from users where email = $1;", [
      email,
    ]);
    if (response.rowCount === 0) return { error: "Account doesn't exist." };
    return response.rows;
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await pool.query(
      "select user_id, email, firstname, lastname, created_at from users where user_id = $1;",
      [id]
    );
    console.log(response.rows[0]);
    return response.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUserByEmail, getUserById };
