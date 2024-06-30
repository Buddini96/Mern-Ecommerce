import { Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="py-7 flex flex-col items-start w-full bg-white gap-y-5 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6">
      <Link to={"/dashboard"}>
        <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-secondary transition duration-200 px-4">
          <AiFillProduct className="w-6 h-6"/>
          <span className="text-base">Dashboard</span>
        </button>
      </Link>
      <Link to={"/addProduct"}>
        <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-secondary transition duration-200 px-4">
          <PiShoppingBagOpenFill className="w-6 h-6"/>
          <span className="text-base">Add Products</span>
        </button>
      </Link>
      <Link to={"/listProduct"}>
        <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-secondary transition duration-200 px-4">
          <FaClipboardList className="w-6 h-6"/>
          <span className="text-base">Product List</span>
        </button>
      </Link>
      <Link to={"/listUsers"}>
        <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-secondary transition duration-200 px-4">
          <FaUsers className="w-6 h-6"/>
          <span className="text-base">Users List</span>
        </button>
      </Link>
      <Link to={"/"}>
        <button className="flex items-center gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 hover:bg-[#272c4a] rounded hover:text-secondary transition duration-200 px-4">
          <BiSolidLogOut className="w-6 h-6"/>
          <span className="text-base">Log Out</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
