import { X, AlertTriangle } from "@geist-ui/icons";
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
    <div className="flex w-full gap-2 justify-between py-2 px-3 items-center bg-[#f4f4f5] rounded-lg hover:bg-[#e0e0e0] duration-200 cursor-pointer">
      <p className="text-sm font-medium text-[#3c3c3c]">{content}</p>
      <div className="flex justify-center items-center gap-4">
        <button onClick={handleUpdateImportant}>
          {important ? (
            <AlertTriangle
              size={18}
              className="stroke-[2.5px] stroke-[#212126] opacity-100"
            />
          ) : (
            <AlertTriangle
              size={18}
              className="stroke-[2.5px] stroke-[#212126] opacity-30"
            />
          )}
        </button>
        <button onClick={handleDelete}>
          <X size={18} className="stroke-[2.5px] stroke-[#3c3c3c]" />
        </button>
      </div>
    </div>
  );
};

export default Note;
