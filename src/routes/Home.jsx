import React from 'react'
import { AiOutlineStock } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { CiMoneyBill, CiMoneyCheck1 } from 'react-icons/ci';
import { MdAttachMoney, MdMoneyOff, MdVpnLock } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { FaGooglePlay, FaShieldAlt } from 'react-icons/fa';
import { FcMultipleCameras, FcGoogle } from 'react-icons/fc';
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Home = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        // label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        width: 1
      },
    ],
  };

  const options = {
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //         display: false, // hide the y-axis labels
    //       },
    //     },
    //   ],
    //   xAxes: [
    //     {
    //       ticks: {
    //         display: false, // hide the x-axis labels
    //       },
    //     },
    //   ],
    // },
    responsive: true,
    plugins: {
      // legend: {
      //   position: 'top',
      // },
      // title: {
      //   display: true,
      //   text: 'Chart.js Bar Chart',
      // },
    },
  };

  const doughnutData = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="home w-[100%] md:grid-cols-2">
      <div className="price-cards flex flex-col items-center justify-around gap-4 my-3 md:grid-cols-4 md:flex-row">
        <div className="price-card-1 flex w-100 p-2 rounded transition duration-400 md:w-fit group hover:bg-orange-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md group-hover:bg-white">
            <CiMoneyBill />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$12,566</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Bank Account</h3>
          </div>
        </div>

        <div className="price-card-2 flex w-100 p-2 rounded transition duration-400 md:w-fit group hover:bg-slate-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md group-hover:bg-white">
            <CiMoneyCheck1 />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$43,566</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Investment Account</h3>
          </div>
        </div>

        <div className="price-card-3 flex w-100 p-2 rounded transition duration-400 md:w-fit group hover:bg-purple-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md group-hover:bg-white">
            <MdAttachMoney />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$567</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Cashback</h3>
          </div>
        </div>

        <div className="price-card-4 flex w-100 p-2 transition duration-400 rounded md:w-fit group hover:bg-blue-500 hover:cursor-pointer">
          <div className="icon m-1 p-3 self-center rounded-full shadow-md group-hover:bg-white">
            <MdMoneyOff />
          </div>

          <div className='self-center'>
            <p className='group-hover:text-white'>$8,545</p>
            <h3 className='text-xs text-slate-500 group-hover:text-white'>Savings</h3>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-2 md:flex-row md:grid md:grid-cols-2">
        <div className="your-cards h-fit bg-slate-900 text-white p-5 rounded duration-300 cursor-pointer md:row-span-3 border-2 hover:bg-slate-800">
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

        <div className="transactions h-fit rounded bg-white p-4 duration-300 md:row-span-3 border-2 hover:bg-gray-300">
          <div className='flex flex-row'>
            <h3 className='font-bold self-center'>Transactions</h3>
            <div className="bg-slate-500 self-center text-white rounded-full p-1 ml-auto">
              <FiArrowRight />
            </div>
          </div>

          <br />

          <div className='text-sm'>
            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mr-auto group-hover:text-slate-800'>
                <FaGooglePlay />
              </div>
              <div className="">
                <p className='group-hover:text-white'>Google Play Buyers</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$21</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mr-auto group-hover:text-slate-800'>
                <AiOutlineStock />
              </div>
              <div className="">
                <p className='group-hover:text-white'>Buy Apple Stocks</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$2,455</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mr-auto group-hover:text-slate-800'>
                <MdVpnLock />
              </div>
              <div className="">
                <p className='group-hover:text-white'>VPN Buy Services</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$124</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mr-auto group-hover:text-slate-800'>
                <FaShieldAlt />
              </div>
              <div className="">
                <p className='group-hover:text-white'>VPN Buy Services</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$43</p>
            </div>

            <div className='flex flex-row p-2 group rounded duration-500 hover:bg-slate-900 hover:cursor-pointer'>
              <div className='bg-white self-center text-slate-500 shadow-md rounded-full p-3 mr-auto group-hover:text-slate-800'>
                <BiMoviePlay />
              </div>
              <div className="">
                <p className='group-hover:text-white'>Service Rental</p>
                <p className='text-xs text-gray-500 font-bold'>25 Oct 2025</p>
              </div>
              <p className='font-bold px-3 ml-auto group-hover:text-white'>-$545</p>
            </div>
          </div>
        </div>

        <div>

        </div>
        <div className='transactions-chart bg-purple-800 text-white rounded p-4 md:row-start-4 md:row-end-6'>
          <div className='flex flex-row'>
            <h4 className='mr-auto font-semibold'>Transactions</h4>
            <p className='ml-auto'>$2554</p>
          </div>
          <br />
          <div className="bar-chart">
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="frequent-payment-cards gap-3 md:grid md:grid-cols-3 md:row-span-1 md:row-start-6 md:row-end-7">
          <div className="google-play p-2 rounded shadow-lg group transition duration-400 hover:cursor-pointer hover:bg-slate-800">
            <button className='p-4 rounded-full shadow-md mb-6 group-hover:bg-white'>
              <FcGoogle />
            </button>
            <p className="text-xs font-semibold group-hover:text-white">Google Play</p>
          </div>

          <div className="vpn-buy-services p-2 rounded shadow-lg group transition duration-400 hover:cursor-pointer hover:bg-slate-800">
            <button className='p-4 rounded-full shadow-md mb-6 group-hover:bg-white'>
              <FaShieldAlt />
            </button>
            <p className="text-xs font-semibold group-hover:text-white">VPN Buy Services</p>
          </div>

          <div className="service-rental p-2 rounded shadow-lg group transition duration-400 hover:cursor-pointer hover:bg-slate-800">
            <button className='p-4 rounded-full shadow-md mb-6 group-hover:bg-white'>
              <FcMultipleCameras />
            </button>
            <p className="text-xs font-semibold group-hover:text-white">Services Rental</p>
          </div>
        </div>


        <div className='line-chart-container bg-orange-500 rounded p-4 md:row-span-1  md:row-start-4 md:row-end-5'>
          <div className="line-chart">
            <Line data={data} options={options} />
          </div>
        </div>


        <div className="apple-and-messenger-cards gap-2 md:grid md:grid-cols-2 md:row-start-5 md:row-end-7">
          <div className="apple bg-orange-600 rounded p-4">
            < FcGoogle />
            <p className="text-lg text-white py-2">Apple iPhone</p>
            <p className="text-lg text-white py-2">$568</p>
          </div>

          <div className="messenger bg-blue-500 rounded p-4">
            <div className='flex flex-col text-white'>
              <Doughnut data={doughnutData} />
              <p className='text-center'>35%</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home