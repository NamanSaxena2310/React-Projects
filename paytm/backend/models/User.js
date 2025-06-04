const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minLength:3,
    maxLength:30
  },
  firstname:{
    type:String,
    required:true,
    trim:true,
    maxLength:50
  },
  lastname:{
    type:String,
    required:true,
    trim:true,
    maxLength:50
  },
  password:{
    type:String,
    required:true,
    minLength:6
  }


},{timestamps:true})


const User =  mongoose.model('User',UserSchema)

module.exports = User