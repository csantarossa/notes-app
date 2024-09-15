const express = require("express");
const {
  getNotes,
  createNote,
  deleteNote,
  getSortedNotes,
  favouriteNote,
} = require("../controllers/notesController");
const verifyUser = require("../utils/authUtils/verifyUser");

const notesRouter = express.Router();

// Get all notes for user
notesRouter.get("/", verifyUser, getNotes);
// Post a note for user
notesRouter.post("/", verifyUser, createNote);
// Delete a note for user
notesRouter.delete("/:id", verifyUser, deleteNote);
// Set a note as a favourite
notesRouter.put("/:id", verifyUser, favouriteNote);
// Return the notes sorted
notesRouter.get("/sorted", verifyUser, getSortedNotes);

module.exports = notesRouter;
