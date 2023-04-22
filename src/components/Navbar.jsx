import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from '../assets/svgs/Home.svg';
import Favorites from '../assets/svgs/Favorites.svg';
import Messages from '../assets/svgs/Messages.svg';
import Insights from '../assets/svgs/Insights.svg';
import Explore from '../assets/svgs/Explore.svg';
import Marketplace from '../assets/svgs/Marketplace.svg';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen((prevValue) => !prevValue)
    }

    return (
        <>
            <nav className='sticky top-0 bg-white w-full z-50 flex flex-row shadow-md p-2'>
                <div className="brand flex flex-row">
                    <div className='hamburger block md:hidden'>
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

                    <span className="brand--name self-center">
                        <h3>Constructor</h3>
                    </span>
                </div>


                <div className="navbar--items flex flex-row m-auto">
                    <a href="/dashboard"
                        className='hidden md:block text-black no-underline mx-1 my-0 duration-200 hover:text-gray-300'>
                        <h3>Dashboard</h3>
                    </a>

                    <a href="/about-us"
                        className='hidden md:block text-black no-underline mx-1 my-0 duration-200 hover:text-gray-300'>
                        <h3>About Us</h3>
                    </a>

                    <a href="/news"
                        className='hidden md:block text-black no-underline mx-1 my-0 duration-200 hover:text-gray-300'>
                        <h3>News</h3>
                    </a>

                    <a href="/user-policy"
                        className='hidden md:block text-black no-underline mx-1 my-0 duration-200 hover:text-gray-300'>
                        <h3>User Policy</h3>
                    </a>

                    <a href="/contacts"
                        className='hidden md:block text-black no-underline mx-1 my-0 duration-200 hover:text-gray-300'>
                        <h3>Contacts</h3>
                    </a>
                </div>


                <div className="search m-auto">
                    <input type="search" name="search" id="search" />
                    <button>Search</button>
                </div>

                <div className="flex flex-row ml-auto space-x-2">
                    <p className='mx-1 my-auto align-middle'>Clayton Santos</p>
                    <button className='align-middle rounded-full bg-blue-300 py-2 px-4 duration-300 hover:bg-blue-500 hover:shadow-outline'>P</button>
                    <button className='align-middle rounded-full bg-red-200  py-2 px-4 duration-300 hover:bg-red-500 hover:shadow-outline'>S</button>
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
                            <div className="sidenav--items">
                                <div>
                                    <NavLink to={"/home"} onClick={toggleDropdown}>
                                        <button>
                                            <img src={Home} alt="home" />
                                        </button>
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink to={"/favorites"} onClick={toggleDropdown}>
                                        <button>
                                            <img src={Favorites} alt="favorites" />
                                        </button>
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink to={"/messages"} onClick={toggleDropdown}>
                                        <button>
                                            <img src={Messages} alt="messages" />
                                        </button>
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink to={"/insights"} onClick={toggleDropdown}>
                                        <button>
                                            <img src={Insights} alt="insights" />
                                        </button>
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink to={"/explore"} onClick={toggleDropdown}>
                                        <button>
                                            <img src={Explore} alt="explore" />
                                        </button>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to={"/marketplace"} onClick={toggleDropdown}>
                                        <button>
                                            <img src={Marketplace} alt="marketplace" />
                                        </button>
                                    </NavLink>
                                </div>

                            </div>
                        </nav>
                    </aside>
                </motion.div>
            }
        </>
    )
}

export default Navbar