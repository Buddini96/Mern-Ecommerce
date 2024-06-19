import React from 'react';
import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';
import upload from '../assets/upload_area.svg';
import { MdAdd } from 'react-icons/md';
import { FaUsers } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className='flex flex-col lg:flex-row'>
        <Sidebar />
        <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7 flex-grow'>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="flex gap-4">
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg">
              <div className='flex justify-center'>
              <FaUsers className="text-3xl mb-2 w-[90px] h-[90px]" />
              </div>
              <h1 className="text-[60px] font-semibold">6</h1>
              <p className="text-[25px] text-gray-600">Members</p>
            </div>
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg">
              <div className='flex justify-center'>
              <GiRunningShoe className="text-3xl mb-2  w-[90px] h-[90px]" />
              </div>
              <h1 className="text-[60px] font-semibold">20</h1>
              <p className="text-[25px] text-gray-600">Products</p>
            </div>
            <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-lg">
              <img src={upload} alt="Upload Area" className="w-12 h-12 mx-auto mb-2" />
              <h3 className="text-[60px] font-semibold">5</h3>
              <p className="text-[25px] text-gray-600">Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
