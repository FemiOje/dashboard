import React from 'react'
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Sidebar = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                // label: "Sales",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "#000000",
                borderColor: "#FFFFFF",
                borderWidth: 1
            },
        ],
    };

    const options = {
        // scales: {
        //     yAxes: [
        //         {
        //             ticks: {
        //                 beginAtZero: true,
        //                 display: false, // hide the y-axis labels
        //             },
        //         },
        //     ],
        //     xAxes: [
        //         {
        //             ticks: {
        //                 display: false, // hide the x-axis labels
        //             },
        //         },
        //     ],
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

    return (
        <div className="sidebar bg-slate-100 self-center min-h-screen h-full border">
            <div className='bg-white border border-slate-200 rounded m-3'>
                <div className='flex flex-row justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Total Sales</p>
                        <p>$281.90</p>
                    </div>
                    <div className='border'>
                        {/* <Line data={data} options={options} /> */}
                    </div>

                </div>

                <hr />
                <div className='flex justify-between p-2'>
                    <p className='text-xs'>6 other orders</p>
                    <p className='text-xs text-bold'>View Report</p>
                </div>

                <div>

                </div>
            </div>
            <div className='bg-white border border-slate-200 rounded m-3'>
                <div className='flex flex-row justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Total Sessions</p>
                        <p>456</p>
                    </div>
                    <div className='border'>
                        {/* <Line data={data} options={options} /> */}
                    </div>

                </div>

                <hr />
                <div className='flex justify-between p-2'>
                    <p className="text-xs text-bold">Live</p>
                    <p className='text-xs text-bold'>4 visitors</p>
                    <p className='text-xs text-bold'>See Live View</p>
                </div>

                <div>

                </div>
            </div>
            <div className='bg-white border border-slate-200 rounded m-3'>
                <div className='flex flex-row justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Customer Rate</p>
                        <p>5.43%</p>
                    </div>
                    <div className='border'>
                        {/* <Line data={data} options={options} /> */}
                    </div>

                </div>

                <hr />
                <div className='flex justify-between p-2'>
                    <div className='flex text-xs'>
                        <div className='rounded-full bg-violet-400 p-1 h-1 w-1 self-center mr-1'></div>
                        <span>First time</span>
                    </div>
                    <div className='flex text-xs text-bold'>
                        <div className='rounded-full bg-orange-400 p-1 h-1 w-1 self-center mr-1'></div>
                        <span>Returning</span>
                    </div>
                </div>

                <div>

                </div>
            </div>
            <div className='bg-white border border-slate-200 rounded m-3'>
                <div className='flex flex-row justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Total Sales</p>
                        <p>$281.90</p>
                    </div>
                    <div className='border'>
                        {/* <Line data={data} options={options} /> */}
                    </div>

                </div>

                <hr />
                <div className='flex justify-between p-2'>
                    <p className='text-xs'>6 other orders</p>
                    <p className='text-xs text-bold'>View Report</p>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;