import Button from "./Button";
import Input from "./Input";
import api from "../services/api-services";
import { createContext, useContext, useState } from "react";

export const NewNoteContext = createContext();
import { NotesContext } from "../pages/Notes";

const Form = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useContext(NotesContext);

  const handleCreateNote = (e) => {
    e.preventDefault();

    const noteObject = {
      note_id: notes.length + 1,
      content: newNote,
      important: false,
    };

    api.createOne(noteObject).then((response) => {
      setNewNote("");
      setNotes(notes.concat(noteObject));
    });
  };

  return (
    <NewNoteContext.Provider value={[newNote, setNewNote]}>
      <form onSubmit={handleCreateNote} className="flex">
        <Input />
        <Button title="Create" />
      </form>
    </NewNoteContext.Provider>
  );
};

export default Form;
