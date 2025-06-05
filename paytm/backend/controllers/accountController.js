//  fetch Balance 

const { success } = require("zod/v4")
const { Account } = require("../models/Account")

const fetchBalance = async (req,res,next) => {
  try {
    const userId = req.userId
    if (!userId) {
      return res.json({
         success:false,
        message:"Unauthorized"
      })
    }
    const account = await Account.findOne({userId})
    res.json({
      success:true,
      data:account.balance
    })
  } catch (error) {
    console.log(error)
    res.json({
      success:false,
      message:error.message
    })
  }
}

// Transer Money

const transferMoney = async (req,res,next) => {
      
}


module.exports = {
  fetchBalance,
  transferMoney
}