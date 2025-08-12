import React from 'react'

const Headings = ({text1,text2}) => {
  return (
    <>
     <h2 className='text-primary text-4xl sm:text-6xl mb-2 font-bold'>{text1}</h2>
    <h3 className='text-secondary text-3xl sm:text-5xl font-semibold'>{text2}</h3></>
   
  )
}

export default Headings