import React from "react";

const Avatar = ({ className }) => {
  return (
    <div className={className}>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="" />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
