const express = require('express')
const { UserRouter } = require('./userRoutes')

const Router =  express.Router()

Router.use('/user',UserRouter)

module.exports = {
  Router
}