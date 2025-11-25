import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Library() {
  return (
    <div>
      <div className='d-flex justify-content-between p-4 align-items-center'>
        <h3>Books Overview</h3>
        <button className='btn bg-primary p-2 text-white border-rounded'>
          <FaPlus  className='text-white'/> &nbsp; Add
        </button>
      </div>
      <div className='d-flex gap-10 mt-3'>
        <div className='w-75'>
          <div className='d-flex justify-content-evenly gap-4 '>
            <span style={{color: "#717376", fontWeight:'400', fontSize:'20px'}}>
              A &nbsp; B &nbsp; C &nbsp; D &nbsp; E &nbsp; F &nbsp; G &nbsp; H &nbsp; I &nbsp; J &nbsp; K &nbsp; L &nbsp; M &nbsp; N &nbsp; O &nbsp; P &nbsp; Q &nbsp; R &nbsp; S &nbsp; T &nbsp; U &nbsp; V &nbsp; W &nbsp; X &nbsp; Y &nbsp; Z
            </span>
          </div>
        </div>
        <div className='w-25'></div>
      </div>
    </div>
  )
}

export default Library