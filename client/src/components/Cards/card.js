const Cards = () => {
  return (
    <div>
        <div data-component='navbar-component'>
            <div className="container mx-auto px-10 sm:px-0 py-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 text-center text-white rounded shadow-xl py-7 bg-custom-blue shadow-black">
                <h2 className="text-2xl font-bold">Secure storage</h2>
                <p className="pt-2 text-small">We store the vast majority of the digital assets in secure offline storage.</p>
            </div>
            <div className="p-4 text-center text-white rounded shadow-xl py-7 bg-custom-blue shadow-black">
                <h2 className="text-2xl font-bold">Protected by insurance</h2>
                <p className="pt-2 text-small">Coinbase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.</p>
            </div>
            <div className="p-4 text-center text-white rounded shadow-xl py-7 bg-custom-blue shadow-black">
                <h2 className="text-2xl font-bold">Industry best practices</h2>
                <p className="pt-2 text-small">Coinbase supports a variety of the most popular digital currencies.</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Cards