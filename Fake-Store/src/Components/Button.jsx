import React from 'react'

const Button = ({children,onClick}) => {
  return (
    <button className=' py-2 px-4 cursor-pointer rounded-4xl bg-secondary font-semibold text-center w-full hover:text-stone-900 transition-all duration-350 ease-in-out'>{children}</button>
  )
}

export default Button