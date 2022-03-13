import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col py-5 my-4 bg-opacity-50 rounded-lg shadow bg-custom-blue sm:px-6 md:px-8 lg:px-10">
        <div className="inline-flex text-4xl font-bold text-center text-custom-green sm:text-3xl">
          <Link to="/" className="flex">
            <img
              src="/logo.png"
              alt="Crypto Mate Logo"
              className="w-20 h-20 shadow-md"
            />
          </Link>
          <span className="self-center mx-auto">Log In</span>
        </div>
        <div className="p-6">
          <form>
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex flex-col gap-4 mb-1">
                <div className="relative">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
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
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex w-full mb-3">
                <input
                  type="submit"
                  className="w-full px-4 py-2 text-center text-white transition duration-200 ease-in rounded-lg shadow-md cursor-pointer bg-custom-green hover:bg-transparent hover:ring-custom-green focus:outline-none hover:ring-2 hover:text-custom-green"
                  id="create-account-email"
                  value="Login"
                  onClick={(e) => submitForm(e)}
                />
              </div>
            </div>
          </form>
          <span className="justify-center pb-5 text-sm text-center text-white flex-items-center">
            Don't have an account ?&nbsp;
            <Link
              to="/Register"
              className="px-1 text-sm text-custom-green hover:text-custom-hover-green"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
