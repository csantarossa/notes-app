import React, { useContext } from "react";
import { NotesContext } from "../pages/Notes";
import Note from "./Note";

const Display = () => {
  const [notes] = useContext(NotesContext);

  return (
    <div className="h-[500px] w-[400px] flex flex-col justify-start items-center">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-white text-4xl font-semibold">Notes</h1>
        <div className="w-full flex flex-col gap-2">
          {notes.length > 0 ? (
            notes.map((note) => (
              <Note
                key={note.id}
                content={note.content}
                important={note.important}
              />
            ))
          ) : (
            <div className="flex gap-2">
              <div className="bg-white h-[6px] w-[6px] rounded-full"></div>
              <div className="bg-white h-[6px] w-[6px] rounded-full"></div>
              <div className="bg-white h-[6px] w-[6px] rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
