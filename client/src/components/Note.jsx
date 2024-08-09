import { X } from "@geist-ui/icons";
import { useContext } from "react";
import { NotesContext } from "../pages/Notes";

const Note = ({ content, important }) => {
  return (
    <div className="flex w-full justify-between p-2 items-center bg-white rounded-lg hover:scale-[1.025] duration-200 cursor-pointer">
      <p className="text-sm font-medium">{content}</p>
      <button>
        <X size={18} className="stroke-[2px]" />
      </button>
    </div>
  );
};

export default Note;
