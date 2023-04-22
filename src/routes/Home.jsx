import React from 'react'
import { CiShop } from 'react-icons/ci';

const Home = () => {
  return (
    <div className="home md:grid-rows-2">
      <div className="price-cards flex flex-col items-center justify-around gap-4 md:grid-cols-4 md:flex-row"> {/* rename */}
        <div className="price-card-1 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 self-center">
            <CiShop/>
          </div>

          <div>
            <p>$12,566</p>
            <h3 className='text-xs text-slate-500'>Bank Account</h3>
          </div>
        </div>

        <div className="price-card-2 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 self-center">
            <CiShop/>
          </div>

          <div>
            <p>$43,566</p>
            <h3 className='text-xs text-slate-500'>Investment Account</h3>
          </div>
        </div>

        <div className="price-card-3 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 self-center">
            <CiShop/>
          </div>

          <div>
            <p>$567</p>
            <h3 className='text-xs text-slate-500'>Cashback</h3>
          </div>
        </div>

        <div className="price-card-4 flex w-100 m-2 md:w-fit">
          <div className="icon m-1 self-center">
            <CiShop/>
          </div>

          <div>
            <p>$8,545</p>
            <h3 className='text-xs text-slate-500'>Cashback</h3>
          </div>
        </div>

      </div>

      <div className="second-part flex flex-col justify-around items-center md:flex-row md:grid-cols-2 border"> {/* rename */}
        <div className="second-part-one"> {/* rename */}
          <p>Hello 1</p>
        </div>

        <div className="second-part-two">{/* rename */}
          <p>Hello 2</p>
        </div>
      </div>

    </div>
  )
}

export default Home