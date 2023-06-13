import './dropdown.css';

const Dropdown = ({submenus, dropdown, setDropdown}) => {
    return (
        <>
        {dropdown ? (
        <ul className='dropdown'>
            {submenus.map((submenu, index) => (
                <li key={index} className="dropdownMenuItem">
                    <p className='dropdownItemText'>{submenu.title}</p>
                </li>
            ))}
        </ul>): null }
        </>
    )
}

export default Dropdown;