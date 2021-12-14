const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Account = new Schema({
  user_id: {
    // type: mongoose.Schema.Types.ObjectId, ref: 'Account',
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  account_number: {
    type: Number,
    required: true
  },
  account_name: {
    type: String,
    required: false
  },
  active: Boolean,
},
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

module.exports = mongoose.model("accounts", Account);
