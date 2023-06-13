import React, { useState } from 'react';
import './navbar.css';
// s// import { NavLink } from 'react-router-dom';
import { menuItems } from '../nav/menuItems';
import MenuItems from '../header/MenuItems';


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // const { items } = navbarData; 

   

  return (
    <>
        <div className='navbarContainer'>
            <div className={isNavExpanded ? 'hamburger open' : 'hamburger'} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                <span className="barOne"></span>
                <span className="barTwo"></span>
                <span className="barThree"></span>
            </div>
            <ul className={isNavExpanded ? "navMenu expanded" : "navMenu"}>
                {menuItems.map((menu, index) => {
                    return(
                        <MenuItems items={menu} key={index} />
                )
            })}
            </ul>
        </div>
    
  



           
       

        
                       
                            
           
        
                        



      
    </>
  )
}

export default Navbar;
