const express = require('express')
const { signUp, signIn, updateUser } = require('../controllers/userController')
const { authMiddleware } = require('../midddlewares/authMidddleware')

const UserRouter =  express.Router()

UserRouter.post('/signup',signUp)
UserRouter.post('/signin',signIn)
UserRouter.put('/update',authMiddleware,updateUser)
module.exports = {
  UserRouter
}