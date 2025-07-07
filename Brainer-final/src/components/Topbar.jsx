import React from 'react'
import Slider from './Slider'

const Topbar = () => {
  return (
    <div className=' flex bg-[#1b1c1d] justify-between items-center shadow-xl w-full h-20'>
          <div className='pl-5'>
            <div className=' p-4 text-xl '>
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
