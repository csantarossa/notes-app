import { useContext } from "react";
import { NewNoteContext } from "./Form";

const Input = () => {
  const [newNote, setNewNote] = useContext(NewNoteContext);

  return (
    <div className="w-fit">
      <input
        className="w-[250px] text-sm border-2 border-[#09090B] px-3 py-1 h-10 rounded-l-md bg-[#f4f4f5]"
        type="text"
        placeholder="Create a note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
    </div>
  );
};

export default Input;
