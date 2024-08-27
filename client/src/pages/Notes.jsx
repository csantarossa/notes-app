import { createContext, useEffect, useState } from "react";
import Form from "../components/Form";
import Display from "../components/Display";
import api from "../services/api-services";
import { Github, Linkedin } from "@geist-ui/icons";

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
      <div className="w-full h-screen relative flex flex-col lg:flex-row justify-between items-center bg-[#09090B]">
        <div className="h-full py-5 flex justify-center items-center flex-col lg:w-[50%] w-full lg:rounded-r-2xl rounded-b-2xl bg-[#F4F4F5]">
          <div className="flex flex-col gap-2">
            <div className="flex justify-start gap-2 items-center">
              <div className="h-10 w-8 bg-[#09090B] relative">
                <div className="bg-[#5d5d63] h-[9px] w-[9px] absolute top-0 right-0"></div>
                <div className="bg-[#f4f4f5] h-2 w-5 absolute top-[-5px] rotate-45 right-[-6px]"></div>
              </div>
              <h1 className="font-black text-5xl text-[#09090B]">GotIt</h1>
            </div>
            <div className="py-2">
              <Form />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-2">
              <a
                target="_blank"
                href="https://github.com/csantarossa/notes-app"
                className="flex justify-start items-center gap-2 mt-4 parent-hover cursor-pointer pr-1 pt-1 pb-1"
              >
                <Github
                  size={18}
                  className="stroke-[#09090B] stroke-[1.5px] child-hover duration-150"
                />
                <p className="text-sm text-[#09090B] font-normal">
                  csantarossa
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/corey-santarossa/"
                className="flex justify-start items-center gap-2 parent-hover cursor-pointer pr-1 pt-1 pb-1"
              >
                <Linkedin
                  size={18}
                  className="stroke-[#09090B] stroke-[1.5px] child-hover duration-150"
                />
                <p className="text-sm font-normal text-[#09090B]">
                  corey-santarossa
                </p>
              </a>
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
