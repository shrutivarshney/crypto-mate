import React from 'react';
import axios from 'axios';

const Cards = ({name, image, symbol, current_price, last_updated, high_24h, low_24h}) => {

    
  return (
    <div>
            <div className="text-center bg-custom-blue bg-opacity-80 text-white rounded shadow-lg border-custom-green px-5 py-5">
                <div className="inline-flex"><img className='w-7' src={image} alt={name} />
                <h2 className="text-lg font-extrabold my-auto"> &nbsp;&nbsp;{name} <span className="text-transform: uppercase">&nbsp;&nbsp;{symbol}</span></h2>
            </div>
            <p className="text-xs mt-3 text-zinc-500">{last_updated}</p>
            <h2 className="text-2xl mb-4 mt-4 text-gray-100">$ {current_price}</h2>
            <p className="text-sm">High(24h): ${high_24h}</p>
            <p className="mt-2 text-sm">Low(24h): ${low_24h}</p>
            </div>
        </div>
  );
};

export default Cards