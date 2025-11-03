import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import Navbar from '../Navbar/Navbar'


function Menu() {
  return (
    <div>
        {/* navbar */}
        <Navbar />

        {/* sidebar */}
        <div className='d-flex align-center' >
            {/* left side */}
            <div className='sidebar-left'>
                <Sidebar />
            </div>

            {/* right side */}
            <div className='sidebar-right'>
                <Outlet />
            </div>
        </div>

    </div>
  )
}

export default Menu