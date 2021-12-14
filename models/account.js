const mongoose = require('mongoose');
const Schema = mongoose.Schema
var Account = new Schema({
  user_id: {
    type: String,
    required:true
  },
  balance: {
    type: Number,
    required:true
  },
  account_number: Number,
  active: Boolean,
},
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

module.exports = mongoose.model("account",Account);
 