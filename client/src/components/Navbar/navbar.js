import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className= "navbar">
      <nav className="bg-custom-blue border-gray-200 px-2">
        <div className="container mx-auto py-1 flex flex-wrap items-center justify-between">
          <a href="/" className="flex">
            <img src='/logo.png' alt='cryptomate' className='h-20 w-20' />
          </a>
          <button
                  className='inline-flex float-right p-3 ml-auto text-white rounded outline-none hover:bg-custom-green lg:hidden hover:text-white'
                  onClick={handleClick}
              >
                  <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  >
                  <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                  />
                  </svg>
              </button>
              <div
              className={`${
              active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto float-right mt-4`}
          >
              <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                      <a href='/'className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-green hover:text-white '>
                      Home
                      </a>
                      <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-green hover:text-white'>
                      Services
                      </a>
                      <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-green hover:text-white'>
                      Pricing
                      </a>
                      <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-green hover:text-white'>
                      Learn
                      </a>
                      <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-green hover:text-white'>
                      Contact
                      </a>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar