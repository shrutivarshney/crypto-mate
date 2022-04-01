import React, { useCallback } from "react";
import fire from "../config/fire";
import { Link } from "react-router-dom";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
  
  const Register = ({ history }) => {
    const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const { email, password, fullName, username } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value, fullName.value, username.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }, [history]);

    function withRouter(Component) {
      function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
          <Component
            {...props}
            router={{ location, navigate, params }}
          />
        );
      }
    
      return ComponentWithRouterProp;
    }
    
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-md px-4 py-5 my-4 bg-opacity-50 rounded-lg shadow bg-custom-blue sm:px-6 md:px-8 lg:px-10">
      <div className="inline-flex text-4xl font-bold text-center text-custom-green sm:text-3xl">
        <Link to="/" className="flex">
          <img
            src="/logo.png"
            alt="Crypto Mate Logo"
            className="w-20 h-20 shadow-md"
          />
        </Link>
        <span className="self-center mx-auto">Register</span>
      </div>
        <div className="p-6">
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex flex-col gap-4 mb-1">
                <div className="relative">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
                    name="fullName"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-1">
                <div className="relative">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
                    name="username"
                    placeholder="Username"
                  />
                </div>
                <div className="flex flex-col gap-4 mb-1">
                  <div className="relative">
                    <input
                      type="text"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
                      name="email"
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
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex w-full mb-3">
                  <input
                    type="submit"
                    className="w-full px-4 py-2 text-center text-white transition duration-200 ease-in rounded-lg shadow-md cursor-pointer bg-custom-green hover:bg-transparent hover:ring-custom-green focus:outline-none hover:ring-2 hover:text-custom-green"
                    id="create-account-email"
                    value="Register"
                  />
                </div>
              </div>
            </div>
          </form>
          <span className="justify-center text-sm text-center text-white flex-items-center dark:text-gray-400">
            Already have an account ?&nbsp;
            <Link
              to="/Login"
              className="px-1 text-sm text-custom-green hover:text-custom-hover-green"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
