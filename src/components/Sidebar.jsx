import React from 'react';
import '../styles/Sidebar.css';
import Hamburger from '../assets/svgs/Hamburger.svg';
import Notification from '../assets/svgs/Notification.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar--items">
                <div>
                    <NavLink to={"/home"}>
                        <button>{Hamburger}</button>
                    </NavLink>
                </div>

                <div>
                    <NavLink to={"/favorites"}>
                        <button>{Notification}</button>
                    </NavLink>
                </div>

                <div>
                    <NavLink to={"/messages"}>
                        <button>{Hamburger}</button>
                    </NavLink>
                </div>

                <div>
                    <NavLink to={"/insights"}>
                        <button>{Hamburger}</button>
                    </NavLink>
                </div>

                <div>
                    <NavLink to={"/explore"}>
                        <button>{Hamburger}</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={"/marketplace"}>
                        <button>{Hamburger}</button>
                    </NavLink>
                </div>
                
            </div>
        </aside >
    )
}

export default Sidebar;