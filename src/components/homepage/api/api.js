import React from "react";
import Cards from "../Cards/card"
import axios from 'axios';
import { useState, useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import Coins from "../Coins/coins"
import Chart from "../Chart/chart";
import Pagination from "../Chart/Pagination";

const Api = () => {
   
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [chartsPerPage] = useState(10);

    const getData = () => {
        setLoading(true);
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                setLoading(false);
            }).catch(error => alert('Oops! We are facing an error.'))
    };

    useEffect(() => {
        getData()
    }, []);

    const indexOfLastChart = currentPage * chartsPerPage;
    const indexOfFirstChart = indexOfLastChart - chartsPerPage;
    const currentCharts = coins.slice(indexOfFirstChart, indexOfLastChart);

    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 3, itemsToScroll: 2  },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
      ];

      const breakPoint = [
        { width: 1, itemsToShow: 5 },
        { width: 550, itemsToShow: 10, itemsToScroll: 2  },
        { width: 768, itemsToShow: 12 },
        { width: 1200, itemsToShow: 14 }
      ];

    return (
        <section>
            <div className="py-6 px-0 md:px-14">
            <Carousel breakPoints={breakPoint} 
                        showArrows={false} 
                        enableAutoPlay={true}
                        pagination={false}>{
                        coins.map((coin) => {
                            return (<Coins
                                key={coin.id}
                                name={coin.name}
                                image={coin.image} />
                                 )
                        })}
                    </Carousel>
            </div>
            <div>
                <h1 className="mb-6 text-xl font-bold text-center text-white">Today's Featured Exchange</h1>
                <div className="container grid gap-4 md:px-10 py-4 mx-auto mb-4 px-0">
                    <Carousel breakPoints={breakPoints} 
                        showArrows={false} 
                        enableAutoPlay={true}
                        pagination={false}>{
                        coins.map((coin) => {
                            return (<Cards
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                current_price={coin.current_price}
                                high_24h={coin.high_24h}
                                low_24h={coin.low_24h} />
                                 )
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="py-4 text-xl md:text-2xl font-bold text-center opacity-50 text-custom-blue bg-custom-green">Trade Popular Coins</div>
                        
            <Chart coins={currentCharts} />
      <Pagination
        chartsPerPage={chartsPerPage}
        totalCharts={coins.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
        </section>
    )
}

export default Api;