"use client"
import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import Image from 'next/image';

const NavBar = () => {
  return (
    <div>
      <div className='flex items-center min-w-max bg-blue-200 h-10 justify-between py-9 px-20'>
        <div className="flex items-center mix-blend-darken">
          <Image

            src='/navlogo.png'
            alt="SkyCast Logo"
            width={130}
            height={40}
            className="object-contain h-auto w-auto"
          /></div>
        <div className=''>
          <ul className='list-none flex gap-6 text-xl text-blue-950'>
            <li>Home</li>
            <li>News</li>
            <li>Contact</li>
            <li>Other</li>
          </ul>
        </div>
        <div className='flex gap-3 items-center'>
          <TbTemperatureFahrenheit size={20} />
          <MdDarkMode size={20} />
          <div className='w-40 bg-white flex items-center gap-2 min-h-full rounded-md shadow shadow-gray-600 py-1'>
            <CiLocationArrow1 className='ml-2' size={20} /> Location
          </div>
        </div>
      </div>
    </div>
  )
}


export default NavBar
