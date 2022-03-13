import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col py-8 h-96 bg-neutral-300 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <h1 className="self-center text-5xl font-extrabold text-gray-800 sm:text-2xl dark:text-white">
          Log In
        </h1>
        <div className="p-6 mt-8">
          <form>
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex flex-col gap-4 mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <input
                  type="submit"
                  className="py-3 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-slate-400 cursor-pointer rounded-lg "
                  id="create-account-email"
                  value="Submit"
                  onClick={(e) => submitForm(e)}
                />
              </div>
            </div>
          </form>
          <span className="justify-center text-sm pb-5 text-center text-gray-500 flex-items-center dark:text-gray-400">
            Don't have an account ?
            <Link
              to="/Register"
              className="text-sm text-blue-500 underline hover:text-blue-700 px-1"
            >
              Register here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
