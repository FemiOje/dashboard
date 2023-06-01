import React from 'react';
import { Chart } from 'react-google-charts';
import { CountryData as data } from '../data/chartData';

const Insights = () => {
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <div className='p-2 m-2 flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 md:gap-3'>
        <div className='bg-white rounded-lg p-4 shadow-lg my-2'>Col 1</div>
        <div className='bg-white rounded-lg p-4 shadow-lg my-2'>Col 2</div>
        <div className='bg-white rounded-lg p-4 shadow-lg my-2'>Col 3</div>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2'>

        <div className='flex flex-col md:grid md:grid-rows-auto'>

          <div className='m-2 md:flex md:gap-5 md:row-start-1 md:row-end-2'>

            <div className='rounded-lg bg-white shadow-lg text-center cursor-pointer p-5 my-2'>
              <small className='text-gray-400 text-xs font-semibold'>Sales: Aug 2027</small>
              <h3>$5.73K</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $10.35K</small>
            </div>

            <div className='rounded-lg bg-white shadow-lg text-center cursor-pointer p-5 my-2'>
              <small className='text-gray-400 text-xs font-semibold'>Average Order Value: Aug 2027</small>
              <h3>$34</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $0.23K</small>
            </div>
          </div>

          <div className='staging-orders bg-white border rounded-lg shadow-lg m-2 p-2 md:row-start-2 md:row-end-4 md:row-span-2'>
            <div className='mb-4'>Staging Orders</div>

            <div className="flex flex-col gap-3 md:grid md:grid-rows-2">
              <div className="flex flex-col md:grid md:grid-cols-3 md:gap-3">
                <div className='bg-slate-100 shadow-md rounded-lg text-center p-4 my-2 hover:bg-white hover:shadow-xl'>
                  <h3 className='font-bold text-xl'>18</h3>
                  <p className="text-semibold">Payment</p>
                </div>
                <div className='bg-slate-100 shadow-md rounded-lg text-center p-4 my-2 hover:bg-white hover:shadow-xl'>
                  <h3 className='font-bold text-xl'>32</h3>
                  <p className="text-semibold">Delivered</p>
                </div>
                <div className='bg-slate-100 shadow-md rounded-lg text-center p-4 my-2 hover:bg-white hover:shadow-xl'>
                  <h3 className='font-bold text-xl'>12</h3>
                  <p className="text-semibold">In Work</p>
                </div>
              </div>

              <div className="flex flex-col md:grid md:grid-cols-3 md:gap-3">
                <div className='bg-slate-100 shadow-md rounded-lg text-center p-4 my-2 hover:bg-white hover:shadow-xl'>
                  <h3 className='font-bold text-xl'>18</h3>
                  <p className="text-semibold">Payment</p>
                </div>
                <div className='bg-slate-100 shadow-md rounded-lg text-center p-4 my-2 hover:bg-white hover:shadow-xl'>
                  <h3 className='font-bold text-xl'>32</h3>
                  <p className="text-semibold">Delivered</p>
                </div>
                <div className='bg-slate-100 shadow-md rounded-lg text-center p-4 my-2 hover:bg-white hover:shadow-xl'>
                  <h3 className='font-bold text-xl'>12</h3>
                  <p className="text-semibold">In Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='map bg-white rounded-lg shadow-lg m-3 p-4 md:row-start-1 md:row-end-3 md:row-span-2'>
            <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    // console.log("Selection:", selection);
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                  },
                },
              ]}
              chartType="GeoChart"
              width="100%"
              height="100%"
              data={data}
            />
          </div>


          <div className='m-2 md:flex md:flex-row md:gap-5 md:row-start-3 md:row-end-4'>
            <div className='rounded-lg shadow-lg bg-white text-center cursor-pointer p-5'>
              <small className='text-gray-400 text-xs font-semibold'>Sales: Aug 2027</small>
              <h3>$5.73K</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $10.35K</small>
            </div>

            <div className='rounded-lg shadow-lg bg-white text-center cursor-pointer p-5'>
              <small className='text-gray-400 text-xs font-semibold'>Average Order Value: Aug 2027</small>
              <h3>$34</h3>
              <small className='text-gray-400 text-xs font-semibold'>Jul 2027: $0.23K</small>
            </div>
          </div>
        </div>
      </div>

      <div className='p-2 m-2 flex flex-col md:grid md:grid-rows-1 md:grid-cols-3 md:gap-3'>
        <div className='bg-white rounded-lg p-4 shadow-lg my-2'>Col 1</div>
        <div className='bg-white rounded-lg p-4 shadow-lg my-2'>Col 2</div>
        <div className='bg-white rounded-lg p-4 shadow-lg my-2'>Col 3</div>
      </div>

    </div>
  )
}

export default Insights