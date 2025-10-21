"use client"
import React from 'react'
import Image from 'next/image'

const WeeklyForecast = () => {
  return (
    <div className='flex justify-around'>
      <div>
        <div>
          <Image 
          src='https://maps.gstatic.com/weather/v1/dust.svg'
          alt = 'hourly image'
          width={75}
          height={25}/>
        </div>
        <div className='text-center'>Mon</div>
        <div className='text-center'>Mon</div>
      </div>
      <div>
        <div>
          <Image 
          src='https://maps.gstatic.com/weather/v1/dust.svg'
          alt = 'hourly image'
          width={75}
          height={25}/>
        </div>
        <div className='text-center'>Mon</div>
        <div className='text-center'>Mon</div>
      </div>
      <div>
        <div>
          <Image 
          src='https://maps.gstatic.com/weather/v1/dust.svg'
          alt = 'hourly image'
          width={75}
          height={25}/>
        </div>
        <div className='text-center'>Mon</div>
        <div className='text-center'>Mon</div>
      </div>
      <div>
        <div>
          <Image 
          src='https://maps.gstatic.com/weather/v1/dust.svg'
          alt = 'hourly image'
          width={75}
          height={25}/>
        </div>
        <div className='text-center'>Mon</div>
        <div className='text-center'>Mon</div>
      </div>
      <div>
        <div>
          <Image 
          src='https://maps.gstatic.com/weather/v1/dust.svg'
          alt = 'hourly image'
          width={75}
          height={25}/>
        </div>
        <div className='text-center'>Mon</div>
        <div className='text-center'>Mon</div>
      </div>
      <div>
        <div>
          <Image 
          src='https://maps.gstatic.com/weather/v1/dust.svg'
          alt = 'hourly image'
          width={75}
          height={25}/>
        </div>
        <div className='text-center'>Mon</div>
        <div className='text-center'>Mon</div>
      </div>
      <div>
        <div>
          <Image 
          src='https://maps.gstatic.com/weather/v1/dust.svg'
          alt = 'hourly image'
          width={75}
          height={25}/>
        </div>
        <div className='text-center'>Mon</div>
        <div className='text-center'>Mon</div>
      </div>
    </div>
  )
}

export default WeeklyForecast
