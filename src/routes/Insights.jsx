import React from 'react'

const Insights = () => {
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <div className='bg-white p-2 m-2 flex md:grid md:grid-rows-1'>Text</div>
      <div className='p-2 m-2 flex md:grid md:grid-cols-2'>

        <div className='border m-2 flex flex-col md:grid md:grid-rows-2'>
          <div className='border md:flex md:flex-row md:space-between md:row-start-1 md:row-end-2'>
            <div className='rounded bg-white text-center shadow-sm cursor-pointer p-2 m-auto'>
              <small className='text-gray-400 text-xs font-semibold'>Sales: Aug 2027</small>
              <h3>$5.73K</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $10.35K</small>
            </div>

            <div className='rounded bg-white text-center shadow-sm cursor-pointer p-2 m-auto'>
              <small className='text-gray-400 text-xs font-semibold'>Average Order Value: Aug 2027</small>
              <h3>$34</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $0.23K</small>
            </div>
          </div>
          <div className='border md:row-start-2 md:row-end-4 md:row-span-2'>Row 2</div>
        </div>

        <div className='border m-2'>
          <div className='border md:row-start-1 md:row-end-3 md:row-span-2'>Row 2</div>
          <div className='border md:flex md:flex-row md:space-between md:row-start-3 md:row-end-4'>
            <div className='rounded bg-white text-center shadow-sm cursor-pointer p-2 m-auto'>
              <small className='text-gray-400 text-xs font-semibold'>Sales: Aug 2027</small>
              <h3>$5.73K</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $10.35K</small>
            </div>

            <div className='rounded bg-white text-center shadow-sm cursor-pointer p-2 m-auto'>
              <small className='text-gray-400 text-xs font-semibold'>Average Order Value: Aug 2027</small>
              <h3>$34</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $0.23K</small>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white p-2 m-2 flex flex-col md:grid md:grid-cols-3 md:space-around'>
        <div className='border m-2'>text 123</div>
        <div className='border m-2'>text 123</div>
        <div className='border m-2'>text 123</div>
      </div>
    </div>
  )
}

export default Insights