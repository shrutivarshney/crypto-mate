import React from "react";

const Chart = ({ coins, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="px-5 py-5 bg-black bg-opacity-20">
        <div className="flex flex-col">
          <div className="overflow-hidden sm:-mx-6 lg:-mx-5">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full text-xl">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-3 text-sm tracking-wider text-left uppercase md:px-6 text-custom-green md:text-xl"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="hidden px-2 py-3 text-sm tracking-wider uppercase md:block md:px-6 text-custom-green md:text-xl"
                    >
                      Symbol
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-sm tracking-wider uppercase md:px-6 text-custom-green md:text-xl"
                    >
                      Current Price
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-sm tracking-wider uppercase md:px-6 text-custom-green md:text-xl"
                    >
                      24h Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin) => (
                    <tr className="text-white" key={coin.key}>
                      <td className="px-2 py-4 text-sm md:px-6 whitespace-nowrap md:text-lg ">
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="inline-flex w-5 h-5 rounded-full md:w-8 md:h-8"
                        />{" "}
                        <span> {coin.name}</span>
                      </td>
                      <td className="hidden px-2 py-4 text-sm text-center uppercase md:block md:px-6 whitespace-nowrap md:text-lg text-transform:">
                        {coin.symbol}
                      </td>
                      <td className="px-2 py-4 text-sm text-center md:px-6 whitespace-nowrap md:text-lg">
                        $ {coin.current_price}
                      </td>
                      <td
                        className="px-2 py-4 text-sm text-center md:px-6 whitespace-nowrap md:text-lg"
                        style={{
                          color:
                            coin.price_change_percentage_24h < 0
                              ? "#ff4527"
                              : "#48da3b",
                        }}
                      >
                        {coin.price_change_percentage_24h}%
                      </td>
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

export default Chart;
