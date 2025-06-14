const mongoose = require('mongoose')
const dotenv = require('dotenv')



const connectDB  =  async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB Connected")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}


module.exports = {
  connectDB
}