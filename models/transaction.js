const mongoose = require('mongoose');
const Schema = mongoose.Schema
 var Transaction = new Schema({
  amount: Number,
   user_id: {
     type: String,
     required:true,
  },
  ref_Id: String,
  type: String,
  balance: Number,
  remark: String,
 },
   {
     timestamps: {
       createdAt: "createdAt",
       updatedAt:"updatedAt"
    }
 }
 );
  console.log('here')
module.exports =  mongoose.model("transaction",Transaction);
 