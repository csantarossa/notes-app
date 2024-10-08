import Button from "./Button";
import Input from "./Input";
import api from "../services/api-services";
import { createContext, useContext, useState } from "react";
import { NotesContext } from "../pages/Notes";
import toast from "react-hot-toast";
import { Plus } from "@geist-ui/icons";

export const NewNoteContext = createContext();

const Form = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useContext(NotesContext);

  const handleCreateNote = (e) => {
    e.preventDefault();
    if (newNote && newNote !== "") {
      api.createOne(newNote).then((response) => {
        setNotes(notes.concat(response));
        setNewNote("");
      });
    } else {
      toast.error("A note cannot be empty");
    }
  };

  return (
    <NewNoteContext.Provider value={[newNote, setNewNote]}>
      <form onSubmit={handleCreateNote} className="flex">
        <Input />
        <Button icon={<Plus size={18} className="stroke-[2.2px]" />} />
      </form>
    </NewNoteContext.Provider>
  );
};

export default Form;
