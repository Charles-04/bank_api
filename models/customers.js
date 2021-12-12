const mongoose = require('mongoose')
var Customer = mongoose.model("Customer", {
    first_name: String,
    last_name: String,
    id : Number,
    gender: String,
    verification_number : Number,
    date_of_birth: Date,
    national_id : Number,
    email: String,
    next_of_kin: String,
    home_address: String,
    active : Boolean,
    createdat: Date,
    updatedat: Date
  });

module.exports = { Customer };
  


 