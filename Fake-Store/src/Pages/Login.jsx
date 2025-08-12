import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { TbLockPassword } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
const Login = () => {
  return (
    <div className='text-primary flex justify-center items-center h-screen gap-x-8 '>
      <div className='border p-6 '>
        <p className='text-6xl '>Welcome</p> 
        <p className='text-6xl '>Back ....</p>
      </div>

      <form className='border p-6'>
        <div>
          <h1 className='text-4xl font-semibold mb-3'>Create your account</h1>
        <p className='text-xl mb-20'>It's just few minutes and free!</p>
        </div>
        

        <div className='border-2  mb-5 rounded-2xl  p-1 flex justify-center items-center gap-3 px-4 '>
          <div><CgProfile /></div>
          <input placeholder='Username' className='h-10 outline-none w-full'/>
        </div>

        <div className='border-2  mb-5 p-1 rounded-2xl  flex justify-center items-center gap-3 px-4'>
          <div><TfiEmail /></div>
          <input placeholder='webmail@gmail.com' className='h-10 outline-none w-full'/>
        </div>

        <div className='border-2  mb-5 rounded-2xl   p-1 flex justify-center items-center gap-3 px-4 '>
          <div><TbLockPassword /></div>
          <input placeholder='Your Password' className='h-10 outline-none w-full'/>
        </div>


      </form>
    </div>
  )
}

export default Login