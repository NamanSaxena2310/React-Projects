const express = require('express')
const { UserRouter } = require('./userRoutes')
const { AccountRouter } = require('./accountRoutes')

const Router =  express.Router()

Router.use('/user',UserRouter)
Router.use('/account',AccountRouter)

module.exports = {
  Router
}