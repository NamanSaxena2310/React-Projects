import React from 'react'
import Slider from './Slider'

const Topbar = () => {
  return (
    <div className='border flex justify-between items-center  w-full h-20'>
          <div className='pl-5'>
            <div className=' p-4 text-2xl '>
              <span>1 / </span> <span>5</span>
            </div>
          </div>
          <div className='pr-5'>
            <Slider/>
          </div>
    </div>
  )
}

export default Topbar
