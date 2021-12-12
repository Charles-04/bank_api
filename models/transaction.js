const mongoose = require('mongoose');
const {Customer}  = require('./customers.js');
var Transaction = mongoose.model("transaction", {
    Id: number|string,
  amount: Number,
  user_id: String,
  RefId: String|Number,
  type: credit|debit,
  Balance: Number,
  Remark: String,
  Createdat: String,
  Updatedat: String,
});
  console.log('here')
module.exports({ Transaction });
 