import React, { useContext, useState } from "react";
import { NotesContext } from "../pages/Notes";
import Note from "./Note";
import { Calendar, AlertTriangle } from "@geist-ui/icons";
import api from "../services/api-services";

const Display = () => {
  const [notes, setNotes] = useContext(NotesContext);
  const [sortOrder, setSortOrder] = useState(null);

  const sortByDate = async () => {
    setSortOrder(!sortOrder);
    try {
      const sortedNotes = await api.sortBy({
        sort_by: "created_at",
        order: sortOrder ? "asc" : "desc",
      });
      console.log(sortedNotes);
      setNotes(sortedNotes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[500px] w-[300px] lg:w-[400px] flex flex-col justify-start items-center">
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <h1 className="text-white text-4xl font-semibold">Notes</h1>
          <div className=" flex justify-center items-center gap-3">
            <button
              onClick={sortByDate}
              className="w-8 h-8 relative flex justify-center items-center"
            >
              <Calendar
                size={20}
                className="stroke-[2.2px] stroke-[#ff6149] z-10 mb-[2px]"
              />
              <div className="bg-white absolute w-full h-full rounded-full"></div>
            </button>
            <button className="w-8 h-8 relative flex justify-center items-center">
              <AlertTriangle
                size={20}
                className="stroke-[2.2px] stroke-[#ff6149] z-10 mb-[2px]"
              />
              <div className="bg-white absolute w-full h-full rounded-full"></div>
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          {notes.length > 0 ? (
            notes.map((note) => (
              <Note
                key={note.note_id}
                id={note.note_id}
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
