"use client"
import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <div className='flex items-center min-w-max h-10 justify-around py-9 shadow-md backdrop-blur-sm'>
        <div className="flex items-center text-xl font-bold text-shadow-blue-950 hover:text-2xl">
          SkyCast</div>
        <div className=''>
          <ul className='list-none flex gap-6 text-xl text-blue-950'>
            <li className='hover:text-2xl'>Home</li>
            <li className='hover:text-2xl'>News</li>
            <li className='hover:text-2xl'>Contact</li>
            <li className='hover:text-2xl'>Other</li>
          </ul>
        </div>
        <div className='flex gap-3 items-center'>
          <TbTemperatureFahrenheit size={20} className='hover:size-6'/>
          <MdDarkMode size={20} className='hover:size-6'/>
          <div className='w-40 bg-white flex items-center gap-2 min-h-full rounded-md shadow hover:shadow-md shadow-gray-600 py-1'>
            <CiLocationArrow1 className='ml-2' size={20} /> Location
          </div>
        </div>
      </div>
    </div>
  )
}


export default NavBar
