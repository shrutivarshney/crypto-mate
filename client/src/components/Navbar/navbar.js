import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className='flex flex-wrap items-center p-2 bg-custom-blue '>
        <div className='container'>
                <a href='/' className='inline-flex items-center p-2 mr-4'>
                <span className='text-xl font-bold tracking-widest text-white uppercase'>
                    CRYPTOMATE
                </span>
                </a>
            <button
                className='inline-flex float-right p-3 ml-auto text-white rounded outline-none hover:bg-custom-orange lg:hidden hover:text-white'
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
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
                className={`${
                active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto float-right`}
            >
                <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
                        <a href='/'className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-orange hover:text-white '>
                        Home
                        </a>
                        <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-orange hover:text-white'>
                        Services
                        </a>
                        <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-orange hover:text-white'>
                        Pricing
                        </a>
                        <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-orange hover:text-white'>
                        Learn
                        </a>
                        <a href='/' className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-custom-orange hover:text-white'>
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