import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import ListProduct from './ListProduct'
import Dashboard from './Dashboard'

const Admin = () => {
  return (
    <div className=''>
      <Sidebar />
      <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/addProduct' element={<AddProduct />}/>
        <Route path='/listProduct' element={<ListProduct />}/>
      </Routes>
      
    </div>
  )
}

export default Admin