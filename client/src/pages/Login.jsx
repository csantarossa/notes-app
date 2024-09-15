import React, { useContext, useState } from "react";
import demoImg from "../assets/images/demo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        email: login.email,
        password: login.password,
      });
      if (response.data.error) return toast.error(response.data.error);
      else {
        toast.success("Login Successful");
        setUser(response.data);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="w-screen h-screen flex flex-col lg:flex-row justify-between items-center bg-primary relative">
        <div className="h-full py-5 flex justify-center items-center flex-col lg:w-[50%] w-full lg:rounded-r-2xl rounded-b-2xl bg-secondary relative">
          <div className="flex justify-start gap-[8px] items-center absolute top-5 left-8">
            <div className="h-5 w-4 bg-primary relative">
              <div className="bg-accent h-[7px] w-[9px] absolute top-0 right-0"></div>
              <div className="bg-secondary h-2 w-4 absolute top-[-5px] rotate-45 right-[-6px]"></div>
            </div>
            <div className="h-5 w-[1px] opacity-50 ml-1 bg-accent"></div>
            <h1 className="font-bold text-2xl text-primary">GotIt</h1>
          </div>
          <div className="flex flex-col gap-2 lg:mt-0 mt-20">
            <div>
              <h1 className="font-bold text-3xl text-primary">Login</h1>
              <p className="text-sm font-normal text-accent">
                Login to access your tasks.
              </p>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="w-[320px] text-base border-2 border-primary px-3 py-1 h-10 rounded-md bg-secondary"
                    placeholder="Enter Email"
                    value={login.email}
                    onChange={(e) =>
                      setLogin({ ...login, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="w-[320px] text-base border-2 border-primary px-3 py-1 h-10 rounded-md bg-secondary"
                    placeholder="Enter Password"
                    value={login.password}
                    onChange={(e) =>
                      setLogin({ ...login, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <a href="#" className="text-accent text-sm underline">
                Forgot Password
              </a>
              <div className="flex justify-between items-center my-1">
                <Link to="/register">
                  <button
                    type="button"
                    className="text-base w-fit justify-between items-center gap-1 rounded-lg border-2 border-primary text-primary py-3 px-6 hover:bg-secondary flex"
                  >
                    Register
                  </button>
                </Link>
                <button className="text-base w-fit bg-primary justify-between items-center gap-1 rounded-lg border-2 border-primary text-secondary py-3 px-6 hover:border-primary hover:bg-primary flex">
                  Login
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
              With so many features in development, you won't want to miss
              what's coming.
            </p>
          </div>
          <img src={demoImg} alt="" className="w-[500px]  right-[-300px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
