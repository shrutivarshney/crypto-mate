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
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col py-8 rounded-lg shadow h-96 bg-neutral-300 dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <h1 className="self-center text-5xl font-extrabold text-gray-800 sm:text-2xl dark:text-white">
          Log In
        </h1>
        <div className="p-6 mt-8">
          <form>
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex flex-col gap-4 mb-2">
                <div className="relative ">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative ">
                  <input
                    type="password"
                    className="flex-1 w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                  className="w-full px-4 py-3 text-center text-white transition duration-200 ease-in bg-purple-600 rounded-lg shadow-md cursor-pointer hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-slate-400 "
                  id="create-account-email"
                  value="Submit"
                  onClick={(e) => submitForm(e)}
                />
              </div>
            </div>
          </form>
          <span className="justify-center pb-5 text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Don't have an account ?
            <Link
              to="/Register"
              className="px-1 text-sm underline text-custom-green hover:text-custom-green"
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
