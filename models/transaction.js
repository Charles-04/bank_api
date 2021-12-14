const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Transaction = new Schema({
  amount: Number,
   user_id: {
    //  type: mongoose.Schema.Types.ObjectId, ref: 'Account',
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
module.exports =  mongoose.model("transactions", Transaction);
 
