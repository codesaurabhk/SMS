import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiUpArrowAlt } from "react-icons/bi";

function Dashboard() {
  return (
    <>
    <div className='dashboard'>
      <div className='overview shadow-lg p-3 mb-5 bg-white rounded'>
        <div className='overview-head'>
          <h3>Overview</h3>
          <div className='btn btn-primary d-flex gap-2 align-items-center add-button'>
            <FaPlus/>
            <span>Add</span></div> 
        </div>
        <div>
          <div className='row'>
              <div class="col">
                <div className='new-admission-dashboard'>
                  <div className='d-flex justify-content-between align-items-center'>  
                  <div className='box-first fs-2'>50,000</div>
                  <div><HiOutlineUserGroup className='purple fs-1'/></div>
                  </div>
                  <div className='text fs-5'>New Admission</div>
                  <div className='d-flex'>
                    <div className='percent mt-5 '>
                      <span>20%<BiUpArrowAlt /></span> 
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="col">Column 2</div>
              <div class="col">Column 3</div>
              <div class="col">Column 4</div>
              <div class="col">Column 5</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard