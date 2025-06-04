const express = require('express')

const UserRouter =  express.Router()

UserRouter.post('/signup')
UserRouter.post('/signin')

module.exports = {
  UserRouter
}