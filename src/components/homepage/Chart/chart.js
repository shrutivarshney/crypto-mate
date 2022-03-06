import React from 'react';

const Chart = ({name, image, symbol, market_cap_rank, current_price, price_change_percentage_24h, total_supply}) => {

    
  return (
    <div>
            <div className="bg-custom-blue bg-opacity-80 shadow-lg shadow-custom-green px-5 py-5">
            <div className="flex flex-col">
  <div className=" overflow-hidden sm:-mx-6 lg:-mx-5">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <table className="text-xl min-w-full">
  <thead>
    <tr>
      <th scope="col" className="px-6 py-3 text-xl uppercase tracking-wider">Rank</th>
      <th scope="col" className="px-6 py-3  text-xl uppercase tracking-wider">Name</th>
      <th scope="col" className="px-6 py-3 text-xl uppercase tracking-wider">Symbol</th>
      <th scope="col" className="px-6 py-3  text-xl uppercase tracking-wider">USD Price</th>
      <th scope="col" className="px-6 py-3  text-xl uppercase tracking-wider">24h Change</th>
      <th scope="col" className="px-6 py-3  text-xl uppercase tracking-wider">Total Supply</th>
    </tr>
  </thead>
  <tbody>
    <tr className='text-white'>
      <td className="px-6 py-4 whitespace-nowrap text-center text-md ">{market_cap_rank}</td>
      <td className="px-6 py-4 whitespace-nowrap  text-center text-md "><img src={image} alt={name} className="w-5 inline-flex"/> <span> {name}</span></td>
      <td className='px-6 py-4 whitespace-nowrap text-center text-md text-transform: uppercase'>{symbol}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-md ">$ {current_price}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-md ">{price_change_percentage_24h}%</td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-md ">$ {total_supply}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
            </div>
        </div>
  );
};

export default Chart