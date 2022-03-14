import React from 'react';

const Chart = ({coins, loading}) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
            <div className="bg-black bg-opacity-20 px-5 py-5">
            <div className="flex flex-col">
  <div className="overflow-hidden sm:-mx-6 lg:-mx-5">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <table className="text-xl min-w-full">
  <thead>
    <tr>
      <th scope="col" className="px-2 md:px-6 py-3 text-custom-green text-sm md:text-xl text-left uppercase tracking-wider">Name</th>
      <th scope="col" className="px-2 hidden md:block md:px-6 py-3 text-custom-green text-sm md:text-xl uppercase tracking-wider">Symbol</th>
      <th scope="col" className="px-2 md:px-6 py-3 text-custom-green text-sm md:text-xl uppercase tracking-wider">Current Price</th>
      <th scope="col" className="px-2 md:px-6 py-3 text-custom-green text-sm md:text-xl uppercase tracking-wider">24h Change</th>
    </tr>
  </thead>
  <tbody>
  {coins.map((coin) => (
    <tr className='text-white'>
      <td className="px-2 md:px-6 py-4 whitespace-nowrap text-sm md:text-lg "><img src={coin.image} alt={coin.name} className="w-5 rounded-full h-5 md:w-8 md:h-8 inline-flex"/> <span> {coin.name}</span></td>
      <td className='px-2 hidden md:block md:px-6 py-4 whitespace-nowrap text-center text-sm md:text-lg text-transform: uppercase'>{coin.symbol}</td>
      <td className="px-2 md:px-6 py-4 whitespace-nowrap text-center text-sm md:text-lg">$ {coin.current_price}</td>
      <td className="px-2 md:px-6 py-4 whitespace-nowrap text-center text-sm md:text-lg" style={{
  color: coin.price_change_percentage_24h < 0 ? "#d83f4a" : "#48f188"
}}>{coin.price_change_percentage_24h}%</td>
    </tr>
    ))}
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