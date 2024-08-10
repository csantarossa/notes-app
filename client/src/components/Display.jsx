import React, { useContext, useState } from "react";
import { NotesContext } from "../pages/Notes";
import Note from "./Note";
import { Calendar, AlertTriangle } from "@geist-ui/icons";
import api from "../services/api-services";
import CurlyArrowImage from "../assets/images/Curly-Arrow-PNG.png";

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
      setNotes(sortedNotes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[500px] w-[300px] lg:w-[400px] flex flex-col justify-start items-center ">
      <div className="w-full flex flex-col gap-4 h-full">
        <div className="flex justify-between items-end relative">
          <h1 className="text-white text-4xl font-semibold sticky top-0">
            Notes
          </h1>
          <div className=" flex justify-center items-center gap-3">
            <button
              onClick={sortByDate}
              className="w-9 h-9 relative flex justify-center items-center"
            >
              <Calendar
                size={20}
                className="stroke-[2.2px] stroke-[#ff6149] z-10 mb-[2px]"
              />
              <div className="bg-white absolute w-full h-full rounded-lg"></div>
            </button>
            <button
              onClick={() => alert("This feature is not in production yet.")}
              className="w-9 h-9 relative flex justify-center items-center"
            >
              <AlertTriangle
                size={20}
                className="stroke-[2.2px] stroke-[#ff6149] z-10 mb-[2px]"
              />
              <div className="bg-white absolute hover:bg-[#fff] w-full h-full rounded-lg"></div>
            </button>
          </div>
        </div>

        <div className="w-full h-full overflow-y-auto flex flex-col gap-2">
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
            <div className="h-[200px] w-full flex relative mt-16 animate-pulse overflow-hidden">
              <h1 className="text-white font-bold text-2xl absolute top-2 right-0 cursive rotate-6">
                Put notes here
              </h1>
              <img
                className="h-40 absolute bottom-0 right-20 rotate-12"
                src={CurlyArrowImage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
