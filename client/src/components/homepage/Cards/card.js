import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const Cards = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data);
        }).catch(error => alert('Oops! We are facing an error.'))
    }, []);
    
  return (
    <div>
            <h1 className="text-center text-white font-bold mb-6 text-xl">Today's Featured Exchange</h1>
            <div className="container mx-auto px-10 sm:px-0 py-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center text-white rounded shadow-md shadow-custom-green py-5">
                <h2 className="text-2xl font-bold">1</h2>
            </div>
            <div className="text-center text-white rounded shadow-md shadow-custom-green py-5">
                <h2 className="text-2xl font-bold">2</h2>
            </div>
            <div className="text-center text-white rounded shadow-md shadow-custom-green py-5">
                <h2 className="text-2xl font-bold">3</h2>
            </div>
            <div className="text-center text-white rounded shadow-md shadow-custom-green py-5">
                <h2 className="text-2xl font-bold">4</h2>
            </div>
        </div>
    </div>
  );
};

export default Cards