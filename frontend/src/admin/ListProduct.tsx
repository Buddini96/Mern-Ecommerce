import React from 'react';
import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';
import upload from '../assets/upload_area.svg';
import { MdAdd } from 'react-icons/md';
import { FaPlus } from "react-icons/fa";

const ListProduct = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className='flex flex-col lg:flex-row overflow-hidden'>
        <Sidebar />
        <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7 flex-grow '>
          list products
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
