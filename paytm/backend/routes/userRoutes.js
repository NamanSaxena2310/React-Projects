const express = require('express')

const UserRouter =  express.Router()

UserRouter.get('/get-user')
UserRouter.post('/create-user')
UserRouter.post('/upate-user')

module.exports = {
  UserRouter
}