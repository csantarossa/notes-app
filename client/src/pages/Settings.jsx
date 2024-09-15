import React from "react";

const Settings = () => {
  return (
    <div>
      <dialog id="settings_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Settings</h3>
          <div className="p-3">
            <div>
              <h1 className="font-semibold text-base">Profile Picture</h1>
              {/* <img src= alt="" /> */}
              <input type="file" />
            </div>
            <div>{/* <p>Change Password</p> */}</div>
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full p-3">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-between w-full">
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("settings_modal").close()
                  }
                  className="text-base w-fit justify-between items-center gap-1 rounded-lg border-2 border-primary text-primary px-3 hover:bg-secondary flex"
                >
                  Close
                </button>
                <button className="text-base w-fit bg-primary justify-between items-center gap-1 rounded-lg border-2 border-primary text-secondary py-3 px-3 hover:border-primary hover:bg-primary flex">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Settings;
