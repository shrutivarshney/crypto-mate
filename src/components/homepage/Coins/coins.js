import React from 'react';

const Coins = ({ name, image,key }) => {
    return (
        <div>
            <div className="px-5 py-5 text-center text-white" key={key}>
                <div className="inline-flex">
                    <a target="_parent" rel="noreferrer" href="/GraphPage"><img className="w-10 rounded-full" src={image} alt={name} /></a>
                </div>
            </div>
        </div>
    );
};

export default Coins;