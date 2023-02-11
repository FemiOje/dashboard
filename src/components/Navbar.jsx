import React from 'react';
import '../styles/Navbar.css';
import Hamburger from '../assets/svgs/Hamburger.svg';

const Navbar = () => {
    return (
        <>
            <nav className='main--navbar'>
                <div className="brand">
                    <div className='hamburger'>
                        
                    </div>
                    <span>
                        <h3>Constructor</h3>
                    </span>
                </div>


                <div className="navbar--items">
                    <a href="/dashboard">
                        <h3>Dashboard</h3>
                    </a>
                    <a href="/about-us">
                        <h3>About Us</h3>
                    </a>
                    <a href="/news">
                        <h3>News</h3>
                    </a>
                    <a href="/user-policy">
                        <h3>User Policy</h3>
                    </a>
                    <a href="/contacts">
                        <h3>Contacts</h3>
                    </a>
                </div>


                <div className="search">
                    <input type="search" name="search" id="search" />
                    <button>Search</button>
                </div>

                <div className="user">
                    <p>Clayton Santos</p>
                    <button>One</button>
                    <button>Two</button>

                </div>
            </nav>
        </>
    )
}

export default Navbar