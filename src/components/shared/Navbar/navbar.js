import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  
  return (
    <div className="md:py-16 md:pb-5 py-10 navbar">
      <nav className="px-2 text-sm border-gray-200 bg-custom-blue fixed top-0 inset-x-0 z-20">
        <div className="flex flex-wrap items-center justify-between py-1 mx-5 sm:mx-14">
          <Link to="/" className="flex">
            <img
              src="/logo.png"
              alt="Crypto Mate Logo"
              className="w-16 md:w-20 md:h-20 h-16 pt-2 md:pt-0 shadow-md"
            />
          </Link>
          <button
            className="inline-flex float-right p-3 ml-auto text-white rounded outline-none hover:text-custom-green lg:hidden"
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
            <ul className="flex flex-col items-start w-full lg:ml-16 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto">
              <li className="py-1">
                <div className="relative group">
                  <button className="items-center justify-center w-full px-4 py-2 font-bold text-white rounded hover:text-custom-green lg:inline-flex lg:w-auto">
                    <span>
                      Buy Crypto&nbsp;
                    </span>
                    <i className="fas fa-caret-down"></i>
                  </button>
                  <div className="absolute z-10 hidden w-48 py-2 rounded-md shadow-md left-4 bg-custom-blue shadow-custom-green group-hover:block">
                    <Link
                      to="/DepositPage"
                      className="block px-4 py-2 font-bold text-white hover:bg-custom-green hover:text-custom-blue"
                    >
                      <i className="fa-solid fa-building-columns"></i>
                      Deposit
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 font-bold text-white hover:bg-custom-green hover:text-custom-blue"
                    >
                      Credit/Debit Card
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 font-bold text-white hover:bg-custom-green hover:text-custom-blue"
                    >
                      Cash Balance
                    </Link>
                  </div>
                </div>
              </li>
              {/*<li className="py-1">
                <div className="relative pb-2 lg:pb-0">
<<<<<<< HEAD
                  <button
                    href="/Market"
=======
                  <Link
                    to="/MarketPage"
>>>>>>> 92e7393eac8be2b7d410e42ceda46f0c674d631c
                    className="items-center justify-center w-full px-4 font-bold text-white rounded lg:inline-flex lg:w-auto"
                  >
                    Markets
                  </Link>
                </div>
          </li>*/}
              <li className="py-1">
                <div className="relative group">
                  <button
                    href="/"
                    className="items-center justify-center w-full px-4 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-custom-green"
                  >
                    <span>Trade&nbsp;</span>
                    <i className="fas fa-caret-down"></i>
                  </button>
                  <div className="absolute z-10 hidden w-48 py-2 rounded-md shadow-md left-4 bg-custom-blue shadow-custom-green group-hover:block">
                    <Link
                      to="/"
                      className="block px-4 py-2 font-bold text-white hover:bg-custom-green hover:text-custom-blue"
                    >
                      Convert
                    </Link>
                    <Link
                      to="/GraphPage"
                      className="block px-4 py-2 font-bold text-white hover:bg-custom-green hover:text-custom-blue"
                    >
                      Coin Graph
                    </Link>
                  </div>
                </div>
              </li>
              <li className="py-1">
                <div className="relative group">
                  <button
                    href="/"
                    className="items-center justify-center w-full px-4 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:text-custom-green"
                  >
                    <span>Learn&nbsp;</span>
                    <i className="fas fa-caret-down"></i>
                  </button>
                  <div className="absolute z-10 hidden w-48 py-2 rounded-md shadow-md left-4 bg-custom-blue shadow-custom-green group-hover:block">
                    <Link
                      to="/Blogs"
                      className="block px-4 py-2 font-bold text-white hover:bg-custom-green hover:text-custom-blue"
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/Videos"
                      className="block px-4 py-2 font-bold text-white hover:bg-custom-green hover:text-custom-blue"
                    >
                      Videos
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex flex-row items-start w-full lg:ml-auto lg:w-auto lg:h-auto">
              <Link
                to="/Login"
                className="items-center justify-center w-auto px-4 py-2 mx-8 mb-3 font-bold rounded hover:text-custom-blue hover:bg-custom-green lg:inline-flex bg-custom-blue text-custom-green md:mr-1"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="items-center justify-center w-auto px-4 py-2 ml-5 mb-3 font-bold rounded text-custom-blue bg-custom-green lg:inline-flex hover:bg-custom-blue hover:text-custom-green hover:ring-2 hover:ring-custom-green"
              >
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
