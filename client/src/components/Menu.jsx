import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'


function Menu() {
  return (
    <div>
        {/* navbar */}
        <div className='shadow'>
          <Navbar />
        </div>

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