import React from "react";

import "./layout.css";

function blogbanner() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4 card-section w-100">
      <div className="box">
        <div className="card-1 card">
          <img
            src="https://media.istockphoto.com/photos/cryptocurrencies-picture-id1056226168?k=20&m=1056226168&s=612x612&w=0&h=JvBL7ZHAHnKSkjtezvd-4HXkp_IKnHO2c7Tzgfid3KM= "
            alt=""
          />
          <h2 className="absolute font-semibold text-gray-200 opacity-100 text bottom-7 left-2"> 2 din me paisa DOUBLE ? </h2>

          <div className="info">
            <h1 className="text-lg font-bold ">Coin</h1>
            <p className="text-sm"> Padhai Likhayi kro sab milega</p>
            <button className="px-4 py-2 mt-2 text-sm font-semibold rounded text-custom-blue bg-custom-green hover:text-custom-green hover:bg-custom-blue hover:ring-2 hover:ring-custom-green">
              <a href="./">Read More </a>
            </button>
          </div>
        </div>

        <br />

        <div className="card-1 card">
          <img
            src="https://media.istockphoto.com/photos/investing-in-cryptocurrency-concept-image-featuring-dogecoin-picture-id1318513762?k=20&m=1318513762&s=612x612&w=0&h=T6dYdcE-RGfmDJwd7ShzlAng-Mc593hkn0Jo7yyH9f8= "
            alt=""
          />
          <h2 className="absolute font-semibold text-gray-200 opacity-100 text bottom-7 left-2"> Gullak ?? </h2>

          <div className="info">
            <h1 className="text-lg font-bold ">Coin</h1>
            <p className="text-sm">Gullak me paisa rakho bahut scope h</p>
            <button className="px-4 py-2 mt-2 text-sm font-semibold rounded text-custom-blue bg-custom-green hover:text-custom-green hover:bg-custom-blue hover:ring-2 hover:ring-custom-green">
              <a href="./">Read More </a>
            </button>
          </div>
        </div>
      </div>

      {/* BIG IMAGE PART  START*/}

      <div className=" card">
        <img
          src="https://media.istockphoto.com/photos/gold-sign-bitcoin-and-gold-nuggets-on-black-background-picture-id1203525550?k=20&m=1203525550&s=612x612&w=0&h=l3PCgFKy0ZS_kQZRyUITR555Z81SQDjiFktGoQTUJy0= "
          alt=""
        />
        <h2 className="absolute font-semibold text-gray-200 opacity-100 text bottom-7 left-2"> WANT FREE BITCOIN ? </h2>

        <div className="info">
          <h1 className="text-lg font-bold ">Coin</h1>
          <p className="text-sm">
            Free me kuch nhi milta 40 Lakh de. m ipsum dolor sit amet,
            consectetur adipiscing elit. Fusce sem ipsum, viverra non gravida a
          </p>
          <button className="px-4 py-2 mt-2 text-sm font-semibold rounded text-custom-blue bg-custom-green hover:text-custom-green hover:bg-custom-blue hover:ring-2 hover:ring-custom-green">
            <a href="./">Read More </a>
          </button>
        </div>
      </div>

      {/* BIG IMAGE PART  START*/}

      <div className="box">
        <div className="card-1 card">
          <img
            src="https://media.istockphoto.com/photos/gold-bitcoin-and-dogecoin-coins-is-placed-on-a-laptop-showing-a-graph-picture-id1317812957?k=20&m=1317812957&s=612x612&w=0&h=R38Aw1xEJTZJypwgyiv4-gcc-V7ClOuqBdzx5UF7ffY="
            alt=""
          />
          <h2 className="absolute font-semibold text-gray-200 opacity-100 text bottom-7 left-2"> Nothing to tell.. </h2>

          <div className="info">
            <h1 className="text-lg font-bold ">Coin</h1>
            <p className="text-sm">Aur bhai ? Kya Hall Chaal..</p>
            <button className="px-4 py-2 mt-2 text-sm font-semibold rounded text-custom-blue bg-custom-green hover:text-custom-green hover:bg-custom-blue hover:ring-2 hover:ring-custom-green">
              <a href="./">Read More </a>
            </button>
          </div>
        </div>

        <br />

        <div className="card-1 card">
          <img
            src="https://media.istockphoto.com/photos/exchanging-bitcoin-with-united-states-dollar-bill-picture-id1201823658?k=20&m=1201823658&s=612x612&w=0&h=tvPqwNnMsCF16YE4Vl2P6MimJQpaRM3Xwo1W1UbldqI= "
            alt=""
          />
          <h2 className="absolute font-semibold text-gray-200 opacity-100 text bottom-7 left-2"> Paisa de de bhai 2 din me lauta dunga </h2>

          <div className="info">
            <h1 className="text-lg font-bold ">Coin</h1>
            <p className="text-sm"> KON HO TUM ? MAI TUMHE NHI JANTA.</p>
            <button className="px-4 py-2 mt-2 text-sm font-semibold rounded text-custom-blue bg-custom-green hover:text-custom-green hover:bg-custom-blue hover:ring-2 hover:ring-custom-green">
              <a href="./">Read More </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blogbanner;
