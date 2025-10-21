import React from 'react'
import Image from 'next/image'

const PrecipitationComponent = () => {
  return (
    <div className='flex items-center justify-around'>
      <div className=''>
        <Image
          src = "https://maps.gstatic.com/weather/v1/mostly_clear.svg"
          alt = "precipitation image"
          width={100}
          height={50} 
          
        />
      </div>
      <div className='flex flex-col gap-2.5 text-lg'>
        <div>precipitation 1</div>
        <div>precipitation @</div>
      </div>
    </div>
  )
}

export default PrecipitationComponent
