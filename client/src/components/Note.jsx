import { X, Star } from "@geist-ui/icons";
import { useContext, useState } from "react";
import { NotesContext } from "../pages/Notes";
import api from "../services/api-services";

const Note = ({ id, content, important }) => {
  const [notes, setNotes] = useContext(NotesContext);

  const handleDelete = () => {
    api.deleteOne(id).then((note) => {
      setNotes(notes.filter((note) => note.note_id !== id));
    });
  };

  const handleUpdateImportant = () => {
    setNotes(
      notes.map((note) =>
        note.note_id === id ? { ...note, important: !note.important } : note
      )
    );
    api.updateImportant({ id, important: !important });
  };

  return (
    <div className="flex w-full gap-2 justify-between py-3 px-3 items-center bg-secondary rounded-lg duration-200 cursor-pointer">
      <p className="text-base font-medium text-primary">{content}</p>
      <div className="flex justify-center items-center gap-4">
        <button onClick={handleUpdateImportant}>
          {important ? (
            <Star
              size={18}
              className="stroke-[2px] stroke-primary opacity-80"
            />
          ) : (
            <Star
              size={18}
              className="stroke-[2px] stroke-primary opacity-30"
            />
          )}
        </button>
        <button onClick={handleDelete}>
          <X size={19} className="stroke-[2.5px] stroke-primary opacity-90" />
        </button>
      </div>
    </div>
  );
};

export default Note;
