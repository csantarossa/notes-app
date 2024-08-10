import { createContext, useEffect, useState } from "react";
import Form from "../components/Form";
import Display from "../components/Display";
import api from "../services/api-services";
import { Github, Linkedin } from "@geist-ui/icons";
import Logo from "../assets/images/logo.png";

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
        <div className="h-full py-5 flex justify-center items-center flex-col lg:w-[50%] w-full lg:rounded-r-2xl rounded-b-2xl bg-white">
          <div className="flex flex-col gap-2">
            <div className="flex justify-start gap-1 items-center">
              <img src={Logo} alt="" className="h-12" />
              <h1 className="font-black text-5xl text-[#ff6149]">GotIt</h1>
            </div>
            <div className="py-2">
              <Form />
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-3">
              <div className="flex justify-start items-center gap-2 mt-4">
                <Github size={18} className="stroke-[#3c3c3c]" />
                <a
                  className="text-sm text-[#3c3c3c]"
                  href="https://github.com/csantarossa/notes-app"
                >
                  csantarossa
                </a>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Linkedin size={18} className="stroke-[#3c3c3c]" />
                <a
                  className="text-sm text-[#3c3c3c]"
                  href="https://www.linkedin.com/in/corey-santarossa/"
                >
                  corey-santarossa
                </a>
              </div>
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
