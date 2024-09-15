import React, { useState } from "react";
import iphone from "../assets/images/iphone.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [newAccount, setNewAccount] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/signup", {
        email: newAccount.email,
        firstname: newAccount.firstname,
        lastname: newAccount.lastname,
        password: newAccount.password,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success(response.data);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row justify-between items-center bg-primary relative">
      <div className="h-full py-5 flex justify-center items-center flex-col lg:w-[50%] w-full lg:rounded-r-2xl rounded-b-2xl bg-secondary relative">
        <div className="flex justify-start gap-[8px] items-center absolute top-5 left-8">
          <div className="h-5 w-4 bg-primary relative">
            <div className="bg-accent h-[7px] w-[9px] absolute top-0 right-0"></div>
            <div className="bg-secondary h-2 w-4 absolute top-[-5px] rotate-45 right-[-6px]"></div>
          </div>
          <div className="h-5 w-[1px] ml-1 bg-accent opacity-50"></div>
          <h1 className="font-bold text-2xl text-primary">GotIt</h1>
        </div>

        <div className="flex flex-col gap-2 lg:mt-0 mt-20">
          <div>
            <h1 className="font-bold text-3xl text-primary">Create Account</h1>
            <p className="text-sm font-normal text-accent">
              Create an account to begin.
            </p>
          </div>
          <form onSubmit={handleSignup} className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="w-[420px] text-base border-2 border-primary px-3 py-1 h-10 rounded-md bg-secondary"
                  placeholder="Email"
                  value={newAccount.email}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, email: e.target.value })
                  }
                />
              </div>
              <div className="flex gap-3 w-full">
                <div className="flex flex-col">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className="w-[159px] text-base border-2 border-primary px-3 py-1 h-10 rounded-md bg-secondary"
                    placeholder="First Name"
                    value={newAccount.firstname}
                    onChange={(e) =>
                      setNewAccount({
                        ...newAccount,
                        firstname: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    className="w-full text-base border-2 border-primary px-3 py-1 h-10 rounded-md bg-secondary"
                    placeholder="Last Name"
                    value={newAccount.lastname}
                    onChange={(e) =>
                      setNewAccount({
                        ...newAccount,
                        lastname: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="w-[420px] text-base border-2 border-primary px-3 py-1 h-10 rounded-md bg-secondary"
                  placeholder="Enter Password"
                  value={newAccount.password}
                  onChange={(e) =>
                    setNewAccount({
                      ...newAccount,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  className="w-[420px] text-base border-2 border-primary px-3 py-1 h-10 rounded-md bg-secondary"
                  placeholder="Enter Password"
                  value={newAccount.confirmPassword}
                  onChange={(e) =>
                    setNewAccount({
                      ...newAccount,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="flex justify-between items-center my-1">
              <Link to="/login">
                <button
                  type="button"
                  className="text-base w-fit justify-between items-center gap-1 rounded-lg border-2 border-primary text-primary py-3 px-6 hover:bg-secondary flex"
                >
                  Login
                </button>
              </Link>
              <button className="text-base w-fit bg-primary justify-between items-center gap-1 rounded-lg border-2 border-primary text-secondary py-3 px-6 hover:border-primary hover:bg-primary flex">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-full py-10 px-10 flex justify-center items-center flex-col lg:w-[50%] w-full relative gap-10">
        <div>
          <h1 className="text-secondary font-semibold lg:text-3xl text-xl">
            Coming Soon
          </h1>
          <p className="text-secondary font-light text-sm opacity-80 max-w-[500px] ">
            With so many features in development, you won't want to miss what's
            coming.
          </p>
        </div>

        <img src={iphone} alt="" className="w-[400px]  right-[-300px]" />
      </div>
    </div>
  );
};

export default Register;
