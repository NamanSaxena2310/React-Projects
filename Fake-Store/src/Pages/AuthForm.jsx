import React, { useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { TbLockPassword } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import Headings from '../Components/Headings';
import Button from '../Components/Button';
import { useDispatch, useSelector } from 'react-redux';


const AuthForm = () => {
  const [formType, setFormType] = useState('Login'); 

  return (
    <div className="text-primary flex flex-col sm:flex-row justify-center items-center min-h-screen gap-6 sm:gap-x-8 px-4 py-6">
      
      {/* Heading Section */}
      <div className="sm:p-6">
        <Headings 
          text1={formType === 'Login' ? 'WELCOME' : 'JOIN'} 
          text2={formType === 'Login' ? 'BACK....' : 'US....'} 
        />
      </div>

      {/* Form Section */}
      <form className="sm:p-6 p-4 w-full max-w-sm">
        
        {/* Title */}
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-4xl font-semibold mb-3">
            {formType === 'Login' ? 'Login to your' : 'Create your'} 
            <span className="text-secondary"> account</span>
          </h1>
          <p className="sm:text-xl sm:mb-18 mb-10">
            {formType === 'Login' 
              ? 'Welcome back!' 
              : "It's just a few minutes and"} 
            {formType === 'Signup' && <span className="text-secondary"> free!</span>}
          </p>
        </div>

        {/* Show Username only in Signup */}
        {formType === 'Signup' && (
          <div className="border-2 mb-5 rounded-2xl p-1 flex items-center gap-3 px-4">
            <CgProfile />
            <input placeholder="Username" className="h-10 outline-none w-full min-w-0" />
          </div>
        )}

        {/* Email */}
        <div className="border-2 mb-5 rounded-2xl p-1 flex items-center gap-3 px-4">
          <TfiEmail />
          <input placeholder="webmail@gmail.com" className="h-10 outline-none w-full min-w-0" />
        </div>

        {/* Password */}
        <div className="border-2 mb-5 rounded-2xl p-1 flex items-center gap-3 px-4">
          <TbLockPassword />
          <input placeholder="Your Password" type="password" className="h-10 outline-none w-full min-w-0" />
        </div>

        {/* Button */}
        <Button>{formType === 'Login' ? 'Login' : 'Create Account'}</Button>

        {/* Toggle */}
        <div className="text-center mt-4">
          {formType === 'Login' ? (
            <>
              Don’t have an account?{' '}
              <u onClick={() => setFormType('Signup')} className="cursor-pointer">Click Here</u> to Signup.
            </>
          ) : (
            <>
              Already registered?{' '}
              <u onClick={() => setFormType('Login')} className="cursor-pointer">Click Here</u> to Login.
            </>
          )}
        </div>
      </form>


      
    </div>
  )
}

export default AuthForm
