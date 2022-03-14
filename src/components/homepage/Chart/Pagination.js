
export default function Pagination({
    chartsPerPage,
    totalCharts,
    paginateFront,
    paginateBack,
    currentPage,
  }) {
  
  
    return (
      <div className='py-4 text-center'>
        <div>
          <p className='text-md text-custom-green'>
            Showing
            <span className='font-medium'> {currentPage * chartsPerPage - 10} </span>
            to
             <span className='font-medium'> {currentPage * chartsPerPage} </span>
            of
            <span className='font-medium'> {totalCharts} </span>
            results
          </p>
        </div>
        <nav className='block'></nav>
        <div>
          <nav className='relative z-0 inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'
          >
              <button className="relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md border-custom-blue bg-custom-green text-custom-blue hover:bg-custom-hover-green" onClick={() => { paginateBack();}}>Previous</button>
             <button className='relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md border-custom-blue bg-custom-green text-custom-blue hover:bg-custom-hover-green' onClick={() => { paginateFront();}}> Next</button>
            </nav>
        </div>
      </div>
    );
  }
  