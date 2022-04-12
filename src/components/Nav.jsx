import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
    const [ nav, setNav ] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    const hideNav = () => {
        setNav(false)
    }
    return (
        <div className='navbar'>
            <div className="nav-wrapper">
                <div className="brand">
                    <Link className='logo' to="/">Ernest.js</Link>
                    <p className="menu" onClick={handleNav}>menu</p>
                </div>
                <div className="navigation">
                    <ul>
                        <div className={nav ? "mobile" : "navlinks"}>
                            <li className='nav-link'>
                                <NavLink className={({isActive}) => (isActive ? "clicked" : 'none')} onClick={hideNav} to="/">Home</NavLink>
                            </li>
                            <li className='nav-link'>
                                <NavLink className={({isActive}) => (isActive ? "clicked" : 'none')} onClick={hideNav} to="/about-me">About</NavLink>
                            </li>
                            <li className='nav-link'>
                                <NavLink className={({isActive}) => (isActive ? "clicked" : 'none')} onClick={hideNav} to="/my-projects">Projects</NavLink>
                            </li>
                            <li className='nav-link'>
                                <NavLink className={({isActive}) => (isActive ? "clicked" : 'none')} onClick={hideNav} to="/contact">Hire Me</NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;
