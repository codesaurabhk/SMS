import React from 'react'
import { LuMessageSquare, LuSearch, LuMail, LuCircleUserRound, LuBell } from "react-icons/lu";
import Logo from '../../assets/images/logo.jpeg';

function Navbar({ onToggleSidebar, isSidebarOpen }) {
    return (
        <div className='navbar'>

            <div className='d-flex align-items-center px-1 gap-3'>
                <button
                    className="hamburger d-lg-none"
                    type="button"
                    aria-label="Toggle sidebar"
                    aria-controls="app-sidebar"
                    aria-expanded={isSidebarOpen ? "true" : "false"}
                    onClick={onToggleSidebar}
                >
                    {/* Simple hamburger icon */}
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
            </div>

            <div className="logo-middle">
                <div style={{ width: '150px', height: '35px' }}>
                    <img src={Logo} alt="logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', objectFit: 'contain', }} />
                </div>
            </div>

            <div className='d-flex'>
                <div className='search-box gray'>
                    <input type='search' style={{ border: 'none', outline: 'none' }} />
                    <LuSearch className='fs-4' />
                </div>

                <div className='user-data'>
                    <LuMessageSquare className='fs-4 gray' />
                    <LuMail className='fs-4 gray' />
                    <LuBell className='fs-4 gray' />
                    <div className='user-info d-flex align-items-center gap-2'>
                        <div className='profile'>
                            <LuCircleUserRound className='fs-3 gray' />
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='fw-semibold light-blue' style={{ fontSize: '14px' }}>Aditya Kumar</span>
                            <span className='gray' style={{ fontSize: '11px' }}>Admin</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar