import React from "react";
import ImagePlaceholder from "../assets/images/placeholder.jpeg";

const Avatar = ({ className }) => {
  return (
    <div className="absolute top-5 right-8 z-50">
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="">
          <div className="avatar">
            <div className="w-10 rounded-full bg-[#f4f4f5] p-[2px]">
              <img src={ImagePlaceholder} className="rounded-full" />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-[#f4f4f5] rounded-box z-[1] w-52 p-2 shadow-lg"
        >
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
