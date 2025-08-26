import React, { useEffect, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { TbLockPassword } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import Headings from "../Components/Headings";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../App/features/auth/authSlice";

const AuthForm = () => {
  const [formType, setFormType] = useState("Login");
  const state = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const [formData, setformData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleOnClick = (e)=>{
    e.preventDefault()
    if (formType == "Login") {
      dispatch(loginUser({email:formData.email,password:formData.password}))
    }else{
      dispatch(registerUser(formData))
    }
  }

  const handleInputChange = (e)=>{

    setformData({...formData,[e.target.name]:e.target.value})
  }

console.log(state)

  return (
    <div className="text-primary flex flex-col sm:flex-row justify-center items-center min-h-screen gap-6 sm:gap-x-8 px-4 py-6">
      {/* Heading Section */}
      <div className="sm:p-6">
        <Headings
          text1={formType === "Login" ? "WELCOME" : "JOIN"}
          text2={formType === "Login" ? "BACK...." : "US...."}
        />
      </div>

      {/* Form Section */}
      <form className="sm:p-6 p-4 w-full max-w-sm">
        {/* Title */}
        <div className="text-center sm:text-left">
          <h1 className="text-xl sm:text-4xl font-semibold mb-3">
            {formType === "Login" ? "Login to your" : "Create your"}
            <span className="text-secondary"> account</span>
          </h1>
          <p className="sm:text-xl sm:mb-18 mb-10">
            {formType === "Login"
              ? "Welcome back!"
              : "It's just a few minutes and"}
            {formType === "Signup" && (
              <span className="text-secondary"> free!</span>
            )}
          </p>
        </div>

        {/* Show Username only in Signup */}
        {formType === "Signup" && (
          <div className="border-2 mb-5 rounded-2xl p-1 flex items-center gap-3 px-4">
            <CgProfile />
            <input
              placeholder="Enter Yor Name"
              className="h-10 outline-none w-full min-w-0"
              name="name"
              value={formData.name}
              onChange={(e)=>handleInputChange(e)}
            />
          </div>
        )}

        {/* Email */}
        <div className="border-2 mb-5 rounded-2xl p-1 flex items-center gap-3 px-4">
          <TfiEmail />
          <input
            placeholder="webmail@gmail.com"
            className="h-10 outline-none w-full min-w-0"
            name="email"
            value={formData.email}
            onChange={(e)=>handleInputChange(e)}
          />
        </div>

        {/* Password */}
        <div className="border-2 mb-5 rounded-2xl p-1 flex items-center gap-3 px-4">
          <TbLockPassword />
          <input
            placeholder="Your Password"
            type="password"
            className="h-10 outline-none w-full min-w-0"
            name="password"
            value={formData.password}
            onChange={(e)=>handleInputChange(e)}
          />
        </div>

        {/* Button */}
        <Button onClick={(e)=>handleOnClick(e)}>{formType === "Login" ? "Login" : "Create Account"}</Button>

        {/* Toggle */}
        <div className="text-center mt-4">
          {formType === "Login" ? (
            <>
              Don’t have an account?{" "}
              <u
                onClick={() => setFormType("Signup")}
                className="cursor-pointer"
              >
                Click Here
              </u>{" "}
              to Signup.
            </>
          ) : (
            <>
              Already registered?{" "}
              <u
                onClick={() => setFormType("Login")}
                className="cursor-pointer"
              >
                Click Here
              </u>{" "}
              to Login.
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
