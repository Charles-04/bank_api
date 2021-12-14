const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Customer} = require('../models/customers') 
const create_customer = async (req, res) => {
    let data = req.body
    let token = null
    try {
        const hashed_passsword = await bcrypt.hash(data.password, 10)
         data.password = hashed_passsword
      const customer = await new Customer({        
    first_name: data.first_name,
    last_name: data.last_name,
    password:data.password ,
    gender:data.gender,
    email:data.email
      })
      //  customer.save()
        const new_user = {}
        if (!new_user) {
            res.status(200).json({
                success: true,
                token,
                message : "User Successfully created"
           }) 
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            token,
            message: "User not created"+error
        })
    }
}
module.exports = {
    create_customer
}