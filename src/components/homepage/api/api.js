import React from "react";
import Cards from "../Cards/card"
import axios from 'axios';
import { useState, useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import Coins from "../Coins/coins"
import Chart from "../Chart/chart";

const Api = () => {
   
    const [coins, setCoins] = useState([]);

    const getData = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
            }).catch(error => alert('Oops! We are facing an error.'))
    };

    useEffect(() => {
        getData()
    }, []);

    
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2  },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];

      const breakPoint = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 10, itemsToScroll: 2  },
        { width: 768, itemsToShow: 12 },
        { width: 1200, itemsToShow: 14 }
      ];

    return (
        <section>
            <div className="py-6 sm:px-0 px-14">
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
                <div className="container grid gap-4 px-10 py-4 mx-auto mb-4 sm:px-0">
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
                                last_updated={coin.last_updated}
                                high_24h={coin.high_24h}
                                low_24h={coin.low_24h} />
                                 )
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="py-4 text-2xl font-bold text-center opacity-50 text-custom-blue bg-custom-green">Trade Popular Coins</div>
                        
                        {coins.map((coin) => {
                            return (<Chart
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                market_cap_rank={coin.market_cap_rank}
                                symbol={coin.symbol}
                                current_price={coin.current_price}
                                price_change_percentage_24h={coin.price_change_percentage_24h}
                                total_supply={coin.total_supply} />
                                 )
                        })}
        </section>
    )
}

export default Api;