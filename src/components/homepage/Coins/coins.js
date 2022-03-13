import React from 'react';

const Coins = ({ name, image }) => {


    return (
        <div className="container">
            <div className="text-center text-white px-5 py-5">
                <div className="inline-flex">
                    <a target="_parent" rel="noreferrer" href="/GraphPage"><img className="rounded-full w-10" src={image} alt={name} /></a>
                </div>
            </div>
        </div>
    );
};

export default Coins;