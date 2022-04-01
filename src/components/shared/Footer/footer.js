import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-opacity-50 footer bg-custom-blue">
      <div className="px-10 py-3 mx-5 sm:mx-14 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-b border-custom-green">
          <div>
            <a href="/">
              <img
                src="/logo.png"
                alt="Crypto Mate Logo"
                className="w-24 h-24 shadow-md"
              />
            </a>
            <ul className="pt-5 text-lg list-style-type-none text-gray-300">
              <i className="pr-3 fab fa-facebook hover:cursor-pointer hover:text-xl hover:text-custom-green"></i>
              <i className="pr-3 fab fa-twitter hover:cursor-pointer hover:text-xl hover:text-custom-green"></i>
              <i className="pr-3 fab fa-instagram hover:cursor-pointer hover:text-xl hover:text-custom-green"></i>
              <i className="fab fa-linkedin hover:cursor-pointer hover:text-xl hover:text-custom-green"></i>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl font-bold">Guides</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Buy Crypto
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Support Center
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Submit a request
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Trading Rules
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl font-bold">Service</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Trade
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Referral
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Exchange
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pb-2 text-xl font-bold">Useful Links</h2>
            <ul className="text-sm list-style-type-none">
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Markets
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  About
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Latest News
                </a>
              </li>
              <li className="hover:text-custom-green">
                <a href="/">
                  <i className="fas fa-chevron-right text-custom-green"></i>&nbsp;
                  Charity
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-3 text-xs">
          Copyright © 2021 | Cryptomate
          <div className="float-right pb-2">
            <a
              href="https://www.termsandconditionsgenerator.com/live.php?token=mC3CLBbpZHH1leTS1ZPJtZnJpIyQWywh"
              className="hover:text-custom-green"
            >
              Terms & Conditions
            </a>{" "}
            &emsp;|&emsp;
            <a
              href="https://www.privacypolicygenerator.info/live.php?token=fFNgpc7cj8VEA0HLEjBdvTGxiwWygzVU"
              className="hover:text-custom-green"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
