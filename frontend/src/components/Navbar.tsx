import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

// Define an interface for the props
interface NavbarProps {
  containerStyles: string;
}

const Navbar: React.FC<NavbarProps> = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink to="/"><div className='flexCenter gap-x-1'><MdHomeFilled />Home</div></NavLink>
      <NavLink to="/mens"><div className='flexCenter gap-x-1'><MdCategory />Men's</div></NavLink>
      <NavLink to="/womens"><div className='flexCenter gap-x-1'><MdShop2 />Women's</div></NavLink>
      <NavLink to="/kids"><div className='flexCenter gap-x-1'><MdContacts />Kid's</div></NavLink>
    </nav>
  );
};

export default Navbar;
