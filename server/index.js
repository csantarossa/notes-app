const express = require("express");
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/notes", (req, res) => {
  pool
    .query("select * from notes;")
    .then(([response]) => res.json(response))
    .catch((error) => {
      res
        .status(500)
        .json({ error: "The GET request has failed server-side." });
    });
});

app.post("/api/notes", async (req, res) => {
  const { note_id, content, important } = req.body;

  const notesArray = fetch("http://localhost:8000/api/notes");

  try {
    const response = await pool.query(
      "insert into notes (note_id, content, important) values (?, ?, ?);",
      [note_id, content, important]
    );
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query("delete from notes where note_id = ?;", [
      id,
    ]);
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}...`));
