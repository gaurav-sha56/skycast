"use client"
import React from 'react'
import Image from 'next/image'

const CurrentWeather = () => {
  return (
    <div className='flex gap-4 justify-between'>
        {/* for current weather */}
      <div className="flex flex-col min-h-auto min-w-auto gap-4 mt-6">
        <div className='text-2xl'>London, Uk</div>
        <div className='text-5xl'>15</div>
        <div className='text-xl mt-4 text-slate-600'>partly cloudy</div>
        <div className='text-xl text-slate-600'>humidity: 70%</div>
        <div className='text-xl text-slate-600'>wind: 10km/hr NW</div>
      </div>
      {/* for the image */}
      <div className="">
        <Image
        src = "https://maps.gstatic.com/weather/v1/mostly_clear.svg"
        alt='current weather image'
        width={220}
        height={10}
        className='shadow-inner rounded-xl'
        />
      </div>
    </div>
  )
}
export default CurrentWeather
