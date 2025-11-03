import React from 'react'
import { LuMessageSquare,LuSearch,LuMail,LuCircleUserRound,LuBell } from "react-icons/lu";

function Navbar() {
  return (
    <div className='navbar'>

        <div className='search-box gray'>
            <input type='search' style={{border:'none',outline:'none'}} />
            <LuSearch className='fs-4' />
        </div>

        <div className='user-data'>
            <LuMessageSquare className='fs-4 gray' />
            <LuMail className='fs-4 gray' />
            <LuBell className='fs-4 gray' />
            <div className='user-info d-flex align-items-center gap-2'>
                <div>
                    <LuCircleUserRound className='fs-3 gray' />
                </div>
                <div className='d-flex flex-column'>
                    <span className='fw-semibold light-blue' style={{fontSize:'14px'}}>Aditya Kumar</span>
                    <span className='gray' style={{fontSize:'11px'}}>Admin</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar