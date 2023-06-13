import React from 'react';
import { menuItems } from './menuItems';
import MenuItems from '../header/MenuItems';

const Nav = () => {
  return (
    <nav>
        <ul className="menus">
            {menuItems.map((menu, index) => {
                return(
                    <MenuItems items={menu} key={index} />
                )
            })}
        </ul>

    </nav>
  )
}

export default Nav
