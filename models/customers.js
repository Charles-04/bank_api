const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Customer = new Schema({
  first_name: {
    type: String,
    required:true,
  },
  last_name:{
    type: String,
    required:true,
  },
  password:{
    type: String,
    required:true,
  },
  gender: {
    type: String,
    required:false,
  },
  email:{
    type: String,
    required:true,
  },
  active: {
    type: Boolean,
    required:false,
  },
},
{
    timestamps :{
    createdAt: "createdAt",
    updatedAt: "updatedAt" 
  }
});

module.exports = mongoose.model("customers",Customer)
  


 