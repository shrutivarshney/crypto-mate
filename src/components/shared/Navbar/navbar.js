import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../../Pages/Login";
import Register from "../../../Pages/Register";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [showOptions, setShowOptions] = useState(false);

  

  const [showTrade, setShowTrade] = useState(false);

  const showTradeDrop = () => {
    setShowTrade(!showTrade);
  };

  return (
    <div className="navbar py-1">
      <nav className="bg-custom-blue border-gray-200 px-2 text-sm">
        <div className="container mx-auto py-1 flex flex-wrap items-center justify-between">
          <a href="/" className="flex">
            <img
              src="/logo.png"
              alt="Crypto Mate Logo"
              className="shadow-md h-20 w-20"
            />
          </a>
          <button
            className="inline-flex float-right p-3 ml-auto  text-white rounded outline-none hover:bg-custom-green lg:hidden hover:text-white"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto mt-4`}
          >
            <div className="flex flex-col items-start w-full lg:ml-16 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto">
              <div className="relative">
                <button
                  onMouseEnter={() => setShowOptions(true)}
                  onMouseLeave={() => setShowOptions(false)}
                  className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto"
                >
                  <span className="hover:text-custom-green">
                    Buy Crypto&nbsp;
                  </span>
                  <i className="fas fa-caret-down"></i>{" "}
                </button>
                {showOptions && (
                  <div className="absolute left-4 bg-custom-blue rounded-md py-2 w-56 shadow-md shadow-custom-green">
                    <a href="/" className="block text-white px-4 py-2 font-bold hover:bg-custom-green hover:text-custom-blue">
                      a
                    </a>
                    <a href="/" className="block text-white px-4 py-2 font-bold hover:bg-custom-green hover:text-custom-blue">
                      a
                    </a>
                    <a href="/" className="block text-white px-4 py-2 font-bold hover:bg-custom-green hover:text-custom-blue">
                      a
                    </a>
                  </div>
                )}
              </div>
              <a href="/" className="items-center justify-center w-full px-3 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-custom-green">
                Markets
              </a>
              <div className="relative">
                <button
                  onMouseEnter={() => showTradeDrop(true)}
                  onMouseLeave={() => showTradeDrop(false)}
                  href="/"
                  className="items-center justify-center w-full px-3 font-bold text-white rounded lg:inline-flex lg:w-auto"
                >
                  <span className="hover:text-custom-green">Trade&nbsp;</span>
                  <i className="fas fa-caret-down"></i>
                </button>
                {showTrade && (
                  <div className="absolute left-4 bg-custom-blue rounded-md py-2 w-56 shadow-md shadow-custom-green">
                    <a href="/" className="block text-white px-4 py-2 font-bold hover:bg-custom-green hover:text-custom-blue">
                      a
                    </a>
                    <a href="/" className="block text-white px-4 py-2 font-bold hover:bg-custom-green hover:text-custom-blue">
                      a
                    </a>
                    <a href="/" className="block text-white px-4 py-2 font-bold hover:bg-custom-green hover:text-custom-blue">
                      a
                    </a>
                  </div>
                )}
              </div>
              <Link to="/GraphPage" className="items-center justify-center w-full px-3 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-custom-green">
                Learn
              </Link>
              <Link to="/Videos" className="items-center justify-center w-full px-3 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-custom-green">
                Videos
              </Link>
            </div>
            <div className="lg:ml-auto flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto">
                <Link to="/Login" className="items-center justify-center w-full px-3 py-2 font-bold text-custom-green rounded lg:inline-flex lg:w-auto hover:text-white">
                  Login
                </Link>
                <Link to="/Register" className="items-center justify-center w-full px-3 py-2 font-bold text-custom-blue bg-custom-green rounded lg:inline-flex lg:w-auto hover:bg-custom-hover-green">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
