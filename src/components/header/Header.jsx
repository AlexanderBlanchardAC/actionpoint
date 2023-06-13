import React from 'react';
import './header.css';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    

  return (
    <div className='headerContainer'>
        <div className="logoContainer">
            <NavLink to='/'>
                <img src={logo} className='logo' alt='Action Point Logo' />
            </NavLink>
        </div>
        <Navbar />
    </div>
  )
}

export default Header
