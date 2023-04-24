import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineFavorite, MdInsights, MdTravelExplore } from 'react-icons/md';
import { RxHome } from 'react-icons/rx';
import { TbMessages } from 'react-icons/tb';
import { CiShop } from 'react-icons/ci';

const Sidenav = () => {
    return (
        <aside className="sidenav bg-slate-100 relative flex flex-col bg-white border-r border-gray-100">
            <div className="sidenav-items text-sm font-medium">
                <NavLink to={"/home"}>
                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                        <RxHome className='self-center mr-6' />
                        <p>Home</p>
                    </div>
                </NavLink>

                <NavLink to={"/favorites"}>
                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                        <MdOutlineFavorite className='self-center mr-6' />
                        <p>Favorites</p>
                    </div>
                </NavLink>

                <NavLink to={"/messages"}>
                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                        <TbMessages className='self-center mr-6' />
                        <p>Messages</p>
                    </div>
                </NavLink>

                <NavLink to={"/insights"}>
                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                        <MdInsights className='self-center mr-6' />
                        <p>Insights</p>
                    </div>
                </NavLink>

                <NavLink to={"/explore"}>
                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                        <MdTravelExplore className='self-center mr-6' />
                        <p>Explore</p>
                    </div>
                </NavLink>

                <NavLink to={"/marketplace"}>
                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                        <CiShop className='self-center mr-6' />
                        <p>Marketplace</p>
                    </div>
                </NavLink>

            </div>
        </aside >
    )
}

export default Sidenav;