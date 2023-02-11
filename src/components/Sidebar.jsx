import React from 'react';
import '../styles/Sidebar.css';
import Hamburger from '../assets/svgs/Hamburger.svg';
import Notification from '../assets/svgs/Notification.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar--items">
                <div>
                    <Link to={"/dashboard"}>
                        <button>{Hamburger}</button>
                    </Link>
                </div>

                <div>
                    <Link to={"/favorites"}>
                        <button>{Notification}</button>
                    </Link>
                </div>

                <div>
                    <Link to={"/messages"}>
                        <button>{Hamburger}</button>
                    </Link>
                </div>

                <div>
                    <Link to={"/insights"}>
                        <button>{Hamburger}</button>
                    </Link>
                </div>

                <div>
                    <Link to={"/explore"}>
                        <button>{Hamburger}</button>
                    </Link>
                </div>
                <div>
                    <Link to={"/marketplace"}>
                        <button>{Hamburger}</button>
                    </Link>
                </div>
            </div>
        </aside >
    )
}

export default Sidebar;