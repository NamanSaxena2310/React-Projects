//  fetch Balance 
const mongoose = require("mongoose");

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



const transferMoney = async (req, res, next) => {
  const session = await mongoose.startSession(); 

try {
  session.startTransaction(); 

  const { amount, to } = req.body;

  
  if (typeof amount !== 'number' || amount <= 0) {
    await session.abortTransaction();  
    return res.status(400).json({ success: false, message: "Invalid Amount" });
  }

 
  const sender = await Account.findOne({ userId: req.userId }).session(session);

  if (!sender || sender.balance < amount) {
    await session.abortTransaction(); 
    return res.status(400).json({ success: false, message: "Insufficient balance" });
  }

  
  const receiver = await Account.findOne({ userId: to }).session(session);

  if (!receiver) {
    await session.abortTransaction();
    return res.status(400).json({ success: false, message: "Receiver not found" });
  }

 
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);

  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  
  await session.commitTransaction();

  
  res.json({ success: true, message: "Transfer successful" });

} catch (error) {
  await session.abortTransaction();
  console.error(error);
  res.status(400).json({ success: false, message: error.message });

} finally {
  
  session.endSession();
}

};


module.exports = {
  fetchBalance,
  transferMoney
}