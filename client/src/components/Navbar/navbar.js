import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className='flex items-center flex-wrap bg-custom-blue p-2 '>
        <div className='container mx-auto'>
                <a href='/' className='inline-flex items-center p-2 mr-4 '>
                <span className='text-xl text-white font-bold uppercase tracking-widest'>
                    CRYPTOMATE
                </span>
                </a>
            <button
                className=' inline-flex p-3 hover:bg-custom-orange rounded lg:hidden text-white ml-auto float-right hover:text-white outline-none'
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
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <a href='/'className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-orange hover:text-white '>
                        Home
                        </a>
                        <a href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-orange hover:text-white'>
                        Services
                        </a>
                        <a href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-orange hover:text-white'>
                        Pricing
                        </a>
                        <a href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-orange hover:text-white'>
                        Learn
                        </a>
                        <a href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-orange hover:text-white'>
                        Contact
                        </a>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
};