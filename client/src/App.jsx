import { Toaster } from "react-hot-toast";
import Notes from "./pages/Notes";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import UserContextProvider from "./contexts/UserContext";
import ProtectedRoute from "./services/ProtectedRoute";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true; // Sends cookies with requests automatically.

function App() {
  return (
    <UserContextProvider>
      <div
        data-theme="dark"
        className="w-[100vw] min-h-screen flex flex-col justify-start items-center overflow-hidden"
      >
        <Toaster position="bottom-right" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Notes />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
