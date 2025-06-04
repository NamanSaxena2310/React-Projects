const express = require("express");
const dotenv = require("dotenv")
const { Router } = require("./routes");

dotenv.config()

const app = new express()

app.use(express.json())
app.use(express.urlencoded())


// Routes
app.use('/api/v1',Router)

app.listen(process.env.PORT,()=>{
  console.log("Server Running At",process.env.PORT)
})
