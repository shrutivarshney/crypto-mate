const Banner = () => {
    return (
        <div className="py-4 bg-opacity-60 bg-custom-blue">
            <div className="grid py-8 mx-16 md:gap-4 md:grid-cols-3 place-items-center">
                <div className="lg:col-span-2 md:col-span-3">
                    <p className="text-2xl font-bold leading-10 sm:text-3xl md:text-5xl text-custom-green">World's Limitless Cryptocurrrency Exchange</p>
                    <p className="py-6 text-base text-white">Trade Bitcoin, BNB and hundreds of other cryptcurrencies in minutes.</p>
                    
                </div>
                <div className="hidden place-items-center lg:block">
                    <img src="banner/img2.jpg" className="flex justify-end" alt="bannerImg"></img>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;