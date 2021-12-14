const express = require('express')
const app = express()
const Account = require('../models/account')
const new_account = async (req, res) => {
    const data = req.body
    try {
      const  new_account = await new Account({
            id: data.id,
            email: data.email,
        })
    } catch (error) {

    }
};
const deactivate_account = async (req, res) => {
    const active_account = await Account.findOne({ id: req.params.id })
    const status = res.body.active
    status = !status
}

