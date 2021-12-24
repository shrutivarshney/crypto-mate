import React from "react";

const Footer = () => {
    return ( 
        <div className="footer bg-custom-blue bg-opacity-50 text-white">
            <div className="container mx-auto px-10 md:px-0 py-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-b border-custom-green">
                    <div>
                        <a href="/">
                            <img
                                src="/logo.png"
                                alt="Crypto Mate Logo"
                                className="shadow-md h-24 w-24"
                            />
                        </a>
                        <ul className="list-style-type-none text-lg pt-5 text-custom-green">
                            <i className="fab fa-facebook pr-3 hover:cursor-pointer hover:text-xl hover:text-gray-300"></i>
                            <i className="fab fa-twitter pr-3 hover:cursor-pointer hover:text-xl hover:text-gray-300"></i>
                            <i className="fab fa-instagram pr-3 hover:cursor-pointer hover:text-xl hover:text-gray-300"></i>
                            <i className="fab fa-linkedin hover:cursor-pointer hover:text-xl hover:text-gray-300"></i>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl pb-2 font-bold">Guides</h2>
                        <ul className="list-style-type-none text-sm">
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Buy Crypto</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Support Center</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Submit a request</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Trading Rules</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl pb-2 font-bold">Service</h2>
                        <ul className="list-style-type-none text-sm">
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Trade</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Referral</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Exchange</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl pb-2 font-bold">Useful Links</h2>
                        <ul className="list-style-type-none text-sm">
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Markets</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; About</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Latest News</a></li>
                            <li className="hover:text-custom-green"><a href="/"><i class="fas fa-chevron-right text-custom-green"></i>&nbsp; Charity</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-xs pt-3">
                    Copyright © 2021 | Cryptomate
                    <div className="float-right pb-2">
                        <a href="/" className="hover:text-custom-green">Terms & Conditions</a> &emsp;|&emsp;
                        <a href="/" className="hover:text-custom-green">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;