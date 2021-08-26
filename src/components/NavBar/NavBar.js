import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../logoHenry.png';
import Logo from '../../img/Movie-Icon-1-460x406.png';


import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div id="logo" className="animate__animated animate__backInUp">
                <img id="logoHenry" src={Logo} width="80" height="80" className="d-inline-block align-top" alt="" />
            </div>
            <div id="title" className="my-font text-warning display-4 animate__animated animate__bounceInLeft">
                Movieland
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}