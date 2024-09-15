import React, { useContext } from "react";
import ImagePlaceholder from "../assets/images/profile-placeholder.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/UserContext";

const Avatar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await axios.post("/auth/logout");
      toast.success("Logging out.");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute top-5 right-8 z-50">
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="">
          <div className="avatar">
            <div className="w-10 rounded-full bg-secondary p-[2px]">
              <img src={ImagePlaceholder} className="rounded-full" />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-secondary rounded-box z-[1] w-52 p-2 shadow-lg gap-1"
        >
          <div className="p-4">
            <p className="font-semibold text-base">
              {user ? `${user.firstname} ${user.lastname}` : "Loading"}
            </p>
            <p>{user ? `${user.email}` : "Loading"} </p>
          </div>

          {/* <li>
            <p
              onClick={() =>
                document.getElementById("settings_modal").showModal()
              }
              className="py-4"
            >
              Settings
            </p>
          </li> */}
          <li className="">
            <a
              onClick={() => handleLogout()}
              className="bg-primary rounded-xl font-semibold text-secondary py-4"
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
