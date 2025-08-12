import React from 'react'

const Button = ({children,onClick}) => {
  return (
    <button className=' py-2 px-4 h-10 rounded-4xl bg-secondary font-semibold text-center w-full'>{children}</button>
  )
}

export default Button