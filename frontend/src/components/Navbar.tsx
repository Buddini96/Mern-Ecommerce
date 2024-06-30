import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled  } from 'react-icons/md';
import { GrGallery } from "react-icons/gr";
import { CgBoy } from "react-icons/cg";
import { PiBabyBold } from "react-icons/pi";
import { CgGirl } from "react-icons/cg";

interface NavbarProps {
  containerStyles: string;
}

const Navbar: React.FC<NavbarProps> = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink to={"/" }      className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdHomeFilled />Home</div></NavLink>
      <NavLink to={"/mens"}   className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><CgBoy />Men's</div></NavLink>
      <NavLink to={"/womens"} className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><CgGirl />Women's</div></NavLink>
      <NavLink to={"/kids"}   className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><PiBabyBold />Kid's</div></NavLink>
      <NavLink to={"/gallery" }      className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><GrGallery />Gallery</div></NavLink>
    </nav>
  );
};

export default Navbar;
