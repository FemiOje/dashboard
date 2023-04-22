import React from 'react'
import { CiMoneyBill, CiMoneyCheck1 } from 'react-icons/ci';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home md:grid-rows-2">
      <div className="price-cards flex flex-col items-center justify-around gap-4 my-3 md:grid-cols-4 md:flex-row"> {/* rename */}
        <div className="price-card-1 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md">
            <CiMoneyBill />
          </div>

          <div className='self-center'>
            <p>$12,566</p>
            <h3 className='text-xs text-slate-500'>Bank Account</h3>
          </div>
        </div>

        <div className="price-card-2 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md">
            <CiMoneyCheck1 />
          </div>

          <div className='self-center'>
            <p>$43,566</p>
            <h3 className='text-xs text-slate-500'>Investment Account</h3>
          </div>
        </div>

        <div className="price-card-3 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md">
            <MdAttachMoney />
          </div>

          <div className='self-center'>
            <p>$567</p>
            <h3 className='text-xs text-slate-500'>Cashback</h3>
          </div>
        </div>

        <div className="price-card-4 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md">
            <MdMoneyOff />
          </div>

          <div className='self-center'>
            <p>$8,545</p>
            <h3 className='text-xs text-slate-500'>Cashback</h3>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-2 md:flex-row md:grid-cols-2">
        <div className="your-cards bg-slate-900 text-white p-3 rounded">
          <div className='flex flex-row'>
            <h3 className='font-bold self-center'>Your Cards</h3>
            <div className="bg-slate-600 self-center text-white rounded-full p-1 ml-auto">
              <FiArrowRight />
            </div>
          </div>

          <br />

          <div className='flex'>
            <div className="bg-white text-black p-2 self-center rounded-full shadow-md">
              <CiMoneyBill />
            </div>
            <p className='self-center p-2'>$12,566</p>
          </div>

          <br />

          <div className="grid gap-2 grid-rows-2 grid-cols-2">
            <div className='p-2'>
              <h6>$211</h6>
              <p className='text-xs text-slate-500'>Account Transactions</p>
            </div>
            <div className='p-2'>
              <h6>$6,443</h6>
              <p className='text-xs text-slate-500'>Accumulated Cashbackk</p>
            </div>
            <div className='p-2'>
              <h6>$211</h6>
              <p className='text-xs text-slate-500'>Account Transactions</p>
            </div>
            <div className='p-2'>
              <h6>$6,443</h6>
              <p className='text-xs text-slate-500'>Accumulated Cashback</p>
            </div>
          </div>
        </div>

        <div className="transactions rounded bg-gray-100 p-5 w-full">
          <div className='flex flex-row'>
            <h3 className='font-bold self-center'>Transactions</h3>
            <div className="bg-slate-600 self-center text-white rounded-full p-1 ml-auto">
              <FiArrowRight />
            </div>
          </div>

          <div>
            <div className='flex flex-row my-6'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-1 mr-aauto'>
                <FiArrowRight />
              </div>
              <div className="px-2">
                <p>Google Play Buyers</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
                </div>
              <p className='font-bold px-3 ml-auto'>-$21</p>
            </div>
            <div className='flex flex-row my-6'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-1 mr-aauto'>
                <FiArrowRight />
              </div>
              <div className="px-2">
                <p>Google Play Buyers</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
                </div>
              <p className='font-bold px-3 ml-auto'>-$21</p>
            </div>
            <div className='flex flex-row my-6'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-1 mr-aauto'>
                <FiArrowRight />
              </div>
              <div className="px-2">
                <p>Google Play Buyers</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
                </div>
              <p className='font-bold px-3 ml-auto'>-$21</p>
            </div>
            <div className='flex flex-row my-6'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-1 mr-aauto'>
                <FiArrowRight />
              </div>
              <div className="px-2">
                <p>Google Play Buyers</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
                </div>
              <p className='font-bold px-3 ml-auto'>-$21</p>
            </div>
            <div className='flex flex-row my-6'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-1 mr-aauto'>
                <FiArrowRight />
              </div>
              <div className="px-2">
                <p>Google Play Buyers</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
                </div>
              <p className='font-bold px-3 ml-auto'>-$21</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home