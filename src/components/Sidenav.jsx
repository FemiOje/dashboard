import React from 'react';
import Hamburger from '../assets/svgs/Hamburger.svg';
import Home from '../assets/svgs/Home.svg';
import Favorites from '../assets/svgs/Favorites.svg';
import Messages from '../assets/svgs/Messages.svg';
import Insights from '../assets/svgs/Insights.svg';
import Explore from '../assets/svgs/Explore.svg';
import Marketplace from '../assets/svgs/Marketplace.svg';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {
    return (
        <aside className="sidenav bg-slate-200">
            <div className="sidenav--items">
                <div className="p-1 m-auto">
                    <NavLink className="m-auto" to={"/home"}>
                        {/* <button> */}
                            <img src={Home} alt="home" />
                            <span>Home</span>
                        {/* </button> */}
                    </NavLink>
                </div>

                <div className="p-1 m-auto">
                    <NavLink className="m-auto" to={"/favorites"}>
                        {/* <button> */}
                            <img src={Favorites} alt="favorites" />
                            <span>Favorites</span>
                        {/* </button> */}
                    </NavLink>
                </div>

                <div className="p-1 m-auto">
                    <NavLink className="m-auto" to={"/messages"}>
                        {/* <button> */}
                            <img src={Messages} alt="messages" />
                            <span>Messages</span>
                        {/* </button> */}
                    </NavLink>
                </div>

                <div className="p-1 m-auto">
                    <NavLink className="m-auto" to={"/insights"}>
                        {/* <button> */}
                            <img src={Insights} alt="insights" />
                            <span>Insights</span>
                        {/* </button> */}
                    </NavLink>
                </div>

                <div className="p-1 m-auto">
                    <NavLink className="m-auto" to={"/explore"}>
                        {/* <button> */}
                            <img src={Explore} alt="explore" />
                            <span>Explore</span>
                        {/* </button> */}
                    </NavLink>
                </div>
                <div className="p-1 m-auto">
                    <NavLink className="m-auto" to={"/marketplace"}>
                        {/* <button> */}
                            <img src={Marketplace} alt="marketplace" />
                            <span>Marketplace</span>
                        {/* </button> */}
                    </NavLink>
                </div>

            </div>
        </aside >
    )
}

export default Sidenav;