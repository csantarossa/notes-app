import { createContext, useEffect, useState } from "react";
import Form from "../components/Form";
import Display from "../components/Display";
import api from "../services/api-services";

export const NotesContext = createContext();

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.getAll().then((response) => {
      setNotes(response);
    });
  }, []);

  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      <div className="w-full h-screen relative flex flex-col lg:flex-row justify-between items-center bg-[#ff6149]">
        <div className="h-full flex justify-center items-center flex-col lg:w-[50%] w-full lg:rounded-r-2xl rounded-b-2xl bg-white">
          <div className="flex flex-col gap-2">
            <div className="">
              <h1 className="font-black text-5xl text-[#ff6149]">Notes.io</h1>
            </div>
            <div className="py-2">
              <Form />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col py-12 justify-center items-center lg:w-[50%] w-full">
          <Display />
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export default Notes;
