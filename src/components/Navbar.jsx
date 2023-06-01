import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RxHome } from 'react-icons/rx';
import { MdInsights, MdTravelExplore, MdOutlineFavorite } from 'react-icons/md';
import { CiShop } from 'react-icons/ci';


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen((prevValue) => !prevValue)
    }

    return (
        <div>
            <nav className='sticky top-0 bg-white z-40 flex flex-row shadow-md p-2'>
                <div className="brand flex flex-row">
                    <div className='hamburger block lg:hidden'>
                        {isDropdownOpen ?
                            (<svg style={{ "color": "#000000" }} width="30" height="40"
                                viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={toggleDropdown}
                                className="menu cursor-pointer duration-200"
                            >
                                <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect>
                                <path d="M14 14L34 34" stroke="#000000" strokeWidth="5" strokeLinecap="round"
                                    strokeLinejoin="round" fill="#000000"></path>
                                <path d="M14 34L34 14" stroke="#000000" strokeWidth="5" strokeLinecap="round"
                                    strokeLinejoin="round" fill="#000000"></path>
                            </svg>)
                            :
                            (
                                <svg viewBox="0 0 100 80" width="30" height="40"
                                    onClick={toggleDropdown}
                                    className="menu cursor-pointer duration-200"
                                >
                                    <rect width="100" height="10" stroke='#000000' fill='#000000'></rect>
                                    <rect y="30" width="100" height="10" stroke='#000000' fill='#000000'></rect>
                                    <rect y="60" width="100" height="10" stroke='#000000' fill='#000000'></rect>
                                </svg>)}
                    </div>

                    <span className="brand-name self-center">
                        <h3 className='font-semibold ml-5'>Femi's Dashboard</h3>
                    </span>
                </div>


                <div className="navbar--items flex flex-row m-auto">
                    <Link to ={'/'} className='hidden md:block text-black text-sm font-medium no-underline mx-3 my-0 duration-200 hover:cursor-pointer hover:text-gray-500'>
                        <h3>Dashboard</h3>
                    </Link>

                    <Link to={'/coming-soon'} className='hidden md:block text-black text-sm font-medium no-underline mx-3 my-0 duration-200 hover:cursor-pointer hover:text-gray-500'>
                        <h3>About Us</h3>
                    </Link>

                    <Link to={'/coming-soon'} className='hidden md:block text-black text-sm font-medium no-underline mx-3 my-0 duration-200 hover:cursor-pointer hover:text-gray-500'>
                        <h3>News</h3>
                    </Link>

                    <Link to={'/coming-soon'} className='hidden md:block text-black text-sm font-medium no-underline mx-3 my-0 duration-200 hover:cursor-pointer hover:text-gray-500'>
                        <h3>User Policy</h3>
                    </Link>

                    <Link to={'/coming-soon'} className='hidden md:block text-black text-sm font-medium no-underline mx-3 my-0 duration-200 hover:cursor-pointer hover:text-gray-500'>
                        <h3>Contacts</h3>
                    </Link>
                </div>


                <div className="search m-auto">
                    <input
                        type="search"
                        className='border rounded-full px-5 py-1 outline-none'
                        name="search"
                        id="search"
                        placeholder='Search' />
                </div>

                <div className="flex flex-row ml-auto space-x-2">
                    <button className='align-middle rounded-full bg-blue-300 py-2 px-4 duration-300 hover:bg-blue-500 hover:shadow-outline'>C</button>
                    <p className='mx-1 my-auto align-middle text-sm'>Clayton Santos</p>
                </div>
            </nav>


            {/* should appear from the side */}
            {isDropdownOpen &&
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className='z-20 relative'
                >
                    <aside className='fixed z-20 bg-white h-full shadow duration-250 w-3/4'>
                        <nav className="bg-white">
                            <div className="sidenav-items">
                                <NavLink to={"/"} onClick={toggleDropdown}>
                                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                                        <RxHome className='self-center mx-1' />
                                        <p>Home</p>
                                    </div>
                                </NavLink>

                                <NavLink to={"/favorites"} onClick={toggleDropdown}>
                                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                                        <MdOutlineFavorite className='self-center mx-1' />
                                        <p>Favorites</p>
                                    </div>
                                </NavLink>

                                <NavLink to={"/insights"} onClick={toggleDropdown}>
                                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                                        <MdInsights className='self-center mx-1' />
                                        <p>Insights</p>
                                    </div>
                                </NavLink>

                                <NavLink to={"/explore"} onClick={toggleDropdown}>
                                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                                        <MdTravelExplore className='self-center mx-1' />
                                        <p>Explore</p>
                                    </div>
                                </NavLink>

                                <NavLink to={"/marketplace"} onClick={toggleDropdown}>
                                    <div className="flex p-4 m-auto duration-200 cursor-pointer hover:bg-gray-300">
                                        <CiShop className='self-center mx-1' />
                                        <p>Marketplace</p>
                                    </div>
                                </NavLink>

                            </div>
                        </nav>
                    </aside>
                </motion.div>
            }
        </div>
    )
}

export default Navbar