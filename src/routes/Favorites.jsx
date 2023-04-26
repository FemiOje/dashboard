import React from 'react'
import { FiArrowUpCircle } from 'react-icons/fi'
import { FiArrowDownCircle } from 'react-icons/fi'
import { FiTrendingUp } from 'react-icons/fi'
import { FiTrendingDown } from 'react-icons/fi'

const Favorites = () => {
  return (
    <div className='favorites w-[100%] min-h-screen bg-slate-100 '>
      <div className='top md:grid md:grid-cols-2 md:gap-2'>
        <div className="small-cards md:grid md:grid-rows-2 m-2 md:grid-cols-2 md:gap-2">
          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowUpCircle />
              </div>
              <div className='flex flex-row self-center text-green-600 font-bold rounded p-2 group-hover:bg-green-100  group-hover:text-green-500'>
                <FiTrendingUp />
                <span>+10%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">243</p>
            <h3 className="text-muted">Total Employees</h3>
          </div>

          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowDownCircle />
              </div>
              <div className='flex flex-row self-center text-red-600 font-bold rounded p-2 group-hover:bg-red-100  group-hover:text-red-500'>
                <FiTrendingDown />
                <span>+10%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">20</p>
            <h3 className="text-muted">Number of Leave</h3>
          </div>

          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowUpCircle />
              </div>
              <div className='flex flex-row self-center text-green-600 font-bold rounded p-2 group-hover:bg-green-100  group-hover:text-green-500'>
                <FiTrendingUp />
                <span>+16%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">28</p>
            <h3 className="text-muted">New Employees</h3>
          </div>

          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowDownCircle />
              </div>
              <div className='flex flex-row self-center text-red-600 font-bold rounded p-2 group-hover:bg-red-100 group-hover:text-red-500'>
                <FiTrendingDown />
                <span>-18%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">60%</p>
            <h3 className="text-muted">Happiness Rate</h3>
          </div>

        </div>

        <div className="project-tracked-chart bg-white cursor-pointer shadow-md m-2 rounded">Chart</div>
      </div>

      <div className='bottom'>
        <div className="employee-summary-table bg-white m-2 p-4 rounded">
          <h2 className="text-xl font-semibold">Employee Summary</h2>
          <hr className="text-gray-300 my-4" />
        </div>
      </div>
    </div>
  )
}

export default Favorites