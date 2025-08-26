import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const baseUrl = import.meta.env.VITE_API_BASE_URL


const initialState =  {
    // Registrastion
   userRegister:{
      loading:false,
      userInfo:null,
      error:''
  },

  // Login
  userLogin:{
      loading:false,
      tokens:null,
      error:null
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
      return rejectWithValue(error.response?.data || error.message)
    }
})


export const loginUser = createAsyncThunk('user/login',async (userData,{rejectWithValue})=>{
    try {
      const res = await axios.post(`${baseUrl}/auth/login`,userData)
      console.log(res.data)
      return res.data
    } catch (error) {
      
      console.log(error)
      return rejectWithValue(error.response?.data || error.message)
    }
})


// Slice 



const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{},
  extraReducers:(builder) =>{
    // Register User

    builder.addCase(registerUser.pending,(state,action)=>{
      state.userRegister.loading = true
    })

    builder.addCase(registerUser.fulfilled,(state,action)=>{
      state.userRegister.loading = false
      state.userRegister.userInfo = action.payload

    })

    builder.addCase(registerUser.rejected,(state,action)=>{
    state.userRegister.loading = false
    state.userRegister.error = action.payload
    })
    

    // Login User 
    builder.addCase(loginUser.pending,(state,action)=>{
      state.userLogin.loading = true
    })

    builder.addCase(loginUser.fulfilled,(state,action)=>{
      state.userLogin.loading = false
      state.userLogin.tokens = action.payload

    })

      builder.addCase(loginUser.rejected,(state,action)=>{
      state.userLogin.loading = false
      state.userLogin.error = action.payload
    })

  }
})




export default authSlice.reducer