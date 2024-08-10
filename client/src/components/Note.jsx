import { X } from "@geist-ui/icons";
import { useContext } from "react";
import { NotesContext } from "../pages/Notes";
import api from "../services/api-services";

const Note = ({ id, content, important }) => {
  const [notes, setNotes] = useContext(NotesContext);

  const handleDelete = () => {
    api.deleteOne(id).then((note) => {
      setNotes(notes.filter((note) => note.note_id !== id));
    });
  };

  return (
    <div className="flex w-full justify-between p-2 items-center bg-white rounded-lg hover:scale-[1.025] duration-200 cursor-pointer">
      <p className="text-sm font-medium">{content}</p>
      <button onClick={handleDelete}>
        <X size={18} className="stroke-[2px]" />
      </button>
    </div>
  );
};

export default Note;
