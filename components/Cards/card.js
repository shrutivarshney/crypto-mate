import Link from 'next/link';
import { useState } from 'react';

export const Cards = () => {
  return (
    <div>
        <div class="container mx-auto px-10 sm:px-0 py-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 py-7 text-center bg-custom-blue text-white rounded shadow-xl shadow-black">
                <h2 className="font-bold text-2xl">Secure storage</h2>
                <p className="text-small pt-2">We store the vast majority of the digital assets in secure offline storage.</p>
            </div>
            <div className="p-4 py-7 text-center bg-custom-blue text-white rounded shadow">
                <h2 className="font-bold text-2xl">Protected by insurance</h2>
                <p className="text-small pt-2">Coinbase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.</p>
            </div>
            <div className="p-4 py-7 text-center bg-custom-blue text-white rounded shadow">
                <h2 className="font-bold text-2xl">Industry best practices</h2>
                <p className="text-small pt-2">Coinbase supports a variety of the most popular digital currencies.</p>
            </div>
        </div>
    </div>
  );
};