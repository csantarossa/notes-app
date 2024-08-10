const express = require("express");
const cors = require("cors");
const pool = require("./db");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/notes", async (req, res) => {
  try {
    const response = await pool.query("select * from notes");
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/notes", async (req, res) => {
  const { content } = req.body;
  try {
    const response = await pool.query(
      "insert into notes (content) values ($1) returning *;",
      [content]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query("delete from notes where note_id = $1;", [
      id,
    ]);
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/notes/sorted", async (req, res) => {
  const { sort_by, order } = req.query;
  try {
    const notes = await pool.query(
      `select * from notes order by ${sort_by} ${order};`
    );
    res.json(notes.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}...`));
