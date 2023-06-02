import React from 'react'

import { AiOutlineStock } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { CiMoneyBill, CiMoneyCheck1 } from 'react-icons/ci';
import { MdAttachMoney, MdMoneyOff, MdVpnLock } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { FaGooglePlay, FaShieldAlt } from 'react-icons/fa';
import { FcMultipleCameras, FcGoogle } from 'react-icons/fc';

import { Chart } from 'react-google-charts';
import {
  doughnutChartData,
  doughnutChartOptions,
  lineChartData,
  lineChartOptions,
  lineChart2Data,
  lineChart2Options
} from '../data/chartData';


const Home = () => {

  return (
    <div className="home w-[99%] md:grid-cols-2 p-4">
      <div className="price-cards flex flex-col items-center justify-around gap-4 my-3 md:grid-cols-4 md:flex-row">
        <div className="price-card-1 flex bg-white shadow-lg w-full m-auto p-2 rounded-xl transition duration-400 md:w-1/4 group hover:bg-orange-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md bg-orange-500 text-white group-hover:bg-white group-hover:text-black">
            <CiMoneyBill />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$12,566</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Bank Account</h3>
          </div>
        </div>

        <div className="price-card-2 flex bg-white shadow-lg w-full m-auto p-2 rounded-xl transition duration-400 md:w-1/4 group hover:bg-slate-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md bg-slate-500 text-white group-hover:bg-white group-hover:text-black">
            <CiMoneyCheck1 />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$43,566</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Investment Account</h3>
          </div>
        </div>

        <div className="price-card-3 flex bg-white shadow-lg w-full m-auto p-2 rounded-xl transition duration-400 md:w-1/4 group hover:bg-purple-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full bg-purple-500 text-white shadow-md group-hover:bg-white group-hover:text-black">
            <MdAttachMoney />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$567</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Cashback</h3>
          </div>
        </div>

        <div className="price-card-4 flex bg-white shadow-lg w-full m-auto p-2 rounded-xl transition duration-400 rounded md:w-1/4 group hover:bg-blue-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full bg-blue-500 text-white shadow-md group-hover:bg-white group-hover:text-black">
            <MdMoneyOff />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$8,545</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Savings</h3>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-2 md:flex-row md:grid md:grid-cols-2">
        <div className="your-cards h-[70vh] md:h-[55vh] bg-slate-900 text-white p-5 rounded-xl shadow-lg duration-300 cursor-pointer md:row-span-3 border-2 hover:bg-slate-800">
          <div className='flex flex-row'>
            <h3 className='font-bold self-center'>Your Cards</h3>
            <div className="bg-slate-600 self-center text-white rounded-full p-1 ml-auto">
              <FiArrowRight />
            </div>
          </div>

          <br />

          <div className='flex my-6'>
            <div className="bg-white text-black p-2 self-center rounded-full shadow-md">
              <CiMoneyBill />
            </div>
            <p className='self-center p-2'>$12,566</p>
          </div>


          <div className="grid gap-2 grid-rows-2 grid-cols-2 my-10">
            <div className='p-2'>
              <h6>$211</h6>
              <p className='text-xs text-slate-500'>Account Transactions</p>
            </div>
            <div className='p-2'>
              <h6>$6,443</h6>
              <p className='text-xs text-slate-500'>Accumulated Cashback</p>
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

        <div className="transactions h-[70vh] md:h-[55vh] rounded-xl bg-white shadow-lg p-4 duration-300 md:row-span-3">
          <div className='flex flex-row'>
            <h3 className='font-bold self-center'>Transactions</h3>
            <div className="bg-slate-500 self-center text-white rounded-full p-1 ml-auto">
              <FiArrowRight />
            </div>
          </div>

          <br />

          <div className='text-sm'>
            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mx-2 group-hover:text-slate-800'>
                <FaGooglePlay />
              </div>
              <div>
                <p className='group-hover:text-white'>Google Play Buyers</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$21</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mx-2 group-hover:text-slate-800'>
                <AiOutlineStock />
              </div>
              <div>
                <p className='group-hover:text-white'>Buy Apple Stocks</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$2,455</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mx-2 group-hover:text-slate-800'>
                <MdVpnLock />
              </div>
              <div>
                <p className='group-hover:text-white'>VPN Buy Services</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$124</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mx-2 group-hover:text-slate-800'>
                <FaShieldAlt />
              </div>
              <div>
                <p className='group-hover:text-white'>VPN Buy Services</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$43</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mx-2 group-hover:text-slate-800'>
                <BiMoviePlay />
              </div>
              <div>
                <p className='group-hover:text-white'>Service Rental</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$545</p>
            </div>
          </div>
        </div>


        <div className='transactions-chart bg-white rounded-xl shadow-lg p-1 md:row-start-4 md:row-span-2'>
          <div className='flex flex-row px-4 pt-5'>
            <h4 className='mr-auto font-semibold'>Transactions</h4>
            <p className='ml-auto'>$2554</p>
          </div>
          <br />
          <div className="bar-chart">
            <Chart
              chartType="LineChart"
              width="100%"
              height="100%"
              className='bg-transparent'
              data={lineChartData}
              options={lineChartOptions}
            />
          </div>
        </div>

        <div className="frequent-payment-cards gap-3 md:grid md:grid-cols-3 md:row-span-1 md:row-start-6 md:row-end-7">
          <div className="google-play text-center bg-white p-2 my-2 rounded-xl shadow-lg group transition duration-400 hover:cursor-pointer hover:bg-slate-800">
            <button className='p-4 rounded-full shadow-md group-hover:bg-white'>
              <FcGoogle />
            </button>
            <p className="text-sm font-semibold group-hover:text-white">Google Play</p>
          </div>

          <div className="vpn-buy-services text-center bg-white p-2 my-2 rounded-xl shadow-lg group transition duration-400 hover:cursor-pointer hover:bg-slate-800">
            <button className='p-4 rounded-full shadow-md group-hover:bg-white'>
              <FaShieldAlt />
            </button>
            <p className="text-sm font-semibold group-hover:text-white">VPN Buy Services</p>
          </div>

          <div className="service-rental text-center bg-white p-2 my-2 rounded-xl shadow-lg group transition duration-400 hover:cursor-pointer hover:bg-slate-800">
            <button className='p-4 rounded-full shadow-md group-hover:bg-white'>
              <FcMultipleCameras />
            </button>
            <p className="text-sm font-semibold group-hover:text-white">Services Rental</p>
          </div>
        </div>


        <div className='line-chart-container bg-white rounded-xl shadow-lg p-1 md:row-start-4 md:row-end-5'>
          <div className="line-chart">
            <Chart
              chartType="LineChart"
              width="100%"
              height="100%"
              data={lineChart2Data}
              options={lineChart2Options}
            />
          </div>
        </div>


        <div className="apple-and-messenger-cards gap-2 md:grid md:grid-cols-2 md:row-start-5 md:row-end-7">
          <div className="apple bg-orange-600 rounded-xl shadow-lg p-4 my-3 text-center">
            < FcGoogle className='m-auto mt-7' />
            <p className="text-lg text-white py-2">Google Pixel</p>
            <p className="text-lg text-white py-2">$568</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg my-2 p-1">
            <Chart
              chartType="PieChart"
              width="100%"
              height="100%"
              data={doughnutChartData}
              options={doughnutChartOptions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home