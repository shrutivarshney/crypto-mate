import React from 'react'

export const Deposit = () => {
  return (
    <div>
              <div className='container flex items-center justify-center'>
            <div className='flex flex-col py-5 my-4 bg-opacity-50 rounded-lg shadow bg-custom-blue sm:px-6 md:px-8 lg:px-10'>
            <h1 className=' text-4xl text-custom-green mb-10'>Select Currency</h1>
            <label htmlFor="crypto" className="form-label text-white">Currency to deposit</label>
            <input className='bg-black mt-3 md:p-2' placeholder='Select the Currency'></input>
            <ul className="flex flex-col items-start w-full lg:ml-16 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto">
              <li className="py-1">
                
              </li>
              </ul>
            <label htmlFor="crypto" className="form-label mt-5 text-white">Currency to exchange</label>
            <input className='bg-black mt-3 md:p-2' placeholder='Select the Currency'></input>
            <button className='bg-custom-green mt-5 md:p-2 text-white font-bold'>Submit</button>
            </div>
            </div>  
        
    </div>
  )
}
