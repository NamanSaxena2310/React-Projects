const express = require("express");
const dotenv = require("dotenv")
const { Router } = require("./routes");
const cors = require("cors");
const { connectDB } = require("./db");
dotenv.config()

const app = new express()
connectDB()
app.use(cors())
app.use(express.json())



// Routes
app.use('/api/v1',Router)

app.listen(process.env.PORT,()=>{
  console.log("Server Running At",process.env.PORT)
})
