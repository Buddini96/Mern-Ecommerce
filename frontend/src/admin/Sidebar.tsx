import React from "react";
import { Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { TbCheckupList } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="py-7 flex justify-center gap-x-2 gap-y-5 w-full bg-white sm:gap-a-4 lg:flex-col lh:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6 ">
      <Link to={"/dashboard"}>
        <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-cyan-300 transition duration-200">
          <AiFillProduct className="w-6 h-6"/>
          <span>Dashboard</span>
        </button>
      </Link>
      <Link to={"/addProduct"}>
        <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-cyan-300 transition duration-200">
          <PiShoppingBagOpenFill className="w-6 h-6"/>
          <span>Add Products</span>
        </button>
      </Link>
      <Link to={"/listProduct"}>
        <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-cyan-300 transition duration-200">
          <TbCheckupList className="w-6 h-6"/>
          <span>Product List</span>
        </button>
      </Link>
      <Link to={"/"}>
        <button className="flexCenter gap-7 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-cyan-300 transition duration-200">
          <TbLogout2 className="w-6 h-6"/>
          <span>Log Out</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
