const mongoose = require('mongoose');
const {Customer}  = require('./customers.js');
var Account = mongoose.model("account", {
  id: String,
  user_id : String,
  balance: Number,
  account_type: String,
  Created_at: Date,
  Updated_at: Date,
  amount: Number,
  number : Number
    
});
  console.log('here')
module.exports({ Account });
 