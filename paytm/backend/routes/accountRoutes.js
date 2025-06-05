const express = require('express')
const { authMiddleware } = require('../midddlewares/authMidddleware')
const { fetchBalance, transferMoney } = require('../controllers/accountController')

const AccountRouter = new express.Router()

AccountRouter.get('/balance',authMiddleware,fetchBalance)
AccountRouter.post('/transfer',authMiddleware,transferMoney)

module.exports = {
  AccountRouter
}