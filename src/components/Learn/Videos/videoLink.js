import React from 'react'

const VideoLink = () => {
    const videos = [{link: "https://www.youtube-nocookie.com/embed/6Gu2QMTAkEU", title: "What is Cryptocurrency?"},
                    {link: "https://www.youtube-nocookie.com/embed/C8hfHYrkQDk", title: "What is a Cryptocurrency Wallet?"},
                    {link: "https://www.youtube-nocookie.com/embed/IsXvoYeJxKA", title: "What is Ethereum?"},
                    {link: "https://www.youtube-nocookie.com/embed/luYjRI8TGO0", title: "What is Bitcoin?"},
                    {link: "https://www.youtube-nocookie.com/embed/Um_r2_krsoI", title: "The Five Biggest Cryptocurrency Hacks"},
                    {link: "https://www.youtube-nocookie.com/embed/h7RaNPM60BE", title: "How to Trade Cryptocurrency!"},
                    {link: "https://www.youtube-nocookie.com/embed/oFIvkHX9x5I", title: "How to Read Cryptocurrency Charts! - Part 1"},
                    {link: "https://www.youtube-nocookie.com/embed/QjCg5d4X6WE", title: "How to Read Cryptocurrency Charts! - Part 2"},
                    {link: "https://www.youtube-nocookie.com/embed/NUBtK4HUcO4", title: "What Makes Cryptocurrency Valuable? - Tokenomics Part: 1"},
                    {link: "https://www.youtube-nocookie.com/embed/VQFrca_Tsm0", title: "What Makes Cryptocurrency Valuable? - Tokenomics Part: 2"},
                    {link: "https://www.youtube-nocookie.com/embed/vj8W-gbrKaU", title: "The Impact of Bitcoin on The Global Economy"},
                    {link: "https://www.youtube-nocookie.com/embed/9uQ62FpbbXY", title: "Crypto NFT-A New World of Fine Art"}]
  return (
    <div>
      <div className='flex justify-center'>
      <div className="grid py-5 grid-cols-1 md:grid-cols-3 md:gap-12">
        {videos.map((vid)=> <div>
          <iframe className='w-72 my-5 h-40 md:w-48 md:my-0 lg:w-96 lg:h-60' src={vid.link} title={vid.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>   
        )}
    </div>
    </div>
    </div>
  )
}

export default VideoLink;
