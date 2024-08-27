import { useContext } from "react";
import { NewNoteContext } from "./Form";

const Input = () => {
  const [newNote, setNewNote] = useContext(NewNoteContext);

  return (
    <div className="w-fit">
      <input
        className="w-[320px] text-base border-2 border-[#09090B] px-3 py-1 h-12 rounded-l-md bg-[#f4f4f5]"
        type="text"
        placeholder="Create a task"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
    </div>
  );
};

export default Input;
