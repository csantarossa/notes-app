const pool = require("../db");

const getNotes = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const response = await pool.query(
      "select * from notes where fk_user_id = $1 order by note_id asc;",
      [userId]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
};

const createNote = async (req, res) => {
  const { content } = req.body;
  const userId = req.user.user_id;
  try {
    const response = await pool.query(
      "insert into notes (content, fk_user_id) values ($1, $2) returning *;",
      [content, userId]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.user_id;
  try {
    const response = await pool.query(
      "delete from notes where note_id = $1 and fk_user_id = $2;",
      [id, userId]
    );
    res.json(response);
  } catch (error) {
    console.error(error);
  }
};

const favouriteNote = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.user_id;
  const { important } = req.body;
  try {
    const response = await pool.query(
      `update notes set important = $1 where note_id = $2 and fk_user_id = $3 returning *;`,
      [important, id, userId]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
};

const getSortedNotes = async (req, res) => {
  const { sort_by, order } = req.query;
  const userId = req.user.user_id;
  try {
    const notes = await pool.query(
      `select * from notes where fk_user_id = $1 order by ${sort_by} ${order};`,
      [userId]
    );
    res.json(notes.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getNotes,
  createNote,
  deleteNote,
  getSortedNotes,
  favouriteNote,
};
