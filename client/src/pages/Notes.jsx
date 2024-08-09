import { createContext, useState } from "react";
import Form from "../components/Form";
import Display from "../components/Display";

export const NotesContext = createContext();

const Notes = () => {
  const [notes, setNotes] = useState([
    { content: "test", important: true, id: 1 },
    { content: "test 2", important: false, id: 2 },
  ]);
  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      <div className="w-full h-screen relative flex justify-between items-center bg-[#ff6149]">
        <div className="h-full flex justify-center items-center flex-col w-[50%] rounded-r-2xl bg-white">
          <div className="text-black flex flex-col gap-2">
            <h1 className="font-bold text-4xl text-[#ff6149]">Notes</h1>
            <div className="py-2">
              <Form />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col py-12 justify-center items-center w-[50%]">
          <Display />
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export default Notes;
