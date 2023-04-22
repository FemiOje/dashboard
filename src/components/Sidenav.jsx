import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineFavorite, MdInsights, MdTravelExplore } from 'react-icons/md';
import { RxHome } from 'react-icons/rx';
import { TbMessages } from 'react-icons/tb';
import { CiShop } from 'react-icons/ci';

const Sidenav = () => {
    return (
        <aside className="sidenav bg-slate-100 relative flex flex-col h-screen bg-white border-r border-gray-100">
            <div className="sidenav--items">
                <div className="p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                    <NavLink className="flex" to={"/home"}>
                            <RxHome className='self-center mx-1'/>
                            <p>Home</p>
                    </NavLink>
                </div>

                <div className="p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                    <NavLink className="flex" to={"/favorites"}>
                        <MdOutlineFavorite className='self-center mx-1' />
                        <p>Favorites</p>
                    </NavLink>
                </div>

                <div className="p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                    <NavLink className="flex" to={"/messages"}>
                        <TbMessages className='self-center mx-1'/>
                        <p>Messages</p>
                    </NavLink>
                </div>

                <div className="p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                    <NavLink className="flex" to={"/insights"}>
                        <MdInsights className='self-center mx-1'/>
                        <p>Insights</p>
                    </NavLink>
                </div>

                <div className="p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                    <NavLink className="flex" to={"/explore"}>
                        <MdTravelExplore className='self-center mx-1'/>
                        <p>Explore</p>
                    </NavLink>
                </div>
                <div className="p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                    <NavLink className="flex" to={"/marketplace"}>
                        <CiShop className='self-center mx-1'/>
                        <p>Marketplace</p>
                    </NavLink>
                </div>

            </div>
        </aside >
    )
}

export default Sidenav;