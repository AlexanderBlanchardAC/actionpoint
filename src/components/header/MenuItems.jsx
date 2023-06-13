import React, { useState } from 'react';
import Dropdown from '../navbar/Dropdown';
import './menuItems.css';

const MenuItems = ({items}) => {

  const [dropdown, setDropdown] = useState(false);
  return (
  <li className="menuItems">
    {items.submenu ? (
      <>
        <p className="listItem" role='button'  onClick={() => setDropdown((prev) => !prev)}>
          {items.title}
        </p>
        <Dropdown submenus={items.submenu} dropdown={dropdown} />
      </>
    ) : (
      <p className='listItem'>{items.title}</p>
    )}
  </li>
  )
}

export default MenuItems
