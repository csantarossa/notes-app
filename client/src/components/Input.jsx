import { useContext } from "react";
import { NewNoteContext } from "./Form";

const Input = () => {
  const [newNote, setNewNote] = useContext(NewNoteContext);

  return (
    <div className="w-fit">
      <input
        className="w-[250px] h-fit border-2 border-[#ff6149] text-base px-2 py-1 rounded-l-md"
        type="text"
        placeholder="New note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
    </div>
  );
};

export default Input;
