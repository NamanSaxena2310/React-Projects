import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const baseUrl = import.meta.env.VITE_API_BASE_URL


const initialState =  {
    // Registrastion
   userRegister:{
      loading:false,
      userInfo:[],
      error:''
  },

  // Login
  userLogin:{
      loading:false,
      tokens:[],
      error:''
  }
  

}

// Register User
export const registerUser = createAsyncThunk('user/register',async (userData,{rejectWithValue})=>{
    try {
      const res = await axios.post(`${baseUrl}/users/`,userData)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error)
    }
})


export const loginUser = createAsyncThunk('user/login',async (userData,{rejectWithValue})=>{
    try {
      const res = await axios.post(`${baseUrl}/auth/login`,userData)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error)
    }
})


// Slice 

const authSlice = createSlice({
  name
})