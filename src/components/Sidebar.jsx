import React from 'react';
import { Chart } from "react-google-charts";
import { steppedAreaChartData, steppedAreaChartOptions } from '../data/chartData'


const Sidebar = () => {

    return (
        <div className="sidebar overflow-y-scroll bg-slate-100 self-center min-h-screen h-full border">
            <div className='bg-white border border-slate-200 rounded m-3'>
                <div className='flex flex-col justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Total Sales</p>
                        <p>$281.90</p>
                    </div>
                    <hr />
                    <Chart
                        chartType="SteppedAreaChart"
                        width="100%"
                        height="30vh"
                        data={steppedAreaChartData}
                        options={steppedAreaChartOptions}
                        legendToggle
                    />
                </div>
                <hr />
                <div className='flex justify-between p-2'>
                    <p className='text-xs'>6 other orders</p>
                    <p className='text-xs text-bold'>View Report</p>
                </div>
            </div>

            <div className='bg-white border border-slate-200 rounded m-3'>
                <div className='flex flex-col justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Total Sessions</p>
                        <p>456</p>
                    </div>
                    <hr />
                    <Chart
                        chartType="SteppedAreaChart"
                        width="100%"
                        height="30vh"
                        data={steppedAreaChartData}
                        options={steppedAreaChartOptions}
                        legendToggle
                    />
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
                <div className='flex flex-col justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Customer Rate</p>
                        <p>5.43%</p>
                    </div>
                    <hr />
                    <Chart
                        chartType="SteppedAreaChart"
                        width="100%"
                        height="30vh"
                        data={steppedAreaChartData}
                        options={steppedAreaChartOptions}
                        legendToggle
                    />
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
            </div>

            <div className='bg-white border border-slate-200 rounded m-3'>
                <div className='flex flex-col justify-between p-2'>
                    <div>
                        <p className="text-xs text-muted">Total Sales</p>
                        <p>$281.90</p>
                    </div>
                    <hr />
                    <Chart
                        chartType="SteppedAreaChart"
                        width="100%"
                        height="30vh"
                        data={steppedAreaChartData}
                        options={steppedAreaChartOptions}
                        legendToggle
                    />
                </div>
                <hr />
                <div className='flex justify-between p-2'>
                    <p className='text-xs'>6 other orders</p>
                    <p className='text-xs text-bold'>View Report</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;